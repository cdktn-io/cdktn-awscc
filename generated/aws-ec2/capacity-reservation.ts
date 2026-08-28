// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapacityReservationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#availability_zone CcCapacityReservation#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#availability_zone_id CcCapacityReservation#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#ebs_optimized CcCapacityReservation#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#end_date CcCapacityReservation#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#end_date_type CcCapacityReservation#end_date_type}
    */
    readonly endDateType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#ephemeral_storage CcCapacityReservation#ephemeral_storage}
    */
    readonly ephemeralStorage?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#instance_count CcCapacityReservation#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#instance_match_criteria CcCapacityReservation#instance_match_criteria}
    */
    readonly instanceMatchCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#instance_platform CcCapacityReservation#instance_platform}
    */
    readonly instancePlatform: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#instance_type CcCapacityReservation#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#out_post_arn CcCapacityReservation#out_post_arn}
    */
    readonly outPostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#placement_group_arn CcCapacityReservation#placement_group_arn}
    */
    readonly placementGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#tag_specifications CcCapacityReservation#tag_specifications}
    */
    readonly tagSpecifications?: CcCapacityReservation.TagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#tenancy CcCapacityReservation#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#unused_reservation_billing_owner_id CcCapacityReservation#unused_reservation_billing_owner_id}
    */
    readonly unusedReservationBillingOwnerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation awscc_ec2_capacity_reservation}
