// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCollectionGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#capacity_limits CcCollectionGroup#capacity_limits}
    */
    readonly capacityLimits?: CcCollectionGroup.CapacityLimitsProperty;
    /**
    * The description of the collection group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#description CcCollectionGroup#description}
    */
    readonly description?: string;
    /**
    * The generation of Amazon OpenSearch Serverless for the collection group. Valid values are CLASSIC and NEXTGEN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#generation CcCollectionGroup#generation}
    */
    readonly generation?: string;
    /**
    * The name of the collection group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#name CcCollectionGroup#name}
    */
    readonly name: string;
    /**
    * Indicates whether standby replicas are used for the collection group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#standby_replicas CcCollectionGroup#standby_replicas}
    */
    readonly standbyReplicas: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#tags CcCollectionGroup#tags}
    */
    readonly tags?: CcCollectionGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group awscc_opensearchserverless_collection_group}
*/
export class CcCollectionGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opensearchserverless_collection_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCollectionGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCollectionGroup to import
    * @param importFromId The id of the existing CcCollectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCollectionGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchserverless_collection_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group awscc_opensearchserverless_collection_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCollectionGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcCollectionGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_opensearchserverless_collection_group',
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
        this._capacityLimits.internalValue = config.capacityLimits;
        this._description = config.description;
        this._generation = config.generation;
        this._name = config.name;
        this._standbyReplicas = config.standbyReplicas;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_limits - computed: true, optional: true, required: false
    private _capacityLimits = new CcCollectionGroup.CapacityLimitsPropertyOutputReference(this, "capacity_limits");
    public get capacityLimits() {
        return this._capacityLimits;
    }
    public putCapacityLimits(value: CcCollectionGroup.CapacityLimitsProperty) {
        this._capacityLimits.internalValue = value;
    }
    public resetCapacityLimits() {
        this._capacityLimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityLimitsInput() {
        return this._capacityLimits.internalValue;
    }

    // collection_group_id - computed: true, optional: false, required: false
    public get collectionGroupId() {
        return this.getStringAttribute('collection_group_id');
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

    // generation - computed: true, optional: true, required: false
    private _generation?: string; 
    public get generation() {
        return this.getStringAttribute('generation');
    }
    public set generation(value: string) {
        this._generation = value;
    }
    public resetGeneration() {
        this._generation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generationInput() {
        return this._generation;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // standby_replicas - computed: false, optional: false, required: true
    private _standbyReplicas?: string; 
    public get standbyReplicas() {
        return this.getStringAttribute('standby_replicas');
    }
    public set standbyReplicas(value: string) {
        this._standbyReplicas = value;
    }
    // Temporarily expose input value. Use with caution.
    public get standbyReplicasInput() {
        return this._standbyReplicas;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCollectionGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCollectionGroup.TagProperty[] | cdktn.IResolvable) {
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
            capacity_limits: ccCollectionGroupCapacityLimitsPropertyToTerraform(this._capacityLimits.internalValue),
            description: cdktn.stringToTerraform(this._description),
            generation: cdktn.stringToTerraform(this._generation),
            name: cdktn.stringToTerraform(this._name),
            standby_replicas: cdktn.stringToTerraform(this._standbyReplicas),
            tags: cdktn.listMapper(ccCollectionGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_limits: {
                value: ccCollectionGroupCapacityLimitsPropertyToHclTerraform(this._capacityLimits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollectionGroup.CapacityLimitsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            generation: {
                value: cdktn.stringToHclTerraform(this._generation),
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
            standby_replicas: {
                value: cdktn.stringToHclTerraform(this._standbyReplicas),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCollectionGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCollectionGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCollectionGroupCapacityLimitsPropertyToTerraform(struct?: CcCollectionGroup.CapacityLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_indexing_capacity_in_ocu: cdktn.numberToTerraform(struct!.maxIndexingCapacityInOcu),
        max_search_capacity_in_ocu: cdktn.numberToTerraform(struct!.maxSearchCapacityInOcu),
        min_indexing_capacity_in_ocu: cdktn.numberToTerraform(struct!.minIndexingCapacityInOcu),
        min_search_capacity_in_ocu: cdktn.numberToTerraform(struct!.minSearchCapacityInOcu),
    }
}


export function ccCollectionGroupCapacityLimitsPropertyToHclTerraform(struct?: CcCollectionGroup.CapacityLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_indexing_capacity_in_ocu: {
            value: cdktn.numberToHclTerraform(struct!.maxIndexingCapacityInOcu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_search_capacity_in_ocu: {
            value: cdktn.numberToHclTerraform(struct!.maxSearchCapacityInOcu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_indexing_capacity_in_ocu: {
            value: cdktn.numberToHclTerraform(struct!.minIndexingCapacityInOcu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_search_capacity_in_ocu: {
            value: cdktn.numberToHclTerraform(struct!.minSearchCapacityInOcu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollectionGroupTagPropertyToTerraform(struct?: CcCollectionGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCollectionGroupTagPropertyToHclTerraform(struct?: CcCollectionGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCollectionGroup {
export interface CapacityLimitsProperty {
    /**
    * The maximum indexing capacity for collections in the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#max_indexing_capacity_in_ocu CcCollectionGroup#max_indexing_capacity_in_ocu}
    */
    readonly maxIndexingCapacityInOcu?: number;
    /**
    * The maximum search capacity for collections in the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#max_search_capacity_in_ocu CcCollectionGroup#max_search_capacity_in_ocu}
    */
    readonly maxSearchCapacityInOcu?: number;
    /**
    * The minimum indexing capacity for collections in the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#min_indexing_capacity_in_ocu CcCollectionGroup#min_indexing_capacity_in_ocu}
    */
    readonly minIndexingCapacityInOcu?: number;
    /**
    * The minimum search capacity for collections in the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#min_search_capacity_in_ocu CcCollectionGroup#min_search_capacity_in_ocu}
    */
    readonly minSearchCapacityInOcu?: number;
}
export class CapacityLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxIndexingCapacityInOcu !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIndexingCapacityInOcu = this._maxIndexingCapacityInOcu;
        }
        if (this._maxSearchCapacityInOcu !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSearchCapacityInOcu = this._maxSearchCapacityInOcu;
        }
        if (this._minIndexingCapacityInOcu !== undefined) {
            hasAnyValues = true;
            internalValueResult.minIndexingCapacityInOcu = this._minIndexingCapacityInOcu;
        }
        if (this._minSearchCapacityInOcu !== undefined) {
            hasAnyValues = true;
            internalValueResult.minSearchCapacityInOcu = this._minSearchCapacityInOcu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxIndexingCapacityInOcu = undefined;
            this._maxSearchCapacityInOcu = undefined;
            this._minIndexingCapacityInOcu = undefined;
            this._minSearchCapacityInOcu = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxIndexingCapacityInOcu = value.maxIndexingCapacityInOcu;
            this._maxSearchCapacityInOcu = value.maxSearchCapacityInOcu;
            this._minIndexingCapacityInOcu = value.minIndexingCapacityInOcu;
            this._minSearchCapacityInOcu = value.minSearchCapacityInOcu;
        }
    }

    // max_indexing_capacity_in_ocu - computed: true, optional: true, required: false
    private _maxIndexingCapacityInOcu?: number; 
    public get maxIndexingCapacityInOcu() {
        return this.getNumberAttribute('max_indexing_capacity_in_ocu');
    }
    public set maxIndexingCapacityInOcu(value: number) {
        this._maxIndexingCapacityInOcu = value;
    }
    public resetMaxIndexingCapacityInOcu() {
        this._maxIndexingCapacityInOcu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIndexingCapacityInOcuInput() {
        return this._maxIndexingCapacityInOcu;
    }

    // max_search_capacity_in_ocu - computed: true, optional: true, required: false
    private _maxSearchCapacityInOcu?: number; 
    public get maxSearchCapacityInOcu() {
        return this.getNumberAttribute('max_search_capacity_in_ocu');
    }
    public set maxSearchCapacityInOcu(value: number) {
        this._maxSearchCapacityInOcu = value;
    }
    public resetMaxSearchCapacityInOcu() {
        this._maxSearchCapacityInOcu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSearchCapacityInOcuInput() {
        return this._maxSearchCapacityInOcu;
    }

    // min_indexing_capacity_in_ocu - computed: true, optional: true, required: false
    private _minIndexingCapacityInOcu?: number; 
    public get minIndexingCapacityInOcu() {
        return this.getNumberAttribute('min_indexing_capacity_in_ocu');
    }
    public set minIndexingCapacityInOcu(value: number) {
        this._minIndexingCapacityInOcu = value;
    }
    public resetMinIndexingCapacityInOcu() {
        this._minIndexingCapacityInOcu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minIndexingCapacityInOcuInput() {
        return this._minIndexingCapacityInOcu;
    }

    // min_search_capacity_in_ocu - computed: true, optional: true, required: false
    private _minSearchCapacityInOcu?: number; 
    public get minSearchCapacityInOcu() {
        return this.getNumberAttribute('min_search_capacity_in_ocu');
    }
    public set minSearchCapacityInOcu(value: number) {
        this._minSearchCapacityInOcu = value;
    }
    public resetMinSearchCapacityInOcu() {
        this._minSearchCapacityInOcu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSearchCapacityInOcuInput() {
        return this._minSearchCapacityInOcu;
    }
}
export interface TagProperty {
    /**
    * The key in the key-value pair
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#key CcCollectionGroup#key}
    */
    readonly key?: string;
    /**
    * The value in the key-value pair
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearchserverless_collection_group#value CcCollectionGroup#value}
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
