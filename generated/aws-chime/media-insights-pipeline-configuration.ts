// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMediaInsightsPipelineConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The elements in the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#elements CcMediaInsightsPipelineConfiguration#elements}
    */
    readonly elements: CcMediaInsightsPipelineConfiguration.ElementsProperty[] | cdktn.IResolvable;
    /**
    * The name of the media insights pipeline configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name CcMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}
    */
    readonly mediaInsightsPipelineConfigurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration CcMediaInsightsPipelineConfiguration#real_time_alert_configuration}
    */
    readonly realTimeAlertConfiguration?: CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty;
    /**
    * The ARN of the role used by the service to access Amazon Web Services resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn CcMediaInsightsPipelineConfiguration#resource_access_role_arn}
    */
    readonly resourceAccessRoleArn: string;
    /**
    * The tags associated with the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#tags CcMediaInsightsPipelineConfiguration#tags}
    */
    readonly tags?: CcMediaInsightsPipelineConfiguration.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}
*/
export class CcMediaInsightsPipelineConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_chime_media_insights_pipeline_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMediaInsightsPipelineConfiguration to import
    * @param importFromId The id of the existing CcMediaInsightsPipelineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMediaInsightsPipelineConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_media_insights_pipeline_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMediaInsightsPipelineConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcMediaInsightsPipelineConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_chime_media_insights_pipeline_configuration',
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
        this._elements.internalValue = config.elements;
        this._mediaInsightsPipelineConfigurationName = config.mediaInsightsPipelineConfigurationName;
        this._realTimeAlertConfiguration.internalValue = config.realTimeAlertConfiguration;
        this._resourceAccessRoleArn = config.resourceAccessRoleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // elements - computed: false, optional: false, required: true
    private _elements = new CcMediaInsightsPipelineConfiguration.ElementsPropertyList(this, "elements", false);
    public get elements() {
        return this._elements;
    }
    public putElements(value: CcMediaInsightsPipelineConfiguration.ElementsProperty[] | cdktn.IResolvable) {
        this._elements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get elementsInput() {
        return this._elements.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // media_insights_pipeline_configuration_arn - computed: true, optional: false, required: false
    public get mediaInsightsPipelineConfigurationArn() {
        return this.getStringAttribute('media_insights_pipeline_configuration_arn');
    }

    // media_insights_pipeline_configuration_id - computed: true, optional: false, required: false
    public get mediaInsightsPipelineConfigurationId() {
        return this.getStringAttribute('media_insights_pipeline_configuration_id');
    }

    // media_insights_pipeline_configuration_name - computed: false, optional: false, required: true
    private _mediaInsightsPipelineConfigurationName?: string; 
    public get mediaInsightsPipelineConfigurationName() {
        return this.getStringAttribute('media_insights_pipeline_configuration_name');
    }
    public set mediaInsightsPipelineConfigurationName(value: string) {
        this._mediaInsightsPipelineConfigurationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaInsightsPipelineConfigurationNameInput() {
        return this._mediaInsightsPipelineConfigurationName;
    }

    // real_time_alert_configuration - computed: true, optional: true, required: false
    private _realTimeAlertConfiguration = new CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationPropertyOutputReference(this, "real_time_alert_configuration");
    public get realTimeAlertConfiguration() {
        return this._realTimeAlertConfiguration;
    }
    public putRealTimeAlertConfiguration(value: CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty) {
        this._realTimeAlertConfiguration.internalValue = value;
    }
    public resetRealTimeAlertConfiguration() {
        this._realTimeAlertConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get realTimeAlertConfigurationInput() {
        return this._realTimeAlertConfiguration.internalValue;
    }

    // resource_access_role_arn - computed: false, optional: false, required: true
    private _resourceAccessRoleArn?: string; 
    public get resourceAccessRoleArn() {
        return this.getStringAttribute('resource_access_role_arn');
    }
    public set resourceAccessRoleArn(value: string) {
        this._resourceAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAccessRoleArnInput() {
        return this._resourceAccessRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMediaInsightsPipelineConfiguration.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMediaInsightsPipelineConfiguration.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_timestamp - computed: true, optional: false, required: false
    public get updatedTimestamp() {
        return this.getStringAttribute('updated_timestamp');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            elements: cdktn.listMapper(ccMediaInsightsPipelineConfigurationElementsPropertyToTerraform, false)(this._elements.internalValue),
            media_insights_pipeline_configuration_name: cdktn.stringToTerraform(this._mediaInsightsPipelineConfigurationName),
            real_time_alert_configuration: ccMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToTerraform(this._realTimeAlertConfiguration.internalValue),
            resource_access_role_arn: cdktn.stringToTerraform(this._resourceAccessRoleArn),
            tags: cdktn.listMapper(ccMediaInsightsPipelineConfigurationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            elements: {
                value: cdktn.listMapperHcl(ccMediaInsightsPipelineConfigurationElementsPropertyToHclTerraform, false)(this._elements.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMediaInsightsPipelineConfiguration.ElementsPropertyList",
            },
            media_insights_pipeline_configuration_name: {
                value: cdktn.stringToHclTerraform(this._mediaInsightsPipelineConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            real_time_alert_configuration: {
                value: ccMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToHclTerraform(this._realTimeAlertConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty",
            },
            resource_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._resourceAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMediaInsightsPipelineConfigurationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMediaInsightsPipelineConfiguration.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_redaction_output: cdktn.stringToTerraform(struct!.contentRedactionOutput),
        data_access_role_arn: cdktn.stringToTerraform(struct!.dataAccessRoleArn),
        output_encryption_kms_key_id: cdktn.stringToTerraform(struct!.outputEncryptionKmsKeyId),
        output_location: cdktn.stringToTerraform(struct!.outputLocation),
    }
}


export function ccMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.PostCallAnalyticsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_redaction_output: {
            value: cdktn.stringToHclTerraform(struct!.contentRedactionOutput),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_encryption_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.outputEncryptionKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_location: {
            value: cdktn.stringToHclTerraform(struct!.outputLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        call_analytics_stream_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.callAnalyticsStreamCategories),
        content_identification_type: cdktn.stringToTerraform(struct!.contentIdentificationType),
        content_redaction_type: cdktn.stringToTerraform(struct!.contentRedactionType),
        enable_partial_results_stabilization: cdktn.booleanToTerraform(struct!.enablePartialResultsStabilization),
        filter_partial_results: cdktn.booleanToTerraform(struct!.filterPartialResults),
        language_code: cdktn.stringToTerraform(struct!.languageCode),
        language_model_name: cdktn.stringToTerraform(struct!.languageModelName),
        partial_results_stability: cdktn.stringToTerraform(struct!.partialResultsStability),
        pii_entity_types: cdktn.stringToTerraform(struct!.piiEntityTypes),
        post_call_analytics_settings: ccMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToTerraform(struct!.postCallAnalyticsSettings),
        vocabulary_filter_method: cdktn.stringToTerraform(struct!.vocabularyFilterMethod),
        vocabulary_filter_name: cdktn.stringToTerraform(struct!.vocabularyFilterName),
        vocabulary_name: cdktn.stringToTerraform(struct!.vocabularyName),
    }
}


export function ccMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        call_analytics_stream_categories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.callAnalyticsStreamCategories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        content_identification_type: {
            value: cdktn.stringToHclTerraform(struct!.contentIdentificationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_redaction_type: {
            value: cdktn.stringToHclTerraform(struct!.contentRedactionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_partial_results_stabilization: {
            value: cdktn.booleanToHclTerraform(struct!.enablePartialResultsStabilization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        filter_partial_results: {
            value: cdktn.booleanToHclTerraform(struct!.filterPartialResults),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        language_code: {
            value: cdktn.stringToHclTerraform(struct!.languageCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language_model_name: {
            value: cdktn.stringToHclTerraform(struct!.languageModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partial_results_stability: {
            value: cdktn.stringToHclTerraform(struct!.partialResultsStability),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pii_entity_types: {
            value: cdktn.stringToHclTerraform(struct!.piiEntityTypes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_call_analytics_settings: {
            value: ccMediaInsightsPipelineConfigurationPostCallAnalyticsSettingsPropertyToHclTerraform(struct!.postCallAnalyticsSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "PostCallAnalyticsSettingsProperty",
        },
        vocabulary_filter_method: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyFilterMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_filter_name: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyFilterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_name: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_identification_type: cdktn.stringToTerraform(struct!.contentIdentificationType),
        content_redaction_type: cdktn.stringToTerraform(struct!.contentRedactionType),
        enable_partial_results_stabilization: cdktn.booleanToTerraform(struct!.enablePartialResultsStabilization),
        filter_partial_results: cdktn.booleanToTerraform(struct!.filterPartialResults),
        identify_language: cdktn.booleanToTerraform(struct!.identifyLanguage),
        identify_multiple_languages: cdktn.booleanToTerraform(struct!.identifyMultipleLanguages),
        language_code: cdktn.stringToTerraform(struct!.languageCode),
        language_model_name: cdktn.stringToTerraform(struct!.languageModelName),
        language_options: cdktn.stringToTerraform(struct!.languageOptions),
        partial_results_stability: cdktn.stringToTerraform(struct!.partialResultsStability),
        pii_entity_types: cdktn.stringToTerraform(struct!.piiEntityTypes),
        preferred_language: cdktn.stringToTerraform(struct!.preferredLanguage),
        show_speaker_label: cdktn.booleanToTerraform(struct!.showSpeakerLabel),
        vocabulary_filter_method: cdktn.stringToTerraform(struct!.vocabularyFilterMethod),
        vocabulary_filter_name: cdktn.stringToTerraform(struct!.vocabularyFilterName),
        vocabulary_filter_names: cdktn.stringToTerraform(struct!.vocabularyFilterNames),
        vocabulary_name: cdktn.stringToTerraform(struct!.vocabularyName),
        vocabulary_names: cdktn.stringToTerraform(struct!.vocabularyNames),
    }
}


export function ccMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.AmazonTranscribeProcessorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_identification_type: {
            value: cdktn.stringToHclTerraform(struct!.contentIdentificationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_redaction_type: {
            value: cdktn.stringToHclTerraform(struct!.contentRedactionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_partial_results_stabilization: {
            value: cdktn.booleanToHclTerraform(struct!.enablePartialResultsStabilization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        filter_partial_results: {
            value: cdktn.booleanToHclTerraform(struct!.filterPartialResults),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        identify_language: {
            value: cdktn.booleanToHclTerraform(struct!.identifyLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        identify_multiple_languages: {
            value: cdktn.booleanToHclTerraform(struct!.identifyMultipleLanguages),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        language_code: {
            value: cdktn.stringToHclTerraform(struct!.languageCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language_model_name: {
            value: cdktn.stringToHclTerraform(struct!.languageModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language_options: {
            value: cdktn.stringToHclTerraform(struct!.languageOptions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partial_results_stability: {
            value: cdktn.stringToHclTerraform(struct!.partialResultsStability),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pii_entity_types: {
            value: cdktn.stringToHclTerraform(struct!.piiEntityTypes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preferred_language: {
            value: cdktn.stringToHclTerraform(struct!.preferredLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        show_speaker_label: {
            value: cdktn.booleanToHclTerraform(struct!.showSpeakerLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vocabulary_filter_method: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyFilterMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_filter_name: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyFilterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_filter_names: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyFilterNames),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_name: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vocabulary_names: {
            value: cdktn.stringToHclTerraform(struct!.vocabularyNames),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        insights_target: cdktn.stringToTerraform(struct!.insightsTarget),
    }
}


export function ccMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.KinesisDataStreamSinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        insights_target: {
            value: cdktn.stringToHclTerraform(struct!.insightsTarget),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
        recording_file_format: cdktn.stringToTerraform(struct!.recordingFileFormat),
    }
}


export function ccMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.S3RecordingSinkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        recording_file_format: {
            value: cdktn.stringToHclTerraform(struct!.recordingFileFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationElementsPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.ElementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_transcribe_call_analytics_processor_configuration: ccMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToTerraform(struct!.amazonTranscribeCallAnalyticsProcessorConfiguration),
        amazon_transcribe_processor_configuration: ccMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToTerraform(struct!.amazonTranscribeProcessorConfiguration),
        kinesis_data_stream_sink_configuration: ccMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToTerraform(struct!.kinesisDataStreamSinkConfiguration),
        s3_recording_sink_configuration: ccMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToTerraform(struct!.s3RecordingSinkConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMediaInsightsPipelineConfigurationElementsPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.ElementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_transcribe_call_analytics_processor_configuration: {
            value: ccMediaInsightsPipelineConfigurationAmazonTranscribeCallAnalyticsProcessorConfigurationPropertyToHclTerraform(struct!.amazonTranscribeCallAnalyticsProcessorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonTranscribeCallAnalyticsProcessorConfigurationProperty",
        },
        amazon_transcribe_processor_configuration: {
            value: ccMediaInsightsPipelineConfigurationAmazonTranscribeProcessorConfigurationPropertyToHclTerraform(struct!.amazonTranscribeProcessorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonTranscribeProcessorConfigurationProperty",
        },
        kinesis_data_stream_sink_configuration: {
            value: ccMediaInsightsPipelineConfigurationKinesisDataStreamSinkConfigurationPropertyToHclTerraform(struct!.kinesisDataStreamSinkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisDataStreamSinkConfigurationProperty",
        },
        s3_recording_sink_configuration: {
            value: ccMediaInsightsPipelineConfigurationS3RecordingSinkConfigurationPropertyToHclTerraform(struct!.s3RecordingSinkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3RecordingSinkConfigurationProperty",
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


export function ccMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.IssueDetectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.IssueDetectionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.KeywordMatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keywords),
        negate: cdktn.booleanToTerraform(struct!.negate),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.KeywordMatchConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        keywords: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keywords),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        negate: {
            value: cdktn.booleanToHclTerraform(struct!.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.SentimentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
        sentiment_type: cdktn.stringToTerraform(struct!.sentimentType),
        time_period: cdktn.numberToTerraform(struct!.timePeriod),
    }
}


export function ccMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.SentimentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sentiment_type: {
            value: cdktn.stringToHclTerraform(struct!.sentimentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_period: {
            value: cdktn.numberToHclTerraform(struct!.timePeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationRulesPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.RulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        issue_detection_configuration: ccMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToTerraform(struct!.issueDetectionConfiguration),
        keyword_match_configuration: ccMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToTerraform(struct!.keywordMatchConfiguration),
        sentiment_configuration: ccMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToTerraform(struct!.sentimentConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccMediaInsightsPipelineConfigurationRulesPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.RulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        issue_detection_configuration: {
            value: ccMediaInsightsPipelineConfigurationIssueDetectionConfigurationPropertyToHclTerraform(struct!.issueDetectionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IssueDetectionConfigurationProperty",
        },
        keyword_match_configuration: {
            value: ccMediaInsightsPipelineConfigurationKeywordMatchConfigurationPropertyToHclTerraform(struct!.keywordMatchConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KeywordMatchConfigurationProperty",
        },
        sentiment_configuration: {
            value: ccMediaInsightsPipelineConfigurationSentimentConfigurationPropertyToHclTerraform(struct!.sentimentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SentimentConfigurationProperty",
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


export function ccMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disabled: cdktn.booleanToTerraform(struct!.disabled),
        rules: cdktn.listMapper(ccMediaInsightsPipelineConfigurationRulesPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccMediaInsightsPipelineConfigurationRealTimeAlertConfigurationPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.RealTimeAlertConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disabled: {
            value: cdktn.booleanToHclTerraform(struct!.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rules: {
            value: cdktn.listMapperHcl(ccMediaInsightsPipelineConfigurationRulesPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMediaInsightsPipelineConfigurationTagsPropertyToTerraform(struct?: CcMediaInsightsPipelineConfiguration.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMediaInsightsPipelineConfigurationTagsPropertyToHclTerraform(struct?: CcMediaInsightsPipelineConfiguration.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcMediaInsightsPipelineConfiguration {
export interface PostCallAnalyticsSettingsProperty {
    /**
    * The content redaction output settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output CcMediaInsightsPipelineConfiguration#content_redaction_output}
    */
    readonly contentRedactionOutput?: string;
    /**
    * The ARN of the role used by Transcribe to upload post-call analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn CcMediaInsightsPipelineConfiguration#data_access_role_arn}
    */
    readonly dataAccessRoleArn?: string;
    /**
    * The ID of the KMS key used to encrypt the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id CcMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}
    */
    readonly outputEncryptionKmsKeyId?: string;
    /**
    * The URL of the Amazon S3 bucket for post-call data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_location CcMediaInsightsPipelineConfiguration#output_location}
    */
    readonly outputLocation?: string;
}
export class PostCallAnalyticsSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostCallAnalyticsSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentRedactionOutput !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentRedactionOutput = this._contentRedactionOutput;
        }
        if (this._dataAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataAccessRoleArn = this._dataAccessRoleArn;
        }
        if (this._outputEncryptionKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputEncryptionKmsKeyId = this._outputEncryptionKmsKeyId;
        }
        if (this._outputLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputLocation = this._outputLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostCallAnalyticsSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentRedactionOutput = undefined;
            this._dataAccessRoleArn = undefined;
            this._outputEncryptionKmsKeyId = undefined;
            this._outputLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentRedactionOutput = value.contentRedactionOutput;
            this._dataAccessRoleArn = value.dataAccessRoleArn;
            this._outputEncryptionKmsKeyId = value.outputEncryptionKmsKeyId;
            this._outputLocation = value.outputLocation;
        }
    }

    // content_redaction_output - computed: true, optional: true, required: false
    private _contentRedactionOutput?: string; 
    public get contentRedactionOutput() {
        return this.getStringAttribute('content_redaction_output');
    }
    public set contentRedactionOutput(value: string) {
        this._contentRedactionOutput = value;
    }
    public resetContentRedactionOutput() {
        this._contentRedactionOutput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentRedactionOutputInput() {
        return this._contentRedactionOutput;
    }

    // data_access_role_arn - computed: true, optional: true, required: false
    private _dataAccessRoleArn?: string; 
    public get dataAccessRoleArn() {
        return this.getStringAttribute('data_access_role_arn');
    }
    public set dataAccessRoleArn(value: string) {
        this._dataAccessRoleArn = value;
    }
    public resetDataAccessRoleArn() {
        this._dataAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleArnInput() {
        return this._dataAccessRoleArn;
    }

    // output_encryption_kms_key_id - computed: true, optional: true, required: false
    private _outputEncryptionKmsKeyId?: string; 
    public get outputEncryptionKmsKeyId() {
        return this.getStringAttribute('output_encryption_kms_key_id');
    }
    public set outputEncryptionKmsKeyId(value: string) {
        this._outputEncryptionKmsKeyId = value;
    }
    public resetOutputEncryptionKmsKeyId() {
        this._outputEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputEncryptionKmsKeyIdInput() {
        return this._outputEncryptionKmsKeyId;
    }

    // output_location - computed: true, optional: true, required: false
    private _outputLocation?: string; 
    public get outputLocation() {
        return this.getStringAttribute('output_location');
    }
    public set outputLocation(value: string) {
        this._outputLocation = value;
    }
    public resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
        return this._outputLocation;
    }
}
export interface AmazonTranscribeCallAnalyticsProcessorConfigurationProperty {
    /**
    * The categories to send to the insights target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories CcMediaInsightsPipelineConfiguration#call_analytics_stream_categories}
    */
    readonly callAnalyticsStreamCategories?: string[];
    /**
    * Labels all PII identified in the transcript.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type CcMediaInsightsPipelineConfiguration#content_identification_type}
    */
    readonly contentIdentificationType?: string;
    /**
    * Redacts all PII identified in the transcript.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type CcMediaInsightsPipelineConfiguration#content_redaction_type}
    */
    readonly contentRedactionType?: string;
    /**
    * Enables partial result stabilization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization CcMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
    */
    readonly enablePartialResultsStabilization?: boolean | cdktn.IResolvable;
    /**
    * If true, partial results are filtered out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results CcMediaInsightsPipelineConfiguration#filter_partial_results}
    */
    readonly filterPartialResults?: boolean | cdktn.IResolvable;
    /**
    * The language code in the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code CcMediaInsightsPipelineConfiguration#language_code}
    */
    readonly languageCode?: string;
    /**
    * The name of the custom language model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name CcMediaInsightsPipelineConfiguration#language_model_name}
    */
    readonly languageModelName?: string;
    /**
    * The level of stability for partial results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability CcMediaInsightsPipelineConfiguration#partial_results_stability}
    */
    readonly partialResultsStability?: string;
    /**
    * The types of PII to redact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types CcMediaInsightsPipelineConfiguration#pii_entity_types}
    */
    readonly piiEntityTypes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings CcMediaInsightsPipelineConfiguration#post_call_analytics_settings}
    */
    readonly postCallAnalyticsSettings?: PostCallAnalyticsSettingsProperty;
    /**
    * The vocabulary filtering method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method CcMediaInsightsPipelineConfiguration#vocabulary_filter_method}
    */
    readonly vocabularyFilterMethod?: string;
    /**
    * The name of the custom vocabulary filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name CcMediaInsightsPipelineConfiguration#vocabulary_filter_name}
    */
    readonly vocabularyFilterName?: string;
    /**
    * The name of the custom vocabulary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name CcMediaInsightsPipelineConfiguration#vocabulary_name}
    */
    readonly vocabularyName?: string;
}
export class AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._callAnalyticsStreamCategories !== undefined) {
            hasAnyValues = true;
            internalValueResult.callAnalyticsStreamCategories = this._callAnalyticsStreamCategories;
        }
        if (this._contentIdentificationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentIdentificationType = this._contentIdentificationType;
        }
        if (this._contentRedactionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentRedactionType = this._contentRedactionType;
        }
        if (this._enablePartialResultsStabilization !== undefined) {
            hasAnyValues = true;
            internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
        }
        if (this._filterPartialResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterPartialResults = this._filterPartialResults;
        }
        if (this._languageCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageCode = this._languageCode;
        }
        if (this._languageModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageModelName = this._languageModelName;
        }
        if (this._partialResultsStability !== undefined) {
            hasAnyValues = true;
            internalValueResult.partialResultsStability = this._partialResultsStability;
        }
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._postCallAnalyticsSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postCallAnalyticsSettings = this._postCallAnalyticsSettings?.internalValue;
        }
        if (this._vocabularyFilterMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
        }
        if (this._vocabularyFilterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
        }
        if (this._vocabularyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyName = this._vocabularyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._callAnalyticsStreamCategories = undefined;
            this._contentIdentificationType = undefined;
            this._contentRedactionType = undefined;
            this._enablePartialResultsStabilization = undefined;
            this._filterPartialResults = undefined;
            this._languageCode = undefined;
            this._languageModelName = undefined;
            this._partialResultsStability = undefined;
            this._piiEntityTypes = undefined;
            this._postCallAnalyticsSettings.internalValue = undefined;
            this._vocabularyFilterMethod = undefined;
            this._vocabularyFilterName = undefined;
            this._vocabularyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._callAnalyticsStreamCategories = value.callAnalyticsStreamCategories;
            this._contentIdentificationType = value.contentIdentificationType;
            this._contentRedactionType = value.contentRedactionType;
            this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
            this._filterPartialResults = value.filterPartialResults;
            this._languageCode = value.languageCode;
            this._languageModelName = value.languageModelName;
            this._partialResultsStability = value.partialResultsStability;
            this._piiEntityTypes = value.piiEntityTypes;
            this._postCallAnalyticsSettings.internalValue = value.postCallAnalyticsSettings;
            this._vocabularyFilterMethod = value.vocabularyFilterMethod;
            this._vocabularyFilterName = value.vocabularyFilterName;
            this._vocabularyName = value.vocabularyName;
        }
    }

    // call_analytics_stream_categories - computed: true, optional: true, required: false
    private _callAnalyticsStreamCategories?: string[]; 
    public get callAnalyticsStreamCategories() {
        return this.getListAttribute('call_analytics_stream_categories');
    }
    public set callAnalyticsStreamCategories(value: string[]) {
        this._callAnalyticsStreamCategories = value;
    }
    public resetCallAnalyticsStreamCategories() {
        this._callAnalyticsStreamCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callAnalyticsStreamCategoriesInput() {
        return this._callAnalyticsStreamCategories;
    }

    // content_identification_type - computed: true, optional: true, required: false
    private _contentIdentificationType?: string; 
    public get contentIdentificationType() {
        return this.getStringAttribute('content_identification_type');
    }
    public set contentIdentificationType(value: string) {
        this._contentIdentificationType = value;
    }
    public resetContentIdentificationType() {
        this._contentIdentificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentIdentificationTypeInput() {
        return this._contentIdentificationType;
    }

    // content_redaction_type - computed: true, optional: true, required: false
    private _contentRedactionType?: string; 
    public get contentRedactionType() {
        return this.getStringAttribute('content_redaction_type');
    }
    public set contentRedactionType(value: string) {
        this._contentRedactionType = value;
    }
    public resetContentRedactionType() {
        this._contentRedactionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentRedactionTypeInput() {
        return this._contentRedactionType;
    }

    // enable_partial_results_stabilization - computed: true, optional: true, required: false
    private _enablePartialResultsStabilization?: boolean | cdktn.IResolvable; 
    public get enablePartialResultsStabilization() {
        return this.getBooleanAttribute('enable_partial_results_stabilization');
    }
    public set enablePartialResultsStabilization(value: boolean | cdktn.IResolvable) {
        this._enablePartialResultsStabilization = value;
    }
    public resetEnablePartialResultsStabilization() {
        this._enablePartialResultsStabilization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePartialResultsStabilizationInput() {
        return this._enablePartialResultsStabilization;
    }

    // filter_partial_results - computed: true, optional: true, required: false
    private _filterPartialResults?: boolean | cdktn.IResolvable; 
    public get filterPartialResults() {
        return this.getBooleanAttribute('filter_partial_results');
    }
    public set filterPartialResults(value: boolean | cdktn.IResolvable) {
        this._filterPartialResults = value;
    }
    public resetFilterPartialResults() {
        this._filterPartialResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPartialResultsInput() {
        return this._filterPartialResults;
    }

    // language_code - computed: true, optional: true, required: false
    private _languageCode?: string; 
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }
    public set languageCode(value: string) {
        this._languageCode = value;
    }
    public resetLanguageCode() {
        this._languageCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageCodeInput() {
        return this._languageCode;
    }

    // language_model_name - computed: true, optional: true, required: false
    private _languageModelName?: string; 
    public get languageModelName() {
        return this.getStringAttribute('language_model_name');
    }
    public set languageModelName(value: string) {
        this._languageModelName = value;
    }
    public resetLanguageModelName() {
        this._languageModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageModelNameInput() {
        return this._languageModelName;
    }

    // partial_results_stability - computed: true, optional: true, required: false
    private _partialResultsStability?: string; 
    public get partialResultsStability() {
        return this.getStringAttribute('partial_results_stability');
    }
    public set partialResultsStability(value: string) {
        this._partialResultsStability = value;
    }
    public resetPartialResultsStability() {
        this._partialResultsStability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partialResultsStabilityInput() {
        return this._partialResultsStability;
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string; 
    public get piiEntityTypes() {
        return this.getStringAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // post_call_analytics_settings - computed: true, optional: true, required: false
    private _postCallAnalyticsSettings = new PostCallAnalyticsSettingsPropertyOutputReference(this, "post_call_analytics_settings");
    public get postCallAnalyticsSettings() {
        return this._postCallAnalyticsSettings;
    }
    public putPostCallAnalyticsSettings(value: PostCallAnalyticsSettingsProperty) {
        this._postCallAnalyticsSettings.internalValue = value;
    }
    public resetPostCallAnalyticsSettings() {
        this._postCallAnalyticsSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postCallAnalyticsSettingsInput() {
        return this._postCallAnalyticsSettings.internalValue;
    }

    // vocabulary_filter_method - computed: true, optional: true, required: false
    private _vocabularyFilterMethod?: string; 
    public get vocabularyFilterMethod() {
        return this.getStringAttribute('vocabulary_filter_method');
    }
    public set vocabularyFilterMethod(value: string) {
        this._vocabularyFilterMethod = value;
    }
    public resetVocabularyFilterMethod() {
        this._vocabularyFilterMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterMethodInput() {
        return this._vocabularyFilterMethod;
    }

    // vocabulary_filter_name - computed: true, optional: true, required: false
    private _vocabularyFilterName?: string; 
    public get vocabularyFilterName() {
        return this.getStringAttribute('vocabulary_filter_name');
    }
    public set vocabularyFilterName(value: string) {
        this._vocabularyFilterName = value;
    }
    public resetVocabularyFilterName() {
        this._vocabularyFilterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterNameInput() {
        return this._vocabularyFilterName;
    }

    // vocabulary_name - computed: true, optional: true, required: false
    private _vocabularyName?: string; 
    public get vocabularyName() {
        return this.getStringAttribute('vocabulary_name');
    }
    public set vocabularyName(value: string) {
        this._vocabularyName = value;
    }
    public resetVocabularyName() {
        this._vocabularyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyNameInput() {
        return this._vocabularyName;
    }
}
export interface AmazonTranscribeProcessorConfigurationProperty {
    /**
    * Labels all PII identified in the transcript.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type CcMediaInsightsPipelineConfiguration#content_identification_type}
    */
    readonly contentIdentificationType?: string;
    /**
    * Redacts all PII identified in the transcript.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type CcMediaInsightsPipelineConfiguration#content_redaction_type}
    */
    readonly contentRedactionType?: string;
    /**
    * Enables partial result stabilization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization CcMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
    */
    readonly enablePartialResultsStabilization?: boolean | cdktn.IResolvable;
    /**
    * If true, partial results are filtered out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results CcMediaInsightsPipelineConfiguration#filter_partial_results}
    */
    readonly filterPartialResults?: boolean | cdktn.IResolvable;
    /**
    * Turns language identification on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language CcMediaInsightsPipelineConfiguration#identify_language}
    */
    readonly identifyLanguage?: boolean | cdktn.IResolvable;
    /**
    * Turns multiple language identification on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages CcMediaInsightsPipelineConfiguration#identify_multiple_languages}
    */
    readonly identifyMultipleLanguages?: boolean | cdktn.IResolvable;
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code CcMediaInsightsPipelineConfiguration#language_code}
    */
    readonly languageCode?: string;
    /**
    * The name of the custom language model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name CcMediaInsightsPipelineConfiguration#language_model_name}
    */
    readonly languageModelName?: string;
    /**
    * The language options for transcription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_options CcMediaInsightsPipelineConfiguration#language_options}
    */
    readonly languageOptions?: string;
    /**
    * The level of stability for partial results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability CcMediaInsightsPipelineConfiguration#partial_results_stability}
    */
    readonly partialResultsStability?: string;
    /**
    * The types of PII to redact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types CcMediaInsightsPipelineConfiguration#pii_entity_types}
    */
    readonly piiEntityTypes?: string;
    /**
    * The preferred language for transcription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language CcMediaInsightsPipelineConfiguration#preferred_language}
    */
    readonly preferredLanguage?: string;
    /**
    * Enables speaker partitioning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label CcMediaInsightsPipelineConfiguration#show_speaker_label}
    */
    readonly showSpeakerLabel?: boolean | cdktn.IResolvable;
    /**
    * The vocabulary filtering method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method CcMediaInsightsPipelineConfiguration#vocabulary_filter_method}
    */
    readonly vocabularyFilterMethod?: string;
    /**
    * The name of the custom vocabulary filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name CcMediaInsightsPipelineConfiguration#vocabulary_filter_name}
    */
    readonly vocabularyFilterName?: string;
    /**
    * The names of the custom vocabulary filters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names CcMediaInsightsPipelineConfiguration#vocabulary_filter_names}
    */
    readonly vocabularyFilterNames?: string;
    /**
    * The name of the custom vocabulary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name CcMediaInsightsPipelineConfiguration#vocabulary_name}
    */
    readonly vocabularyName?: string;
    /**
    * The names of the custom vocabularies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names CcMediaInsightsPipelineConfiguration#vocabulary_names}
    */
    readonly vocabularyNames?: string;
}
export class AmazonTranscribeProcessorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonTranscribeProcessorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentIdentificationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentIdentificationType = this._contentIdentificationType;
        }
        if (this._contentRedactionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentRedactionType = this._contentRedactionType;
        }
        if (this._enablePartialResultsStabilization !== undefined) {
            hasAnyValues = true;
            internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
        }
        if (this._filterPartialResults !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterPartialResults = this._filterPartialResults;
        }
        if (this._identifyLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifyLanguage = this._identifyLanguage;
        }
        if (this._identifyMultipleLanguages !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifyMultipleLanguages = this._identifyMultipleLanguages;
        }
        if (this._languageCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageCode = this._languageCode;
        }
        if (this._languageModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageModelName = this._languageModelName;
        }
        if (this._languageOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageOptions = this._languageOptions;
        }
        if (this._partialResultsStability !== undefined) {
            hasAnyValues = true;
            internalValueResult.partialResultsStability = this._partialResultsStability;
        }
        if (this._piiEntityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.piiEntityTypes = this._piiEntityTypes;
        }
        if (this._preferredLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferredLanguage = this._preferredLanguage;
        }
        if (this._showSpeakerLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.showSpeakerLabel = this._showSpeakerLabel;
        }
        if (this._vocabularyFilterMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
        }
        if (this._vocabularyFilterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
        }
        if (this._vocabularyFilterNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyFilterNames = this._vocabularyFilterNames;
        }
        if (this._vocabularyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyName = this._vocabularyName;
        }
        if (this._vocabularyNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.vocabularyNames = this._vocabularyNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonTranscribeProcessorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentIdentificationType = undefined;
            this._contentRedactionType = undefined;
            this._enablePartialResultsStabilization = undefined;
            this._filterPartialResults = undefined;
            this._identifyLanguage = undefined;
            this._identifyMultipleLanguages = undefined;
            this._languageCode = undefined;
            this._languageModelName = undefined;
            this._languageOptions = undefined;
            this._partialResultsStability = undefined;
            this._piiEntityTypes = undefined;
            this._preferredLanguage = undefined;
            this._showSpeakerLabel = undefined;
            this._vocabularyFilterMethod = undefined;
            this._vocabularyFilterName = undefined;
            this._vocabularyFilterNames = undefined;
            this._vocabularyName = undefined;
            this._vocabularyNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentIdentificationType = value.contentIdentificationType;
            this._contentRedactionType = value.contentRedactionType;
            this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
            this._filterPartialResults = value.filterPartialResults;
            this._identifyLanguage = value.identifyLanguage;
            this._identifyMultipleLanguages = value.identifyMultipleLanguages;
            this._languageCode = value.languageCode;
            this._languageModelName = value.languageModelName;
            this._languageOptions = value.languageOptions;
            this._partialResultsStability = value.partialResultsStability;
            this._piiEntityTypes = value.piiEntityTypes;
            this._preferredLanguage = value.preferredLanguage;
            this._showSpeakerLabel = value.showSpeakerLabel;
            this._vocabularyFilterMethod = value.vocabularyFilterMethod;
            this._vocabularyFilterName = value.vocabularyFilterName;
            this._vocabularyFilterNames = value.vocabularyFilterNames;
            this._vocabularyName = value.vocabularyName;
            this._vocabularyNames = value.vocabularyNames;
        }
    }

    // content_identification_type - computed: true, optional: true, required: false
    private _contentIdentificationType?: string; 
    public get contentIdentificationType() {
        return this.getStringAttribute('content_identification_type');
    }
    public set contentIdentificationType(value: string) {
        this._contentIdentificationType = value;
    }
    public resetContentIdentificationType() {
        this._contentIdentificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentIdentificationTypeInput() {
        return this._contentIdentificationType;
    }

    // content_redaction_type - computed: true, optional: true, required: false
    private _contentRedactionType?: string; 
    public get contentRedactionType() {
        return this.getStringAttribute('content_redaction_type');
    }
    public set contentRedactionType(value: string) {
        this._contentRedactionType = value;
    }
    public resetContentRedactionType() {
        this._contentRedactionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentRedactionTypeInput() {
        return this._contentRedactionType;
    }

    // enable_partial_results_stabilization - computed: true, optional: true, required: false
    private _enablePartialResultsStabilization?: boolean | cdktn.IResolvable; 
    public get enablePartialResultsStabilization() {
        return this.getBooleanAttribute('enable_partial_results_stabilization');
    }
    public set enablePartialResultsStabilization(value: boolean | cdktn.IResolvable) {
        this._enablePartialResultsStabilization = value;
    }
    public resetEnablePartialResultsStabilization() {
        this._enablePartialResultsStabilization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePartialResultsStabilizationInput() {
        return this._enablePartialResultsStabilization;
    }

    // filter_partial_results - computed: true, optional: true, required: false
    private _filterPartialResults?: boolean | cdktn.IResolvable; 
    public get filterPartialResults() {
        return this.getBooleanAttribute('filter_partial_results');
    }
    public set filterPartialResults(value: boolean | cdktn.IResolvable) {
        this._filterPartialResults = value;
    }
    public resetFilterPartialResults() {
        this._filterPartialResults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPartialResultsInput() {
        return this._filterPartialResults;
    }

    // identify_language - computed: true, optional: true, required: false
    private _identifyLanguage?: boolean | cdktn.IResolvable; 
    public get identifyLanguage() {
        return this.getBooleanAttribute('identify_language');
    }
    public set identifyLanguage(value: boolean | cdktn.IResolvable) {
        this._identifyLanguage = value;
    }
    public resetIdentifyLanguage() {
        this._identifyLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifyLanguageInput() {
        return this._identifyLanguage;
    }

    // identify_multiple_languages - computed: true, optional: true, required: false
    private _identifyMultipleLanguages?: boolean | cdktn.IResolvable; 
    public get identifyMultipleLanguages() {
        return this.getBooleanAttribute('identify_multiple_languages');
    }
    public set identifyMultipleLanguages(value: boolean | cdktn.IResolvable) {
        this._identifyMultipleLanguages = value;
    }
    public resetIdentifyMultipleLanguages() {
        this._identifyMultipleLanguages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifyMultipleLanguagesInput() {
        return this._identifyMultipleLanguages;
    }

    // language_code - computed: true, optional: true, required: false
    private _languageCode?: string; 
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }
    public set languageCode(value: string) {
        this._languageCode = value;
    }
    public resetLanguageCode() {
        this._languageCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageCodeInput() {
        return this._languageCode;
    }

    // language_model_name - computed: true, optional: true, required: false
    private _languageModelName?: string; 
    public get languageModelName() {
        return this.getStringAttribute('language_model_name');
    }
    public set languageModelName(value: string) {
        this._languageModelName = value;
    }
    public resetLanguageModelName() {
        this._languageModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageModelNameInput() {
        return this._languageModelName;
    }

    // language_options - computed: true, optional: true, required: false
    private _languageOptions?: string; 
    public get languageOptions() {
        return this.getStringAttribute('language_options');
    }
    public set languageOptions(value: string) {
        this._languageOptions = value;
    }
    public resetLanguageOptions() {
        this._languageOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageOptionsInput() {
        return this._languageOptions;
    }

    // partial_results_stability - computed: true, optional: true, required: false
    private _partialResultsStability?: string; 
    public get partialResultsStability() {
        return this.getStringAttribute('partial_results_stability');
    }
    public set partialResultsStability(value: string) {
        this._partialResultsStability = value;
    }
    public resetPartialResultsStability() {
        this._partialResultsStability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partialResultsStabilityInput() {
        return this._partialResultsStability;
    }

    // pii_entity_types - computed: true, optional: true, required: false
    private _piiEntityTypes?: string; 
    public get piiEntityTypes() {
        return this.getStringAttribute('pii_entity_types');
    }
    public set piiEntityTypes(value: string) {
        this._piiEntityTypes = value;
    }
    public resetPiiEntityTypes() {
        this._piiEntityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get piiEntityTypesInput() {
        return this._piiEntityTypes;
    }

    // preferred_language - computed: true, optional: true, required: false
    private _preferredLanguage?: string; 
    public get preferredLanguage() {
        return this.getStringAttribute('preferred_language');
    }
    public set preferredLanguage(value: string) {
        this._preferredLanguage = value;
    }
    public resetPreferredLanguage() {
        this._preferredLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredLanguageInput() {
        return this._preferredLanguage;
    }

    // show_speaker_label - computed: true, optional: true, required: false
    private _showSpeakerLabel?: boolean | cdktn.IResolvable; 
    public get showSpeakerLabel() {
        return this.getBooleanAttribute('show_speaker_label');
    }
    public set showSpeakerLabel(value: boolean | cdktn.IResolvable) {
        this._showSpeakerLabel = value;
    }
    public resetShowSpeakerLabel() {
        this._showSpeakerLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get showSpeakerLabelInput() {
        return this._showSpeakerLabel;
    }

    // vocabulary_filter_method - computed: true, optional: true, required: false
    private _vocabularyFilterMethod?: string; 
    public get vocabularyFilterMethod() {
        return this.getStringAttribute('vocabulary_filter_method');
    }
    public set vocabularyFilterMethod(value: string) {
        this._vocabularyFilterMethod = value;
    }
    public resetVocabularyFilterMethod() {
        this._vocabularyFilterMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterMethodInput() {
        return this._vocabularyFilterMethod;
    }

    // vocabulary_filter_name - computed: true, optional: true, required: false
    private _vocabularyFilterName?: string; 
    public get vocabularyFilterName() {
        return this.getStringAttribute('vocabulary_filter_name');
    }
    public set vocabularyFilterName(value: string) {
        this._vocabularyFilterName = value;
    }
    public resetVocabularyFilterName() {
        this._vocabularyFilterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterNameInput() {
        return this._vocabularyFilterName;
    }

    // vocabulary_filter_names - computed: true, optional: true, required: false
    private _vocabularyFilterNames?: string; 
    public get vocabularyFilterNames() {
        return this.getStringAttribute('vocabulary_filter_names');
    }
    public set vocabularyFilterNames(value: string) {
        this._vocabularyFilterNames = value;
    }
    public resetVocabularyFilterNames() {
        this._vocabularyFilterNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyFilterNamesInput() {
        return this._vocabularyFilterNames;
    }

    // vocabulary_name - computed: true, optional: true, required: false
    private _vocabularyName?: string; 
    public get vocabularyName() {
        return this.getStringAttribute('vocabulary_name');
    }
    public set vocabularyName(value: string) {
        this._vocabularyName = value;
    }
    public resetVocabularyName() {
        this._vocabularyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyNameInput() {
        return this._vocabularyName;
    }

    // vocabulary_names - computed: true, optional: true, required: false
    private _vocabularyNames?: string; 
    public get vocabularyNames() {
        return this.getStringAttribute('vocabulary_names');
    }
    public set vocabularyNames(value: string) {
        this._vocabularyNames = value;
    }
    public resetVocabularyNames() {
        this._vocabularyNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vocabularyNamesInput() {
        return this._vocabularyNames;
    }
}
export interface KinesisDataStreamSinkConfigurationProperty {
    /**
    * The ARN of the Kinesis Data Stream sink.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target CcMediaInsightsPipelineConfiguration#insights_target}
    */
    readonly insightsTarget?: string;
}
export class KinesisDataStreamSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisDataStreamSinkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._insightsTarget !== undefined) {
            hasAnyValues = true;
            internalValueResult.insightsTarget = this._insightsTarget;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisDataStreamSinkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._insightsTarget = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._insightsTarget = value.insightsTarget;
        }
    }

    // insights_target - computed: true, optional: true, required: false
    private _insightsTarget?: string; 
    public get insightsTarget() {
        return this.getStringAttribute('insights_target');
    }
    public set insightsTarget(value: string) {
        this._insightsTarget = value;
    }
    public resetInsightsTarget() {
        this._insightsTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightsTargetInput() {
        return this._insightsTarget;
    }
}
export interface S3RecordingSinkConfigurationProperty {
    /**
    * The default URI of the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#destination CcMediaInsightsPipelineConfiguration#destination}
    */
    readonly destination?: string;
    /**
    * The recording file format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format CcMediaInsightsPipelineConfiguration#recording_file_format}
    */
    readonly recordingFileFormat?: string;
}
export class S3RecordingSinkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3RecordingSinkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._recordingFileFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordingFileFormat = this._recordingFileFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3RecordingSinkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
            this._recordingFileFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
            this._recordingFileFormat = value.recordingFileFormat;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // recording_file_format - computed: true, optional: true, required: false
    private _recordingFileFormat?: string; 
    public get recordingFileFormat() {
        return this.getStringAttribute('recording_file_format');
    }
    public set recordingFileFormat(value: string) {
        this._recordingFileFormat = value;
    }
    public resetRecordingFileFormat() {
        this._recordingFileFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingFileFormatInput() {
        return this._recordingFileFormat;
    }
}
export interface ElementsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration CcMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}
    */
    readonly amazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration CcMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}
    */
    readonly amazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration CcMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}
    */
    readonly kinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration CcMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}
    */
    readonly s3RecordingSinkConfiguration?: S3RecordingSinkConfigurationProperty;
    /**
    * The element type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type CcMediaInsightsPipelineConfiguration#type}
    */
    readonly type: string;
}
export class ElementsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ElementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonTranscribeCallAnalyticsProcessorConfiguration = this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue;
        }
        if (this._amazonTranscribeProcessorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonTranscribeProcessorConfiguration = this._amazonTranscribeProcessorConfiguration?.internalValue;
        }
        if (this._kinesisDataStreamSinkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisDataStreamSinkConfiguration = this._kinesisDataStreamSinkConfiguration?.internalValue;
        }
        if (this._s3RecordingSinkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3RecordingSinkConfiguration = this._s3RecordingSinkConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
            this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
            this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
            this._s3RecordingSinkConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value.amazonTranscribeCallAnalyticsProcessorConfiguration;
            this._amazonTranscribeProcessorConfiguration.internalValue = value.amazonTranscribeProcessorConfiguration;
            this._kinesisDataStreamSinkConfiguration.internalValue = value.kinesisDataStreamSinkConfiguration;
            this._s3RecordingSinkConfiguration.internalValue = value.s3RecordingSinkConfiguration;
            this._type = value.type;
        }
    }

    // amazon_transcribe_call_analytics_processor_configuration - computed: true, optional: true, required: false
    private _amazonTranscribeCallAnalyticsProcessorConfiguration = new AmazonTranscribeCallAnalyticsProcessorConfigurationPropertyOutputReference(this, "amazon_transcribe_call_analytics_processor_configuration");
    public get amazonTranscribeCallAnalyticsProcessorConfiguration() {
        return this._amazonTranscribeCallAnalyticsProcessorConfiguration;
    }
    public putAmazonTranscribeCallAnalyticsProcessorConfiguration(value: AmazonTranscribeCallAnalyticsProcessorConfigurationProperty) {
        this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value;
    }
    public resetAmazonTranscribeCallAnalyticsProcessorConfiguration() {
        this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonTranscribeCallAnalyticsProcessorConfigurationInput() {
        return this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue;
    }

    // amazon_transcribe_processor_configuration - computed: true, optional: true, required: false
    private _amazonTranscribeProcessorConfiguration = new AmazonTranscribeProcessorConfigurationPropertyOutputReference(this, "amazon_transcribe_processor_configuration");
    public get amazonTranscribeProcessorConfiguration() {
        return this._amazonTranscribeProcessorConfiguration;
    }
    public putAmazonTranscribeProcessorConfiguration(value: AmazonTranscribeProcessorConfigurationProperty) {
        this._amazonTranscribeProcessorConfiguration.internalValue = value;
    }
    public resetAmazonTranscribeProcessorConfiguration() {
        this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonTranscribeProcessorConfigurationInput() {
        return this._amazonTranscribeProcessorConfiguration.internalValue;
    }

    // kinesis_data_stream_sink_configuration - computed: true, optional: true, required: false
    private _kinesisDataStreamSinkConfiguration = new KinesisDataStreamSinkConfigurationPropertyOutputReference(this, "kinesis_data_stream_sink_configuration");
    public get kinesisDataStreamSinkConfiguration() {
        return this._kinesisDataStreamSinkConfiguration;
    }
    public putKinesisDataStreamSinkConfiguration(value: KinesisDataStreamSinkConfigurationProperty) {
        this._kinesisDataStreamSinkConfiguration.internalValue = value;
    }
    public resetKinesisDataStreamSinkConfiguration() {
        this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisDataStreamSinkConfigurationInput() {
        return this._kinesisDataStreamSinkConfiguration.internalValue;
    }

    // s3_recording_sink_configuration - computed: true, optional: true, required: false
    private _s3RecordingSinkConfiguration = new S3RecordingSinkConfigurationPropertyOutputReference(this, "s3_recording_sink_configuration");
    public get s3RecordingSinkConfiguration() {
        return this._s3RecordingSinkConfiguration;
    }
    public putS3RecordingSinkConfiguration(value: S3RecordingSinkConfigurationProperty) {
        this._s3RecordingSinkConfiguration.internalValue = value;
    }
    public resetS3RecordingSinkConfiguration() {
        this._s3RecordingSinkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3RecordingSinkConfigurationInput() {
        return this._s3RecordingSinkConfiguration.internalValue;
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
}

export class ElementsPropertyList extends cdktn.ComplexList {
    public internalValue? : ElementsProperty[] | cdktn.IResolvable

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
    public get(index: number): ElementsPropertyOutputReference {
        return new ElementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IssueDetectionConfigurationProperty {
    /**
    * The name of the issue detection rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name CcMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName?: string;
}
export class IssueDetectionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IssueDetectionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IssueDetectionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleName = value.ruleName;
        }
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }
}
export interface KeywordMatchConfigurationProperty {
    /**
    * The keywords or phrases to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keywords CcMediaInsightsPipelineConfiguration#keywords}
    */
    readonly keywords?: string[];
    /**
    * Matches keywords on their presence or absence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#negate CcMediaInsightsPipelineConfiguration#negate}
    */
    readonly negate?: boolean | cdktn.IResolvable;
    /**
    * The name of the keyword match rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name CcMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName?: string;
}
export class KeywordMatchConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeywordMatchConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keywords !== undefined) {
            hasAnyValues = true;
            internalValueResult.keywords = this._keywords;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeywordMatchConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keywords = undefined;
            this._negate = undefined;
            this._ruleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keywords = value.keywords;
            this._negate = value.negate;
            this._ruleName = value.ruleName;
        }
    }

    // keywords - computed: true, optional: true, required: false
    private _keywords?: string[]; 
    public get keywords() {
        return this.getListAttribute('keywords');
    }
    public set keywords(value: string[]) {
        this._keywords = value;
    }
    public resetKeywords() {
        this._keywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordsInput() {
        return this._keywords;
    }

    // negate - computed: true, optional: true, required: false
    private _negate?: boolean | cdktn.IResolvable; 
    public get negate() {
        return this.getBooleanAttribute('negate');
    }
    public set negate(value: boolean | cdktn.IResolvable) {
        this._negate = value;
    }
    public resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get negateInput() {
        return this._negate;
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }
}
export interface SentimentConfigurationProperty {
    /**
    * The name of the sentiment rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name CcMediaInsightsPipelineConfiguration#rule_name}
    */
    readonly ruleName?: string;
    /**
    * The type of sentiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type CcMediaInsightsPipelineConfiguration#sentiment_type}
    */
    readonly sentimentType?: string;
    /**
    * The analysis interval in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#time_period CcMediaInsightsPipelineConfiguration#time_period}
    */
    readonly timePeriod?: number;
}
export class SentimentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SentimentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        if (this._sentimentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sentimentType = this._sentimentType;
        }
        if (this._timePeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.timePeriod = this._timePeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SentimentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleName = undefined;
            this._sentimentType = undefined;
            this._timePeriod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleName = value.ruleName;
            this._sentimentType = value.sentimentType;
            this._timePeriod = value.timePeriod;
        }
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // sentiment_type - computed: true, optional: true, required: false
    private _sentimentType?: string; 
    public get sentimentType() {
        return this.getStringAttribute('sentiment_type');
    }
    public set sentimentType(value: string) {
        this._sentimentType = value;
    }
    public resetSentimentType() {
        this._sentimentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sentimentTypeInput() {
        return this._sentimentType;
    }

    // time_period - computed: true, optional: true, required: false
    private _timePeriod?: number; 
    public get timePeriod() {
        return this.getNumberAttribute('time_period');
    }
    public set timePeriod(value: number) {
        this._timePeriod = value;
    }
    public resetTimePeriod() {
        this._timePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timePeriodInput() {
        return this._timePeriod;
    }
}
export interface RulesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration CcMediaInsightsPipelineConfiguration#issue_detection_configuration}
    */
    readonly issueDetectionConfiguration?: IssueDetectionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration CcMediaInsightsPipelineConfiguration#keyword_match_configuration}
    */
    readonly keywordMatchConfiguration?: KeywordMatchConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration CcMediaInsightsPipelineConfiguration#sentiment_configuration}
    */
    readonly sentimentConfiguration?: SentimentConfigurationProperty;
    /**
    * The type of alert rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type CcMediaInsightsPipelineConfiguration#type}
    */
    readonly type?: string;
}
export class RulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._issueDetectionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.issueDetectionConfiguration = this._issueDetectionConfiguration?.internalValue;
        }
        if (this._keywordMatchConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keywordMatchConfiguration = this._keywordMatchConfiguration?.internalValue;
        }
        if (this._sentimentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sentimentConfiguration = this._sentimentConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._issueDetectionConfiguration.internalValue = undefined;
            this._keywordMatchConfiguration.internalValue = undefined;
            this._sentimentConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._issueDetectionConfiguration.internalValue = value.issueDetectionConfiguration;
            this._keywordMatchConfiguration.internalValue = value.keywordMatchConfiguration;
            this._sentimentConfiguration.internalValue = value.sentimentConfiguration;
            this._type = value.type;
        }
    }

    // issue_detection_configuration - computed: true, optional: true, required: false
    private _issueDetectionConfiguration = new IssueDetectionConfigurationPropertyOutputReference(this, "issue_detection_configuration");
    public get issueDetectionConfiguration() {
        return this._issueDetectionConfiguration;
    }
    public putIssueDetectionConfiguration(value: IssueDetectionConfigurationProperty) {
        this._issueDetectionConfiguration.internalValue = value;
    }
    public resetIssueDetectionConfiguration() {
        this._issueDetectionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issueDetectionConfigurationInput() {
        return this._issueDetectionConfiguration.internalValue;
    }

    // keyword_match_configuration - computed: true, optional: true, required: false
    private _keywordMatchConfiguration = new KeywordMatchConfigurationPropertyOutputReference(this, "keyword_match_configuration");
    public get keywordMatchConfiguration() {
        return this._keywordMatchConfiguration;
    }
    public putKeywordMatchConfiguration(value: KeywordMatchConfigurationProperty) {
        this._keywordMatchConfiguration.internalValue = value;
    }
    public resetKeywordMatchConfiguration() {
        this._keywordMatchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordMatchConfigurationInput() {
        return this._keywordMatchConfiguration.internalValue;
    }

    // sentiment_configuration - computed: true, optional: true, required: false
    private _sentimentConfiguration = new SentimentConfigurationPropertyOutputReference(this, "sentiment_configuration");
    public get sentimentConfiguration() {
        return this._sentimentConfiguration;
    }
    public putSentimentConfiguration(value: SentimentConfigurationProperty) {
        this._sentimentConfiguration.internalValue = value;
    }
    public resetSentimentConfiguration() {
        this._sentimentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sentimentConfigurationInput() {
        return this._sentimentConfiguration.internalValue;
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

export class RulesPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesPropertyOutputReference {
        return new RulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RealTimeAlertConfigurationProperty {
    /**
    * Turns off real-time alerts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#disabled CcMediaInsightsPipelineConfiguration#disabled}
    */
    readonly disabled?: boolean | cdktn.IResolvable;
    /**
    * The rules in the alert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rules CcMediaInsightsPipelineConfiguration#rules}
    */
    readonly rules?: RulesProperty[] | cdktn.IResolvable;
}
export class RealTimeAlertConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RealTimeAlertConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabled = this._disabled;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RealTimeAlertConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disabled = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disabled = value.disabled;
            this._rules.internalValue = value.rules;
        }
    }

    // disabled - computed: true, optional: true, required: false
    private _disabled?: boolean | cdktn.IResolvable; 
    public get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    public set disabled(value: boolean | cdktn.IResolvable) {
        this._disabled = value;
    }
    public resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledInput() {
        return this._disabled;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new RulesPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: RulesProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#key CcMediaInsightsPipelineConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#value CcMediaInsightsPipelineConfiguration#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
