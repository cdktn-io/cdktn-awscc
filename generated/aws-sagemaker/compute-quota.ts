// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcComputeQuotaProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#activation_state CcComputeQuota#activation_state}
    */
    readonly activationState?: string;
    /**
    * The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to. Slurm-orchestrated clusters are rejected by the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#cluster_arn CcComputeQuota#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_config CcComputeQuota#compute_quota_config}
    */
    readonly computeQuotaConfig: CcComputeQuota.ComputeQuotaConfigProperty;
    /**
    * The team this compute allocation rule applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_target CcComputeQuota#compute_quota_target}
    */
    readonly computeQuotaTarget: CcComputeQuota.ComputeQuotaTargetProperty;
    /**
    * A free-form description of the compute allocation definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#description CcComputeQuota#description}
    */
    readonly description?: string;
    /**
    * The name of the compute allocation definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#name CcComputeQuota#name}
    */
    readonly name: string;
    /**
    * Tags to associate with the compute allocation definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#tags CcComputeQuota#tags}
    */
    readonly tags?: CcComputeQuota.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota awscc_sagemaker_compute_quota}
*/
export class CcComputeQuota extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_compute_quota";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcComputeQuota resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcComputeQuota to import
    * @param importFromId The id of the existing CcComputeQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcComputeQuota to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_compute_quota", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota awscc_sagemaker_compute_quota} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcComputeQuotaProps
    */
    public constructor(scope: Construct, id: string, config: CcComputeQuotaProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_compute_quota',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._activationState = config.activationState;
        this._clusterArn = config.clusterArn;
        this._computeQuotaConfig.internalValue = config.computeQuotaConfig;
        this._computeQuotaTarget.internalValue = config.computeQuotaTarget;
        this._description = config.description;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_state - computed: true, optional: true, required: false
    private _activationState?: string; 
    public get activationState() {
        return this.getStringAttribute('activation_state');
    }
    public set activationState(value: string) {
        this._activationState = value;
    }
    public resetActivationState() {
        this._activationState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activationStateInput() {
        return this._activationState;
    }

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // compute_quota_arn - computed: true, optional: false, required: false
    public get computeQuotaArn() {
        return this.getStringAttribute('compute_quota_arn');
    }

    // compute_quota_config - computed: false, optional: false, required: true
    private _computeQuotaConfig = new CcComputeQuota.ComputeQuotaConfigPropertyOutputReference(this, "compute_quota_config");
    public get computeQuotaConfig() {
        return this._computeQuotaConfig;
    }
    public putComputeQuotaConfig(value: CcComputeQuota.ComputeQuotaConfigProperty) {
        this._computeQuotaConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeQuotaConfigInput() {
        return this._computeQuotaConfig.internalValue;
    }

    // compute_quota_id - computed: true, optional: false, required: false
    public get computeQuotaId() {
        return this.getStringAttribute('compute_quota_id');
    }

    // compute_quota_target - computed: false, optional: false, required: true
    private _computeQuotaTarget = new CcComputeQuota.ComputeQuotaTargetPropertyOutputReference(this, "compute_quota_target");
    public get computeQuotaTarget() {
        return this._computeQuotaTarget;
    }
    public putComputeQuotaTarget(value: CcComputeQuota.ComputeQuotaTargetProperty) {
        this._computeQuotaTarget.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeQuotaTargetInput() {
        return this._computeQuotaTarget.internalValue;
    }

    // compute_quota_version - computed: true, optional: false, required: false
    public get computeQuotaVersion() {
        return this.getNumberAttribute('compute_quota_version');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcComputeQuota.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcComputeQuota.TagsProperty[] | cdktn.IResolvable) {
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
            activation_state: cdktn.stringToTerraform(this._activationState),
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            compute_quota_config: ccComputeQuotaComputeQuotaConfigPropertyToTerraform(this._computeQuotaConfig.internalValue),
            compute_quota_target: ccComputeQuotaComputeQuotaTargetPropertyToTerraform(this._computeQuotaTarget.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccComputeQuotaTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            activation_state: {
                value: cdktn.stringToHclTerraform(this._activationState),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_quota_config: {
                value: ccComputeQuotaComputeQuotaConfigPropertyToHclTerraform(this._computeQuotaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeQuota.ComputeQuotaConfigProperty",
            },
            compute_quota_target: {
                value: ccComputeQuotaComputeQuotaTargetPropertyToHclTerraform(this._computeQuotaTarget.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeQuota.ComputeQuotaTargetProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            tags: {
                value: cdktn.listMapperHcl(ccComputeQuotaTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcComputeQuota.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyToTerraform(struct?: CcComputeQuota.ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyToHclTerraform(struct?: CcComputeQuota.ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaComputeQuotaResourcesPropertyToTerraform(struct?: CcComputeQuota.ComputeQuotaResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_partition: ccComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyToTerraform(struct!.acceleratorPartition),
        accelerators: cdktn.numberToTerraform(struct!.accelerators),
        count: cdktn.numberToTerraform(struct!.count),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        memory_in_gi_b: cdktn.numberToTerraform(struct!.memoryInGiB),
        v_cpu: cdktn.numberToTerraform(struct!.vCpu),
    }
}


export function ccComputeQuotaComputeQuotaResourcesPropertyToHclTerraform(struct?: CcComputeQuota.ComputeQuotaResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_partition: {
            value: ccComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyToHclTerraform(struct!.acceleratorPartition),
            isBlock: true,
            type: "struct",
            storageClassType: "ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty",
        },
        accelerators: {
            value: cdktn.numberToHclTerraform(struct!.accelerators),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
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
        memory_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.memoryInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        v_cpu: {
            value: cdktn.numberToHclTerraform(struct!.vCpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyToTerraform(struct?: CcComputeQuota.ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyToHclTerraform(struct?: CcComputeQuota.ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaAbsoluteBorrowLimitsPropertyToTerraform(struct?: CcComputeQuota.AbsoluteBorrowLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_partition: ccComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyToTerraform(struct!.acceleratorPartition),
        accelerators: cdktn.numberToTerraform(struct!.accelerators),
        count: cdktn.numberToTerraform(struct!.count),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        memory_in_gi_b: cdktn.numberToTerraform(struct!.memoryInGiB),
        v_cpu: cdktn.numberToTerraform(struct!.vCpu),
    }
}


export function ccComputeQuotaAbsoluteBorrowLimitsPropertyToHclTerraform(struct?: CcComputeQuota.AbsoluteBorrowLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_partition: {
            value: ccComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyToHclTerraform(struct!.acceleratorPartition),
            isBlock: true,
            type: "struct",
            storageClassType: "ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty",
        },
        accelerators: {
            value: cdktn.numberToHclTerraform(struct!.accelerators),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
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
        memory_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.memoryInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        v_cpu: {
            value: cdktn.numberToHclTerraform(struct!.vCpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaResourceSharingConfigPropertyToTerraform(struct?: CcComputeQuota.ResourceSharingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        absolute_borrow_limits: cdktn.listMapper(ccComputeQuotaAbsoluteBorrowLimitsPropertyToTerraform, false)(struct!.absoluteBorrowLimits),
        borrow_limit: cdktn.numberToTerraform(struct!.borrowLimit),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccComputeQuotaResourceSharingConfigPropertyToHclTerraform(struct?: CcComputeQuota.ResourceSharingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        absolute_borrow_limits: {
            value: cdktn.listMapperHcl(ccComputeQuotaAbsoluteBorrowLimitsPropertyToHclTerraform, false)(struct!.absoluteBorrowLimits),
            isBlock: true,
            type: "list",
            storageClassType: "AbsoluteBorrowLimitsPropertyList",
        },
        borrow_limit: {
            value: cdktn.numberToHclTerraform(struct!.borrowLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaComputeQuotaConfigPropertyToTerraform(struct?: CcComputeQuota.ComputeQuotaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_quota_resources: cdktn.listMapper(ccComputeQuotaComputeQuotaResourcesPropertyToTerraform, false)(struct!.computeQuotaResources),
        preempt_team_tasks: cdktn.stringToTerraform(struct!.preemptTeamTasks),
        resource_sharing_config: ccComputeQuotaResourceSharingConfigPropertyToTerraform(struct!.resourceSharingConfig),
    }
}


export function ccComputeQuotaComputeQuotaConfigPropertyToHclTerraform(struct?: CcComputeQuota.ComputeQuotaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_quota_resources: {
            value: cdktn.listMapperHcl(ccComputeQuotaComputeQuotaResourcesPropertyToHclTerraform, false)(struct!.computeQuotaResources),
            isBlock: true,
            type: "list",
            storageClassType: "ComputeQuotaResourcesPropertyList",
        },
        preempt_team_tasks: {
            value: cdktn.stringToHclTerraform(struct!.preemptTeamTasks),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_sharing_config: {
            value: ccComputeQuotaResourceSharingConfigPropertyToHclTerraform(struct!.resourceSharingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceSharingConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaComputeQuotaTargetPropertyToTerraform(struct?: CcComputeQuota.ComputeQuotaTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fair_share_weight: cdktn.numberToTerraform(struct!.fairShareWeight),
        team_name: cdktn.stringToTerraform(struct!.teamName),
    }
}


export function ccComputeQuotaComputeQuotaTargetPropertyToHclTerraform(struct?: CcComputeQuota.ComputeQuotaTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fair_share_weight: {
            value: cdktn.numberToHclTerraform(struct!.fairShareWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        team_name: {
            value: cdktn.stringToHclTerraform(struct!.teamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeQuotaTagsPropertyToTerraform(struct?: CcComputeQuota.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccComputeQuotaTagsPropertyToHclTerraform(struct?: CcComputeQuota.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcComputeQuota {
export interface ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty {
    /**
    * The number of MIG partitions of the specified Type allocated to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count CcComputeQuota#count}
    */
    readonly count?: number;
    /**
    * MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type CcComputeQuota#type}
    */
    readonly type?: string;
}
export class ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._type = value.type;
        }
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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
}
export interface ComputeQuotaResourcesProperty {
    /**
    * Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. Service rejects MIG profiles that the chosen InstanceType does not support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition CcComputeQuota#accelerator_partition}
    */
    readonly acceleratorPartition?: ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty;
    /**
    * The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators CcComputeQuota#accelerators}
    */
    readonly accelerators?: number;
    /**
    * The number of instances of this type allocated to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count CcComputeQuota#count}
    */
    readonly count?: number;
    /**
    * The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type CcComputeQuota#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The memory in GiB allocated to the team. Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b CcComputeQuota#memory_in_gi_b}
    */
    readonly memoryInGiB?: number;
    /**
    * The number of vCPUs allocated to the team. Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu CcComputeQuota#v_cpu}
    */
    readonly vCpu?: number;
}
export class ComputeQuotaResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComputeQuotaResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceleratorPartition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorPartition = this._acceleratorPartition?.internalValue;
        }
        if (this._accelerators !== undefined) {
            hasAnyValues = true;
            internalValueResult.accelerators = this._accelerators;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._memoryInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryInGiB = this._memoryInGiB;
        }
        if (this._vCpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpu = this._vCpu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeQuotaResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorPartition.internalValue = undefined;
            this._accelerators = undefined;
            this._count = undefined;
            this._instanceType = undefined;
            this._memoryInGiB = undefined;
            this._vCpu = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorPartition.internalValue = value.acceleratorPartition;
            this._accelerators = value.accelerators;
            this._count = value.count;
            this._instanceType = value.instanceType;
            this._memoryInGiB = value.memoryInGiB;
            this._vCpu = value.vCpu;
        }
    }

    // accelerator_partition - computed: true, optional: true, required: false
    private _acceleratorPartition = new ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionPropertyOutputReference(this, "accelerator_partition");
    public get acceleratorPartition() {
        return this._acceleratorPartition;
    }
    public putAcceleratorPartition(value: ComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionProperty) {
        this._acceleratorPartition.internalValue = value;
    }
    public resetAcceleratorPartition() {
        this._acceleratorPartition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorPartitionInput() {
        return this._acceleratorPartition.internalValue;
    }

    // accelerators - computed: true, optional: true, required: false
    private _accelerators?: number; 
    public get accelerators() {
        return this.getNumberAttribute('accelerators');
    }
    public set accelerators(value: number) {
        this._accelerators = value;
    }
    public resetAccelerators() {
        this._accelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorsInput() {
        return this._accelerators;
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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

    // memory_in_gi_b - computed: true, optional: true, required: false
    private _memoryInGiB?: number; 
    public get memoryInGiB() {
        return this.getNumberAttribute('memory_in_gi_b');
    }
    public set memoryInGiB(value: number) {
        this._memoryInGiB = value;
    }
    public resetMemoryInGiB() {
        this._memoryInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInGiBInput() {
        return this._memoryInGiB;
    }

    // v_cpu - computed: true, optional: true, required: false
    private _vCpu?: number; 
    public get vCpu() {
        return this.getNumberAttribute('v_cpu');
    }
    public set vCpu(value: number) {
        this._vCpu = value;
    }
    public resetVCpu() {
        this._vCpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuInput() {
        return this._vCpu;
    }
}

export class ComputeQuotaResourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : ComputeQuotaResourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): ComputeQuotaResourcesPropertyOutputReference {
        return new ComputeQuotaResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty {
    /**
    * The number of MIG partitions of the specified Type allocated to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count CcComputeQuota#count}
    */
    readonly count?: number;
    /**
    * MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type CcComputeQuota#type}
    */
    readonly type?: string;
}
export class ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._type = value.type;
        }
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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
}
export interface AbsoluteBorrowLimitsProperty {
    /**
    * Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. Service rejects MIG profiles that the chosen InstanceType does not support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition CcComputeQuota#accelerator_partition}
    */
    readonly acceleratorPartition?: ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty;
    /**
    * The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators CcComputeQuota#accelerators}
    */
    readonly accelerators?: number;
    /**
    * The number of instances of this type allocated to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count CcComputeQuota#count}
    */
    readonly count?: number;
    /**
    * The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type CcComputeQuota#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The memory in GiB allocated to the team. Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b CcComputeQuota#memory_in_gi_b}
    */
    readonly memoryInGiB?: number;
    /**
    * The number of vCPUs allocated to the team. Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu CcComputeQuota#v_cpu}
    */
    readonly vCpu?: number;
}
export class AbsoluteBorrowLimitsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AbsoluteBorrowLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceleratorPartition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorPartition = this._acceleratorPartition?.internalValue;
        }
        if (this._accelerators !== undefined) {
            hasAnyValues = true;
            internalValueResult.accelerators = this._accelerators;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._memoryInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryInGiB = this._memoryInGiB;
        }
        if (this._vCpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpu = this._vCpu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbsoluteBorrowLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorPartition.internalValue = undefined;
            this._accelerators = undefined;
            this._count = undefined;
            this._instanceType = undefined;
            this._memoryInGiB = undefined;
            this._vCpu = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorPartition.internalValue = value.acceleratorPartition;
            this._accelerators = value.accelerators;
            this._count = value.count;
            this._instanceType = value.instanceType;
            this._memoryInGiB = value.memoryInGiB;
            this._vCpu = value.vCpu;
        }
    }

    // accelerator_partition - computed: true, optional: true, required: false
    private _acceleratorPartition = new ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionPropertyOutputReference(this, "accelerator_partition");
    public get acceleratorPartition() {
        return this._acceleratorPartition;
    }
    public putAcceleratorPartition(value: ComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionProperty) {
        this._acceleratorPartition.internalValue = value;
    }
    public resetAcceleratorPartition() {
        this._acceleratorPartition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorPartitionInput() {
        return this._acceleratorPartition.internalValue;
    }

    // accelerators - computed: true, optional: true, required: false
    private _accelerators?: number; 
    public get accelerators() {
        return this.getNumberAttribute('accelerators');
    }
    public set accelerators(value: number) {
        this._accelerators = value;
    }
    public resetAccelerators() {
        this._accelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorsInput() {
        return this._accelerators;
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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

    // memory_in_gi_b - computed: true, optional: true, required: false
    private _memoryInGiB?: number; 
    public get memoryInGiB() {
        return this.getNumberAttribute('memory_in_gi_b');
    }
    public set memoryInGiB(value: number) {
        this._memoryInGiB = value;
    }
    public resetMemoryInGiB() {
        this._memoryInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInGiBInput() {
        return this._memoryInGiB;
    }

    // v_cpu - computed: true, optional: true, required: false
    private _vCpu?: number; 
    public get vCpu() {
        return this.getNumberAttribute('v_cpu');
    }
    public set vCpu(value: number) {
        this._vCpu = value;
    }
    public resetVCpu() {
        this._vCpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuInput() {
        return this._vCpu;
    }
}

export class AbsoluteBorrowLimitsPropertyList extends cdktn.ComplexList {
    public internalValue? : AbsoluteBorrowLimitsProperty[] | cdktn.IResolvable

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
    public get(index: number): AbsoluteBorrowLimitsPropertyOutputReference {
        return new AbsoluteBorrowLimitsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceSharingConfigProperty {
    /**
    * Per-instance-type absolute caps on resources this team can borrow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#absolute_borrow_limits CcComputeQuota#absolute_borrow_limits}
    */
    readonly absoluteBorrowLimits?: AbsoluteBorrowLimitsProperty[] | cdktn.IResolvable;
    /**
    * Maximum percentage of the team's idle quota that can be borrowed by other teams. Smithy admits 0..10000; in practice the service-documented operational range is 1..500. Defaults service-side to 50 when omitted on Create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#borrow_limit CcComputeQuota#borrow_limit}
    */
    readonly borrowLimit?: number;
    /**
    * How this team participates in idle-resource sharing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#strategy CcComputeQuota#strategy}
    */
    readonly strategy?: string;
}
export class ResourceSharingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceSharingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._absoluteBorrowLimits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.absoluteBorrowLimits = this._absoluteBorrowLimits?.internalValue;
        }
        if (this._borrowLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.borrowLimit = this._borrowLimit;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceSharingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absoluteBorrowLimits.internalValue = undefined;
            this._borrowLimit = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absoluteBorrowLimits.internalValue = value.absoluteBorrowLimits;
            this._borrowLimit = value.borrowLimit;
            this._strategy = value.strategy;
        }
    }

    // absolute_borrow_limits - computed: true, optional: true, required: false
    private _absoluteBorrowLimits = new AbsoluteBorrowLimitsPropertyList(this, "absolute_borrow_limits", false);
    public get absoluteBorrowLimits() {
        return this._absoluteBorrowLimits;
    }
    public putAbsoluteBorrowLimits(value: AbsoluteBorrowLimitsProperty[] | cdktn.IResolvable) {
        this._absoluteBorrowLimits.internalValue = value;
    }
    public resetAbsoluteBorrowLimits() {
        this._absoluteBorrowLimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get absoluteBorrowLimitsInput() {
        return this._absoluteBorrowLimits.internalValue;
    }

    // borrow_limit - computed: true, optional: true, required: false
    private _borrowLimit?: number; 
    public get borrowLimit() {
        return this.getNumberAttribute('borrow_limit');
    }
    public set borrowLimit(value: number) {
        this._borrowLimit = value;
    }
    public resetBorrowLimit() {
        this._borrowLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get borrowLimitInput() {
        return this._borrowLimit;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
export interface ComputeQuotaConfigProperty {
    /**
    * Per-instance-type compute quotas for the team. When VCpu / MemoryInGiB / Accelerators are partially specified, SageMaker auto-fills the remaining fields ratio-proportionally to the underlying instance ? Read may return values the customer did not supply (drift may flag this).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_resources CcComputeQuota#compute_quota_resources}
    */
    readonly computeQuotaResources?: ComputeQuotaResourcesProperty[] | cdktn.IResolvable;
    /**
    * Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#preempt_team_tasks CcComputeQuota#preempt_team_tasks}
    */
    readonly preemptTeamTasks?: string;
    /**
    * Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#resource_sharing_config CcComputeQuota#resource_sharing_config}
    */
    readonly resourceSharingConfig?: ResourceSharingConfigProperty;
}
export class ComputeQuotaConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeQuotaConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeQuotaResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeQuotaResources = this._computeQuotaResources?.internalValue;
        }
        if (this._preemptTeamTasks !== undefined) {
            hasAnyValues = true;
            internalValueResult.preemptTeamTasks = this._preemptTeamTasks;
        }
        if (this._resourceSharingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceSharingConfig = this._resourceSharingConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeQuotaConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeQuotaResources.internalValue = undefined;
            this._preemptTeamTasks = undefined;
            this._resourceSharingConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeQuotaResources.internalValue = value.computeQuotaResources;
            this._preemptTeamTasks = value.preemptTeamTasks;
            this._resourceSharingConfig.internalValue = value.resourceSharingConfig;
        }
    }

    // compute_quota_resources - computed: true, optional: true, required: false
    private _computeQuotaResources = new ComputeQuotaResourcesPropertyList(this, "compute_quota_resources", false);
    public get computeQuotaResources() {
        return this._computeQuotaResources;
    }
    public putComputeQuotaResources(value: ComputeQuotaResourcesProperty[] | cdktn.IResolvable) {
        this._computeQuotaResources.internalValue = value;
    }
    public resetComputeQuotaResources() {
        this._computeQuotaResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeQuotaResourcesInput() {
        return this._computeQuotaResources.internalValue;
    }

    // preempt_team_tasks - computed: true, optional: true, required: false
    private _preemptTeamTasks?: string; 
    public get preemptTeamTasks() {
        return this.getStringAttribute('preempt_team_tasks');
    }
    public set preemptTeamTasks(value: string) {
        this._preemptTeamTasks = value;
    }
    public resetPreemptTeamTasks() {
        this._preemptTeamTasks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preemptTeamTasksInput() {
        return this._preemptTeamTasks;
    }

    // resource_sharing_config - computed: true, optional: true, required: false
    private _resourceSharingConfig = new ResourceSharingConfigPropertyOutputReference(this, "resource_sharing_config");
    public get resourceSharingConfig() {
        return this._resourceSharingConfig;
    }
    public putResourceSharingConfig(value: ResourceSharingConfigProperty) {
        this._resourceSharingConfig.internalValue = value;
    }
    public resetResourceSharingConfig() {
        this._resourceSharingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSharingConfigInput() {
        return this._resourceSharingConfig.internalValue;
    }
}
export interface ComputeQuotaTargetProperty {
    /**
    * Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#fair_share_weight CcComputeQuota#fair_share_weight}
    */
    readonly fairShareWeight?: number;
    /**
    * The name of the team. Materialized as Kubernetes namespace 'hyperpod-ns-<TeamName>' on the EKS cluster, so the value must satisfy RFC 1123 namespace constraints. Reassignment is not supported (createOnly).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#team_name CcComputeQuota#team_name}
    */
    readonly teamName: string;
}
export class ComputeQuotaTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeQuotaTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fairShareWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.fairShareWeight = this._fairShareWeight;
        }
        if (this._teamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.teamName = this._teamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeQuotaTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fairShareWeight = undefined;
            this._teamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fairShareWeight = value.fairShareWeight;
            this._teamName = value.teamName;
        }
    }

    // fair_share_weight - computed: true, optional: true, required: false
    private _fairShareWeight?: number; 
    public get fairShareWeight() {
        return this.getNumberAttribute('fair_share_weight');
    }
    public set fairShareWeight(value: number) {
        this._fairShareWeight = value;
    }
    public resetFairShareWeight() {
        this._fairShareWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fairShareWeightInput() {
        return this._fairShareWeight;
    }

    // team_name - computed: false, optional: false, required: true
    private _teamName?: string; 
    public get teamName() {
        return this.getStringAttribute('team_name');
    }
    public set teamName(value: string) {
        this._teamName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamNameInput() {
        return this._teamName;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#key CcComputeQuota#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#value CcComputeQuota#value}
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
}
