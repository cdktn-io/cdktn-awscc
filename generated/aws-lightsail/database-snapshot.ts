// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatabaseSnapshotProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the database on which to base your new snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#relational_database_name CcDatabaseSnapshot#relational_database_name}
    */
    readonly relationalDatabaseName: string;
    /**
    * The name for your new database snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#relational_database_snapshot_name CcDatabaseSnapshot#relational_database_snapshot_name}
    */
    readonly relationalDatabaseSnapshotName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#tags CcDatabaseSnapshot#tags}
    */
    readonly tags?: CcDatabaseSnapshot.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot awscc_lightsail_database_snapshot}
*/
export class CcDatabaseSnapshot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_database_snapshot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDatabaseSnapshot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDatabaseSnapshot to import
    * @param importFromId The id of the existing CcDatabaseSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDatabaseSnapshot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_database_snapshot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot awscc_lightsail_database_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatabaseSnapshotProps
    */
    public constructor(scope: Construct, id: string, config: CcDatabaseSnapshotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_database_snapshot',
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
        this._relationalDatabaseName = config.relationalDatabaseName;
        this._relationalDatabaseSnapshotName = config.relationalDatabaseSnapshotName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
        return this.getStringAttribute('engine');
    }

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }

    // from_relational_database_arn - computed: true, optional: false, required: false
    public get fromRelationalDatabaseArn() {
        return this.getStringAttribute('from_relational_database_arn');
    }

    // from_relational_database_blueprint_id - computed: true, optional: false, required: false
    public get fromRelationalDatabaseBlueprintId() {
        return this.getStringAttribute('from_relational_database_blueprint_id');
    }

    // from_relational_database_bundle_id - computed: true, optional: false, required: false
    public get fromRelationalDatabaseBundleId() {
        return this.getStringAttribute('from_relational_database_bundle_id');
    }

    // from_relational_database_name - computed: true, optional: false, required: false
    public get fromRelationalDatabaseName() {
        return this.getStringAttribute('from_relational_database_name');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location - computed: true, optional: false, required: false
    private _location = new CcDatabaseSnapshot.LocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // relational_database_name - computed: false, optional: false, required: true
    private _relationalDatabaseName?: string; 
    public get relationalDatabaseName() {
        return this.getStringAttribute('relational_database_name');
    }
    public set relationalDatabaseName(value: string) {
        this._relationalDatabaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseNameInput() {
        return this._relationalDatabaseName;
    }

    // relational_database_snapshot_name - computed: false, optional: false, required: true
    private _relationalDatabaseSnapshotName?: string; 
    public get relationalDatabaseSnapshotName() {
        return this.getStringAttribute('relational_database_snapshot_name');
    }
    public set relationalDatabaseSnapshotName(value: string) {
        this._relationalDatabaseSnapshotName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseSnapshotNameInput() {
        return this._relationalDatabaseSnapshotName;
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // size_in_gb - computed: true, optional: false, required: false
    public get sizeInGb() {
        return this.getNumberAttribute('size_in_gb');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // support_code - computed: true, optional: false, required: false
    public get supportCode() {
        return this.getStringAttribute('support_code');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDatabaseSnapshot.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDatabaseSnapshot.TagProperty[] | cdktn.IResolvable) {
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
            relational_database_name: cdktn.stringToTerraform(this._relationalDatabaseName),
            relational_database_snapshot_name: cdktn.stringToTerraform(this._relationalDatabaseSnapshotName),
            tags: cdktn.listMapper(ccDatabaseSnapshotTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            relational_database_name: {
                value: cdktn.stringToHclTerraform(this._relationalDatabaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            relational_database_snapshot_name: {
                value: cdktn.stringToHclTerraform(this._relationalDatabaseSnapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDatabaseSnapshotTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDatabaseSnapshot.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatabaseSnapshotLocationPropertyToTerraform(struct?: CcDatabaseSnapshot.LocationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDatabaseSnapshotLocationPropertyToHclTerraform(struct?: CcDatabaseSnapshot.LocationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDatabaseSnapshotTagPropertyToTerraform(struct?: CcDatabaseSnapshot.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDatabaseSnapshotTagPropertyToHclTerraform(struct?: CcDatabaseSnapshot.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDatabaseSnapshot {
export interface LocationProperty {
}
export class LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // region_name - computed: true, optional: false, required: false
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#key CcDatabaseSnapshot#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_database_snapshot#value CcDatabaseSnapshot#value}
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
