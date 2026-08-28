// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomActionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#action_name CcCustomAction#action_name}
    */
    readonly actionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#alias_name CcCustomAction#alias_name}
    */
    readonly aliasName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#attachments CcCustomAction#attachments}
    */
    readonly attachments?: CcCustomAction.CustomActionAttachmentProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#definition CcCustomAction#definition}
    */
    readonly definition: CcCustomAction.CustomActionDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#tags CcCustomAction#tags}
    */
    readonly tags?: CcCustomAction.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action awscc_chatbot_custom_action}
*/
export class CcCustomAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_chatbot_custom_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomAction to import
    * @param importFromId The id of the existing CcCustomAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chatbot_custom_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action awscc_chatbot_custom_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomActionProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_chatbot_custom_action',
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
        this._actionName = config.actionName;
        this._aliasName = config.aliasName;
        this._attachments.internalValue = config.attachments;
        this._definition.internalValue = config.definition;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_name - computed: false, optional: false, required: true
    private _actionName?: string; 
    public get actionName() {
        return this.getStringAttribute('action_name');
    }
    public set actionName(value: string) {
        this._actionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionNameInput() {
        return this._actionName;
    }

    // alias_name - computed: true, optional: true, required: false
    private _aliasName?: string; 
    public get aliasName() {
        return this.getStringAttribute('alias_name');
    }
    public set aliasName(value: string) {
        this._aliasName = value;
    }
    public resetAliasName() {
        this._aliasName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasNameInput() {
        return this._aliasName;
    }

    // attachments - computed: true, optional: true, required: false
    private _attachments = new CcCustomAction.CustomActionAttachmentPropertyList(this, "attachments", false);
    public get attachments() {
        return this._attachments;
    }
    public putAttachments(value: CcCustomAction.CustomActionAttachmentProperty[] | cdktn.IResolvable) {
        this._attachments.internalValue = value;
    }
    public resetAttachments() {
        this._attachments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentsInput() {
        return this._attachments.internalValue;
    }

    // custom_action_arn - computed: true, optional: false, required: false
    public get customActionArn() {
        return this.getStringAttribute('custom_action_arn');
    }

    // definition - computed: false, optional: false, required: true
    private _definition = new CcCustomAction.CustomActionDefinitionPropertyOutputReference(this, "definition");
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcCustomAction.CustomActionDefinitionProperty) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomAction.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomAction.TagProperty[] | cdktn.IResolvable) {
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
            action_name: cdktn.stringToTerraform(this._actionName),
            alias_name: cdktn.stringToTerraform(this._aliasName),
            attachments: cdktn.listMapper(ccCustomActionCustomActionAttachmentPropertyToTerraform, false)(this._attachments.internalValue),
            definition: ccCustomActionCustomActionDefinitionPropertyToTerraform(this._definition.internalValue),
            tags: cdktn.listMapper(ccCustomActionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_name: {
                value: cdktn.stringToHclTerraform(this._actionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias_name: {
                value: cdktn.stringToHclTerraform(this._aliasName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            attachments: {
                value: cdktn.listMapperHcl(ccCustomActionCustomActionAttachmentPropertyToHclTerraform, false)(this._attachments.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomAction.CustomActionAttachmentPropertyList",
            },
            definition: {
                value: ccCustomActionCustomActionDefinitionPropertyToHclTerraform(this._definition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCustomAction.CustomActionDefinitionProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomActionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomAction.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomActionCustomActionAttachmentCriteriaPropertyToTerraform(struct?: CcCustomAction.CustomActionAttachmentCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operator: cdktn.stringToTerraform(struct!.operator),
        value: cdktn.stringToTerraform(struct!.value),
        variable_name: cdktn.stringToTerraform(struct!.variableName),
    }
}


export function ccCustomActionCustomActionAttachmentCriteriaPropertyToHclTerraform(struct?: CcCustomAction.CustomActionAttachmentCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccCustomActionCustomActionAttachmentPropertyToTerraform(struct?: CcCustomAction.CustomActionAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_text: cdktn.stringToTerraform(struct!.buttonText),
        criteria: cdktn.listMapper(ccCustomActionCustomActionAttachmentCriteriaPropertyToTerraform, false)(struct!.criteria),
        notification_type: cdktn.stringToTerraform(struct!.notificationType),
        variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.variables),
    }
}


export function ccCustomActionCustomActionAttachmentPropertyToHclTerraform(struct?: CcCustomAction.CustomActionAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_text: {
            value: cdktn.stringToHclTerraform(struct!.buttonText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        criteria: {
            value: cdktn.listMapperHcl(ccCustomActionCustomActionAttachmentCriteriaPropertyToHclTerraform, false)(struct!.criteria),
            isBlock: true,
            type: "list",
            storageClassType: "CustomActionAttachmentCriteriaPropertyList",
        },
        notification_type: {
            value: cdktn.stringToHclTerraform(struct!.notificationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.variables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomActionCustomActionDefinitionPropertyToTerraform(struct?: CcCustomAction.CustomActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command_text: cdktn.stringToTerraform(struct!.commandText),
    }
}


export function ccCustomActionCustomActionDefinitionPropertyToHclTerraform(struct?: CcCustomAction.CustomActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command_text: {
            value: cdktn.stringToHclTerraform(struct!.commandText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomActionTagPropertyToTerraform(struct?: CcCustomAction.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomActionTagPropertyToHclTerraform(struct?: CcCustomAction.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomAction {
export interface CustomActionAttachmentCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#operator CcCustomAction#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#value CcCustomAction#value}
    */
    readonly value?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#variable_name CcCustomAction#variable_name}
    */
    readonly variableName?: string;
}
export class CustomActionAttachmentCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomActionAttachmentCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
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

    public set internalValue(value: CustomActionAttachmentCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operator = undefined;
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
            this._operator = value.operator;
            this._value = value.value;
            this._variableName = value.variableName;
        }
    }

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
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

export class CustomActionAttachmentCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomActionAttachmentCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomActionAttachmentCriteriaPropertyOutputReference {
        return new CustomActionAttachmentCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomActionAttachmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#button_text CcCustomAction#button_text}
    */
    readonly buttonText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#criteria CcCustomAction#criteria}
    */
    readonly criteria?: CustomActionAttachmentCriteriaProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#notification_type CcCustomAction#notification_type}
    */
    readonly notificationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#variables CcCustomAction#variables}
    */
    readonly variables?: { [key: string]: string };
}
export class CustomActionAttachmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomActionAttachmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonText !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonText = this._buttonText;
        }
        if (this._criteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteria = this._criteria?.internalValue;
        }
        if (this._notificationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationType = this._notificationType;
        }
        if (this._variables !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomActionAttachmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonText = undefined;
            this._criteria.internalValue = undefined;
            this._notificationType = undefined;
            this._variables = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonText = value.buttonText;
            this._criteria.internalValue = value.criteria;
            this._notificationType = value.notificationType;
            this._variables = value.variables;
        }
    }

    // button_text - computed: true, optional: true, required: false
    private _buttonText?: string; 
    public get buttonText() {
        return this.getStringAttribute('button_text');
    }
    public set buttonText(value: string) {
        this._buttonText = value;
    }
    public resetButtonText() {
        this._buttonText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonTextInput() {
        return this._buttonText;
    }

    // criteria - computed: true, optional: true, required: false
    private _criteria = new CustomActionAttachmentCriteriaPropertyList(this, "criteria", false);
    public get criteria() {
        return this._criteria;
    }
    public putCriteria(value: CustomActionAttachmentCriteriaProperty[] | cdktn.IResolvable) {
        this._criteria.internalValue = value;
    }
    public resetCriteria() {
        this._criteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria.internalValue;
    }

    // notification_type - computed: true, optional: true, required: false
    private _notificationType?: string; 
    public get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    public set notificationType(value: string) {
        this._notificationType = value;
    }
    public resetNotificationType() {
        this._notificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypeInput() {
        return this._notificationType;
    }

    // variables - computed: true, optional: true, required: false
    private _variables?: { [key: string]: string }; 
    public get variables() {
        return this.getStringMapAttribute('variables');
    }
    public set variables(value: { [key: string]: string }) {
        this._variables = value;
    }
    public resetVariables() {
        this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables;
    }
}

export class CustomActionAttachmentPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomActionAttachmentProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomActionAttachmentPropertyOutputReference {
        return new CustomActionAttachmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomActionDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#command_text CcCustomAction#command_text}
    */
    readonly commandText: string;
}
export class CustomActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomActionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commandText !== undefined) {
            hasAnyValues = true;
            internalValueResult.commandText = this._commandText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomActionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commandText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commandText = value.commandText;
        }
    }

    // command_text - computed: false, optional: false, required: true
    private _commandText?: string; 
    public get commandText() {
        return this.getStringAttribute('command_text');
    }
    public set commandText(value: string) {
        this._commandText = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commandTextInput() {
        return this._commandText;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#key CcCustomAction#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/chatbot_custom_action#value CcCustomAction#value}
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
