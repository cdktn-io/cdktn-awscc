// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGraphProps extends cdktn.TerraformMetaArguments {
    /**
    * Value that indicates whether the Graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
    * 
    * _Default_: If not specified, the default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection CcGraph#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * Contains a user-supplied name for the Graph. 
    * 
    * If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.
    * 
    * _Important_: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name CcGraph#graph_name}
    */
    readonly graphName?: string;
    /**
    * The details of the import task to use to create the graph. When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task CcGraph#import_task}
    */
    readonly importTask?: CcGraph.ImportTaskProperty;
    /**
    * The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. If not specified, the graph is encrypted with an AWS managed key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier CcGraph#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Memory for the Graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory CcGraph#provisioned_memory}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity CcGraph#public_connectivity}
    */
    readonly publicConnectivity?: boolean | cdktn.IResolvable;
    /**
    * Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.
    * 
    * Replica Count should always be less than or equal to 2.
    * 
    * _Default_: If not specified, the default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count CcGraph#replica_count}
    */
    readonly replicaCount?: number;
    /**
    * The tags associated with this graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags CcGraph#tags}
    */
    readonly tags?: CcGraph.TagProperty[] | cdktn.IResolvable;
    /**
    * Vector Search Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration CcGraph#vector_search_configuration}
    */
    readonly vectorSearchConfiguration?: CcGraph.VectorSearchConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}
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
    * @param importFromId The id of the existing CcGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGraph to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptunegraph_graph", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph} Resource
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
                providerVersion: '1.102.0'
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
        this._importTask.internalValue = config.importTask;
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

    // import_task - computed: true, optional: true, required: false
    private _importTask = new CcGraph.ImportTaskPropertyOutputReference(this, "import_task");
    public get importTask() {
        return this._importTask;
    }
    public putImportTask(value: CcGraph.ImportTaskProperty) {
        this._importTask.internalValue = value;
    }
    public resetImportTask() {
        this._importTask.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importTaskInput() {
        return this._importTask.internalValue;
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
            import_task: ccGraphImportTaskPropertyToTerraform(this._importTask.internalValue),
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
            import_task: {
                value: ccGraphImportTaskPropertyToHclTerraform(this._importTask.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraph.ImportTaskProperty",
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

export function ccGraphNeptunePropertyToTerraform(struct?: CcGraph.NeptuneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        preserve_default_vertex_labels: cdktn.booleanToTerraform(struct!.preserveDefaultVertexLabels),
        preserve_edge_ids: cdktn.booleanToTerraform(struct!.preserveEdgeIds),
        s3_export_kms_key_id: cdktn.stringToTerraform(struct!.s3ExportKmsKeyId),
        s3_export_path: cdktn.stringToTerraform(struct!.s3ExportPath),
    }
}


export function ccGraphNeptunePropertyToHclTerraform(struct?: CcGraph.NeptuneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        preserve_default_vertex_labels: {
            value: cdktn.booleanToHclTerraform(struct!.preserveDefaultVertexLabels),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_edge_ids: {
            value: cdktn.booleanToHclTerraform(struct!.preserveEdgeIds),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_export_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.s3ExportKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_export_path: {
            value: cdktn.stringToHclTerraform(struct!.s3ExportPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphImportOptionsPropertyToTerraform(struct?: CcGraph.ImportOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        neptune: ccGraphNeptunePropertyToTerraform(struct!.neptune),
    }
}


export function ccGraphImportOptionsPropertyToHclTerraform(struct?: CcGraph.ImportOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        neptune: {
            value: ccGraphNeptunePropertyToHclTerraform(struct!.neptune),
            isBlock: true,
            type: "struct",
            storageClassType: "NeptuneProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphImportTaskPropertyToTerraform(struct?: CcGraph.ImportTaskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        blank_node_handling: cdktn.stringToTerraform(struct!.blankNodeHandling),
        fail_on_error: cdktn.booleanToTerraform(struct!.failOnError),
        format: cdktn.stringToTerraform(struct!.format),
        import_options: ccGraphImportOptionsPropertyToTerraform(struct!.importOptions),
        max_provisioned_memory: cdktn.numberToTerraform(struct!.maxProvisionedMemory),
        min_provisioned_memory: cdktn.numberToTerraform(struct!.minProvisionedMemory),
        parquet_type: cdktn.stringToTerraform(struct!.parquetType),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        source: cdktn.stringToTerraform(struct!.source),
    }
}


export function ccGraphImportTaskPropertyToHclTerraform(struct?: CcGraph.ImportTaskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        blank_node_handling: {
            value: cdktn.stringToHclTerraform(struct!.blankNodeHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fail_on_error: {
            value: cdktn.booleanToHclTerraform(struct!.failOnError),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        import_options: {
            value: ccGraphImportOptionsPropertyToHclTerraform(struct!.importOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ImportOptionsProperty",
        },
        max_provisioned_memory: {
            value: cdktn.numberToHclTerraform(struct!.maxProvisionedMemory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_provisioned_memory: {
            value: cdktn.numberToHclTerraform(struct!.minProvisionedMemory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        parquet_type: {
            value: cdktn.stringToHclTerraform(struct!.parquetType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface NeptuneProperty {
    /**
    * Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels CcGraph#preserve_default_vertex_labels}
    */
    readonly preserveDefaultVertexLabels?: boolean | cdktn.IResolvable;
    /**
    * Neptune Analytics currently does not support user defined edge ids. The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids CcGraph#preserve_edge_ids}
    */
    readonly preserveEdgeIds?: boolean | cdktn.IResolvable;
    /**
    * The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id CcGraph#s3_export_kms_key_id}
    */
    readonly s3ExportKmsKeyId?: string;
    /**
    * The path to an S3 bucket from which to import data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path CcGraph#s3_export_path}
    */
    readonly s3ExportPath?: string;
}
export class NeptunePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NeptuneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._preserveDefaultVertexLabels !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveDefaultVertexLabels = this._preserveDefaultVertexLabels;
        }
        if (this._preserveEdgeIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveEdgeIds = this._preserveEdgeIds;
        }
        if (this._s3ExportKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ExportKmsKeyId = this._s3ExportKmsKeyId;
        }
        if (this._s3ExportPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ExportPath = this._s3ExportPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NeptuneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preserveDefaultVertexLabels = undefined;
            this._preserveEdgeIds = undefined;
            this._s3ExportKmsKeyId = undefined;
            this._s3ExportPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preserveDefaultVertexLabels = value.preserveDefaultVertexLabels;
            this._preserveEdgeIds = value.preserveEdgeIds;
            this._s3ExportKmsKeyId = value.s3ExportKmsKeyId;
            this._s3ExportPath = value.s3ExportPath;
        }
    }

    // preserve_default_vertex_labels - computed: true, optional: true, required: false
    private _preserveDefaultVertexLabels?: boolean | cdktn.IResolvable; 
    public get preserveDefaultVertexLabels() {
        return this.getBooleanAttribute('preserve_default_vertex_labels');
    }
    public set preserveDefaultVertexLabels(value: boolean | cdktn.IResolvable) {
        this._preserveDefaultVertexLabels = value;
    }
    public resetPreserveDefaultVertexLabels() {
        this._preserveDefaultVertexLabels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveDefaultVertexLabelsInput() {
        return this._preserveDefaultVertexLabels;
    }

    // preserve_edge_ids - computed: true, optional: true, required: false
    private _preserveEdgeIds?: boolean | cdktn.IResolvable; 
    public get preserveEdgeIds() {
        return this.getBooleanAttribute('preserve_edge_ids');
    }
    public set preserveEdgeIds(value: boolean | cdktn.IResolvable) {
        this._preserveEdgeIds = value;
    }
    public resetPreserveEdgeIds() {
        this._preserveEdgeIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveEdgeIdsInput() {
        return this._preserveEdgeIds;
    }

    // s3_export_kms_key_id - computed: true, optional: true, required: false
    private _s3ExportKmsKeyId?: string; 
    public get s3ExportKmsKeyId() {
        return this.getStringAttribute('s3_export_kms_key_id');
    }
    public set s3ExportKmsKeyId(value: string) {
        this._s3ExportKmsKeyId = value;
    }
    public resetS3ExportKmsKeyId() {
        this._s3ExportKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ExportKmsKeyIdInput() {
        return this._s3ExportKmsKeyId;
    }

    // s3_export_path - computed: true, optional: true, required: false
    private _s3ExportPath?: string; 
    public get s3ExportPath() {
        return this.getStringAttribute('s3_export_path');
    }
    public set s3ExportPath(value: string) {
        this._s3ExportPath = value;
    }
    public resetS3ExportPath() {
        this._s3ExportPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ExportPathInput() {
        return this._s3ExportPath;
    }
}
export interface ImportOptionsProperty {
    /**
    * Options for importing data from a Neptune database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune CcGraph#neptune}
    */
    readonly neptune?: NeptuneProperty;
}
export class ImportOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImportOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._neptune?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.neptune = this._neptune?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImportOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._neptune.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._neptune.internalValue = value.neptune;
        }
    }

    // neptune - computed: true, optional: true, required: false
    private _neptune = new NeptunePropertyOutputReference(this, "neptune");
    public get neptune() {
        return this._neptune;
    }
    public putNeptune(value: NeptuneProperty) {
        this._neptune.internalValue = value;
    }
    public resetNeptune() {
        this._neptune.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneInput() {
        return this._neptune.internalValue;
    }
}
export interface ImportTaskProperty {
    /**
    * The method to handle blank nodes in the dataset. Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling CcGraph#blank_node_handling}
    */
    readonly blankNodeHandling?: string;
    /**
    * If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error CcGraph#fail_on_error}
    */
    readonly failOnError?: boolean | cdktn.IResolvable;
    /**
    * Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format CcGraph#format}
    */
    readonly format?: string;
    /**
    * Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options CcGraph#import_options}
    */
    readonly importOptions?: ImportOptionsProperty;
    /**
    * The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory CcGraph#max_provisioned_memory}
    */
    readonly maxProvisionedMemory?: number;
    /**
    * The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory CcGraph#min_provisioned_memory}
    */
    readonly minProvisionedMemory?: number;
    /**
    * The parquet type of the import task. Required when Format is PARQUET.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type CcGraph#parquet_type}
    */
    readonly parquetType?: string;
    /**
    * The ARN of the IAM role that will allow access to the data that is to be imported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn CcGraph#role_arn}
    */
    readonly roleArn?: string;
    /**
    * A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source CcGraph#source}
    */
    readonly source?: string;
}
export class ImportTaskPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImportTaskProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blankNodeHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.blankNodeHandling = this._blankNodeHandling;
        }
        if (this._failOnError !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOnError = this._failOnError;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._importOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.importOptions = this._importOptions?.internalValue;
        }
        if (this._maxProvisionedMemory !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxProvisionedMemory = this._maxProvisionedMemory;
        }
        if (this._minProvisionedMemory !== undefined) {
            hasAnyValues = true;
            internalValueResult.minProvisionedMemory = this._minProvisionedMemory;
        }
        if (this._parquetType !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquetType = this._parquetType;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImportTaskProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blankNodeHandling = undefined;
            this._failOnError = undefined;
            this._format = undefined;
            this._importOptions.internalValue = undefined;
            this._maxProvisionedMemory = undefined;
            this._minProvisionedMemory = undefined;
            this._parquetType = undefined;
            this._roleArn = undefined;
            this._source = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blankNodeHandling = value.blankNodeHandling;
            this._failOnError = value.failOnError;
            this._format = value.format;
            this._importOptions.internalValue = value.importOptions;
            this._maxProvisionedMemory = value.maxProvisionedMemory;
            this._minProvisionedMemory = value.minProvisionedMemory;
            this._parquetType = value.parquetType;
            this._roleArn = value.roleArn;
            this._source = value.source;
        }
    }

    // blank_node_handling - computed: true, optional: true, required: false
    private _blankNodeHandling?: string; 
    public get blankNodeHandling() {
        return this.getStringAttribute('blank_node_handling');
    }
    public set blankNodeHandling(value: string) {
        this._blankNodeHandling = value;
    }
    public resetBlankNodeHandling() {
        this._blankNodeHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blankNodeHandlingInput() {
        return this._blankNodeHandling;
    }

    // fail_on_error - computed: true, optional: true, required: false
    private _failOnError?: boolean | cdktn.IResolvable; 
    public get failOnError() {
        return this.getBooleanAttribute('fail_on_error');
    }
    public set failOnError(value: boolean | cdktn.IResolvable) {
        this._failOnError = value;
    }
    public resetFailOnError() {
        this._failOnError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnErrorInput() {
        return this._failOnError;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // import_options - computed: true, optional: true, required: false
    private _importOptions = new ImportOptionsPropertyOutputReference(this, "import_options");
    public get importOptions() {
        return this._importOptions;
    }
    public putImportOptions(value: ImportOptionsProperty) {
        this._importOptions.internalValue = value;
    }
    public resetImportOptions() {
        this._importOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importOptionsInput() {
        return this._importOptions.internalValue;
    }

    // max_provisioned_memory - computed: true, optional: true, required: false
    private _maxProvisionedMemory?: number; 
    public get maxProvisionedMemory() {
        return this.getNumberAttribute('max_provisioned_memory');
    }
    public set maxProvisionedMemory(value: number) {
        this._maxProvisionedMemory = value;
    }
    public resetMaxProvisionedMemory() {
        this._maxProvisionedMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxProvisionedMemoryInput() {
        return this._maxProvisionedMemory;
    }

    // min_provisioned_memory - computed: true, optional: true, required: false
    private _minProvisionedMemory?: number; 
    public get minProvisionedMemory() {
        return this.getNumberAttribute('min_provisioned_memory');
    }
    public set minProvisionedMemory(value: number) {
        this._minProvisionedMemory = value;
    }
    public resetMinProvisionedMemory() {
        this._minProvisionedMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minProvisionedMemoryInput() {
        return this._minProvisionedMemory;
    }

    // parquet_type - computed: true, optional: true, required: false
    private _parquetType?: string; 
    public get parquetType() {
        return this.getStringAttribute('parquet_type');
    }
    public set parquetType(value: string) {
        this._parquetType = value;
    }
    public resetParquetType() {
        this._parquetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetTypeInput() {
        return this._parquetType;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#key CcGraph#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#value CcGraph#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension CcGraph#vector_search_dimension}
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
