// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMatchingWorkflowProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the MatchingWorkflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#description CcMatchingWorkflow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#incremental_run_config CcMatchingWorkflow#incremental_run_config}
    */
    readonly incrementalRunConfig?: CcMatchingWorkflow.IncrementalRunConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#input_source_config CcMatchingWorkflow#input_source_config}
    */
    readonly inputSourceConfig: CcMatchingWorkflow.InputSourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#output_source_config CcMatchingWorkflow#output_source_config}
    */
    readonly outputSourceConfig: CcMatchingWorkflow.OutputSourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#resolution_techniques CcMatchingWorkflow#resolution_techniques}
    */
    readonly resolutionTechniques: CcMatchingWorkflow.ResolutionTechniquesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#role_arn CcMatchingWorkflow#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#tags CcMatchingWorkflow#tags}
    */
    readonly tags?: CcMatchingWorkflow.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the MatchingWorkflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#workflow_name CcMatchingWorkflow#workflow_name}
    */
    readonly workflowName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}
*/
export class CcMatchingWorkflow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_entityresolution_matching_workflow";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMatchingWorkflow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMatchingWorkflow to import
    * @param importFromId The id of the existing CcMatchingWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMatchingWorkflow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_matching_workflow", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMatchingWorkflowProps
    */
    public constructor(scope: Construct, id: string, config: CcMatchingWorkflowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_entityresolution_matching_workflow',
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
        this._incrementalRunConfig.internalValue = config.incrementalRunConfig;
        this._inputSourceConfig.internalValue = config.inputSourceConfig;
        this._outputSourceConfig.internalValue = config.outputSourceConfig;
        this._resolutionTechniques.internalValue = config.resolutionTechniques;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._workflowName = config.workflowName;
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

    // incremental_run_config - computed: true, optional: true, required: false
    private _incrementalRunConfig = new CcMatchingWorkflow.IncrementalRunConfigPropertyOutputReference(this, "incremental_run_config");
    public get incrementalRunConfig() {
        return this._incrementalRunConfig;
    }
    public putIncrementalRunConfig(value: CcMatchingWorkflow.IncrementalRunConfigProperty) {
        this._incrementalRunConfig.internalValue = value;
    }
    public resetIncrementalRunConfig() {
        this._incrementalRunConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incrementalRunConfigInput() {
        return this._incrementalRunConfig.internalValue;
    }

    // input_source_config - computed: false, optional: false, required: true
    private _inputSourceConfig = new CcMatchingWorkflow.InputSourcePropertyList(this, "input_source_config", false);
    public get inputSourceConfig() {
        return this._inputSourceConfig;
    }
    public putInputSourceConfig(value: CcMatchingWorkflow.InputSourceProperty[] | cdktn.IResolvable) {
        this._inputSourceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSourceConfigInput() {
        return this._inputSourceConfig.internalValue;
    }

    // output_source_config - computed: false, optional: false, required: true
    private _outputSourceConfig = new CcMatchingWorkflow.OutputSourcePropertyList(this, "output_source_config", false);
    public get outputSourceConfig() {
        return this._outputSourceConfig;
    }
    public putOutputSourceConfig(value: CcMatchingWorkflow.OutputSourceProperty[] | cdktn.IResolvable) {
        this._outputSourceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSourceConfigInput() {
        return this._outputSourceConfig.internalValue;
    }

    // resolution_techniques - computed: false, optional: false, required: true
    private _resolutionTechniques = new CcMatchingWorkflow.ResolutionTechniquesPropertyOutputReference(this, "resolution_techniques");
    public get resolutionTechniques() {
        return this._resolutionTechniques;
    }
    public putResolutionTechniques(value: CcMatchingWorkflow.ResolutionTechniquesProperty) {
        this._resolutionTechniques.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionTechniquesInput() {
        return this._resolutionTechniques.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMatchingWorkflow.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMatchingWorkflow.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // workflow_arn - computed: true, optional: false, required: false
    public get workflowArn() {
        return this.getStringAttribute('workflow_arn');
    }

    // workflow_name - computed: false, optional: false, required: true
    private _workflowName?: string; 
    public get workflowName() {
        return this.getStringAttribute('workflow_name');
    }
    public set workflowName(value: string) {
        this._workflowName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowNameInput() {
        return this._workflowName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            incremental_run_config: ccMatchingWorkflowIncrementalRunConfigPropertyToTerraform(this._incrementalRunConfig.internalValue),
            input_source_config: cdktn.listMapper(ccMatchingWorkflowInputSourcePropertyToTerraform, false)(this._inputSourceConfig.internalValue),
            output_source_config: cdktn.listMapper(ccMatchingWorkflowOutputSourcePropertyToTerraform, false)(this._outputSourceConfig.internalValue),
            resolution_techniques: ccMatchingWorkflowResolutionTechniquesPropertyToTerraform(this._resolutionTechniques.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccMatchingWorkflowTagPropertyToTerraform, false)(this._tags.internalValue),
            workflow_name: cdktn.stringToTerraform(this._workflowName),
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
            incremental_run_config: {
                value: ccMatchingWorkflowIncrementalRunConfigPropertyToHclTerraform(this._incrementalRunConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMatchingWorkflow.IncrementalRunConfigProperty",
            },
            input_source_config: {
                value: cdktn.listMapperHcl(ccMatchingWorkflowInputSourcePropertyToHclTerraform, false)(this._inputSourceConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMatchingWorkflow.InputSourcePropertyList",
            },
            output_source_config: {
                value: cdktn.listMapperHcl(ccMatchingWorkflowOutputSourcePropertyToHclTerraform, false)(this._outputSourceConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMatchingWorkflow.OutputSourcePropertyList",
            },
            resolution_techniques: {
                value: ccMatchingWorkflowResolutionTechniquesPropertyToHclTerraform(this._resolutionTechniques.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMatchingWorkflow.ResolutionTechniquesProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMatchingWorkflowTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcMatchingWorkflow.TagPropertyList",
            },
            workflow_name: {
                value: cdktn.stringToHclTerraform(this._workflowName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMatchingWorkflowIncrementalRunConfigPropertyToTerraform(struct?: CcMatchingWorkflow.IncrementalRunConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        incremental_run_type: cdktn.stringToTerraform(struct!.incrementalRunType),
    }
}


export function ccMatchingWorkflowIncrementalRunConfigPropertyToHclTerraform(struct?: CcMatchingWorkflow.IncrementalRunConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        incremental_run_type: {
            value: cdktn.stringToHclTerraform(struct!.incrementalRunType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowInputSourcePropertyToTerraform(struct?: CcMatchingWorkflow.InputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apply_normalization: cdktn.booleanToTerraform(struct!.applyNormalization),
        input_source_arn: cdktn.stringToTerraform(struct!.inputSourceArn),
        schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
    }
}


export function ccMatchingWorkflowInputSourcePropertyToHclTerraform(struct?: CcMatchingWorkflow.InputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apply_normalization: {
            value: cdktn.booleanToHclTerraform(struct!.applyNormalization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.inputSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_arn: {
            value: cdktn.stringToHclTerraform(struct!.schemaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowCustomerProfilesIntegrationConfigPropertyToTerraform(struct?: CcMatchingWorkflow.CustomerProfilesIntegrationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_arn: cdktn.stringToTerraform(struct!.domainArn),
        object_type_arn: cdktn.stringToTerraform(struct!.objectTypeArn),
    }
}


export function ccMatchingWorkflowCustomerProfilesIntegrationConfigPropertyToHclTerraform(struct?: CcMatchingWorkflow.CustomerProfilesIntegrationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_arn: {
            value: cdktn.stringToHclTerraform(struct!.domainArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_type_arn: {
            value: cdktn.stringToHclTerraform(struct!.objectTypeArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowOutputAttributePropertyToTerraform(struct?: CcMatchingWorkflow.OutputAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hashed: cdktn.booleanToTerraform(struct!.hashed),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccMatchingWorkflowOutputAttributePropertyToHclTerraform(struct?: CcMatchingWorkflow.OutputAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hashed: {
            value: cdktn.booleanToHclTerraform(struct!.hashed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowOutputSourcePropertyToTerraform(struct?: CcMatchingWorkflow.OutputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apply_normalization: cdktn.booleanToTerraform(struct!.applyNormalization),
        customer_profiles_integration_config: ccMatchingWorkflowCustomerProfilesIntegrationConfigPropertyToTerraform(struct!.customerProfilesIntegrationConfig),
        kms_arn: cdktn.stringToTerraform(struct!.kmsArn),
        output: cdktn.listMapper(ccMatchingWorkflowOutputAttributePropertyToTerraform, false)(struct!.output),
        output_s3_path: cdktn.stringToTerraform(struct!.outputS3Path),
    }
}


export function ccMatchingWorkflowOutputSourcePropertyToHclTerraform(struct?: CcMatchingWorkflow.OutputSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apply_normalization: {
            value: cdktn.booleanToHclTerraform(struct!.applyNormalization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        customer_profiles_integration_config: {
            value: ccMatchingWorkflowCustomerProfilesIntegrationConfigPropertyToHclTerraform(struct!.customerProfilesIntegrationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerProfilesIntegrationConfigProperty",
        },
        kms_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output: {
            value: cdktn.listMapperHcl(ccMatchingWorkflowOutputAttributePropertyToHclTerraform, false)(struct!.output),
            isBlock: true,
            type: "list",
            storageClassType: "OutputAttributePropertyList",
        },
        output_s3_path: {
            value: cdktn.stringToHclTerraform(struct!.outputS3Path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowIntermediateSourceConfigurationPropertyToTerraform(struct?: CcMatchingWorkflow.IntermediateSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        intermediate_s3_path: cdktn.stringToTerraform(struct!.intermediateS3Path),
    }
}


export function ccMatchingWorkflowIntermediateSourceConfigurationPropertyToHclTerraform(struct?: CcMatchingWorkflow.IntermediateSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        intermediate_s3_path: {
            value: cdktn.stringToHclTerraform(struct!.intermediateS3Path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowProviderPropertiesPropertyToTerraform(struct?: CcMatchingWorkflow.ProviderPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        intermediate_source_configuration: ccMatchingWorkflowIntermediateSourceConfigurationPropertyToTerraform(struct!.intermediateSourceConfiguration),
        provider_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.providerConfiguration),
        provider_service_arn: cdktn.stringToTerraform(struct!.providerServiceArn),
    }
}


export function ccMatchingWorkflowProviderPropertiesPropertyToHclTerraform(struct?: CcMatchingWorkflow.ProviderPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        intermediate_source_configuration: {
            value: ccMatchingWorkflowIntermediateSourceConfigurationPropertyToHclTerraform(struct!.intermediateSourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateSourceConfigurationProperty",
        },
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


export function ccMatchingWorkflowRulePropertyToTerraform(struct?: CcMatchingWorkflow.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingKeys),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccMatchingWorkflowRulePropertyToHclTerraform(struct?: CcMatchingWorkflow.RuleProperty | cdktn.IResolvable): any {
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


export function ccMatchingWorkflowRuleBasedPropertiesPropertyToTerraform(struct?: CcMatchingWorkflow.RuleBasedPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_matching_model: cdktn.stringToTerraform(struct!.attributeMatchingModel),
        match_purpose: cdktn.stringToTerraform(struct!.matchPurpose),
        rules: cdktn.listMapper(ccMatchingWorkflowRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccMatchingWorkflowRuleBasedPropertiesPropertyToHclTerraform(struct?: CcMatchingWorkflow.RuleBasedPropertiesProperty | cdktn.IResolvable): any {
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
        match_purpose: {
            value: cdktn.stringToHclTerraform(struct!.matchPurpose),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules: {
            value: cdktn.listMapperHcl(ccMatchingWorkflowRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowMatchingConfigPropertyToTerraform(struct?: CcMatchingWorkflow.MatchingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_transitive_matching: cdktn.booleanToTerraform(struct!.enableTransitiveMatching),
    }
}


export function ccMatchingWorkflowMatchingConfigPropertyToHclTerraform(struct?: CcMatchingWorkflow.MatchingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_transitive_matching: {
            value: cdktn.booleanToHclTerraform(struct!.enableTransitiveMatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowRuleConditionPropertyToTerraform(struct?: CcMatchingWorkflow.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition: cdktn.stringToTerraform(struct!.condition),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccMatchingWorkflowRuleConditionPropertyToHclTerraform(struct?: CcMatchingWorkflow.RuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccMatchingWorkflowRuleConditionPropertiesPropertyToTerraform(struct?: CcMatchingWorkflow.RuleConditionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        matching_config: ccMatchingWorkflowMatchingConfigPropertyToTerraform(struct!.matchingConfig),
        rules: cdktn.listMapper(ccMatchingWorkflowRuleConditionPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccMatchingWorkflowRuleConditionPropertiesPropertyToHclTerraform(struct?: CcMatchingWorkflow.RuleConditionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        matching_config: {
            value: ccMatchingWorkflowMatchingConfigPropertyToHclTerraform(struct!.matchingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchingConfigProperty",
        },
        rules: {
            value: cdktn.listMapperHcl(ccMatchingWorkflowRuleConditionPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RuleConditionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowResolutionTechniquesPropertyToTerraform(struct?: CcMatchingWorkflow.ResolutionTechniquesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_real_time_matching: cdktn.booleanToTerraform(struct!.enableRealTimeMatching),
        provider_properties: ccMatchingWorkflowProviderPropertiesPropertyToTerraform(struct!.providerProperties),
        resolution_type: cdktn.stringToTerraform(struct!.resolutionType),
        rule_based_properties: ccMatchingWorkflowRuleBasedPropertiesPropertyToTerraform(struct!.ruleBasedProperties),
        rule_condition_properties: ccMatchingWorkflowRuleConditionPropertiesPropertyToTerraform(struct!.ruleConditionProperties),
    }
}


export function ccMatchingWorkflowResolutionTechniquesPropertyToHclTerraform(struct?: CcMatchingWorkflow.ResolutionTechniquesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_real_time_matching: {
            value: cdktn.booleanToHclTerraform(struct!.enableRealTimeMatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        provider_properties: {
            value: ccMatchingWorkflowProviderPropertiesPropertyToHclTerraform(struct!.providerProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "ProviderPropertiesProperty",
        },
        resolution_type: {
            value: cdktn.stringToHclTerraform(struct!.resolutionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_based_properties: {
            value: ccMatchingWorkflowRuleBasedPropertiesPropertyToHclTerraform(struct!.ruleBasedProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleBasedPropertiesProperty",
        },
        rule_condition_properties: {
            value: ccMatchingWorkflowRuleConditionPropertiesPropertyToHclTerraform(struct!.ruleConditionProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleConditionPropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMatchingWorkflowTagPropertyToTerraform(struct?: CcMatchingWorkflow.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMatchingWorkflowTagPropertyToHclTerraform(struct?: CcMatchingWorkflow.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMatchingWorkflow {
export interface IncrementalRunConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#incremental_run_type CcMatchingWorkflow#incremental_run_type}
    */
    readonly incrementalRunType?: string;
}
export class IncrementalRunConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncrementalRunConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._incrementalRunType !== undefined) {
            hasAnyValues = true;
            internalValueResult.incrementalRunType = this._incrementalRunType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncrementalRunConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._incrementalRunType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._incrementalRunType = value.incrementalRunType;
        }
    }

    // incremental_run_type - computed: true, optional: true, required: false
    private _incrementalRunType?: string; 
    public get incrementalRunType() {
        return this.getStringAttribute('incremental_run_type');
    }
    public set incrementalRunType(value: string) {
        this._incrementalRunType = value;
    }
    public resetIncrementalRunType() {
        this._incrementalRunType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incrementalRunTypeInput() {
        return this._incrementalRunType;
    }
}
export interface InputSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#apply_normalization CcMatchingWorkflow#apply_normalization}
    */
    readonly applyNormalization?: boolean | cdktn.IResolvable;
    /**
    * An Glue table ARN for the input source table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#input_source_arn CcMatchingWorkflow#input_source_arn}
    */
    readonly inputSourceArn: string;
    /**
    * The SchemaMapping arn associated with the Schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#schema_arn CcMatchingWorkflow#schema_arn}
    */
    readonly schemaArn: string;
}
export class InputSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applyNormalization !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyNormalization = this._applyNormalization;
        }
        if (this._inputSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSourceArn = this._inputSourceArn;
        }
        if (this._schemaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaArn = this._schemaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applyNormalization = undefined;
            this._inputSourceArn = undefined;
            this._schemaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applyNormalization = value.applyNormalization;
            this._inputSourceArn = value.inputSourceArn;
            this._schemaArn = value.schemaArn;
        }
    }

    // apply_normalization - computed: true, optional: true, required: false
    private _applyNormalization?: boolean | cdktn.IResolvable; 
    public get applyNormalization() {
        return this.getBooleanAttribute('apply_normalization');
    }
    public set applyNormalization(value: boolean | cdktn.IResolvable) {
        this._applyNormalization = value;
    }
    public resetApplyNormalization() {
        this._applyNormalization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyNormalizationInput() {
        return this._applyNormalization;
    }

    // input_source_arn - computed: false, optional: false, required: true
    private _inputSourceArn?: string; 
    public get inputSourceArn() {
        return this.getStringAttribute('input_source_arn');
    }
    public set inputSourceArn(value: string) {
        this._inputSourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSourceArnInput() {
        return this._inputSourceArn;
    }

    // schema_arn - computed: false, optional: false, required: true
    private _schemaArn?: string; 
    public get schemaArn() {
        return this.getStringAttribute('schema_arn');
    }
    public set schemaArn(value: string) {
        this._schemaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaArnInput() {
        return this._schemaArn;
    }
}

export class InputSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : InputSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): InputSourcePropertyOutputReference {
        return new InputSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomerProfilesIntegrationConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the Customer Profiles domain
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#domain_arn CcMatchingWorkflow#domain_arn}
    */
    readonly domainArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the Customer Profiles object type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#object_type_arn CcMatchingWorkflow#object_type_arn}
    */
    readonly objectTypeArn?: string;
}
export class CustomerProfilesIntegrationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerProfilesIntegrationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainArn = this._domainArn;
        }
        if (this._objectTypeArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectTypeArn = this._objectTypeArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerProfilesIntegrationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainArn = undefined;
            this._objectTypeArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainArn = value.domainArn;
            this._objectTypeArn = value.objectTypeArn;
        }
    }

    // domain_arn - computed: true, optional: true, required: false
    private _domainArn?: string; 
    public get domainArn() {
        return this.getStringAttribute('domain_arn');
    }
    public set domainArn(value: string) {
        this._domainArn = value;
    }
    public resetDomainArn() {
        this._domainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainArnInput() {
        return this._domainArn;
    }

    // object_type_arn - computed: true, optional: true, required: false
    private _objectTypeArn?: string; 
    public get objectTypeArn() {
        return this.getStringAttribute('object_type_arn');
    }
    public set objectTypeArn(value: string) {
        this._objectTypeArn = value;
    }
    public resetObjectTypeArn() {
        this._objectTypeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeArnInput() {
        return this._objectTypeArn;
    }
}
export interface OutputAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#hashed CcMatchingWorkflow#hashed}
    */
    readonly hashed?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#name CcMatchingWorkflow#name}
    */
    readonly name: string;
}
export class OutputAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OutputAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashed !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashed = this._hashed;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashed = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashed = value.hashed;
            this._name = value.name;
        }
    }

    // hashed - computed: true, optional: true, required: false
    private _hashed?: boolean | cdktn.IResolvable; 
    public get hashed() {
        return this.getBooleanAttribute('hashed');
    }
    public set hashed(value: boolean | cdktn.IResolvable) {
        this._hashed = value;
    }
    public resetHashed() {
        this._hashed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashedInput() {
        return this._hashed;
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
}

export class OutputAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : OutputAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): OutputAttributePropertyOutputReference {
        return new OutputAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OutputSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#apply_normalization CcMatchingWorkflow#apply_normalization}
    */
    readonly applyNormalization?: boolean | cdktn.IResolvable;
    /**
    * The Customer Profiles integration configuration for the output source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#customer_profiles_integration_config CcMatchingWorkflow#customer_profiles_integration_config}
    */
    readonly customerProfilesIntegrationConfig?: CustomerProfilesIntegrationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#kms_arn CcMatchingWorkflow#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#output CcMatchingWorkflow#output}
    */
    readonly output: OutputAttributeProperty[] | cdktn.IResolvable;
    /**
    * The S3 path to which Entity Resolution will write the output table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#output_s3_path CcMatchingWorkflow#output_s3_path}
    */
    readonly outputS3Path?: string;
}
export class OutputSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OutputSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applyNormalization !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyNormalization = this._applyNormalization;
        }
        if (this._customerProfilesIntegrationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerProfilesIntegrationConfig = this._customerProfilesIntegrationConfig?.internalValue;
        }
        if (this._kmsArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsArn = this._kmsArn;
        }
        if (this._output?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output?.internalValue;
        }
        if (this._outputS3Path !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputS3Path = this._outputS3Path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applyNormalization = undefined;
            this._customerProfilesIntegrationConfig.internalValue = undefined;
            this._kmsArn = undefined;
            this._output.internalValue = undefined;
            this._outputS3Path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applyNormalization = value.applyNormalization;
            this._customerProfilesIntegrationConfig.internalValue = value.customerProfilesIntegrationConfig;
            this._kmsArn = value.kmsArn;
            this._output.internalValue = value.output;
            this._outputS3Path = value.outputS3Path;
        }
    }

    // apply_normalization - computed: true, optional: true, required: false
    private _applyNormalization?: boolean | cdktn.IResolvable; 
    public get applyNormalization() {
        return this.getBooleanAttribute('apply_normalization');
    }
    public set applyNormalization(value: boolean | cdktn.IResolvable) {
        this._applyNormalization = value;
    }
    public resetApplyNormalization() {
        this._applyNormalization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyNormalizationInput() {
        return this._applyNormalization;
    }

    // customer_profiles_integration_config - computed: true, optional: true, required: false
    private _customerProfilesIntegrationConfig = new CustomerProfilesIntegrationConfigPropertyOutputReference(this, "customer_profiles_integration_config");
    public get customerProfilesIntegrationConfig() {
        return this._customerProfilesIntegrationConfig;
    }
    public putCustomerProfilesIntegrationConfig(value: CustomerProfilesIntegrationConfigProperty) {
        this._customerProfilesIntegrationConfig.internalValue = value;
    }
    public resetCustomerProfilesIntegrationConfig() {
        this._customerProfilesIntegrationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerProfilesIntegrationConfigInput() {
        return this._customerProfilesIntegrationConfig.internalValue;
    }

    // kms_arn - computed: true, optional: true, required: false
    private _kmsArn?: string; 
    public get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    public set kmsArn(value: string) {
        this._kmsArn = value;
    }
    public resetKmsArn() {
        this._kmsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsArnInput() {
        return this._kmsArn;
    }

    // output - computed: false, optional: false, required: true
    private _output = new OutputAttributePropertyList(this, "output", false);
    public get output() {
        return this._output;
    }
    public putOutput(value: OutputAttributeProperty[] | cdktn.IResolvable) {
        this._output.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
        return this._output.internalValue;
    }

    // output_s3_path - computed: true, optional: true, required: false
    private _outputS3Path?: string; 
    public get outputS3Path() {
        return this.getStringAttribute('output_s3_path');
    }
    public set outputS3Path(value: string) {
        this._outputS3Path = value;
    }
    public resetOutputS3Path() {
        this._outputS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputS3PathInput() {
        return this._outputS3Path;
    }
}

export class OutputSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : OutputSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): OutputSourcePropertyOutputReference {
        return new OutputSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntermediateSourceConfigurationProperty {
    /**
    * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#intermediate_s3_path CcMatchingWorkflow#intermediate_s3_path}
    */
    readonly intermediateS3Path?: string;
}
export class IntermediateSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._intermediateS3Path !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateS3Path = this._intermediateS3Path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._intermediateS3Path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._intermediateS3Path = value.intermediateS3Path;
        }
    }

    // intermediate_s3_path - computed: true, optional: true, required: false
    private _intermediateS3Path?: string; 
    public get intermediateS3Path() {
        return this.getStringAttribute('intermediate_s3_path');
    }
    public set intermediateS3Path(value: string) {
        this._intermediateS3Path = value;
    }
    public resetIntermediateS3Path() {
        this._intermediateS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateS3PathInput() {
        return this._intermediateS3Path;
    }
}
export interface ProviderPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#intermediate_source_configuration CcMatchingWorkflow#intermediate_source_configuration}
    */
    readonly intermediateSourceConfiguration?: IntermediateSourceConfigurationProperty;
    /**
    * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#provider_configuration CcMatchingWorkflow#provider_configuration}
    */
    readonly providerConfiguration?: { [key: string]: string };
    /**
    * Arn of the Provider service being used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#provider_service_arn CcMatchingWorkflow#provider_service_arn}
    */
    readonly providerServiceArn?: string;
}
export class ProviderPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._intermediateSourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateSourceConfiguration = this._intermediateSourceConfiguration?.internalValue;
        }
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

    public set internalValue(value: ProviderPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._intermediateSourceConfiguration.internalValue = undefined;
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
            this._intermediateSourceConfiguration.internalValue = value.intermediateSourceConfiguration;
            this._providerConfiguration = value.providerConfiguration;
            this._providerServiceArn = value.providerServiceArn;
        }
    }

    // intermediate_source_configuration - computed: true, optional: true, required: false
    private _intermediateSourceConfiguration = new IntermediateSourceConfigurationPropertyOutputReference(this, "intermediate_source_configuration");
    public get intermediateSourceConfiguration() {
        return this._intermediateSourceConfiguration;
    }
    public putIntermediateSourceConfiguration(value: IntermediateSourceConfigurationProperty) {
        this._intermediateSourceConfiguration.internalValue = value;
    }
    public resetIntermediateSourceConfiguration() {
        this._intermediateSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateSourceConfigurationInput() {
        return this._intermediateSourceConfiguration.internalValue;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#matching_keys CcMatchingWorkflow#matching_keys}
    */
    readonly matchingKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rule_name CcMatchingWorkflow#rule_name}
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
export interface RuleBasedPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#attribute_matching_model CcMatchingWorkflow#attribute_matching_model}
    */
    readonly attributeMatchingModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#match_purpose CcMatchingWorkflow#match_purpose}
    */
    readonly matchPurpose?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rules CcMatchingWorkflow#rules}
    */
    readonly rules?: RuleProperty[] | cdktn.IResolvable;
}
export class RuleBasedPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleBasedPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeMatchingModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
        }
        if (this._matchPurpose !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchPurpose = this._matchPurpose;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleBasedPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeMatchingModel = undefined;
            this._matchPurpose = undefined;
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
            this._matchPurpose = value.matchPurpose;
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

    // match_purpose - computed: true, optional: true, required: false
    private _matchPurpose?: string; 
    public get matchPurpose() {
        return this.getStringAttribute('match_purpose');
    }
    public set matchPurpose(value: string) {
        this._matchPurpose = value;
    }
    public resetMatchPurpose() {
        this._matchPurpose = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchPurposeInput() {
        return this._matchPurpose;
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
export interface MatchingConfigProperty {
    /**
    * Enables transitive matching to process records across all rule levels and connect unmatched records to existing match groups
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#enable_transitive_matching CcMatchingWorkflow#enable_transitive_matching}
    */
    readonly enableTransitiveMatching?: boolean | cdktn.IResolvable;
}
export class MatchingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableTransitiveMatching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableTransitiveMatching = this._enableTransitiveMatching;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableTransitiveMatching = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableTransitiveMatching = value.enableTransitiveMatching;
        }
    }

    // enable_transitive_matching - computed: true, optional: true, required: false
    private _enableTransitiveMatching?: boolean | cdktn.IResolvable; 
    public get enableTransitiveMatching() {
        return this.getBooleanAttribute('enable_transitive_matching');
    }
    public set enableTransitiveMatching(value: boolean | cdktn.IResolvable) {
        this._enableTransitiveMatching = value;
    }
    public resetEnableTransitiveMatching() {
        this._enableTransitiveMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTransitiveMatchingInput() {
        return this._enableTransitiveMatching;
    }
}
export interface RuleConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#condition CcMatchingWorkflow#condition}
    */
    readonly condition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rule_name CcMatchingWorkflow#rule_name}
    */
    readonly ruleName?: string;
}
export class RuleConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition = undefined;
            this._ruleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition = value.condition;
            this._ruleName = value.ruleName;
        }
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
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

export class RuleConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : RuleConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): RuleConditionPropertyOutputReference {
        return new RuleConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleConditionPropertiesProperty {
    /**
    * Configuration for matching behavior within rule condition properties
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#matching_config CcMatchingWorkflow#matching_config}
    */
    readonly matchingConfig?: MatchingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rules CcMatchingWorkflow#rules}
    */
    readonly rules?: RuleConditionProperty[] | cdktn.IResolvable;
}
export class RuleConditionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleConditionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingConfig = this._matchingConfig?.internalValue;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConditionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchingConfig.internalValue = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchingConfig.internalValue = value.matchingConfig;
            this._rules.internalValue = value.rules;
        }
    }

    // matching_config - computed: true, optional: true, required: false
    private _matchingConfig = new MatchingConfigPropertyOutputReference(this, "matching_config");
    public get matchingConfig() {
        return this._matchingConfig;
    }
    public putMatchingConfig(value: MatchingConfigProperty) {
        this._matchingConfig.internalValue = value;
    }
    public resetMatchingConfig() {
        this._matchingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingConfigInput() {
        return this._matchingConfig.internalValue;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new RuleConditionPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: RuleConditionProperty[] | cdktn.IResolvable) {
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
export interface ResolutionTechniquesProperty {
    /**
    * Enables the workflow to use real-time matching. Can only be set on creation for RULE_MATCHING workflows that define RuleConditionProperties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#enable_real_time_matching CcMatchingWorkflow#enable_real_time_matching}
    */
    readonly enableRealTimeMatching?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#provider_properties CcMatchingWorkflow#provider_properties}
    */
    readonly providerProperties?: ProviderPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#resolution_type CcMatchingWorkflow#resolution_type}
    */
    readonly resolutionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rule_based_properties CcMatchingWorkflow#rule_based_properties}
    */
    readonly ruleBasedProperties?: RuleBasedPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#rule_condition_properties CcMatchingWorkflow#rule_condition_properties}
    */
    readonly ruleConditionProperties?: RuleConditionPropertiesProperty;
}
export class ResolutionTechniquesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResolutionTechniquesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableRealTimeMatching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableRealTimeMatching = this._enableRealTimeMatching;
        }
        if (this._providerProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.providerProperties = this._providerProperties?.internalValue;
        }
        if (this._resolutionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolutionType = this._resolutionType;
        }
        if (this._ruleBasedProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleBasedProperties = this._ruleBasedProperties?.internalValue;
        }
        if (this._ruleConditionProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleConditionProperties = this._ruleConditionProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResolutionTechniquesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableRealTimeMatching = undefined;
            this._providerProperties.internalValue = undefined;
            this._resolutionType = undefined;
            this._ruleBasedProperties.internalValue = undefined;
            this._ruleConditionProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableRealTimeMatching = value.enableRealTimeMatching;
            this._providerProperties.internalValue = value.providerProperties;
            this._resolutionType = value.resolutionType;
            this._ruleBasedProperties.internalValue = value.ruleBasedProperties;
            this._ruleConditionProperties.internalValue = value.ruleConditionProperties;
        }
    }

    // enable_real_time_matching - computed: true, optional: true, required: false
    private _enableRealTimeMatching?: boolean | cdktn.IResolvable; 
    public get enableRealTimeMatching() {
        return this.getBooleanAttribute('enable_real_time_matching');
    }
    public set enableRealTimeMatching(value: boolean | cdktn.IResolvable) {
        this._enableRealTimeMatching = value;
    }
    public resetEnableRealTimeMatching() {
        this._enableRealTimeMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableRealTimeMatchingInput() {
        return this._enableRealTimeMatching;
    }

    // provider_properties - computed: true, optional: true, required: false
    private _providerProperties = new ProviderPropertiesPropertyOutputReference(this, "provider_properties");
    public get providerProperties() {
        return this._providerProperties;
    }
    public putProviderProperties(value: ProviderPropertiesProperty) {
        this._providerProperties.internalValue = value;
    }
    public resetProviderProperties() {
        this._providerProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerPropertiesInput() {
        return this._providerProperties.internalValue;
    }

    // resolution_type - computed: true, optional: true, required: false
    private _resolutionType?: string; 
    public get resolutionType() {
        return this.getStringAttribute('resolution_type');
    }
    public set resolutionType(value: string) {
        this._resolutionType = value;
    }
    public resetResolutionType() {
        this._resolutionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionTypeInput() {
        return this._resolutionType;
    }

    // rule_based_properties - computed: true, optional: true, required: false
    private _ruleBasedProperties = new RuleBasedPropertiesPropertyOutputReference(this, "rule_based_properties");
    public get ruleBasedProperties() {
        return this._ruleBasedProperties;
    }
    public putRuleBasedProperties(value: RuleBasedPropertiesProperty) {
        this._ruleBasedProperties.internalValue = value;
    }
    public resetRuleBasedProperties() {
        this._ruleBasedProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleBasedPropertiesInput() {
        return this._ruleBasedProperties.internalValue;
    }

    // rule_condition_properties - computed: true, optional: true, required: false
    private _ruleConditionProperties = new RuleConditionPropertiesPropertyOutputReference(this, "rule_condition_properties");
    public get ruleConditionProperties() {
        return this._ruleConditionProperties;
    }
    public putRuleConditionProperties(value: RuleConditionPropertiesProperty) {
        this._ruleConditionProperties.internalValue = value;
    }
    public resetRuleConditionProperties() {
        this._ruleConditionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleConditionPropertiesInput() {
        return this._ruleConditionProperties.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#key CcMatchingWorkflow#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_matching_workflow#value CcMatchingWorkflow#value}
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
