// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventBusProps extends cdktn.TerraformMetaArguments {
    /**
    * Dead Letter Queue for the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#dead_letter_config CcEventBus#dead_letter_config}
    */
    readonly deadLetterConfig?: CcEventBus.DeadLetterConfigProperty;
    /**
    * The description of the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#description CcEventBus#description}
    */
    readonly description?: string;
    /**
    * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#event_source_name CcEventBus#event_source_name}
    */
    readonly eventSourceName?: string;
    /**
    * Kms Key Identifier used to encrypt events at rest in the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#kms_key_identifier CcEventBus#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * The logging configuration settings for vended logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#log_config CcEventBus#log_config}
    */
    readonly logConfig?: CcEventBus.LogConfigProperty;
    /**
    * The name of the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#name CcEventBus#name}
    */
    readonly name: string;
    /**
    * A JSON string that describes the permission policy statement for the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#policy CcEventBus#policy}
    */
    readonly policy?: string;
    /**
    * Any tags assigned to the event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#tags CcEventBus#tags}
    */
    readonly tags?: CcEventBus.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus awscc_events_event_bus}
*/
export class CcEventBus extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_event_bus";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventBus resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventBus to import
    * @param importFromId The id of the existing CcEventBus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventBus to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_event_bus", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus awscc_events_event_bus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventBusProps
    */
    public constructor(scope: Construct, id: string, config: CcEventBusProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_event_bus',
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
        this._deadLetterConfig.internalValue = config.deadLetterConfig;
        this._description = config.description;
        this._eventSourceName = config.eventSourceName;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._logConfig.internalValue = config.logConfig;
        this._name = config.name;
        this._policy = config.policy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // dead_letter_config - computed: true, optional: true, required: false
    private _deadLetterConfig = new CcEventBus.DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
    public get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    public putDeadLetterConfig(value: CcEventBus.DeadLetterConfigProperty) {
        this._deadLetterConfig.internalValue = value;
    }
    public resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
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

    // event_source_name - computed: true, optional: true, required: false
    private _eventSourceName?: string; 
    public get eventSourceName() {
        return this.getStringAttribute('event_source_name');
    }
    public set eventSourceName(value: string) {
        this._eventSourceName = value;
    }
    public resetEventSourceName() {
        this._eventSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceNameInput() {
        return this._eventSourceName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // log_config - computed: true, optional: true, required: false
    private _logConfig = new CcEventBus.LogConfigPropertyOutputReference(this, "log_config");
    public get logConfig() {
        return this._logConfig;
    }
    public putLogConfig(value: CcEventBus.LogConfigProperty) {
        this._logConfig.internalValue = value;
    }
    public resetLogConfig() {
        this._logConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigInput() {
        return this._logConfig.internalValue;
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

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventBus.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventBus.TagProperty[] | cdktn.IResolvable) {
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
            dead_letter_config: ccEventBusDeadLetterConfigPropertyToTerraform(this._deadLetterConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            event_source_name: cdktn.stringToTerraform(this._eventSourceName),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            log_config: ccEventBusLogConfigPropertyToTerraform(this._logConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            policy: cdktn.stringToTerraform(this._policy),
            tags: cdktn.listMapper(ccEventBusTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dead_letter_config: {
                value: ccEventBusDeadLetterConfigPropertyToHclTerraform(this._deadLetterConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventBus.DeadLetterConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_source_name: {
                value: cdktn.stringToHclTerraform(this._eventSourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_config: {
                value: ccEventBusLogConfigPropertyToHclTerraform(this._logConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventBus.LogConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventBusTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventBus.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventBusDeadLetterConfigPropertyToTerraform(struct?: CcEventBus.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccEventBusDeadLetterConfigPropertyToHclTerraform(struct?: CcEventBus.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventBusLogConfigPropertyToTerraform(struct?: CcEventBus.LogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_detail: cdktn.stringToTerraform(struct!.includeDetail),
        level: cdktn.stringToTerraform(struct!.level),
    }
}


export function ccEventBusLogConfigPropertyToHclTerraform(struct?: CcEventBus.LogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_detail: {
            value: cdktn.stringToHclTerraform(struct!.includeDetail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        level: {
            value: cdktn.stringToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventBusTagPropertyToTerraform(struct?: CcEventBus.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventBusTagPropertyToHclTerraform(struct?: CcEventBus.TagProperty | cdktn.IResolvable): any {
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
export interface DeadLetterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#arn CcEventBus#arn}
    */
    readonly arn?: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeadLetterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeadLetterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface LogConfigProperty {
    /**
    * Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#include_detail CcEventBus#include_detail}
    */
    readonly includeDetail?: string;
    /**
    * Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#level CcEventBus#level}
    */
    readonly level?: string;
}
export class LogConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeDetail !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeDetail = this._includeDetail;
        }
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeDetail = undefined;
            this._level = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeDetail = value.includeDetail;
            this._level = value.level;
        }
    }

    // include_detail - computed: true, optional: true, required: false
    private _includeDetail?: string; 
    public get includeDetail() {
        return this.getStringAttribute('include_detail');
    }
    public set includeDetail(value: string) {
        this._includeDetail = value;
    }
    public resetIncludeDetail() {
        this._includeDetail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeDetailInput() {
        return this._includeDetail;
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#key CcEventBus#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus#value CcEventBus#value}
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
