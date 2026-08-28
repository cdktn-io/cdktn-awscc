// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfiguredModelAlgorithmAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CcConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}
    */
    readonly configuredModelAlgorithmArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#description CcConfiguredModelAlgorithmAssociation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CcConfiguredModelAlgorithmAssociation#membership_identifier}
    */
    readonly membershipIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#name CcConfiguredModelAlgorithmAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CcConfiguredModelAlgorithmAssociation#privacy_configuration}
    */
    readonly privacyConfiguration?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationProperty;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#tags CcConfiguredModelAlgorithmAssociation#tags}
    */
    readonly tags?: CcConfiguredModelAlgorithmAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}
*/
export class CcConfiguredModelAlgorithmAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanroomsml_configured_model_algorithm_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfiguredModelAlgorithmAssociation to import
    * @param importFromId The id of the existing CcConfiguredModelAlgorithmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfiguredModelAlgorithmAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanroomsml_configured_model_algorithm_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfiguredModelAlgorithmAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcConfiguredModelAlgorithmAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanroomsml_configured_model_algorithm_association',
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
        this._configuredModelAlgorithmArn = config.configuredModelAlgorithmArn;
        this._description = config.description;
        this._membershipIdentifier = config.membershipIdentifier;
        this._name = config.name;
        this._privacyConfiguration.internalValue = config.privacyConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // collaboration_identifier - computed: true, optional: false, required: false
    public get collaborationIdentifier() {
        return this.getStringAttribute('collaboration_identifier');
    }

    // configured_model_algorithm_arn - computed: false, optional: false, required: true
    private _configuredModelAlgorithmArn?: string; 
    public get configuredModelAlgorithmArn() {
        return this.getStringAttribute('configured_model_algorithm_arn');
    }
    public set configuredModelAlgorithmArn(value: string) {
        this._configuredModelAlgorithmArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredModelAlgorithmArnInput() {
        return this._configuredModelAlgorithmArn;
    }

    // configured_model_algorithm_association_arn - computed: true, optional: false, required: false
    public get configuredModelAlgorithmAssociationArn() {
        return this.getStringAttribute('configured_model_algorithm_association_arn');
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

    // membership_identifier - computed: false, optional: false, required: true
    private _membershipIdentifier?: string; 
    public get membershipIdentifier() {
        return this.getStringAttribute('membership_identifier');
    }
    public set membershipIdentifier(value: string) {
        this._membershipIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get membershipIdentifierInput() {
        return this._membershipIdentifier;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // privacy_configuration - computed: true, optional: true, required: false
    private _privacyConfiguration = new CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPropertyOutputReference(this, "privacy_configuration");
    public get privacyConfiguration() {
        return this._privacyConfiguration;
    }
    public putPrivacyConfiguration(value: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationProperty) {
        this._privacyConfiguration.internalValue = value;
    }
    public resetPrivacyConfiguration() {
        this._privacyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privacyConfigurationInput() {
        return this._privacyConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfiguredModelAlgorithmAssociation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfiguredModelAlgorithmAssociation.TagProperty[] | cdktn.IResolvable) {
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
            configured_model_algorithm_arn: cdktn.stringToTerraform(this._configuredModelAlgorithmArn),
            description: cdktn.stringToTerraform(this._description),
            membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
            name: cdktn.stringToTerraform(this._name),
            privacy_configuration: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPropertyToTerraform(this._privacyConfiguration.internalValue),
            tags: cdktn.listMapper(ccConfiguredModelAlgorithmAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configured_model_algorithm_arn: {
                value: cdktn.stringToHclTerraform(this._configuredModelAlgorithmArn),
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
            membership_identifier: {
                value: cdktn.stringToHclTerraform(this._membershipIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privacy_configuration: {
                value: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPropertyToHclTerraform(this._privacyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfiguredModelAlgorithmAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConfiguredModelAlgorithmAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfiguredModelAlgorithmAssociationTrainedModelExportsMaxSizePropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelExportsMaxSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelExportsMaxSizePropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelExportsMaxSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelExportsConfigurationPolicyPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelExportsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        files_to_export: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filesToExport),
        max_size: ccConfiguredModelAlgorithmAssociationTrainedModelExportsMaxSizePropertyToTerraform(struct!.maxSize),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelExportsConfigurationPolicyPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelExportsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        files_to_export: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filesToExport),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        max_size: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelExportsMaxSizePropertyToHclTerraform(struct!.maxSize),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelExportsMaxSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationCustomEntityConfigPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.CustomEntityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_data_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customDataIdentifiers),
    }
}


export function ccConfiguredModelAlgorithmAssociationCustomEntityConfigPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.CustomEntityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_data_identifiers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customDataIdentifiers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationLogRedactionConfigurationPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.LogRedactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_entity_config: ccConfiguredModelAlgorithmAssociationCustomEntityConfigPropertyToTerraform(struct!.customEntityConfig),
        entities_to_redact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entitiesToRedact),
    }
}


export function ccConfiguredModelAlgorithmAssociationLogRedactionConfigurationPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.LogRedactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_entity_config: {
            value: ccConfiguredModelAlgorithmAssociationCustomEntityConfigPropertyToHclTerraform(struct!.customEntityConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomEntityConfigProperty",
        },
        entities_to_redact: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entitiesToRedact),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationLogsConfigurationPolicyPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.LogsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAccountIds),
        filter_pattern: cdktn.stringToTerraform(struct!.filterPattern),
        log_redaction_configuration: ccConfiguredModelAlgorithmAssociationLogRedactionConfigurationPropertyToTerraform(struct!.logRedactionConfiguration),
        log_type: cdktn.stringToTerraform(struct!.logType),
    }
}


export function ccConfiguredModelAlgorithmAssociationLogsConfigurationPolicyPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.LogsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAccountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        filter_pattern: {
            value: cdktn.stringToHclTerraform(struct!.filterPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_redaction_configuration: {
            value: ccConfiguredModelAlgorithmAssociationLogRedactionConfigurationPropertyToHclTerraform(struct!.logRedactionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogRedactionConfigurationProperty",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelInferenceMaxOutputSizePropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelInferenceMaxOutputSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelInferenceMaxOutputSizePropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelInferenceMaxOutputSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelInferenceJobsConfigurationPolicyPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelInferenceJobsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_logs: cdktn.listMapper(ccConfiguredModelAlgorithmAssociationLogsConfigurationPolicyPropertyToTerraform, false)(struct!.containerLogs),
        max_output_size: ccConfiguredModelAlgorithmAssociationTrainedModelInferenceMaxOutputSizePropertyToTerraform(struct!.maxOutputSize),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelInferenceJobsConfigurationPolicyPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelInferenceJobsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_logs: {
            value: cdktn.listMapperHcl(ccConfiguredModelAlgorithmAssociationLogsConfigurationPolicyPropertyToHclTerraform, false)(struct!.containerLogs),
            isBlock: true,
            type: "set",
            storageClassType: "LogsConfigurationPolicyPropertyList",
        },
        max_output_size: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelInferenceMaxOutputSizePropertyToHclTerraform(struct!.maxOutputSize),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelInferenceMaxOutputSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_data_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customDataIdentifiers),
    }
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_data_identifiers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customDataIdentifiers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_entity_config: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyToTerraform(struct!.customEntityConfig),
        entities_to_redact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entitiesToRedact),
    }
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_entity_config: {
            value: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyToHclTerraform(struct!.customEntityConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty",
        },
        entities_to_redact: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entitiesToRedact),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationContainerLogsPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.ContainerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAccountIds),
        filter_pattern: cdktn.stringToTerraform(struct!.filterPattern),
        log_redaction_configuration: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyToTerraform(struct!.logRedactionConfiguration),
        log_type: cdktn.stringToTerraform(struct!.logType),
    }
}


