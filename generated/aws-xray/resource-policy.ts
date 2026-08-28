// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourcePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A flag to indicate whether to bypass the resource policy lockout safety check
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy#bypass_policy_lockout_check CcResourcePolicy#bypass_policy_lockout_check}
    */
    readonly bypassPolicyLockoutCheck?: boolean | cdktn.IResolvable;
    /**
    * The resource policy document, which can be up to 5kb in size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy#policy_document CcResourcePolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * The name of the resource policy. Must be unique within a specific AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy#policy_name CcResourcePolicy#policy_name}
    */
    readonly policyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy awscc_xray_resource_policy}
*/
export class CcResourcePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_xray_resource_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourcePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourcePolicy to import
    * @param importFromId The id of the existing CcResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourcePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_resource_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/xray_resource_policy awscc_xray_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourcePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResourcePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_xray_resource_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._bypassPolicyLockoutCheck = config.bypassPolicyLockoutCheck;
        this._policyDocument = config.policyDocument;
        this._policyName = config.policyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bypass_policy_lockout_check - computed: true, optional: true, required: false
    private _bypassPolicyLockoutCheck?: boolean | cdktn.IResolvable; 
    public get bypassPolicyLockoutCheck() {
        return this.getBooleanAttribute('bypass_policy_lockout_check');
    }
    public set bypassPolicyLockoutCheck(value: boolean | cdktn.IResolvable) {
        this._bypassPolicyLockoutCheck = value;
    }
    public resetBypassPolicyLockoutCheck() {
        this._bypassPolicyLockoutCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutCheckInput() {
        return this._bypassPolicyLockoutCheck;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bypass_policy_lockout_check: cdktn.booleanToTerraform(this._bypassPolicyLockoutCheck),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            policy_name: cdktn.stringToTerraform(this._policyName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bypass_policy_lockout_check: {
                value: cdktn.booleanToHclTerraform(this._bypassPolicyLockoutCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
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
