// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventBusProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the event bus. Control characters and Unicode line separators are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#description CcEventBus#description}
    */
    readonly description?: string;
    /**
    * Encryption configuration for the event bus. The service stores and returns the customer managed key as its key ARN. The key ARN is recommended so that drift detection stays accurate. A key ID is also accepted and is matched to the returned key ARN when CloudFormation checks for drift; a key alias is accepted but can be reported as a value difference, because an alias cannot be matched to the key ARN it points to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#encryption_configuration CcEventBus#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcEventBus.EncryptionConfigurationProperty;
    /**
    * The name of the event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#name CcEventBus#name}
    */
    readonly name: string;
    /**
    * The event storage configuration for the event bus, which controls the number of days events are retained on the bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#storage_configuration CcEventBus#storage_configuration}
    */
    readonly storageConfiguration?: CcEventBus.StorageConfigurationProperty;
    /**
    * The tags assigned to the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#tags CcEventBus#tags}
    */
    readonly tags?: CcEventBus.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus awscc_eventsv2_event_bus}
*/
export class CcEventBus extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eventsv2_event_bus";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventBus resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventBus to import
    * @param importFromId The id of the existing CcEventBus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventBus to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_event_bus", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus awscc_eventsv2_event_bus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventBusProps
    */
    public constructor(scope: Construct, id: string, config: CcEventBusProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eventsv2_event_bus',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._name = config.name;
        this._storageConfiguration.internalValue = config.storageConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcEventBus.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcEventBus.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // event_bus_arn - computed: true, optional: false, required: false
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
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

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // storage_configuration - computed: true, optional: true, required: false
    private _storageConfiguration = new CcEventBus.StorageConfigurationPropertyOutputReference(this, "storage_configuration");
    public get storageConfiguration() {
        return this._storageConfiguration;
    }
    public putStorageConfiguration(value: CcEventBus.StorageConfigurationProperty) {
        this._storageConfiguration.internalValue = value;
    }
    public resetStorageConfiguration() {
        this._storageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationInput() {
        return this._storageConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventBus.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventBus.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            encryption_configuration: ccEventBusEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            storage_configuration: ccEventBusStorageConfigurationPropertyToTerraform(this._storageConfiguration.internalValue),
            tags: cdktn.listMapper(ccEventBusTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccEventBusEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventBus.EncryptionConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_configuration: {
                value: ccEventBusStorageConfigurationPropertyToHclTerraform(this._storageConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventBus.StorageConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventBusTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventBus.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventBusEncryptionConfigurationPropertyToTerraform(struct?: CcEventBus.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_identifier: cdktn.stringToTerraform(struct!.kmsKeyIdentifier),
    }
}


export function ccEventBusEncryptionConfigurationPropertyToHclTerraform(struct?: CcEventBus.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_identifier: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventBusStorageConfigurationPropertyToTerraform(struct?: CcEventBus.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retention_period_in_days: cdktn.numberToTerraform(struct!.retentionPeriodInDays),
    }
}


export function ccEventBusStorageConfigurationPropertyToHclTerraform(struct?: CcEventBus.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retention_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.retentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventBusTagsPropertyToTerraform(struct?: CcEventBus.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventBusTagsPropertyToHclTerraform(struct?: CcEventBus.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcEventBus {
export interface EncryptionConfigurationProperty {
    /**
    * The identifier of the AWS KMS customer managed key that the event bus uses to encrypt events. You can specify the key ARN, key ID, alias name, or alias ARN. If you do not specify a key, EventBridge uses an AWS owned key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#kms_key_identifier CcEventBus#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyIdentifier = value.kmsKeyIdentifier;
        }
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
    }
}
export interface StorageConfigurationProperty {
    /**
    * The number of days events are retained on the event bus for replay, 1-365.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#retention_period_in_days CcEventBus#retention_period_in_days}
    */
    readonly retentionPeriodInDays?: number;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retentionPeriodInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retentionPeriodInDays = value.retentionPeriodInDays;
        }
    }

    // retention_period_in_days - computed: true, optional: true, required: false
    private _retentionPeriodInDays?: number; 
    public get retentionPeriodInDays() {
        return this.getNumberAttribute('retention_period_in_days');
    }
    public set retentionPeriodInDays(value: number) {
        this._retentionPeriodInDays = value;
    }
    public resetRetentionPeriodInDays() {
        this._retentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInDaysInput() {
        return this._retentionPeriodInDays;
    }
}
export interface TagsProperty {
    /**
    * The tag key. For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#key CcEventBus#key}
    */
    readonly key?: string;
    /**
    * The tag value. May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_event_bus#value CcEventBus#value}
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
