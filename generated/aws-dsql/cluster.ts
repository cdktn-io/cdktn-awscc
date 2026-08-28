// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether deletion protection is enabled in this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#deletion_protection_enabled CcCluster#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * The KMS key that encrypts data on the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#kms_encryption_key CcCluster#kms_encryption_key}
    */
    readonly kmsEncryptionKey?: string;
    /**
    * The Multi-region properties associated to this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#multi_region_properties CcCluster#multi_region_properties}
    */
    readonly multiRegionProperties?: CcCluster.MultiRegionPropertiesProperty;
    /**
    * The IAM policy applied to the cluster resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#policy_document CcCluster#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster awscc_dsql_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dsql_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dsql_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster awscc_dsql_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_dsql_cluster',
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
        this._deletionProtectionEnabled = config.deletionProtectionEnabled;
        this._kmsEncryptionKey = config.kmsEncryptionKey;
        this._multiRegionProperties.internalValue = config.multiRegionProperties;
        this._policyDocument = config.policyDocument;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // deletion_protection_enabled - computed: true, optional: true, required: false
    private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get deletionProtectionEnabled() {
        return this.getBooleanAttribute('deletion_protection_enabled');
    }
    public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._deletionProtectionEnabled = value;
    }
    public resetDeletionProtectionEnabled() {
        this._deletionProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionEnabledInput() {
        return this._deletionProtectionEnabled;
    }

    // encryption_details - computed: true, optional: false, required: false
    private _encryptionDetails = new CcCluster.EncryptionDetailsPropertyOutputReference(this, "encryption_details");
    public get encryptionDetails() {
        return this._encryptionDetails;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: false, required: false
    public get identifier() {
        return this.getStringAttribute('identifier');
    }

    // kms_encryption_key - computed: true, optional: true, required: false
    private _kmsEncryptionKey?: string; 
    public get kmsEncryptionKey() {
        return this.getStringAttribute('kms_encryption_key');
    }
    public set kmsEncryptionKey(value: string) {
        this._kmsEncryptionKey = value;
    }
    public resetKmsEncryptionKey() {
        this._kmsEncryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsEncryptionKeyInput() {
        return this._kmsEncryptionKey;
    }

    // multi_region_properties - computed: true, optional: true, required: false
    private _multiRegionProperties = new CcCluster.MultiRegionPropertiesPropertyOutputReference(this, "multi_region_properties");
    public get multiRegionProperties() {
        return this._multiRegionProperties;
    }
    public putMultiRegionProperties(value: CcCluster.MultiRegionPropertiesProperty) {
        this._multiRegionProperties.internalValue = value;
    }
    public resetMultiRegionProperties() {
        this._multiRegionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionPropertiesInput() {
        return this._multiRegionProperties.internalValue;
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_version - computed: true, optional: false, required: false
    public get policyVersion() {
        return this.getStringAttribute('policy_version');
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCluster.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCluster.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_endpoint - computed: true, optional: false, required: false
    public get vpcEndpoint() {
        return this.getStringAttribute('vpc_endpoint');
    }

    // vpc_endpoint_service_name - computed: true, optional: false, required: false
    public get vpcEndpointServiceName() {
        return this.getStringAttribute('vpc_endpoint_service_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
            kms_encryption_key: cdktn.stringToTerraform(this._kmsEncryptionKey),
            multi_region_properties: ccClusterMultiRegionPropertiesPropertyToTerraform(this._multiRegionProperties.internalValue),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deletion_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_encryption_key: {
                value: cdktn.stringToHclTerraform(this._kmsEncryptionKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_region_properties: {
                value: ccClusterMultiRegionPropertiesPropertyToHclTerraform(this._multiRegionProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.MultiRegionPropertiesProperty",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterEncryptionDetailsPropertyToTerraform(struct?: CcCluster.EncryptionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccClusterEncryptionDetailsPropertyToHclTerraform(struct?: CcCluster.EncryptionDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccClusterMultiRegionPropertiesPropertyToTerraform(struct?: CcCluster.MultiRegionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clusters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clusters),
        witness_region: cdktn.stringToTerraform(struct!.witnessRegion),
    }
}


export function ccClusterMultiRegionPropertiesPropertyToHclTerraform(struct?: CcCluster.MultiRegionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clusters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clusters),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        witness_region: {
            value: cdktn.stringToHclTerraform(struct!.witnessRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterTagPropertyToTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterTagPropertyToHclTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCluster {
export interface EncryptionDetailsProperty {
}
export class EncryptionDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // encryption_status - computed: true, optional: false, required: false
    public get encryptionStatus() {
        return this.getStringAttribute('encryption_status');
    }

    // encryption_type - computed: true, optional: false, required: false
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
}
export interface MultiRegionPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#clusters CcCluster#clusters}
    */
    readonly clusters?: string[];
    /**
    * The witness region in a multi-region cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#witness_region CcCluster#witness_region}
    */
    readonly witnessRegion?: string;
}
export class MultiRegionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiRegionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusters !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusters = this._clusters;
        }
        if (this._witnessRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.witnessRegion = this._witnessRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiRegionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusters = undefined;
            this._witnessRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusters = value.clusters;
            this._witnessRegion = value.witnessRegion;
        }
    }

    // clusters - computed: true, optional: true, required: false
    private _clusters?: string[]; 
    public get clusters() {
        return cdktn.Fn.tolist(this.getListAttribute('clusters'));
    }
    public set clusters(value: string[]) {
        this._clusters = value;
    }
    public resetClusters() {
        this._clusters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clustersInput() {
        return this._clusters;
    }

    // witness_region - computed: true, optional: true, required: false
    private _witnessRegion?: string; 
    public get witnessRegion() {
        return this.getStringAttribute('witness_region');
    }
    public set witnessRegion(value: string) {
        this._witnessRegion = value;
    }
    public resetWitnessRegion() {
        this._witnessRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get witnessRegionInput() {
        return this._witnessRegion;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dsql_cluster#value CcCluster#value}
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
