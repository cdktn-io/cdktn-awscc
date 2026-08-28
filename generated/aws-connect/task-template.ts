// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * the client token string in uuid format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#client_token CcTaskTemplate#client_token}
    */
    readonly clientToken?: string;
    /**
    * The constraints for the task template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#constraints CcTaskTemplate#constraints}
    */
    readonly constraints?: CcTaskTemplate.ConstraintsProperty;
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#contact_flow_arn CcTaskTemplate#contact_flow_arn}
    */
    readonly contactFlowArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#defaults CcTaskTemplate#defaults}
    */
    readonly defaults?: CcTaskTemplate.DefaultFieldValueProperty[] | cdktn.IResolvable;
    /**
    * The description of the task template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#description CcTaskTemplate#description}
    */
    readonly description?: string;
    /**
    * The list of task template's fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#fields CcTaskTemplate#fields}
    */
    readonly fields?: CcTaskTemplate.FieldProperty[] | cdktn.IResolvable;
    /**
    * The identifier (arn) of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#instance_arn CcTaskTemplate#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The name of the task template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#self_assign_contact_flow_arn CcTaskTemplate#self_assign_contact_flow_arn}
    */
    readonly selfAssignContactFlowArn?: string;
    /**
    * The status of the task template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#status CcTaskTemplate#status}
    */
    readonly status?: string;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#tags CcTaskTemplate#tags}
    */
    readonly tags?: CcTaskTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template awscc_connect_task_template}
