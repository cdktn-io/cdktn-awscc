// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTargetAccountConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The AWS account ID of the target account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration#account_id CcTargetAccountConfiguration#account_id}
    */
    readonly accountId: string;
    /**
    * The description of the target account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration#description CcTargetAccountConfiguration#description}
    */
    readonly description?: string;
    /**
    * The ID of the experiment template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration#experiment_template_id CcTargetAccountConfiguration#experiment_template_id}
    */
    readonly experimentTemplateId: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role for the target account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration#role_arn CcTargetAccountConfiguration#role_arn}
    */
    readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration awscc_fis_target_account_configuration}
*/
export class CcTargetAccountConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fis_target_account_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTargetAccountConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTargetAccountConfiguration to import
    * @param importFromId The id of the existing CcTargetAccountConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTargetAccountConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fis_target_account_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_target_account_configuration awscc_fis_target_account_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTargetAccountConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcTargetAccountConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fis_target_account_configuration',
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
        this._accountId = config.accountId;
        this._description = config.description;
        this._experimentTemplateId = config.experimentTemplateId;
        this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // experiment_template_id - computed: false, optional: false, required: true
    private _experimentTemplateId?: string; 
    public get experimentTemplateId() {
        return this.getStringAttribute('experiment_template_id');
    }
    public set experimentTemplateId(value: string) {
        this._experimentTemplateId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get experimentTemplateIdInput() {
        return this._experimentTemplateId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_id: cdktn.stringToTerraform(this._accountId),
            description: cdktn.stringToTerraform(this._description),
            experiment_template_id: cdktn.stringToTerraform(this._experimentTemplateId),
            role_arn: cdktn.stringToTerraform(this._roleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            experiment_template_id: {
                value: cdktn.stringToHclTerraform(this._experimentTemplateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTargetAccountConfiguration {
}
