// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStreamProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#exclusive_end_time CcStream#exclusive_end_time}
    */
    readonly exclusiveEndTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#inclusive_start_time CcStream#inclusive_start_time}
    */
    readonly inclusiveStartTime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#kinesis_configuration CcStream#kinesis_configuration}
    */
    readonly kinesisConfiguration: CcStream.KinesisConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#ledger_name CcStream#ledger_name}
    */
    readonly ledgerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#role_arn CcStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#stream_name CcStream#stream_name}
    */
    readonly streamName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#tags CcStream#tags}
    */
    readonly tags?: CcStream.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream awscc_qldb_stream}
*/
export class CcStream extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_qldb_stream";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStream resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStream to import
    * @param importFromId The id of the existing CcStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStream to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qldb_stream", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream awscc_qldb_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStreamProps
    */
    public constructor(scope: Construct, id: string, config: CcStreamProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_qldb_stream',
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
        this._exclusiveEndTime = config.exclusiveEndTime;
        this._inclusiveStartTime = config.inclusiveStartTime;
        this._kinesisConfiguration.internalValue = config.kinesisConfiguration;
        this._ledgerName = config.ledgerName;
        this._roleArn = config.roleArn;
        this._streamName = config.streamName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // exclusive_end_time - computed: true, optional: true, required: false
    private _exclusiveEndTime?: string; 
    public get exclusiveEndTime() {
        return this.getStringAttribute('exclusive_end_time');
    }
    public set exclusiveEndTime(value: string) {
        this._exclusiveEndTime = value;
    }
    public resetExclusiveEndTime() {
        this._exclusiveEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusiveEndTimeInput() {
        return this._exclusiveEndTime;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inclusive_start_time - computed: false, optional: false, required: true
    private _inclusiveStartTime?: string; 
    public get inclusiveStartTime() {
        return this.getStringAttribute('inclusive_start_time');
    }
    public set inclusiveStartTime(value: string) {
        this._inclusiveStartTime = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusiveStartTimeInput() {
        return this._inclusiveStartTime;
    }

    // kinesis_configuration - computed: false, optional: false, required: true
    private _kinesisConfiguration = new CcStream.KinesisConfigurationPropertyOutputReference(this, "kinesis_configuration");
    public get kinesisConfiguration() {
        return this._kinesisConfiguration;
    }
    public putKinesisConfiguration(value: CcStream.KinesisConfigurationProperty) {
        this._kinesisConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisConfigurationInput() {
        return this._kinesisConfiguration.internalValue;
    }

    // ledger_name - computed: false, optional: false, required: true
    private _ledgerName?: string; 
    public get ledgerName() {
        return this.getStringAttribute('ledger_name');
    }
    public set ledgerName(value: string) {
        this._ledgerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ledgerNameInput() {
        return this._ledgerName;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // stream_id - computed: true, optional: false, required: false
    public get streamId() {
        return this.getStringAttribute('stream_id');
    }

    // stream_name - computed: false, optional: false, required: true
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStream.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStream.TagProperty[] | cdktn.IResolvable) {
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
            exclusive_end_time: cdktn.stringToTerraform(this._exclusiveEndTime),
            inclusive_start_time: cdktn.stringToTerraform(this._inclusiveStartTime),
            kinesis_configuration: ccStreamKinesisConfigurationPropertyToTerraform(this._kinesisConfiguration.internalValue),
            ledger_name: cdktn.stringToTerraform(this._ledgerName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stream_name: cdktn.stringToTerraform(this._streamName),
            tags: cdktn.listMapper(ccStreamTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            exclusive_end_time: {
                value: cdktn.stringToHclTerraform(this._exclusiveEndTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inclusive_start_time: {
                value: cdktn.stringToHclTerraform(this._inclusiveStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kinesis_configuration: {
                value: ccStreamKinesisConfigurationPropertyToHclTerraform(this._kinesisConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStream.KinesisConfigurationProperty",
            },
            ledger_name: {
                value: cdktn.stringToHclTerraform(this._ledgerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stream_name: {
                value: cdktn.stringToHclTerraform(this._streamName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStreamTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStream.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStreamKinesisConfigurationPropertyToTerraform(struct?: CcStream.KinesisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_enabled: cdktn.booleanToTerraform(struct!.aggregationEnabled),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccStreamKinesisConfigurationPropertyToHclTerraform(struct?: CcStream.KinesisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.aggregationEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStreamTagPropertyToTerraform(struct?: CcStream.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStreamTagPropertyToHclTerraform(struct?: CcStream.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStream {
export interface KinesisConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#aggregation_enabled CcStream#aggregation_enabled}
    */
    readonly aggregationEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#stream_arn CcStream#stream_arn}
    */
    readonly streamArn?: string;
}
export class KinesisConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationEnabled = this._aggregationEnabled;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationEnabled = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationEnabled = value.aggregationEnabled;
            this._streamArn = value.streamArn;
        }
    }

    // aggregation_enabled - computed: true, optional: true, required: false
    private _aggregationEnabled?: boolean | cdktn.IResolvable; 
    public get aggregationEnabled() {
        return this.getBooleanAttribute('aggregation_enabled');
    }
    public set aggregationEnabled(value: boolean | cdktn.IResolvable) {
        this._aggregationEnabled = value;
    }
    public resetAggregationEnabled() {
        this._aggregationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationEnabledInput() {
        return this._aggregationEnabled;
    }

    // stream_arn - computed: true, optional: true, required: false
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    public resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#key CcStream#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qldb_stream#value CcStream#value}
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
