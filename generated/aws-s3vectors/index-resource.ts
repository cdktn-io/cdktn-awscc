// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIndexProps extends cdktn.TerraformMetaArguments {
    /**
    * The data type of the vectors to be inserted into the vector index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#data_type CcIndex#data_type}
    */
    readonly dataType: string;
    /**
    * The dimensions of the vectors to be inserted into the vector index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#dimension CcIndex#dimension}
    */
    readonly dimension: number;
    /**
    * The distance metric to be used for similarity search.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#distance_metric CcIndex#distance_metric}
    */
    readonly distanceMetric: string;
    /**
    * The encryption configuration for the index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#encryption_configuration CcIndex#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcIndex.EncryptionConfigurationProperty;
    /**
    * The name of the vector index to create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#index_name CcIndex#index_name}
    */
    readonly indexName?: string;
    /**
    * The metadata configuration for the vector index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#metadata_configuration CcIndex#metadata_configuration}
    */
    readonly metadataConfiguration?: CcIndex.MetadataConfigurationProperty;
    /**
    * User tags (key-value pairs) to associate with the index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#tags CcIndex#tags}
    */
    readonly tags?: CcIndex.TagProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the vector bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#vector_bucket_arn CcIndex#vector_bucket_arn}
    */
    readonly vectorBucketArn?: string;
    /**
    * The name of the vector bucket that contains the vector index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#vector_bucket_name CcIndex#vector_bucket_name}
    */
    readonly vectorBucketName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index awscc_s3vectors_index}
