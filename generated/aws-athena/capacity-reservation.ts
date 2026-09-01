// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapacityReservationProps extends cdktn.TerraformMetaArguments {
    /**
    * Assignment configuration to assign workgroups to a reservation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration CcCapacityReservation#capacity_assignment_configuration}
    */
    readonly capacityAssignmentConfiguration?: CcCapacityReservation.CapacityAssignmentConfigurationProperty;
    /**
    * The reservation name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#name CcCapacityReservation#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#tags CcCapacityReservation#tags}
    */
    readonly tags?: CcCapacityReservation.TagProperty[] | cdktn.IResolvable;
    /**
    * The number of DPUs to request to be allocated to the reservation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#target_dpus CcCapacityReservation#target_dpus}
    */
    readonly targetDpus: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation}
*/
export class CcCapacityReservation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_athena_capacity_reservation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapacityReservation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapacityReservation to import
    * @param importFromId The id of the existing CcCapacityReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapacityReservation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_capacity_reservation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapacityReservationProps
    */
    public constructor(scope: Construct, id: string, config: CcCapacityReservationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_athena_capacity_reservation',
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
        this._capacityAssignmentConfiguration.internalValue = config.capacityAssignmentConfiguration;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._targetDpus = config.targetDpus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_dpus - computed: true, optional: false, required: false
    public get allocatedDpus() {
        return this.getNumberAttribute('allocated_dpus');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_assignment_configuration - computed: true, optional: true, required: false
    private _capacityAssignmentConfiguration = new CcCapacityReservation.CapacityAssignmentConfigurationPropertyOutputReference(this, "capacity_assignment_configuration");
    public get capacityAssignmentConfiguration() {
        return this._capacityAssignmentConfiguration;
    }
    public putCapacityAssignmentConfiguration(value: CcCapacityReservation.CapacityAssignmentConfigurationProperty) {
        this._capacityAssignmentConfiguration.internalValue = value;
    }
    public resetCapacityAssignmentConfiguration() {
        this._capacityAssignmentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityAssignmentConfigurationInput() {
        return this._capacityAssignmentConfiguration.internalValue;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_successful_allocation_time - computed: true, optional: false, required: false
    public get lastSuccessfulAllocationTime() {
        return this.getStringAttribute('last_successful_allocation_time');
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
    private _tags = new CcCapacityReservation.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCapacityReservation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_dpus - computed: false, optional: false, required: true
    private _targetDpus?: number; 
    public get targetDpus() {
        return this.getNumberAttribute('target_dpus');
    }
    public set targetDpus(value: number) {
        this._targetDpus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDpusInput() {
        return this._targetDpus;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_assignment_configuration: ccCapacityReservationCapacityAssignmentConfigurationPropertyToTerraform(this._capacityAssignmentConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccCapacityReservationTagPropertyToTerraform, false)(this._tags.internalValue),
            target_dpus: cdktn.numberToTerraform(this._targetDpus),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_assignment_configuration: {
                value: ccCapacityReservationCapacityAssignmentConfigurationPropertyToHclTerraform(this._capacityAssignmentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityReservation.CapacityAssignmentConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCapacityReservationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCapacityReservation.TagPropertyList",
            },
            target_dpus: {
                value: cdktn.numberToHclTerraform(this._targetDpus),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapacityReservationCapacityAssignmentPropertyToTerraform(struct?: CcCapacityReservation.CapacityAssignmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        workgroup_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workgroupNames),
    }
}


export function ccCapacityReservationCapacityAssignmentPropertyToHclTerraform(struct?: CcCapacityReservation.CapacityAssignmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        workgroup_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workgroupNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityReservationCapacityAssignmentConfigurationPropertyToTerraform(struct?: CcCapacityReservation.CapacityAssignmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_assignments: cdktn.listMapper(ccCapacityReservationCapacityAssignmentPropertyToTerraform, false)(struct!.capacityAssignments),
    }
}


export function ccCapacityReservationCapacityAssignmentConfigurationPropertyToHclTerraform(struct?: CcCapacityReservation.CapacityAssignmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_assignments: {
            value: cdktn.listMapperHcl(ccCapacityReservationCapacityAssignmentPropertyToHclTerraform, false)(struct!.capacityAssignments),
            isBlock: true,
            type: "list",
            storageClassType: "CapacityAssignmentPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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


export namespace CcCapacityReservation {
export interface CapacityAssignmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#workgroup_names CcCapacityReservation#workgroup_names}
    */
    readonly workgroupNames?: string[];
}
export class CapacityAssignmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityAssignmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workgroupNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupNames = this._workgroupNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityAssignmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workgroupNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workgroupNames = value.workgroupNames;
        }
    }

    // workgroup_names - computed: true, optional: true, required: false
    private _workgroupNames?: string[]; 
    public get workgroupNames() {
        return this.getListAttribute('workgroup_names');
    }
    public set workgroupNames(value: string[]) {
        this._workgroupNames = value;
    }
    public resetWorkgroupNames() {
        this._workgroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNamesInput() {
        return this._workgroupNames;
    }
}

export class CapacityAssignmentPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityAssignmentProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityAssignmentPropertyOutputReference {
        return new CapacityAssignmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacityAssignmentConfigurationProperty {
    /**
    * List of capacity assignments
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#capacity_assignments CcCapacityReservation#capacity_assignments}
    */
    readonly capacityAssignments?: CapacityAssignmentProperty[] | cdktn.IResolvable;
}
export class CapacityAssignmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityAssignmentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityAssignments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityAssignments = this._capacityAssignments?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityAssignmentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityAssignments.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityAssignments.internalValue = value.capacityAssignments;
        }
    }

    // capacity_assignments - computed: true, optional: true, required: false
    private _capacityAssignments = new CapacityAssignmentPropertyList(this, "capacity_assignments", false);
    public get capacityAssignments() {
        return this._capacityAssignments;
    }
    public putCapacityAssignments(value: CapacityAssignmentProperty[] | cdktn.IResolvable) {
        this._capacityAssignments.internalValue = value;
    }
    public resetCapacityAssignments() {
        this._capacityAssignments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityAssignmentsInput() {
        return this._capacityAssignments.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#key CcCapacityReservation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#value CcCapacityReservation#value}
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
