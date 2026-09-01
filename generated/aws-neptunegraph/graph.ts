// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGraphProps extends cdktn.TerraformMetaArguments {
    /**
    * Value that indicates whether the Graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
    * 
    * _Default_: If not specified, the default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#deletion_protection CcGraph#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * Contains a user-supplied name for the Graph. 
    * 
    * If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.
    * 
    * _Important_: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#graph_name CcGraph#graph_name}
    */
    readonly graphName?: string;
    /**
    * The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. If not specified, the graph is encrypted with an AWS managed key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#kms_key_identifier CcGraph#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Memory for the Graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#provisioned_memory CcGraph#provisioned_memory}
    */
    readonly provisionedMemory: number;
    /**
    * Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.
    * 
    * When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.
    * 
    * When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.
    * 
    * _Default_: If not specified, the default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#public_connectivity CcGraph#public_connectivity}
    */
    readonly publicConnectivity?: boolean | cdktn.IResolvable;
    /**
    * Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.
    * 
    * Replica Count should always be less than or equal to 2.
    * 
    * _Default_: If not specified, the default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#replica_count CcGraph#replica_count}
    */
    readonly replicaCount?: number;
    /**
    * The tags associated with this graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#tags CcGraph#tags}
    */
    readonly tags?: CcGraph.TagProperty[] | cdktn.IResolvable;
    /**
    * Vector Search Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#vector_search_configuration CcGraph#vector_search_configuration}
    */
    readonly vectorSearchConfiguration?: CcGraph.VectorSearchConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}
*/
export class CcGraph extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_neptunegraph_graph";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGraph resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGraph to import
    * @param importFromId The id of the existing CcGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGraph to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptunegraph_graph", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGraphProps
    */
    public constructor(scope: Construct, id: string, config: CcGraphProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_neptunegraph_graph',
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
        this._deletionProtection = config.deletionProtection;
        this._graphName = config.graphName;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._provisionedMemory = config.provisionedMemory;
        this._publicConnectivity = config.publicConnectivity;
        this._replicaCount = config.replicaCount;
        this._tags.internalValue = config.tags;
        this._vectorSearchConfiguration.internalValue = config.vectorSearchConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // graph_arn - computed: true, optional: false, required: false
    public get graphArn() {
        return this.getStringAttribute('graph_arn');
    }

    // graph_id - computed: true, optional: false, required: false
    public get graphId() {
        return this.getStringAttribute('graph_id');
    }

    // graph_name - computed: true, optional: true, required: false
    private _graphName?: string; 
    public get graphName() {
        return this.getStringAttribute('graph_name');
    }
    public set graphName(value: string) {
        this._graphName = value;
    }
    public resetGraphName() {
        this._graphName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get graphNameInput() {
        return this._graphName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
    }

    // provisioned_memory - computed: false, optional: false, required: true
    private _provisionedMemory?: number; 
    public get provisionedMemory() {
        return this.getNumberAttribute('provisioned_memory');
    }
    public set provisionedMemory(value: number) {
        this._provisionedMemory = value;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedMemoryInput() {
        return this._provisionedMemory;
    }

    // public_connectivity - computed: true, optional: true, required: false
    private _publicConnectivity?: boolean | cdktn.IResolvable; 
    public get publicConnectivity() {
        return this.getBooleanAttribute('public_connectivity');
    }
    public set publicConnectivity(value: boolean | cdktn.IResolvable) {
        this._publicConnectivity = value;
    }
    public resetPublicConnectivity() {
        this._publicConnectivity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicConnectivityInput() {
        return this._publicConnectivity;
    }

    // replica_count - computed: true, optional: true, required: false
    private _replicaCount?: number; 
    public get replicaCount() {
        return this.getNumberAttribute('replica_count');
    }
    public set replicaCount(value: number) {
        this._replicaCount = value;
    }
    public resetReplicaCount() {
        this._replicaCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaCountInput() {
        return this._replicaCount;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGraph.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGraph.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vector_search_configuration - computed: true, optional: true, required: false
    private _vectorSearchConfiguration = new CcGraph.VectorSearchConfigurationPropertyOutputReference(this, "vector_search_configuration");
    public get vectorSearchConfiguration() {
        return this._vectorSearchConfiguration;
    }
    public putVectorSearchConfiguration(value: CcGraph.VectorSearchConfigurationProperty) {
        this._vectorSearchConfiguration.internalValue = value;
    }
    public resetVectorSearchConfiguration() {
        this._vectorSearchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorSearchConfigurationInput() {
        return this._vectorSearchConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            graph_name: cdktn.stringToTerraform(this._graphName),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            provisioned_memory: cdktn.numberToTerraform(this._provisionedMemory),
            public_connectivity: cdktn.booleanToTerraform(this._publicConnectivity),
            replica_count: cdktn.numberToTerraform(this._replicaCount),
            tags: cdktn.listMapper(ccGraphTagPropertyToTerraform, false)(this._tags.internalValue),
            vector_search_configuration: ccGraphVectorSearchConfigurationPropertyToTerraform(this._vectorSearchConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            graph_name: {
                value: cdktn.stringToHclTerraform(this._graphName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioned_memory: {
                value: cdktn.numberToHclTerraform(this._provisionedMemory),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            public_connectivity: {
                value: cdktn.booleanToHclTerraform(this._publicConnectivity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            replica_count: {
                value: cdktn.numberToHclTerraform(this._replicaCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGraphTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGraph.TagPropertyList",
            },
            vector_search_configuration: {
                value: ccGraphVectorSearchConfigurationPropertyToHclTerraform(this._vectorSearchConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraph.VectorSearchConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGraphTagPropertyToTerraform(struct?: CcGraph.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGraphTagPropertyToHclTerraform(struct?: CcGraph.TagProperty | cdktn.IResolvable): any {
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


export function ccGraphVectorSearchConfigurationPropertyToTerraform(struct?: CcGraph.VectorSearchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vector_search_dimension: cdktn.numberToTerraform(struct!.vectorSearchDimension),
    }
}


export function ccGraphVectorSearchConfigurationPropertyToHclTerraform(struct?: CcGraph.VectorSearchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vector_search_dimension: {
            value: cdktn.numberToHclTerraform(struct!.vectorSearchDimension),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGraph {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#key CcGraph#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#value CcGraph#value}
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
export interface VectorSearchConfigurationProperty {
    /**
    * The vector search dimension
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/neptunegraph_graph#vector_search_dimension CcGraph#vector_search_dimension}
    */
    readonly vectorSearchDimension?: number;
}
export class VectorSearchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VectorSearchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vectorSearchDimension !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorSearchDimension = this._vectorSearchDimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VectorSearchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vectorSearchDimension = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vectorSearchDimension = value.vectorSearchDimension;
        }
    }

    // vector_search_dimension - computed: true, optional: true, required: false
    private _vectorSearchDimension?: number; 
    public get vectorSearchDimension() {
        return this.getNumberAttribute('vector_search_dimension');
    }
    public set vectorSearchDimension(value: number) {
        this._vectorSearchDimension = value;
    }
    public resetVectorSearchDimension() {
        this._vectorSearchDimension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorSearchDimensionInput() {
        return this._vectorSearchDimension;
    }
}
}
