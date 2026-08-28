// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExtensionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#actions CcExtension#actions}
    */
    readonly actions: { [key: string]: CcExtension.ActionProperty } | cdktn.IResolvable;
    /**
    * Description of the extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#description CcExtension#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#latest_version_number CcExtension#latest_version_number}
    */
    readonly latestVersionNumber?: number;
    /**
    * Name of the extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#name CcExtension#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#parameters CcExtension#parameters}
    */
    readonly parameters?: { [key: string]: CcExtension.ParameterProperty } | cdktn.IResolvable;
    /**
    * An array of key-value tags to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#tags CcExtension#tags}
    */
    readonly tags?: CcExtension.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension awscc_appconfig_extension}
*/
export class CcExtension extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appconfig_extension";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExtension resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExtension to import
    * @param importFromId The id of the existing CcExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExtension to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appconfig_extension", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension awscc_appconfig_extension} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExtensionProps
    */
    public constructor(scope: Construct, id: string, config: CcExtensionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appconfig_extension',
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
        this._actions.internalValue = config.actions;
        this._description = config.description;
        this._latestVersionNumber = config.latestVersionNumber;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcExtension.ActionPropertyMap(this, "actions");
    public get actions() {
        return this._actions;
    }
    public putActions(value: { [key: string]: CcExtension.ActionProperty } | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // extension_id - computed: true, optional: false, required: false
    public get extensionId() {
        return this.getStringAttribute('extension_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // latest_version_number - computed: true, optional: true, required: false
    private _latestVersionNumber?: number; 
    public get latestVersionNumber() {
        return this.getNumberAttribute('latest_version_number');
    }
    public set latestVersionNumber(value: number) {
        this._latestVersionNumber = value;
    }
    public resetLatestVersionNumber() {
        this._latestVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latestVersionNumberInput() {
        return this._latestVersionNumber;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcExtension.ParameterPropertyMap(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: { [key: string]: CcExtension.ParameterProperty } | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExtension.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExtension.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.hashMapper(ccExtensionActionPropertyToTerraform)(this._actions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            latest_version_number: cdktn.numberToTerraform(this._latestVersionNumber),
            name: cdktn.stringToTerraform(this._name),
            parameters: cdktn.hashMapper(ccExtensionParameterPropertyToTerraform)(this._parameters.internalValue),
            tags: cdktn.listMapper(ccExtensionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.hashMapperHcl(ccExtensionActionPropertyToHclTerraform)(this._actions.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcExtension.ActionPropertyMap",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            latest_version_number: {
                value: cdktn.numberToHclTerraform(this._latestVersionNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: cdktn.hashMapperHcl(ccExtensionParameterPropertyToHclTerraform)(this._parameters.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcExtension.ParameterPropertyMap",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExtensionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcExtension.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExtensionActionPropertyToTerraform(struct?: CcExtension.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccExtensionActionPropertyToHclTerraform(struct?: CcExtension.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
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
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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


export function ccExtensionParameterPropertyToTerraform(struct?: CcExtension.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        dynamic: cdktn.booleanToTerraform(struct!.dynamic),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccExtensionParameterPropertyToHclTerraform(struct?: CcExtension.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamic: {
            value: cdktn.booleanToHclTerraform(struct!.dynamic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExtensionTagPropertyToTerraform(struct?: CcExtension.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExtensionTagPropertyToHclTerraform(struct?: CcExtension.TagProperty | cdktn.IResolvable): any {
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


export namespace CcExtension {
export interface ActionProperty {
    /**
    * The description of the extension Action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#description CcExtension#description}
    */
    readonly description?: string;
    /**
    * The name of the extension action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#name CcExtension#name}
    */
    readonly name?: string;
    /**
    * The ARN of the role for invoking the extension action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#role_arn CcExtension#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The URI of the extension action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#uri CcExtension#uri}
    */
    readonly uri?: string;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._roleArn = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._name = value.name;
            this._roleArn = value.roleArn;
            this._uri = value.uri;
        }
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

export class ActionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ActionProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface ParameterProperty {
    /**
    * The description of the extension Parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#description CcExtension#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#dynamic CcExtension#dynamic}
    */
    readonly dynamic?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#required CcExtension#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._dynamic !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamic = this._dynamic;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._dynamic = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._dynamic = value.dynamic;
            this._required = value.required;
        }
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

    // dynamic - computed: true, optional: true, required: false
    private _dynamic?: boolean | cdktn.IResolvable; 
    public get dynamic() {
        return this.getBooleanAttribute('dynamic');
    }
    public set dynamic(value: boolean | cdktn.IResolvable) {
        this._dynamic = value;
    }
    public resetDynamic() {
        this._dynamic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamicInput() {
        return this._dynamic;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class ParameterPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ParameterProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ParameterPropertyOutputReference {
        return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#key CcExtension#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appconfig_extension#value CcExtension#value}
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
