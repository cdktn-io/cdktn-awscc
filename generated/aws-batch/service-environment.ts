// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#capacity_limits CcServiceEnvironment#capacity_limits}
    */
    readonly capacityLimits: CcServiceEnvironment.CapacityLimitProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#service_environment_name CcServiceEnvironment#service_environment_name}
    */
    readonly serviceEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#service_environment_type CcServiceEnvironment#service_environment_type}
    */
    readonly serviceEnvironmentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#state CcServiceEnvironment#state}
    */
    readonly state?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#tags CcServiceEnvironment#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment awscc_batch_service_environment}
*/
export class CcServiceEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_batch_service_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceEnvironment to import
    * @param importFromId The id of the existing CcServiceEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_service_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment awscc_batch_service_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_batch_service_environment',
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
        this._capacityLimits.internalValue = config.capacityLimits;
        this._serviceEnvironmentName = config.serviceEnvironmentName;
        this._serviceEnvironmentType = config.serviceEnvironmentType;
        this._state = config.state;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity_limits - computed: false, optional: false, required: true
    private _capacityLimits = new CcServiceEnvironment.CapacityLimitPropertyList(this, "capacity_limits", false);
    public get capacityLimits() {
        return this._capacityLimits;
    }
    public putCapacityLimits(value: CcServiceEnvironment.CapacityLimitProperty[] | cdktn.IResolvable) {
        this._capacityLimits.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityLimitsInput() {
        return this._capacityLimits.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // service_environment_arn - computed: true, optional: false, required: false
    public get serviceEnvironmentArn() {
        return this.getStringAttribute('service_environment_arn');
    }

    // service_environment_name - computed: true, optional: true, required: false
    private _serviceEnvironmentName?: string; 
    public get serviceEnvironmentName() {
        return this.getStringAttribute('service_environment_name');
    }
    public set serviceEnvironmentName(value: string) {
        this._serviceEnvironmentName = value;
    }
    public resetServiceEnvironmentName() {
        this._serviceEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceEnvironmentNameInput() {
        return this._serviceEnvironmentName;
    }

    // service_environment_type - computed: false, optional: false, required: true
    private _serviceEnvironmentType?: string; 
    public get serviceEnvironmentType() {
        return this.getStringAttribute('service_environment_type');
    }
    public set serviceEnvironmentType(value: string) {
        this._serviceEnvironmentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceEnvironmentTypeInput() {
        return this._serviceEnvironmentType;
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
            capacity_limits: cdktn.listMapper(ccServiceEnvironmentCapacityLimitPropertyToTerraform, false)(this._capacityLimits.internalValue),
            service_environment_name: cdktn.stringToTerraform(this._serviceEnvironmentName),
            service_environment_type: cdktn.stringToTerraform(this._serviceEnvironmentType),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_limits: {
                value: cdktn.listMapperHcl(ccServiceEnvironmentCapacityLimitPropertyToHclTerraform, false)(this._capacityLimits.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcServiceEnvironment.CapacityLimitPropertyList",
            },
            service_environment_name: {
                value: cdktn.stringToHclTerraform(this._serviceEnvironmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_environment_type: {
                value: cdktn.stringToHclTerraform(this._serviceEnvironmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccServiceEnvironmentCapacityLimitPropertyToTerraform(struct?: CcServiceEnvironment.CapacityLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_unit: cdktn.stringToTerraform(struct!.capacityUnit),
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
    }
}


export function ccServiceEnvironmentCapacityLimitPropertyToHclTerraform(struct?: CcServiceEnvironment.CapacityLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_unit: {
            value: cdktn.stringToHclTerraform(struct!.capacityUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcServiceEnvironment {
export interface CapacityLimitProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#capacity_unit CcServiceEnvironment#capacity_unit}
    */
    readonly capacityUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/batch_service_environment#max_capacity CcServiceEnvironment#max_capacity}
    */
    readonly maxCapacity?: number;
}
export class CapacityLimitPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityLimitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityUnit = this._capacityUnit;
        }
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityLimitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityUnit = undefined;
            this._maxCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityUnit = value.capacityUnit;
            this._maxCapacity = value.maxCapacity;
        }
    }

    // capacity_unit - computed: true, optional: true, required: false
    private _capacityUnit?: string; 
    public get capacityUnit() {
        return this.getStringAttribute('capacity_unit');
    }
    public set capacityUnit(value: string) {
        this._capacityUnit = value;
    }
    public resetCapacityUnit() {
        this._capacityUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityUnitInput() {
        return this._capacityUnit;
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }
}

export class CapacityLimitPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityLimitProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityLimitPropertyOutputReference {
        return new CapacityLimitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
