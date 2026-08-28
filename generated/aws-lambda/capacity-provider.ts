// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapacityProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#capacity_provider_name CcCapacityProvider#capacity_provider_name}
    */
    readonly capacityProviderName?: string;
    /**
    * The scaling configuration for the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config CcCapacityProvider#capacity_provider_scaling_config}
    */
    readonly capacityProviderScalingConfig?: CcCapacityProvider.CapacityProviderScalingConfigProperty;
    /**
    * The instance requirements for compute resources managed by the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#instance_requirements CcCapacityProvider#instance_requirements}
    */
    readonly instanceRequirements?: CcCapacityProvider.InstanceRequirementsProperty;
    /**
    * The ARN of the KMS key used to encrypt the capacity provider's resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#kms_key_arn CcCapacityProvider#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The permissions configuration for the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#permissions_config CcCapacityProvider#permissions_config}
    */
    readonly permissionsConfig: CcCapacityProvider.CapacityProviderPermissionsConfigProperty;
    /**
    * Configuration for tag propagation to managed resources launched by the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#propagate_tags CcCapacityProvider#propagate_tags}
    */
    readonly propagateTags?: CcCapacityProvider.PropagateTagsConfigProperty;
    /**
    * A key-value pair that provides metadata for the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#tags CcCapacityProvider#tags}
    */
    readonly tags?: CcCapacityProvider.TagsProperty[] | cdktn.IResolvable;
    /**
    * The telemetry configuration for the capacity provider, including logging settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#telemetry_config CcCapacityProvider#telemetry_config}
    */
    readonly telemetryConfig?: CcCapacityProvider.CapacityProviderTelemetryConfigProperty;
    /**
    * The VPC configuration for the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#vpc_config CcCapacityProvider#vpc_config}
    */
    readonly vpcConfig: CcCapacityProvider.CapacityProviderVpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider awscc_lambda_capacity_provider}
