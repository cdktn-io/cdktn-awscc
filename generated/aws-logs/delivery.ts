// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeliveryProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the delivery destination that is associated with this delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#delivery_destination_arn CcDelivery#delivery_destination_arn}
    */
    readonly deliveryDestinationArn: string;
    /**
    * The name of the delivery source that is associated with this delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#delivery_source_name CcDelivery#delivery_source_name}
    */
    readonly deliverySourceName: string;
    /**
    * The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#field_delimiter CcDelivery#field_delimiter}
    */
    readonly fieldDelimiter?: string;
    /**
    * The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#record_fields CcDelivery#record_fields}
    */
    readonly recordFields?: string[];
    /**
    * This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#s3_enable_hive_compatible_path CcDelivery#s3_enable_hive_compatible_path}
    */
    readonly s3EnableHiveCompatiblePath?: boolean | cdktn.IResolvable;
    /**
    * This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#s3_suffix_path CcDelivery#s3_suffix_path}
    */
    readonly s3SuffixPath?: string;
    /**
    * The tags that have been assigned to this delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#tags CcDelivery#tags}
    */
    readonly tags?: CcDelivery.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery awscc_logs_delivery}
*/
export class CcDelivery extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_delivery";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDelivery resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDelivery to import
    * @param importFromId The id of the existing CcDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDelivery to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_delivery", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery awscc_logs_delivery} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeliveryProps
    */
    public constructor(scope: Construct, id: string, config: CcDeliveryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_delivery',
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
        this._deliveryDestinationArn = config.deliveryDestinationArn;
        this._deliverySourceName = config.deliverySourceName;
        this._fieldDelimiter = config.fieldDelimiter;
        this._recordFields = config.recordFields;
        this._s3EnableHiveCompatiblePath = config.s3EnableHiveCompatiblePath;
        this._s3SuffixPath = config.s3SuffixPath;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delivery_destination_arn - computed: false, optional: false, required: true
    private _deliveryDestinationArn?: string; 
    public get deliveryDestinationArn() {
        return this.getStringAttribute('delivery_destination_arn');
    }
    public set deliveryDestinationArn(value: string) {
        this._deliveryDestinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryDestinationArnInput() {
        return this._deliveryDestinationArn;
    }

    // delivery_destination_type - computed: true, optional: false, required: false
    public get deliveryDestinationType() {
        return this.getStringAttribute('delivery_destination_type');
    }

    // delivery_id - computed: true, optional: false, required: false
    public get deliveryId() {
        return this.getStringAttribute('delivery_id');
    }

    // delivery_source_name - computed: false, optional: false, required: true
    private _deliverySourceName?: string; 
    public get deliverySourceName() {
        return this.getStringAttribute('delivery_source_name');
    }
    public set deliverySourceName(value: string) {
        this._deliverySourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deliverySourceNameInput() {
        return this._deliverySourceName;
    }

    // field_delimiter - computed: true, optional: true, required: false
    private _fieldDelimiter?: string; 
    public get fieldDelimiter() {
        return this.getStringAttribute('field_delimiter');
    }
    public set fieldDelimiter(value: string) {
        this._fieldDelimiter = value;
    }
    public resetFieldDelimiter() {
        this._fieldDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldDelimiterInput() {
        return this._fieldDelimiter;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // record_fields - computed: true, optional: true, required: false
    private _recordFields?: string[]; 
    public get recordFields() {
        return this.getListAttribute('record_fields');
    }
    public set recordFields(value: string[]) {
        this._recordFields = value;
    }
    public resetRecordFields() {
        this._recordFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFieldsInput() {
        return this._recordFields;
    }

    // s3_enable_hive_compatible_path - computed: true, optional: true, required: false
    private _s3EnableHiveCompatiblePath?: boolean | cdktn.IResolvable; 
    public get s3EnableHiveCompatiblePath() {
        return this.getBooleanAttribute('s3_enable_hive_compatible_path');
    }
    public set s3EnableHiveCompatiblePath(value: boolean | cdktn.IResolvable) {
        this._s3EnableHiveCompatiblePath = value;
    }
    public resetS3EnableHiveCompatiblePath() {
        this._s3EnableHiveCompatiblePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EnableHiveCompatiblePathInput() {
        return this._s3EnableHiveCompatiblePath;
    }

    // s3_suffix_path - computed: true, optional: true, required: false
    private _s3SuffixPath?: string; 
    public get s3SuffixPath() {
        return this.getStringAttribute('s3_suffix_path');
    }
    public set s3SuffixPath(value: string) {
        this._s3SuffixPath = value;
    }
    public resetS3SuffixPath() {
        this._s3SuffixPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SuffixPathInput() {
        return this._s3SuffixPath;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDelivery.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDelivery.TagProperty[] | cdktn.IResolvable) {
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
            delivery_destination_arn: cdktn.stringToTerraform(this._deliveryDestinationArn),
            delivery_source_name: cdktn.stringToTerraform(this._deliverySourceName),
            field_delimiter: cdktn.stringToTerraform(this._fieldDelimiter),
            record_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._recordFields),
            s3_enable_hive_compatible_path: cdktn.booleanToTerraform(this._s3EnableHiveCompatiblePath),
            s3_suffix_path: cdktn.stringToTerraform(this._s3SuffixPath),
            tags: cdktn.listMapper(ccDeliveryTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delivery_destination_arn: {
                value: cdktn.stringToHclTerraform(this._deliveryDestinationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delivery_source_name: {
                value: cdktn.stringToHclTerraform(this._deliverySourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            field_delimiter: {
                value: cdktn.stringToHclTerraform(this._fieldDelimiter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            record_fields: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._recordFields),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            s3_enable_hive_compatible_path: {
                value: cdktn.booleanToHclTerraform(this._s3EnableHiveCompatiblePath),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            s3_suffix_path: {
                value: cdktn.stringToHclTerraform(this._s3SuffixPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeliveryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDelivery.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeliveryTagPropertyToTerraform(struct?: CcDelivery.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeliveryTagPropertyToHclTerraform(struct?: CcDelivery.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDelivery {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#key CcDelivery#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_delivery#value CcDelivery#value}
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
