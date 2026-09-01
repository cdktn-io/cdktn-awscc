// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFeatureGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Description about the FeatureGroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#description CcFeatureGroup#description}
    */
    readonly description?: string;
    /**
    * The Event Time Feature Name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#event_time_feature_name CcFeatureGroup#event_time_feature_name}
    */
    readonly eventTimeFeatureName: string;
    /**
    * An Array of Feature Definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_definitions CcFeatureGroup#feature_definitions}
    */
    readonly featureDefinitions: CcFeatureGroup.FeatureDefinitionProperty[] | cdktn.IResolvable;
    /**
    * The Name of the FeatureGroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_group_name CcFeatureGroup#feature_group_name}
    */
    readonly featureGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#offline_store_config CcFeatureGroup#offline_store_config}
    */
    readonly offlineStoreConfig?: CcFeatureGroup.OfflineStoreConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#online_store_config CcFeatureGroup#online_store_config}
    */
    readonly onlineStoreConfig?: CcFeatureGroup.OnlineStoreConfigProperty;
    /**
    * The Record Identifier Feature Name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name CcFeatureGroup#record_identifier_feature_name}
    */
    readonly recordIdentifierFeatureName: string;
    /**
    * Role Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#role_arn CcFeatureGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * An array of key-value pair to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#tags CcFeatureGroup#tags}
    */
    readonly tags?: CcFeatureGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_config CcFeatureGroup#throughput_config}
    */
    readonly throughputConfig?: CcFeatureGroup.ThroughputConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group awscc_sagemaker_feature_group}
