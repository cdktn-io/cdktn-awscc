// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcObjectTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether a profile should be created when data is received.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#allow_profile_creation CcObjectType#allow_profile_creation}
    */
    readonly allowProfileCreation?: boolean | cdktn.IResolvable;
    /**
    * Description of the profile object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#description CcObjectType#description}
    */
    readonly description: string;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#domain_name CcObjectType#domain_name}
    */
    readonly domainName: string;
    /**
    * The default encryption key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#encryption_key CcObjectType#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * The default number of days until the data within the domain expires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#expiration_days CcObjectType#expiration_days}
    */
    readonly expirationDays?: number;
    /**
    * A list of the name and ObjectType field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#fields CcObjectType#fields}
    */
    readonly fields?: CcObjectType.FieldMapProperty[] | cdktn.IResolvable;
    /**
    * A list of unique keys that can be used to map data to the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#keys CcObjectType#keys}
    */
    readonly keys?: CcObjectType.KeyMapProperty[] | cdktn.IResolvable;
    /**
    * The maximum number of profile objects for this object type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#max_profile_object_count CcObjectType#max_profile_object_count}
    */
    readonly maxProfileObjectCount?: number;
    /**
    * The name of the profile object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#object_type_name CcObjectType#object_type_name}
    */
    readonly objectTypeName: string;
    /**
    * The format of your sourceLastUpdatedTimestamp that was previously set up.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CcObjectType#source_last_updated_timestamp_format}
    */
    readonly sourceLastUpdatedTimestampFormat?: string;
    /**
    * Defines the priority order of object types. Lower value indicates higher priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#source_priority CcObjectType#source_priority}
    */
    readonly sourcePriority?: number;
    /**
    * The tags (keys and values) associated with the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#tags CcObjectType#tags}
    */
    readonly tags?: CcObjectType.TagProperty[] | cdktn.IResolvable;
    /**
    * A unique identifier for the object template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#template_id CcObjectType#template_id}
    */
    readonly templateId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type awscc_customerprofiles_object_type}