*/
export class CcTaskTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_task_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTaskTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTaskTemplate to import
    * @param importFromId The id of the existing CcTaskTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTaskTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_task_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template awscc_connect_task_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcTaskTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_task_template',
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
        this._clientToken = config.clientToken;
        this._constraints.internalValue = config.constraints;
        this._contactFlowArn = config.contactFlowArn;
        this._defaults.internalValue = config.defaults;
        this._description = config.description;
        this._fields.internalValue = config.fields;
        this._instanceArn = config.instanceArn;
        this._name = config.name;
        this._selfAssignContactFlowArn = config.selfAssignContactFlowArn;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new CcTaskTemplate.ConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: CcTaskTemplate.ConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }

    // contact_flow_arn - computed: true, optional: true, required: false
    private _contactFlowArn?: string; 
    public get contactFlowArn() {
        return this.getStringAttribute('contact_flow_arn');
    }
    public set contactFlowArn(value: string) {
        this._contactFlowArn = value;
    }
    public resetContactFlowArn() {
        this._contactFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowArnInput() {
        return this._contactFlowArn;
    }

    // defaults - computed: true, optional: true, required: false
    private _defaults = new CcTaskTemplate.DefaultFieldValuePropertyList(this, "defaults", false);
    public get defaults() {
        return this._defaults;
    }
    public putDefaults(value: CcTaskTemplate.DefaultFieldValueProperty[] | cdktn.IResolvable) {
        this._defaults.internalValue = value;
    }
    public resetDefaults() {
        this._defaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultsInput() {
        return this._defaults.internalValue;
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

    // fields - computed: true, optional: true, required: false
    private _fields = new CcTaskTemplate.FieldPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: CcTaskTemplate.FieldProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
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

    // self_assign_contact_flow_arn - computed: true, optional: true, required: false
    private _selfAssignContactFlowArn?: string; 
    public get selfAssignContactFlowArn() {
        return this.getStringAttribute('self_assign_contact_flow_arn');
    }
    public set selfAssignContactFlowArn(value: string) {
        this._selfAssignContactFlowArn = value;
    }
    public resetSelfAssignContactFlowArn() {
        this._selfAssignContactFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfAssignContactFlowArnInput() {
        return this._selfAssignContactFlowArn;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTaskTemplate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTaskTemplate.TagProperty[] | cdktn.IResolvable) {
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
            client_token: cdktn.stringToTerraform(this._clientToken),
            constraints: ccTaskTemplateConstraintsPropertyToTerraform(this._constraints.internalValue),
            contact_flow_arn: cdktn.stringToTerraform(this._contactFlowArn),
            defaults: cdktn.listMapper(ccTaskTemplateDefaultFieldValuePropertyToTerraform, false)(this._defaults.internalValue),
            description: cdktn.stringToTerraform(this._description),
            fields: cdktn.listMapper(ccTaskTemplateFieldPropertyToTerraform, false)(this._fields.internalValue),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            name: cdktn.stringToTerraform(this._name),
            self_assign_contact_flow_arn: cdktn.stringToTerraform(this._selfAssignContactFlowArn),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccTaskTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            constraints: {
                value: ccTaskTemplateConstraintsPropertyToHclTerraform(this._constraints.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskTemplate.ConstraintsProperty",
            },
            contact_flow_arn: {
                value: cdktn.stringToHclTerraform(this._contactFlowArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            defaults: {
                value: cdktn.listMapperHcl(ccTaskTemplateDefaultFieldValuePropertyToHclTerraform, false)(this._defaults.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskTemplate.DefaultFieldValuePropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fields: {
                value: cdktn.listMapperHcl(ccTaskTemplateFieldPropertyToHclTerraform, false)(this._fields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTaskTemplate.FieldPropertyList",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
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
            self_assign_contact_flow_arn: {
                value: cdktn.stringToHclTerraform(this._selfAssignContactFlowArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTaskTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskTemplateFieldIdentifierPropertyToTerraform(struct?: CcTaskTemplate.FieldIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTaskTemplateFieldIdentifierPropertyToHclTerraform(struct?: CcTaskTemplate.FieldIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTaskTemplateInvisibleFieldInfoPropertyToTerraform(struct?: CcTaskTemplate.InvisibleFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: ccTaskTemplateFieldIdentifierPropertyToTerraform(struct!.id),
    }
}


export function ccTaskTemplateInvisibleFieldInfoPropertyToHclTerraform(struct?: CcTaskTemplate.InvisibleFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: ccTaskTemplateFieldIdentifierPropertyToHclTerraform(struct!.id),
            isBlock: true,
            type: "struct",
            storageClassType: "FieldIdentifierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTemplateConstraintsReadOnlyFieldsIdPropertyToTerraform(struct?: CcTaskTemplate.ConstraintsReadOnlyFieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTaskTemplateConstraintsReadOnlyFieldsIdPropertyToHclTerraform(struct?: CcTaskTemplate.ConstraintsReadOnlyFieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTaskTemplateReadOnlyFieldInfoPropertyToTerraform(struct?: CcTaskTemplate.ReadOnlyFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: ccTaskTemplateConstraintsReadOnlyFieldsIdPropertyToTerraform(struct!.id),
    }
}


export function ccTaskTemplateReadOnlyFieldInfoPropertyToHclTerraform(struct?: CcTaskTemplate.ReadOnlyFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: ccTaskTemplateConstraintsReadOnlyFieldsIdPropertyToHclTerraform(struct!.id),
            isBlock: true,
            type: "struct",
            storageClassType: "ConstraintsReadOnlyFieldsIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTemplateConstraintsRequiredFieldsIdPropertyToTerraform(struct?: CcTaskTemplate.ConstraintsRequiredFieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTaskTemplateConstraintsRequiredFieldsIdPropertyToHclTerraform(struct?: CcTaskTemplate.ConstraintsRequiredFieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTaskTemplateRequiredFieldInfoPropertyToTerraform(struct?: CcTaskTemplate.RequiredFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: ccTaskTemplateConstraintsRequiredFieldsIdPropertyToTerraform(struct!.id),
    }
}


export function ccTaskTemplateRequiredFieldInfoPropertyToHclTerraform(struct?: CcTaskTemplate.RequiredFieldInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: ccTaskTemplateConstraintsRequiredFieldsIdPropertyToHclTerraform(struct!.id),
            isBlock: true,
            type: "struct",
            storageClassType: "ConstraintsRequiredFieldsIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTemplateConstraintsPropertyToTerraform(struct?: CcTaskTemplate.ConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invisible_fields: cdktn.listMapper(ccTaskTemplateInvisibleFieldInfoPropertyToTerraform, false)(struct!.invisibleFields),
        read_only_fields: cdktn.listMapper(ccTaskTemplateReadOnlyFieldInfoPropertyToTerraform, false)(struct!.readOnlyFields),
        required_fields: cdktn.listMapper(ccTaskTemplateRequiredFieldInfoPropertyToTerraform, false)(struct!.requiredFields),
    }
}


export function ccTaskTemplateConstraintsPropertyToHclTerraform(struct?: CcTaskTemplate.ConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invisible_fields: {
            value: cdktn.listMapperHcl(ccTaskTemplateInvisibleFieldInfoPropertyToHclTerraform, false)(struct!.invisibleFields),
            isBlock: true,
            type: "list",
            storageClassType: "InvisibleFieldInfoPropertyList",
        },
        read_only_fields: {
            value: cdktn.listMapperHcl(ccTaskTemplateReadOnlyFieldInfoPropertyToHclTerraform, false)(struct!.readOnlyFields),
            isBlock: true,
            type: "list",
            storageClassType: "ReadOnlyFieldInfoPropertyList",
        },
        required_fields: {
            value: cdktn.listMapperHcl(ccTaskTemplateRequiredFieldInfoPropertyToHclTerraform, false)(struct!.requiredFields),
            isBlock: true,
            type: "list",
            storageClassType: "RequiredFieldInfoPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTemplateDefaultsIdPropertyToTerraform(struct?: CcTaskTemplate.DefaultsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTaskTemplateDefaultsIdPropertyToHclTerraform(struct?: CcTaskTemplate.DefaultsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTaskTemplateDefaultFieldValuePropertyToTerraform(struct?: CcTaskTemplate.DefaultFieldValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        id: ccTaskTemplateDefaultsIdPropertyToTerraform(struct!.id),
    }
}


export function ccTaskTemplateDefaultFieldValuePropertyToHclTerraform(struct?: CcTaskTemplate.DefaultFieldValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: ccTaskTemplateDefaultsIdPropertyToHclTerraform(struct!.id),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultsIdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTemplateFieldsIdPropertyToTerraform(struct?: CcTaskTemplate.FieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTaskTemplateFieldsIdPropertyToHclTerraform(struct?: CcTaskTemplate.FieldsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTaskTemplateFieldPropertyToTerraform(struct?: CcTaskTemplate.FieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        id: ccTaskTemplateFieldsIdPropertyToTerraform(struct!.id),
        single_select_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.singleSelectOptions),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTaskTemplateFieldPropertyToHclTerraform(struct?: CcTaskTemplate.FieldProperty | cdktn.IResolvable): any {
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
        id: {
            value: ccTaskTemplateFieldsIdPropertyToHclTerraform(struct!.id),
            isBlock: true,
            type: "struct",
            storageClassType: "FieldsIdProperty",
        },
        single_select_options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.singleSelectOptions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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


export function ccTaskTemplateTagPropertyToTerraform(struct?: CcTaskTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskTemplateTagPropertyToHclTerraform(struct?: CcTaskTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTaskTemplate {
export interface FieldIdentifierProperty {
    /**
    * The name of the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
}
export class FieldIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FieldIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
export interface InvisibleFieldInfoProperty {
    /**
    * the identifier (name) for the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#id CcTaskTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: FieldIdentifierProperty;
}
export class InvisibleFieldInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InvisibleFieldInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvisibleFieldInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id.internalValue = value.id;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id = new FieldIdentifierPropertyOutputReference(this, "id");
    public get id() {
        return this._id;
    }
    public putId(value: FieldIdentifierProperty) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }
}

export class InvisibleFieldInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : InvisibleFieldInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): InvisibleFieldInfoPropertyOutputReference {
        return new InvisibleFieldInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConstraintsReadOnlyFieldsIdProperty {
    /**
    * The name of the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
}
export class ConstraintsReadOnlyFieldsIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConstraintsReadOnlyFieldsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConstraintsReadOnlyFieldsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
export interface ReadOnlyFieldInfoProperty {
    /**
    * the identifier (name) for the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#id CcTaskTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: ConstraintsReadOnlyFieldsIdProperty;
}
export class ReadOnlyFieldInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReadOnlyFieldInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadOnlyFieldInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id.internalValue = value.id;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id = new ConstraintsReadOnlyFieldsIdPropertyOutputReference(this, "id");
    public get id() {
        return this._id;
    }
    public putId(value: ConstraintsReadOnlyFieldsIdProperty) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }
}

export class ReadOnlyFieldInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : ReadOnlyFieldInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): ReadOnlyFieldInfoPropertyOutputReference {
        return new ReadOnlyFieldInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConstraintsRequiredFieldsIdProperty {
    /**
    * The name of the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
}
export class ConstraintsRequiredFieldsIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConstraintsRequiredFieldsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConstraintsRequiredFieldsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
export interface RequiredFieldInfoProperty {
    /**
    * the identifier (name) for the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#id CcTaskTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: ConstraintsRequiredFieldsIdProperty;
}
export class RequiredFieldInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequiredFieldInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequiredFieldInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id.internalValue = value.id;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id = new ConstraintsRequiredFieldsIdPropertyOutputReference(this, "id");
    public get id() {
        return this._id;
    }
    public putId(value: ConstraintsRequiredFieldsIdProperty) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }
}

export class RequiredFieldInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : RequiredFieldInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): RequiredFieldInfoPropertyOutputReference {
        return new RequiredFieldInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConstraintsProperty {
    /**
    * The list of the task template's invisible fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#invisible_fields CcTaskTemplate#invisible_fields}
    */
    readonly invisibleFields?: InvisibleFieldInfoProperty[] | cdktn.IResolvable;
    /**
    * The list of the task template's read only fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#read_only_fields CcTaskTemplate#read_only_fields}
    */
    readonly readOnlyFields?: ReadOnlyFieldInfoProperty[] | cdktn.IResolvable;
    /**
    * The list of the task template's required fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#required_fields CcTaskTemplate#required_fields}
    */
    readonly requiredFields?: RequiredFieldInfoProperty[] | cdktn.IResolvable;
}
export class ConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invisibleFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invisibleFields = this._invisibleFields?.internalValue;
        }
        if (this._readOnlyFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnlyFields = this._readOnlyFields?.internalValue;
        }
        if (this._requiredFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredFields = this._requiredFields?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invisibleFields.internalValue = undefined;
            this._readOnlyFields.internalValue = undefined;
            this._requiredFields.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invisibleFields.internalValue = value.invisibleFields;
            this._readOnlyFields.internalValue = value.readOnlyFields;
            this._requiredFields.internalValue = value.requiredFields;
        }
    }

    // invisible_fields - computed: true, optional: true, required: false
    private _invisibleFields = new InvisibleFieldInfoPropertyList(this, "invisible_fields", false);
    public get invisibleFields() {
        return this._invisibleFields;
    }
    public putInvisibleFields(value: InvisibleFieldInfoProperty[] | cdktn.IResolvable) {
        this._invisibleFields.internalValue = value;
    }
    public resetInvisibleFields() {
        this._invisibleFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invisibleFieldsInput() {
        return this._invisibleFields.internalValue;
    }

    // read_only_fields - computed: true, optional: true, required: false
    private _readOnlyFields = new ReadOnlyFieldInfoPropertyList(this, "read_only_fields", false);
    public get readOnlyFields() {
        return this._readOnlyFields;
    }
    public putReadOnlyFields(value: ReadOnlyFieldInfoProperty[] | cdktn.IResolvable) {
        this._readOnlyFields.internalValue = value;
    }
    public resetReadOnlyFields() {
        this._readOnlyFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyFieldsInput() {
        return this._readOnlyFields.internalValue;
    }

    // required_fields - computed: true, optional: true, required: false
    private _requiredFields = new RequiredFieldInfoPropertyList(this, "required_fields", false);
    public get requiredFields() {
        return this._requiredFields;
    }
    public putRequiredFields(value: RequiredFieldInfoProperty[] | cdktn.IResolvable) {
        this._requiredFields.internalValue = value;
    }
    public resetRequiredFields() {
        this._requiredFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredFieldsInput() {
        return this._requiredFields.internalValue;
    }
}
export interface DefaultsIdProperty {
    /**
    * The name of the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
}
export class DefaultsIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
export interface DefaultFieldValueProperty {
    /**
    * the default value for the task template's field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#default_value CcTaskTemplate#default_value}
    */
    readonly defaultValue?: string;
    /**
    * the identifier (name) for the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#id CcTaskTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: DefaultsIdProperty;
}
export class DefaultFieldValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefaultFieldValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultFieldValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._id.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._id.internalValue = value.id;
        }
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

    // id - computed: true, optional: true, required: false
    private _id = new DefaultsIdPropertyOutputReference(this, "id");
    public get id() {
        return this._id;
    }
    public putId(value: DefaultsIdProperty) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }
}

export class DefaultFieldValuePropertyList extends cdktn.ComplexList {
    public internalValue? : DefaultFieldValueProperty[] | cdktn.IResolvable

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
    public get(index: number): DefaultFieldValuePropertyOutputReference {
        return new DefaultFieldValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FieldsIdProperty {
    /**
    * The name of the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#name CcTaskTemplate#name}
    */
    readonly name?: string;
}
export class FieldsIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FieldsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
export interface FieldProperty {
    /**
    * The description of the task template's field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#description CcTaskTemplate#description}
    */
    readonly description?: string;
    /**
    * the identifier (name) for the task template field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#id CcTaskTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: FieldsIdProperty;
    /**
    * list of field options to be used with single select
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#single_select_options CcTaskTemplate#single_select_options}
    */
    readonly singleSelectOptions?: string[];
    /**
    * The type of the task template's field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#type CcTaskTemplate#type}
    */
    readonly type?: string;
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
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        if (this._singleSelectOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleSelectOptions = this._singleSelectOptions;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._id.internalValue = undefined;
            this._singleSelectOptions = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._id.internalValue = value.id;
            this._singleSelectOptions = value.singleSelectOptions;
            this._type = value.type;
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

    // id - computed: true, optional: true, required: false
    private _id = new FieldsIdPropertyOutputReference(this, "id");
    public get id() {
        return this._id;
    }
    public putId(value: FieldsIdProperty) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }

    // single_select_options - computed: true, optional: true, required: false
    private _singleSelectOptions?: string[]; 
    public get singleSelectOptions() {
        return this.getListAttribute('single_select_options');
    }
    public set singleSelectOptions(value: string[]) {
        this._singleSelectOptions = value;
    }
    public resetSingleSelectOptions() {
        this._singleSelectOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleSelectOptionsInput() {
        return this._singleSelectOptions;
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#key CcTaskTemplate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_task_template#value CcTaskTemplate#value}
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
