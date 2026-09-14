// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLifecyclePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags CcLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktn.IResolvable;
    /**
    * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_interval CcLifecyclePolicy#create_interval}
    */
    readonly createInterval?: number;
    /**
    * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_targets CcLifecyclePolicy#cross_region_copy_targets}
    */
    readonly crossRegionCopyTargets?: CcLifecyclePolicy.CrossRegionCopyTargetProperty[] | cdktn.IResolvable;
    /**
    * **[Default policies only]** Specify the type of default policy to create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#default_policy CcLifecyclePolicy#default_policy}
    */
    readonly defaultPolicy?: string;
    /**
    * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#description CcLifecyclePolicy#description}
    */
    readonly description?: string;
    /**
    * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclusions CcLifecyclePolicy#exclusions}
    */
    readonly exclusions?: CcLifecyclePolicy.ExclusionsProperty;
    /**
    * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_role_arn CcLifecyclePolicy#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#extend_deletion CcLifecyclePolicy#extend_deletion}
    */
    readonly extendDeletion?: boolean | cdktn.IResolvable;
    /**
    * The configuration details of the lifecycle policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_details CcLifecyclePolicy#policy_details}
    */
    readonly policyDetails?: CcLifecyclePolicy.PolicyDetailsProperty;
    /**
    * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_interval CcLifecyclePolicy#retain_interval}
    */
    readonly retainInterval?: number;
    /**
    * The activation state of the lifecycle policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#state CcLifecyclePolicy#state}
    */
    readonly state?: string;
    /**
    * The tags to apply to the lifecycle policy during creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#tags CcLifecyclePolicy#tags}
    */
    readonly tags?: CcLifecyclePolicy.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy}
