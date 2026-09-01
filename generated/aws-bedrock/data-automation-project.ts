// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataAutomationProjectProps extends cdktn.TerraformMetaArguments {
    /**
    * Custom output configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#custom_output_configuration CcDataAutomationProject#custom_output_configuration}
    */
    readonly customOutputConfiguration?: CcDataAutomationProject.CustomOutputConfigurationProperty;
    /**
    * KMS encryption context
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#kms_encryption_context CcDataAutomationProject#kms_encryption_context}
    */
    readonly kmsEncryptionContext?: { [key: string]: string };
    /**
    * KMS key identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#kms_key_id CcDataAutomationProject#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Override configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#override_configuration CcDataAutomationProject#override_configuration}
    */
    readonly overrideConfiguration?: CcDataAutomationProject.OverrideConfigurationProperty;
    /**
    * Description of the DataAutomationProject
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#project_description CcDataAutomationProject#project_description}
    */
    readonly projectDescription?: string;
    /**
    * Name of the DataAutomationProject
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#project_name CcDataAutomationProject#project_name}
    */
    readonly projectName: string;
    /**
    * Type of the DataAutomationProject - Sync or Async
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#project_type CcDataAutomationProject#project_type}
    */
    readonly projectType?: string;
    /**
    * Standard output configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#standard_output_configuration CcDataAutomationProject#standard_output_configuration}
    */
    readonly standardOutputConfiguration?: CcDataAutomationProject.StandardOutputConfigurationProperty;
    /**
    * List of Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#tags CcDataAutomationProject#tags}
    */
    readonly tags?: CcDataAutomationProject.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project awscc_bedrock_data_automation_project}