*/
export class CcCapacityReservation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_capacity_reservation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapacityReservation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapacityReservation to import
    * @param importFromId The id of the existing CcCapacityReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapacityReservation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_capacity_reservation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation awscc_ec2_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapacityReservationProps
    */
    public constructor(scope: Construct, id: string, config: CcCapacityReservationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_capacity_reservation',
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
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._ebsOptimized = config.ebsOptimized;
        this._endDate = config.endDate;
        this._endDateType = config.endDateType;
        this._ephemeralStorage = config.ephemeralStorage;
        this._instanceCount = config.instanceCount;
        this._instanceMatchCriteria = config.instanceMatchCriteria;
        this._instancePlatform = config.instancePlatform;
        this._instanceType = config.instanceType;
        this._outPostArn = config.outPostArn;
        this._placementGroupArn = config.placementGroupArn;
        this._tagSpecifications.internalValue = config.tagSpecifications;
        this._tenancy = config.tenancy;
        this._unusedReservationBillingOwnerId = config.unusedReservationBillingOwnerId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
    }

    // available_instance_count - computed: true, optional: false, required: false
    public get availableInstanceCount() {
        return this.getNumberAttribute('available_instance_count');
    }

    // capacity_allocation_set - computed: true, optional: false, required: false
    private _capacityAllocationSet = new CcCapacityReservation.CapacityAllocationSetPropertyList(this, "capacity_allocation_set", false);
    public get capacityAllocationSet() {
        return this._capacityAllocationSet;
    }

    // capacity_reservation_arn - computed: true, optional: false, required: false
    public get capacityReservationArn() {
        return this.getStringAttribute('capacity_reservation_arn');
    }

    // capacity_reservation_fleet_id - computed: true, optional: false, required: false
    public get capacityReservationFleetId() {
        return this.getStringAttribute('capacity_reservation_fleet_id');
    }

    // capacity_reservation_id - computed: true, optional: false, required: false
    public get capacityReservationId() {
        return this.getStringAttribute('capacity_reservation_id');
    }

    // commitment_info - computed: true, optional: false, required: false
    private _commitmentInfo = new CcCapacityReservation.CommitmentInfoPropertyOutputReference(this, "commitment_info");
    public get commitmentInfo() {
        return this._commitmentInfo;
    }

    // create_date - computed: true, optional: false, required: false
    public get createDate() {
        return this.getStringAttribute('create_date');
    }

    // delivery_preference - computed: true, optional: false, required: false
    public get deliveryPreference() {
        return this.getStringAttribute('delivery_preference');
    }

    // ebs_optimized - computed: true, optional: true, required: false
    private _ebsOptimized?: boolean | cdktn.IResolvable; 
    public get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    public set ebsOptimized(value: boolean | cdktn.IResolvable) {
        this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
        return this._ebsOptimized;
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // end_date_type - computed: true, optional: true, required: false
    private _endDateType?: string; 
    public get endDateType() {
        return this.getStringAttribute('end_date_type');
    }
    public set endDateType(value: string) {
        this._endDateType = value;
    }
    public resetEndDateType() {
        this._endDateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateTypeInput() {
        return this._endDateType;
    }

    // ephemeral_storage - computed: true, optional: true, required: false
    private _ephemeralStorage?: boolean | cdktn.IResolvable; 
    public get ephemeralStorage() {
        return this.getBooleanAttribute('ephemeral_storage');
    }
    public set ephemeralStorage(value: boolean | cdktn.IResolvable) {
        this._ephemeralStorage = value;
    }
    public resetEphemeralStorage() {
        this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
        return this._ephemeralStorage;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // instance_match_criteria - computed: true, optional: true, required: false
    private _instanceMatchCriteria?: string; 
    public get instanceMatchCriteria() {
        return this.getStringAttribute('instance_match_criteria');
    }
    public set instanceMatchCriteria(value: string) {
        this._instanceMatchCriteria = value;
    }
    public resetInstanceMatchCriteria() {
        this._instanceMatchCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMatchCriteriaInput() {
        return this._instanceMatchCriteria;
    }

    // instance_platform - computed: false, optional: false, required: true
    private _instancePlatform?: string; 
    public get instancePlatform() {
        return this.getStringAttribute('instance_platform');
    }
    public set instancePlatform(value: string) {
        this._instancePlatform = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePlatformInput() {
        return this._instancePlatform;
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

    // out_post_arn - computed: true, optional: true, required: false
    private _outPostArn?: string; 
    public get outPostArn() {
        return this.getStringAttribute('out_post_arn');
    }
    public set outPostArn(value: string) {
        this._outPostArn = value;
    }
    public resetOutPostArn() {
        this._outPostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outPostArnInput() {
        return this._outPostArn;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // placement_group_arn - computed: true, optional: true, required: false
    private _placementGroupArn?: string; 
    public get placementGroupArn() {
        return this.getStringAttribute('placement_group_arn');
    }
    public set placementGroupArn(value: string) {
        this._placementGroupArn = value;
    }
    public resetPlacementGroupArn() {
        this._placementGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupArnInput() {
        return this._placementGroupArn;
    }

    // reservation_type - computed: true, optional: false, required: false
    public get reservationType() {
        return this.getStringAttribute('reservation_type');
    }

    // start_date - computed: true, optional: false, required: false
    public get startDate() {
        return this.getStringAttribute('start_date');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new CcCapacityReservation.TagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: CcCapacityReservation.TagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string; 
    public get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string) {
        this._tenancy = value;
    }
    public resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
        return this._tenancy;
    }

    // total_instance_count - computed: true, optional: false, required: false
    public get totalInstanceCount() {
        return this.getNumberAttribute('total_instance_count');
    }

    // unused_reservation_billing_owner_id - computed: true, optional: true, required: false
    private _unusedReservationBillingOwnerId?: string; 
    public get unusedReservationBillingOwnerId() {
        return this.getStringAttribute('unused_reservation_billing_owner_id');
    }
    public set unusedReservationBillingOwnerId(value: string) {
        this._unusedReservationBillingOwnerId = value;
    }
    public resetUnusedReservationBillingOwnerId() {
        this._unusedReservationBillingOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unusedReservationBillingOwnerIdInput() {
        return this._unusedReservationBillingOwnerId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
            ebs_optimized: cdktn.booleanToTerraform(this._ebsOptimized),
            end_date: cdktn.stringToTerraform(this._endDate),
            end_date_type: cdktn.stringToTerraform(this._endDateType),
            ephemeral_storage: cdktn.booleanToTerraform(this._ephemeralStorage),
            instance_count: cdktn.numberToTerraform(this._instanceCount),
            instance_match_criteria: cdktn.stringToTerraform(this._instanceMatchCriteria),
            instance_platform: cdktn.stringToTerraform(this._instancePlatform),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            out_post_arn: cdktn.stringToTerraform(this._outPostArn),
            placement_group_arn: cdktn.stringToTerraform(this._placementGroupArn),
            tag_specifications: cdktn.listMapper(ccCapacityReservationTagSpecificationPropertyToTerraform, false)(this._tagSpecifications.internalValue),
            tenancy: cdktn.stringToTerraform(this._tenancy),
            unused_reservation_billing_owner_id: cdktn.stringToTerraform(this._unusedReservationBillingOwnerId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_id: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ebs_optimized: {
                value: cdktn.booleanToHclTerraform(this._ebsOptimized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            end_date: {
                value: cdktn.stringToHclTerraform(this._endDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            end_date_type: {
                value: cdktn.stringToHclTerraform(this._endDateType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ephemeral_storage: {
                value: cdktn.booleanToHclTerraform(this._ephemeralStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            instance_count: {
                value: cdktn.numberToHclTerraform(this._instanceCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            instance_match_criteria: {
                value: cdktn.stringToHclTerraform(this._instanceMatchCriteria),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_platform: {
                value: cdktn.stringToHclTerraform(this._instancePlatform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            out_post_arn: {
                value: cdktn.stringToHclTerraform(this._outPostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            placement_group_arn: {
                value: cdktn.stringToHclTerraform(this._placementGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_specifications: {
                value: cdktn.listMapperHcl(ccCapacityReservationTagSpecificationPropertyToHclTerraform, false)(this._tagSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCapacityReservation.TagSpecificationPropertyList",
            },
            tenancy: {
                value: cdktn.stringToHclTerraform(this._tenancy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unused_reservation_billing_owner_id: {
                value: cdktn.stringToHclTerraform(this._unusedReservationBillingOwnerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapacityReservationCapacityAllocationSetPropertyToTerraform(struct?: CcCapacityReservation.CapacityAllocationSetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccCapacityReservationCapacityAllocationSetPropertyToHclTerraform(struct?: CcCapacityReservation.CapacityAllocationSetProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccCapacityReservationCommitmentInfoPropertyToTerraform(struct?: CcCapacityReservation.CommitmentInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccCapacityReservationCommitmentInfoPropertyToHclTerraform(struct?: CcCapacityReservation.CommitmentInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccCapacityReservationTagPropertyToTerraform(struct?: CcCapacityReservation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapacityReservationTagPropertyToHclTerraform(struct?: CcCapacityReservation.TagProperty | cdktn.IResolvable): any {
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


export function ccCapacityReservationTagSpecificationPropertyToTerraform(struct?: CcCapacityReservation.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccCapacityReservationTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccCapacityReservationTagSpecificationPropertyToHclTerraform(struct?: CcCapacityReservation.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccCapacityReservationTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCapacityReservation {
export interface CapacityAllocationSetProperty {
}
export class CapacityAllocationSetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityAllocationSetProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityAllocationSetProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // allocation_type - computed: true, optional: false, required: false
    public get allocationType() {
        return this.getStringAttribute('allocation_type');
    }

    // count - computed: true, optional: false, required: false
    public get count() {
        return this.getNumberAttribute('count');
    }
}

export class CapacityAllocationSetPropertyList extends cdktn.ComplexList {

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
    public get(index: number): CapacityAllocationSetPropertyOutputReference {
        return new CapacityAllocationSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommitmentInfoProperty {
}
export class CommitmentInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommitmentInfoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommitmentInfoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // commitment_end_date - computed: true, optional: false, required: false
    public get commitmentEndDate() {
        return this.getStringAttribute('commitment_end_date');
    }

    // committed_instance_count - computed: true, optional: false, required: false
    public get committedInstanceCount() {
        return this.getNumberAttribute('committed_instance_count');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#key CcCapacityReservation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#value CcCapacityReservation#value}
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
export interface TagSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#resource_type CcCapacityReservation#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_capacity_reservation#tags CcCapacityReservation#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class TagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._tags.internalValue = value.tags;
        }
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

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class TagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : TagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): TagSpecificationPropertyOutputReference {
        return new TagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