*/
export class CcFeatureGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_feature_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFeatureGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFeatureGroup to import
    * @param importFromId The id of the existing CcFeatureGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFeatureGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_feature_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group awscc_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFeatureGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcFeatureGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_feature_group',
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
        this._description = config.description;
        this._eventTimeFeatureName = config.eventTimeFeatureName;
        this._featureDefinitions.internalValue = config.featureDefinitions;
        this._featureGroupName = config.featureGroupName;
        this._offlineStoreConfig.internalValue = config.offlineStoreConfig;
        this._onlineStoreConfig.internalValue = config.onlineStoreConfig;
        this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._throughputConfig.internalValue = config.throughputConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // event_time_feature_name - computed: false, optional: false, required: true
    private _eventTimeFeatureName?: string; 
    public get eventTimeFeatureName() {
        return this.getStringAttribute('event_time_feature_name');
    }
    public set eventTimeFeatureName(value: string) {
        this._eventTimeFeatureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTimeFeatureNameInput() {
        return this._eventTimeFeatureName;
    }

    // feature_definitions - computed: false, optional: false, required: true
    private _featureDefinitions = new CcFeatureGroup.FeatureDefinitionPropertyList(this, "feature_definitions", false);
    public get featureDefinitions() {
        return this._featureDefinitions;
    }
    public putFeatureDefinitions(value: CcFeatureGroup.FeatureDefinitionProperty[] | cdktn.IResolvable) {
        this._featureDefinitions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureDefinitionsInput() {
        return this._featureDefinitions.internalValue;
    }

    // feature_group_name - computed: false, optional: false, required: true
    private _featureGroupName?: string; 
    public get featureGroupName() {
        return this.getStringAttribute('feature_group_name');
    }
    public set featureGroupName(value: string) {
        this._featureGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureGroupNameInput() {
        return this._featureGroupName;
    }

    // feature_group_status - computed: true, optional: false, required: false
    public get featureGroupStatus() {
        return this.getStringAttribute('feature_group_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // offline_store_config - computed: true, optional: true, required: false
    private _offlineStoreConfig = new CcFeatureGroup.OfflineStoreConfigPropertyOutputReference(this, "offline_store_config");
    public get offlineStoreConfig() {
        return this._offlineStoreConfig;
    }
    public putOfflineStoreConfig(value: CcFeatureGroup.OfflineStoreConfigProperty) {
        this._offlineStoreConfig.internalValue = value;
    }
    public resetOfflineStoreConfig() {
        this._offlineStoreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offlineStoreConfigInput() {
        return this._offlineStoreConfig.internalValue;
    }

    // online_store_config - computed: true, optional: true, required: false
    private _onlineStoreConfig = new CcFeatureGroup.OnlineStoreConfigPropertyOutputReference(this, "online_store_config");
    public get onlineStoreConfig() {
        return this._onlineStoreConfig;
    }
    public putOnlineStoreConfig(value: CcFeatureGroup.OnlineStoreConfigProperty) {
        this._onlineStoreConfig.internalValue = value;
    }
    public resetOnlineStoreConfig() {
        this._onlineStoreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onlineStoreConfigInput() {
        return this._onlineStoreConfig.internalValue;
    }

    // record_identifier_feature_name - computed: false, optional: false, required: true
    private _recordIdentifierFeatureName?: string; 
    public get recordIdentifierFeatureName() {
        return this.getStringAttribute('record_identifier_feature_name');
    }
    public set recordIdentifierFeatureName(value: string) {
        this._recordIdentifierFeatureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordIdentifierFeatureNameInput() {
        return this._recordIdentifierFeatureName;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFeatureGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFeatureGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // throughput_config - computed: true, optional: true, required: false
    private _throughputConfig = new CcFeatureGroup.ThroughputConfigPropertyOutputReference(this, "throughput_config");
    public get throughputConfig() {
        return this._throughputConfig;
    }
    public putThroughputConfig(value: CcFeatureGroup.ThroughputConfigProperty) {
        this._throughputConfig.internalValue = value;
    }
    public resetThroughputConfig() {
        this._throughputConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputConfigInput() {
        return this._throughputConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            event_time_feature_name: cdktn.stringToTerraform(this._eventTimeFeatureName),
            feature_definitions: cdktn.listMapper(ccFeatureGroupFeatureDefinitionPropertyToTerraform, false)(this._featureDefinitions.internalValue),
            feature_group_name: cdktn.stringToTerraform(this._featureGroupName),
            offline_store_config: ccFeatureGroupOfflineStoreConfigPropertyToTerraform(this._offlineStoreConfig.internalValue),
            online_store_config: ccFeatureGroupOnlineStoreConfigPropertyToTerraform(this._onlineStoreConfig.internalValue),
            record_identifier_feature_name: cdktn.stringToTerraform(this._recordIdentifierFeatureName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccFeatureGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            throughput_config: ccFeatureGroupThroughputConfigPropertyToTerraform(this._throughputConfig.internalValue),
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
            event_time_feature_name: {
                value: cdktn.stringToHclTerraform(this._eventTimeFeatureName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            feature_definitions: {
                value: cdktn.listMapperHcl(ccFeatureGroupFeatureDefinitionPropertyToHclTerraform, false)(this._featureDefinitions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFeatureGroup.FeatureDefinitionPropertyList",
            },
            feature_group_name: {
                value: cdktn.stringToHclTerraform(this._featureGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            offline_store_config: {
                value: ccFeatureGroupOfflineStoreConfigPropertyToHclTerraform(this._offlineStoreConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFeatureGroup.OfflineStoreConfigProperty",
            },
            online_store_config: {
                value: ccFeatureGroupOnlineStoreConfigPropertyToHclTerraform(this._onlineStoreConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFeatureGroup.OnlineStoreConfigProperty",
            },
            record_identifier_feature_name: {
                value: cdktn.stringToHclTerraform(this._recordIdentifierFeatureName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFeatureGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFeatureGroup.TagPropertyList",
            },
            throughput_config: {
                value: ccFeatureGroupThroughputConfigPropertyToHclTerraform(this._throughputConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFeatureGroup.ThroughputConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFeatureGroupFeatureDefinitionPropertyToTerraform(struct?: CcFeatureGroup.FeatureDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        feature_name: cdktn.stringToTerraform(struct!.featureName),
        feature_type: cdktn.stringToTerraform(struct!.featureType),
    }
}


export function ccFeatureGroupFeatureDefinitionPropertyToHclTerraform(struct?: CcFeatureGroup.FeatureDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        feature_name: {
            value: cdktn.stringToHclTerraform(struct!.featureName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        feature_type: {
            value: cdktn.stringToHclTerraform(struct!.featureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupDataCatalogConfigPropertyToTerraform(struct?: CcFeatureGroup.DataCatalogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        database: cdktn.stringToTerraform(struct!.database),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccFeatureGroupDataCatalogConfigPropertyToHclTerraform(struct?: CcFeatureGroup.DataCatalogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupS3StorageConfigPropertyToTerraform(struct?: CcFeatureGroup.S3StorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccFeatureGroupS3StorageConfigPropertyToHclTerraform(struct?: CcFeatureGroup.S3StorageConfigProperty | cdktn.IResolvable): any {
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
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupOfflineStoreConfigPropertyToTerraform(struct?: CcFeatureGroup.OfflineStoreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_catalog_config: ccFeatureGroupDataCatalogConfigPropertyToTerraform(struct!.dataCatalogConfig),
        disable_glue_table_creation: cdktn.booleanToTerraform(struct!.disableGlueTableCreation),
        s3_storage_config: ccFeatureGroupS3StorageConfigPropertyToTerraform(struct!.s3StorageConfig),
        table_format: cdktn.stringToTerraform(struct!.tableFormat),
    }
}


export function ccFeatureGroupOfflineStoreConfigPropertyToHclTerraform(struct?: CcFeatureGroup.OfflineStoreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_catalog_config: {
            value: ccFeatureGroupDataCatalogConfigPropertyToHclTerraform(struct!.dataCatalogConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCatalogConfigProperty",
        },
        disable_glue_table_creation: {
            value: cdktn.booleanToHclTerraform(struct!.disableGlueTableCreation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_storage_config: {
            value: ccFeatureGroupS3StorageConfigPropertyToHclTerraform(struct!.s3StorageConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3StorageConfigProperty",
        },
        table_format: {
            value: cdktn.stringToHclTerraform(struct!.tableFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupOnlineStoreSecurityConfigPropertyToTerraform(struct?: CcFeatureGroup.OnlineStoreSecurityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccFeatureGroupOnlineStoreSecurityConfigPropertyToHclTerraform(struct?: CcFeatureGroup.OnlineStoreSecurityConfigProperty | cdktn.IResolvable): any {
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


export function ccFeatureGroupTtlDurationPropertyToTerraform(struct?: CcFeatureGroup.TtlDurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccFeatureGroupTtlDurationPropertyToHclTerraform(struct?: CcFeatureGroup.TtlDurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupOnlineStoreConfigPropertyToTerraform(struct?: CcFeatureGroup.OnlineStoreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_online_store: cdktn.booleanToTerraform(struct!.enableOnlineStore),
        security_config: ccFeatureGroupOnlineStoreSecurityConfigPropertyToTerraform(struct!.securityConfig),
        storage_type: cdktn.stringToTerraform(struct!.storageType),
        ttl_duration: ccFeatureGroupTtlDurationPropertyToTerraform(struct!.ttlDuration),
    }
}


export function ccFeatureGroupOnlineStoreConfigPropertyToHclTerraform(struct?: CcFeatureGroup.OnlineStoreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_online_store: {
            value: cdktn.booleanToHclTerraform(struct!.enableOnlineStore),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_config: {
            value: ccFeatureGroupOnlineStoreSecurityConfigPropertyToHclTerraform(struct!.securityConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OnlineStoreSecurityConfigProperty",
        },
        storage_type: {
            value: cdktn.stringToHclTerraform(struct!.storageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl_duration: {
            value: ccFeatureGroupTtlDurationPropertyToHclTerraform(struct!.ttlDuration),
            isBlock: true,
            type: "struct",
            storageClassType: "TtlDurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFeatureGroupTagPropertyToTerraform(struct?: CcFeatureGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFeatureGroupTagPropertyToHclTerraform(struct?: CcFeatureGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccFeatureGroupThroughputConfigPropertyToTerraform(struct?: CcFeatureGroup.ThroughputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_read_capacity_units: cdktn.numberToTerraform(struct!.provisionedReadCapacityUnits),
        provisioned_write_capacity_units: cdktn.numberToTerraform(struct!.provisionedWriteCapacityUnits),
        throughput_mode: cdktn.stringToTerraform(struct!.throughputMode),
    }
}


export function ccFeatureGroupThroughputConfigPropertyToHclTerraform(struct?: CcFeatureGroup.ThroughputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.provisionedReadCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        provisioned_write_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.provisionedWriteCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throughput_mode: {
            value: cdktn.stringToHclTerraform(struct!.throughputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFeatureGroup {
export interface FeatureDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_name CcFeatureGroup#feature_name}
    */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_type CcFeatureGroup#feature_type}
    */
    readonly featureType: string;
}
export class FeatureDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FeatureDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._featureName !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureName = this._featureName;
        }
        if (this._featureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureType = this._featureType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FeatureDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._featureName = undefined;
            this._featureType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._featureName = value.featureName;
            this._featureType = value.featureType;
        }
    }

    // feature_name - computed: false, optional: false, required: true
    private _featureName?: string; 
    public get featureName() {
        return this.getStringAttribute('feature_name');
    }
    public set featureName(value: string) {
        this._featureName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureNameInput() {
        return this._featureName;
    }

    // feature_type - computed: false, optional: false, required: true
    private _featureType?: string; 
    public get featureType() {
        return this.getStringAttribute('feature_type');
    }
    public set featureType(value: string) {
        this._featureType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureTypeInput() {
        return this._featureType;
    }
}

export class FeatureDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : FeatureDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): FeatureDefinitionPropertyOutputReference {
        return new FeatureDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataCatalogConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#catalog CcFeatureGroup#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#database CcFeatureGroup#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_name CcFeatureGroup#table_name}
    */
    readonly tableName?: string;
}
export class DataCatalogConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCatalogConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCatalogConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._database = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._database = value.database;
            this._tableName = value.tableName;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface S3StorageConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id CcFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_uri CcFeatureGroup#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3StorageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3StorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3StorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._s3Uri = value.s3Uri;
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

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface OfflineStoreConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#data_catalog_config CcFeatureGroup#data_catalog_config}
    */
    readonly dataCatalogConfig?: DataCatalogConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation CcFeatureGroup#disable_glue_table_creation}
    */
    readonly disableGlueTableCreation?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_storage_config CcFeatureGroup#s3_storage_config}
    */
    readonly s3StorageConfig?: S3StorageConfigProperty;
    /**
    * Format for the offline store feature group. Iceberg is the optimal format for feature groups shared between offline and online stores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_format CcFeatureGroup#table_format}
    */
    readonly tableFormat?: string;
}
export class OfflineStoreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OfflineStoreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataCatalogConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCatalogConfig = this._dataCatalogConfig?.internalValue;
        }
        if (this._disableGlueTableCreation !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableGlueTableCreation = this._disableGlueTableCreation;
        }
        if (this._s3StorageConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3StorageConfig = this._s3StorageConfig?.internalValue;
        }
        if (this._tableFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableFormat = this._tableFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OfflineStoreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataCatalogConfig.internalValue = undefined;
            this._disableGlueTableCreation = undefined;
            this._s3StorageConfig.internalValue = undefined;
            this._tableFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataCatalogConfig.internalValue = value.dataCatalogConfig;
            this._disableGlueTableCreation = value.disableGlueTableCreation;
            this._s3StorageConfig.internalValue = value.s3StorageConfig;
            this._tableFormat = value.tableFormat;
        }
    }

    // data_catalog_config - computed: true, optional: true, required: false
    private _dataCatalogConfig = new DataCatalogConfigPropertyOutputReference(this, "data_catalog_config");
    public get dataCatalogConfig() {
        return this._dataCatalogConfig;
    }
    public putDataCatalogConfig(value: DataCatalogConfigProperty) {
        this._dataCatalogConfig.internalValue = value;
    }
    public resetDataCatalogConfig() {
        this._dataCatalogConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogConfigInput() {
        return this._dataCatalogConfig.internalValue;
    }

    // disable_glue_table_creation - computed: true, optional: true, required: false
    private _disableGlueTableCreation?: boolean | cdktn.IResolvable; 
    public get disableGlueTableCreation() {
        return this.getBooleanAttribute('disable_glue_table_creation');
    }
    public set disableGlueTableCreation(value: boolean | cdktn.IResolvable) {
        this._disableGlueTableCreation = value;
    }
    public resetDisableGlueTableCreation() {
        this._disableGlueTableCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableGlueTableCreationInput() {
        return this._disableGlueTableCreation;
    }

    // s3_storage_config - computed: true, optional: true, required: false
    private _s3StorageConfig = new S3StorageConfigPropertyOutputReference(this, "s3_storage_config");
    public get s3StorageConfig() {
        return this._s3StorageConfig;
    }
    public putS3StorageConfig(value: S3StorageConfigProperty) {
        this._s3StorageConfig.internalValue = value;
    }
    public resetS3StorageConfig() {
        this._s3StorageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageConfigInput() {
        return this._s3StorageConfig.internalValue;
    }

    // table_format - computed: true, optional: true, required: false
    private _tableFormat?: string; 
    public get tableFormat() {
        return this.getStringAttribute('table_format');
    }
    public set tableFormat(value: string) {
        this._tableFormat = value;
    }
    public resetTableFormat() {
        this._tableFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableFormatInput() {
        return this._tableFormat;
    }
}
export interface OnlineStoreSecurityConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id CcFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class OnlineStoreSecurityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnlineStoreSecurityConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: OnlineStoreSecurityConfigProperty | cdktn.IResolvable | undefined) {
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
export interface TtlDurationProperty {
    /**
    * Unit of ttl configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#unit CcFeatureGroup#unit}
    */
    readonly unit?: string;
    /**
    * Value of ttl configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value CcFeatureGroup#value}
    */
    readonly value?: number;
}
export class TtlDurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TtlDurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TtlDurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface OnlineStoreConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#enable_online_store CcFeatureGroup#enable_online_store}
    */
    readonly enableOnlineStore?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#security_config CcFeatureGroup#security_config}
    */
    readonly securityConfig?: OnlineStoreSecurityConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#storage_type CcFeatureGroup#storage_type}
    */
    readonly storageType?: string;
    /**
    * TTL configuration of the feature group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#ttl_duration CcFeatureGroup#ttl_duration}
    */
    readonly ttlDuration?: TtlDurationProperty;
}
export class OnlineStoreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnlineStoreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableOnlineStore !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableOnlineStore = this._enableOnlineStore;
        }
        if (this._securityConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityConfig = this._securityConfig?.internalValue;
        }
        if (this._storageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageType = this._storageType;
        }
        if (this._ttlDuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttlDuration = this._ttlDuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnlineStoreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableOnlineStore = undefined;
            this._securityConfig.internalValue = undefined;
            this._storageType = undefined;
            this._ttlDuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableOnlineStore = value.enableOnlineStore;
            this._securityConfig.internalValue = value.securityConfig;
            this._storageType = value.storageType;
            this._ttlDuration.internalValue = value.ttlDuration;
        }
    }

    // enable_online_store - computed: true, optional: true, required: false
    private _enableOnlineStore?: boolean | cdktn.IResolvable; 
    public get enableOnlineStore() {
        return this.getBooleanAttribute('enable_online_store');
    }
    public set enableOnlineStore(value: boolean | cdktn.IResolvable) {
        this._enableOnlineStore = value;
    }
    public resetEnableOnlineStore() {
        this._enableOnlineStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableOnlineStoreInput() {
        return this._enableOnlineStore;
    }

    // security_config - computed: true, optional: true, required: false
    private _securityConfig = new OnlineStoreSecurityConfigPropertyOutputReference(this, "security_config");
    public get securityConfig() {
        return this._securityConfig;
    }
    public putSecurityConfig(value: OnlineStoreSecurityConfigProperty) {
        this._securityConfig.internalValue = value;
    }
    public resetSecurityConfig() {
        this._securityConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigInput() {
        return this._securityConfig.internalValue;
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string; 
    public get storageType() {
        return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string) {
        this._storageType = value;
    }
    public resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
        return this._storageType;
    }

    // ttl_duration - computed: true, optional: true, required: false
    private _ttlDuration = new TtlDurationPropertyOutputReference(this, "ttl_duration");
    public get ttlDuration() {
        return this._ttlDuration;
    }
    public putTtlDuration(value: TtlDurationProperty) {
        this._ttlDuration.internalValue = value;
    }
    public resetTtlDuration() {
        this._ttlDuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlDurationInput() {
        return this._ttlDuration.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#key CcFeatureGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value CcFeatureGroup#value}
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
export interface ThroughputConfigProperty {
    /**
    * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units CcFeatureGroup#provisioned_read_capacity_units}
    */
    readonly provisionedReadCapacityUnits?: number;
    /**
    * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units CcFeatureGroup#provisioned_write_capacity_units}
    */
    readonly provisionedWriteCapacityUnits?: number;
    /**
    * Throughput mode configuration of the feature group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_mode CcFeatureGroup#throughput_mode}
    */
    readonly throughputMode?: string;
}
export class ThroughputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThroughputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedReadCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedReadCapacityUnits = this._provisionedReadCapacityUnits;
        }
        if (this._provisionedWriteCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedWriteCapacityUnits = this._provisionedWriteCapacityUnits;
        }
        if (this._throughputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughputMode = this._throughputMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThroughputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedReadCapacityUnits = undefined;
            this._provisionedWriteCapacityUnits = undefined;
            this._throughputMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedReadCapacityUnits = value.provisionedReadCapacityUnits;
            this._provisionedWriteCapacityUnits = value.provisionedWriteCapacityUnits;
            this._throughputMode = value.throughputMode;
        }
    }

    // provisioned_read_capacity_units - computed: true, optional: true, required: false
    private _provisionedReadCapacityUnits?: number; 
    public get provisionedReadCapacityUnits() {
        return this.getNumberAttribute('provisioned_read_capacity_units');
    }
    public set provisionedReadCapacityUnits(value: number) {
        this._provisionedReadCapacityUnits = value;
    }
    public resetProvisionedReadCapacityUnits() {
        this._provisionedReadCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedReadCapacityUnitsInput() {
        return this._provisionedReadCapacityUnits;
    }

    // provisioned_write_capacity_units - computed: true, optional: true, required: false
    private _provisionedWriteCapacityUnits?: number; 
    public get provisionedWriteCapacityUnits() {
        return this.getNumberAttribute('provisioned_write_capacity_units');
    }
    public set provisionedWriteCapacityUnits(value: number) {
        this._provisionedWriteCapacityUnits = value;
    }
    public resetProvisionedWriteCapacityUnits() {
        this._provisionedWriteCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedWriteCapacityUnitsInput() {
        return this._provisionedWriteCapacityUnits;
    }

    // throughput_mode - computed: true, optional: true, required: false
    private _throughputMode?: string; 
    public get throughputMode() {
        return this.getStringAttribute('throughput_mode');
    }
    public set throughputMode(value: string) {
        this._throughputMode = value;
    }
    public resetThroughputMode() {
        this._throughputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputModeInput() {
        return this._throughputMode;
    }
}
}
