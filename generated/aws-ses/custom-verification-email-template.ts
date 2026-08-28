// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomVerificationEmailTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#failure_redirection_url CcCustomVerificationEmailTemplate#failure_redirection_url}
    */
    readonly failureRedirectionUrl: string;
    /**
    * The email address that the custom verification email is sent from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#from_email_address CcCustomVerificationEmailTemplate#from_email_address}
    */
    readonly fromEmailAddress: string;
    /**
    * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#success_redirection_url CcCustomVerificationEmailTemplate#success_redirection_url}
    */
    readonly successRedirectionUrl: string;
    /**
    * The tags (keys and values) associated with the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#tags CcCustomVerificationEmailTemplate#tags}
    */
    readonly tags?: CcCustomVerificationEmailTemplate.TagProperty[] | cdktn.IResolvable;
    /**
    * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#template_content CcCustomVerificationEmailTemplate#template_content}
    */
    readonly templateContent: string;
    /**
    * The name of the custom verification email template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#template_name CcCustomVerificationEmailTemplate#template_name}
    */
    readonly templateName: string;
    /**
    * The subject line of the custom verification email.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#template_subject CcCustomVerificationEmailTemplate#template_subject}
    */
    readonly templateSubject: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}
*/
export class CcCustomVerificationEmailTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_custom_verification_email_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomVerificationEmailTemplate to import
    * @param importFromId The id of the existing CcCustomVerificationEmailTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomVerificationEmailTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_custom_verification_email_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomVerificationEmailTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomVerificationEmailTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_custom_verification_email_template',
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
        this._failureRedirectionUrl = config.failureRedirectionUrl;
        this._fromEmailAddress = config.fromEmailAddress;
        this._successRedirectionUrl = config.successRedirectionUrl;
        this._tags.internalValue = config.tags;
        this._templateContent = config.templateContent;
        this._templateName = config.templateName;
        this._templateSubject = config.templateSubject;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // failure_redirection_url - computed: false, optional: false, required: true
    private _failureRedirectionUrl?: string; 
    public get failureRedirectionUrl() {
        return this.getStringAttribute('failure_redirection_url');
    }
    public set failureRedirectionUrl(value: string) {
        this._failureRedirectionUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get failureRedirectionUrlInput() {
        return this._failureRedirectionUrl;
    }

    // from_email_address - computed: false, optional: false, required: true
    private _fromEmailAddress?: string; 
    public get fromEmailAddress() {
        return this.getStringAttribute('from_email_address');
    }
    public set fromEmailAddress(value: string) {
        this._fromEmailAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fromEmailAddressInput() {
        return this._fromEmailAddress;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // success_redirection_url - computed: false, optional: false, required: true
    private _successRedirectionUrl?: string; 
    public get successRedirectionUrl() {
        return this.getStringAttribute('success_redirection_url');
    }
    public set successRedirectionUrl(value: string) {
        this._successRedirectionUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get successRedirectionUrlInput() {
        return this._successRedirectionUrl;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomVerificationEmailTemplate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomVerificationEmailTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_content - computed: false, optional: false, required: true
    private _templateContent?: string; 
    public get templateContent() {
        return this.getStringAttribute('template_content');
    }
    public set templateContent(value: string) {
        this._templateContent = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateContentInput() {
        return this._templateContent;
    }

    // template_name - computed: false, optional: false, required: true
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // template_subject - computed: false, optional: false, required: true
    private _templateSubject?: string; 
    public get templateSubject() {
        return this.getStringAttribute('template_subject');
    }
    public set templateSubject(value: string) {
        this._templateSubject = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateSubjectInput() {
        return this._templateSubject;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            failure_redirection_url: cdktn.stringToTerraform(this._failureRedirectionUrl),
            from_email_address: cdktn.stringToTerraform(this._fromEmailAddress),
            success_redirection_url: cdktn.stringToTerraform(this._successRedirectionUrl),
            tags: cdktn.listMapper(ccCustomVerificationEmailTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
            template_content: cdktn.stringToTerraform(this._templateContent),
            template_name: cdktn.stringToTerraform(this._templateName),
            template_subject: cdktn.stringToTerraform(this._templateSubject),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            failure_redirection_url: {
                value: cdktn.stringToHclTerraform(this._failureRedirectionUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            from_email_address: {
                value: cdktn.stringToHclTerraform(this._fromEmailAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            success_redirection_url: {
                value: cdktn.stringToHclTerraform(this._successRedirectionUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomVerificationEmailTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomVerificationEmailTemplate.TagPropertyList",
            },
            template_content: {
                value: cdktn.stringToHclTerraform(this._templateContent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_name: {
                value: cdktn.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_subject: {
                value: cdktn.stringToHclTerraform(this._templateSubject),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomVerificationEmailTemplateTagPropertyToTerraform(struct?: CcCustomVerificationEmailTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomVerificationEmailTemplateTagPropertyToHclTerraform(struct?: CcCustomVerificationEmailTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomVerificationEmailTemplate {
export interface TagProperty {
    /**
    * The key of the key-value tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#key CcCustomVerificationEmailTemplate#key}
    */
    readonly key?: string;
    /**
    * The value of the key-value tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_custom_verification_email_template#value CcCustomVerificationEmailTemplate#value}
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
