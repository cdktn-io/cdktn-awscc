// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourcePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies whether to block resource-based policies that allow broad access to the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy#block_public_policy CcResourcePolicy#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
    /**
    * A JSON-formatted string for an AWS resource-based policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy#resource_policy CcResourcePolicy#resource_policy}
    */
    readonly resourcePolicy: string;
    /**
    * The ARN or name of the secret to attach the resource-based policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy#secret_id CcResourcePolicy#secret_id}
    */
    readonly secretId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy awscc_secretsmanager_resource_policy}
*/
export class CcResourcePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_secretsmanager_resource_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourcePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourcePolicy to import
    * @param importFromId The id of the existing CcResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourcePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_secretsmanager_resource_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_resource_policy awscc_secretsmanager_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourcePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResourcePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_secretsmanager_resource_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._blockPublicPolicy = config.blockPublicPolicy;
        this._resourcePolicy = config.resourcePolicy;
        this._secretId = config.secretId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // block_public_policy - computed: true, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktn.IResolvable; 
    public get blockPublicPolicy() {
        return this.getBooleanAttribute('block_public_policy');
    }
    public set blockPublicPolicy(value: boolean | cdktn.IResolvable) {
        this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
        this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
        return this._blockPublicPolicy;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_policy - computed: false, optional: false, required: true
    private _resourcePolicy?: string; 
    public get resourcePolicy() {
        return this.getStringAttribute('resource_policy');
    }
    public set resourcePolicy(value: string) {
        this._resourcePolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy;
    }

    // resource_policy_id - computed: true, optional: false, required: false
    public get resourcePolicyId() {
        return this.getStringAttribute('resource_policy_id');
    }

    // secret_id - computed: false, optional: false, required: true
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            block_public_policy: cdktn.booleanToTerraform(this._blockPublicPolicy),
            resource_policy: cdktn.stringToTerraform(this._resourcePolicy),
            secret_id: cdktn.stringToTerraform(this._secretId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            block_public_policy: {
                value: cdktn.booleanToHclTerraform(this._blockPublicPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resource_policy: {
                value: cdktn.stringToHclTerraform(this._resourcePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_id: {
                value: cdktn.stringToHclTerraform(this._secretId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResourcePolicy {
}
