// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * The deletion policy for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#data_deletion_policy CcDataSource#data_deletion_policy}
    */
    readonly dataDeletionPolicy?: string;
    /**
    * Specifies a raw data source location to ingest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#data_source_configuration CcDataSource#data_source_configuration}
    */
    readonly dataSourceConfiguration: CcDataSource.DataSourceConfigurationProperty;
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#description CcDataSource#description}
    */
    readonly description?: string;
    /**
    * The unique identifier of the knowledge base to which to add the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#knowledge_base_id CcDataSource#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * The name of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#name CcDataSource#name}
    */
    readonly name: string;
    /**
    * Contains details about the server-side encryption for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#server_side_encryption_configuration CcDataSource#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: CcDataSource.ServerSideEncryptionConfigurationProperty;
    /**
    * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#vector_ingestion_configuration CcDataSource#vector_ingestion_configuration}
    */
    readonly vectorIngestionConfiguration?: CcDataSource.VectorIngestionConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source awscc_bedrock_data_source}
*/
export class CcDataSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_data_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSource to import
    * @param importFromId The id of the existing CcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source awscc_bedrock_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcDataSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_data_source',
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
        this._dataDeletionPolicy = config.dataDeletionPolicy;
        this._dataSourceConfiguration.internalValue = config.dataSourceConfiguration;
        this._description = config.description;
        this._knowledgeBaseId = config.knowledgeBaseId;
        this._name = config.name;
        this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
        this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_deletion_policy - computed: true, optional: true, required: false
    private _dataDeletionPolicy?: string; 
    public get dataDeletionPolicy() {
        return this.getStringAttribute('data_deletion_policy');
    }
    public set dataDeletionPolicy(value: string) {
        this._dataDeletionPolicy = value;
    }
    public resetDataDeletionPolicy() {
        this._dataDeletionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataDeletionPolicyInput() {
        return this._dataDeletionPolicy;
    }

    // data_source_configuration - computed: false, optional: false, required: true
    private _dataSourceConfiguration = new CcDataSource.DataSourceConfigurationPropertyOutputReference(this, "data_source_configuration");
    public get dataSourceConfiguration() {
        return this._dataSourceConfiguration;
    }
    public putDataSourceConfiguration(value: CcDataSource.DataSourceConfigurationProperty) {
        this._dataSourceConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceConfigurationInput() {
        return this._dataSourceConfiguration.internalValue;
    }

    // data_source_id - computed: true, optional: false, required: false
    public get dataSourceId() {
        return this.getStringAttribute('data_source_id');
    }

    // data_source_status - computed: true, optional: false, required: false
    public get dataSourceStatus() {
        return this.getStringAttribute('data_source_status');
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

    // failure_reasons - computed: true, optional: false, required: false
    public get failureReasons() {
        return this.getListAttribute('failure_reasons');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_id - computed: false, optional: false, required: true
    private _knowledgeBaseId?: string; 
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }
    public set knowledgeBaseId(value: string) {
        this._knowledgeBaseId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseIdInput() {
        return this._knowledgeBaseId;
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

    // server_side_encryption_configuration - computed: true, optional: true, required: false
    private _serverSideEncryptionConfiguration = new CcDataSource.ServerSideEncryptionConfigurationPropertyOutputReference(this, "server_side_encryption_configuration");
    public get serverSideEncryptionConfiguration() {
        return this._serverSideEncryptionConfiguration;
    }
    public putServerSideEncryptionConfiguration(value: CcDataSource.ServerSideEncryptionConfigurationProperty) {
        this._serverSideEncryptionConfiguration.internalValue = value;
    }
    public resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // vector_ingestion_configuration - computed: true, optional: true, required: false
    private _vectorIngestionConfiguration = new CcDataSource.VectorIngestionConfigurationPropertyOutputReference(this, "vector_ingestion_configuration");
    public get vectorIngestionConfiguration() {
        return this._vectorIngestionConfiguration;
    }
    public putVectorIngestionConfiguration(value: CcDataSource.VectorIngestionConfigurationProperty) {
        this._vectorIngestionConfiguration.internalValue = value;
    }
    public resetVectorIngestionConfiguration() {
        this._vectorIngestionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorIngestionConfigurationInput() {
        return this._vectorIngestionConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_deletion_policy: cdktn.stringToTerraform(this._dataDeletionPolicy),
            data_source_configuration: ccDataSourceDataSourceConfigurationPropertyToTerraform(this._dataSourceConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
            name: cdktn.stringToTerraform(this._name),
            server_side_encryption_configuration: ccDataSourceServerSideEncryptionConfigurationPropertyToTerraform(this._serverSideEncryptionConfiguration.internalValue),
            vector_ingestion_configuration: ccDataSourceVectorIngestionConfigurationPropertyToTerraform(this._vectorIngestionConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_deletion_policy: {
                value: cdktn.stringToHclTerraform(this._dataDeletionPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source_configuration: {
                value: ccDataSourceDataSourceConfigurationPropertyToHclTerraform(this._dataSourceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            knowledge_base_id: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
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
            server_side_encryption_configuration: {
                value: ccDataSourceServerSideEncryptionConfigurationPropertyToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.ServerSideEncryptionConfigurationProperty",
            },
            vector_ingestion_configuration: {
                value: ccDataSourceVectorIngestionConfigurationPropertyToHclTerraform(this._vectorIngestionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.VectorIngestionConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSourcePatternObjectFilterPropertyToTerraform(struct?: CcDataSource.PatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
        inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
        object_type: cdktn.stringToTerraform(struct!.objectType),
    }
}


export function ccDataSourcePatternObjectFilterPropertyToHclTerraform(struct?: CcDataSource.PatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        inclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object_type: {
            value: cdktn.stringToHclTerraform(struct!.objectType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourcePatternObjectFilterConfigurationPropertyToTerraform(struct?: CcDataSource.PatternObjectFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccDataSourcePatternObjectFilterPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccDataSourcePatternObjectFilterConfigurationPropertyToHclTerraform(struct?: CcDataSource.PatternObjectFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccDataSourcePatternObjectFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "PatternObjectFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCrawlFilterConfigurationPropertyToTerraform(struct?: CcDataSource.CrawlFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern_object_filter: ccDataSourcePatternObjectFilterConfigurationPropertyToTerraform(struct!.patternObjectFilter),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceCrawlFilterConfigurationPropertyToHclTerraform(struct?: CcDataSource.CrawlFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern_object_filter: {
            value: ccDataSourcePatternObjectFilterConfigurationPropertyToHclTerraform(struct!.patternObjectFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "PatternObjectFilterConfigurationProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceConfluenceCrawlerConfigurationPropertyToTerraform(struct?: CcDataSource.ConfluenceCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccDataSourceCrawlFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
    }
}


export function ccDataSourceConfluenceCrawlerConfigurationPropertyToHclTerraform(struct?: CcDataSource.ConfluenceCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccDataSourceCrawlFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CrawlFilterConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceConfluenceSourceConfigurationPropertyToTerraform(struct?: CcDataSource.ConfluenceSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_type: cdktn.stringToTerraform(struct!.authType),
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        host_type: cdktn.stringToTerraform(struct!.hostType),
        host_url: cdktn.stringToTerraform(struct!.hostUrl),
    }
}


export function ccDataSourceConfluenceSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.ConfluenceSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_type: {
            value: cdktn.stringToHclTerraform(struct!.hostType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_url: {
            value: cdktn.stringToHclTerraform(struct!.hostUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceConfluenceDataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.ConfluenceDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_configuration: ccDataSourceConfluenceCrawlerConfigurationPropertyToTerraform(struct!.crawlerConfiguration),
        source_configuration: ccDataSourceConfluenceSourceConfigurationPropertyToTerraform(struct!.sourceConfiguration),
    }
}


export function ccDataSourceConfluenceDataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.ConfluenceDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_configuration: {
            value: ccDataSourceConfluenceCrawlerConfigurationPropertyToHclTerraform(struct!.crawlerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceCrawlerConfigurationProperty",
        },
        source_configuration: {
            value: ccDataSourceConfluenceSourceConfigurationPropertyToHclTerraform(struct!.sourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDeletionProtectionConfigurationPropertyToTerraform(struct?: CcDataSource.DeletionProtectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deletion_protection_status: cdktn.stringToTerraform(struct!.deletionProtectionStatus),
        deletion_protection_threshold: cdktn.numberToTerraform(struct!.deletionProtectionThreshold),
    }
}


export function ccDataSourceDeletionProtectionConfigurationPropertyToHclTerraform(struct?: CcDataSource.DeletionProtectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deletion_protection_status: {
            value: cdktn.stringToHclTerraform(struct!.deletionProtectionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        deletion_protection_threshold: {
            value: cdktn.numberToHclTerraform(struct!.deletionProtectionThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAudioExtractionConfigurationPropertyToTerraform(struct?: CcDataSource.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio_extraction_status: cdktn.stringToTerraform(struct!.audioExtractionStatus),
    }
}


export function ccDataSourceAudioExtractionConfigurationPropertyToHclTerraform(struct?: CcDataSource.AudioExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.audioExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceImageExtractionConfigurationPropertyToTerraform(struct?: CcDataSource.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_extraction_status: cdktn.stringToTerraform(struct!.imageExtractionStatus),
    }
}


export function ccDataSourceImageExtractionConfigurationPropertyToHclTerraform(struct?: CcDataSource.ImageExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.imageExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceVideoExtractionConfigurationPropertyToTerraform(struct?: CcDataSource.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        video_extraction_status: cdktn.stringToTerraform(struct!.videoExtractionStatus),
    }
}


export function ccDataSourceVideoExtractionConfigurationPropertyToHclTerraform(struct?: CcDataSource.VideoExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        video_extraction_status: {
            value: cdktn.stringToHclTerraform(struct!.videoExtractionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceMediaExtractionConfigurationPropertyToTerraform(struct?: CcDataSource.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio_extraction_configuration: ccDataSourceAudioExtractionConfigurationPropertyToTerraform(struct!.audioExtractionConfiguration),
        image_extraction_configuration: ccDataSourceImageExtractionConfigurationPropertyToTerraform(struct!.imageExtractionConfiguration),
        video_extraction_configuration: ccDataSourceVideoExtractionConfigurationPropertyToTerraform(struct!.videoExtractionConfiguration),
    }
}


export function ccDataSourceMediaExtractionConfigurationPropertyToHclTerraform(struct?: CcDataSource.MediaExtractionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio_extraction_configuration: {
            value: ccDataSourceAudioExtractionConfigurationPropertyToHclTerraform(struct!.audioExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioExtractionConfigurationProperty",
        },
        image_extraction_configuration: {
            value: ccDataSourceImageExtractionConfigurationPropertyToHclTerraform(struct!.imageExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageExtractionConfigurationProperty",
        },
        video_extraction_configuration: {
            value: ccDataSourceVideoExtractionConfigurationPropertyToHclTerraform(struct!.videoExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoExtractionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToTerraform(struct?: CcDataSource.ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_parameters: cdktn.stringToTerraform(struct!.connectorParameters),
        deletion_protection_configuration: ccDataSourceDeletionProtectionConfigurationPropertyToTerraform(struct!.deletionProtectionConfiguration),
        media_extraction_configuration: ccDataSourceMediaExtractionConfigurationPropertyToTerraform(struct!.mediaExtractionConfiguration),
    }
}


export function ccDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToHclTerraform(struct?: CcDataSource.ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_parameters: {
            value: cdktn.stringToHclTerraform(struct!.connectorParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        deletion_protection_configuration: {
            value: ccDataSourceDeletionProtectionConfigurationPropertyToHclTerraform(struct!.deletionProtectionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DeletionProtectionConfigurationProperty",
        },
        media_extraction_configuration: {
            value: ccDataSourceMediaExtractionConfigurationPropertyToHclTerraform(struct!.mediaExtractionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MediaExtractionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceS3DataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.S3DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
        inclusion_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPrefixes),
    }
}


export function ccDataSourceS3DataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.S3DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner_account_id: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inclusion_prefixes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPrefixes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
        inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
        object_type: cdktn.stringToTerraform(struct!.objectType),
    }
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        inclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object_type: {
            value: cdktn.stringToHclTerraform(struct!.objectType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern_object_filter: ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct!.patternObjectFilter),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern_object_filter: {
            value: ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct!.patternObjectFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSalesforceCrawlerConfigurationPropertyToTerraform(struct?: CcDataSource.SalesforceCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
    }
}


export function ccDataSourceSalesforceCrawlerConfigurationPropertyToHclTerraform(struct?: CcDataSource.SalesforceCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSalesforceSourceConfigurationPropertyToTerraform(struct?: CcDataSource.SalesforceSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_type: cdktn.stringToTerraform(struct!.authType),
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        host_url: cdktn.stringToTerraform(struct!.hostUrl),
    }
}


export function ccDataSourceSalesforceSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.SalesforceSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_url: {
            value: cdktn.stringToHclTerraform(struct!.hostUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSalesforceDataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.SalesforceDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_configuration: ccDataSourceSalesforceCrawlerConfigurationPropertyToTerraform(struct!.crawlerConfiguration),
        source_configuration: ccDataSourceSalesforceSourceConfigurationPropertyToTerraform(struct!.sourceConfiguration),
    }
}


export function ccDataSourceSalesforceDataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.SalesforceDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_configuration: {
            value: ccDataSourceSalesforceCrawlerConfigurationPropertyToHclTerraform(struct!.crawlerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceCrawlerConfigurationProperty",
        },
        source_configuration: {
            value: ccDataSourceSalesforceSourceConfigurationPropertyToHclTerraform(struct!.sourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
        inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
        object_type: cdktn.stringToTerraform(struct!.objectType),
    }
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        inclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        object_type: {
            value: cdktn.stringToHclTerraform(struct!.objectType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern_object_filter: ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToTerraform(struct!.patternObjectFilter),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern_object_filter: {
            value: ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyToHclTerraform(struct!.patternObjectFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSharePointCrawlerConfigurationPropertyToTerraform(struct?: CcDataSource.SharePointCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
    }
}


export function ccDataSourceSharePointCrawlerConfigurationPropertyToHclTerraform(struct?: CcDataSource.SharePointCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSharePointSourceConfigurationPropertyToTerraform(struct?: CcDataSource.SharePointSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_type: cdktn.stringToTerraform(struct!.authType),
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        domain: cdktn.stringToTerraform(struct!.domain),
        host_type: cdktn.stringToTerraform(struct!.hostType),
        site_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.siteUrls),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccDataSourceSharePointSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.SharePointSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_type: {
            value: cdktn.stringToHclTerraform(struct!.hostType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        site_urls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.siteUrls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSharePointDataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.SharePointDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_configuration: ccDataSourceSharePointCrawlerConfigurationPropertyToTerraform(struct!.crawlerConfiguration),
        source_configuration: ccDataSourceSharePointSourceConfigurationPropertyToTerraform(struct!.sourceConfiguration),
    }
}


export function ccDataSourceSharePointDataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.SharePointDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_configuration: {
            value: ccDataSourceSharePointCrawlerConfigurationPropertyToHclTerraform(struct!.crawlerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SharePointCrawlerConfigurationProperty",
        },
        source_configuration: {
            value: ccDataSourceSharePointSourceConfigurationPropertyToHclTerraform(struct!.sourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SharePointSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceWebCrawlerLimitsPropertyToTerraform(struct?: CcDataSource.WebCrawlerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_pages: cdktn.numberToTerraform(struct!.maxPages),
        rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
    }
}


export function ccDataSourceWebCrawlerLimitsPropertyToHclTerraform(struct?: CcDataSource.WebCrawlerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_pages: {
            value: cdktn.numberToHclTerraform(struct!.maxPages),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rate_limit: {
            value: cdktn.numberToHclTerraform(struct!.rateLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceWebCrawlerConfigurationPropertyToTerraform(struct?: CcDataSource.WebCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_limits: ccDataSourceWebCrawlerLimitsPropertyToTerraform(struct!.crawlerLimits),
        exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
        inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
        scope: cdktn.stringToTerraform(struct!.scope),
        user_agent: cdktn.stringToTerraform(struct!.userAgent),
    }
}


export function ccDataSourceWebCrawlerConfigurationPropertyToHclTerraform(struct?: CcDataSource.WebCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_limits: {
            value: ccDataSourceWebCrawlerLimitsPropertyToHclTerraform(struct!.crawlerLimits),
            isBlock: true,
            type: "struct",
            storageClassType: "WebCrawlerLimitsProperty",
        },
        exclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        inclusion_filters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_agent: {
            value: cdktn.stringToHclTerraform(struct!.userAgent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSeedUrlPropertyToTerraform(struct?: CcDataSource.SeedUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccDataSourceSeedUrlPropertyToHclTerraform(struct?: CcDataSource.SeedUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceUrlConfigurationPropertyToTerraform(struct?: CcDataSource.UrlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        seed_urls: cdktn.listMapper(ccDataSourceSeedUrlPropertyToTerraform, false)(struct!.seedUrls),
    }
}


export function ccDataSourceUrlConfigurationPropertyToHclTerraform(struct?: CcDataSource.UrlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        seed_urls: {
            value: cdktn.listMapperHcl(ccDataSourceSeedUrlPropertyToHclTerraform, false)(struct!.seedUrls),
            isBlock: true,
            type: "list",
            storageClassType: "SeedUrlPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceWebSourceConfigurationPropertyToTerraform(struct?: CcDataSource.WebSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        url_configuration: ccDataSourceUrlConfigurationPropertyToTerraform(struct!.urlConfiguration),
    }
}


export function ccDataSourceWebSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.WebSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        url_configuration: {
            value: ccDataSourceUrlConfigurationPropertyToHclTerraform(struct!.urlConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "UrlConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceWebDataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.WebDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_configuration: ccDataSourceWebCrawlerConfigurationPropertyToTerraform(struct!.crawlerConfiguration),
        source_configuration: ccDataSourceWebSourceConfigurationPropertyToTerraform(struct!.sourceConfiguration),
    }
}


export function ccDataSourceWebDataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.WebDataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_configuration: {
            value: ccDataSourceWebCrawlerConfigurationPropertyToHclTerraform(struct!.crawlerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WebCrawlerConfigurationProperty",
        },
        source_configuration: {
            value: ccDataSourceWebSourceConfigurationPropertyToHclTerraform(struct!.sourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WebSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        confluence_configuration: ccDataSourceConfluenceDataSourceConfigurationPropertyToTerraform(struct!.confluenceConfiguration),
        managed_knowledge_base_connector_configuration: ccDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToTerraform(struct!.managedKnowledgeBaseConnectorConfiguration),
        s3_configuration: ccDataSourceS3DataSourceConfigurationPropertyToTerraform(struct!.s3Configuration),
        salesforce_configuration: ccDataSourceSalesforceDataSourceConfigurationPropertyToTerraform(struct!.salesforceConfiguration),
        share_point_configuration: ccDataSourceSharePointDataSourceConfigurationPropertyToTerraform(struct!.sharePointConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
        web_configuration: ccDataSourceWebDataSourceConfigurationPropertyToTerraform(struct!.webConfiguration),
    }
}


export function ccDataSourceDataSourceConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        confluence_configuration: {
            value: ccDataSourceConfluenceDataSourceConfigurationPropertyToHclTerraform(struct!.confluenceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfluenceDataSourceConfigurationProperty",
        },
        managed_knowledge_base_connector_configuration: {
            value: ccDataSourceManagedKnowledgeBaseConnectorConfigurationPropertyToHclTerraform(struct!.managedKnowledgeBaseConnectorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedKnowledgeBaseConnectorConfigurationProperty",
        },
        s3_configuration: {
            value: ccDataSourceS3DataSourceConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DataSourceConfigurationProperty",
        },
        salesforce_configuration: {
            value: ccDataSourceSalesforceDataSourceConfigurationPropertyToHclTerraform(struct!.salesforceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceDataSourceConfigurationProperty",
        },
        share_point_configuration: {
            value: ccDataSourceSharePointDataSourceConfigurationPropertyToHclTerraform(struct!.sharePointConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SharePointDataSourceConfigurationProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_configuration: {
            value: ccDataSourceWebDataSourceConfigurationPropertyToHclTerraform(struct!.webConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WebDataSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceServerSideEncryptionConfigurationPropertyToTerraform(struct?: CcDataSource.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccDataSourceServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: CcDataSource.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceFixedSizeChunkingConfigurationPropertyToTerraform(struct?: CcDataSource.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        overlap_percentage: cdktn.numberToTerraform(struct!.overlapPercentage),
    }
}


export function ccDataSourceFixedSizeChunkingConfigurationPropertyToHclTerraform(struct?: CcDataSource.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        overlap_percentage: {
            value: cdktn.numberToHclTerraform(struct!.overlapPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceHierarchicalChunkingLevelConfigurationPropertyToTerraform(struct?: CcDataSource.HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    }
}


export function ccDataSourceHierarchicalChunkingLevelConfigurationPropertyToHclTerraform(struct?: CcDataSource.HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceHierarchicalChunkingConfigurationPropertyToTerraform(struct?: CcDataSource.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level_configurations: cdktn.listMapper(ccDataSourceHierarchicalChunkingLevelConfigurationPropertyToTerraform, false)(struct!.levelConfigurations),
        overlap_tokens: cdktn.numberToTerraform(struct!.overlapTokens),
    }
}


export function ccDataSourceHierarchicalChunkingConfigurationPropertyToHclTerraform(struct?: CcDataSource.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level_configurations: {
            value: cdktn.listMapperHcl(ccDataSourceHierarchicalChunkingLevelConfigurationPropertyToHclTerraform, false)(struct!.levelConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "HierarchicalChunkingLevelConfigurationPropertyList",
        },
        overlap_tokens: {
            value: cdktn.numberToHclTerraform(struct!.overlapTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSemanticChunkingConfigurationPropertyToTerraform(struct?: CcDataSource.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        breakpoint_percentile_threshold: cdktn.numberToTerraform(struct!.breakpointPercentileThreshold),
        buffer_size: cdktn.numberToTerraform(struct!.bufferSize),
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    }
}


export function ccDataSourceSemanticChunkingConfigurationPropertyToHclTerraform(struct?: CcDataSource.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        breakpoint_percentile_threshold: {
            value: cdktn.numberToHclTerraform(struct!.breakpointPercentileThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        buffer_size: {
            value: cdktn.numberToHclTerraform(struct!.bufferSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceChunkingConfigurationPropertyToTerraform(struct?: CcDataSource.ChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chunking_strategy: cdktn.stringToTerraform(struct!.chunkingStrategy),
        fixed_size_chunking_configuration: ccDataSourceFixedSizeChunkingConfigurationPropertyToTerraform(struct!.fixedSizeChunkingConfiguration),
        hierarchical_chunking_configuration: ccDataSourceHierarchicalChunkingConfigurationPropertyToTerraform(struct!.hierarchicalChunkingConfiguration),
        semantic_chunking_configuration: ccDataSourceSemanticChunkingConfigurationPropertyToTerraform(struct!.semanticChunkingConfiguration),
    }
}


export function ccDataSourceChunkingConfigurationPropertyToHclTerraform(struct?: CcDataSource.ChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        chunking_strategy: {
            value: cdktn.stringToHclTerraform(struct!.chunkingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fixed_size_chunking_configuration: {
            value: ccDataSourceFixedSizeChunkingConfigurationPropertyToHclTerraform(struct!.fixedSizeChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FixedSizeChunkingConfigurationProperty",
        },
        hierarchical_chunking_configuration: {
            value: ccDataSourceHierarchicalChunkingConfigurationPropertyToHclTerraform(struct!.hierarchicalChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HierarchicalChunkingConfigurationProperty",
        },
        semantic_chunking_configuration: {
            value: ccDataSourceSemanticChunkingConfigurationPropertyToHclTerraform(struct!.semanticChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticChunkingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceEnrichmentStrategyConfigurationPropertyToTerraform(struct?: CcDataSource.EnrichmentStrategyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        method: cdktn.stringToTerraform(struct!.method),
    }
}


export function ccDataSourceEnrichmentStrategyConfigurationPropertyToHclTerraform(struct?: CcDataSource.EnrichmentStrategyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        method: {
            value: cdktn.stringToHclTerraform(struct!.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceBedrockFoundationModelContextEnrichmentConfigurationPropertyToTerraform(struct?: CcDataSource.BedrockFoundationModelContextEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enrichment_strategy_configuration: ccDataSourceEnrichmentStrategyConfigurationPropertyToTerraform(struct!.enrichmentStrategyConfiguration),
        model_arn: cdktn.stringToTerraform(struct!.modelArn),
    }
}


export function ccDataSourceBedrockFoundationModelContextEnrichmentConfigurationPropertyToHclTerraform(struct?: CcDataSource.BedrockFoundationModelContextEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enrichment_strategy_configuration: {
            value: ccDataSourceEnrichmentStrategyConfigurationPropertyToHclTerraform(struct!.enrichmentStrategyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EnrichmentStrategyConfigurationProperty",
        },
        model_arn: {
            value: cdktn.stringToHclTerraform(struct!.modelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceContextEnrichmentConfigurationPropertyToTerraform(struct?: CcDataSource.ContextEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_foundation_model_configuration: ccDataSourceBedrockFoundationModelContextEnrichmentConfigurationPropertyToTerraform(struct!.bedrockFoundationModelConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceContextEnrichmentConfigurationPropertyToHclTerraform(struct?: CcDataSource.ContextEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_foundation_model_configuration: {
            value: ccDataSourceBedrockFoundationModelContextEnrichmentConfigurationPropertyToHclTerraform(struct!.bedrockFoundationModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "BedrockFoundationModelContextEnrichmentConfigurationProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceS3LocationPropertyToTerraform(struct?: CcDataSource.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccDataSourceS3LocationPropertyToHclTerraform(struct?: CcDataSource.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceIntermediateStoragePropertyToTerraform(struct?: CcDataSource.IntermediateStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_location: ccDataSourceS3LocationPropertyToTerraform(struct!.s3Location),
    }
}


export function ccDataSourceIntermediateStoragePropertyToHclTerraform(struct?: CcDataSource.IntermediateStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_location: {
            value: ccDataSourceS3LocationPropertyToHclTerraform(struct!.s3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTransformationLambdaConfigurationPropertyToTerraform(struct?: CcDataSource.TransformationLambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    }
}


export function ccDataSourceTransformationLambdaConfigurationPropertyToHclTerraform(struct?: CcDataSource.TransformationLambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTransformationFunctionPropertyToTerraform(struct?: CcDataSource.TransformationFunctionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        transformation_lambda_configuration: ccDataSourceTransformationLambdaConfigurationPropertyToTerraform(struct!.transformationLambdaConfiguration),
    }
}


export function ccDataSourceTransformationFunctionPropertyToHclTerraform(struct?: CcDataSource.TransformationFunctionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        transformation_lambda_configuration: {
            value: ccDataSourceTransformationLambdaConfigurationPropertyToHclTerraform(struct!.transformationLambdaConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformationLambdaConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceTransformationPropertyToTerraform(struct?: CcDataSource.TransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        step_to_apply: cdktn.stringToTerraform(struct!.stepToApply),
        transformation_function: ccDataSourceTransformationFunctionPropertyToTerraform(struct!.transformationFunction),
    }
}


export function ccDataSourceTransformationPropertyToHclTerraform(struct?: CcDataSource.TransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        step_to_apply: {
            value: cdktn.stringToHclTerraform(struct!.stepToApply),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transformation_function: {
            value: ccDataSourceTransformationFunctionPropertyToHclTerraform(struct!.transformationFunction),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformationFunctionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceCustomTransformationConfigurationPropertyToTerraform(struct?: CcDataSource.CustomTransformationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        intermediate_storage: ccDataSourceIntermediateStoragePropertyToTerraform(struct!.intermediateStorage),
        transformations: cdktn.listMapper(ccDataSourceTransformationPropertyToTerraform, false)(struct!.transformations),
    }
}


export function ccDataSourceCustomTransformationConfigurationPropertyToHclTerraform(struct?: CcDataSource.CustomTransformationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        intermediate_storage: {
            value: ccDataSourceIntermediateStoragePropertyToHclTerraform(struct!.intermediateStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateStorageProperty",
        },
        transformations: {
            value: cdktn.listMapperHcl(ccDataSourceTransformationPropertyToHclTerraform, false)(struct!.transformations),
            isBlock: true,
            type: "list",
            storageClassType: "TransformationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceBedrockDataAutomationConfigurationPropertyToTerraform(struct?: CcDataSource.BedrockDataAutomationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
    }
}


export function ccDataSourceBedrockDataAutomationConfigurationPropertyToHclTerraform(struct?: CcDataSource.BedrockDataAutomationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parsing_modality: {
            value: cdktn.stringToHclTerraform(struct!.parsingModality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceParsingPromptPropertyToTerraform(struct?: CcDataSource.ParsingPromptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parsing_prompt_text: cdktn.stringToTerraform(struct!.parsingPromptText),
    }
}


export function ccDataSourceParsingPromptPropertyToHclTerraform(struct?: CcDataSource.ParsingPromptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parsing_prompt_text: {
            value: cdktn.stringToHclTerraform(struct!.parsingPromptText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceBedrockFoundationModelConfigurationPropertyToTerraform(struct?: CcDataSource.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_arn: cdktn.stringToTerraform(struct!.modelArn),
        parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
        parsing_prompt: ccDataSourceParsingPromptPropertyToTerraform(struct!.parsingPrompt),
    }
}


export function ccDataSourceBedrockFoundationModelConfigurationPropertyToHclTerraform(struct?: CcDataSource.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_arn: {
            value: cdktn.stringToHclTerraform(struct!.modelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parsing_modality: {
            value: cdktn.stringToHclTerraform(struct!.parsingModality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parsing_prompt: {
            value: ccDataSourceParsingPromptPropertyToHclTerraform(struct!.parsingPrompt),
            isBlock: true,
            type: "struct",
            storageClassType: "ParsingPromptProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceParsingConfigurationPropertyToTerraform(struct?: CcDataSource.ParsingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_data_automation_configuration: ccDataSourceBedrockDataAutomationConfigurationPropertyToTerraform(struct!.bedrockDataAutomationConfiguration),
        bedrock_foundation_model_configuration: ccDataSourceBedrockFoundationModelConfigurationPropertyToTerraform(struct!.bedrockFoundationModelConfiguration),
        parsing_strategy: cdktn.stringToTerraform(struct!.parsingStrategy),
    }
}


export function ccDataSourceParsingConfigurationPropertyToHclTerraform(struct?: CcDataSource.ParsingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_data_automation_configuration: {
            value: ccDataSourceBedrockDataAutomationConfigurationPropertyToHclTerraform(struct!.bedrockDataAutomationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "BedrockDataAutomationConfigurationProperty",
        },
        bedrock_foundation_model_configuration: {
            value: ccDataSourceBedrockFoundationModelConfigurationPropertyToHclTerraform(struct!.bedrockFoundationModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "BedrockFoundationModelConfigurationProperty",
        },
        parsing_strategy: {
            value: cdktn.stringToHclTerraform(struct!.parsingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceVectorIngestionConfigurationPropertyToTerraform(struct?: CcDataSource.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chunking_configuration: ccDataSourceChunkingConfigurationPropertyToTerraform(struct!.chunkingConfiguration),
        context_enrichment_configuration: ccDataSourceContextEnrichmentConfigurationPropertyToTerraform(struct!.contextEnrichmentConfiguration),
        custom_transformation_configuration: ccDataSourceCustomTransformationConfigurationPropertyToTerraform(struct!.customTransformationConfiguration),
        parsing_configuration: ccDataSourceParsingConfigurationPropertyToTerraform(struct!.parsingConfiguration),
    }
}


export function ccDataSourceVectorIngestionConfigurationPropertyToHclTerraform(struct?: CcDataSource.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        chunking_configuration: {
            value: ccDataSourceChunkingConfigurationPropertyToHclTerraform(struct!.chunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ChunkingConfigurationProperty",
        },
        context_enrichment_configuration: {
            value: ccDataSourceContextEnrichmentConfigurationPropertyToHclTerraform(struct!.contextEnrichmentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContextEnrichmentConfigurationProperty",
        },
        custom_transformation_configuration: {
            value: ccDataSourceCustomTransformationConfigurationPropertyToHclTerraform(struct!.customTransformationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomTransformationConfigurationProperty",
        },
        parsing_configuration: {
            value: ccDataSourceParsingConfigurationPropertyToHclTerraform(struct!.parsingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ParsingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataSource {
export interface PatternObjectFilterProperty {
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#exclusion_filters CcDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#inclusion_filters CcDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * The supported object type or content type of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#object_type CcDataSource#object_type}
    */
    readonly objectType?: string;
}
export class PatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PatternObjectFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusionFilters = this._exclusionFilters;
        }
        if (this._inclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusionFilters = this._inclusionFilters;
        }
        if (this._objectType !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectType = this._objectType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PatternObjectFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusionFilters = undefined;
            this._inclusionFilters = undefined;
            this._objectType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusionFilters = value.exclusionFilters;
            this._inclusionFilters = value.inclusionFilters;
            this._objectType = value.objectType;
        }
    }

    // exclusion_filters - computed: true, optional: true, required: false
    private _exclusionFilters?: string[]; 
    public get exclusionFilters() {
        return this.getListAttribute('exclusion_filters');
    }
    public set exclusionFilters(value: string[]) {
        this._exclusionFilters = value;
    }
    public resetExclusionFilters() {
        this._exclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionFiltersInput() {
        return this._exclusionFilters;
    }

    // inclusion_filters - computed: true, optional: true, required: false
    private _inclusionFilters?: string[]; 
    public get inclusionFilters() {
        return this.getListAttribute('inclusion_filters');
    }
    public set inclusionFilters(value: string[]) {
        this._inclusionFilters = value;
    }
    public resetInclusionFilters() {
        this._inclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionFiltersInput() {
        return this._inclusionFilters;
    }

    // object_type - computed: true, optional: true, required: false
    private _objectType?: string; 
    public get objectType() {
        return this.getStringAttribute('object_type');
    }
    public set objectType(value: string) {
        this._objectType = value;
    }
    public resetObjectType() {
        this._objectType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeInput() {
        return this._objectType;
    }
}

export class PatternObjectFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : PatternObjectFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): PatternObjectFilterPropertyOutputReference {
        return new PatternObjectFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PatternObjectFilterConfigurationProperty {
    /**
    * Contains information
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filters CcDataSource#filters}
    */
    readonly filters?: PatternObjectFilterProperty[] | cdktn.IResolvable;
}
export class PatternObjectFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PatternObjectFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PatternObjectFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new PatternObjectFilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: PatternObjectFilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface CrawlFilterConfigurationProperty {
    /**
    * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#pattern_object_filter CcDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: PatternObjectFilterConfigurationProperty;
    /**
    * The crawl filter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class CrawlFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CrawlFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patternObjectFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrawlFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = value.patternObjectFilter;
            this._type = value.type;
        }
    }

    // pattern_object_filter - computed: true, optional: true, required: false
    private _patternObjectFilter = new PatternObjectFilterConfigurationPropertyOutputReference(this, "pattern_object_filter");
    public get patternObjectFilter() {
        return this._patternObjectFilter;
    }
    public putPatternObjectFilter(value: PatternObjectFilterConfigurationProperty) {
        this._patternObjectFilter.internalValue = value;
    }
    public resetPatternObjectFilter() {
        this._patternObjectFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternObjectFilterInput() {
        return this._patternObjectFilter.internalValue;
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
}
export interface ConfluenceCrawlerConfigurationProperty {
    /**
    * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filter_configuration CcDataSource#filter_configuration}
    */
    readonly filterConfiguration?: CrawlFilterConfigurationProperty;
}
export class ConfluenceCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new CrawlFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: CrawlFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }
}
export interface ConfluenceSourceConfigurationProperty {
    /**
    * The supported authentication type to authenticate and connect to your Confluence instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#auth_type CcDataSource#auth_type}
    */
    readonly authType?: string;
    /**
    * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#credentials_secret_arn CcDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * The supported host type, whether online/cloud or server/on-premises.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#host_type CcDataSource#host_type}
    */
    readonly hostType?: string;
    /**
    * The Confluence host URL or instance URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#host_url CcDataSource#host_url}
    */
    readonly hostUrl?: string;
}
export class ConfluenceSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._hostType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostType = this._hostType;
        }
        if (this._hostUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostUrl = this._hostUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authType = undefined;
            this._credentialsSecretArn = undefined;
            this._hostType = undefined;
            this._hostUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authType = value.authType;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._hostType = value.hostType;
            this._hostUrl = value.hostUrl;
        }
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // host_type - computed: true, optional: true, required: false
    private _hostType?: string; 
    public get hostType() {
        return this.getStringAttribute('host_type');
    }
    public set hostType(value: string) {
        this._hostType = value;
    }
    public resetHostType() {
        this._hostType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostTypeInput() {
        return this._hostType;
    }

    // host_url - computed: true, optional: true, required: false
    private _hostUrl?: string; 
    public get hostUrl() {
        return this.getStringAttribute('host_url');
    }
    public set hostUrl(value: string) {
        this._hostUrl = value;
    }
    public resetHostUrl() {
        this._hostUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostUrlInput() {
        return this._hostUrl;
    }
}
export interface ConfluenceDataSourceConfigurationProperty {
    /**
    * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#crawler_configuration CcDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: ConfluenceCrawlerConfigurationProperty;
    /**
    * The endpoint information to connect to your Confluence data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#source_configuration CcDataSource#source_configuration}
    */
    readonly sourceConfiguration?: ConfluenceSourceConfigurationProperty;
}
export class ConfluenceDataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfluenceDataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
        }
        if (this._sourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfluenceDataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = undefined;
            this._sourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
            this._sourceConfiguration.internalValue = value.sourceConfiguration;
        }
    }

    // crawler_configuration - computed: true, optional: true, required: false
    private _crawlerConfiguration = new ConfluenceCrawlerConfigurationPropertyOutputReference(this, "crawler_configuration");
    public get crawlerConfiguration() {
        return this._crawlerConfiguration;
    }
    public putCrawlerConfiguration(value: ConfluenceCrawlerConfigurationProperty) {
        this._crawlerConfiguration.internalValue = value;
    }
    public resetCrawlerConfiguration() {
        this._crawlerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerConfigurationInput() {
        return this._crawlerConfiguration.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new ConfluenceSourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: ConfluenceSourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
}
export interface DeletionProtectionConfigurationProperty {
    /**
    * Indicates whether a feature is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#deletion_protection_status CcDataSource#deletion_protection_status}
    */
    readonly deletionProtectionStatus?: string;
    /**
    * Threshold for deletion protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#deletion_protection_threshold CcDataSource#deletion_protection_threshold}
    */
    readonly deletionProtectionThreshold?: number;
}
export class DeletionProtectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeletionProtectionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deletionProtectionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletionProtectionStatus = this._deletionProtectionStatus;
        }
        if (this._deletionProtectionThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletionProtectionThreshold = this._deletionProtectionThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeletionProtectionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deletionProtectionStatus = undefined;
            this._deletionProtectionThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deletionProtectionStatus = value.deletionProtectionStatus;
            this._deletionProtectionThreshold = value.deletionProtectionThreshold;
        }
    }

    // deletion_protection_status - computed: true, optional: true, required: false
    private _deletionProtectionStatus?: string; 
    public get deletionProtectionStatus() {
        return this.getStringAttribute('deletion_protection_status');
    }
    public set deletionProtectionStatus(value: string) {
        this._deletionProtectionStatus = value;
    }
    public resetDeletionProtectionStatus() {
        this._deletionProtectionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionStatusInput() {
        return this._deletionProtectionStatus;
    }

    // deletion_protection_threshold - computed: true, optional: true, required: false
    private _deletionProtectionThreshold?: number; 
    public get deletionProtectionThreshold() {
        return this.getNumberAttribute('deletion_protection_threshold');
    }
    public set deletionProtectionThreshold(value: number) {
        this._deletionProtectionThreshold = value;
    }
    public resetDeletionProtectionThreshold() {
        this._deletionProtectionThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionThresholdInput() {
        return this._deletionProtectionThreshold;
    }
}
export interface AudioExtractionConfigurationProperty {
    /**
    * Indicates whether a feature is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#audio_extraction_status CcDataSource#audio_extraction_status}
    */
    readonly audioExtractionStatus?: string;
}
export class AudioExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audioExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioExtractionStatus = this._audioExtractionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audioExtractionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audioExtractionStatus = value.audioExtractionStatus;
        }
    }

    // audio_extraction_status - computed: true, optional: true, required: false
    private _audioExtractionStatus?: string; 
    public get audioExtractionStatus() {
        return this.getStringAttribute('audio_extraction_status');
    }
    public set audioExtractionStatus(value: string) {
        this._audioExtractionStatus = value;
    }
    public resetAudioExtractionStatus() {
        this._audioExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioExtractionStatusInput() {
        return this._audioExtractionStatus;
    }
}
export interface ImageExtractionConfigurationProperty {
    /**
    * Indicates whether a feature is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#image_extraction_status CcDataSource#image_extraction_status}
    */
    readonly imageExtractionStatus?: string;
}
export class ImageExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageExtractionStatus = this._imageExtractionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageExtractionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageExtractionStatus = value.imageExtractionStatus;
        }
    }

    // image_extraction_status - computed: true, optional: true, required: false
    private _imageExtractionStatus?: string; 
    public get imageExtractionStatus() {
        return this.getStringAttribute('image_extraction_status');
    }
    public set imageExtractionStatus(value: string) {
        this._imageExtractionStatus = value;
    }
    public resetImageExtractionStatus() {
        this._imageExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageExtractionStatusInput() {
        return this._imageExtractionStatus;
    }
}
export interface VideoExtractionConfigurationProperty {
    /**
    * Indicates whether a feature is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#video_extraction_status CcDataSource#video_extraction_status}
    */
    readonly videoExtractionStatus?: string;
}
export class VideoExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._videoExtractionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoExtractionStatus = this._videoExtractionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._videoExtractionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._videoExtractionStatus = value.videoExtractionStatus;
        }
    }

    // video_extraction_status - computed: true, optional: true, required: false
    private _videoExtractionStatus?: string; 
    public get videoExtractionStatus() {
        return this.getStringAttribute('video_extraction_status');
    }
    public set videoExtractionStatus(value: string) {
        this._videoExtractionStatus = value;
    }
    public resetVideoExtractionStatus() {
        this._videoExtractionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoExtractionStatusInput() {
        return this._videoExtractionStatus;
    }
}
export interface MediaExtractionConfigurationProperty {
    /**
    * Configuration for audio extraction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#audio_extraction_configuration CcDataSource#audio_extraction_configuration}
    */
    readonly audioExtractionConfiguration?: AudioExtractionConfigurationProperty;
    /**
    * Configuration for image extraction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#image_extraction_configuration CcDataSource#image_extraction_configuration}
    */
    readonly imageExtractionConfiguration?: ImageExtractionConfigurationProperty;
    /**
    * Configuration for video extraction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#video_extraction_configuration CcDataSource#video_extraction_configuration}
    */
    readonly videoExtractionConfiguration?: VideoExtractionConfigurationProperty;
}
export class MediaExtractionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audioExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioExtractionConfiguration = this._audioExtractionConfiguration?.internalValue;
        }
        if (this._imageExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageExtractionConfiguration = this._imageExtractionConfiguration?.internalValue;
        }
        if (this._videoExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoExtractionConfiguration = this._videoExtractionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaExtractionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audioExtractionConfiguration.internalValue = undefined;
            this._imageExtractionConfiguration.internalValue = undefined;
            this._videoExtractionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audioExtractionConfiguration.internalValue = value.audioExtractionConfiguration;
            this._imageExtractionConfiguration.internalValue = value.imageExtractionConfiguration;
            this._videoExtractionConfiguration.internalValue = value.videoExtractionConfiguration;
        }
    }

    // audio_extraction_configuration - computed: true, optional: true, required: false
    private _audioExtractionConfiguration = new AudioExtractionConfigurationPropertyOutputReference(this, "audio_extraction_configuration");
    public get audioExtractionConfiguration() {
        return this._audioExtractionConfiguration;
    }
    public putAudioExtractionConfiguration(value: AudioExtractionConfigurationProperty) {
        this._audioExtractionConfiguration.internalValue = value;
    }
    public resetAudioExtractionConfiguration() {
        this._audioExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioExtractionConfigurationInput() {
        return this._audioExtractionConfiguration.internalValue;
    }

    // image_extraction_configuration - computed: true, optional: true, required: false
    private _imageExtractionConfiguration = new ImageExtractionConfigurationPropertyOutputReference(this, "image_extraction_configuration");
    public get imageExtractionConfiguration() {
        return this._imageExtractionConfiguration;
    }
    public putImageExtractionConfiguration(value: ImageExtractionConfigurationProperty) {
        this._imageExtractionConfiguration.internalValue = value;
    }
    public resetImageExtractionConfiguration() {
        this._imageExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageExtractionConfigurationInput() {
        return this._imageExtractionConfiguration.internalValue;
    }

    // video_extraction_configuration - computed: true, optional: true, required: false
    private _videoExtractionConfiguration = new VideoExtractionConfigurationPropertyOutputReference(this, "video_extraction_configuration");
    public get videoExtractionConfiguration() {
        return this._videoExtractionConfiguration;
    }
    public putVideoExtractionConfiguration(value: VideoExtractionConfigurationProperty) {
        this._videoExtractionConfiguration.internalValue = value;
    }
    public resetVideoExtractionConfiguration() {
        this._videoExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoExtractionConfigurationInput() {
        return this._videoExtractionConfiguration.internalValue;
    }
}
export interface ManagedKnowledgeBaseConnectorConfigurationProperty {
    /**
    * Connector-specific parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#connector_parameters CcDataSource#connector_parameters}
    */
    readonly connectorParameters?: string;
    /**
    * Configuration for deletion protection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#deletion_protection_configuration CcDataSource#deletion_protection_configuration}
    */
    readonly deletionProtectionConfiguration?: DeletionProtectionConfigurationProperty;
    /**
    * Configuration for media extraction settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#media_extraction_configuration CcDataSource#media_extraction_configuration}
    */
    readonly mediaExtractionConfiguration?: MediaExtractionConfigurationProperty;
}
export class ManagedKnowledgeBaseConnectorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorParameters = this._connectorParameters;
        }
        if (this._deletionProtectionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletionProtectionConfiguration = this._deletionProtectionConfiguration?.internalValue;
        }
        if (this._mediaExtractionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaExtractionConfiguration = this._mediaExtractionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedKnowledgeBaseConnectorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorParameters = undefined;
            this._deletionProtectionConfiguration.internalValue = undefined;
            this._mediaExtractionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorParameters = value.connectorParameters;
            this._deletionProtectionConfiguration.internalValue = value.deletionProtectionConfiguration;
            this._mediaExtractionConfiguration.internalValue = value.mediaExtractionConfiguration;
        }
    }

    // connector_parameters - computed: true, optional: true, required: false
    private _connectorParameters?: string; 
    public get connectorParameters() {
        return this.getStringAttribute('connector_parameters');
    }
    public set connectorParameters(value: string) {
        this._connectorParameters = value;
    }
    public resetConnectorParameters() {
        this._connectorParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorParametersInput() {
        return this._connectorParameters;
    }

    // deletion_protection_configuration - computed: true, optional: true, required: false
    private _deletionProtectionConfiguration = new DeletionProtectionConfigurationPropertyOutputReference(this, "deletion_protection_configuration");
    public get deletionProtectionConfiguration() {
        return this._deletionProtectionConfiguration;
    }
    public putDeletionProtectionConfiguration(value: DeletionProtectionConfigurationProperty) {
        this._deletionProtectionConfiguration.internalValue = value;
    }
    public resetDeletionProtectionConfiguration() {
        this._deletionProtectionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionConfigurationInput() {
        return this._deletionProtectionConfiguration.internalValue;
    }

    // media_extraction_configuration - computed: true, optional: true, required: false
    private _mediaExtractionConfiguration = new MediaExtractionConfigurationPropertyOutputReference(this, "media_extraction_configuration");
    public get mediaExtractionConfiguration() {
        return this._mediaExtractionConfiguration;
    }
    public putMediaExtractionConfiguration(value: MediaExtractionConfigurationProperty) {
        this._mediaExtractionConfiguration.internalValue = value;
    }
    public resetMediaExtractionConfiguration() {
        this._mediaExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaExtractionConfigurationInput() {
        return this._mediaExtractionConfiguration.internalValue;
    }
}
export interface S3DataSourceConfigurationProperty {
    /**
    * The ARN of the bucket that contains the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#bucket_arn CcDataSource#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * The account ID for the owner of the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#bucket_owner_account_id CcDataSource#bucket_owner_account_id}
    */
    readonly bucketOwnerAccountId?: string;
    /**
    * A list of S3 prefixes that define the object containing the data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#inclusion_prefixes CcDataSource#inclusion_prefixes}
    */
    readonly inclusionPrefixes?: string[];
}
export class S3DataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bucketOwnerAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
        }
        if (this._inclusionPrefixes !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._bucketOwnerAccountId = undefined;
            this._inclusionPrefixes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._bucketOwnerAccountId = value.bucketOwnerAccountId;
            this._inclusionPrefixes = value.inclusionPrefixes;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // bucket_owner_account_id - computed: true, optional: true, required: false
    private _bucketOwnerAccountId?: string; 
    public get bucketOwnerAccountId() {
        return this.getStringAttribute('bucket_owner_account_id');
    }
    public set bucketOwnerAccountId(value: string) {
        this._bucketOwnerAccountId = value;
    }
    public resetBucketOwnerAccountId() {
        this._bucketOwnerAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerAccountIdInput() {
        return this._bucketOwnerAccountId;
    }

    // inclusion_prefixes - computed: true, optional: true, required: false
    private _inclusionPrefixes?: string[]; 
    public get inclusionPrefixes() {
        return this.getListAttribute('inclusion_prefixes');
    }
    public set inclusionPrefixes(value: string[]) {
        this._inclusionPrefixes = value;
    }
    public resetInclusionPrefixes() {
        this._inclusionPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionPrefixesInput() {
        return this._inclusionPrefixes;
    }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty {
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#exclusion_filters CcDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#inclusion_filters CcDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * The supported object type or content type of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#object_type CcDataSource#object_type}
    */
    readonly objectType?: string;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusionFilters = this._exclusionFilters;
        }
        if (this._inclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusionFilters = this._inclusionFilters;
        }
        if (this._objectType !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectType = this._objectType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusionFilters = undefined;
            this._inclusionFilters = undefined;
            this._objectType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusionFilters = value.exclusionFilters;
            this._inclusionFilters = value.inclusionFilters;
            this._objectType = value.objectType;
        }
    }

    // exclusion_filters - computed: true, optional: true, required: false
    private _exclusionFilters?: string[]; 
    public get exclusionFilters() {
        return this.getListAttribute('exclusion_filters');
    }
    public set exclusionFilters(value: string[]) {
        this._exclusionFilters = value;
    }
    public resetExclusionFilters() {
        this._exclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionFiltersInput() {
        return this._exclusionFilters;
    }

    // inclusion_filters - computed: true, optional: true, required: false
    private _inclusionFilters?: string[]; 
    public get inclusionFilters() {
        return this.getListAttribute('inclusion_filters');
    }
    public set inclusionFilters(value: string[]) {
        this._inclusionFilters = value;
    }
    public resetInclusionFilters() {
        this._inclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionFiltersInput() {
        return this._inclusionFilters;
    }

    // object_type - computed: true, optional: true, required: false
    private _objectType?: string; 
    public get objectType() {
        return this.getStringAttribute('object_type');
    }
    public set objectType(value: string) {
        this._objectType = value;
    }
    public resetObjectType() {
        this._objectType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeInput() {
        return this._objectType;
    }
}

export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference {
        return new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty {
    /**
    * Contains information
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filters CcDataSource#filters}
    */
    readonly filters?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty {
    /**
    * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#pattern_object_filter CcDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty;
    /**
    * The crawl filter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patternObjectFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = value.patternObjectFilter;
            this._type = value.type;
        }
    }

    // pattern_object_filter - computed: true, optional: true, required: false
    private _patternObjectFilter = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference(this, "pattern_object_filter");
    public get patternObjectFilter() {
        return this._patternObjectFilter;
    }
    public putPatternObjectFilter(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty) {
        this._patternObjectFilter.internalValue = value;
    }
    public resetPatternObjectFilter() {
        this._patternObjectFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternObjectFilterInput() {
        return this._patternObjectFilter.internalValue;
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
}
export interface SalesforceCrawlerConfigurationProperty {
    /**
    * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filter_configuration CcDataSource#filter_configuration}
    */
    readonly filterConfiguration?: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty;
}
export class SalesforceCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: DataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }
}
export interface SalesforceSourceConfigurationProperty {
    /**
    * The supported authentication type to authenticate and connect to your Salesforce instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#auth_type CcDataSource#auth_type}
    */
    readonly authType?: string;
    /**
    * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#credentials_secret_arn CcDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * The Salesforce host URL or instance URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#host_url CcDataSource#host_url}
    */
    readonly hostUrl?: string;
}
export class SalesforceSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._hostUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostUrl = this._hostUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authType = undefined;
            this._credentialsSecretArn = undefined;
            this._hostUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authType = value.authType;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._hostUrl = value.hostUrl;
        }
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // host_url - computed: true, optional: true, required: false
    private _hostUrl?: string; 
    public get hostUrl() {
        return this.getStringAttribute('host_url');
    }
    public set hostUrl(value: string) {
        this._hostUrl = value;
    }
    public resetHostUrl() {
        this._hostUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostUrlInput() {
        return this._hostUrl;
    }
}
export interface SalesforceDataSourceConfigurationProperty {
    /**
    * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#crawler_configuration CcDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: SalesforceCrawlerConfigurationProperty;
    /**
    * The endpoint information to connect to your Salesforce data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#source_configuration CcDataSource#source_configuration}
    */
    readonly sourceConfiguration?: SalesforceSourceConfigurationProperty;
}
export class SalesforceDataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceDataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
        }
        if (this._sourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceDataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = undefined;
            this._sourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
            this._sourceConfiguration.internalValue = value.sourceConfiguration;
        }
    }

    // crawler_configuration - computed: true, optional: true, required: false
    private _crawlerConfiguration = new SalesforceCrawlerConfigurationPropertyOutputReference(this, "crawler_configuration");
    public get crawlerConfiguration() {
        return this._crawlerConfiguration;
    }
    public putCrawlerConfiguration(value: SalesforceCrawlerConfigurationProperty) {
        this._crawlerConfiguration.internalValue = value;
    }
    public resetCrawlerConfiguration() {
        this._crawlerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerConfigurationInput() {
        return this._crawlerConfiguration.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new SalesforceSourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: SalesforceSourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty {
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#exclusion_filters CcDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#inclusion_filters CcDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * The supported object type or content type of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#object_type CcDataSource#object_type}
    */
    readonly objectType?: string;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusionFilters = this._exclusionFilters;
        }
        if (this._inclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusionFilters = this._inclusionFilters;
        }
        if (this._objectType !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectType = this._objectType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusionFilters = undefined;
            this._inclusionFilters = undefined;
            this._objectType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusionFilters = value.exclusionFilters;
            this._inclusionFilters = value.inclusionFilters;
            this._objectType = value.objectType;
        }
    }

    // exclusion_filters - computed: true, optional: true, required: false
    private _exclusionFilters?: string[]; 
    public get exclusionFilters() {
        return this.getListAttribute('exclusion_filters');
    }
    public set exclusionFilters(value: string[]) {
        this._exclusionFilters = value;
    }
    public resetExclusionFilters() {
        this._exclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionFiltersInput() {
        return this._exclusionFilters;
    }

    // inclusion_filters - computed: true, optional: true, required: false
    private _inclusionFilters?: string[]; 
    public get inclusionFilters() {
        return this.getListAttribute('inclusion_filters');
    }
    public set inclusionFilters(value: string[]) {
        this._inclusionFilters = value;
    }
    public resetInclusionFilters() {
        this._inclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionFiltersInput() {
        return this._inclusionFilters;
    }

    // object_type - computed: true, optional: true, required: false
    private _objectType?: string; 
    public get objectType() {
        return this.getStringAttribute('object_type');
    }
    public set objectType(value: string) {
        this._objectType = value;
    }
    public resetObjectType() {
        this._objectType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTypeInput() {
        return this._objectType;
    }
}

export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference {
        return new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty {
    /**
    * Contains information
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filters CcDataSource#filters}
    */
    readonly filters?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty {
    /**
    * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#pattern_object_filter CcDataSource#pattern_object_filter}
    */
    readonly patternObjectFilter?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty;
    /**
    * The crawl filter type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._patternObjectFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._patternObjectFilter.internalValue = value.patternObjectFilter;
            this._type = value.type;
        }
    }

    // pattern_object_filter - computed: true, optional: true, required: false
    private _patternObjectFilter = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterPropertyOutputReference(this, "pattern_object_filter");
    public get patternObjectFilter() {
        return this._patternObjectFilter;
    }
    public putPatternObjectFilter(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterProperty) {
        this._patternObjectFilter.internalValue = value;
    }
    public resetPatternObjectFilter() {
        this._patternObjectFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternObjectFilterInput() {
        return this._patternObjectFilter.internalValue;
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
}
export interface SharePointCrawlerConfigurationProperty {
    /**
    * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#filter_configuration CcDataSource#filter_configuration}
    */
    readonly filterConfiguration?: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty;
}
export class SharePointCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharePointCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharePointCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: DataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }
}
export interface SharePointSourceConfigurationProperty {
    /**
    * The supported authentication type to authenticate and connect to your SharePoint site/sites.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#auth_type CcDataSource#auth_type}
    */
    readonly authType?: string;
    /**
    * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#credentials_secret_arn CcDataSource#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * The domain of your SharePoint instance or site URL/URLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#domain CcDataSource#domain}
    */
    readonly domain?: string;
    /**
    * The supported host type, whether online/cloud or server/on-premises.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#host_type CcDataSource#host_type}
    */
    readonly hostType?: string;
    /**
    * A list of one or more SharePoint site URLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#site_urls CcDataSource#site_urls}
    */
    readonly siteUrls?: string[];
    /**
    * The identifier of your Microsoft 365 tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#tenant_id CcDataSource#tenant_id}
    */
    readonly tenantId?: string;
}
export class SharePointSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharePointSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._hostType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostType = this._hostType;
        }
        if (this._siteUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.siteUrls = this._siteUrls;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharePointSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authType = undefined;
            this._credentialsSecretArn = undefined;
            this._domain = undefined;
            this._hostType = undefined;
            this._siteUrls = undefined;
            this._tenantId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authType = value.authType;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._domain = value.domain;
            this._hostType = value.hostType;
            this._siteUrls = value.siteUrls;
            this._tenantId = value.tenantId;
        }
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // host_type - computed: true, optional: true, required: false
    private _hostType?: string; 
    public get hostType() {
        return this.getStringAttribute('host_type');
    }
    public set hostType(value: string) {
        this._hostType = value;
    }
    public resetHostType() {
        this._hostType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostTypeInput() {
        return this._hostType;
    }

    // site_urls - computed: true, optional: true, required: false
    private _siteUrls?: string[]; 
    public get siteUrls() {
        return this.getListAttribute('site_urls');
    }
    public set siteUrls(value: string[]) {
        this._siteUrls = value;
    }
    public resetSiteUrls() {
        this._siteUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get siteUrlsInput() {
        return this._siteUrls;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface SharePointDataSourceConfigurationProperty {
    /**
    * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#crawler_configuration CcDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: SharePointCrawlerConfigurationProperty;
    /**
    * The endpoint information to connect to your SharePoint data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#source_configuration CcDataSource#source_configuration}
    */
    readonly sourceConfiguration?: SharePointSourceConfigurationProperty;
}
export class SharePointDataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharePointDataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
        }
        if (this._sourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharePointDataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = undefined;
            this._sourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
            this._sourceConfiguration.internalValue = value.sourceConfiguration;
        }
    }

    // crawler_configuration - computed: true, optional: true, required: false
    private _crawlerConfiguration = new SharePointCrawlerConfigurationPropertyOutputReference(this, "crawler_configuration");
    public get crawlerConfiguration() {
        return this._crawlerConfiguration;
    }
    public putCrawlerConfiguration(value: SharePointCrawlerConfigurationProperty) {
        this._crawlerConfiguration.internalValue = value;
    }
    public resetCrawlerConfiguration() {
        this._crawlerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerConfigurationInput() {
        return this._crawlerConfiguration.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new SharePointSourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: SharePointSourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
}
export interface WebCrawlerLimitsProperty {
    /**
    * Maximum number of pages the crawler can crawl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#max_pages CcDataSource#max_pages}
    */
    readonly maxPages?: number;
    /**
    * Rate of web URLs retrieved per minute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#rate_limit CcDataSource#rate_limit}
    */
    readonly rateLimit?: number;
}
export class WebCrawlerLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebCrawlerLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxPages !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPages = this._maxPages;
        }
        if (this._rateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebCrawlerLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxPages = undefined;
            this._rateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxPages = value.maxPages;
            this._rateLimit = value.rateLimit;
        }
    }

    // max_pages - computed: true, optional: true, required: false
    private _maxPages?: number; 
    public get maxPages() {
        return this.getNumberAttribute('max_pages');
    }
    public set maxPages(value: number) {
        this._maxPages = value;
    }
    public resetMaxPages() {
        this._maxPages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPagesInput() {
        return this._maxPages;
    }

    // rate_limit - computed: true, optional: true, required: false
    private _rateLimit?: number; 
    public get rateLimit() {
        return this.getNumberAttribute('rate_limit');
    }
    public set rateLimit(value: number) {
        this._rateLimit = value;
    }
    public resetRateLimit() {
        this._rateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitInput() {
        return this._rateLimit;
    }
}
export interface WebCrawlerConfigurationProperty {
    /**
    * Limit settings for the web crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#crawler_limits CcDataSource#crawler_limits}
    */
    readonly crawlerLimits?: WebCrawlerLimitsProperty;
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#exclusion_filters CcDataSource#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * A set of regular expression filter patterns for a type of object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#inclusion_filters CcDataSource#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * The scope that a web crawl job will be restricted to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#scope CcDataSource#scope}
    */
    readonly scope?: string;
    /**
    * The suffix that will be included in the user agent header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#user_agent CcDataSource#user_agent}
    */
    readonly userAgent?: string;
}
export class WebCrawlerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebCrawlerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlerLimits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerLimits = this._crawlerLimits?.internalValue;
        }
        if (this._exclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusionFilters = this._exclusionFilters;
        }
        if (this._inclusionFilters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusionFilters = this._inclusionFilters;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._userAgent !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAgent = this._userAgent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebCrawlerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlerLimits.internalValue = undefined;
            this._exclusionFilters = undefined;
            this._inclusionFilters = undefined;
            this._scope = undefined;
            this._userAgent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlerLimits.internalValue = value.crawlerLimits;
            this._exclusionFilters = value.exclusionFilters;
            this._inclusionFilters = value.inclusionFilters;
            this._scope = value.scope;
            this._userAgent = value.userAgent;
        }
    }

    // crawler_limits - computed: true, optional: true, required: false
    private _crawlerLimits = new WebCrawlerLimitsPropertyOutputReference(this, "crawler_limits");
    public get crawlerLimits() {
        return this._crawlerLimits;
    }
    public putCrawlerLimits(value: WebCrawlerLimitsProperty) {
        this._crawlerLimits.internalValue = value;
    }
    public resetCrawlerLimits() {
        this._crawlerLimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerLimitsInput() {
        return this._crawlerLimits.internalValue;
    }

    // exclusion_filters - computed: true, optional: true, required: false
    private _exclusionFilters?: string[]; 
    public get exclusionFilters() {
        return this.getListAttribute('exclusion_filters');
    }
    public set exclusionFilters(value: string[]) {
        this._exclusionFilters = value;
    }
    public resetExclusionFilters() {
        this._exclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionFiltersInput() {
        return this._exclusionFilters;
    }

    // inclusion_filters - computed: true, optional: true, required: false
    private _inclusionFilters?: string[]; 
    public get inclusionFilters() {
        return this.getListAttribute('inclusion_filters');
    }
    public set inclusionFilters(value: string[]) {
        this._inclusionFilters = value;
    }
    public resetInclusionFilters() {
        this._inclusionFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionFiltersInput() {
        return this._inclusionFilters;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // user_agent - computed: true, optional: true, required: false
    private _userAgent?: string; 
    public get userAgent() {
        return this.getStringAttribute('user_agent');
    }
    public set userAgent(value: string) {
        this._userAgent = value;
    }
    public resetUserAgent() {
        this._userAgent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAgentInput() {
        return this._userAgent;
    }

    // user_agent_header - computed: true, optional: false, required: false
    public get userAgentHeader() {
        return this.getStringAttribute('user_agent_header');
    }
}
export interface SeedUrlProperty {
    /**
    * A web url.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#url CcDataSource#url}
    */
    readonly url?: string;
}
export class SeedUrlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SeedUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SeedUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._url = value.url;
        }
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}

export class SeedUrlPropertyList extends cdktn.ComplexList {
    public internalValue? : SeedUrlProperty[] | cdktn.IResolvable

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
    public get(index: number): SeedUrlPropertyOutputReference {
        return new SeedUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UrlConfigurationProperty {
    /**
    * A list of web urls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#seed_urls CcDataSource#seed_urls}
    */
    readonly seedUrls?: SeedUrlProperty[] | cdktn.IResolvable;
}
export class UrlConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UrlConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._seedUrls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.seedUrls = this._seedUrls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UrlConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._seedUrls.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._seedUrls.internalValue = value.seedUrls;
        }
    }

    // seed_urls - computed: true, optional: true, required: false
    private _seedUrls = new SeedUrlPropertyList(this, "seed_urls", false);
    public get seedUrls() {
        return this._seedUrls;
    }
    public putSeedUrls(value: SeedUrlProperty[] | cdktn.IResolvable) {
        this._seedUrls.internalValue = value;
    }
    public resetSeedUrls() {
        this._seedUrls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedUrlsInput() {
        return this._seedUrls.internalValue;
    }
}
export interface WebSourceConfigurationProperty {
    /**
    * A url configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#url_configuration CcDataSource#url_configuration}
    */
    readonly urlConfiguration?: UrlConfigurationProperty;
}
export class WebSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._urlConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._urlConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._urlConfiguration.internalValue = value.urlConfiguration;
        }
    }

    // url_configuration - computed: true, optional: true, required: false
    private _urlConfiguration = new UrlConfigurationPropertyOutputReference(this, "url_configuration");
    public get urlConfiguration() {
        return this._urlConfiguration;
    }
    public putUrlConfiguration(value: UrlConfigurationProperty) {
        this._urlConfiguration.internalValue = value;
    }
    public resetUrlConfiguration() {
        this._urlConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlConfigurationInput() {
        return this._urlConfiguration.internalValue;
    }
}
export interface WebDataSourceConfigurationProperty {
    /**
    * Configuration for the web crawler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#crawler_configuration CcDataSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: WebCrawlerConfigurationProperty;
    /**
    * A web source configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#source_configuration CcDataSource#source_configuration}
    */
    readonly sourceConfiguration?: WebSourceConfigurationProperty;
}
export class WebDataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebDataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
        }
        if (this._sourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebDataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = undefined;
            this._sourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
            this._sourceConfiguration.internalValue = value.sourceConfiguration;
        }
    }

    // crawler_configuration - computed: true, optional: true, required: false
    private _crawlerConfiguration = new WebCrawlerConfigurationPropertyOutputReference(this, "crawler_configuration");
    public get crawlerConfiguration() {
        return this._crawlerConfiguration;
    }
    public putCrawlerConfiguration(value: WebCrawlerConfigurationProperty) {
        this._crawlerConfiguration.internalValue = value;
    }
    public resetCrawlerConfiguration() {
        this._crawlerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerConfigurationInput() {
        return this._crawlerConfiguration.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new WebSourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: WebSourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
}
export interface DataSourceConfigurationProperty {
    /**
    * The configuration information to connect to Confluence as your data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#confluence_configuration CcDataSource#confluence_configuration}
    */
    readonly confluenceConfiguration?: ConfluenceDataSourceConfigurationProperty;
    /**
    * Configuration for managed knowledge base connector data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#managed_knowledge_base_connector_configuration CcDataSource#managed_knowledge_base_connector_configuration}
    */
    readonly managedKnowledgeBaseConnectorConfiguration?: ManagedKnowledgeBaseConnectorConfigurationProperty;
    /**
    * The configuration information to connect to Amazon S3 as your data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#s3_configuration CcDataSource#s3_configuration}
    */
    readonly s3Configuration?: S3DataSourceConfigurationProperty;
    /**
    * The configuration information to connect to Salesforce as your data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#salesforce_configuration CcDataSource#salesforce_configuration}
    */
    readonly salesforceConfiguration?: SalesforceDataSourceConfigurationProperty;
    /**
    * The configuration information to connect to SharePoint as your data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#share_point_configuration CcDataSource#share_point_configuration}
    */
    readonly sharePointConfiguration?: SharePointDataSourceConfigurationProperty;
    /**
    * The type of the data source location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#type CcDataSource#type}
    */
    readonly type: string;
    /**
    * Configures a web data source location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#web_configuration CcDataSource#web_configuration}
    */
    readonly webConfiguration?: WebDataSourceConfigurationProperty;
}
export class DataSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._confluenceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluenceConfiguration = this._confluenceConfiguration?.internalValue;
        }
        if (this._managedKnowledgeBaseConnectorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedKnowledgeBaseConnectorConfiguration = this._managedKnowledgeBaseConnectorConfiguration?.internalValue;
        }
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        if (this._salesforceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforceConfiguration = this._salesforceConfiguration?.internalValue;
        }
        if (this._sharePointConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePointConfiguration = this._sharePointConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._webConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webConfiguration = this._webConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._confluenceConfiguration.internalValue = undefined;
            this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
            this._s3Configuration.internalValue = undefined;
            this._salesforceConfiguration.internalValue = undefined;
            this._sharePointConfiguration.internalValue = undefined;
            this._type = undefined;
            this._webConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._confluenceConfiguration.internalValue = value.confluenceConfiguration;
            this._managedKnowledgeBaseConnectorConfiguration.internalValue = value.managedKnowledgeBaseConnectorConfiguration;
            this._s3Configuration.internalValue = value.s3Configuration;
            this._salesforceConfiguration.internalValue = value.salesforceConfiguration;
            this._sharePointConfiguration.internalValue = value.sharePointConfiguration;
            this._type = value.type;
            this._webConfiguration.internalValue = value.webConfiguration;
        }
    }

    // confluence_configuration - computed: true, optional: true, required: false
    private _confluenceConfiguration = new ConfluenceDataSourceConfigurationPropertyOutputReference(this, "confluence_configuration");
    public get confluenceConfiguration() {
        return this._confluenceConfiguration;
    }
    public putConfluenceConfiguration(value: ConfluenceDataSourceConfigurationProperty) {
        this._confluenceConfiguration.internalValue = value;
    }
    public resetConfluenceConfiguration() {
        this._confluenceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceConfigurationInput() {
        return this._confluenceConfiguration.internalValue;
    }

    // managed_knowledge_base_connector_configuration - computed: true, optional: true, required: false
    private _managedKnowledgeBaseConnectorConfiguration = new ManagedKnowledgeBaseConnectorConfigurationPropertyOutputReference(this, "managed_knowledge_base_connector_configuration");
    public get managedKnowledgeBaseConnectorConfiguration() {
        return this._managedKnowledgeBaseConnectorConfiguration;
    }
    public putManagedKnowledgeBaseConnectorConfiguration(value: ManagedKnowledgeBaseConnectorConfigurationProperty) {
        this._managedKnowledgeBaseConnectorConfiguration.internalValue = value;
    }
    public resetManagedKnowledgeBaseConnectorConfiguration() {
        this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedKnowledgeBaseConnectorConfigurationInput() {
        return this._managedKnowledgeBaseConnectorConfiguration.internalValue;
    }

    // s3_configuration - computed: true, optional: true, required: false
    private _s3Configuration = new S3DataSourceConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
    public putS3Configuration(value: S3DataSourceConfigurationProperty) {
        this._s3Configuration.internalValue = value;
    }
    public resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }

    // salesforce_configuration - computed: true, optional: true, required: false
    private _salesforceConfiguration = new SalesforceDataSourceConfigurationPropertyOutputReference(this, "salesforce_configuration");
    public get salesforceConfiguration() {
        return this._salesforceConfiguration;
    }
    public putSalesforceConfiguration(value: SalesforceDataSourceConfigurationProperty) {
        this._salesforceConfiguration.internalValue = value;
    }
    public resetSalesforceConfiguration() {
        this._salesforceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceConfigurationInput() {
        return this._salesforceConfiguration.internalValue;
    }

    // share_point_configuration - computed: true, optional: true, required: false
    private _sharePointConfiguration = new SharePointDataSourceConfigurationPropertyOutputReference(this, "share_point_configuration");
    public get sharePointConfiguration() {
        return this._sharePointConfiguration;
    }
    public putSharePointConfiguration(value: SharePointDataSourceConfigurationProperty) {
        this._sharePointConfiguration.internalValue = value;
    }
    public resetSharePointConfiguration() {
        this._sharePointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePointConfigurationInput() {
        return this._sharePointConfiguration.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // web_configuration - computed: true, optional: true, required: false
    private _webConfiguration = new WebDataSourceConfigurationPropertyOutputReference(this, "web_configuration");
    public get webConfiguration() {
        return this._webConfiguration;
    }
    public putWebConfiguration(value: WebDataSourceConfigurationProperty) {
        this._webConfiguration.internalValue = value;
    }
    public resetWebConfiguration() {
        this._webConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webConfigurationInput() {
        return this._webConfiguration.internalValue;
    }
}
export interface ServerSideEncryptionConfigurationProperty {
    /**
    * The ARN of the AWS KMS key used to encrypt the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#kms_key_arn CcDataSource#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class ServerSideEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
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
}
export interface FixedSizeChunkingConfigurationProperty {
    /**
    * The maximum number of tokens to include in a chunk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#max_tokens CcDataSource#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * The percentage of overlap between adjacent chunks of a data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#overlap_percentage CcDataSource#overlap_percentage}
    */
    readonly overlapPercentage?: number;
}
export class FixedSizeChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FixedSizeChunkingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        if (this._overlapPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.overlapPercentage = this._overlapPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FixedSizeChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTokens = undefined;
            this._overlapPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTokens = value.maxTokens;
            this._overlapPercentage = value.overlapPercentage;
        }
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // overlap_percentage - computed: true, optional: true, required: false
    private _overlapPercentage?: number; 
    public get overlapPercentage() {
        return this.getNumberAttribute('overlap_percentage');
    }
    public set overlapPercentage(value: number) {
        this._overlapPercentage = value;
    }
    public resetOverlapPercentage() {
        this._overlapPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overlapPercentageInput() {
        return this._overlapPercentage;
    }
}
export interface HierarchicalChunkingLevelConfigurationProperty {
    /**
    * The maximum number of tokens that a chunk can contain in this layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#max_tokens CcDataSource#max_tokens}
    */
    readonly maxTokens?: number;
}
export class HierarchicalChunkingLevelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTokens = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTokens = value.maxTokens;
        }
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }
}

export class HierarchicalChunkingLevelConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : HierarchicalChunkingLevelConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): HierarchicalChunkingLevelConfigurationPropertyOutputReference {
        return new HierarchicalChunkingLevelConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HierarchicalChunkingConfigurationProperty {
    /**
    * Token settings for each layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#level_configurations CcDataSource#level_configurations}
    */
    readonly levelConfigurations?: HierarchicalChunkingLevelConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The number of tokens to repeat across chunks in the same layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#overlap_tokens CcDataSource#overlap_tokens}
    */
    readonly overlapTokens?: number;
}
export class HierarchicalChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HierarchicalChunkingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._levelConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.levelConfigurations = this._levelConfigurations?.internalValue;
        }
        if (this._overlapTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.overlapTokens = this._overlapTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HierarchicalChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._levelConfigurations.internalValue = undefined;
            this._overlapTokens = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._levelConfigurations.internalValue = value.levelConfigurations;
            this._overlapTokens = value.overlapTokens;
        }
    }

    // level_configurations - computed: true, optional: true, required: false
    private _levelConfigurations = new HierarchicalChunkingLevelConfigurationPropertyList(this, "level_configurations", false);
    public get levelConfigurations() {
        return this._levelConfigurations;
    }
    public putLevelConfigurations(value: HierarchicalChunkingLevelConfigurationProperty[] | cdktn.IResolvable) {
        this._levelConfigurations.internalValue = value;
    }
    public resetLevelConfigurations() {
        this._levelConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelConfigurationsInput() {
        return this._levelConfigurations.internalValue;
    }

    // overlap_tokens - computed: true, optional: true, required: false
    private _overlapTokens?: number; 
    public get overlapTokens() {
        return this.getNumberAttribute('overlap_tokens');
    }
    public set overlapTokens(value: number) {
        this._overlapTokens = value;
    }
    public resetOverlapTokens() {
        this._overlapTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overlapTokensInput() {
        return this._overlapTokens;
    }
}
export interface SemanticChunkingConfigurationProperty {
    /**
    * The dissimilarity threshold for splitting chunks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#breakpoint_percentile_threshold CcDataSource#breakpoint_percentile_threshold}
    */
    readonly breakpointPercentileThreshold?: number;
    /**
    * The buffer size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#buffer_size CcDataSource#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * The maximum number of tokens that a chunk can contain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#max_tokens CcDataSource#max_tokens}
    */
    readonly maxTokens?: number;
}
export class SemanticChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SemanticChunkingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._breakpointPercentileThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.breakpointPercentileThreshold = this._breakpointPercentileThreshold;
        }
        if (this._bufferSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SemanticChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._breakpointPercentileThreshold = undefined;
            this._bufferSize = undefined;
            this._maxTokens = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._breakpointPercentileThreshold = value.breakpointPercentileThreshold;
            this._bufferSize = value.bufferSize;
            this._maxTokens = value.maxTokens;
        }
    }

    // breakpoint_percentile_threshold - computed: true, optional: true, required: false
    private _breakpointPercentileThreshold?: number; 
    public get breakpointPercentileThreshold() {
        return this.getNumberAttribute('breakpoint_percentile_threshold');
    }
    public set breakpointPercentileThreshold(value: number) {
        this._breakpointPercentileThreshold = value;
    }
    public resetBreakpointPercentileThreshold() {
        this._breakpointPercentileThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get breakpointPercentileThresholdInput() {
        return this._breakpointPercentileThreshold;
    }

    // buffer_size - computed: true, optional: true, required: false
    private _bufferSize?: number; 
    public get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    public set bufferSize(value: number) {
        this._bufferSize = value;
    }
    public resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferSizeInput() {
        return this._bufferSize;
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }
}
export interface ChunkingConfigurationProperty {
    /**
    * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#chunking_strategy CcDataSource#chunking_strategy}
    */
    readonly chunkingStrategy?: string;
    /**
    * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#fixed_size_chunking_configuration CcDataSource#fixed_size_chunking_configuration}
    */
    readonly fixedSizeChunkingConfiguration?: FixedSizeChunkingConfigurationProperty;
    /**
    * Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#hierarchical_chunking_configuration CcDataSource#hierarchical_chunking_configuration}
    */
    readonly hierarchicalChunkingConfiguration?: HierarchicalChunkingConfigurationProperty;
    /**
    * Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#semantic_chunking_configuration CcDataSource#semantic_chunking_configuration}
    */
    readonly semanticChunkingConfiguration?: SemanticChunkingConfigurationProperty;
}
export class ChunkingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChunkingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._chunkingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.chunkingStrategy = this._chunkingStrategy;
        }
        if (this._fixedSizeChunkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedSizeChunkingConfiguration = this._fixedSizeChunkingConfiguration?.internalValue;
        }
        if (this._hierarchicalChunkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hierarchicalChunkingConfiguration = this._hierarchicalChunkingConfiguration?.internalValue;
        }
        if (this._semanticChunkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.semanticChunkingConfiguration = this._semanticChunkingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChunkingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._chunkingStrategy = undefined;
            this._fixedSizeChunkingConfiguration.internalValue = undefined;
            this._hierarchicalChunkingConfiguration.internalValue = undefined;
            this._semanticChunkingConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._chunkingStrategy = value.chunkingStrategy;
            this._fixedSizeChunkingConfiguration.internalValue = value.fixedSizeChunkingConfiguration;
            this._hierarchicalChunkingConfiguration.internalValue = value.hierarchicalChunkingConfiguration;
            this._semanticChunkingConfiguration.internalValue = value.semanticChunkingConfiguration;
        }
    }

    // chunking_strategy - computed: true, optional: true, required: false
    private _chunkingStrategy?: string; 
    public get chunkingStrategy() {
        return this.getStringAttribute('chunking_strategy');
    }
    public set chunkingStrategy(value: string) {
        this._chunkingStrategy = value;
    }
    public resetChunkingStrategy() {
        this._chunkingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chunkingStrategyInput() {
        return this._chunkingStrategy;
    }

    // fixed_size_chunking_configuration - computed: true, optional: true, required: false
    private _fixedSizeChunkingConfiguration = new FixedSizeChunkingConfigurationPropertyOutputReference(this, "fixed_size_chunking_configuration");
    public get fixedSizeChunkingConfiguration() {
        return this._fixedSizeChunkingConfiguration;
    }
    public putFixedSizeChunkingConfiguration(value: FixedSizeChunkingConfigurationProperty) {
        this._fixedSizeChunkingConfiguration.internalValue = value;
    }
    public resetFixedSizeChunkingConfiguration() {
        this._fixedSizeChunkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedSizeChunkingConfigurationInput() {
        return this._fixedSizeChunkingConfiguration.internalValue;
    }

    // hierarchical_chunking_configuration - computed: true, optional: true, required: false
    private _hierarchicalChunkingConfiguration = new HierarchicalChunkingConfigurationPropertyOutputReference(this, "hierarchical_chunking_configuration");
    public get hierarchicalChunkingConfiguration() {
        return this._hierarchicalChunkingConfiguration;
    }
    public putHierarchicalChunkingConfiguration(value: HierarchicalChunkingConfigurationProperty) {
        this._hierarchicalChunkingConfiguration.internalValue = value;
    }
    public resetHierarchicalChunkingConfiguration() {
        this._hierarchicalChunkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hierarchicalChunkingConfigurationInput() {
        return this._hierarchicalChunkingConfiguration.internalValue;
    }

    // semantic_chunking_configuration - computed: true, optional: true, required: false
    private _semanticChunkingConfiguration = new SemanticChunkingConfigurationPropertyOutputReference(this, "semantic_chunking_configuration");
    public get semanticChunkingConfiguration() {
        return this._semanticChunkingConfiguration;
    }
    public putSemanticChunkingConfiguration(value: SemanticChunkingConfigurationProperty) {
        this._semanticChunkingConfiguration.internalValue = value;
    }
    public resetSemanticChunkingConfiguration() {
        this._semanticChunkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get semanticChunkingConfigurationInput() {
        return this._semanticChunkingConfiguration.internalValue;
    }
}
export interface EnrichmentStrategyConfigurationProperty {
    /**
    * Enrichment Strategy method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#method CcDataSource#method}
    */
    readonly method?: string;
}
export class EnrichmentStrategyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnrichmentStrategyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnrichmentStrategyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._method = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._method = value.method;
        }
    }

    // method - computed: true, optional: true, required: false
    private _method?: string; 
    public get method() {
        return this.getStringAttribute('method');
    }
    public set method(value: string) {
        this._method = value;
    }
    public resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
        return this._method;
    }
}
export interface BedrockFoundationModelContextEnrichmentConfigurationProperty {
    /**
    * Strategy to be used when using Bedrock Foundation Model for Context Enrichment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#enrichment_strategy_configuration CcDataSource#enrichment_strategy_configuration}
    */
    readonly enrichmentStrategyConfiguration?: EnrichmentStrategyConfigurationProperty;
    /**
    * The model's ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#model_arn CcDataSource#model_arn}
    */
    readonly modelArn?: string;
}
export class BedrockFoundationModelContextEnrichmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BedrockFoundationModelContextEnrichmentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enrichmentStrategyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enrichmentStrategyConfiguration = this._enrichmentStrategyConfiguration?.internalValue;
        }
        if (this._modelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelArn = this._modelArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BedrockFoundationModelContextEnrichmentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enrichmentStrategyConfiguration.internalValue = undefined;
            this._modelArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enrichmentStrategyConfiguration.internalValue = value.enrichmentStrategyConfiguration;
            this._modelArn = value.modelArn;
        }
    }

    // enrichment_strategy_configuration - computed: true, optional: true, required: false
    private _enrichmentStrategyConfiguration = new EnrichmentStrategyConfigurationPropertyOutputReference(this, "enrichment_strategy_configuration");
    public get enrichmentStrategyConfiguration() {
        return this._enrichmentStrategyConfiguration;
    }
    public putEnrichmentStrategyConfiguration(value: EnrichmentStrategyConfigurationProperty) {
        this._enrichmentStrategyConfiguration.internalValue = value;
    }
    public resetEnrichmentStrategyConfiguration() {
        this._enrichmentStrategyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrichmentStrategyConfigurationInput() {
        return this._enrichmentStrategyConfiguration.internalValue;
    }

    // model_arn - computed: true, optional: true, required: false
    private _modelArn?: string; 
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }
    public set modelArn(value: string) {
        this._modelArn = value;
    }
    public resetModelArn() {
        this._modelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelArnInput() {
        return this._modelArn;
    }
}
export interface ContextEnrichmentConfigurationProperty {
    /**
    * Bedrock Foundation Model configuration to be used for Context Enrichment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#bedrock_foundation_model_configuration CcDataSource#bedrock_foundation_model_configuration}
    */
    readonly bedrockFoundationModelConfiguration?: BedrockFoundationModelContextEnrichmentConfigurationProperty;
    /**
    * Enrichment type to be used for the vector database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class ContextEnrichmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContextEnrichmentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContextEnrichmentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockFoundationModelConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
            this._type = value.type;
        }
    }

    // bedrock_foundation_model_configuration - computed: true, optional: true, required: false
    private _bedrockFoundationModelConfiguration = new BedrockFoundationModelContextEnrichmentConfigurationPropertyOutputReference(this, "bedrock_foundation_model_configuration");
    public get bedrockFoundationModelConfiguration() {
        return this._bedrockFoundationModelConfiguration;
    }
    public putBedrockFoundationModelConfiguration(value: BedrockFoundationModelContextEnrichmentConfigurationProperty) {
        this._bedrockFoundationModelConfiguration.internalValue = value;
    }
    public resetBedrockFoundationModelConfiguration() {
        this._bedrockFoundationModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockFoundationModelConfigurationInput() {
        return this._bedrockFoundationModelConfiguration.internalValue;
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
}
export interface S3LocationProperty {
    /**
    * The location's URI
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#uri CcDataSource#uri}
    */
    readonly uri?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uri = value.uri;
        }
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}
export interface IntermediateStorageProperty {
    /**
    * An Amazon S3 location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#s3_location CcDataSource#s3_location}
    */
    readonly s3Location?: S3LocationProperty;
}
export class IntermediateStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Location = this._s3Location?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Location.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Location.internalValue = value.s3Location;
        }
    }

    // s3_location - computed: true, optional: true, required: false
    private _s3Location = new S3LocationPropertyOutputReference(this, "s3_location");
    public get s3Location() {
        return this._s3Location;
    }
    public putS3Location(value: S3LocationProperty) {
        this._s3Location.internalValue = value;
    }
    public resetS3Location() {
        this._s3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LocationInput() {
        return this._s3Location.internalValue;
    }
}
export interface TransformationLambdaConfigurationProperty {
    /**
    * The function's ARN identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#lambda_arn CcDataSource#lambda_arn}
    */
    readonly lambdaArn?: string;
}
export class TransformationLambdaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformationLambdaConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformationLambdaConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }
}
export interface TransformationFunctionProperty {
    /**
    * A Lambda function that processes documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#transformation_lambda_configuration CcDataSource#transformation_lambda_configuration}
    */
    readonly transformationLambdaConfiguration?: TransformationLambdaConfigurationProperty;
}
export class TransformationFunctionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformationFunctionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._transformationLambdaConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformationLambdaConfiguration = this._transformationLambdaConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformationFunctionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._transformationLambdaConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._transformationLambdaConfiguration.internalValue = value.transformationLambdaConfiguration;
        }
    }

    // transformation_lambda_configuration - computed: true, optional: true, required: false
    private _transformationLambdaConfiguration = new TransformationLambdaConfigurationPropertyOutputReference(this, "transformation_lambda_configuration");
    public get transformationLambdaConfiguration() {
        return this._transformationLambdaConfiguration;
    }
    public putTransformationLambdaConfiguration(value: TransformationLambdaConfigurationProperty) {
        this._transformationLambdaConfiguration.internalValue = value;
    }
    public resetTransformationLambdaConfiguration() {
        this._transformationLambdaConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationLambdaConfigurationInput() {
        return this._transformationLambdaConfiguration.internalValue;
    }
}
export interface TransformationProperty {
    /**
    * When the service applies the transformation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#step_to_apply CcDataSource#step_to_apply}
    */
    readonly stepToApply?: string;
    /**
    * A Lambda function that processes documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#transformation_function CcDataSource#transformation_function}
    */
    readonly transformationFunction?: TransformationFunctionProperty;
}
export class TransformationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TransformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stepToApply !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepToApply = this._stepToApply;
        }
        if (this._transformationFunction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformationFunction = this._transformationFunction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stepToApply = undefined;
            this._transformationFunction.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stepToApply = value.stepToApply;
            this._transformationFunction.internalValue = value.transformationFunction;
        }
    }

    // step_to_apply - computed: true, optional: true, required: false
    private _stepToApply?: string; 
    public get stepToApply() {
        return this.getStringAttribute('step_to_apply');
    }
    public set stepToApply(value: string) {
        this._stepToApply = value;
    }
    public resetStepToApply() {
        this._stepToApply = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepToApplyInput() {
        return this._stepToApply;
    }

    // transformation_function - computed: true, optional: true, required: false
    private _transformationFunction = new TransformationFunctionPropertyOutputReference(this, "transformation_function");
    public get transformationFunction() {
        return this._transformationFunction;
    }
    public putTransformationFunction(value: TransformationFunctionProperty) {
        this._transformationFunction.internalValue = value;
    }
    public resetTransformationFunction() {
        this._transformationFunction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationFunctionInput() {
        return this._transformationFunction.internalValue;
    }
}

export class TransformationPropertyList extends cdktn.ComplexList {
    public internalValue? : TransformationProperty[] | cdktn.IResolvable

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
    public get(index: number): TransformationPropertyOutputReference {
        return new TransformationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomTransformationConfigurationProperty {
    /**
    * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#intermediate_storage CcDataSource#intermediate_storage}
    */
    readonly intermediateStorage?: IntermediateStorageProperty;
    /**
    * A list of Lambda functions that process documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#transformations CcDataSource#transformations}
    */
    readonly transformations?: TransformationProperty[] | cdktn.IResolvable;
}
export class CustomTransformationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomTransformationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._intermediateStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.intermediateStorage = this._intermediateStorage?.internalValue;
        }
        if (this._transformations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformations = this._transformations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomTransformationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._intermediateStorage.internalValue = undefined;
            this._transformations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._intermediateStorage.internalValue = value.intermediateStorage;
            this._transformations.internalValue = value.transformations;
        }
    }

    // intermediate_storage - computed: true, optional: true, required: false
    private _intermediateStorage = new IntermediateStoragePropertyOutputReference(this, "intermediate_storage");
    public get intermediateStorage() {
        return this._intermediateStorage;
    }
    public putIntermediateStorage(value: IntermediateStorageProperty) {
        this._intermediateStorage.internalValue = value;
    }
    public resetIntermediateStorage() {
        this._intermediateStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intermediateStorageInput() {
        return this._intermediateStorage.internalValue;
    }

    // transformations - computed: true, optional: true, required: false
    private _transformations = new TransformationPropertyList(this, "transformations", false);
    public get transformations() {
        return this._transformations;
    }
    public putTransformations(value: TransformationProperty[] | cdktn.IResolvable) {
        this._transformations.internalValue = value;
    }
    public resetTransformations() {
        this._transformations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformationsInput() {
        return this._transformations.internalValue;
    }
}
export interface BedrockDataAutomationConfigurationProperty {
    /**
    * Determine how will parsed content be stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_modality CcDataSource#parsing_modality}
    */
    readonly parsingModality?: string;
}
export class BedrockDataAutomationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BedrockDataAutomationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parsingModality !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingModality = this._parsingModality;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BedrockDataAutomationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parsingModality = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parsingModality = value.parsingModality;
        }
    }

    // parsing_modality - computed: true, optional: true, required: false
    private _parsingModality?: string; 
    public get parsingModality() {
        return this.getStringAttribute('parsing_modality');
    }
    public set parsingModality(value: string) {
        this._parsingModality = value;
    }
    public resetParsingModality() {
        this._parsingModality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingModalityInput() {
        return this._parsingModality;
    }
}
export interface ParsingPromptProperty {
    /**
    * Instructions for interpreting the contents of a document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_prompt_text CcDataSource#parsing_prompt_text}
    */
    readonly parsingPromptText?: string;
}
export class ParsingPromptPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParsingPromptProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parsingPromptText !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingPromptText = this._parsingPromptText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParsingPromptProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parsingPromptText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parsingPromptText = value.parsingPromptText;
        }
    }

    // parsing_prompt_text - computed: true, optional: true, required: false
    private _parsingPromptText?: string; 
    public get parsingPromptText() {
        return this.getStringAttribute('parsing_prompt_text');
    }
    public set parsingPromptText(value: string) {
        this._parsingPromptText = value;
    }
    public resetParsingPromptText() {
        this._parsingPromptText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingPromptTextInput() {
        return this._parsingPromptText;
    }
}
export interface BedrockFoundationModelConfigurationProperty {
    /**
    * The model's ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#model_arn CcDataSource#model_arn}
    */
    readonly modelArn?: string;
    /**
    * Determine how will parsed content be stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_modality CcDataSource#parsing_modality}
    */
    readonly parsingModality?: string;
    /**
    * Instructions for interpreting the contents of a document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_prompt CcDataSource#parsing_prompt}
    */
    readonly parsingPrompt?: ParsingPromptProperty;
}
export class BedrockFoundationModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BedrockFoundationModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelArn = this._modelArn;
        }
        if (this._parsingModality !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingModality = this._parsingModality;
        }
        if (this._parsingPrompt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingPrompt = this._parsingPrompt?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BedrockFoundationModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelArn = undefined;
            this._parsingModality = undefined;
            this._parsingPrompt.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelArn = value.modelArn;
            this._parsingModality = value.parsingModality;
            this._parsingPrompt.internalValue = value.parsingPrompt;
        }
    }

    // model_arn - computed: true, optional: true, required: false
    private _modelArn?: string; 
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }
    public set modelArn(value: string) {
        this._modelArn = value;
    }
    public resetModelArn() {
        this._modelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelArnInput() {
        return this._modelArn;
    }

    // parsing_modality - computed: true, optional: true, required: false
    private _parsingModality?: string; 
    public get parsingModality() {
        return this.getStringAttribute('parsing_modality');
    }
    public set parsingModality(value: string) {
        this._parsingModality = value;
    }
    public resetParsingModality() {
        this._parsingModality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingModalityInput() {
        return this._parsingModality;
    }

    // parsing_prompt - computed: true, optional: true, required: false
    private _parsingPrompt = new ParsingPromptPropertyOutputReference(this, "parsing_prompt");
    public get parsingPrompt() {
        return this._parsingPrompt;
    }
    public putParsingPrompt(value: ParsingPromptProperty) {
        this._parsingPrompt.internalValue = value;
    }
    public resetParsingPrompt() {
        this._parsingPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingPromptInput() {
        return this._parsingPrompt.internalValue;
    }
}
export interface ParsingConfigurationProperty {
    /**
    * Settings for a Bedrock Data Automation used to parse documents for a data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#bedrock_data_automation_configuration CcDataSource#bedrock_data_automation_configuration}
    */
    readonly bedrockDataAutomationConfiguration?: BedrockDataAutomationConfigurationProperty;
    /**
    * Settings for a foundation model used to parse documents for a data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#bedrock_foundation_model_configuration CcDataSource#bedrock_foundation_model_configuration}
    */
    readonly bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationProperty;
    /**
    * The parsing strategy for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_strategy CcDataSource#parsing_strategy}
    */
    readonly parsingStrategy?: string;
}
export class ParsingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParsingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockDataAutomationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockDataAutomationConfiguration = this._bedrockDataAutomationConfiguration?.internalValue;
        }
        if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
        }
        if (this._parsingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingStrategy = this._parsingStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParsingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockDataAutomationConfiguration.internalValue = undefined;
            this._bedrockFoundationModelConfiguration.internalValue = undefined;
            this._parsingStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockDataAutomationConfiguration.internalValue = value.bedrockDataAutomationConfiguration;
            this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
            this._parsingStrategy = value.parsingStrategy;
        }
    }

    // bedrock_data_automation_configuration - computed: true, optional: true, required: false
    private _bedrockDataAutomationConfiguration = new BedrockDataAutomationConfigurationPropertyOutputReference(this, "bedrock_data_automation_configuration");
    public get bedrockDataAutomationConfiguration() {
        return this._bedrockDataAutomationConfiguration;
    }
    public putBedrockDataAutomationConfiguration(value: BedrockDataAutomationConfigurationProperty) {
        this._bedrockDataAutomationConfiguration.internalValue = value;
    }
    public resetBedrockDataAutomationConfiguration() {
        this._bedrockDataAutomationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockDataAutomationConfigurationInput() {
        return this._bedrockDataAutomationConfiguration.internalValue;
    }

    // bedrock_foundation_model_configuration - computed: true, optional: true, required: false
    private _bedrockFoundationModelConfiguration = new BedrockFoundationModelConfigurationPropertyOutputReference(this, "bedrock_foundation_model_configuration");
    public get bedrockFoundationModelConfiguration() {
        return this._bedrockFoundationModelConfiguration;
    }
    public putBedrockFoundationModelConfiguration(value: BedrockFoundationModelConfigurationProperty) {
        this._bedrockFoundationModelConfiguration.internalValue = value;
    }
    public resetBedrockFoundationModelConfiguration() {
        this._bedrockFoundationModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockFoundationModelConfigurationInput() {
        return this._bedrockFoundationModelConfiguration.internalValue;
    }

    // parsing_strategy - computed: true, optional: true, required: false
    private _parsingStrategy?: string; 
    public get parsingStrategy() {
        return this.getStringAttribute('parsing_strategy');
    }
    public set parsingStrategy(value: string) {
        this._parsingStrategy = value;
    }
    public resetParsingStrategy() {
        this._parsingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingStrategyInput() {
        return this._parsingStrategy;
    }
}
export interface VectorIngestionConfigurationProperty {
    /**
    * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#chunking_configuration CcDataSource#chunking_configuration}
    */
    readonly chunkingConfiguration?: ChunkingConfigurationProperty;
    /**
    * Additional Enrichment Configuration for example when using GraphRag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#context_enrichment_configuration CcDataSource#context_enrichment_configuration}
    */
    readonly contextEnrichmentConfiguration?: ContextEnrichmentConfigurationProperty;
    /**
    * Settings for customizing steps in the data source content ingestion pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#custom_transformation_configuration CcDataSource#custom_transformation_configuration}
    */
    readonly customTransformationConfiguration?: CustomTransformationConfigurationProperty;
    /**
    * Settings for parsing document contents
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_data_source#parsing_configuration CcDataSource#parsing_configuration}
    */
    readonly parsingConfiguration?: ParsingConfigurationProperty;
}
export class VectorIngestionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VectorIngestionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._chunkingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.chunkingConfiguration = this._chunkingConfiguration?.internalValue;
        }
        if (this._contextEnrichmentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contextEnrichmentConfiguration = this._contextEnrichmentConfiguration?.internalValue;
        }
        if (this._customTransformationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customTransformationConfiguration = this._customTransformationConfiguration?.internalValue;
        }
        if (this._parsingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parsingConfiguration = this._parsingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VectorIngestionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._chunkingConfiguration.internalValue = undefined;
            this._contextEnrichmentConfiguration.internalValue = undefined;
            this._customTransformationConfiguration.internalValue = undefined;
            this._parsingConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._chunkingConfiguration.internalValue = value.chunkingConfiguration;
            this._contextEnrichmentConfiguration.internalValue = value.contextEnrichmentConfiguration;
            this._customTransformationConfiguration.internalValue = value.customTransformationConfiguration;
            this._parsingConfiguration.internalValue = value.parsingConfiguration;
        }
    }

    // chunking_configuration - computed: true, optional: true, required: false
    private _chunkingConfiguration = new ChunkingConfigurationPropertyOutputReference(this, "chunking_configuration");
    public get chunkingConfiguration() {
        return this._chunkingConfiguration;
    }
    public putChunkingConfiguration(value: ChunkingConfigurationProperty) {
        this._chunkingConfiguration.internalValue = value;
    }
    public resetChunkingConfiguration() {
        this._chunkingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chunkingConfigurationInput() {
        return this._chunkingConfiguration.internalValue;
    }

    // context_enrichment_configuration - computed: true, optional: true, required: false
    private _contextEnrichmentConfiguration = new ContextEnrichmentConfigurationPropertyOutputReference(this, "context_enrichment_configuration");
    public get contextEnrichmentConfiguration() {
        return this._contextEnrichmentConfiguration;
    }
    public putContextEnrichmentConfiguration(value: ContextEnrichmentConfigurationProperty) {
        this._contextEnrichmentConfiguration.internalValue = value;
    }
    public resetContextEnrichmentConfiguration() {
        this._contextEnrichmentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextEnrichmentConfigurationInput() {
        return this._contextEnrichmentConfiguration.internalValue;
    }

    // custom_transformation_configuration - computed: true, optional: true, required: false
    private _customTransformationConfiguration = new CustomTransformationConfigurationPropertyOutputReference(this, "custom_transformation_configuration");
    public get customTransformationConfiguration() {
        return this._customTransformationConfiguration;
    }
    public putCustomTransformationConfiguration(value: CustomTransformationConfigurationProperty) {
        this._customTransformationConfiguration.internalValue = value;
    }
    public resetCustomTransformationConfiguration() {
        this._customTransformationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customTransformationConfigurationInput() {
        return this._customTransformationConfiguration.internalValue;
    }

    // parsing_configuration - computed: true, optional: true, required: false
    private _parsingConfiguration = new ParsingConfigurationPropertyOutputReference(this, "parsing_configuration");
    public get parsingConfiguration() {
        return this._parsingConfiguration;
    }
    public putParsingConfiguration(value: ParsingConfigurationProperty) {
        this._parsingConfiguration.internalValue = value;
    }
    public resetParsingConfiguration() {
        this._parsingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parsingConfigurationInput() {
        return this._parsingConfiguration.internalValue;
    }
}
}
