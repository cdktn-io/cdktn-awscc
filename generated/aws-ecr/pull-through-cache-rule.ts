// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPullThroughCacheRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the Secrets Manager secret associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#credential_arn CcPullThroughCacheRule#credential_arn}
    */
    readonly credentialArn?: string;
    /**
    * The ARN of the IAM role associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn CcPullThroughCacheRule#custom_role_arn}
    */
    readonly customRoleArn?: string;
    /**
    * The Amazon ECR repository prefix associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix CcPullThroughCacheRule#ecr_repository_prefix}
    */
    readonly ecrRepositoryPrefix?: string;
    /**
    * The name of the upstream source registry associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry CcPullThroughCacheRule#upstream_registry}
    */
    readonly upstreamRegistry?: string;
    /**
    * The upstream registry URL associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url CcPullThroughCacheRule#upstream_registry_url}
    */
    readonly upstreamRegistryUrl?: string;
    /**
    * The upstream repository prefix associated with the pull through cache rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix CcPullThroughCacheRule#upstream_repository_prefix}
    */
    readonly upstreamRepositoryPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule awscc_ecr_pull_through_cache_rule}
*/
export class CcPullThroughCacheRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_pull_through_cache_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPullThroughCacheRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPullThroughCacheRule to import
    * @param importFromId The id of the existing CcPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPullThroughCacheRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_pull_through_cache_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_pull_through_cache_rule awscc_ecr_pull_through_cache_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPullThroughCacheRuleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPullThroughCacheRuleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_pull_through_cache_rule',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._credentialArn = config.credentialArn;
        this._customRoleArn = config.customRoleArn;
        this._ecrRepositoryPrefix = config.ecrRepositoryPrefix;
        this._upstreamRegistry = config.upstreamRegistry;
        this._upstreamRegistryUrl = config.upstreamRegistryUrl;
        this._upstreamRepositoryPrefix = config.upstreamRepositoryPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // credential_arn - computed: true, optional: true, required: false
    private _credentialArn?: string; 
    public get credentialArn() {
        return this.getStringAttribute('credential_arn');
    }
    public set credentialArn(value: string) {
        this._credentialArn = value;
    }
    public resetCredentialArn() {
        this._credentialArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialArnInput() {
        return this._credentialArn;
    }

    // custom_role_arn - computed: true, optional: true, required: false
    private _customRoleArn?: string; 
    public get customRoleArn() {
        return this.getStringAttribute('custom_role_arn');
    }
    public set customRoleArn(value: string) {
        this._customRoleArn = value;
    }
    public resetCustomRoleArn() {
        this._customRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customRoleArnInput() {
        return this._customRoleArn;
    }

    // ecr_repository_prefix - computed: true, optional: true, required: false
    private _ecrRepositoryPrefix?: string; 
    public get ecrRepositoryPrefix() {
        return this.getStringAttribute('ecr_repository_prefix');
    }
    public set ecrRepositoryPrefix(value: string) {
        this._ecrRepositoryPrefix = value;
    }
    public resetEcrRepositoryPrefix() {
        this._ecrRepositoryPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrRepositoryPrefixInput() {
        return this._ecrRepositoryPrefix;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // upstream_registry - computed: true, optional: true, required: false
    private _upstreamRegistry?: string; 
    public get upstreamRegistry() {
        return this.getStringAttribute('upstream_registry');
    }
    public set upstreamRegistry(value: string) {
        this._upstreamRegistry = value;
    }
    public resetUpstreamRegistry() {
        this._upstreamRegistry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upstreamRegistryInput() {
        return this._upstreamRegistry;
    }

    // upstream_registry_url - computed: true, optional: true, required: false
    private _upstreamRegistryUrl?: string; 
    public get upstreamRegistryUrl() {
        return this.getStringAttribute('upstream_registry_url');
    }
    public set upstreamRegistryUrl(value: string) {
        this._upstreamRegistryUrl = value;
    }
    public resetUpstreamRegistryUrl() {
        this._upstreamRegistryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upstreamRegistryUrlInput() {
        return this._upstreamRegistryUrl;
    }

    // upstream_repository_prefix - computed: true, optional: true, required: false
    private _upstreamRepositoryPrefix?: string; 
    public get upstreamRepositoryPrefix() {
        return this.getStringAttribute('upstream_repository_prefix');
    }
    public set upstreamRepositoryPrefix(value: string) {
        this._upstreamRepositoryPrefix = value;
    }
    public resetUpstreamRepositoryPrefix() {
        this._upstreamRepositoryPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upstreamRepositoryPrefixInput() {
        return this._upstreamRepositoryPrefix;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            credential_arn: cdktn.stringToTerraform(this._credentialArn),
            custom_role_arn: cdktn.stringToTerraform(this._customRoleArn),
            ecr_repository_prefix: cdktn.stringToTerraform(this._ecrRepositoryPrefix),
            upstream_registry: cdktn.stringToTerraform(this._upstreamRegistry),
            upstream_registry_url: cdktn.stringToTerraform(this._upstreamRegistryUrl),
            upstream_repository_prefix: cdktn.stringToTerraform(this._upstreamRepositoryPrefix),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            credential_arn: {
                value: cdktn.stringToHclTerraform(this._credentialArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_role_arn: {
                value: cdktn.stringToHclTerraform(this._customRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ecr_repository_prefix: {
                value: cdktn.stringToHclTerraform(this._ecrRepositoryPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upstream_registry: {
                value: cdktn.stringToHclTerraform(this._upstreamRegistry),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upstream_registry_url: {
                value: cdktn.stringToHclTerraform(this._upstreamRegistryUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upstream_repository_prefix: {
                value: cdktn.stringToHclTerraform(this._upstreamRepositoryPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPullThroughCacheRule {
}
