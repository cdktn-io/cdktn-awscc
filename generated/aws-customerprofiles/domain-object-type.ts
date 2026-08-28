// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainObjectTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the domain object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#description CcDomainObjectType#description}
    */
    readonly description?: string;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#domain_name CcDomainObjectType#domain_name}
    */
    readonly domainName: string;
    /**
    * The default encryption key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#encryption_key CcDomainObjectType#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * A map of the name and ObjectType field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#fields CcDomainObjectType#fields}
    */
    readonly fields: { [key: string]: CcDomainObjectType.DomainObjectTypeFieldProperty } | cdktn.IResolvable;
    /**
    * The name of the domain object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#object_type_name CcDomainObjectType#object_type_name}
    */
    readonly objectTypeName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#tags CcDomainObjectType#tags}
    */
    readonly tags?: CcDomainObjectType.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}
*/
export class CcDomainObjectType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_domain_object_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainObjectType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainObjectType to import
    * @param importFromId The id of the existing CcDomainObjectType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainObjectType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_domain_object_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainObjectTypeProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainObjectTypeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_domain_object_type',
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
        this._description = config.description;
        this._domainName = config.domainName;
        this._encryptionKey = config.encryptionKey;
        this._fields.internalValue = config.fields;
        this._objectTypeName = config.objectTypeName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // fields - computed: false, optional: false, required: true
    private _fields = new CcDomainObjectType.DomainObjectTypeFieldPropertyMap(this, "fields");
    public get fields() {
        return this._fields;
    }
    public putFields(value: { [key: string]: CcDomainObjectType.DomainObjectTypeFieldProperty } | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomainObjectType.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomainObjectType.TagProperty[] | cdktn.IResolvable) {
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
            domain_name: cdktn.stringToTerraform(this._domainName),
            encryption_key: cdktn.stringToTerraform(this._encryptionKey),
            fields: cdktn.hashMapper(ccDomainObjectTypeDomainObjectTypeFieldPropertyToTerraform)(this._fields.internalValue),
            object_type_name: cdktn.stringToTerraform(this._objectTypeName),
            tags: cdktn.listMapper(ccDomainObjectTypeTagPropertyToTerraform, false)(this._tags.internalValue),
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
            fields: {
                value: cdktn.hashMapperHcl(ccDomainObjectTypeDomainObjectTypeFieldPropertyToHclTerraform)(this._fields.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDomainObjectType.DomainObjectTypeFieldPropertyMap",
            },
            object_type_name: {
                value: cdktn.stringToHclTerraform(this._objectTypeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainObjectTypeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDomainObjectType.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainObjectTypeDomainObjectTypeFieldPropertyToTerraform(struct?: CcDomainObjectType.DomainObjectTypeFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        feature_type: cdktn.stringToTerraform(struct!.featureType),
        source: cdktn.stringToTerraform(struct!.source),
        target: cdktn.stringToTerraform(struct!.target),
    }
}


export function ccDomainObjectTypeDomainObjectTypeFieldPropertyToHclTerraform(struct?: CcDomainObjectType.DomainObjectTypeFieldProperty | cdktn.IResolvable): any {
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
        feature_type: {
            value: cdktn.stringToHclTerraform(struct!.featureType),
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


export function ccDomainObjectTypeTagPropertyToTerraform(struct?: CcDomainObjectType.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainObjectTypeTagPropertyToHclTerraform(struct?: CcDomainObjectType.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDomainObjectType {
export interface DomainObjectTypeFieldProperty {
    /**
    * The content type of the field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#content_type CcDomainObjectType#content_type}
    */
    readonly contentType?: string;
    /**
    * The feature type of the field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#feature_type CcDomainObjectType#feature_type}
    */
    readonly featureType?: string;
    /**
    * The source field name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#source CcDomainObjectType#source}
    */
    readonly source?: string;
    /**
    * The target field name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#target CcDomainObjectType#target}
    */
    readonly target?: string;
}
export class DomainObjectTypeFieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DomainObjectTypeFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._featureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureType = this._featureType;
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

    public set internalValue(value: DomainObjectTypeFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._featureType = undefined;
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
            this._featureType = value.featureType;
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

    // feature_type - computed: true, optional: true, required: false
    private _featureType?: string; 
    public get featureType() {
        return this.getStringAttribute('feature_type');
    }
    public set featureType(value: string) {
        this._featureType = value;
    }
    public resetFeatureType() {
        this._featureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureTypeInput() {
        return this._featureType;
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

export class DomainObjectTypeFieldPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: DomainObjectTypeFieldProperty } | cdktn.IResolvable

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
    public get(key: string): DomainObjectTypeFieldPropertyOutputReference {
        return new DomainObjectTypeFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#key CcDomainObjectType#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_domain_object_type#value CcDomainObjectType#value}
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
