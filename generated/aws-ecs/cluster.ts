// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) actions.
    *  If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
    *  To use a FARGATElong capacity provider, specify either the ``FARGATE`` or ``FARGATE_SPOT`` capacity providers. The FARGATElong capacity providers are available to all accounts and only need to be associated with a cluster to be used.
    *  The [PutCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html) API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#capacity_providers CcCluster#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * A user-generated string that you use to identify your cluster. If you don't specify a name, CFNlong generates a unique physical ID for the name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
    *  Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up. 
    *  For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#cluster_settings CcCluster#cluster_settings}
    */
    readonly clusterSettings?: CcCluster.ClusterSettingsProperty[] | cdktn.IResolvable;
    /**
    * The execute command and managed storage configuration for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#configuration CcCluster#configuration}
    */
    readonly configuration?: CcCluster.ClusterConfigurationProperty;
    /**
    * The default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#default_capacity_provider_strategy CcCluster#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy?: CcCluster.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the ``enabled`` parameter to ``true`` in the ``ServiceConnectConfiguration``. You can set the namespace of each service individually in the ``ServiceConnectConfiguration`` to override this default parameter.
    *  Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#service_connect_defaults CcCluster#service_connect_defaults}
    */
    readonly serviceConnectDefaults?: CcCluster.ServiceConnectDefaultsProperty;
    /**
    * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
    *  The following basic restrictions apply to tags:
    *   +  Maximum number of tags per resource - 50
    *   +  For each resource, each tag key must be unique, and each tag key can have only one value.
    *   +  Maximum key length - 128 Unicode characters in UTF-8
    *   +  Maximum value length - 256 Unicode characters in UTF-8
    *   +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *   +  Tag keys and values are case-sensitive.
    *   +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster awscc_ecs_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster awscc_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_cluster',
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
        this._capacityProviders = config.capacityProviders;
        this._clusterName = config.clusterName;
        this._clusterSettings.internalValue = config.clusterSettings;
        this._configuration.internalValue = config.configuration;
        this._defaultCapacityProviderStrategy.internalValue = config.defaultCapacityProviderStrategy;
        this._serviceConnectDefaults.internalValue = config.serviceConnectDefaults;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_providers - computed: true, optional: true, required: false
    private _capacityProviders?: string[]; 
    public get capacityProviders() {
        return this.getListAttribute('capacity_providers');
    }
    public set capacityProviders(value: string[]) {
        this._capacityProviders = value;
    }
    public resetCapacityProviders() {
        this._capacityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProvidersInput() {
        return this._capacityProviders;
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // cluster_settings - computed: true, optional: true, required: false
    private _clusterSettings = new CcCluster.ClusterSettingsPropertyList(this, "cluster_settings", false);
    public get clusterSettings() {
        return this._clusterSettings;
    }
    public putClusterSettings(value: CcCluster.ClusterSettingsProperty[] | cdktn.IResolvable) {
        this._clusterSettings.internalValue = value;
    }
    public resetClusterSettings() {
        this._clusterSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterSettingsInput() {
        return this._clusterSettings.internalValue;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcCluster.ClusterConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcCluster.ClusterConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // default_capacity_provider_strategy - computed: true, optional: true, required: false
    private _defaultCapacityProviderStrategy = new CcCluster.CapacityProviderStrategyItemPropertyList(this, "default_capacity_provider_strategy", false);
    public get defaultCapacityProviderStrategy() {
        return this._defaultCapacityProviderStrategy;
    }
    public putDefaultCapacityProviderStrategy(value: CcCluster.CapacityProviderStrategyItemProperty[] | cdktn.IResolvable) {
        this._defaultCapacityProviderStrategy.internalValue = value;
    }
    public resetDefaultCapacityProviderStrategy() {
        this._defaultCapacityProviderStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCapacityProviderStrategyInput() {
        return this._defaultCapacityProviderStrategy.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // service_connect_defaults - computed: true, optional: true, required: false
    private _serviceConnectDefaults = new CcCluster.ServiceConnectDefaultsPropertyOutputReference(this, "service_connect_defaults");
    public get serviceConnectDefaults() {
        return this._serviceConnectDefaults;
    }
    public putServiceConnectDefaults(value: CcCluster.ServiceConnectDefaultsProperty) {
        this._serviceConnectDefaults.internalValue = value;
    }
    public resetServiceConnectDefaults() {
        this._serviceConnectDefaults.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceConnectDefaultsInput() {
        return this._serviceConnectDefaults.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capacityProviders),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            cluster_settings: cdktn.listMapper(ccClusterClusterSettingsPropertyToTerraform, false)(this._clusterSettings.internalValue),
            configuration: ccClusterClusterConfigurationPropertyToTerraform(this._configuration.internalValue),
            default_capacity_provider_strategy: cdktn.listMapper(ccClusterCapacityProviderStrategyItemPropertyToTerraform, false)(this._defaultCapacityProviderStrategy.internalValue),
            service_connect_defaults: ccClusterServiceConnectDefaultsPropertyToTerraform(this._serviceConnectDefaults.internalValue),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity_providers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capacityProviders),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_settings: {
                value: cdktn.listMapperHcl(ccClusterClusterSettingsPropertyToHclTerraform, false)(this._clusterSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.ClusterSettingsPropertyList",
            },
            configuration: {
                value: ccClusterClusterConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ClusterConfigurationProperty",
            },
            default_capacity_provider_strategy: {
                value: cdktn.listMapperHcl(ccClusterCapacityProviderStrategyItemPropertyToHclTerraform, false)(this._defaultCapacityProviderStrategy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.CapacityProviderStrategyItemPropertyList",
            },
            service_connect_defaults: {
                value: ccClusterServiceConnectDefaultsPropertyToHclTerraform(this._serviceConnectDefaults.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ServiceConnectDefaultsProperty",
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

export function ccClusterClusterSettingsPropertyToTerraform(struct?: CcCluster.ClusterSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterClusterSettingsPropertyToHclTerraform(struct?: CcCluster.ClusterSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccClusterExecuteCommandLogConfigurationPropertyToTerraform(struct?: CcCluster.ExecuteCommandLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_encryption_enabled: cdktn.booleanToTerraform(struct!.cloudwatchEncryptionEnabled),
        cloudwatch_log_group_name: cdktn.stringToTerraform(struct!.cloudwatchLogGroupName),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        s3_encryption_enabled: cdktn.booleanToTerraform(struct!.s3EncryptionEnabled),
        s3_key_prefix: cdktn.stringToTerraform(struct!.s3KeyPrefix),
    }
}


export function ccClusterExecuteCommandLogConfigurationPropertyToHclTerraform(struct?: CcCluster.ExecuteCommandLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_encryption_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cloudwatchEncryptionEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cloudwatch_log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroupName),
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
        s3_encryption_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.s3EncryptionEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterExecuteCommandConfigurationPropertyToTerraform(struct?: CcCluster.ExecuteCommandConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        log_configuration: ccClusterExecuteCommandLogConfigurationPropertyToTerraform(struct!.logConfiguration),
        logging: cdktn.stringToTerraform(struct!.logging),
    }
}


export function ccClusterExecuteCommandConfigurationPropertyToHclTerraform(struct?: CcCluster.ExecuteCommandConfigurationProperty | cdktn.IResolvable): any {
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
        log_configuration: {
            value: ccClusterExecuteCommandLogConfigurationPropertyToHclTerraform(struct!.logConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ExecuteCommandLogConfigurationProperty",
        },
        logging: {
            value: cdktn.stringToHclTerraform(struct!.logging),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterManagedStorageConfigurationPropertyToTerraform(struct?: CcCluster.ManagedStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fargate_ephemeral_storage_kms_key_id: cdktn.stringToTerraform(struct!.fargateEphemeralStorageKmsKeyId),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccClusterManagedStorageConfigurationPropertyToHclTerraform(struct?: CcCluster.ManagedStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fargate_ephemeral_storage_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.fargateEphemeralStorageKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccClusterClusterConfigurationPropertyToTerraform(struct?: CcCluster.ClusterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execute_command_configuration: ccClusterExecuteCommandConfigurationPropertyToTerraform(struct!.executeCommandConfiguration),
        managed_storage_configuration: ccClusterManagedStorageConfigurationPropertyToTerraform(struct!.managedStorageConfiguration),
    }
}


export function ccClusterClusterConfigurationPropertyToHclTerraform(struct?: CcCluster.ClusterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execute_command_configuration: {
            value: ccClusterExecuteCommandConfigurationPropertyToHclTerraform(struct!.executeCommandConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ExecuteCommandConfigurationProperty",
        },
        managed_storage_configuration: {
            value: ccClusterManagedStorageConfigurationPropertyToHclTerraform(struct!.managedStorageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterCapacityProviderStrategyItemPropertyToTerraform(struct?: CcCluster.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base: cdktn.numberToTerraform(struct!.base),
        capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccClusterCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcCluster.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base: {
            value: cdktn.numberToHclTerraform(struct!.base),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_provider: {
            value: cdktn.stringToHclTerraform(struct!.capacityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterServiceConnectDefaultsPropertyToTerraform(struct?: CcCluster.ServiceConnectDefaultsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccClusterServiceConnectDefaultsPropertyToHclTerraform(struct?: CcCluster.ServiceConnectDefaultsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
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
export interface ClusterSettingsProperty {
    /**
    * The name of the cluster setting. The value is ``containerInsights``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * The value to set for the cluster setting. The supported values are ``enhanced``, ``enabled``, and ``disabled``. 
    *  To use Container Insights with enhanced observability, set the ``containerInsights`` account setting to ``enhanced``.
    *  To use Container Insights, set the ``containerInsights`` account setting to ``enabled``.
    *  If a cluster value is specified, it will override the ``containerInsights`` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#value CcCluster#value}
    */
    readonly value?: string;
}
export class ClusterSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusterSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class ClusterSettingsPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusterSettingsProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusterSettingsPropertyOutputReference {
        return new ClusterSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExecuteCommandLogConfigurationProperty {
    /**
    * Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#cloudwatch_encryption_enabled CcCluster#cloudwatch_encryption_enabled}
    */
    readonly cloudwatchEncryptionEnabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the CloudWatch log group to send logs to.
    *   The CloudWatch log group must already be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#cloudwatch_log_group_name CcCluster#cloudwatch_log_group_name}
    */
    readonly cloudwatchLogGroupName?: string;
    /**
    * The name of the S3 bucket to send logs to.
    *   The S3 bucket must already be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#s3_bucket_name CcCluster#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Determines whether to use encryption on the S3 logs. If not specified, encryption is not used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#s3_encryption_enabled CcCluster#s3_encryption_enabled}
    */
    readonly s3EncryptionEnabled?: boolean | cdktn.IResolvable;
    /**
    * An optional folder in the S3 bucket to place logs in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#s3_key_prefix CcCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export class ExecuteCommandLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExecuteCommandLogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchEncryptionEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryptionEnabled = this._cloudwatchEncryptionEnabled;
        }
        if (this._cloudwatchLogGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3EncryptionEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3EncryptionEnabled = this._s3EncryptionEnabled;
        }
        if (this._s3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExecuteCommandLogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchEncryptionEnabled = undefined;
            this._cloudwatchLogGroupName = undefined;
            this._s3BucketName = undefined;
            this._s3EncryptionEnabled = undefined;
            this._s3KeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchEncryptionEnabled = value.cloudwatchEncryptionEnabled;
            this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
            this._s3BucketName = value.s3BucketName;
            this._s3EncryptionEnabled = value.s3EncryptionEnabled;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
    }

    // cloudwatch_encryption_enabled - computed: true, optional: true, required: false
    private _cloudwatchEncryptionEnabled?: boolean | cdktn.IResolvable; 
    public get cloudwatchEncryptionEnabled() {
        return this.getBooleanAttribute('cloudwatch_encryption_enabled');
    }
    public set cloudwatchEncryptionEnabled(value: boolean | cdktn.IResolvable) {
        this._cloudwatchEncryptionEnabled = value;
    }
    public resetCloudwatchEncryptionEnabled() {
        this._cloudwatchEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchEncryptionEnabledInput() {
        return this._cloudwatchEncryptionEnabled;
    }

    // cloudwatch_log_group_name - computed: true, optional: true, required: false
    private _cloudwatchLogGroupName?: string; 
    public get cloudwatchLogGroupName() {
        return this.getStringAttribute('cloudwatch_log_group_name');
    }
    public set cloudwatchLogGroupName(value: string) {
        this._cloudwatchLogGroupName = value;
    }
    public resetCloudwatchLogGroupName() {
        this._cloudwatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupNameInput() {
        return this._cloudwatchLogGroupName;
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

    // s3_encryption_enabled - computed: true, optional: true, required: false
    private _s3EncryptionEnabled?: boolean | cdktn.IResolvable; 
    public get s3EncryptionEnabled() {
        return this.getBooleanAttribute('s3_encryption_enabled');
    }
    public set s3EncryptionEnabled(value: boolean | cdktn.IResolvable) {
        this._s3EncryptionEnabled = value;
    }
    public resetS3EncryptionEnabled() {
        this._s3EncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3EncryptionEnabledInput() {
        return this._s3EncryptionEnabled;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
export interface ExecuteCommandConfigurationProperty {
    /**
    * Specify an KMSlong key ID to encrypt the data between the local client and the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#kms_key_id CcCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When ``logging=OVERRIDE`` is specified, a ``logConfiguration`` must be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#log_configuration CcCluster#log_configuration}
    */
    readonly logConfiguration?: ExecuteCommandLogConfigurationProperty;
    /**
    * The log setting to use for redirecting logs for your execute command results. The following log settings are available.
    *   +  ``NONE``: The execute command session is not logged.
    *   +  ``DEFAULT``: The ``awslogs`` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no ``awslogs`` log driver is configured in the task definition, the output won't be logged.
    *   +  ``OVERRIDE``: Specify the logging details as a part of ``logConfiguration``. If the ``OVERRIDE`` logging option is specified, the ``logConfiguration`` is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#logging CcCluster#logging}
    */
    readonly logging?: string;
}
export class ExecuteCommandConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExecuteCommandConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._logConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
        }
        if (this._logging !== undefined) {
            hasAnyValues = true;
            internalValueResult.logging = this._logging;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExecuteCommandConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._logConfiguration.internalValue = undefined;
            this._logging = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._logConfiguration.internalValue = value.logConfiguration;
            this._logging = value.logging;
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

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new ExecuteCommandLogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: ExecuteCommandLogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // logging - computed: true, optional: true, required: false
    private _logging?: string; 
    public get logging() {
        return this.getStringAttribute('logging');
    }
    public set logging(value: string) {
        this._logging = value;
    }
    public resetLogging() {
        this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
        return this._logging;
    }
}
export interface ManagedStorageConfigurationProperty {
    /**
    * Specify the KMSlong key ID for Fargate ephemeral storage.
    *  When you specify a ``fargateEphemeralStorageKmsKeyId``, AWS Fargate uses the key to encrypt data at rest in ephemeral storage. For more information about Fargate ephemeral storage encryption, see [Customer managed keys for Fargate ephemeral storage for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-storage-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The key must be a single Region key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#fargate_ephemeral_storage_kms_key_id CcCluster#fargate_ephemeral_storage_kms_key_id}
    */
    readonly fargateEphemeralStorageKmsKeyId?: string;
    /**
    * Specify a KMSlong key ID to encrypt Amazon ECS managed storage.
    *   When you specify a ``kmsKeyId``, Amazon ECS uses the key to encrypt data volumes managed by Amazon ECS that are attached to tasks in the cluster. The following data volumes are managed by Amazon ECS: Amazon EBS. For more information about encryption of Amazon EBS volumes attached to Amazon ECS tasks, see [Encrypt data stored in Amazon EBS volumes for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
    *  The key must be a single Region key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#kms_key_id CcCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class ManagedStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fargateEphemeralStorageKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fargateEphemeralStorageKmsKeyId = this._fargateEphemeralStorageKmsKeyId;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fargateEphemeralStorageKmsKeyId = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fargateEphemeralStorageKmsKeyId = value.fargateEphemeralStorageKmsKeyId;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // fargate_ephemeral_storage_kms_key_id - computed: true, optional: true, required: false
    private _fargateEphemeralStorageKmsKeyId?: string; 
    public get fargateEphemeralStorageKmsKeyId() {
        return this.getStringAttribute('fargate_ephemeral_storage_kms_key_id');
    }
    public set fargateEphemeralStorageKmsKeyId(value: string) {
        this._fargateEphemeralStorageKmsKeyId = value;
    }
    public resetFargateEphemeralStorageKmsKeyId() {
        this._fargateEphemeralStorageKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fargateEphemeralStorageKmsKeyIdInput() {
        return this._fargateEphemeralStorageKmsKeyId;
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
export interface ClusterConfigurationProperty {
    /**
    * The details of the execute command configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#execute_command_configuration CcCluster#execute_command_configuration}
    */
    readonly executeCommandConfiguration?: ExecuteCommandConfigurationProperty;
    /**
    * The details of the managed storage configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#managed_storage_configuration CcCluster#managed_storage_configuration}
    */
    readonly managedStorageConfiguration?: ManagedStorageConfigurationProperty;
}
export class ClusterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executeCommandConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.executeCommandConfiguration = this._executeCommandConfiguration?.internalValue;
        }
        if (this._managedStorageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedStorageConfiguration = this._managedStorageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executeCommandConfiguration.internalValue = undefined;
            this._managedStorageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executeCommandConfiguration.internalValue = value.executeCommandConfiguration;
            this._managedStorageConfiguration.internalValue = value.managedStorageConfiguration;
        }
    }

    // execute_command_configuration - computed: true, optional: true, required: false
    private _executeCommandConfiguration = new ExecuteCommandConfigurationPropertyOutputReference(this, "execute_command_configuration");
    public get executeCommandConfiguration() {
        return this._executeCommandConfiguration;
    }
    public putExecuteCommandConfiguration(value: ExecuteCommandConfigurationProperty) {
        this._executeCommandConfiguration.internalValue = value;
    }
    public resetExecuteCommandConfiguration() {
        this._executeCommandConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executeCommandConfigurationInput() {
        return this._executeCommandConfiguration.internalValue;
    }

    // managed_storage_configuration - computed: true, optional: true, required: false
    private _managedStorageConfiguration = new ManagedStorageConfigurationPropertyOutputReference(this, "managed_storage_configuration");
    public get managedStorageConfiguration() {
        return this._managedStorageConfiguration;
    }
    public putManagedStorageConfiguration(value: ManagedStorageConfigurationProperty) {
        this._managedStorageConfiguration.internalValue = value;
    }
    public resetManagedStorageConfiguration() {
        this._managedStorageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedStorageConfigurationInput() {
        return this._managedStorageConfiguration.internalValue;
    }
}
export interface CapacityProviderStrategyItemProperty {
    /**
    * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
    *  Base value characteristics:
    *   +  Only one capacity provider in a strategy can have a base defined
    *   +  The default value is ``0`` if not specified
    *   +  The valid range is 0 to 100,000
    *   +  Base requirements are satisfied first before weight distribution
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#base CcCluster#base}
    */
    readonly base?: number;
    /**
    * The short name of the capacity provider. This can be either an AWS managed capacity provider (``FARGATE`` or ``FARGATE_SPOT``) or the name of a custom capacity provider that you created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#capacity_provider CcCluster#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
    *  If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
    *  Weight value characteristics:
    *   +  Weight is considered after the base value is satisfied
    *   +  The default value is ``0`` if not specified
    *   +  The valid range is 0 to 1,000
    *   +  At least one capacity provider must have a weight greater than zero
    *   +  Capacity providers with weight of ``0`` cannot place tasks
    *   
    *  Task distribution logic:
    *   1.  Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider
    *   1.  Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios
    *   
    *  Examples:
    *  Equal Distribution: Two capacity providers both with weight ``1`` will split tasks evenly after base requirements are met.
    *  Weighted Distribution: If capacityProviderA has weight ``1`` and capacityProviderB has weight ``4``, then for every 1 task on A, 4 tasks will run on B.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#weight CcCluster#weight}
    */
    readonly weight?: number;
}
export class CapacityProviderStrategyItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._base !== undefined) {
            hasAnyValues = true;
            internalValueResult.base = this._base;
        }
        if (this._capacityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProvider = this._capacityProvider;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._base = undefined;
            this._capacityProvider = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._base = value.base;
            this._capacityProvider = value.capacityProvider;
            this._weight = value.weight;
        }
    }

    // base - computed: true, optional: true, required: false
    private _base?: number; 
    public get base() {
        return this.getNumberAttribute('base');
    }
    public set base(value: number) {
        this._base = value;
    }
    public resetBase() {
        this._base = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInput() {
        return this._base;
    }

    // capacity_provider - computed: true, optional: true, required: false
    private _capacityProvider?: string; 
    public get capacityProvider() {
        return this.getStringAttribute('capacity_provider');
    }
    public set capacityProvider(value: string) {
        this._capacityProvider = value;
    }
    public resetCapacityProvider() {
        this._capacityProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderInput() {
        return this._capacityProvider;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class CapacityProviderStrategyItemPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityProviderStrategyItemProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityProviderStrategyItemPropertyOutputReference {
        return new CapacityProviderStrategyItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceConnectDefaultsProperty {
    /**
    * The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (>), less than (<), double quotation marks ("), or slash (/).
    *  If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this AWS Region.
    *  If you enter a new name, a CMAPlong namespace will be created. Amazon ECS creates a CMAP namespace with the "API calls" method of instance discovery only. This instance discovery method is the "HTTP" namespace type in the CLIlong. Other types of instance discovery aren't used by Service Connect.
    *  If you update the cluster with an empty string ``""`` for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in CMAP and must be deleted separately.
    *  For more information about CMAPlong, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#namespace CcCluster#namespace}
    */
    readonly namespace?: string;
}
export class ServiceConnectDefaultsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConnectDefaultsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConnectDefaultsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
        }
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_cluster#value CcCluster#value}
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
