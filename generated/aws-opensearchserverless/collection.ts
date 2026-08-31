// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCollectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the collection group to associate with the collection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#collection_group_name CcCollection#collection_group_name}
    */
    readonly collectionGroupName?: string;
    /**
    * The deletion protection state of the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#deletion_protection CcCollection#deletion_protection}
    */
    readonly deletionProtection?: string;
    /**
    * The description of the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#description CcCollection#description}
    */
    readonly description?: string;
    /**
    * Encryption settings for the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#encryption_config CcCollection#encryption_config}
    */
    readonly encryptionConfig?: CcCollection.EncryptionConfigProperty;
    /**
    * The name of the collection.
    * 
    * The name must meet the following criteria:
    * Unique to your account and AWS Region
    * Starts with a lowercase letter
    * Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
    * Contains between 3 and 64 characters
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#name CcCollection#name}
    */
    readonly name: string;
    /**
    * The possible standby replicas for the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#standby_replicas CcCollection#standby_replicas}
    */
    readonly standbyReplicas?: string;
    /**
    * List of tags to be added to the resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#tags CcCollection#tags}
    */
    readonly tags?: CcCollection.TagProperty[] | cdktn.IResolvable;
    /**
    * The possible types for the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#type CcCollection#type}
    */
    readonly type?: string;
    /**
    * Vector search configuration options for the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#vector_options CcCollection#vector_options}
    */
    readonly vectorOptions?: CcCollection.VectorOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection awscc_opensearchserverless_collection}
