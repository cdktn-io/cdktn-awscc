// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#description CcEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#entity_types CcEventType#entity_types}
    */
    readonly entityTypes: CcEventType.EntityTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#event_variables CcEventType#event_variables}
    */
    readonly eventVariables: CcEventType.EventVariableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#labels CcEventType#labels}
    */
    readonly labels: CcEventType.LabelProperty[] | cdktn.IResolvable;
    /**
    * The name for the event type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#name CcEventType#name}
    */
    readonly name: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#tags CcEventType#tags}
    */
    readonly tags?: CcEventType.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type awscc_frauddetector_event_type}
*/
export class CcEventType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_frauddetector_event_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventType to import
    * @param importFromId The id of the existing CcEventType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_frauddetector_event_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type awscc_frauddetector_event_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventTypeProps
    */
    public constructor(scope: Construct, id: string, config: CcEventTypeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_frauddetector_event_type',
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
        this._description = config.description;
        this._entityTypes.internalValue = config.entityTypes;
        this._eventVariables.internalValue = config.eventVariables;
        this._labels.internalValue = config.labels;
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

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
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

    // entity_types - computed: false, optional: false, required: true
    private _entityTypes = new CcEventType.EntityTypePropertyList(this, "entity_types", false);
    public get entityTypes() {
        return this._entityTypes;
    }
    public putEntityTypes(value: CcEventType.EntityTypeProperty[] | cdktn.IResolvable) {
        this._entityTypes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypesInput() {
        return this._entityTypes.internalValue;
    }

    // event_variables - computed: false, optional: false, required: true
    private _eventVariables = new CcEventType.EventVariablePropertyList(this, "event_variables", false);
    public get eventVariables() {
        return this._eventVariables;
    }
    public putEventVariables(value: CcEventType.EventVariableProperty[] | cdktn.IResolvable) {
        this._eventVariables.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventVariablesInput() {
        return this._eventVariables.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // labels - computed: false, optional: false, required: true
    private _labels = new CcEventType.LabelPropertyList(this, "labels", false);
    public get labels() {
        return this._labels;
    }
    public putLabels(value: CcEventType.LabelProperty[] | cdktn.IResolvable) {
        this._labels.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
        return this._labels.internalValue;
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventType.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventType.TagsProperty[] | cdktn.IResolvable) {
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
            entity_types: cdktn.listMapper(ccEventTypeEntityTypePropertyToTerraform, false)(this._entityTypes.internalValue),
            event_variables: cdktn.listMapper(ccEventTypeEventVariablePropertyToTerraform, false)(this._eventVariables.internalValue),
            labels: cdktn.listMapper(ccEventTypeLabelPropertyToTerraform, false)(this._labels.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccEventTypeTagsPropertyToTerraform, false)(this._tags.internalValue),
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
            entity_types: {
                value: cdktn.listMapperHcl(ccEventTypeEntityTypePropertyToHclTerraform, false)(this._entityTypes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventType.EntityTypePropertyList",
            },
            event_variables: {
                value: cdktn.listMapperHcl(ccEventTypeEventVariablePropertyToHclTerraform, false)(this._eventVariables.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventType.EventVariablePropertyList",
            },
            labels: {
                value: cdktn.listMapperHcl(ccEventTypeLabelPropertyToHclTerraform, false)(this._labels.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventType.LabelPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventTypeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventType.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventTypeTagPropertyToTerraform(struct?: CcEventType.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventTypeTagPropertyToHclTerraform(struct?: CcEventType.TagProperty | cdktn.IResolvable): any {
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


export function ccEventTypeEntityTypePropertyToTerraform(struct?: CcEventType.EntityTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        created_time: cdktn.stringToTerraform(struct!.createdTime),
        description: cdktn.stringToTerraform(struct!.description),
        inline: cdktn.booleanToTerraform(struct!.inline),
        last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
        name: cdktn.stringToTerraform(struct!.name),
        tags: cdktn.listMapper(ccEventTypeTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccEventTypeEntityTypePropertyToHclTerraform(struct?: CcEventType.EntityTypeProperty | cdktn.IResolvable): any {
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
        created_time: {
            value: cdktn.stringToHclTerraform(struct!.createdTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inline: {
            value: cdktn.booleanToHclTerraform(struct!.inline),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        last_updated_time: {
            value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
        tags: {
            value: cdktn.listMapperHcl(ccEventTypeTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTypeEventVariablesTagsPropertyToTerraform(struct?: CcEventType.EventVariablesTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventTypeEventVariablesTagsPropertyToHclTerraform(struct?: CcEventType.EventVariablesTagsProperty | cdktn.IResolvable): any {
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


export function ccEventTypeEventVariablePropertyToTerraform(struct?: CcEventType.EventVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        created_time: cdktn.stringToTerraform(struct!.createdTime),
        data_source: cdktn.stringToTerraform(struct!.dataSource),
        data_type: cdktn.stringToTerraform(struct!.dataType),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        description: cdktn.stringToTerraform(struct!.description),
        inline: cdktn.booleanToTerraform(struct!.inline),
        last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
        name: cdktn.stringToTerraform(struct!.name),
        tags: cdktn.listMapper(ccEventTypeEventVariablesTagsPropertyToTerraform, false)(struct!.tags),
        variable_type: cdktn.stringToTerraform(struct!.variableType),
    }
}


export function ccEventTypeEventVariablePropertyToHclTerraform(struct?: CcEventType.EventVariableProperty | cdktn.IResolvable): any {
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
        created_time: {
            value: cdktn.stringToHclTerraform(struct!.createdTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_source: {
            value: cdktn.stringToHclTerraform(struct!.dataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inline: {
            value: cdktn.booleanToHclTerraform(struct!.inline),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        last_updated_time: {
            value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
        tags: {
            value: cdktn.listMapperHcl(ccEventTypeEventVariablesTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "EventVariablesTagsPropertyList",
        },
        variable_type: {
            value: cdktn.stringToHclTerraform(struct!.variableType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTypeLabelsTagsPropertyToTerraform(struct?: CcEventType.LabelsTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventTypeLabelsTagsPropertyToHclTerraform(struct?: CcEventType.LabelsTagsProperty | cdktn.IResolvable): any {
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


export function ccEventTypeLabelPropertyToTerraform(struct?: CcEventType.LabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        created_time: cdktn.stringToTerraform(struct!.createdTime),
        description: cdktn.stringToTerraform(struct!.description),
        inline: cdktn.booleanToTerraform(struct!.inline),
        last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
        name: cdktn.stringToTerraform(struct!.name),
        tags: cdktn.listMapper(ccEventTypeLabelsTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccEventTypeLabelPropertyToHclTerraform(struct?: CcEventType.LabelProperty | cdktn.IResolvable): any {
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
        created_time: {
            value: cdktn.stringToHclTerraform(struct!.createdTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inline: {
            value: cdktn.booleanToHclTerraform(struct!.inline),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        last_updated_time: {
            value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
        tags: {
            value: cdktn.listMapperHcl(ccEventTypeLabelsTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "LabelsTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventTypeTagsPropertyToTerraform(struct?: CcEventType.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventTypeTagsPropertyToHclTerraform(struct?: CcEventType.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcEventType {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#key CcEventType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#value CcEventType#value}
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
export interface EntityTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#arn CcEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#created_time CcEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#description CcEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#inline CcEventType#inline}
    */
    readonly inline?: boolean | cdktn.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#last_updated_time CcEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#name CcEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#tags CcEventType#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class EntityTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EntityTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._createdTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdTime = this._createdTime;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inline !== undefined) {
            hasAnyValues = true;
            internalValueResult.inline = this._inline;
        }
        if (this._lastUpdatedTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._createdTime = undefined;
            this._description = undefined;
            this._inline = undefined;
            this._lastUpdatedTime = undefined;
            this._name = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._createdTime = value.createdTime;
            this._description = value.description;
            this._inline = value.inline;
            this._lastUpdatedTime = value.lastUpdatedTime;
            this._name = value.name;
            this._tags.internalValue = value.tags;
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

    // created_time - computed: true, optional: true, required: false
    private _createdTime?: string; 
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }
    public set createdTime(value: string) {
        this._createdTime = value;
    }
    public resetCreatedTime() {
        this._createdTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdTimeInput() {
        return this._createdTime;
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

    // inline - computed: true, optional: true, required: false
    private _inline?: boolean | cdktn.IResolvable; 
    public get inline() {
        return this.getBooleanAttribute('inline');
    }
    public set inline(value: boolean | cdktn.IResolvable) {
        this._inline = value;
    }
    public resetInline() {
        this._inline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineInput() {
        return this._inline;
    }

    // last_updated_time - computed: true, optional: true, required: false
    private _lastUpdatedTime?: string; 
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    public set lastUpdatedTime(value: string) {
        this._lastUpdatedTime = value;
    }
    public resetLastUpdatedTime() {
        this._lastUpdatedTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUpdatedTimeInput() {
        return this._lastUpdatedTime;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class EntityTypePropertyList extends cdktn.ComplexList {
    public internalValue? : EntityTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): EntityTypePropertyOutputReference {
        return new EntityTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventVariablesTagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#key CcEventType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#value CcEventType#value}
    */
    readonly value?: string;
}
export class EventVariablesTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventVariablesTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EventVariablesTagsProperty | cdktn.IResolvable | undefined) {
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

export class EventVariablesTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : EventVariablesTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): EventVariablesTagsPropertyOutputReference {
        return new EventVariablesTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#arn CcEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#created_time CcEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#data_source CcEventType#data_source}
    */
    readonly dataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#data_type CcEventType#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#default_value CcEventType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#description CcEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#inline CcEventType#inline}
    */
    readonly inline?: boolean | cdktn.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#last_updated_time CcEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#name CcEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#tags CcEventType#tags}
    */
    readonly tags?: EventVariablesTagsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#variable_type CcEventType#variable_type}
    */
    readonly variableType?: string;
}
export class EventVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._createdTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdTime = this._createdTime;
        }
        if (this._dataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSource = this._dataSource;
        }
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inline !== undefined) {
            hasAnyValues = true;
            internalValueResult.inline = this._inline;
        }
        if (this._lastUpdatedTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        if (this._variableType !== undefined) {
            hasAnyValues = true;
            internalValueResult.variableType = this._variableType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._createdTime = undefined;
            this._dataSource = undefined;
            this._dataType = undefined;
            this._defaultValue = undefined;
            this._description = undefined;
            this._inline = undefined;
            this._lastUpdatedTime = undefined;
            this._name = undefined;
            this._tags.internalValue = undefined;
            this._variableType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._createdTime = value.createdTime;
            this._dataSource = value.dataSource;
            this._dataType = value.dataType;
            this._defaultValue = value.defaultValue;
            this._description = value.description;
            this._inline = value.inline;
            this._lastUpdatedTime = value.lastUpdatedTime;
            this._name = value.name;
            this._tags.internalValue = value.tags;
            this._variableType = value.variableType;
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

    // created_time - computed: true, optional: true, required: false
    private _createdTime?: string; 
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }
    public set createdTime(value: string) {
        this._createdTime = value;
    }
    public resetCreatedTime() {
        this._createdTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdTimeInput() {
        return this._createdTime;
    }

    // data_source - computed: true, optional: true, required: false
    private _dataSource?: string; 
    public get dataSource() {
        return this.getStringAttribute('data_source');
    }
    public set dataSource(value: string) {
        this._dataSource = value;
    }
    public resetDataSource() {
        this._dataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
        return this._dataSource;
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // inline - computed: true, optional: true, required: false
    private _inline?: boolean | cdktn.IResolvable; 
    public get inline() {
        return this.getBooleanAttribute('inline');
    }
    public set inline(value: boolean | cdktn.IResolvable) {
        this._inline = value;
    }
    public resetInline() {
        this._inline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineInput() {
        return this._inline;
    }

    // last_updated_time - computed: true, optional: true, required: false
    private _lastUpdatedTime?: string; 
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    public set lastUpdatedTime(value: string) {
        this._lastUpdatedTime = value;
    }
    public resetLastUpdatedTime() {
        this._lastUpdatedTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUpdatedTimeInput() {
        return this._lastUpdatedTime;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new EventVariablesTagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: EventVariablesTagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // variable_type - computed: true, optional: true, required: false
    private _variableType?: string; 
    public get variableType() {
        return this.getStringAttribute('variable_type');
    }
    public set variableType(value: string) {
        this._variableType = value;
    }
    public resetVariableType() {
        this._variableType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableTypeInput() {
        return this._variableType;
    }
}

export class EventVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : EventVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): EventVariablePropertyOutputReference {
        return new EventVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LabelsTagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#key CcEventType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#value CcEventType#value}
    */
    readonly value?: string;
}
export class LabelsTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LabelsTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LabelsTagsProperty | cdktn.IResolvable | undefined) {
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

export class LabelsTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : LabelsTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): LabelsTagsPropertyOutputReference {
        return new LabelsTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LabelProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#arn CcEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#created_time CcEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#description CcEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#inline CcEventType#inline}
    */
    readonly inline?: boolean | cdktn.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#last_updated_time CcEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#name CcEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#tags CcEventType#tags}
    */
    readonly tags?: LabelsTagsProperty[] | cdktn.IResolvable;
}
export class LabelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LabelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._createdTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdTime = this._createdTime;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inline !== undefined) {
            hasAnyValues = true;
            internalValueResult.inline = this._inline;
        }
        if (this._lastUpdatedTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LabelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._createdTime = undefined;
            this._description = undefined;
            this._inline = undefined;
            this._lastUpdatedTime = undefined;
            this._name = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._createdTime = value.createdTime;
            this._description = value.description;
            this._inline = value.inline;
            this._lastUpdatedTime = value.lastUpdatedTime;
            this._name = value.name;
            this._tags.internalValue = value.tags;
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

    // created_time - computed: true, optional: true, required: false
    private _createdTime?: string; 
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }
    public set createdTime(value: string) {
        this._createdTime = value;
    }
    public resetCreatedTime() {
        this._createdTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdTimeInput() {
        return this._createdTime;
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

    // inline - computed: true, optional: true, required: false
    private _inline?: boolean | cdktn.IResolvable; 
    public get inline() {
        return this.getBooleanAttribute('inline');
    }
    public set inline(value: boolean | cdktn.IResolvable) {
        this._inline = value;
    }
    public resetInline() {
        this._inline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineInput() {
        return this._inline;
    }

    // last_updated_time - computed: true, optional: true, required: false
    private _lastUpdatedTime?: string; 
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }
    public set lastUpdatedTime(value: string) {
        this._lastUpdatedTime = value;
    }
    public resetLastUpdatedTime() {
        this._lastUpdatedTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUpdatedTimeInput() {
        return this._lastUpdatedTime;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new LabelsTagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: LabelsTagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class LabelPropertyList extends cdktn.ComplexList {
    public internalValue? : LabelProperty[] | cdktn.IResolvable

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
    public get(index: number): LabelPropertyOutputReference {
        return new LabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#key CcEventType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/frauddetector_event_type#value CcEventType#value}
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