export function ccConfiguredModelAlgorithmAssociationContainerLogsPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.ContainerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAccountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        filter_pattern: {
            value: cdktn.stringToHclTerraform(struct!.filterPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_redaction_configuration: {
            value: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyToHclTerraform(struct!.logRedactionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationMetricsConfigurationPolicyPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.MetricsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        noise_level: cdktn.stringToTerraform(struct!.noiseLevel),
    }
}


export function ccConfiguredModelAlgorithmAssociationMetricsConfigurationPolicyPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.MetricsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        noise_level: {
            value: cdktn.stringToHclTerraform(struct!.noiseLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelArtifactMaxSizePropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelArtifactMaxSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelArtifactMaxSizePropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelArtifactMaxSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelsConfigurationPolicyPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_logs: cdktn.listMapper(ccConfiguredModelAlgorithmAssociationContainerLogsPropertyToTerraform, false)(struct!.containerLogs),
        container_metrics: ccConfiguredModelAlgorithmAssociationMetricsConfigurationPolicyPropertyToTerraform(struct!.containerMetrics),
        max_artifact_size: ccConfiguredModelAlgorithmAssociationTrainedModelArtifactMaxSizePropertyToTerraform(struct!.maxArtifactSize),
    }
}


export function ccConfiguredModelAlgorithmAssociationTrainedModelsConfigurationPolicyPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TrainedModelsConfigurationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_logs: {
            value: cdktn.listMapperHcl(ccConfiguredModelAlgorithmAssociationContainerLogsPropertyToHclTerraform, false)(struct!.containerLogs),
            isBlock: true,
            type: "set",
            storageClassType: "ContainerLogsPropertyList",
        },
        container_metrics: {
            value: ccConfiguredModelAlgorithmAssociationMetricsConfigurationPolicyPropertyToHclTerraform(struct!.containerMetrics),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricsConfigurationPolicyProperty",
        },
        max_artifact_size: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelArtifactMaxSizePropertyToHclTerraform(struct!.maxArtifactSize),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelArtifactMaxSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        trained_model_exports: ccConfiguredModelAlgorithmAssociationTrainedModelExportsConfigurationPolicyPropertyToTerraform(struct!.trainedModelExports),
        trained_model_inference_jobs: ccConfiguredModelAlgorithmAssociationTrainedModelInferenceJobsConfigurationPolicyPropertyToTerraform(struct!.trainedModelInferenceJobs),
        trained_models: ccConfiguredModelAlgorithmAssociationTrainedModelsConfigurationPolicyPropertyToTerraform(struct!.trainedModels),
    }
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        trained_model_exports: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelExportsConfigurationPolicyPropertyToHclTerraform(struct!.trainedModelExports),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelExportsConfigurationPolicyProperty",
        },
        trained_model_inference_jobs: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelInferenceJobsConfigurationPolicyPropertyToHclTerraform(struct!.trainedModelInferenceJobs),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelInferenceJobsConfigurationPolicyProperty",
        },
        trained_models: {
            value: ccConfiguredModelAlgorithmAssociationTrainedModelsConfigurationPolicyPropertyToHclTerraform(struct!.trainedModels),
            isBlock: true,
            type: "struct",
            storageClassType: "TrainedModelsConfigurationPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policies: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesPropertyToTerraform(struct!.policies),
    }
}


