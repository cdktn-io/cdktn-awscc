// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInferenceComponentProps extends cdktn.TerraformMetaArguments {
    /**
    * The deployment config for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#deployment_config CcInferenceComponent#deployment_config}
    */
    readonly deploymentConfig?: CcInferenceComponent.InferenceComponentDeploymentConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of the endpoint the inference component is associated with
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#endpoint_arn CcInferenceComponent#endpoint_arn}
    */
    readonly endpointArn?: string;
    /**
    * The name of the endpoint the inference component is associated with
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#endpoint_name CcInferenceComponent#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * The name of the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#inference_component_name CcInferenceComponent#inference_component_name}
    */
    readonly inferenceComponentName?: string;
    /**
    * The runtime config for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#runtime_config CcInferenceComponent#runtime_config}
    */
    readonly runtimeConfig?: CcInferenceComponent.InferenceComponentRuntimeConfigProperty;
    /**
    * The specification for the inference component, for an endpoint with a single instance type. Specify exactly one of Specification or Specifications. InstanceType is not accepted here; use Specifications for per instance type configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#specification CcInferenceComponent#specification}
    */
    readonly specification?: CcInferenceComponent.InferenceComponentSpecificationProperty;
    /**
    * A list of specification objects for the inference component, one per instance type. The service requires at least two entries; use the singular Specification for a single instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#specifications CcInferenceComponent#specifications}
    */
    readonly specifications?: CcInferenceComponent.SpecificationsProperty[] | cdktn.IResolvable;
    /**
    * An array of tags to apply to the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#tags CcInferenceComponent#tags}
    */
    readonly tags?: CcInferenceComponent.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the endpoint variant the inference component is associated with
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#variant_name CcInferenceComponent#variant_name}
    */
    readonly variantName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component}