*/
export class CcObjectType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_object_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcObjectType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcObjectType to import
    * @param importFromId The id of the existing CcObjectType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcObjectType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_object_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type awscc_customerprofiles_object_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcObjectTypeProps
    */
    public constructor(scope: Construct, id: string, config: CcObjectTypeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_object_type',
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
        this._allowProfileCreation = config.allowProfileCreation;
        this._description = config.description;
        this._domainName = config.domainName;
        this._encryptionKey = config.encryptionKey;
        this._expirationDays = config.expirationDays;
        this._fields.internalValue = config.fields;
        this._keys.internalValue = config.keys;
        this._maxProfileObjectCount = config.maxProfileObjectCount;
        this._objectTypeName = config.objectTypeName;
        this._sourceLastUpdatedTimestampFormat = config.sourceLastUpdatedTimestampFormat;
        this._sourcePriority = config.sourcePriority;
        this._tags.internalValue = config.tags;
        this._templateId = config.templateId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_profile_creation - computed: true, optional: true, required: false
    private _allowProfileCreation?: boolean | cdktn.IResolvable; 
    public get allowProfileCreation() {
        return this.getBooleanAttribute('allow_profile_creation');
    }
    public set allowProfileCreation(value: boolean | cdktn.IResolvable) {
        this._allowProfileCreation = value;
    }
    public resetAllowProfileCreation() {
        this._allowProfileCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowProfileCreationInput() {
        return this._allowProfileCreation;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey?: string; 
    public get encryptionKey() {
        return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string) {
        this._encryptionKey = value;
    }
    public resetEncryptionKey() {
        this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
        return this._encryptionKey;
    }

    // expiration_days - computed: true, optional: true, required: false
    private _expirationDays?: number; 
    public get expirationDays() {
        return this.getNumberAttribute('expiration_days');
    }
    public set expirationDays(value: number) {
        this._expirationDays = value;
    }
    public resetExpirationDays() {
        this._expirationDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationDaysInput() {
        return this._expirationDays;
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new CcObjectType.FieldMapPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: CcObjectType.FieldMapProperty[] | cdktn.IResolvable) {
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

    // keys - computed: true, optional: true, required: false
    private _keys = new CcObjectType.KeyMapPropertyList(this, "keys", false);
    public get keys() {
        return this._keys;
    }
    public putKeys(value: CcObjectType.KeyMapProperty[] | cdktn.IResolvable) {
        this._keys.internalValue = value;
    }
    public resetKeys() {
        this._keys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keysInput() {
        return this._keys.internalValue;
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // max_available_profile_object_count - computed: true, optional: false, required: false
    public get maxAvailableProfileObjectCount() {
        return this.getNumberAttribute('max_available_profile_object_count');
    }

    // max_profile_object_count - computed: true, optional: true, required: false
    private _maxProfileObjectCount?: number; 
    public get maxProfileObjectCount() {
        return this.getNumberAttribute('max_profile_object_count');
    }
    public set maxProfileObjectCount(value: number) {
        this._maxProfileObjectCount = value;
    }
    public resetMaxProfileObjectCount() {
        this._maxProfileObjectCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxProfileObjectCountInput() {
        return this._maxProfileObjectCount;
    }

    // object_type_name - computed: false, optional: false, required: true
    private _objectTypeName?: string; 
    public get objectTypeName() {
        return this.getStringAttribute('object_type_name');
    }
    public set objectTypeName(value: string) {
        this._objectTypeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeNameInput() {
        return this._objectTypeName;
    }

    // source_last_updated_timestamp_format - computed: true, optional: true, required: false
    private _sourceLastUpdatedTimestampFormat?: string; 
    public get sourceLastUpdatedTimestampFormat() {
        return this.getStringAttribute('source_last_updated_timestamp_format');
    }
    public set sourceLastUpdatedTimestampFormat(value: string) {
        this._sourceLastUpdatedTimestampFormat = value;
    }
    public resetSourceLastUpdatedTimestampFormat() {
        this._sourceLastUpdatedTimestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLastUpdatedTimestampFormatInput() {
        return this._sourceLastUpdatedTimestampFormat;
    }

    // source_priority - computed: true, optional: true, required: false
    private _sourcePriority?: number; 
    public get sourcePriority() {
        return this.getNumberAttribute('source_priority');
    }
    public set sourcePriority(value: number) {
        this._sourcePriority = value;
    }
    public resetSourcePriority() {
        this._sourcePriority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePriorityInput() {
        return this._sourcePriority;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcObjectType.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcObjectType.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_id - computed: true, optional: true, required: false
    private _templateId?: string; 
    public get templateId() {
        return this.getStringAttribute('template_id');
    }
    public set templateId(value: string) {
        this._templateId = value;
    }
    public resetTemplateId() {
        this._templateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateIdInput() {
        return this._templateId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allow_profile_creation: cdktn.booleanToTerraform(this._allowProfileCreation),
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            encryption_key: cdktn.stringToTerraform(this._encryptionKey),
            expiration_days: cdktn.numberToTerraform(this._expirationDays),
            fields: cdktn.listMapper(ccObjectTypeFieldMapPropertyToTerraform, false)(this._fields.internalValue),
            keys: cdktn.listMapper(ccObjectTypeKeyMapPropertyToTerraform, false)(this._keys.internalValue),
            max_profile_object_count: cdktn.numberToTerraform(this._maxProfileObjectCount),
            object_type_name: cdktn.stringToTerraform(this._objectTypeName),
            source_last_updated_timestamp_format: cdktn.stringToTerraform(this._sourceLastUpdatedTimestampFormat),
            source_priority: cdktn.numberToTerraform(this._sourcePriority),
            tags: cdktn.listMapper(ccObjectTypeTagPropertyToTerraform, false)(this._tags.internalValue),
            template_id: cdktn.stringToTerraform(this._templateId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_profile_creation: {
                value: cdktn.booleanToHclTerraform(this._allowProfileCreation),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_key: {
                value: cdktn.stringToHclTerraform(this._encryptionKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expiration_days: {
                value: cdktn.numberToHclTerraform(this._expirationDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            fields: {
                value: cdktn.listMapperHcl(ccObjectTypeFieldMapPropertyToHclTerraform, false)(this._fields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcObjectType.FieldMapPropertyList",
            },
            keys: {
                value: cdktn.listMapperHcl(ccObjectTypeKeyMapPropertyToHclTerraform, false)(this._keys.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcObjectType.KeyMapPropertyList",
            },
            max_profile_object_count: {
                value: cdktn.numberToHclTerraform(this._maxProfileObjectCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            object_type_name: {
                value: cdktn.stringToHclTerraform(this._objectTypeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_last_updated_timestamp_format: {
                value: cdktn.stringToHclTerraform(this._sourceLastUpdatedTimestampFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_priority: {
                value: cdktn.numberToHclTerraform(this._sourcePriority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccObjectTypeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcObjectType.TagPropertyList",
            },
            template_id: {
                value: cdktn.stringToHclTerraform(this._templateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccObjectTypeObjectTypeFieldPropertyToTerraform(struct?: CcObjectType.ObjectTypeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        source: cdktn.stringToTerraform(struct!.source),
        target: cdktn.stringToTerraform(struct!.target),
    }
}


export function ccObjectTypeObjectTypeFieldPropertyToHclTerraform(struct?: CcObjectType.ObjectTypeFieldProperty | cdktn.IResolvable): any {
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
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccObjectTypeFieldMapPropertyToTerraform(struct?: CcObjectType.FieldMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        object_type_field: ccObjectTypeObjectTypeFieldPropertyToTerraform(struct!.objectTypeField),
    }
}


export function ccObjectTypeFieldMapPropertyToHclTerraform(struct?: CcObjectType.FieldMapProperty | cdktn.IResolvable): any {
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
        object_type_field: {
            value: ccObjectTypeObjectTypeFieldPropertyToHclTerraform(struct!.objectTypeField),
            isBlock: true,
            type: "struct",
            storageClassType: "ObjectTypeFieldProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccObjectTypeObjectTypeKeyPropertyToTerraform(struct?: CcObjectType.ObjectTypeKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fieldNames),
        standard_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.standardIdentifiers),
    }
}


export function ccObjectTypeObjectTypeKeyPropertyToHclTerraform(struct?: CcObjectType.ObjectTypeKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        standard_identifiers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.standardIdentifiers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccObjectTypeKeyMapPropertyToTerraform(struct?: CcObjectType.KeyMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        object_type_key_list: cdktn.listMapper(ccObjectTypeObjectTypeKeyPropertyToTerraform, false)(struct!.objectTypeKeyList),
    }
}


export function ccObjectTypeKeyMapPropertyToHclTerraform(struct?: CcObjectType.KeyMapProperty | cdktn.IResolvable): any {
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
        object_type_key_list: {
            value: cdktn.listMapperHcl(ccObjectTypeObjectTypeKeyPropertyToHclTerraform, false)(struct!.objectTypeKeyList),
            isBlock: true,
            type: "list",
            storageClassType: "ObjectTypeKeyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccObjectTypeTagPropertyToTerraform(struct?: CcObjectType.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccObjectTypeTagPropertyToHclTerraform(struct?: CcObjectType.TagProperty | cdktn.IResolvable): any {
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


export namespace CcObjectType {
export interface ObjectTypeFieldProperty {
    /**
    * The content type of the field. Used for determining equality when searching.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#content_type CcObjectType#content_type}
    */
    readonly contentType?: string;
    /**
    * A field of a ProfileObject. For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#source CcObjectType#source}
    */
    readonly source?: string;
    /**
    * The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#target CcObjectType#target}
    */
    readonly target?: string;
}
export class ObjectTypeFieldPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ObjectTypeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectTypeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._source = undefined;
            this._target = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._source = value.source;
            this._target = value.target;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }
}
export interface FieldMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#name CcObjectType#name}
    */
    readonly name?: string;
    /**
    * Represents a field in a ProfileObjectType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#object_type_field CcObjectType#object_type_field}
    */
    readonly objectTypeField?: ObjectTypeFieldProperty;
}
export class FieldMapPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FieldMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._objectTypeField?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectTypeField = this._objectTypeField?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._objectTypeField.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._objectTypeField.internalValue = value.objectTypeField;
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

    // object_type_field - computed: true, optional: true, required: false
    private _objectTypeField = new ObjectTypeFieldPropertyOutputReference(this, "object_type_field");
    public get objectTypeField() {
        return this._objectTypeField;
    }
    public putObjectTypeField(value: ObjectTypeFieldProperty) {
        this._objectTypeField.internalValue = value;
    }
    public resetObjectTypeField() {
        this._objectTypeField.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeFieldInput() {
        return this._objectTypeField.internalValue;
    }
}

export class FieldMapPropertyList extends cdktn.ComplexList {
    public internalValue? : FieldMapProperty[] | cdktn.IResolvable

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
    public get(index: number): FieldMapPropertyOutputReference {
        return new FieldMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ObjectTypeKeyProperty {
    /**
    * The reference for the key name of the fields map. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#field_names CcObjectType#field_names}
    */
    readonly fieldNames?: string[];
    /**
    * The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#standard_identifiers CcObjectType#standard_identifiers}
    */
    readonly standardIdentifiers?: string[];
}
export class ObjectTypeKeyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ObjectTypeKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldNames = this._fieldNames;
        }
        if (this._standardIdentifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.standardIdentifiers = this._standardIdentifiers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectTypeKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldNames = undefined;
            this._standardIdentifiers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldNames = value.fieldNames;
            this._standardIdentifiers = value.standardIdentifiers;
        }
    }

    // field_names - computed: true, optional: true, required: false
    private _fieldNames?: string[]; 
    public get fieldNames() {
        return this.getListAttribute('field_names');
    }
    public set fieldNames(value: string[]) {
        this._fieldNames = value;
    }
    public resetFieldNames() {
        this._fieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNamesInput() {
        return this._fieldNames;
    }

    // standard_identifiers - computed: true, optional: true, required: false
    private _standardIdentifiers?: string[]; 
    public get standardIdentifiers() {
        return this.getListAttribute('standard_identifiers');
    }
    public set standardIdentifiers(value: string[]) {
        this._standardIdentifiers = value;
    }
    public resetStandardIdentifiers() {
        this._standardIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standardIdentifiersInput() {
        return this._standardIdentifiers;
    }
}

export class ObjectTypeKeyPropertyList extends cdktn.ComplexList {
    public internalValue? : ObjectTypeKeyProperty[] | cdktn.IResolvable

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
    public get(index: number): ObjectTypeKeyPropertyOutputReference {
        return new ObjectTypeKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeyMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#name CcObjectType#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#object_type_key_list CcObjectType#object_type_key_list}
    */
    readonly objectTypeKeyList?: ObjectTypeKeyProperty[] | cdktn.IResolvable;
}
export class KeyMapPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._objectTypeKeyList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectTypeKeyList = this._objectTypeKeyList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._objectTypeKeyList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._objectTypeKeyList.internalValue = value.objectTypeKeyList;
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

    // object_type_key_list - computed: true, optional: true, required: false
    private _objectTypeKeyList = new ObjectTypeKeyPropertyList(this, "object_type_key_list", false);
    public get objectTypeKeyList() {
        return this._objectTypeKeyList;
    }
    public putObjectTypeKeyList(value: ObjectTypeKeyProperty[] | cdktn.IResolvable) {
        this._objectTypeKeyList.internalValue = value;
    }
    public resetObjectTypeKeyList() {
        this._objectTypeKeyList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeKeyListInput() {
        return this._objectTypeKeyList.internalValue;
    }
}

export class KeyMapPropertyList extends cdktn.ComplexList {
    public internalValue? : KeyMapProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyMapPropertyOutputReference {
        return new KeyMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#key CcObjectType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/customerprofiles_object_type#value CcObjectType#value}
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
