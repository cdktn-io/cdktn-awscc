/**
 * Repository hygiene: no tracked file may contain a NUL (0x00) byte.
 * See CONTRACT.md "Post-freeze — no tracked file may be git-binary (2026-08-31)".
 *
 * `tools/awscc2cdk/src/grouped/cfn-attribute-map.ts` once shipped with two literal NUL bytes
 * inside string literals (corrupted in de92a2b, fixed in 87d1330). git's binary heuristic — a NUL
 * anywhere in the first 8000 bytes — then classified the branch's primary new implementation file
 * as binary, so `git diff --numstat` reported `- -` for it and no diff was reviewable. It survived
 * two review passes because a NUL renders invisibly in essentially every viewer; only git noticed,
 * and nothing looked at what git noticed.
 *
 * This gate is that missing check. It is deliberately stricter than git: it scans every byte of
 * every tracked file, not just the first 8000, so a NUL that lands past git's window (invisible to
 * review *and* to the binary heuristic) is caught too.
 *
 * The repo tracks no binary-by-design assets — no images, archives or fonts, only `.ts`/`.json`/
 * `.md`/`.yml`/`.html`/`.py`/`.js` sources plus a handful of extensionless text files (LICENSE,
 * NOTICE, .nvmrc, schemas/PROVIDER_VERSION, tools/lazify/bin/lazify) — so there is no allowlist
 * and no extension filter: everything `git ls-files` reports is checked. Adding a genuinely binary
 * asset is what should trip this and prompt an explicit exemption here.
 *
 * Cost: ~2,175 files / ~78 MB (almost all of it the committed `generated/` tree), read once. Well
 * under a second, so it stays in the plain `pnpm test` fast suite alongside the licensing and
 * structure gates — no jsii run, no schema load.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { packageRoot } from "./helpers/paths";

/** every path git tracks, relative to the repo root (`packageRoot`) */
function trackedFiles(): string[] {
  const out = execFileSync("git", ["ls-files", "-z"], {
    cwd: packageRoot,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return out.split("\0").filter((p) => p.length > 0);
}

describe("tracked sources — no file may be git-binary", () => {
  const files = trackedFiles();

  it("has a tracked tree to check", () => {
    // sanity: if `git ls-files` ever returns nothing (wrong cwd, no git), this test would
    // otherwise pass vacuously while checking zero files.
    expect(files.length).toBeGreaterThan(1000);
    expect(files).toContain("tools/awscc2cdk/src/grouped/cfn-attribute-map.ts");
  });

  it("contains no NUL (0x00) byte in any tracked file", () => {
    const offenders: string[] = [];
    for (const rel of files) {
      const abs = path.join(packageRoot, rel);
      // a tracked path can be absent from the worktree only mid-conflict/mid-checkout; skip
      // rather than fail with a misleading ENOENT.
      if (!fs.existsSync(abs)) continue;
      const buf = fs.readFileSync(abs);
      const at = buf.indexOf(0);
      if (at !== -1) offenders.push(`${rel} (first NUL at byte ${at} of ${buf.length})`);
    }
    // Non-empty means git classifies these as binary: `git diff` shows "Binary files differ"
    // instead of a reviewable diff, `git diff --numstat` reports `- -`, and the byte itself is
    // invisible in review. Find it with `grep -naP '\x00'` and delete it — do not add an
    // exemption unless the file is genuinely a binary asset.
    expect(offenders).toEqual([]);
  });
});