*/
export class CcInferenceComponent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_inference_component";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInferenceComponent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInferenceComponent to import
    * @param importFromId The id of the existing CcInferenceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInferenceComponent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_component", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInferenceComponentProps
    */
    public constructor(scope: Construct, id: string, config: CcInferenceComponentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_inference_component',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._deploymentConfig.internalValue = config.deploymentConfig;
        this._endpointArn = config.endpointArn;
        this._endpointName = config.endpointName;
        this._inferenceComponentName = config.inferenceComponentName;
        this._runtimeConfig.internalValue = config.runtimeConfig;
        this._specification.internalValue = config.specification;
        this._specifications.internalValue = config.specifications;
        this._tags.internalValue = config.tags;
        this._variantName = config.variantName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // deployment_config - computed: true, optional: true, required: false
    private _deploymentConfig = new CcInferenceComponent.InferenceComponentDeploymentConfigPropertyOutputReference(this, "deployment_config");
    public get deploymentConfig() {
        return this._deploymentConfig;
    }
    public putDeploymentConfig(value: CcInferenceComponent.InferenceComponentDeploymentConfigProperty) {
        this._deploymentConfig.internalValue = value;
    }
    public resetDeploymentConfig() {
        this._deploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigInput() {
        return this._deploymentConfig.internalValue;
    }

    // endpoint_arn - computed: true, optional: true, required: false
    private _endpointArn?: string; 
    public get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }
    public set endpointArn(value: string) {
        this._endpointArn = value;
    }
    public resetEndpointArn() {
        this._endpointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointArnInput() {
        return this._endpointArn;
    }

    // endpoint_name - computed: false, optional: false, required: true
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_component_arn - computed: true, optional: false, required: false
    public get inferenceComponentArn() {
        return this.getStringAttribute('inference_component_arn');
    }

    // inference_component_name - computed: true, optional: true, required: false
    private _inferenceComponentName?: string; 
    public get inferenceComponentName() {
        return this.getStringAttribute('inference_component_name');
    }
    public set inferenceComponentName(value: string) {
        this._inferenceComponentName = value;
    }
    public resetInferenceComponentName() {
        this._inferenceComponentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceComponentNameInput() {
        return this._inferenceComponentName;
    }

    // inference_component_status - computed: true, optional: false, required: false
    public get inferenceComponentStatus() {
        return this.getStringAttribute('inference_component_status');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // runtime_config - computed: true, optional: true, required: false
    private _runtimeConfig = new CcInferenceComponent.InferenceComponentRuntimeConfigPropertyOutputReference(this, "runtime_config");
    public get runtimeConfig() {
        return this._runtimeConfig;
    }
    public putRuntimeConfig(value: CcInferenceComponent.InferenceComponentRuntimeConfigProperty) {
        this._runtimeConfig.internalValue = value;
    }
    public resetRuntimeConfig() {
        this._runtimeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeConfigInput() {
        return this._runtimeConfig.internalValue;
    }

    // specification - computed: true, optional: true, required: false
    private _specification = new CcInferenceComponent.InferenceComponentSpecificationPropertyOutputReference(this, "specification");
    public get specification() {
        return this._specification;
    }
    public putSpecification(value: CcInferenceComponent.InferenceComponentSpecificationProperty) {
        this._specification.internalValue = value;
    }
    public resetSpecification() {
        this._specification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get specificationInput() {
        return this._specification.internalValue;
    }

    // specifications - computed: true, optional: true, required: false
    private _specifications = new CcInferenceComponent.SpecificationsPropertyList(this, "specifications", false);
    public get specifications() {
        return this._specifications;
    }
    public putSpecifications(value: CcInferenceComponent.SpecificationsProperty[] | cdktn.IResolvable) {
        this._specifications.internalValue = value;
    }
    public resetSpecifications() {
        this._specifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get specificationsInput() {
        return this._specifications.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInferenceComponent.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInferenceComponent.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // variant_name - computed: true, optional: true, required: false
    private _variantName?: string; 
    public get variantName() {
        return this.getStringAttribute('variant_name');
    }
    public set variantName(value: string) {
        this._variantName = value;
    }
    public resetVariantName() {
        this._variantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantNameInput() {
        return this._variantName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deployment_config: ccInferenceComponentInferenceComponentDeploymentConfigPropertyToTerraform(this._deploymentConfig.internalValue),
            endpoint_arn: cdktn.stringToTerraform(this._endpointArn),
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            inference_component_name: cdktn.stringToTerraform(this._inferenceComponentName),
            runtime_config: ccInferenceComponentInferenceComponentRuntimeConfigPropertyToTerraform(this._runtimeConfig.internalValue),
            specification: ccInferenceComponentInferenceComponentSpecificationPropertyToTerraform(this._specification.internalValue),
            specifications: cdktn.listMapper(ccInferenceComponentSpecificationsPropertyToTerraform, false)(this._specifications.internalValue),
            tags: cdktn.listMapper(ccInferenceComponentTagPropertyToTerraform, false)(this._tags.internalValue),
            variant_name: cdktn.stringToTerraform(this._variantName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deployment_config: {
                value: ccInferenceComponentInferenceComponentDeploymentConfigPropertyToHclTerraform(this._deploymentConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceComponent.InferenceComponentDeploymentConfigProperty",
            },
            endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._endpointArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_component_name: {
                value: cdktn.stringToHclTerraform(this._inferenceComponentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            runtime_config: {
                value: ccInferenceComponentInferenceComponentRuntimeConfigPropertyToHclTerraform(this._runtimeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceComponent.InferenceComponentRuntimeConfigProperty",
            },
            specification: {
                value: ccInferenceComponentInferenceComponentSpecificationPropertyToHclTerraform(this._specification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceComponent.InferenceComponentSpecificationProperty",
            },
            specifications: {
                value: cdktn.listMapperHcl(ccInferenceComponentSpecificationsPropertyToHclTerraform, false)(this._specifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInferenceComponent.SpecificationsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInferenceComponentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInferenceComponent.TagPropertyList",
            },
            variant_name: {
                value: cdktn.stringToHclTerraform(this._variantName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInferenceComponentAlarmPropertyToTerraform(struct?: CcInferenceComponent.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    }
}


export function ccInferenceComponentAlarmPropertyToHclTerraform(struct?: CcInferenceComponent.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentAutoRollbackConfigurationPropertyToTerraform(struct?: CcInferenceComponent.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarms: cdktn.listMapper(ccInferenceComponentAlarmPropertyToTerraform, false)(struct!.alarms),
    }
}


export function ccInferenceComponentAutoRollbackConfigurationPropertyToHclTerraform(struct?: CcInferenceComponent.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarms: {
            value: cdktn.listMapperHcl(ccInferenceComponentAlarmPropertyToHclTerraform, false)(struct!.alarms),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentInferenceComponentCapacitySizePropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentCapacitySizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInferenceComponentInferenceComponentCapacitySizePropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentCapacitySizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccInferenceComponentRollbackMaximumBatchSizePropertyToTerraform(struct?: CcInferenceComponent.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInferenceComponentRollbackMaximumBatchSizePropertyToHclTerraform(struct?: CcInferenceComponent.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccInferenceComponentInferenceComponentRollingUpdatePolicyPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentRollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_batch_size: ccInferenceComponentInferenceComponentCapacitySizePropertyToTerraform(struct!.maximumBatchSize),
        maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
        rollback_maximum_batch_size: ccInferenceComponentRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
        wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    }
}


export function ccInferenceComponentInferenceComponentRollingUpdatePolicyPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentRollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_batch_size: {
            value: ccInferenceComponentInferenceComponentCapacitySizePropertyToHclTerraform(struct!.maximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceComponentCapacitySizeProperty",
        },
        maximum_execution_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rollback_maximum_batch_size: {
            value: ccInferenceComponentRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "RollbackMaximumBatchSizeProperty",
        },
        wait_interval_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentInferenceComponentDeploymentConfigPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentDeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_rollback_configuration: ccInferenceComponentAutoRollbackConfigurationPropertyToTerraform(struct!.autoRollbackConfiguration),
        rolling_update_policy: ccInferenceComponentInferenceComponentRollingUpdatePolicyPropertyToTerraform(struct!.rollingUpdatePolicy),
    }
}


export function ccInferenceComponentInferenceComponentDeploymentConfigPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentDeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_rollback_configuration: {
            value: ccInferenceComponentAutoRollbackConfigurationPropertyToHclTerraform(struct!.autoRollbackConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoRollbackConfigurationProperty",
        },
        rolling_update_policy: {
            value: ccInferenceComponentInferenceComponentRollingUpdatePolicyPropertyToHclTerraform(struct!.rollingUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceComponentRollingUpdatePolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentPlacementStatusPropertyToTerraform(struct?: CcInferenceComponent.PlacementStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInferenceComponentPlacementStatusPropertyToHclTerraform(struct?: CcInferenceComponent.PlacementStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInferenceComponentInferenceComponentRuntimeConfigPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentRuntimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_count: cdktn.numberToTerraform(struct!.copyCount),
    }
}


export function ccInferenceComponentInferenceComponentRuntimeConfigPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentRuntimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_count: {
            value: cdktn.numberToHclTerraform(struct!.copyCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentInferenceComponentComputeResourceRequirementsPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentComputeResourceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
        min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
        number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
        number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
    }
}


export function ccInferenceComponentInferenceComponentComputeResourceRequirementsPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentComputeResourceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_memory_required_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_memory_required_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_accelerator_devices_required: {
            value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_cpu_cores_required: {
            value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyToTerraform(struct?: CcInferenceComponent.SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
        metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
    }
}


export function ccInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_publish_frequency_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metrics_endpoint_path: {
            value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationContainerContainerMetricsConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationContainerContainerMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metrics_endpoints: cdktn.listMapper(ccInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyToTerraform, false)(struct!.metricsEndpoints),
    }
}


export function ccInferenceComponentSpecificationContainerContainerMetricsConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationContainerContainerMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metrics_endpoints: {
            value: cdktn.listMapperHcl(ccInferenceComponentSpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyToHclTerraform, false)(struct!.metricsEndpoints),
            isBlock: true,
            type: "list",
            storageClassType: "SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentDeployedImagePropertyToTerraform(struct?: CcInferenceComponent.DeployedImageProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInferenceComponentDeployedImagePropertyToHclTerraform(struct?: CcInferenceComponent.DeployedImageProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInferenceComponentInferenceComponentContainerSpecificationPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentContainerSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
        container_metrics_config: ccInferenceComponentSpecificationContainerContainerMetricsConfigPropertyToTerraform(struct!.containerMetricsConfig),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        image: cdktn.stringToTerraform(struct!.image),
    }
}


export function ccInferenceComponentInferenceComponentContainerSpecificationPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentContainerSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        artifact_url: {
            value: cdktn.stringToHclTerraform(struct!.artifactUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_metrics_config: {
            value: ccInferenceComponentSpecificationContainerContainerMetricsConfigPropertyToHclTerraform(struct!.containerMetricsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationContainerContainerMetricsConfigProperty",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationCurrentDataCacheConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationCurrentDataCacheConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInferenceComponentSpecificationCurrentDataCacheConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationCurrentDataCacheConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInferenceComponentSpecificationDataCacheConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
    }
}


export function ccInferenceComponentSpecificationDataCacheConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_caching: {
            value: cdktn.booleanToHclTerraform(struct!.enableCaching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalancePropertyToTerraform(struct?: CcInferenceComponent.SpecificationSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
        max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
    }
}


export function ccInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalancePropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enforcement_mode: {
            value: cdktn.stringToHclTerraform(struct!.enforcementMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_imbalance: {
            value: cdktn.numberToHclTerraform(struct!.maxImbalance),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationSchedulingConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationSchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_balance: ccInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalancePropertyToTerraform(struct!.availabilityZoneBalance),
        placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
    }
}


export function ccInferenceComponentSpecificationSchedulingConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationSchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_balance: {
            value: ccInferenceComponentSpecificationSchedulingConfigAvailabilityZoneBalancePropertyToHclTerraform(struct!.availabilityZoneBalance),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationSchedulingConfigAvailabilityZoneBalanceProperty",
        },
        placement_strategy: {
            value: cdktn.stringToHclTerraform(struct!.placementStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentInferenceComponentStartupParametersPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentStartupParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
        model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    }
}


export function ccInferenceComponentInferenceComponentStartupParametersPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentStartupParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_startup_health_check_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_data_download_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentInferenceComponentSpecificationPropertyToTerraform(struct?: CcInferenceComponent.InferenceComponentSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_inference_component_name: cdktn.stringToTerraform(struct!.baseInferenceComponentName),
        compute_resource_requirements: ccInferenceComponentInferenceComponentComputeResourceRequirementsPropertyToTerraform(struct!.computeResourceRequirements),
        container: ccInferenceComponentInferenceComponentContainerSpecificationPropertyToTerraform(struct!.container),
        data_cache_config: ccInferenceComponentSpecificationDataCacheConfigPropertyToTerraform(struct!.dataCacheConfig),
        model_name: cdktn.stringToTerraform(struct!.modelName),
        scheduling_config: ccInferenceComponentSpecificationSchedulingConfigPropertyToTerraform(struct!.schedulingConfig),
        startup_parameters: ccInferenceComponentInferenceComponentStartupParametersPropertyToTerraform(struct!.startupParameters),
    }
}


export function ccInferenceComponentInferenceComponentSpecificationPropertyToHclTerraform(struct?: CcInferenceComponent.InferenceComponentSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_inference_component_name: {
            value: cdktn.stringToHclTerraform(struct!.baseInferenceComponentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compute_resource_requirements: {
            value: ccInferenceComponentInferenceComponentComputeResourceRequirementsPropertyToHclTerraform(struct!.computeResourceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceComponentComputeResourceRequirementsProperty",
        },
        container: {
            value: ccInferenceComponentInferenceComponentContainerSpecificationPropertyToHclTerraform(struct!.container),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceComponentContainerSpecificationProperty",
        },
        data_cache_config: {
            value: ccInferenceComponentSpecificationDataCacheConfigPropertyToHclTerraform(struct!.dataCacheConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationDataCacheConfigProperty",
        },
        model_name: {
            value: cdktn.stringToHclTerraform(struct!.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduling_config: {
            value: ccInferenceComponentSpecificationSchedulingConfigPropertyToHclTerraform(struct!.schedulingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationSchedulingConfigProperty",
        },
        startup_parameters: {
            value: ccInferenceComponentInferenceComponentStartupParametersPropertyToHclTerraform(struct!.startupParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceComponentStartupParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentComputeResourceRequirementsPropertyToTerraform(struct?: CcInferenceComponent.ComputeResourceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
        min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
        number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
        number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
    }
}


export function ccInferenceComponentComputeResourceRequirementsPropertyToHclTerraform(struct?: CcInferenceComponent.ComputeResourceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_memory_required_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_memory_required_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_accelerator_devices_required: {
            value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_cpu_cores_required: {
            value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
        metrics_endpoint_path: cdktn.stringToTerraform(struct!.metricsEndpointPath),
    }
}


export function ccInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_publish_frequency_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metrics_endpoint_path: {
            value: cdktn.stringToHclTerraform(struct!.metricsEndpointPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsContainerContainerMetricsConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsContainerContainerMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metrics_endpoints: cdktn.listMapper(ccInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyToTerraform, false)(struct!.metricsEndpoints),
    }
}


export function ccInferenceComponentSpecificationsContainerContainerMetricsConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsContainerContainerMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metrics_endpoints: {
            value: cdktn.listMapperHcl(ccInferenceComponentSpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyToHclTerraform, false)(struct!.metricsEndpoints),
            isBlock: true,
            type: "list",
            storageClassType: "SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentContainerPropertyToTerraform(struct?: CcInferenceComponent.ContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
        container_metrics_config: ccInferenceComponentSpecificationsContainerContainerMetricsConfigPropertyToTerraform(struct!.containerMetricsConfig),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        image: cdktn.stringToTerraform(struct!.image),
    }
}


export function ccInferenceComponentContainerPropertyToHclTerraform(struct?: CcInferenceComponent.ContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        artifact_url: {
            value: cdktn.stringToHclTerraform(struct!.artifactUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_metrics_config: {
            value: ccInferenceComponentSpecificationsContainerContainerMetricsConfigPropertyToHclTerraform(struct!.containerMetricsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationsContainerContainerMetricsConfigProperty",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsCurrentDataCacheConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsCurrentDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
    }
}


export function ccInferenceComponentSpecificationsCurrentDataCacheConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsCurrentDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_caching: {
            value: cdktn.booleanToHclTerraform(struct!.enableCaching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsDataCacheConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_caching: cdktn.booleanToTerraform(struct!.enableCaching),
    }
}


export function ccInferenceComponentSpecificationsDataCacheConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsDataCacheConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_caching: {
            value: cdktn.booleanToHclTerraform(struct!.enableCaching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalancePropertyToTerraform(struct?: CcInferenceComponent.SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enforcement_mode: cdktn.stringToTerraform(struct!.enforcementMode),
        max_imbalance: cdktn.numberToTerraform(struct!.maxImbalance),
    }
}


export function ccInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalancePropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enforcement_mode: {
            value: cdktn.stringToHclTerraform(struct!.enforcementMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_imbalance: {
            value: cdktn.numberToHclTerraform(struct!.maxImbalance),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsSchedulingConfigPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsSchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_balance: ccInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalancePropertyToTerraform(struct!.availabilityZoneBalance),
        placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
    }
}


export function ccInferenceComponentSpecificationsSchedulingConfigPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsSchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_balance: {
            value: ccInferenceComponentSpecificationsSchedulingConfigAvailabilityZoneBalancePropertyToHclTerraform(struct!.availabilityZoneBalance),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty",
        },
        placement_strategy: {
            value: cdktn.stringToHclTerraform(struct!.placementStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentStartupParametersPropertyToTerraform(struct?: CcInferenceComponent.StartupParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
        model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    }
}


export function ccInferenceComponentStartupParametersPropertyToHclTerraform(struct?: CcInferenceComponent.StartupParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_startup_health_check_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_data_download_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentSpecificationsPropertyToTerraform(struct?: CcInferenceComponent.SpecificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_resource_requirements: ccInferenceComponentComputeResourceRequirementsPropertyToTerraform(struct!.computeResourceRequirements),
        container: ccInferenceComponentContainerPropertyToTerraform(struct!.container),
        current_data_cache_config: ccInferenceComponentSpecificationsCurrentDataCacheConfigPropertyToTerraform(struct!.currentDataCacheConfig),
        data_cache_config: ccInferenceComponentSpecificationsDataCacheConfigPropertyToTerraform(struct!.dataCacheConfig),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        model_name: cdktn.stringToTerraform(struct!.modelName),
        scheduling_config: ccInferenceComponentSpecificationsSchedulingConfigPropertyToTerraform(struct!.schedulingConfig),
        startup_parameters: ccInferenceComponentStartupParametersPropertyToTerraform(struct!.startupParameters),
    }
}


export function ccInferenceComponentSpecificationsPropertyToHclTerraform(struct?: CcInferenceComponent.SpecificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_resource_requirements: {
            value: ccInferenceComponentComputeResourceRequirementsPropertyToHclTerraform(struct!.computeResourceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "ComputeResourceRequirementsProperty",
        },
        container: {
            value: ccInferenceComponentContainerPropertyToHclTerraform(struct!.container),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerProperty",
        },
        current_data_cache_config: {
            value: ccInferenceComponentSpecificationsCurrentDataCacheConfigPropertyToHclTerraform(struct!.currentDataCacheConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationsCurrentDataCacheConfigProperty",
        },
        data_cache_config: {
            value: ccInferenceComponentSpecificationsDataCacheConfigPropertyToHclTerraform(struct!.dataCacheConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationsDataCacheConfigProperty",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_name: {
            value: cdktn.stringToHclTerraform(struct!.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduling_config: {
            value: ccInferenceComponentSpecificationsSchedulingConfigPropertyToHclTerraform(struct!.schedulingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificationsSchedulingConfigProperty",
        },
        startup_parameters: {
            value: ccInferenceComponentStartupParametersPropertyToHclTerraform(struct!.startupParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "StartupParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceComponentTagPropertyToTerraform(struct?: CcInferenceComponent.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInferenceComponentTagPropertyToHclTerraform(struct?: CcInferenceComponent.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInferenceComponent {
export interface AlarmProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#alarm_name CcInferenceComponent#alarm_name}
    */
    readonly alarmName?: string;
}
export class AlarmPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }
}

export class AlarmPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmPropertyOutputReference {
        return new AlarmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AutoRollbackConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#alarms CcInferenceComponent#alarms}
    */
    readonly alarms?: AlarmProperty[] | cdktn.IResolvable;
}
export class AutoRollbackConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarms.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarms.internalValue = value.alarms;
        }
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new AlarmPropertyList(this, "alarms", false);
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: AlarmProperty[] | cdktn.IResolvable) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }
}
export interface InferenceComponentCapacitySizeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#type CcInferenceComponent#type}
    */
    readonly type?: string;
    /**
    * The number of copies for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#value CcInferenceComponent#value}
    */
    readonly value?: number;
}
export class InferenceComponentCapacitySizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentCapacitySizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentCapacitySizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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
export interface RollbackMaximumBatchSizeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#type CcInferenceComponent#type}
    */
    readonly type?: string;
    /**
    * The number of copies for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#value CcInferenceComponent#value}
    */
    readonly value?: number;
}
export class RollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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
export interface InferenceComponentRollingUpdatePolicyProperty {
    /**
    * Capacity size configuration for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#maximum_batch_size CcInferenceComponent#maximum_batch_size}
    */
    readonly maximumBatchSize?: InferenceComponentCapacitySizeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds CcInferenceComponent#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * Capacity size configuration for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size CcInferenceComponent#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: RollbackMaximumBatchSizeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds CcInferenceComponent#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds?: number;
}
export class InferenceComponentRollingUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentRollingUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
        }
        if (this._maximumExecutionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
        }
        if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentRollingUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = undefined;
            this._maximumExecutionTimeoutInSeconds = undefined;
            this._rollbackMaximumBatchSize.internalValue = undefined;
            this._waitIntervalInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = value.maximumBatchSize;
            this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
            this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
        }
    }

    // maximum_batch_size - computed: true, optional: true, required: false
    private _maximumBatchSize = new InferenceComponentCapacitySizePropertyOutputReference(this, "maximum_batch_size");
    public get maximumBatchSize() {
        return this._maximumBatchSize;
    }
    public putMaximumBatchSize(value: InferenceComponentCapacitySizeProperty) {
        this._maximumBatchSize.internalValue = value;
    }
    public resetMaximumBatchSize() {
        this._maximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchSizeInput() {
        return this._maximumBatchSize.internalValue;
    }

    // maximum_execution_timeout_in_seconds - computed: true, optional: true, required: false
    private _maximumExecutionTimeoutInSeconds?: number; 
    public get maximumExecutionTimeoutInSeconds() {
        return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
    }
    public set maximumExecutionTimeoutInSeconds(value: number) {
        this._maximumExecutionTimeoutInSeconds = value;
    }
    public resetMaximumExecutionTimeoutInSeconds() {
        this._maximumExecutionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionTimeoutInSecondsInput() {
        return this._maximumExecutionTimeoutInSeconds;
    }

    // rollback_maximum_batch_size - computed: true, optional: true, required: false
    private _rollbackMaximumBatchSize = new RollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
    public get rollbackMaximumBatchSize() {
        return this._rollbackMaximumBatchSize;
    }
    public putRollbackMaximumBatchSize(value: RollbackMaximumBatchSizeProperty) {
        this._rollbackMaximumBatchSize.internalValue = value;
    }
    public resetRollbackMaximumBatchSize() {
        this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackMaximumBatchSizeInput() {
        return this._rollbackMaximumBatchSize.internalValue;
    }

    // wait_interval_in_seconds - computed: true, optional: true, required: false
    private _waitIntervalInSeconds?: number; 
    public get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    public set waitIntervalInSeconds(value: number) {
        this._waitIntervalInSeconds = value;
    }
    public resetWaitIntervalInSeconds() {
        this._waitIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
}
export interface InferenceComponentDeploymentConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration CcInferenceComponent#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: AutoRollbackConfigurationProperty;
    /**
    * The rolling update policy for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#rolling_update_policy CcInferenceComponent#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: InferenceComponentRollingUpdatePolicyProperty;
}
export class InferenceComponentDeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentDeploymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRollbackConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
        }
        if (this._rollingUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentDeploymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = undefined;
            this._rollingUpdatePolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
            this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
        }
    }

    // auto_rollback_configuration - computed: true, optional: true, required: false
    private _autoRollbackConfiguration = new AutoRollbackConfigurationPropertyOutputReference(this, "auto_rollback_configuration");
    public get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    public putAutoRollbackConfiguration(value: AutoRollbackConfigurationProperty) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    public resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }

    // rolling_update_policy - computed: true, optional: true, required: false
    private _rollingUpdatePolicy = new InferenceComponentRollingUpdatePolicyPropertyOutputReference(this, "rolling_update_policy");
    public get rollingUpdatePolicy() {
        return this._rollingUpdatePolicy;
    }
    public putRollingUpdatePolicy(value: InferenceComponentRollingUpdatePolicyProperty) {
        this._rollingUpdatePolicy.internalValue = value;
    }
    public resetRollingUpdatePolicy() {
        this._rollingUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollingUpdatePolicyInput() {
        return this._rollingUpdatePolicy.internalValue;
    }
}
export interface PlacementStatusProperty {
}
export class PlacementStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): PlacementStatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementStatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // current_copy_count - computed: true, optional: false, required: false
    public get currentCopyCount() {
        return this.getNumberAttribute('current_copy_count');
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
}

export class PlacementStatusPropertyList extends cdktn.ComplexList {

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
    public get(index: number): PlacementStatusPropertyOutputReference {
        return new PlacementStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InferenceComponentRuntimeConfigProperty {
    /**
    * The number of copies for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#copy_count CcInferenceComponent#copy_count}
    */
    readonly copyCount?: number;
}
export class InferenceComponentRuntimeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentRuntimeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyCount = this._copyCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentRuntimeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyCount = value.copyCount;
        }
    }

    // copy_count - computed: true, optional: true, required: false
    private _copyCount?: number; 
    public get copyCount() {
        return this.getNumberAttribute('copy_count');
    }
    public set copyCount(value: number) {
        this._copyCount = value;
    }
    public resetCopyCount() {
        this._copyCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyCountInput() {
        return this._copyCount;
    }

    // current_copy_count - computed: true, optional: false, required: false
    public get currentCopyCount() {
        return this.getNumberAttribute('current_copy_count');
    }

    // desired_copy_count - computed: true, optional: false, required: false
    public get desiredCopyCount() {
        return this.getNumberAttribute('desired_copy_count');
    }

    // placement_status - computed: true, optional: false, required: false
    private _placementStatus = new PlacementStatusPropertyList(this, "placement_status", false);
    public get placementStatus() {
        return this._placementStatus;
    }
}
export interface InferenceComponentComputeResourceRequirementsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb CcInferenceComponent#max_memory_required_in_mb}
    */
    readonly maxMemoryRequiredInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb CcInferenceComponent#min_memory_required_in_mb}
    */
    readonly minMemoryRequiredInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required CcInferenceComponent#number_of_accelerator_devices_required}
    */
    readonly numberOfAcceleratorDevicesRequired?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required CcInferenceComponent#number_of_cpu_cores_required}
    */
    readonly numberOfCpuCoresRequired?: number;
}
export class InferenceComponentComputeResourceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentComputeResourceRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxMemoryRequiredInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
        }
        if (this._minMemoryRequiredInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
        }
        if (this._numberOfAcceleratorDevicesRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
        }
        if (this._numberOfCpuCoresRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentComputeResourceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxMemoryRequiredInMb = undefined;
            this._minMemoryRequiredInMb = undefined;
            this._numberOfAcceleratorDevicesRequired = undefined;
            this._numberOfCpuCoresRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
            this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
            this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
            this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
        }
    }

    // max_memory_required_in_mb - computed: true, optional: true, required: false
    private _maxMemoryRequiredInMb?: number; 
    public get maxMemoryRequiredInMb() {
        return this.getNumberAttribute('max_memory_required_in_mb');
    }
    public set maxMemoryRequiredInMb(value: number) {
        this._maxMemoryRequiredInMb = value;
    }
    public resetMaxMemoryRequiredInMb() {
        this._maxMemoryRequiredInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxMemoryRequiredInMbInput() {
        return this._maxMemoryRequiredInMb;
    }

    // min_memory_required_in_mb - computed: true, optional: true, required: false
    private _minMemoryRequiredInMb?: number; 
    public get minMemoryRequiredInMb() {
        return this.getNumberAttribute('min_memory_required_in_mb');
    }
    public set minMemoryRequiredInMb(value: number) {
        this._minMemoryRequiredInMb = value;
    }
    public resetMinMemoryRequiredInMb() {
        this._minMemoryRequiredInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minMemoryRequiredInMbInput() {
        return this._minMemoryRequiredInMb;
    }

    // number_of_accelerator_devices_required - computed: true, optional: true, required: false
    private _numberOfAcceleratorDevicesRequired?: number; 
    public get numberOfAcceleratorDevicesRequired() {
        return this.getNumberAttribute('number_of_accelerator_devices_required');
    }
    public set numberOfAcceleratorDevicesRequired(value: number) {
        this._numberOfAcceleratorDevicesRequired = value;
    }
    public resetNumberOfAcceleratorDevicesRequired() {
        this._numberOfAcceleratorDevicesRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfAcceleratorDevicesRequiredInput() {
        return this._numberOfAcceleratorDevicesRequired;
    }

    // number_of_cpu_cores_required - computed: true, optional: true, required: false
    private _numberOfCpuCoresRequired?: number; 
    public get numberOfCpuCoresRequired() {
        return this.getNumberAttribute('number_of_cpu_cores_required');
    }
    public set numberOfCpuCoresRequired(value: number) {
        this._numberOfCpuCoresRequired = value;
    }
    public resetNumberOfCpuCoresRequired() {
        this._numberOfCpuCoresRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfCpuCoresRequiredInput() {
        return this._numberOfCpuCoresRequired;
    }
}
export interface SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty {
    /**
    * The interval, in seconds, at which container metrics scraped from the endpoint are published to Amazon CloudWatch. Valid values per the SageMaker API Reference are 10, 30, 60, 120, 180, 240 and 300; the service validates the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds CcInferenceComponent#metric_publish_frequency_in_seconds}
    */
    readonly metricPublishFrequencyInSeconds?: number;
    /**
    * The path to the Prometheus formatted metrics endpoint exposed by the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path CcInferenceComponent#metrics_endpoint_path}
    */
    readonly metricsEndpointPath?: string;
}
export class SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricPublishFrequencyInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
        }
        if (this._metricsEndpointPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricPublishFrequencyInSeconds = undefined;
            this._metricsEndpointPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
            this._metricsEndpointPath = value.metricsEndpointPath;
        }
    }

    // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
    private _metricPublishFrequencyInSeconds?: number; 
    public get metricPublishFrequencyInSeconds() {
        return this.getNumberAttribute('metric_publish_frequency_in_seconds');
    }
    public set metricPublishFrequencyInSeconds(value: number) {
        this._metricPublishFrequencyInSeconds = value;
    }
    public resetMetricPublishFrequencyInSeconds() {
        this._metricPublishFrequencyInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricPublishFrequencyInSecondsInput() {
        return this._metricPublishFrequencyInSeconds;
    }

    // metrics_endpoint_path - computed: true, optional: true, required: false
    private _metricsEndpointPath?: string; 
    public get metricsEndpointPath() {
        return this.getStringAttribute('metrics_endpoint_path');
    }
    public set metricsEndpointPath(value: string) {
        this._metricsEndpointPath = value;
    }
    public resetMetricsEndpointPath() {
        this._metricsEndpointPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEndpointPathInput() {
        return this._metricsEndpointPath;
    }
}

export class SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyList extends cdktn.ComplexList {
    public internalValue? : SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable

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
    public get(index: number): SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference {
        return new SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpecificationContainerContainerMetricsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metrics_endpoints CcInferenceComponent#metrics_endpoints}
    */
    readonly metricsEndpoints?: SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable;
}
export class SpecificationContainerContainerMetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationContainerContainerMetricsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricsEndpoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEndpoints = this._metricsEndpoints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationContainerContainerMetricsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricsEndpoints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricsEndpoints.internalValue = value.metricsEndpoints;
        }
    }

    // metrics_endpoints - computed: true, optional: true, required: false
    private _metricsEndpoints = new SpecificationContainerContainerMetricsConfigMetricsEndpointsPropertyList(this, "metrics_endpoints", false);
    public get metricsEndpoints() {
        return this._metricsEndpoints;
    }
    public putMetricsEndpoints(value: SpecificationContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable) {
        this._metricsEndpoints.internalValue = value;
    }
    public resetMetricsEndpoints() {
        this._metricsEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEndpointsInput() {
        return this._metricsEndpoints.internalValue;
    }
}
export interface DeployedImageProperty {
}
export class DeployedImagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeployedImageProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeployedImageProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // resolution_time - computed: true, optional: false, required: false
    public get resolutionTime() {
        return this.getStringAttribute('resolution_time');
    }

    // resolved_image - computed: true, optional: false, required: false
    public get resolvedImage() {
        return this.getStringAttribute('resolved_image');
    }

    // specified_image - computed: true, optional: false, required: false
    public get specifiedImage() {
        return this.getStringAttribute('specified_image');
    }
}
export interface InferenceComponentContainerSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#artifact_url CcInferenceComponent#artifact_url}
    */
    readonly artifactUrl?: string;
    /**
    * The configuration for container metrics scraping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container_metrics_config CcInferenceComponent#container_metrics_config}
    */
    readonly containerMetricsConfig?: SpecificationContainerContainerMetricsConfigProperty;
    /**
    * Environment variables to specify on the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#environment CcInferenceComponent#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The image to use for the container that will be materialized for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#image CcInferenceComponent#image}
    */
    readonly image?: string;
}
export class InferenceComponentContainerSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentContainerSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._artifactUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.artifactUrl = this._artifactUrl;
        }
        if (this._containerMetricsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentContainerSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._artifactUrl = undefined;
            this._containerMetricsConfig.internalValue = undefined;
            this._environment = undefined;
            this._image = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._artifactUrl = value.artifactUrl;
            this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
            this._environment = value.environment;
            this._image = value.image;
        }
    }

    // artifact_url - computed: true, optional: true, required: false
    private _artifactUrl?: string; 
    public get artifactUrl() {
        return this.getStringAttribute('artifact_url');
    }
    public set artifactUrl(value: string) {
        this._artifactUrl = value;
    }
    public resetArtifactUrl() {
        this._artifactUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactUrlInput() {
        return this._artifactUrl;
    }

    // container_metrics_config - computed: true, optional: true, required: false
    private _containerMetricsConfig = new SpecificationContainerContainerMetricsConfigPropertyOutputReference(this, "container_metrics_config");
    public get containerMetricsConfig() {
        return this._containerMetricsConfig;
    }
    public putContainerMetricsConfig(value: SpecificationContainerContainerMetricsConfigProperty) {
        this._containerMetricsConfig.internalValue = value;
    }
    public resetContainerMetricsConfig() {
        this._containerMetricsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerMetricsConfigInput() {
        return this._containerMetricsConfig.internalValue;
    }

    // deployed_image - computed: true, optional: false, required: false
    private _deployedImage = new DeployedImagePropertyOutputReference(this, "deployed_image");
    public get deployedImage() {
        return this._deployedImage;
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

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }
}
export interface SpecificationCurrentDataCacheConfigProperty {
}
export class SpecificationCurrentDataCacheConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationCurrentDataCacheConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationCurrentDataCacheConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // enable_caching - computed: true, optional: false, required: false
    public get enableCaching() {
        return this.getBooleanAttribute('enable_caching');
    }
}
export interface SpecificationDataCacheConfigProperty {
    /**
    * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#enable_caching CcInferenceComponent#enable_caching}
    */
    readonly enableCaching?: boolean | cdktn.IResolvable;
}
export class SpecificationDataCacheConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationDataCacheConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableCaching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableCaching = this._enableCaching;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationDataCacheConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableCaching = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableCaching = value.enableCaching;
        }
    }

    // enable_caching - computed: true, optional: true, required: false
    private _enableCaching?: boolean | cdktn.IResolvable; 
    public get enableCaching() {
        return this.getBooleanAttribute('enable_caching');
    }
    public set enableCaching(value: boolean | cdktn.IResolvable) {
        this._enableCaching = value;
    }
    public resetEnableCaching() {
        this._enableCaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCachingInput() {
        return this._enableCaching;
    }
}
export interface SpecificationSchedulingConfigAvailabilityZoneBalanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#enforcement_mode CcInferenceComponent#enforcement_mode}
    */
    readonly enforcementMode?: string;
    /**
    * The maximum allowed difference in the number of inference component copies between any two Availability Zones
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#max_imbalance CcInferenceComponent#max_imbalance}
    */
    readonly maxImbalance?: number;
}
export class SpecificationSchedulingConfigAvailabilityZoneBalancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enforcementMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforcementMode = this._enforcementMode;
        }
        if (this._maxImbalance !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxImbalance = this._maxImbalance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enforcementMode = undefined;
            this._maxImbalance = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enforcementMode = value.enforcementMode;
            this._maxImbalance = value.maxImbalance;
        }
    }

    // enforcement_mode - computed: true, optional: true, required: false
    private _enforcementMode?: string; 
    public get enforcementMode() {
        return this.getStringAttribute('enforcement_mode');
    }
    public set enforcementMode(value: string) {
        this._enforcementMode = value;
    }
    public resetEnforcementMode() {
        this._enforcementMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcementModeInput() {
        return this._enforcementMode;
    }

    // max_imbalance - computed: true, optional: true, required: false
    private _maxImbalance?: number; 
    public get maxImbalance() {
        return this.getNumberAttribute('max_imbalance');
    }
    public set maxImbalance(value: number) {
        this._maxImbalance = value;
    }
    public resetMaxImbalance() {
        this._maxImbalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxImbalanceInput() {
        return this._maxImbalance;
    }
}
export interface SpecificationSchedulingConfigProperty {
    /**
    * Configuration for balancing inference component copies across Availability Zones
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#availability_zone_balance CcInferenceComponent#availability_zone_balance}
    */
    readonly availabilityZoneBalance?: SpecificationSchedulingConfigAvailabilityZoneBalanceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#placement_strategy CcInferenceComponent#placement_strategy}
    */
    readonly placementStrategy?: string;
}
export class SpecificationSchedulingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationSchedulingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneBalance?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
        }
        if (this._placementStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementStrategy = this._placementStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationSchedulingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneBalance.internalValue = undefined;
            this._placementStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
            this._placementStrategy = value.placementStrategy;
        }
    }

    // availability_zone_balance - computed: true, optional: true, required: false
    private _availabilityZoneBalance = new SpecificationSchedulingConfigAvailabilityZoneBalancePropertyOutputReference(this, "availability_zone_balance");
    public get availabilityZoneBalance() {
        return this._availabilityZoneBalance;
    }
    public putAvailabilityZoneBalance(value: SpecificationSchedulingConfigAvailabilityZoneBalanceProperty) {
        this._availabilityZoneBalance.internalValue = value;
    }
    public resetAvailabilityZoneBalance() {
        this._availabilityZoneBalance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneBalanceInput() {
        return this._availabilityZoneBalance.internalValue;
    }

    // placement_strategy - computed: true, optional: true, required: false
    private _placementStrategy?: string; 
    public get placementStrategy() {
        return this.getStringAttribute('placement_strategy');
    }
    public set placementStrategy(value: string) {
        this._placementStrategy = value;
    }
    public resetPlacementStrategy() {
        this._placementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategyInput() {
        return this._placementStrategy;
    }
}
export interface InferenceComponentStartupParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds CcInferenceComponent#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds CcInferenceComponent#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
}
export class InferenceComponentStartupParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentStartupParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
        }
        if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentStartupParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = undefined;
            this._modelDataDownloadTimeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
            this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
        }
    }

    // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
    private _containerStartupHealthCheckTimeoutInSeconds?: number; 
    public get containerStartupHealthCheckTimeoutInSeconds() {
        return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
    }
    public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
        this._containerStartupHealthCheckTimeoutInSeconds = value;
    }
    public resetContainerStartupHealthCheckTimeoutInSeconds() {
        this._containerStartupHealthCheckTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerStartupHealthCheckTimeoutInSecondsInput() {
        return this._containerStartupHealthCheckTimeoutInSeconds;
    }

    // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
    private _modelDataDownloadTimeoutInSeconds?: number; 
    public get modelDataDownloadTimeoutInSeconds() {
        return this.getNumberAttribute('model_data_download_timeout_in_seconds');
    }
    public set modelDataDownloadTimeoutInSeconds(value: number) {
        this._modelDataDownloadTimeoutInSeconds = value;
    }
    public resetModelDataDownloadTimeoutInSeconds() {
        this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataDownloadTimeoutInSecondsInput() {
        return this._modelDataDownloadTimeoutInSeconds;
    }
}
export interface InferenceComponentSpecificationProperty {
    /**
    * The name of the base inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#base_inference_component_name CcInferenceComponent#base_inference_component_name}
    */
    readonly baseInferenceComponentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#compute_resource_requirements CcInferenceComponent#compute_resource_requirements}
    */
    readonly computeResourceRequirements?: InferenceComponentComputeResourceRequirementsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container CcInferenceComponent#container}
    */
    readonly container?: InferenceComponentContainerSpecificationProperty;
    /**
    * Settings that affect how the inference component caches data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#data_cache_config CcInferenceComponent#data_cache_config}
    */
    readonly dataCacheConfig?: SpecificationDataCacheConfigProperty;
    /**
    * The name of the model to use with the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#model_name CcInferenceComponent#model_name}
    */
    readonly modelName?: string;
    /**
    * The scheduling configuration that determines how inference component copies are placed across available instances
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#scheduling_config CcInferenceComponent#scheduling_config}
    */
    readonly schedulingConfig?: SpecificationSchedulingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#startup_parameters CcInferenceComponent#startup_parameters}
    */
    readonly startupParameters?: InferenceComponentStartupParametersProperty;
}
export class InferenceComponentSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceComponentSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseInferenceComponentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseInferenceComponentName = this._baseInferenceComponentName;
        }
        if (this._computeResourceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
        }
        if (this._container?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.container = this._container?.internalValue;
        }
        if (this._dataCacheConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._schedulingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
        }
        if (this._startupParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startupParameters = this._startupParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceComponentSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseInferenceComponentName = undefined;
            this._computeResourceRequirements.internalValue = undefined;
            this._container.internalValue = undefined;
            this._dataCacheConfig.internalValue = undefined;
            this._modelName = undefined;
            this._schedulingConfig.internalValue = undefined;
            this._startupParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseInferenceComponentName = value.baseInferenceComponentName;
            this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
            this._container.internalValue = value.container;
            this._dataCacheConfig.internalValue = value.dataCacheConfig;
            this._modelName = value.modelName;
            this._schedulingConfig.internalValue = value.schedulingConfig;
            this._startupParameters.internalValue = value.startupParameters;
        }
    }

    // base_inference_component_name - computed: true, optional: true, required: false
    private _baseInferenceComponentName?: string; 
    public get baseInferenceComponentName() {
        return this.getStringAttribute('base_inference_component_name');
    }
    public set baseInferenceComponentName(value: string) {
        this._baseInferenceComponentName = value;
    }
    public resetBaseInferenceComponentName() {
        this._baseInferenceComponentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInferenceComponentNameInput() {
        return this._baseInferenceComponentName;
    }

    // compute_resource_requirements - computed: true, optional: true, required: false
    private _computeResourceRequirements = new InferenceComponentComputeResourceRequirementsPropertyOutputReference(this, "compute_resource_requirements");
    public get computeResourceRequirements() {
        return this._computeResourceRequirements;
    }
    public putComputeResourceRequirements(value: InferenceComponentComputeResourceRequirementsProperty) {
        this._computeResourceRequirements.internalValue = value;
    }
    public resetComputeResourceRequirements() {
        this._computeResourceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeResourceRequirementsInput() {
        return this._computeResourceRequirements.internalValue;
    }

    // container - computed: true, optional: true, required: false
    private _container = new InferenceComponentContainerSpecificationPropertyOutputReference(this, "container");
    public get container() {
        return this._container;
    }
    public putContainer(value: InferenceComponentContainerSpecificationProperty) {
        this._container.internalValue = value;
    }
    public resetContainer() {
        this._container.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerInput() {
        return this._container.internalValue;
    }

    // current_data_cache_config - computed: true, optional: false, required: false
    private _currentDataCacheConfig = new SpecificationCurrentDataCacheConfigPropertyOutputReference(this, "current_data_cache_config");
    public get currentDataCacheConfig() {
        return this._currentDataCacheConfig;
    }

    // data_cache_config - computed: true, optional: true, required: false
    private _dataCacheConfig = new SpecificationDataCacheConfigPropertyOutputReference(this, "data_cache_config");
    public get dataCacheConfig() {
        return this._dataCacheConfig;
    }
    public putDataCacheConfig(value: SpecificationDataCacheConfigProperty) {
        this._dataCacheConfig.internalValue = value;
    }
    public resetDataCacheConfig() {
        this._dataCacheConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCacheConfigInput() {
        return this._dataCacheConfig.internalValue;
    }

    // model_name - computed: true, optional: true, required: false
    private _modelName?: string; 
    public get modelName() {
        return this.getStringAttribute('model_name');
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    public resetModelName() {
        this._modelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameInput() {
        return this._modelName;
    }

    // scheduling_config - computed: true, optional: true, required: false
    private _schedulingConfig = new SpecificationSchedulingConfigPropertyOutputReference(this, "scheduling_config");
    public get schedulingConfig() {
        return this._schedulingConfig;
    }
    public putSchedulingConfig(value: SpecificationSchedulingConfigProperty) {
        this._schedulingConfig.internalValue = value;
    }
    public resetSchedulingConfig() {
        this._schedulingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingConfigInput() {
        return this._schedulingConfig.internalValue;
    }

    // startup_parameters - computed: true, optional: true, required: false
    private _startupParameters = new InferenceComponentStartupParametersPropertyOutputReference(this, "startup_parameters");
    public get startupParameters() {
        return this._startupParameters;
    }
    public putStartupParameters(value: InferenceComponentStartupParametersProperty) {
        this._startupParameters.internalValue = value;
    }
    public resetStartupParameters() {
        this._startupParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startupParametersInput() {
        return this._startupParameters.internalValue;
    }
}
export interface ComputeResourceRequirementsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb CcInferenceComponent#max_memory_required_in_mb}
    */
    readonly maxMemoryRequiredInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb CcInferenceComponent#min_memory_required_in_mb}
    */
    readonly minMemoryRequiredInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required CcInferenceComponent#number_of_accelerator_devices_required}
    */
    readonly numberOfAcceleratorDevicesRequired?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required CcInferenceComponent#number_of_cpu_cores_required}
    */
    readonly numberOfCpuCoresRequired?: number;
}
export class ComputeResourceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeResourceRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxMemoryRequiredInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
        }
        if (this._minMemoryRequiredInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
        }
        if (this._numberOfAcceleratorDevicesRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
        }
        if (this._numberOfCpuCoresRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeResourceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxMemoryRequiredInMb = undefined;
            this._minMemoryRequiredInMb = undefined;
            this._numberOfAcceleratorDevicesRequired = undefined;
            this._numberOfCpuCoresRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
            this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
            this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
            this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
        }
    }

    // max_memory_required_in_mb - computed: true, optional: true, required: false
    private _maxMemoryRequiredInMb?: number; 
    public get maxMemoryRequiredInMb() {
        return this.getNumberAttribute('max_memory_required_in_mb');
    }
    public set maxMemoryRequiredInMb(value: number) {
        this._maxMemoryRequiredInMb = value;
    }
    public resetMaxMemoryRequiredInMb() {
        this._maxMemoryRequiredInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxMemoryRequiredInMbInput() {
        return this._maxMemoryRequiredInMb;
    }

    // min_memory_required_in_mb - computed: true, optional: true, required: false
    private _minMemoryRequiredInMb?: number; 
    public get minMemoryRequiredInMb() {
        return this.getNumberAttribute('min_memory_required_in_mb');
    }
    public set minMemoryRequiredInMb(value: number) {
        this._minMemoryRequiredInMb = value;
    }
    public resetMinMemoryRequiredInMb() {
        this._minMemoryRequiredInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minMemoryRequiredInMbInput() {
        return this._minMemoryRequiredInMb;
    }

    // number_of_accelerator_devices_required - computed: true, optional: true, required: false
    private _numberOfAcceleratorDevicesRequired?: number; 
    public get numberOfAcceleratorDevicesRequired() {
        return this.getNumberAttribute('number_of_accelerator_devices_required');
    }
    public set numberOfAcceleratorDevicesRequired(value: number) {
        this._numberOfAcceleratorDevicesRequired = value;
    }
    public resetNumberOfAcceleratorDevicesRequired() {
        this._numberOfAcceleratorDevicesRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfAcceleratorDevicesRequiredInput() {
        return this._numberOfAcceleratorDevicesRequired;
    }

    // number_of_cpu_cores_required - computed: true, optional: true, required: false
    private _numberOfCpuCoresRequired?: number; 
    public get numberOfCpuCoresRequired() {
        return this.getNumberAttribute('number_of_cpu_cores_required');
    }
    public set numberOfCpuCoresRequired(value: number) {
        this._numberOfCpuCoresRequired = value;
    }
    public resetNumberOfCpuCoresRequired() {
        this._numberOfCpuCoresRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfCpuCoresRequiredInput() {
        return this._numberOfCpuCoresRequired;
    }
}
export interface SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty {
    /**
    * The interval, in seconds, at which container metrics scraped from the endpoint are published to Amazon CloudWatch. Valid values per the SageMaker API Reference are 10, 30, 60, 120, 180, 240 and 300; the service validates the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metric_publish_frequency_in_seconds CcInferenceComponent#metric_publish_frequency_in_seconds}
    */
    readonly metricPublishFrequencyInSeconds?: number;
    /**
    * The path to the Prometheus formatted metrics endpoint exposed by the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metrics_endpoint_path CcInferenceComponent#metrics_endpoint_path}
    */
    readonly metricsEndpointPath?: string;
}
export class SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricPublishFrequencyInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
        }
        if (this._metricsEndpointPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEndpointPath = this._metricsEndpointPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricPublishFrequencyInSeconds = undefined;
            this._metricsEndpointPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
            this._metricsEndpointPath = value.metricsEndpointPath;
        }
    }

    // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
    private _metricPublishFrequencyInSeconds?: number; 
    public get metricPublishFrequencyInSeconds() {
        return this.getNumberAttribute('metric_publish_frequency_in_seconds');
    }
    public set metricPublishFrequencyInSeconds(value: number) {
        this._metricPublishFrequencyInSeconds = value;
    }
    public resetMetricPublishFrequencyInSeconds() {
        this._metricPublishFrequencyInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricPublishFrequencyInSecondsInput() {
        return this._metricPublishFrequencyInSeconds;
    }

    // metrics_endpoint_path - computed: true, optional: true, required: false
    private _metricsEndpointPath?: string; 
    public get metricsEndpointPath() {
        return this.getStringAttribute('metrics_endpoint_path');
    }
    public set metricsEndpointPath(value: string) {
        this._metricsEndpointPath = value;
    }
    public resetMetricsEndpointPath() {
        this._metricsEndpointPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEndpointPathInput() {
        return this._metricsEndpointPath;
    }
}

export class SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyList extends cdktn.ComplexList {
    public internalValue? : SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable

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
    public get(index: number): SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference {
        return new SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpecificationsContainerContainerMetricsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#metrics_endpoints CcInferenceComponent#metrics_endpoints}
    */
    readonly metricsEndpoints?: SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable;
}
export class SpecificationsContainerContainerMetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationsContainerContainerMetricsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricsEndpoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEndpoints = this._metricsEndpoints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsContainerContainerMetricsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricsEndpoints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricsEndpoints.internalValue = value.metricsEndpoints;
        }
    }

    // metrics_endpoints - computed: true, optional: true, required: false
    private _metricsEndpoints = new SpecificationsContainerContainerMetricsConfigMetricsEndpointsPropertyList(this, "metrics_endpoints", false);
    public get metricsEndpoints() {
        return this._metricsEndpoints;
    }
    public putMetricsEndpoints(value: SpecificationsContainerContainerMetricsConfigMetricsEndpointsProperty[] | cdktn.IResolvable) {
        this._metricsEndpoints.internalValue = value;
    }
    public resetMetricsEndpoints() {
        this._metricsEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEndpointsInput() {
        return this._metricsEndpoints.internalValue;
    }
}
export interface ContainerProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#artifact_url CcInferenceComponent#artifact_url}
    */
    readonly artifactUrl?: string;
    /**
    * The configuration for container metrics scraping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container_metrics_config CcInferenceComponent#container_metrics_config}
    */
    readonly containerMetricsConfig?: SpecificationsContainerContainerMetricsConfigProperty;
    /**
    * Environment variables to specify on the container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#environment CcInferenceComponent#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The image to use for the container that will be materialized for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#image CcInferenceComponent#image}
    */
    readonly image?: string;
}
export class ContainerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._artifactUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.artifactUrl = this._artifactUrl;
        }
        if (this._containerMetricsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerMetricsConfig = this._containerMetricsConfig?.internalValue;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._artifactUrl = undefined;
            this._containerMetricsConfig.internalValue = undefined;
            this._environment = undefined;
            this._image = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._artifactUrl = value.artifactUrl;
            this._containerMetricsConfig.internalValue = value.containerMetricsConfig;
            this._environment = value.environment;
            this._image = value.image;
        }
    }

    // artifact_url - computed: true, optional: true, required: false
    private _artifactUrl?: string; 
    public get artifactUrl() {
        return this.getStringAttribute('artifact_url');
    }
    public set artifactUrl(value: string) {
        this._artifactUrl = value;
    }
    public resetArtifactUrl() {
        this._artifactUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactUrlInput() {
        return this._artifactUrl;
    }

    // container_metrics_config - computed: true, optional: true, required: false
    private _containerMetricsConfig = new SpecificationsContainerContainerMetricsConfigPropertyOutputReference(this, "container_metrics_config");
    public get containerMetricsConfig() {
        return this._containerMetricsConfig;
    }
    public putContainerMetricsConfig(value: SpecificationsContainerContainerMetricsConfigProperty) {
        this._containerMetricsConfig.internalValue = value;
    }
    public resetContainerMetricsConfig() {
        this._containerMetricsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerMetricsConfigInput() {
        return this._containerMetricsConfig.internalValue;
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

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }
}
export interface SpecificationsCurrentDataCacheConfigProperty {
    /**
    * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#enable_caching CcInferenceComponent#enable_caching}
    */
    readonly enableCaching?: boolean | cdktn.IResolvable;
}
export class SpecificationsCurrentDataCacheConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationsCurrentDataCacheConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableCaching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableCaching = this._enableCaching;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsCurrentDataCacheConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableCaching = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableCaching = value.enableCaching;
        }
    }

    // enable_caching - computed: true, optional: true, required: false
    private _enableCaching?: boolean | cdktn.IResolvable; 
    public get enableCaching() {
        return this.getBooleanAttribute('enable_caching');
    }
    public set enableCaching(value: boolean | cdktn.IResolvable) {
        this._enableCaching = value;
    }
    public resetEnableCaching() {
        this._enableCaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCachingInput() {
        return this._enableCaching;
    }
}
export interface SpecificationsDataCacheConfigProperty {
    /**
    * Whether the endpoint caches the model artifacts and container image on each instance it provisions for the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#enable_caching CcInferenceComponent#enable_caching}
    */
    readonly enableCaching?: boolean | cdktn.IResolvable;
}
export class SpecificationsDataCacheConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationsDataCacheConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableCaching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableCaching = this._enableCaching;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsDataCacheConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableCaching = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableCaching = value.enableCaching;
        }
    }

    // enable_caching - computed: true, optional: true, required: false
    private _enableCaching?: boolean | cdktn.IResolvable; 
    public get enableCaching() {
        return this.getBooleanAttribute('enable_caching');
    }
    public set enableCaching(value: boolean | cdktn.IResolvable) {
        this._enableCaching = value;
    }
    public resetEnableCaching() {
        this._enableCaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCachingInput() {
        return this._enableCaching;
    }
}
export interface SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#enforcement_mode CcInferenceComponent#enforcement_mode}
    */
    readonly enforcementMode?: string;
    /**
    * The maximum allowed difference in the number of inference component copies between any two Availability Zones
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#max_imbalance CcInferenceComponent#max_imbalance}
    */
    readonly maxImbalance?: number;
}
export class SpecificationsSchedulingConfigAvailabilityZoneBalancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enforcementMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforcementMode = this._enforcementMode;
        }
        if (this._maxImbalance !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxImbalance = this._maxImbalance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enforcementMode = undefined;
            this._maxImbalance = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enforcementMode = value.enforcementMode;
            this._maxImbalance = value.maxImbalance;
        }
    }

    // enforcement_mode - computed: true, optional: true, required: false
    private _enforcementMode?: string; 
    public get enforcementMode() {
        return this.getStringAttribute('enforcement_mode');
    }
    public set enforcementMode(value: string) {
        this._enforcementMode = value;
    }
    public resetEnforcementMode() {
        this._enforcementMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcementModeInput() {
        return this._enforcementMode;
    }

    // max_imbalance - computed: true, optional: true, required: false
    private _maxImbalance?: number; 
    public get maxImbalance() {
        return this.getNumberAttribute('max_imbalance');
    }
    public set maxImbalance(value: number) {
        this._maxImbalance = value;
    }
    public resetMaxImbalance() {
        this._maxImbalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxImbalanceInput() {
        return this._maxImbalance;
    }
}
export interface SpecificationsSchedulingConfigProperty {
    /**
    * Configuration for balancing inference component copies across Availability Zones
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#availability_zone_balance CcInferenceComponent#availability_zone_balance}
    */
    readonly availabilityZoneBalance?: SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#placement_strategy CcInferenceComponent#placement_strategy}
    */
    readonly placementStrategy?: string;
}
export class SpecificationsSchedulingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificationsSchedulingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneBalance?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneBalance = this._availabilityZoneBalance?.internalValue;
        }
        if (this._placementStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementStrategy = this._placementStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsSchedulingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneBalance.internalValue = undefined;
            this._placementStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneBalance.internalValue = value.availabilityZoneBalance;
            this._placementStrategy = value.placementStrategy;
        }
    }

    // availability_zone_balance - computed: true, optional: true, required: false
    private _availabilityZoneBalance = new SpecificationsSchedulingConfigAvailabilityZoneBalancePropertyOutputReference(this, "availability_zone_balance");
    public get availabilityZoneBalance() {
        return this._availabilityZoneBalance;
    }
    public putAvailabilityZoneBalance(value: SpecificationsSchedulingConfigAvailabilityZoneBalanceProperty) {
        this._availabilityZoneBalance.internalValue = value;
    }
    public resetAvailabilityZoneBalance() {
        this._availabilityZoneBalance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneBalanceInput() {
        return this._availabilityZoneBalance.internalValue;
    }

    // placement_strategy - computed: true, optional: true, required: false
    private _placementStrategy?: string; 
    public get placementStrategy() {
        return this.getStringAttribute('placement_strategy');
    }
    public set placementStrategy(value: string) {
        this._placementStrategy = value;
    }
    public resetPlacementStrategy() {
        this._placementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategyInput() {
        return this._placementStrategy;
    }
}
export interface StartupParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds CcInferenceComponent#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds CcInferenceComponent#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
}
export class StartupParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StartupParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
        }
        if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StartupParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = undefined;
            this._modelDataDownloadTimeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
            this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
        }
    }

    // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
    private _containerStartupHealthCheckTimeoutInSeconds?: number; 
    public get containerStartupHealthCheckTimeoutInSeconds() {
        return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
    }
    public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
        this._containerStartupHealthCheckTimeoutInSeconds = value;
    }
    public resetContainerStartupHealthCheckTimeoutInSeconds() {
        this._containerStartupHealthCheckTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerStartupHealthCheckTimeoutInSecondsInput() {
        return this._containerStartupHealthCheckTimeoutInSeconds;
    }

    // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
    private _modelDataDownloadTimeoutInSeconds?: number; 
    public get modelDataDownloadTimeoutInSeconds() {
        return this.getNumberAttribute('model_data_download_timeout_in_seconds');
    }
    public set modelDataDownloadTimeoutInSeconds(value: number) {
        this._modelDataDownloadTimeoutInSeconds = value;
    }
    public resetModelDataDownloadTimeoutInSeconds() {
        this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataDownloadTimeoutInSecondsInput() {
        return this._modelDataDownloadTimeoutInSeconds;
    }
}
export interface SpecificationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#compute_resource_requirements CcInferenceComponent#compute_resource_requirements}
    */
    readonly computeResourceRequirements?: ComputeResourceRequirementsProperty;
    /**
    * Container specification for one Specifications entry. Distinct from InferenceComponentContainerSpecification: DescribeInferenceComponent returns no per-entry DeployedImage (VERIFIED in us-west-2), so DeployedImage is intentionally omitted here and this definition can never be aggregated into a plural READ response. The singular InferenceComponentContainerSpecification keeps DeployedImage - the service DOES return it there.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#container CcInferenceComponent#container}
    */
    readonly container?: ContainerProperty;
    /**
    * The data caching configuration actually in effect for this instance type, including a value the service chose rather than the template: SageMaker enables caching automatically on instance types with more than 232 GiB of local NVMe storage, whether or not DataCacheConfig was set. Returned by Describe and not settable; set DataCacheConfig instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#current_data_cache_config CcInferenceComponent#current_data_cache_config}
    */
    readonly currentDataCacheConfig?: SpecificationsCurrentDataCacheConfigProperty;
    /**
    * Settings that affect how the inference component caches data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#data_cache_config CcInferenceComponent#data_cache_config}
    */
    readonly dataCacheConfig?: SpecificationsDataCacheConfigProperty;
    /**
    * An ML compute instance type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#instance_type CcInferenceComponent#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The name of the model to use with the inference component
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#model_name CcInferenceComponent#model_name}
    */
    readonly modelName?: string;
    /**
    * The scheduling configuration that determines how inference component copies are placed across available instances
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#scheduling_config CcInferenceComponent#scheduling_config}
    */
    readonly schedulingConfig?: SpecificationsSchedulingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#startup_parameters CcInferenceComponent#startup_parameters}
    */
    readonly startupParameters?: StartupParametersProperty;
}
export class SpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpecificationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeResourceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
        }
        if (this._container?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.container = this._container?.internalValue;
        }
        if (this._currentDataCacheConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentDataCacheConfig = this._currentDataCacheConfig?.internalValue;
        }
        if (this._dataCacheConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCacheConfig = this._dataCacheConfig?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._schedulingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulingConfig = this._schedulingConfig?.internalValue;
        }
        if (this._startupParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startupParameters = this._startupParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeResourceRequirements.internalValue = undefined;
            this._container.internalValue = undefined;
            this._currentDataCacheConfig.internalValue = undefined;
            this._dataCacheConfig.internalValue = undefined;
            this._instanceType = undefined;
            this._modelName = undefined;
            this._schedulingConfig.internalValue = undefined;
            this._startupParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
            this._container.internalValue = value.container;
            this._currentDataCacheConfig.internalValue = value.currentDataCacheConfig;
            this._dataCacheConfig.internalValue = value.dataCacheConfig;
            this._instanceType = value.instanceType;
            this._modelName = value.modelName;
            this._schedulingConfig.internalValue = value.schedulingConfig;
            this._startupParameters.internalValue = value.startupParameters;
        }
    }

    // compute_resource_requirements - computed: true, optional: true, required: false
    private _computeResourceRequirements = new ComputeResourceRequirementsPropertyOutputReference(this, "compute_resource_requirements");
    public get computeResourceRequirements() {
        return this._computeResourceRequirements;
    }
    public putComputeResourceRequirements(value: ComputeResourceRequirementsProperty) {
        this._computeResourceRequirements.internalValue = value;
    }
    public resetComputeResourceRequirements() {
        this._computeResourceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeResourceRequirementsInput() {
        return this._computeResourceRequirements.internalValue;
    }

    // container - computed: true, optional: true, required: false
    private _container = new ContainerPropertyOutputReference(this, "container");
    public get container() {
        return this._container;
    }
    public putContainer(value: ContainerProperty) {
        this._container.internalValue = value;
    }
    public resetContainer() {
        this._container.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerInput() {
        return this._container.internalValue;
    }

    // current_data_cache_config - computed: true, optional: true, required: false
    private _currentDataCacheConfig = new SpecificationsCurrentDataCacheConfigPropertyOutputReference(this, "current_data_cache_config");
    public get currentDataCacheConfig() {
        return this._currentDataCacheConfig;
    }
    public putCurrentDataCacheConfig(value: SpecificationsCurrentDataCacheConfigProperty) {
        this._currentDataCacheConfig.internalValue = value;
    }
    public resetCurrentDataCacheConfig() {
        this._currentDataCacheConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentDataCacheConfigInput() {
        return this._currentDataCacheConfig.internalValue;
    }

    // data_cache_config - computed: true, optional: true, required: false
    private _dataCacheConfig = new SpecificationsDataCacheConfigPropertyOutputReference(this, "data_cache_config");
    public get dataCacheConfig() {
        return this._dataCacheConfig;
    }
    public putDataCacheConfig(value: SpecificationsDataCacheConfigProperty) {
        this._dataCacheConfig.internalValue = value;
    }
    public resetDataCacheConfig() {
        this._dataCacheConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCacheConfigInput() {
        return this._dataCacheConfig.internalValue;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // model_name - computed: true, optional: true, required: false
    private _modelName?: string; 
    public get modelName() {
        return this.getStringAttribute('model_name');
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    public resetModelName() {
        this._modelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameInput() {
        return this._modelName;
    }

    // scheduling_config - computed: true, optional: true, required: false
    private _schedulingConfig = new SpecificationsSchedulingConfigPropertyOutputReference(this, "scheduling_config");
    public get schedulingConfig() {
        return this._schedulingConfig;
    }
    public putSchedulingConfig(value: SpecificationsSchedulingConfigProperty) {
        this._schedulingConfig.internalValue = value;
    }
    public resetSchedulingConfig() {
        this._schedulingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingConfigInput() {
        return this._schedulingConfig.internalValue;
    }

    // startup_parameters - computed: true, optional: true, required: false
    private _startupParameters = new StartupParametersPropertyOutputReference(this, "startup_parameters");
    public get startupParameters() {
        return this._startupParameters;
    }
    public putStartupParameters(value: StartupParametersProperty) {
        this._startupParameters.internalValue = value;
    }
    public resetStartupParameters() {
        this._startupParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startupParametersInput() {
        return this._startupParameters.internalValue;
    }
}

export class SpecificationsPropertyList extends cdktn.ComplexList {
    public internalValue? : SpecificationsProperty[] | cdktn.IResolvable

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
    public get(index: number): SpecificationsPropertyOutputReference {
        return new SpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#key CcInferenceComponent#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_inference_component#value CcInferenceComponent#value}
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
