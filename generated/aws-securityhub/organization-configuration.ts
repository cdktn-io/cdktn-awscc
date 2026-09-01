// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether to automatically enable Security Hub in new member accounts when they join the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration#auto_enable CcOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktn.IResolvable;
    /**
    * Whether to automatically enable Security Hub default standards in new member accounts when they join the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration#auto_enable_standards CcOrganizationConfiguration#auto_enable_standards}
    */
    readonly autoEnableStandards?: string;
    /**
    * Indicates whether the organization uses local or central configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration#configuration_type CcOrganizationConfiguration#configuration_type}
    */
    readonly configurationType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration awscc_securityhub_organization_configuration}
*/
export class CcOrganizationConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_organization_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationConfiguration to import
    * @param importFromId The id of the existing CcOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_organization_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_organization_configuration awscc_securityhub_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_organization_configuration',
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
        this._autoEnable = config.autoEnable;
        this._autoEnableStandards = config.autoEnableStandards;
        this._configurationType = config.configurationType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_enable - computed: false, optional: false, required: true
    private _autoEnable?: boolean | cdktn.IResolvable; 
    public get autoEnable() {
        return this.getBooleanAttribute('auto_enable');
    }
    public set autoEnable(value: boolean | cdktn.IResolvable) {
        this._autoEnable = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnableInput() {
        return this._autoEnable;
    }

    // auto_enable_standards - computed: true, optional: true, required: false
    private _autoEnableStandards?: string; 
    public get autoEnableStandards() {
        return this.getStringAttribute('auto_enable_standards');
    }
    public set autoEnableStandards(value: string) {
        this._autoEnableStandards = value;
    }
    public resetAutoEnableStandards() {
        this._autoEnableStandards = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnableStandardsInput() {
        return this._autoEnableStandards;
    }

    // configuration_type - computed: true, optional: true, required: false
    private _configurationType?: string; 
    public get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    public set configurationType(value: string) {
        this._configurationType = value;
    }
    public resetConfigurationType() {
        this._configurationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationTypeInput() {
        return this._configurationType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // member_account_limit_reached - computed: true, optional: false, required: false
    public get memberAccountLimitReached() {
        return this.getBooleanAttribute('member_account_limit_reached');
    }

    // organization_configuration_identifier - computed: true, optional: false, required: false
    public get organizationConfigurationIdentifier() {
        return this.getStringAttribute('organization_configuration_identifier');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_enable: cdktn.booleanToTerraform(this._autoEnable),
            auto_enable_standards: cdktn.stringToTerraform(this._autoEnableStandards),
            configuration_type: cdktn.stringToTerraform(this._configurationType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_enable: {
                value: cdktn.booleanToHclTerraform(this._autoEnable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_enable_standards: {
                value: cdktn.stringToHclTerraform(this._autoEnableStandards),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_type: {
                value: cdktn.stringToHclTerraform(this._configurationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcOrganizationConfiguration {
}
