// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFieldLevelEncryptionConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique value that identifies the create request. Any string unique within the account works; CloudFront refuses to change it once set, so supplying a different value replaces the configuration. It is also the only value CloudFront returns that identifies a configuration as this stack's, so cleaning up after a failed create depends on the template keeping it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#caller_reference CcFieldLevelEncryptionConfig#caller_reference}
    */
    readonly callerReference: string;
    /**
    * An optional comment describing the field-level encryption configuration. CloudFront stores an omitted comment and an explicitly empty one identically as an empty string, and Read normalizes that empty string back to absent -- so omitting Comment round-trips, while asking for an empty string does not and would report perpetual drift. `minLength: 1` refuses the empty string at template validation; omission is the way to express no comment. The service documents a maximum of 128 characters, and `maxLength` moves that refusal from the API to template validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#comment CcFieldLevelEncryptionConfig#comment}
    */
    readonly comment?: string;
    /**
    * How CloudFront handles content types, including the profile paired with each one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config CcFieldLevelEncryptionConfig#content_type_profile_config}
    */
    readonly contentTypeProfileConfig: CcFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty;
    /**
    * How CloudFront handles query arguments, including the profile paired with each one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config CcFieldLevelEncryptionConfig#query_arg_profile_config}
    */
    readonly queryArgProfileConfig: CcFieldLevelEncryptionConfig.QueryArgProfileConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config awscc_cloudfront_field_level_encryption_config}
