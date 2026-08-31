// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#broker_node_group_info CcCluster#broker_node_group_info}
    */
    readonly brokerNodeGroupInfo: CcCluster.BrokerNodeGroupInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#client_authentication CcCluster#client_authentication}
    */
    readonly clientAuthentication?: CcCluster.ClientAuthenticationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#configuration_info CcCluster#configuration_info}
    */
    readonly configurationInfo?: CcCluster.ConfigurationInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#encryption_info CcCluster#encryption_info}
    */
    readonly encryptionInfo?: CcCluster.EncryptionInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enhanced_monitoring CcCluster#enhanced_monitoring}
    */
    readonly enhancedMonitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#kafka_version CcCluster#kafka_version}
    */
    readonly kafkaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#logging_info CcCluster#logging_info}
    */
    readonly loggingInfo?: CcCluster.LoggingInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#number_of_broker_nodes CcCluster#number_of_broker_nodes}
    */
    readonly numberOfBrokerNodes: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#open_monitoring CcCluster#open_monitoring}
    */
    readonly openMonitoring?: CcCluster.OpenMonitoringProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#rebalancing CcCluster#rebalancing}
    */
    readonly rebalancing?: CcCluster.RebalancingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#storage_mode CcCluster#storage_mode}
    */
    readonly storageMode?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#tags CcCluster#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#zookeeper_access CcCluster#zookeeper_access}
    */
    readonly zookeeperAccess?: CcCluster.ZookeeperAccessProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster awscc_msk_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster awscc_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_cluster',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._brokerNodeGroupInfo.internalValue = config.brokerNodeGroupInfo;
        this._clientAuthentication.internalValue = config.clientAuthentication;
        this._clusterName = config.clusterName;
        this._configurationInfo.internalValue = config.configurationInfo;
        this._encryptionInfo.internalValue = config.encryptionInfo;
        this._enhancedMonitoring = config.enhancedMonitoring;
        this._kafkaVersion = config.kafkaVersion;
        this._loggingInfo.internalValue = config.loggingInfo;
        this._numberOfBrokerNodes = config.numberOfBrokerNodes;
        this._openMonitoring.internalValue = config.openMonitoring;
        this._rebalancing.internalValue = config.rebalancing;
        this._storageMode = config.storageMode;
        this._tags = config.tags;
        this._zookeeperAccess.internalValue = config.zookeeperAccess;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // broker_node_group_info - computed: false, optional: false, required: true
    private _brokerNodeGroupInfo = new CcCluster.BrokerNodeGroupInfoPropertyOutputReference(this, "broker_node_group_info");
    public get brokerNodeGroupInfo() {
        return this._brokerNodeGroupInfo;
    }
    public putBrokerNodeGroupInfo(value: CcCluster.BrokerNodeGroupInfoProperty) {
        this._brokerNodeGroupInfo.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerNodeGroupInfoInput() {
        return this._brokerNodeGroupInfo.internalValue;
    }

    // client_authentication - computed: true, optional: true, required: false
    private _clientAuthentication = new CcCluster.ClientAuthenticationPropertyOutputReference(this, "client_authentication");
    public get clientAuthentication() {
        return this._clientAuthentication;
    }
    public putClientAuthentication(value: CcCluster.ClientAuthenticationProperty) {
        this._clientAuthentication.internalValue = value;
    }
    public resetClientAuthentication() {
        this._clientAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
        return this._clientAuthentication.internalValue;
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // configuration_info - computed: true, optional: true, required: false
    private _configurationInfo = new CcCluster.ConfigurationInfoPropertyOutputReference(this, "configuration_info");
    public get configurationInfo() {
        return this._configurationInfo;
    }
    public putConfigurationInfo(value: CcCluster.ConfigurationInfoProperty) {
        this._configurationInfo.internalValue = value;
    }
    public resetConfigurationInfo() {
        this._configurationInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInfoInput() {
        return this._configurationInfo.internalValue;
    }

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
        return this.getStringAttribute('current_version');
    }

    // encryption_info - computed: true, optional: true, required: false
    private _encryptionInfo = new CcCluster.EncryptionInfoPropertyOutputReference(this, "encryption_info");
    public get encryptionInfo() {
        return this._encryptionInfo;
    }
    public putEncryptionInfo(value: CcCluster.EncryptionInfoProperty) {
        this._encryptionInfo.internalValue = value;
    }
    public resetEncryptionInfo() {
        this._encryptionInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInfoInput() {
        return this._encryptionInfo.internalValue;
    }

    // enhanced_monitoring - computed: true, optional: true, required: false
    private _enhancedMonitoring?: string; 
    public get enhancedMonitoring() {
        return this.getStringAttribute('enhanced_monitoring');
    }
    public set enhancedMonitoring(value: string) {
        this._enhancedMonitoring = value;
    }
    public resetEnhancedMonitoring() {
        this._enhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedMonitoringInput() {
        return this._enhancedMonitoring;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kafka_version - computed: false, optional: false, required: true
    private _kafkaVersion?: string; 
    public get kafkaVersion() {
        return this.getStringAttribute('kafka_version');
    }
    public set kafkaVersion(value: string) {
        this._kafkaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaVersionInput() {
        return this._kafkaVersion;
    }

    // logging_info - computed: true, optional: true, required: false
    private _loggingInfo = new CcCluster.LoggingInfoPropertyOutputReference(this, "logging_info");
    public get loggingInfo() {
        return this._loggingInfo;
    }
    public putLoggingInfo(value: CcCluster.LoggingInfoProperty) {
        this._loggingInfo.internalValue = value;
    }
    public resetLoggingInfo() {
        this._loggingInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInfoInput() {
        return this._loggingInfo.internalValue;
    }

    // number_of_broker_nodes - computed: false, optional: false, required: true
    private _numberOfBrokerNodes?: number; 
    public get numberOfBrokerNodes() {
        return this.getNumberAttribute('number_of_broker_nodes');
    }
    public set numberOfBrokerNodes(value: number) {
        this._numberOfBrokerNodes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBrokerNodesInput() {
        return this._numberOfBrokerNodes;
    }

    // open_monitoring - computed: true, optional: true, required: false
    private _openMonitoring = new CcCluster.OpenMonitoringPropertyOutputReference(this, "open_monitoring");
    public get openMonitoring() {
        return this._openMonitoring;
    }
    public putOpenMonitoring(value: CcCluster.OpenMonitoringProperty) {
        this._openMonitoring.internalValue = value;
    }
    public resetOpenMonitoring() {
        this._openMonitoring.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openMonitoringInput() {
        return this._openMonitoring.internalValue;
    }

    // rebalancing - computed: true, optional: true, required: false
    private _rebalancing = new CcCluster.RebalancingPropertyOutputReference(this, "rebalancing");
    public get rebalancing() {
        return this._rebalancing;
    }
    public putRebalancing(value: CcCluster.RebalancingProperty) {
        this._rebalancing.internalValue = value;
    }
    public resetRebalancing() {
        this._rebalancing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rebalancingInput() {
        return this._rebalancing.internalValue;
    }

    // storage_mode - computed: true, optional: true, required: false
    private _storageMode?: string; 
    public get storageMode() {
        return this.getStringAttribute('storage_mode');
    }
    public set storageMode(value: string) {
        this._storageMode = value;
    }
    public resetStorageMode() {
        this._storageMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageModeInput() {
        return this._storageMode;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // zookeeper_access - computed: true, optional: true, required: false
    private _zookeeperAccess = new CcCluster.ZookeeperAccessPropertyOutputReference(this, "zookeeper_access");
    public get zookeeperAccess() {
        return this._zookeeperAccess;
    }
    public putZookeeperAccess(value: CcCluster.ZookeeperAccessProperty) {
        this._zookeeperAccess.internalValue = value;
    }
    public resetZookeeperAccess() {
        this._zookeeperAccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zookeeperAccessInput() {
        return this._zookeeperAccess.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            broker_node_group_info: ccClusterBrokerNodeGroupInfoPropertyToTerraform(this._brokerNodeGroupInfo.internalValue),
            client_authentication: ccClusterClientAuthenticationPropertyToTerraform(this._clientAuthentication.internalValue),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            configuration_info: ccClusterConfigurationInfoPropertyToTerraform(this._configurationInfo.internalValue),
            encryption_info: ccClusterEncryptionInfoPropertyToTerraform(this._encryptionInfo.internalValue),
            enhanced_monitoring: cdktn.stringToTerraform(this._enhancedMonitoring),
            kafka_version: cdktn.stringToTerraform(this._kafkaVersion),
            logging_info: ccClusterLoggingInfoPropertyToTerraform(this._loggingInfo.internalValue),
            number_of_broker_nodes: cdktn.numberToTerraform(this._numberOfBrokerNodes),
            open_monitoring: ccClusterOpenMonitoringPropertyToTerraform(this._openMonitoring.internalValue),
            rebalancing: ccClusterRebalancingPropertyToTerraform(this._rebalancing.internalValue),
            storage_mode: cdktn.stringToTerraform(this._storageMode),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            zookeeper_access: ccClusterZookeeperAccessPropertyToTerraform(this._zookeeperAccess.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            broker_node_group_info: {
                value: ccClusterBrokerNodeGroupInfoPropertyToHclTerraform(this._brokerNodeGroupInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.BrokerNodeGroupInfoProperty",
            },
            client_authentication: {
                value: ccClusterClientAuthenticationPropertyToHclTerraform(this._clientAuthentication.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ClientAuthenticationProperty",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_info: {
                value: ccClusterConfigurationInfoPropertyToHclTerraform(this._configurationInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ConfigurationInfoProperty",
            },
            encryption_info: {
                value: ccClusterEncryptionInfoPropertyToHclTerraform(this._encryptionInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.EncryptionInfoProperty",
            },
            enhanced_monitoring: {
                value: cdktn.stringToHclTerraform(this._enhancedMonitoring),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kafka_version: {
                value: cdktn.stringToHclTerraform(this._kafkaVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_info: {
                value: ccClusterLoggingInfoPropertyToHclTerraform(this._loggingInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.LoggingInfoProperty",
            },
            number_of_broker_nodes: {
                value: cdktn.numberToHclTerraform(this._numberOfBrokerNodes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            open_monitoring: {
                value: ccClusterOpenMonitoringPropertyToHclTerraform(this._openMonitoring.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.OpenMonitoringProperty",
            },
            rebalancing: {
                value: ccClusterRebalancingPropertyToHclTerraform(this._rebalancing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.RebalancingProperty",
            },
            storage_mode: {
                value: cdktn.stringToHclTerraform(this._storageMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            zookeeper_access: {
                value: ccClusterZookeeperAccessPropertyToHclTerraform(this._zookeeperAccess.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ZookeeperAccessProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterPublicAccessPropertyToTerraform(struct?: CcCluster.PublicAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccClusterPublicAccessPropertyToHclTerraform(struct?: CcCluster.PublicAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccClusterVpcConnectivityIamPropertyToTerraform(struct?: CcCluster.VpcConnectivityIamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterVpcConnectivityIamPropertyToHclTerraform(struct?: CcCluster.VpcConnectivityIamProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConnectivityScramPropertyToTerraform(struct?: CcCluster.VpcConnectivityScramProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterVpcConnectivityScramPropertyToHclTerraform(struct?: CcCluster.VpcConnectivityScramProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConnectivitySaslPropertyToTerraform(struct?: CcCluster.VpcConnectivitySaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam: ccClusterVpcConnectivityIamPropertyToTerraform(struct!.iam),
        scram: ccClusterVpcConnectivityScramPropertyToTerraform(struct!.scram),
    }
}


export function ccClusterVpcConnectivitySaslPropertyToHclTerraform(struct?: CcCluster.VpcConnectivitySaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam: {
            value: ccClusterVpcConnectivityIamPropertyToHclTerraform(struct!.iam),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivityIamProperty",
        },
        scram: {
            value: ccClusterVpcConnectivityScramPropertyToHclTerraform(struct!.scram),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivityScramProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConnectivityTlsPropertyToTerraform(struct?: CcCluster.VpcConnectivityTlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterVpcConnectivityTlsPropertyToHclTerraform(struct?: CcCluster.VpcConnectivityTlsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConnectivityClientAuthenticationPropertyToTerraform(struct?: CcCluster.VpcConnectivityClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sasl: ccClusterVpcConnectivitySaslPropertyToTerraform(struct!.sasl),
        tls: ccClusterVpcConnectivityTlsPropertyToTerraform(struct!.tls),
    }
}


export function ccClusterVpcConnectivityClientAuthenticationPropertyToHclTerraform(struct?: CcCluster.VpcConnectivityClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sasl: {
            value: ccClusterVpcConnectivitySaslPropertyToHclTerraform(struct!.sasl),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivitySaslProperty",
        },
        tls: {
            value: ccClusterVpcConnectivityTlsPropertyToHclTerraform(struct!.tls),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivityTlsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConnectivityPropertyToTerraform(struct?: CcCluster.VpcConnectivityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_authentication: ccClusterVpcConnectivityClientAuthenticationPropertyToTerraform(struct!.clientAuthentication),
    }
}


export function ccClusterVpcConnectivityPropertyToHclTerraform(struct?: CcCluster.VpcConnectivityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_authentication: {
            value: ccClusterVpcConnectivityClientAuthenticationPropertyToHclTerraform(struct!.clientAuthentication),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivityClientAuthenticationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterConnectivityInfoPropertyToTerraform(struct?: CcCluster.ConnectivityInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_type: cdktn.stringToTerraform(struct!.networkType),
        public_access: ccClusterPublicAccessPropertyToTerraform(struct!.publicAccess),
        vpc_connectivity: ccClusterVpcConnectivityPropertyToTerraform(struct!.vpcConnectivity),
    }
}


export function ccClusterConnectivityInfoPropertyToHclTerraform(struct?: CcCluster.ConnectivityInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_type: {
            value: cdktn.stringToHclTerraform(struct!.networkType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        public_access: {
            value: ccClusterPublicAccessPropertyToHclTerraform(struct!.publicAccess),
            isBlock: true,
            type: "struct",
            storageClassType: "PublicAccessProperty",
        },
        vpc_connectivity: {
            value: ccClusterVpcConnectivityPropertyToHclTerraform(struct!.vpcConnectivity),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConnectivityProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterProvisionedThroughputPropertyToTerraform(struct?: CcCluster.ProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        volume_throughput: cdktn.numberToTerraform(struct!.volumeThroughput),
    }
}


export function ccClusterProvisionedThroughputPropertyToHclTerraform(struct?: CcCluster.ProvisionedThroughputProperty | cdktn.IResolvable): any {
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
        volume_throughput: {
            value: cdktn.numberToHclTerraform(struct!.volumeThroughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEBSStorageInfoPropertyToTerraform(struct?: CcCluster.EBSStorageInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_throughput: ccClusterProvisionedThroughputPropertyToTerraform(struct!.provisionedThroughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    }
}


export function ccClusterEBSStorageInfoPropertyToHclTerraform(struct?: CcCluster.EBSStorageInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_throughput: {
            value: ccClusterProvisionedThroughputPropertyToHclTerraform(struct!.provisionedThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "ProvisionedThroughputProperty",
        },
        volume_size: {
            value: cdktn.numberToHclTerraform(struct!.volumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterStorageInfoPropertyToTerraform(struct?: CcCluster.StorageInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_storage_info: ccClusterEBSStorageInfoPropertyToTerraform(struct!.ebsStorageInfo),
    }
}


export function ccClusterStorageInfoPropertyToHclTerraform(struct?: CcCluster.StorageInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_storage_info: {
            value: ccClusterEBSStorageInfoPropertyToHclTerraform(struct!.ebsStorageInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "EBSStorageInfoProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterBrokerNodeGroupInfoPropertyToTerraform(struct?: CcCluster.BrokerNodeGroupInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        broker_az_distribution: cdktn.stringToTerraform(struct!.brokerAzDistribution),
        client_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientSubnets),
        connectivity_info: ccClusterConnectivityInfoPropertyToTerraform(struct!.connectivityInfo),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        storage_info: ccClusterStorageInfoPropertyToTerraform(struct!.storageInfo),
    }
}


export function ccClusterBrokerNodeGroupInfoPropertyToHclTerraform(struct?: CcCluster.BrokerNodeGroupInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        broker_az_distribution: {
            value: cdktn.stringToHclTerraform(struct!.brokerAzDistribution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientSubnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        connectivity_info: {
            value: ccClusterConnectivityInfoPropertyToHclTerraform(struct!.connectivityInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectivityInfoProperty",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        storage_info: {
            value: ccClusterStorageInfoPropertyToHclTerraform(struct!.storageInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageInfoProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterIamPropertyToTerraform(struct?: CcCluster.IamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterIamPropertyToHclTerraform(struct?: CcCluster.IamProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterScramPropertyToTerraform(struct?: CcCluster.ScramProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterScramPropertyToHclTerraform(struct?: CcCluster.ScramProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSaslPropertyToTerraform(struct?: CcCluster.SaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam: ccClusterIamPropertyToTerraform(struct!.iam),
        scram: ccClusterScramPropertyToTerraform(struct!.scram),
    }
}


export function ccClusterSaslPropertyToHclTerraform(struct?: CcCluster.SaslProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam: {
            value: ccClusterIamPropertyToHclTerraform(struct!.iam),
            isBlock: true,
            type: "struct",
            storageClassType: "IamProperty",
        },
        scram: {
            value: ccClusterScramPropertyToHclTerraform(struct!.scram),
            isBlock: true,
            type: "struct",
            storageClassType: "ScramProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterTlsPropertyToTerraform(struct?: CcCluster.TlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_authority_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArnList),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterTlsPropertyToHclTerraform(struct?: CcCluster.TlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_authority_arn_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityArnList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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


export function ccClusterUnauthenticatedPropertyToTerraform(struct?: CcCluster.UnauthenticatedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterUnauthenticatedPropertyToHclTerraform(struct?: CcCluster.UnauthenticatedProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClientAuthenticationPropertyToTerraform(struct?: CcCluster.ClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sasl: ccClusterSaslPropertyToTerraform(struct!.sasl),
        tls: ccClusterTlsPropertyToTerraform(struct!.tls),
        unauthenticated: ccClusterUnauthenticatedPropertyToTerraform(struct!.unauthenticated),
    }
}


export function ccClusterClientAuthenticationPropertyToHclTerraform(struct?: CcCluster.ClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sasl: {
            value: ccClusterSaslPropertyToHclTerraform(struct!.sasl),
            isBlock: true,
            type: "struct",
            storageClassType: "SaslProperty",
        },
        tls: {
            value: ccClusterTlsPropertyToHclTerraform(struct!.tls),
            isBlock: true,
            type: "struct",
            storageClassType: "TlsProperty",
        },
        unauthenticated: {
            value: ccClusterUnauthenticatedPropertyToHclTerraform(struct!.unauthenticated),
            isBlock: true,
            type: "struct",
            storageClassType: "UnauthenticatedProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterConfigurationInfoPropertyToTerraform(struct?: CcCluster.ConfigurationInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        revision: cdktn.numberToTerraform(struct!.revision),
    }
}


export function ccClusterConfigurationInfoPropertyToHclTerraform(struct?: CcCluster.ConfigurationInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
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


export function ccClusterEncryptionAtRestPropertyToTerraform(struct?: CcCluster.EncryptionAtRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_volume_kms_key_id: cdktn.stringToTerraform(struct!.dataVolumeKmsKeyId),
    }
}


export function ccClusterEncryptionAtRestPropertyToHclTerraform(struct?: CcCluster.EncryptionAtRestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.dataVolumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEncryptionInTransitPropertyToTerraform(struct?: CcCluster.EncryptionInTransitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_broker: cdktn.stringToTerraform(struct!.clientBroker),
        in_cluster: cdktn.booleanToTerraform(struct!.inCluster),
    }
}


export function ccClusterEncryptionInTransitPropertyToHclTerraform(struct?: CcCluster.EncryptionInTransitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_broker: {
            value: cdktn.stringToHclTerraform(struct!.clientBroker),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        in_cluster: {
            value: cdktn.booleanToHclTerraform(struct!.inCluster),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEncryptionInfoPropertyToTerraform(struct?: CcCluster.EncryptionInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_at_rest: ccClusterEncryptionAtRestPropertyToTerraform(struct!.encryptionAtRest),
        encryption_in_transit: ccClusterEncryptionInTransitPropertyToTerraform(struct!.encryptionInTransit),
    }
}


export function ccClusterEncryptionInfoPropertyToHclTerraform(struct?: CcCluster.EncryptionInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_at_rest: {
            value: ccClusterEncryptionAtRestPropertyToHclTerraform(struct!.encryptionAtRest),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionAtRestProperty",
        },
        encryption_in_transit: {
            value: ccClusterEncryptionInTransitPropertyToHclTerraform(struct!.encryptionInTransit),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionInTransitProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterCloudWatchLogsPropertyToTerraform(struct?: CcCluster.CloudWatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccClusterCloudWatchLogsPropertyToHclTerraform(struct?: CcCluster.CloudWatchLogsProperty | cdktn.IResolvable): any {
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


export function ccClusterFirehosePropertyToTerraform(struct?: CcCluster.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterFirehosePropertyToHclTerraform(struct?: CcCluster.FirehoseProperty | cdktn.IResolvable): any {
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


export function ccClusterS3PropertyToTerraform(struct?: CcCluster.S3Property | cdktn.IResolvable): any {
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


export function ccClusterS3PropertyToHclTerraform(struct?: CcCluster.S3Property | cdktn.IResolvable): any {
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


export function ccClusterAuthorizerLogsPropertyToTerraform(struct?: CcCluster.AuthorizerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccClusterCloudWatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
        firehose: ccClusterFirehosePropertyToTerraform(struct!.firehose),
        s3: ccClusterS3PropertyToTerraform(struct!.s3),
    }
}


export function ccClusterAuthorizerLogsPropertyToHclTerraform(struct?: CcCluster.AuthorizerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccClusterCloudWatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsProperty",
        },
        firehose: {
            value: ccClusterFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseProperty",
        },
        s3: {
            value: ccClusterS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterLoggingInfoBrokerLogsCloudwatchLogsPropertyToTerraform(struct?: CcCluster.LoggingInfoBrokerLogsCloudwatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccClusterLoggingInfoBrokerLogsCloudwatchLogsPropertyToHclTerraform(struct?: CcCluster.LoggingInfoBrokerLogsCloudwatchLogsProperty | cdktn.IResolvable): any {
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


export function ccClusterLoggingInfoBrokerLogsFirehosePropertyToTerraform(struct?: CcCluster.LoggingInfoBrokerLogsFirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterLoggingInfoBrokerLogsFirehosePropertyToHclTerraform(struct?: CcCluster.LoggingInfoBrokerLogsFirehoseProperty | cdktn.IResolvable): any {
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


export function ccClusterLoggingInfoBrokerLogsS3PropertyToTerraform(struct?: CcCluster.LoggingInfoBrokerLogsS3Property | cdktn.IResolvable): any {
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


export function ccClusterLoggingInfoBrokerLogsS3PropertyToHclTerraform(struct?: CcCluster.LoggingInfoBrokerLogsS3Property | cdktn.IResolvable): any {
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


export function ccClusterBrokerLogsPropertyToTerraform(struct?: CcCluster.BrokerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccClusterLoggingInfoBrokerLogsCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
        firehose: ccClusterLoggingInfoBrokerLogsFirehosePropertyToTerraform(struct!.firehose),
        s3: ccClusterLoggingInfoBrokerLogsS3PropertyToTerraform(struct!.s3),
    }
}


export function ccClusterBrokerLogsPropertyToHclTerraform(struct?: CcCluster.BrokerLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccClusterLoggingInfoBrokerLogsCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingInfoBrokerLogsCloudwatchLogsProperty",
        },
        firehose: {
            value: ccClusterLoggingInfoBrokerLogsFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingInfoBrokerLogsFirehoseProperty",
        },
        s3: {
            value: ccClusterLoggingInfoBrokerLogsS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingInfoBrokerLogsS3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterLoggingInfoPropertyToTerraform(struct?: CcCluster.LoggingInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizer_logs: ccClusterAuthorizerLogsPropertyToTerraform(struct!.authorizerLogs),
        broker_logs: ccClusterBrokerLogsPropertyToTerraform(struct!.brokerLogs),
    }
}


export function ccClusterLoggingInfoPropertyToHclTerraform(struct?: CcCluster.LoggingInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizer_logs: {
            value: ccClusterAuthorizerLogsPropertyToHclTerraform(struct!.authorizerLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizerLogsProperty",
        },
        broker_logs: {
            value: ccClusterBrokerLogsPropertyToHclTerraform(struct!.brokerLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "BrokerLogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterJmxExporterPropertyToTerraform(struct?: CcCluster.JmxExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
    }
}


export function ccClusterJmxExporterPropertyToHclTerraform(struct?: CcCluster.JmxExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_in_broker: {
            value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterNodeExporterPropertyToTerraform(struct?: CcCluster.NodeExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
    }
}


export function ccClusterNodeExporterPropertyToHclTerraform(struct?: CcCluster.NodeExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_in_broker: {
            value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterPrometheusPropertyToTerraform(struct?: CcCluster.PrometheusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        jmx_exporter: ccClusterJmxExporterPropertyToTerraform(struct!.jmxExporter),
        node_exporter: ccClusterNodeExporterPropertyToTerraform(struct!.nodeExporter),
    }
}


export function ccClusterPrometheusPropertyToHclTerraform(struct?: CcCluster.PrometheusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        jmx_exporter: {
            value: ccClusterJmxExporterPropertyToHclTerraform(struct!.jmxExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "JmxExporterProperty",
        },
        node_exporter: {
            value: ccClusterNodeExporterPropertyToHclTerraform(struct!.nodeExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "NodeExporterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterOpenMonitoringPropertyToTerraform(struct?: CcCluster.OpenMonitoringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prometheus: ccClusterPrometheusPropertyToTerraform(struct!.prometheus),
    }
}


export function ccClusterOpenMonitoringPropertyToHclTerraform(struct?: CcCluster.OpenMonitoringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prometheus: {
            value: ccClusterPrometheusPropertyToHclTerraform(struct!.prometheus),
            isBlock: true,
            type: "struct",
            storageClassType: "PrometheusProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRebalancingPropertyToTerraform(struct?: CcCluster.RebalancingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccClusterRebalancingPropertyToHclTerraform(struct?: CcCluster.RebalancingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterZookeeperAccessPropertyToTerraform(struct?: CcCluster.ZookeeperAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterZookeeperAccessPropertyToHclTerraform(struct?: CcCluster.ZookeeperAccessProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCluster {
export interface PublicAccessProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#type CcCluster#type}
    */
    readonly type?: string;
}
export class PublicAccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicAccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicAccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
        }
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
export interface VpcConnectivityIamProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class VpcConnectivityIamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivityIamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivityIamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface VpcConnectivityScramProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class VpcConnectivityScramPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivityScramProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivityScramProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface VpcConnectivitySaslProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#iam CcCluster#iam}
    */
    readonly iam?: VpcConnectivityIamProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#scram CcCluster#scram}
    */
    readonly scram?: VpcConnectivityScramProperty;
}
export class VpcConnectivitySaslPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivitySaslProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iam?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam?.internalValue;
        }
        if (this._scram?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scram = this._scram?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivitySaslProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iam.internalValue = undefined;
            this._scram.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iam.internalValue = value.iam;
            this._scram.internalValue = value.scram;
        }
    }

    // iam - computed: true, optional: true, required: false
    private _iam = new VpcConnectivityIamPropertyOutputReference(this, "iam");
    public get iam() {
        return this._iam;
    }
    public putIam(value: VpcConnectivityIamProperty) {
        this._iam.internalValue = value;
    }
    public resetIam() {
        this._iam.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
        return this._iam.internalValue;
    }

    // scram - computed: true, optional: true, required: false
    private _scram = new VpcConnectivityScramPropertyOutputReference(this, "scram");
    public get scram() {
        return this._scram;
    }
    public putScram(value: VpcConnectivityScramProperty) {
        this._scram.internalValue = value;
    }
    public resetScram() {
        this._scram.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scramInput() {
        return this._scram.internalValue;
    }
}
export interface VpcConnectivityTlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class VpcConnectivityTlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivityTlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivityTlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface VpcConnectivityClientAuthenticationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#sasl CcCluster#sasl}
    */
    readonly sasl?: VpcConnectivitySaslProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#tls CcCluster#tls}
    */
    readonly tls?: VpcConnectivityTlsProperty;
}
export class VpcConnectivityClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivityClientAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sasl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sasl = this._sasl?.internalValue;
        }
        if (this._tls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivityClientAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sasl.internalValue = undefined;
            this._tls.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sasl.internalValue = value.sasl;
            this._tls.internalValue = value.tls;
        }
    }

    // sasl - computed: true, optional: true, required: false
    private _sasl = new VpcConnectivitySaslPropertyOutputReference(this, "sasl");
    public get sasl() {
        return this._sasl;
    }
    public putSasl(value: VpcConnectivitySaslProperty) {
        this._sasl.internalValue = value;
    }
    public resetSasl() {
        this._sasl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslInput() {
        return this._sasl.internalValue;
    }

    // tls - computed: true, optional: true, required: false
    private _tls = new VpcConnectivityTlsPropertyOutputReference(this, "tls");
    public get tls() {
        return this._tls;
    }
    public putTls(value: VpcConnectivityTlsProperty) {
        this._tls.internalValue = value;
    }
    public resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
        return this._tls.internalValue;
    }
}
export interface VpcConnectivityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#client_authentication CcCluster#client_authentication}
    */
    readonly clientAuthentication?: VpcConnectivityClientAuthenticationProperty;
}
export class VpcConnectivityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConnectivityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientAuthentication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConnectivityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientAuthentication.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientAuthentication.internalValue = value.clientAuthentication;
        }
    }

    // client_authentication - computed: true, optional: true, required: false
    private _clientAuthentication = new VpcConnectivityClientAuthenticationPropertyOutputReference(this, "client_authentication");
    public get clientAuthentication() {
        return this._clientAuthentication;
    }
    public putClientAuthentication(value: VpcConnectivityClientAuthenticationProperty) {
        this._clientAuthentication.internalValue = value;
    }
    public resetClientAuthentication() {
        this._clientAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
        return this._clientAuthentication.internalValue;
    }
}
export interface ConnectivityInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#network_type CcCluster#network_type}
    */
    readonly networkType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#public_access CcCluster#public_access}
    */
    readonly publicAccess?: PublicAccessProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#vpc_connectivity CcCluster#vpc_connectivity}
    */
    readonly vpcConnectivity?: VpcConnectivityProperty;
}
export class ConnectivityInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectivityInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkType !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkType = this._networkType;
        }
        if (this._publicAccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicAccess = this._publicAccess?.internalValue;
        }
        if (this._vpcConnectivity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectivity = this._vpcConnectivity?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectivityInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkType = undefined;
            this._publicAccess.internalValue = undefined;
            this._vpcConnectivity.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkType = value.networkType;
            this._publicAccess.internalValue = value.publicAccess;
            this._vpcConnectivity.internalValue = value.vpcConnectivity;
        }
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

    // public_access - computed: true, optional: true, required: false
    private _publicAccess = new PublicAccessPropertyOutputReference(this, "public_access");
    public get publicAccess() {
        return this._publicAccess;
    }
    public putPublicAccess(value: PublicAccessProperty) {
        this._publicAccess.internalValue = value;
    }
    public resetPublicAccess() {
        this._publicAccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessInput() {
        return this._publicAccess.internalValue;
    }

    // vpc_connectivity - computed: true, optional: true, required: false
    private _vpcConnectivity = new VpcConnectivityPropertyOutputReference(this, "vpc_connectivity");
    public get vpcConnectivity() {
        return this._vpcConnectivity;
    }
    public putVpcConnectivity(value: VpcConnectivityProperty) {
        this._vpcConnectivity.internalValue = value;
    }
    public resetVpcConnectivity() {
        this._vpcConnectivity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectivityInput() {
        return this._vpcConnectivity.internalValue;
    }
}
export interface ProvisionedThroughputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#volume_throughput CcCluster#volume_throughput}
    */
    readonly volumeThroughput?: number;
}
export class ProvisionedThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._volumeThroughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeThroughput = this._volumeThroughput;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._volumeThroughput = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._volumeThroughput = value.volumeThroughput;
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

    // volume_throughput - computed: true, optional: true, required: false
    private _volumeThroughput?: number; 
    public get volumeThroughput() {
        return this.getNumberAttribute('volume_throughput');
    }
    public set volumeThroughput(value: number) {
        this._volumeThroughput = value;
    }
    public resetVolumeThroughput() {
        this._volumeThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeThroughputInput() {
        return this._volumeThroughput;
    }
}
export interface EBSStorageInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#provisioned_throughput CcCluster#provisioned_throughput}
    */
    readonly provisionedThroughput?: ProvisionedThroughputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#volume_size CcCluster#volume_size}
    */
    readonly volumeSize?: number;
}
export class EBSStorageInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EBSStorageInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
        }
        if (this._volumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EBSStorageInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedThroughput.internalValue = undefined;
            this._volumeSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedThroughput.internalValue = value.provisionedThroughput;
            this._volumeSize = value.volumeSize;
        }
    }

    // provisioned_throughput - computed: true, optional: true, required: false
    private _provisionedThroughput = new ProvisionedThroughputPropertyOutputReference(this, "provisioned_throughput");
    public get provisionedThroughput() {
        return this._provisionedThroughput;
    }
    public putProvisionedThroughput(value: ProvisionedThroughputProperty) {
        this._provisionedThroughput.internalValue = value;
    }
    public resetProvisionedThroughput() {
        this._provisionedThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInput() {
        return this._provisionedThroughput.internalValue;
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number; 
    public get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number) {
        this._volumeSize = value;
    }
    public resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
        return this._volumeSize;
    }
}
export interface StorageInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#ebs_storage_info CcCluster#ebs_storage_info}
    */
    readonly ebsStorageInfo?: EBSStorageInfoProperty;
}
export class StorageInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsStorageInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsStorageInfo = this._ebsStorageInfo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsStorageInfo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsStorageInfo.internalValue = value.ebsStorageInfo;
        }
    }

    // ebs_storage_info - computed: true, optional: true, required: false
    private _ebsStorageInfo = new EBSStorageInfoPropertyOutputReference(this, "ebs_storage_info");
    public get ebsStorageInfo() {
        return this._ebsStorageInfo;
    }
    public putEbsStorageInfo(value: EBSStorageInfoProperty) {
        this._ebsStorageInfo.internalValue = value;
    }
    public resetEbsStorageInfo() {
        this._ebsStorageInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsStorageInfoInput() {
        return this._ebsStorageInfo.internalValue;
    }
}
export interface BrokerNodeGroupInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#broker_az_distribution CcCluster#broker_az_distribution}
    */
    readonly brokerAzDistribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#client_subnets CcCluster#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#connectivity_info CcCluster#connectivity_info}
    */
    readonly connectivityInfo?: ConnectivityInfoProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#instance_type CcCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#security_groups CcCluster#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#storage_info CcCluster#storage_info}
    */
    readonly storageInfo?: StorageInfoProperty;
}
export class BrokerNodeGroupInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrokerNodeGroupInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._brokerAzDistribution !== undefined) {
            hasAnyValues = true;
            internalValueResult.brokerAzDistribution = this._brokerAzDistribution;
        }
        if (this._clientSubnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSubnets = this._clientSubnets;
        }
        if (this._connectivityInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectivityInfo = this._connectivityInfo?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._storageInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageInfo = this._storageInfo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrokerNodeGroupInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._brokerAzDistribution = undefined;
            this._clientSubnets = undefined;
            this._connectivityInfo.internalValue = undefined;
            this._instanceType = undefined;
            this._securityGroups = undefined;
            this._storageInfo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._brokerAzDistribution = value.brokerAzDistribution;
            this._clientSubnets = value.clientSubnets;
            this._connectivityInfo.internalValue = value.connectivityInfo;
            this._instanceType = value.instanceType;
            this._securityGroups = value.securityGroups;
            this._storageInfo.internalValue = value.storageInfo;
        }
    }

    // broker_az_distribution - computed: true, optional: true, required: false
    private _brokerAzDistribution?: string; 
    public get brokerAzDistribution() {
        return this.getStringAttribute('broker_az_distribution');
    }
    public set brokerAzDistribution(value: string) {
        this._brokerAzDistribution = value;
    }
    public resetBrokerAzDistribution() {
        this._brokerAzDistribution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerAzDistributionInput() {
        return this._brokerAzDistribution;
    }

    // client_subnets - computed: false, optional: false, required: true
    private _clientSubnets?: string[]; 
    public get clientSubnets() {
        return this.getListAttribute('client_subnets');
    }
    public set clientSubnets(value: string[]) {
        this._clientSubnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSubnetsInput() {
        return this._clientSubnets;
    }

    // connectivity_info - computed: true, optional: true, required: false
    private _connectivityInfo = new ConnectivityInfoPropertyOutputReference(this, "connectivity_info");
    public get connectivityInfo() {
        return this._connectivityInfo;
    }
    public putConnectivityInfo(value: ConnectivityInfoProperty) {
        this._connectivityInfo.internalValue = value;
    }
    public resetConnectivityInfo() {
        this._connectivityInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectivityInfoInput() {
        return this._connectivityInfo.internalValue;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // storage_info - computed: true, optional: true, required: false
    private _storageInfo = new StorageInfoPropertyOutputReference(this, "storage_info");
    public get storageInfo() {
        return this._storageInfo;
    }
    public putStorageInfo(value: StorageInfoProperty) {
        this._storageInfo.internalValue = value;
    }
    public resetStorageInfo() {
        this._storageInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageInfoInput() {
        return this._storageInfo.internalValue;
    }
}
export interface IamProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class IamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface ScramProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ScramPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScramProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScramProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface SaslProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#iam CcCluster#iam}
    */
    readonly iam?: IamProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#scram CcCluster#scram}
    */
    readonly scram?: ScramProperty;
}
export class SaslPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SaslProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iam?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam?.internalValue;
        }
        if (this._scram?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scram = this._scram?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SaslProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iam.internalValue = undefined;
            this._scram.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iam.internalValue = value.iam;
            this._scram.internalValue = value.scram;
        }
    }

    // iam - computed: true, optional: true, required: false
    private _iam = new IamPropertyOutputReference(this, "iam");
    public get iam() {
        return this._iam;
    }
    public putIam(value: IamProperty) {
        this._iam.internalValue = value;
    }
    public resetIam() {
        this._iam.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
        return this._iam.internalValue;
    }

    // scram - computed: true, optional: true, required: false
    private _scram = new ScramPropertyOutputReference(this, "scram");
    public get scram() {
        return this._scram;
    }
    public putScram(value: ScramProperty) {
        this._scram.internalValue = value;
    }
    public resetScram() {
        this._scram.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scramInput() {
        return this._scram.internalValue;
    }
}
export interface TlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#certificate_authority_arn_list CcCluster#certificate_authority_arn_list}
    */
    readonly certificateAuthorityArnList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class TlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateAuthorityArnList !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArnList = this._certificateAuthorityArnList;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthorityArnList = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthorityArnList = value.certificateAuthorityArnList;
            this._enabled = value.enabled;
        }
    }

    // certificate_authority_arn_list - computed: true, optional: true, required: false
    private _certificateAuthorityArnList?: string[]; 
    public get certificateAuthorityArnList() {
        return this.getListAttribute('certificate_authority_arn_list');
    }
    public set certificateAuthorityArnList(value: string[]) {
        this._certificateAuthorityArnList = value;
    }
    public resetCertificateAuthorityArnList() {
        this._certificateAuthorityArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnListInput() {
        return this._certificateAuthorityArnList;
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
export interface UnauthenticatedProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class UnauthenticatedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnauthenticatedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnauthenticatedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface ClientAuthenticationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#sasl CcCluster#sasl}
    */
    readonly sasl?: SaslProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#tls CcCluster#tls}
    */
    readonly tls?: TlsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#unauthenticated CcCluster#unauthenticated}
    */
    readonly unauthenticated?: UnauthenticatedProperty;
}
export class ClientAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sasl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sasl = this._sasl?.internalValue;
        }
        if (this._tls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tls = this._tls?.internalValue;
        }
        if (this._unauthenticated?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unauthenticated = this._unauthenticated?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sasl.internalValue = undefined;
            this._tls.internalValue = undefined;
            this._unauthenticated.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sasl.internalValue = value.sasl;
            this._tls.internalValue = value.tls;
            this._unauthenticated.internalValue = value.unauthenticated;
        }
    }

    // sasl - computed: true, optional: true, required: false
    private _sasl = new SaslPropertyOutputReference(this, "sasl");
    public get sasl() {
        return this._sasl;
    }
    public putSasl(value: SaslProperty) {
        this._sasl.internalValue = value;
    }
    public resetSasl() {
        this._sasl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslInput() {
        return this._sasl.internalValue;
    }

    // tls - computed: true, optional: true, required: false
    private _tls = new TlsPropertyOutputReference(this, "tls");
    public get tls() {
        return this._tls;
    }
    public putTls(value: TlsProperty) {
        this._tls.internalValue = value;
    }
    public resetTls() {
        this._tls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
        return this._tls.internalValue;
    }

    // unauthenticated - computed: true, optional: true, required: false
    private _unauthenticated = new UnauthenticatedPropertyOutputReference(this, "unauthenticated");
    public get unauthenticated() {
        return this._unauthenticated;
    }
    public putUnauthenticated(value: UnauthenticatedProperty) {
        this._unauthenticated.internalValue = value;
    }
    public resetUnauthenticated() {
        this._unauthenticated.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unauthenticatedInput() {
        return this._unauthenticated.internalValue;
    }
}
export interface ConfigurationInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#arn CcCluster#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#revision CcCluster#revision}
    */
    readonly revision?: number;
}
export class ConfigurationInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._revision !== undefined) {
            hasAnyValues = true;
            internalValueResult.revision = this._revision;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._revision = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._revision = value.revision;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
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
}
export interface EncryptionAtRestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#data_volume_kms_key_id CcCluster#data_volume_kms_key_id}
    */
    readonly dataVolumeKmsKeyId?: string;
}
export class EncryptionAtRestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionAtRestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataVolumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataVolumeKmsKeyId = this._dataVolumeKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionAtRestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataVolumeKmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataVolumeKmsKeyId = value.dataVolumeKmsKeyId;
        }
    }

    // data_volume_kms_key_id - computed: true, optional: true, required: false
    private _dataVolumeKmsKeyId?: string; 
    public get dataVolumeKmsKeyId() {
        return this.getStringAttribute('data_volume_kms_key_id');
    }
    public set dataVolumeKmsKeyId(value: string) {
        this._dataVolumeKmsKeyId = value;
    }
    public resetDataVolumeKmsKeyId() {
        this._dataVolumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataVolumeKmsKeyIdInput() {
        return this._dataVolumeKmsKeyId;
    }
}
export interface EncryptionInTransitProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#client_broker CcCluster#client_broker}
    */
    readonly clientBroker?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#in_cluster CcCluster#in_cluster}
    */
    readonly inCluster?: boolean | cdktn.IResolvable;
}
export class EncryptionInTransitPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionInTransitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientBroker !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientBroker = this._clientBroker;
        }
        if (this._inCluster !== undefined) {
            hasAnyValues = true;
            internalValueResult.inCluster = this._inCluster;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionInTransitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientBroker = undefined;
            this._inCluster = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientBroker = value.clientBroker;
            this._inCluster = value.inCluster;
        }
    }

    // client_broker - computed: true, optional: true, required: false
    private _clientBroker?: string; 
    public get clientBroker() {
        return this.getStringAttribute('client_broker');
    }
    public set clientBroker(value: string) {
        this._clientBroker = value;
    }
    public resetClientBroker() {
        this._clientBroker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientBrokerInput() {
        return this._clientBroker;
    }

    // in_cluster - computed: true, optional: true, required: false
    private _inCluster?: boolean | cdktn.IResolvable; 
    public get inCluster() {
        return this.getBooleanAttribute('in_cluster');
    }
    public set inCluster(value: boolean | cdktn.IResolvable) {
        this._inCluster = value;
    }
    public resetInCluster() {
        this._inCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inClusterInput() {
        return this._inCluster;
    }
}
export interface EncryptionInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#encryption_at_rest CcCluster#encryption_at_rest}
    */
    readonly encryptionAtRest?: EncryptionAtRestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#encryption_in_transit CcCluster#encryption_in_transit}
    */
    readonly encryptionInTransit?: EncryptionInTransitProperty;
}
export class EncryptionInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionAtRest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
        }
        if (this._encryptionInTransit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionAtRest.internalValue = undefined;
            this._encryptionInTransit.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionAtRest.internalValue = value.encryptionAtRest;
            this._encryptionInTransit.internalValue = value.encryptionInTransit;
        }
    }

    // encryption_at_rest - computed: true, optional: true, required: false
    private _encryptionAtRest = new EncryptionAtRestPropertyOutputReference(this, "encryption_at_rest");
    public get encryptionAtRest() {
        return this._encryptionAtRest;
    }
    public putEncryptionAtRest(value: EncryptionAtRestProperty) {
        this._encryptionAtRest.internalValue = value;
    }
    public resetEncryptionAtRest() {
        this._encryptionAtRest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestInput() {
        return this._encryptionAtRest.internalValue;
    }

    // encryption_in_transit - computed: true, optional: true, required: false
    private _encryptionInTransit = new EncryptionInTransitPropertyOutputReference(this, "encryption_in_transit");
    public get encryptionInTransit() {
        return this._encryptionInTransit;
    }
    public putEncryptionInTransit(value: EncryptionInTransitProperty) {
        this._encryptionInTransit.internalValue = value;
    }
    public resetEncryptionInTransit() {
        this._encryptionInTransit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInTransitInput() {
        return this._encryptionInTransit.internalValue;
    }
}
export interface CloudWatchLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#log_group CcCluster#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CloudWatchLogsProperty | cdktn.IResolvable | undefined) {
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
export interface FirehoseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#delivery_stream CcCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FirehoseProperty | cdktn.IResolvable | undefined) {
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
export interface S3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#bucket CcCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#prefix CcCluster#prefix}
    */
    readonly prefix?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
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

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
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
export interface AuthorizerLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#cloudwatch_logs CcCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#firehose CcCluster#firehose}
    */
    readonly firehose?: FirehoseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#s3 CcCluster#s3}
    */
    readonly s3?: S3Property;
}
export class AuthorizerLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizerLogsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AuthorizerLogsProperty | cdktn.IResolvable | undefined) {
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
    private _cloudwatchLogs = new CloudWatchLogsPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogsProperty) {
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
    private _firehose = new FirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseProperty) {
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
    private _s3 = new S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3Property) {
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
export interface LoggingInfoBrokerLogsCloudwatchLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#log_group CcCluster#log_group}
    */
    readonly logGroup?: string;
}
export class LoggingInfoBrokerLogsCloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingInfoBrokerLogsCloudwatchLogsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LoggingInfoBrokerLogsCloudwatchLogsProperty | cdktn.IResolvable | undefined) {
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
export interface LoggingInfoBrokerLogsFirehoseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#delivery_stream CcCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class LoggingInfoBrokerLogsFirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingInfoBrokerLogsFirehoseProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LoggingInfoBrokerLogsFirehoseProperty | cdktn.IResolvable | undefined) {
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
export interface LoggingInfoBrokerLogsS3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#bucket CcCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#prefix CcCluster#prefix}
    */
    readonly prefix?: string;
}
export class LoggingInfoBrokerLogsS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingInfoBrokerLogsS3Property | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LoggingInfoBrokerLogsS3Property | cdktn.IResolvable | undefined) {
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
export interface BrokerLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#cloudwatch_logs CcCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: LoggingInfoBrokerLogsCloudwatchLogsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#firehose CcCluster#firehose}
    */
    readonly firehose?: LoggingInfoBrokerLogsFirehoseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#s3 CcCluster#s3}
    */
    readonly s3?: LoggingInfoBrokerLogsS3Property;
}
export class BrokerLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrokerLogsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BrokerLogsProperty | cdktn.IResolvable | undefined) {
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
    private _cloudwatchLogs = new LoggingInfoBrokerLogsCloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: LoggingInfoBrokerLogsCloudwatchLogsProperty) {
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
    private _firehose = new LoggingInfoBrokerLogsFirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: LoggingInfoBrokerLogsFirehoseProperty) {
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
    private _s3 = new LoggingInfoBrokerLogsS3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: LoggingInfoBrokerLogsS3Property) {
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
export interface LoggingInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#authorizer_logs CcCluster#authorizer_logs}
    */
    readonly authorizerLogs?: AuthorizerLogsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#broker_logs CcCluster#broker_logs}
    */
    readonly brokerLogs?: BrokerLogsProperty;
}
export class LoggingInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerLogs = this._authorizerLogs?.internalValue;
        }
        if (this._brokerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.brokerLogs = this._brokerLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizerLogs.internalValue = undefined;
            this._brokerLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizerLogs.internalValue = value.authorizerLogs;
            this._brokerLogs.internalValue = value.brokerLogs;
        }
    }

    // authorizer_logs - computed: true, optional: true, required: false
    private _authorizerLogs = new AuthorizerLogsPropertyOutputReference(this, "authorizer_logs");
    public get authorizerLogs() {
        return this._authorizerLogs;
    }
    public putAuthorizerLogs(value: AuthorizerLogsProperty) {
        this._authorizerLogs.internalValue = value;
    }
    public resetAuthorizerLogs() {
        this._authorizerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerLogsInput() {
        return this._authorizerLogs.internalValue;
    }

    // broker_logs - computed: true, optional: true, required: false
    private _brokerLogs = new BrokerLogsPropertyOutputReference(this, "broker_logs");
    public get brokerLogs() {
        return this._brokerLogs;
    }
    public putBrokerLogs(value: BrokerLogsProperty) {
        this._brokerLogs.internalValue = value;
    }
    public resetBrokerLogs() {
        this._brokerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerLogsInput() {
        return this._brokerLogs.internalValue;
    }
}
export interface JmxExporterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled_in_broker CcCluster#enabled_in_broker}
    */
    readonly enabledInBroker?: boolean | cdktn.IResolvable;
}
export class JmxExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JmxExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledInBroker !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledInBroker = this._enabledInBroker;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JmxExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledInBroker = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledInBroker = value.enabledInBroker;
        }
    }

    // enabled_in_broker - computed: true, optional: true, required: false
    private _enabledInBroker?: boolean | cdktn.IResolvable; 
    public get enabledInBroker() {
        return this.getBooleanAttribute('enabled_in_broker');
    }
    public set enabledInBroker(value: boolean | cdktn.IResolvable) {
        this._enabledInBroker = value;
    }
    public resetEnabledInBroker() {
        this._enabledInBroker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInBrokerInput() {
        return this._enabledInBroker;
    }
}
export interface NodeExporterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled_in_broker CcCluster#enabled_in_broker}
    */
    readonly enabledInBroker?: boolean | cdktn.IResolvable;
}
export class NodeExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledInBroker !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledInBroker = this._enabledInBroker;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledInBroker = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledInBroker = value.enabledInBroker;
        }
    }

    // enabled_in_broker - computed: true, optional: true, required: false
    private _enabledInBroker?: boolean | cdktn.IResolvable; 
    public get enabledInBroker() {
        return this.getBooleanAttribute('enabled_in_broker');
    }
    public set enabledInBroker(value: boolean | cdktn.IResolvable) {
        this._enabledInBroker = value;
    }
    public resetEnabledInBroker() {
        this._enabledInBroker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInBrokerInput() {
        return this._enabledInBroker;
    }
}
export interface PrometheusProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#jmx_exporter CcCluster#jmx_exporter}
    */
    readonly jmxExporter?: JmxExporterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#node_exporter CcCluster#node_exporter}
    */
    readonly nodeExporter?: NodeExporterProperty;
}
export class PrometheusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrometheusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jmxExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jmxExporter = this._jmxExporter?.internalValue;
        }
        if (this._nodeExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrometheusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jmxExporter.internalValue = undefined;
            this._nodeExporter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jmxExporter.internalValue = value.jmxExporter;
            this._nodeExporter.internalValue = value.nodeExporter;
        }
    }

    // jmx_exporter - computed: true, optional: true, required: false
    private _jmxExporter = new JmxExporterPropertyOutputReference(this, "jmx_exporter");
    public get jmxExporter() {
        return this._jmxExporter;
    }
    public putJmxExporter(value: JmxExporterProperty) {
        this._jmxExporter.internalValue = value;
    }
    public resetJmxExporter() {
        this._jmxExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxExporterInput() {
        return this._jmxExporter.internalValue;
    }

    // node_exporter - computed: true, optional: true, required: false
    private _nodeExporter = new NodeExporterPropertyOutputReference(this, "node_exporter");
    public get nodeExporter() {
        return this._nodeExporter;
    }
    public putNodeExporter(value: NodeExporterProperty) {
        this._nodeExporter.internalValue = value;
    }
    public resetNodeExporter() {
        this._nodeExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeExporterInput() {
        return this._nodeExporter.internalValue;
    }
}
export interface OpenMonitoringProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#prometheus CcCluster#prometheus}
    */
    readonly prometheus?: PrometheusProperty;
}
export class OpenMonitoringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenMonitoringProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prometheus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheus = this._prometheus?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenMonitoringProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prometheus.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prometheus.internalValue = value.prometheus;
        }
    }

    // prometheus - computed: true, optional: true, required: false
    private _prometheus = new PrometheusPropertyOutputReference(this, "prometheus");
    public get prometheus() {
        return this._prometheus;
    }
    public putPrometheus(value: PrometheusProperty) {
        this._prometheus.internalValue = value;
    }
    public resetPrometheus() {
        this._prometheus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusInput() {
        return this._prometheus.internalValue;
    }
}
export interface RebalancingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#status CcCluster#status}
    */
    readonly status?: string;
}
export class RebalancingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RebalancingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RebalancingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
        }
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface ZookeeperAccessProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ZookeeperAccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZookeeperAccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZookeeperAccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
}
