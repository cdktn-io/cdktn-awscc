# `tools/lazify` — vendored `@aws-cdk/lazify`

A second vendoring root, separate from `tools/awscc2cdk/src/vendored/` (that tree is generator
*input* — the scope map, the spec2cdk sanitizers; this one is a *build tool* for the package, run
once, after `jsii`, over the compiled output).

`@aws-cdk/lazify` (`~/cdk/aws-cdk/tools/@aws-cdk/lazify`) is `"private": true` and is not published
to npm, so it is copied here rather than depended on. The copy is byte-verbatim except for a
prepended provenance header on the two `.ts` source files; adapting the tool for use outside the
aws-cdk monorepo is done entirely by adding `devDependencies` to `cdktn-awscc/package.json`
(`fs-extra`, `@types/fs-extra`) — the vendored files themselves are never edited beyond that header.

| vendored | origin | commit |
| --- | --- | --- |
| lib/index.ts | ~/cdk/aws-cdk/tools/@aws-cdk/lazify/lib/index.ts | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| bin/lazify.ts | ~/cdk/aws-cdk/tools/@aws-cdk/lazify/bin/lazify.ts | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| bin/lazify | ~/cdk/aws-cdk/tools/@aws-cdk/lazify/bin/lazify | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| README.md | ~/cdk/aws-cdk/tools/@aws-cdk/lazify/README.md | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| LICENSE | ~/cdk/aws-cdk/tools/@aws-cdk/lazify/LICENSE | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |

## Why only two files are "reachable"

Upstream's `package.json` lists `esbuild`, `fs-extra` and `yargs` as dependencies, but the two
files we actually run (`lib/index.ts`, `bin/lazify.ts`) only import `fs`/`path`/`typescript` and
`fs-extra` respectively — `yargs` and `esbuild` are used by other files in the upstream package
(CLI flag parsing, minification) that are not part of this vendored copy. So the only new
dependency `cdktn-awscc/package.json` needs is `fs-extra` (+ its `@types/fs-extra`), wired up as
the `lazify` script:

```
"lazify": "TS_NODE_COMPILER_OPTIONS='{\"module\":\"commonjs\",\"moduleResolution\":\"node\"}' ts-node --transpile-only tools/lazify/bin/lazify.ts"
```

## Gotcha: `ts-node` under a jsii-rewritten `tsconfig.json`

`jsii` rewrites the `tsconfig.json` of the package it compiles to `module: "NodeNext"`. Running
`ts-node` for `lazify` *inside* that staged package then fails with `TS5109` ("Option 'module' must
be set to 'Node16' when option 'moduleResolution' is set to 'Node16'" — NodeNext trips the same
check) unless the compiler options are overridden on the command line. The `lazify` script above,
and the iteration-4 test, both set
`TS_NODE_COMPILER_OPTIONS='{"module":"commonjs","moduleResolution":"node"}'` for that reason.

## `cdktn`'s `lazy-index.ts` — documented fallback only

The vendored cdk-terrain generator (`tools/awscc2cdk/src/vendored/cdktn/`) already emits a
`lazy-index.ts` per provider (iteration 1). That pattern only lazifies the top-level barrel
(`index.ts`); it does not touch `require()`s *inside* already-loaded modules, so it does not shrink
`require.cache` the way `lazify` does. It is kept as a fallback in case `lazify` cannot be made to
run over the whole compiled tree, but no code from it is wired into the build — `lazify` is what
runs. See CONTRACT.md, "Iteration 4 — vendored lazify".
