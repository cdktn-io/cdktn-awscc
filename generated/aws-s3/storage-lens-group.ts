// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStorageLensGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Sets the Storage Lens Group filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#filter CcStorageLensGroup#filter}
    */
    readonly filter: CcStorageLensGroup.FilterProperty;
    /**
    * The name that identifies the Amazon S3 Storage Lens Group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#name CcStorageLensGroup#name}
    */
    readonly name: string;
    /**
    * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#tags CcStorageLensGroup#tags}
    */
    readonly tags?: CcStorageLensGroup.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group}
*/
export class CcStorageLensGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_storage_lens_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStorageLensGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStorageLensGroup to import
    * @param importFromId The id of the existing CcStorageLensGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStorageLensGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStorageLensGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcStorageLensGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_storage_lens_group',
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
        this._filter.internalValue = config.filter;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // filter - computed: false, optional: false, required: true
    private _filter = new CcStorageLensGroup.FilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: CcStorageLensGroup.FilterProperty) {
        this._filter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
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

    // storage_lens_group_arn - computed: true, optional: false, required: false
    public get storageLensGroupArn() {
        return this.getStringAttribute('storage_lens_group_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStorageLensGroup.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStorageLensGroup.TagsProperty[] | cdktn.IResolvable) {
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
            filter: ccStorageLensGroupFilterPropertyToTerraform(this._filter.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccStorageLensGroupTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            filter: {
                value: ccStorageLensGroupFilterPropertyToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStorageLensGroup.FilterProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStorageLensGroupTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStorageLensGroup.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStorageLensGroupTagPropertyToTerraform(struct?: CcStorageLensGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageLensGroupTagPropertyToHclTerraform(struct?: CcStorageLensGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccStorageLensGroupMatchObjectAgePropertyToTerraform(struct?: CcStorageLensGroup.MatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
        days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
    }
}


export function ccStorageLensGroupMatchObjectAgePropertyToHclTerraform(struct?: CcStorageLensGroup.MatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        days_less_than: {
            value: cdktn.numberToHclTerraform(struct!.daysLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupMatchObjectSizePropertyToTerraform(struct?: CcStorageLensGroup.MatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
        bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
    }
}


export function ccStorageLensGroupMatchObjectSizePropertyToHclTerraform(struct?: CcStorageLensGroup.MatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bytes_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        bytes_less_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupAndPropertyToTerraform(struct?: CcStorageLensGroup.AndProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
        match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
        match_any_tag: cdktn.listMapper(ccStorageLensGroupTagPropertyToTerraform, false)(struct!.matchAnyTag),
        match_object_age: ccStorageLensGroupMatchObjectAgePropertyToTerraform(struct!.matchObjectAge),
        match_object_size: ccStorageLensGroupMatchObjectSizePropertyToTerraform(struct!.matchObjectSize),
    }
}


export function ccStorageLensGroupAndPropertyToHclTerraform(struct?: CcStorageLensGroup.AndProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_any_prefix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_suffix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_tag: {
            value: cdktn.listMapperHcl(ccStorageLensGroupTagPropertyToHclTerraform, false)(struct!.matchAnyTag),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
        match_object_age: {
            value: ccStorageLensGroupMatchObjectAgePropertyToHclTerraform(struct!.matchObjectAge),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchObjectAgeProperty",
        },
        match_object_size: {
            value: ccStorageLensGroupMatchObjectSizePropertyToHclTerraform(struct!.matchObjectSize),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchObjectSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupFilterMatchAnyTagPropertyToTerraform(struct?: CcStorageLensGroup.FilterMatchAnyTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageLensGroupFilterMatchAnyTagPropertyToHclTerraform(struct?: CcStorageLensGroup.FilterMatchAnyTagProperty | cdktn.IResolvable): any {
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


export function ccStorageLensGroupFilterMatchObjectAgePropertyToTerraform(struct?: CcStorageLensGroup.FilterMatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
        days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
    }
}


export function ccStorageLensGroupFilterMatchObjectAgePropertyToHclTerraform(struct?: CcStorageLensGroup.FilterMatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        days_less_than: {
            value: cdktn.numberToHclTerraform(struct!.daysLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupFilterMatchObjectSizePropertyToTerraform(struct?: CcStorageLensGroup.FilterMatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
        bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
    }
}


export function ccStorageLensGroupFilterMatchObjectSizePropertyToHclTerraform(struct?: CcStorageLensGroup.FilterMatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bytes_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        bytes_less_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupFilterOrMatchAnyTagPropertyToTerraform(struct?: CcStorageLensGroup.FilterOrMatchAnyTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageLensGroupFilterOrMatchAnyTagPropertyToHclTerraform(struct?: CcStorageLensGroup.FilterOrMatchAnyTagProperty | cdktn.IResolvable): any {
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


export function ccStorageLensGroupFilterOrMatchObjectAgePropertyToTerraform(struct?: CcStorageLensGroup.FilterOrMatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_greater_than: cdktn.numberToTerraform(struct!.daysGreaterThan),
        days_less_than: cdktn.numberToTerraform(struct!.daysLessThan),
    }
}


export function ccStorageLensGroupFilterOrMatchObjectAgePropertyToHclTerraform(struct?: CcStorageLensGroup.FilterOrMatchObjectAgeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.daysGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        days_less_than: {
            value: cdktn.numberToHclTerraform(struct!.daysLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupFilterOrMatchObjectSizePropertyToTerraform(struct?: CcStorageLensGroup.FilterOrMatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bytes_greater_than: cdktn.numberToTerraform(struct!.bytesGreaterThan),
        bytes_less_than: cdktn.numberToTerraform(struct!.bytesLessThan),
    }
}


export function ccStorageLensGroupFilterOrMatchObjectSizePropertyToHclTerraform(struct?: CcStorageLensGroup.FilterOrMatchObjectSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bytes_greater_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        bytes_less_than: {
            value: cdktn.numberToHclTerraform(struct!.bytesLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupOrPropertyToTerraform(struct?: CcStorageLensGroup.OrProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
        match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
        match_any_tag: cdktn.listMapper(ccStorageLensGroupFilterOrMatchAnyTagPropertyToTerraform, false)(struct!.matchAnyTag),
        match_object_age: ccStorageLensGroupFilterOrMatchObjectAgePropertyToTerraform(struct!.matchObjectAge),
        match_object_size: ccStorageLensGroupFilterOrMatchObjectSizePropertyToTerraform(struct!.matchObjectSize),
    }
}


export function ccStorageLensGroupOrPropertyToHclTerraform(struct?: CcStorageLensGroup.OrProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_any_prefix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_suffix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_tag: {
            value: cdktn.listMapperHcl(ccStorageLensGroupFilterOrMatchAnyTagPropertyToHclTerraform, false)(struct!.matchAnyTag),
            isBlock: true,
            type: "set",
            storageClassType: "FilterOrMatchAnyTagPropertyList",
        },
        match_object_age: {
            value: ccStorageLensGroupFilterOrMatchObjectAgePropertyToHclTerraform(struct!.matchObjectAge),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterOrMatchObjectAgeProperty",
        },
        match_object_size: {
            value: ccStorageLensGroupFilterOrMatchObjectSizePropertyToHclTerraform(struct!.matchObjectSize),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterOrMatchObjectSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupFilterPropertyToTerraform(struct?: CcStorageLensGroup.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and: ccStorageLensGroupAndPropertyToTerraform(struct!.and),
        match_any_prefix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnyPrefix),
        match_any_suffix: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchAnySuffix),
        match_any_tag: cdktn.listMapper(ccStorageLensGroupFilterMatchAnyTagPropertyToTerraform, false)(struct!.matchAnyTag),
        match_object_age: ccStorageLensGroupFilterMatchObjectAgePropertyToTerraform(struct!.matchObjectAge),
        match_object_size: ccStorageLensGroupFilterMatchObjectSizePropertyToTerraform(struct!.matchObjectSize),
        or: ccStorageLensGroupOrPropertyToTerraform(struct!.or),
    }
}


export function ccStorageLensGroupFilterPropertyToHclTerraform(struct?: CcStorageLensGroup.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and: {
            value: ccStorageLensGroupAndPropertyToHclTerraform(struct!.and),
            isBlock: true,
            type: "struct",
            storageClassType: "AndProperty",
        },
        match_any_prefix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnyPrefix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_suffix: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchAnySuffix),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_any_tag: {
            value: cdktn.listMapperHcl(ccStorageLensGroupFilterMatchAnyTagPropertyToHclTerraform, false)(struct!.matchAnyTag),
            isBlock: true,
            type: "set",
            storageClassType: "FilterMatchAnyTagPropertyList",
        },
        match_object_age: {
            value: ccStorageLensGroupFilterMatchObjectAgePropertyToHclTerraform(struct!.matchObjectAge),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterMatchObjectAgeProperty",
        },
        match_object_size: {
            value: ccStorageLensGroupFilterMatchObjectSizePropertyToHclTerraform(struct!.matchObjectSize),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterMatchObjectSizeProperty",
        },
        or: {
            value: ccStorageLensGroupOrPropertyToHclTerraform(struct!.or),
            isBlock: true,
            type: "struct",
            storageClassType: "OrProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStorageLensGroupTagsPropertyToTerraform(struct?: CcStorageLensGroup.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStorageLensGroupTagsPropertyToHclTerraform(struct?: CcStorageLensGroup.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcStorageLensGroup {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#key CcStorageLensGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#value CcStorageLensGroup#value}
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
export interface MatchObjectAgeProperty {
    /**
    * Minimum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_greater_than CcStorageLensGroup#days_greater_than}
    */
    readonly daysGreaterThan?: number;
    /**
    * Maximum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_less_than CcStorageLensGroup#days_less_than}
    */
    readonly daysLessThan?: number;
}
export class MatchObjectAgePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchObjectAgeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daysGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysGreaterThan = this._daysGreaterThan;
        }
        if (this._daysLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysLessThan = this._daysLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchObjectAgeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daysGreaterThan = undefined;
            this._daysLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daysGreaterThan = value.daysGreaterThan;
            this._daysLessThan = value.daysLessThan;
        }
    }

    // days_greater_than - computed: true, optional: true, required: false
    private _daysGreaterThan?: number; 
    public get daysGreaterThan() {
        return this.getNumberAttribute('days_greater_than');
    }
    public set daysGreaterThan(value: number) {
        this._daysGreaterThan = value;
    }
    public resetDaysGreaterThan() {
        this._daysGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysGreaterThanInput() {
        return this._daysGreaterThan;
    }

    // days_less_than - computed: true, optional: true, required: false
    private _daysLessThan?: number; 
    public get daysLessThan() {
        return this.getNumberAttribute('days_less_than');
    }
    public set daysLessThan(value: number) {
        this._daysLessThan = value;
    }
    public resetDaysLessThan() {
        this._daysLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysLessThanInput() {
        return this._daysLessThan;
    }
}
export interface MatchObjectSizeProperty {
    /**
    * Minimum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_greater_than CcStorageLensGroup#bytes_greater_than}
    */
    readonly bytesGreaterThan?: number;
    /**
    * Maximum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_less_than CcStorageLensGroup#bytes_less_than}
    */
    readonly bytesLessThan?: number;
}
export class MatchObjectSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchObjectSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bytesGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
        }
        if (this._bytesLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesLessThan = this._bytesLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchObjectSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = undefined;
            this._bytesLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = value.bytesGreaterThan;
            this._bytesLessThan = value.bytesLessThan;
        }
    }

    // bytes_greater_than - computed: true, optional: true, required: false
    private _bytesGreaterThan?: number; 
    public get bytesGreaterThan() {
        return this.getNumberAttribute('bytes_greater_than');
    }
    public set bytesGreaterThan(value: number) {
        this._bytesGreaterThan = value;
    }
    public resetBytesGreaterThan() {
        this._bytesGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesGreaterThanInput() {
        return this._bytesGreaterThan;
    }

    // bytes_less_than - computed: true, optional: true, required: false
    private _bytesLessThan?: number; 
    public get bytesLessThan() {
        return this.getNumberAttribute('bytes_less_than');
    }
    public set bytesLessThan(value: number) {
        this._bytesLessThan = value;
    }
    public resetBytesLessThan() {
        this._bytesLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesLessThanInput() {
        return this._bytesLessThan;
    }
}
export interface AndProperty {
    /**
    * Filter to match any of the specified prefixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_prefix CcStorageLensGroup#match_any_prefix}
    */
    readonly matchAnyPrefix?: string[];
    /**
    * Filter to match any of the specified suffixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_suffix CcStorageLensGroup#match_any_suffix}
    */
    readonly matchAnySuffix?: string[];
    /**
    * Filter to match any of the specified object tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_tag CcStorageLensGroup#match_any_tag}
    */
    readonly matchAnyTag?: TagProperty[] | cdktn.IResolvable;
    /**
    * Filter to match all of the specified values for the minimum and maximum object age.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_age CcStorageLensGroup#match_object_age}
    */
    readonly matchObjectAge?: MatchObjectAgeProperty;
    /**
    * Filter to match all of the specified values for the minimum and maximum object size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_size CcStorageLensGroup#match_object_size}
    */
    readonly matchObjectSize?: MatchObjectSizeProperty;
}
export class AndPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AndProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchAnyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
        }
        if (this._matchAnySuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnySuffix = this._matchAnySuffix;
        }
        if (this._matchAnyTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
        }
        if (this._matchObjectAge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
        }
        if (this._matchObjectSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AndProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchAnyPrefix = undefined;
            this._matchAnySuffix = undefined;
            this._matchAnyTag.internalValue = undefined;
            this._matchObjectAge.internalValue = undefined;
            this._matchObjectSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchAnyPrefix = value.matchAnyPrefix;
            this._matchAnySuffix = value.matchAnySuffix;
            this._matchAnyTag.internalValue = value.matchAnyTag;
            this._matchObjectAge.internalValue = value.matchObjectAge;
            this._matchObjectSize.internalValue = value.matchObjectSize;
        }
    }

    // match_any_prefix - computed: true, optional: true, required: false
    private _matchAnyPrefix?: string[]; 
    public get matchAnyPrefix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
    }
    public set matchAnyPrefix(value: string[]) {
        this._matchAnyPrefix = value;
    }
    public resetMatchAnyPrefix() {
        this._matchAnyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyPrefixInput() {
        return this._matchAnyPrefix;
    }

    // match_any_suffix - computed: true, optional: true, required: false
    private _matchAnySuffix?: string[]; 
    public get matchAnySuffix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
    }
    public set matchAnySuffix(value: string[]) {
        this._matchAnySuffix = value;
    }
    public resetMatchAnySuffix() {
        this._matchAnySuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnySuffixInput() {
        return this._matchAnySuffix;
    }

    // match_any_tag - computed: true, optional: true, required: false
    private _matchAnyTag = new TagPropertyList(this, "match_any_tag", true);
    public get matchAnyTag() {
        return this._matchAnyTag;
    }
    public putMatchAnyTag(value: TagProperty[] | cdktn.IResolvable) {
        this._matchAnyTag.internalValue = value;
    }
    public resetMatchAnyTag() {
        this._matchAnyTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyTagInput() {
        return this._matchAnyTag.internalValue;
    }

    // match_object_age - computed: true, optional: true, required: false
    private _matchObjectAge = new MatchObjectAgePropertyOutputReference(this, "match_object_age");
    public get matchObjectAge() {
        return this._matchObjectAge;
    }
    public putMatchObjectAge(value: MatchObjectAgeProperty) {
        this._matchObjectAge.internalValue = value;
    }
    public resetMatchObjectAge() {
        this._matchObjectAge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectAgeInput() {
        return this._matchObjectAge.internalValue;
    }

    // match_object_size - computed: true, optional: true, required: false
    private _matchObjectSize = new MatchObjectSizePropertyOutputReference(this, "match_object_size");
    public get matchObjectSize() {
        return this._matchObjectSize;
    }
    public putMatchObjectSize(value: MatchObjectSizeProperty) {
        this._matchObjectSize.internalValue = value;
    }
    public resetMatchObjectSize() {
        this._matchObjectSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectSizeInput() {
        return this._matchObjectSize.internalValue;
    }
}
export interface FilterMatchAnyTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#key CcStorageLensGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#value CcStorageLensGroup#value}
    */
    readonly value?: string;
}
export class FilterMatchAnyTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterMatchAnyTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FilterMatchAnyTagProperty | cdktn.IResolvable | undefined) {
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

export class FilterMatchAnyTagPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterMatchAnyTagProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterMatchAnyTagPropertyOutputReference {
        return new FilterMatchAnyTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterMatchObjectAgeProperty {
    /**
    * Minimum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_greater_than CcStorageLensGroup#days_greater_than}
    */
    readonly daysGreaterThan?: number;
    /**
    * Maximum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_less_than CcStorageLensGroup#days_less_than}
    */
    readonly daysLessThan?: number;
}
export class FilterMatchObjectAgePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterMatchObjectAgeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daysGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysGreaterThan = this._daysGreaterThan;
        }
        if (this._daysLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysLessThan = this._daysLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterMatchObjectAgeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daysGreaterThan = undefined;
            this._daysLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daysGreaterThan = value.daysGreaterThan;
            this._daysLessThan = value.daysLessThan;
        }
    }

    // days_greater_than - computed: true, optional: true, required: false
    private _daysGreaterThan?: number; 
    public get daysGreaterThan() {
        return this.getNumberAttribute('days_greater_than');
    }
    public set daysGreaterThan(value: number) {
        this._daysGreaterThan = value;
    }
    public resetDaysGreaterThan() {
        this._daysGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysGreaterThanInput() {
        return this._daysGreaterThan;
    }

    // days_less_than - computed: true, optional: true, required: false
    private _daysLessThan?: number; 
    public get daysLessThan() {
        return this.getNumberAttribute('days_less_than');
    }
    public set daysLessThan(value: number) {
        this._daysLessThan = value;
    }
    public resetDaysLessThan() {
        this._daysLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysLessThanInput() {
        return this._daysLessThan;
    }
}
export interface FilterMatchObjectSizeProperty {
    /**
    * Minimum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_greater_than CcStorageLensGroup#bytes_greater_than}
    */
    readonly bytesGreaterThan?: number;
    /**
    * Maximum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_less_than CcStorageLensGroup#bytes_less_than}
    */
    readonly bytesLessThan?: number;
}
export class FilterMatchObjectSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterMatchObjectSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bytesGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
        }
        if (this._bytesLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesLessThan = this._bytesLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterMatchObjectSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = undefined;
            this._bytesLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = value.bytesGreaterThan;
            this._bytesLessThan = value.bytesLessThan;
        }
    }

    // bytes_greater_than - computed: true, optional: true, required: false
    private _bytesGreaterThan?: number; 
    public get bytesGreaterThan() {
        return this.getNumberAttribute('bytes_greater_than');
    }
    public set bytesGreaterThan(value: number) {
        this._bytesGreaterThan = value;
    }
    public resetBytesGreaterThan() {
        this._bytesGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesGreaterThanInput() {
        return this._bytesGreaterThan;
    }

    // bytes_less_than - computed: true, optional: true, required: false
    private _bytesLessThan?: number; 
    public get bytesLessThan() {
        return this.getNumberAttribute('bytes_less_than');
    }
    public set bytesLessThan(value: number) {
        this._bytesLessThan = value;
    }
    public resetBytesLessThan() {
        this._bytesLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesLessThanInput() {
        return this._bytesLessThan;
    }
}
export interface FilterOrMatchAnyTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#key CcStorageLensGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#value CcStorageLensGroup#value}
    */
    readonly value?: string;
}
export class FilterOrMatchAnyTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterOrMatchAnyTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FilterOrMatchAnyTagProperty | cdktn.IResolvable | undefined) {
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

export class FilterOrMatchAnyTagPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterOrMatchAnyTagProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterOrMatchAnyTagPropertyOutputReference {
        return new FilterOrMatchAnyTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterOrMatchObjectAgeProperty {
    /**
    * Minimum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_greater_than CcStorageLensGroup#days_greater_than}
    */
    readonly daysGreaterThan?: number;
    /**
    * Maximum object age to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#days_less_than CcStorageLensGroup#days_less_than}
    */
    readonly daysLessThan?: number;
}
export class FilterOrMatchObjectAgePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterOrMatchObjectAgeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daysGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysGreaterThan = this._daysGreaterThan;
        }
        if (this._daysLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysLessThan = this._daysLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterOrMatchObjectAgeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daysGreaterThan = undefined;
            this._daysLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daysGreaterThan = value.daysGreaterThan;
            this._daysLessThan = value.daysLessThan;
        }
    }

    // days_greater_than - computed: true, optional: true, required: false
    private _daysGreaterThan?: number; 
    public get daysGreaterThan() {
        return this.getNumberAttribute('days_greater_than');
    }
    public set daysGreaterThan(value: number) {
        this._daysGreaterThan = value;
    }
    public resetDaysGreaterThan() {
        this._daysGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysGreaterThanInput() {
        return this._daysGreaterThan;
    }

    // days_less_than - computed: true, optional: true, required: false
    private _daysLessThan?: number; 
    public get daysLessThan() {
        return this.getNumberAttribute('days_less_than');
    }
    public set daysLessThan(value: number) {
        this._daysLessThan = value;
    }
    public resetDaysLessThan() {
        this._daysLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysLessThanInput() {
        return this._daysLessThan;
    }
}
export interface FilterOrMatchObjectSizeProperty {
    /**
    * Minimum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_greater_than CcStorageLensGroup#bytes_greater_than}
    */
    readonly bytesGreaterThan?: number;
    /**
    * Maximum object size to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#bytes_less_than CcStorageLensGroup#bytes_less_than}
    */
    readonly bytesLessThan?: number;
}
export class FilterOrMatchObjectSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterOrMatchObjectSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bytesGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesGreaterThan = this._bytesGreaterThan;
        }
        if (this._bytesLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesLessThan = this._bytesLessThan;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterOrMatchObjectSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = undefined;
            this._bytesLessThan = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bytesGreaterThan = value.bytesGreaterThan;
            this._bytesLessThan = value.bytesLessThan;
        }
    }

    // bytes_greater_than - computed: true, optional: true, required: false
    private _bytesGreaterThan?: number; 
    public get bytesGreaterThan() {
        return this.getNumberAttribute('bytes_greater_than');
    }
    public set bytesGreaterThan(value: number) {
        this._bytesGreaterThan = value;
    }
    public resetBytesGreaterThan() {
        this._bytesGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesGreaterThanInput() {
        return this._bytesGreaterThan;
    }

    // bytes_less_than - computed: true, optional: true, required: false
    private _bytesLessThan?: number; 
    public get bytesLessThan() {
        return this.getNumberAttribute('bytes_less_than');
    }
    public set bytesLessThan(value: number) {
        this._bytesLessThan = value;
    }
    public resetBytesLessThan() {
        this._bytesLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesLessThanInput() {
        return this._bytesLessThan;
    }
}
export interface OrProperty {
    /**
    * Filter to match any of the specified prefixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_prefix CcStorageLensGroup#match_any_prefix}
    */
    readonly matchAnyPrefix?: string[];
    /**
    * Filter to match any of the specified suffixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_suffix CcStorageLensGroup#match_any_suffix}
    */
    readonly matchAnySuffix?: string[];
    /**
    * Filter to match any of the specified object tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_tag CcStorageLensGroup#match_any_tag}
    */
    readonly matchAnyTag?: FilterOrMatchAnyTagProperty[] | cdktn.IResolvable;
    /**
    * Filter to match all of the specified values for the minimum and maximum object age.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_age CcStorageLensGroup#match_object_age}
    */
    readonly matchObjectAge?: FilterOrMatchObjectAgeProperty;
    /**
    * Filter to match all of the specified values for the minimum and maximum object size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_size CcStorageLensGroup#match_object_size}
    */
    readonly matchObjectSize?: FilterOrMatchObjectSizeProperty;
}
export class OrPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchAnyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
        }
        if (this._matchAnySuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnySuffix = this._matchAnySuffix;
        }
        if (this._matchAnyTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
        }
        if (this._matchObjectAge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
        }
        if (this._matchObjectSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchAnyPrefix = undefined;
            this._matchAnySuffix = undefined;
            this._matchAnyTag.internalValue = undefined;
            this._matchObjectAge.internalValue = undefined;
            this._matchObjectSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchAnyPrefix = value.matchAnyPrefix;
            this._matchAnySuffix = value.matchAnySuffix;
            this._matchAnyTag.internalValue = value.matchAnyTag;
            this._matchObjectAge.internalValue = value.matchObjectAge;
            this._matchObjectSize.internalValue = value.matchObjectSize;
        }
    }

    // match_any_prefix - computed: true, optional: true, required: false
    private _matchAnyPrefix?: string[]; 
    public get matchAnyPrefix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
    }
    public set matchAnyPrefix(value: string[]) {
        this._matchAnyPrefix = value;
    }
    public resetMatchAnyPrefix() {
        this._matchAnyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyPrefixInput() {
        return this._matchAnyPrefix;
    }

    // match_any_suffix - computed: true, optional: true, required: false
    private _matchAnySuffix?: string[]; 
    public get matchAnySuffix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
    }
    public set matchAnySuffix(value: string[]) {
        this._matchAnySuffix = value;
    }
    public resetMatchAnySuffix() {
        this._matchAnySuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnySuffixInput() {
        return this._matchAnySuffix;
    }

    // match_any_tag - computed: true, optional: true, required: false
    private _matchAnyTag = new FilterOrMatchAnyTagPropertyList(this, "match_any_tag", true);
    public get matchAnyTag() {
        return this._matchAnyTag;
    }
    public putMatchAnyTag(value: FilterOrMatchAnyTagProperty[] | cdktn.IResolvable) {
        this._matchAnyTag.internalValue = value;
    }
    public resetMatchAnyTag() {
        this._matchAnyTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyTagInput() {
        return this._matchAnyTag.internalValue;
    }

    // match_object_age - computed: true, optional: true, required: false
    private _matchObjectAge = new FilterOrMatchObjectAgePropertyOutputReference(this, "match_object_age");
    public get matchObjectAge() {
        return this._matchObjectAge;
    }
    public putMatchObjectAge(value: FilterOrMatchObjectAgeProperty) {
        this._matchObjectAge.internalValue = value;
    }
    public resetMatchObjectAge() {
        this._matchObjectAge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectAgeInput() {
        return this._matchObjectAge.internalValue;
    }

    // match_object_size - computed: true, optional: true, required: false
    private _matchObjectSize = new FilterOrMatchObjectSizePropertyOutputReference(this, "match_object_size");
    public get matchObjectSize() {
        return this._matchObjectSize;
    }
    public putMatchObjectSize(value: FilterOrMatchObjectSizeProperty) {
        this._matchObjectSize.internalValue = value;
    }
    public resetMatchObjectSize() {
        this._matchObjectSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectSizeInput() {
        return this._matchObjectSize.internalValue;
    }
}
export interface FilterProperty {
    /**
    * The Storage Lens group will include objects that match all of the specified filter values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#and CcStorageLensGroup#and}
    */
    readonly and?: AndProperty;
    /**
    * Filter to match any of the specified prefixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_prefix CcStorageLensGroup#match_any_prefix}
    */
    readonly matchAnyPrefix?: string[];
    /**
    * Filter to match any of the specified suffixes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_suffix CcStorageLensGroup#match_any_suffix}
    */
    readonly matchAnySuffix?: string[];
    /**
    * Filter to match any of the specified object tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_any_tag CcStorageLensGroup#match_any_tag}
    */
    readonly matchAnyTag?: FilterMatchAnyTagProperty[] | cdktn.IResolvable;
    /**
    * Filter to match all of the specified values for the minimum and maximum object age.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_age CcStorageLensGroup#match_object_age}
    */
    readonly matchObjectAge?: FilterMatchObjectAgeProperty;
    /**
    * Filter to match all of the specified values for the minimum and maximum object size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#match_object_size CcStorageLensGroup#match_object_size}
    */
    readonly matchObjectSize?: FilterMatchObjectSizeProperty;
    /**
    * The Storage Lens group will include objects that match any of the specified filter values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#or CcStorageLensGroup#or}
    */
    readonly or?: OrProperty;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._and?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.and = this._and?.internalValue;
        }
        if (this._matchAnyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyPrefix = this._matchAnyPrefix;
        }
        if (this._matchAnySuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnySuffix = this._matchAnySuffix;
        }
        if (this._matchAnyTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAnyTag = this._matchAnyTag?.internalValue;
        }
        if (this._matchObjectAge?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectAge = this._matchObjectAge?.internalValue;
        }
        if (this._matchObjectSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchObjectSize = this._matchObjectSize?.internalValue;
        }
        if (this._or?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.or = this._or?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._and.internalValue = undefined;
            this._matchAnyPrefix = undefined;
            this._matchAnySuffix = undefined;
            this._matchAnyTag.internalValue = undefined;
            this._matchObjectAge.internalValue = undefined;
            this._matchObjectSize.internalValue = undefined;
            this._or.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._and.internalValue = value.and;
            this._matchAnyPrefix = value.matchAnyPrefix;
            this._matchAnySuffix = value.matchAnySuffix;
            this._matchAnyTag.internalValue = value.matchAnyTag;
            this._matchObjectAge.internalValue = value.matchObjectAge;
            this._matchObjectSize.internalValue = value.matchObjectSize;
            this._or.internalValue = value.or;
        }
    }

    // and - computed: true, optional: true, required: false
    private _and = new AndPropertyOutputReference(this, "and");
    public get and() {
        return this._and;
    }
    public putAnd(value: AndProperty) {
        this._and.internalValue = value;
    }
    public resetAnd() {
        this._and.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andInput() {
        return this._and.internalValue;
    }

    // match_any_prefix - computed: true, optional: true, required: false
    private _matchAnyPrefix?: string[]; 
    public get matchAnyPrefix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_prefix'));
    }
    public set matchAnyPrefix(value: string[]) {
        this._matchAnyPrefix = value;
    }
    public resetMatchAnyPrefix() {
        this._matchAnyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyPrefixInput() {
        return this._matchAnyPrefix;
    }

    // match_any_suffix - computed: true, optional: true, required: false
    private _matchAnySuffix?: string[]; 
    public get matchAnySuffix() {
        return cdktn.Fn.tolist(this.getListAttribute('match_any_suffix'));
    }
    public set matchAnySuffix(value: string[]) {
        this._matchAnySuffix = value;
    }
    public resetMatchAnySuffix() {
        this._matchAnySuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnySuffixInput() {
        return this._matchAnySuffix;
    }

    // match_any_tag - computed: true, optional: true, required: false
    private _matchAnyTag = new FilterMatchAnyTagPropertyList(this, "match_any_tag", true);
    public get matchAnyTag() {
        return this._matchAnyTag;
    }
    public putMatchAnyTag(value: FilterMatchAnyTagProperty[] | cdktn.IResolvable) {
        this._matchAnyTag.internalValue = value;
    }
    public resetMatchAnyTag() {
        this._matchAnyTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAnyTagInput() {
        return this._matchAnyTag.internalValue;
    }

    // match_object_age - computed: true, optional: true, required: false
    private _matchObjectAge = new FilterMatchObjectAgePropertyOutputReference(this, "match_object_age");
    public get matchObjectAge() {
        return this._matchObjectAge;
    }
    public putMatchObjectAge(value: FilterMatchObjectAgeProperty) {
        this._matchObjectAge.internalValue = value;
    }
    public resetMatchObjectAge() {
        this._matchObjectAge.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectAgeInput() {
        return this._matchObjectAge.internalValue;
    }

    // match_object_size - computed: true, optional: true, required: false
    private _matchObjectSize = new FilterMatchObjectSizePropertyOutputReference(this, "match_object_size");
    public get matchObjectSize() {
        return this._matchObjectSize;
    }
    public putMatchObjectSize(value: FilterMatchObjectSizeProperty) {
        this._matchObjectSize.internalValue = value;
    }
    public resetMatchObjectSize() {
        this._matchObjectSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchObjectSizeInput() {
        return this._matchObjectSize.internalValue;
    }

    // or - computed: true, optional: true, required: false
    private _or = new OrPropertyOutputReference(this, "or");
    public get or() {
        return this._or;
    }
    public putOr(value: OrProperty) {
        this._or.internalValue = value;
    }
    public resetOr() {
        this._or.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orInput() {
        return this._or.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#key CcStorageLensGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_storage_lens_group#value CcStorageLensGroup#value}
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
