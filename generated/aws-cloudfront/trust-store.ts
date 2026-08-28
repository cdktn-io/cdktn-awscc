// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrustStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * A CA certificates bundle source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#ca_certificates_bundle_source CcTrustStore#ca_certificates_bundle_source}
    */
    readonly caCertificatesBundleSource?: CcTrustStore.CaCertificatesBundleSourceProperty;
    /**
    * The trust store's name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#name CcTrustStore#name}
    */
    readonly name: string;
    /**
    * A complex type that contains zero or more ``Tag`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#tags CcTrustStore#tags}
    */
    readonly tags?: CcTrustStore.TagProperty[] | cdktn.IResolvable;
    /**
    * A boolean. When true, performs real-time certificate revocation checks by querying the OCSP endpoint specified within the client certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#use_client_certificate_ocsp_endpoint CcTrustStore#use_client_certificate_ocsp_endpoint}
    */
    readonly useClientCertificateOcspEndpoint?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store awscc_cloudfront_trust_store}
*/
export class CcTrustStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_trust_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrustStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrustStore to import
    * @param importFromId The id of the existing CcTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrustStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_trust_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store awscc_cloudfront_trust_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrustStoreProps
    */
    public constructor(scope: Construct, id: string, config: CcTrustStoreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_trust_store',
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
        this._caCertificatesBundleSource.internalValue = config.caCertificatesBundleSource;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._useClientCertificateOcspEndpoint = config.useClientCertificateOcspEndpoint;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // ca_certificates_bundle_source - computed: true, optional: true, required: false
    private _caCertificatesBundleSource = new CcTrustStore.CaCertificatesBundleSourcePropertyOutputReference(this, "ca_certificates_bundle_source");
    public get caCertificatesBundleSource() {
        return this._caCertificatesBundleSource;
    }
    public putCaCertificatesBundleSource(value: CcTrustStore.CaCertificatesBundleSourceProperty) {
        this._caCertificatesBundleSource.internalValue = value;
    }
    public resetCaCertificatesBundleSource() {
        this._caCertificatesBundleSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatesBundleSourceInput() {
        return this._caCertificatesBundleSource.internalValue;
    }

    // e_tag - computed: true, optional: false, required: false
    public get eTag() {
        return this.getStringAttribute('e_tag');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
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

    // number_of_ca_certificates - computed: true, optional: false, required: false
    public get numberOfCaCertificates() {
        return this.getNumberAttribute('number_of_ca_certificates');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTrustStore.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTrustStore.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trust_store_id - computed: true, optional: false, required: false
    public get trustStoreId() {
        return this.getStringAttribute('trust_store_id');
    }

    // use_client_certificate_ocsp_endpoint - computed: true, optional: true, required: false
    private _useClientCertificateOcspEndpoint?: boolean | cdktn.IResolvable; 
    public get useClientCertificateOcspEndpoint() {
        return this.getBooleanAttribute('use_client_certificate_ocsp_endpoint');
    }
    public set useClientCertificateOcspEndpoint(value: boolean | cdktn.IResolvable) {
        this._useClientCertificateOcspEndpoint = value;
    }
    public resetUseClientCertificateOcspEndpoint() {
        this._useClientCertificateOcspEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useClientCertificateOcspEndpointInput() {
        return this._useClientCertificateOcspEndpoint;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ca_certificates_bundle_source: ccTrustStoreCaCertificatesBundleSourcePropertyToTerraform(this._caCertificatesBundleSource.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccTrustStoreTagPropertyToTerraform, false)(this._tags.internalValue),
            use_client_certificate_ocsp_endpoint: cdktn.booleanToTerraform(this._useClientCertificateOcspEndpoint),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ca_certificates_bundle_source: {
                value: ccTrustStoreCaCertificatesBundleSourcePropertyToHclTerraform(this._caCertificatesBundleSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrustStore.CaCertificatesBundleSourceProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrustStoreTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrustStore.TagPropertyList",
            },
            use_client_certificate_ocsp_endpoint: {
                value: cdktn.booleanToHclTerraform(this._useClientCertificateOcspEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrustStoreCaCertificatesBundleS3LocationPropertyToTerraform(struct?: CcTrustStore.CaCertificatesBundleS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
        region: cdktn.stringToTerraform(struct!.region),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccTrustStoreCaCertificatesBundleS3LocationPropertyToHclTerraform(struct?: CcTrustStore.CaCertificatesBundleS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustStoreCaCertificatesBundleSourcePropertyToTerraform(struct?: CcTrustStore.CaCertificatesBundleSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ca_certificates_bundle_s3_location: ccTrustStoreCaCertificatesBundleS3LocationPropertyToTerraform(struct!.caCertificatesBundleS3Location),
    }
}


export function ccTrustStoreCaCertificatesBundleSourcePropertyToHclTerraform(struct?: CcTrustStore.CaCertificatesBundleSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ca_certificates_bundle_s3_location: {
            value: ccTrustStoreCaCertificatesBundleS3LocationPropertyToHclTerraform(struct!.caCertificatesBundleS3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "CaCertificatesBundleS3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustStoreTagPropertyToTerraform(struct?: CcTrustStore.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrustStoreTagPropertyToHclTerraform(struct?: CcTrustStore.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTrustStore {
export interface CaCertificatesBundleS3LocationProperty {
    /**
    * The S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#bucket CcTrustStore#bucket}
    */
    readonly bucket?: string;
    /**
    * The location's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#key CcTrustStore#key}
    */
    readonly key?: string;
    /**
    * The location's Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#region CcTrustStore#region}
    */
    readonly region?: string;
    /**
    * The location's version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#version CcTrustStore#version}
    */
    readonly version?: string;
}
export class CaCertificatesBundleS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaCertificatesBundleS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaCertificatesBundleS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
            this._region = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
            this._region = value.region;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface CaCertificatesBundleSourceProperty {
    /**
    * The CA certificates bundle location in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#ca_certificates_bundle_s3_location CcTrustStore#ca_certificates_bundle_s3_location}
    */
    readonly caCertificatesBundleS3Location?: CaCertificatesBundleS3LocationProperty;
}
export class CaCertificatesBundleSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaCertificatesBundleSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._caCertificatesBundleS3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.caCertificatesBundleS3Location = this._caCertificatesBundleS3Location?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaCertificatesBundleSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._caCertificatesBundleS3Location.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._caCertificatesBundleS3Location.internalValue = value.caCertificatesBundleS3Location;
        }
    }

    // ca_certificates_bundle_s3_location - computed: true, optional: true, required: false
    private _caCertificatesBundleS3Location = new CaCertificatesBundleS3LocationPropertyOutputReference(this, "ca_certificates_bundle_s3_location");
    public get caCertificatesBundleS3Location() {
        return this._caCertificatesBundleS3Location;
    }
    public putCaCertificatesBundleS3Location(value: CaCertificatesBundleS3LocationProperty) {
        this._caCertificatesBundleS3Location.internalValue = value;
    }
    public resetCaCertificatesBundleS3Location() {
        this._caCertificatesBundleS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatesBundleS3LocationInput() {
        return this._caCertificatesBundleS3Location.internalValue;
    }
}
export interface TagProperty {
    /**
    * A string that contains ``Tag`` key.
    *  The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#key CcTrustStore#key}
    */
    readonly key?: string;
    /**
    * A string that contains an optional ``Tag`` value.
    *  The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_trust_store#value CcTrustStore#value}
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