*/
export class CcLifecyclePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dlm_lifecycle_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLifecyclePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLifecyclePolicy to import
    * @param importFromId The id of the existing CcLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLifecyclePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dlm_lifecycle_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLifecyclePolicyProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLifecyclePolicyProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_dlm_lifecycle_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.101.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._copyTags = config.copyTags;
        this._createInterval = config.createInterval;
        this._crossRegionCopyTargets.internalValue = config.crossRegionCopyTargets;
        this._defaultPolicy = config.defaultPolicy;
        this._description = config.description;
        this._exclusions.internalValue = config.exclusions;
        this._executionRoleArn = config.executionRoleArn;
        this._extendDeletion = config.extendDeletion;
        this._policyDetails.internalValue = config.policyDetails;
        this._retainInterval = config.retainInterval;
        this._state = config.state;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // copy_tags - computed: true, optional: true, required: false
    private _copyTags?: boolean | cdktn.IResolvable; 
    public get copyTags() {
        return this.getBooleanAttribute('copy_tags');
    }
    public set copyTags(value: boolean | cdktn.IResolvable) {
        this._copyTags = value;
    }
    public resetCopyTags() {
        this._copyTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsInput() {
        return this._copyTags;
    }

    // create_interval - computed: true, optional: true, required: false
    private _createInterval?: number; 
    public get createInterval() {
        return this.getNumberAttribute('create_interval');
    }
    public set createInterval(value: number) {
        this._createInterval = value;
    }
    public resetCreateInterval() {
        this._createInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createIntervalInput() {
        return this._createInterval;
    }

    // cross_region_copy_targets - computed: true, optional: true, required: false
    private _crossRegionCopyTargets = new CcLifecyclePolicy.CrossRegionCopyTargetPropertyList(this, "cross_region_copy_targets", false);
    public get crossRegionCopyTargets() {
        return this._crossRegionCopyTargets;
    }
    public putCrossRegionCopyTargets(value: CcLifecyclePolicy.CrossRegionCopyTargetProperty[] | cdktn.IResolvable) {
        this._crossRegionCopyTargets.internalValue = value;
    }
    public resetCrossRegionCopyTargets() {
        this._crossRegionCopyTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossRegionCopyTargetsInput() {
        return this._crossRegionCopyTargets.internalValue;
    }

    // default_policy - computed: true, optional: true, required: false
    private _defaultPolicy?: string; 
    public get defaultPolicy() {
        return this.getStringAttribute('default_policy');
    }
    public set defaultPolicy(value: string) {
        this._defaultPolicy = value;
    }
    public resetDefaultPolicy() {
        this._defaultPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultPolicyInput() {
        return this._defaultPolicy;
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

    // exclusions - computed: true, optional: true, required: false
    private _exclusions = new CcLifecyclePolicy.ExclusionsPropertyOutputReference(this, "exclusions");
    public get exclusions() {
        return this._exclusions;
    }
    public putExclusions(value: CcLifecyclePolicy.ExclusionsProperty) {
        this._exclusions.internalValue = value;
    }
    public resetExclusions() {
        this._exclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions.internalValue;
    }

    // execution_role_arn - computed: true, optional: true, required: false
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // extend_deletion - computed: true, optional: true, required: false
    private _extendDeletion?: boolean | cdktn.IResolvable; 
    public get extendDeletion() {
        return this.getBooleanAttribute('extend_deletion');
    }
    public set extendDeletion(value: boolean | cdktn.IResolvable) {
        this._extendDeletion = value;
    }
    public resetExtendDeletion() {
        this._extendDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendDeletionInput() {
        return this._extendDeletion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_details - computed: true, optional: true, required: false
    private _policyDetails = new CcLifecyclePolicy.PolicyDetailsPropertyOutputReference(this, "policy_details");
    public get policyDetails() {
        return this._policyDetails;
    }
    public putPolicyDetails(value: CcLifecyclePolicy.PolicyDetailsProperty) {
        this._policyDetails.internalValue = value;
    }
    public resetPolicyDetails() {
        this._policyDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDetailsInput() {
        return this._policyDetails.internalValue;
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // retain_interval - computed: true, optional: true, required: false
    private _retainInterval?: number; 
    public get retainInterval() {
        return this.getNumberAttribute('retain_interval');
    }
    public set retainInterval(value: number) {
        this._retainInterval = value;
    }
    public resetRetainInterval() {
        this._retainInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainIntervalInput() {
        return this._retainInterval;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLifecyclePolicy.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLifecyclePolicy.TagsProperty[] | cdktn.IResolvable) {
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
            copy_tags: cdktn.booleanToTerraform(this._copyTags),
            create_interval: cdktn.numberToTerraform(this._createInterval),
            cross_region_copy_targets: cdktn.listMapper(ccLifecyclePolicyCrossRegionCopyTargetPropertyToTerraform, false)(this._crossRegionCopyTargets.internalValue),
            default_policy: cdktn.stringToTerraform(this._defaultPolicy),
            description: cdktn.stringToTerraform(this._description),
            exclusions: ccLifecyclePolicyExclusionsPropertyToTerraform(this._exclusions.internalValue),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            extend_deletion: cdktn.booleanToTerraform(this._extendDeletion),
            policy_details: ccLifecyclePolicyPolicyDetailsPropertyToTerraform(this._policyDetails.internalValue),
            retain_interval: cdktn.numberToTerraform(this._retainInterval),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.listMapper(ccLifecyclePolicyTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            copy_tags: {
                value: cdktn.booleanToHclTerraform(this._copyTags),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            create_interval: {
                value: cdktn.numberToHclTerraform(this._createInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cross_region_copy_targets: {
                value: cdktn.listMapperHcl(ccLifecyclePolicyCrossRegionCopyTargetPropertyToHclTerraform, false)(this._crossRegionCopyTargets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLifecyclePolicy.CrossRegionCopyTargetPropertyList",
            },
            default_policy: {
                value: cdktn.stringToHclTerraform(this._defaultPolicy),
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
            exclusions: {
                value: ccLifecyclePolicyExclusionsPropertyToHclTerraform(this._exclusions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLifecyclePolicy.ExclusionsProperty",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extend_deletion: {
                value: cdktn.booleanToHclTerraform(this._extendDeletion),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            policy_details: {
                value: ccLifecyclePolicyPolicyDetailsPropertyToHclTerraform(this._policyDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLifecyclePolicy.PolicyDetailsProperty",
            },
            retain_interval: {
                value: cdktn.numberToHclTerraform(this._retainInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLifecyclePolicyTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLifecyclePolicy.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLifecyclePolicyCrossRegionCopyTargetPropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_region: cdktn.stringToTerraform(struct!.targetRegion),
    }
}


export function ccLifecyclePolicyCrossRegionCopyTargetPropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_region: {
            value: cdktn.stringToHclTerraform(struct!.targetRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyTagPropertyToTerraform(struct?: CcLifecyclePolicy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyTagPropertyToHclTerraform(struct?: CcLifecyclePolicy.TagProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicyExclusionsPropertyToTerraform(struct?: CcLifecyclePolicy.ExclusionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude_boot_volumes: cdktn.booleanToTerraform(struct!.excludeBootVolumes),
        exclude_tags: cdktn.listMapper(ccLifecyclePolicyTagPropertyToTerraform, false)(struct!.excludeTags),
        exclude_volume_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVolumeTypes),
    }
}


export function ccLifecyclePolicyExclusionsPropertyToHclTerraform(struct?: CcLifecyclePolicy.ExclusionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude_boot_volumes: {
            value: cdktn.booleanToHclTerraform(struct!.excludeBootVolumes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_tags: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyTagPropertyToHclTerraform, false)(struct!.excludeTags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
        exclude_volume_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyEncryptionConfigurationPropertyToTerraform(struct?: CcLifecyclePolicy.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    }
}


export function ccLifecyclePolicyEncryptionConfigurationPropertyToHclTerraform(struct?: CcLifecyclePolicy.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cmk_arn: {
            value: cdktn.stringToHclTerraform(struct!.cmkArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyCrossRegionCopyRetainRulePropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyCrossRegionCopyRetainRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyCrossRegionCopyActionPropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_configuration: ccLifecyclePolicyEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        retain_rule: ccLifecyclePolicyCrossRegionCopyRetainRulePropertyToTerraform(struct!.retainRule),
        target: cdktn.stringToTerraform(struct!.target),
    }
}


export function ccLifecyclePolicyCrossRegionCopyActionPropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_configuration: {
            value: ccLifecyclePolicyEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionConfigurationProperty",
        },
        retain_rule: {
            value: ccLifecyclePolicyCrossRegionCopyRetainRulePropertyToHclTerraform(struct!.retainRule),
            isBlock: true,
            type: "struct",
            storageClassType: "CrossRegionCopyRetainRuleProperty",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyActionPropertyToTerraform(struct?: CcLifecyclePolicy.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cross_region_copy: cdktn.listMapper(ccLifecyclePolicyCrossRegionCopyActionPropertyToTerraform, false)(struct!.crossRegionCopy),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccLifecyclePolicyActionPropertyToHclTerraform(struct?: CcLifecyclePolicy.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cross_region_copy: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyCrossRegionCopyActionPropertyToHclTerraform, false)(struct!.crossRegionCopy),
            isBlock: true,
            type: "list",
            storageClassType: "CrossRegionCopyActionPropertyList",
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


export function ccLifecyclePolicyCrossRegionCopyTargetsPropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_region: cdktn.stringToTerraform(struct!.targetRegion),
    }
}


export function ccLifecyclePolicyCrossRegionCopyTargetsPropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_region: {
            value: cdktn.stringToHclTerraform(struct!.targetRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyEventParametersPropertyToTerraform(struct?: CcLifecyclePolicy.EventParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description_regex: cdktn.stringToTerraform(struct!.descriptionRegex),
        event_type: cdktn.stringToTerraform(struct!.eventType),
        snapshot_owner: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.snapshotOwner),
    }
}


export function ccLifecyclePolicyEventParametersPropertyToHclTerraform(struct?: CcLifecyclePolicy.EventParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description_regex: {
            value: cdktn.stringToHclTerraform(struct!.descriptionRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_type: {
            value: cdktn.stringToHclTerraform(struct!.eventType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_owner: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.snapshotOwner),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyEventSourcePropertyToTerraform(struct?: CcLifecyclePolicy.EventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: ccLifecyclePolicyEventParametersPropertyToTerraform(struct!.parameters),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccLifecyclePolicyEventSourcePropertyToHclTerraform(struct?: CcLifecyclePolicy.EventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: ccLifecyclePolicyEventParametersPropertyToHclTerraform(struct!.parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EventParametersProperty",
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


export function ccLifecyclePolicyExcludeTagsPropertyToTerraform(struct?: CcLifecyclePolicy.ExcludeTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyExcludeTagsPropertyToHclTerraform(struct?: CcLifecyclePolicy.ExcludeTagsProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicyPolicyDetailsExclusionsPropertyToTerraform(struct?: CcLifecyclePolicy.PolicyDetailsExclusionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude_boot_volumes: cdktn.booleanToTerraform(struct!.excludeBootVolumes),
        exclude_tags: cdktn.listMapper(ccLifecyclePolicyExcludeTagsPropertyToTerraform, false)(struct!.excludeTags),
        exclude_volume_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVolumeTypes),
    }
}


export function ccLifecyclePolicyPolicyDetailsExclusionsPropertyToHclTerraform(struct?: CcLifecyclePolicy.PolicyDetailsExclusionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude_boot_volumes: {
            value: cdktn.booleanToHclTerraform(struct!.excludeBootVolumes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_tags: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyExcludeTagsPropertyToHclTerraform, false)(struct!.excludeTags),
            isBlock: true,
            type: "list",
            storageClassType: "ExcludeTagsPropertyList",
        },
        exclude_volume_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyExcludeDataVolumeTagsPropertyToTerraform(struct?: CcLifecyclePolicy.ExcludeDataVolumeTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyExcludeDataVolumeTagsPropertyToHclTerraform(struct?: CcLifecyclePolicy.ExcludeDataVolumeTagsProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicyParametersPropertyToTerraform(struct?: CcLifecyclePolicy.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude_boot_volume: cdktn.booleanToTerraform(struct!.excludeBootVolume),
        exclude_data_volume_tags: cdktn.listMapper(ccLifecyclePolicyExcludeDataVolumeTagsPropertyToTerraform, false)(struct!.excludeDataVolumeTags),
        no_reboot: cdktn.booleanToTerraform(struct!.noReboot),
    }
}


export function ccLifecyclePolicyParametersPropertyToHclTerraform(struct?: CcLifecyclePolicy.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude_boot_volume: {
            value: cdktn.booleanToHclTerraform(struct!.excludeBootVolume),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        exclude_data_volume_tags: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyExcludeDataVolumeTagsPropertyToHclTerraform, false)(struct!.excludeDataVolumeTags),
            isBlock: true,
            type: "list",
            storageClassType: "ExcludeDataVolumeTagsPropertyList",
        },
        no_reboot: {
            value: cdktn.booleanToHclTerraform(struct!.noReboot),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyRetentionArchiveTierPropertyToTerraform(struct?: CcLifecyclePolicy.RetentionArchiveTierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyRetentionArchiveTierPropertyToHclTerraform(struct?: CcLifecyclePolicy.RetentionArchiveTierProperty | cdktn.IResolvable): any {
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
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyArchiveRetainRulePropertyToTerraform(struct?: CcLifecyclePolicy.ArchiveRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retention_archive_tier: ccLifecyclePolicyRetentionArchiveTierPropertyToTerraform(struct!.retentionArchiveTier),
    }
}


export function ccLifecyclePolicyArchiveRetainRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.ArchiveRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retention_archive_tier: {
            value: ccLifecyclePolicyRetentionArchiveTierPropertyToHclTerraform(struct!.retentionArchiveTier),
            isBlock: true,
            type: "struct",
            storageClassType: "RetentionArchiveTierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyArchiveRulePropertyToTerraform(struct?: CcLifecyclePolicy.ArchiveRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retain_rule: ccLifecyclePolicyArchiveRetainRulePropertyToTerraform(struct!.retainRule),
    }
}


export function ccLifecyclePolicyArchiveRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.ArchiveRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retain_rule: {
            value: ccLifecyclePolicyArchiveRetainRulePropertyToHclTerraform(struct!.retainRule),
            isBlock: true,
            type: "struct",
            storageClassType: "ArchiveRetainRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyScriptPropertyToTerraform(struct?: CcLifecyclePolicy.ScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execute_operation_on_script_failure: cdktn.booleanToTerraform(struct!.executeOperationOnScriptFailure),
        execution_handler: cdktn.stringToTerraform(struct!.executionHandler),
        execution_handler_service: cdktn.stringToTerraform(struct!.executionHandlerService),
        execution_timeout: cdktn.numberToTerraform(struct!.executionTimeout),
        maximum_retry_count: cdktn.numberToTerraform(struct!.maximumRetryCount),
        stages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stages),
    }
}


export function ccLifecyclePolicyScriptPropertyToHclTerraform(struct?: CcLifecyclePolicy.ScriptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execute_operation_on_script_failure: {
            value: cdktn.booleanToHclTerraform(struct!.executeOperationOnScriptFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        execution_handler: {
            value: cdktn.stringToHclTerraform(struct!.executionHandler),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execution_handler_service: {
            value: cdktn.stringToHclTerraform(struct!.executionHandlerService),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execution_timeout: {
            value: cdktn.numberToHclTerraform(struct!.executionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_retry_count: {
            value: cdktn.numberToHclTerraform(struct!.maximumRetryCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyCreateRulePropertyToTerraform(struct?: CcLifecyclePolicy.CreateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
        location: cdktn.stringToTerraform(struct!.location),
        scripts: cdktn.listMapper(ccLifecyclePolicyScriptPropertyToTerraform, false)(struct!.scripts),
        times: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.times),
    }
}


export function ccLifecyclePolicyCreateRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.CreateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cron_expression: {
            value: cdktn.stringToHclTerraform(struct!.cronExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scripts: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyScriptPropertyToHclTerraform, false)(struct!.scripts),
            isBlock: true,
            type: "list",
            storageClassType: "ScriptPropertyList",
        },
        times: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.times),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyCrossRegionCopyDeprecateRulePropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyDeprecateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyCrossRegionCopyDeprecateRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyDeprecateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyToTerraform(struct?: CcLifecyclePolicy.PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyCrossRegionCopyRulePropertyToTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cmk_arn: cdktn.stringToTerraform(struct!.cmkArn),
        copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
        deprecate_rule: ccLifecyclePolicyCrossRegionCopyDeprecateRulePropertyToTerraform(struct!.deprecateRule),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        retain_rule: ccLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyToTerraform(struct!.retainRule),
        target: cdktn.stringToTerraform(struct!.target),
        target_region: cdktn.stringToTerraform(struct!.targetRegion),
    }
}


export function ccLifecyclePolicyCrossRegionCopyRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.CrossRegionCopyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cmk_arn: {
            value: cdktn.stringToHclTerraform(struct!.cmkArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        copy_tags: {
            value: cdktn.booleanToHclTerraform(struct!.copyTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        deprecate_rule: {
            value: ccLifecyclePolicyCrossRegionCopyDeprecateRulePropertyToHclTerraform(struct!.deprecateRule),
            isBlock: true,
            type: "struct",
            storageClassType: "CrossRegionCopyDeprecateRuleProperty",
        },
        encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        retain_rule: {
            value: ccLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyToHclTerraform(struct!.retainRule),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_region: {
            value: cdktn.stringToHclTerraform(struct!.targetRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyDeprecateRulePropertyToTerraform(struct?: CcLifecyclePolicy.DeprecateRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyDeprecateRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.DeprecateRuleProperty | cdktn.IResolvable): any {
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
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyFastRestoreRulePropertyToTerraform(struct?: CcLifecyclePolicy.FastRestoreRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZoneIds),
        availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
        count: cdktn.numberToTerraform(struct!.count),
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyFastRestoreRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.FastRestoreRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZoneIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        availability_zones: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyRetainRulePropertyToTerraform(struct?: CcLifecyclePolicy.RetainRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        interval: cdktn.numberToTerraform(struct!.interval),
        interval_unit: cdktn.stringToTerraform(struct!.intervalUnit),
    }
}


export function ccLifecyclePolicyRetainRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.RetainRuleProperty | cdktn.IResolvable): any {
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
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.intervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyShareRulePropertyToTerraform(struct?: CcLifecyclePolicy.ShareRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetAccounts),
        unshare_interval: cdktn.numberToTerraform(struct!.unshareInterval),
        unshare_interval_unit: cdktn.stringToTerraform(struct!.unshareIntervalUnit),
    }
}


export function ccLifecyclePolicyShareRulePropertyToHclTerraform(struct?: CcLifecyclePolicy.ShareRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetAccounts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        unshare_interval: {
            value: cdktn.numberToHclTerraform(struct!.unshareInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unshare_interval_unit: {
            value: cdktn.stringToHclTerraform(struct!.unshareIntervalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyTagsToAddPropertyToTerraform(struct?: CcLifecyclePolicy.TagsToAddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyTagsToAddPropertyToHclTerraform(struct?: CcLifecyclePolicy.TagsToAddProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicyVariableTagsPropertyToTerraform(struct?: CcLifecyclePolicy.VariableTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyVariableTagsPropertyToHclTerraform(struct?: CcLifecyclePolicy.VariableTagsProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicySchedulePropertyToTerraform(struct?: CcLifecyclePolicy.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        archive_rule: ccLifecyclePolicyArchiveRulePropertyToTerraform(struct!.archiveRule),
        copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
        create_rule: ccLifecyclePolicyCreateRulePropertyToTerraform(struct!.createRule),
        cross_region_copy_rules: cdktn.listMapper(ccLifecyclePolicyCrossRegionCopyRulePropertyToTerraform, false)(struct!.crossRegionCopyRules),
        deprecate_rule: ccLifecyclePolicyDeprecateRulePropertyToTerraform(struct!.deprecateRule),
        fast_restore_rule: ccLifecyclePolicyFastRestoreRulePropertyToTerraform(struct!.fastRestoreRule),
        name: cdktn.stringToTerraform(struct!.name),
        retain_rule: ccLifecyclePolicyRetainRulePropertyToTerraform(struct!.retainRule),
        share_rules: cdktn.listMapper(ccLifecyclePolicyShareRulePropertyToTerraform, false)(struct!.shareRules),
        tags_to_add: cdktn.listMapper(ccLifecyclePolicyTagsToAddPropertyToTerraform, false)(struct!.tagsToAdd),
        variable_tags: cdktn.listMapper(ccLifecyclePolicyVariableTagsPropertyToTerraform, false)(struct!.variableTags),
    }
}


export function ccLifecyclePolicySchedulePropertyToHclTerraform(struct?: CcLifecyclePolicy.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        archive_rule: {
            value: ccLifecyclePolicyArchiveRulePropertyToHclTerraform(struct!.archiveRule),
            isBlock: true,
            type: "struct",
            storageClassType: "ArchiveRuleProperty",
        },
        copy_tags: {
            value: cdktn.booleanToHclTerraform(struct!.copyTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        create_rule: {
            value: ccLifecyclePolicyCreateRulePropertyToHclTerraform(struct!.createRule),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateRuleProperty",
        },
        cross_region_copy_rules: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyCrossRegionCopyRulePropertyToHclTerraform, false)(struct!.crossRegionCopyRules),
            isBlock: true,
            type: "list",
            storageClassType: "CrossRegionCopyRulePropertyList",
        },
        deprecate_rule: {
            value: ccLifecyclePolicyDeprecateRulePropertyToHclTerraform(struct!.deprecateRule),
            isBlock: true,
            type: "struct",
            storageClassType: "DeprecateRuleProperty",
        },
        fast_restore_rule: {
            value: ccLifecyclePolicyFastRestoreRulePropertyToHclTerraform(struct!.fastRestoreRule),
            isBlock: true,
            type: "struct",
            storageClassType: "FastRestoreRuleProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retain_rule: {
            value: ccLifecyclePolicyRetainRulePropertyToHclTerraform(struct!.retainRule),
            isBlock: true,
            type: "struct",
            storageClassType: "RetainRuleProperty",
        },
        share_rules: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyShareRulePropertyToHclTerraform, false)(struct!.shareRules),
            isBlock: true,
            type: "list",
            storageClassType: "ShareRulePropertyList",
        },
        tags_to_add: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyTagsToAddPropertyToHclTerraform, false)(struct!.tagsToAdd),
            isBlock: true,
            type: "list",
            storageClassType: "TagsToAddPropertyList",
        },
        variable_tags: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyVariableTagsPropertyToHclTerraform, false)(struct!.variableTags),
            isBlock: true,
            type: "list",
            storageClassType: "VariableTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyTargetTagsPropertyToTerraform(struct?: CcLifecyclePolicy.TargetTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyTargetTagsPropertyToHclTerraform(struct?: CcLifecyclePolicy.TargetTagsProperty | cdktn.IResolvable): any {
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


export function ccLifecyclePolicyPolicyDetailsPropertyToTerraform(struct?: CcLifecyclePolicy.PolicyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccLifecyclePolicyActionPropertyToTerraform, false)(struct!.actions),
        copy_tags: cdktn.booleanToTerraform(struct!.copyTags),
        create_interval: cdktn.numberToTerraform(struct!.createInterval),
        cross_region_copy_targets: cdktn.listMapper(ccLifecyclePolicyCrossRegionCopyTargetsPropertyToTerraform, false)(struct!.crossRegionCopyTargets),
        event_source: ccLifecyclePolicyEventSourcePropertyToTerraform(struct!.eventSource),
        exclusions: ccLifecyclePolicyPolicyDetailsExclusionsPropertyToTerraform(struct!.exclusions),
        extend_deletion: cdktn.booleanToTerraform(struct!.extendDeletion),
        parameters: ccLifecyclePolicyParametersPropertyToTerraform(struct!.parameters),
        policy_language: cdktn.stringToTerraform(struct!.policyLanguage),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
        resource_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceLocations),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
        retain_interval: cdktn.numberToTerraform(struct!.retainInterval),
        schedules: cdktn.listMapper(ccLifecyclePolicySchedulePropertyToTerraform, false)(struct!.schedules),
        target_tags: cdktn.listMapper(ccLifecyclePolicyTargetTagsPropertyToTerraform, false)(struct!.targetTags),
    }
}


export function ccLifecyclePolicyPolicyDetailsPropertyToHclTerraform(struct?: CcLifecyclePolicy.PolicyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyActionPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "ActionPropertyList",
        },
        copy_tags: {
            value: cdktn.booleanToHclTerraform(struct!.copyTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        create_interval: {
            value: cdktn.numberToHclTerraform(struct!.createInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cross_region_copy_targets: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyCrossRegionCopyTargetsPropertyToHclTerraform, false)(struct!.crossRegionCopyTargets),
            isBlock: true,
            type: "list",
            storageClassType: "CrossRegionCopyTargetsPropertyList",
        },
        event_source: {
            value: ccLifecyclePolicyEventSourcePropertyToHclTerraform(struct!.eventSource),
            isBlock: true,
            type: "struct",
            storageClassType: "EventSourceProperty",
        },
        exclusions: {
            value: ccLifecyclePolicyPolicyDetailsExclusionsPropertyToHclTerraform(struct!.exclusions),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyDetailsExclusionsProperty",
        },
        extend_deletion: {
            value: cdktn.booleanToHclTerraform(struct!.extendDeletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        parameters: {
            value: ccLifecyclePolicyParametersPropertyToHclTerraform(struct!.parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ParametersProperty",
        },
        policy_language: {
            value: cdktn.stringToHclTerraform(struct!.policyLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_locations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceLocations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        retain_interval: {
            value: cdktn.numberToHclTerraform(struct!.retainInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedules: {
            value: cdktn.listMapperHcl(ccLifecyclePolicySchedulePropertyToHclTerraform, false)(struct!.schedules),
            isBlock: true,
            type: "list",
            storageClassType: "SchedulePropertyList",
        },
        target_tags: {
            value: cdktn.listMapperHcl(ccLifecyclePolicyTargetTagsPropertyToHclTerraform, false)(struct!.targetTags),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLifecyclePolicyTagsPropertyToTerraform(struct?: CcLifecyclePolicy.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLifecyclePolicyTagsPropertyToHclTerraform(struct?: CcLifecyclePolicy.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLifecyclePolicy {
export interface CrossRegionCopyTargetProperty {
    /**
    * The target Region, for example `us-east-1`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region CcLifecyclePolicy#target_region}
    */
    readonly targetRegion?: string;
}
export class CrossRegionCopyTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CrossRegionCopyTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRegion = this._targetRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetRegion = value.targetRegion;
        }
    }

    // target_region - computed: true, optional: true, required: false
    private _targetRegion?: string; 
    public get targetRegion() {
        return this.getStringAttribute('target_region');
    }
    public set targetRegion(value: string) {
        this._targetRegion = value;
    }
    public resetTargetRegion() {
        this._targetRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRegionInput() {
        return this._targetRegion;
    }
}

export class CrossRegionCopyTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : CrossRegionCopyTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): CrossRegionCopyTargetPropertyOutputReference {
        return new CrossRegionCopyTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
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
export interface ExclusionsProperty {
    /**
    * **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes CcLifecyclePolicy#exclude_boot_volumes}
    */
    readonly excludeBootVolumes?: boolean | cdktn.IResolvable;
    /**
    * **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_tags CcLifecyclePolicy#exclude_tags}
    */
    readonly excludeTags?: TagProperty[] | cdktn.IResolvable;
    /**
    * **[Default policies for EBS snapshots only]** Specifies the volume types to exclude. Volumes of the specified types will not be targeted by the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types CcLifecyclePolicy#exclude_volume_types}
    */
    readonly excludeVolumeTypes?: string[];
}
export class ExclusionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExclusionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludeBootVolumes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
        }
        if (this._excludeTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeTags = this._excludeTags?.internalValue;
        }
        if (this._excludeVolumeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExclusionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeBootVolumes = undefined;
            this._excludeTags.internalValue = undefined;
            this._excludeVolumeTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeBootVolumes = value.excludeBootVolumes;
            this._excludeTags.internalValue = value.excludeTags;
            this._excludeVolumeTypes = value.excludeVolumeTypes;
        }
    }

    // exclude_boot_volumes - computed: true, optional: true, required: false
    private _excludeBootVolumes?: boolean | cdktn.IResolvable; 
    public get excludeBootVolumes() {
        return this.getBooleanAttribute('exclude_boot_volumes');
    }
    public set excludeBootVolumes(value: boolean | cdktn.IResolvable) {
        this._excludeBootVolumes = value;
    }
    public resetExcludeBootVolumes() {
        this._excludeBootVolumes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeBootVolumesInput() {
        return this._excludeBootVolumes;
    }

    // exclude_tags - computed: true, optional: true, required: false
    private _excludeTags = new TagPropertyList(this, "exclude_tags", false);
    public get excludeTags() {
        return this._excludeTags;
    }
    public putExcludeTags(value: TagProperty[] | cdktn.IResolvable) {
        this._excludeTags.internalValue = value;
    }
    public resetExcludeTags() {
        this._excludeTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeTagsInput() {
        return this._excludeTags.internalValue;
    }

    // exclude_volume_types - computed: true, optional: true, required: false
    private _excludeVolumeTypes?: string[]; 
    public get excludeVolumeTypes() {
        return this.getListAttribute('exclude_volume_types');
    }
    public set excludeVolumeTypes(value: string[]) {
        this._excludeVolumeTypes = value;
    }
    public resetExcludeVolumeTypes() {
        this._excludeVolumeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeVolumeTypesInput() {
        return this._excludeVolumeTypes;
    }
}
export interface EncryptionConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cmk_arn CcLifecyclePolicy#cmk_arn}
    */
    readonly cmkArn?: string;
    /**
    * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or when encryption by default is not enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encrypted CcLifecyclePolicy#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cmkArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cmkArn = this._cmkArn;
        }
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cmkArn = undefined;
            this._encrypted = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cmkArn = value.cmkArn;
            this._encrypted = value.encrypted;
        }
    }

    // cmk_arn - computed: true, optional: true, required: false
    private _cmkArn?: string; 
    public get cmkArn() {
        return this.getStringAttribute('cmk_arn');
    }
    public set cmkArn(value: string) {
        this._cmkArn = value;
    }
    public resetCmkArn() {
        this._cmkArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmkArnInput() {
        return this._cmkArn;
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktn.IResolvable; 
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    public set encrypted(value: boolean | cdktn.IResolvable) {
        this._encrypted = value;
    }
    public resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
        return this._encrypted;
    }
}
export interface CrossRegionCopyRetainRuleProperty {
    /**
    * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class CrossRegionCopyRetainRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CrossRegionCopyRetainRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyRetainRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface CrossRegionCopyActionProperty {
    /**
    * The encryption settings for the copied snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encryption_configuration CcLifecyclePolicy#encryption_configuration}
    */
    readonly encryptionConfiguration?: EncryptionConfigurationProperty;
    /**
    * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule CcLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: CrossRegionCopyRetainRuleProperty;
    /**
    * The target Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target CcLifecyclePolicy#target}
    */
    readonly target?: string;
}
export class CrossRegionCopyActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CrossRegionCopyActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        if (this._retainRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainRule = this._retainRule?.internalValue;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionConfiguration.internalValue = undefined;
            this._retainRule.internalValue = undefined;
            this._target = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._retainRule.internalValue = value.retainRule;
            this._target = value.target;
        }
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // retain_rule - computed: true, optional: true, required: false
    private _retainRule = new CrossRegionCopyRetainRulePropertyOutputReference(this, "retain_rule");
    public get retainRule() {
        return this._retainRule;
    }
    public putRetainRule(value: CrossRegionCopyRetainRuleProperty) {
        this._retainRule.internalValue = value;
    }
    public resetRetainRule() {
        this._retainRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainRuleInput() {
        return this._retainRule.internalValue;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }
}

export class CrossRegionCopyActionPropertyList extends cdktn.ComplexList {
    public internalValue? : CrossRegionCopyActionProperty[] | cdktn.IResolvable

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
    public get(index: number): CrossRegionCopyActionPropertyOutputReference {
        return new CrossRegionCopyActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ActionProperty {
    /**
    * The rule for copying shared snapshots across Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy CcLifecyclePolicy#cross_region_copy}
    */
    readonly crossRegionCopy?: CrossRegionCopyActionProperty[] | cdktn.IResolvable;
    /**
    * A descriptive name for the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#name CcLifecyclePolicy#name}
    */
    readonly name?: string;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crossRegionCopy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossRegionCopy = this._crossRegionCopy?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crossRegionCopy.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crossRegionCopy.internalValue = value.crossRegionCopy;
            this._name = value.name;
        }
    }

    // cross_region_copy - computed: true, optional: true, required: false
    private _crossRegionCopy = new CrossRegionCopyActionPropertyList(this, "cross_region_copy", false);
    public get crossRegionCopy() {
        return this._crossRegionCopy;
    }
    public putCrossRegionCopy(value: CrossRegionCopyActionProperty[] | cdktn.IResolvable) {
        this._crossRegionCopy.internalValue = value;
    }
    public resetCrossRegionCopy() {
        this._crossRegionCopy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossRegionCopyInput() {
        return this._crossRegionCopy.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CrossRegionCopyTargetsProperty {
    /**
    * The target Region, for example `us-east-1`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region CcLifecyclePolicy#target_region}
    */
    readonly targetRegion?: string;
}
export class CrossRegionCopyTargetsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CrossRegionCopyTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRegion = this._targetRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetRegion = value.targetRegion;
        }
    }

    // target_region - computed: true, optional: true, required: false
    private _targetRegion?: string; 
    public get targetRegion() {
        return this.getStringAttribute('target_region');
    }
    public set targetRegion(value: string) {
        this._targetRegion = value;
    }
    public resetTargetRegion() {
        this._targetRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRegionInput() {
        return this._targetRegion;
    }
}

export class CrossRegionCopyTargetsPropertyList extends cdktn.ComplexList {
    public internalValue? : CrossRegionCopyTargetsProperty[] | cdktn.IResolvable

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
    public get(index: number): CrossRegionCopyTargetsPropertyOutputReference {
        return new CrossRegionCopyTargetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventParametersProperty {
    /**
    * The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#description_regex CcLifecyclePolicy#description_regex}
    */
    readonly descriptionRegex?: string;
    /**
    * The type of event. Currently, only snapshot sharing events are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#event_type CcLifecyclePolicy#event_type}
    */
    readonly eventType?: string;
    /**
    * The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#snapshot_owner CcLifecyclePolicy#snapshot_owner}
    */
    readonly snapshotOwner?: string[];
}
export class EventParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._descriptionRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.descriptionRegex = this._descriptionRegex;
        }
        if (this._eventType !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventType = this._eventType;
        }
        if (this._snapshotOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotOwner = this._snapshotOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._descriptionRegex = undefined;
            this._eventType = undefined;
            this._snapshotOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._descriptionRegex = value.descriptionRegex;
            this._eventType = value.eventType;
            this._snapshotOwner = value.snapshotOwner;
        }
    }

    // description_regex - computed: true, optional: true, required: false
    private _descriptionRegex?: string; 
    public get descriptionRegex() {
        return this.getStringAttribute('description_regex');
    }
    public set descriptionRegex(value: string) {
        this._descriptionRegex = value;
    }
    public resetDescriptionRegex() {
        this._descriptionRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionRegexInput() {
        return this._descriptionRegex;
    }

    // event_type - computed: true, optional: true, required: false
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    public resetEventType() {
        this._eventType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
    }

    // snapshot_owner - computed: true, optional: true, required: false
    private _snapshotOwner?: string[]; 
    public get snapshotOwner() {
        return this.getListAttribute('snapshot_owner');
    }
    public set snapshotOwner(value: string[]) {
        this._snapshotOwner = value;
    }
    public resetSnapshotOwner() {
        this._snapshotOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotOwnerInput() {
        return this._snapshotOwner;
    }
}
export interface EventSourceProperty {
    /**
    * Information about the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#parameters CcLifecyclePolicy#parameters}
    */
    readonly parameters?: EventParametersProperty;
    /**
    * The source of the event. Currently only managed Amazon EventBridge events are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#type CcLifecyclePolicy#type}
    */
    readonly type?: string;
}
export class EventSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters.internalValue = value.parameters;
            this._type = value.type;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new EventParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: EventParametersProperty) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
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
export interface ExcludeTagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
    */
    readonly value?: string;
}
export class ExcludeTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExcludeTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ExcludeTagsProperty | cdktn.IResolvable | undefined) {
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

export class ExcludeTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : ExcludeTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): ExcludeTagsPropertyOutputReference {
        return new ExcludeTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PolicyDetailsExclusionsProperty {
    /**
    * **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes CcLifecyclePolicy#exclude_boot_volumes}
    */
    readonly excludeBootVolumes?: boolean | cdktn.IResolvable;
    /**
    * **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_tags CcLifecyclePolicy#exclude_tags}
    */
    readonly excludeTags?: ExcludeTagsProperty[] | cdktn.IResolvable;
    /**
    * **[Default policies for EBS snapshots only]** Specifies the volume types to exclude. Volumes of the specified types will not be targeted by the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types CcLifecyclePolicy#exclude_volume_types}
    */
    readonly excludeVolumeTypes?: string[];
}
export class PolicyDetailsExclusionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyDetailsExclusionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludeBootVolumes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
        }
        if (this._excludeTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeTags = this._excludeTags?.internalValue;
        }
        if (this._excludeVolumeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyDetailsExclusionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeBootVolumes = undefined;
            this._excludeTags.internalValue = undefined;
            this._excludeVolumeTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeBootVolumes = value.excludeBootVolumes;
            this._excludeTags.internalValue = value.excludeTags;
            this._excludeVolumeTypes = value.excludeVolumeTypes;
        }
    }

    // exclude_boot_volumes - computed: true, optional: true, required: false
    private _excludeBootVolumes?: boolean | cdktn.IResolvable; 
    public get excludeBootVolumes() {
        return this.getBooleanAttribute('exclude_boot_volumes');
    }
    public set excludeBootVolumes(value: boolean | cdktn.IResolvable) {
        this._excludeBootVolumes = value;
    }
    public resetExcludeBootVolumes() {
        this._excludeBootVolumes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeBootVolumesInput() {
        return this._excludeBootVolumes;
    }

    // exclude_tags - computed: true, optional: true, required: false
    private _excludeTags = new ExcludeTagsPropertyList(this, "exclude_tags", false);
    public get excludeTags() {
        return this._excludeTags;
    }
    public putExcludeTags(value: ExcludeTagsProperty[] | cdktn.IResolvable) {
        this._excludeTags.internalValue = value;
    }
    public resetExcludeTags() {
        this._excludeTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeTagsInput() {
        return this._excludeTags.internalValue;
    }

    // exclude_volume_types - computed: true, optional: true, required: false
    private _excludeVolumeTypes?: string[]; 
    public get excludeVolumeTypes() {
        return this.getListAttribute('exclude_volume_types');
    }
    public set excludeVolumeTypes(value: string[]) {
        this._excludeVolumeTypes = value;
    }
    public resetExcludeVolumeTypes() {
        this._excludeVolumeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeVolumeTypesInput() {
        return this._excludeVolumeTypes;
    }
}
export interface ExcludeDataVolumeTagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
    */
    readonly value?: string;
}
export class ExcludeDataVolumeTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExcludeDataVolumeTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ExcludeDataVolumeTagsProperty | cdktn.IResolvable | undefined) {
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

export class ExcludeDataVolumeTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : ExcludeDataVolumeTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): ExcludeDataVolumeTagsPropertyOutputReference {
        return new ExcludeDataVolumeTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParametersProperty {
    /**
    * **[Custom snapshot policies that target instances only]** Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is `false`. If you specify `true`, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volume CcLifecyclePolicy#exclude_boot_volume}
    */
    readonly excludeBootVolume?: boolean | cdktn.IResolvable;
    /**
    * **[Custom snapshot policies that target instances only]** The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets. If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclude_data_volume_tags CcLifecyclePolicy#exclude_data_volume_tags}
    */
    readonly excludeDataVolumeTags?: ExcludeDataVolumeTagsProperty[] | cdktn.IResolvable;
    /**
    * **[Custom AMI policies only]** Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs.
    * 
    * The default is `true` (instances are not rebooted).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#no_reboot CcLifecyclePolicy#no_reboot}
    */
    readonly noReboot?: boolean | cdktn.IResolvable;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludeBootVolume !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeBootVolume = this._excludeBootVolume;
        }
        if (this._excludeDataVolumeTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeDataVolumeTags = this._excludeDataVolumeTags?.internalValue;
        }
        if (this._noReboot !== undefined) {
            hasAnyValues = true;
            internalValueResult.noReboot = this._noReboot;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeBootVolume = undefined;
            this._excludeDataVolumeTags.internalValue = undefined;
            this._noReboot = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeBootVolume = value.excludeBootVolume;
            this._excludeDataVolumeTags.internalValue = value.excludeDataVolumeTags;
            this._noReboot = value.noReboot;
        }
    }

    // exclude_boot_volume - computed: true, optional: true, required: false
    private _excludeBootVolume?: boolean | cdktn.IResolvable; 
    public get excludeBootVolume() {
        return this.getBooleanAttribute('exclude_boot_volume');
    }
    public set excludeBootVolume(value: boolean | cdktn.IResolvable) {
        this._excludeBootVolume = value;
    }
    public resetExcludeBootVolume() {
        this._excludeBootVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeBootVolumeInput() {
        return this._excludeBootVolume;
    }

    // exclude_data_volume_tags - computed: true, optional: true, required: false
    private _excludeDataVolumeTags = new ExcludeDataVolumeTagsPropertyList(this, "exclude_data_volume_tags", false);
    public get excludeDataVolumeTags() {
        return this._excludeDataVolumeTags;
    }
    public putExcludeDataVolumeTags(value: ExcludeDataVolumeTagsProperty[] | cdktn.IResolvable) {
        this._excludeDataVolumeTags.internalValue = value;
    }
    public resetExcludeDataVolumeTags() {
        this._excludeDataVolumeTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeDataVolumeTagsInput() {
        return this._excludeDataVolumeTags.internalValue;
    }

    // no_reboot - computed: true, optional: true, required: false
    private _noReboot?: boolean | cdktn.IResolvable; 
    public get noReboot() {
        return this.getBooleanAttribute('no_reboot');
    }
    public set noReboot(value: boolean | cdktn.IResolvable) {
        this._noReboot = value;
    }
    public resetNoReboot() {
        this._noReboot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noRebootInput() {
        return this._noReboot;
    }
}
export interface RetentionArchiveTierProperty {
    /**
    * The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count CcLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time in which to measure the **Interval**. For example, to retain snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class RetentionArchiveTierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionArchiveTierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionArchiveTierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
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

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface ArchiveRetainRuleProperty {
    /**
    * Information about retention period in the Amazon EBS Snapshots Archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retention_archive_tier CcLifecyclePolicy#retention_archive_tier}
    */
    readonly retentionArchiveTier?: RetentionArchiveTierProperty;
}
export class ArchiveRetainRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArchiveRetainRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retentionArchiveTier?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionArchiveTier = this._retentionArchiveTier?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchiveRetainRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retentionArchiveTier.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retentionArchiveTier.internalValue = value.retentionArchiveTier;
        }
    }

    // retention_archive_tier - computed: true, optional: true, required: false
    private _retentionArchiveTier = new RetentionArchiveTierPropertyOutputReference(this, "retention_archive_tier");
    public get retentionArchiveTier() {
        return this._retentionArchiveTier;
    }
    public putRetentionArchiveTier(value: RetentionArchiveTierProperty) {
        this._retentionArchiveTier.internalValue = value;
    }
    public resetRetentionArchiveTier() {
        this._retentionArchiveTier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionArchiveTierInput() {
        return this._retentionArchiveTier.internalValue;
    }
}
export interface ArchiveRuleProperty {
    /**
    * Information about the retention period for the snapshot archiving rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule CcLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: ArchiveRetainRuleProperty;
}
export class ArchiveRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ArchiveRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retainRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainRule = this._retainRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchiveRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retainRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retainRule.internalValue = value.retainRule;
        }
    }

    // retain_rule - computed: true, optional: true, required: false
    private _retainRule = new ArchiveRetainRulePropertyOutputReference(this, "retain_rule");
    public get retainRule() {
        return this._retainRule;
    }
    public putRetainRule(value: ArchiveRetainRuleProperty) {
        this._retainRule.internalValue = value;
    }
    public resetRetainRule() {
        this._retainRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainRuleInput() {
        return this._retainRule.internalValue;
    }
}
export interface ScriptProperty {
    /**
    * Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the pre script fails.
    * 
    * - To default to crash consistent snapshot if the pre script fails, specify `true`.
    * - To skip the instance for snapshot creation if the pre script fails, specify `false`.
    * 
    * This parameter is supported only if you run a pre script. If you run a post script only, omit this parameter.
    * 
    * Default: `true`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execute_operation_on_script_failure CcLifecyclePolicy#execute_operation_on_script_failure}
    */
    readonly executeOperationOnScriptFailure?: boolean | cdktn.IResolvable;
    /**
    * The SSM document that includes the pre and/or post scripts to run.
    * 
    * If you are automating VSS backups, specify `AWS_VSS_BACKUP`. In this case, Amazon Data Lifecycle Manager automatically uses the `AWSEC2-CreateVssSnapshot` SSM document.
    * 
    * If you are using a custom SSM document that you own, specify either the name or ARN of the SSM document. If you are using a custom SSM document that is shared with you, specify the ARN of the SSM document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_handler CcLifecyclePolicy#execution_handler}
    */
    readonly executionHandler?: string;
    /**
    * Indicates the service used to execute the pre and/or post scripts.
    * 
    * Default: `AWS_SYSTEMS_MANAGER`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_handler_service CcLifecyclePolicy#execution_handler_service}
    */
    readonly executionHandlerService?: string;
    /**
    * Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script run attempt if it has not completed. If a script does not complete within its timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre and post scripts individually.
    * 
    * Default: 10
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#execution_timeout CcLifecyclePolicy#execution_timeout}
    */
    readonly executionTimeout?: number;
    /**
    * Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.
    * 
    * If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation process, including running the pre and post scripts.
    * 
    * If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this case, the pre script will have completed and the snapshot might have been created.
    * 
    * If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify `0`.
    * 
    * Default: 0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#maximum_retry_count CcLifecyclePolicy#maximum_retry_count}
    */
    readonly maximumRetryCount?: number;
    /**
    * Indicate which scripts Amazon Data Lifecycle Manager should run on target instances. Pre scripts run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager initiates snapshot creation.
    * 
    * - To run a pre script only, specify `PRE`.
    * - To run a post script only, specify `POST`.
    * - To run both pre and post scripts, specify both `PRE` and `POST`.
    * 
    * Default: PRE and POST
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#stages CcLifecyclePolicy#stages}
    */
    readonly stages?: string[];
}
export class ScriptPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScriptProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executeOperationOnScriptFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.executeOperationOnScriptFailure = this._executeOperationOnScriptFailure;
        }
        if (this._executionHandler !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionHandler = this._executionHandler;
        }
        if (this._executionHandlerService !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionHandlerService = this._executionHandlerService;
        }
        if (this._executionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionTimeout = this._executionTimeout;
        }
        if (this._maximumRetryCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRetryCount = this._maximumRetryCount;
        }
        if (this._stages !== undefined) {
            hasAnyValues = true;
            internalValueResult.stages = this._stages;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScriptProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executeOperationOnScriptFailure = undefined;
            this._executionHandler = undefined;
            this._executionHandlerService = undefined;
            this._executionTimeout = undefined;
            this._maximumRetryCount = undefined;
            this._stages = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executeOperationOnScriptFailure = value.executeOperationOnScriptFailure;
            this._executionHandler = value.executionHandler;
            this._executionHandlerService = value.executionHandlerService;
            this._executionTimeout = value.executionTimeout;
            this._maximumRetryCount = value.maximumRetryCount;
            this._stages = value.stages;
        }
    }

    // execute_operation_on_script_failure - computed: true, optional: true, required: false
    private _executeOperationOnScriptFailure?: boolean | cdktn.IResolvable; 
    public get executeOperationOnScriptFailure() {
        return this.getBooleanAttribute('execute_operation_on_script_failure');
    }
    public set executeOperationOnScriptFailure(value: boolean | cdktn.IResolvable) {
        this._executeOperationOnScriptFailure = value;
    }
    public resetExecuteOperationOnScriptFailure() {
        this._executeOperationOnScriptFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executeOperationOnScriptFailureInput() {
        return this._executeOperationOnScriptFailure;
    }

    // execution_handler - computed: true, optional: true, required: false
    private _executionHandler?: string; 
    public get executionHandler() {
        return this.getStringAttribute('execution_handler');
    }
    public set executionHandler(value: string) {
        this._executionHandler = value;
    }
    public resetExecutionHandler() {
        this._executionHandler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionHandlerInput() {
        return this._executionHandler;
    }

    // execution_handler_service - computed: true, optional: true, required: false
    private _executionHandlerService?: string; 
    public get executionHandlerService() {
        return this.getStringAttribute('execution_handler_service');
    }
    public set executionHandlerService(value: string) {
        this._executionHandlerService = value;
    }
    public resetExecutionHandlerService() {
        this._executionHandlerService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionHandlerServiceInput() {
        return this._executionHandlerService;
    }

    // execution_timeout - computed: true, optional: true, required: false
    private _executionTimeout?: number; 
    public get executionTimeout() {
        return this.getNumberAttribute('execution_timeout');
    }
    public set executionTimeout(value: number) {
        this._executionTimeout = value;
    }
    public resetExecutionTimeout() {
        this._executionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionTimeoutInput() {
        return this._executionTimeout;
    }

    // maximum_retry_count - computed: true, optional: true, required: false
    private _maximumRetryCount?: number; 
    public get maximumRetryCount() {
        return this.getNumberAttribute('maximum_retry_count');
    }
    public set maximumRetryCount(value: number) {
        this._maximumRetryCount = value;
    }
    public resetMaximumRetryCount() {
        this._maximumRetryCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryCountInput() {
        return this._maximumRetryCount;
    }

    // stages - computed: true, optional: true, required: false
    private _stages?: string[]; 
    public get stages() {
        return this.getListAttribute('stages');
    }
    public set stages(value: string[]) {
        this._stages = value;
    }
    public resetStages() {
        this._stages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stagesInput() {
        return this._stages;
    }
}

export class ScriptPropertyList extends cdktn.ComplexList {
    public internalValue? : ScriptProperty[] | cdktn.IResolvable

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
    public get(index: number): ScriptPropertyOutputReference {
        return new ScriptPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CreateRuleProperty {
    /**
    * The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cron_expression CcLifecyclePolicy#cron_expression}
    */
    readonly cronExpression?: string;
    /**
    * The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The interval unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
    /**
    * **[Custom snapshot policies only]** Specifies the destination for snapshots created by the policy. The allowed destinations depend on the location of the targeted resources.
    * 
    * - If the policy targets resources in a Region, then you must create snapshots in the same Region as the source resource.
    * - If the policy targets resources in a Local Zone, you can create snapshots in the same Local Zone or in its parent Region.
    * - If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost or in its parent Region.
    * 
    * Default: `CLOUD`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#location CcLifecyclePolicy#location}
    */
    readonly location?: string;
    /**
    * **[Custom snapshot policies that target instances only]** Specifies pre and/or post scripts for a snapshot lifecycle policy that targets instances. This is useful for creating application-consistent snapshots, or for performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#scripts CcLifecyclePolicy#scripts}
    */
    readonly scripts?: ScriptProperty[] | cdktn.IResolvable;
    /**
    * The time, in UTC, to start the operation. The supported format is hh:mm.
    * 
    * The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#times CcLifecyclePolicy#times}
    */
    readonly times?: string[];
}
export class CreateRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cronExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.cronExpression = this._cronExpression;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._scripts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scripts = this._scripts?.internalValue;
        }
        if (this._times !== undefined) {
            hasAnyValues = true;
            internalValueResult.times = this._times;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cronExpression = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
            this._location = undefined;
            this._scripts.internalValue = undefined;
            this._times = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cronExpression = value.cronExpression;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
            this._location = value.location;
            this._scripts.internalValue = value.scripts;
            this._times = value.times;
        }
    }

    // cron_expression - computed: true, optional: true, required: false
    private _cronExpression?: string; 
    public get cronExpression() {
        return this.getStringAttribute('cron_expression');
    }
    public set cronExpression(value: string) {
        this._cronExpression = value;
    }
    public resetCronExpression() {
        this._cronExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cronExpressionInput() {
        return this._cronExpression;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
    }

    // scripts - computed: true, optional: true, required: false
    private _scripts = new ScriptPropertyList(this, "scripts", false);
    public get scripts() {
        return this._scripts;
    }
    public putScripts(value: ScriptProperty[] | cdktn.IResolvable) {
        this._scripts.internalValue = value;
    }
    public resetScripts() {
        this._scripts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scriptsInput() {
        return this._scripts.internalValue;
    }

    // times - computed: true, optional: true, required: false
    private _times?: string[]; 
    public get times() {
        return this.getListAttribute('times');
    }
    public set times(value: string[]) {
        this._times = value;
    }
    public resetTimes() {
        this._times = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timesInput() {
        return this._times;
    }
}
export interface CrossRegionCopyDeprecateRuleProperty {
    /**
    * The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time in which to measure the **Interval**. For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class CrossRegionCopyDeprecateRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CrossRegionCopyDeprecateRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyDeprecateRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty {
    /**
    * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class PolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface CrossRegionCopyRuleProperty {
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cmk_arn CcLifecyclePolicy#cmk_arn}
    */
    readonly cmkArn?: string;
    /**
    * Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags CcLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktn.IResolvable;
    /**
    * **[Custom AMI policies only]** The AMI deprecation rule for cross-Region AMI copies created by the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#deprecate_rule CcLifecyclePolicy#deprecate_rule}
    */
    readonly deprecateRule?: CrossRegionCopyDeprecateRuleProperty;
    /**
    * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or if encryption by default is not enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#encrypted CcLifecyclePolicy#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule CcLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty;
    /**
    * **[Custom snapshot policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target CcLifecyclePolicy#target}
    */
    readonly target?: string;
    /**
    * **[Custom AMI policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the AMI copies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_region CcLifecyclePolicy#target_region}
    */
    readonly targetRegion?: string;
}
export class CrossRegionCopyRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CrossRegionCopyRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cmkArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cmkArn = this._cmkArn;
        }
        if (this._copyTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTags = this._copyTags;
        }
        if (this._deprecateRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
        }
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._retainRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainRule = this._retainRule?.internalValue;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._targetRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRegion = this._targetRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossRegionCopyRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cmkArn = undefined;
            this._copyTags = undefined;
            this._deprecateRule.internalValue = undefined;
            this._encrypted = undefined;
            this._retainRule.internalValue = undefined;
            this._target = undefined;
            this._targetRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cmkArn = value.cmkArn;
            this._copyTags = value.copyTags;
            this._deprecateRule.internalValue = value.deprecateRule;
            this._encrypted = value.encrypted;
            this._retainRule.internalValue = value.retainRule;
            this._target = value.target;
            this._targetRegion = value.targetRegion;
        }
    }

    // cmk_arn - computed: true, optional: true, required: false
    private _cmkArn?: string; 
    public get cmkArn() {
        return this.getStringAttribute('cmk_arn');
    }
    public set cmkArn(value: string) {
        this._cmkArn = value;
    }
    public resetCmkArn() {
        this._cmkArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmkArnInput() {
        return this._cmkArn;
    }

    // copy_tags - computed: true, optional: true, required: false
    private _copyTags?: boolean | cdktn.IResolvable; 
    public get copyTags() {
        return this.getBooleanAttribute('copy_tags');
    }
    public set copyTags(value: boolean | cdktn.IResolvable) {
        this._copyTags = value;
    }
    public resetCopyTags() {
        this._copyTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsInput() {
        return this._copyTags;
    }

    // deprecate_rule - computed: true, optional: true, required: false
    private _deprecateRule = new CrossRegionCopyDeprecateRulePropertyOutputReference(this, "deprecate_rule");
    public get deprecateRule() {
        return this._deprecateRule;
    }
    public putDeprecateRule(value: CrossRegionCopyDeprecateRuleProperty) {
        this._deprecateRule.internalValue = value;
    }
    public resetDeprecateRule() {
        this._deprecateRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deprecateRuleInput() {
        return this._deprecateRule.internalValue;
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktn.IResolvable; 
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    public set encrypted(value: boolean | cdktn.IResolvable) {
        this._encrypted = value;
    }
    public resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
        return this._encrypted;
    }

    // retain_rule - computed: true, optional: true, required: false
    private _retainRule = new PolicyDetailsSchedulesCrossRegionCopyRulesRetainRulePropertyOutputReference(this, "retain_rule");
    public get retainRule() {
        return this._retainRule;
    }
    public putRetainRule(value: PolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleProperty) {
        this._retainRule.internalValue = value;
    }
    public resetRetainRule() {
        this._retainRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainRuleInput() {
        return this._retainRule.internalValue;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // target_region - computed: true, optional: true, required: false
    private _targetRegion?: string; 
    public get targetRegion() {
        return this.getStringAttribute('target_region');
    }
    public set targetRegion(value: string) {
        this._targetRegion = value;
    }
    public resetTargetRegion() {
        this._targetRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRegionInput() {
        return this._targetRegion;
    }
}

export class CrossRegionCopyRulePropertyList extends cdktn.ComplexList {
    public internalValue? : CrossRegionCopyRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): CrossRegionCopyRulePropertyOutputReference {
        return new CrossRegionCopyRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DeprecateRuleProperty {
    /**
    * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count CcLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time in which to measure the **Interval**.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class DeprecateRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeprecateRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeprecateRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
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

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface FastRestoreRuleProperty {
    /**
    * The Availability Zone IDs in which to enable fast snapshot restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#availability_zone_ids CcLifecyclePolicy#availability_zone_ids}
    */
    readonly availabilityZoneIds?: string[];
    /**
    * The Availability Zones in which to enable fast snapshot restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#availability_zones CcLifecyclePolicy#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * The number of snapshots to be enabled with fast snapshot restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count CcLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time for enabling fast snapshot restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class FastRestoreRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FastRestoreRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneIds = this._availabilityZoneIds;
        }
        if (this._availabilityZones !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZones = this._availabilityZones;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FastRestoreRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneIds = undefined;
            this._availabilityZones = undefined;
            this._count = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneIds = value.availabilityZoneIds;
            this._availabilityZones = value.availabilityZones;
            this._count = value.count;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }

    // availability_zone_ids - computed: true, optional: true, required: false
    private _availabilityZoneIds?: string[]; 
    public get availabilityZoneIds() {
        return this.getListAttribute('availability_zone_ids');
    }
    public set availabilityZoneIds(value: string[]) {
        this._availabilityZoneIds = value;
    }
    public resetAvailabilityZoneIds() {
        this._availabilityZoneIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdsInput() {
        return this._availabilityZoneIds;
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
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

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface RetainRuleProperty {
    /**
    * The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify `3`. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#count CcLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval CcLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#interval_unit CcLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export class RetainRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetainRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetainRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
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

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // interval_unit - computed: true, optional: true, required: false
    private _intervalUnit?: string; 
    public get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    public set intervalUnit(value: string) {
        this._intervalUnit = value;
    }
    public resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalUnitInput() {
        return this._intervalUnit;
    }
}
export interface ShareRuleProperty {
    /**
    * The IDs of the AWS accounts with which to share the snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_accounts CcLifecyclePolicy#target_accounts}
    */
    readonly targetAccounts?: string[];
    /**
    * The period after which snapshots that are shared with other AWS accounts are automatically unshared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#unshare_interval CcLifecyclePolicy#unshare_interval}
    */
    readonly unshareInterval?: number;
    /**
    * The unit of time for the automatic unsharing interval.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#unshare_interval_unit CcLifecyclePolicy#unshare_interval_unit}
    */
    readonly unshareIntervalUnit?: string;
}
export class ShareRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShareRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetAccounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetAccounts = this._targetAccounts;
        }
        if (this._unshareInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.unshareInterval = this._unshareInterval;
        }
        if (this._unshareIntervalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unshareIntervalUnit = this._unshareIntervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShareRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetAccounts = undefined;
            this._unshareInterval = undefined;
            this._unshareIntervalUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetAccounts = value.targetAccounts;
            this._unshareInterval = value.unshareInterval;
            this._unshareIntervalUnit = value.unshareIntervalUnit;
        }
    }

    // target_accounts - computed: true, optional: true, required: false
    private _targetAccounts?: string[]; 
    public get targetAccounts() {
        return this.getListAttribute('target_accounts');
    }
    public set targetAccounts(value: string[]) {
        this._targetAccounts = value;
    }
    public resetTargetAccounts() {
        this._targetAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAccountsInput() {
        return this._targetAccounts;
    }

    // unshare_interval - computed: true, optional: true, required: false
    private _unshareInterval?: number; 
    public get unshareInterval() {
        return this.getNumberAttribute('unshare_interval');
    }
    public set unshareInterval(value: number) {
        this._unshareInterval = value;
    }
    public resetUnshareInterval() {
        this._unshareInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unshareIntervalInput() {
        return this._unshareInterval;
    }

    // unshare_interval_unit - computed: true, optional: true, required: false
    private _unshareIntervalUnit?: string; 
    public get unshareIntervalUnit() {
        return this.getStringAttribute('unshare_interval_unit');
    }
    public set unshareIntervalUnit(value: string) {
        this._unshareIntervalUnit = value;
    }
    public resetUnshareIntervalUnit() {
        this._unshareIntervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unshareIntervalUnitInput() {
        return this._unshareIntervalUnit;
    }
}

export class ShareRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ShareRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ShareRulePropertyOutputReference {
        return new ShareRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsToAddProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
    */
    readonly value?: string;
}
export class TagsToAddPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsToAddProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsToAddProperty | cdktn.IResolvable | undefined) {
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

export class TagsToAddPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsToAddProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsToAddPropertyOutputReference {
        return new TagsToAddPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VariableTagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
    */
    readonly value?: string;
}
export class VariableTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VariableTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VariableTagsProperty | cdktn.IResolvable | undefined) {
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

export class VariableTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : VariableTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): VariableTagsPropertyOutputReference {
        return new VariableTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScheduleProperty {
    /**
    * **[Custom snapshot policies that target volumes only]** The snapshot archiving rule for the schedule. When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#archive_rule CcLifecyclePolicy#archive_rule}
    */
    readonly archiveRule?: ArchiveRuleProperty;
    /**
    * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags CcLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktn.IResolvable;
    /**
    * The creation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_rule CcLifecyclePolicy#create_rule}
    */
    readonly createRule?: CreateRuleProperty;
    /**
    * Specifies a rule for copying snapshots or AMIs across Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_rules CcLifecyclePolicy#cross_region_copy_rules}
    */
    readonly crossRegionCopyRules?: CrossRegionCopyRuleProperty[] | cdktn.IResolvable;
    /**
    * **[Custom AMI policies only]** The AMI deprecation rule for the schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#deprecate_rule CcLifecyclePolicy#deprecate_rule}
    */
    readonly deprecateRule?: DeprecateRuleProperty;
    /**
    * **[Custom snapshot policies only]** The rule for enabling fast snapshot restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#fast_restore_rule CcLifecyclePolicy#fast_restore_rule}
    */
    readonly fastRestoreRule?: FastRestoreRuleProperty;
    /**
    * The name of the schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#name CcLifecyclePolicy#name}
    */
    readonly name?: string;
    /**
    * The retention rule for snapshots or AMIs created by the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_rule CcLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: RetainRuleProperty;
    /**
    * **[Custom snapshot policies only]** The rule for sharing snapshots with other AWS accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#share_rules CcLifecyclePolicy#share_rules}
    */
    readonly shareRules?: ShareRuleProperty[] | cdktn.IResolvable;
    /**
    * The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#tags_to_add CcLifecyclePolicy#tags_to_add}
    */
    readonly tagsToAdd?: TagsToAddProperty[] | cdktn.IResolvable;
    /**
    * **[AMI policies and snapshot policies that target instances only]** A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)`. Variable tags are only valid for EBS Snapshot Management -- Instance policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#variable_tags CcLifecyclePolicy#variable_tags}
    */
    readonly variableTags?: VariableTagsProperty[] | cdktn.IResolvable;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._archiveRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.archiveRule = this._archiveRule?.internalValue;
        }
        if (this._copyTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTags = this._copyTags;
        }
        if (this._createRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createRule = this._createRule?.internalValue;
        }
        if (this._crossRegionCopyRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossRegionCopyRules = this._crossRegionCopyRules?.internalValue;
        }
        if (this._deprecateRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
        }
        if (this._fastRestoreRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fastRestoreRule = this._fastRestoreRule?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._retainRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainRule = this._retainRule?.internalValue;
        }
        if (this._shareRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareRules = this._shareRules?.internalValue;
        }
        if (this._tagsToAdd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagsToAdd = this._tagsToAdd?.internalValue;
        }
        if (this._variableTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableTags = this._variableTags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._archiveRule.internalValue = undefined;
            this._copyTags = undefined;
            this._createRule.internalValue = undefined;
            this._crossRegionCopyRules.internalValue = undefined;
            this._deprecateRule.internalValue = undefined;
            this._fastRestoreRule.internalValue = undefined;
            this._name = undefined;
            this._retainRule.internalValue = undefined;
            this._shareRules.internalValue = undefined;
            this._tagsToAdd.internalValue = undefined;
            this._variableTags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._archiveRule.internalValue = value.archiveRule;
            this._copyTags = value.copyTags;
            this._createRule.internalValue = value.createRule;
            this._crossRegionCopyRules.internalValue = value.crossRegionCopyRules;
            this._deprecateRule.internalValue = value.deprecateRule;
            this._fastRestoreRule.internalValue = value.fastRestoreRule;
            this._name = value.name;
            this._retainRule.internalValue = value.retainRule;
            this._shareRules.internalValue = value.shareRules;
            this._tagsToAdd.internalValue = value.tagsToAdd;
            this._variableTags.internalValue = value.variableTags;
        }
    }

    // archive_rule - computed: true, optional: true, required: false
    private _archiveRule = new ArchiveRulePropertyOutputReference(this, "archive_rule");
    public get archiveRule() {
        return this._archiveRule;
    }
    public putArchiveRule(value: ArchiveRuleProperty) {
        this._archiveRule.internalValue = value;
    }
    public resetArchiveRule() {
        this._archiveRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archiveRuleInput() {
        return this._archiveRule.internalValue;
    }

    // copy_tags - computed: true, optional: true, required: false
    private _copyTags?: boolean | cdktn.IResolvable; 
    public get copyTags() {
        return this.getBooleanAttribute('copy_tags');
    }
    public set copyTags(value: boolean | cdktn.IResolvable) {
        this._copyTags = value;
    }
    public resetCopyTags() {
        this._copyTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsInput() {
        return this._copyTags;
    }

    // create_rule - computed: true, optional: true, required: false
    private _createRule = new CreateRulePropertyOutputReference(this, "create_rule");
    public get createRule() {
        return this._createRule;
    }
    public putCreateRule(value: CreateRuleProperty) {
        this._createRule.internalValue = value;
    }
    public resetCreateRule() {
        this._createRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createRuleInput() {
        return this._createRule.internalValue;
    }

    // cross_region_copy_rules - computed: true, optional: true, required: false
    private _crossRegionCopyRules = new CrossRegionCopyRulePropertyList(this, "cross_region_copy_rules", false);
    public get crossRegionCopyRules() {
        return this._crossRegionCopyRules;
    }
    public putCrossRegionCopyRules(value: CrossRegionCopyRuleProperty[] | cdktn.IResolvable) {
        this._crossRegionCopyRules.internalValue = value;
    }
    public resetCrossRegionCopyRules() {
        this._crossRegionCopyRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossRegionCopyRulesInput() {
        return this._crossRegionCopyRules.internalValue;
    }

    // deprecate_rule - computed: true, optional: true, required: false
    private _deprecateRule = new DeprecateRulePropertyOutputReference(this, "deprecate_rule");
    public get deprecateRule() {
        return this._deprecateRule;
    }
    public putDeprecateRule(value: DeprecateRuleProperty) {
        this._deprecateRule.internalValue = value;
    }
    public resetDeprecateRule() {
        this._deprecateRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deprecateRuleInput() {
        return this._deprecateRule.internalValue;
    }

    // fast_restore_rule - computed: true, optional: true, required: false
    private _fastRestoreRule = new FastRestoreRulePropertyOutputReference(this, "fast_restore_rule");
    public get fastRestoreRule() {
        return this._fastRestoreRule;
    }
    public putFastRestoreRule(value: FastRestoreRuleProperty) {
        this._fastRestoreRule.internalValue = value;
    }
    public resetFastRestoreRule() {
        this._fastRestoreRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fastRestoreRuleInput() {
        return this._fastRestoreRule.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // retain_rule - computed: true, optional: true, required: false
    private _retainRule = new RetainRulePropertyOutputReference(this, "retain_rule");
    public get retainRule() {
        return this._retainRule;
    }
    public putRetainRule(value: RetainRuleProperty) {
        this._retainRule.internalValue = value;
    }
    public resetRetainRule() {
        this._retainRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainRuleInput() {
        return this._retainRule.internalValue;
    }

    // share_rules - computed: true, optional: true, required: false
    private _shareRules = new ShareRulePropertyList(this, "share_rules", false);
    public get shareRules() {
        return this._shareRules;
    }
    public putShareRules(value: ShareRuleProperty[] | cdktn.IResolvable) {
        this._shareRules.internalValue = value;
    }
    public resetShareRules() {
        this._shareRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareRulesInput() {
        return this._shareRules.internalValue;
    }

    // tags_to_add - computed: true, optional: true, required: false
    private _tagsToAdd = new TagsToAddPropertyList(this, "tags_to_add", false);
    public get tagsToAdd() {
        return this._tagsToAdd;
    }
    public putTagsToAdd(value: TagsToAddProperty[] | cdktn.IResolvable) {
        this._tagsToAdd.internalValue = value;
    }
    public resetTagsToAdd() {
        this._tagsToAdd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsToAddInput() {
        return this._tagsToAdd.internalValue;
    }

    // variable_tags - computed: true, optional: true, required: false
    private _variableTags = new VariableTagsPropertyList(this, "variable_tags", false);
    public get variableTags() {
        return this._variableTags;
    }
    public putVariableTags(value: VariableTagsProperty[] | cdktn.IResolvable) {
        this._variableTags.internalValue = value;
    }
    public resetVariableTags() {
        this._variableTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableTagsInput() {
        return this._variableTags.internalValue;
    }
}

export class SchedulePropertyList extends cdktn.ComplexList {
    public internalValue? : ScheduleProperty[] | cdktn.IResolvable

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
    public get(index: number): SchedulePropertyOutputReference {
        return new SchedulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
    */
    readonly value?: string;
}
export class TargetTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetTagsProperty | cdktn.IResolvable | undefined) {
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

export class TargetTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTagsPropertyOutputReference {
        return new TargetTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PolicyDetailsProperty {
    /**
    * **[Event-based policies only]** The actions to be performed when the event-based policy is activated. You can specify only one action per policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#actions CcLifecyclePolicy#actions}
    */
    readonly actions?: ActionProperty[] | cdktn.IResolvable;
    /**
    * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is `false`.
    * 
    * Default: `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#copy_tags CcLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktn.IResolvable;
    /**
    * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
    * 
    * Default: 1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#create_interval CcLifecyclePolicy#create_interval}
    */
    readonly createInterval?: number;
    /**
    * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_targets CcLifecyclePolicy#cross_region_copy_targets}
    */
    readonly crossRegionCopyTargets?: CrossRegionCopyTargetsProperty[] | cdktn.IResolvable;
    /**
    * **[Event-based policies only]** The event that activates the event-based policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#event_source CcLifecyclePolicy#event_source}
    */
    readonly eventSource?: EventSourceProperty;
    /**
    * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#exclusions CcLifecyclePolicy#exclusions}
    */
    readonly exclusions?: PolicyDetailsExclusionsProperty;
    /**
    * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
    * 
    * Default: `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#extend_deletion CcLifecyclePolicy#extend_deletion}
    */
    readonly extendDeletion?: boolean | cdktn.IResolvable;
    /**
    * **[Custom snapshot and AMI policies only]** A set of optional parameters for snapshot and AMI lifecycle policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#parameters CcLifecyclePolicy#parameters}
    */
    readonly parameters?: ParametersProperty;
    /**
    * The type of policy to create. Specify one of the following:
    * 
    * - `SIMPLIFIED` -- To create a default policy.
    * - `STANDARD` -- To create a custom policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_language CcLifecyclePolicy#policy_language}
    */
    readonly policyLanguage?: string;
    /**
    * The type of policy. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account.
    * 
    * The default is `EBS_SNAPSHOT_MANAGEMENT`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#policy_type CcLifecyclePolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * **[Custom snapshot and AMI policies only]** The location of the resources to backup. If the source resources are located in a Region, specify `CLOUD`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_locations CcLifecyclePolicy#resource_locations}
    */
    readonly resourceLocations?: string[];
    /**
    * **[Default policies only]** Specify the type of default policy to create.
    * 
    * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME`.
    * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_type CcLifecyclePolicy#resource_type}
    */
    readonly resourceType?: string;
    /**
    * **[Custom snapshot policies only]** The target resource type for snapshot and AMI lifecycle policies. Use `VOLUME` to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#resource_types CcLifecyclePolicy#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
    * 
    * Default: 7
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#retain_interval CcLifecyclePolicy#retain_interval}
    */
    readonly retainInterval?: number;
    /**
    * **[Custom snapshot and AMI policies only]** The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules -- one mandatory schedule and up to three optional schedules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#schedules CcLifecyclePolicy#schedules}
    */
    readonly schedules?: ScheduleProperty[] | cdktn.IResolvable;
    /**
    * **[Custom snapshot and AMI policies only]** The single tag that identifies targeted resources for this policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#target_tags CcLifecyclePolicy#target_tags}
    */
    readonly targetTags?: TargetTagsProperty[] | cdktn.IResolvable;
}
export class PolicyDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._copyTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTags = this._copyTags;
        }
        if (this._createInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.createInterval = this._createInterval;
        }
        if (this._crossRegionCopyTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossRegionCopyTargets = this._crossRegionCopyTargets?.internalValue;
        }
        if (this._eventSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventSource = this._eventSource?.internalValue;
        }
        if (this._exclusions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions?.internalValue;
        }
        if (this._extendDeletion !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendDeletion = this._extendDeletion;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._policyLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyLanguage = this._policyLanguage;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        if (this._resourceLocations !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLocations = this._resourceLocations;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._retainInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainInterval = this._retainInterval;
        }
        if (this._schedules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedules = this._schedules?.internalValue;
        }
        if (this._targetTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTags = this._targetTags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._copyTags = undefined;
            this._createInterval = undefined;
            this._crossRegionCopyTargets.internalValue = undefined;
            this._eventSource.internalValue = undefined;
            this._exclusions.internalValue = undefined;
            this._extendDeletion = undefined;
            this._parameters.internalValue = undefined;
            this._policyLanguage = undefined;
            this._policyType = undefined;
            this._resourceLocations = undefined;
            this._resourceType = undefined;
            this._resourceTypes = undefined;
            this._retainInterval = undefined;
            this._schedules.internalValue = undefined;
            this._targetTags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._copyTags = value.copyTags;
            this._createInterval = value.createInterval;
            this._crossRegionCopyTargets.internalValue = value.crossRegionCopyTargets;
            this._eventSource.internalValue = value.eventSource;
            this._exclusions.internalValue = value.exclusions;
            this._extendDeletion = value.extendDeletion;
            this._parameters.internalValue = value.parameters;
            this._policyLanguage = value.policyLanguage;
            this._policyType = value.policyType;
            this._resourceLocations = value.resourceLocations;
            this._resourceType = value.resourceType;
            this._resourceTypes = value.resourceTypes;
            this._retainInterval = value.retainInterval;
            this._schedules.internalValue = value.schedules;
            this._targetTags.internalValue = value.targetTags;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // copy_tags - computed: true, optional: true, required: false
    private _copyTags?: boolean | cdktn.IResolvable; 
    public get copyTags() {
        return this.getBooleanAttribute('copy_tags');
    }
    public set copyTags(value: boolean | cdktn.IResolvable) {
        this._copyTags = value;
    }
    public resetCopyTags() {
        this._copyTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsInput() {
        return this._copyTags;
    }

    // create_interval - computed: true, optional: true, required: false
    private _createInterval?: number; 
    public get createInterval() {
        return this.getNumberAttribute('create_interval');
    }
    public set createInterval(value: number) {
        this._createInterval = value;
    }
    public resetCreateInterval() {
        this._createInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createIntervalInput() {
        return this._createInterval;
    }

    // cross_region_copy_targets - computed: true, optional: true, required: false
    private _crossRegionCopyTargets = new CrossRegionCopyTargetsPropertyList(this, "cross_region_copy_targets", false);
    public get crossRegionCopyTargets() {
        return this._crossRegionCopyTargets;
    }
    public putCrossRegionCopyTargets(value: CrossRegionCopyTargetsProperty[] | cdktn.IResolvable) {
        this._crossRegionCopyTargets.internalValue = value;
    }
    public resetCrossRegionCopyTargets() {
        this._crossRegionCopyTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossRegionCopyTargetsInput() {
        return this._crossRegionCopyTargets.internalValue;
    }

    // event_source - computed: true, optional: true, required: false
    private _eventSource = new EventSourcePropertyOutputReference(this, "event_source");
    public get eventSource() {
        return this._eventSource;
    }
    public putEventSource(value: EventSourceProperty) {
        this._eventSource.internalValue = value;
    }
    public resetEventSource() {
        this._eventSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceInput() {
        return this._eventSource.internalValue;
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions = new PolicyDetailsExclusionsPropertyOutputReference(this, "exclusions");
    public get exclusions() {
        return this._exclusions;
    }
    public putExclusions(value: PolicyDetailsExclusionsProperty) {
        this._exclusions.internalValue = value;
    }
    public resetExclusions() {
        this._exclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions.internalValue;
    }

    // extend_deletion - computed: true, optional: true, required: false
    private _extendDeletion?: boolean | cdktn.IResolvable; 
    public get extendDeletion() {
        return this.getBooleanAttribute('extend_deletion');
    }
    public set extendDeletion(value: boolean | cdktn.IResolvable) {
        this._extendDeletion = value;
    }
    public resetExtendDeletion() {
        this._extendDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendDeletionInput() {
        return this._extendDeletion;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new ParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: ParametersProperty) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // policy_language - computed: true, optional: true, required: false
    private _policyLanguage?: string; 
    public get policyLanguage() {
        return this.getStringAttribute('policy_language');
    }
    public set policyLanguage(value: string) {
        this._policyLanguage = value;
    }
    public resetPolicyLanguage() {
        this._policyLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyLanguageInput() {
        return this._policyLanguage;
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }

    // resource_locations - computed: true, optional: true, required: false
    private _resourceLocations?: string[]; 
    public get resourceLocations() {
        return this.getListAttribute('resource_locations');
    }
    public set resourceLocations(value: string[]) {
        this._resourceLocations = value;
    }
    public resetResourceLocations() {
        this._resourceLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLocationsInput() {
        return this._resourceLocations;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }

    // retain_interval - computed: true, optional: true, required: false
    private _retainInterval?: number; 
    public get retainInterval() {
        return this.getNumberAttribute('retain_interval');
    }
    public set retainInterval(value: number) {
        this._retainInterval = value;
    }
    public resetRetainInterval() {
        this._retainInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainIntervalInput() {
        return this._retainInterval;
    }

    // schedules - computed: true, optional: true, required: false
    private _schedules = new SchedulePropertyList(this, "schedules", false);
    public get schedules() {
        return this._schedules;
    }
    public putSchedules(value: ScheduleProperty[] | cdktn.IResolvable) {
        this._schedules.internalValue = value;
    }
    public resetSchedules() {
        this._schedules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulesInput() {
        return this._schedules.internalValue;
    }

    // target_tags - computed: true, optional: true, required: false
    private _targetTags = new TargetTagsPropertyList(this, "target_tags", false);
    public get targetTags() {
        return this._targetTags;
    }
    public putTargetTags(value: TargetTagsProperty[] | cdktn.IResolvable) {
        this._targetTags.internalValue = value;
    }
    public resetTargetTags() {
        this._targetTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTagsInput() {
        return this._targetTags.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#key CcLifecyclePolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/dlm_lifecycle_policy#value CcLifecyclePolicy#value}
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
