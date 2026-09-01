// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about the capacity allocated to the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#capacity CcConnector#capacity}
    */
    readonly capacity: CcConnector.CapacityProperty;
    /**
    * The configuration for the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_configuration CcConnector#connector_configuration}
    */
    readonly connectorConfiguration: { [key: string]: string };
    /**
    * A summary description of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_description CcConnector#connector_description}
    */
    readonly connectorDescription?: string;
    /**
    * The name of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#connector_name CcConnector#connector_name}
    */
    readonly connectorName: string;
    /**
    * Details of how to connect to the Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster CcConnector#kafka_cluster}
    */
    readonly kafkaCluster: CcConnector.KafkaClusterProperty;
    /**
    * Details of the client authentication used by the Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication CcConnector#kafka_cluster_client_authentication}
    */
    readonly kafkaClusterClientAuthentication: CcConnector.KafkaClusterClientAuthenticationProperty;
    /**
    * Details of encryption in transit to the Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit CcConnector#kafka_cluster_encryption_in_transit}
    */
    readonly kafkaClusterEncryptionInTransit: CcConnector.KafkaClusterEncryptionInTransitProperty;
    /**
    * The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#kafka_connect_version CcConnector#kafka_connect_version}
    */
    readonly kafkaConnectVersion: string;
    /**
    * Details of what logs are delivered and where they are delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#log_delivery CcConnector#log_delivery}
    */
    readonly logDelivery?: CcConnector.LogDeliveryProperty;
    /**
    * The network type of the Connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#network_type CcConnector#network_type}
    */
    readonly networkType?: string;
    /**
    * List of plugins to use with the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#plugins CcConnector#plugins}
    */
    readonly plugins: CcConnector.PluginProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#service_execution_role_arn CcConnector#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#tags CcConnector#tags}
    */
    readonly tags?: CcConnector.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies the worker configuration to use with the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_configuration CcConnector#worker_configuration}
    */
    readonly workerConfiguration?: CcConnector.WorkerConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kafkaconnect_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kafkaconnect_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_kafkaconnect_connector',
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
        this._capacity.internalValue = config.capacity;
        this._connectorConfiguration = config.connectorConfiguration;
        this._connectorDescription = config.connectorDescription;
        this._connectorName = config.connectorName;
        this._kafkaCluster.internalValue = config.kafkaCluster;
        this._kafkaClusterClientAuthentication.internalValue = config.kafkaClusterClientAuthentication;
        this._kafkaClusterEncryptionInTransit.internalValue = config.kafkaClusterEncryptionInTransit;
        this._kafkaConnectVersion = config.kafkaConnectVersion;
        this._logDelivery.internalValue = config.logDelivery;
        this._networkType = config.networkType;
        this._plugins.internalValue = config.plugins;
        this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
        this._tags.internalValue = config.tags;
        this._workerConfiguration.internalValue = config.workerConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity - computed: false, optional: false, required: true
    private _capacity = new CcConnector.CapacityPropertyOutputReference(this, "capacity");
    public get capacity() {
        return this._capacity;
    }
    public putCapacity(value: CcConnector.CapacityProperty) {
        this._capacity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity.internalValue;
    }

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

    // connector_configuration - computed: false, optional: false, required: true
    private _connectorConfiguration?: { [key: string]: string }; 
    public get connectorConfiguration() {
        return this.getStringMapAttribute('connector_configuration');
    }
    public set connectorConfiguration(value: { [key: string]: string }) {
        this._connectorConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorConfigurationInput() {
        return this._connectorConfiguration;
    }

    // connector_description - computed: true, optional: true, required: false
    private _connectorDescription?: string; 
    public get connectorDescription() {
        return this.getStringAttribute('connector_description');
    }
    public set connectorDescription(value: string) {
        this._connectorDescription = value;
    }
    public resetConnectorDescription() {
        this._connectorDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorDescriptionInput() {
        return this._connectorDescription;
    }

    // connector_name - computed: false, optional: false, required: true
    private _connectorName?: string; 
    public get connectorName() {
        return this.getStringAttribute('connector_name');
    }
    public set connectorName(value: string) {
        this._connectorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorNameInput() {
        return this._connectorName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kafka_cluster - computed: false, optional: false, required: true
    private _kafkaCluster = new CcConnector.KafkaClusterPropertyOutputReference(this, "kafka_cluster");
    public get kafkaCluster() {
        return this._kafkaCluster;
    }
    public putKafkaCluster(value: CcConnector.KafkaClusterProperty) {
        this._kafkaCluster.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaClusterInput() {
        return this._kafkaCluster.internalValue;
    }

    // kafka_cluster_client_authentication - computed: false, optional: false, required: true
    private _kafkaClusterClientAuthentication = new CcConnector.KafkaClusterClientAuthenticationPropertyOutputReference(this, "kafka_cluster_client_authentication");
    public get kafkaClusterClientAuthentication() {
        return this._kafkaClusterClientAuthentication;
    }
    public putKafkaClusterClientAuthentication(value: CcConnector.KafkaClusterClientAuthenticationProperty) {
        this._kafkaClusterClientAuthentication.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaClusterClientAuthenticationInput() {
        return this._kafkaClusterClientAuthentication.internalValue;
    }

    // kafka_cluster_encryption_in_transit - computed: false, optional: false, required: true
    private _kafkaClusterEncryptionInTransit = new CcConnector.KafkaClusterEncryptionInTransitPropertyOutputReference(this, "kafka_cluster_encryption_in_transit");
    public get kafkaClusterEncryptionInTransit() {
        return this._kafkaClusterEncryptionInTransit;
    }
    public putKafkaClusterEncryptionInTransit(value: CcConnector.KafkaClusterEncryptionInTransitProperty) {
        this._kafkaClusterEncryptionInTransit.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaClusterEncryptionInTransitInput() {
        return this._kafkaClusterEncryptionInTransit.internalValue;
    }

    // kafka_connect_version - computed: false, optional: false, required: true
    private _kafkaConnectVersion?: string; 
    public get kafkaConnectVersion() {
        return this.getStringAttribute('kafka_connect_version');
    }
    public set kafkaConnectVersion(value: string) {
        this._kafkaConnectVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaConnectVersionInput() {
        return this._kafkaConnectVersion;
    }

    // log_delivery - computed: true, optional: true, required: false
    private _logDelivery = new CcConnector.LogDeliveryPropertyOutputReference(this, "log_delivery");
    public get logDelivery() {
        return this._logDelivery;
    }
    public putLogDelivery(value: CcConnector.LogDeliveryProperty) {
        this._logDelivery.internalValue = value;
    }
    public resetLogDelivery() {
        this._logDelivery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryInput() {
        return this._logDelivery.internalValue;
    }

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // plugins - computed: false, optional: false, required: true
    private _plugins = new CcConnector.PluginPropertyList(this, "plugins", true);
    public get plugins() {
        return this._plugins;
    }
    public putPlugins(value: CcConnector.PluginProperty[] | cdktn.IResolvable) {
        this._plugins.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pluginsInput() {
        return this._plugins.internalValue;
    }

    // service_execution_role_arn - computed: false, optional: false, required: true
    private _serviceExecutionRoleArn?: string; 
    public get serviceExecutionRoleArn() {
        return this.getStringAttribute('service_execution_role_arn');
    }
    public set serviceExecutionRoleArn(value: string) {
        this._serviceExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceExecutionRoleArnInput() {
        return this._serviceExecutionRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnector.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnector.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // worker_configuration - computed: true, optional: true, required: false
    private _workerConfiguration = new CcConnector.WorkerConfigurationPropertyOutputReference(this, "worker_configuration");
    public get workerConfiguration() {
        return this._workerConfiguration;
    }
    public putWorkerConfiguration(value: CcConnector.WorkerConfigurationProperty) {
        this._workerConfiguration.internalValue = value;
    }
    public resetWorkerConfiguration() {
        this._workerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerConfigurationInput() {
        return this._workerConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity: ccConnectorCapacityPropertyToTerraform(this._capacity.internalValue),
            connector_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(this._connectorConfiguration),
            connector_description: cdktn.stringToTerraform(this._connectorDescription),
            connector_name: cdktn.stringToTerraform(this._connectorName),
            kafka_cluster: ccConnectorKafkaClusterPropertyToTerraform(this._kafkaCluster.internalValue),
            kafka_cluster_client_authentication: ccConnectorKafkaClusterClientAuthenticationPropertyToTerraform(this._kafkaClusterClientAuthentication.internalValue),
            kafka_cluster_encryption_in_transit: ccConnectorKafkaClusterEncryptionInTransitPropertyToTerraform(this._kafkaClusterEncryptionInTransit.internalValue),
            kafka_connect_version: cdktn.stringToTerraform(this._kafkaConnectVersion),
            log_delivery: ccConnectorLogDeliveryPropertyToTerraform(this._logDelivery.internalValue),
            network_type: cdktn.stringToTerraform(this._networkType),
            plugins: cdktn.listMapper(ccConnectorPluginPropertyToTerraform, false)(this._plugins.internalValue),
            service_execution_role_arn: cdktn.stringToTerraform(this._serviceExecutionRoleArn),
            tags: cdktn.listMapper(ccConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
            worker_configuration: ccConnectorWorkerConfigurationPropertyToTerraform(this._workerConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity: {
                value: ccConnectorCapacityPropertyToHclTerraform(this._capacity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.CapacityProperty",
            },
            connector_configuration: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._connectorConfiguration),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            connector_description: {
                value: cdktn.stringToHclTerraform(this._connectorDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_name: {
                value: cdktn.stringToHclTerraform(this._connectorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kafka_cluster: {
                value: ccConnectorKafkaClusterPropertyToHclTerraform(this._kafkaCluster.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.KafkaClusterProperty",
            },
            kafka_cluster_client_authentication: {
                value: ccConnectorKafkaClusterClientAuthenticationPropertyToHclTerraform(this._kafkaClusterClientAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.KafkaClusterClientAuthenticationProperty",
            },
            kafka_cluster_encryption_in_transit: {
                value: ccConnectorKafkaClusterEncryptionInTransitPropertyToHclTerraform(this._kafkaClusterEncryptionInTransit.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.KafkaClusterEncryptionInTransitProperty",
            },
            kafka_connect_version: {
                value: cdktn.stringToHclTerraform(this._kafkaConnectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_delivery: {
                value: ccConnectorLogDeliveryPropertyToHclTerraform(this._logDelivery.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.LogDeliveryProperty",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plugins: {
                value: cdktn.listMapperHcl(ccConnectorPluginPropertyToHclTerraform, false)(this._plugins.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnector.PluginPropertyList",
            },
            service_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnector.TagPropertyList",
            },
            worker_configuration: {
                value: ccConnectorWorkerConfigurationPropertyToHclTerraform(this._workerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.WorkerConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorScaleInPolicyPropertyToTerraform(struct?: CcConnector.ScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_utilization_percentage: cdktn.numberToTerraform(struct!.cpuUtilizationPercentage),
    }
}


export function ccConnectorScaleInPolicyPropertyToHclTerraform(struct?: CcConnector.ScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu_utilization_percentage: {
            value: cdktn.numberToHclTerraform(struct!.cpuUtilizationPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorScaleOutPolicyPropertyToTerraform(struct?: CcConnector.ScaleOutPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_utilization_percentage: cdktn.numberToTerraform(struct!.cpuUtilizationPercentage),
    }
}


export function ccConnectorScaleOutPolicyPropertyToHclTerraform(struct?: CcConnector.ScaleOutPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu_utilization_percentage: {
            value: cdktn.numberToHclTerraform(struct!.cpuUtilizationPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorAutoScalingPropertyToTerraform(struct?: CcConnector.AutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_autoscaling_task_count: cdktn.numberToTerraform(struct!.maxAutoscalingTaskCount),
        max_worker_count: cdktn.numberToTerraform(struct!.maxWorkerCount),
        mcu_count: cdktn.numberToTerraform(struct!.mcuCount),
        min_worker_count: cdktn.numberToTerraform(struct!.minWorkerCount),
        scale_in_policy: ccConnectorScaleInPolicyPropertyToTerraform(struct!.scaleInPolicy),
        scale_out_policy: ccConnectorScaleOutPolicyPropertyToTerraform(struct!.scaleOutPolicy),
    }
}


export function ccConnectorAutoScalingPropertyToHclTerraform(struct?: CcConnector.AutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_autoscaling_task_count: {
            value: cdktn.numberToHclTerraform(struct!.maxAutoscalingTaskCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_worker_count: {
            value: cdktn.numberToHclTerraform(struct!.maxWorkerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mcu_count: {
            value: cdktn.numberToHclTerraform(struct!.mcuCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_worker_count: {
            value: cdktn.numberToHclTerraform(struct!.minWorkerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_in_policy: {
            value: ccConnectorScaleInPolicyPropertyToHclTerraform(struct!.scaleInPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ScaleInPolicyProperty",
        },
        scale_out_policy: {
            value: ccConnectorScaleOutPolicyPropertyToHclTerraform(struct!.scaleOutPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ScaleOutPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProvisionedCapacityPropertyToTerraform(struct?: CcConnector.ProvisionedCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mcu_count: cdktn.numberToTerraform(struct!.mcuCount),
        worker_count: cdktn.numberToTerraform(struct!.workerCount),
    }
}


export function ccConnectorProvisionedCapacityPropertyToHclTerraform(struct?: CcConnector.ProvisionedCapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mcu_count: {
            value: cdktn.numberToHclTerraform(struct!.mcuCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        worker_count: {
            value: cdktn.numberToHclTerraform(struct!.workerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorCapacityPropertyToTerraform(struct?: CcConnector.CapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling: ccConnectorAutoScalingPropertyToTerraform(struct!.autoScaling),
        provisioned_capacity: ccConnectorProvisionedCapacityPropertyToTerraform(struct!.provisionedCapacity),
    }
}


export function ccConnectorCapacityPropertyToHclTerraform(struct?: CcConnector.CapacityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling: {
            value: ccConnectorAutoScalingPropertyToHclTerraform(struct!.autoScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoScalingProperty",
        },
        provisioned_capacity: {
            value: ccConnectorProvisionedCapacityPropertyToHclTerraform(struct!.provisionedCapacity),
            isBlock: true,
            type: "struct",
            storageClassType: "ProvisionedCapacityProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorVpcPropertyToTerraform(struct?: CcConnector.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccConnectorVpcPropertyToHclTerraform(struct?: CcConnector.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorApacheKafkaClusterPropertyToTerraform(struct?: CcConnector.ApacheKafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bootstrap_servers: cdktn.stringToTerraform(struct!.bootstrapServers),
        vpc: ccConnectorVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccConnectorApacheKafkaClusterPropertyToHclTerraform(struct?: CcConnector.ApacheKafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bootstrap_servers: {
            value: cdktn.stringToHclTerraform(struct!.bootstrapServers),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc: {
            value: ccConnectorVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorKafkaClusterPropertyToTerraform(struct?: CcConnector.KafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apache_kafka_cluster: ccConnectorApacheKafkaClusterPropertyToTerraform(struct!.apacheKafkaCluster),
    }
}


export function ccConnectorKafkaClusterPropertyToHclTerraform(struct?: CcConnector.KafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apache_kafka_cluster: {
            value: ccConnectorApacheKafkaClusterPropertyToHclTerraform(struct!.apacheKafkaCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "ApacheKafkaClusterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorKafkaClusterClientAuthenticationPropertyToTerraform(struct?: CcConnector.KafkaClusterClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    }
}


export function ccConnectorKafkaClusterClientAuthenticationPropertyToHclTerraform(struct?: CcConnector.KafkaClusterClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorKafkaClusterEncryptionInTransitPropertyToTerraform(struct?: CcConnector.KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    }
}


export function ccConnectorKafkaClusterEncryptionInTransitPropertyToHclTerraform(struct?: CcConnector.KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorCloudWatchLogsLogDeliveryPropertyToTerraform(struct?: CcConnector.CloudWatchLogsLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccConnectorCloudWatchLogsLogDeliveryPropertyToHclTerraform(struct?: CcConnector.CloudWatchLogsLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorFirehoseLogDeliveryPropertyToTerraform(struct?: CcConnector.FirehoseLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccConnectorFirehoseLogDeliveryPropertyToHclTerraform(struct?: CcConnector.FirehoseLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStream),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorS3LogDeliveryPropertyToTerraform(struct?: CcConnector.S3LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccConnectorS3LogDeliveryPropertyToHclTerraform(struct?: CcConnector.S3LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorWorkerLogDeliveryPropertyToTerraform(struct?: CcConnector.WorkerLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccConnectorCloudWatchLogsLogDeliveryPropertyToTerraform(struct!.cloudwatchLogs),
        firehose: ccConnectorFirehoseLogDeliveryPropertyToTerraform(struct!.firehose),
        s3: ccConnectorS3LogDeliveryPropertyToTerraform(struct!.s3),
    }
}


export function ccConnectorWorkerLogDeliveryPropertyToHclTerraform(struct?: CcConnector.WorkerLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccConnectorCloudWatchLogsLogDeliveryPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsLogDeliveryProperty",
        },
        firehose: {
            value: ccConnectorFirehoseLogDeliveryPropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseLogDeliveryProperty",
        },
        s3: {
            value: ccConnectorS3LogDeliveryPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LogDeliveryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorLogDeliveryPropertyToTerraform(struct?: CcConnector.LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        worker_log_delivery: ccConnectorWorkerLogDeliveryPropertyToTerraform(struct!.workerLogDelivery),
    }
}


export function ccConnectorLogDeliveryPropertyToHclTerraform(struct?: CcConnector.LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        worker_log_delivery: {
            value: ccConnectorWorkerLogDeliveryPropertyToHclTerraform(struct!.workerLogDelivery),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerLogDeliveryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorCustomPluginPropertyToTerraform(struct?: CcConnector.CustomPluginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_plugin_arn: cdktn.stringToTerraform(struct!.customPluginArn),
        revision: cdktn.numberToTerraform(struct!.revision),
    }
}


export function ccConnectorCustomPluginPropertyToHclTerraform(struct?: CcConnector.CustomPluginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_plugin_arn: {
            value: cdktn.stringToHclTerraform(struct!.customPluginArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        revision: {
            value: cdktn.numberToHclTerraform(struct!.revision),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorPluginPropertyToTerraform(struct?: CcConnector.PluginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_plugin: ccConnectorCustomPluginPropertyToTerraform(struct!.customPlugin),
    }
}


export function ccConnectorPluginPropertyToHclTerraform(struct?: CcConnector.PluginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_plugin: {
            value: ccConnectorCustomPluginPropertyToHclTerraform(struct!.customPlugin),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPluginProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorTagPropertyToTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectorTagPropertyToHclTerraform(struct?: CcConnector.TagProperty | cdktn.IResolvable): any {
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


export function ccConnectorWorkerConfigurationPropertyToTerraform(struct?: CcConnector.WorkerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        revision: cdktn.numberToTerraform(struct!.revision),
        worker_configuration_arn: cdktn.stringToTerraform(struct!.workerConfigurationArn),
    }
}


export function ccConnectorWorkerConfigurationPropertyToHclTerraform(struct?: CcConnector.WorkerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        revision: {
            value: cdktn.numberToHclTerraform(struct!.revision),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        worker_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.workerConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnector {
export interface ScaleInPolicyProperty {
    /**
    * Specifies the CPU utilization percentage threshold at which connector scale in should trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage CcConnector#cpu_utilization_percentage}
    */
    readonly cpuUtilizationPercentage?: number;
}
export class ScaleInPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScaleInPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpuUtilizationPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScaleInPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuUtilizationPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
        }
    }

    // cpu_utilization_percentage - computed: true, optional: true, required: false
    private _cpuUtilizationPercentage?: number; 
    public get cpuUtilizationPercentage() {
        return this.getNumberAttribute('cpu_utilization_percentage');
    }
    public set cpuUtilizationPercentage(value: number) {
        this._cpuUtilizationPercentage = value;
    }
    public resetCpuUtilizationPercentage() {
        this._cpuUtilizationPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuUtilizationPercentageInput() {
        return this._cpuUtilizationPercentage;
    }
}
export interface ScaleOutPolicyProperty {
    /**
    * Specifies the CPU utilization percentage threshold at which connector scale out should trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage CcConnector#cpu_utilization_percentage}
    */
    readonly cpuUtilizationPercentage?: number;
}
export class ScaleOutPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScaleOutPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpuUtilizationPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuUtilizationPercentage = this._cpuUtilizationPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScaleOutPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuUtilizationPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuUtilizationPercentage = value.cpuUtilizationPercentage;
        }
    }

    // cpu_utilization_percentage - computed: true, optional: true, required: false
    private _cpuUtilizationPercentage?: number; 
    public get cpuUtilizationPercentage() {
        return this.getNumberAttribute('cpu_utilization_percentage');
    }
    public set cpuUtilizationPercentage(value: number) {
        this._cpuUtilizationPercentage = value;
    }
    public resetCpuUtilizationPercentage() {
        this._cpuUtilizationPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuUtilizationPercentageInput() {
        return this._cpuUtilizationPercentage;
    }
}
export interface AutoScalingProperty {
    /**
    * The maximum number of tasks allocated to the connector during autoscaling operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count CcConnector#max_autoscaling_task_count}
    */
    readonly maxAutoscalingTaskCount?: number;
    /**
    * The maximum number of workers for a connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#max_worker_count CcConnector#max_worker_count}
    */
    readonly maxWorkerCount?: number;
    /**
    * Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#mcu_count CcConnector#mcu_count}
    */
    readonly mcuCount?: number;
    /**
    * The minimum number of workers for a connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#min_worker_count CcConnector#min_worker_count}
    */
    readonly minWorkerCount?: number;
    /**
    * Information about the scale in policy of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#scale_in_policy CcConnector#scale_in_policy}
    */
    readonly scaleInPolicy?: ScaleInPolicyProperty;
    /**
    * Information about the scale out policy of the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#scale_out_policy CcConnector#scale_out_policy}
    */
    readonly scaleOutPolicy?: ScaleOutPolicyProperty;
}
export class AutoScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxAutoscalingTaskCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAutoscalingTaskCount = this._maxAutoscalingTaskCount;
        }
        if (this._maxWorkerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWorkerCount = this._maxWorkerCount;
        }
        if (this._mcuCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcuCount = this._mcuCount;
        }
        if (this._minWorkerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minWorkerCount = this._minWorkerCount;
        }
        if (this._scaleInPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInPolicy = this._scaleInPolicy?.internalValue;
        }
        if (this._scaleOutPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutPolicy = this._scaleOutPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxAutoscalingTaskCount = undefined;
            this._maxWorkerCount = undefined;
            this._mcuCount = undefined;
            this._minWorkerCount = undefined;
            this._scaleInPolicy.internalValue = undefined;
            this._scaleOutPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxAutoscalingTaskCount = value.maxAutoscalingTaskCount;
            this._maxWorkerCount = value.maxWorkerCount;
            this._mcuCount = value.mcuCount;
            this._minWorkerCount = value.minWorkerCount;
            this._scaleInPolicy.internalValue = value.scaleInPolicy;
            this._scaleOutPolicy.internalValue = value.scaleOutPolicy;
        }
    }

    // max_autoscaling_task_count - computed: true, optional: true, required: false
    private _maxAutoscalingTaskCount?: number; 
    public get maxAutoscalingTaskCount() {
        return this.getNumberAttribute('max_autoscaling_task_count');
    }
    public set maxAutoscalingTaskCount(value: number) {
        this._maxAutoscalingTaskCount = value;
    }
    public resetMaxAutoscalingTaskCount() {
        this._maxAutoscalingTaskCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAutoscalingTaskCountInput() {
        return this._maxAutoscalingTaskCount;
    }

    // max_worker_count - computed: true, optional: true, required: false
    private _maxWorkerCount?: number; 
    public get maxWorkerCount() {
        return this.getNumberAttribute('max_worker_count');
    }
    public set maxWorkerCount(value: number) {
        this._maxWorkerCount = value;
    }
    public resetMaxWorkerCount() {
        this._maxWorkerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWorkerCountInput() {
        return this._maxWorkerCount;
    }

    // mcu_count - computed: true, optional: true, required: false
    private _mcuCount?: number; 
    public get mcuCount() {
        return this.getNumberAttribute('mcu_count');
    }
    public set mcuCount(value: number) {
        this._mcuCount = value;
    }
    public resetMcuCount() {
        this._mcuCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcuCountInput() {
        return this._mcuCount;
    }

    // min_worker_count - computed: true, optional: true, required: false
    private _minWorkerCount?: number; 
    public get minWorkerCount() {
        return this.getNumberAttribute('min_worker_count');
    }
    public set minWorkerCount(value: number) {
        this._minWorkerCount = value;
    }
    public resetMinWorkerCount() {
        this._minWorkerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minWorkerCountInput() {
        return this._minWorkerCount;
    }

    // scale_in_policy - computed: true, optional: true, required: false
    private _scaleInPolicy = new ScaleInPolicyPropertyOutputReference(this, "scale_in_policy");
    public get scaleInPolicy() {
        return this._scaleInPolicy;
    }
    public putScaleInPolicy(value: ScaleInPolicyProperty) {
        this._scaleInPolicy.internalValue = value;
    }
    public resetScaleInPolicy() {
        this._scaleInPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInPolicyInput() {
        return this._scaleInPolicy.internalValue;
    }

    // scale_out_policy - computed: true, optional: true, required: false
    private _scaleOutPolicy = new ScaleOutPolicyPropertyOutputReference(this, "scale_out_policy");
    public get scaleOutPolicy() {
        return this._scaleOutPolicy;
    }
    public putScaleOutPolicy(value: ScaleOutPolicyProperty) {
        this._scaleOutPolicy.internalValue = value;
    }
    public resetScaleOutPolicy() {
        this._scaleOutPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutPolicyInput() {
        return this._scaleOutPolicy.internalValue;
    }
}
export interface ProvisionedCapacityProperty {
    /**
    * Specifies how many MSK Connect Units (MCU) are allocated to the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#mcu_count CcConnector#mcu_count}
    */
    readonly mcuCount?: number;
    /**
    * Number of workers for a connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_count CcConnector#worker_count}
    */
    readonly workerCount?: number;
}
export class ProvisionedCapacityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedCapacityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mcuCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcuCount = this._mcuCount;
        }
        if (this._workerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerCount = this._workerCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedCapacityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mcuCount = undefined;
            this._workerCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mcuCount = value.mcuCount;
            this._workerCount = value.workerCount;
        }
    }

    // mcu_count - computed: true, optional: true, required: false
    private _mcuCount?: number; 
    public get mcuCount() {
        return this.getNumberAttribute('mcu_count');
    }
    public set mcuCount(value: number) {
        this._mcuCount = value;
    }
    public resetMcuCount() {
        this._mcuCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcuCountInput() {
        return this._mcuCount;
    }

    // worker_count - computed: true, optional: true, required: false
    private _workerCount?: number; 
    public get workerCount() {
        return this.getNumberAttribute('worker_count');
    }
    public set workerCount(value: number) {
        this._workerCount = value;
    }
    public resetWorkerCount() {
        this._workerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerCountInput() {
        return this._workerCount;
    }
}
export interface CapacityProperty {
    /**
    * Details about auto scaling of a connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#auto_scaling CcConnector#auto_scaling}
    */
    readonly autoScaling?: AutoScalingProperty;
    /**
    * Details about a fixed capacity allocated to a connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#provisioned_capacity CcConnector#provisioned_capacity}
    */
    readonly provisionedCapacity?: ProvisionedCapacityProperty;
}
export class CapacityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScaling = this._autoScaling?.internalValue;
        }
        if (this._provisionedCapacity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedCapacity = this._provisionedCapacity?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScaling.internalValue = undefined;
            this._provisionedCapacity.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScaling.internalValue = value.autoScaling;
            this._provisionedCapacity.internalValue = value.provisionedCapacity;
        }
    }

    // auto_scaling - computed: true, optional: true, required: false
    private _autoScaling = new AutoScalingPropertyOutputReference(this, "auto_scaling");
    public get autoScaling() {
        return this._autoScaling;
    }
    public putAutoScaling(value: AutoScalingProperty) {
        this._autoScaling.internalValue = value;
    }
    public resetAutoScaling() {
        this._autoScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingInput() {
        return this._autoScaling.internalValue;
    }

    // provisioned_capacity - computed: true, optional: true, required: false
    private _provisionedCapacity = new ProvisionedCapacityPropertyOutputReference(this, "provisioned_capacity");
    public get provisionedCapacity() {
        return this._provisionedCapacity;
    }
    public putProvisionedCapacity(value: ProvisionedCapacityProperty) {
        this._provisionedCapacity.internalValue = value;
    }
    public resetProvisionedCapacity() {
        this._provisionedCapacity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedCapacityInput() {
        return this._provisionedCapacity.internalValue;
    }
}
export interface VpcProperty {
    /**
    * The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#security_groups CcConnector#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#subnets CcConnector#subnets}
    */
    readonly subnets: string[];
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // security_groups - computed: false, optional: false, required: true
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
        return cdktn.Fn.tolist(this.getListAttribute('subnets'));
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface ApacheKafkaClusterProperty {
    /**
    * The bootstrap servers string of the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#bootstrap_servers CcConnector#bootstrap_servers}
    */
    readonly bootstrapServers: string;
    /**
    * Information about a VPC used with the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#vpc CcConnector#vpc}
    */
    readonly vpc: VpcProperty;
}
export class ApacheKafkaClusterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApacheKafkaClusterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bootstrapServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.bootstrapServers = this._bootstrapServers;
        }
        if (this._vpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpc = this._vpc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApacheKafkaClusterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bootstrapServers = undefined;
            this._vpc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bootstrapServers = value.bootstrapServers;
            this._vpc.internalValue = value.vpc;
        }
    }

    // bootstrap_servers - computed: false, optional: false, required: true
    private _bootstrapServers?: string; 
    public get bootstrapServers() {
        return this.getStringAttribute('bootstrap_servers');
    }
    public set bootstrapServers(value: string) {
        this._bootstrapServers = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bootstrapServersInput() {
        return this._bootstrapServers;
    }

    // vpc - computed: false, optional: false, required: true
    private _vpc = new VpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: VpcProperty) {
        this._vpc.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }
}
export interface KafkaClusterProperty {
    /**
    * Details of how to connect to an Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster CcConnector#apache_kafka_cluster}
    */
    readonly apacheKafkaCluster: ApacheKafkaClusterProperty;
}
export class KafkaClusterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apacheKafkaCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apacheKafkaCluster = this._apacheKafkaCluster?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apacheKafkaCluster.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apacheKafkaCluster.internalValue = value.apacheKafkaCluster;
        }
    }

    // apache_kafka_cluster - computed: false, optional: false, required: true
    private _apacheKafkaCluster = new ApacheKafkaClusterPropertyOutputReference(this, "apache_kafka_cluster");
    public get apacheKafkaCluster() {
        return this._apacheKafkaCluster;
    }
    public putApacheKafkaCluster(value: ApacheKafkaClusterProperty) {
        this._apacheKafkaCluster.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apacheKafkaClusterInput() {
        return this._apacheKafkaCluster.internalValue;
    }
}
export interface KafkaClusterClientAuthenticationProperty {
    /**
    * The type of client authentication used to connect to the Kafka cluster. Value NONE means that no client authentication is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#authentication_type CcConnector#authentication_type}
    */
    readonly authenticationType: string;
}
export class KafkaClusterClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterClientAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterClientAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
        }
    }

    // authentication_type - computed: false, optional: false, required: true
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }
}
export interface KafkaClusterEncryptionInTransitProperty {
    /**
    * The type of encryption in transit to the Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#encryption_type CcConnector#encryption_type}
    */
    readonly encryptionType: string;
}
export class KafkaClusterEncryptionInTransitPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
        }
    }

    // encryption_type - computed: false, optional: false, required: true
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }
}
export interface CloudWatchLogsLogDeliveryProperty {
    /**
    * Specifies whether the logs get sent to the specified CloudWatch Logs destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled CcConnector#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The CloudWatch log group that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#log_group CcConnector#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogsLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsLogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsLogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroup = value.logGroup;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }
}
export interface FirehoseLogDeliveryProperty {
    /**
    * The Kinesis Data Firehose delivery stream that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#delivery_stream CcConnector#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled CcConnector#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class FirehoseLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseLogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStream !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStream = this._deliveryStream;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseLogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStream = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStream = value.deliveryStream;
            this._enabled = value.enabled;
        }
    }

    // delivery_stream - computed: true, optional: true, required: false
    private _deliveryStream?: string; 
    public get deliveryStream() {
        return this.getStringAttribute('delivery_stream');
    }
    public set deliveryStream(value: string) {
        this._deliveryStream = value;
    }
    public resetDeliveryStream() {
        this._deliveryStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamInput() {
        return this._deliveryStream;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface S3LogDeliveryProperty {
    /**
    * The name of the S3 bucket that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#bucket CcConnector#bucket}
    */
    readonly bucket?: string;
    /**
    * Specifies whether the logs get sent to the specified Amazon S3 destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#enabled CcConnector#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The S3 prefix that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#prefix CcConnector#prefix}
    */
    readonly prefix?: string;
}
export class S3LogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._enabled = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._enabled = value.enabled;
            this._prefix = value.prefix;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface WorkerLogDeliveryProperty {
    /**
    * Details about delivering logs to Amazon CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#cloudwatch_logs CcConnector#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogsLogDeliveryProperty;
    /**
    * Details about delivering logs to Amazon Kinesis Data Firehose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#firehose CcConnector#firehose}
    */
    readonly firehose?: FirehoseLogDeliveryProperty;
    /**
    * Details about delivering logs to Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#s3 CcConnector#s3}
    */
    readonly s3?: S3LogDeliveryProperty;
}
export class WorkerLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkerLogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkerLogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._firehose.internalValue = value.firehose;
            this._s3.internalValue = value.s3;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudWatchLogsLogDeliveryPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogsLogDeliveryProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new FirehoseLogDeliveryPropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseLogDeliveryProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3LogDeliveryPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3LogDeliveryProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface LogDeliveryProperty {
    /**
    * Specifies where worker logs are delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_log_delivery CcConnector#worker_log_delivery}
    */
    readonly workerLogDelivery?: WorkerLogDeliveryProperty;
}
export class LogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workerLogDelivery?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerLogDelivery = this._workerLogDelivery?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workerLogDelivery.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workerLogDelivery.internalValue = value.workerLogDelivery;
        }
    }

    // worker_log_delivery - computed: true, optional: true, required: false
    private _workerLogDelivery = new WorkerLogDeliveryPropertyOutputReference(this, "worker_log_delivery");
    public get workerLogDelivery() {
        return this._workerLogDelivery;
    }
    public putWorkerLogDelivery(value: WorkerLogDeliveryProperty) {
        this._workerLogDelivery.internalValue = value;
    }
    public resetWorkerLogDelivery() {
        this._workerLogDelivery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerLogDeliveryInput() {
        return this._workerLogDelivery.internalValue;
    }
}
export interface CustomPluginProperty {
    /**
    * The Amazon Resource Name (ARN) of the custom plugin to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#custom_plugin_arn CcConnector#custom_plugin_arn}
    */
    readonly customPluginArn: string;
    /**
    * The revision of the custom plugin to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#revision CcConnector#revision}
    */
    readonly revision: number;
}
export class CustomPluginPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPluginProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customPluginArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPluginArn = this._customPluginArn;
        }
        if (this._revision !== undefined) {
            hasAnyValues = true;
            internalValueResult.revision = this._revision;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPluginProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customPluginArn = undefined;
            this._revision = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customPluginArn = value.customPluginArn;
            this._revision = value.revision;
        }
    }

    // custom_plugin_arn - computed: false, optional: false, required: true
    private _customPluginArn?: string; 
    public get customPluginArn() {
        return this.getStringAttribute('custom_plugin_arn');
    }
    public set customPluginArn(value: string) {
        this._customPluginArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customPluginArnInput() {
        return this._customPluginArn;
    }

    // revision - computed: false, optional: false, required: true
    private _revision?: number; 
    public get revision() {
        return this.getNumberAttribute('revision');
    }
    public set revision(value: number) {
        this._revision = value;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionInput() {
        return this._revision;
    }
}
export interface PluginProperty {
    /**
    * Details about a custom plugin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#custom_plugin CcConnector#custom_plugin}
    */
    readonly customPlugin: CustomPluginProperty;
}
export class PluginPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PluginProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customPlugin?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPlugin = this._customPlugin?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PluginProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customPlugin.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customPlugin.internalValue = value.customPlugin;
        }
    }

    // custom_plugin - computed: false, optional: false, required: true
    private _customPlugin = new CustomPluginPropertyOutputReference(this, "custom_plugin");
    public get customPlugin() {
        return this._customPlugin;
    }
    public putCustomPlugin(value: CustomPluginProperty) {
        this._customPlugin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customPluginInput() {
        return this._customPlugin.internalValue;
    }
}

export class PluginPropertyList extends cdktn.ComplexList {
    public internalValue? : PluginProperty[] | cdktn.IResolvable

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
    public get(index: number): PluginPropertyOutputReference {
        return new PluginPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#key CcConnector#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#value CcConnector#value}
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
export interface WorkerConfigurationProperty {
    /**
    * The revision of the worker configuration to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#revision CcConnector#revision}
    */
    readonly revision?: number;
    /**
    * The Amazon Resource Name (ARN) of the worker configuration to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/kafkaconnect_connector#worker_configuration_arn CcConnector#worker_configuration_arn}
    */
    readonly workerConfigurationArn?: string;
}
export class WorkerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._revision !== undefined) {
            hasAnyValues = true;
            internalValueResult.revision = this._revision;
        }
        if (this._workerConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerConfigurationArn = this._workerConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._revision = undefined;
            this._workerConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._revision = value.revision;
            this._workerConfigurationArn = value.workerConfigurationArn;
        }
    }

    // revision - computed: true, optional: true, required: false
    private _revision?: number; 
    public get revision() {
        return this.getNumberAttribute('revision');
    }
    public set revision(value: number) {
        this._revision = value;
    }
    public resetRevision() {
        this._revision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionInput() {
        return this._revision;
    }

    // worker_configuration_arn - computed: true, optional: true, required: false
    private _workerConfigurationArn?: string; 
    public get workerConfigurationArn() {
        return this.getStringAttribute('worker_configuration_arn');
    }
    public set workerConfigurationArn(value: string) {
        this._workerConfigurationArn = value;
    }
    public resetWorkerConfigurationArn() {
        this._workerConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workerConfigurationArnInput() {
        return this._workerConfigurationArn;
    }
}
}
