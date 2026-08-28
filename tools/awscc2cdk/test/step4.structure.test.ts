/**
 * Contract, plan §5 step 4: grouped emission over the mini fixture — layout, naming grammar,
 * nested `namespace` merging, `.jsiirc.json`, root barrel, type-checkability, determinism.
 * See CONTRACT.md "Iteration 2".
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  fileBytes,
  listFiles,
  loadGenerateGrouped,
  miniSchema,
  reversedResourceOrder,
  specDb,
  tmpDir,
  typeCheck,
  type GenerateGrouped,
} from "./helpers/emit";
import { excludedResources } from "./helpers/exclusions";
import {
  findClass,
  findInterface,
  findNamespace,
  heritage,
  namespaceMembers,
  parseFile,
  starAsExports,
  starExports,
  topLevelExports,
} from "./helpers/emitted-shape";
import { AWSCC_FQPN } from "./helpers/paths";

/** awscc resource -> [module dir, class name, primary file basename] (plan §3, iteration-1 cfn map) */
const EXPECTED: Record<string, [string, string, string]> = {
  awscc_accessanalyzer_analyzer: ["aws-accessanalyzer", "CcAnalyzer", "analyzer"],
  awscc_apigateway_resource: ["aws-apigateway", "CcResource", "resource"],
  awscc_cloudformation_stack: ["aws-cloudformation", "CcStack", "stack"],
  awscc_ec2_subnet: ["aws-ec2", "CcSubnet", "subnet"],
  awscc_ec2_vpc: ["aws-ec2", "CcVPC", "vpc"],
  awscc_iotwireless_device_profile: ["aws-iotwireless", "CcDeviceProfile", "device-profile"],
  awscc_kinesisanalyticsv2_application: ["aws-kinesisanalytics", "CcApplicationV2", "application-v2"],
  awscc_kinesisfirehose_delivery_stream: ["aws-kinesisfirehose", "CcDeliveryStream", "delivery-stream"],
  awscc_lambda_function: ["aws-lambda", "CcFunction", "function"],
  awscc_lex_bot: ["aws-lex", "CcBot", "bot"],
  awscc_s3_bucket: ["aws-s3", "CcBucket", "bucket"],
};

const GRAMMAR = {
  resourceClass: /^Cc[A-Z][A-Za-z0-9]*$/,
  propsInterface: /^Cc[A-Z][A-Za-z0-9]*Props$/,
  nestedType: /^[A-Z][A-Za-z0-9]*(Property|PropertyOutputReference|PropertyList|PropertyMap)$/,
  mapperFunction: /^[a-z][A-Za-z0-9]*To(Hcl)?Terraform$/,
};

let generateGrouped: GenerateGrouped;
let out: string;
let emitted: string[];
let included: string[];
let modules: string[];

const rel = (...p: string[]) => path.join(out, ...p);
const sf = (...p: string[]) => parseFile(rel(...p));

beforeAll(async () => {
  generateGrouped = await loadGenerateGrouped();
  const skip = new Set(excludedResources());
  included = Object.keys(EXPECTED).filter((r) => !skip.has(r));
  modules = [...new Set(included.map((r) => EXPECTED[r][0]))].sort();

  out = tmpDir("awscc2cdk-step4-");
  emitted = await generateGrouped(miniSchema(), specDb(), out, { fqpn: AWSCC_FQPN, resources: included });
}, 600000);

afterAll(() => {
  if (out) fs.rmSync(out, { recursive: true, force: true });
});

