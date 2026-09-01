// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_name CcChannel#channel_name}
    */
    readonly channelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_storage CcChannel#channel_storage}
    */
    readonly channelStorage?: CcChannel.ChannelStorageProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#retention_period CcChannel#retention_period}
    */
    readonly retentionPeriod?: CcChannel.RetentionPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotanalytics_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotanalytics_channel',
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
        this._channelName = config.channelName;
        this._channelStorage.internalValue = config.channelStorage;
        this._retentionPeriod.internalValue = config.retentionPeriod;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_id - computed: true, optional: false, required: false
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // channel_storage - computed: true, optional: true, required: false
    private _channelStorage = new CcChannel.ChannelStoragePropertyOutputReference(this, "channel_storage");
    public get channelStorage() {
        return this._channelStorage;
    }
    public putChannelStorage(value: CcChannel.ChannelStorageProperty) {
        this._channelStorage.internalValue = value;
    }
    public resetChannelStorage() {
        this._channelStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelStorageInput() {
        return this._channelStorage.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // retention_period - computed: true, optional: true, required: false
    private _retentionPeriod = new CcChannel.RetentionPeriodPropertyOutputReference(this, "retention_period");
    public get retentionPeriod() {
        return this._retentionPeriod;
    }
    public putRetentionPeriod(value: CcChannel.RetentionPeriodProperty) {
        this._retentionPeriod.internalValue = value;
    }
    public resetRetentionPeriod() {
        this._retentionPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
        return this._retentionPeriod.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannel.TagProperty[] | cdktn.IResolvable) {
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
            channel_name: cdktn.stringToTerraform(this._channelName),
            channel_storage: ccChannelChannelStoragePropertyToTerraform(this._channelStorage.internalValue),
            retention_period: ccChannelRetentionPeriodPropertyToTerraform(this._retentionPeriod.internalValue),
            tags: cdktn.listMapper(ccChannelTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_storage: {
                value: ccChannelChannelStoragePropertyToHclTerraform(this._channelStorage.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.ChannelStorageProperty",
            },
            retention_period: {
                value: ccChannelRetentionPeriodPropertyToHclTerraform(this._retentionPeriod.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.RetentionPeriodProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelCustomerManagedS3PropertyToTerraform(struct?: CcChannel.CustomerManagedS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccChannelCustomerManagedS3PropertyToHclTerraform(struct?: CcChannel.CustomerManagedS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.keyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelChannelStoragePropertyToTerraform(struct?: CcChannel.ChannelStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_managed_s3: ccChannelCustomerManagedS3PropertyToTerraform(struct!.customerManagedS3),
        service_managed_s3: cdktn.stringToTerraform(struct!.serviceManagedS3),
    }
}


export function ccChannelChannelStoragePropertyToHclTerraform(struct?: CcChannel.ChannelStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_managed_s3: {
            value: ccChannelCustomerManagedS3PropertyToHclTerraform(struct!.customerManagedS3),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerManagedS3Property",
        },
        service_managed_s3: {
            value: cdktn.stringToHclTerraform(struct!.serviceManagedS3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelRetentionPeriodPropertyToTerraform(struct?: CcChannel.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_of_days: cdktn.numberToTerraform(struct!.numberOfDays),
        unlimited: cdktn.booleanToTerraform(struct!.unlimited),
    }
}


export function ccChannelRetentionPeriodPropertyToHclTerraform(struct?: CcChannel.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_of_days: {
            value: cdktn.numberToHclTerraform(struct!.numberOfDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unlimited: {
            value: cdktn.booleanToHclTerraform(struct!.unlimited),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTagPropertyToTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelTagPropertyToHclTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
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


export namespace CcChannel {
export interface CustomerManagedS3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#bucket CcChannel#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key_prefix CcChannel#key_prefix}
    */
    readonly keyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#role_arn CcChannel#role_arn}
    */
    readonly roleArn?: string;
}
export class CustomerManagedS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerManagedS3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._keyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPrefix = this._keyPrefix;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerManagedS3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._keyPrefix = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._keyPrefix = value.keyPrefix;
            this._roleArn = value.roleArn;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // key_prefix - computed: true, optional: true, required: false
    private _keyPrefix?: string; 
    public get keyPrefix() {
        return this.getStringAttribute('key_prefix');
    }
    public set keyPrefix(value: string) {
        this._keyPrefix = value;
    }
    public resetKeyPrefix() {
        this._keyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPrefixInput() {
        return this._keyPrefix;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface ChannelStorageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#customer_managed_s3 CcChannel#customer_managed_s3}
    */
    readonly customerManagedS3?: CustomerManagedS3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#service_managed_s3 CcChannel#service_managed_s3}
    */
    readonly serviceManagedS3?: string;
}
export class ChannelStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChannelStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerManagedS3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerManagedS3 = this._customerManagedS3?.internalValue;
        }
        if (this._serviceManagedS3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceManagedS3 = this._serviceManagedS3;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerManagedS3.internalValue = undefined;
            this._serviceManagedS3 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerManagedS3.internalValue = value.customerManagedS3;
            this._serviceManagedS3 = value.serviceManagedS3;
        }
    }

    // customer_managed_s3 - computed: true, optional: true, required: false
    private _customerManagedS3 = new CustomerManagedS3PropertyOutputReference(this, "customer_managed_s3");
    public get customerManagedS3() {
        return this._customerManagedS3;
    }
    public putCustomerManagedS3(value: CustomerManagedS3Property) {
        this._customerManagedS3.internalValue = value;
    }
    public resetCustomerManagedS3() {
        this._customerManagedS3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedS3Input() {
        return this._customerManagedS3.internalValue;
    }

    // service_managed_s3 - computed: true, optional: true, required: false
    private _serviceManagedS3?: string; 
    public get serviceManagedS3() {
        return this.getStringAttribute('service_managed_s3');
    }
    public set serviceManagedS3(value: string) {
        this._serviceManagedS3 = value;
    }
    public resetServiceManagedS3() {
        this._serviceManagedS3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceManagedS3Input() {
        return this._serviceManagedS3;
    }
}
export interface RetentionPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#number_of_days CcChannel#number_of_days}
    */
    readonly numberOfDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#unlimited CcChannel#unlimited}
    */
    readonly unlimited?: boolean | cdktn.IResolvable;
}
export class RetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberOfDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfDays = this._numberOfDays;
        }
        if (this._unlimited !== undefined) {
            hasAnyValues = true;
            internalValueResult.unlimited = this._unlimited;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberOfDays = undefined;
            this._unlimited = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberOfDays = value.numberOfDays;
            this._unlimited = value.unlimited;
        }
    }

    // number_of_days - computed: true, optional: true, required: false
    private _numberOfDays?: number; 
    public get numberOfDays() {
        return this.getNumberAttribute('number_of_days');
    }
    public set numberOfDays(value: number) {
        this._numberOfDays = value;
    }
    public resetNumberOfDays() {
        this._numberOfDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfDaysInput() {
        return this._numberOfDays;
    }

    // unlimited - computed: true, optional: true, required: false
    private _unlimited?: boolean | cdktn.IResolvable; 
    public get unlimited() {
        return this.getBooleanAttribute('unlimited');
    }
    public set unlimited(value: boolean | cdktn.IResolvable) {
        this._unlimited = value;
    }
    public resetUnlimited() {
        this._unlimited = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unlimitedInput() {
        return this._unlimited;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#value CcChannel#value}
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
