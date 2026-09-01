// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrustStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the S3 bucket to fetch the CA certificate bundle from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket CcTrustStore#ca_certificates_bundle_s3_bucket}
    */
    readonly caCertificatesBundleS3Bucket?: string;
    /**
    * The name of the S3 object to fetch the CA certificate bundle from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key CcTrustStore#ca_certificates_bundle_s3_key}
    */
    readonly caCertificatesBundleS3Key?: string;
    /**
    * The version of the S3 bucket that contains the CA certificate bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version CcTrustStore#ca_certificates_bundle_s3_object_version}
    */
    readonly caCertificatesBundleS3ObjectVersion?: string;
    /**
    * The name of the trust store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#name CcTrustStore#name}
    */
    readonly name?: string;
    /**
    * The tags to assign to the trust store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#tags CcTrustStore#tags}
    */
    readonly tags?: CcTrustStore.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}
*/
export class CcTrustStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticloadbalancingv2_trust_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrustStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrustStore to import
    * @param importFromId The id of the existing CcTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrustStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_trust_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrustStoreProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTrustStoreProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticloadbalancingv2_trust_store',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._caCertificatesBundleS3Bucket = config.caCertificatesBundleS3Bucket;
        this._caCertificatesBundleS3Key = config.caCertificatesBundleS3Key;
        this._caCertificatesBundleS3ObjectVersion = config.caCertificatesBundleS3ObjectVersion;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ca_certificates_bundle_s3_bucket - computed: true, optional: true, required: false
    private _caCertificatesBundleS3Bucket?: string; 
    public get caCertificatesBundleS3Bucket() {
        return this.getStringAttribute('ca_certificates_bundle_s3_bucket');
    }
    public set caCertificatesBundleS3Bucket(value: string) {
        this._caCertificatesBundleS3Bucket = value;
    }
    public resetCaCertificatesBundleS3Bucket() {
        this._caCertificatesBundleS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatesBundleS3BucketInput() {
        return this._caCertificatesBundleS3Bucket;
    }

    // ca_certificates_bundle_s3_key - computed: true, optional: true, required: false
    private _caCertificatesBundleS3Key?: string; 
    public get caCertificatesBundleS3Key() {
        return this.getStringAttribute('ca_certificates_bundle_s3_key');
    }
    public set caCertificatesBundleS3Key(value: string) {
        this._caCertificatesBundleS3Key = value;
    }
    public resetCaCertificatesBundleS3Key() {
        this._caCertificatesBundleS3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatesBundleS3KeyInput() {
        return this._caCertificatesBundleS3Key;
    }

    // ca_certificates_bundle_s3_object_version - computed: true, optional: true, required: false
    private _caCertificatesBundleS3ObjectVersion?: string; 
    public get caCertificatesBundleS3ObjectVersion() {
        return this.getStringAttribute('ca_certificates_bundle_s3_object_version');
    }
    public set caCertificatesBundleS3ObjectVersion(value: string) {
        this._caCertificatesBundleS3ObjectVersion = value;
    }
    public resetCaCertificatesBundleS3ObjectVersion() {
        this._caCertificatesBundleS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatesBundleS3ObjectVersionInput() {
        return this._caCertificatesBundleS3ObjectVersion;
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

    // trust_store_arn - computed: true, optional: false, required: false
    public get trustStoreArn() {
        return this.getStringAttribute('trust_store_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ca_certificates_bundle_s3_bucket: cdktn.stringToTerraform(this._caCertificatesBundleS3Bucket),
            ca_certificates_bundle_s3_key: cdktn.stringToTerraform(this._caCertificatesBundleS3Key),
            ca_certificates_bundle_s3_object_version: cdktn.stringToTerraform(this._caCertificatesBundleS3ObjectVersion),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccTrustStoreTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ca_certificates_bundle_s3_bucket: {
                value: cdktn.stringToHclTerraform(this._caCertificatesBundleS3Bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ca_certificates_bundle_s3_key: {
                value: cdktn.stringToHclTerraform(this._caCertificatesBundleS3Key),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ca_certificates_bundle_s3_object_version: {
                value: cdktn.stringToHclTerraform(this._caCertificatesBundleS3ObjectVersion),
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
            tags: {
                value: cdktn.listMapperHcl(ccTrustStoreTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrustStore.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#key CcTrustStore#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_trust_store#value CcTrustStore#value}
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