*/
export class CcIndex extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3vectors_index";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIndex resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIndex to import
    * @param importFromId The id of the existing CcIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIndex to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3vectors_index", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index awscc_s3vectors_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIndexProps
    */
    public constructor(scope: Construct, id: string, config: CcIndexProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3vectors_index',
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
        this._dataType = config.dataType;
        this._dimension = config.dimension;
        this._distanceMetric = config.distanceMetric;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._indexName = config.indexName;
        this._metadataConfiguration.internalValue = config.metadataConfiguration;
        this._tags.internalValue = config.tags;
        this._vectorBucketArn = config.vectorBucketArn;
        this._vectorBucketName = config.vectorBucketName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // data_type - computed: false, optional: false, required: true
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
    }

    // dimension - computed: false, optional: false, required: true
    private _dimension?: number; 
    public get dimension() {
        return this.getNumberAttribute('dimension');
    }
    public set dimension(value: number) {
        this._dimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionInput() {
        return this._dimension;
    }

    // distance_metric - computed: false, optional: false, required: true
    private _distanceMetric?: string; 
    public get distanceMetric() {
        return this.getStringAttribute('distance_metric');
    }
    public set distanceMetric(value: string) {
        this._distanceMetric = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distanceMetricInput() {
        return this._distanceMetric;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcIndex.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcIndex.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // index_arn - computed: true, optional: false, required: false
    public get indexArn() {
        return this.getStringAttribute('index_arn');
    }

    // index_name - computed: true, optional: true, required: false
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    public resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // metadata_configuration - computed: true, optional: true, required: false
    private _metadataConfiguration = new CcIndex.MetadataConfigurationPropertyOutputReference(this, "metadata_configuration");
    public get metadataConfiguration() {
        return this._metadataConfiguration;
    }
    public putMetadataConfiguration(value: CcIndex.MetadataConfigurationProperty) {
        this._metadataConfiguration.internalValue = value;
    }
    public resetMetadataConfiguration() {
        this._metadataConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataConfigurationInput() {
        return this._metadataConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIndex.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIndex.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vector_bucket_arn - computed: true, optional: true, required: false
    private _vectorBucketArn?: string; 
    public get vectorBucketArn() {
        return this.getStringAttribute('vector_bucket_arn');
    }
    public set vectorBucketArn(value: string) {
        this._vectorBucketArn = value;
    }
    public resetVectorBucketArn() {
        this._vectorBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorBucketArnInput() {
        return this._vectorBucketArn;
    }

    // vector_bucket_name - computed: true, optional: true, required: false
    private _vectorBucketName?: string; 
    public get vectorBucketName() {
        return this.getStringAttribute('vector_bucket_name');
    }
    public set vectorBucketName(value: string) {
        this._vectorBucketName = value;
    }
    public resetVectorBucketName() {
        this._vectorBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorBucketNameInput() {
        return this._vectorBucketName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_type: cdktn.stringToTerraform(this._dataType),
            dimension: cdktn.numberToTerraform(this._dimension),
            distance_metric: cdktn.stringToTerraform(this._distanceMetric),
            encryption_configuration: ccIndexEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            index_name: cdktn.stringToTerraform(this._indexName),
            metadata_configuration: ccIndexMetadataConfigurationPropertyToTerraform(this._metadataConfiguration.internalValue),
            tags: cdktn.listMapper(ccIndexTagPropertyToTerraform, false)(this._tags.internalValue),
            vector_bucket_arn: cdktn.stringToTerraform(this._vectorBucketArn),
            vector_bucket_name: cdktn.stringToTerraform(this._vectorBucketName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_type: {
                value: cdktn.stringToHclTerraform(this._dataType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dimension: {
                value: cdktn.numberToHclTerraform(this._dimension),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            distance_metric: {
                value: cdktn.stringToHclTerraform(this._distanceMetric),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccIndexEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIndex.EncryptionConfigurationProperty",
            },
            index_name: {
                value: cdktn.stringToHclTerraform(this._indexName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_configuration: {
                value: ccIndexMetadataConfigurationPropertyToHclTerraform(this._metadataConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIndex.MetadataConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIndexTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIndex.TagPropertyList",
            },
            vector_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._vectorBucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vector_bucket_name: {
                value: cdktn.stringToHclTerraform(this._vectorBucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIndexEncryptionConfigurationPropertyToTerraform(struct?: CcIndex.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        sse_type: cdktn.stringToTerraform(struct!.sseType),
    }
}


export function ccIndexEncryptionConfigurationPropertyToHclTerraform(struct?: CcIndex.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sse_type: {
            value: cdktn.stringToHclTerraform(struct!.sseType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexMetadataConfigurationPropertyToTerraform(struct?: CcIndex.MetadataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        non_filterable_metadata_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nonFilterableMetadataKeys),
    }
}


export function ccIndexMetadataConfigurationPropertyToHclTerraform(struct?: CcIndex.MetadataConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        non_filterable_metadata_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nonFilterableMetadataKeys),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIndexTagPropertyToTerraform(struct?: CcIndex.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIndexTagPropertyToHclTerraform(struct?: CcIndex.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIndex {
export interface EncryptionConfigurationProperty {
    /**
    * AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if sseType is set to aws:kms
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#kms_key_arn CcIndex#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#sse_type CcIndex#sse_type}
    */
    readonly sseType?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._sseType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseType = this._sseType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._sseType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._sseType = value.sseType;
        }
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

    // sse_type - computed: true, optional: true, required: false
    private _sseType?: string; 
    public get sseType() {
        return this.getStringAttribute('sse_type');
    }
    public set sseType(value: string) {
        this._sseType = value;
    }
    public resetSseType() {
        this._sseType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseTypeInput() {
        return this._sseType;
    }
}
export interface MetadataConfigurationProperty {
    /**
    * Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#non_filterable_metadata_keys CcIndex#non_filterable_metadata_keys}
    */
    readonly nonFilterableMetadataKeys?: string[];
}
export class MetadataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nonFilterableMetadataKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonFilterableMetadataKeys = this._nonFilterableMetadataKeys;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nonFilterableMetadataKeys = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nonFilterableMetadataKeys = value.nonFilterableMetadataKeys;
        }
    }

    // non_filterable_metadata_keys - computed: true, optional: true, required: false
    private _nonFilterableMetadataKeys?: string[]; 
    public get nonFilterableMetadataKeys() {
        return cdktn.Fn.tolist(this.getListAttribute('non_filterable_metadata_keys'));
    }
    public set nonFilterableMetadataKeys(value: string[]) {
        this._nonFilterableMetadataKeys = value;
    }
    public resetNonFilterableMetadataKeys() {
        this._nonFilterableMetadataKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonFilterableMetadataKeysInput() {
        return this._nonFilterableMetadataKeys;
    }
}
export interface TagProperty {
    /**
    * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#key CcIndex#key}
    */
    readonly key?: string;
    /**
    * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_index#value CcIndex#value}
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
