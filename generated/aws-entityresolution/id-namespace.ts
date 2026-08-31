// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdNamespaceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#description CcIdNamespace#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties CcIdNamespace#id_mapping_workflow_properties}
    */
    readonly idMappingWorkflowProperties?: CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_namespace_name CcIdNamespace#id_namespace_name}
    */
    readonly idNamespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_config CcIdNamespace#input_source_config}
    */
    readonly inputSourceConfig?: CcIdNamespace.IdNamespaceInputSourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#role_arn CcIdNamespace#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#tags CcIdNamespace#tags}
    */
    readonly tags?: CcIdNamespace.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#type CcIdNamespace#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace}
*/
export class CcIdNamespace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_entityresolution_id_namespace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdNamespace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdNamespace to import
    * @param importFromId The id of the existing CcIdNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdNamespace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_id_namespace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdNamespaceProps
    */
    public constructor(scope: Construct, id: string, config: CcIdNamespaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_entityresolution_id_namespace',
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
        this._description = config.description;
        this._idMappingWorkflowProperties.internalValue = config.idMappingWorkflowProperties;
        this._idNamespaceName = config.idNamespaceName;
        this._inputSourceConfig.internalValue = config.inputSourceConfig;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // id_mapping_workflow_properties - computed: true, optional: true, required: false
    private _idMappingWorkflowProperties = new CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesPropertyList(this, "id_mapping_workflow_properties", false);
    public get idMappingWorkflowProperties() {
        return this._idMappingWorkflowProperties;
    }
    public putIdMappingWorkflowProperties(value: CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty[] | cdktn.IResolvable) {
        this._idMappingWorkflowProperties.internalValue = value;
    }
    public resetIdMappingWorkflowProperties() {
        this._idMappingWorkflowProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idMappingWorkflowPropertiesInput() {
        return this._idMappingWorkflowProperties.internalValue;
    }

    // id_namespace_arn - computed: true, optional: false, required: false
    public get idNamespaceArn() {
        return this.getStringAttribute('id_namespace_arn');
    }

    // id_namespace_name - computed: false, optional: false, required: true
    private _idNamespaceName?: string; 
    public get idNamespaceName() {
        return this.getStringAttribute('id_namespace_name');
    }
    public set idNamespaceName(value: string) {
        this._idNamespaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idNamespaceNameInput() {
        return this._idNamespaceName;
    }

    // input_source_config - computed: true, optional: true, required: false
    private _inputSourceConfig = new CcIdNamespace.IdNamespaceInputSourcePropertyList(this, "input_source_config", false);
    public get inputSourceConfig() {
        return this._inputSourceConfig;
    }
    public putInputSourceConfig(value: CcIdNamespace.IdNamespaceInputSourceProperty[] | cdktn.IResolvable) {
        this._inputSourceConfig.internalValue = value;
    }
    public resetInputSourceConfig() {
        this._inputSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSourceConfigInput() {
        return this._inputSourceConfig.internalValue;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIdNamespace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIdNamespace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            id_mapping_workflow_properties: cdktn.listMapper(ccIdNamespaceIdNamespaceIdMappingWorkflowPropertiesPropertyToTerraform, false)(this._idMappingWorkflowProperties.internalValue),
            id_namespace_name: cdktn.stringToTerraform(this._idNamespaceName),
            input_source_config: cdktn.listMapper(ccIdNamespaceIdNamespaceInputSourcePropertyToTerraform, false)(this._inputSourceConfig.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccIdNamespaceTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id_mapping_workflow_properties: {
                value: cdktn.listMapperHcl(ccIdNamespaceIdNamespaceIdMappingWorkflowPropertiesPropertyToHclTerraform, false)(this._idMappingWorkflowProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesPropertyList",
            },
            id_namespace_name: {
                value: cdktn.stringToHclTerraform(this._idNamespaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_source_config: {
                value: cdktn.listMapperHcl(ccIdNamespaceIdNamespaceInputSourcePropertyToHclTerraform, false)(this._inputSourceConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIdNamespace.IdNamespaceInputSourcePropertyList",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIdNamespaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIdNamespace.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdNamespaceNamespaceProviderPropertiesPropertyToTerraform(struct?: CcIdNamespace.NamespaceProviderPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provider_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.providerConfiguration),
        provider_service_arn: cdktn.stringToTerraform(struct!.providerServiceArn),
    }
}


export function ccIdNamespaceNamespaceProviderPropertiesPropertyToHclTerraform(struct?: CcIdNamespace.NamespaceProviderPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provider_configuration: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.providerConfiguration),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        provider_service_arn: {
            value: cdktn.stringToHclTerraform(struct!.providerServiceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdNamespaceRulePropertyToTerraform(struct?: CcIdNamespace.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingKeys),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccIdNamespaceRulePropertyToHclTerraform(struct?: CcIdNamespace.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchingKeys),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdNamespaceNamespaceRuleBasedPropertiesPropertyToTerraform(struct?: CcIdNamespace.NamespaceRuleBasedPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_matching_model: cdktn.stringToTerraform(struct!.attributeMatchingModel),
        record_matching_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recordMatchingModels),
        rule_definition_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleDefinitionTypes),
        rules: cdktn.listMapper(ccIdNamespaceRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccIdNamespaceNamespaceRuleBasedPropertiesPropertyToHclTerraform(struct?: CcIdNamespace.NamespaceRuleBasedPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_matching_model: {
            value: cdktn.stringToHclTerraform(struct!.attributeMatchingModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_matching_models: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recordMatchingModels),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        rule_definition_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleDefinitionTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        rules: {
            value: cdktn.listMapperHcl(ccIdNamespaceRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdNamespaceIdNamespaceIdMappingWorkflowPropertiesPropertyToTerraform(struct?: CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id_mapping_type: cdktn.stringToTerraform(struct!.idMappingType),
        provider_properties: ccIdNamespaceNamespaceProviderPropertiesPropertyToTerraform(struct!.providerProperties),
        rule_based_properties: ccIdNamespaceNamespaceRuleBasedPropertiesPropertyToTerraform(struct!.ruleBasedProperties),
    }
}


export function ccIdNamespaceIdNamespaceIdMappingWorkflowPropertiesPropertyToHclTerraform(struct?: CcIdNamespace.IdNamespaceIdMappingWorkflowPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id_mapping_type: {
            value: cdktn.stringToHclTerraform(struct!.idMappingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider_properties: {
            value: ccIdNamespaceNamespaceProviderPropertiesPropertyToHclTerraform(struct!.providerProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "NamespaceProviderPropertiesProperty",
        },
        rule_based_properties: {
            value: ccIdNamespaceNamespaceRuleBasedPropertiesPropertyToHclTerraform(struct!.ruleBasedProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "NamespaceRuleBasedPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdNamespaceIdNamespaceInputSourcePropertyToTerraform(struct?: CcIdNamespace.IdNamespaceInputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_source_arn: cdktn.stringToTerraform(struct!.inputSourceArn),
        schema_name: cdktn.stringToTerraform(struct!.schemaName),
    }
}


export function ccIdNamespaceIdNamespaceInputSourcePropertyToHclTerraform(struct?: CcIdNamespace.IdNamespaceInputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.inputSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_name: {
            value: cdktn.stringToHclTerraform(struct!.schemaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdNamespaceTagPropertyToTerraform(struct?: CcIdNamespace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdNamespaceTagPropertyToHclTerraform(struct?: CcIdNamespace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIdNamespace {
export interface NamespaceProviderPropertiesProperty {
    /**
    * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_configuration CcIdNamespace#provider_configuration}
    */
    readonly providerConfiguration?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_service_arn CcIdNamespace#provider_service_arn}
    */
    readonly providerServiceArn?: string;
}
export class NamespaceProviderPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NamespaceProviderPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._providerConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerConfiguration = this._providerConfiguration;
        }
        if (this._providerServiceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerServiceArn = this._providerServiceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NamespaceProviderPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._providerConfiguration = undefined;
            this._providerServiceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._providerConfiguration = value.providerConfiguration;
            this._providerServiceArn = value.providerServiceArn;
        }
    }

    // provider_configuration - computed: true, optional: true, required: false
    private _providerConfiguration?: { [key: string]: string }; 
    public get providerConfiguration() {
        return this.getStringMapAttribute('provider_configuration');
    }
    public set providerConfiguration(value: { [key: string]: string }) {
        this._providerConfiguration = value;
    }
    public resetProviderConfiguration() {
        this._providerConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerConfigurationInput() {
        return this._providerConfiguration;
    }

    // provider_service_arn - computed: true, optional: true, required: false
    private _providerServiceArn?: string; 
    public get providerServiceArn() {
        return this.getStringAttribute('provider_service_arn');
    }
    public set providerServiceArn(value: string) {
        this._providerServiceArn = value;
    }
    public resetProviderServiceArn() {
        this._providerServiceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerServiceArnInput() {
        return this._providerServiceArn;
    }
}
export interface RuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#matching_keys CcIdNamespace#matching_keys}
    */
    readonly matchingKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_name CcIdNamespace#rule_name}
    */
    readonly ruleName?: string;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingKeys = this._matchingKeys;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingKeys = undefined;
            this._ruleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingKeys = value.matchingKeys;
            this._ruleName = value.ruleName;
        }
    }

    // matching_keys - computed: true, optional: true, required: false
    private _matchingKeys?: string[]; 
    public get matchingKeys() {
        return this.getListAttribute('matching_keys');
    }
    public set matchingKeys(value: string[]) {
        this._matchingKeys = value;
    }
    public resetMatchingKeys() {
        this._matchingKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingKeysInput() {
        return this._matchingKeys;
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }
}

export class RulePropertyList extends cdktn.ComplexList {
    public internalValue? : RuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RulePropertyOutputReference {
        return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NamespaceRuleBasedPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#attribute_matching_model CcIdNamespace#attribute_matching_model}
    */
    readonly attributeMatchingModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#record_matching_models CcIdNamespace#record_matching_models}
    */
    readonly recordMatchingModels?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_definition_types CcIdNamespace#rule_definition_types}
    */
    readonly ruleDefinitionTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rules CcIdNamespace#rules}
    */
    readonly rules?: RuleProperty[] | cdktn.IResolvable;
}
export class NamespaceRuleBasedPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NamespaceRuleBasedPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeMatchingModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
        }
        if (this._recordMatchingModels !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordMatchingModels = this._recordMatchingModels;
        }
        if (this._ruleDefinitionTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleDefinitionTypes = this._ruleDefinitionTypes;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NamespaceRuleBasedPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeMatchingModel = undefined;
            this._recordMatchingModels = undefined;
            this._ruleDefinitionTypes = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeMatchingModel = value.attributeMatchingModel;
            this._recordMatchingModels = value.recordMatchingModels;
            this._ruleDefinitionTypes = value.ruleDefinitionTypes;
            this._rules.internalValue = value.rules;
        }
    }

    // attribute_matching_model - computed: true, optional: true, required: false
    private _attributeMatchingModel?: string; 
    public get attributeMatchingModel() {
        return this.getStringAttribute('attribute_matching_model');
    }
    public set attributeMatchingModel(value: string) {
        this._attributeMatchingModel = value;
    }
    public resetAttributeMatchingModel() {
        this._attributeMatchingModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeMatchingModelInput() {
        return this._attributeMatchingModel;
    }

    // record_matching_models - computed: true, optional: true, required: false
    private _recordMatchingModels?: string[]; 
    public get recordMatchingModels() {
        return this.getListAttribute('record_matching_models');
    }
    public set recordMatchingModels(value: string[]) {
        this._recordMatchingModels = value;
    }
    public resetRecordMatchingModels() {
        this._recordMatchingModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordMatchingModelsInput() {
        return this._recordMatchingModels;
    }

    // rule_definition_types - computed: true, optional: true, required: false
    private _ruleDefinitionTypes?: string[]; 
    public get ruleDefinitionTypes() {
        return this.getListAttribute('rule_definition_types');
    }
    public set ruleDefinitionTypes(value: string[]) {
        this._ruleDefinitionTypes = value;
    }
    public resetRuleDefinitionTypes() {
        this._ruleDefinitionTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleDefinitionTypesInput() {
        return this._ruleDefinitionTypes;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new RulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: RuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}
export interface IdNamespaceIdMappingWorkflowPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_type CcIdNamespace#id_mapping_type}
    */
    readonly idMappingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_properties CcIdNamespace#provider_properties}
    */
    readonly providerProperties?: NamespaceProviderPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_based_properties CcIdNamespace#rule_based_properties}
    */
    readonly ruleBasedProperties?: NamespaceRuleBasedPropertiesProperty;
}
export class IdNamespaceIdMappingWorkflowPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IdNamespaceIdMappingWorkflowPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idMappingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.idMappingType = this._idMappingType;
        }
        if (this._providerProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerProperties = this._providerProperties?.internalValue;
        }
        if (this._ruleBasedProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleBasedProperties = this._ruleBasedProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdNamespaceIdMappingWorkflowPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idMappingType = undefined;
            this._providerProperties.internalValue = undefined;
            this._ruleBasedProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idMappingType = value.idMappingType;
            this._providerProperties.internalValue = value.providerProperties;
            this._ruleBasedProperties.internalValue = value.ruleBasedProperties;
        }
    }

    // id_mapping_type - computed: true, optional: true, required: false
    private _idMappingType?: string; 
    public get idMappingType() {
        return this.getStringAttribute('id_mapping_type');
    }
    public set idMappingType(value: string) {
        this._idMappingType = value;
    }
    public resetIdMappingType() {
        this._idMappingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idMappingTypeInput() {
        return this._idMappingType;
    }

    // provider_properties - computed: true, optional: true, required: false
    private _providerProperties = new NamespaceProviderPropertiesPropertyOutputReference(this, "provider_properties");
    public get providerProperties() {
        return this._providerProperties;
    }
    public putProviderProperties(value: NamespaceProviderPropertiesProperty) {
        this._providerProperties.internalValue = value;
    }
    public resetProviderProperties() {
        this._providerProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerPropertiesInput() {
        return this._providerProperties.internalValue;
    }

    // rule_based_properties - computed: true, optional: true, required: false
    private _ruleBasedProperties = new NamespaceRuleBasedPropertiesPropertyOutputReference(this, "rule_based_properties");
    public get ruleBasedProperties() {
        return this._ruleBasedProperties;
    }
    public putRuleBasedProperties(value: NamespaceRuleBasedPropertiesProperty) {
        this._ruleBasedProperties.internalValue = value;
    }
    public resetRuleBasedProperties() {
        this._ruleBasedProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleBasedPropertiesInput() {
        return this._ruleBasedProperties.internalValue;
    }
}

export class IdNamespaceIdMappingWorkflowPropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : IdNamespaceIdMappingWorkflowPropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): IdNamespaceIdMappingWorkflowPropertiesPropertyOutputReference {
        return new IdNamespaceIdMappingWorkflowPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IdNamespaceInputSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_arn CcIdNamespace#input_source_arn}
    */
    readonly inputSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#schema_name CcIdNamespace#schema_name}
    */
    readonly schemaName?: string;
}
export class IdNamespaceInputSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IdNamespaceInputSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSourceArn = this._inputSourceArn;
        }
        if (this._schemaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdNamespaceInputSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputSourceArn = undefined;
            this._schemaName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputSourceArn = value.inputSourceArn;
            this._schemaName = value.schemaName;
        }
    }

    // input_source_arn - computed: true, optional: true, required: false
    private _inputSourceArn?: string; 
    public get inputSourceArn() {
        return this.getStringAttribute('input_source_arn');
    }
    public set inputSourceArn(value: string) {
        this._inputSourceArn = value;
    }
    public resetInputSourceArn() {
        this._inputSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSourceArnInput() {
        return this._inputSourceArn;
    }

    // schema_name - computed: true, optional: true, required: false
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    public resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }
}

export class IdNamespaceInputSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : IdNamespaceInputSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): IdNamespaceInputSourcePropertyOutputReference {
        return new IdNamespaceInputSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#key CcIdNamespace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#value CcIdNamespace#value}
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
