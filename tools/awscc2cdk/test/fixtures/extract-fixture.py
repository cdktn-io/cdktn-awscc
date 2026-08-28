#!/usr/bin/env python3
"""Deterministically extract the mini awscc schema fixture used by the awscc2cdk contract tests.

Input : ../../../../../schemas/schema.json  (full `terraform providers schema -json`
        output for hashicorp/aws + hashicorp/awscc, gitignored, ~34 MB)
Output: ./awscc-mini.schema.json            (committed, < 3 MB)

The output keeps the exact shape `terraform providers schema -json` emits
(format_version, provider_schemas{<fqpn>: {provider, resource_schemas}}) plus the
additive `provider_versions` map that @cdktn/provider-schema's readSchema() adds and
that the generator needs for the documentation links it emits.

Data sources, list resources and resource identity schemas are dropped (the PoC does
not generate them). Only the fixed RESOURCES list below is kept; that list is owned by
the contract writer -- changing it changes the contract.

Usage: python3 extract-fixture.py [--check]
       --check re-extracts into memory and fails if the committed fixture differs.
"""
import argparse
import json
import os
import re
import sys

FQPN = "registry.terraform.io/hashicorp/awscc"

# NOTE (contract writer, 2026-08-28): the plan's fixture list names
# `awscc_kinesisanalytics_application`, but the awscc provider (1.98.0) has no
# KinesisAnalytics v1 resources at all -- only `awscc_kinesisanalyticsv2_application`.
# The merged-scope case (aws-kinesisanalytics + suffix V2) is therefore covered by the
# v2 resource plus a direct scope-map assertion in step2.cfnmap.test.ts.
RESOURCES = [
    "awscc_accessanalyzer_analyzer",
    "awscc_apigateway_resource",
    "awscc_cloudformation_stack",
    "awscc_ec2_subnet",
    "awscc_ec2_vpc",
    "awscc_iotwireless_device_profile",
    "awscc_kinesisanalyticsv2_application",
    "awscc_kinesisfirehose_delivery_stream",
    "awscc_lambda_function",
    "awscc_lex_bot",
    "awscc_s3_bucket",
]

HERE = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", "..", ".."))
SCHEMA = os.path.join(REPO_ROOT, "schemas", "schema.json")
LOCK = os.path.join(REPO_ROOT, "schemas", ".terraform.lock.hcl")
OUT = os.path.join(HERE, "awscc-mini.schema.json")


def provider_version():
    """Read the pinned awscc provider version out of the terraform lock file."""
    with open(LOCK) as fh:
        text = fh.read()
    m = re.search(r'provider "%s" \{\s*\n\s*version\s*=\s*"([^"]+)"' % re.escape(FQPN), text)
    if not m:
        raise SystemExit("could not find the awscc provider version in %s" % LOCK)
    return m.group(1)


def build():
    with open(SCHEMA) as fh:
        full = json.load(fh)
    src = full["provider_schemas"][FQPN]
    resources = {}
    for name in sorted(RESOURCES):
        if name not in src["resource_schemas"]:
            raise SystemExit("resource %s is not in %s" % (name, SCHEMA))
        resources[name] = src["resource_schemas"][name]
    return {
        "format_version": full["format_version"],
        "provider_schemas": {
            FQPN: {
                "provider": src["provider"],
                "resource_schemas": resources,
            }
        },
        "provider_versions": {FQPN: provider_version()},
    }


def render(doc):
    # sort_keys + fixed indent => byte-identical output on every run/platform
    return json.dumps(doc, indent=2, sort_keys=True) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()
    text = render(build())
    if args.check:
        with open(OUT) as fh:
            current = fh.read()
        if current != text:
            print("FAIL: %s is out of date; re-run extract-fixture.py" % OUT, file=sys.stderr)
            return 1
        print("OK: fixture matches the schema")
        return 0
    with open(OUT, "w") as fh:
        fh.write(text)
    print("wrote %s (%.2f MB, %d resources)" % (OUT, len(text) / 1e6, len(RESOURCES)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
