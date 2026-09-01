// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcModelExplainabilityJobDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_name CcModelExplainabilityJobDefinition#endpoint_name}
    */
    readonly endpointName?: string;
    /**
    * The name of the job definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#job_definition_name CcModelExplainabilityJobDefinition#job_definition_name}
    */
    readonly jobDefinitionName?: string;
    /**
    * Identifies the resources to deploy for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#job_resources CcModelExplainabilityJobDefinition#job_resources}
    */
    readonly jobResources: CcModelExplainabilityJobDefinition.MonitoringResourcesProperty;
    /**
    * Container image configuration object for the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_app_specification CcModelExplainabilityJobDefinition#model_explainability_app_specification}
    */
    readonly modelExplainabilityAppSpecification: CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty;
    /**
    * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_baseline_config CcModelExplainabilityJobDefinition#model_explainability_baseline_config}
    */
    readonly modelExplainabilityBaselineConfig?: CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty;
    /**
    * The inputs for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_job_input CcModelExplainabilityJobDefinition#model_explainability_job_input}
    */
    readonly modelExplainabilityJobInput: CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty;
    /**
    * The output configuration for monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#model_explainability_job_output_config CcModelExplainabilityJobDefinition#model_explainability_job_output_config}
    */
    readonly modelExplainabilityJobOutputConfig: CcModelExplainabilityJobDefinition.MonitoringOutputConfigProperty;
    /**
    * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#network_config CcModelExplainabilityJobDefinition#network_config}
    */
    readonly networkConfig?: CcModelExplainabilityJobDefinition.NetworkConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#role_arn CcModelExplainabilityJobDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Specifies a time limit for how long the monitoring job is allowed to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#stopping_condition CcModelExplainabilityJobDefinition#stopping_condition}
    */
    readonly stoppingCondition?: CcModelExplainabilityJobDefinition.StoppingConditionProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#tags CcModelExplainabilityJobDefinition#tags}
    */
    readonly tags?: CcModelExplainabilityJobDefinition.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition}
