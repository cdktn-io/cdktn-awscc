// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCidrCollectionProps extends cdktn.TerraformMetaArguments {
    /**
    * A complex type that contains information about the list of CIDR locations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection#locations CcCidrCollection#locations}
    */
    readonly locations?: CcCidrCollection.LocationProperty[] | cdktn.IResolvable;
    /**
    * A unique name for the CIDR collection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection#name CcCidrCollection#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection awscc_route53_cidr_collection}
*/
export class CcCidrCollection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_cidr_collection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCidrCollection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCidrCollection to import
    * @param importFromId The id of the existing CcCidrCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCidrCollection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_cidr_collection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection awscc_route53_cidr_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCidrCollectionProps
    */
    public constructor(scope: Construct, id: string, config: CcCidrCollectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_cidr_collection',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._locations.internalValue = config.locations;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cidr_collection_id - computed: true, optional: false, required: false
    public get cidrCollectionId() {
        return this.getStringAttribute('cidr_collection_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // locations - computed: true, optional: true, required: false
    private _locations = new CcCidrCollection.LocationPropertyList(this, "locations", true);
    public get locations() {
        return this._locations;
    }
    public putLocations(value: CcCidrCollection.LocationProperty[] | cdktn.IResolvable) {
        this._locations.internalValue = value;
    }
    public resetLocations() {
        this._locations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationsInput() {
        return this._locations.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            locations: cdktn.listMapper(ccCidrCollectionLocationPropertyToTerraform, false)(this._locations.internalValue),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            locations: {
                value: cdktn.listMapperHcl(ccCidrCollectionLocationPropertyToHclTerraform, false)(this._locations.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCidrCollection.LocationPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCidrCollectionLocationPropertyToTerraform(struct?: CcCidrCollection.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrList),
        location_name: cdktn.stringToTerraform(struct!.locationName),
    }
}


export function ccCidrCollectionLocationPropertyToHclTerraform(struct?: CcCidrCollection.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        location_name: {
            value: cdktn.stringToHclTerraform(struct!.locationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCidrCollection {
export interface LocationProperty {
    /**
    * A list of CIDR blocks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection#cidr_list CcCidrCollection#cidr_list}
    */
    readonly cidrList?: string[];
    /**
    * The name of the location that is associated with the CIDR collection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_cidr_collection#location_name CcCidrCollection#location_name}
    */
    readonly locationName?: string;
}
export class LocationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrList !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrList = this._cidrList;
        }
        if (this._locationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationName = this._locationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrList = undefined;
            this._locationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrList = value.cidrList;
            this._locationName = value.locationName;
        }
    }

    // cidr_list - computed: true, optional: true, required: false
    private _cidrList?: string[]; 
    public get cidrList() {
        return cdktn.Fn.tolist(this.getListAttribute('cidr_list'));
    }
    public set cidrList(value: string[]) {
        this._cidrList = value;
    }
    public resetCidrList() {
        this._cidrList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrListInput() {
        return this._cidrList;
    }

    // location_name - computed: true, optional: true, required: false
    private _locationName?: string; 
    public get locationName() {
        return this.getStringAttribute('location_name');
    }
    public set locationName(value: string) {
        this._locationName = value;
    }
    public resetLocationName() {
        this._locationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationNameInput() {
        return this._locationName;
    }
}

export class LocationPropertyList extends cdktn.ComplexList {
    public internalValue? : LocationProperty[] | cdktn.IResolvable

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
    public get(index: number): LocationPropertyOutputReference {
        return new LocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
