// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHostedConfigurationVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The application ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#application_id CcHostedConfigurationVersion#application_id}
    */
    readonly applicationId: string;
    /**
    * The configuration profile ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id CcHostedConfigurationVersion#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * The content of the configuration or the configuration data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#content CcHostedConfigurationVersion#content}
    */
    readonly content: string;
    /**
    * A standard MIME type describing the format of the configuration content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#content_type CcHostedConfigurationVersion#content_type}
    */
    readonly contentType: string;
    /**
    * A description of the hosted configuration version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#description CcHostedConfigurationVersion#description}
    */
    readonly description?: string;
    /**
    * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#latest_version_number CcHostedConfigurationVersion#latest_version_number}
    */
    readonly latestVersionNumber?: number;
    /**
    * A user-defined label for an AWS AppConfig hosted configuration version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#version_label CcHostedConfigurationVersion#version_label}
    */
    readonly versionLabel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version awscc_appconfig_hosted_configuration_version}
*/
export class CcHostedConfigurationVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_hosted_configuration_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHostedConfigurationVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHostedConfigurationVersion to import
    * @param importFromId The id of the existing CcHostedConfigurationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHostedConfigurationVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_hosted_configuration_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_hosted_configuration_version awscc_appconfig_hosted_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHostedConfigurationVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcHostedConfigurationVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_hosted_configuration_version',
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
        this._applicationId = config.applicationId;
        this._configurationProfileId = config.configurationProfileId;
        this._content = config.content;
        this._contentType = config.contentType;
        this._description = config.description;
        this._latestVersionNumber = config.latestVersionNumber;
        this._versionLabel = config.versionLabel;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // configuration_profile_id - computed: false, optional: false, required: true
    private _configurationProfileId?: string; 
    public get configurationProfileId() {
        return this.getStringAttribute('configuration_profile_id');
    }
    public set configurationProfileId(value: string) {
        this._configurationProfileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationProfileIdInput() {
        return this._configurationProfileId;
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // content_type - computed: false, optional: false, required: true
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // latest_version_number - computed: true, optional: true, required: false
    private _latestVersionNumber?: number; 
    public get latestVersionNumber() {
        return this.getNumberAttribute('latest_version_number');
    }
    public set latestVersionNumber(value: number) {
        this._latestVersionNumber = value;
    }
    public resetLatestVersionNumber() {
        this._latestVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latestVersionNumberInput() {
        return this._latestVersionNumber;
    }

    // version_label - computed: true, optional: true, required: false
    private _versionLabel?: string; 
    public get versionLabel() {
        return this.getStringAttribute('version_label');
    }
    public set versionLabel(value: string) {
        this._versionLabel = value;
    }
    public resetVersionLabel() {
        this._versionLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionLabelInput() {
        return this._versionLabel;
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getStringAttribute('version_number');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_id: cdktn.stringToTerraform(this._applicationId),
            configuration_profile_id: cdktn.stringToTerraform(this._configurationProfileId),
            content: cdktn.stringToTerraform(this._content),
            content_type: cdktn.stringToTerraform(this._contentType),
            description: cdktn.stringToTerraform(this._description),
            latest_version_number: cdktn.numberToTerraform(this._latestVersionNumber),
            version_label: cdktn.stringToTerraform(this._versionLabel),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_profile_id: {
                value: cdktn.stringToHclTerraform(this._configurationProfileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: cdktn.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type: {
                value: cdktn.stringToHclTerraform(this._contentType),
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
            latest_version_number: {
                value: cdktn.numberToHclTerraform(this._latestVersionNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            version_label: {
                value: cdktn.stringToHclTerraform(this._versionLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcHostedConfigurationVersion {
}