export function ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.PrivacyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policies: {
            value: ccConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesPropertyToHclTerraform(struct!.policies),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivacyConfigurationPoliciesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmAssociationTagPropertyToTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfiguredModelAlgorithmAssociationTagPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithmAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfiguredModelAlgorithmAssociation {
export interface TrainedModelExportsMaxSizeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CcConfiguredModelAlgorithmAssociation#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#value CcConfiguredModelAlgorithmAssociation#value}
    */
    readonly value?: number;
}
export class TrainedModelExportsMaxSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelExportsMaxSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelExportsMaxSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface TrainedModelExportsConfigurationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CcConfiguredModelAlgorithmAssociation#files_to_export}
    */
    readonly filesToExport?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CcConfiguredModelAlgorithmAssociation#max_size}
    */
    readonly maxSize?: TrainedModelExportsMaxSizeProperty;
}
export class TrainedModelExportsConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelExportsConfigurationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filesToExport !== undefined) {
            hasAnyValues = true;
            internalValueResult.filesToExport = this._filesToExport;
        }
        if (this._maxSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSize = this._maxSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelExportsConfigurationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filesToExport = undefined;
            this._maxSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filesToExport = value.filesToExport;
            this._maxSize.internalValue = value.maxSize;
        }
    }

    // files_to_export - computed: true, optional: true, required: false
    private _filesToExport?: string[]; 
    public get filesToExport() {
        return cdktn.Fn.tolist(this.getListAttribute('files_to_export'));
    }
    public set filesToExport(value: string[]) {
        this._filesToExport = value;
    }
    public resetFilesToExport() {
        this._filesToExport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesToExportInput() {
        return this._filesToExport;
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize = new TrainedModelExportsMaxSizePropertyOutputReference(this, "max_size");
    public get maxSize() {
        return this._maxSize;
    }
    public putMaxSize(value: TrainedModelExportsMaxSizeProperty) {
        this._maxSize.internalValue = value;
    }
    public resetMaxSize() {
        this._maxSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize.internalValue;
    }
}
export interface CustomEntityConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CcConfiguredModelAlgorithmAssociation#custom_data_identifiers}
    */
    readonly customDataIdentifiers?: string[];
}
export class CustomEntityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomEntityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customDataIdentifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.customDataIdentifiers = this._customDataIdentifiers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomEntityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customDataIdentifiers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customDataIdentifiers = value.customDataIdentifiers;
        }
    }

    // custom_data_identifiers - computed: true, optional: true, required: false
    private _customDataIdentifiers?: string[]; 
    public get customDataIdentifiers() {
        return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
    }
    public set customDataIdentifiers(value: string[]) {
        this._customDataIdentifiers = value;
    }
    public resetCustomDataIdentifiers() {
        this._customDataIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDataIdentifiersInput() {
        return this._customDataIdentifiers;
    }
}
export interface LogRedactionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CcConfiguredModelAlgorithmAssociation#custom_entity_config}
    */
    readonly customEntityConfig?: CustomEntityConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CcConfiguredModelAlgorithmAssociation#entities_to_redact}
    */
    readonly entitiesToRedact?: string[];
}
export class LogRedactionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogRedactionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customEntityConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEntityConfig = this._customEntityConfig?.internalValue;
        }
        if (this._entitiesToRedact !== undefined) {
            hasAnyValues = true;
            internalValueResult.entitiesToRedact = this._entitiesToRedact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogRedactionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customEntityConfig.internalValue = undefined;
            this._entitiesToRedact = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customEntityConfig.internalValue = value.customEntityConfig;
            this._entitiesToRedact = value.entitiesToRedact;
        }
    }

    // custom_entity_config - computed: true, optional: true, required: false
    private _customEntityConfig = new CustomEntityConfigPropertyOutputReference(this, "custom_entity_config");
    public get customEntityConfig() {
        return this._customEntityConfig;
    }
    public putCustomEntityConfig(value: CustomEntityConfigProperty) {
        this._customEntityConfig.internalValue = value;
    }
    public resetCustomEntityConfig() {
        this._customEntityConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEntityConfigInput() {
        return this._customEntityConfig.internalValue;
    }

    // entities_to_redact - computed: true, optional: true, required: false
    private _entitiesToRedact?: string[]; 
    public get entitiesToRedact() {
        return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
    }
    public set entitiesToRedact(value: string[]) {
        this._entitiesToRedact = value;
    }
    public resetEntitiesToRedact() {
        this._entitiesToRedact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entitiesToRedactInput() {
        return this._entitiesToRedact;
    }
}
export interface LogsConfigurationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CcConfiguredModelAlgorithmAssociation#allowed_account_ids}
    */
    readonly allowedAccountIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CcConfiguredModelAlgorithmAssociation#filter_pattern}
    */
    readonly filterPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CcConfiguredModelAlgorithmAssociation#log_redaction_configuration}
    */
    readonly logRedactionConfiguration?: LogRedactionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CcConfiguredModelAlgorithmAssociation#log_type}
    */
    readonly logType?: string;
}
export class LogsConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogsConfigurationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAccountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAccountIds = this._allowedAccountIds;
        }
        if (this._filterPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterPattern = this._filterPattern;
        }
        if (this._logRedactionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logRedactionConfiguration = this._logRedactionConfiguration?.internalValue;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogsConfigurationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAccountIds = undefined;
            this._filterPattern = undefined;
            this._logRedactionConfiguration.internalValue = undefined;
            this._logType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAccountIds = value.allowedAccountIds;
            this._filterPattern = value.filterPattern;
            this._logRedactionConfiguration.internalValue = value.logRedactionConfiguration;
            this._logType = value.logType;
        }
    }

    // allowed_account_ids - computed: true, optional: true, required: false
    private _allowedAccountIds?: string[]; 
    public get allowedAccountIds() {
        return this.getListAttribute('allowed_account_ids');
    }
    public set allowedAccountIds(value: string[]) {
        this._allowedAccountIds = value;
    }
    public resetAllowedAccountIds() {
        this._allowedAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAccountIdsInput() {
        return this._allowedAccountIds;
    }

    // filter_pattern - computed: true, optional: true, required: false
    private _filterPattern?: string; 
    public get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
        this._filterPattern = value;
    }
    public resetFilterPattern() {
        this._filterPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
        return this._filterPattern;
    }

    // log_redaction_configuration - computed: true, optional: true, required: false
    private _logRedactionConfiguration = new LogRedactionConfigurationPropertyOutputReference(this, "log_redaction_configuration");
    public get logRedactionConfiguration() {
        return this._logRedactionConfiguration;
    }
    public putLogRedactionConfiguration(value: LogRedactionConfigurationProperty) {
        this._logRedactionConfiguration.internalValue = value;
    }
    public resetLogRedactionConfiguration() {
        this._logRedactionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logRedactionConfigurationInput() {
        return this._logRedactionConfiguration.internalValue;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }
}

