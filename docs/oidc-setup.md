# OIDC / publishing setup for `@cdktn/awscc`

Manual, one-time steps a maintainer runs before `release.yml` can publish for real. Everything in
`.github/workflows/release.yml` assumes these are already done; none of it can do them itself
(placeholder publishes, registering a trusted publisher, and secret values all require a human
with the right account access).

Cross-reference: the companion `cdktn-repository-manager` PR wires the GitHub Actions secrets this
doc's steps (c) and (d) read (`MAVEN_USERNAME`, `MAVEN_PASSWORD`, `MAVEN_GPG_PRIVATE_KEY`,
`MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`, `NUGET_API_KEY`, `GO_GITHUB_TOKEN`) onto `cdktn-io/cdktn-awscc`
— the exact same secret names every other `cdktn-provider-*` repo already gets from
`lib/secrets.ts`'s `PublishingSecretSet`. Nothing below needs a *new* secret name invented; steps
(a)/(b) are OIDC trusted-publisher registrations with no secret at all.

## (a) npm — placeholder publish, then register Trusted Publishing

npm has no "pending publisher" concept (unlike PyPI): a package must exist on the registry before
its Trusted Publisher can be configured, and npm trusted publishing is the fleet's hardcoded
mechanism (no `NPM_TOKEN` in `release.yml`'s `release_npm` job — see the memory note this PR's
COMMON CONTEXT carries). So a one-time manual placeholder publish comes first.

1. **Build a real placeholder tarball**, not a hand-written stub — `pnpm package` already produces
   exactly what `release.yml` will publish later, just at version `0.0.0`:

   ```bash
   cd cdktn-awscc
   pnpm install
   PACKAGE_VERSION=0.0.0 PACMAK_TARGETS=js NODE_OPTIONS=--max-old-space-size=16384 pnpm package
   ls dist/js/*.tgz
   ```

   Using the real pipeline (not a stub) means the placeholder already proves `jsii` + `lazify` run
   clean end to end, and its `package.json` already has the right `name`, `exports`, `main`/`types`
   — nothing to redo when the real `v0.1.0` release runs the same script.

2. **Log in as the npm org publisher** (whichever account/automation user holds publish rights on
   the `@cdktn` org) and publish the placeholder:

   ```bash
   npm login   # as the @cdktn org publisher
   npm publish dist/js/*.tgz --access public
   ```

   This is the only manual `npm publish` this package should ever need — every release after this
   goes through `release.yml`'s OIDC-based `npm publish --provenance`.

3. On [npmjs.com](https://www.npmjs.com/), go to the **`@cdktn/awscc`** package → **Settings** →
   **Trusted Publisher** → **GitHub Actions**, and fill in:

   | Field | Value |
   | --- | --- |
   | Organization or user | `cdktn-io` |
   | Repository | `cdktn-awscc` |
   | Workflow filename | `release.yml` |
   | Environment name | *(leave blank — `release_npm` does not use a GitHub environment)* |

4. Once the trusted publisher is saved, **disable classic publish access** for this package (2FA
   automation tokens, if any were issued for it) so `npm publish` only succeeds from the registered
   workflow's OIDC identity — the whole point of switching to trusted publishing.

5. Sanity-check before the first real tag: `npm view @cdktn/awscc` should show `0.0.0` and the
   Trusted Publisher panel on npmjs.com should show `cdktn-io/cdktn-awscc` / `release.yml`.

## (b) PyPI — pending publisher

PyPI, unlike npm, supports registering a trusted publisher for a project **before it exists**
("pending publisher"), so there is no placeholder-publish step here.

1. Go to <https://pypi.org/manage/account/publishing/> (while logged in as an account that has, or
   will have, ownership of the `cdktn-awscc` project) and add a **pending publisher**:

   | Field | Value |
   | --- | --- |
   | PyPI Project Name | `cdktn-awscc` |
   | Owner | `cdktn-io` |
   | Repository name | `cdktn-awscc` |
   | Workflow name | `release.yml` |
   | Environment name | `pypi` |

2. **Create the `pypi` GitHub Actions environment** on `cdktn-io/cdktn-awscc` (repo **Settings** →
   **Environments** → **New environment**, name it exactly `pypi`) — `release.yml`'s
   `release_pypi` job runs under `environment: pypi`, and PyPI's OIDC claim check matches on that
   environment name, so a typo or a missing environment here is a silent, hard-to-diagnose publish
   failure at release time, not a setup-time error.

