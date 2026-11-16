// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResiliencyGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARNs of the connections that are members of the resiliency group. When specified, this is the complete, authoritative membership list: on update, connections not present are disassociated, and an explicit empty list removes all members. Omit the property to leave the existing membership unmanaged (unchanged on update). On create, an omitted or empty list means no connections are associated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#connection_arns CcResiliencyGroup#connection_arns}
    */
    readonly connectionArns?: string[];
    /**
    * The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#intended_resiliency_model CcResiliencyGroup#intended_resiliency_model}
    */
    readonly intendedResiliencyModel?: string;
    /**
    * The name of the resiliency group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#resiliency_group_name CcResiliencyGroup#resiliency_group_name}
    */
    readonly resiliencyGroupName: string;
    /**
    * The tags associated with the resiliency group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#tags CcResiliencyGroup#tags}
    */
    readonly tags?: CcResiliencyGroup.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group awscc_directconnect_resiliency_group}
*/
export class CcResiliencyGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directconnect_resiliency_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResiliencyGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResiliencyGroup to import
    * @param importFromId The id of the existing CcResiliencyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResiliencyGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_resiliency_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group awscc_directconnect_resiliency_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResiliencyGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcResiliencyGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directconnect_resiliency_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._connectionArns = config.connectionArns;
        this._intendedResiliencyModel = config.intendedResiliencyModel;
        this._resiliencyGroupName = config.resiliencyGroupName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_arns - computed: true, optional: true, required: false
    private _connectionArns?: string[]; 
    public get connectionArns() {
        return cdktn.Fn.tolist(this.getListAttribute('connection_arns'));
    }
    public set connectionArns(value: string[]) {
        this._connectionArns = value;
    }
    public resetConnectionArns() {
        this._connectionArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnsInput() {
        return this._connectionArns;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // intended_resiliency_model - computed: true, optional: true, required: false
    private _intendedResiliencyModel?: string; 
    public get intendedResiliencyModel() {
        return this.getStringAttribute('intended_resiliency_model');
    }
    public set intendedResiliencyModel(value: string) {
        this._intendedResiliencyModel = value;
    }
    public resetIntendedResiliencyModel() {
        this._intendedResiliencyModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intendedResiliencyModelInput() {
        return this._intendedResiliencyModel;
    }

    // resiliency_group_arn - computed: true, optional: false, required: false
    public get resiliencyGroupArn() {
        return this.getStringAttribute('resiliency_group_arn');
    }

    // resiliency_group_id - computed: true, optional: false, required: false
    public get resiliencyGroupId() {
        return this.getStringAttribute('resiliency_group_id');
    }

    // resiliency_group_name - computed: false, optional: false, required: true
    private _resiliencyGroupName?: string; 
    public get resiliencyGroupName() {
        return this.getStringAttribute('resiliency_group_name');
    }
    public set resiliencyGroupName(value: string) {
        this._resiliencyGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resiliencyGroupNameInput() {
        return this._resiliencyGroupName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResiliencyGroup.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResiliencyGroup.TagsProperty[] | cdktn.IResolvable) {
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
            connection_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._connectionArns),
            intended_resiliency_model: cdktn.stringToTerraform(this._intendedResiliencyModel),
            resiliency_group_name: cdktn.stringToTerraform(this._resiliencyGroupName),
            tags: cdktn.listMapper(ccResiliencyGroupTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._connectionArns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            intended_resiliency_model: {
                value: cdktn.stringToHclTerraform(this._intendedResiliencyModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resiliency_group_name: {
                value: cdktn.stringToHclTerraform(this._resiliencyGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResiliencyGroupTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResiliencyGroup.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResiliencyGroupTagsPropertyToTerraform(struct?: CcResiliencyGroup.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResiliencyGroupTagsPropertyToHclTerraform(struct?: CcResiliencyGroup.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcResiliencyGroup {
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#key CcResiliencyGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#value CcResiliencyGroup#value}
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