export class LogsConfigurationPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : LogsConfigurationPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): LogsConfigurationPolicyPropertyOutputReference {
        return new LogsConfigurationPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TrainedModelInferenceMaxOutputSizeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CcConfiguredModelAlgorithmAssociation#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#value CcConfiguredModelAlgorithmAssociation#value}
    */
    readonly value?: number;
}
export class TrainedModelInferenceMaxOutputSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelInferenceMaxOutputSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelInferenceMaxOutputSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface TrainedModelInferenceJobsConfigurationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CcConfiguredModelAlgorithmAssociation#container_logs}
    */
    readonly containerLogs?: LogsConfigurationPolicyProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CcConfiguredModelAlgorithmAssociation#max_output_size}
    */
    readonly maxOutputSize?: TrainedModelInferenceMaxOutputSizeProperty;
}
export class TrainedModelInferenceJobsConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelInferenceJobsConfigurationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerLogs = this._containerLogs?.internalValue;
        }
        if (this._maxOutputSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxOutputSize = this._maxOutputSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelInferenceJobsConfigurationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerLogs.internalValue = undefined;
            this._maxOutputSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerLogs.internalValue = value.containerLogs;
            this._maxOutputSize.internalValue = value.maxOutputSize;
        }
    }

    // container_logs - computed: true, optional: true, required: false
    private _containerLogs = new LogsConfigurationPolicyPropertyList(this, "container_logs", true);
    public get containerLogs() {
        return this._containerLogs;
    }
    public putContainerLogs(value: LogsConfigurationPolicyProperty[] | cdktn.IResolvable) {
        this._containerLogs.internalValue = value;
    }
    public resetContainerLogs() {
        this._containerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerLogsInput() {
        return this._containerLogs.internalValue;
    }

    // max_output_size - computed: true, optional: true, required: false
    private _maxOutputSize = new TrainedModelInferenceMaxOutputSizePropertyOutputReference(this, "max_output_size");
    public get maxOutputSize() {
        return this._maxOutputSize;
    }
    public putMaxOutputSize(value: TrainedModelInferenceMaxOutputSizeProperty) {
        this._maxOutputSize.internalValue = value;
    }
    public resetMaxOutputSize() {
        this._maxOutputSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxOutputSizeInput() {
        return this._maxOutputSize.internalValue;
    }
}
export interface PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CcConfiguredModelAlgorithmAssociation#custom_data_identifiers}
    */
    readonly customDataIdentifiers?: string[];
}
export class PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customDataIdentifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.customDataIdentifiers = this._customDataIdentifiers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customDataIdentifiers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customDataIdentifiers = value.customDataIdentifiers;
        }
    }

    // custom_data_identifiers - computed: true, optional: true, required: false
    private _customDataIdentifiers?: string[]; 
    public get customDataIdentifiers() {
        return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
    }
    public set customDataIdentifiers(value: string[]) {
        this._customDataIdentifiers = value;
    }
    public resetCustomDataIdentifiers() {
        this._customDataIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDataIdentifiersInput() {
        return this._customDataIdentifiers;
    }
}
export interface PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CcConfiguredModelAlgorithmAssociation#custom_entity_config}
    */
    readonly customEntityConfig?: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CcConfiguredModelAlgorithmAssociation#entities_to_redact}
    */
    readonly entitiesToRedact?: string[];
}
export class PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customEntityConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEntityConfig = this._customEntityConfig?.internalValue;
        }
        if (this._entitiesToRedact !== undefined) {
            hasAnyValues = true;
            internalValueResult.entitiesToRedact = this._entitiesToRedact;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customEntityConfig.internalValue = undefined;
            this._entitiesToRedact = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customEntityConfig.internalValue = value.customEntityConfig;
            this._entitiesToRedact = value.entitiesToRedact;
        }
    }

    // custom_entity_config - computed: true, optional: true, required: false
    private _customEntityConfig = new PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigPropertyOutputReference(this, "custom_entity_config");
    public get customEntityConfig() {
        return this._customEntityConfig;
    }
    public putCustomEntityConfig(value: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigProperty) {
        this._customEntityConfig.internalValue = value;
    }
    public resetCustomEntityConfig() {
        this._customEntityConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEntityConfigInput() {
        return this._customEntityConfig.internalValue;
    }

    // entities_to_redact - computed: true, optional: true, required: false
    private _entitiesToRedact?: string[]; 
    public get entitiesToRedact() {
        return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
    }
    public set entitiesToRedact(value: string[]) {
        this._entitiesToRedact = value;
    }
    public resetEntitiesToRedact() {
        this._entitiesToRedact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entitiesToRedactInput() {
        return this._entitiesToRedact;
    }
}
export interface ContainerLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CcConfiguredModelAlgorithmAssociation#allowed_account_ids}
    */
    readonly allowedAccountIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CcConfiguredModelAlgorithmAssociation#filter_pattern}
    */
    readonly filterPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CcConfiguredModelAlgorithmAssociation#log_redaction_configuration}
    */
    readonly logRedactionConfiguration?: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CcConfiguredModelAlgorithmAssociation#log_type}
    */
    readonly logType?: string;
}
export class ContainerLogsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAccountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAccountIds = this._allowedAccountIds;
        }
        if (this._filterPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterPattern = this._filterPattern;
        }
        if (this._logRedactionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logRedactionConfiguration = this._logRedactionConfiguration?.internalValue;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAccountIds = undefined;
            this._filterPattern = undefined;
            this._logRedactionConfiguration.internalValue = undefined;
            this._logType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAccountIds = value.allowedAccountIds;
            this._filterPattern = value.filterPattern;
            this._logRedactionConfiguration.internalValue = value.logRedactionConfiguration;
            this._logType = value.logType;
        }
    }

    // allowed_account_ids - computed: true, optional: true, required: false
    private _allowedAccountIds?: string[]; 
    public get allowedAccountIds() {
        return this.getListAttribute('allowed_account_ids');
    }
    public set allowedAccountIds(value: string[]) {
        this._allowedAccountIds = value;
    }
    public resetAllowedAccountIds() {
        this._allowedAccountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAccountIdsInput() {
        return this._allowedAccountIds;
    }

    // filter_pattern - computed: true, optional: true, required: false
    private _filterPattern?: string; 
    public get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
        this._filterPattern = value;
    }
    public resetFilterPattern() {
        this._filterPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
        return this._filterPattern;
    }

    // log_redaction_configuration - computed: true, optional: true, required: false
    private _logRedactionConfiguration = new PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationPropertyOutputReference(this, "log_redaction_configuration");
    public get logRedactionConfiguration() {
        return this._logRedactionConfiguration;
    }
    public putLogRedactionConfiguration(value: PrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationProperty) {
        this._logRedactionConfiguration.internalValue = value;
    }
    public resetLogRedactionConfiguration() {
        this._logRedactionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logRedactionConfigurationInput() {
        return this._logRedactionConfiguration.internalValue;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }
}