*/
export class CcFieldLevelEncryptionConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_field_level_encryption_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFieldLevelEncryptionConfig to import
    * @param importFromId The id of the existing CcFieldLevelEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFieldLevelEncryptionConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_field_level_encryption_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config awscc_cloudfront_field_level_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFieldLevelEncryptionConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcFieldLevelEncryptionConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_field_level_encryption_config',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._callerReference = config.callerReference;
        this._comment = config.comment;
        this._contentTypeProfileConfig.internalValue = config.contentTypeProfileConfig;
        this._queryArgProfileConfig.internalValue = config.queryArgProfileConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // caller_reference - computed: false, optional: false, required: true
    private _callerReference?: string; 
    public get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
    public set callerReference(value: string) {
        this._callerReference = value;
    }
    // Temporarily expose input value. Use with caution.
    public get callerReferenceInput() {
        return this._callerReference;
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // content_type_profile_config - computed: false, optional: false, required: true
    private _contentTypeProfileConfig = new CcFieldLevelEncryptionConfig.ContentTypeProfileConfigPropertyOutputReference(this, "content_type_profile_config");
    public get contentTypeProfileConfig() {
        return this._contentTypeProfileConfig;
    }
    public putContentTypeProfileConfig(value: CcFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty) {
        this._contentTypeProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeProfileConfigInput() {
        return this._contentTypeProfileConfig.internalValue;
    }

    // field_level_encryption_config_id - computed: true, optional: false, required: false
    public get fieldLevelEncryptionConfigId() {
        return this.getStringAttribute('field_level_encryption_config_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // query_arg_profile_config - computed: false, optional: false, required: true
    private _queryArgProfileConfig = new CcFieldLevelEncryptionConfig.QueryArgProfileConfigPropertyOutputReference(this, "query_arg_profile_config");
    public get queryArgProfileConfig() {
        return this._queryArgProfileConfig;
    }
    public putQueryArgProfileConfig(value: CcFieldLevelEncryptionConfig.QueryArgProfileConfigProperty) {
        this._queryArgProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryArgProfileConfigInput() {
        return this._queryArgProfileConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            caller_reference: cdktn.stringToTerraform(this._callerReference),
            comment: cdktn.stringToTerraform(this._comment),
            content_type_profile_config: ccFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToTerraform(this._contentTypeProfileConfig.internalValue),
            query_arg_profile_config: ccFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToTerraform(this._queryArgProfileConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            caller_reference: {
                value: cdktn.stringToHclTerraform(this._callerReference),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comment: {
                value: cdktn.stringToHclTerraform(this._comment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type_profile_config: {
                value: ccFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToHclTerraform(this._contentTypeProfileConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty",
            },
            query_arg_profile_config: {
                value: ccFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToHclTerraform(this._queryArgProfileConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFieldLevelEncryptionConfig.QueryArgProfileConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFieldLevelEncryptionConfigContentTypeProfilesPropertyToTerraform(struct?: CcFieldLevelEncryptionConfig.ContentTypeProfilesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        format: cdktn.stringToTerraform(struct!.format),
        profile_id: cdktn.stringToTerraform(struct!.profileId),
    }
}


export function ccFieldLevelEncryptionConfigContentTypeProfilesPropertyToHclTerraform(struct?: CcFieldLevelEncryptionConfig.ContentTypeProfilesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profile_id: {
            value: cdktn.stringToHclTerraform(struct!.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToTerraform(struct?: CcFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type_profiles: cdktn.listMapper(ccFieldLevelEncryptionConfigContentTypeProfilesPropertyToTerraform, false)(struct!.contentTypeProfiles),
        forward_when_content_type_is_unknown: cdktn.booleanToTerraform(struct!.forwardWhenContentTypeIsUnknown),
    }
}


export function ccFieldLevelEncryptionConfigContentTypeProfileConfigPropertyToHclTerraform(struct?: CcFieldLevelEncryptionConfig.ContentTypeProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type_profiles: {
            value: cdktn.listMapperHcl(ccFieldLevelEncryptionConfigContentTypeProfilesPropertyToHclTerraform, false)(struct!.contentTypeProfiles),
            isBlock: true,
            type: "list",
            storageClassType: "ContentTypeProfilesPropertyList",
        },
        forward_when_content_type_is_unknown: {
            value: cdktn.booleanToHclTerraform(struct!.forwardWhenContentTypeIsUnknown),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFieldLevelEncryptionConfigQueryArgProfilesPropertyToTerraform(struct?: CcFieldLevelEncryptionConfig.QueryArgProfilesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        profile_id: cdktn.stringToTerraform(struct!.profileId),
        query_arg: cdktn.stringToTerraform(struct!.queryArg),
    }
}


export function ccFieldLevelEncryptionConfigQueryArgProfilesPropertyToHclTerraform(struct?: CcFieldLevelEncryptionConfig.QueryArgProfilesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        profile_id: {
            value: cdktn.stringToHclTerraform(struct!.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_arg: {
            value: cdktn.stringToHclTerraform(struct!.queryArg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToTerraform(struct?: CcFieldLevelEncryptionConfig.QueryArgProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        forward_when_query_arg_profile_is_unknown: cdktn.booleanToTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
        query_arg_profiles: cdktn.listMapper(ccFieldLevelEncryptionConfigQueryArgProfilesPropertyToTerraform, false)(struct!.queryArgProfiles),
    }
}


export function ccFieldLevelEncryptionConfigQueryArgProfileConfigPropertyToHclTerraform(struct?: CcFieldLevelEncryptionConfig.QueryArgProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        forward_when_query_arg_profile_is_unknown: {
            value: cdktn.booleanToHclTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        query_arg_profiles: {
            value: cdktn.listMapperHcl(ccFieldLevelEncryptionConfigQueryArgProfilesPropertyToHclTerraform, false)(struct!.queryArgProfiles),
            isBlock: true,
            type: "list",
            storageClassType: "QueryArgProfilesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFieldLevelEncryptionConfig {
export interface ContentTypeProfilesProperty {
    /**
    * The content type CloudFront encrypts. The service accepts only application/x-www-form-urlencoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#content_type CcFieldLevelEncryptionConfig#content_type}
    */
    readonly contentType: string;
    /**
    * The encryption format CloudFront uses for this content type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#format CcFieldLevelEncryptionConfig#format}
    */
    readonly format: string;
    /**
    * The identifier of the field-level encryption profile CloudFront uses for this content type. Required, so that it cannot be omitted: the service accepts a content-type profile with the member absent on create and refuses one on update, and an update sends the whole profile list, so a configuration created that way could never be updated again. Supply an empty string to configure a content type and forward it WITHOUT field-level encryption. That mode is available through this resource and round-trips: create, update and read all accept and return the empty string, and it is the service's own encoding for the state -- asked for a content-type list with no items, CloudFront returns one item whose ProfileId is empty. Note that this is not the same as omitting the content type from the configuration, because ForwardWhenContentTypeIsUnknown governs only content types absent from it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CcFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId: string;
}
export class ContentTypeProfilesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContentTypeProfilesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentTypeProfilesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._format = undefined;
            this._profileId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._format = value.format;
            this._profileId = value.profileId;
        }
    }

    // content_type - computed: false, optional: false, required: true
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // profile_id - computed: false, optional: false, required: true
    private _profileId?: string; 
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }
    public set profileId(value: string) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileIdInput() {
        return this._profileId;
    }
}

export class ContentTypeProfilesPropertyList extends cdktn.ComplexList {
    public internalValue? : ContentTypeProfilesProperty[] | cdktn.IResolvable

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
    public get(index: number): ContentTypeProfilesPropertyOutputReference {
        return new ContentTypeProfilesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContentTypeProfileConfigProperty {
    /**
    * The content types paired with a profile. Required, and at least one item, because the service synthesizes one default item when the list is absent or empty, so neither state round-trips.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profiles CcFieldLevelEncryptionConfig#content_type_profiles}
    */
    readonly contentTypeProfiles: ContentTypeProfilesProperty[] | cdktn.IResolvable;
    /**
    * Whether CloudFront forwards a request when the content type names a profile that does not exist.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CcFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
    */
    readonly forwardWhenContentTypeIsUnknown: boolean | cdktn.IResolvable;
}
export class ContentTypeProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentTypeProfileConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTypeProfiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTypeProfiles = this._contentTypeProfiles?.internalValue;
        }
        if (this._forwardWhenContentTypeIsUnknown !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardWhenContentTypeIsUnknown = this._forwardWhenContentTypeIsUnknown;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentTypeProfileConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTypeProfiles.internalValue = undefined;
            this._forwardWhenContentTypeIsUnknown = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTypeProfiles.internalValue = value.contentTypeProfiles;
            this._forwardWhenContentTypeIsUnknown = value.forwardWhenContentTypeIsUnknown;
        }
    }

    // content_type_profiles - computed: false, optional: false, required: true
    private _contentTypeProfiles = new ContentTypeProfilesPropertyList(this, "content_type_profiles", false);
    public get contentTypeProfiles() {
        return this._contentTypeProfiles;
    }
    public putContentTypeProfiles(value: ContentTypeProfilesProperty[] | cdktn.IResolvable) {
        this._contentTypeProfiles.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeProfilesInput() {
        return this._contentTypeProfiles.internalValue;
    }

    // forward_when_content_type_is_unknown - computed: false, optional: false, required: true
    private _forwardWhenContentTypeIsUnknown?: boolean | cdktn.IResolvable; 
    public get forwardWhenContentTypeIsUnknown() {
        return this.getBooleanAttribute('forward_when_content_type_is_unknown');
    }
    public set forwardWhenContentTypeIsUnknown(value: boolean | cdktn.IResolvable) {
        this._forwardWhenContentTypeIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardWhenContentTypeIsUnknownInput() {
        return this._forwardWhenContentTypeIsUnknown;
    }
}
export interface QueryArgProfilesProperty {
    /**
    * The identifier of the field-level encryption profile CloudFront uses for this query argument.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CcFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId: string;
    /**
    * The query argument that CloudFront encrypts with the paired profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#query_arg CcFieldLevelEncryptionConfig#query_arg}
    */
    readonly queryArg: string;
}
export class QueryArgProfilesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueryArgProfilesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        if (this._queryArg !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryArg = this._queryArg;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryArgProfilesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._profileId = undefined;
            this._queryArg = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._profileId = value.profileId;
            this._queryArg = value.queryArg;
        }
    }

    // profile_id - computed: false, optional: false, required: true
    private _profileId?: string; 
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }
    public set profileId(value: string) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileIdInput() {
        return this._profileId;
    }

    // query_arg - computed: false, optional: false, required: true
    private _queryArg?: string; 
    public get queryArg() {
        return this.getStringAttribute('query_arg');
    }
    public set queryArg(value: string) {
        this._queryArg = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryArgInput() {
        return this._queryArg;
    }
}

export class QueryArgProfilesPropertyList extends cdktn.ComplexList {
    public internalValue? : QueryArgProfilesProperty[] | cdktn.IResolvable

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
    public get(index: number): QueryArgProfilesPropertyOutputReference {
        return new QueryArgProfilesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryArgProfileConfigProperty {
    /**
    * Whether CloudFront forwards a request when the query argument names a profile that does not exist.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CcFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
    */
    readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktn.IResolvable;
    /**
    * The query arguments paired with a profile. Required because the service returns an empty list rather than preserving absence, so an omitted value cannot round-trip. An empty list is accepted and is preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profiles CcFieldLevelEncryptionConfig#query_arg_profiles}
    */
    readonly queryArgProfiles: QueryArgProfilesProperty[] | cdktn.IResolvable;
}
export class QueryArgProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryArgProfileConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._forwardWhenQueryArgProfileIsUnknown !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardWhenQueryArgProfileIsUnknown = this._forwardWhenQueryArgProfileIsUnknown;
        }
        if (this._queryArgProfiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryArgProfiles = this._queryArgProfiles?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryArgProfileConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._forwardWhenQueryArgProfileIsUnknown = undefined;
            this._queryArgProfiles.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._forwardWhenQueryArgProfileIsUnknown = value.forwardWhenQueryArgProfileIsUnknown;
            this._queryArgProfiles.internalValue = value.queryArgProfiles;
        }
    }

    // forward_when_query_arg_profile_is_unknown - computed: false, optional: false, required: true
    private _forwardWhenQueryArgProfileIsUnknown?: boolean | cdktn.IResolvable; 
    public get forwardWhenQueryArgProfileIsUnknown() {
        return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown');
    }
    public set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktn.IResolvable) {
        this._forwardWhenQueryArgProfileIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardWhenQueryArgProfileIsUnknownInput() {
        return this._forwardWhenQueryArgProfileIsUnknown;
    }

    // query_arg_profiles - computed: false, optional: false, required: true
    private _queryArgProfiles = new QueryArgProfilesPropertyList(this, "query_arg_profiles", false);
    public get queryArgProfiles() {
        return this._queryArgProfiles;
    }
    public putQueryArgProfiles(value: QueryArgProfilesProperty[] | cdktn.IResolvable) {
        this._queryArgProfiles.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryArgProfilesInput() {
        return this._queryArgProfiles.internalValue;
    }
}
}
