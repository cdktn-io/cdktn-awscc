// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#availability_slo CcPolicy#availability_slo}
    */
    readonly availabilitySlo?: CcPolicy.AvailabilitySloProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#data_recovery CcPolicy#data_recovery}
    */
    readonly dataRecovery?: CcPolicy.DataRecoveryTargetsProperty;
    /**
    * The description of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#description CcPolicy#description}
    */
    readonly description?: string;
    /**
    * The KMS key ID for encrypting policy data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#kms_key_id CcPolicy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#multi_az CcPolicy#multi_az}
    */
    readonly multiAz?: CcPolicy.MultiAzTargetsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#multi_region CcPolicy#multi_region}
    */
    readonly multiRegion?: CcPolicy.MultiRegionTargetsProperty;
    /**
    * The name of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#name CcPolicy#name}
    */
    readonly name: string;
    /**
    * Tags assigned to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#tags CcPolicy#tags}
    */
    readonly tags?: CcPolicy.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy awscc_resiliencehubv2_policy}
*/
export class CcPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resiliencehubv2_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicy to import
    * @param importFromId The id of the existing CcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy awscc_resiliencehubv2_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resiliencehubv2_policy',
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
        this._availabilitySlo.internalValue = config.availabilitySlo;
        this._dataRecovery.internalValue = config.dataRecovery;
        this._description = config.description;
        this._kmsKeyId = config.kmsKeyId;
        this._multiAz.internalValue = config.multiAz;
        this._multiRegion.internalValue = config.multiRegion;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // associated_service_count - computed: true, optional: false, required: false
    public get associatedServiceCount() {
        return this.getNumberAttribute('associated_service_count');
    }

    // availability_slo - computed: true, optional: true, required: false
    private _availabilitySlo = new CcPolicy.AvailabilitySloPropertyOutputReference(this, "availability_slo");
    public get availabilitySlo() {
        return this._availabilitySlo;
    }
    public putAvailabilitySlo(value: CcPolicy.AvailabilitySloProperty) {
        this._availabilitySlo.internalValue = value;
    }
    public resetAvailabilitySlo() {
        this._availabilitySlo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilitySloInput() {
        return this._availabilitySlo.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_recovery - computed: true, optional: true, required: false
    private _dataRecovery = new CcPolicy.DataRecoveryTargetsPropertyOutputReference(this, "data_recovery");
    public get dataRecovery() {
        return this._dataRecovery;
    }
    public putDataRecovery(value: CcPolicy.DataRecoveryTargetsProperty) {
        this._dataRecovery.internalValue = value;
    }
    public resetDataRecovery() {
        this._dataRecovery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRecoveryInput() {
        return this._dataRecovery.internalValue;
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

    // multi_az - computed: true, optional: true, required: false
    private _multiAz = new CcPolicy.MultiAzTargetsPropertyOutputReference(this, "multi_az");
    public get multiAz() {
        return this._multiAz;
    }
    public putMultiAz(value: CcPolicy.MultiAzTargetsProperty) {
        this._multiAz.internalValue = value;
    }
    public resetMultiAz() {
        this._multiAz.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzInput() {
        return this._multiAz.internalValue;
    }

    // multi_region - computed: true, optional: true, required: false
    private _multiRegion = new CcPolicy.MultiRegionTargetsPropertyOutputReference(this, "multi_region");
    public get multiRegion() {
        return this._multiRegion;
    }
    public putMultiRegion(value: CcPolicy.MultiRegionTargetsProperty) {
        this._multiRegion.internalValue = value;
    }
    public resetMultiRegion() {
        this._multiRegion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionInput() {
        return this._multiRegion.internalValue;
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

    // policy_arn - computed: true, optional: false, required: false
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPolicy.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPolicy.TagProperty[] | cdktn.IResolvable) {
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_slo: ccPolicyAvailabilitySloPropertyToTerraform(this._availabilitySlo.internalValue),
            data_recovery: ccPolicyDataRecoveryTargetsPropertyToTerraform(this._dataRecovery.internalValue),
            description: cdktn.stringToTerraform(this._description),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            multi_az: ccPolicyMultiAzTargetsPropertyToTerraform(this._multiAz.internalValue),
            multi_region: ccPolicyMultiRegionTargetsPropertyToTerraform(this._multiRegion.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccPolicyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_slo: {
                value: ccPolicyAvailabilitySloPropertyToHclTerraform(this._availabilitySlo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.AvailabilitySloProperty",
            },
            data_recovery: {
                value: ccPolicyDataRecoveryTargetsPropertyToHclTerraform(this._dataRecovery.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.DataRecoveryTargetsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_az: {
                value: ccPolicyMultiAzTargetsPropertyToHclTerraform(this._multiAz.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.MultiAzTargetsProperty",
            },
            multi_region: {
                value: ccPolicyMultiRegionTargetsPropertyToHclTerraform(this._multiRegion.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.MultiRegionTargetsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPolicyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPolicy.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyAvailabilitySloPropertyToTerraform(struct?: CcPolicy.AvailabilitySloProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target: cdktn.numberToTerraform(struct!.target),
    }
}


export function ccPolicyAvailabilitySloPropertyToHclTerraform(struct?: CcPolicy.AvailabilitySloProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target: {
            value: cdktn.numberToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyDataRecoveryTargetsPropertyToTerraform(struct?: CcPolicy.DataRecoveryTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        time_between_backups_in_minutes: cdktn.numberToTerraform(struct!.timeBetweenBackupsInMinutes),
    }
}


export function ccPolicyDataRecoveryTargetsPropertyToHclTerraform(struct?: CcPolicy.DataRecoveryTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        time_between_backups_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeBetweenBackupsInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyMultiAzTargetsPropertyToTerraform(struct?: CcPolicy.MultiAzTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disaster_recovery_approach: cdktn.stringToTerraform(struct!.disasterRecoveryApproach),
        rpo_in_minutes: cdktn.numberToTerraform(struct!.rpoInMinutes),
        rto_in_minutes: cdktn.numberToTerraform(struct!.rtoInMinutes),
    }
}


export function ccPolicyMultiAzTargetsPropertyToHclTerraform(struct?: CcPolicy.MultiAzTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disaster_recovery_approach: {
            value: cdktn.stringToHclTerraform(struct!.disasterRecoveryApproach),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rpo_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.rpoInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.rtoInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyMultiRegionTargetsPropertyToTerraform(struct?: CcPolicy.MultiRegionTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disaster_recovery_approach: cdktn.stringToTerraform(struct!.disasterRecoveryApproach),
        rpo_in_minutes: cdktn.numberToTerraform(struct!.rpoInMinutes),
        rto_in_minutes: cdktn.numberToTerraform(struct!.rtoInMinutes),
    }
}


export function ccPolicyMultiRegionTargetsPropertyToHclTerraform(struct?: CcPolicy.MultiRegionTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disaster_recovery_approach: {
            value: cdktn.stringToHclTerraform(struct!.disasterRecoveryApproach),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rpo_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.rpoInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rto_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.rtoInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyTagPropertyToTerraform(struct?: CcPolicy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPolicyTagPropertyToHclTerraform(struct?: CcPolicy.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPolicy {
export interface AvailabilitySloProperty {
    /**
    * Availability target percentage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#target CcPolicy#target}
    */
    readonly target?: number;
}
export class AvailabilitySloPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AvailabilitySloProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AvailabilitySloProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._target = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._target = value.target;
        }
    }

    // target - computed: true, optional: true, required: false
    private _target?: number; 
    public get target() {
        return this.getNumberAttribute('target');
    }
    public set target(value: number) {
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
export interface DataRecoveryTargetsProperty {
    /**
    * Time between backups in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes CcPolicy#time_between_backups_in_minutes}
    */
    readonly timeBetweenBackupsInMinutes?: number;
}
export class DataRecoveryTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataRecoveryTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeBetweenBackupsInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeBetweenBackupsInMinutes = this._timeBetweenBackupsInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataRecoveryTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeBetweenBackupsInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeBetweenBackupsInMinutes = value.timeBetweenBackupsInMinutes;
        }
    }

    // time_between_backups_in_minutes - computed: true, optional: true, required: false
    private _timeBetweenBackupsInMinutes?: number; 
    public get timeBetweenBackupsInMinutes() {
        return this.getNumberAttribute('time_between_backups_in_minutes');
    }
    public set timeBetweenBackupsInMinutes(value: number) {
        this._timeBetweenBackupsInMinutes = value;
    }
    public resetTimeBetweenBackupsInMinutes() {
        this._timeBetweenBackupsInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBetweenBackupsInMinutesInput() {
        return this._timeBetweenBackupsInMinutes;
    }
}
export interface MultiAzTargetsProperty {
    /**
    * Multi-AZ disaster recovery approach.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach CcPolicy#disaster_recovery_approach}
    */
    readonly disasterRecoveryApproach?: string;
    /**
    * Recovery Point Objective in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes CcPolicy#rpo_in_minutes}
    */
    readonly rpoInMinutes?: number;
    /**
    * Recovery Time Objective in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#rto_in_minutes CcPolicy#rto_in_minutes}
    */
    readonly rtoInMinutes?: number;
}
export class MultiAzTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiAzTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disasterRecoveryApproach !== undefined) {
            hasAnyValues = true;
            internalValueResult.disasterRecoveryApproach = this._disasterRecoveryApproach;
        }
        if (this._rpoInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInMinutes = this._rpoInMinutes;
        }
        if (this._rtoInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInMinutes = this._rtoInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiAzTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disasterRecoveryApproach = undefined;
            this._rpoInMinutes = undefined;
            this._rtoInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disasterRecoveryApproach = value.disasterRecoveryApproach;
            this._rpoInMinutes = value.rpoInMinutes;
            this._rtoInMinutes = value.rtoInMinutes;
        }
    }

    // disaster_recovery_approach - computed: true, optional: true, required: false
    private _disasterRecoveryApproach?: string; 
    public get disasterRecoveryApproach() {
        return this.getStringAttribute('disaster_recovery_approach');
    }
    public set disasterRecoveryApproach(value: string) {
        this._disasterRecoveryApproach = value;
    }
    public resetDisasterRecoveryApproach() {
        this._disasterRecoveryApproach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disasterRecoveryApproachInput() {
        return this._disasterRecoveryApproach;
    }

    // rpo_in_minutes - computed: true, optional: true, required: false
    private _rpoInMinutes?: number; 
    public get rpoInMinutes() {
        return this.getNumberAttribute('rpo_in_minutes');
    }
    public set rpoInMinutes(value: number) {
        this._rpoInMinutes = value;
    }
    public resetRpoInMinutes() {
        this._rpoInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInMinutesInput() {
        return this._rpoInMinutes;
    }

    // rto_in_minutes - computed: true, optional: true, required: false
    private _rtoInMinutes?: number; 
    public get rtoInMinutes() {
        return this.getNumberAttribute('rto_in_minutes');
    }
    public set rtoInMinutes(value: number) {
        this._rtoInMinutes = value;
    }
    public resetRtoInMinutes() {
        this._rtoInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInMinutesInput() {
        return this._rtoInMinutes;
    }
}
export interface MultiRegionTargetsProperty {
    /**
    * Multi-Region disaster recovery approach.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach CcPolicy#disaster_recovery_approach}
    */
    readonly disasterRecoveryApproach?: string;
    /**
    * Recovery Point Objective in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes CcPolicy#rpo_in_minutes}
    */
    readonly rpoInMinutes?: number;
    /**
    * Recovery Time Objective in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#rto_in_minutes CcPolicy#rto_in_minutes}
    */
    readonly rtoInMinutes?: number;
}
export class MultiRegionTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiRegionTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disasterRecoveryApproach !== undefined) {
            hasAnyValues = true;
            internalValueResult.disasterRecoveryApproach = this._disasterRecoveryApproach;
        }
        if (this._rpoInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rpoInMinutes = this._rpoInMinutes;
        }
        if (this._rtoInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.rtoInMinutes = this._rtoInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiRegionTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disasterRecoveryApproach = undefined;
            this._rpoInMinutes = undefined;
            this._rtoInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disasterRecoveryApproach = value.disasterRecoveryApproach;
            this._rpoInMinutes = value.rpoInMinutes;
            this._rtoInMinutes = value.rtoInMinutes;
        }
    }

    // disaster_recovery_approach - computed: true, optional: true, required: false
    private _disasterRecoveryApproach?: string; 
    public get disasterRecoveryApproach() {
        return this.getStringAttribute('disaster_recovery_approach');
    }
    public set disasterRecoveryApproach(value: string) {
        this._disasterRecoveryApproach = value;
    }
    public resetDisasterRecoveryApproach() {
        this._disasterRecoveryApproach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disasterRecoveryApproachInput() {
        return this._disasterRecoveryApproach;
    }

    // rpo_in_minutes - computed: true, optional: true, required: false
    private _rpoInMinutes?: number; 
    public get rpoInMinutes() {
        return this.getNumberAttribute('rpo_in_minutes');
    }
    public set rpoInMinutes(value: number) {
        this._rpoInMinutes = value;
    }
    public resetRpoInMinutes() {
        this._rpoInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rpoInMinutesInput() {
        return this._rpoInMinutes;
    }

    // rto_in_minutes - computed: true, optional: true, required: false
    private _rtoInMinutes?: number; 
    public get rtoInMinutes() {
        return this.getNumberAttribute('rto_in_minutes');
    }
    public set rtoInMinutes(value: number) {
        this._rtoInMinutes = value;
    }
    public resetRtoInMinutes() {
        this._rtoInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rtoInMinutesInput() {
        return this._rtoInMinutes;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#key CcPolicy#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_policy#value CcPolicy#value}
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