*/
export class CcCollection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opensearchserverless_collection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCollection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCollection to import
    * @param importFromId The id of the existing CcCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCollection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchserverless_collection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection awscc_opensearchserverless_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCollectionProps
    */
    public constructor(scope: Construct, id: string, config: CcCollectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_opensearchserverless_collection',
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
        this._collectionGroupName = config.collectionGroupName;
        this._deletionProtection = config.deletionProtection;
        this._description = config.description;
        this._encryptionConfig.internalValue = config.encryptionConfig;
        this._name = config.name;
        this._standbyReplicas = config.standbyReplicas;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._vectorOptions.internalValue = config.vectorOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // collection_endpoint - computed: true, optional: false, required: false
    public get collectionEndpoint() {
        return this.getStringAttribute('collection_endpoint');
    }

    // collection_group_name - computed: true, optional: true, required: false
    private _collectionGroupName?: string; 
    public get collectionGroupName() {
        return this.getStringAttribute('collection_group_name');
    }
    public set collectionGroupName(value: string) {
        this._collectionGroupName = value;
    }
    public resetCollectionGroupName() {
        this._collectionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionGroupNameInput() {
        return this._collectionGroupName;
    }

    // collection_id - computed: true, optional: false, required: false
    public get collectionId() {
        return this.getStringAttribute('collection_id');
    }

    // dashboard_endpoint - computed: true, optional: false, required: false
    public get dashboardEndpoint() {
        return this.getStringAttribute('dashboard_endpoint');
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: string; 
    public get deletionProtection() {
        return this.getStringAttribute('deletion_protection');
    }
    public set deletionProtection(value: string) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
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

    // encryption_config - computed: true, optional: true, required: false
    private _encryptionConfig = new CcCollection.EncryptionConfigPropertyOutputReference(this, "encryption_config");
    public get encryptionConfig() {
        return this._encryptionConfig;
    }
    public putEncryptionConfig(value: CcCollection.EncryptionConfigProperty) {
        this._encryptionConfig.internalValue = value;
    }
    public resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
    }

    // fips_endpoints - computed: true, optional: false, required: false
    private _fipsEndpoints = new CcCollection.FipsEndpointsPropertyOutputReference(this, "fips_endpoints");
    public get fipsEndpoints() {
        return this._fipsEndpoints;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
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

    // standby_replicas - computed: true, optional: true, required: false
    private _standbyReplicas?: string; 
    public get standbyReplicas() {
        return this.getStringAttribute('standby_replicas');
    }
    public set standbyReplicas(value: string) {
        this._standbyReplicas = value;
    }
    public resetStandbyReplicas() {
        this._standbyReplicas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standbyReplicasInput() {
        return this._standbyReplicas;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCollection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCollection.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // vector_options - computed: true, optional: true, required: false
    private _vectorOptions = new CcCollection.VectorOptionsPropertyOutputReference(this, "vector_options");
    public get vectorOptions() {
        return this._vectorOptions;
    }
    public putVectorOptions(value: CcCollection.VectorOptionsProperty) {
        this._vectorOptions.internalValue = value;
    }
    public resetVectorOptions() {
        this._vectorOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorOptionsInput() {
        return this._vectorOptions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            collection_group_name: cdktn.stringToTerraform(this._collectionGroupName),
            deletion_protection: cdktn.stringToTerraform(this._deletionProtection),
            description: cdktn.stringToTerraform(this._description),
            encryption_config: ccCollectionEncryptionConfigPropertyToTerraform(this._encryptionConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            standby_replicas: cdktn.stringToTerraform(this._standbyReplicas),
            tags: cdktn.listMapper(ccCollectionTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            vector_options: ccCollectionVectorOptionsPropertyToTerraform(this._vectorOptions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            collection_group_name: {
                value: cdktn.stringToHclTerraform(this._collectionGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection: {
                value: cdktn.stringToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_config: {
                value: ccCollectionEncryptionConfigPropertyToHclTerraform(this._encryptionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollection.EncryptionConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            standby_replicas: {
                value: cdktn.stringToHclTerraform(this._standbyReplicas),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCollectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCollection.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vector_options: {
                value: ccCollectionVectorOptionsPropertyToHclTerraform(this._vectorOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCollection.VectorOptionsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCollectionEncryptionConfigPropertyToTerraform(struct?: CcCollection.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_owned_key: cdktn.booleanToTerraform(struct!.awsOwnedKey),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccCollectionEncryptionConfigPropertyToHclTerraform(struct?: CcCollection.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_owned_key: {
            value: cdktn.booleanToHclTerraform(struct!.awsOwnedKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCollectionFipsEndpointsPropertyToTerraform(struct?: CcCollection.FipsEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccCollectionFipsEndpointsPropertyToHclTerraform(struct?: CcCollection.FipsEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccCollectionTagPropertyToTerraform(struct?: CcCollection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCollectionTagPropertyToHclTerraform(struct?: CcCollection.TagProperty | cdktn.IResolvable): any {
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


export function ccCollectionVectorOptionsPropertyToTerraform(struct?: CcCollection.VectorOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        serverless_vector_acceleration: cdktn.stringToTerraform(struct!.serverlessVectorAcceleration),
    }
}


export function ccCollectionVectorOptionsPropertyToHclTerraform(struct?: CcCollection.VectorOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        serverless_vector_acceleration: {
            value: cdktn.stringToHclTerraform(struct!.serverlessVectorAcceleration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCollection {
export interface EncryptionConfigProperty {
    /**
    * Indicates whether to use an AWS owned key for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#aws_owned_key CcCollection#aws_owned_key}
    */
    readonly awsOwnedKey?: boolean | cdktn.IResolvable;
    /**
    * Key Management Service key used to encrypt the collection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#kms_key_arn CcCollection#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class EncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsOwnedKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsOwnedKey = this._awsOwnedKey;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsOwnedKey = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsOwnedKey = value.awsOwnedKey;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // aws_owned_key - computed: true, optional: true, required: false
    private _awsOwnedKey?: boolean | cdktn.IResolvable; 
    public get awsOwnedKey() {
        return this.getBooleanAttribute('aws_owned_key');
    }
    public set awsOwnedKey(value: boolean | cdktn.IResolvable) {
        this._awsOwnedKey = value;
    }
    public resetAwsOwnedKey() {
        this._awsOwnedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsOwnedKeyInput() {
        return this._awsOwnedKey;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface FipsEndpointsProperty {
}
export class FipsEndpointsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FipsEndpointsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FipsEndpointsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // collection_endpoint - computed: true, optional: false, required: false
    public get collectionEndpoint() {
        return this.getStringAttribute('collection_endpoint');
    }

    // dashboard_endpoint - computed: true, optional: false, required: false
    public get dashboardEndpoint() {
        return this.getStringAttribute('dashboard_endpoint');
    }
}
export interface TagProperty {
    /**
    * The key in the key-value pair
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#key CcCollection#key}
    */
    readonly key?: string;
    /**
    * The value in the key-value pair
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#value CcCollection#value}
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
export interface VectorOptionsProperty {
    /**
    * Indicates whether GPU acceleration is enabled for vector indexing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration CcCollection#serverless_vector_acceleration}
    */
    readonly serverlessVectorAcceleration?: string;
}
export class VectorOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VectorOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverlessVectorAcceleration !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessVectorAcceleration = this._serverlessVectorAcceleration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VectorOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverlessVectorAcceleration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverlessVectorAcceleration = value.serverlessVectorAcceleration;
        }
    }

    // serverless_vector_acceleration - computed: true, optional: true, required: false
    private _serverlessVectorAcceleration?: string; 
    public get serverlessVectorAcceleration() {
        return this.getStringAttribute('serverless_vector_acceleration');
    }
    public set serverlessVectorAcceleration(value: string) {
        this._serverlessVectorAcceleration = value;
    }
    public resetServerlessVectorAcceleration() {
        this._serverlessVectorAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessVectorAccelerationInput() {
        return this._serverlessVectorAcceleration;
    }
}
}