*/
export class CcDataAutomationProject extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_data_automation_project";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataAutomationProject resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataAutomationProject to import
    * @param importFromId The id of the existing CcDataAutomationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataAutomationProject to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_automation_project", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project awscc_bedrock_data_automation_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataAutomationProjectProps
    */
    public constructor(scope: Construct, id: string, config: CcDataAutomationProjectProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_data_automation_project',
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
        this._customOutputConfiguration.internalValue = config.customOutputConfiguration;
        this._kmsEncryptionContext = config.kmsEncryptionContext;
        this._kmsKeyId = config.kmsKeyId;
        this._overrideConfiguration.internalValue = config.overrideConfiguration;
        this._projectDescription = config.projectDescription;
        this._projectName = config.projectName;
        this._projectType = config.projectType;
        this._standardOutputConfiguration.internalValue = config.standardOutputConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // custom_output_configuration - computed: true, optional: true, required: false
    private _customOutputConfiguration = new CcDataAutomationProject.CustomOutputConfigurationPropertyOutputReference(this, "custom_output_configuration");
    public get customOutputConfiguration() {
        return this._customOutputConfiguration;
    }
    public putCustomOutputConfiguration(value: CcDataAutomationProject.CustomOutputConfigurationProperty) {
        this._customOutputConfiguration.internalValue = value;
    }
    public resetCustomOutputConfiguration() {
        this._customOutputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customOutputConfigurationInput() {
        return this._customOutputConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_encryption_context - computed: true, optional: true, required: false
    private _kmsEncryptionContext?: { [key: string]: string }; 
    public get kmsEncryptionContext() {
        return this.getStringMapAttribute('kms_encryption_context');
    }
    public set kmsEncryptionContext(value: { [key: string]: string }) {
        this._kmsEncryptionContext = value;
    }
    public resetKmsEncryptionContext() {
        this._kmsEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptionContextInput() {
        return this._kmsEncryptionContext;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // override_configuration - computed: true, optional: true, required: false
    private _overrideConfiguration = new CcDataAutomationProject.OverrideConfigurationPropertyOutputReference(this, "override_configuration");
    public get overrideConfiguration() {
        return this._overrideConfiguration;
    }
    public putOverrideConfiguration(value: CcDataAutomationProject.OverrideConfigurationProperty) {
        this._overrideConfiguration.internalValue = value;
    }
    public resetOverrideConfiguration() {
        this._overrideConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideConfigurationInput() {
        return this._overrideConfiguration.internalValue;
    }

    // project_arn - computed: true, optional: false, required: false
    public get projectArn() {
        return this.getStringAttribute('project_arn');
    }

    // project_description - computed: true, optional: true, required: false
    private _projectDescription?: string; 
    public get projectDescription() {
        return this.getStringAttribute('project_description');
    }
    public set projectDescription(value: string) {
        this._projectDescription = value;
    }
    public resetProjectDescription() {
        this._projectDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectDescriptionInput() {
        return this._projectDescription;
    }

    // project_name - computed: false, optional: false, required: true
    private _projectName?: string; 
    public get projectName() {
        return this.getStringAttribute('project_name');
    }
    public set projectName(value: string) {
        this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectNameInput() {
        return this._projectName;
    }

    // project_stage - computed: true, optional: false, required: false
    public get projectStage() {
        return this.getStringAttribute('project_stage');
    }

    // project_type - computed: true, optional: true, required: false
    private _projectType?: string; 
    public get projectType() {
        return this.getStringAttribute('project_type');
    }
    public set projectType(value: string) {
        this._projectType = value;
    }
    public resetProjectType() {
        this._projectType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectTypeInput() {
        return this._projectType;
    }

    // standard_output_configuration - computed: true, optional: true, required: false
    private _standardOutputConfiguration = new CcDataAutomationProject.StandardOutputConfigurationPropertyOutputReference(this, "standard_output_configuration");
    public get standardOutputConfiguration() {
        return this._standardOutputConfiguration;
    }
    public putStandardOutputConfiguration(value: CcDataAutomationProject.StandardOutputConfigurationProperty) {
        this._standardOutputConfiguration.internalValue = value;
    }
    public resetStandardOutputConfiguration() {
        this._standardOutputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standardOutputConfigurationInput() {
        return this._standardOutputConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataAutomationProject.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataAutomationProject.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            custom_output_configuration: ccDataAutomationProjectCustomOutputConfigurationPropertyToTerraform(this._customOutputConfiguration.internalValue),
            kms_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._kmsEncryptionContext),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            override_configuration: ccDataAutomationProjectOverrideConfigurationPropertyToTerraform(this._overrideConfiguration.internalValue),
            project_description: cdktn.stringToTerraform(this._projectDescription),
            project_name: cdktn.stringToTerraform(this._projectName),
            project_type: cdktn.stringToTerraform(this._projectType),
            standard_output_configuration: ccDataAutomationProjectStandardOutputConfigurationPropertyToTerraform(this._standardOutputConfiguration.internalValue),
            tags: cdktn.listMapper(ccDataAutomationProjectTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            custom_output_configuration: {
                value: ccDataAutomationProjectCustomOutputConfigurationPropertyToHclTerraform(this._customOutputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataAutomationProject.CustomOutputConfigurationProperty",
            },
            kms_encryption_context: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._kmsEncryptionContext),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            override_configuration: {
                value: ccDataAutomationProjectOverrideConfigurationPropertyToHclTerraform(this._overrideConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataAutomationProject.OverrideConfigurationProperty",
            },
            project_description: {
                value: cdktn.stringToHclTerraform(this._projectDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_name: {
                value: cdktn.stringToHclTerraform(this._projectName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_type: {
                value: cdktn.stringToHclTerraform(this._projectType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            standard_output_configuration: {
                value: ccDataAutomationProjectStandardOutputConfigurationPropertyToHclTerraform(this._standardOutputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataAutomationProject.StandardOutputConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataAutomationProjectTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataAutomationProject.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataAutomationProjectBlueprintItemPropertyToTerraform(struct?: CcDataAutomationProject.BlueprintItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        blueprint_arn: cdktn.stringToTerraform(struct!.blueprintArn),
        blueprint_stage: cdktn.stringToTerraform(struct!.blueprintStage),
        blueprint_version: cdktn.stringToTerraform(struct!.blueprintVersion),
    }
}


export function ccDataAutomationProjectBlueprintItemPropertyToHclTerraform(struct?: CcDataAutomationProject.BlueprintItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        blueprint_arn: {
            value: cdktn.stringToHclTerraform(struct!.blueprintArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        blueprint_stage: {
            value: cdktn.stringToHclTerraform(struct!.blueprintStage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        blueprint_version: {
            value: cdktn.stringToHclTerraform(struct!.blueprintVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectCustomOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.CustomOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        blueprints: cdktn.listMapper(ccDataAutomationProjectBlueprintItemPropertyToTerraform, false)(struct!.blueprints),
    }
}


export function ccDataAutomationProjectCustomOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.CustomOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        blueprints: {
            value: cdktn.listMapperHcl(ccDataAutomationProjectBlueprintItemPropertyToHclTerraform, false)(struct!.blueprints),
            isBlock: true,
            type: "list",
            storageClassType: "BlueprintItemPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioLanguageConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.AudioLanguageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        generative_output_language: cdktn.stringToTerraform(struct!.generativeOutputLanguage),
        identify_multiple_languages: cdktn.booleanToTerraform(struct!.identifyMultipleLanguages),
        input_languages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputLanguages),
    }
}


export function ccDataAutomationProjectAudioLanguageConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioLanguageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        generative_output_language: {
            value: cdktn.stringToHclTerraform(struct!.generativeOutputLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identify_multiple_languages: {
            value: cdktn.booleanToHclTerraform(struct!.identifyMultipleLanguages),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_languages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputLanguages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectModalityProcessingConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.ModalityProcessingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectModalityProcessingConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.ModalityProcessingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectPIIEntitiesConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.PIIEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
        redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
    }
}


export function ccDataAutomationProjectPIIEntitiesConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.PIIEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pii_entity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        redaction_mask_mode: {
            value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectSensitiveDataConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.SensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
        detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
        pii_entities_configuration: ccDataAutomationProjectPIIEntitiesConfigurationPropertyToTerraform(struct!.piiEntitiesConfiguration),
    }
}


export function ccDataAutomationProjectSensitiveDataConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.SensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detection_mode: {
            value: cdktn.stringToHclTerraform(struct!.detectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        detection_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pii_entities_configuration: {
            value: ccDataAutomationProjectPIIEntitiesConfigurationPropertyToHclTerraform(struct!.piiEntitiesConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PIIEntitiesConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioOverrideConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.AudioOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        language_configuration: ccDataAutomationProjectAudioLanguageConfigurationPropertyToTerraform(struct!.languageConfiguration),
        modality_processing: ccDataAutomationProjectModalityProcessingConfigurationPropertyToTerraform(struct!.modalityProcessing),
        sensitive_data_configuration: ccDataAutomationProjectSensitiveDataConfigurationPropertyToTerraform(struct!.sensitiveDataConfiguration),
    }
}


export function ccDataAutomationProjectAudioOverrideConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        language_configuration: {
            value: ccDataAutomationProjectAudioLanguageConfigurationPropertyToHclTerraform(struct!.languageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioLanguageConfigurationProperty",
        },
        modality_processing: {
            value: ccDataAutomationProjectModalityProcessingConfigurationPropertyToHclTerraform(struct!.modalityProcessing),
            isBlock: true,
            type: "struct",
            storageClassType: "ModalityProcessingConfigurationProperty",
        },
        sensitive_data_configuration: {
            value: ccDataAutomationProjectSensitiveDataConfigurationPropertyToHclTerraform(struct!.sensitiveDataConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SensitiveDataConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationDocumentModalityProcessingPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectOverrideConfigurationDocumentModalityProcessingPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
        redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
    }
}


export function ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pii_entity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        redaction_mask_mode: {
            value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
        detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
        pii_entities_configuration: ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct!.piiEntitiesConfiguration),
    }
}


export function ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationDocumentSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detection_mode: {
            value: cdktn.stringToHclTerraform(struct!.detectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        detection_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pii_entities_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct!.piiEntitiesConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectSplitterConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.SplitterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectSplitterConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.SplitterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentOverrideConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.DocumentOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        modality_processing: ccDataAutomationProjectOverrideConfigurationDocumentModalityProcessingPropertyToTerraform(struct!.modalityProcessing),
        sensitive_data_configuration: ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPropertyToTerraform(struct!.sensitiveDataConfiguration),
        splitter: ccDataAutomationProjectSplitterConfigurationPropertyToTerraform(struct!.splitter),
    }
}


export function ccDataAutomationProjectDocumentOverrideConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        modality_processing: {
            value: ccDataAutomationProjectOverrideConfigurationDocumentModalityProcessingPropertyToHclTerraform(struct!.modalityProcessing),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationDocumentModalityProcessingProperty",
        },
        sensitive_data_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPropertyToHclTerraform(struct!.sensitiveDataConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationDocumentSensitiveDataConfigurationProperty",
        },
        splitter: {
            value: ccDataAutomationProjectSplitterConfigurationPropertyToHclTerraform(struct!.splitter),
            isBlock: true,
            type: "struct",
            storageClassType: "SplitterConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationImageModalityProcessingPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectOverrideConfigurationImageModalityProcessingPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
        redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
    }
}


export function ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pii_entity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        redaction_mask_mode: {
            value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
        detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
        pii_entities_configuration: ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct!.piiEntitiesConfiguration),
    }
}


export function ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationImageSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detection_mode: {
            value: cdktn.stringToHclTerraform(struct!.detectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        detection_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pii_entities_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct!.piiEntitiesConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageOverrideConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.ImageOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        modality_processing: ccDataAutomationProjectOverrideConfigurationImageModalityProcessingPropertyToTerraform(struct!.modalityProcessing),
        sensitive_data_configuration: ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPropertyToTerraform(struct!.sensitiveDataConfiguration),
    }
}


export function ccDataAutomationProjectImageOverrideConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        modality_processing: {
            value: ccDataAutomationProjectOverrideConfigurationImageModalityProcessingPropertyToHclTerraform(struct!.modalityProcessing),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationImageModalityProcessingProperty",
        },
        sensitive_data_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPropertyToHclTerraform(struct!.sensitiveDataConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationImageSensitiveDataConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectModalityRoutingConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.ModalityRoutingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        jpeg: cdktn.stringToTerraform(struct!.jpeg),
        mov: cdktn.stringToTerraform(struct!.mov),
        mp_4: cdktn.stringToTerraform(struct!.mp4),
        png: cdktn.stringToTerraform(struct!.png),
    }
}


export function ccDataAutomationProjectModalityRoutingConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.ModalityRoutingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        jpeg: {
            value: cdktn.stringToHclTerraform(struct!.jpeg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mov: {
            value: cdktn.stringToHclTerraform(struct!.mov),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mp_4: {
            value: cdktn.stringToHclTerraform(struct!.mp4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        png: {
            value: cdktn.stringToHclTerraform(struct!.png),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationVideoModalityProcessingPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectOverrideConfigurationVideoModalityProcessingPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoModalityProcessingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
        redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
    }
}


export function ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pii_entity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        redaction_mask_mode: {
            value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
        detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
        pii_entities_configuration: ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToTerraform(struct!.piiEntitiesConfiguration),
    }
}


export function ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationVideoSensitiveDataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detection_mode: {
            value: cdktn.stringToHclTerraform(struct!.detectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        detection_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pii_entities_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyToHclTerraform(struct!.piiEntitiesConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoOverrideConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.VideoOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        modality_processing: ccDataAutomationProjectOverrideConfigurationVideoModalityProcessingPropertyToTerraform(struct!.modalityProcessing),
        sensitive_data_configuration: ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPropertyToTerraform(struct!.sensitiveDataConfiguration),
    }
}


export function ccDataAutomationProjectVideoOverrideConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoOverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        modality_processing: {
            value: ccDataAutomationProjectOverrideConfigurationVideoModalityProcessingPropertyToHclTerraform(struct!.modalityProcessing),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationVideoModalityProcessingProperty",
        },
        sensitive_data_configuration: {
            value: ccDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPropertyToHclTerraform(struct!.sensitiveDataConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideConfigurationVideoSensitiveDataConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectOverrideConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.OverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio: ccDataAutomationProjectAudioOverrideConfigurationPropertyToTerraform(struct!.audio),
        document: ccDataAutomationProjectDocumentOverrideConfigurationPropertyToTerraform(struct!.document),
        image: ccDataAutomationProjectImageOverrideConfigurationPropertyToTerraform(struct!.image),
        modality_routing: ccDataAutomationProjectModalityRoutingConfigurationPropertyToTerraform(struct!.modalityRouting),
        video: ccDataAutomationProjectVideoOverrideConfigurationPropertyToTerraform(struct!.video),
    }
}


export function ccDataAutomationProjectOverrideConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.OverrideConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio: {
            value: ccDataAutomationProjectAudioOverrideConfigurationPropertyToHclTerraform(struct!.audio),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioOverrideConfigurationProperty",
        },
        document: {
            value: ccDataAutomationProjectDocumentOverrideConfigurationPropertyToHclTerraform(struct!.document),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentOverrideConfigurationProperty",
        },
        image: {
            value: ccDataAutomationProjectImageOverrideConfigurationPropertyToHclTerraform(struct!.image),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageOverrideConfigurationProperty",
        },
        modality_routing: {
            value: ccDataAutomationProjectModalityRoutingConfigurationPropertyToHclTerraform(struct!.modalityRouting),
            isBlock: true,
            type: "struct",
            storageClassType: "ModalityRoutingConfigurationProperty",
        },
        video: {
            value: ccDataAutomationProjectVideoOverrideConfigurationPropertyToHclTerraform(struct!.video),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoOverrideConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectChannelLabelingConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.ChannelLabelingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectChannelLabelingConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.ChannelLabelingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectSpeakerLabelingConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.SpeakerLabelingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectSpeakerLabelingConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.SpeakerLabelingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectTranscriptConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.TranscriptConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_labeling: ccDataAutomationProjectChannelLabelingConfigurationPropertyToTerraform(struct!.channelLabeling),
        speaker_labeling: ccDataAutomationProjectSpeakerLabelingConfigurationPropertyToTerraform(struct!.speakerLabeling),
    }
}


export function ccDataAutomationProjectTranscriptConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.TranscriptConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_labeling: {
            value: ccDataAutomationProjectChannelLabelingConfigurationPropertyToHclTerraform(struct!.channelLabeling),
            isBlock: true,
            type: "struct",
            storageClassType: "ChannelLabelingConfigurationProperty",
        },
        speaker_labeling: {
            value: ccDataAutomationProjectSpeakerLabelingConfigurationPropertyToHclTerraform(struct!.speakerLabeling),
            isBlock: true,
            type: "struct",
            storageClassType: "SpeakerLabelingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioExtractionCategoryTypeConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.AudioExtractionCategoryTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transcript: ccDataAutomationProjectTranscriptConfigurationPropertyToTerraform(struct!.transcript),
    }
}


export function ccDataAutomationProjectAudioExtractionCategoryTypeConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioExtractionCategoryTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transcript: {
            value: ccDataAutomationProjectTranscriptConfigurationPropertyToHclTerraform(struct!.transcript),
            isBlock: true,
            type: "struct",
            storageClassType: "TranscriptConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioExtractionCategoryPropertyToTerraform(struct?: CcDataAutomationProject.AudioExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        type_configuration: ccDataAutomationProjectAudioExtractionCategoryTypeConfigurationPropertyToTerraform(struct!.typeConfiguration),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectAudioExtractionCategoryPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type_configuration: {
            value: ccDataAutomationProjectAudioExtractionCategoryTypeConfigurationPropertyToHclTerraform(struct!.typeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioExtractionCategoryTypeConfigurationProperty",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioStandardExtractionPropertyToTerraform(struct?: CcDataAutomationProject.AudioStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: ccDataAutomationProjectAudioExtractionCategoryPropertyToTerraform(struct!.category),
    }
}


export function ccDataAutomationProjectAudioStandardExtractionPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: ccDataAutomationProjectAudioExtractionCategoryPropertyToHclTerraform(struct!.category),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioExtractionCategoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioStandardGenerativeFieldPropertyToTerraform(struct?: CcDataAutomationProject.AudioStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectAudioStandardGenerativeFieldPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectAudioStandardOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.AudioStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction: ccDataAutomationProjectAudioStandardExtractionPropertyToTerraform(struct!.extraction),
        generative_field: ccDataAutomationProjectAudioStandardGenerativeFieldPropertyToTerraform(struct!.generativeField),
    }
}


export function ccDataAutomationProjectAudioStandardOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.AudioStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction: {
            value: ccDataAutomationProjectAudioStandardExtractionPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioStandardExtractionProperty",
        },
        generative_field: {
            value: ccDataAutomationProjectAudioStandardGenerativeFieldPropertyToHclTerraform(struct!.generativeField),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioStandardGenerativeFieldProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentBoundingBoxPropertyToTerraform(struct?: CcDataAutomationProject.DocumentBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectDocumentBoundingBoxPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentExtractionGranularityPropertyToTerraform(struct?: CcDataAutomationProject.DocumentExtractionGranularityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectDocumentExtractionGranularityPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentExtractionGranularityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentStandardExtractionPropertyToTerraform(struct?: CcDataAutomationProject.DocumentStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bounding_box: ccDataAutomationProjectDocumentBoundingBoxPropertyToTerraform(struct!.boundingBox),
        granularity: ccDataAutomationProjectDocumentExtractionGranularityPropertyToTerraform(struct!.granularity),
    }
}


export function ccDataAutomationProjectDocumentStandardExtractionPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bounding_box: {
            value: ccDataAutomationProjectDocumentBoundingBoxPropertyToHclTerraform(struct!.boundingBox),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentBoundingBoxProperty",
        },
        granularity: {
            value: ccDataAutomationProjectDocumentExtractionGranularityPropertyToHclTerraform(struct!.granularity),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentExtractionGranularityProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentStandardGenerativeFieldPropertyToTerraform(struct?: CcDataAutomationProject.DocumentStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectDocumentStandardGenerativeFieldPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentOutputAdditionalFileFormatPropertyToTerraform(struct?: CcDataAutomationProject.DocumentOutputAdditionalFileFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectDocumentOutputAdditionalFileFormatPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentOutputAdditionalFileFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentOutputTextFormatPropertyToTerraform(struct?: CcDataAutomationProject.DocumentOutputTextFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectDocumentOutputTextFormatPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentOutputTextFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentOutputFormatPropertyToTerraform(struct?: CcDataAutomationProject.DocumentOutputFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_file_format: ccDataAutomationProjectDocumentOutputAdditionalFileFormatPropertyToTerraform(struct!.additionalFileFormat),
        text_format: ccDataAutomationProjectDocumentOutputTextFormatPropertyToTerraform(struct!.textFormat),
    }
}


export function ccDataAutomationProjectDocumentOutputFormatPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentOutputFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_file_format: {
            value: ccDataAutomationProjectDocumentOutputAdditionalFileFormatPropertyToHclTerraform(struct!.additionalFileFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentOutputAdditionalFileFormatProperty",
        },
        text_format: {
            value: ccDataAutomationProjectDocumentOutputTextFormatPropertyToHclTerraform(struct!.textFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentOutputTextFormatProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectDocumentStandardOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.DocumentStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction: ccDataAutomationProjectDocumentStandardExtractionPropertyToTerraform(struct!.extraction),
        generative_field: ccDataAutomationProjectDocumentStandardGenerativeFieldPropertyToTerraform(struct!.generativeField),
        output_format: ccDataAutomationProjectDocumentOutputFormatPropertyToTerraform(struct!.outputFormat),
    }
}


export function ccDataAutomationProjectDocumentStandardOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.DocumentStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction: {
            value: ccDataAutomationProjectDocumentStandardExtractionPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentStandardExtractionProperty",
        },
        generative_field: {
            value: ccDataAutomationProjectDocumentStandardGenerativeFieldPropertyToHclTerraform(struct!.generativeField),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentStandardGenerativeFieldProperty",
        },
        output_format: {
            value: ccDataAutomationProjectDocumentOutputFormatPropertyToHclTerraform(struct!.outputFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentOutputFormatProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageBoundingBoxPropertyToTerraform(struct?: CcDataAutomationProject.ImageBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectImageBoundingBoxPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageExtractionCategoryPropertyToTerraform(struct?: CcDataAutomationProject.ImageExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectImageExtractionCategoryPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageStandardExtractionPropertyToTerraform(struct?: CcDataAutomationProject.ImageStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bounding_box: ccDataAutomationProjectImageBoundingBoxPropertyToTerraform(struct!.boundingBox),
        category: ccDataAutomationProjectImageExtractionCategoryPropertyToTerraform(struct!.category),
    }
}


export function ccDataAutomationProjectImageStandardExtractionPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bounding_box: {
            value: ccDataAutomationProjectImageBoundingBoxPropertyToHclTerraform(struct!.boundingBox),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageBoundingBoxProperty",
        },
        category: {
            value: ccDataAutomationProjectImageExtractionCategoryPropertyToHclTerraform(struct!.category),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageExtractionCategoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageStandardGenerativeFieldPropertyToTerraform(struct?: CcDataAutomationProject.ImageStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectImageStandardGenerativeFieldPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectImageStandardOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.ImageStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction: ccDataAutomationProjectImageStandardExtractionPropertyToTerraform(struct!.extraction),
        generative_field: ccDataAutomationProjectImageStandardGenerativeFieldPropertyToTerraform(struct!.generativeField),
    }
}


export function ccDataAutomationProjectImageStandardOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.ImageStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction: {
            value: ccDataAutomationProjectImageStandardExtractionPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageStandardExtractionProperty",
        },
        generative_field: {
            value: ccDataAutomationProjectImageStandardGenerativeFieldPropertyToHclTerraform(struct!.generativeField),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageStandardGenerativeFieldProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoBoundingBoxPropertyToTerraform(struct?: CcDataAutomationProject.VideoBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccDataAutomationProjectVideoBoundingBoxPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoBoundingBoxProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoExtractionCategoryPropertyToTerraform(struct?: CcDataAutomationProject.VideoExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectVideoExtractionCategoryPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoExtractionCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoStandardExtractionPropertyToTerraform(struct?: CcDataAutomationProject.VideoStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bounding_box: ccDataAutomationProjectVideoBoundingBoxPropertyToTerraform(struct!.boundingBox),
        category: ccDataAutomationProjectVideoExtractionCategoryPropertyToTerraform(struct!.category),
    }
}


export function ccDataAutomationProjectVideoStandardExtractionPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoStandardExtractionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bounding_box: {
            value: ccDataAutomationProjectVideoBoundingBoxPropertyToHclTerraform(struct!.boundingBox),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoBoundingBoxProperty",
        },
        category: {
            value: ccDataAutomationProjectVideoExtractionCategoryPropertyToHclTerraform(struct!.category),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoExtractionCategoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoStandardGenerativeFieldPropertyToTerraform(struct?: CcDataAutomationProject.VideoStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        state: cdktn.stringToTerraform(struct!.state),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    }
}


export function ccDataAutomationProjectVideoStandardGenerativeFieldPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoStandardGenerativeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectVideoStandardOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.VideoStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extraction: ccDataAutomationProjectVideoStandardExtractionPropertyToTerraform(struct!.extraction),
        generative_field: ccDataAutomationProjectVideoStandardGenerativeFieldPropertyToTerraform(struct!.generativeField),
    }
}


export function ccDataAutomationProjectVideoStandardOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.VideoStandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extraction: {
            value: ccDataAutomationProjectVideoStandardExtractionPropertyToHclTerraform(struct!.extraction),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoStandardExtractionProperty",
        },
        generative_field: {
            value: ccDataAutomationProjectVideoStandardGenerativeFieldPropertyToHclTerraform(struct!.generativeField),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoStandardGenerativeFieldProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectStandardOutputConfigurationPropertyToTerraform(struct?: CcDataAutomationProject.StandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio: ccDataAutomationProjectAudioStandardOutputConfigurationPropertyToTerraform(struct!.audio),
        document: ccDataAutomationProjectDocumentStandardOutputConfigurationPropertyToTerraform(struct!.document),
        image: ccDataAutomationProjectImageStandardOutputConfigurationPropertyToTerraform(struct!.image),
        video: ccDataAutomationProjectVideoStandardOutputConfigurationPropertyToTerraform(struct!.video),
    }
}


export function ccDataAutomationProjectStandardOutputConfigurationPropertyToHclTerraform(struct?: CcDataAutomationProject.StandardOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio: {
            value: ccDataAutomationProjectAudioStandardOutputConfigurationPropertyToHclTerraform(struct!.audio),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioStandardOutputConfigurationProperty",
        },
        document: {
            value: ccDataAutomationProjectDocumentStandardOutputConfigurationPropertyToHclTerraform(struct!.document),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentStandardOutputConfigurationProperty",
        },
        image: {
            value: ccDataAutomationProjectImageStandardOutputConfigurationPropertyToHclTerraform(struct!.image),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageStandardOutputConfigurationProperty",
        },
        video: {
            value: ccDataAutomationProjectVideoStandardOutputConfigurationPropertyToHclTerraform(struct!.video),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoStandardOutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataAutomationProjectTagPropertyToTerraform(struct?: CcDataAutomationProject.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataAutomationProjectTagPropertyToHclTerraform(struct?: CcDataAutomationProject.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataAutomationProject {
export interface BlueprintItemProperty {
    /**
    * ARN of a Blueprint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#blueprint_arn CcDataAutomationProject#blueprint_arn}
    */
    readonly blueprintArn?: string;
    /**
    * Stage of the Blueprint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#blueprint_stage CcDataAutomationProject#blueprint_stage}
    */
    readonly blueprintStage?: string;
    /**
    * Blueprint Version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#blueprint_version CcDataAutomationProject#blueprint_version}
    */
    readonly blueprintVersion?: string;
}
export class BlueprintItemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): BlueprintItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blueprintArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueprintArn = this._blueprintArn;
        }
        if (this._blueprintStage !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueprintStage = this._blueprintStage;
        }
        if (this._blueprintVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueprintVersion = this._blueprintVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlueprintItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blueprintArn = undefined;
            this._blueprintStage = undefined;
            this._blueprintVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blueprintArn = value.blueprintArn;
            this._blueprintStage = value.blueprintStage;
            this._blueprintVersion = value.blueprintVersion;
        }
    }

    // blueprint_arn - computed: true, optional: true, required: false
    private _blueprintArn?: string; 
    public get blueprintArn() {
        return this.getStringAttribute('blueprint_arn');
    }
    public set blueprintArn(value: string) {
        this._blueprintArn = value;
    }
    public resetBlueprintArn() {
        this._blueprintArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintArnInput() {
        return this._blueprintArn;
    }

    // blueprint_stage - computed: true, optional: true, required: false
    private _blueprintStage?: string; 
    public get blueprintStage() {
        return this.getStringAttribute('blueprint_stage');
    }
    public set blueprintStage(value: string) {
        this._blueprintStage = value;
    }
    public resetBlueprintStage() {
        this._blueprintStage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintStageInput() {
        return this._blueprintStage;
    }

    // blueprint_version - computed: true, optional: true, required: false
    private _blueprintVersion?: string; 
    public get blueprintVersion() {
        return this.getStringAttribute('blueprint_version');
    }
    public set blueprintVersion(value: string) {
        this._blueprintVersion = value;
    }
    public resetBlueprintVersion() {
        this._blueprintVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintVersionInput() {
        return this._blueprintVersion;
    }
}

export class BlueprintItemPropertyList extends cdktn.ComplexList {
    public internalValue? : BlueprintItemProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): BlueprintItemPropertyOutputReference {
        return new BlueprintItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#blueprints CcDataAutomationProject#blueprints}
    */
    readonly blueprints?: BlueprintItemProperty[] | cdktn.IResolvable;
}
export class CustomOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blueprints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueprints = this._blueprints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blueprints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blueprints.internalValue = value.blueprints;
        }
    }

    // blueprints - computed: true, optional: true, required: false
    private _blueprints = new BlueprintItemPropertyList(this, "blueprints", false);
    public get blueprints() {
        return this._blueprints;
    }
    public putBlueprints(value: BlueprintItemProperty[] | cdktn.IResolvable) {
        this._blueprints.internalValue = value;
    }
    public resetBlueprints() {
        this._blueprints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintsInput() {
        return this._blueprints.internalValue;
    }
}
export interface AudioLanguageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#generative_output_language CcDataAutomationProject#generative_output_language}
    */
    readonly generativeOutputLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#identify_multiple_languages CcDataAutomationProject#identify_multiple_languages}
    */
    readonly identifyMultipleLanguages?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#input_languages CcDataAutomationProject#input_languages}
    */
    readonly inputLanguages?: string[];
}
export class AudioLanguageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioLanguageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._generativeOutputLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.generativeOutputLanguage = this._generativeOutputLanguage;
        }
        if (this._identifyMultipleLanguages !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifyMultipleLanguages = this._identifyMultipleLanguages;
        }
        if (this._inputLanguages !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputLanguages = this._inputLanguages;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioLanguageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._generativeOutputLanguage = undefined;
            this._identifyMultipleLanguages = undefined;
            this._inputLanguages = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._generativeOutputLanguage = value.generativeOutputLanguage;
            this._identifyMultipleLanguages = value.identifyMultipleLanguages;
            this._inputLanguages = value.inputLanguages;
        }
    }

    // generative_output_language - computed: true, optional: true, required: false
    private _generativeOutputLanguage?: string; 
    public get generativeOutputLanguage() {
        return this.getStringAttribute('generative_output_language');
    }
    public set generativeOutputLanguage(value: string) {
        this._generativeOutputLanguage = value;
    }
    public resetGenerativeOutputLanguage() {
        this._generativeOutputLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generativeOutputLanguageInput() {
        return this._generativeOutputLanguage;
    }

    // identify_multiple_languages - computed: true, optional: true, required: false
    private _identifyMultipleLanguages?: boolean | cdktn.IResolvable; 
    public get identifyMultipleLanguages() {
        return this.getBooleanAttribute('identify_multiple_languages');
    }
    public set identifyMultipleLanguages(value: boolean | cdktn.IResolvable) {
        this._identifyMultipleLanguages = value;
    }
    public resetIdentifyMultipleLanguages() {
        this._identifyMultipleLanguages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifyMultipleLanguagesInput() {
        return this._identifyMultipleLanguages;
    }

    // input_languages - computed: true, optional: true, required: false
    private _inputLanguages?: string[]; 
    public get inputLanguages() {
        return this.getListAttribute('input_languages');
    }
    public set inputLanguages(value: string[]) {
        this._inputLanguages = value;
    }
    public resetInputLanguages() {
        this._inputLanguages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputLanguagesInput() {
        return this._inputLanguages;
    }
}
export interface ModalityProcessingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class ModalityProcessingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModalityProcessingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModalityProcessingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface PIIEntitiesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entity_types CcDataAutomationProject#pii_entity_types}
    */
    readonly piiEntityTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode CcDataAutomationProject#redaction_mask_mode}
    */
    readonly redactionMaskMode?: string;
}
export class PIIEntitiesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PIIEntitiesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._redactionMaskMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.redactionMaskMode = this._redactionMaskMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PIIEntitiesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._piiEntityTypes = undefined;
            this._redactionMaskMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._piiEntityTypes = value.piiEntityTypes;
            this._redactionMaskMode = value.redactionMaskMode;
        }
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string[]; 
    public get piiEntityTypes() {
        return this.getListAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string[]) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // redaction_mask_mode - computed: true, optional: true, required: false
    private _redactionMaskMode?: string; 
    public get redactionMaskMode() {
        return this.getStringAttribute('redaction_mask_mode');
    }
    public set redactionMaskMode(value: string) {
        this._redactionMaskMode = value;
    }
    public resetRedactionMaskMode() {
        this._redactionMaskMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactionMaskModeInput() {
        return this._redactionMaskMode;
    }
}
export interface SensitiveDataConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_mode CcDataAutomationProject#detection_mode}
    */
    readonly detectionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_scope CcDataAutomationProject#detection_scope}
    */
    readonly detectionScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration CcDataAutomationProject#pii_entities_configuration}
    */
    readonly piiEntitiesConfiguration?: PIIEntitiesConfigurationProperty;
}
export class SensitiveDataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SensitiveDataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionMode = this._detectionMode;
        }
        if (this._detectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionScope = this._detectionScope;
        }
        if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SensitiveDataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detectionMode = undefined;
            this._detectionScope = undefined;
            this._piiEntitiesConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detectionMode = value.detectionMode;
            this._detectionScope = value.detectionScope;
            this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
        }
    }

    // detection_mode - computed: true, optional: true, required: false
    private _detectionMode?: string; 
    public get detectionMode() {
        return this.getStringAttribute('detection_mode');
    }
    public set detectionMode(value: string) {
        this._detectionMode = value;
    }
    public resetDetectionMode() {
        this._detectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionModeInput() {
        return this._detectionMode;
    }

    // detection_scope - computed: true, optional: true, required: false
    private _detectionScope?: string[]; 
    public get detectionScope() {
        return this.getListAttribute('detection_scope');
    }
    public set detectionScope(value: string[]) {
        this._detectionScope = value;
    }
    public resetDetectionScope() {
        this._detectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionScopeInput() {
        return this._detectionScope;
    }

    // pii_entities_configuration - computed: true, optional: true, required: false
    private _piiEntitiesConfiguration = new PIIEntitiesConfigurationPropertyOutputReference(this, "pii_entities_configuration");
    public get piiEntitiesConfiguration() {
        return this._piiEntitiesConfiguration;
    }
    public putPiiEntitiesConfiguration(value: PIIEntitiesConfigurationProperty) {
        this._piiEntitiesConfiguration.internalValue = value;
    }
    public resetPiiEntitiesConfiguration() {
        this._piiEntitiesConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntitiesConfigurationInput() {
        return this._piiEntitiesConfiguration.internalValue;
    }
}
export interface AudioOverrideConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#language_configuration CcDataAutomationProject#language_configuration}
    */
    readonly languageConfiguration?: AudioLanguageConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#modality_processing CcDataAutomationProject#modality_processing}
    */
    readonly modalityProcessing?: ModalityProcessingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration CcDataAutomationProject#sensitive_data_configuration}
    */
    readonly sensitiveDataConfiguration?: SensitiveDataConfigurationProperty;
}
export class AudioOverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioOverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._languageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageConfiguration = this._languageConfiguration?.internalValue;
        }
        if (this._modalityProcessing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
        }
        if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioOverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._languageConfiguration.internalValue = undefined;
            this._modalityProcessing.internalValue = undefined;
            this._sensitiveDataConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._languageConfiguration.internalValue = value.languageConfiguration;
            this._modalityProcessing.internalValue = value.modalityProcessing;
            this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
        }
    }

    // language_configuration - computed: true, optional: true, required: false
    private _languageConfiguration = new AudioLanguageConfigurationPropertyOutputReference(this, "language_configuration");
    public get languageConfiguration() {
        return this._languageConfiguration;
    }
    public putLanguageConfiguration(value: AudioLanguageConfigurationProperty) {
        this._languageConfiguration.internalValue = value;
    }
    public resetLanguageConfiguration() {
        this._languageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageConfigurationInput() {
        return this._languageConfiguration.internalValue;
    }

    // modality_processing - computed: true, optional: true, required: false
    private _modalityProcessing = new ModalityProcessingConfigurationPropertyOutputReference(this, "modality_processing");
    public get modalityProcessing() {
        return this._modalityProcessing;
    }
    public putModalityProcessing(value: ModalityProcessingConfigurationProperty) {
        this._modalityProcessing.internalValue = value;
    }
    public resetModalityProcessing() {
        this._modalityProcessing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modalityProcessingInput() {
        return this._modalityProcessing.internalValue;
    }

    // sensitive_data_configuration - computed: true, optional: true, required: false
    private _sensitiveDataConfiguration = new SensitiveDataConfigurationPropertyOutputReference(this, "sensitive_data_configuration");
    public get sensitiveDataConfiguration() {
        return this._sensitiveDataConfiguration;
    }
    public putSensitiveDataConfiguration(value: SensitiveDataConfigurationProperty) {
        this._sensitiveDataConfiguration.internalValue = value;
    }
    public resetSensitiveDataConfiguration() {
        this._sensitiveDataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensitiveDataConfigurationInput() {
        return this._sensitiveDataConfiguration.internalValue;
    }
}
export interface OverrideConfigurationDocumentModalityProcessingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class OverrideConfigurationDocumentModalityProcessingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationDocumentModalityProcessingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationDocumentModalityProcessingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entity_types CcDataAutomationProject#pii_entity_types}
    */
    readonly piiEntityTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode CcDataAutomationProject#redaction_mask_mode}
    */
    readonly redactionMaskMode?: string;
}
export class OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._redactionMaskMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.redactionMaskMode = this._redactionMaskMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._piiEntityTypes = undefined;
            this._redactionMaskMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._piiEntityTypes = value.piiEntityTypes;
            this._redactionMaskMode = value.redactionMaskMode;
        }
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string[]; 
    public get piiEntityTypes() {
        return this.getListAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string[]) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // redaction_mask_mode - computed: true, optional: true, required: false
    private _redactionMaskMode?: string; 
    public get redactionMaskMode() {
        return this.getStringAttribute('redaction_mask_mode');
    }
    public set redactionMaskMode(value: string) {
        this._redactionMaskMode = value;
    }
    public resetRedactionMaskMode() {
        this._redactionMaskMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactionMaskModeInput() {
        return this._redactionMaskMode;
    }
}
export interface OverrideConfigurationDocumentSensitiveDataConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_mode CcDataAutomationProject#detection_mode}
    */
    readonly detectionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_scope CcDataAutomationProject#detection_scope}
    */
    readonly detectionScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration CcDataAutomationProject#pii_entities_configuration}
    */
    readonly piiEntitiesConfiguration?: OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty;
}
export class OverrideConfigurationDocumentSensitiveDataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationDocumentSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionMode = this._detectionMode;
        }
        if (this._detectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionScope = this._detectionScope;
        }
        if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationDocumentSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detectionMode = undefined;
            this._detectionScope = undefined;
            this._piiEntitiesConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detectionMode = value.detectionMode;
            this._detectionScope = value.detectionScope;
            this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
        }
    }

    // detection_mode - computed: true, optional: true, required: false
    private _detectionMode?: string; 
    public get detectionMode() {
        return this.getStringAttribute('detection_mode');
    }
    public set detectionMode(value: string) {
        this._detectionMode = value;
    }
    public resetDetectionMode() {
        this._detectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionModeInput() {
        return this._detectionMode;
    }

    // detection_scope - computed: true, optional: true, required: false
    private _detectionScope?: string[]; 
    public get detectionScope() {
        return this.getListAttribute('detection_scope');
    }
    public set detectionScope(value: string[]) {
        this._detectionScope = value;
    }
    public resetDetectionScope() {
        this._detectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionScopeInput() {
        return this._detectionScope;
    }

    // pii_entities_configuration - computed: true, optional: true, required: false
    private _piiEntitiesConfiguration = new OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference(this, "pii_entities_configuration");
    public get piiEntitiesConfiguration() {
        return this._piiEntitiesConfiguration;
    }
    public putPiiEntitiesConfiguration(value: OverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationProperty) {
        this._piiEntitiesConfiguration.internalValue = value;
    }
    public resetPiiEntitiesConfiguration() {
        this._piiEntitiesConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntitiesConfigurationInput() {
        return this._piiEntitiesConfiguration.internalValue;
    }
}
export interface SplitterConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class SplitterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SplitterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SplitterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface DocumentOverrideConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#modality_processing CcDataAutomationProject#modality_processing}
    */
    readonly modalityProcessing?: OverrideConfigurationDocumentModalityProcessingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration CcDataAutomationProject#sensitive_data_configuration}
    */
    readonly sensitiveDataConfiguration?: OverrideConfigurationDocumentSensitiveDataConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#splitter CcDataAutomationProject#splitter}
    */
    readonly splitter?: SplitterConfigurationProperty;
}
export class DocumentOverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentOverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modalityProcessing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
        }
        if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
        }
        if (this._splitter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitter = this._splitter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentOverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = undefined;
            this._sensitiveDataConfiguration.internalValue = undefined;
            this._splitter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = value.modalityProcessing;
            this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
            this._splitter.internalValue = value.splitter;
        }
    }

    // modality_processing - computed: true, optional: true, required: false
    private _modalityProcessing = new OverrideConfigurationDocumentModalityProcessingPropertyOutputReference(this, "modality_processing");
    public get modalityProcessing() {
        return this._modalityProcessing;
    }
    public putModalityProcessing(value: OverrideConfigurationDocumentModalityProcessingProperty) {
        this._modalityProcessing.internalValue = value;
    }
    public resetModalityProcessing() {
        this._modalityProcessing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modalityProcessingInput() {
        return this._modalityProcessing.internalValue;
    }

    // sensitive_data_configuration - computed: true, optional: true, required: false
    private _sensitiveDataConfiguration = new OverrideConfigurationDocumentSensitiveDataConfigurationPropertyOutputReference(this, "sensitive_data_configuration");
    public get sensitiveDataConfiguration() {
        return this._sensitiveDataConfiguration;
    }
    public putSensitiveDataConfiguration(value: OverrideConfigurationDocumentSensitiveDataConfigurationProperty) {
        this._sensitiveDataConfiguration.internalValue = value;
    }
    public resetSensitiveDataConfiguration() {
        this._sensitiveDataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensitiveDataConfigurationInput() {
        return this._sensitiveDataConfiguration.internalValue;
    }

    // splitter - computed: true, optional: true, required: false
    private _splitter = new SplitterConfigurationPropertyOutputReference(this, "splitter");
    public get splitter() {
        return this._splitter;
    }
    public putSplitter(value: SplitterConfigurationProperty) {
        this._splitter.internalValue = value;
    }
    public resetSplitter() {
        this._splitter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitterInput() {
        return this._splitter.internalValue;
    }
}
export interface OverrideConfigurationImageModalityProcessingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class OverrideConfigurationImageModalityProcessingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationImageModalityProcessingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationImageModalityProcessingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entity_types CcDataAutomationProject#pii_entity_types}
    */
    readonly piiEntityTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode CcDataAutomationProject#redaction_mask_mode}
    */
    readonly redactionMaskMode?: string;
}
export class OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._redactionMaskMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.redactionMaskMode = this._redactionMaskMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._piiEntityTypes = undefined;
            this._redactionMaskMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._piiEntityTypes = value.piiEntityTypes;
            this._redactionMaskMode = value.redactionMaskMode;
        }
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string[]; 
    public get piiEntityTypes() {
        return this.getListAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string[]) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // redaction_mask_mode - computed: true, optional: true, required: false
    private _redactionMaskMode?: string; 
    public get redactionMaskMode() {
        return this.getStringAttribute('redaction_mask_mode');
    }
    public set redactionMaskMode(value: string) {
        this._redactionMaskMode = value;
    }
    public resetRedactionMaskMode() {
        this._redactionMaskMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactionMaskModeInput() {
        return this._redactionMaskMode;
    }
}
export interface OverrideConfigurationImageSensitiveDataConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_mode CcDataAutomationProject#detection_mode}
    */
    readonly detectionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_scope CcDataAutomationProject#detection_scope}
    */
    readonly detectionScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration CcDataAutomationProject#pii_entities_configuration}
    */
    readonly piiEntitiesConfiguration?: OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty;
}
export class OverrideConfigurationImageSensitiveDataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationImageSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionMode = this._detectionMode;
        }
        if (this._detectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionScope = this._detectionScope;
        }
        if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationImageSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detectionMode = undefined;
            this._detectionScope = undefined;
            this._piiEntitiesConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detectionMode = value.detectionMode;
            this._detectionScope = value.detectionScope;
            this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
        }
    }

    // detection_mode - computed: true, optional: true, required: false
    private _detectionMode?: string; 
    public get detectionMode() {
        return this.getStringAttribute('detection_mode');
    }
    public set detectionMode(value: string) {
        this._detectionMode = value;
    }
    public resetDetectionMode() {
        this._detectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionModeInput() {
        return this._detectionMode;
    }

    // detection_scope - computed: true, optional: true, required: false
    private _detectionScope?: string[]; 
    public get detectionScope() {
        return this.getListAttribute('detection_scope');
    }
    public set detectionScope(value: string[]) {
        this._detectionScope = value;
    }
    public resetDetectionScope() {
        this._detectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionScopeInput() {
        return this._detectionScope;
    }

    // pii_entities_configuration - computed: true, optional: true, required: false
    private _piiEntitiesConfiguration = new OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference(this, "pii_entities_configuration");
    public get piiEntitiesConfiguration() {
        return this._piiEntitiesConfiguration;
    }
    public putPiiEntitiesConfiguration(value: OverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationProperty) {
        this._piiEntitiesConfiguration.internalValue = value;
    }
    public resetPiiEntitiesConfiguration() {
        this._piiEntitiesConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntitiesConfigurationInput() {
        return this._piiEntitiesConfiguration.internalValue;
    }
}
export interface ImageOverrideConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#modality_processing CcDataAutomationProject#modality_processing}
    */
    readonly modalityProcessing?: OverrideConfigurationImageModalityProcessingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration CcDataAutomationProject#sensitive_data_configuration}
    */
    readonly sensitiveDataConfiguration?: OverrideConfigurationImageSensitiveDataConfigurationProperty;
}
export class ImageOverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageOverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modalityProcessing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
        }
        if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageOverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = undefined;
            this._sensitiveDataConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = value.modalityProcessing;
            this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
        }
    }

    // modality_processing - computed: true, optional: true, required: false
    private _modalityProcessing = new OverrideConfigurationImageModalityProcessingPropertyOutputReference(this, "modality_processing");
    public get modalityProcessing() {
        return this._modalityProcessing;
    }
    public putModalityProcessing(value: OverrideConfigurationImageModalityProcessingProperty) {
        this._modalityProcessing.internalValue = value;
    }
    public resetModalityProcessing() {
        this._modalityProcessing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modalityProcessingInput() {
        return this._modalityProcessing.internalValue;
    }

    // sensitive_data_configuration - computed: true, optional: true, required: false
    private _sensitiveDataConfiguration = new OverrideConfigurationImageSensitiveDataConfigurationPropertyOutputReference(this, "sensitive_data_configuration");
    public get sensitiveDataConfiguration() {
        return this._sensitiveDataConfiguration;
    }
    public putSensitiveDataConfiguration(value: OverrideConfigurationImageSensitiveDataConfigurationProperty) {
        this._sensitiveDataConfiguration.internalValue = value;
    }
    public resetSensitiveDataConfiguration() {
        this._sensitiveDataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensitiveDataConfigurationInput() {
        return this._sensitiveDataConfiguration.internalValue;
    }
}
export interface ModalityRoutingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#jpeg CcDataAutomationProject#jpeg}
    */
    readonly jpeg?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#mov CcDataAutomationProject#mov}
    */
    readonly mov?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#mp_4 CcDataAutomationProject#mp_4}
    */
    readonly mp4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#png CcDataAutomationProject#png}
    */
    readonly png?: string;
}
export class ModalityRoutingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModalityRoutingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jpeg !== undefined) {
            hasAnyValues = true;
            internalValueResult.jpeg = this._jpeg;
        }
        if (this._mov !== undefined) {
            hasAnyValues = true;
            internalValueResult.mov = this._mov;
        }
        if (this._mp4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.mp4 = this._mp4;
        }
        if (this._png !== undefined) {
            hasAnyValues = true;
            internalValueResult.png = this._png;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModalityRoutingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jpeg = undefined;
            this._mov = undefined;
            this._mp4 = undefined;
            this._png = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jpeg = value.jpeg;
            this._mov = value.mov;
            this._mp4 = value.mp4;
            this._png = value.png;
        }
    }

    // jpeg - computed: true, optional: true, required: false
    private _jpeg?: string; 
    public get jpeg() {
        return this.getStringAttribute('jpeg');
    }
    public set jpeg(value: string) {
        this._jpeg = value;
    }
    public resetJpeg() {
        this._jpeg = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jpegInput() {
        return this._jpeg;
    }

    // mov - computed: true, optional: true, required: false
    private _mov?: string; 
    public get mov() {
        return this.getStringAttribute('mov');
    }
    public set mov(value: string) {
        this._mov = value;
    }
    public resetMov() {
        this._mov = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get movInput() {
        return this._mov;
    }

    // mp_4 - computed: true, optional: true, required: false
    private _mp4?: string; 
    public get mp4() {
        return this.getStringAttribute('mp_4');
    }
    public set mp4(value: string) {
        this._mp4 = value;
    }
    public resetMp4() {
        this._mp4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mp4Input() {
        return this._mp4;
    }

    // png - computed: true, optional: true, required: false
    private _png?: string; 
    public get png() {
        return this.getStringAttribute('png');
    }
    public set png(value: string) {
        this._png = value;
    }
    public resetPng() {
        this._png = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pngInput() {
        return this._png;
    }
}
export interface OverrideConfigurationVideoModalityProcessingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class OverrideConfigurationVideoModalityProcessingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationVideoModalityProcessingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationVideoModalityProcessingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entity_types CcDataAutomationProject#pii_entity_types}
    */
    readonly piiEntityTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode CcDataAutomationProject#redaction_mask_mode}
    */
    readonly redactionMaskMode?: string;
}
export class OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._redactionMaskMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.redactionMaskMode = this._redactionMaskMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._piiEntityTypes = undefined;
            this._redactionMaskMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._piiEntityTypes = value.piiEntityTypes;
            this._redactionMaskMode = value.redactionMaskMode;
        }
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string[]; 
    public get piiEntityTypes() {
        return this.getListAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string[]) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // redaction_mask_mode - computed: true, optional: true, required: false
    private _redactionMaskMode?: string; 
    public get redactionMaskMode() {
        return this.getStringAttribute('redaction_mask_mode');
    }
    public set redactionMaskMode(value: string) {
        this._redactionMaskMode = value;
    }
    public resetRedactionMaskMode() {
        this._redactionMaskMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactionMaskModeInput() {
        return this._redactionMaskMode;
    }
}
export interface OverrideConfigurationVideoSensitiveDataConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_mode CcDataAutomationProject#detection_mode}
    */
    readonly detectionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#detection_scope CcDataAutomationProject#detection_scope}
    */
    readonly detectionScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration CcDataAutomationProject#pii_entities_configuration}
    */
    readonly piiEntitiesConfiguration?: OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty;
}
export class OverrideConfigurationVideoSensitiveDataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationVideoSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionMode = this._detectionMode;
        }
        if (this._detectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectionScope = this._detectionScope;
        }
        if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationVideoSensitiveDataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detectionMode = undefined;
            this._detectionScope = undefined;
            this._piiEntitiesConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detectionMode = value.detectionMode;
            this._detectionScope = value.detectionScope;
            this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
        }
    }

    // detection_mode - computed: true, optional: true, required: false
    private _detectionMode?: string; 
    public get detectionMode() {
        return this.getStringAttribute('detection_mode');
    }
    public set detectionMode(value: string) {
        this._detectionMode = value;
    }
    public resetDetectionMode() {
        this._detectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionModeInput() {
        return this._detectionMode;
    }

    // detection_scope - computed: true, optional: true, required: false
    private _detectionScope?: string[]; 
    public get detectionScope() {
        return this.getListAttribute('detection_scope');
    }
    public set detectionScope(value: string[]) {
        this._detectionScope = value;
    }
    public resetDetectionScope() {
        this._detectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectionScopeInput() {
        return this._detectionScope;
    }

    // pii_entities_configuration - computed: true, optional: true, required: false
    private _piiEntitiesConfiguration = new OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationPropertyOutputReference(this, "pii_entities_configuration");
    public get piiEntitiesConfiguration() {
        return this._piiEntitiesConfiguration;
    }
    public putPiiEntitiesConfiguration(value: OverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationProperty) {
        this._piiEntitiesConfiguration.internalValue = value;
    }
    public resetPiiEntitiesConfiguration() {
        this._piiEntitiesConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntitiesConfigurationInput() {
        return this._piiEntitiesConfiguration.internalValue;
    }
}
export interface VideoOverrideConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#modality_processing CcDataAutomationProject#modality_processing}
    */
    readonly modalityProcessing?: OverrideConfigurationVideoModalityProcessingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration CcDataAutomationProject#sensitive_data_configuration}
    */
    readonly sensitiveDataConfiguration?: OverrideConfigurationVideoSensitiveDataConfigurationProperty;
}
export class VideoOverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoOverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modalityProcessing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
        }
        if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoOverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = undefined;
            this._sensitiveDataConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modalityProcessing.internalValue = value.modalityProcessing;
            this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
        }
    }

    // modality_processing - computed: true, optional: true, required: false
    private _modalityProcessing = new OverrideConfigurationVideoModalityProcessingPropertyOutputReference(this, "modality_processing");
    public get modalityProcessing() {
        return this._modalityProcessing;
    }
    public putModalityProcessing(value: OverrideConfigurationVideoModalityProcessingProperty) {
        this._modalityProcessing.internalValue = value;
    }
    public resetModalityProcessing() {
        this._modalityProcessing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modalityProcessingInput() {
        return this._modalityProcessing.internalValue;
    }

    // sensitive_data_configuration - computed: true, optional: true, required: false
    private _sensitiveDataConfiguration = new OverrideConfigurationVideoSensitiveDataConfigurationPropertyOutputReference(this, "sensitive_data_configuration");
    public get sensitiveDataConfiguration() {
        return this._sensitiveDataConfiguration;
    }
    public putSensitiveDataConfiguration(value: OverrideConfigurationVideoSensitiveDataConfigurationProperty) {
        this._sensitiveDataConfiguration.internalValue = value;
    }
    public resetSensitiveDataConfiguration() {
        this._sensitiveDataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sensitiveDataConfigurationInput() {
        return this._sensitiveDataConfiguration.internalValue;
    }
}
export interface OverrideConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#audio CcDataAutomationProject#audio}
    */
    readonly audio?: AudioOverrideConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#document CcDataAutomationProject#document}
    */
    readonly document?: DocumentOverrideConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#image CcDataAutomationProject#image}
    */
    readonly image?: ImageOverrideConfigurationProperty;
    /**
    * Modality routing configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#modality_routing CcDataAutomationProject#modality_routing}
    */
    readonly modalityRouting?: ModalityRoutingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#video CcDataAutomationProject#video}
    */
    readonly video?: VideoOverrideConfigurationProperty;
}
export class OverrideConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audio = this._audio?.internalValue;
        }
        if (this._document?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.document = this._document?.internalValue;
        }
        if (this._image?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image?.internalValue;
        }
        if (this._modalityRouting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modalityRouting = this._modalityRouting?.internalValue;
        }
        if (this._video?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.video = this._video?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audio.internalValue = undefined;
            this._document.internalValue = undefined;
            this._image.internalValue = undefined;
            this._modalityRouting.internalValue = undefined;
            this._video.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audio.internalValue = value.audio;
            this._document.internalValue = value.document;
            this._image.internalValue = value.image;
            this._modalityRouting.internalValue = value.modalityRouting;
            this._video.internalValue = value.video;
        }
    }

    // audio - computed: true, optional: true, required: false
    private _audio = new AudioOverrideConfigurationPropertyOutputReference(this, "audio");
    public get audio() {
        return this._audio;
    }
    public putAudio(value: AudioOverrideConfigurationProperty) {
        this._audio.internalValue = value;
    }
    public resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioInput() {
        return this._audio.internalValue;
    }

    // document - computed: true, optional: true, required: false
    private _document = new DocumentOverrideConfigurationPropertyOutputReference(this, "document");
    public get document() {
        return this._document;
    }
    public putDocument(value: DocumentOverrideConfigurationProperty) {
        this._document.internalValue = value;
    }
    public resetDocument() {
        this._document.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentInput() {
        return this._document.internalValue;
    }

    // image - computed: true, optional: true, required: false
    private _image = new ImageOverrideConfigurationPropertyOutputReference(this, "image");
    public get image() {
        return this._image;
    }
    public putImage(value: ImageOverrideConfigurationProperty) {
        this._image.internalValue = value;
    }
    public resetImage() {
        this._image.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image.internalValue;
    }

    // modality_routing - computed: true, optional: true, required: false
    private _modalityRouting = new ModalityRoutingConfigurationPropertyOutputReference(this, "modality_routing");
    public get modalityRouting() {
        return this._modalityRouting;
    }
    public putModalityRouting(value: ModalityRoutingConfigurationProperty) {
        this._modalityRouting.internalValue = value;
    }
    public resetModalityRouting() {
        this._modalityRouting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modalityRoutingInput() {
        return this._modalityRouting.internalValue;
    }

    // video - computed: true, optional: true, required: false
    private _video = new VideoOverrideConfigurationPropertyOutputReference(this, "video");
    public get video() {
        return this._video;
    }
    public putVideo(value: VideoOverrideConfigurationProperty) {
        this._video.internalValue = value;
    }
    public resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoInput() {
        return this._video.internalValue;
    }
}
export interface ChannelLabelingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class ChannelLabelingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChannelLabelingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelLabelingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface SpeakerLabelingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class SpeakerLabelingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpeakerLabelingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpeakerLabelingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface TranscriptConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#channel_labeling CcDataAutomationProject#channel_labeling}
    */
    readonly channelLabeling?: ChannelLabelingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#speaker_labeling CcDataAutomationProject#speaker_labeling}
    */
    readonly speakerLabeling?: SpeakerLabelingConfigurationProperty;
}
export class TranscriptConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TranscriptConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelLabeling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelLabeling = this._channelLabeling?.internalValue;
        }
        if (this._speakerLabeling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.speakerLabeling = this._speakerLabeling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TranscriptConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelLabeling.internalValue = undefined;
            this._speakerLabeling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelLabeling.internalValue = value.channelLabeling;
            this._speakerLabeling.internalValue = value.speakerLabeling;
        }
    }

    // channel_labeling - computed: true, optional: true, required: false
    private _channelLabeling = new ChannelLabelingConfigurationPropertyOutputReference(this, "channel_labeling");
    public get channelLabeling() {
        return this._channelLabeling;
    }
    public putChannelLabeling(value: ChannelLabelingConfigurationProperty) {
        this._channelLabeling.internalValue = value;
    }
    public resetChannelLabeling() {
        this._channelLabeling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelLabelingInput() {
        return this._channelLabeling.internalValue;
    }

    // speaker_labeling - computed: true, optional: true, required: false
    private _speakerLabeling = new SpeakerLabelingConfigurationPropertyOutputReference(this, "speaker_labeling");
    public get speakerLabeling() {
        return this._speakerLabeling;
    }
    public putSpeakerLabeling(value: SpeakerLabelingConfigurationProperty) {
        this._speakerLabeling.internalValue = value;
    }
    public resetSpeakerLabeling() {
        this._speakerLabeling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get speakerLabelingInput() {
        return this._speakerLabeling.internalValue;
    }
}
export interface AudioExtractionCategoryTypeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#transcript CcDataAutomationProject#transcript}
    */
    readonly transcript?: TranscriptConfigurationProperty;
}
export class AudioExtractionCategoryTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioExtractionCategoryTypeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transcript?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transcript = this._transcript?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioExtractionCategoryTypeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transcript.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transcript.internalValue = value.transcript;
        }
    }

    // transcript - computed: true, optional: true, required: false
    private _transcript = new TranscriptConfigurationPropertyOutputReference(this, "transcript");
    public get transcript() {
        return this._transcript;
    }
    public putTranscript(value: TranscriptConfigurationProperty) {
        this._transcript.internalValue = value;
    }
    public resetTranscript() {
        this._transcript.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transcriptInput() {
        return this._transcript.internalValue;
    }
}
export interface AudioExtractionCategoryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#type_configuration CcDataAutomationProject#type_configuration}
    */
    readonly typeConfiguration?: AudioExtractionCategoryTypeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class AudioExtractionCategoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioExtractionCategoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._typeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeConfiguration = this._typeConfiguration?.internalValue;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioExtractionCategoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._typeConfiguration.internalValue = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._typeConfiguration.internalValue = value.typeConfiguration;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // type_configuration - computed: true, optional: true, required: false
    private _typeConfiguration = new AudioExtractionCategoryTypeConfigurationPropertyOutputReference(this, "type_configuration");
    public get typeConfiguration() {
        return this._typeConfiguration;
    }
    public putTypeConfiguration(value: AudioExtractionCategoryTypeConfigurationProperty) {
        this._typeConfiguration.internalValue = value;
    }
    public resetTypeConfiguration() {
        this._typeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeConfigurationInput() {
        return this._typeConfiguration.internalValue;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface AudioStandardExtractionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#category CcDataAutomationProject#category}
    */
    readonly category?: AudioExtractionCategoryProperty;
}
export class AudioStandardExtractionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioStandardExtractionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioStandardExtractionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category.internalValue = value.category;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category = new AudioExtractionCategoryPropertyOutputReference(this, "category");
    public get category() {
        return this._category;
    }
    public putCategory(value: AudioExtractionCategoryProperty) {
        this._category.internalValue = value;
    }
    public resetCategory() {
        this._category.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category.internalValue;
    }
}
export interface AudioStandardGenerativeFieldProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class AudioStandardGenerativeFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioStandardGenerativeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioStandardGenerativeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface AudioStandardOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#extraction CcDataAutomationProject#extraction}
    */
    readonly extraction?: AudioStandardExtractionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#generative_field CcDataAutomationProject#generative_field}
    */
    readonly generativeField?: AudioStandardGenerativeFieldProperty;
}
export class AudioStandardOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioStandardOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        if (this._generativeField?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generativeField = this._generativeField?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioStandardOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extraction.internalValue = undefined;
            this._generativeField.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extraction.internalValue = value.extraction;
            this._generativeField.internalValue = value.generativeField;
        }
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new AudioStandardExtractionPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: AudioStandardExtractionProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }

    // generative_field - computed: true, optional: true, required: false
    private _generativeField = new AudioStandardGenerativeFieldPropertyOutputReference(this, "generative_field");
    public get generativeField() {
        return this._generativeField;
    }
    public putGenerativeField(value: AudioStandardGenerativeFieldProperty) {
        this._generativeField.internalValue = value;
    }
    public resetGenerativeField() {
        this._generativeField.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generativeFieldInput() {
        return this._generativeField.internalValue;
    }
}
export interface DocumentBoundingBoxProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class DocumentBoundingBoxPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentBoundingBoxProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentBoundingBoxProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface DocumentExtractionGranularityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class DocumentExtractionGranularityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentExtractionGranularityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentExtractionGranularityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._types = value.types;
        }
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface DocumentStandardExtractionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#bounding_box CcDataAutomationProject#bounding_box}
    */
    readonly boundingBox?: DocumentBoundingBoxProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#granularity CcDataAutomationProject#granularity}
    */
    readonly granularity?: DocumentExtractionGranularityProperty;
}
export class DocumentStandardExtractionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentStandardExtractionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._boundingBox?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.boundingBox = this._boundingBox?.internalValue;
        }
        if (this._granularity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.granularity = this._granularity?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentStandardExtractionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = undefined;
            this._granularity.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = value.boundingBox;
            this._granularity.internalValue = value.granularity;
        }
    }

    // bounding_box - computed: true, optional: true, required: false
    private _boundingBox = new DocumentBoundingBoxPropertyOutputReference(this, "bounding_box");
    public get boundingBox() {
        return this._boundingBox;
    }
    public putBoundingBox(value: DocumentBoundingBoxProperty) {
        this._boundingBox.internalValue = value;
    }
    public resetBoundingBox() {
        this._boundingBox.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get boundingBoxInput() {
        return this._boundingBox.internalValue;
    }

    // granularity - computed: true, optional: true, required: false
    private _granularity = new DocumentExtractionGranularityPropertyOutputReference(this, "granularity");
    public get granularity() {
        return this._granularity;
    }
    public putGranularity(value: DocumentExtractionGranularityProperty) {
        this._granularity.internalValue = value;
    }
    public resetGranularity() {
        this._granularity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get granularityInput() {
        return this._granularity.internalValue;
    }
}
export interface DocumentStandardGenerativeFieldProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class DocumentStandardGenerativeFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentStandardGenerativeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentStandardGenerativeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface DocumentOutputAdditionalFileFormatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class DocumentOutputAdditionalFileFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentOutputAdditionalFileFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentOutputAdditionalFileFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface DocumentOutputTextFormatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class DocumentOutputTextFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentOutputTextFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentOutputTextFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._types = value.types;
        }
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface DocumentOutputFormatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#additional_file_format CcDataAutomationProject#additional_file_format}
    */
    readonly additionalFileFormat?: DocumentOutputAdditionalFileFormatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#text_format CcDataAutomationProject#text_format}
    */
    readonly textFormat?: DocumentOutputTextFormatProperty;
}
export class DocumentOutputFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentOutputFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalFileFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalFileFormat = this._additionalFileFormat?.internalValue;
        }
        if (this._textFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.textFormat = this._textFormat?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentOutputFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalFileFormat.internalValue = undefined;
            this._textFormat.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalFileFormat.internalValue = value.additionalFileFormat;
            this._textFormat.internalValue = value.textFormat;
        }
    }

    // additional_file_format - computed: true, optional: true, required: false
    private _additionalFileFormat = new DocumentOutputAdditionalFileFormatPropertyOutputReference(this, "additional_file_format");
    public get additionalFileFormat() {
        return this._additionalFileFormat;
    }
    public putAdditionalFileFormat(value: DocumentOutputAdditionalFileFormatProperty) {
        this._additionalFileFormat.internalValue = value;
    }
    public resetAdditionalFileFormat() {
        this._additionalFileFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalFileFormatInput() {
        return this._additionalFileFormat.internalValue;
    }

    // text_format - computed: true, optional: true, required: false
    private _textFormat = new DocumentOutputTextFormatPropertyOutputReference(this, "text_format");
    public get textFormat() {
        return this._textFormat;
    }
    public putTextFormat(value: DocumentOutputTextFormatProperty) {
        this._textFormat.internalValue = value;
    }
    public resetTextFormat() {
        this._textFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFormatInput() {
        return this._textFormat.internalValue;
    }
}
export interface DocumentStandardOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#extraction CcDataAutomationProject#extraction}
    */
    readonly extraction?: DocumentStandardExtractionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#generative_field CcDataAutomationProject#generative_field}
    */
    readonly generativeField?: DocumentStandardGenerativeFieldProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#output_format CcDataAutomationProject#output_format}
    */
    readonly outputFormat?: DocumentOutputFormatProperty;
}
export class DocumentStandardOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentStandardOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        if (this._generativeField?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generativeField = this._generativeField?.internalValue;
        }
        if (this._outputFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputFormat = this._outputFormat?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentStandardOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extraction.internalValue = undefined;
            this._generativeField.internalValue = undefined;
            this._outputFormat.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extraction.internalValue = value.extraction;
            this._generativeField.internalValue = value.generativeField;
            this._outputFormat.internalValue = value.outputFormat;
        }
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new DocumentStandardExtractionPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: DocumentStandardExtractionProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }

    // generative_field - computed: true, optional: true, required: false
    private _generativeField = new DocumentStandardGenerativeFieldPropertyOutputReference(this, "generative_field");
    public get generativeField() {
        return this._generativeField;
    }
    public putGenerativeField(value: DocumentStandardGenerativeFieldProperty) {
        this._generativeField.internalValue = value;
    }
    public resetGenerativeField() {
        this._generativeField.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generativeFieldInput() {
        return this._generativeField.internalValue;
    }

    // output_format - computed: true, optional: true, required: false
    private _outputFormat = new DocumentOutputFormatPropertyOutputReference(this, "output_format");
    public get outputFormat() {
        return this._outputFormat;
    }
    public putOutputFormat(value: DocumentOutputFormatProperty) {
        this._outputFormat.internalValue = value;
    }
    public resetOutputFormat() {
        this._outputFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat.internalValue;
    }
}
export interface ImageBoundingBoxProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class ImageBoundingBoxPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageBoundingBoxProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageBoundingBoxProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface ImageExtractionCategoryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class ImageExtractionCategoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageExtractionCategoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageExtractionCategoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface ImageStandardExtractionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#bounding_box CcDataAutomationProject#bounding_box}
    */
    readonly boundingBox?: ImageBoundingBoxProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#category CcDataAutomationProject#category}
    */
    readonly category?: ImageExtractionCategoryProperty;
}
export class ImageStandardExtractionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageStandardExtractionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._boundingBox?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.boundingBox = this._boundingBox?.internalValue;
        }
        if (this._category?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageStandardExtractionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = undefined;
            this._category.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = value.boundingBox;
            this._category.internalValue = value.category;
        }
    }

    // bounding_box - computed: true, optional: true, required: false
    private _boundingBox = new ImageBoundingBoxPropertyOutputReference(this, "bounding_box");
    public get boundingBox() {
        return this._boundingBox;
    }
    public putBoundingBox(value: ImageBoundingBoxProperty) {
        this._boundingBox.internalValue = value;
    }
    public resetBoundingBox() {
        this._boundingBox.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get boundingBoxInput() {
        return this._boundingBox.internalValue;
    }

    // category - computed: true, optional: true, required: false
    private _category = new ImageExtractionCategoryPropertyOutputReference(this, "category");
    public get category() {
        return this._category;
    }
    public putCategory(value: ImageExtractionCategoryProperty) {
        this._category.internalValue = value;
    }
    public resetCategory() {
        this._category.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category.internalValue;
    }
}
export interface ImageStandardGenerativeFieldProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class ImageStandardGenerativeFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageStandardGenerativeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageStandardGenerativeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface ImageStandardOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#extraction CcDataAutomationProject#extraction}
    */
    readonly extraction?: ImageStandardExtractionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#generative_field CcDataAutomationProject#generative_field}
    */
    readonly generativeField?: ImageStandardGenerativeFieldProperty;
}
export class ImageStandardOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageStandardOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        if (this._generativeField?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generativeField = this._generativeField?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageStandardOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extraction.internalValue = undefined;
            this._generativeField.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extraction.internalValue = value.extraction;
            this._generativeField.internalValue = value.generativeField;
        }
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new ImageStandardExtractionPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: ImageStandardExtractionProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }

    // generative_field - computed: true, optional: true, required: false
    private _generativeField = new ImageStandardGenerativeFieldPropertyOutputReference(this, "generative_field");
    public get generativeField() {
        return this._generativeField;
    }
    public putGenerativeField(value: ImageStandardGenerativeFieldProperty) {
        this._generativeField.internalValue = value;
    }
    public resetGenerativeField() {
        this._generativeField.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generativeFieldInput() {
        return this._generativeField.internalValue;
    }
}
export interface VideoBoundingBoxProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
}
export class VideoBoundingBoxPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoBoundingBoxProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoBoundingBoxProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface VideoExtractionCategoryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class VideoExtractionCategoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoExtractionCategoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoExtractionCategoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface VideoStandardExtractionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#bounding_box CcDataAutomationProject#bounding_box}
    */
    readonly boundingBox?: VideoBoundingBoxProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#category CcDataAutomationProject#category}
    */
    readonly category?: VideoExtractionCategoryProperty;
}
export class VideoStandardExtractionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoStandardExtractionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._boundingBox?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.boundingBox = this._boundingBox?.internalValue;
        }
        if (this._category?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoStandardExtractionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = undefined;
            this._category.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._boundingBox.internalValue = value.boundingBox;
            this._category.internalValue = value.category;
        }
    }

    // bounding_box - computed: true, optional: true, required: false
    private _boundingBox = new VideoBoundingBoxPropertyOutputReference(this, "bounding_box");
    public get boundingBox() {
        return this._boundingBox;
    }
    public putBoundingBox(value: VideoBoundingBoxProperty) {
        this._boundingBox.internalValue = value;
    }
    public resetBoundingBox() {
        this._boundingBox.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get boundingBoxInput() {
        return this._boundingBox.internalValue;
    }

    // category - computed: true, optional: true, required: false
    private _category = new VideoExtractionCategoryPropertyOutputReference(this, "category");
    public get category() {
        return this._category;
    }
    public putCategory(value: VideoExtractionCategoryProperty) {
        this._category.internalValue = value;
    }
    public resetCategory() {
        this._category.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category.internalValue;
    }
}
export interface VideoStandardGenerativeFieldProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#state CcDataAutomationProject#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#types CcDataAutomationProject#types}
    */
    readonly types?: string[];
}
export class VideoStandardGenerativeFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoStandardGenerativeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoStandardGenerativeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._state = undefined;
            this._types = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._state = value.state;
            this._types = value.types;
        }
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }
}
export interface VideoStandardOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#extraction CcDataAutomationProject#extraction}
    */
    readonly extraction?: VideoStandardExtractionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#generative_field CcDataAutomationProject#generative_field}
    */
    readonly generativeField?: VideoStandardGenerativeFieldProperty;
}
export class VideoStandardOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoStandardOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extraction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraction = this._extraction?.internalValue;
        }
        if (this._generativeField?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generativeField = this._generativeField?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoStandardOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extraction.internalValue = undefined;
            this._generativeField.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extraction.internalValue = value.extraction;
            this._generativeField.internalValue = value.generativeField;
        }
    }

    // extraction - computed: true, optional: true, required: false
    private _extraction = new VideoStandardExtractionPropertyOutputReference(this, "extraction");
    public get extraction() {
        return this._extraction;
    }
    public putExtraction(value: VideoStandardExtractionProperty) {
        this._extraction.internalValue = value;
    }
    public resetExtraction() {
        this._extraction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractionInput() {
        return this._extraction.internalValue;
    }

    // generative_field - computed: true, optional: true, required: false
    private _generativeField = new VideoStandardGenerativeFieldPropertyOutputReference(this, "generative_field");
    public get generativeField() {
        return this._generativeField;
    }
    public putGenerativeField(value: VideoStandardGenerativeFieldProperty) {
        this._generativeField.internalValue = value;
    }
    public resetGenerativeField() {
        this._generativeField.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generativeFieldInput() {
        return this._generativeField.internalValue;
    }
}
export interface StandardOutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#audio CcDataAutomationProject#audio}
    */
    readonly audio?: AudioStandardOutputConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#document CcDataAutomationProject#document}
    */
    readonly document?: DocumentStandardOutputConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#image CcDataAutomationProject#image}
    */
    readonly image?: ImageStandardOutputConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#video CcDataAutomationProject#video}
    */
    readonly video?: VideoStandardOutputConfigurationProperty;
}
export class StandardOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StandardOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audio = this._audio?.internalValue;
        }
        if (this._document?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.document = this._document?.internalValue;
        }
        if (this._image?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image?.internalValue;
        }
        if (this._video?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.video = this._video?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StandardOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audio.internalValue = undefined;
            this._document.internalValue = undefined;
            this._image.internalValue = undefined;
            this._video.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audio.internalValue = value.audio;
            this._document.internalValue = value.document;
            this._image.internalValue = value.image;
            this._video.internalValue = value.video;
        }
    }

    // audio - computed: true, optional: true, required: false
    private _audio = new AudioStandardOutputConfigurationPropertyOutputReference(this, "audio");
    public get audio() {
        return this._audio;
    }
    public putAudio(value: AudioStandardOutputConfigurationProperty) {
        this._audio.internalValue = value;
    }
    public resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioInput() {
        return this._audio.internalValue;
    }

    // document - computed: true, optional: true, required: false
    private _document = new DocumentStandardOutputConfigurationPropertyOutputReference(this, "document");
    public get document() {
        return this._document;
    }
    public putDocument(value: DocumentStandardOutputConfigurationProperty) {
        this._document.internalValue = value;
    }
    public resetDocument() {
        this._document.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentInput() {
        return this._document.internalValue;
    }

    // image - computed: true, optional: true, required: false
    private _image = new ImageStandardOutputConfigurationPropertyOutputReference(this, "image");
    public get image() {
        return this._image;
    }
    public putImage(value: ImageStandardOutputConfigurationProperty) {
        this._image.internalValue = value;
    }
    public resetImage() {
        this._image.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image.internalValue;
    }

    // video - computed: true, optional: true, required: false
    private _video = new VideoStandardOutputConfigurationPropertyOutputReference(this, "video");
    public get video() {
        return this._video;
    }
    public putVideo(value: VideoStandardOutputConfigurationProperty) {
        this._video.internalValue = value;
    }
    public resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoInput() {
        return this._video.internalValue;
    }
}
export interface TagProperty {
    /**
    * Key for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#key CcDataAutomationProject#key}
    */
    readonly key?: string;
    /**
    * Value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_data_automation_project#value CcDataAutomationProject#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
