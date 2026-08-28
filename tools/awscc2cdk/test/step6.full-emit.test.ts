/**
 * Iteration 3, plan §5 step 6 (first half) — the whole provider is generated into the committed
 * `cdktn-awscc/generated/` tree. CONTRACT.md "Iteration 3 — full emission".
 *
 * The structural half runs in the default suite (it only reads the committed tree). The
 * regeneration / determinism / type-check half needs the full schema and is gated on RUN_FULL=1.
 *
 * This file is read-only for the implementer.
 */
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileBytes, fullSchema, listFiles, specDb, tmpDir, typeCheck } from "./helpers/emit";
import {
  AWSCC_FQPN,
  effectiveScopeMapPath,
  generateAllBinPath,
  generatedDir,
  gitattributesPath,
  manifestPath,
  outDir,
  packageExportsPath,
  packageRoot,
  toolRoot,
} from "./helpers/paths";

/** 1493 matched + awscc_datasync_storage_system, which is emitted from its awscc name */
const RESOURCE_FILES = 1494;
/** distinct module directories over the effective (auto-extended) scope map */
const MODULE_DIRS = 276;
const GENERATOR_FILES = ["index.ts", "MANIFEST.sha256", "scope-map.effective.json", "package.exports.json"];

const full = process.env.RUN_FULL === "1" ? describe : describe.skip;

const isShard = (f: string) => /-structs\d+\.ts$/.test(f);
const sha256 = (file: string) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");

let files: string[];
let modules: string[];

beforeAll(() => {
  files = listFiles(generatedDir).filter((f) => f !== ".gitkeep" && f !== ".gitattributes");
  modules = [...new Set(files.filter((f) => f.includes("/")).map((f) => f.split("/")[0]))].sort();
});

