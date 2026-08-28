// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFrameworkProps extends cdktn.TerraformMetaArguments {
    /**
    * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#framework_controls CcFramework#framework_controls}
    */
    readonly frameworkControls: CcFramework.FrameworkControlProperty[] | cdktn.IResolvable;
    /**
    * An optional description of the framework with a maximum 1,024 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#framework_description CcFramework#framework_description}
    */
    readonly frameworkDescription?: string;
    /**
    * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#framework_name CcFramework#framework_name}
    */
    readonly frameworkName?: string;
    /**
    * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#framework_tags CcFramework#framework_tags}
    */
    readonly frameworkTags?: CcFramework.FrameworkTagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework awscc_backup_framework}
*/
export class CcFramework extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_backup_framework";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFramework resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFramework to import
    * @param importFromId The id of the existing CcFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFramework to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_framework", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework awscc_backup_framework} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFrameworkProps
    */
    public constructor(scope: Construct, id: string, config: CcFrameworkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_backup_framework',
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
        this._frameworkControls.internalValue = config.frameworkControls;
        this._frameworkDescription = config.frameworkDescription;
        this._frameworkName = config.frameworkName;
        this._frameworkTags.internalValue = config.frameworkTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // deployment_status - computed: true, optional: false, required: false
    public get deploymentStatus() {
        return this.getStringAttribute('deployment_status');
    }

    // framework_arn - computed: true, optional: false, required: false
    public get frameworkArn() {
        return this.getStringAttribute('framework_arn');
    }

    // framework_controls - computed: false, optional: false, required: true
    private _frameworkControls = new CcFramework.FrameworkControlPropertyList(this, "framework_controls", true);
    public get frameworkControls() {
        return this._frameworkControls;
    }
    public putFrameworkControls(value: CcFramework.FrameworkControlProperty[] | cdktn.IResolvable) {
        this._frameworkControls.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkControlsInput() {
        return this._frameworkControls.internalValue;
    }

    // framework_description - computed: true, optional: true, required: false
    private _frameworkDescription?: string; 
    public get frameworkDescription() {
        return this.getStringAttribute('framework_description');
    }
    public set frameworkDescription(value: string) {
        this._frameworkDescription = value;
    }
    public resetFrameworkDescription() {
        this._frameworkDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkDescriptionInput() {
        return this._frameworkDescription;
    }

    // framework_name - computed: true, optional: true, required: false
    private _frameworkName?: string; 
    public get frameworkName() {
        return this.getStringAttribute('framework_name');
    }
    public set frameworkName(value: string) {
        this._frameworkName = value;
    }
    public resetFrameworkName() {
        this._frameworkName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkNameInput() {
        return this._frameworkName;
    }

    // framework_status - computed: true, optional: false, required: false
    public get frameworkStatus() {
        return this.getStringAttribute('framework_status');
    }

    // framework_tags - computed: true, optional: true, required: false
    private _frameworkTags = new CcFramework.FrameworkTagsPropertyList(this, "framework_tags", false);
    public get frameworkTags() {
        return this._frameworkTags;
    }
    public putFrameworkTags(value: CcFramework.FrameworkTagsProperty[] | cdktn.IResolvable) {
        this._frameworkTags.internalValue = value;
    }
    public resetFrameworkTags() {
        this._frameworkTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkTagsInput() {
        return this._frameworkTags.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            framework_controls: cdktn.listMapper(ccFrameworkFrameworkControlPropertyToTerraform, false)(this._frameworkControls.internalValue),
            framework_description: cdktn.stringToTerraform(this._frameworkDescription),
            framework_name: cdktn.stringToTerraform(this._frameworkName),
            framework_tags: cdktn.listMapper(ccFrameworkFrameworkTagsPropertyToTerraform, false)(this._frameworkTags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            framework_controls: {
                value: cdktn.listMapperHcl(ccFrameworkFrameworkControlPropertyToHclTerraform, false)(this._frameworkControls.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFramework.FrameworkControlPropertyList",
            },
            framework_description: {
                value: cdktn.stringToHclTerraform(this._frameworkDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            framework_name: {
                value: cdktn.stringToHclTerraform(this._frameworkName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            framework_tags: {
                value: cdktn.listMapperHcl(ccFrameworkFrameworkTagsPropertyToHclTerraform, false)(this._frameworkTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFramework.FrameworkTagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFrameworkControlInputParameterPropertyToTerraform(struct?: CcFramework.ControlInputParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_name: cdktn.stringToTerraform(struct!.parameterName),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccFrameworkControlInputParameterPropertyToHclTerraform(struct?: CcFramework.ControlInputParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.parameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFrameworkTagPropertyToTerraform(struct?: CcFramework.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFrameworkTagPropertyToHclTerraform(struct?: CcFramework.TagProperty | cdktn.IResolvable): any {
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


export function ccFrameworkControlScopePropertyToTerraform(struct?: CcFramework.ControlScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compliance_resource_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.complianceResourceIds),
        compliance_resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.complianceResourceTypes),
        tags: cdktn.listMapper(ccFrameworkTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccFrameworkControlScopePropertyToHclTerraform(struct?: CcFramework.ControlScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compliance_resource_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.complianceResourceIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        compliance_resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.complianceResourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tags: {
            value: cdktn.listMapperHcl(ccFrameworkTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFrameworkFrameworkControlPropertyToTerraform(struct?: CcFramework.FrameworkControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        control_input_parameters: cdktn.listMapper(ccFrameworkControlInputParameterPropertyToTerraform, false)(struct!.controlInputParameters),
        control_name: cdktn.stringToTerraform(struct!.controlName),
        control_scope: ccFrameworkControlScopePropertyToTerraform(struct!.controlScope),
    }
}


export function ccFrameworkFrameworkControlPropertyToHclTerraform(struct?: CcFramework.FrameworkControlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        control_input_parameters: {
            value: cdktn.listMapperHcl(ccFrameworkControlInputParameterPropertyToHclTerraform, false)(struct!.controlInputParameters),
            isBlock: true,
            type: "set",
            storageClassType: "ControlInputParameterPropertyList",
        },
        control_name: {
            value: cdktn.stringToHclTerraform(struct!.controlName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        control_scope: {
            value: ccFrameworkControlScopePropertyToHclTerraform(struct!.controlScope),
            isBlock: true,
            type: "struct",
            storageClassType: "ControlScopeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFrameworkFrameworkTagsPropertyToTerraform(struct?: CcFramework.FrameworkTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFrameworkFrameworkTagsPropertyToHclTerraform(struct?: CcFramework.FrameworkTagsProperty | cdktn.IResolvable): any {
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


export namespace CcFramework {
export interface ControlInputParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#parameter_name CcFramework#parameter_name}
    */
    readonly parameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#parameter_value CcFramework#parameter_value}
    */
    readonly parameterValue?: string;
}
export class ControlInputParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ControlInputParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterName = this._parameterName;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ControlInputParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterName = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterName = value.parameterName;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_name - computed: true, optional: true, required: false
    private _parameterName?: string; 
    public get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    public set parameterName(value: string) {
        this._parameterName = value;
    }
    public resetParameterName() {
        this._parameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameInput() {
        return this._parameterName;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class ControlInputParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ControlInputParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ControlInputParameterPropertyOutputReference {
        return new ControlInputParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#key CcFramework#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#value CcFramework#value}
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
export interface ControlScopeProperty {
    /**
    * The ID of the only AWS resource that you want your control scope to contain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#compliance_resource_ids CcFramework#compliance_resource_ids}
    */
    readonly complianceResourceIds?: string[];
    /**
    * Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#compliance_resource_types CcFramework#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#tags CcFramework#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class ControlScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ControlScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._complianceResourceIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceResourceIds = this._complianceResourceIds;
        }
        if (this._complianceResourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceResourceTypes = this._complianceResourceTypes;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ControlScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._complianceResourceIds = undefined;
            this._complianceResourceTypes = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._complianceResourceIds = value.complianceResourceIds;
            this._complianceResourceTypes = value.complianceResourceTypes;
            this._tags.internalValue = value.tags;
        }
    }

    // compliance_resource_ids - computed: true, optional: true, required: false
    private _complianceResourceIds?: string[]; 
    public get complianceResourceIds() {
        return this.getListAttribute('compliance_resource_ids');
    }
    public set complianceResourceIds(value: string[]) {
        this._complianceResourceIds = value;
    }
    public resetComplianceResourceIds() {
        this._complianceResourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceIdsInput() {
        return this._complianceResourceIds;
    }

    // compliance_resource_types - computed: true, optional: true, required: false
    private _complianceResourceTypes?: string[]; 
    public get complianceResourceTypes() {
        return this.getListAttribute('compliance_resource_types');
    }
    public set complianceResourceTypes(value: string[]) {
        this._complianceResourceTypes = value;
    }
    public resetComplianceResourceTypes() {
        this._complianceResourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceTypesInput() {
        return this._complianceResourceTypes;
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
export interface FrameworkControlProperty {
    /**
    * A list of ParameterName and ParameterValue pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#control_input_parameters CcFramework#control_input_parameters}
    */
    readonly controlInputParameters?: ControlInputParameterProperty[] | cdktn.IResolvable;
    /**
    * The name of a control. This name is between 1 and 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#control_name CcFramework#control_name}
    */
    readonly controlName: string;
    /**
    * The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#control_scope CcFramework#control_scope}
    */
    readonly controlScope?: ControlScopeProperty;
}
export class FrameworkControlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FrameworkControlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._controlInputParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlInputParameters = this._controlInputParameters?.internalValue;
        }
        if (this._controlName !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlName = this._controlName;
        }
        if (this._controlScope?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlScope = this._controlScope?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrameworkControlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._controlInputParameters.internalValue = undefined;
            this._controlName = undefined;
            this._controlScope.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._controlInputParameters.internalValue = value.controlInputParameters;
            this._controlName = value.controlName;
            this._controlScope.internalValue = value.controlScope;
        }
    }

    // control_input_parameters - computed: true, optional: true, required: false
    private _controlInputParameters = new ControlInputParameterPropertyList(this, "control_input_parameters", true);
    public get controlInputParameters() {
        return this._controlInputParameters;
    }
    public putControlInputParameters(value: ControlInputParameterProperty[] | cdktn.IResolvable) {
        this._controlInputParameters.internalValue = value;
    }
    public resetControlInputParameters() {
        this._controlInputParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlInputParametersInput() {
        return this._controlInputParameters.internalValue;
    }

    // control_name - computed: false, optional: false, required: true
    private _controlName?: string; 
    public get controlName() {
        return this.getStringAttribute('control_name');
    }
    public set controlName(value: string) {
        this._controlName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get controlNameInput() {
        return this._controlName;
    }

    // control_scope - computed: true, optional: true, required: false
    private _controlScope = new ControlScopePropertyOutputReference(this, "control_scope");
    public get controlScope() {
        return this._controlScope;
    }
    public putControlScope(value: ControlScopeProperty) {
        this._controlScope.internalValue = value;
    }
    public resetControlScope() {
        this._controlScope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlScopeInput() {
        return this._controlScope.internalValue;
    }
}

export class FrameworkControlPropertyList extends cdktn.ComplexList {
    public internalValue? : FrameworkControlProperty[] | cdktn.IResolvable

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
    public get(index: number): FrameworkControlPropertyOutputReference {
        return new FrameworkControlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FrameworkTagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#key CcFramework#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_framework#value CcFramework#value}
    */
    readonly value?: string;
}
export class FrameworkTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FrameworkTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FrameworkTagsProperty | cdktn.IResolvable | undefined) {
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

export class FrameworkTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : FrameworkTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): FrameworkTagsPropertyOutputReference {
        return new FrameworkTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