describe("layout", () => {
  it("returns exactly the files it wrote, sorted, POSIX, relative", () => {
    expect(emitted).toEqual([...emitted].sort());
    expect(emitted).toEqual(listFiles(out));
    expect(emitted.every((f) => !f.startsWith("/") && !f.includes("\\"))).toBe(true);
  });

  it("emits one directory per module, with index.ts and .jsiirc.json", () => {
    const dirs = fs.readdirSync(out, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
    expect(dirs).toEqual(modules);
    for (const m of modules) {
      expect(emitted).toContain(`${m}/index.ts`);
      expect(emitted).toContain(`${m}/.jsiirc.json`);
    }
    expect(emitted).toContain("index.ts");
  });

  it("emits one primary file per resource, plus only struct shards beside it", () => {
    for (const r of included) {
      const [mod, , file] = EXPECTED[r];
      expect(emitted).toContain(`${mod}/${file}.ts`);
    }
    const primaries = new Set(included.map((r) => `${EXPECTED[r][2]}.ts`));
    for (const m of modules) {
      for (const f of fs.readdirSync(rel(m))) {
        if (f === "index.ts" || f === ".jsiirc.json" || primaries.has(f)) continue;
        const shard = /^(.+?)-structs\d+\.ts$/.exec(f);
        expect([`${m}/${f}`, !!shard && primaries.has(`${shard[1]}.ts`)]).toEqual([`${m}/${f}`, true]);
      }
    }
  });

  it("re-exports every resource file from its module index", () => {
    for (const m of modules) {
      const specifiers = starExports(sf(m, "index.ts")).map((s) => s.replace(/\.js$/, ""));
      for (const r of included.filter((x) => EXPECTED[x][0] === m)) {
        expect([m, specifiers]).toEqual([m, expect.arrayContaining([`./${EXPECTED[r][2]}`])]);
      }
    }
  });

  it("re-exports every module from the root index as a snake_case submodule", () => {
    const exports = starAsExports(sf("index.ts"));
    expect(exports.map((e) => e.symbol).sort()).toEqual(modules.map((m) => m.replace(/-/g, "_")).sort());
    for (const e of exports) {
      expect(e.from.replace(/\.js$/, "")).toBe(`./${e.symbol.replace(/_/g, "-")}`);
    }
  });
});

describe(".jsiirc.json", () => {
  it("is exactly the aws-ec2 target block of plan §10", () => {
    expect(JSON.parse(fs.readFileSync(rel("aws-ec2", ".jsiirc.json"), "utf8"))).toEqual({
      targets: {
        python: { module: "cdktn_awscc.aws_ec2" },
        dotnet: { namespace: "Io.Cdktn.AwsCc.EC2" },
        java: { package: "io.cdktn.awscc.services.ec2" },
      },
    });
  });

  it("follows the same pattern in every module", () => {
    for (const m of modules) {
      const j = JSON.parse(fs.readFileSync(rel(m, ".jsiirc.json"), "utf8"));
      expect([m, Object.keys(j)]).toEqual([m, ["targets"]]);
      expect([m, Object.keys(j.targets).sort()]).toEqual([m, ["dotnet", "java", "python"]]);
      expect([m, j.targets.python.module]).toEqual([m, `cdktn_awscc.${m.replace(/-/g, "_")}`]);
      expect([m, j.targets.java.package.startsWith("io.cdktn.awscc.services.")]).toEqual([m, true]);
      expect([m, j.targets.dotnet.namespace.startsWith("Io.Cdktn.AwsCc.")]).toEqual([m, true]);
    }
  });
});

describe("ec2_vpc", () => {
  it("declares `export class CcVPC extends cdktn.TerraformResource`", () => {
    const cls = findClass(sf("aws-ec2", "vpc.ts"), "CcVPC");
    expect(cls).toBeDefined();
    expect(heritage(cls!)).toEqual(["cdktn.TerraformResource"]);
  });

  it("declares `export interface CcVPCProps extends cdktn.TerraformMetaArguments`", () => {
    const iface = findInterface(sf("aws-ec2", "vpc.ts"), "CcVPCProps");
    expect(iface).toBeDefined();
    expect(heritage(iface!)).toEqual(["cdktn.TerraformMetaArguments"]);
  });

  it("merges a `namespace CcVPC` with the class, in the same file", () => {
    const ns = findNamespace(sf("aws-ec2", "vpc.ts"), "CcVPC");
    expect(ns).toBeDefined();
    const members = namespaceMembers(ns!);
    expect(members.length).toBeGreaterThan(0);
    for (const m of members) expect([m.name, GRAMMAR.nestedType.test(m.name)]).toEqual([m.name, true]);
    // the recovered CFN definition name, not the terraform leaf (plan §3)
    expect(members.map((m) => m.name)).toEqual(
      expect.arrayContaining(["VpcEncryptionControlProperty", "VpcEncryptionControlPropertyOutputReference"]),
    );
  });
});

describe("naming grammar over every emitted module", () => {
  it("exports nothing outside the grammar", () => {
    for (const m of modules) {
      for (const f of fs.readdirSync(rel(m)).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
        const file = parseFile(rel(m, f));
        for (const e of topLevelExports(file)) {
          const where = `${m}/${f}:${e.name}`;
          const ok =
            (e.kind === "class" && GRAMMAR.resourceClass.test(e.name) && !e.name.endsWith("Props")) ||
            (e.kind === "interface" && GRAMMAR.propsInterface.test(e.name)) ||
            (e.kind === "namespace" && GRAMMAR.resourceClass.test(e.name)) ||
            (e.kind === "function" && GRAMMAR.mapperFunction.test(e.name));
          expect([where, ok]).toEqual([where, true]);
        }
      }
    }
  });

  it("names every resource class and props interface as the contract says", () => {
    for (const r of included) {
      const [mod, cls, file] = EXPECTED[r];
      const parsed = sf(mod, `${file}.ts`);
      expect([r, !!findClass(parsed, cls)]).toEqual([r, true]);
      expect([r, !!findInterface(parsed, `${cls}Props`)]).toEqual([r, true]);
      expect([r, !!findNamespace(parsed, cls)]).toEqual([r, true]);
    }
  });

  it("keeps the merged kinesisanalytics scope suffixed", () => {
    if (!included.includes("awscc_kinesisanalyticsv2_application")) return;
    // awscc 1.98.0 has no KinesisAnalytics v1 resource, so CcApplication cannot exist here
    // (documented in CONTRACT.md); the V2 suffix from the scope map is what is under test.
    const parsed = sf("aws-kinesisanalytics", "application-v2.ts");
    expect(findClass(parsed, "CcApplicationV2")).toBeDefined();
    expect(findClass(parsed, "CcApplication")).toBeUndefined();
  });
});

describe("selection options", () => {
  it("modules: ['aws-ec2'] emits only that module", async () => {
    const dir = tmpDir("awscc2cdk-step4-mod-");
    try {
      const files = await generateGrouped(miniSchema(), specDb(), dir, { fqpn: AWSCC_FQPN, modules: ["aws-ec2"] });
      expect(files.filter((f) => f.includes("/")).every((f) => f.startsWith("aws-ec2/"))).toBe(true);
      expect(files).toEqual(expect.arrayContaining(["aws-ec2/vpc.ts", "aws-ec2/subnet.ts", "index.ts"]));
      expect(starAsExports(parseFile(path.join(dir, "index.ts"))).map((e) => e.symbol)).toEqual(["aws_ec2"]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }, 600000);

  it("resources: ['awscc_ec2_vpc'] emits only that resource", async () => {
    const dir = tmpDir("awscc2cdk-step4-res-");
    try {
      const files = await generateGrouped(miniSchema(), specDb(), dir, {
        fqpn: AWSCC_FQPN,
        resources: ["awscc_ec2_vpc"],
      });
      expect(files.sort()).toEqual(["aws-ec2/.jsiirc.json", "aws-ec2/index.ts", "aws-ec2/vpc.ts", "index.ts"]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }, 600000);
});

describe("type checking", () => {
  it("passes tsc --noEmit over the emitted mini package", () => {
    const result = typeCheck(out);
    expect(result.diagnostics).toEqual([]);
    expect(result.ok).toBe(true);
  }, 600000);
});

describe("determinism", () => {
  it("emits identical bytes with the schema's resource keys reversed", async () => {
    const dir = tmpDir("awscc2cdk-step4-rev-");
    try {
      const files = await generateGrouped(reversedResourceOrder(miniSchema()), specDb(), dir, {
        fqpn: AWSCC_FQPN,
        resources: [...included].reverse(),
      });
      expect(files).toEqual(emitted);
      expect(fileBytes(dir)).toEqual(fileBytes(out));
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }, 600000);
});
