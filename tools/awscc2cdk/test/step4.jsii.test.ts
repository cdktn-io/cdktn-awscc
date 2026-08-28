/**
 * Contract, plan §7 layer 5: the jsii oracle. jsii itself — not a hand-written list — decides what
 * "breaks jsii" means (reserved words per language, nested-type rules, member/type clashes).
 *
 * Skipped unless RUN_JSII=1 (and the pacmak half unless RUN_PACMAK=1 as well), because it needs a
 * real compile of the emitted mini package. It never runs over the full schema.
 *
 *   RUN_JSII=1 pnpm test -- step4.jsii
 *   RUN_JSII=1 RUN_PACMAK=1 pnpm test -- step4.jsii
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { listFiles, loadGenerateGrouped, miniSchema, runBin, specDb, tmpDir } from "./helpers/emit";
import { readExclusions } from "./helpers/exclusions";
import { AWSCC_FQPN, packageRoot } from "./helpers/paths";

/** installed versions, so the fixture manifest cannot drift from what jsii will actually resolve */
const version = (m: string): string =>
  JSON.parse(fs.readFileSync(path.join(packageRoot, "node_modules", m, "package.json"), "utf8")).version;

/** the jsii manifest of plan §10, written by the contract so the implementer cannot soften it */
const packageJson = () => ({
  name: "@cdktn/awscc",
  version: "0.0.0",
  description: "awscc bindings in the aws-cdk-lib L1 shape (contract fixture build)",
  license: "Apache-2.0",
  author: { name: "cdktn", url: "https://github.com/cdktn-io", organization: true },
  repository: { type: "git", url: "https://github.com/cdktn-io/cdktn-awscc.git" },
  main: "index.js",
  types: "index.d.ts",
  stability: "experimental",
  peerDependencies: { cdktn: `^${version("cdktn")}`, constructs: `^${version("constructs")}` },
  devDependencies: { cdktn: version("cdktn"), constructs: version("constructs") },
  jsii: {
    outdir: "dist",
    versionFormat: "short",
    targets: {
      python: { distName: "cdktn-awscc", module: "cdktn_awscc" },
      java: { package: "io.cdktn.awscc", maven: { groupId: "io.cdktn", artifactId: "cdktn-awscc" } },
      dotnet: { namespace: "Io.Cdktn.AwsCc", packageId: "Io.Cdktn.AwsCc" },
      go: { moduleName: "github.com/cdktn-io/cdktn-awscc-go" },
    },
  },
});

const jsiiSuite = process.env.RUN_JSII === "1" ? describe : describe.skip;
const pacmakIt = process.env.RUN_JSII === "1" && process.env.RUN_PACMAK === "1" ? it : it.skip;

let pkgDir: string;

jsiiSuite("jsii oracle (RUN_JSII=1)", () => {
  beforeAll(async () => {
    for (const e of readExclusions()) {
      console.log(`[jsii oracle] not compiled: ${e.resource} — ${e.reason}`);
    }
    const generateGrouped = await loadGenerateGrouped();
    pkgDir = tmpDir("awscc2cdk-jsii-");
    const skip = new Set(readExclusions().map((e) => e.resource));
    const resources = Object.keys(
      miniSchema().provider_schemas[AWSCC_FQPN].resource_schemas,
    ).filter((r: string) => !skip.has(r));
    await generateGrouped(miniSchema(), specDb(), pkgDir, { fqpn: AWSCC_FQPN, resources });

    fs.writeFileSync(path.join(pkgDir, "package.json"), JSON.stringify(packageJson(), null, 2) + "\n");
    fs.writeFileSync(path.join(pkgDir, "README.md"), "# @cdktn/awscc (contract fixture build)\n");
    fs.symlinkSync(path.join(packageRoot, "node_modules"), path.join(pkgDir, "node_modules"), "dir");
  }, 900000);

  afterAll(() => {
    if (pkgDir) fs.rmSync(pkgDir, { recursive: true, force: true });
  });

  it("compiles the emitted mini package with jsii", () => {
    const { code, output } = runBin("jsii", ["--project-references=false"], pkgDir);
    if (code !== 0) console.log(output.slice(-8000));
    expect(code).toBe(0);
    expect(fs.existsSync(path.join(pkgDir, ".jsii"))).toBe(true);
    const assembly = JSON.parse(fs.readFileSync(path.join(pkgDir, ".jsii"), "utf8"));
    expect(Object.keys(assembly.submodules ?? {})).toEqual(
      expect.arrayContaining(["@cdktn/awscc.aws_ec2"]),
    );
    expect(Object.keys(assembly.types ?? {}).some((t) => t.endsWith(".CcVPC"))).toBe(true);
  }, 900000);

  pacmakIt("packs python with jsii-pacmak", () => {
    // --code-only: the cross-language *names* are what layer 5 verifies; building the wheel needs a
    // python toolchain pacmak provisions itself and is not part of the contract.
    const { code, output } = runBin("jsii-pacmak", ["--targets", "python", "--code-only"], pkgDir);
    if (code !== 0) console.log(output.slice(-8000));
    expect(code).toBe(0);
    const initPy = listFiles(path.join(pkgDir, "dist")).find((f) =>
      f.endsWith("cdktn_awscc/aws_ec2/__init__.py"),
    );
    expect(initPy).toBeDefined();
  }, 1800000);
});
