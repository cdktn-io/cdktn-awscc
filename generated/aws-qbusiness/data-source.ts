// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#application_id CcDataSource#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#configuration CcDataSource#configuration}
    */
    readonly configuration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#description CcDataSource#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#display_name CcDataSource#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#document_enrichment_configuration CcDataSource#document_enrichment_configuration}
    */
    readonly documentEnrichmentConfiguration?: CcDataSource.DocumentEnrichmentConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#index_id CcDataSource#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#media_extraction_configuration CcDataSource#media_extraction_configuration}
    */
    readonly mediaExtractionConfiguration?: CcDataSource.MediaExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#sync_schedule CcDataSource#sync_schedule}
    */
    readonly syncSchedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#tags CcDataSource#tags}
    */
    readonly tags?: CcDataSource.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#vpc_configuration CcDataSource#vpc_configuration}
    */
    readonly vpcConfiguration?: CcDataSource.DataSourceVpcConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source awscc_qbusiness_data_source}
*/
export class CcDataSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_qbusiness_data_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSource to import
    * @param importFromId The id of the existing CcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_data_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source awscc_qbusiness_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcDataSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_qbusiness_data_source',
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
        this._applicationId = config.applicationId;
        this._configuration = config.configuration;
        this._description = config.description;
        this._displayName = config.displayName;
        this._documentEnrichmentConfiguration.internalValue = config.documentEnrichmentConfiguration;
        this._indexId = config.indexId;
        this._mediaExtractionConfiguration.internalValue = config.mediaExtractionConfiguration;
        this._roleArn = config.roleArn;
        this._syncSchedule = config.syncSchedule;
        this._tags.internalValue = config.tags;
        this._vpcConfiguration.internalValue = config.vpcConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // configuration - computed: false, optional: false, required: true
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_source_arn - computed: true, optional: false, required: false
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }

    // data_source_id - computed: true, optional: false, required: false
    public get dataSourceId() {
        return this.getStringAttribute('data_source_id');
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // document_enrichment_configuration - computed: true, optional: true, required: false
    private _documentEnrichmentConfiguration = new CcDataSource.DocumentEnrichmentConfigurationPropertyOutputReference(this, "document_enrichment_configuration");
    public get documentEnrichmentConfiguration() {
        return this._documentEnrichmentConfiguration;
    }
    public putDocumentEnrichmentConfiguration(value: CcDataSource.DocumentEnrichmentConfigurationProperty) {
        this._documentEnrichmentConfiguration.internalValue = value;
    }
    public resetDocumentEnrichmentConfiguration() {
        this._documentEnrichmentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentEnrichmentConfigurationInput() {
        return this._documentEnrichmentConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // index_id - computed: false, optional: false, required: true
    private _indexId?: string; 
    public get indexId() {
        return this.getStringAttribute('index_id');
    }
    public set indexId(value: string) {
        this._indexId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get indexIdInput() {
        return this._indexId;
    }

    // media_extraction_configuration - computed: true, optional: true, required: false
    private _mediaExtractionConfiguration = new CcDataSource.MediaExtractionConfigurationPropertyOutputReference(this, "media_extraction_configuration");
    public get mediaExtractionConfiguration() {
        return this._mediaExtractionConfiguration;
    }
    public putMediaExtractionConfiguration(value: CcDataSource.MediaExtractionConfigurationProperty) {
        this._mediaExtractionConfiguration.internalValue = value;
    }
    public resetMediaExtractionConfiguration() {
        this._mediaExtractionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaExtractionConfigurationInput() {
        return this._mediaExtractionConfiguration.internalValue;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // sync_schedule - computed: true, optional: true, required: false
    private _syncSchedule?: string; 
    public get syncSchedule() {
        return this.getStringAttribute('sync_schedule');
    }
    public set syncSchedule(value: string) {
        this._syncSchedule = value;
    }
    public resetSyncSchedule() {
        this._syncSchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncScheduleInput() {
        return this._syncSchedule;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataSource.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataSource.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new CcDataSource.DataSourceVpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: CcDataSource.DataSourceVpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_id: cdktn.stringToTerraform(this._applicationId),
            configuration: cdktn.stringToTerraform(this._configuration),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            document_enrichment_configuration: ccDataSourceDocumentEnrichmentConfigurationPropertyToTerraform(this._documentEnrichmentConfiguration.internalValue),
            index_id: cdktn.stringToTerraform(this._indexId),
            media_extraction_configuration: ccDataSourceMediaExtractionConfigurationPropertyToTerraform(this._mediaExtractionConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            sync_schedule: cdktn.stringToTerraform(this._syncSchedule),
            tags: cdktn.listMapper(ccDataSourceTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_configuration: ccDataSourceDataSourceVpcConfigurationPropertyToTerraform(this._vpcConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: cdktn.stringToHclTerraform(this._configuration),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            document_enrichment_configuration: {
                value: ccDataSourceDocumentEnrichmentConfigurationPropertyToHclTerraform(this._documentEnrichmentConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DocumentEnrichmentConfigurationProperty",
            },
            index_id: {
                value: cdktn.stringToHclTerraform(this._indexId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            media_extraction_configuration: {
                value: ccDataSourceMediaExtractionConfigurationPropertyToHclTerraform(this._mediaExtractionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.MediaExtractionConfigurationProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_schedule: {
                value: cdktn.stringToHclTerraform(this._syncSchedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataSourceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSource.TagPropertyList",
            },
            vpc_configuration: {
                value: ccDataSourceDataSourceVpcConfigurationPropertyToHclTerraform(this._vpcConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceVpcConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSourceDocumentAttributeValuePropertyToTerraform(struct?: CcDataSource.DocumentAttributeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_value: cdktn.stringToTerraform(struct!.dateValue),
        long_value: cdktn.numberToTerraform(struct!.longValue),
        string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDataSourceDocumentAttributeValuePropertyToHclTerraform(struct?: CcDataSource.DocumentAttributeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_value: {
            value: cdktn.stringToHclTerraform(struct!.dateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        long_value: {
            value: cdktn.numberToHclTerraform(struct!.longValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_list_value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentAttributeConditionPropertyToTerraform(struct?: CcDataSource.DocumentAttributeConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: ccDataSourceDocumentAttributeValuePropertyToTerraform(struct!.value),
    }
}


export function ccDataSourceDocumentAttributeConditionPropertyToHclTerraform(struct?: CcDataSource.DocumentAttributeConditionProperty | cdktn.IResolvable): any {
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
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccDataSourceDocumentAttributeValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentAttributeValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_value: cdktn.stringToTerraform(struct!.dateValue),
        long_value: cdktn.numberToTerraform(struct!.longValue),
        string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_value: {
            value: cdktn.stringToHclTerraform(struct!.dateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        long_value: {
            value: cdktn.numberToHclTerraform(struct!.longValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_list_value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentAttributeTargetPropertyToTerraform(struct?: CcDataSource.DocumentAttributeTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_value_operator: cdktn.stringToTerraform(struct!.attributeValueOperator),
        key: cdktn.stringToTerraform(struct!.key),
        value: ccDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyToTerraform(struct!.value),
    }
}


export function ccDataSourceDocumentAttributeTargetPropertyToHclTerraform(struct?: CcDataSource.DocumentAttributeTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_value_operator: {
            value: cdktn.stringToHclTerraform(struct!.attributeValueOperator),
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
        value: {
            value: ccDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceInlineDocumentEnrichmentConfigurationPropertyToTerraform(struct?: CcDataSource.InlineDocumentEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition: ccDataSourceDocumentAttributeConditionPropertyToTerraform(struct!.condition),
        document_content_operator: cdktn.stringToTerraform(struct!.documentContentOperator),
        target: ccDataSourceDocumentAttributeTargetPropertyToTerraform(struct!.target),
    }
}


export function ccDataSourceInlineDocumentEnrichmentConfigurationPropertyToHclTerraform(struct?: CcDataSource.InlineDocumentEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition: {
            value: ccDataSourceDocumentAttributeConditionPropertyToHclTerraform(struct!.condition),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentAttributeConditionProperty",
        },
        document_content_operator: {
            value: cdktn.stringToHclTerraform(struct!.documentContentOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: ccDataSourceDocumentAttributeTargetPropertyToHclTerraform(struct!.target),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentAttributeTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_value: cdktn.stringToTerraform(struct!.dateValue),
        long_value: cdktn.numberToTerraform(struct!.longValue),
        string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_value: {
            value: cdktn.stringToHclTerraform(struct!.dateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        long_value: {
            value: cdktn.numberToHclTerraform(struct!.longValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_list_value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyToTerraform(struct!.value),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable): any {
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
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceHookConfigurationPropertyToTerraform(struct?: CcDataSource.HookConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invocation_condition: ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct!.invocationCondition),
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    }
}


export function ccDataSourceHookConfigurationPropertyToHclTerraform(struct?: CcDataSource.HookConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invocation_condition: {
            value: ccDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct!.invocationCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty",
        },
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
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
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_value: cdktn.stringToTerraform(struct!.dateValue),
        long_value: cdktn.numberToTerraform(struct!.longValue),
        string_list_value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringListValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_value: {
            value: cdktn.stringToHclTerraform(struct!.dateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        long_value: {
            value: cdktn.numberToHclTerraform(struct!.longValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_list_value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringListValue),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyToTerraform(struct!.value),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable): any {
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
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourcePreExtractionHookConfigurationPropertyToTerraform(struct?: CcDataSource.PreExtractionHookConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invocation_condition: ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToTerraform(struct!.invocationCondition),
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    }
}


export function ccDataSourcePreExtractionHookConfigurationPropertyToHclTerraform(struct?: CcDataSource.PreExtractionHookConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invocation_condition: {
            value: ccDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyToHclTerraform(struct!.invocationCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty",
        },
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
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
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDocumentEnrichmentConfigurationPropertyToTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inline_configurations: cdktn.listMapper(ccDataSourceInlineDocumentEnrichmentConfigurationPropertyToTerraform, false)(struct!.inlineConfigurations),
        post_extraction_hook_configuration: ccDataSourceHookConfigurationPropertyToTerraform(struct!.postExtractionHookConfiguration),
        pre_extraction_hook_configuration: ccDataSourcePreExtractionHookConfigurationPropertyToTerraform(struct!.preExtractionHookConfiguration),
    }
}


export function ccDataSourceDocumentEnrichmentConfigurationPropertyToHclTerraform(struct?: CcDataSource.DocumentEnrichmentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inline_configurations: {
            value: cdktn.listMapperHcl(ccDataSourceInlineDocumentEnrichmentConfigurationPropertyToHclTerraform, false)(struct!.inlineConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "InlineDocumentEnrichmentConfigurationPropertyList",
        },
        post_extraction_hook_configuration: {
            value: ccDataSourceHookConfigurationPropertyToHclTerraform(struct!.postExtractionHookConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HookConfigurationProperty",
        },
        pre_extraction_hook_configuration: {
            value: ccDataSourcePreExtractionHookConfigurationPropertyToHclTerraform(struct!.preExtractionHookConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PreExtractionHookConfigurationProperty",
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


export function ccDataSourceTagPropertyToTerraform(struct?: CcDataSource.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataSourceTagPropertyToHclTerraform(struct?: CcDataSource.TagProperty | cdktn.IResolvable): any {
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


export function ccDataSourceDataSourceVpcConfigurationPropertyToTerraform(struct?: CcDataSource.DataSourceVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccDataSourceDataSourceVpcConfigurationPropertyToHclTerraform(struct?: CcDataSource.DataSourceVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataSource {
export interface DocumentAttributeValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#date_value CcDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#long_value CcDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_list_value CcDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_value CcDataSource#string_value}
    */
    readonly stringValue?: string;
}
export class DocumentAttributeValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentAttributeValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateValue = this._dateValue;
        }
        if (this._longValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.longValue = this._longValue;
        }
        if (this._stringListValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValue = this._stringListValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentAttributeValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateValue = undefined;
            this._longValue = undefined;
            this._stringListValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateValue = value.dateValue;
            this._longValue = value.longValue;
            this._stringListValue = value.stringListValue;
            this._stringValue = value.stringValue;
        }
    }

    // date_value - computed: true, optional: true, required: false
    private _dateValue?: string; 
    public get dateValue() {
        return this.getStringAttribute('date_value');
    }
    public set dateValue(value: string) {
        this._dateValue = value;
    }
    public resetDateValue() {
        this._dateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateValueInput() {
        return this._dateValue;
    }

    // long_value - computed: true, optional: true, required: false
    private _longValue?: number; 
    public get longValue() {
        return this.getNumberAttribute('long_value');
    }
    public set longValue(value: number) {
        this._longValue = value;
    }
    public resetLongValue() {
        this._longValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longValueInput() {
        return this._longValue;
    }

    // string_list_value - computed: true, optional: true, required: false
    private _stringListValue?: string[]; 
    public get stringListValue() {
        return this.getListAttribute('string_list_value');
    }
    public set stringListValue(value: string[]) {
        this._stringListValue = value;
    }
    public resetStringListValue() {
        this._stringListValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValueInput() {
        return this._stringListValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DocumentAttributeConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#operator CcDataSource#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#value CcDataSource#value}
    */
    readonly value?: DocumentAttributeValueProperty;
}
export class DocumentAttributeConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentAttributeConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentAttributeConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._operator = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._operator = value.operator;
            this._value.internalValue = value.value;
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

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DocumentAttributeValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DocumentAttributeValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#date_value CcDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#long_value CcDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_list_value CcDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_value CcDataSource#string_value}
    */
    readonly stringValue?: string;
}
export class DocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateValue = this._dateValue;
        }
        if (this._longValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.longValue = this._longValue;
        }
        if (this._stringListValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValue = this._stringListValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateValue = undefined;
            this._longValue = undefined;
            this._stringListValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateValue = value.dateValue;
            this._longValue = value.longValue;
            this._stringListValue = value.stringListValue;
            this._stringValue = value.stringValue;
        }
    }

    // date_value - computed: true, optional: true, required: false
    private _dateValue?: string; 
    public get dateValue() {
        return this.getStringAttribute('date_value');
    }
    public set dateValue(value: string) {
        this._dateValue = value;
    }
    public resetDateValue() {
        this._dateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateValueInput() {
        return this._dateValue;
    }

    // long_value - computed: true, optional: true, required: false
    private _longValue?: number; 
    public get longValue() {
        return this.getNumberAttribute('long_value');
    }
    public set longValue(value: number) {
        this._longValue = value;
    }
    public resetLongValue() {
        this._longValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longValueInput() {
        return this._longValue;
    }

    // string_list_value - computed: true, optional: true, required: false
    private _stringListValue?: string[]; 
    public get stringListValue() {
        return this.getListAttribute('string_list_value');
    }
    public set stringListValue(value: string[]) {
        this._stringListValue = value;
    }
    public resetStringListValue() {
        this._stringListValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValueInput() {
        return this._stringListValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DocumentAttributeTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#attribute_value_operator CcDataSource#attribute_value_operator}
    */
    readonly attributeValueOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#value CcDataSource#value}
    */
    readonly value?: DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty;
}
export class DocumentAttributeTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentAttributeTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeValueOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeValueOperator = this._attributeValueOperator;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentAttributeTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeValueOperator = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeValueOperator = value.attributeValueOperator;
            this._key = value.key;
            this._value.internalValue = value.value;
        }
    }

    // attribute_value_operator - computed: true, optional: true, required: false
    private _attributeValueOperator?: string; 
    public get attributeValueOperator() {
        return this.getStringAttribute('attribute_value_operator');
    }
    public set attributeValueOperator(value: string) {
        this._attributeValueOperator = value;
    }
    public resetAttributeValueOperator() {
        this._attributeValueOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeValueOperatorInput() {
        return this._attributeValueOperator;
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
    private _value = new DocumentEnrichmentConfigurationInlineConfigurationsTargetValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DocumentEnrichmentConfigurationInlineConfigurationsTargetValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface InlineDocumentEnrichmentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#condition CcDataSource#condition}
    */
    readonly condition?: DocumentAttributeConditionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#document_content_operator CcDataSource#document_content_operator}
    */
    readonly documentContentOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#target CcDataSource#target}
    */
    readonly target?: DocumentAttributeTargetProperty;
}
export class InlineDocumentEnrichmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InlineDocumentEnrichmentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._condition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition?.internalValue;
        }
        if (this._documentContentOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentContentOperator = this._documentContentOperator;
        }
        if (this._target?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InlineDocumentEnrichmentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._condition.internalValue = undefined;
            this._documentContentOperator = undefined;
            this._target.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._condition.internalValue = value.condition;
            this._documentContentOperator = value.documentContentOperator;
            this._target.internalValue = value.target;
        }
    }

    // condition - computed: true, optional: true, required: false
    private _condition = new DocumentAttributeConditionPropertyOutputReference(this, "condition");
    public get condition() {
        return this._condition;
    }
    public putCondition(value: DocumentAttributeConditionProperty) {
        this._condition.internalValue = value;
    }
    public resetCondition() {
        this._condition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition.internalValue;
    }

    // document_content_operator - computed: true, optional: true, required: false
    private _documentContentOperator?: string; 
    public get documentContentOperator() {
        return this.getStringAttribute('document_content_operator');
    }
    public set documentContentOperator(value: string) {
        this._documentContentOperator = value;
    }
    public resetDocumentContentOperator() {
        this._documentContentOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentContentOperatorInput() {
        return this._documentContentOperator;
    }

    // target - computed: true, optional: true, required: false
    private _target = new DocumentAttributeTargetPropertyOutputReference(this, "target");
    public get target() {
        return this._target;
    }
    public putTarget(value: DocumentAttributeTargetProperty) {
        this._target.internalValue = value;
    }
    public resetTarget() {
        this._target.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target.internalValue;
    }
}

export class InlineDocumentEnrichmentConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : InlineDocumentEnrichmentConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): InlineDocumentEnrichmentConfigurationPropertyOutputReference {
        return new InlineDocumentEnrichmentConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#date_value CcDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#long_value CcDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_list_value CcDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_value CcDataSource#string_value}
    */
    readonly stringValue?: string;
}
export class DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateValue = this._dateValue;
        }
        if (this._longValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.longValue = this._longValue;
        }
        if (this._stringListValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValue = this._stringListValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateValue = undefined;
            this._longValue = undefined;
            this._stringListValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateValue = value.dateValue;
            this._longValue = value.longValue;
            this._stringListValue = value.stringListValue;
            this._stringValue = value.stringValue;
        }
    }

    // date_value - computed: true, optional: true, required: false
    private _dateValue?: string; 
    public get dateValue() {
        return this.getStringAttribute('date_value');
    }
    public set dateValue(value: string) {
        this._dateValue = value;
    }
    public resetDateValue() {
        this._dateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateValueInput() {
        return this._dateValue;
    }

    // long_value - computed: true, optional: true, required: false
    private _longValue?: number; 
    public get longValue() {
        return this.getNumberAttribute('long_value');
    }
    public set longValue(value: number) {
        this._longValue = value;
    }
    public resetLongValue() {
        this._longValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longValueInput() {
        return this._longValue;
    }

    // string_list_value - computed: true, optional: true, required: false
    private _stringListValue?: string[]; 
    public get stringListValue() {
        return this.getListAttribute('string_list_value');
    }
    public set stringListValue(value: string[]) {
        this._stringListValue = value;
    }
    public resetStringListValue() {
        this._stringListValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValueInput() {
        return this._stringListValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#operator CcDataSource#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#value CcDataSource#value}
    */
    readonly value?: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty;
}
export class DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._operator = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._operator = value.operator;
            this._value.internalValue = value.value;
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

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface HookConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#invocation_condition CcDataSource#invocation_condition}
    */
    readonly invocationCondition?: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#lambda_arn CcDataSource#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#s3_bucket_name CcDataSource#s3_bucket_name}
    */
    readonly s3BucketName?: string;
}
export class HookConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HookConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invocationCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
        }
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HookConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invocationCondition.internalValue = undefined;
            this._lambdaArn = undefined;
            this._roleArn = undefined;
            this._s3BucketName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invocationCondition.internalValue = value.invocationCondition;
            this._lambdaArn = value.lambdaArn;
            this._roleArn = value.roleArn;
            this._s3BucketName = value.s3BucketName;
        }
    }

    // invocation_condition - computed: true, optional: true, required: false
    private _invocationCondition = new DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionPropertyOutputReference(this, "invocation_condition");
    public get invocationCondition() {
        return this._invocationCondition;
    }
    public putInvocationCondition(value: DocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionProperty) {
        this._invocationCondition.internalValue = value;
    }
    public resetInvocationCondition() {
        this._invocationCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationConditionInput() {
        return this._invocationCondition.internalValue;
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

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }
}
export interface DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#date_value CcDataSource#date_value}
    */
    readonly dateValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#long_value CcDataSource#long_value}
    */
    readonly longValue?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_list_value CcDataSource#string_list_value}
    */
    readonly stringListValue?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#string_value CcDataSource#string_value}
    */
    readonly stringValue?: string;
}
export class DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateValue = this._dateValue;
        }
        if (this._longValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.longValue = this._longValue;
        }
        if (this._stringListValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringListValue = this._stringListValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateValue = undefined;
            this._longValue = undefined;
            this._stringListValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateValue = value.dateValue;
            this._longValue = value.longValue;
            this._stringListValue = value.stringListValue;
            this._stringValue = value.stringValue;
        }
    }

    // date_value - computed: true, optional: true, required: false
    private _dateValue?: string; 
    public get dateValue() {
        return this.getStringAttribute('date_value');
    }
    public set dateValue(value: string) {
        this._dateValue = value;
    }
    public resetDateValue() {
        this._dateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateValueInput() {
        return this._dateValue;
    }

    // long_value - computed: true, optional: true, required: false
    private _longValue?: number; 
    public get longValue() {
        return this.getNumberAttribute('long_value');
    }
    public set longValue(value: number) {
        this._longValue = value;
    }
    public resetLongValue() {
        this._longValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longValueInput() {
        return this._longValue;
    }

    // string_list_value - computed: true, optional: true, required: false
    private _stringListValue?: string[]; 
    public get stringListValue() {
        return this.getListAttribute('string_list_value');
    }
    public set stringListValue(value: string[]) {
        this._stringListValue = value;
    }
    public resetStringListValue() {
        this._stringListValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringListValueInput() {
        return this._stringListValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#operator CcDataSource#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#value CcDataSource#value}
    */
    readonly value?: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty;
}
export class DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._operator = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._operator = value.operator;
            this._value.internalValue = value.value;
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

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }

    // value - computed: true, optional: true, required: false
    private _value = new DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface PreExtractionHookConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#invocation_condition CcDataSource#invocation_condition}
    */
    readonly invocationCondition?: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#lambda_arn CcDataSource#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#role_arn CcDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#s3_bucket_name CcDataSource#s3_bucket_name}
    */
    readonly s3BucketName?: string;
}
export class PreExtractionHookConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreExtractionHookConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invocationCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationCondition = this._invocationCondition?.internalValue;
        }
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreExtractionHookConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invocationCondition.internalValue = undefined;
            this._lambdaArn = undefined;
            this._roleArn = undefined;
            this._s3BucketName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invocationCondition.internalValue = value.invocationCondition;
            this._lambdaArn = value.lambdaArn;
            this._roleArn = value.roleArn;
            this._s3BucketName = value.s3BucketName;
        }
    }

    // invocation_condition - computed: true, optional: true, required: false
    private _invocationCondition = new DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionPropertyOutputReference(this, "invocation_condition");
    public get invocationCondition() {
        return this._invocationCondition;
    }
    public putInvocationCondition(value: DocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionProperty) {
        this._invocationCondition.internalValue = value;
    }
    public resetInvocationCondition() {
        this._invocationCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationConditionInput() {
        return this._invocationCondition.internalValue;
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

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }
}
export interface DocumentEnrichmentConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#inline_configurations CcDataSource#inline_configurations}
    */
    readonly inlineConfigurations?: InlineDocumentEnrichmentConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#post_extraction_hook_configuration CcDataSource#post_extraction_hook_configuration}
    */
    readonly postExtractionHookConfiguration?: HookConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration CcDataSource#pre_extraction_hook_configuration}
    */
    readonly preExtractionHookConfiguration?: PreExtractionHookConfigurationProperty;
}
export class DocumentEnrichmentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentEnrichmentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inlineConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inlineConfigurations = this._inlineConfigurations?.internalValue;
        }
        if (this._postExtractionHookConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postExtractionHookConfiguration = this._postExtractionHookConfiguration?.internalValue;
        }
        if (this._preExtractionHookConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preExtractionHookConfiguration = this._preExtractionHookConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentEnrichmentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inlineConfigurations.internalValue = undefined;
            this._postExtractionHookConfiguration.internalValue = undefined;
            this._preExtractionHookConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inlineConfigurations.internalValue = value.inlineConfigurations;
            this._postExtractionHookConfiguration.internalValue = value.postExtractionHookConfiguration;
            this._preExtractionHookConfiguration.internalValue = value.preExtractionHookConfiguration;
        }
    }

    // inline_configurations - computed: true, optional: true, required: false
    private _inlineConfigurations = new InlineDocumentEnrichmentConfigurationPropertyList(this, "inline_configurations", false);
    public get inlineConfigurations() {
        return this._inlineConfigurations;
    }
    public putInlineConfigurations(value: InlineDocumentEnrichmentConfigurationProperty[] | cdktn.IResolvable) {
        this._inlineConfigurations.internalValue = value;
    }
    public resetInlineConfigurations() {
        this._inlineConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineConfigurationsInput() {
        return this._inlineConfigurations.internalValue;
    }

    // post_extraction_hook_configuration - computed: true, optional: true, required: false
    private _postExtractionHookConfiguration = new HookConfigurationPropertyOutputReference(this, "post_extraction_hook_configuration");
    public get postExtractionHookConfiguration() {
        return this._postExtractionHookConfiguration;
    }
    public putPostExtractionHookConfiguration(value: HookConfigurationProperty) {
        this._postExtractionHookConfiguration.internalValue = value;
    }
    public resetPostExtractionHookConfiguration() {
        this._postExtractionHookConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postExtractionHookConfigurationInput() {
        return this._postExtractionHookConfiguration.internalValue;
    }

    // pre_extraction_hook_configuration - computed: true, optional: true, required: false
    private _preExtractionHookConfiguration = new PreExtractionHookConfigurationPropertyOutputReference(this, "pre_extraction_hook_configuration");
    public get preExtractionHookConfiguration() {
        return this._preExtractionHookConfiguration;
    }
    public putPreExtractionHookConfiguration(value: PreExtractionHookConfigurationProperty) {
        this._preExtractionHookConfiguration.internalValue = value;
    }
    public resetPreExtractionHookConfiguration() {
        this._preExtractionHookConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preExtractionHookConfigurationInput() {
        return this._preExtractionHookConfiguration.internalValue;
    }
}
export interface AudioExtractionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#audio_extraction_status CcDataSource#audio_extraction_status}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#image_extraction_status CcDataSource#image_extraction_status}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#video_extraction_status CcDataSource#video_extraction_status}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#audio_extraction_configuration CcDataSource#audio_extraction_configuration}
    */
    readonly audioExtractionConfiguration?: AudioExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#image_extraction_configuration CcDataSource#image_extraction_configuration}
    */
    readonly imageExtractionConfiguration?: ImageExtractionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#video_extraction_configuration CcDataSource#video_extraction_configuration}
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#key CcDataSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#value CcDataSource#value}
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
export interface DataSourceVpcConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#security_group_ids CcDataSource#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_data_source#subnet_ids CcDataSource#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class DataSourceVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
