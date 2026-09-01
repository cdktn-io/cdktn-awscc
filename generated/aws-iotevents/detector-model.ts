// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDetectorModelProps extends cdktn.TerraformMetaArguments {
    /**
    * Information that defines how a detector operates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#detector_model_definition CcDetectorModel#detector_model_definition}
    */
    readonly detectorModelDefinition: CcDetectorModel.DetectorModelDefinitionProperty;
    /**
    * A brief description of the detector model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#detector_model_description CcDetectorModel#detector_model_description}
    */
    readonly detectorModelDescription?: string;
    /**
    * The name of the detector model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#detector_model_name CcDetectorModel#detector_model_name}
    */
    readonly detectorModelName?: string;
    /**
    * Information about the order in which events are evaluated and how actions are executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#evaluation_method CcDetectorModel#evaluation_method}
    */
    readonly evaluationMethod?: string;
    /**
    * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information. 
    *  This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#key CcDetectorModel#key}
    */
    readonly key?: string;
    /**
    * The ARN of the role that grants permission to ITE to perform its operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#role_arn CcDetectorModel#role_arn}
    */
    readonly roleArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#tags CcDetectorModel#tags}
    */
    readonly tags?: CcDetectorModel.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model awscc_iotevents_detector_model}
*/
export class CcDetectorModel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotevents_detector_model";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDetectorModel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDetectorModel to import
    * @param importFromId The id of the existing CcDetectorModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDetectorModel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotevents_detector_model", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model awscc_iotevents_detector_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDetectorModelProps
    */
    public constructor(scope: Construct, id: string, config: CcDetectorModelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotevents_detector_model',
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
        this._detectorModelDefinition.internalValue = config.detectorModelDefinition;
        this._detectorModelDescription = config.detectorModelDescription;
        this._detectorModelName = config.detectorModelName;
        this._evaluationMethod = config.evaluationMethod;
        this._key = config.key;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // detector_model_definition - computed: false, optional: false, required: true
    private _detectorModelDefinition = new CcDetectorModel.DetectorModelDefinitionPropertyOutputReference(this, "detector_model_definition");
    public get detectorModelDefinition() {
        return this._detectorModelDefinition;
    }
    public putDetectorModelDefinition(value: CcDetectorModel.DetectorModelDefinitionProperty) {
        this._detectorModelDefinition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorModelDefinitionInput() {
        return this._detectorModelDefinition.internalValue;
    }

    // detector_model_description - computed: true, optional: true, required: false
    private _detectorModelDescription?: string; 
    public get detectorModelDescription() {
        return this.getStringAttribute('detector_model_description');
    }
    public set detectorModelDescription(value: string) {
        this._detectorModelDescription = value;
    }
    public resetDetectorModelDescription() {
        this._detectorModelDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorModelDescriptionInput() {
        return this._detectorModelDescription;
    }

    // detector_model_name - computed: true, optional: true, required: false
    private _detectorModelName?: string; 
    public get detectorModelName() {
        return this.getStringAttribute('detector_model_name');
    }
    public set detectorModelName(value: string) {
        this._detectorModelName = value;
    }
    public resetDetectorModelName() {
        this._detectorModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorModelNameInput() {
        return this._detectorModelName;
    }

    // evaluation_method - computed: true, optional: true, required: false
    private _evaluationMethod?: string; 
    public get evaluationMethod() {
        return this.getStringAttribute('evaluation_method');
    }
    public set evaluationMethod(value: string) {
        this._evaluationMethod = value;
    }
    public resetEvaluationMethod() {
        this._evaluationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationMethodInput() {
        return this._evaluationMethod;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDetectorModel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDetectorModel.TagProperty[] | cdktn.IResolvable) {
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
            detector_model_definition: ccDetectorModelDetectorModelDefinitionPropertyToTerraform(this._detectorModelDefinition.internalValue),
            detector_model_description: cdktn.stringToTerraform(this._detectorModelDescription),
            detector_model_name: cdktn.stringToTerraform(this._detectorModelName),
            evaluation_method: cdktn.stringToTerraform(this._evaluationMethod),
            key: cdktn.stringToTerraform(this._key),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccDetectorModelTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            detector_model_definition: {
                value: ccDetectorModelDetectorModelDefinitionPropertyToHclTerraform(this._detectorModelDefinition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDetectorModel.DetectorModelDefinitionProperty",
            },
            detector_model_description: {
                value: cdktn.stringToHclTerraform(this._detectorModelDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            detector_model_name: {
                value: cdktn.stringToHclTerraform(this._detectorModelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluation_method: {
                value: cdktn.stringToHclTerraform(this._evaluationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key: {
                value: cdktn.stringToHclTerraform(this._key),
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
            tags: {
                value: cdktn.listMapperHcl(ccDetectorModelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDetectorModel.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDetectorModelClearTimerPropertyToTerraform(struct?: CcDetectorModel.ClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelClearTimerPropertyToHclTerraform(struct?: CcDetectorModel.ClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelPayloadPropertyToTerraform(struct?: CcDetectorModel.PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelPayloadPropertyToHclTerraform(struct?: CcDetectorModel.PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDynamoDBv2PropertyToTerraform(struct?: CcDetectorModel.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelPayloadPropertyToTerraform(struct!.payload),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDynamoDBv2PropertyToHclTerraform(struct?: CcDetectorModel.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "PayloadProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDynamoDBPropertyToTerraform(struct?: CcDetectorModel.DynamoDBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        operation: cdktn.stringToTerraform(struct!.operation),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyToTerraform(struct!.payload),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDynamoDBPropertyToHclTerraform(struct?: CcDetectorModel.DynamoDBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelFirehosePropertyToTerraform(struct?: CcDetectorModel.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyToTerraform(struct!.payload),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccDetectorModelFirehosePropertyToHclTerraform(struct?: CcDetectorModel.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelIotEventsPropertyToTerraform(struct?: CcDetectorModel.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_name: cdktn.stringToTerraform(struct!.inputName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelIotEventsPropertyToHclTerraform(struct?: CcDetectorModel.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelAssetPropertyTimestampPropertyToTerraform(struct?: CcDetectorModel.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccDetectorModelAssetPropertyTimestampPropertyToHclTerraform(struct?: CcDetectorModel.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelAssetPropertyVariantPropertyToTerraform(struct?: CcDetectorModel.AssetPropertyVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDetectorModelAssetPropertyVariantPropertyToHclTerraform(struct?: CcDetectorModel.AssetPropertyVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelAssetPropertyValuePropertyToTerraform(struct?: CcDetectorModel.AssetPropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccDetectorModelAssetPropertyTimestampPropertyToTerraform(struct!.timestamp),
        value: ccDetectorModelAssetPropertyVariantPropertyToTerraform(struct!.value),
    }
}


export function ccDetectorModelAssetPropertyValuePropertyToHclTerraform(struct?: CcDetectorModel.AssetPropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccDetectorModelAssetPropertyTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyTimestampProperty",
        },
        value: {
            value: ccDetectorModelAssetPropertyVariantPropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyVariantProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelIotSiteWisePropertyToTerraform(struct?: CcDetectorModel.IotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_value: ccDetectorModelAssetPropertyValuePropertyToTerraform(struct!.propertyValue),
    }
}


export function ccDetectorModelIotSiteWisePropertyToHclTerraform(struct?: CcDetectorModel.IotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_value: {
            value: ccDetectorModelAssetPropertyValuePropertyToHclTerraform(struct!.propertyValue),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelIotTopicPublishPropertyToTerraform(struct?: CcDetectorModel.IotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelIotTopicPublishPropertyToHclTerraform(struct?: CcDetectorModel.IotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelLambdaPropertyToTerraform(struct?: CcDetectorModel.LambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelLambdaPropertyToHclTerraform(struct?: CcDetectorModel.LambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelResetTimerPropertyToTerraform(struct?: CcDetectorModel.ResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelResetTimerPropertyToHclTerraform(struct?: CcDetectorModel.ResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelSetTimerPropertyToTerraform(struct?: CcDetectorModel.SetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
        seconds: cdktn.numberToTerraform(struct!.seconds),
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelSetTimerPropertyToHclTerraform(struct?: CcDetectorModel.SetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_expression: {
            value: cdktn.stringToHclTerraform(struct!.durationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seconds: {
            value: cdktn.numberToHclTerraform(struct!.seconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelSetVariablePropertyToTerraform(struct?: CcDetectorModel.SetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        variable_name: cdktn.stringToTerraform(struct!.variableName),
    }
}


export function ccDetectorModelSetVariablePropertyToHclTerraform(struct?: CcDetectorModel.SetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variable_name: {
            value: cdktn.stringToHclTerraform(struct!.variableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelSnsPropertyToTerraform(struct?: CcDetectorModel.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyToTerraform(struct!.payload),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccDetectorModelSnsPropertyToHclTerraform(struct?: CcDetectorModel.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelSqsPropertyToTerraform(struct?: CcDetectorModel.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyToTerraform(struct!.payload),
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccDetectorModelSqsPropertyToHclTerraform(struct?: CcDetectorModel.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty",
        },
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelActionPropertyToTerraform(struct?: CcDetectorModel.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clear_timer: ccDetectorModelClearTimerPropertyToTerraform(struct!.clearTimer),
        dynamo_d_bv_2: ccDetectorModelDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccDetectorModelDynamoDBPropertyToTerraform(struct!.dynamoDb),
        firehose: ccDetectorModelFirehosePropertyToTerraform(struct!.firehose),
        iot_events: ccDetectorModelIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccDetectorModelIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        iot_topic_publish: ccDetectorModelIotTopicPublishPropertyToTerraform(struct!.iotTopicPublish),
        lambda: ccDetectorModelLambdaPropertyToTerraform(struct!.lambda),
        reset_timer: ccDetectorModelResetTimerPropertyToTerraform(struct!.resetTimer),
        set_timer: ccDetectorModelSetTimerPropertyToTerraform(struct!.setTimer),
        set_variable: ccDetectorModelSetVariablePropertyToTerraform(struct!.setVariable),
        sns: ccDetectorModelSnsPropertyToTerraform(struct!.sns),
        sqs: ccDetectorModelSqsPropertyToTerraform(struct!.sqs),
    }
}


export function ccDetectorModelActionPropertyToHclTerraform(struct?: CcDetectorModel.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clear_timer: {
            value: ccDetectorModelClearTimerPropertyToHclTerraform(struct!.clearTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "ClearTimerProperty",
        },
        dynamo_d_bv_2: {
            value: ccDetectorModelDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBv2Property",
        },
        dynamo_db: {
            value: ccDetectorModelDynamoDBPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBProperty",
        },
        firehose: {
            value: ccDetectorModelFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseProperty",
        },
        iot_events: {
            value: ccDetectorModelIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "IotEventsProperty",
        },
        iot_site_wise: {
            value: ccDetectorModelIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "IotSiteWiseProperty",
        },
        iot_topic_publish: {
            value: ccDetectorModelIotTopicPublishPropertyToHclTerraform(struct!.iotTopicPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "IotTopicPublishProperty",
        },
        lambda: {
            value: ccDetectorModelLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaProperty",
        },
        reset_timer: {
            value: ccDetectorModelResetTimerPropertyToHclTerraform(struct!.resetTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "ResetTimerProperty",
        },
        set_timer: {
            value: ccDetectorModelSetTimerPropertyToHclTerraform(struct!.setTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "SetTimerProperty",
        },
        set_variable: {
            value: ccDetectorModelSetVariablePropertyToHclTerraform(struct!.setVariable),
            isBlock: true,
            type: "struct",
            storageClassType: "SetVariableProperty",
        },
        sns: {
            value: ccDetectorModelSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsProperty",
        },
        sqs: {
            value: ccDetectorModelSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelEventPropertyToTerraform(struct?: CcDetectorModel.EventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccDetectorModelActionPropertyToTerraform, false)(struct!.actions),
        condition: cdktn.stringToTerraform(struct!.condition),
        event_name: cdktn.stringToTerraform(struct!.eventName),
    }
}


export function ccDetectorModelEventPropertyToHclTerraform(struct?: CcDetectorModel.EventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccDetectorModelActionPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "ActionPropertyList",
        },
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelOnEnterPropertyToTerraform(struct?: CcDetectorModel.OnEnterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events: cdktn.listMapper(ccDetectorModelEventPropertyToTerraform, false)(struct!.events),
    }
}


export function ccDetectorModelOnEnterPropertyToHclTerraform(struct?: CcDetectorModel.OnEnterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events: {
            value: cdktn.listMapperHcl(ccDetectorModelEventPropertyToHclTerraform, false)(struct!.events),
            isBlock: true,
            type: "list",
            storageClassType: "EventPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct!.payload),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        operation: cdktn.stringToTerraform(struct!.operation),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyToTerraform(struct!.payload),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyToTerraform(struct!.payload),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_name: cdktn.stringToTerraform(struct!.inputName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct!.timestamp),
        value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct!.value),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty",
        },
        value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct!.propertyValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct!.propertyValue),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
        seconds: cdktn.numberToTerraform(struct!.seconds),
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_expression: {
            value: cdktn.stringToHclTerraform(struct!.durationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seconds: {
            value: cdktn.numberToHclTerraform(struct!.seconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        variable_name: cdktn.stringToTerraform(struct!.variableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variable_name: {
            value: cdktn.stringToHclTerraform(struct!.variableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyToTerraform(struct!.payload),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyToTerraform(struct!.payload),
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty",
        },
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clear_timer: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyToTerraform(struct!.clearTimer),
        dynamo_d_bv_2: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyToTerraform(struct!.dynamoDb),
        firehose: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyToTerraform(struct!.firehose),
        iot_events: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        iot_topic_publish: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyToTerraform(struct!.iotTopicPublish),
        lambda: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyToTerraform(struct!.lambda),
        reset_timer: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyToTerraform(struct!.resetTimer),
        set_timer: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyToTerraform(struct!.setTimer),
        set_variable: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyToTerraform(struct!.setVariable),
        sns: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyToTerraform(struct!.sns),
        sqs: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyToTerraform(struct!.sqs),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clear_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyToHclTerraform(struct!.clearTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty",
        },
        dynamo_d_bv_2: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property",
        },
        dynamo_db: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty",
        },
        firehose: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty",
        },
        iot_events: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty",
        },
        iot_site_wise: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty",
        },
        iot_topic_publish: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyToHclTerraform(struct!.iotTopicPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty",
        },
        lambda: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty",
        },
        reset_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyToHclTerraform(struct!.resetTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty",
        },
        set_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyToHclTerraform(struct!.setTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty",
        },
        set_variable: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyToHclTerraform(struct!.setVariable),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty",
        },
        sns: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty",
        },
        sqs: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsPropertyToTerraform, false)(struct!.actions),
        condition: cdktn.stringToTerraform(struct!.condition),
        event_name: cdktn.stringToTerraform(struct!.eventName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnExitEventsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnExitEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsActionsPropertyList",
        },
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelOnExitPropertyToTerraform(struct?: CcDetectorModel.OnExitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events: cdktn.listMapper(ccDetectorModelDetectorModelDefinitionStatesOnExitEventsPropertyToTerraform, false)(struct!.events),
    }
}


export function ccDetectorModelOnExitPropertyToHclTerraform(struct?: CcDetectorModel.OnExitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events: {
            value: cdktn.listMapperHcl(ccDetectorModelDetectorModelDefinitionStatesOnExitEventsPropertyToHclTerraform, false)(struct!.events),
            isBlock: true,
            type: "list",
            storageClassType: "DetectorModelDefinitionStatesOnExitEventsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct!.payload),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        operation: cdktn.stringToTerraform(struct!.operation),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyToTerraform(struct!.payload),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyToTerraform(struct!.payload),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_name: cdktn.stringToTerraform(struct!.inputName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct!.timestamp),
        value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct!.value),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty",
        },
        value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct!.propertyValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct!.propertyValue),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
        seconds: cdktn.numberToTerraform(struct!.seconds),
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_expression: {
            value: cdktn.stringToHclTerraform(struct!.durationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seconds: {
            value: cdktn.numberToHclTerraform(struct!.seconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        variable_name: cdktn.stringToTerraform(struct!.variableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variable_name: {
            value: cdktn.stringToHclTerraform(struct!.variableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyToTerraform(struct!.payload),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyToTerraform(struct!.payload),
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty",
        },
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clear_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyToTerraform(struct!.clearTimer),
        dynamo_d_bv_2: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyToTerraform(struct!.dynamoDb),
        firehose: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyToTerraform(struct!.firehose),
        iot_events: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        iot_topic_publish: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyToTerraform(struct!.iotTopicPublish),
        lambda: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyToTerraform(struct!.lambda),
        reset_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyToTerraform(struct!.resetTimer),
        set_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyToTerraform(struct!.setTimer),
        set_variable: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyToTerraform(struct!.setVariable),
        sns: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyToTerraform(struct!.sns),
        sqs: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyToTerraform(struct!.sqs),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clear_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyToHclTerraform(struct!.clearTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty",
        },
        dynamo_d_bv_2: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property",
        },
        dynamo_db: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty",
        },
        firehose: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty",
        },
        iot_events: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty",
        },
        iot_site_wise: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty",
        },
        iot_topic_publish: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyToHclTerraform(struct!.iotTopicPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty",
        },
        lambda: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty",
        },
        reset_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyToHclTerraform(struct!.resetTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty",
        },
        set_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyToHclTerraform(struct!.setTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty",
        },
        set_variable: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyToHclTerraform(struct!.setVariable),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty",
        },
        sns: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty",
        },
        sqs: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsPropertyToTerraform, false)(struct!.actions),
        condition: cdktn.stringToTerraform(struct!.condition),
        event_name: cdktn.stringToTerraform(struct!.eventName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputEventsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsActionsPropertyList",
        },
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyToTerraform(struct!.payload),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        operation: cdktn.stringToTerraform(struct!.operation),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyToTerraform(struct!.payload),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyToTerraform(struct!.payload),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_name: cdktn.stringToTerraform(struct!.inputName),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyToTerraform(struct!.timestamp),
        value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyToTerraform(struct!.value),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty",
        },
        value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyToTerraform(struct!.propertyValue),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_value: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyToHclTerraform(struct!.propertyValue),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
        seconds: cdktn.numberToTerraform(struct!.seconds),
        timer_name: cdktn.stringToTerraform(struct!.timerName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_expression: {
            value: cdktn.stringToHclTerraform(struct!.durationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seconds: {
            value: cdktn.numberToHclTerraform(struct!.seconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timer_name: {
            value: cdktn.stringToHclTerraform(struct!.timerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        variable_name: cdktn.stringToTerraform(struct!.variableName),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variable_name: {
            value: cdktn.stringToHclTerraform(struct!.variableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyToTerraform(struct!.payload),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyToTerraform(struct!.payload),
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty",
        },
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clear_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyToTerraform(struct!.clearTimer),
        dynamo_d_bv_2: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyToTerraform(struct!.dynamoDb),
        firehose: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyToTerraform(struct!.firehose),
        iot_events: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        iot_topic_publish: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyToTerraform(struct!.iotTopicPublish),
        lambda: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyToTerraform(struct!.lambda),
        reset_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyToTerraform(struct!.resetTimer),
        set_timer: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyToTerraform(struct!.setTimer),
        set_variable: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyToTerraform(struct!.setVariable),
        sns: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyToTerraform(struct!.sns),
        sqs: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyToTerraform(struct!.sqs),
    }
}


export function ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clear_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyToHclTerraform(struct!.clearTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty",
        },
        dynamo_d_bv_2: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property",
        },
        dynamo_db: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty",
        },
        firehose: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty",
        },
        iot_events: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty",
        },
        iot_site_wise: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty",
        },
        iot_topic_publish: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyToHclTerraform(struct!.iotTopicPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty",
        },
        lambda: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty",
        },
        reset_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyToHclTerraform(struct!.resetTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty",
        },
        set_timer: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyToHclTerraform(struct!.setTimer),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty",
        },
        set_variable: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyToHclTerraform(struct!.setVariable),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty",
        },
        sns: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty",
        },
        sqs: {
            value: ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelTransitionEventPropertyToTerraform(struct?: CcDetectorModel.TransitionEventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyToTerraform, false)(struct!.actions),
        condition: cdktn.stringToTerraform(struct!.condition),
        event_name: cdktn.stringToTerraform(struct!.eventName),
        next_state: cdktn.stringToTerraform(struct!.nextState),
    }
}


export function ccDetectorModelTransitionEventPropertyToHclTerraform(struct?: CcDetectorModel.TransitionEventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyList",
        },
        condition: {
            value: cdktn.stringToHclTerraform(struct!.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        next_state: {
            value: cdktn.stringToHclTerraform(struct!.nextState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelOnInputPropertyToTerraform(struct?: CcDetectorModel.OnInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        events: cdktn.listMapper(ccDetectorModelDetectorModelDefinitionStatesOnInputEventsPropertyToTerraform, false)(struct!.events),
        transition_events: cdktn.listMapper(ccDetectorModelTransitionEventPropertyToTerraform, false)(struct!.transitionEvents),
    }
}


export function ccDetectorModelOnInputPropertyToHclTerraform(struct?: CcDetectorModel.OnInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        events: {
            value: cdktn.listMapperHcl(ccDetectorModelDetectorModelDefinitionStatesOnInputEventsPropertyToHclTerraform, false)(struct!.events),
            isBlock: true,
            type: "list",
            storageClassType: "DetectorModelDefinitionStatesOnInputEventsPropertyList",
        },
        transition_events: {
            value: cdktn.listMapperHcl(ccDetectorModelTransitionEventPropertyToHclTerraform, false)(struct!.transitionEvents),
            isBlock: true,
            type: "list",
            storageClassType: "TransitionEventPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelStatePropertyToTerraform(struct?: CcDetectorModel.StateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_enter: ccDetectorModelOnEnterPropertyToTerraform(struct!.onEnter),
        on_exit: ccDetectorModelOnExitPropertyToTerraform(struct!.onExit),
        on_input: ccDetectorModelOnInputPropertyToTerraform(struct!.onInput),
        state_name: cdktn.stringToTerraform(struct!.stateName),
    }
}


export function ccDetectorModelStatePropertyToHclTerraform(struct?: CcDetectorModel.StateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_enter: {
            value: ccDetectorModelOnEnterPropertyToHclTerraform(struct!.onEnter),
            isBlock: true,
            type: "struct",
            storageClassType: "OnEnterProperty",
        },
        on_exit: {
            value: ccDetectorModelOnExitPropertyToHclTerraform(struct!.onExit),
            isBlock: true,
            type: "struct",
            storageClassType: "OnExitProperty",
        },
        on_input: {
            value: ccDetectorModelOnInputPropertyToHclTerraform(struct!.onInput),
            isBlock: true,
            type: "struct",
            storageClassType: "OnInputProperty",
        },
        state_name: {
            value: cdktn.stringToHclTerraform(struct!.stateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelDetectorModelDefinitionPropertyToTerraform(struct?: CcDetectorModel.DetectorModelDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        initial_state_name: cdktn.stringToTerraform(struct!.initialStateName),
        states: cdktn.listMapper(ccDetectorModelStatePropertyToTerraform, false)(struct!.states),
    }
}


export function ccDetectorModelDetectorModelDefinitionPropertyToHclTerraform(struct?: CcDetectorModel.DetectorModelDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        initial_state_name: {
            value: cdktn.stringToHclTerraform(struct!.initialStateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        states: {
            value: cdktn.listMapperHcl(ccDetectorModelStatePropertyToHclTerraform, false)(struct!.states),
            isBlock: true,
            type: "list",
            storageClassType: "StatePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDetectorModelTagPropertyToTerraform(struct?: CcDetectorModel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDetectorModelTagPropertyToHclTerraform(struct?: CcDetectorModel.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDetectorModel {
export interface ClearTimerProperty {
    /**
    * The name of the timer to clear.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class ClearTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClearTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClearTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface PayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class PayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DynamoDBv2Property {
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: PayloadProperty;
    /**
    * The name of the DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DynamoDBv2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBv2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._tableName = value.tableName;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new PayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: PayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DynamoDBProperty {
    /**
    * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_field CcDetectorModel#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * The data type for the hash key (also called the partition key). You can specify the following values:
    *   +  ``'STRING'`` - The hash key is a string.
    *   +  ``'NUMBER'`` - The hash key is a number.
    *   
    *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_type CcDetectorModel#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * The value of the hash key (also called the partition key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_value CcDetectorModel#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * The type of operation to perform. You can specify the following values: 
    *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   
    *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#operation CcDetectorModel#operation}
    */
    readonly operation?: string;
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty;
    /**
    * The name of the DynamoDB column that receives the action payload.
    *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload_field CcDetectorModel#payload_field}
    */
    readonly payloadField?: string;
    /**
    * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_field CcDetectorModel#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * The data type for the range key (also called the sort key), You can specify the following values:
    *   +  ``'STRING'`` - The range key is a string.
    *   +  ``'NUMBER'`` - The range key is number.
    *   
    *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_type CcDetectorModel#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * The value of the range key (also called the sort key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_value CcDetectorModel#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DynamoDBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._operation = undefined;
            this._payload.internalValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._operation = value.operation;
            this._payload.internalValue = value.payload;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface FirehoseProperty {
    /**
    * The name of the Kinesis Data Firehose delivery stream where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#delivery_stream_name CcDetectorModel#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty;
    /**
    * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#separator CcDetectorModel#separator}
    */
    readonly separator?: string;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamName = undefined;
            this._payload.internalValue = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamName = value.deliveryStreamName;
            this._payload.internalValue = value.payload;
            this._separator = value.separator;
        }
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface IotEventsProperty {
    /**
    * The name of the ITE input where the data is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#input_name CcDetectorModel#input_name}
    */
    readonly inputName?: string;
    /**
    * You can configure the action payload when you send a message to an ITE input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty;
}
export class IotEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputName = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputName = value.inputName;
            this._payload.internalValue = value.payload;
        }
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface AssetPropertyTimestampProperty {
    /**
    * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#offset_in_nanos CcDetectorModel#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#time_in_seconds CcDetectorModel#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class AssetPropertyTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetPropertyTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface AssetPropertyVariantProperty {
    /**
    * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#boolean_value CcDetectorModel#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#double_value CcDetectorModel#double_value}
    */
    readonly doubleValue?: string;
    /**
    * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#integer_value CcDetectorModel#integer_value}
    */
    readonly integerValue?: string;
    /**
    * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#string_value CcDetectorModel#string_value}
    */
    readonly stringValue?: string;
}
export class AssetPropertyVariantPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetPropertyVariantProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyVariantProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface AssetPropertyValueProperty {
    /**
    * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#quality CcDetectorModel#quality}
    */
    readonly quality?: string;
    /**
    * The timestamp associated with the asset property value. The default is the current event time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timestamp CcDetectorModel#timestamp}
    */
    readonly timestamp?: AssetPropertyTimestampProperty;
    /**
    * The value to send to an asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: AssetPropertyVariantProperty;
}
export class AssetPropertyValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetPropertyValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new AssetPropertyTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: AssetPropertyTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new AssetPropertyVariantPropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AssetPropertyVariantProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface IotSiteWiseProperty {
    /**
    * The ID of the asset that has the specified property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#asset_id CcDetectorModel#asset_id}
    */
    readonly assetId?: string;
    /**
    * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#entry_id CcDetectorModel#entry_id}
    */
    readonly entryId?: string;
    /**
    * The alias of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_alias CcDetectorModel#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * The ID of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_id CcDetectorModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_value CcDetectorModel#property_value}
    */
    readonly propertyValue?: AssetPropertyValueProperty;
}
export class IotSiteWisePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotSiteWiseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValue = this._propertyValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValue.internalValue = value.propertyValue;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_value - computed: true, optional: true, required: false
    private _propertyValue = new AssetPropertyValuePropertyOutputReference(this, "property_value");
    public get propertyValue() {
        return this._propertyValue;
    }
    public putPropertyValue(value: AssetPropertyValueProperty) {
        this._propertyValue.internalValue = value;
    }
    public resetPropertyValue() {
        this._propertyValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValueInput() {
        return this._propertyValue.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface IotTopicPublishProperty {
    /**
    * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#mqtt_topic CcDetectorModel#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * You can configure the action payload when you publish a message to an IoTCore topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty;
}
export class IotTopicPublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotTopicPublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotTopicPublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._payload.internalValue = value.payload;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface LambdaProperty {
    /**
    * The ARN of the Lambda function that is executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#function_arn CcDetectorModel#function_arn}
    */
    readonly functionArn?: string;
    /**
    * You can configure the action payload when you send a message to a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty;
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._payload.internalValue = value.payload;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface ResetTimerProperty {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class ResetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface SetTimerProperty {
    /**
    * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#duration_expression CcDetectorModel#duration_expression}
    */
    readonly durationExpression?: string;
    /**
    * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#seconds CcDetectorModel#seconds}
    */
    readonly seconds?: number;
    /**
    * The name of the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class SetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationExpression = this._durationExpression;
        }
        if (this._seconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.seconds = this._seconds;
        }
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationExpression = undefined;
            this._seconds = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationExpression = value.durationExpression;
            this._seconds = value.seconds;
            this._timerName = value.timerName;
        }
    }

    // duration_expression - computed: true, optional: true, required: false
    private _durationExpression?: string; 
    public get durationExpression() {
        return this.getStringAttribute('duration_expression');
    }
    public set durationExpression(value: string) {
        this._durationExpression = value;
    }
    public resetDurationExpression() {
        this._durationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationExpressionInput() {
        return this._durationExpression;
    }

    // seconds - computed: true, optional: true, required: false
    private _seconds?: number; 
    public get seconds() {
        return this.getNumberAttribute('seconds');
    }
    public set seconds(value: number) {
        this._seconds = value;
    }
    public resetSeconds() {
        this._seconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsInput() {
        return this._seconds;
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface SetVariableProperty {
    /**
    * The new value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: string;
    /**
    * The name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#variable_name CcDetectorModel#variable_name}
    */
    readonly variableName?: string;
}
export class SetVariablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SetVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._variableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableName = this._variableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SetVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._variableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._variableName = value.variableName;
        }
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

    // variable_name - computed: true, optional: true, required: false
    private _variableName?: string; 
    public get variableName() {
        return this.getStringAttribute('variable_name');
    }
    public set variableName(value: string) {
        this._variableName = value;
    }
    public resetVariableName() {
        this._variableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableNameInput() {
        return this._variableName;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface SnsProperty {
    /**
    * You can configure the action payload when you send a message as an Amazon SNS push notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty;
    /**
    * The ARN of the Amazon SNS target where the message is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#target_arn CcDetectorModel#target_arn}
    */
    readonly targetArn?: string;
}
export class SnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._targetArn = value.targetArn;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface SqsProperty {
    /**
    * You can configure the action payload when you send a message to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty;
    /**
    * The URL of the SQS queue where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#queue_url CcDetectorModel#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#use_base_64 CcDetectorModel#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class SqsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._queueUrl = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._queueUrl = value.queueUrl;
            this._useBase64 = value.useBase64;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
    }

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface ActionProperty {
    /**
    * Information needed to clear the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#clear_timer CcDetectorModel#clear_timer}
    */
    readonly clearTimer?: ClearTimerProperty;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 CcDetectorModel#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DynamoDBv2Property;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_db CcDetectorModel#dynamo_db}
    */
    readonly dynamoDb?: DynamoDBProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#firehose CcDetectorModel#firehose}
    */
    readonly firehose?: FirehoseProperty;
    /**
    * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_events CcDetectorModel#iot_events}
    */
    readonly iotEvents?: IotEventsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_site_wise CcDetectorModel#iot_site_wise}
    */
    readonly iotSiteWise?: IotSiteWiseProperty;
    /**
    * Publishes an MQTT message with the given topic to the IoT message broker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_topic_publish CcDetectorModel#iot_topic_publish}
    */
    readonly iotTopicPublish?: IotTopicPublishProperty;
    /**
    * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#lambda CcDetectorModel#lambda}
    */
    readonly lambda?: LambdaProperty;
    /**
    * Information needed to reset the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#reset_timer CcDetectorModel#reset_timer}
    */
    readonly resetTimer?: ResetTimerProperty;
    /**
    * Information needed to set the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_timer CcDetectorModel#set_timer}
    */
    readonly setTimer?: SetTimerProperty;
    /**
    * Sets a variable to a specified value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_variable CcDetectorModel#set_variable}
    */
    readonly setVariable?: SetVariableProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sns CcDetectorModel#sns}
    */
    readonly sns?: SnsProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sqs CcDetectorModel#sqs}
    */
    readonly sqs?: SqsProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clearTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clearTimer = this._clearTimer?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._iotTopicPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._resetTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resetTimer = this._resetTimer?.internalValue;
        }
        if (this._setTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setTimer = this._setTimer?.internalValue;
        }
        if (this._setVariable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setVariable = this._setVariable?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._iotTopicPublish.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._resetTimer.internalValue = undefined;
            this._setTimer.internalValue = undefined;
            this._setVariable.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = value.clearTimer;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._firehose.internalValue = value.firehose;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._iotTopicPublish.internalValue = value.iotTopicPublish;
            this._lambda.internalValue = value.lambda;
            this._resetTimer.internalValue = value.resetTimer;
            this._setTimer.internalValue = value.setTimer;
            this._setVariable.internalValue = value.setVariable;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
        }
    }

    // clear_timer - computed: true, optional: true, required: false
    private _clearTimer = new ClearTimerPropertyOutputReference(this, "clear_timer");
    public get clearTimer() {
        return this._clearTimer;
    }
    public putClearTimer(value: ClearTimerProperty) {
        this._clearTimer.internalValue = value;
    }
    public resetClearTimer() {
        this._clearTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clearTimerInput() {
        return this._clearTimer.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DynamoDBv2PropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DynamoDBv2Property) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DynamoDBPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DynamoDBProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new FirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new IotEventsPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: IotEventsProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new IotSiteWisePropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: IotSiteWiseProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // iot_topic_publish - computed: true, optional: true, required: false
    private _iotTopicPublish = new IotTopicPublishPropertyOutputReference(this, "iot_topic_publish");
    public get iotTopicPublish() {
        return this._iotTopicPublish;
    }
    public putIotTopicPublish(value: IotTopicPublishProperty) {
        this._iotTopicPublish.internalValue = value;
    }
    public resetIotTopicPublish() {
        this._iotTopicPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotTopicPublishInput() {
        return this._iotTopicPublish.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new LambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: LambdaProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // reset_timer - computed: true, optional: true, required: false
    private _resetTimer = new ResetTimerPropertyOutputReference(this, "reset_timer");
    public get resetTimer() {
        return this._resetTimer;
    }
    public putResetTimer(value: ResetTimerProperty) {
        this._resetTimer.internalValue = value;
    }
    public resetResetTimer() {
        this._resetTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetTimerInput() {
        return this._resetTimer.internalValue;
    }

    // set_timer - computed: true, optional: true, required: false
    private _setTimer = new SetTimerPropertyOutputReference(this, "set_timer");
    public get setTimer() {
        return this._setTimer;
    }
    public putSetTimer(value: SetTimerProperty) {
        this._setTimer.internalValue = value;
    }
    public resetSetTimer() {
        this._setTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setTimerInput() {
        return this._setTimer.internalValue;
    }

    // set_variable - computed: true, optional: true, required: false
    private _setVariable = new SetVariablePropertyOutputReference(this, "set_variable");
    public get setVariable() {
        return this._setVariable;
    }
    public putSetVariable(value: SetVariableProperty) {
        this._setVariable.internalValue = value;
    }
    public resetSetVariable() {
        this._setVariable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setVariableInput() {
        return this._setVariable.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new SnsPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: SnsProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new SqsPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: SqsProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventProperty {
    /**
    * The actions to be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#actions CcDetectorModel#actions}
    */
    readonly actions?: ActionProperty[] | cdktn.IResolvable;
    /**
    * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#condition CcDetectorModel#condition}
    */
    readonly condition?: string;
    /**
    * The name of the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#event_name CcDetectorModel#event_name}
    */
    readonly eventName?: string;
}
export class EventPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._condition = undefined;
            this._eventName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._condition = value.condition;
            this._eventName = value.eventName;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }
}

export class EventPropertyList extends cdktn.ComplexList {
    public internalValue? : EventProperty[] | cdktn.IResolvable

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
    public get(index: number): EventPropertyOutputReference {
        return new EventPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnEnterProperty {
    /**
    * Specifies the actions that are performed when the state is entered and the ``condition`` is ``TRUE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#events CcDetectorModel#events}
    */
    readonly events?: EventProperty[] | cdktn.IResolvable;
}
export class OnEnterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnEnterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._events?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnEnterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._events.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._events.internalValue = value.events;
        }
    }

    // events - computed: true, optional: true, required: false
    private _events = new EventPropertyList(this, "events", false);
    public get events() {
        return this._events;
    }
    public putEvents(value: EventProperty[] | cdktn.IResolvable) {
        this._events.internalValue = value;
    }
    public resetEvents() {
        this._events.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty {
    /**
    * The name of the timer to clear.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property {
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty;
    /**
    * The name of the DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._tableName = value.tableName;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty {
    /**
    * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_field CcDetectorModel#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * The data type for the hash key (also called the partition key). You can specify the following values:
    *   +  ``'STRING'`` - The hash key is a string.
    *   +  ``'NUMBER'`` - The hash key is a number.
    *   
    *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_type CcDetectorModel#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * The value of the hash key (also called the partition key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_value CcDetectorModel#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * The type of operation to perform. You can specify the following values: 
    *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   
    *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#operation CcDetectorModel#operation}
    */
    readonly operation?: string;
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty;
    /**
    * The name of the DynamoDB column that receives the action payload.
    *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload_field CcDetectorModel#payload_field}
    */
    readonly payloadField?: string;
    /**
    * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_field CcDetectorModel#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * The data type for the range key (also called the sort key), You can specify the following values:
    *   +  ``'STRING'`` - The range key is a string.
    *   +  ``'NUMBER'`` - The range key is number.
    *   
    *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_type CcDetectorModel#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * The value of the range key (also called the sort key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_value CcDetectorModel#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._operation = undefined;
            this._payload.internalValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._operation = value.operation;
            this._payload.internalValue = value.payload;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty {
    /**
    * The name of the Kinesis Data Firehose delivery stream where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#delivery_stream_name CcDetectorModel#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty;
    /**
    * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#separator CcDetectorModel#separator}
    */
    readonly separator?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamName = undefined;
            this._payload.internalValue = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamName = value.deliveryStreamName;
            this._payload.internalValue = value.payload;
            this._separator = value.separator;
        }
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty {
    /**
    * The name of the ITE input where the data is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#input_name CcDetectorModel#input_name}
    */
    readonly inputName?: string;
    /**
    * You can configure the action payload when you send a message to an ITE input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputName = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputName = value.inputName;
            this._payload.internalValue = value.payload;
        }
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty {
    /**
    * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#offset_in_nanos CcDetectorModel#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#time_in_seconds CcDetectorModel#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty {
    /**
    * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#boolean_value CcDetectorModel#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#double_value CcDetectorModel#double_value}
    */
    readonly doubleValue?: string;
    /**
    * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#integer_value CcDetectorModel#integer_value}
    */
    readonly integerValue?: string;
    /**
    * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#string_value CcDetectorModel#string_value}
    */
    readonly stringValue?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty {
    /**
    * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#quality CcDetectorModel#quality}
    */
    readonly quality?: string;
    /**
    * The timestamp associated with the asset property value. The default is the current event time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timestamp CcDetectorModel#timestamp}
    */
    readonly timestamp?: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty;
    /**
    * The value to send to an asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty {
    /**
    * The ID of the asset that has the specified property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#asset_id CcDetectorModel#asset_id}
    */
    readonly assetId?: string;
    /**
    * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#entry_id CcDetectorModel#entry_id}
    */
    readonly entryId?: string;
    /**
    * The alias of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_alias CcDetectorModel#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * The ID of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_id CcDetectorModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_value CcDetectorModel#property_value}
    */
    readonly propertyValue?: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValue = this._propertyValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValue.internalValue = value.propertyValue;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_value - computed: true, optional: true, required: false
    private _propertyValue = new DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValuePropertyOutputReference(this, "property_value");
    public get propertyValue() {
        return this._propertyValue;
    }
    public putPropertyValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueProperty) {
        this._propertyValue.internalValue = value;
    }
    public resetPropertyValue() {
        this._propertyValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValueInput() {
        return this._propertyValue.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty {
    /**
    * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#mqtt_topic CcDetectorModel#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * You can configure the action payload when you publish a message to an IoTCore topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._payload.internalValue = value.payload;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty {
    /**
    * The ARN of the Lambda function that is executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#function_arn CcDetectorModel#function_arn}
    */
    readonly functionArn?: string;
    /**
    * You can configure the action payload when you send a message to a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._payload.internalValue = value.payload;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty {
    /**
    * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#duration_expression CcDetectorModel#duration_expression}
    */
    readonly durationExpression?: string;
    /**
    * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#seconds CcDetectorModel#seconds}
    */
    readonly seconds?: number;
    /**
    * The name of the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationExpression = this._durationExpression;
        }
        if (this._seconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.seconds = this._seconds;
        }
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationExpression = undefined;
            this._seconds = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationExpression = value.durationExpression;
            this._seconds = value.seconds;
            this._timerName = value.timerName;
        }
    }

    // duration_expression - computed: true, optional: true, required: false
    private _durationExpression?: string; 
    public get durationExpression() {
        return this.getStringAttribute('duration_expression');
    }
    public set durationExpression(value: string) {
        this._durationExpression = value;
    }
    public resetDurationExpression() {
        this._durationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationExpressionInput() {
        return this._durationExpression;
    }

    // seconds - computed: true, optional: true, required: false
    private _seconds?: number; 
    public get seconds() {
        return this.getNumberAttribute('seconds');
    }
    public set seconds(value: number) {
        this._seconds = value;
    }
    public resetSeconds() {
        this._seconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsInput() {
        return this._seconds;
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty {
    /**
    * The new value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: string;
    /**
    * The name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#variable_name CcDetectorModel#variable_name}
    */
    readonly variableName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._variableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableName = this._variableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._variableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._variableName = value.variableName;
        }
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

    // variable_name - computed: true, optional: true, required: false
    private _variableName?: string; 
    public get variableName() {
        return this.getStringAttribute('variable_name');
    }
    public set variableName(value: string) {
        this._variableName = value;
    }
    public resetVariableName() {
        this._variableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableNameInput() {
        return this._variableName;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty {
    /**
    * You can configure the action payload when you send a message as an Amazon SNS push notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty;
    /**
    * The ARN of the Amazon SNS target where the message is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#target_arn CcDetectorModel#target_arn}
    */
    readonly targetArn?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._targetArn = value.targetArn;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty {
    /**
    * You can configure the action payload when you send a message to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty;
    /**
    * The URL of the SQS queue where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#queue_url CcDetectorModel#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#use_base_64 CcDetectorModel#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._queueUrl = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._queueUrl = value.queueUrl;
            this._useBase64 = value.useBase64;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
    }

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsActionsProperty {
    /**
    * Information needed to clear the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#clear_timer CcDetectorModel#clear_timer}
    */
    readonly clearTimer?: DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 CcDetectorModel#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_db CcDetectorModel#dynamo_db}
    */
    readonly dynamoDb?: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#firehose CcDetectorModel#firehose}
    */
    readonly firehose?: DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty;
    /**
    * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_events CcDetectorModel#iot_events}
    */
    readonly iotEvents?: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_site_wise CcDetectorModel#iot_site_wise}
    */
    readonly iotSiteWise?: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty;
    /**
    * Publishes an MQTT message with the given topic to the IoT message broker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_topic_publish CcDetectorModel#iot_topic_publish}
    */
    readonly iotTopicPublish?: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty;
    /**
    * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#lambda CcDetectorModel#lambda}
    */
    readonly lambda?: DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty;
    /**
    * Information needed to reset the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#reset_timer CcDetectorModel#reset_timer}
    */
    readonly resetTimer?: DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty;
    /**
    * Information needed to set the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_timer CcDetectorModel#set_timer}
    */
    readonly setTimer?: DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty;
    /**
    * Sets a variable to a specified value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_variable CcDetectorModel#set_variable}
    */
    readonly setVariable?: DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sns CcDetectorModel#sns}
    */
    readonly sns?: DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sqs CcDetectorModel#sqs}
    */
    readonly sqs?: DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty;
}
export class DetectorModelDefinitionStatesOnExitEventsActionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clearTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clearTimer = this._clearTimer?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._iotTopicPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._resetTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resetTimer = this._resetTimer?.internalValue;
        }
        if (this._setTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setTimer = this._setTimer?.internalValue;
        }
        if (this._setVariable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setVariable = this._setVariable?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._iotTopicPublish.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._resetTimer.internalValue = undefined;
            this._setTimer.internalValue = undefined;
            this._setVariable.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = value.clearTimer;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._firehose.internalValue = value.firehose;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._iotTopicPublish.internalValue = value.iotTopicPublish;
            this._lambda.internalValue = value.lambda;
            this._resetTimer.internalValue = value.resetTimer;
            this._setTimer.internalValue = value.setTimer;
            this._setVariable.internalValue = value.setVariable;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
        }
    }

    // clear_timer - computed: true, optional: true, required: false
    private _clearTimer = new DetectorModelDefinitionStatesOnExitEventsActionsClearTimerPropertyOutputReference(this, "clear_timer");
    public get clearTimer() {
        return this._clearTimer;
    }
    public putClearTimer(value: DetectorModelDefinitionStatesOnExitEventsActionsClearTimerProperty) {
        this._clearTimer.internalValue = value;
    }
    public resetClearTimer() {
        this._clearTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clearTimerInput() {
        return this._clearTimer.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Property) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DetectorModelDefinitionStatesOnExitEventsActionsDynamoDbProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new DetectorModelDefinitionStatesOnExitEventsActionsFirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: DetectorModelDefinitionStatesOnExitEventsActionsFirehoseProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new DetectorModelDefinitionStatesOnExitEventsActionsIotEventsPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: DetectorModelDefinitionStatesOnExitEventsActionsIotEventsProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: DetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // iot_topic_publish - computed: true, optional: true, required: false
    private _iotTopicPublish = new DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPropertyOutputReference(this, "iot_topic_publish");
    public get iotTopicPublish() {
        return this._iotTopicPublish;
    }
    public putIotTopicPublish(value: DetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishProperty) {
        this._iotTopicPublish.internalValue = value;
    }
    public resetIotTopicPublish() {
        this._iotTopicPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotTopicPublishInput() {
        return this._iotTopicPublish.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new DetectorModelDefinitionStatesOnExitEventsActionsLambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: DetectorModelDefinitionStatesOnExitEventsActionsLambdaProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // reset_timer - computed: true, optional: true, required: false
    private _resetTimer = new DetectorModelDefinitionStatesOnExitEventsActionsResetTimerPropertyOutputReference(this, "reset_timer");
    public get resetTimer() {
        return this._resetTimer;
    }
    public putResetTimer(value: DetectorModelDefinitionStatesOnExitEventsActionsResetTimerProperty) {
        this._resetTimer.internalValue = value;
    }
    public resetResetTimer() {
        this._resetTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetTimerInput() {
        return this._resetTimer.internalValue;
    }

    // set_timer - computed: true, optional: true, required: false
    private _setTimer = new DetectorModelDefinitionStatesOnExitEventsActionsSetTimerPropertyOutputReference(this, "set_timer");
    public get setTimer() {
        return this._setTimer;
    }
    public putSetTimer(value: DetectorModelDefinitionStatesOnExitEventsActionsSetTimerProperty) {
        this._setTimer.internalValue = value;
    }
    public resetSetTimer() {
        this._setTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setTimerInput() {
        return this._setTimer.internalValue;
    }

    // set_variable - computed: true, optional: true, required: false
    private _setVariable = new DetectorModelDefinitionStatesOnExitEventsActionsSetVariablePropertyOutputReference(this, "set_variable");
    public get setVariable() {
        return this._setVariable;
    }
    public putSetVariable(value: DetectorModelDefinitionStatesOnExitEventsActionsSetVariableProperty) {
        this._setVariable.internalValue = value;
    }
    public resetSetVariable() {
        this._setVariable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setVariableInput() {
        return this._setVariable.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new DetectorModelDefinitionStatesOnExitEventsActionsSnsPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: DetectorModelDefinitionStatesOnExitEventsActionsSnsProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new DetectorModelDefinitionStatesOnExitEventsActionsSqsPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: DetectorModelDefinitionStatesOnExitEventsActionsSqsProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }
}

export class DetectorModelDefinitionStatesOnExitEventsActionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DetectorModelDefinitionStatesOnExitEventsActionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DetectorModelDefinitionStatesOnExitEventsActionsPropertyOutputReference {
        return new DetectorModelDefinitionStatesOnExitEventsActionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DetectorModelDefinitionStatesOnExitEventsProperty {
    /**
    * The actions to be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#actions CcDetectorModel#actions}
    */
    readonly actions?: DetectorModelDefinitionStatesOnExitEventsActionsProperty[] | cdktn.IResolvable;
    /**
    * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#condition CcDetectorModel#condition}
    */
    readonly condition?: string;
    /**
    * The name of the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#event_name CcDetectorModel#event_name}
    */
    readonly eventName?: string;
}
export class DetectorModelDefinitionStatesOnExitEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DetectorModelDefinitionStatesOnExitEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnExitEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._condition = undefined;
            this._eventName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._condition = value.condition;
            this._eventName = value.eventName;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new DetectorModelDefinitionStatesOnExitEventsActionsPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: DetectorModelDefinitionStatesOnExitEventsActionsProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }
}

export class DetectorModelDefinitionStatesOnExitEventsPropertyList extends cdktn.ComplexList {
    public internalValue? : DetectorModelDefinitionStatesOnExitEventsProperty[] | cdktn.IResolvable

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
    public get(index: number): DetectorModelDefinitionStatesOnExitEventsPropertyOutputReference {
        return new DetectorModelDefinitionStatesOnExitEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnExitProperty {
    /**
    * Specifies the ``actions`` that are performed when the state is exited and the ``condition`` is ``TRUE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#events CcDetectorModel#events}
    */
    readonly events?: DetectorModelDefinitionStatesOnExitEventsProperty[] | cdktn.IResolvable;
}
export class OnExitPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnExitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._events?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnExitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._events.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._events.internalValue = value.events;
        }
    }

    // events - computed: true, optional: true, required: false
    private _events = new DetectorModelDefinitionStatesOnExitEventsPropertyList(this, "events", false);
    public get events() {
        return this._events;
    }
    public putEvents(value: DetectorModelDefinitionStatesOnExitEventsProperty[] | cdktn.IResolvable) {
        this._events.internalValue = value;
    }
    public resetEvents() {
        this._events.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty {
    /**
    * The name of the timer to clear.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property {
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty;
    /**
    * The name of the DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._tableName = value.tableName;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty {
    /**
    * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_field CcDetectorModel#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * The data type for the hash key (also called the partition key). You can specify the following values:
    *   +  ``'STRING'`` - The hash key is a string.
    *   +  ``'NUMBER'`` - The hash key is a number.
    *   
    *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_type CcDetectorModel#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * The value of the hash key (also called the partition key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_value CcDetectorModel#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * The type of operation to perform. You can specify the following values: 
    *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   
    *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#operation CcDetectorModel#operation}
    */
    readonly operation?: string;
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty;
    /**
    * The name of the DynamoDB column that receives the action payload.
    *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload_field CcDetectorModel#payload_field}
    */
    readonly payloadField?: string;
    /**
    * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_field CcDetectorModel#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * The data type for the range key (also called the sort key), You can specify the following values:
    *   +  ``'STRING'`` - The range key is a string.
    *   +  ``'NUMBER'`` - The range key is number.
    *   
    *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_type CcDetectorModel#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * The value of the range key (also called the sort key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_value CcDetectorModel#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._operation = undefined;
            this._payload.internalValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._operation = value.operation;
            this._payload.internalValue = value.payload;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty {
    /**
    * The name of the Kinesis Data Firehose delivery stream where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#delivery_stream_name CcDetectorModel#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty;
    /**
    * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#separator CcDetectorModel#separator}
    */
    readonly separator?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamName = undefined;
            this._payload.internalValue = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamName = value.deliveryStreamName;
            this._payload.internalValue = value.payload;
            this._separator = value.separator;
        }
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty {
    /**
    * The name of the ITE input where the data is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#input_name CcDetectorModel#input_name}
    */
    readonly inputName?: string;
    /**
    * You can configure the action payload when you send a message to an ITE input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputName = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputName = value.inputName;
            this._payload.internalValue = value.payload;
        }
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty {
    /**
    * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#offset_in_nanos CcDetectorModel#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#time_in_seconds CcDetectorModel#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty {
    /**
    * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#boolean_value CcDetectorModel#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#double_value CcDetectorModel#double_value}
    */
    readonly doubleValue?: string;
    /**
    * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#integer_value CcDetectorModel#integer_value}
    */
    readonly integerValue?: string;
    /**
    * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#string_value CcDetectorModel#string_value}
    */
    readonly stringValue?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty {
    /**
    * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#quality CcDetectorModel#quality}
    */
    readonly quality?: string;
    /**
    * The timestamp associated with the asset property value. The default is the current event time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timestamp CcDetectorModel#timestamp}
    */
    readonly timestamp?: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty;
    /**
    * The value to send to an asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty {
    /**
    * The ID of the asset that has the specified property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#asset_id CcDetectorModel#asset_id}
    */
    readonly assetId?: string;
    /**
    * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#entry_id CcDetectorModel#entry_id}
    */
    readonly entryId?: string;
    /**
    * The alias of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_alias CcDetectorModel#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * The ID of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_id CcDetectorModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_value CcDetectorModel#property_value}
    */
    readonly propertyValue?: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValue = this._propertyValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValue.internalValue = value.propertyValue;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_value - computed: true, optional: true, required: false
    private _propertyValue = new DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValuePropertyOutputReference(this, "property_value");
    public get propertyValue() {
        return this._propertyValue;
    }
    public putPropertyValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueProperty) {
        this._propertyValue.internalValue = value;
    }
    public resetPropertyValue() {
        this._propertyValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValueInput() {
        return this._propertyValue.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty {
    /**
    * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#mqtt_topic CcDetectorModel#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * You can configure the action payload when you publish a message to an IoTCore topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._payload.internalValue = value.payload;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty {
    /**
    * The ARN of the Lambda function that is executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#function_arn CcDetectorModel#function_arn}
    */
    readonly functionArn?: string;
    /**
    * You can configure the action payload when you send a message to a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._payload.internalValue = value.payload;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty {
    /**
    * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#duration_expression CcDetectorModel#duration_expression}
    */
    readonly durationExpression?: string;
    /**
    * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#seconds CcDetectorModel#seconds}
    */
    readonly seconds?: number;
    /**
    * The name of the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationExpression = this._durationExpression;
        }
        if (this._seconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.seconds = this._seconds;
        }
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationExpression = undefined;
            this._seconds = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationExpression = value.durationExpression;
            this._seconds = value.seconds;
            this._timerName = value.timerName;
        }
    }

    // duration_expression - computed: true, optional: true, required: false
    private _durationExpression?: string; 
    public get durationExpression() {
        return this.getStringAttribute('duration_expression');
    }
    public set durationExpression(value: string) {
        this._durationExpression = value;
    }
    public resetDurationExpression() {
        this._durationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationExpressionInput() {
        return this._durationExpression;
    }

    // seconds - computed: true, optional: true, required: false
    private _seconds?: number; 
    public get seconds() {
        return this.getNumberAttribute('seconds');
    }
    public set seconds(value: number) {
        this._seconds = value;
    }
    public resetSeconds() {
        this._seconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsInput() {
        return this._seconds;
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty {
    /**
    * The new value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: string;
    /**
    * The name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#variable_name CcDetectorModel#variable_name}
    */
    readonly variableName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._variableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableName = this._variableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._variableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._variableName = value.variableName;
        }
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

    // variable_name - computed: true, optional: true, required: false
    private _variableName?: string; 
    public get variableName() {
        return this.getStringAttribute('variable_name');
    }
    public set variableName(value: string) {
        this._variableName = value;
    }
    public resetVariableName() {
        this._variableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableNameInput() {
        return this._variableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty {
    /**
    * You can configure the action payload when you send a message as an Amazon SNS push notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty;
    /**
    * The ARN of the Amazon SNS target where the message is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#target_arn CcDetectorModel#target_arn}
    */
    readonly targetArn?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._targetArn = value.targetArn;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty {
    /**
    * You can configure the action payload when you send a message to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty;
    /**
    * The URL of the SQS queue where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#queue_url CcDetectorModel#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#use_base_64 CcDetectorModel#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._queueUrl = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._queueUrl = value.queueUrl;
            this._useBase64 = value.useBase64;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
    }

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsActionsProperty {
    /**
    * Information needed to clear the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#clear_timer CcDetectorModel#clear_timer}
    */
    readonly clearTimer?: DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 CcDetectorModel#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_db CcDetectorModel#dynamo_db}
    */
    readonly dynamoDb?: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#firehose CcDetectorModel#firehose}
    */
    readonly firehose?: DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty;
    /**
    * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_events CcDetectorModel#iot_events}
    */
    readonly iotEvents?: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_site_wise CcDetectorModel#iot_site_wise}
    */
    readonly iotSiteWise?: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty;
    /**
    * Publishes an MQTT message with the given topic to the IoT message broker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_topic_publish CcDetectorModel#iot_topic_publish}
    */
    readonly iotTopicPublish?: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty;
    /**
    * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#lambda CcDetectorModel#lambda}
    */
    readonly lambda?: DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty;
    /**
    * Information needed to reset the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#reset_timer CcDetectorModel#reset_timer}
    */
    readonly resetTimer?: DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty;
    /**
    * Information needed to set the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_timer CcDetectorModel#set_timer}
    */
    readonly setTimer?: DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty;
    /**
    * Sets a variable to a specified value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_variable CcDetectorModel#set_variable}
    */
    readonly setVariable?: DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sns CcDetectorModel#sns}
    */
    readonly sns?: DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sqs CcDetectorModel#sqs}
    */
    readonly sqs?: DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty;
}
export class DetectorModelDefinitionStatesOnInputEventsActionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clearTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clearTimer = this._clearTimer?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._iotTopicPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._resetTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resetTimer = this._resetTimer?.internalValue;
        }
        if (this._setTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setTimer = this._setTimer?.internalValue;
        }
        if (this._setVariable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setVariable = this._setVariable?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._iotTopicPublish.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._resetTimer.internalValue = undefined;
            this._setTimer.internalValue = undefined;
            this._setVariable.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = value.clearTimer;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._firehose.internalValue = value.firehose;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._iotTopicPublish.internalValue = value.iotTopicPublish;
            this._lambda.internalValue = value.lambda;
            this._resetTimer.internalValue = value.resetTimer;
            this._setTimer.internalValue = value.setTimer;
            this._setVariable.internalValue = value.setVariable;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
        }
    }

    // clear_timer - computed: true, optional: true, required: false
    private _clearTimer = new DetectorModelDefinitionStatesOnInputEventsActionsClearTimerPropertyOutputReference(this, "clear_timer");
    public get clearTimer() {
        return this._clearTimer;
    }
    public putClearTimer(value: DetectorModelDefinitionStatesOnInputEventsActionsClearTimerProperty) {
        this._clearTimer.internalValue = value;
    }
    public resetClearTimer() {
        this._clearTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clearTimerInput() {
        return this._clearTimer.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Property) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DetectorModelDefinitionStatesOnInputEventsActionsDynamoDbProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new DetectorModelDefinitionStatesOnInputEventsActionsFirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: DetectorModelDefinitionStatesOnInputEventsActionsFirehoseProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new DetectorModelDefinitionStatesOnInputEventsActionsIotEventsPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: DetectorModelDefinitionStatesOnInputEventsActionsIotEventsProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: DetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // iot_topic_publish - computed: true, optional: true, required: false
    private _iotTopicPublish = new DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPropertyOutputReference(this, "iot_topic_publish");
    public get iotTopicPublish() {
        return this._iotTopicPublish;
    }
    public putIotTopicPublish(value: DetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishProperty) {
        this._iotTopicPublish.internalValue = value;
    }
    public resetIotTopicPublish() {
        this._iotTopicPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotTopicPublishInput() {
        return this._iotTopicPublish.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new DetectorModelDefinitionStatesOnInputEventsActionsLambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: DetectorModelDefinitionStatesOnInputEventsActionsLambdaProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // reset_timer - computed: true, optional: true, required: false
    private _resetTimer = new DetectorModelDefinitionStatesOnInputEventsActionsResetTimerPropertyOutputReference(this, "reset_timer");
    public get resetTimer() {
        return this._resetTimer;
    }
    public putResetTimer(value: DetectorModelDefinitionStatesOnInputEventsActionsResetTimerProperty) {
        this._resetTimer.internalValue = value;
    }
    public resetResetTimer() {
        this._resetTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetTimerInput() {
        return this._resetTimer.internalValue;
    }

    // set_timer - computed: true, optional: true, required: false
    private _setTimer = new DetectorModelDefinitionStatesOnInputEventsActionsSetTimerPropertyOutputReference(this, "set_timer");
    public get setTimer() {
        return this._setTimer;
    }
    public putSetTimer(value: DetectorModelDefinitionStatesOnInputEventsActionsSetTimerProperty) {
        this._setTimer.internalValue = value;
    }
    public resetSetTimer() {
        this._setTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setTimerInput() {
        return this._setTimer.internalValue;
    }

    // set_variable - computed: true, optional: true, required: false
    private _setVariable = new DetectorModelDefinitionStatesOnInputEventsActionsSetVariablePropertyOutputReference(this, "set_variable");
    public get setVariable() {
        return this._setVariable;
    }
    public putSetVariable(value: DetectorModelDefinitionStatesOnInputEventsActionsSetVariableProperty) {
        this._setVariable.internalValue = value;
    }
    public resetSetVariable() {
        this._setVariable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setVariableInput() {
        return this._setVariable.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new DetectorModelDefinitionStatesOnInputEventsActionsSnsPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: DetectorModelDefinitionStatesOnInputEventsActionsSnsProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new DetectorModelDefinitionStatesOnInputEventsActionsSqsPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: DetectorModelDefinitionStatesOnInputEventsActionsSqsProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }
}

export class DetectorModelDefinitionStatesOnInputEventsActionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DetectorModelDefinitionStatesOnInputEventsActionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DetectorModelDefinitionStatesOnInputEventsActionsPropertyOutputReference {
        return new DetectorModelDefinitionStatesOnInputEventsActionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DetectorModelDefinitionStatesOnInputEventsProperty {
    /**
    * The actions to be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#actions CcDetectorModel#actions}
    */
    readonly actions?: DetectorModelDefinitionStatesOnInputEventsActionsProperty[] | cdktn.IResolvable;
    /**
    * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#condition CcDetectorModel#condition}
    */
    readonly condition?: string;
    /**
    * The name of the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#event_name CcDetectorModel#event_name}
    */
    readonly eventName?: string;
}
export class DetectorModelDefinitionStatesOnInputEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DetectorModelDefinitionStatesOnInputEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._condition = undefined;
            this._eventName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._condition = value.condition;
            this._eventName = value.eventName;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new DetectorModelDefinitionStatesOnInputEventsActionsPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: DetectorModelDefinitionStatesOnInputEventsActionsProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }
}

export class DetectorModelDefinitionStatesOnInputEventsPropertyList extends cdktn.ComplexList {
    public internalValue? : DetectorModelDefinitionStatesOnInputEventsProperty[] | cdktn.IResolvable

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
    public get(index: number): DetectorModelDefinitionStatesOnInputEventsPropertyOutputReference {
        return new DetectorModelDefinitionStatesOnInputEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty {
    /**
    * The name of the timer to clear.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property {
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty;
    /**
    * The name of the DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._tableName = value.tableName;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty {
    /**
    * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_field CcDetectorModel#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * The data type for the hash key (also called the partition key). You can specify the following values:
    *   +  ``'STRING'`` - The hash key is a string.
    *   +  ``'NUMBER'`` - The hash key is a number.
    *   
    *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_type CcDetectorModel#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * The value of the hash key (also called the partition key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#hash_key_value CcDetectorModel#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * The type of operation to perform. You can specify the following values: 
    *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   
    *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#operation CcDetectorModel#operation}
    */
    readonly operation?: string;
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty;
    /**
    * The name of the DynamoDB column that receives the action payload.
    *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload_field CcDetectorModel#payload_field}
    */
    readonly payloadField?: string;
    /**
    * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_field CcDetectorModel#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * The data type for the range key (also called the sort key), You can specify the following values:
    *   +  ``'STRING'`` - The range key is a string.
    *   +  ``'NUMBER'`` - The range key is number.
    *   
    *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_type CcDetectorModel#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * The value of the range key (also called the sort key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#range_key_value CcDetectorModel#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#table_name CcDetectorModel#table_name}
    */
    readonly tableName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._operation = undefined;
            this._payload.internalValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._operation = value.operation;
            this._payload.internalValue = value.payload;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty {
    /**
    * The name of the Kinesis Data Firehose delivery stream where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#delivery_stream_name CcDetectorModel#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty;
    /**
    * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#separator CcDetectorModel#separator}
    */
    readonly separator?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamName = undefined;
            this._payload.internalValue = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamName = value.deliveryStreamName;
            this._payload.internalValue = value.payload;
            this._separator = value.separator;
        }
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty {
    /**
    * The name of the ITE input where the data is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#input_name CcDetectorModel#input_name}
    */
    readonly inputName?: string;
    /**
    * You can configure the action payload when you send a message to an ITE input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputName = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputName = value.inputName;
            this._payload.internalValue = value.payload;
        }
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty {
    /**
    * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#offset_in_nanos CcDetectorModel#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#time_in_seconds CcDetectorModel#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty {
    /**
    * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#boolean_value CcDetectorModel#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#double_value CcDetectorModel#double_value}
    */
    readonly doubleValue?: string;
    /**
    * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#integer_value CcDetectorModel#integer_value}
    */
    readonly integerValue?: string;
    /**
    * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#string_value CcDetectorModel#string_value}
    */
    readonly stringValue?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty {
    /**
    * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#quality CcDetectorModel#quality}
    */
    readonly quality?: string;
    /**
    * The timestamp associated with the asset property value. The default is the current event time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timestamp CcDetectorModel#timestamp}
    */
    readonly timestamp?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty;
    /**
    * The value to send to an asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty {
    /**
    * The ID of the asset that has the specified property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#asset_id CcDetectorModel#asset_id}
    */
    readonly assetId?: string;
    /**
    * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#entry_id CcDetectorModel#entry_id}
    */
    readonly entryId?: string;
    /**
    * The alias of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_alias CcDetectorModel#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * The ID of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_id CcDetectorModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#property_value CcDetectorModel#property_value}
    */
    readonly propertyValue?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValue = this._propertyValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValue.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValue.internalValue = value.propertyValue;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_value - computed: true, optional: true, required: false
    private _propertyValue = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValuePropertyOutputReference(this, "property_value");
    public get propertyValue() {
        return this._propertyValue;
    }
    public putPropertyValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueProperty) {
        this._propertyValue.internalValue = value;
    }
    public resetPropertyValue() {
        this._propertyValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValueInput() {
        return this._propertyValue.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty {
    /**
    * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#mqtt_topic CcDetectorModel#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * You can configure the action payload when you publish a message to an IoTCore topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._payload.internalValue = value.payload;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty {
    /**
    * The ARN of the Lambda function that is executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#function_arn CcDetectorModel#function_arn}
    */
    readonly functionArn?: string;
    /**
    * You can configure the action payload when you send a message to a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._payload.internalValue = value.payload;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty {
    /**
    * The name of the timer to reset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timerName = value.timerName;
        }
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty {
    /**
    * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#duration_expression CcDetectorModel#duration_expression}
    */
    readonly durationExpression?: string;
    /**
    * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#seconds CcDetectorModel#seconds}
    */
    readonly seconds?: number;
    /**
    * The name of the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#timer_name CcDetectorModel#timer_name}
    */
    readonly timerName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationExpression = this._durationExpression;
        }
        if (this._seconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.seconds = this._seconds;
        }
        if (this._timerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timerName = this._timerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationExpression = undefined;
            this._seconds = undefined;
            this._timerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationExpression = value.durationExpression;
            this._seconds = value.seconds;
            this._timerName = value.timerName;
        }
    }

    // duration_expression - computed: true, optional: true, required: false
    private _durationExpression?: string; 
    public get durationExpression() {
        return this.getStringAttribute('duration_expression');
    }
    public set durationExpression(value: string) {
        this._durationExpression = value;
    }
    public resetDurationExpression() {
        this._durationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationExpressionInput() {
        return this._durationExpression;
    }

    // seconds - computed: true, optional: true, required: false
    private _seconds?: number; 
    public get seconds() {
        return this.getNumberAttribute('seconds');
    }
    public set seconds(value: number) {
        this._seconds = value;
    }
    public resetSeconds() {
        this._seconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsInput() {
        return this._seconds;
    }

    // timer_name - computed: true, optional: true, required: false
    private _timerName?: string; 
    public get timerName() {
        return this.getStringAttribute('timer_name');
    }
    public set timerName(value: string) {
        this._timerName = value;
    }
    public resetTimerName() {
        this._timerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timerNameInput() {
        return this._timerName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty {
    /**
    * The new value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
    */
    readonly value?: string;
    /**
    * The name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#variable_name CcDetectorModel#variable_name}
    */
    readonly variableName?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._variableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableName = this._variableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._variableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._variableName = value.variableName;
        }
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

    // variable_name - computed: true, optional: true, required: false
    private _variableName?: string; 
    public get variableName() {
        return this.getStringAttribute('variable_name');
    }
    public set variableName(value: string) {
        this._variableName = value;
    }
    public resetVariableName() {
        this._variableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableNameInput() {
        return this._variableName;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty {
    /**
    * You can configure the action payload when you send a message as an Amazon SNS push notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty;
    /**
    * The ARN of the Amazon SNS target where the message is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#target_arn CcDetectorModel#target_arn}
    */
    readonly targetArn?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._targetArn = value.targetArn;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#content_expression CcDetectorModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#type CcDetectorModel#type}
    */
    readonly type?: string;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty {
    /**
    * You can configure the action payload when you send a message to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#payload CcDetectorModel#payload}
    */
    readonly payload?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty;
    /**
    * The URL of the SQS queue where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#queue_url CcDetectorModel#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#use_base_64 CcDetectorModel#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._queueUrl = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._queueUrl = value.queueUrl;
            this._useBase64 = value.useBase64;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
    }

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty {
    /**
    * Information needed to clear the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#clear_timer CcDetectorModel#clear_timer}
    */
    readonly clearTimer?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 CcDetectorModel#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property;
    /**
    * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#dynamo_db CcDetectorModel#dynamo_db}
    */
    readonly dynamoDb?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#firehose CcDetectorModel#firehose}
    */
    readonly firehose?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty;
    /**
    * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_events CcDetectorModel#iot_events}
    */
    readonly iotEvents?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_site_wise CcDetectorModel#iot_site_wise}
    */
    readonly iotSiteWise?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty;
    /**
    * Publishes an MQTT message with the given topic to the IoT message broker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#iot_topic_publish CcDetectorModel#iot_topic_publish}
    */
    readonly iotTopicPublish?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty;
    /**
    * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#lambda CcDetectorModel#lambda}
    */
    readonly lambda?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty;
    /**
    * Information needed to reset the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#reset_timer CcDetectorModel#reset_timer}
    */
    readonly resetTimer?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty;
    /**
    * Information needed to set the timer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_timer CcDetectorModel#set_timer}
    */
    readonly setTimer?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty;
    /**
    * Sets a variable to a specified value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#set_variable CcDetectorModel#set_variable}
    */
    readonly setVariable?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sns CcDetectorModel#sns}
    */
    readonly sns?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty;
    /**
    * Sends an Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#sqs CcDetectorModel#sqs}
    */
    readonly sqs?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty;
}
export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clearTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clearTimer = this._clearTimer?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._iotTopicPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._resetTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resetTimer = this._resetTimer?.internalValue;
        }
        if (this._setTimer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setTimer = this._setTimer?.internalValue;
        }
        if (this._setVariable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.setVariable = this._setVariable?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._iotTopicPublish.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._resetTimer.internalValue = undefined;
            this._setTimer.internalValue = undefined;
            this._setVariable.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clearTimer.internalValue = value.clearTimer;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._firehose.internalValue = value.firehose;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._iotTopicPublish.internalValue = value.iotTopicPublish;
            this._lambda.internalValue = value.lambda;
            this._resetTimer.internalValue = value.resetTimer;
            this._setTimer.internalValue = value.setTimer;
            this._setVariable.internalValue = value.setVariable;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
        }
    }

    // clear_timer - computed: true, optional: true, required: false
    private _clearTimer = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerPropertyOutputReference(this, "clear_timer");
    public get clearTimer() {
        return this._clearTimer;
    }
    public putClearTimer(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerProperty) {
        this._clearTimer.internalValue = value;
    }
    public resetClearTimer() {
        this._clearTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clearTimerInput() {
        return this._clearTimer.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Property) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // iot_topic_publish - computed: true, optional: true, required: false
    private _iotTopicPublish = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPropertyOutputReference(this, "iot_topic_publish");
    public get iotTopicPublish() {
        return this._iotTopicPublish;
    }
    public putIotTopicPublish(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishProperty) {
        this._iotTopicPublish.internalValue = value;
    }
    public resetIotTopicPublish() {
        this._iotTopicPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotTopicPublishInput() {
        return this._iotTopicPublish.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // reset_timer - computed: true, optional: true, required: false
    private _resetTimer = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerPropertyOutputReference(this, "reset_timer");
    public get resetTimer() {
        return this._resetTimer;
    }
    public putResetTimer(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerProperty) {
        this._resetTimer.internalValue = value;
    }
    public resetResetTimer() {
        this._resetTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetTimerInput() {
        return this._resetTimer.internalValue;
    }

    // set_timer - computed: true, optional: true, required: false
    private _setTimer = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerPropertyOutputReference(this, "set_timer");
    public get setTimer() {
        return this._setTimer;
    }
    public putSetTimer(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerProperty) {
        this._setTimer.internalValue = value;
    }
    public resetSetTimer() {
        this._setTimer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setTimerInput() {
        return this._setTimer.internalValue;
    }

    // set_variable - computed: true, optional: true, required: false
    private _setVariable = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariablePropertyOutputReference(this, "set_variable");
    public get setVariable() {
        return this._setVariable;
    }
    public putSetVariable(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableProperty) {
        this._setVariable.internalValue = value;
    }
    public resetSetVariable() {
        this._setVariable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setVariableInput() {
        return this._setVariable.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }
}

export class DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyOutputReference {
        return new DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TransitionEventProperty {
    /**
    * The actions to be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#actions CcDetectorModel#actions}
    */
    readonly actions?: DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty[] | cdktn.IResolvable;
    /**
    * Required. A Boolean expression that when TRUE causes the actions to be performed and the ``nextState`` to be entered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#condition CcDetectorModel#condition}
    */
    readonly condition?: string;
    /**
    * The name of the transition event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#event_name CcDetectorModel#event_name}
    */
    readonly eventName?: string;
    /**
    * The next state to enter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#next_state CcDetectorModel#next_state}
    */
    readonly nextState?: string;
}
export class TransitionEventPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TransitionEventProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._condition !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        if (this._nextState !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextState = this._nextState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitionEventProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._condition = undefined;
            this._eventName = undefined;
            this._nextState = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._condition = value.condition;
            this._eventName = value.eventName;
            this._nextState = value.nextState;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions = new DetectorModelDefinitionStatesOnInputTransitionEventsActionsPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: DetectorModelDefinitionStatesOnInputTransitionEventsActionsProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }

    // next_state - computed: true, optional: true, required: false
    private _nextState?: string; 
    public get nextState() {
        return this.getStringAttribute('next_state');
    }
    public set nextState(value: string) {
        this._nextState = value;
    }
    public resetNextState() {
        this._nextState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nextStateInput() {
        return this._nextState;
    }
}

export class TransitionEventPropertyList extends cdktn.ComplexList {
    public internalValue? : TransitionEventProperty[] | cdktn.IResolvable

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
    public get(index: number): TransitionEventPropertyOutputReference {
        return new TransitionEventPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnInputProperty {
    /**
    * Specifies the actions performed when the ``condition`` evaluates to TRUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#events CcDetectorModel#events}
    */
    readonly events?: DetectorModelDefinitionStatesOnInputEventsProperty[] | cdktn.IResolvable;
    /**
    * Specifies the actions performed, and the next state entered, when a ``condition`` evaluates to TRUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#transition_events CcDetectorModel#transition_events}
    */
    readonly transitionEvents?: TransitionEventProperty[] | cdktn.IResolvable;
}
export class OnInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._events?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events?.internalValue;
        }
        if (this._transitionEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionEvents = this._transitionEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._events.internalValue = undefined;
            this._transitionEvents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._events.internalValue = value.events;
            this._transitionEvents.internalValue = value.transitionEvents;
        }
    }

    // events - computed: true, optional: true, required: false
    private _events = new DetectorModelDefinitionStatesOnInputEventsPropertyList(this, "events", false);
    public get events() {
        return this._events;
    }
    public putEvents(value: DetectorModelDefinitionStatesOnInputEventsProperty[] | cdktn.IResolvable) {
        this._events.internalValue = value;
    }
    public resetEvents() {
        this._events.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events.internalValue;
    }

    // transition_events - computed: true, optional: true, required: false
    private _transitionEvents = new TransitionEventPropertyList(this, "transition_events", false);
    public get transitionEvents() {
        return this._transitionEvents;
    }
    public putTransitionEvents(value: TransitionEventProperty[] | cdktn.IResolvable) {
        this._transitionEvents.internalValue = value;
    }
    public resetTransitionEvents() {
        this._transitionEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionEventsInput() {
        return this._transitionEvents.internalValue;
    }
}
export interface StateProperty {
    /**
    * When entering this state, perform these ``actions`` if the ``condition`` is TRUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#on_enter CcDetectorModel#on_enter}
    */
    readonly onEnter?: OnEnterProperty;
    /**
    * When exiting this state, perform these ``actions`` if the specified ``condition`` is ``TRUE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#on_exit CcDetectorModel#on_exit}
    */
    readonly onExit?: OnExitProperty;
    /**
    * When an input is received and the ``condition`` is TRUE, perform the specified ``actions``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#on_input CcDetectorModel#on_input}
    */
    readonly onInput?: OnInputProperty;
    /**
    * The name of the state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#state_name CcDetectorModel#state_name}
    */
    readonly stateName: string;
}
export class StatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onEnter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onEnter = this._onEnter?.internalValue;
        }
        if (this._onExit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onExit = this._onExit?.internalValue;
        }
        if (this._onInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onInput = this._onInput?.internalValue;
        }
        if (this._stateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateName = this._stateName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onEnter.internalValue = undefined;
            this._onExit.internalValue = undefined;
            this._onInput.internalValue = undefined;
            this._stateName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onEnter.internalValue = value.onEnter;
            this._onExit.internalValue = value.onExit;
            this._onInput.internalValue = value.onInput;
            this._stateName = value.stateName;
        }
    }

    // on_enter - computed: true, optional: true, required: false
    private _onEnter = new OnEnterPropertyOutputReference(this, "on_enter");
    public get onEnter() {
        return this._onEnter;
    }
    public putOnEnter(value: OnEnterProperty) {
        this._onEnter.internalValue = value;
    }
    public resetOnEnter() {
        this._onEnter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onEnterInput() {
        return this._onEnter.internalValue;
    }

    // on_exit - computed: true, optional: true, required: false
    private _onExit = new OnExitPropertyOutputReference(this, "on_exit");
    public get onExit() {
        return this._onExit;
    }
    public putOnExit(value: OnExitProperty) {
        this._onExit.internalValue = value;
    }
    public resetOnExit() {
        this._onExit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onExitInput() {
        return this._onExit.internalValue;
    }

    // on_input - computed: true, optional: true, required: false
    private _onInput = new OnInputPropertyOutputReference(this, "on_input");
    public get onInput() {
        return this._onInput;
    }
    public putOnInput(value: OnInputProperty) {
        this._onInput.internalValue = value;
    }
    public resetOnInput() {
        this._onInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onInputInput() {
        return this._onInput.internalValue;
    }

    // state_name - computed: false, optional: false, required: true
    private _stateName?: string; 
    public get stateName() {
        return this.getStringAttribute('state_name');
    }
    public set stateName(value: string) {
        this._stateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stateNameInput() {
        return this._stateName;
    }
}

export class StatePropertyList extends cdktn.ComplexList {
    public internalValue? : StateProperty[] | cdktn.IResolvable

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
    public get(index: number): StatePropertyOutputReference {
        return new StatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DetectorModelDefinitionProperty {
    /**
    * The state that is entered at the creation of each detector (instance).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#initial_state_name CcDetectorModel#initial_state_name}
    */
    readonly initialStateName: string;
    /**
    * Information about the states of the detector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#states CcDetectorModel#states}
    */
    readonly states: StateProperty[] | cdktn.IResolvable;
}
export class DetectorModelDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetectorModelDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._initialStateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialStateName = this._initialStateName;
        }
        if (this._states?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.states = this._states?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetectorModelDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._initialStateName = undefined;
            this._states.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._initialStateName = value.initialStateName;
            this._states.internalValue = value.states;
        }
    }

    // initial_state_name - computed: false, optional: false, required: true
    private _initialStateName?: string; 
    public get initialStateName() {
        return this.getStringAttribute('initial_state_name');
    }
    public set initialStateName(value: string) {
        this._initialStateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get initialStateNameInput() {
        return this._initialStateName;
    }

    // states - computed: false, optional: false, required: true
    private _states = new StatePropertyList(this, "states", false);
    public get states() {
        return this._states;
    }
    public putStates(value: StateProperty[] | cdktn.IResolvable) {
        this._states.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statesInput() {
        return this._states.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#key CcDetectorModel#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_detector_model#value CcDetectorModel#value}
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
