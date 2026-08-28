// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipelineProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#activate CcPipeline#activate}
    */
    readonly activate?: boolean | cdktn.IResolvable;
    /**
    * A description of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#description CcPipeline#description}
    */
    readonly description?: string;
    /**
    * The name of the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#name CcPipeline#name}
    */
    readonly name: string;
    /**
    * The parameter objects used with the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#parameter_objects CcPipeline#parameter_objects}
    */
    readonly parameterObjects?: CcPipeline.ParameterObjectProperty[] | cdktn.IResolvable;
    /**
    * The parameter values used with the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#parameter_values CcPipeline#parameter_values}
    */
    readonly parameterValues?: CcPipeline.ParameterValueProperty[] | cdktn.IResolvable;
    /**
    * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#pipeline_objects CcPipeline#pipeline_objects}
    */
    readonly pipelineObjects?: CcPipeline.PipelineObjectProperty[] | cdktn.IResolvable;
    /**
    * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#pipeline_tags CcPipeline#pipeline_tags}
    */
    readonly pipelineTags?: CcPipeline.PipelineTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}
*/
export class CcPipeline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datapipeline_pipeline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipeline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipeline to import
    * @param importFromId The id of the existing CcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipeline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datapipeline_pipeline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipelineProps
    */
    public constructor(scope: Construct, id: string, config: CcPipelineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datapipeline_pipeline',
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
        this._activate = config.activate;
        this._description = config.description;
        this._name = config.name;
        this._parameterObjects.internalValue = config.parameterObjects;
        this._parameterValues.internalValue = config.parameterValues;
        this._pipelineObjects.internalValue = config.pipelineObjects;
        this._pipelineTags.internalValue = config.pipelineTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activate - computed: true, optional: true, required: false
    private _activate?: boolean | cdktn.IResolvable; 
    public get activate() {
        return this.getBooleanAttribute('activate');
    }
    public set activate(value: boolean | cdktn.IResolvable) {
        this._activate = value;
    }
    public resetActivate() {
        this._activate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activateInput() {
        return this._activate;
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

    // parameter_objects - computed: true, optional: true, required: false
    private _parameterObjects = new CcPipeline.ParameterObjectPropertyList(this, "parameter_objects", false);
    public get parameterObjects() {
        return this._parameterObjects;
    }
    public putParameterObjects(value: CcPipeline.ParameterObjectProperty[] | cdktn.IResolvable) {
        this._parameterObjects.internalValue = value;
    }
    public resetParameterObjects() {
        this._parameterObjects.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterObjectsInput() {
        return this._parameterObjects.internalValue;
    }

    // parameter_values - computed: true, optional: true, required: false
    private _parameterValues = new CcPipeline.ParameterValuePropertyList(this, "parameter_values", false);
    public get parameterValues() {
        return this._parameterValues;
    }
    public putParameterValues(value: CcPipeline.ParameterValueProperty[] | cdktn.IResolvable) {
        this._parameterValues.internalValue = value;
    }
    public resetParameterValues() {
        this._parameterValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValuesInput() {
        return this._parameterValues.internalValue;
    }

    // pipeline_id - computed: true, optional: false, required: false
    public get pipelineId() {
        return this.getStringAttribute('pipeline_id');
    }

    // pipeline_objects - computed: true, optional: true, required: false
    private _pipelineObjects = new CcPipeline.PipelineObjectPropertyList(this, "pipeline_objects", false);
    public get pipelineObjects() {
        return this._pipelineObjects;
    }
    public putPipelineObjects(value: CcPipeline.PipelineObjectProperty[] | cdktn.IResolvable) {
        this._pipelineObjects.internalValue = value;
    }
    public resetPipelineObjects() {
        this._pipelineObjects.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineObjectsInput() {
        return this._pipelineObjects.internalValue;
    }

    // pipeline_tags - computed: true, optional: true, required: false
    private _pipelineTags = new CcPipeline.PipelineTagPropertyList(this, "pipeline_tags", false);
    public get pipelineTags() {
        return this._pipelineTags;
    }
    public putPipelineTags(value: CcPipeline.PipelineTagProperty[] | cdktn.IResolvable) {
        this._pipelineTags.internalValue = value;
    }
    public resetPipelineTags() {
        this._pipelineTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineTagsInput() {
        return this._pipelineTags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            activate: cdktn.booleanToTerraform(this._activate),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            parameter_objects: cdktn.listMapper(ccPipelineParameterObjectPropertyToTerraform, false)(this._parameterObjects.internalValue),
            parameter_values: cdktn.listMapper(ccPipelineParameterValuePropertyToTerraform, false)(this._parameterValues.internalValue),
            pipeline_objects: cdktn.listMapper(ccPipelinePipelineObjectPropertyToTerraform, false)(this._pipelineObjects.internalValue),
            pipeline_tags: cdktn.listMapper(ccPipelinePipelineTagPropertyToTerraform, false)(this._pipelineTags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            activate: {
                value: cdktn.booleanToHclTerraform(this._activate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameter_objects: {
                value: cdktn.listMapperHcl(ccPipelineParameterObjectPropertyToHclTerraform, false)(this._parameterObjects.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.ParameterObjectPropertyList",
            },
            parameter_values: {
                value: cdktn.listMapperHcl(ccPipelineParameterValuePropertyToHclTerraform, false)(this._parameterValues.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.ParameterValuePropertyList",
            },
            pipeline_objects: {
                value: cdktn.listMapperHcl(ccPipelinePipelineObjectPropertyToHclTerraform, false)(this._pipelineObjects.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.PipelineObjectPropertyList",
            },
            pipeline_tags: {
                value: cdktn.listMapperHcl(ccPipelinePipelineTagPropertyToHclTerraform, false)(this._pipelineTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPipeline.PipelineTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipelineParameterAttributePropertyToTerraform(struct?: CcPipeline.ParameterAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccPipelineParameterAttributePropertyToHclTerraform(struct?: CcPipeline.ParameterAttributeProperty | cdktn.IResolvable): any {
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


export function ccPipelineParameterObjectPropertyToTerraform(struct?: CcPipeline.ParameterObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.listMapper(ccPipelineParameterAttributePropertyToTerraform, false)(struct!.attributes),
        id: cdktn.stringToTerraform(struct!.id),
    }
}


export function ccPipelineParameterObjectPropertyToHclTerraform(struct?: CcPipeline.ParameterObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.listMapperHcl(ccPipelineParameterAttributePropertyToHclTerraform, false)(struct!.attributes),
            isBlock: true,
            type: "list",
            storageClassType: "ParameterAttributePropertyList",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineParameterValuePropertyToTerraform(struct?: CcPipeline.ParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccPipelineParameterValuePropertyToHclTerraform(struct?: CcPipeline.ParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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


export function ccPipelineFieldPropertyToTerraform(struct?: CcPipeline.FieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        ref_value: cdktn.stringToTerraform(struct!.refValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccPipelineFieldPropertyToHclTerraform(struct?: CcPipeline.FieldProperty | cdktn.IResolvable): any {
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
        ref_value: {
            value: cdktn.stringToHclTerraform(struct!.refValue),
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


export function ccPipelinePipelineObjectPropertyToTerraform(struct?: CcPipeline.PipelineObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccPipelineFieldPropertyToTerraform, false)(struct!.fields),
        id: cdktn.stringToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPipelinePipelineObjectPropertyToHclTerraform(struct?: CcPipeline.PipelineObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccPipelineFieldPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "FieldPropertyList",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelinePipelineTagPropertyToTerraform(struct?: CcPipeline.PipelineTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipelinePipelineTagPropertyToHclTerraform(struct?: CcPipeline.PipelineTagProperty | cdktn.IResolvable): any {
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


export namespace CcPipeline {
export interface ParameterAttributeProperty {
    /**
    * The field identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * The field value, expressed as a String.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#string_value CcPipeline#string_value}
    */
    readonly stringValue?: string;
}
export class ParameterAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._stringValue = value.stringValue;
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

export class ParameterAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterAttributePropertyOutputReference {
        return new ParameterAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParameterObjectProperty {
    /**
    * The attributes of the parameter object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#attributes CcPipeline#attributes}
    */
    readonly attributes?: ParameterAttributeProperty[] | cdktn.IResolvable;
    /**
    * The ID of the parameter object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#id CcPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export class ParameterObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes.internalValue = undefined;
            this._id = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes.internalValue = value.attributes;
            this._id = value.id;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new ParameterAttributePropertyList(this, "attributes", false);
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: ParameterAttributeProperty[] | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }
}

export class ParameterObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterObjectPropertyOutputReference {
        return new ParameterObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParameterValueProperty {
    /**
    * The ID of the parameter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#id CcPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The field value, expressed as a String.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#string_value CcPipeline#string_value}
    */
    readonly stringValue?: string;
}
export class ParameterValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._stringValue = value.stringValue;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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

export class ParameterValuePropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterValueProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterValuePropertyOutputReference {
        return new ParameterValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FieldProperty {
    /**
    * Specifies the name of a field for a particular object. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * A field value that you specify as an identifier of another object in the same pipeline definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#ref_value CcPipeline#ref_value}
    */
    readonly refValue?: string;
    /**
    * A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#string_value CcPipeline#string_value}
    */
    readonly stringValue?: string;
}
export class FieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._refValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.refValue = this._refValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._refValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._refValue = value.refValue;
            this._stringValue = value.stringValue;
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

    // ref_value - computed: true, optional: true, required: false
    private _refValue?: string; 
    public get refValue() {
        return this.getStringAttribute('ref_value');
    }
    public set refValue(value: string) {
        this._refValue = value;
    }
    public resetRefValue() {
        this._refValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refValueInput() {
        return this._refValue;
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

export class FieldPropertyList extends cdktn.ComplexList {
    public internalValue? : FieldProperty[] | cdktn.IResolvable

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
    public get(index: number): FieldPropertyOutputReference {
        return new FieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PipelineObjectProperty {
    /**
    * Key-value pairs that define the properties of the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#fields CcPipeline#fields}
    */
    readonly fields?: FieldProperty[] | cdktn.IResolvable;
    /**
    * The ID of the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#id CcPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#name CcPipeline#name}
    */
    readonly name?: string;
}
export class PipelineObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PipelineObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipelineObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
            this._id = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
            this._id = value.id;
            this._name = value.name;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new FieldPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: FieldProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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
}

export class PipelineObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : PipelineObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): PipelineObjectPropertyOutputReference {
        return new PipelineObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PipelineTagProperty {
    /**
    * The key name of a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * The value to associate with the key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datapipeline_pipeline#value CcPipeline#value}
    */
    readonly value?: string;
}
export class PipelineTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PipelineTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PipelineTagProperty | cdktn.IResolvable | undefined) {
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

export class PipelineTagPropertyList extends cdktn.ComplexList {
    public internalValue? : PipelineTagProperty[] | cdktn.IResolvable

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
    public get(index: number): PipelineTagPropertyOutputReference {
        return new PipelineTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