*/
export class CcCapacityProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_capacity_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapacityProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapacityProvider to import
    * @param importFromId The id of the existing CcCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapacityProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_capacity_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider awscc_lambda_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapacityProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcCapacityProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_capacity_provider',
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
        this._capacityProviderName = config.capacityProviderName;
        this._capacityProviderScalingConfig.internalValue = config.capacityProviderScalingConfig;
        this._instanceRequirements.internalValue = config.instanceRequirements;
        this._kmsKeyArn = config.kmsKeyArn;
        this._permissionsConfig.internalValue = config.permissionsConfig;
        this._propagateTags.internalValue = config.propagateTags;
        this._tags.internalValue = config.tags;
        this._telemetryConfig.internalValue = config.telemetryConfig;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_provider_name - computed: true, optional: true, required: false
    private _capacityProviderName?: string; 
    public get capacityProviderName() {
        return this.getStringAttribute('capacity_provider_name');
    }
    public set capacityProviderName(value: string) {
        this._capacityProviderName = value;
    }
    public resetCapacityProviderName() {
        this._capacityProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderNameInput() {
        return this._capacityProviderName;
    }

    // capacity_provider_scaling_config - computed: true, optional: true, required: false
    private _capacityProviderScalingConfig = new CcCapacityProvider.CapacityProviderScalingConfigPropertyOutputReference(this, "capacity_provider_scaling_config");
    public get capacityProviderScalingConfig() {
        return this._capacityProviderScalingConfig;
    }
    public putCapacityProviderScalingConfig(value: CcCapacityProvider.CapacityProviderScalingConfigProperty) {
        this._capacityProviderScalingConfig.internalValue = value;
    }
    public resetCapacityProviderScalingConfig() {
        this._capacityProviderScalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderScalingConfigInput() {
        return this._capacityProviderScalingConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_requirements - computed: true, optional: true, required: false
    private _instanceRequirements = new CcCapacityProvider.InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: CcCapacityProvider.InstanceRequirementsProperty) {
        this._instanceRequirements.internalValue = value;
    }
    public resetInstanceRequirements() {
        this._instanceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRequirementsInput() {
        return this._instanceRequirements.internalValue;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // permissions_config - computed: false, optional: false, required: true
    private _permissionsConfig = new CcCapacityProvider.CapacityProviderPermissionsConfigPropertyOutputReference(this, "permissions_config");
    public get permissionsConfig() {
        return this._permissionsConfig;
    }
    public putPermissionsConfig(value: CcCapacityProvider.CapacityProviderPermissionsConfigProperty) {
        this._permissionsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsConfigInput() {
        return this._permissionsConfig.internalValue;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags = new CcCapacityProvider.PropagateTagsConfigPropertyOutputReference(this, "propagate_tags");
    public get propagateTags() {
        return this._propagateTags;
    }
    public putPropagateTags(value: CcCapacityProvider.PropagateTagsConfigProperty) {
        this._propagateTags.internalValue = value;
    }
    public resetPropagateTags() {
        this._propagateTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCapacityProvider.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCapacityProvider.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // telemetry_config - computed: true, optional: true, required: false
    private _telemetryConfig = new CcCapacityProvider.CapacityProviderTelemetryConfigPropertyOutputReference(this, "telemetry_config");
    public get telemetryConfig() {
        return this._telemetryConfig;
    }
    public putTelemetryConfig(value: CcCapacityProvider.CapacityProviderTelemetryConfigProperty) {
        this._telemetryConfig.internalValue = value;
    }
    public resetTelemetryConfig() {
        this._telemetryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetryConfigInput() {
        return this._telemetryConfig.internalValue;
    }

    // vpc_config - computed: false, optional: false, required: true
    private _vpcConfig = new CcCapacityProvider.CapacityProviderVpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcCapacityProvider.CapacityProviderVpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_provider_name: cdktn.stringToTerraform(this._capacityProviderName),
            capacity_provider_scaling_config: ccCapacityProviderCapacityProviderScalingConfigPropertyToTerraform(this._capacityProviderScalingConfig.internalValue),
            instance_requirements: ccCapacityProviderInstanceRequirementsPropertyToTerraform(this._instanceRequirements.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            permissions_config: ccCapacityProviderCapacityProviderPermissionsConfigPropertyToTerraform(this._permissionsConfig.internalValue),
            propagate_tags: ccCapacityProviderPropagateTagsConfigPropertyToTerraform(this._propagateTags.internalValue),
            tags: cdktn.listMapper(ccCapacityProviderTagsPropertyToTerraform, false)(this._tags.internalValue),
            telemetry_config: ccCapacityProviderCapacityProviderTelemetryConfigPropertyToTerraform(this._telemetryConfig.internalValue),
            vpc_config: ccCapacityProviderCapacityProviderVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_provider_name: {
                value: cdktn.stringToHclTerraform(this._capacityProviderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capacity_provider_scaling_config: {
                value: ccCapacityProviderCapacityProviderScalingConfigPropertyToHclTerraform(this._capacityProviderScalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.CapacityProviderScalingConfigProperty",
            },
            instance_requirements: {
                value: ccCapacityProviderInstanceRequirementsPropertyToHclTerraform(this._instanceRequirements.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.InstanceRequirementsProperty",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions_config: {
                value: ccCapacityProviderCapacityProviderPermissionsConfigPropertyToHclTerraform(this._permissionsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.CapacityProviderPermissionsConfigProperty",
            },
            propagate_tags: {
                value: ccCapacityProviderPropagateTagsConfigPropertyToHclTerraform(this._propagateTags.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.PropagateTagsConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCapacityProviderTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCapacityProvider.TagsPropertyList",
            },
            telemetry_config: {
                value: ccCapacityProviderCapacityProviderTelemetryConfigPropertyToHclTerraform(this._telemetryConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.CapacityProviderTelemetryConfigProperty",
            },
            vpc_config: {
                value: ccCapacityProviderCapacityProviderVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.CapacityProviderVpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapacityProviderTargetTrackingScalingPolicyPropertyToTerraform(struct?: CcCapacityProvider.TargetTrackingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccCapacityProviderTargetTrackingScalingPolicyPropertyToHclTerraform(struct?: CcCapacityProvider.TargetTrackingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityProviderScalingConfigPropertyToTerraform(struct?: CcCapacityProvider.CapacityProviderScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_v_cpu_count: cdktn.numberToTerraform(struct!.maxVCpuCount),
        scaling_mode: cdktn.stringToTerraform(struct!.scalingMode),
        scaling_policies: cdktn.listMapper(ccCapacityProviderTargetTrackingScalingPolicyPropertyToTerraform, false)(struct!.scalingPolicies),
    }
}


export function ccCapacityProviderCapacityProviderScalingConfigPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityProviderScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_v_cpu_count: {
            value: cdktn.numberToHclTerraform(struct!.maxVCpuCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_mode: {
            value: cdktn.stringToHclTerraform(struct!.scalingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_policies: {
            value: cdktn.listMapperHcl(ccCapacityProviderTargetTrackingScalingPolicyPropertyToHclTerraform, false)(struct!.scalingPolicies),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrackingScalingPolicyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderInstanceRequirementsPropertyToTerraform(struct?: CcCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.architectures),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
    }
}


export function ccCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct?: CcCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        architectures: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.architectures),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        excluded_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityProviderPermissionsConfigPropertyToTerraform(struct?: CcCapacityProvider.CapacityProviderPermissionsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_operator_role_arn: cdktn.stringToTerraform(struct!.capacityProviderOperatorRoleArn),
    }
}


export function ccCapacityProviderCapacityProviderPermissionsConfigPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityProviderPermissionsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_operator_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.capacityProviderOperatorRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderTagPropertyToTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapacityProviderTagPropertyToHclTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
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


export function ccCapacityProviderPropagateTagsConfigPropertyToTerraform(struct?: CcCapacityProvider.PropagateTagsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        explicit_tags: cdktn.listMapper(ccCapacityProviderTagPropertyToTerraform, false)(struct!.explicitTags),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccCapacityProviderPropagateTagsConfigPropertyToHclTerraform(struct?: CcCapacityProvider.PropagateTagsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        explicit_tags: {
            value: cdktn.listMapperHcl(ccCapacityProviderTagPropertyToHclTerraform, false)(struct!.explicitTags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderTagsPropertyToTerraform(struct?: CcCapacityProvider.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapacityProviderTagsPropertyToHclTerraform(struct?: CcCapacityProvider.TagsProperty | cdktn.IResolvable): any {
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


export function ccCapacityProviderCapacityProviderLoggingConfigPropertyToTerraform(struct?: CcCapacityProvider.CapacityProviderLoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group: cdktn.stringToTerraform(struct!.logGroup),
        system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
    }
}


export function ccCapacityProviderCapacityProviderLoggingConfigPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityProviderLoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        system_log_level: {
            value: cdktn.stringToHclTerraform(struct!.systemLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityProviderTelemetryConfigPropertyToTerraform(struct?: CcCapacityProvider.CapacityProviderTelemetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        logging_config: ccCapacityProviderCapacityProviderLoggingConfigPropertyToTerraform(struct!.loggingConfig),
    }
}


export function ccCapacityProviderCapacityProviderTelemetryConfigPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityProviderTelemetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        logging_config: {
            value: ccCapacityProviderCapacityProviderLoggingConfigPropertyToHclTerraform(struct!.loggingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityProviderLoggingConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityProviderVpcConfigPropertyToTerraform(struct?: CcCapacityProvider.CapacityProviderVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccCapacityProviderCapacityProviderVpcConfigPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityProviderVpcConfigProperty | cdktn.IResolvable): any {
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
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCapacityProvider {
export interface TargetTrackingScalingPolicyProperty {
    /**
    * The predefined metric type to track for scaling decisions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#predefined_metric_type CcCapacityProvider#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * The target value for the metric that the scaling policy attempts to maintain through scaling actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#target_value CcCapacityProvider#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._targetValue = value.targetValue;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}

export class TargetTrackingScalingPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingScalingPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingScalingPolicyPropertyOutputReference {
        return new TargetTrackingScalingPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacityProviderScalingConfigProperty {
    /**
    * The maximum number of vCPUs that the capacity provider can provision across all compute instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#max_v_cpu_count CcCapacityProvider#max_v_cpu_count}
    */
    readonly maxVCpuCount?: number;
    /**
    * The scaling mode that determines how the capacity provider responds to changes in demand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#scaling_mode CcCapacityProvider#scaling_mode}
    */
    readonly scalingMode?: string;
    /**
    * A list of target tracking scaling policies for the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#scaling_policies CcCapacityProvider#scaling_policies}
    */
    readonly scalingPolicies?: TargetTrackingScalingPolicyProperty[] | cdktn.IResolvable;
}
export class CapacityProviderScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxVCpuCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxVCpuCount = this._maxVCpuCount;
        }
        if (this._scalingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingMode = this._scalingMode;
        }
        if (this._scalingPolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicies = this._scalingPolicies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxVCpuCount = undefined;
            this._scalingMode = undefined;
            this._scalingPolicies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxVCpuCount = value.maxVCpuCount;
            this._scalingMode = value.scalingMode;
            this._scalingPolicies.internalValue = value.scalingPolicies;
        }
    }

    // max_v_cpu_count - computed: true, optional: true, required: false
    private _maxVCpuCount?: number; 
    public get maxVCpuCount() {
        return this.getNumberAttribute('max_v_cpu_count');
    }
    public set maxVCpuCount(value: number) {
        this._maxVCpuCount = value;
    }
    public resetMaxVCpuCount() {
        this._maxVCpuCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxVCpuCountInput() {
        return this._maxVCpuCount;
    }

    // scaling_mode - computed: true, optional: true, required: false
    private _scalingMode?: string; 
    public get scalingMode() {
        return this.getStringAttribute('scaling_mode');
    }
    public set scalingMode(value: string) {
        this._scalingMode = value;
    }
    public resetScalingMode() {
        this._scalingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingModeInput() {
        return this._scalingMode;
    }

    // scaling_policies - computed: true, optional: true, required: false
    private _scalingPolicies = new TargetTrackingScalingPolicyPropertyList(this, "scaling_policies", false);
    public get scalingPolicies() {
        return this._scalingPolicies;
    }
    public putScalingPolicies(value: TargetTrackingScalingPolicyProperty[] | cdktn.IResolvable) {
        this._scalingPolicies.internalValue = value;
    }
    public resetScalingPolicies() {
        this._scalingPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPoliciesInput() {
        return this._scalingPolicies.internalValue;
    }
}
export interface InstanceRequirementsProperty {
    /**
    * A list of EC2 instance types that the capacity provider is allowed to use. If not specified, all compatible instance types are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#allowed_instance_types CcCapacityProvider#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#architectures CcCapacityProvider#architectures}
    */
    readonly architectures?: string[];
    /**
    * A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#excluded_instance_types CcCapacityProvider#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
        }
        if (this._architectures !== undefined) {
            hasAnyValues = true;
            internalValueResult.architectures = this._architectures;
        }
        if (this._excludedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedInstanceTypes = undefined;
            this._architectures = undefined;
            this._excludedInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedInstanceTypes = value.allowedInstanceTypes;
            this._architectures = value.architectures;
            this._excludedInstanceTypes = value.excludedInstanceTypes;
        }
    }

    // allowed_instance_types - computed: true, optional: true, required: false
    private _allowedInstanceTypes?: string[]; 
    public get allowedInstanceTypes() {
        return this.getListAttribute('allowed_instance_types');
    }
    public set allowedInstanceTypes(value: string[]) {
        this._allowedInstanceTypes = value;
    }
    public resetAllowedInstanceTypes() {
        this._allowedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInstanceTypesInput() {
        return this._allowedInstanceTypes;
    }

    // architectures - computed: true, optional: true, required: false
    private _architectures?: string[]; 
    public get architectures() {
        return this.getListAttribute('architectures');
    }
    public set architectures(value: string[]) {
        this._architectures = value;
    }
    public resetArchitectures() {
        this._architectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architecturesInput() {
        return this._architectures;
    }

    // excluded_instance_types - computed: true, optional: true, required: false
    private _excludedInstanceTypes?: string[]; 
    public get excludedInstanceTypes() {
        return this.getListAttribute('excluded_instance_types');
    }
    public set excludedInstanceTypes(value: string[]) {
        this._excludedInstanceTypes = value;
    }
    public resetExcludedInstanceTypes() {
        this._excludedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedInstanceTypesInput() {
        return this._excludedInstanceTypes;
    }
}
export interface CapacityProviderPermissionsConfigProperty {
    /**
    * The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn CcCapacityProvider#capacity_provider_operator_role_arn}
    */
    readonly capacityProviderOperatorRoleArn: string;
}
export class CapacityProviderPermissionsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderPermissionsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityProviderOperatorRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProviderOperatorRoleArn = this._capacityProviderOperatorRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderPermissionsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityProviderOperatorRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityProviderOperatorRoleArn = value.capacityProviderOperatorRoleArn;
        }
    }

    // capacity_provider_operator_role_arn - computed: false, optional: false, required: true
    private _capacityProviderOperatorRoleArn?: string; 
    public get capacityProviderOperatorRoleArn() {
        return this.getStringAttribute('capacity_provider_operator_role_arn');
    }
    public set capacityProviderOperatorRoleArn(value: string) {
        this._capacityProviderOperatorRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderOperatorRoleArnInput() {
        return this._capacityProviderOperatorRoleArn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#key CcCapacityProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#value CcCapacityProvider#value}
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
export interface PropagateTagsConfigProperty {
    /**
    * A list of tags to explicitly propagate to managed resources. Maximum of 40 tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#explicit_tags CcCapacityProvider#explicit_tags}
    */
    readonly explicitTags?: TagProperty[] | cdktn.IResolvable;
    /**
    * The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#mode CcCapacityProvider#mode}
    */
    readonly mode?: string;
}
export class PropagateTagsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PropagateTagsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._explicitTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.explicitTags = this._explicitTags?.internalValue;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropagateTagsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._explicitTags.internalValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._explicitTags.internalValue = value.explicitTags;
            this._mode = value.mode;
        }
    }

    // explicit_tags - computed: true, optional: true, required: false
    private _explicitTags = new TagPropertyList(this, "explicit_tags", true);
    public get explicitTags() {
        return this._explicitTags;
    }
    public putExplicitTags(value: TagProperty[] | cdktn.IResolvable) {
        this._explicitTags.internalValue = value;
    }
    public resetExplicitTags() {
        this._explicitTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explicitTagsInput() {
        return this._explicitTags.internalValue;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#key CcCapacityProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#value CcCapacityProvider#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacityProviderLoggingConfigProperty {
    /**
    * The name of the Amazon CloudWatch log group the capacity provider sends logs to. By default, Lambda capacity providers send logs to a default log group named ``/aws/lambda/capacity-provider/<capacity provider name>``. To use a different log group, enter an existing log group or enter a new log group name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#log_group CcCapacityProvider#log_group}
    */
    readonly logGroup?: string;
    /**
    * Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#system_log_level CcCapacityProvider#system_log_level}
    */
    readonly systemLogLevel?: string;
}
export class CapacityProviderLoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderLoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        if (this._systemLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemLogLevel = this._systemLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderLoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroup = undefined;
            this._systemLogLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroup = value.logGroup;
            this._systemLogLevel = value.systemLogLevel;
        }
    }

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }

    // system_log_level - computed: true, optional: true, required: false
    private _systemLogLevel?: string; 
    public get systemLogLevel() {
        return this.getStringAttribute('system_log_level');
    }
    public set systemLogLevel(value: string) {
        this._systemLogLevel = value;
    }
    public resetSystemLogLevel() {
        this._systemLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemLogLevelInput() {
        return this._systemLogLevel;
    }
}
export interface CapacityProviderTelemetryConfigProperty {
    /**
    * The capacity provider's Amazon CloudWatch Logs configuration settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#logging_config CcCapacityProvider#logging_config}
    */
    readonly loggingConfig?: CapacityProviderLoggingConfigProperty;
}
export class CapacityProviderTelemetryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderTelemetryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._loggingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderTelemetryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._loggingConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._loggingConfig.internalValue = value.loggingConfig;
        }
    }

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CapacityProviderLoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CapacityProviderLoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }
}
export interface CapacityProviderVpcConfigProperty {
    /**
    * A list of security group IDs that control network access for compute instances managed by the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#security_group_ids CcCapacityProvider#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * A list of subnet IDs where the capacity provider launches compute instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_capacity_provider#subnet_ids CcCapacityProvider#subnet_ids}
    */
    readonly subnetIds: string[];
}
export class CapacityProviderVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderVpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderVpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
