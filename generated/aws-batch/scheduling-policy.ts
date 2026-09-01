// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSchedulingPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Fair Share Policy for the Job Queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#fairshare_policy CcSchedulingPolicy#fairshare_policy}
    */
    readonly fairsharePolicy?: CcSchedulingPolicy.FairsharePolicyProperty;
    /**
    * Name of Scheduling Policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#name CcSchedulingPolicy#name}
    */
    readonly name?: string;
    /**
    * Quota Share Policy for the Job Queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#quota_share_policy CcSchedulingPolicy#quota_share_policy}
    */
    readonly quotaSharePolicy?: CcSchedulingPolicy.QuotaSharePolicyProperty;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#tags CcSchedulingPolicy#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}
*/
export class CcSchedulingPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_batch_scheduling_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSchedulingPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSchedulingPolicy to import
    * @param importFromId The id of the existing CcSchedulingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSchedulingPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_scheduling_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSchedulingPolicyProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSchedulingPolicyProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_batch_scheduling_policy',
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
        this._fairsharePolicy.internalValue = config.fairsharePolicy;
        this._name = config.name;
        this._quotaSharePolicy.internalValue = config.quotaSharePolicy;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // fairshare_policy - computed: true, optional: true, required: false
    private _fairsharePolicy = new CcSchedulingPolicy.FairsharePolicyPropertyOutputReference(this, "fairshare_policy");
    public get fairsharePolicy() {
        return this._fairsharePolicy;
    }
    public putFairsharePolicy(value: CcSchedulingPolicy.FairsharePolicyProperty) {
        this._fairsharePolicy.internalValue = value;
    }
    public resetFairsharePolicy() {
        this._fairsharePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fairsharePolicyInput() {
        return this._fairsharePolicy.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // quota_share_policy - computed: true, optional: true, required: false
    private _quotaSharePolicy = new CcSchedulingPolicy.QuotaSharePolicyPropertyOutputReference(this, "quota_share_policy");
    public get quotaSharePolicy() {
        return this._quotaSharePolicy;
    }
    public putQuotaSharePolicy(value: CcSchedulingPolicy.QuotaSharePolicyProperty) {
        this._quotaSharePolicy.internalValue = value;
    }
    public resetQuotaSharePolicy() {
        this._quotaSharePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quotaSharePolicyInput() {
        return this._quotaSharePolicy.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            fairshare_policy: ccSchedulingPolicyFairsharePolicyPropertyToTerraform(this._fairsharePolicy.internalValue),
            name: cdktn.stringToTerraform(this._name),
            quota_share_policy: ccSchedulingPolicyQuotaSharePolicyPropertyToTerraform(this._quotaSharePolicy.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            fairshare_policy: {
                value: ccSchedulingPolicyFairsharePolicyPropertyToHclTerraform(this._fairsharePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchedulingPolicy.FairsharePolicyProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            quota_share_policy: {
                value: ccSchedulingPolicyQuotaSharePolicyPropertyToHclTerraform(this._quotaSharePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchedulingPolicy.QuotaSharePolicyProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSchedulingPolicyShareAttributesPropertyToTerraform(struct?: CcSchedulingPolicy.ShareAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        share_identifier: cdktn.stringToTerraform(struct!.shareIdentifier),
        weight_factor: cdktn.numberToTerraform(struct!.weightFactor),
    }
}


export function ccSchedulingPolicyShareAttributesPropertyToHclTerraform(struct?: CcSchedulingPolicy.ShareAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        share_identifier: {
            value: cdktn.stringToHclTerraform(struct!.shareIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight_factor: {
            value: cdktn.numberToHclTerraform(struct!.weightFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchedulingPolicyFairsharePolicyPropertyToTerraform(struct?: CcSchedulingPolicy.FairsharePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_reservation: cdktn.numberToTerraform(struct!.computeReservation),
        share_decay_seconds: cdktn.numberToTerraform(struct!.shareDecaySeconds),
        share_distribution: cdktn.listMapper(ccSchedulingPolicyShareAttributesPropertyToTerraform, false)(struct!.shareDistribution),
    }
}


export function ccSchedulingPolicyFairsharePolicyPropertyToHclTerraform(struct?: CcSchedulingPolicy.FairsharePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_reservation: {
            value: cdktn.numberToHclTerraform(struct!.computeReservation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        share_decay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.shareDecaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        share_distribution: {
            value: cdktn.listMapperHcl(ccSchedulingPolicyShareAttributesPropertyToHclTerraform, false)(struct!.shareDistribution),
            isBlock: true,
            type: "list",
            storageClassType: "ShareAttributesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchedulingPolicyQuotaSharePolicyPropertyToTerraform(struct?: CcSchedulingPolicy.QuotaSharePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_resource_assignment_strategy: cdktn.stringToTerraform(struct!.idleResourceAssignmentStrategy),
    }
}


export function ccSchedulingPolicyQuotaSharePolicyPropertyToHclTerraform(struct?: CcSchedulingPolicy.QuotaSharePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_resource_assignment_strategy: {
            value: cdktn.stringToHclTerraform(struct!.idleResourceAssignmentStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSchedulingPolicy {
export interface ShareAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_identifier CcSchedulingPolicy#share_identifier}
    */
    readonly shareIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#weight_factor CcSchedulingPolicy#weight_factor}
    */
    readonly weightFactor?: number;
}
export class ShareAttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShareAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._shareIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareIdentifier = this._shareIdentifier;
        }
        if (this._weightFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightFactor = this._weightFactor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShareAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._shareIdentifier = undefined;
            this._weightFactor = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._shareIdentifier = value.shareIdentifier;
            this._weightFactor = value.weightFactor;
        }
    }

    // share_identifier - computed: true, optional: true, required: false
    private _shareIdentifier?: string; 
    public get shareIdentifier() {
        return this.getStringAttribute('share_identifier');
    }
    public set shareIdentifier(value: string) {
        this._shareIdentifier = value;
    }
    public resetShareIdentifier() {
        this._shareIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareIdentifierInput() {
        return this._shareIdentifier;
    }

    // weight_factor - computed: true, optional: true, required: false
    private _weightFactor?: number; 
    public get weightFactor() {
        return this.getNumberAttribute('weight_factor');
    }
    public set weightFactor(value: number) {
        this._weightFactor = value;
    }
    public resetWeightFactor() {
        this._weightFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightFactorInput() {
        return this._weightFactor;
    }
}

export class ShareAttributesPropertyList extends cdktn.ComplexList {
    public internalValue? : ShareAttributesProperty[] | cdktn.IResolvable

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
    public get(index: number): ShareAttributesPropertyOutputReference {
        return new ShareAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FairsharePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#compute_reservation CcSchedulingPolicy#compute_reservation}
    */
    readonly computeReservation?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_decay_seconds CcSchedulingPolicy#share_decay_seconds}
    */
    readonly shareDecaySeconds?: number;
    /**
    * List of Share Attributes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_distribution CcSchedulingPolicy#share_distribution}
    */
    readonly shareDistribution?: ShareAttributesProperty[] | cdktn.IResolvable;
}
export class FairsharePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FairsharePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeReservation !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeReservation = this._computeReservation;
        }
        if (this._shareDecaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDecaySeconds = this._shareDecaySeconds;
        }
        if (this._shareDistribution?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDistribution = this._shareDistribution?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FairsharePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeReservation = undefined;
            this._shareDecaySeconds = undefined;
            this._shareDistribution.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeReservation = value.computeReservation;
            this._shareDecaySeconds = value.shareDecaySeconds;
            this._shareDistribution.internalValue = value.shareDistribution;
        }
    }

    // compute_reservation - computed: true, optional: true, required: false
    private _computeReservation?: number; 
    public get computeReservation() {
        return this.getNumberAttribute('compute_reservation');
    }
    public set computeReservation(value: number) {
        this._computeReservation = value;
    }
    public resetComputeReservation() {
        this._computeReservation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeReservationInput() {
        return this._computeReservation;
    }

    // share_decay_seconds - computed: true, optional: true, required: false
    private _shareDecaySeconds?: number; 
    public get shareDecaySeconds() {
        return this.getNumberAttribute('share_decay_seconds');
    }
    public set shareDecaySeconds(value: number) {
        this._shareDecaySeconds = value;
    }
    public resetShareDecaySeconds() {
        this._shareDecaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDecaySecondsInput() {
        return this._shareDecaySeconds;
    }

    // share_distribution - computed: true, optional: true, required: false
    private _shareDistribution = new ShareAttributesPropertyList(this, "share_distribution", false);
    public get shareDistribution() {
        return this._shareDistribution;
    }
    public putShareDistribution(value: ShareAttributesProperty[] | cdktn.IResolvable) {
        this._shareDistribution.internalValue = value;
    }
    public resetShareDistribution() {
        this._shareDistribution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDistributionInput() {
        return this._shareDistribution.internalValue;
    }
}
export interface QuotaSharePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy CcSchedulingPolicy#idle_resource_assignment_strategy}
    */
    readonly idleResourceAssignmentStrategy?: string;
}
export class QuotaSharePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QuotaSharePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleResourceAssignmentStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleResourceAssignmentStrategy = this._idleResourceAssignmentStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QuotaSharePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleResourceAssignmentStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleResourceAssignmentStrategy = value.idleResourceAssignmentStrategy;
        }
    }

    // idle_resource_assignment_strategy - computed: true, optional: true, required: false
    private _idleResourceAssignmentStrategy?: string; 
    public get idleResourceAssignmentStrategy() {
        return this.getStringAttribute('idle_resource_assignment_strategy');
    }
    public set idleResourceAssignmentStrategy(value: string) {
        this._idleResourceAssignmentStrategy = value;
    }
    public resetIdleResourceAssignmentStrategy() {
        this._idleResourceAssignmentStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleResourceAssignmentStrategyInput() {
        return this._idleResourceAssignmentStrategy;
    }
}
}
