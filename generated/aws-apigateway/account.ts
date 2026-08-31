// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_account

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccountProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_account#cloudwatch_role_arn CcAccount#cloudwatch_role_arn}
    */
    readonly cloudwatchRoleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_account awscc_apigateway_account}
*/
export class CcAccount extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_account";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccount resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccount to import
    * @param importFromId The id of the existing CcAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccount to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_account", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_account awscc_apigateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccountProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAccountProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_account',
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
        this._cloudwatchRoleArn = config.cloudwatchRoleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // cloudwatch_role_arn - computed: true, optional: true, required: false
    private _cloudwatchRoleArn?: string; 
    public get cloudwatchRoleArn() {
        return this.getStringAttribute('cloudwatch_role_arn');
    }
    public set cloudwatchRoleArn(value: string) {
        this._cloudwatchRoleArn = value;
    }
    public resetCloudwatchRoleArn() {
        this._cloudwatchRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchRoleArnInput() {
        return this._cloudwatchRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cloudwatch_role_arn: cdktn.stringToTerraform(this._cloudwatchRoleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cloudwatch_role_arn: {
                value: cdktn.stringToHclTerraform(this._cloudwatchRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAccount {
}