export class ContainerLogsPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerLogsProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerLogsPropertyOutputReference {
        return new ContainerLogsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricsConfigurationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CcConfiguredModelAlgorithmAssociation#noise_level}
    */
    readonly noiseLevel?: string;
}
export class MetricsConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsConfigurationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._noiseLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.noiseLevel = this._noiseLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsConfigurationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._noiseLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._noiseLevel = value.noiseLevel;
        }
    }

    // noise_level - computed: true, optional: true, required: false
    private _noiseLevel?: string; 
    public get noiseLevel() {
        return this.getStringAttribute('noise_level');
    }
    public set noiseLevel(value: string) {
        this._noiseLevel = value;
    }
    public resetNoiseLevel() {
        this._noiseLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noiseLevelInput() {
        return this._noiseLevel;
    }
}
export interface TrainedModelArtifactMaxSizeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CcConfiguredModelAlgorithmAssociation#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#value CcConfiguredModelAlgorithmAssociation#value}
    */
    readonly value?: number;
}
export class TrainedModelArtifactMaxSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelArtifactMaxSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelArtifactMaxSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface TrainedModelsConfigurationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CcConfiguredModelAlgorithmAssociation#container_logs}
    */
    readonly containerLogs?: ContainerLogsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CcConfiguredModelAlgorithmAssociation#container_metrics}
    */
    readonly containerMetrics?: MetricsConfigurationPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CcConfiguredModelAlgorithmAssociation#max_artifact_size}
    */
    readonly maxArtifactSize?: TrainedModelArtifactMaxSizeProperty;
}
export class TrainedModelsConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainedModelsConfigurationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerLogs = this._containerLogs?.internalValue;
        }
        if (this._containerMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerMetrics = this._containerMetrics?.internalValue;
        }
        if (this._maxArtifactSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxArtifactSize = this._maxArtifactSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainedModelsConfigurationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerLogs.internalValue = undefined;
            this._containerMetrics.internalValue = undefined;
            this._maxArtifactSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerLogs.internalValue = value.containerLogs;
            this._containerMetrics.internalValue = value.containerMetrics;
            this._maxArtifactSize.internalValue = value.maxArtifactSize;
        }
    }

    // container_logs - computed: true, optional: true, required: false
    private _containerLogs = new ContainerLogsPropertyList(this, "container_logs", true);
    public get containerLogs() {
        return this._containerLogs;
    }
    public putContainerLogs(value: ContainerLogsProperty[] | cdktn.IResolvable) {
        this._containerLogs.internalValue = value;
    }
    public resetContainerLogs() {
        this._containerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerLogsInput() {
        return this._containerLogs.internalValue;
    }

    // container_metrics - computed: true, optional: true, required: false
    private _containerMetrics = new MetricsConfigurationPolicyPropertyOutputReference(this, "container_metrics");
    public get containerMetrics() {
        return this._containerMetrics;
    }
    public putContainerMetrics(value: MetricsConfigurationPolicyProperty) {
        this._containerMetrics.internalValue = value;
    }
    public resetContainerMetrics() {
        this._containerMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerMetricsInput() {
        return this._containerMetrics.internalValue;
    }

    // max_artifact_size - computed: true, optional: true, required: false
    private _maxArtifactSize = new TrainedModelArtifactMaxSizePropertyOutputReference(this, "max_artifact_size");
    public get maxArtifactSize() {
        return this._maxArtifactSize;
    }
    public putMaxArtifactSize(value: TrainedModelArtifactMaxSizeProperty) {
        this._maxArtifactSize.internalValue = value;
    }
    public resetMaxArtifactSize() {
        this._maxArtifactSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxArtifactSizeInput() {
        return this._maxArtifactSize.internalValue;
    }
}
export interface PrivacyConfigurationPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CcConfiguredModelAlgorithmAssociation#trained_model_exports}
    */
    readonly trainedModelExports?: TrainedModelExportsConfigurationPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CcConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}
    */
    readonly trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CcConfiguredModelAlgorithmAssociation#trained_models}
    */
    readonly trainedModels?: TrainedModelsConfigurationPolicyProperty;
}
export class PrivacyConfigurationPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivacyConfigurationPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._trainedModelExports?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainedModelExports = this._trainedModelExports?.internalValue;
        }
        if (this._trainedModelInferenceJobs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainedModelInferenceJobs = this._trainedModelInferenceJobs?.internalValue;
        }
        if (this._trainedModels?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainedModels = this._trainedModels?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivacyConfigurationPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._trainedModelExports.internalValue = undefined;
            this._trainedModelInferenceJobs.internalValue = undefined;
            this._trainedModels.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._trainedModelExports.internalValue = value.trainedModelExports;
            this._trainedModelInferenceJobs.internalValue = value.trainedModelInferenceJobs;
            this._trainedModels.internalValue = value.trainedModels;
        }
    }

    // trained_model_exports - computed: true, optional: true, required: false
    private _trainedModelExports = new TrainedModelExportsConfigurationPolicyPropertyOutputReference(this, "trained_model_exports");
    public get trainedModelExports() {
        return this._trainedModelExports;
    }
    public putTrainedModelExports(value: TrainedModelExportsConfigurationPolicyProperty) {
        this._trainedModelExports.internalValue = value;
    }
    public resetTrainedModelExports() {
        this._trainedModelExports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainedModelExportsInput() {
        return this._trainedModelExports.internalValue;
    }

    // trained_model_inference_jobs - computed: true, optional: true, required: false
    private _trainedModelInferenceJobs = new TrainedModelInferenceJobsConfigurationPolicyPropertyOutputReference(this, "trained_model_inference_jobs");
    public get trainedModelInferenceJobs() {
        return this._trainedModelInferenceJobs;
    }
    public putTrainedModelInferenceJobs(value: TrainedModelInferenceJobsConfigurationPolicyProperty) {
        this._trainedModelInferenceJobs.internalValue = value;
    }
    public resetTrainedModelInferenceJobs() {
        this._trainedModelInferenceJobs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainedModelInferenceJobsInput() {
        return this._trainedModelInferenceJobs.internalValue;
    }

    // trained_models - computed: true, optional: true, required: false
    private _trainedModels = new TrainedModelsConfigurationPolicyPropertyOutputReference(this, "trained_models");
    public get trainedModels() {
        return this._trainedModels;
    }
    public putTrainedModels(value: TrainedModelsConfigurationPolicyProperty) {
        this._trainedModels.internalValue = value;
    }
    public resetTrainedModels() {
        this._trainedModels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainedModelsInput() {
        return this._trainedModels.internalValue;
    }
}
export interface PrivacyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CcConfiguredModelAlgorithmAssociation#policies}
    */
    readonly policies?: PrivacyConfigurationPoliciesProperty;
}
export class PrivacyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivacyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivacyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policies.internalValue = value.policies;
        }
    }

    // policies - computed: true, optional: true, required: false
    private _policies = new PrivacyConfigurationPoliciesPropertyOutputReference(this, "policies");
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: PrivacyConfigurationPoliciesProperty) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#key CcConfiguredModelAlgorithmAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_configured_model_algorithm_association#value CcConfiguredModelAlgorithmAssociation#value}
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
