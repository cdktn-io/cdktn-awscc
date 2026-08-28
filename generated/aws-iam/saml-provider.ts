// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSAMLProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The private key from your external identity provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#add_private_key CcSAMLProvider#add_private_key}
    */
    readonly addPrivateKey?: string;
    /**
    * The encryption setting for the SAML provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#assertion_encryption_mode CcSAMLProvider#assertion_encryption_mode}
    */
    readonly assertionEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#name CcSAMLProvider#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#private_key_list CcSAMLProvider#private_key_list}
    */
    readonly privateKeyList?: CcSAMLProvider.SAMLPrivateKeyProperty[] | cdktn.IResolvable;
    /**
    * The Key ID of the private key to remove
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#remove_private_key CcSAMLProvider#remove_private_key}
    */
    readonly removePrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#saml_metadata_document CcSAMLProvider#saml_metadata_document}
    */
    readonly samlMetadataDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#tags CcSAMLProvider#tags}
    */
    readonly tags?: CcSAMLProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider awscc_iam_saml_provider}
*/
export class CcSAMLProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_saml_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSAMLProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSAMLProvider to import
    * @param importFromId The id of the existing CcSAMLProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSAMLProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_saml_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider awscc_iam_saml_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSAMLProviderProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSAMLProviderProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_saml_provider',
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
        this._addPrivateKey = config.addPrivateKey;
        this._assertionEncryptionMode = config.assertionEncryptionMode;
        this._name = config.name;
        this._privateKeyList.internalValue = config.privateKeyList;
        this._removePrivateKey = config.removePrivateKey;
        this._samlMetadataDocument = config.samlMetadataDocument;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // add_private_key - computed: true, optional: true, required: false
    private _addPrivateKey?: string; 
    public get addPrivateKey() {
        return this.getStringAttribute('add_private_key');
    }
    public set addPrivateKey(value: string) {
        this._addPrivateKey = value;
    }
    public resetAddPrivateKey() {
        this._addPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addPrivateKeyInput() {
        return this._addPrivateKey;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // assertion_encryption_mode - computed: true, optional: true, required: false
    private _assertionEncryptionMode?: string; 
    public get assertionEncryptionMode() {
        return this.getStringAttribute('assertion_encryption_mode');
    }
    public set assertionEncryptionMode(value: string) {
        this._assertionEncryptionMode = value;
    }
    public resetAssertionEncryptionMode() {
        this._assertionEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assertionEncryptionModeInput() {
        return this._assertionEncryptionMode;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // private_key_list - computed: true, optional: true, required: false
    private _privateKeyList = new CcSAMLProvider.SAMLPrivateKeyPropertyList(this, "private_key_list", false);
    public get privateKeyList() {
        return this._privateKeyList;
    }
    public putPrivateKeyList(value: CcSAMLProvider.SAMLPrivateKeyProperty[] | cdktn.IResolvable) {
        this._privateKeyList.internalValue = value;
    }
    public resetPrivateKeyList() {
        this._privateKeyList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyListInput() {
        return this._privateKeyList.internalValue;
    }

    // remove_private_key - computed: true, optional: true, required: false
    private _removePrivateKey?: string; 
    public get removePrivateKey() {
        return this.getStringAttribute('remove_private_key');
    }
    public set removePrivateKey(value: string) {
        this._removePrivateKey = value;
    }
    public resetRemovePrivateKey() {
        this._removePrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removePrivateKeyInput() {
        return this._removePrivateKey;
    }

    // saml_metadata_document - computed: true, optional: true, required: false
    private _samlMetadataDocument?: string; 
    public get samlMetadataDocument() {
        return this.getStringAttribute('saml_metadata_document');
    }
    public set samlMetadataDocument(value: string) {
        this._samlMetadataDocument = value;
    }
    public resetSamlMetadataDocument() {
        this._samlMetadataDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlMetadataDocumentInput() {
        return this._samlMetadataDocument;
    }

    // saml_provider_uuid - computed: true, optional: false, required: false
    public get samlProviderUuid() {
        return this.getStringAttribute('saml_provider_uuid');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSAMLProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSAMLProvider.TagProperty[] | cdktn.IResolvable) {
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
            add_private_key: cdktn.stringToTerraform(this._addPrivateKey),
            assertion_encryption_mode: cdktn.stringToTerraform(this._assertionEncryptionMode),
            name: cdktn.stringToTerraform(this._name),
            private_key_list: cdktn.listMapper(ccSAMLProviderSAMLPrivateKeyPropertyToTerraform, false)(this._privateKeyList.internalValue),
            remove_private_key: cdktn.stringToTerraform(this._removePrivateKey),
            saml_metadata_document: cdktn.stringToTerraform(this._samlMetadataDocument),
            tags: cdktn.listMapper(ccSAMLProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            add_private_key: {
                value: cdktn.stringToHclTerraform(this._addPrivateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assertion_encryption_mode: {
                value: cdktn.stringToHclTerraform(this._assertionEncryptionMode),
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
            private_key_list: {
                value: cdktn.listMapperHcl(ccSAMLProviderSAMLPrivateKeyPropertyToHclTerraform, false)(this._privateKeyList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSAMLProvider.SAMLPrivateKeyPropertyList",
            },
            remove_private_key: {
                value: cdktn.stringToHclTerraform(this._removePrivateKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            saml_metadata_document: {
                value: cdktn.stringToHclTerraform(this._samlMetadataDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSAMLProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSAMLProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSAMLProviderSAMLPrivateKeyPropertyToTerraform(struct?: CcSAMLProvider.SAMLPrivateKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_id: cdktn.stringToTerraform(struct!.keyId),
        timestamp: cdktn.stringToTerraform(struct!.timestamp),
    }
}


export function ccSAMLProviderSAMLPrivateKeyPropertyToHclTerraform(struct?: CcSAMLProvider.SAMLPrivateKeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: cdktn.stringToHclTerraform(struct!.timestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSAMLProviderTagPropertyToTerraform(struct?: CcSAMLProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSAMLProviderTagPropertyToHclTerraform(struct?: CcSAMLProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSAMLProvider {
export interface SAMLPrivateKeyProperty {
    /**
    * The unique identifier for the SAML private key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#key_id CcSAMLProvider#key_id}
    */
    readonly keyId?: string;
    /**
    * The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#timestamp CcSAMLProvider#timestamp}
    */
    readonly timestamp?: string;
}
export class SAMLPrivateKeyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SAMLPrivateKeyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        if (this._timestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAMLPrivateKeyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyId = undefined;
            this._timestamp = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyId = value.keyId;
            this._timestamp = value.timestamp;
        }
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp?: string; 
    public get timestamp() {
        return this.getStringAttribute('timestamp');
    }
    public set timestamp(value: string) {
        this._timestamp = value;
    }
    public resetTimestamp() {
        this._timestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp;
    }
}

export class SAMLPrivateKeyPropertyList extends cdktn.ComplexList {
    public internalValue? : SAMLPrivateKeyProperty[] | cdktn.IResolvable

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
    public get(index: number): SAMLPrivateKeyPropertyOutputReference {
        return new SAMLPrivateKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#key CcSAMLProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_saml_provider#value CcSAMLProvider#value}
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