3. First `release.yml` run with `release_pypi` publishing converts PyPI's "pending" publisher into
   a confirmed one and creates the actual `cdktn-awscc` PyPI project at the same time — no separate
   "activate" step.

## (c) Maven Central and NuGet — secrets

Both are secret-based (`MAVEN_*` / `NUGET_API_KEY`), not OIDC — provisioned by the
`cdktn-repository-manager` PR, not by this one. This repo's `release.yml` only needs to know their
names, already listed above and already used verbatim by `release_maven` / `release_nuget`.

* **Where the values come from**: the same Maven Central (Sonatype Central Publisher) account and
  NuGet API key every other `cdktn-provider-*` release already publishes through — `MAVEN_USERNAME`
  / `MAVEN_PASSWORD` are the Central Publisher user-token pair (`MAVEN_SERVER_ID=central-ossrh` in
  `release.yml`, matching the "Starting July 2025 …" migration note in `publib`'s own README), and
  `MAVEN_GPG_PRIVATE_KEY` / `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE` are the GPG key those releases sign
  artifacts with (see `publib`'s README, "How to create a GPG key", if a fresh key is ever needed —
  it isn't, for a repo joining the existing fleet). `NUGET_API_KEY` is a nuget.org API key with
  "Push" permission on the `Io.Cdktn.AwsCc` package ID.
* **What this repo needs from the maintainer**: nothing beyond what the repository-manager PR
  already wires — no new Maven groupId/NuGet package registration step, since `io.cdktn` / `Io.Cdktn`
  are namespaces the fleet already owns and publishes under.
* Group/artifact/package identifiers are already correct in
  `tools/awscc2cdk/jsii/package.json`'s `jsii.targets` (`io.cdktn:cdktn-awscc`, `Io.Cdktn.AwsCc`) —
  nothing to change there for these two targets to work.

## (d) Go — the `-go` repository

`release.yml`'s `release_go` job runs `publib-golang`, which pushes `dist/go` (the jsii-pacmak Go
target, module `github.com/cdktn-io/cdktn-awscc-go`) as commits to a real git remote it derives
from that module path — i.e. it needs `github.com/cdktn-io/cdktn-awscc-go` to already exist as a
repository, and a token with push access to it.

1. **Create `cdktn-io/cdktn-awscc-go`** (empty is fine — the same way every `cdktn-provider-*-go`
   companion repo exists) via the `cdktn-repository-manager` PR, which is also what wires the
   `gh-token` secret (aliased `GO_GITHUB_TOKEN`) this workflow reads as `GITHUB_TOKEN` — the exact
   same secret every provider's Go publish step already uses, so no separate token to mint.
2. Nothing else: `publib-golang` handles the clone/commit/tag/push itself, tagging
   `v${VERSION}` on that repo to match the tag on `cdktn-awscc` (`release.yml` passes
   `VERSION: ${{ needs.build.outputs.version }}` explicitly, so it doesn't depend on a `version`
   file jsii-pacmak may or may not have written per module).

## (e) First release checklist

Once (a)-(d) are done:

1. `git tag v0.1.0 && git push origin v0.1.0` (or run `release.yml` via **workflow_dispatch** with
   `version: 0.1.0` first, with `dry_run: true`, to watch the build/package job without publishing
   anything).
2. Watch the `release` workflow run in the Actions tab — `build` packages all five targets; the six
   publish jobs run in parallel once it finishes.
3. **npm**: `npm view @cdktn/awscc version` should show `0.1.0`; the package page on npmjs.com
   should show a **provenance** badge (npm verified this build came from
   `cdktn-io/cdktn-awscc`'s `release.yml`).
4. **PyPI**: `pip install cdktn-awscc==0.1.0` in a scratch venv; the project page on pypi.org should
   show the green "signed" / attestation indicator OIDC trusted publishing produces.
5. **Go**: `go get github.com/cdktn-io/cdktn-awscc-go@v0.1.0` in a scratch module; confirm
   `cdktn-io/cdktn-awscc-go` now has a `v0.1.0` tag and the generated Go source pushed to it.
6. **Maven / NuGet**: confirm the new version shows up on
   [Maven Central search](https://central.sonatype.com/artifact/io.cdktn/cdktn-awscc) and on the
   [Io.Cdktn.AwsCc NuGet page](https://www.nuget.org/packages/Io.Cdktn.AwsCc) (both can take a few
   minutes to index after `release.yml` finishes — a delay, not necessarily a failure).
7. Check the GitHub Release `v0.1.0` (created by `release_github`) has the npm tarball, the wheel,
   and `metrics.json` attached.
8. From here on, a normal release is just step 1 — tag and push.
