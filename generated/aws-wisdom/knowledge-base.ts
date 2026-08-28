// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKnowledgeBaseProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#description CcKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#knowledge_base_type CcKnowledgeBase#knowledge_base_type}
    */
    readonly knowledgeBaseType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#name CcKnowledgeBase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#rendering_configuration CcKnowledgeBase#rendering_configuration}
    */
    readonly renderingConfiguration?: CcKnowledgeBase.RenderingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration CcKnowledgeBase#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: CcKnowledgeBase.ServerSideEncryptionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#source_configuration CcKnowledgeBase#source_configuration}
    */
    readonly sourceConfiguration?: CcKnowledgeBase.SourceConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#tags CcKnowledgeBase#tags}
    */
    readonly tags?: CcKnowledgeBase.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration CcKnowledgeBase#vector_ingestion_configuration}
    */
    readonly vectorIngestionConfiguration?: CcKnowledgeBase.VectorIngestionConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base}
*/
export class CcKnowledgeBase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_knowledge_base";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKnowledgeBase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKnowledgeBase to import
    * @param importFromId The id of the existing CcKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKnowledgeBase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_knowledge_base", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKnowledgeBaseProps
    */
    public constructor(scope: Construct, id: string, config: CcKnowledgeBaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_knowledge_base',
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
        this._description = config.description;
        this._knowledgeBaseType = config.knowledgeBaseType;
        this._name = config.name;
        this._renderingConfiguration.internalValue = config.renderingConfiguration;
        this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
        this._sourceConfiguration.internalValue = config.sourceConfiguration;
        this._tags.internalValue = config.tags;
        this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_arn - computed: true, optional: false, required: false
    public get knowledgeBaseArn() {
        return this.getStringAttribute('knowledge_base_arn');
    }

    // knowledge_base_id - computed: true, optional: false, required: false
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }

    // knowledge_base_type - computed: false, optional: false, required: true
    private _knowledgeBaseType?: string; 
    public get knowledgeBaseType() {
        return this.getStringAttribute('knowledge_base_type');
    }
    public set knowledgeBaseType(value: string) {
        this._knowledgeBaseType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseTypeInput() {
        return this._knowledgeBaseType;
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

    // rendering_configuration - computed: true, optional: true, required: false
    private _renderingConfiguration = new CcKnowledgeBase.RenderingConfigurationPropertyOutputReference(this, "rendering_configuration");
    public get renderingConfiguration() {
        return this._renderingConfiguration;
    }
    public putRenderingConfiguration(value: CcKnowledgeBase.RenderingConfigurationProperty) {
        this._renderingConfiguration.internalValue = value;
    }
    public resetRenderingConfiguration() {
        this._renderingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renderingConfigurationInput() {
        return this._renderingConfiguration.internalValue;
    }

    // server_side_encryption_configuration - computed: true, optional: true, required: false
    private _serverSideEncryptionConfiguration = new CcKnowledgeBase.ServerSideEncryptionConfigurationPropertyOutputReference(this, "server_side_encryption_configuration");
    public get serverSideEncryptionConfiguration() {
        return this._serverSideEncryptionConfiguration;
    }
    public putServerSideEncryptionConfiguration(value: CcKnowledgeBase.ServerSideEncryptionConfigurationProperty) {
        this._serverSideEncryptionConfiguration.internalValue = value;
    }
    public resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new CcKnowledgeBase.SourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: CcKnowledgeBase.SourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcKnowledgeBase.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcKnowledgeBase.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vector_ingestion_configuration - computed: true, optional: true, required: false
    private _vectorIngestionConfiguration = new CcKnowledgeBase.VectorIngestionConfigurationPropertyOutputReference(this, "vector_ingestion_configuration");
    public get vectorIngestionConfiguration() {
        return this._vectorIngestionConfiguration;
    }
    public putVectorIngestionConfiguration(value: CcKnowledgeBase.VectorIngestionConfigurationProperty) {
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
            description: cdktn.stringToTerraform(this._description),
            knowledge_base_type: cdktn.stringToTerraform(this._knowledgeBaseType),
            name: cdktn.stringToTerraform(this._name),
            rendering_configuration: ccKnowledgeBaseRenderingConfigurationPropertyToTerraform(this._renderingConfiguration.internalValue),
            server_side_encryption_configuration: ccKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform(this._serverSideEncryptionConfiguration.internalValue),
            source_configuration: ccKnowledgeBaseSourceConfigurationPropertyToTerraform(this._sourceConfiguration.internalValue),
            tags: cdktn.listMapper(ccKnowledgeBaseTagPropertyToTerraform, false)(this._tags.internalValue),
            vector_ingestion_configuration: ccKnowledgeBaseVectorIngestionConfigurationPropertyToTerraform(this._vectorIngestionConfiguration.internalValue),
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
            knowledge_base_type: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseType),
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
            rendering_configuration: {
                value: ccKnowledgeBaseRenderingConfigurationPropertyToHclTerraform(this._renderingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.RenderingConfigurationProperty",
            },
            server_side_encryption_configuration: {
                value: ccKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.ServerSideEncryptionConfigurationProperty",
            },
            source_configuration: {
                value: ccKnowledgeBaseSourceConfigurationPropertyToHclTerraform(this._sourceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.SourceConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccKnowledgeBaseTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcKnowledgeBase.TagPropertyList",
            },
            vector_ingestion_configuration: {
                value: ccKnowledgeBaseVectorIngestionConfigurationPropertyToHclTerraform(this._vectorIngestionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.VectorIngestionConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKnowledgeBaseRenderingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RenderingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template_uri: cdktn.stringToTerraform(struct!.templateUri),
    }
}


export function ccKnowledgeBaseRenderingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RenderingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template_uri: {
            value: cdktn.stringToHclTerraform(struct!.templateUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseAppIntegrationsConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.AppIntegrationsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_integration_arn: cdktn.stringToTerraform(struct!.appIntegrationArn),
        object_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.objectFields),
    }
}


export function ccKnowledgeBaseAppIntegrationsConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.AppIntegrationsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_integration_arn: {
            value: cdktn.stringToHclTerraform(struct!.appIntegrationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_fields: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.objectFields),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseCrawlerLimitsPropertyToTerraform(struct?: CcKnowledgeBase.CrawlerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
    }
}


export function ccKnowledgeBaseCrawlerLimitsPropertyToHclTerraform(struct?: CcKnowledgeBase.CrawlerLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccKnowledgeBaseSeedUrlPropertyToTerraform(struct?: CcKnowledgeBase.SeedUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccKnowledgeBaseSeedUrlPropertyToHclTerraform(struct?: CcKnowledgeBase.SeedUrlProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseUrlConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.UrlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        seed_urls: cdktn.listMapper(ccKnowledgeBaseSeedUrlPropertyToTerraform, false)(struct!.seedUrls),
    }
}


export function ccKnowledgeBaseUrlConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.UrlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        seed_urls: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseSeedUrlPropertyToHclTerraform, false)(struct!.seedUrls),
            isBlock: true,
            type: "list",
            storageClassType: "SeedUrlPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseWebCrawlerConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.WebCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crawler_limits: ccKnowledgeBaseCrawlerLimitsPropertyToTerraform(struct!.crawlerLimits),
        exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
        inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
        scope: cdktn.stringToTerraform(struct!.scope),
        url_configuration: ccKnowledgeBaseUrlConfigurationPropertyToTerraform(struct!.urlConfiguration),
    }
}


export function ccKnowledgeBaseWebCrawlerConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.WebCrawlerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawler_limits: {
            value: ccKnowledgeBaseCrawlerLimitsPropertyToHclTerraform(struct!.crawlerLimits),
            isBlock: true,
            type: "struct",
            storageClassType: "CrawlerLimitsProperty",
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
        url_configuration: {
            value: ccKnowledgeBaseUrlConfigurationPropertyToHclTerraform(struct!.urlConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "UrlConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseManagedSourceConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ManagedSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        web_crawler_configuration: ccKnowledgeBaseWebCrawlerConfigurationPropertyToTerraform(struct!.webCrawlerConfiguration),
    }
}


export function ccKnowledgeBaseManagedSourceConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ManagedSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        web_crawler_configuration: {
            value: ccKnowledgeBaseWebCrawlerConfigurationPropertyToHclTerraform(struct!.webCrawlerConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WebCrawlerConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseSourceConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_integrations: ccKnowledgeBaseAppIntegrationsConfigurationPropertyToTerraform(struct!.appIntegrations),
        managed_source_configuration: ccKnowledgeBaseManagedSourceConfigurationPropertyToTerraform(struct!.managedSourceConfiguration),
    }
}


export function ccKnowledgeBaseSourceConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_integrations: {
            value: ccKnowledgeBaseAppIntegrationsConfigurationPropertyToHclTerraform(struct!.appIntegrations),
            isBlock: true,
            type: "struct",
            storageClassType: "AppIntegrationsConfigurationProperty",
        },
        managed_source_configuration: {
            value: ccKnowledgeBaseManagedSourceConfigurationPropertyToHclTerraform(struct!.managedSourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedSourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseTagPropertyToTerraform(struct?: CcKnowledgeBase.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccKnowledgeBaseTagPropertyToHclTerraform(struct?: CcKnowledgeBase.TagProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseFixedSizeChunkingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        overlap_percentage: cdktn.numberToTerraform(struct!.overlapPercentage),
    }
}


export function ccKnowledgeBaseFixedSizeChunkingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.FixedSizeChunkingConfigurationProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseHierarchicalChunkingLevelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    }
}


export function ccKnowledgeBaseHierarchicalChunkingLevelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.HierarchicalChunkingLevelConfigurationProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseHierarchicalChunkingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level_configurations: cdktn.listMapper(ccKnowledgeBaseHierarchicalChunkingLevelConfigurationPropertyToTerraform, false)(struct!.levelConfigurations),
        overlap_tokens: cdktn.numberToTerraform(struct!.overlapTokens),
    }
}


export function ccKnowledgeBaseHierarchicalChunkingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.HierarchicalChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level_configurations: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseHierarchicalChunkingLevelConfigurationPropertyToHclTerraform, false)(struct!.levelConfigurations),
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


export function ccKnowledgeBaseSemanticChunkingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseSemanticChunkingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.SemanticChunkingConfigurationProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseChunkingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ChunkingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chunking_strategy: cdktn.stringToTerraform(struct!.chunkingStrategy),
        fixed_size_chunking_configuration: ccKnowledgeBaseFixedSizeChunkingConfigurationPropertyToTerraform(struct!.fixedSizeChunkingConfiguration),
        hierarchical_chunking_configuration: ccKnowledgeBaseHierarchicalChunkingConfigurationPropertyToTerraform(struct!.hierarchicalChunkingConfiguration),
        semantic_chunking_configuration: ccKnowledgeBaseSemanticChunkingConfigurationPropertyToTerraform(struct!.semanticChunkingConfiguration),
    }
}


export function ccKnowledgeBaseChunkingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ChunkingConfigurationProperty | cdktn.IResolvable): any {
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
            value: ccKnowledgeBaseFixedSizeChunkingConfigurationPropertyToHclTerraform(struct!.fixedSizeChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FixedSizeChunkingConfigurationProperty",
        },
        hierarchical_chunking_configuration: {
            value: ccKnowledgeBaseHierarchicalChunkingConfigurationPropertyToHclTerraform(struct!.hierarchicalChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HierarchicalChunkingConfigurationProperty",
        },
        semantic_chunking_configuration: {
            value: ccKnowledgeBaseSemanticChunkingConfigurationPropertyToHclTerraform(struct!.semanticChunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SemanticChunkingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseParsingPromptPropertyToTerraform(struct?: CcKnowledgeBase.ParsingPromptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parsing_prompt_text: cdktn.stringToTerraform(struct!.parsingPromptText),
    }
}


export function ccKnowledgeBaseParsingPromptPropertyToHclTerraform(struct?: CcKnowledgeBase.ParsingPromptProperty | cdktn.IResolvable): any {
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


export function ccKnowledgeBaseBedrockFoundationModelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_arn: cdktn.stringToTerraform(struct!.modelArn),
        parsing_prompt: ccKnowledgeBaseParsingPromptPropertyToTerraform(struct!.parsingPrompt),
    }
}


export function ccKnowledgeBaseBedrockFoundationModelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.BedrockFoundationModelConfigurationProperty | cdktn.IResolvable): any {
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
        parsing_prompt: {
            value: ccKnowledgeBaseParsingPromptPropertyToHclTerraform(struct!.parsingPrompt),
            isBlock: true,
            type: "struct",
            storageClassType: "ParsingPromptProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseParsingConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ParsingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_foundation_model_configuration: ccKnowledgeBaseBedrockFoundationModelConfigurationPropertyToTerraform(struct!.bedrockFoundationModelConfiguration),
        parsing_strategy: cdktn.stringToTerraform(struct!.parsingStrategy),
    }
}


export function ccKnowledgeBaseParsingConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ParsingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_foundation_model_configuration: {
            value: ccKnowledgeBaseBedrockFoundationModelConfigurationPropertyToHclTerraform(struct!.bedrockFoundationModelConfiguration),
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


export function ccKnowledgeBaseVectorIngestionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chunking_configuration: ccKnowledgeBaseChunkingConfigurationPropertyToTerraform(struct!.chunkingConfiguration),
        parsing_configuration: ccKnowledgeBaseParsingConfigurationPropertyToTerraform(struct!.parsingConfiguration),
    }
}


export function ccKnowledgeBaseVectorIngestionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.VectorIngestionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        chunking_configuration: {
            value: ccKnowledgeBaseChunkingConfigurationPropertyToHclTerraform(struct!.chunkingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ChunkingConfigurationProperty",
        },
        parsing_configuration: {
            value: ccKnowledgeBaseParsingConfigurationPropertyToHclTerraform(struct!.parsingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ParsingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcKnowledgeBase {
export interface RenderingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#template_uri CcKnowledgeBase#template_uri}
    */
    readonly templateUri?: string;
}
export class RenderingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RenderingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._templateUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateUri = this._templateUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RenderingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._templateUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._templateUri = value.templateUri;
        }
    }

    // template_uri - computed: true, optional: true, required: false
    private _templateUri?: string; 
    public get templateUri() {
        return this.getStringAttribute('template_uri');
    }
    public set templateUri(value: string) {
        this._templateUri = value;
    }
    public resetTemplateUri() {
        this._templateUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUriInput() {
        return this._templateUri;
    }
}
export interface ServerSideEncryptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#kms_key_id CcKnowledgeBase#kms_key_id}
    */
    readonly kmsKeyId?: string;
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
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
}
export interface AppIntegrationsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#app_integration_arn CcKnowledgeBase#app_integration_arn}
    */
    readonly appIntegrationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#object_fields CcKnowledgeBase#object_fields}
    */
    readonly objectFields?: string[];
}
export class AppIntegrationsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppIntegrationsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appIntegrationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIntegrationArn = this._appIntegrationArn;
        }
        if (this._objectFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectFields = this._objectFields;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppIntegrationsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appIntegrationArn = undefined;
            this._objectFields = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appIntegrationArn = value.appIntegrationArn;
            this._objectFields = value.objectFields;
        }
    }

    // app_integration_arn - computed: true, optional: true, required: false
    private _appIntegrationArn?: string; 
    public get appIntegrationArn() {
        return this.getStringAttribute('app_integration_arn');
    }
    public set appIntegrationArn(value: string) {
        this._appIntegrationArn = value;
    }
    public resetAppIntegrationArn() {
        this._appIntegrationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIntegrationArnInput() {
        return this._appIntegrationArn;
    }

    // object_fields - computed: true, optional: true, required: false
    private _objectFields?: string[]; 
    public get objectFields() {
        return this.getListAttribute('object_fields');
    }
    public set objectFields(value: string[]) {
        this._objectFields = value;
    }
    public resetObjectFields() {
        this._objectFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectFieldsInput() {
        return this._objectFields;
    }
}
export interface CrawlerLimitsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#rate_limit CcKnowledgeBase#rate_limit}
    */
    readonly rateLimit?: number;
}
export class CrawlerLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CrawlerLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateLimit = this._rateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrawlerLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rateLimit = value.rateLimit;
        }
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
export interface SeedUrlProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#url CcKnowledgeBase#url}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#seed_urls CcKnowledgeBase#seed_urls}
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
export interface WebCrawlerConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#crawler_limits CcKnowledgeBase#crawler_limits}
    */
    readonly crawlerLimits?: CrawlerLimitsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#exclusion_filters CcKnowledgeBase#exclusion_filters}
    */
    readonly exclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#inclusion_filters CcKnowledgeBase#inclusion_filters}
    */
    readonly inclusionFilters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#scope CcKnowledgeBase#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#url_configuration CcKnowledgeBase#url_configuration}
    */
    readonly urlConfiguration?: UrlConfigurationProperty;
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
        if (this._urlConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
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
            this._urlConfiguration.internalValue = undefined;
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
            this._urlConfiguration.internalValue = value.urlConfiguration;
        }
    }

    // crawler_limits - computed: true, optional: true, required: false
    private _crawlerLimits = new CrawlerLimitsPropertyOutputReference(this, "crawler_limits");
    public get crawlerLimits() {
        return this._crawlerLimits;
    }
    public putCrawlerLimits(value: CrawlerLimitsProperty) {
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
export interface ManagedSourceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#web_crawler_configuration CcKnowledgeBase#web_crawler_configuration}
    */
    readonly webCrawlerConfiguration?: WebCrawlerConfigurationProperty;
}
export class ManagedSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._webCrawlerConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webCrawlerConfiguration = this._webCrawlerConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._webCrawlerConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._webCrawlerConfiguration.internalValue = value.webCrawlerConfiguration;
        }
    }

    // web_crawler_configuration - computed: true, optional: true, required: false
    private _webCrawlerConfiguration = new WebCrawlerConfigurationPropertyOutputReference(this, "web_crawler_configuration");
    public get webCrawlerConfiguration() {
        return this._webCrawlerConfiguration;
    }
    public putWebCrawlerConfiguration(value: WebCrawlerConfigurationProperty) {
        this._webCrawlerConfiguration.internalValue = value;
    }
    public resetWebCrawlerConfiguration() {
        this._webCrawlerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webCrawlerConfigurationInput() {
        return this._webCrawlerConfiguration.internalValue;
    }
}
export interface SourceConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#app_integrations CcKnowledgeBase#app_integrations}
    */
    readonly appIntegrations?: AppIntegrationsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#managed_source_configuration CcKnowledgeBase#managed_source_configuration}
    */
    readonly managedSourceConfiguration?: ManagedSourceConfigurationProperty;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appIntegrations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIntegrations = this._appIntegrations?.internalValue;
        }
        if (this._managedSourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedSourceConfiguration = this._managedSourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appIntegrations.internalValue = undefined;
            this._managedSourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appIntegrations.internalValue = value.appIntegrations;
            this._managedSourceConfiguration.internalValue = value.managedSourceConfiguration;
        }
    }

    // app_integrations - computed: true, optional: true, required: false
    private _appIntegrations = new AppIntegrationsConfigurationPropertyOutputReference(this, "app_integrations");
    public get appIntegrations() {
        return this._appIntegrations;
    }
    public putAppIntegrations(value: AppIntegrationsConfigurationProperty) {
        this._appIntegrations.internalValue = value;
    }
    public resetAppIntegrations() {
        this._appIntegrations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIntegrationsInput() {
        return this._appIntegrations.internalValue;
    }

    // managed_source_configuration - computed: true, optional: true, required: false
    private _managedSourceConfiguration = new ManagedSourceConfigurationPropertyOutputReference(this, "managed_source_configuration");
    public get managedSourceConfiguration() {
        return this._managedSourceConfiguration;
    }
    public putManagedSourceConfiguration(value: ManagedSourceConfigurationProperty) {
        this._managedSourceConfiguration.internalValue = value;
    }
    public resetManagedSourceConfiguration() {
        this._managedSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedSourceConfigurationInput() {
        return this._managedSourceConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#key CcKnowledgeBase#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#value CcKnowledgeBase#value}
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
export interface FixedSizeChunkingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#max_tokens CcKnowledgeBase#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#overlap_percentage CcKnowledgeBase#overlap_percentage}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#max_tokens CcKnowledgeBase#max_tokens}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#level_configurations CcKnowledgeBase#level_configurations}
    */
    readonly levelConfigurations?: HierarchicalChunkingLevelConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#overlap_tokens CcKnowledgeBase#overlap_tokens}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold CcKnowledgeBase#breakpoint_percentile_threshold}
    */
    readonly breakpointPercentileThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#buffer_size CcKnowledgeBase#buffer_size}
    */
    readonly bufferSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#max_tokens CcKnowledgeBase#max_tokens}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#chunking_strategy CcKnowledgeBase#chunking_strategy}
    */
    readonly chunkingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration CcKnowledgeBase#fixed_size_chunking_configuration}
    */
    readonly fixedSizeChunkingConfiguration?: FixedSizeChunkingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration CcKnowledgeBase#hierarchical_chunking_configuration}
    */
    readonly hierarchicalChunkingConfiguration?: HierarchicalChunkingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration CcKnowledgeBase#semantic_chunking_configuration}
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
export interface ParsingPromptProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#parsing_prompt_text CcKnowledgeBase#parsing_prompt_text}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#model_arn CcKnowledgeBase#model_arn}
    */
    readonly modelArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#parsing_prompt CcKnowledgeBase#parsing_prompt}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration CcKnowledgeBase#bedrock_foundation_model_configuration}
    */
    readonly bedrockFoundationModelConfiguration?: BedrockFoundationModelConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#parsing_strategy CcKnowledgeBase#parsing_strategy}
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
            this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
            this._parsingStrategy = value.parsingStrategy;
        }
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#chunking_configuration CcKnowledgeBase#chunking_configuration}
    */
    readonly chunkingConfiguration?: ChunkingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_knowledge_base#parsing_configuration CcKnowledgeBase#parsing_configuration}
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
