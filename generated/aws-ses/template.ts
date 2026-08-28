// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The tags (keys and values) associated with the email template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#tags CcTemplate#tags}
    */
    readonly tags?: CcTemplate.TagProperty[] | cdktn.IResolvable;
    /**
    * The content of the email, composed of a subject line, an HTML part, and a text-only part
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#template CcTemplate#template}
    */
    readonly template?: CcTemplate.TemplateProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template awscc_ses_template}
*/
export class CcTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTemplate to import
    * @param importFromId The id of the existing CcTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template awscc_ses_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTemplateProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTemplateProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_template',
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
        this._tags.internalValue = config.tags;
        this._template.internalValue = config.template;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTemplate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template - computed: true, optional: true, required: false
    private _template = new CcTemplate.TemplatePropertyOutputReference(this, "template");
    public get template() {
        return this._template;
    }
    public putTemplate(value: CcTemplate.TemplateProperty) {
        this._template.internalValue = value;
    }
    public resetTemplate() {
        this._template.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template.internalValue;
    }

    // template_id - computed: true, optional: false, required: false
    public get templateId() {
        return this.getStringAttribute('template_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            tags: cdktn.listMapper(ccTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
            template: ccTemplateTemplatePropertyToTerraform(this._template.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            tags: {
                value: cdktn.listMapperHcl(ccTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTemplate.TagPropertyList",
            },
            template: {
                value: ccTemplateTemplatePropertyToHclTerraform(this._template.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTemplate.TemplateProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTemplateTagPropertyToTerraform(struct?: CcTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTemplateTagPropertyToHclTerraform(struct?: CcTemplate.TagProperty | cdktn.IResolvable): any {
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


export function ccTemplateTemplatePropertyToTerraform(struct?: CcTemplate.TemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        html_part: cdktn.stringToTerraform(struct!.htmlPart),
        subject_part: cdktn.stringToTerraform(struct!.subjectPart),
        template_name: cdktn.stringToTerraform(struct!.templateName),
        text_part: cdktn.stringToTerraform(struct!.textPart),
    }
}


export function ccTemplateTemplatePropertyToHclTerraform(struct?: CcTemplate.TemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        html_part: {
            value: cdktn.stringToHclTerraform(struct!.htmlPart),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_part: {
            value: cdktn.stringToHclTerraform(struct!.subjectPart),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_name: {
            value: cdktn.stringToHclTerraform(struct!.templateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_part: {
            value: cdktn.stringToHclTerraform(struct!.textPart),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTemplate {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#key CcTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#value CcTemplate#value}
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
export interface TemplateProperty {
    /**
    * The HTML body of the email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#html_part CcTemplate#html_part}
    */
    readonly htmlPart?: string;
    /**
    * The subject line of the email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#subject_part CcTemplate#subject_part}
    */
    readonly subjectPart?: string;
    /**
    * The name of the template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#template_name CcTemplate#template_name}
    */
    readonly templateName?: string;
    /**
    * The email body that is visible to recipients whose email clients do not display HTML content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_template#text_part CcTemplate#text_part}
    */
    readonly textPart?: string;
}
export class TemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._htmlPart !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlPart = this._htmlPart;
        }
        if (this._subjectPart !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectPart = this._subjectPart;
        }
        if (this._templateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateName = this._templateName;
        }
        if (this._textPart !== undefined) {
            hasAnyValues = true;
            internalValueResult.textPart = this._textPart;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._htmlPart = undefined;
            this._subjectPart = undefined;
            this._templateName = undefined;
            this._textPart = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._htmlPart = value.htmlPart;
            this._subjectPart = value.subjectPart;
            this._templateName = value.templateName;
            this._textPart = value.textPart;
        }
    }

    // html_part - computed: true, optional: true, required: false
    private _htmlPart?: string; 
    public get htmlPart() {
        return this.getStringAttribute('html_part');
    }
    public set htmlPart(value: string) {
        this._htmlPart = value;
    }
    public resetHtmlPart() {
        this._htmlPart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get htmlPartInput() {
        return this._htmlPart;
    }

    // subject_part - computed: true, optional: true, required: false
    private _subjectPart?: string; 
    public get subjectPart() {
        return this.getStringAttribute('subject_part');
    }
    public set subjectPart(value: string) {
        this._subjectPart = value;
    }
    public resetSubjectPart() {
        this._subjectPart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectPartInput() {
        return this._subjectPart;
    }

    // template_name - computed: true, optional: true, required: false
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    public resetTemplateName() {
        this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // text_part - computed: true, optional: true, required: false
    private _textPart?: string; 
    public get textPart() {
        return this.getStringAttribute('text_part');
    }
    public set textPart(value: string) {
        this._textPart = value;
    }
    public resetTextPart() {
        this._textPart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textPartInput() {
        return this._textPart;
    }
}
}
