// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRoomProps extends cdktn.TerraformMetaArguments {
    /**
    * Array of logging configuration identifiers attached to the room.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#logging_configuration_identifiers CcRoom#logging_configuration_identifiers}
    */
    readonly loggingConfigurationIdentifiers?: string[];
    /**
    * The maximum number of characters in a single message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#maximum_message_length CcRoom#maximum_message_length}
    */
    readonly maximumMessageLength?: number;
    /**
    * The maximum number of messages per second that can be sent to the room.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#maximum_message_rate_per_second CcRoom#maximum_message_rate_per_second}
    */
    readonly maximumMessageRatePerSecond?: number;
    /**
    * Configuration information for optional review of messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#message_review_handler CcRoom#message_review_handler}
    */
    readonly messageReviewHandler?: CcRoom.MessageReviewHandlerProperty;
    /**
    * The name of the room. The value does not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#name CcRoom#name}
    */
    readonly name?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#tags CcRoom#tags}
    */
    readonly tags?: CcRoom.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room awscc_ivschat_room}
*/
export class CcRoom extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivschat_room";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRoom resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRoom to import
    * @param importFromId The id of the existing CcRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRoom to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivschat_room", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room awscc_ivschat_room} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRoomProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRoomProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivschat_room',
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
        this._loggingConfigurationIdentifiers = config.loggingConfigurationIdentifiers;
        this._maximumMessageLength = config.maximumMessageLength;
        this._maximumMessageRatePerSecond = config.maximumMessageRatePerSecond;
        this._messageReviewHandler.internalValue = config.messageReviewHandler;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_configuration_identifiers - computed: true, optional: true, required: false
    private _loggingConfigurationIdentifiers?: string[]; 
    public get loggingConfigurationIdentifiers() {
        return cdktn.Fn.tolist(this.getListAttribute('logging_configuration_identifiers'));
    }
    public set loggingConfigurationIdentifiers(value: string[]) {
        this._loggingConfigurationIdentifiers = value;
    }
    public resetLoggingConfigurationIdentifiers() {
        this._loggingConfigurationIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationIdentifiersInput() {
        return this._loggingConfigurationIdentifiers;
    }

    // maximum_message_length - computed: true, optional: true, required: false
    private _maximumMessageLength?: number; 
    public get maximumMessageLength() {
        return this.getNumberAttribute('maximum_message_length');
    }
    public set maximumMessageLength(value: number) {
        this._maximumMessageLength = value;
    }
    public resetMaximumMessageLength() {
        this._maximumMessageLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumMessageLengthInput() {
        return this._maximumMessageLength;
    }

    // maximum_message_rate_per_second - computed: true, optional: true, required: false
    private _maximumMessageRatePerSecond?: number; 
    public get maximumMessageRatePerSecond() {
        return this.getNumberAttribute('maximum_message_rate_per_second');
    }
    public set maximumMessageRatePerSecond(value: number) {
        this._maximumMessageRatePerSecond = value;
    }
    public resetMaximumMessageRatePerSecond() {
        this._maximumMessageRatePerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumMessageRatePerSecondInput() {
        return this._maximumMessageRatePerSecond;
    }

    // message_review_handler - computed: true, optional: true, required: false
    private _messageReviewHandler = new CcRoom.MessageReviewHandlerPropertyOutputReference(this, "message_review_handler");
    public get messageReviewHandler() {
        return this._messageReviewHandler;
    }
    public putMessageReviewHandler(value: CcRoom.MessageReviewHandlerProperty) {
        this._messageReviewHandler.internalValue = value;
    }
    public resetMessageReviewHandler() {
        this._messageReviewHandler.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageReviewHandlerInput() {
        return this._messageReviewHandler.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // room_id - computed: true, optional: false, required: false
    public get roomId() {
        return this.getStringAttribute('room_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRoom.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRoom.TagProperty[] | cdktn.IResolvable) {
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
            logging_configuration_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._loggingConfigurationIdentifiers),
            maximum_message_length: cdktn.numberToTerraform(this._maximumMessageLength),
            maximum_message_rate_per_second: cdktn.numberToTerraform(this._maximumMessageRatePerSecond),
            message_review_handler: ccRoomMessageReviewHandlerPropertyToTerraform(this._messageReviewHandler.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccRoomTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            logging_configuration_identifiers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._loggingConfigurationIdentifiers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            maximum_message_length: {
                value: cdktn.numberToHclTerraform(this._maximumMessageLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            maximum_message_rate_per_second: {
                value: cdktn.numberToHclTerraform(this._maximumMessageRatePerSecond),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            message_review_handler: {
                value: ccRoomMessageReviewHandlerPropertyToHclTerraform(this._messageReviewHandler.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRoom.MessageReviewHandlerProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRoomTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRoom.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRoomMessageReviewHandlerPropertyToTerraform(struct?: CcRoom.MessageReviewHandlerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fallback_result: cdktn.stringToTerraform(struct!.fallbackResult),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccRoomMessageReviewHandlerPropertyToHclTerraform(struct?: CcRoom.MessageReviewHandlerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fallback_result: {
            value: cdktn.stringToHclTerraform(struct!.fallbackResult),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoomTagPropertyToTerraform(struct?: CcRoom.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRoomTagPropertyToHclTerraform(struct?: CcRoom.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRoom {
export interface MessageReviewHandlerProperty {
    /**
    * Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#fallback_result CcRoom#fallback_result}
    */
    readonly fallbackResult?: string;
    /**
    * Identifier of the message review handler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#uri CcRoom#uri}
    */
    readonly uri?: string;
}
export class MessageReviewHandlerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MessageReviewHandlerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fallbackResult !== undefined) {
            hasAnyValues = true;
            internalValueResult.fallbackResult = this._fallbackResult;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageReviewHandlerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fallbackResult = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fallbackResult = value.fallbackResult;
            this._uri = value.uri;
        }
    }

    // fallback_result - computed: true, optional: true, required: false
    private _fallbackResult?: string; 
    public get fallbackResult() {
        return this.getStringAttribute('fallback_result');
    }
    public set fallbackResult(value: string) {
        this._fallbackResult = value;
    }
    public resetFallbackResult() {
        this._fallbackResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fallbackResultInput() {
        return this._fallbackResult;
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#key CcRoom#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivschat_room#value CcRoom#value}
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