*/
export class CcModelExplainabilityJobDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_model_explainability_job_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcModelExplainabilityJobDefinition to import
    * @param importFromId The id of the existing CcModelExplainabilityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcModelExplainabilityJobDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_explainability_job_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcModelExplainabilityJobDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcModelExplainabilityJobDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_model_explainability_job_definition',
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
        this._endpointName = config.endpointName;
        this._jobDefinitionName = config.jobDefinitionName;
        this._jobResources.internalValue = config.jobResources;
        this._modelExplainabilityAppSpecification.internalValue = config.modelExplainabilityAppSpecification;
        this._modelExplainabilityBaselineConfig.internalValue = config.modelExplainabilityBaselineConfig;
        this._modelExplainabilityJobInput.internalValue = config.modelExplainabilityJobInput;
        this._modelExplainabilityJobOutputConfig.internalValue = config.modelExplainabilityJobOutputConfig;
        this._networkConfig.internalValue = config.networkConfig;
        this._roleArn = config.roleArn;
        this._stoppingCondition.internalValue = config.stoppingCondition;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // endpoint_name - computed: true, optional: true, required: false
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    public resetEndpointName() {
        this._endpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_definition_arn - computed: true, optional: false, required: false
    public get jobDefinitionArn() {
        return this.getStringAttribute('job_definition_arn');
    }

    // job_definition_name - computed: true, optional: true, required: false
    private _jobDefinitionName?: string; 
    public get jobDefinitionName() {
        return this.getStringAttribute('job_definition_name');
    }
    public set jobDefinitionName(value: string) {
        this._jobDefinitionName = value;
    }
    public resetJobDefinitionName() {
        this._jobDefinitionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobDefinitionNameInput() {
        return this._jobDefinitionName;
    }

    // job_resources - computed: false, optional: false, required: true
    private _jobResources = new CcModelExplainabilityJobDefinition.MonitoringResourcesPropertyOutputReference(this, "job_resources");
    public get jobResources() {
        return this._jobResources;
    }
    public putJobResources(value: CcModelExplainabilityJobDefinition.MonitoringResourcesProperty) {
        this._jobResources.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobResourcesInput() {
        return this._jobResources.internalValue;
    }

    // model_explainability_app_specification - computed: false, optional: false, required: true
    private _modelExplainabilityAppSpecification = new CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationPropertyOutputReference(this, "model_explainability_app_specification");
    public get modelExplainabilityAppSpecification() {
        return this._modelExplainabilityAppSpecification;
    }
    public putModelExplainabilityAppSpecification(value: CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty) {
        this._modelExplainabilityAppSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelExplainabilityAppSpecificationInput() {
        return this._modelExplainabilityAppSpecification.internalValue;
    }

    // model_explainability_baseline_config - computed: true, optional: true, required: false
    private _modelExplainabilityBaselineConfig = new CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigPropertyOutputReference(this, "model_explainability_baseline_config");
    public get modelExplainabilityBaselineConfig() {
        return this._modelExplainabilityBaselineConfig;
    }
    public putModelExplainabilityBaselineConfig(value: CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty) {
        this._modelExplainabilityBaselineConfig.internalValue = value;
    }
    public resetModelExplainabilityBaselineConfig() {
        this._modelExplainabilityBaselineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelExplainabilityBaselineConfigInput() {
        return this._modelExplainabilityBaselineConfig.internalValue;
    }

    // model_explainability_job_input - computed: false, optional: false, required: true
    private _modelExplainabilityJobInput = new CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputPropertyOutputReference(this, "model_explainability_job_input");
    public get modelExplainabilityJobInput() {
        return this._modelExplainabilityJobInput;
    }
    public putModelExplainabilityJobInput(value: CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty) {
        this._modelExplainabilityJobInput.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelExplainabilityJobInputInput() {
        return this._modelExplainabilityJobInput.internalValue;
    }

    // model_explainability_job_output_config - computed: false, optional: false, required: true
    private _modelExplainabilityJobOutputConfig = new CcModelExplainabilityJobDefinition.MonitoringOutputConfigPropertyOutputReference(this, "model_explainability_job_output_config");
    public get modelExplainabilityJobOutputConfig() {
        return this._modelExplainabilityJobOutputConfig;
    }
    public putModelExplainabilityJobOutputConfig(value: CcModelExplainabilityJobDefinition.MonitoringOutputConfigProperty) {
        this._modelExplainabilityJobOutputConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelExplainabilityJobOutputConfigInput() {
        return this._modelExplainabilityJobOutputConfig.internalValue;
    }

    // network_config - computed: true, optional: true, required: false
    private _networkConfig = new CcModelExplainabilityJobDefinition.NetworkConfigPropertyOutputReference(this, "network_config");
    public get networkConfig() {
        return this._networkConfig;
    }
    public putNetworkConfig(value: CcModelExplainabilityJobDefinition.NetworkConfigProperty) {
        this._networkConfig.internalValue = value;
    }
    public resetNetworkConfig() {
        this._networkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigInput() {
        return this._networkConfig.internalValue;
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

    // stopping_condition - computed: true, optional: true, required: false
    private _stoppingCondition = new CcModelExplainabilityJobDefinition.StoppingConditionPropertyOutputReference(this, "stopping_condition");
    public get stoppingCondition() {
        return this._stoppingCondition;
    }
    public putStoppingCondition(value: CcModelExplainabilityJobDefinition.StoppingConditionProperty) {
        this._stoppingCondition.internalValue = value;
    }
    public resetStoppingCondition() {
        this._stoppingCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stoppingConditionInput() {
        return this._stoppingCondition.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcModelExplainabilityJobDefinition.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcModelExplainabilityJobDefinition.TagProperty[] | cdktn.IResolvable) {
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
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            job_definition_name: cdktn.stringToTerraform(this._jobDefinitionName),
            job_resources: ccModelExplainabilityJobDefinitionMonitoringResourcesPropertyToTerraform(this._jobResources.internalValue),
            model_explainability_app_specification: ccModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationPropertyToTerraform(this._modelExplainabilityAppSpecification.internalValue),
            model_explainability_baseline_config: ccModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigPropertyToTerraform(this._modelExplainabilityBaselineConfig.internalValue),
            model_explainability_job_input: ccModelExplainabilityJobDefinitionModelExplainabilityJobInputPropertyToTerraform(this._modelExplainabilityJobInput.internalValue),
            model_explainability_job_output_config: ccModelExplainabilityJobDefinitionMonitoringOutputConfigPropertyToTerraform(this._modelExplainabilityJobOutputConfig.internalValue),
            network_config: ccModelExplainabilityJobDefinitionNetworkConfigPropertyToTerraform(this._networkConfig.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stopping_condition: ccModelExplainabilityJobDefinitionStoppingConditionPropertyToTerraform(this._stoppingCondition.internalValue),
            tags: cdktn.listMapper(ccModelExplainabilityJobDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_definition_name: {
                value: cdktn.stringToHclTerraform(this._jobDefinitionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_resources: {
                value: ccModelExplainabilityJobDefinitionMonitoringResourcesPropertyToHclTerraform(this._jobResources.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.MonitoringResourcesProperty",
            },
            model_explainability_app_specification: {
                value: ccModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationPropertyToHclTerraform(this._modelExplainabilityAppSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty",
            },
            model_explainability_baseline_config: {
                value: ccModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigPropertyToHclTerraform(this._modelExplainabilityBaselineConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty",
            },
            model_explainability_job_input: {
                value: ccModelExplainabilityJobDefinitionModelExplainabilityJobInputPropertyToHclTerraform(this._modelExplainabilityJobInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty",
            },
            model_explainability_job_output_config: {
                value: ccModelExplainabilityJobDefinitionMonitoringOutputConfigPropertyToHclTerraform(this._modelExplainabilityJobOutputConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.MonitoringOutputConfigProperty",
            },
            network_config: {
                value: ccModelExplainabilityJobDefinitionNetworkConfigPropertyToHclTerraform(this._networkConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.NetworkConfigProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stopping_condition: {
                value: ccModelExplainabilityJobDefinitionStoppingConditionPropertyToHclTerraform(this._stoppingCondition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelExplainabilityJobDefinition.StoppingConditionProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccModelExplainabilityJobDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModelExplainabilityJobDefinition.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccModelExplainabilityJobDefinitionClusterConfigPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccModelExplainabilityJobDefinitionClusterConfigPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_count: {
            value: cdktn.numberToHclTerraform(struct!.instanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionMonitoringResourcesPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_config: ccModelExplainabilityJobDefinitionClusterConfigPropertyToTerraform(struct!.clusterConfig),
    }
}


export function ccModelExplainabilityJobDefinitionMonitoringResourcesPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_config: {
            value: ccModelExplainabilityJobDefinitionClusterConfigPropertyToHclTerraform(struct!.clusterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config_uri: cdktn.stringToTerraform(struct!.configUri),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
    }
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config_uri: {
            value: cdktn.stringToHclTerraform(struct!.configUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionConstraintsResourcePropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.ConstraintsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelExplainabilityJobDefinitionConstraintsResourcePropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.ConstraintsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        baselining_job_name: cdktn.stringToTerraform(struct!.baseliningJobName),
        constraints_resource: ccModelExplainabilityJobDefinitionConstraintsResourcePropertyToTerraform(struct!.constraintsResource),
    }
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        baselining_job_name: {
            value: cdktn.stringToHclTerraform(struct!.baseliningJobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        constraints_resource: {
            value: ccModelExplainabilityJobDefinitionConstraintsResourcePropertyToHclTerraform(struct!.constraintsResource),
            isBlock: true,
            type: "struct",
            storageClassType: "ConstraintsResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionCsvPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.booleanToTerraform(struct!.header),
    }
}


export function ccModelExplainabilityJobDefinitionCsvPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.booleanToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionJsonPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.JsonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        line: cdktn.booleanToTerraform(struct!.line),
    }
}


export function ccModelExplainabilityJobDefinitionJsonPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.JsonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        line: {
            value: cdktn.booleanToHclTerraform(struct!.line),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionDatasetFormatPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.DatasetFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv: ccModelExplainabilityJobDefinitionCsvPropertyToTerraform(struct!.csv),
        json: ccModelExplainabilityJobDefinitionJsonPropertyToTerraform(struct!.json),
        parquet: cdktn.booleanToTerraform(struct!.parquet),
    }
}


export function ccModelExplainabilityJobDefinitionDatasetFormatPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.DatasetFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv: {
            value: ccModelExplainabilityJobDefinitionCsvPropertyToHclTerraform(struct!.csv),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvProperty",
        },
        json: {
            value: ccModelExplainabilityJobDefinitionJsonPropertyToHclTerraform(struct!.json),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonProperty",
        },
        parquet: {
            value: cdktn.booleanToHclTerraform(struct!.parquet),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionBatchTransformInputPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.BatchTransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_captured_destination_s3_uri: cdktn.stringToTerraform(struct!.dataCapturedDestinationS3Uri),
        dataset_format: ccModelExplainabilityJobDefinitionDatasetFormatPropertyToTerraform(struct!.datasetFormat),
        features_attribute: cdktn.stringToTerraform(struct!.featuresAttribute),
        inference_attribute: cdktn.stringToTerraform(struct!.inferenceAttribute),
        local_path: cdktn.stringToTerraform(struct!.localPath),
        probability_attribute: cdktn.stringToTerraform(struct!.probabilityAttribute),
        s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
        s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    }
}


export function ccModelExplainabilityJobDefinitionBatchTransformInputPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.BatchTransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_captured_destination_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.dataCapturedDestinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataset_format: {
            value: ccModelExplainabilityJobDefinitionDatasetFormatPropertyToHclTerraform(struct!.datasetFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetFormatProperty",
        },
        features_attribute: {
            value: cdktn.stringToHclTerraform(struct!.featuresAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inference_attribute: {
            value: cdktn.stringToHclTerraform(struct!.inferenceAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        probability_attribute: {
            value: cdktn.stringToHclTerraform(struct!.probabilityAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_data_distribution_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3InputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionEndpointInputPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.EndpointInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_name: cdktn.stringToTerraform(struct!.endpointName),
        features_attribute: cdktn.stringToTerraform(struct!.featuresAttribute),
        inference_attribute: cdktn.stringToTerraform(struct!.inferenceAttribute),
        local_path: cdktn.stringToTerraform(struct!.localPath),
        probability_attribute: cdktn.stringToTerraform(struct!.probabilityAttribute),
        s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
        s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    }
}


export function ccModelExplainabilityJobDefinitionEndpointInputPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.EndpointInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_name: {
            value: cdktn.stringToHclTerraform(struct!.endpointName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        features_attribute: {
            value: cdktn.stringToHclTerraform(struct!.featuresAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inference_attribute: {
            value: cdktn.stringToHclTerraform(struct!.inferenceAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        probability_attribute: {
            value: cdktn.stringToHclTerraform(struct!.probabilityAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_data_distribution_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3InputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityJobInputPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_transform_input: ccModelExplainabilityJobDefinitionBatchTransformInputPropertyToTerraform(struct!.batchTransformInput),
        endpoint_input: ccModelExplainabilityJobDefinitionEndpointInputPropertyToTerraform(struct!.endpointInput),
    }
}


export function ccModelExplainabilityJobDefinitionModelExplainabilityJobInputPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_transform_input: {
            value: ccModelExplainabilityJobDefinitionBatchTransformInputPropertyToHclTerraform(struct!.batchTransformInput),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchTransformInputProperty",
        },
        endpoint_input: {
            value: ccModelExplainabilityJobDefinitionEndpointInputPropertyToHclTerraform(struct!.endpointInput),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionS3OutputPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.S3OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        local_path: cdktn.stringToTerraform(struct!.localPath),
        s3_upload_mode: cdktn.stringToTerraform(struct!.s3UploadMode),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelExplainabilityJobDefinitionS3OutputPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.S3OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_upload_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3UploadMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionMonitoringOutputPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_output: ccModelExplainabilityJobDefinitionS3OutputPropertyToTerraform(struct!.s3Output),
    }
}


export function ccModelExplainabilityJobDefinitionMonitoringOutputPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_output: {
            value: ccModelExplainabilityJobDefinitionS3OutputPropertyToHclTerraform(struct!.s3Output),
            isBlock: true,
            type: "struct",
            storageClassType: "S3OutputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionMonitoringOutputConfigPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        monitoring_outputs: cdktn.listMapper(ccModelExplainabilityJobDefinitionMonitoringOutputPropertyToTerraform, false)(struct!.monitoringOutputs),
    }
}


export function ccModelExplainabilityJobDefinitionMonitoringOutputConfigPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.MonitoringOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring_outputs: {
            value: cdktn.listMapperHcl(ccModelExplainabilityJobDefinitionMonitoringOutputPropertyToHclTerraform, false)(struct!.monitoringOutputs),
            isBlock: true,
            type: "list",
            storageClassType: "MonitoringOutputPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionVpcConfigPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccModelExplainabilityJobDefinitionVpcConfigPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionNetworkConfigPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.NetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
        vpc_config: ccModelExplainabilityJobDefinitionVpcConfigPropertyToTerraform(struct!.vpcConfig),
    }
}


export function ccModelExplainabilityJobDefinitionNetworkConfigPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.NetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_inter_container_traffic_encryption: {
            value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_network_isolation: {
            value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vpc_config: {
            value: ccModelExplainabilityJobDefinitionVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionStoppingConditionPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.StoppingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    }
}


export function ccModelExplainabilityJobDefinitionStoppingConditionPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.StoppingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_runtime_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelExplainabilityJobDefinitionTagPropertyToTerraform(struct?: CcModelExplainabilityJobDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccModelExplainabilityJobDefinitionTagPropertyToHclTerraform(struct?: CcModelExplainabilityJobDefinition.TagProperty | cdktn.IResolvable): any {
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


export namespace CcModelExplainabilityJobDefinition {
export interface ClusterConfigProperty {
    /**
    * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#instance_count CcModelExplainabilityJobDefinition#instance_count}
    */
    readonly instanceCount: number;
    /**
    * The ML compute instance type for the processing job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#instance_type CcModelExplainabilityJobDefinition#instance_type}
    */
    readonly instanceType: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#volume_kms_key_id CcModelExplainabilityJobDefinition#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#volume_size_in_gb CcModelExplainabilityJobDefinition#volume_size_in_gb}
    */
    readonly volumeSizeInGb: number;
}
export class ClusterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._volumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._volumeKmsKeyId = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._volumeKmsKeyId = value.volumeKmsKeyId;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // instance_count - computed: false, optional: false, required: true
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // volume_kms_key_id - computed: true, optional: true, required: false
    private _volumeKmsKeyId?: string; 
    public get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    public set volumeKmsKeyId(value: string) {
        this._volumeKmsKeyId = value;
    }
    public resetVolumeKmsKeyId() {
        this._volumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeKmsKeyIdInput() {
        return this._volumeKmsKeyId;
    }

    // volume_size_in_gb - computed: false, optional: false, required: true
    private _volumeSizeInGb?: number; 
    public get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
    public set volumeSizeInGb(value: number) {
        this._volumeSizeInGb = value;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInGbInput() {
        return this._volumeSizeInGb;
    }
}
export interface MonitoringResourcesProperty {
    /**
    * Configuration for the cluster used to run model monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#cluster_config CcModelExplainabilityJobDefinition#cluster_config}
    */
    readonly clusterConfig: ClusterConfigProperty;
}
export class MonitoringResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterConfig.internalValue = value.clusterConfig;
        }
    }

    // cluster_config - computed: false, optional: false, required: true
    private _clusterConfig = new ClusterConfigPropertyOutputReference(this, "cluster_config");
    public get clusterConfig() {
        return this._clusterConfig;
    }
    public putClusterConfig(value: ClusterConfigProperty) {
        this._clusterConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterConfigInput() {
        return this._clusterConfig.internalValue;
    }
}
export interface ModelExplainabilityAppSpecificationProperty {
    /**
    * The S3 URI to an analysis configuration file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#config_uri CcModelExplainabilityJobDefinition#config_uri}
    */
    readonly configUri: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#environment CcModelExplainabilityJobDefinition#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The container image to be run by the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#image_uri CcModelExplainabilityJobDefinition#image_uri}
    */
    readonly imageUri: string;
}
export class ModelExplainabilityAppSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelExplainabilityAppSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.configUri = this._configUri;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelExplainabilityAppSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configUri = undefined;
            this._environment = undefined;
            this._imageUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configUri = value.configUri;
            this._environment = value.environment;
            this._imageUri = value.imageUri;
        }
    }

    // config_uri - computed: false, optional: false, required: true
    private _configUri?: string; 
    public get configUri() {
        return this.getStringAttribute('config_uri');
    }
    public set configUri(value: string) {
        this._configUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configUriInput() {
        return this._configUri;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // image_uri - computed: false, optional: false, required: true
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }
}
export interface ConstraintsResourceProperty {
    /**
    * The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_uri CcModelExplainabilityJobDefinition#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ConstraintsResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConstraintsResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConstraintsResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelExplainabilityBaselineConfigProperty {
    /**
    * The name of a processing job
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#baselining_job_name CcModelExplainabilityJobDefinition#baselining_job_name}
    */
    readonly baseliningJobName?: string;
    /**
    * The baseline constraints resource for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#constraints_resource CcModelExplainabilityJobDefinition#constraints_resource}
    */
    readonly constraintsResource?: ConstraintsResourceProperty;
}
export class ModelExplainabilityBaselineConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelExplainabilityBaselineConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseliningJobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseliningJobName = this._baseliningJobName;
        }
        if (this._constraintsResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelExplainabilityBaselineConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseliningJobName = undefined;
            this._constraintsResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseliningJobName = value.baseliningJobName;
            this._constraintsResource.internalValue = value.constraintsResource;
        }
    }

    // baselining_job_name - computed: true, optional: true, required: false
    private _baseliningJobName?: string; 
    public get baseliningJobName() {
        return this.getStringAttribute('baselining_job_name');
    }
    public set baseliningJobName(value: string) {
        this._baseliningJobName = value;
    }
    public resetBaseliningJobName() {
        this._baseliningJobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseliningJobNameInput() {
        return this._baseliningJobName;
    }

    // constraints_resource - computed: true, optional: true, required: false
    private _constraintsResource = new ConstraintsResourcePropertyOutputReference(this, "constraints_resource");
    public get constraintsResource() {
        return this._constraintsResource;
    }
    public putConstraintsResource(value: ConstraintsResourceProperty) {
        this._constraintsResource.internalValue = value;
    }
    public resetConstraintsResource() {
        this._constraintsResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsResourceInput() {
        return this._constraintsResource.internalValue;
    }
}
export interface CsvProperty {
    /**
    * A boolean flag indicating if given CSV has header
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#header CcModelExplainabilityJobDefinition#header}
    */
    readonly header?: boolean | cdktn.IResolvable;
}
export class CsvPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: boolean | cdktn.IResolvable; 
    public get header() {
        return this.getBooleanAttribute('header');
    }
    public set header(value: boolean | cdktn.IResolvable) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }
}
export interface JsonProperty {
    /**
    * A boolean flag indicating if it is JSON line format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#line CcModelExplainabilityJobDefinition#line}
    */
    readonly line?: boolean | cdktn.IResolvable;
}
export class JsonPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._line !== undefined) {
            hasAnyValues = true;
            internalValueResult.line = this._line;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._line = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._line = value.line;
        }
    }

    // line - computed: true, optional: true, required: false
    private _line?: boolean | cdktn.IResolvable; 
    public get line() {
        return this.getBooleanAttribute('line');
    }
    public set line(value: boolean | cdktn.IResolvable) {
        this._line = value;
    }
    public resetLine() {
        this._line = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lineInput() {
        return this._line;
    }
}
export interface DatasetFormatProperty {
    /**
    * The CSV format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#csv CcModelExplainabilityJobDefinition#csv}
    */
    readonly csv?: CsvProperty;
    /**
    * The Json format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#json CcModelExplainabilityJobDefinition#json}
    */
    readonly json?: JsonProperty;
    /**
    * A flag indicating if the dataset format is Parquet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#parquet CcModelExplainabilityJobDefinition#parquet}
    */
    readonly parquet?: boolean | cdktn.IResolvable;
}
export class DatasetFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csv?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csv = this._csv?.internalValue;
        }
        if (this._json?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.json = this._json?.internalValue;
        }
        if (this._parquet !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquet = this._parquet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csv.internalValue = undefined;
            this._json.internalValue = undefined;
            this._parquet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csv.internalValue = value.csv;
            this._json.internalValue = value.json;
            this._parquet = value.parquet;
        }
    }

    // csv - computed: true, optional: true, required: false
    private _csv = new CsvPropertyOutputReference(this, "csv");
    public get csv() {
        return this._csv;
    }
    public putCsv(value: CsvProperty) {
        this._csv.internalValue = value;
    }
    public resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
        return this._csv.internalValue;
    }

    // json - computed: true, optional: true, required: false
    private _json = new JsonPropertyOutputReference(this, "json");
    public get json() {
        return this._json;
    }
    public putJson(value: JsonProperty) {
        this._json.internalValue = value;
    }
    public resetJson() {
        this._json.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
        return this._json.internalValue;
    }

    // parquet - computed: true, optional: true, required: false
    private _parquet?: boolean | cdktn.IResolvable; 
    public get parquet() {
        return this.getBooleanAttribute('parquet');
    }
    public set parquet(value: boolean | cdktn.IResolvable) {
        this._parquet = value;
    }
    public resetParquet() {
        this._parquet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetInput() {
        return this._parquet;
    }
}
export interface BatchTransformInputProperty {
    /**
    * A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#data_captured_destination_s3_uri CcModelExplainabilityJobDefinition#data_captured_destination_s3_uri}
    */
    readonly dataCapturedDestinationS3Uri?: string;
    /**
    * The dataset format of the data to monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#dataset_format CcModelExplainabilityJobDefinition#dataset_format}
    */
    readonly datasetFormat?: DatasetFormatProperty;
    /**
    * JSONpath to locate features in JSONlines dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#features_attribute CcModelExplainabilityJobDefinition#features_attribute}
    */
    readonly featuresAttribute?: string;
    /**
    * Index or JSONpath to locate predicted label(s)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#inference_attribute CcModelExplainabilityJobDefinition#inference_attribute}
    */
    readonly inferenceAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path CcModelExplainabilityJobDefinition#local_path}
    */
    readonly localPath?: string;
    /**
    * Index or JSONpath to locate probabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#probability_attribute CcModelExplainabilityJobDefinition#probability_attribute}
    */
    readonly probabilityAttribute?: string;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_data_distribution_type CcModelExplainabilityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_input_mode CcModelExplainabilityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export class BatchTransformInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchTransformInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataCapturedDestinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCapturedDestinationS3Uri = this._dataCapturedDestinationS3Uri;
        }
        if (this._datasetFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetFormat = this._datasetFormat?.internalValue;
        }
        if (this._featuresAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.featuresAttribute = this._featuresAttribute;
        }
        if (this._inferenceAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceAttribute = this._inferenceAttribute;
        }
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._probabilityAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.probabilityAttribute = this._probabilityAttribute;
        }
        if (this._s3DataDistributionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
        }
        if (this._s3InputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputMode = this._s3InputMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchTransformInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataCapturedDestinationS3Uri = undefined;
            this._datasetFormat.internalValue = undefined;
            this._featuresAttribute = undefined;
            this._inferenceAttribute = undefined;
            this._localPath = undefined;
            this._probabilityAttribute = undefined;
            this._s3DataDistributionType = undefined;
            this._s3InputMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataCapturedDestinationS3Uri = value.dataCapturedDestinationS3Uri;
            this._datasetFormat.internalValue = value.datasetFormat;
            this._featuresAttribute = value.featuresAttribute;
            this._inferenceAttribute = value.inferenceAttribute;
            this._localPath = value.localPath;
            this._probabilityAttribute = value.probabilityAttribute;
            this._s3DataDistributionType = value.s3DataDistributionType;
            this._s3InputMode = value.s3InputMode;
        }
    }

    // data_captured_destination_s3_uri - computed: true, optional: true, required: false
    private _dataCapturedDestinationS3Uri?: string; 
    public get dataCapturedDestinationS3Uri() {
        return this.getStringAttribute('data_captured_destination_s3_uri');
    }
    public set dataCapturedDestinationS3Uri(value: string) {
        this._dataCapturedDestinationS3Uri = value;
    }
    public resetDataCapturedDestinationS3Uri() {
        this._dataCapturedDestinationS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCapturedDestinationS3UriInput() {
        return this._dataCapturedDestinationS3Uri;
    }

    // dataset_format - computed: true, optional: true, required: false
    private _datasetFormat = new DatasetFormatPropertyOutputReference(this, "dataset_format");
    public get datasetFormat() {
        return this._datasetFormat;
    }
    public putDatasetFormat(value: DatasetFormatProperty) {
        this._datasetFormat.internalValue = value;
    }
    public resetDatasetFormat() {
        this._datasetFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetFormatInput() {
        return this._datasetFormat.internalValue;
    }

    // features_attribute - computed: true, optional: true, required: false
    private _featuresAttribute?: string; 
    public get featuresAttribute() {
        return this.getStringAttribute('features_attribute');
    }
    public set featuresAttribute(value: string) {
        this._featuresAttribute = value;
    }
    public resetFeaturesAttribute() {
        this._featuresAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featuresAttributeInput() {
        return this._featuresAttribute;
    }

    // inference_attribute - computed: true, optional: true, required: false
    private _inferenceAttribute?: string; 
    public get inferenceAttribute() {
        return this.getStringAttribute('inference_attribute');
    }
    public set inferenceAttribute(value: string) {
        this._inferenceAttribute = value;
    }
    public resetInferenceAttribute() {
        this._inferenceAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAttributeInput() {
        return this._inferenceAttribute;
    }

    // local_path - computed: true, optional: true, required: false
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    public resetLocalPath() {
        this._localPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // probability_attribute - computed: true, optional: true, required: false
    private _probabilityAttribute?: string; 
    public get probabilityAttribute() {
        return this.getStringAttribute('probability_attribute');
    }
    public set probabilityAttribute(value: string) {
        this._probabilityAttribute = value;
    }
    public resetProbabilityAttribute() {
        this._probabilityAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get probabilityAttributeInput() {
        return this._probabilityAttribute;
    }

    // s3_data_distribution_type - computed: true, optional: true, required: false
    private _s3DataDistributionType?: string; 
    public get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    public set s3DataDistributionType(value: string) {
        this._s3DataDistributionType = value;
    }
    public resetS3DataDistributionType() {
        this._s3DataDistributionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataDistributionTypeInput() {
        return this._s3DataDistributionType;
    }

    // s3_input_mode - computed: true, optional: true, required: false
    private _s3InputMode?: string; 
    public get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
    public set s3InputMode(value: string) {
        this._s3InputMode = value;
    }
    public resetS3InputMode() {
        this._s3InputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputModeInput() {
        return this._s3InputMode;
    }
}
export interface EndpointInputProperty {
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_name CcModelExplainabilityJobDefinition#endpoint_name}
    */
    readonly endpointName?: string;
    /**
    * JSONpath to locate features in JSONlines dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#features_attribute CcModelExplainabilityJobDefinition#features_attribute}
    */
    readonly featuresAttribute?: string;
    /**
    * Index or JSONpath to locate predicted label(s)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#inference_attribute CcModelExplainabilityJobDefinition#inference_attribute}
    */
    readonly inferenceAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path CcModelExplainabilityJobDefinition#local_path}
    */
    readonly localPath?: string;
    /**
    * Index or JSONpath to locate probabilities
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#probability_attribute CcModelExplainabilityJobDefinition#probability_attribute}
    */
    readonly probabilityAttribute?: string;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_data_distribution_type CcModelExplainabilityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_input_mode CcModelExplainabilityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export class EndpointInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointName !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointName = this._endpointName;
        }
        if (this._featuresAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.featuresAttribute = this._featuresAttribute;
        }
        if (this._inferenceAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceAttribute = this._inferenceAttribute;
        }
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._probabilityAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.probabilityAttribute = this._probabilityAttribute;
        }
        if (this._s3DataDistributionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
        }
        if (this._s3InputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputMode = this._s3InputMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointName = undefined;
            this._featuresAttribute = undefined;
            this._inferenceAttribute = undefined;
            this._localPath = undefined;
            this._probabilityAttribute = undefined;
            this._s3DataDistributionType = undefined;
            this._s3InputMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointName = value.endpointName;
            this._featuresAttribute = value.featuresAttribute;
            this._inferenceAttribute = value.inferenceAttribute;
            this._localPath = value.localPath;
            this._probabilityAttribute = value.probabilityAttribute;
            this._s3DataDistributionType = value.s3DataDistributionType;
            this._s3InputMode = value.s3InputMode;
        }
    }

    // endpoint_name - computed: true, optional: true, required: false
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    public resetEndpointName() {
        this._endpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // features_attribute - computed: true, optional: true, required: false
    private _featuresAttribute?: string; 
    public get featuresAttribute() {
        return this.getStringAttribute('features_attribute');
    }
    public set featuresAttribute(value: string) {
        this._featuresAttribute = value;
    }
    public resetFeaturesAttribute() {
        this._featuresAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featuresAttributeInput() {
        return this._featuresAttribute;
    }

    // inference_attribute - computed: true, optional: true, required: false
    private _inferenceAttribute?: string; 
    public get inferenceAttribute() {
        return this.getStringAttribute('inference_attribute');
    }
    public set inferenceAttribute(value: string) {
        this._inferenceAttribute = value;
    }
    public resetInferenceAttribute() {
        this._inferenceAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAttributeInput() {
        return this._inferenceAttribute;
    }

    // local_path - computed: true, optional: true, required: false
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    public resetLocalPath() {
        this._localPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // probability_attribute - computed: true, optional: true, required: false
    private _probabilityAttribute?: string; 
    public get probabilityAttribute() {
        return this.getStringAttribute('probability_attribute');
    }
    public set probabilityAttribute(value: string) {
        this._probabilityAttribute = value;
    }
    public resetProbabilityAttribute() {
        this._probabilityAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get probabilityAttributeInput() {
        return this._probabilityAttribute;
    }

    // s3_data_distribution_type - computed: true, optional: true, required: false
    private _s3DataDistributionType?: string; 
    public get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    public set s3DataDistributionType(value: string) {
        this._s3DataDistributionType = value;
    }
    public resetS3DataDistributionType() {
        this._s3DataDistributionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataDistributionTypeInput() {
        return this._s3DataDistributionType;
    }

    // s3_input_mode - computed: true, optional: true, required: false
    private _s3InputMode?: string; 
    public get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
    public set s3InputMode(value: string) {
        this._s3InputMode = value;
    }
    public resetS3InputMode() {
        this._s3InputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputModeInput() {
        return this._s3InputMode;
    }
}
export interface ModelExplainabilityJobInputProperty {
    /**
    * The batch transform input for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#batch_transform_input CcModelExplainabilityJobDefinition#batch_transform_input}
    */
    readonly batchTransformInput?: BatchTransformInputProperty;
    /**
    * The endpoint for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#endpoint_input CcModelExplainabilityJobDefinition#endpoint_input}
    */
    readonly endpointInput?: EndpointInputProperty;
}
export class ModelExplainabilityJobInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelExplainabilityJobInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchTransformInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchTransformInput = this._batchTransformInput?.internalValue;
        }
        if (this._endpointInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointInput = this._endpointInput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelExplainabilityJobInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchTransformInput.internalValue = undefined;
            this._endpointInput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchTransformInput.internalValue = value.batchTransformInput;
            this._endpointInput.internalValue = value.endpointInput;
        }
    }

    // batch_transform_input - computed: true, optional: true, required: false
    private _batchTransformInput = new BatchTransformInputPropertyOutputReference(this, "batch_transform_input");
    public get batchTransformInput() {
        return this._batchTransformInput;
    }
    public putBatchTransformInput(value: BatchTransformInputProperty) {
        this._batchTransformInput.internalValue = value;
    }
    public resetBatchTransformInput() {
        this._batchTransformInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchTransformInputInput() {
        return this._batchTransformInput.internalValue;
    }

    // endpoint_input - computed: true, optional: true, required: false
    private _endpointInput = new EndpointInputPropertyOutputReference(this, "endpoint_input");
    public get endpointInput() {
        return this._endpointInput;
    }
    public putEndpointInput(value: EndpointInputProperty) {
        this._endpointInput.internalValue = value;
    }
    public resetEndpointInput() {
        this._endpointInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInputInput() {
        return this._endpointInput.internalValue;
    }
}
export interface S3OutputProperty {
    /**
    * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#local_path CcModelExplainabilityJobDefinition#local_path}
    */
    readonly localPath: string;
    /**
    * Whether to upload the results of the monitoring job continuously or after the job completes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_upload_mode CcModelExplainabilityJobDefinition#s3_upload_mode}
    */
    readonly s3UploadMode?: string;
    /**
    * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_uri CcModelExplainabilityJobDefinition#s3_uri}
    */
    readonly s3Uri: string;
}
export class S3OutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3OutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._s3UploadMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3UploadMode = this._s3UploadMode;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3OutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._localPath = undefined;
            this._s3UploadMode = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._localPath = value.localPath;
            this._s3UploadMode = value.s3UploadMode;
            this._s3Uri = value.s3Uri;
        }
    }

    // local_path - computed: false, optional: false, required: true
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // s3_upload_mode - computed: true, optional: true, required: false
    private _s3UploadMode?: string; 
    public get s3UploadMode() {
        return this.getStringAttribute('s3_upload_mode');
    }
    public set s3UploadMode(value: string) {
        this._s3UploadMode = value;
    }
    public resetS3UploadMode() {
        this._s3UploadMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UploadModeInput() {
        return this._s3UploadMode;
    }

    // s3_uri - computed: false, optional: false, required: true
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface MonitoringOutputProperty {
    /**
    * Information about where and how to store the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#s3_output CcModelExplainabilityJobDefinition#s3_output}
    */
    readonly s3Output: S3OutputProperty;
}
export class MonitoringOutputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MonitoringOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Output?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Output = this._s3Output?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Output.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Output.internalValue = value.s3Output;
        }
    }

    // s3_output - computed: false, optional: false, required: true
    private _s3Output = new S3OutputPropertyOutputReference(this, "s3_output");
    public get s3Output() {
        return this._s3Output;
    }
    public putS3Output(value: S3OutputProperty) {
        this._s3Output.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputInput() {
        return this._s3Output.internalValue;
    }
}

export class MonitoringOutputPropertyList extends cdktn.ComplexList {
    public internalValue? : MonitoringOutputProperty[] | cdktn.IResolvable

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
    public get(index: number): MonitoringOutputPropertyOutputReference {
        return new MonitoringOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MonitoringOutputConfigProperty {
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#kms_key_id CcModelExplainabilityJobDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#monitoring_outputs CcModelExplainabilityJobDefinition#monitoring_outputs}
    */
    readonly monitoringOutputs: MonitoringOutputProperty[] | cdktn.IResolvable;
}
export class MonitoringOutputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringOutputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._monitoringOutputs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringOutputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._monitoringOutputs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._monitoringOutputs.internalValue = value.monitoringOutputs;
        }
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

    // monitoring_outputs - computed: false, optional: false, required: true
    private _monitoringOutputs = new MonitoringOutputPropertyList(this, "monitoring_outputs", false);
    public get monitoringOutputs() {
        return this._monitoringOutputs;
    }
    public putMonitoringOutputs(value: MonitoringOutputProperty[] | cdktn.IResolvable) {
        this._monitoringOutputs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringOutputsInput() {
        return this._monitoringOutputs.internalValue;
    }
}
export interface VpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#security_group_ids CcModelExplainabilityJobDefinition#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#subnets CcModelExplainabilityJobDefinition#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigProperty {
    /**
    * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#enable_inter_container_traffic_encryption CcModelExplainabilityJobDefinition#enable_inter_container_traffic_encryption}
    */
    readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
    /**
    * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#enable_network_isolation CcModelExplainabilityJobDefinition#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
    /**
    * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#vpc_config CcModelExplainabilityJobDefinition#vpc_config}
    */
    readonly vpcConfig?: VpcConfigProperty;
}
export class NetworkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableInterContainerTrafficEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
        }
        if (this._enableNetworkIsolation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
        }
        if (this._vpcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableInterContainerTrafficEncryption = undefined;
            this._enableNetworkIsolation = undefined;
            this._vpcConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
            this._enableNetworkIsolation = value.enableNetworkIsolation;
            this._vpcConfig.internalValue = value.vpcConfig;
        }
    }

    // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
    private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
    public get enableInterContainerTrafficEncryption() {
        return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
    }
    public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
        this._enableInterContainerTrafficEncryption = value;
    }
    public resetEnableInterContainerTrafficEncryption() {
        this._enableInterContainerTrafficEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInterContainerTrafficEncryptionInput() {
        return this._enableInterContainerTrafficEncryption;
    }

    // enable_network_isolation - computed: true, optional: true, required: false
    private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
    public get enableNetworkIsolation() {
        return this.getBooleanAttribute('enable_network_isolation');
    }
    public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
        this._enableNetworkIsolation = value;
    }
    public resetEnableNetworkIsolation() {
        this._enableNetworkIsolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNetworkIsolationInput() {
        return this._enableNetworkIsolation;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: VpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
}
export interface StoppingConditionProperty {
    /**
    * The maximum runtime allowed in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#max_runtime_in_seconds CcModelExplainabilityJobDefinition#max_runtime_in_seconds}
    */
    readonly maxRuntimeInSeconds?: number;
}
export class StoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StoppingConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxRuntimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StoppingConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxRuntimeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
        }
    }

    // max_runtime_in_seconds - computed: true, optional: true, required: false
    private _maxRuntimeInSeconds?: number; 
    public get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
    public set maxRuntimeInSeconds(value: number) {
        this._maxRuntimeInSeconds = value;
    }
    public resetMaxRuntimeInSeconds() {
        this._maxRuntimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRuntimeInSecondsInput() {
        return this._maxRuntimeInSeconds;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#key CcModelExplainabilityJobDefinition#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_explainability_job_definition#value CcModelExplainabilityJobDefinition#value}
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