describe("the committed generated/ tree", () => {
  it(`holds ${RESOURCE_FILES} resource files`, () => {
    const resourceFiles = files.filter(
      (f) => f.includes("/") && f.endsWith(".ts") && !f.endsWith("/index.ts") && !isShard(f),
    );
    expect(resourceFiles.length).toBe(RESOURCE_FILES);
  });

  it(`holds ${MODULE_DIRS} module directories, each with index.ts and .jsiirc.json`, () => {
    expect(modules.length).toBe(MODULE_DIRS);
    for (const m of modules) {
      expect([m, files.includes(`${m}/index.ts`)]).toEqual([m, true]);
      expect([m, files.includes(`${m}/.jsiirc.json`)]).toEqual([m, true]);
    }
  });

  it("emits no module that has no resources", () => {
    // `core` shares AWS::CloudFormation with `aws-cloudformation`, which wins the tie; `interfaces`
    // has no namespace at all. Neither may become an empty directory.
    expect(modules).not.toContain("core");
    expect(modules).not.toContain("interfaces");
    for (const m of modules) {
      const resources = files.filter(
        (f) => f.startsWith(`${m}/`) && f.endsWith(".ts") && f !== `${m}/index.ts` && !isShard(f),
      );
      expect([m, resources.length > 0]).toEqual([m, true]);
    }
  });

  it("has a root barrel exporting every module under its snake_case symbol", () => {
    const src = fs.readFileSync(path.join(generatedDir, "index.ts"), "utf8");
    const lines = src.split(/\r?\n/).filter((l) => l.trim().startsWith("export"));
    const expected = modules.map((m) => `export * as ${m.replace(/-/g, "_")} from './${m}';`);
    expect(lines.map((l) => l.trim().replace(/"/g, "'"))).toEqual(expected);
  });

  it("has a module barrel that exports every resource file and no shard", () => {
    for (const m of modules) {
      const src = fs.readFileSync(path.join(generatedDir, m, "index.ts"), "utf8");
      const exported = [...src.matchAll(/export \* from ['"]\.\/([^'"]+)['"]/g)].map((x) => x[1]).sort();
      const onDisk = files
        .filter((f) => f.startsWith(`${m}/`) && f.endsWith(".ts") && f !== `${m}/index.ts` && !isShard(f))
        .map((f) => f.slice(m.length + 1).replace(/\.ts$/, ""))
        .sort();
      expect([m, exported]).toEqual([m, onDisk]);
    }
  });

  it("emits the awscc resource the CFN spec does not know under its awscc-derived name", () => {
    // awscc_datasync_storage_system: no AWS::DataSync::StorageSystem in the pinned spec.
    expect(files).toContain("aws-datasync/storage-system.ts");
    const src = fs.readFileSync(path.join(generatedDir, "aws-datasync", "storage-system.ts"), "utf8");
    expect(src).toMatch(/export class CcStorageSystem\b/);
    expect(src).toMatch(/export interface CcStorageSystemProps\b/);
  });

  it("writes the generator-owned root files", () => {
    for (const f of GENERATOR_FILES) expect(files).toContain(f);
    expect(fs.existsSync(effectiveScopeMapPath)).toBe(true);
    expect(fs.existsSync(generateAllBinPath)).toBe(true);
  });

  it("is marked linguist-generated", () => {
    expect(fs.existsSync(gitattributesPath)).toBe(true);
    expect(fs.readFileSync(gitattributesPath, "utf8")).toMatch(/linguist-generated(=true)?/);
  });

  it("has a package.exports.json with the root plus one entry per module", () => {
    const exports = JSON.parse(fs.readFileSync(packageExportsPath, "utf8"));
    expect(Object.keys(exports).sort()).toEqual([".", ...modules.map((m) => `./${m}`)].sort());
    // Iteration 3b, finding 3: the exports map lives in a package.json one level *above*
    // `generated/`, so every target is prefixed with `./generated/`.
    expect(exports["."]).toEqual({ types: "./generated/index.d.ts", default: "./generated/index.js" });
    expect(exports["./aws-ec2"]).toEqual({
      types: "./generated/aws-ec2/index.d.ts",
      default: "./generated/aws-ec2/index.js",
    });
    for (const [key, value] of Object.entries(exports as Record<string, any>)) {
      expect([key, value.types.startsWith("./generated/")]).toEqual([key, true]);
      expect([key, value.default.startsWith("./generated/")]).toEqual([key, true]);
      // every target resolves to a file we actually emitted (checked against the .ts source)
      const src = path.join(packageRoot, value.default.replace(/^\.\/generated\//, "generated/")).replace(/\.js$/, ".ts");
      expect([key, fs.existsSync(src)]).toEqual([key, true]);
    }
  });
});

describe("MANIFEST.sha256", () => {
  let manifest: Map<string, string>;

  beforeAll(() => {
    manifest = new Map(
      fs
        .readFileSync(manifestPath, "utf8")
        .split(/\r?\n/)
        .filter((l) => l.trim().length > 0)
        .map((l) => {
          const m = /^([0-9a-f]{64})\s+(.+)$/.exec(l);
          expect([l, m !== null]).toEqual([l, true]);
          return [m![2], m![1]] as [string, string];
        }),
    );
  });

  it("covers every emitted file exactly once, sorted", () => {
    const listed = [...manifest.keys()];
    expect(listed).toEqual([...listed].sort());
    expect(listed.sort()).toEqual(files.filter((f) => f !== "MANIFEST.sha256").sort());
  });

  it("has the right hash for every file", () => {
    for (const [rel, hash] of manifest) {
      expect([rel, sha256(path.join(generatedDir, rel))]).toEqual([rel, hash]);
    }
  }, 300000);
});

describe("sharding (plan §5 step 5)", () => {
  it("uses the alias form when a resource is sharded, or does not shard at all", () => {
    // Measured while writing this contract: TypeScript does NOT merge `export namespace X` across
    // module files re-exported through a barrel (TS2308 on the barrel, TS2724 at the use site), so
    // "re-open the namespace block in each shard" is not a legal shape. If shards exist they must
    // use the alias form: the shard file exports the types at top level, the primary file imports
    // it and re-exports them *inside* the namespace with `export import`, and the module barrel
    // never exports the shard.
    const shards = files.filter(isShard);
    for (const shard of shards) {
      const [moduleDir, file] = [shard.split("/")[0], shard.split("/")[1]];
      const primary = `${moduleDir}/${file.replace(/-structs\d+\.ts$/, ".ts")}`;
      expect([shard, files.includes(primary)]).toEqual([shard, true]);

      const barrel = fs.readFileSync(path.join(generatedDir, moduleDir, "index.ts"), "utf8");
      expect([shard, barrel.includes(file.replace(/\.ts$/, ""))]).toEqual([shard, false]);

      const shardSrc = fs.readFileSync(path.join(generatedDir, shard), "utf8");
      const primarySrc = fs.readFileSync(path.join(generatedDir, primary), "utf8");
      expect([shard, shardSrc.includes("export namespace ")]).toEqual([shard, false]);
      expect(primarySrc).toContain(`./${file.replace(/\.ts$/, "")}`);
      for (const m of shardSrc.matchAll(/^export (?:interface|class|abstract class) ([A-Za-z0-9_]+)/gm)) {
        expect([shard, m[1], new RegExp(`export import ${m[1]}\\s*=`).test(primarySrc)]).toEqual([
          shard,
          m[1],
          true,
        ]);
      }
    }
  });
});

full("regeneration (RUN_FULL=1)", () => {
  let dir: string;

  beforeAll(async () => {
    const mod = await import(path.join(toolRoot, "src", "grouped-generate"));
    dir = tmpDir("awscc2cdk-full-");
    const result = await mod.generateGroupedWithStats(fullSchema(), specDb(), dir, {
      fqpn: AWSCC_FQPN,
      manifest: true,
    });
    expect(result.files).toEqual(listFiles(dir));
    expect(result.stats.resources).toBe(RESOURCE_FILES);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "full-emit-stats.json"), JSON.stringify(result.stats, null, 2) + "\n");
  }, 3600000);

  afterAll(() => {
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  });

  it("reproduces the committed tree byte for byte", () => {
    const fresh = fileBytes(dir);
    const committed = fileBytes(generatedDir);
    delete (committed as any)[".gitkeep"];
    delete (committed as any)[".gitattributes"];
    expect(Object.keys(fresh).sort()).toEqual(Object.keys(committed).sort());
    for (const f of Object.keys(fresh)) {
      expect([f, fresh[f] === committed[f]]).toEqual([f, true]);
    }
  }, 600000);

  it("type-checks with tsc --noEmit", () => {
    const result = typeCheck(generatedDir);
    expect(result.diagnostics).toEqual([]);
    expect(result.ok).toBe(true);
  }, 3600000);
});
