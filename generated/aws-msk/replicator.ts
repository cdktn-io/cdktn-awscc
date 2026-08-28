// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicatorProps extends cdktn.TerraformMetaArguments {
    /**
    * A summary description of the replicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#description CcReplicator#description}
    */
    readonly description?: string;
    /**
    * Specifies a list of Kafka clusters which are targets of the replicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#kafka_clusters CcReplicator#kafka_clusters}
    */
    readonly kafkaClusters: CcReplicator.KafkaClusterProperty[] | cdktn.IResolvable;
    /**
    * Configuration for log delivery for the replicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#log_delivery CcReplicator#log_delivery}
    */
    readonly logDelivery?: CcReplicator.LogDeliveryProperty;
    /**
    * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#replication_info_list CcReplicator#replication_info_list}
    */
    readonly replicationInfoList: CcReplicator.ReplicationInfoProperty[] | cdktn.IResolvable;
    /**
    * The name of the replicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#replicator_name CcReplicator#replicator_name}
    */
    readonly replicatorName: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#service_execution_role_arn CcReplicator#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#tags CcReplicator#tags}
    */
    readonly tags?: CcReplicator.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator awscc_msk_replicator}
*/
export class CcReplicator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_replicator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicator to import
    * @param importFromId The id of the existing CcReplicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_replicator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator awscc_msk_replicator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicatorProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicatorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_replicator',
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
        this._kafkaClusters.internalValue = config.kafkaClusters;
        this._logDelivery.internalValue = config.logDelivery;
        this._replicationInfoList.internalValue = config.replicationInfoList;
        this._replicatorName = config.replicatorName;
        this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
        return this.getStringAttribute('current_version');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kafka_clusters - computed: false, optional: false, required: true
    private _kafkaClusters = new CcReplicator.KafkaClusterPropertyList(this, "kafka_clusters", true);
    public get kafkaClusters() {
        return this._kafkaClusters;
    }
    public putKafkaClusters(value: CcReplicator.KafkaClusterProperty[] | cdktn.IResolvable) {
        this._kafkaClusters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaClustersInput() {
        return this._kafkaClusters.internalValue;
    }

    // log_delivery - computed: true, optional: true, required: false
    private _logDelivery = new CcReplicator.LogDeliveryPropertyOutputReference(this, "log_delivery");
    public get logDelivery() {
        return this._logDelivery;
    }
    public putLogDelivery(value: CcReplicator.LogDeliveryProperty) {
        this._logDelivery.internalValue = value;
    }
    public resetLogDelivery() {
        this._logDelivery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryInput() {
        return this._logDelivery.internalValue;
    }

    // replication_info_list - computed: false, optional: false, required: true
    private _replicationInfoList = new CcReplicator.ReplicationInfoPropertyList(this, "replication_info_list", true);
    public get replicationInfoList() {
        return this._replicationInfoList;
    }
    public putReplicationInfoList(value: CcReplicator.ReplicationInfoProperty[] | cdktn.IResolvable) {
        this._replicationInfoList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationInfoListInput() {
        return this._replicationInfoList.internalValue;
    }

    // replicator_arn - computed: true, optional: false, required: false
    public get replicatorArn() {
        return this.getStringAttribute('replicator_arn');
    }

    // replicator_name - computed: false, optional: false, required: true
    private _replicatorName?: string; 
    public get replicatorName() {
        return this.getStringAttribute('replicator_name');
    }
    public set replicatorName(value: string) {
        this._replicatorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicatorNameInput() {
        return this._replicatorName;
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
    private _tags = new CcReplicator.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReplicator.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            kafka_clusters: cdktn.listMapper(ccReplicatorKafkaClusterPropertyToTerraform, false)(this._kafkaClusters.internalValue),
            log_delivery: ccReplicatorLogDeliveryPropertyToTerraform(this._logDelivery.internalValue),
            replication_info_list: cdktn.listMapper(ccReplicatorReplicationInfoPropertyToTerraform, false)(this._replicationInfoList.internalValue),
            replicator_name: cdktn.stringToTerraform(this._replicatorName),
            service_execution_role_arn: cdktn.stringToTerraform(this._serviceExecutionRoleArn),
            tags: cdktn.listMapper(ccReplicatorTagPropertyToTerraform, false)(this._tags.internalValue),
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
            kafka_clusters: {
                value: cdktn.listMapperHcl(ccReplicatorKafkaClusterPropertyToHclTerraform, false)(this._kafkaClusters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReplicator.KafkaClusterPropertyList",
            },
            log_delivery: {
                value: ccReplicatorLogDeliveryPropertyToHclTerraform(this._logDelivery.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcReplicator.LogDeliveryProperty",
            },
            replication_info_list: {
                value: cdktn.listMapperHcl(ccReplicatorReplicationInfoPropertyToHclTerraform, false)(this._replicationInfoList.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReplicator.ReplicationInfoPropertyList",
            },
            replicator_name: {
                value: cdktn.stringToHclTerraform(this._replicatorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReplicatorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcReplicator.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicatorAmazonMskClusterPropertyToTerraform(struct?: CcReplicator.AmazonMskClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        msk_cluster_arn: cdktn.stringToTerraform(struct!.mskClusterArn),
    }
}


export function ccReplicatorAmazonMskClusterPropertyToHclTerraform(struct?: CcReplicator.AmazonMskClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        msk_cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.mskClusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorApacheKafkaClusterPropertyToTerraform(struct?: CcReplicator.ApacheKafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apache_kafka_cluster_id: cdktn.stringToTerraform(struct!.apacheKafkaClusterId),
        bootstrap_broker_string: cdktn.stringToTerraform(struct!.bootstrapBrokerString),
    }
}


export function ccReplicatorApacheKafkaClusterPropertyToHclTerraform(struct?: CcReplicator.ApacheKafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apache_kafka_cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.apacheKafkaClusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bootstrap_broker_string: {
            value: cdktn.stringToHclTerraform(struct!.bootstrapBrokerString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterMtlsAuthenticationPropertyToTerraform(struct?: CcReplicator.KafkaClusterMtlsAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccReplicatorKafkaClusterMtlsAuthenticationPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterMtlsAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterSaslScramAuthenticationPropertyToTerraform(struct?: CcReplicator.KafkaClusterSaslScramAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mechanism: cdktn.stringToTerraform(struct!.mechanism),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccReplicatorKafkaClusterSaslScramAuthenticationPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterSaslScramAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mechanism: {
            value: cdktn.stringToHclTerraform(struct!.mechanism),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterClientAuthenticationPropertyToTerraform(struct?: CcReplicator.KafkaClusterClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mtls: ccReplicatorKafkaClusterMtlsAuthenticationPropertyToTerraform(struct!.mtls),
        sasl_scram: ccReplicatorKafkaClusterSaslScramAuthenticationPropertyToTerraform(struct!.saslScram),
    }
}


export function ccReplicatorKafkaClusterClientAuthenticationPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterClientAuthenticationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mtls: {
            value: ccReplicatorKafkaClusterMtlsAuthenticationPropertyToHclTerraform(struct!.mtls),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaClusterMtlsAuthenticationProperty",
        },
        sasl_scram: {
            value: ccReplicatorKafkaClusterSaslScramAuthenticationPropertyToHclTerraform(struct!.saslScram),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaClusterSaslScramAuthenticationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterEncryptionInTransitPropertyToTerraform(struct?: CcReplicator.KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        root_ca_certificate: cdktn.stringToTerraform(struct!.rootCaCertificate),
    }
}


export function ccReplicatorKafkaClusterEncryptionInTransitPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable): any {
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
        root_ca_certificate: {
            value: cdktn.stringToHclTerraform(struct!.rootCaCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterClientVpcConfigPropertyToTerraform(struct?: CcReplicator.KafkaClusterClientVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccReplicatorKafkaClusterClientVpcConfigPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterClientVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorKafkaClusterPropertyToTerraform(struct?: CcReplicator.KafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amazon_msk_cluster: ccReplicatorAmazonMskClusterPropertyToTerraform(struct!.amazonMskCluster),
        apache_kafka_cluster: ccReplicatorApacheKafkaClusterPropertyToTerraform(struct!.apacheKafkaCluster),
        client_authentication: ccReplicatorKafkaClusterClientAuthenticationPropertyToTerraform(struct!.clientAuthentication),
        encryption_in_transit: ccReplicatorKafkaClusterEncryptionInTransitPropertyToTerraform(struct!.encryptionInTransit),
        vpc_config: ccReplicatorKafkaClusterClientVpcConfigPropertyToTerraform(struct!.vpcConfig),
    }
}


export function ccReplicatorKafkaClusterPropertyToHclTerraform(struct?: CcReplicator.KafkaClusterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amazon_msk_cluster: {
            value: ccReplicatorAmazonMskClusterPropertyToHclTerraform(struct!.amazonMskCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "AmazonMskClusterProperty",
        },
        apache_kafka_cluster: {
            value: ccReplicatorApacheKafkaClusterPropertyToHclTerraform(struct!.apacheKafkaCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "ApacheKafkaClusterProperty",
        },
        client_authentication: {
            value: ccReplicatorKafkaClusterClientAuthenticationPropertyToHclTerraform(struct!.clientAuthentication),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaClusterClientAuthenticationProperty",
        },
        encryption_in_transit: {
            value: ccReplicatorKafkaClusterEncryptionInTransitPropertyToHclTerraform(struct!.encryptionInTransit),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaClusterEncryptionInTransitProperty",
        },
        vpc_config: {
            value: ccReplicatorKafkaClusterClientVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaClusterClientVpcConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorCloudWatchLogsPropertyToTerraform(struct?: CcReplicator.CloudWatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccReplicatorCloudWatchLogsPropertyToHclTerraform(struct?: CcReplicator.CloudWatchLogsProperty | cdktn.IResolvable): any {
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


export function ccReplicatorFirehosePropertyToTerraform(struct?: CcReplicator.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccReplicatorFirehosePropertyToHclTerraform(struct?: CcReplicator.FirehoseProperty | cdktn.IResolvable): any {
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


export function ccReplicatorS3PropertyToTerraform(struct?: CcReplicator.S3Property | cdktn.IResolvable): any {
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


export function ccReplicatorS3PropertyToHclTerraform(struct?: CcReplicator.S3Property | cdktn.IResolvable): any {
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


export function ccReplicatorReplicatorLogDeliveryPropertyToTerraform(struct?: CcReplicator.ReplicatorLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccReplicatorCloudWatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
        firehose: ccReplicatorFirehosePropertyToTerraform(struct!.firehose),
        s3: ccReplicatorS3PropertyToTerraform(struct!.s3),
    }
}


export function ccReplicatorReplicatorLogDeliveryPropertyToHclTerraform(struct?: CcReplicator.ReplicatorLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccReplicatorCloudWatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsProperty",
        },
        firehose: {
            value: ccReplicatorFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseProperty",
        },
        s3: {
            value: ccReplicatorS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorLogDeliveryPropertyToTerraform(struct?: CcReplicator.LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replicator_log_delivery: ccReplicatorReplicatorLogDeliveryPropertyToTerraform(struct!.replicatorLogDelivery),
    }
}


export function ccReplicatorLogDeliveryPropertyToHclTerraform(struct?: CcReplicator.LogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replicator_log_delivery: {
            value: ccReplicatorReplicatorLogDeliveryPropertyToHclTerraform(struct!.replicatorLogDelivery),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicatorLogDeliveryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorConsumerGroupReplicationPropertyToTerraform(struct?: CcReplicator.ConsumerGroupReplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consumer_group_offset_sync_mode: cdktn.stringToTerraform(struct!.consumerGroupOffsetSyncMode),
        consumer_groups_to_exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.consumerGroupsToExclude),
        consumer_groups_to_replicate: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.consumerGroupsToReplicate),
        detect_and_copy_new_consumer_groups: cdktn.booleanToTerraform(struct!.detectAndCopyNewConsumerGroups),
        synchronise_consumer_group_offsets: cdktn.booleanToTerraform(struct!.synchroniseConsumerGroupOffsets),
    }
}


export function ccReplicatorConsumerGroupReplicationPropertyToHclTerraform(struct?: CcReplicator.ConsumerGroupReplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consumer_group_offset_sync_mode: {
            value: cdktn.stringToHclTerraform(struct!.consumerGroupOffsetSyncMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        consumer_groups_to_exclude: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.consumerGroupsToExclude),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        consumer_groups_to_replicate: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.consumerGroupsToReplicate),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        detect_and_copy_new_consumer_groups: {
            value: cdktn.booleanToHclTerraform(struct!.detectAndCopyNewConsumerGroups),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        synchronise_consumer_group_offsets: {
            value: cdktn.booleanToHclTerraform(struct!.synchroniseConsumerGroupOffsets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorReplicationStartingPositionPropertyToTerraform(struct?: CcReplicator.ReplicationStartingPositionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccReplicatorReplicationStartingPositionPropertyToHclTerraform(struct?: CcReplicator.ReplicationStartingPositionProperty | cdktn.IResolvable): any {
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


export function ccReplicatorReplicationTopicNameConfigurationPropertyToTerraform(struct?: CcReplicator.ReplicationTopicNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccReplicatorReplicationTopicNameConfigurationPropertyToHclTerraform(struct?: CcReplicator.ReplicationTopicNameConfigurationProperty | cdktn.IResolvable): any {
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


export function ccReplicatorTopicReplicationPropertyToTerraform(struct?: CcReplicator.TopicReplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_access_control_lists_for_topics: cdktn.booleanToTerraform(struct!.copyAccessControlListsForTopics),
        copy_topic_configurations: cdktn.booleanToTerraform(struct!.copyTopicConfigurations),
        detect_and_copy_new_topics: cdktn.booleanToTerraform(struct!.detectAndCopyNewTopics),
        starting_position: ccReplicatorReplicationStartingPositionPropertyToTerraform(struct!.startingPosition),
        topic_name_configuration: ccReplicatorReplicationTopicNameConfigurationPropertyToTerraform(struct!.topicNameConfiguration),
        topics_to_exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.topicsToExclude),
        topics_to_replicate: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.topicsToReplicate),
    }
}


export function ccReplicatorTopicReplicationPropertyToHclTerraform(struct?: CcReplicator.TopicReplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_access_control_lists_for_topics: {
            value: cdktn.booleanToHclTerraform(struct!.copyAccessControlListsForTopics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        copy_topic_configurations: {
            value: cdktn.booleanToHclTerraform(struct!.copyTopicConfigurations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        detect_and_copy_new_topics: {
            value: cdktn.booleanToHclTerraform(struct!.detectAndCopyNewTopics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        starting_position: {
            value: ccReplicatorReplicationStartingPositionPropertyToHclTerraform(struct!.startingPosition),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationStartingPositionProperty",
        },
        topic_name_configuration: {
            value: ccReplicatorReplicationTopicNameConfigurationPropertyToHclTerraform(struct!.topicNameConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationTopicNameConfigurationProperty",
        },
        topics_to_exclude: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.topicsToExclude),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        topics_to_replicate: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.topicsToReplicate),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorReplicationInfoPropertyToTerraform(struct?: CcReplicator.ReplicationInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consumer_group_replication: ccReplicatorConsumerGroupReplicationPropertyToTerraform(struct!.consumerGroupReplication),
        source_kafka_cluster_arn: cdktn.stringToTerraform(struct!.sourceKafkaClusterArn),
        source_kafka_cluster_id: cdktn.stringToTerraform(struct!.sourceKafkaClusterId),
        target_compression_type: cdktn.stringToTerraform(struct!.targetCompressionType),
        target_kafka_cluster_arn: cdktn.stringToTerraform(struct!.targetKafkaClusterArn),
        target_kafka_cluster_id: cdktn.stringToTerraform(struct!.targetKafkaClusterId),
        topic_replication: ccReplicatorTopicReplicationPropertyToTerraform(struct!.topicReplication),
    }
}


export function ccReplicatorReplicationInfoPropertyToHclTerraform(struct?: CcReplicator.ReplicationInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consumer_group_replication: {
            value: ccReplicatorConsumerGroupReplicationPropertyToHclTerraform(struct!.consumerGroupReplication),
            isBlock: true,
            type: "struct",
            storageClassType: "ConsumerGroupReplicationProperty",
        },
        source_kafka_cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.sourceKafkaClusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_kafka_cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.sourceKafkaClusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_compression_type: {
            value: cdktn.stringToHclTerraform(struct!.targetCompressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_kafka_cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetKafkaClusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_kafka_cluster_id: {
            value: cdktn.stringToHclTerraform(struct!.targetKafkaClusterId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_replication: {
            value: ccReplicatorTopicReplicationPropertyToHclTerraform(struct!.topicReplication),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicReplicationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicatorTagPropertyToTerraform(struct?: CcReplicator.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReplicatorTagPropertyToHclTerraform(struct?: CcReplicator.TagProperty | cdktn.IResolvable): any {
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


export namespace CcReplicator {
export interface AmazonMskClusterProperty {
    /**
    * The ARN of an Amazon MSK cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#msk_cluster_arn CcReplicator#msk_cluster_arn}
    */
    readonly mskClusterArn?: string;
}
export class AmazonMskClusterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonMskClusterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mskClusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mskClusterArn = this._mskClusterArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonMskClusterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mskClusterArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mskClusterArn = value.mskClusterArn;
        }
    }

    // msk_cluster_arn - computed: true, optional: true, required: false
    private _mskClusterArn?: string; 
    public get mskClusterArn() {
        return this.getStringAttribute('msk_cluster_arn');
    }
    public set mskClusterArn(value: string) {
        this._mskClusterArn = value;
    }
    public resetMskClusterArn() {
        this._mskClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mskClusterArnInput() {
        return this._mskClusterArn;
    }
}
export interface ApacheKafkaClusterProperty {
    /**
    * The ID of the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#apache_kafka_cluster_id CcReplicator#apache_kafka_cluster_id}
    */
    readonly apacheKafkaClusterId?: string;
    /**
    * The bootstrap broker string of the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#bootstrap_broker_string CcReplicator#bootstrap_broker_string}
    */
    readonly bootstrapBrokerString?: string;
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
        if (this._apacheKafkaClusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.apacheKafkaClusterId = this._apacheKafkaClusterId;
        }
        if (this._bootstrapBrokerString !== undefined) {
            hasAnyValues = true;
            internalValueResult.bootstrapBrokerString = this._bootstrapBrokerString;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApacheKafkaClusterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apacheKafkaClusterId = undefined;
            this._bootstrapBrokerString = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apacheKafkaClusterId = value.apacheKafkaClusterId;
            this._bootstrapBrokerString = value.bootstrapBrokerString;
        }
    }

    // apache_kafka_cluster_id - computed: true, optional: true, required: false
    private _apacheKafkaClusterId?: string; 
    public get apacheKafkaClusterId() {
        return this.getStringAttribute('apache_kafka_cluster_id');
    }
    public set apacheKafkaClusterId(value: string) {
        this._apacheKafkaClusterId = value;
    }
    public resetApacheKafkaClusterId() {
        this._apacheKafkaClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apacheKafkaClusterIdInput() {
        return this._apacheKafkaClusterId;
    }

    // bootstrap_broker_string - computed: true, optional: true, required: false
    private _bootstrapBrokerString?: string; 
    public get bootstrapBrokerString() {
        return this.getStringAttribute('bootstrap_broker_string');
    }
    public set bootstrapBrokerString(value: string) {
        this._bootstrapBrokerString = value;
    }
    public resetBootstrapBrokerString() {
        this._bootstrapBrokerString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bootstrapBrokerStringInput() {
        return this._bootstrapBrokerString;
    }
}
export interface KafkaClusterMtlsAuthenticationProperty {
    /**
    * The Amazon Resource Name (ARN) of the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#secret_arn CcReplicator#secret_arn}
    */
    readonly secretArn?: string;
}
export class KafkaClusterMtlsAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterMtlsAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterMtlsAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretArn = value.secretArn;
        }
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface KafkaClusterSaslScramAuthenticationProperty {
    /**
    * The SASL/SCRAM authentication mechanism.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#mechanism CcReplicator#mechanism}
    */
    readonly mechanism?: string;
    /**
    * The Amazon Resource Name (ARN) of the Secrets Manager secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#secret_arn CcReplicator#secret_arn}
    */
    readonly secretArn?: string;
}
export class KafkaClusterSaslScramAuthenticationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterSaslScramAuthenticationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mechanism !== undefined) {
            hasAnyValues = true;
            internalValueResult.mechanism = this._mechanism;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterSaslScramAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mechanism = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mechanism = value.mechanism;
            this._secretArn = value.secretArn;
        }
    }

    // mechanism - computed: true, optional: true, required: false
    private _mechanism?: string; 
    public get mechanism() {
        return this.getStringAttribute('mechanism');
    }
    public set mechanism(value: string) {
        this._mechanism = value;
    }
    public resetMechanism() {
        this._mechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mechanismInput() {
        return this._mechanism;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface KafkaClusterClientAuthenticationProperty {
    /**
    * Details for mTLS client authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#mtls CcReplicator#mtls}
    */
    readonly mtls?: KafkaClusterMtlsAuthenticationProperty;
    /**
    * Details for SASL/SCRAM client authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#sasl_scram CcReplicator#sasl_scram}
    */
    readonly saslScram?: KafkaClusterSaslScramAuthenticationProperty;
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
        if (this._mtls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtls = this._mtls?.internalValue;
        }
        if (this._saslScram?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslScram = this._saslScram?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterClientAuthenticationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mtls.internalValue = undefined;
            this._saslScram.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mtls.internalValue = value.mtls;
            this._saslScram.internalValue = value.saslScram;
        }
    }

    // mtls - computed: true, optional: true, required: false
    private _mtls = new KafkaClusterMtlsAuthenticationPropertyOutputReference(this, "mtls");
    public get mtls() {
        return this._mtls;
    }
    public putMtls(value: KafkaClusterMtlsAuthenticationProperty) {
        this._mtls.internalValue = value;
    }
    public resetMtls() {
        this._mtls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtlsInput() {
        return this._mtls.internalValue;
    }

    // sasl_scram - computed: true, optional: true, required: false
    private _saslScram = new KafkaClusterSaslScramAuthenticationPropertyOutputReference(this, "sasl_scram");
    public get saslScram() {
        return this._saslScram;
    }
    public putSaslScram(value: KafkaClusterSaslScramAuthenticationProperty) {
        this._saslScram.internalValue = value;
    }
    public resetSaslScram() {
        this._saslScram.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslScramInput() {
        return this._saslScram.internalValue;
    }
}
export interface KafkaClusterEncryptionInTransitProperty {
    /**
    * The type of encryption in transit to the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#encryption_type CcReplicator#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The root CA certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#root_ca_certificate CcReplicator#root_ca_certificate}
    */
    readonly rootCaCertificate?: string;
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
        if (this._rootCaCertificate !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootCaCertificate = this._rootCaCertificate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterEncryptionInTransitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._rootCaCertificate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._rootCaCertificate = value.rootCaCertificate;
        }
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // root_ca_certificate - computed: true, optional: true, required: false
    private _rootCaCertificate?: string; 
    public get rootCaCertificate() {
        return this.getStringAttribute('root_ca_certificate');
    }
    public set rootCaCertificate(value: string) {
        this._rootCaCertificate = value;
    }
    public resetRootCaCertificate() {
        this._rootCaCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootCaCertificateInput() {
        return this._rootCaCertificate;
    }
}
export interface KafkaClusterClientVpcConfigProperty {
    /**
    * The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#security_group_ids CcReplicator#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#subnet_ids CcReplicator#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class KafkaClusterClientVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaClusterClientVpcConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KafkaClusterClientVpcConfigProperty | cdktn.IResolvable | undefined) {
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
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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
        return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
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
export interface KafkaClusterProperty {
    /**
    * Details of an Amazon MSK cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#amazon_msk_cluster CcReplicator#amazon_msk_cluster}
    */
    readonly amazonMskCluster?: AmazonMskClusterProperty;
    /**
    * Details of an Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#apache_kafka_cluster CcReplicator#apache_kafka_cluster}
    */
    readonly apacheKafkaCluster?: ApacheKafkaClusterProperty;
    /**
    * Details of the client authentication used by the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#client_authentication CcReplicator#client_authentication}
    */
    readonly clientAuthentication?: KafkaClusterClientAuthenticationProperty;
    /**
    * Details of encryption in transit to the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#encryption_in_transit CcReplicator#encryption_in_transit}
    */
    readonly encryptionInTransit?: KafkaClusterEncryptionInTransitProperty;
    /**
    * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#vpc_config CcReplicator#vpc_config}
    */
    readonly vpcConfig?: KafkaClusterClientVpcConfigProperty;
}
export class KafkaClusterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KafkaClusterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amazonMskCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonMskCluster = this._amazonMskCluster?.internalValue;
        }
        if (this._apacheKafkaCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apacheKafkaCluster = this._apacheKafkaCluster?.internalValue;
        }
        if (this._clientAuthentication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
        }
        if (this._encryptionInTransit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
        }
        if (this._vpcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaClusterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amazonMskCluster.internalValue = undefined;
            this._apacheKafkaCluster.internalValue = undefined;
            this._clientAuthentication.internalValue = undefined;
            this._encryptionInTransit.internalValue = undefined;
            this._vpcConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amazonMskCluster.internalValue = value.amazonMskCluster;
            this._apacheKafkaCluster.internalValue = value.apacheKafkaCluster;
            this._clientAuthentication.internalValue = value.clientAuthentication;
            this._encryptionInTransit.internalValue = value.encryptionInTransit;
            this._vpcConfig.internalValue = value.vpcConfig;
        }
    }

    // amazon_msk_cluster - computed: true, optional: true, required: false
    private _amazonMskCluster = new AmazonMskClusterPropertyOutputReference(this, "amazon_msk_cluster");
    public get amazonMskCluster() {
        return this._amazonMskCluster;
    }
    public putAmazonMskCluster(value: AmazonMskClusterProperty) {
        this._amazonMskCluster.internalValue = value;
    }
    public resetAmazonMskCluster() {
        this._amazonMskCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonMskClusterInput() {
        return this._amazonMskCluster.internalValue;
    }

    // apache_kafka_cluster - computed: true, optional: true, required: false
    private _apacheKafkaCluster = new ApacheKafkaClusterPropertyOutputReference(this, "apache_kafka_cluster");
    public get apacheKafkaCluster() {
        return this._apacheKafkaCluster;
    }
    public putApacheKafkaCluster(value: ApacheKafkaClusterProperty) {
        this._apacheKafkaCluster.internalValue = value;
    }
    public resetApacheKafkaCluster() {
        this._apacheKafkaCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apacheKafkaClusterInput() {
        return this._apacheKafkaCluster.internalValue;
    }

    // client_authentication - computed: true, optional: true, required: false
    private _clientAuthentication = new KafkaClusterClientAuthenticationPropertyOutputReference(this, "client_authentication");
    public get clientAuthentication() {
        return this._clientAuthentication;
    }
    public putClientAuthentication(value: KafkaClusterClientAuthenticationProperty) {
        this._clientAuthentication.internalValue = value;
    }
    public resetClientAuthentication() {
        this._clientAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
        return this._clientAuthentication.internalValue;
    }

    // encryption_in_transit - computed: true, optional: true, required: false
    private _encryptionInTransit = new KafkaClusterEncryptionInTransitPropertyOutputReference(this, "encryption_in_transit");
    public get encryptionInTransit() {
        return this._encryptionInTransit;
    }
    public putEncryptionInTransit(value: KafkaClusterEncryptionInTransitProperty) {
        this._encryptionInTransit.internalValue = value;
    }
    public resetEncryptionInTransit() {
        this._encryptionInTransit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInTransitInput() {
        return this._encryptionInTransit.internalValue;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new KafkaClusterClientVpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: KafkaClusterClientVpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
}

export class KafkaClusterPropertyList extends cdktn.ComplexList {
    public internalValue? : KafkaClusterProperty[] | cdktn.IResolvable

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
    public get(index: number): KafkaClusterPropertyOutputReference {
        return new KafkaClusterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudWatchLogsProperty {
    /**
    * Whether log delivery to CloudWatch Logs is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#enabled CcReplicator#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The CloudWatch log group that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#log_group CcReplicator#log_group}
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
    * The Firehose delivery stream that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#delivery_stream CcReplicator#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Whether log delivery to Firehose is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#enabled CcReplicator#enabled}
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
    * The S3 bucket that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#bucket CcReplicator#bucket}
    */
    readonly bucket?: string;
    /**
    * Whether log delivery to S3 is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#enabled CcReplicator#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The S3 prefix that is the destination for log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#prefix CcReplicator#prefix}
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
export interface ReplicatorLogDeliveryProperty {
    /**
    * Details of the CloudWatch Logs destination for replicator logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#cloudwatch_logs CcReplicator#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogsProperty;
    /**
    * Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#firehose CcReplicator#firehose}
    */
    readonly firehose?: FirehoseProperty;
    /**
    * Details of the Amazon S3 destination for replicator logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#s3 CcReplicator#s3}
    */
    readonly s3?: S3Property;
}
export class ReplicatorLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicatorLogDeliveryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicatorLogDeliveryProperty | cdktn.IResolvable | undefined) {
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
export interface LogDeliveryProperty {
    /**
    * The replicator logs configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#replicator_log_delivery CcReplicator#replicator_log_delivery}
    */
    readonly replicatorLogDelivery?: ReplicatorLogDeliveryProperty;
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
        if (this._replicatorLogDelivery?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicatorLogDelivery = this._replicatorLogDelivery?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replicatorLogDelivery.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replicatorLogDelivery.internalValue = value.replicatorLogDelivery;
        }
    }

    // replicator_log_delivery - computed: true, optional: true, required: false
    private _replicatorLogDelivery = new ReplicatorLogDeliveryPropertyOutputReference(this, "replicator_log_delivery");
    public get replicatorLogDelivery() {
        return this._replicatorLogDelivery;
    }
    public putReplicatorLogDelivery(value: ReplicatorLogDeliveryProperty) {
        this._replicatorLogDelivery.internalValue = value;
    }
    public resetReplicatorLogDelivery() {
        this._replicatorLogDelivery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicatorLogDeliveryInput() {
        return this._replicatorLogDelivery.internalValue;
    }
}
export interface ConsumerGroupReplicationProperty {
    /**
    * The consumer group offset synchronization mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#consumer_group_offset_sync_mode CcReplicator#consumer_group_offset_sync_mode}
    */
    readonly consumerGroupOffsetSyncMode?: string;
    /**
    * List of regular expression patterns indicating the consumer groups that should not be replicated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#consumer_groups_to_exclude CcReplicator#consumer_groups_to_exclude}
    */
    readonly consumerGroupsToExclude?: string[];
    /**
    * List of regular expression patterns indicating the consumer groups to copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#consumer_groups_to_replicate CcReplicator#consumer_groups_to_replicate}
    */
    readonly consumerGroupsToReplicate: string[];
    /**
    * Whether to periodically check for new consumer groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups CcReplicator#detect_and_copy_new_consumer_groups}
    */
    readonly detectAndCopyNewConsumerGroups?: boolean | cdktn.IResolvable;
    /**
    * Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#synchronise_consumer_group_offsets CcReplicator#synchronise_consumer_group_offsets}
    */
    readonly synchroniseConsumerGroupOffsets?: boolean | cdktn.IResolvable;
}
export class ConsumerGroupReplicationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConsumerGroupReplicationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consumerGroupOffsetSyncMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupOffsetSyncMode = this._consumerGroupOffsetSyncMode;
        }
        if (this._consumerGroupsToExclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupsToExclude = this._consumerGroupsToExclude;
        }
        if (this._consumerGroupsToReplicate !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupsToReplicate = this._consumerGroupsToReplicate;
        }
        if (this._detectAndCopyNewConsumerGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectAndCopyNewConsumerGroups = this._detectAndCopyNewConsumerGroups;
        }
        if (this._synchroniseConsumerGroupOffsets !== undefined) {
            hasAnyValues = true;
            internalValueResult.synchroniseConsumerGroupOffsets = this._synchroniseConsumerGroupOffsets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConsumerGroupReplicationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consumerGroupOffsetSyncMode = undefined;
            this._consumerGroupsToExclude = undefined;
            this._consumerGroupsToReplicate = undefined;
            this._detectAndCopyNewConsumerGroups = undefined;
            this._synchroniseConsumerGroupOffsets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consumerGroupOffsetSyncMode = value.consumerGroupOffsetSyncMode;
            this._consumerGroupsToExclude = value.consumerGroupsToExclude;
            this._consumerGroupsToReplicate = value.consumerGroupsToReplicate;
            this._detectAndCopyNewConsumerGroups = value.detectAndCopyNewConsumerGroups;
            this._synchroniseConsumerGroupOffsets = value.synchroniseConsumerGroupOffsets;
        }
    }

    // consumer_group_offset_sync_mode - computed: true, optional: true, required: false
    private _consumerGroupOffsetSyncMode?: string; 
    public get consumerGroupOffsetSyncMode() {
        return this.getStringAttribute('consumer_group_offset_sync_mode');
    }
    public set consumerGroupOffsetSyncMode(value: string) {
        this._consumerGroupOffsetSyncMode = value;
    }
    public resetConsumerGroupOffsetSyncMode() {
        this._consumerGroupOffsetSyncMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupOffsetSyncModeInput() {
        return this._consumerGroupOffsetSyncMode;
    }

    // consumer_groups_to_exclude - computed: true, optional: true, required: false
    private _consumerGroupsToExclude?: string[]; 
    public get consumerGroupsToExclude() {
        return cdktn.Fn.tolist(this.getListAttribute('consumer_groups_to_exclude'));
    }
    public set consumerGroupsToExclude(value: string[]) {
        this._consumerGroupsToExclude = value;
    }
    public resetConsumerGroupsToExclude() {
        this._consumerGroupsToExclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupsToExcludeInput() {
        return this._consumerGroupsToExclude;
    }

    // consumer_groups_to_replicate - computed: false, optional: false, required: true
    private _consumerGroupsToReplicate?: string[]; 
    public get consumerGroupsToReplicate() {
        return cdktn.Fn.tolist(this.getListAttribute('consumer_groups_to_replicate'));
    }
    public set consumerGroupsToReplicate(value: string[]) {
        this._consumerGroupsToReplicate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupsToReplicateInput() {
        return this._consumerGroupsToReplicate;
    }

    // detect_and_copy_new_consumer_groups - computed: true, optional: true, required: false
    private _detectAndCopyNewConsumerGroups?: boolean | cdktn.IResolvable; 
    public get detectAndCopyNewConsumerGroups() {
        return this.getBooleanAttribute('detect_and_copy_new_consumer_groups');
    }
    public set detectAndCopyNewConsumerGroups(value: boolean | cdktn.IResolvable) {
        this._detectAndCopyNewConsumerGroups = value;
    }
    public resetDetectAndCopyNewConsumerGroups() {
        this._detectAndCopyNewConsumerGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectAndCopyNewConsumerGroupsInput() {
        return this._detectAndCopyNewConsumerGroups;
    }

    // synchronise_consumer_group_offsets - computed: true, optional: true, required: false
    private _synchroniseConsumerGroupOffsets?: boolean | cdktn.IResolvable; 
    public get synchroniseConsumerGroupOffsets() {
        return this.getBooleanAttribute('synchronise_consumer_group_offsets');
    }
    public set synchroniseConsumerGroupOffsets(value: boolean | cdktn.IResolvable) {
        this._synchroniseConsumerGroupOffsets = value;
    }
    public resetSynchroniseConsumerGroupOffsets() {
        this._synchroniseConsumerGroupOffsets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get synchroniseConsumerGroupOffsetsInput() {
        return this._synchroniseConsumerGroupOffsets;
    }
}
export interface ReplicationStartingPositionProperty {
    /**
    * The type of replication starting position.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#type CcReplicator#type}
    */
    readonly type?: string;
}
export class ReplicationStartingPositionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationStartingPositionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicationStartingPositionProperty | cdktn.IResolvable | undefined) {
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
export interface ReplicationTopicNameConfigurationProperty {
    /**
    * The type of replicated topic name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#type CcReplicator#type}
    */
    readonly type?: string;
}
export class ReplicationTopicNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationTopicNameConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicationTopicNameConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface TopicReplicationProperty {
    /**
    * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#copy_access_control_lists_for_topics CcReplicator#copy_access_control_lists_for_topics}
    */
    readonly copyAccessControlListsForTopics?: boolean | cdktn.IResolvable;
    /**
    * Whether to periodically configure remote topics to match their corresponding upstream topics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#copy_topic_configurations CcReplicator#copy_topic_configurations}
    */
    readonly copyTopicConfigurations?: boolean | cdktn.IResolvable;
    /**
    * Whether to periodically check for new topics and partitions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#detect_and_copy_new_topics CcReplicator#detect_and_copy_new_topics}
    */
    readonly detectAndCopyNewTopics?: boolean | cdktn.IResolvable;
    /**
    * Configuration for specifying the position in the topics to start replicating from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#starting_position CcReplicator#starting_position}
    */
    readonly startingPosition?: ReplicationStartingPositionProperty;
    /**
    * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#topic_name_configuration CcReplicator#topic_name_configuration}
    */
    readonly topicNameConfiguration?: ReplicationTopicNameConfigurationProperty;
    /**
    * List of regular expression patterns indicating the topics that should not be replicated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#topics_to_exclude CcReplicator#topics_to_exclude}
    */
    readonly topicsToExclude?: string[];
    /**
    * List of regular expression patterns indicating the topics to copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#topics_to_replicate CcReplicator#topics_to_replicate}
    */
    readonly topicsToReplicate: string[];
}
export class TopicReplicationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicReplicationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyAccessControlListsForTopics !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyAccessControlListsForTopics = this._copyAccessControlListsForTopics;
        }
        if (this._copyTopicConfigurations !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTopicConfigurations = this._copyTopicConfigurations;
        }
        if (this._detectAndCopyNewTopics !== undefined) {
            hasAnyValues = true;
            internalValueResult.detectAndCopyNewTopics = this._detectAndCopyNewTopics;
        }
        if (this._startingPosition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPosition = this._startingPosition?.internalValue;
        }
        if (this._topicNameConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicNameConfiguration = this._topicNameConfiguration?.internalValue;
        }
        if (this._topicsToExclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicsToExclude = this._topicsToExclude;
        }
        if (this._topicsToReplicate !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicsToReplicate = this._topicsToReplicate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicReplicationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyAccessControlListsForTopics = undefined;
            this._copyTopicConfigurations = undefined;
            this._detectAndCopyNewTopics = undefined;
            this._startingPosition.internalValue = undefined;
            this._topicNameConfiguration.internalValue = undefined;
            this._topicsToExclude = undefined;
            this._topicsToReplicate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyAccessControlListsForTopics = value.copyAccessControlListsForTopics;
            this._copyTopicConfigurations = value.copyTopicConfigurations;
            this._detectAndCopyNewTopics = value.detectAndCopyNewTopics;
            this._startingPosition.internalValue = value.startingPosition;
            this._topicNameConfiguration.internalValue = value.topicNameConfiguration;
            this._topicsToExclude = value.topicsToExclude;
            this._topicsToReplicate = value.topicsToReplicate;
        }
    }

    // copy_access_control_lists_for_topics - computed: true, optional: true, required: false
    private _copyAccessControlListsForTopics?: boolean | cdktn.IResolvable; 
    public get copyAccessControlListsForTopics() {
        return this.getBooleanAttribute('copy_access_control_lists_for_topics');
    }
    public set copyAccessControlListsForTopics(value: boolean | cdktn.IResolvable) {
        this._copyAccessControlListsForTopics = value;
    }
    public resetCopyAccessControlListsForTopics() {
        this._copyAccessControlListsForTopics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyAccessControlListsForTopicsInput() {
        return this._copyAccessControlListsForTopics;
    }

    // copy_topic_configurations - computed: true, optional: true, required: false
    private _copyTopicConfigurations?: boolean | cdktn.IResolvable; 
    public get copyTopicConfigurations() {
        return this.getBooleanAttribute('copy_topic_configurations');
    }
    public set copyTopicConfigurations(value: boolean | cdktn.IResolvable) {
        this._copyTopicConfigurations = value;
    }
    public resetCopyTopicConfigurations() {
        this._copyTopicConfigurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTopicConfigurationsInput() {
        return this._copyTopicConfigurations;
    }

    // detect_and_copy_new_topics - computed: true, optional: true, required: false
    private _detectAndCopyNewTopics?: boolean | cdktn.IResolvable; 
    public get detectAndCopyNewTopics() {
        return this.getBooleanAttribute('detect_and_copy_new_topics');
    }
    public set detectAndCopyNewTopics(value: boolean | cdktn.IResolvable) {
        this._detectAndCopyNewTopics = value;
    }
    public resetDetectAndCopyNewTopics() {
        this._detectAndCopyNewTopics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectAndCopyNewTopicsInput() {
        return this._detectAndCopyNewTopics;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition = new ReplicationStartingPositionPropertyOutputReference(this, "starting_position");
    public get startingPosition() {
        return this._startingPosition;
    }
    public putStartingPosition(value: ReplicationStartingPositionProperty) {
        this._startingPosition.internalValue = value;
    }
    public resetStartingPosition() {
        this._startingPosition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition.internalValue;
    }

    // topic_name_configuration - computed: true, optional: true, required: false
    private _topicNameConfiguration = new ReplicationTopicNameConfigurationPropertyOutputReference(this, "topic_name_configuration");
    public get topicNameConfiguration() {
        return this._topicNameConfiguration;
    }
    public putTopicNameConfiguration(value: ReplicationTopicNameConfigurationProperty) {
        this._topicNameConfiguration.internalValue = value;
    }
    public resetTopicNameConfiguration() {
        this._topicNameConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameConfigurationInput() {
        return this._topicNameConfiguration.internalValue;
    }

    // topics_to_exclude - computed: true, optional: true, required: false
    private _topicsToExclude?: string[]; 
    public get topicsToExclude() {
        return cdktn.Fn.tolist(this.getListAttribute('topics_to_exclude'));
    }
    public set topicsToExclude(value: string[]) {
        this._topicsToExclude = value;
    }
    public resetTopicsToExclude() {
        this._topicsToExclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsToExcludeInput() {
        return this._topicsToExclude;
    }

    // topics_to_replicate - computed: false, optional: false, required: true
    private _topicsToReplicate?: string[]; 
    public get topicsToReplicate() {
        return cdktn.Fn.tolist(this.getListAttribute('topics_to_replicate'));
    }
    public set topicsToReplicate(value: string[]) {
        this._topicsToReplicate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsToReplicateInput() {
        return this._topicsToReplicate;
    }
}
export interface ReplicationInfoProperty {
    /**
    * Configuration relating to consumer group replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#consumer_group_replication CcReplicator#consumer_group_replication}
    */
    readonly consumerGroupReplication: ConsumerGroupReplicationProperty;
    /**
    * Amazon Resource Name of the source Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#source_kafka_cluster_arn CcReplicator#source_kafka_cluster_arn}
    */
    readonly sourceKafkaClusterArn?: string;
    /**
    * The ID of the source Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#source_kafka_cluster_id CcReplicator#source_kafka_cluster_id}
    */
    readonly sourceKafkaClusterId?: string;
    /**
    * The type of compression to use writing records to target Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#target_compression_type CcReplicator#target_compression_type}
    */
    readonly targetCompressionType: string;
    /**
    * Amazon Resource Name of the target Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#target_kafka_cluster_arn CcReplicator#target_kafka_cluster_arn}
    */
    readonly targetKafkaClusterArn?: string;
    /**
    * The ID of the target Kafka cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#target_kafka_cluster_id CcReplicator#target_kafka_cluster_id}
    */
    readonly targetKafkaClusterId?: string;
    /**
    * Configuration relating to topic replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#topic_replication CcReplicator#topic_replication}
    */
    readonly topicReplication: TopicReplicationProperty;
}
export class ReplicationInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consumerGroupReplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupReplication = this._consumerGroupReplication?.internalValue;
        }
        if (this._sourceKafkaClusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceKafkaClusterArn = this._sourceKafkaClusterArn;
        }
        if (this._sourceKafkaClusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceKafkaClusterId = this._sourceKafkaClusterId;
        }
        if (this._targetCompressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCompressionType = this._targetCompressionType;
        }
        if (this._targetKafkaClusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetKafkaClusterArn = this._targetKafkaClusterArn;
        }
        if (this._targetKafkaClusterId !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetKafkaClusterId = this._targetKafkaClusterId;
        }
        if (this._topicReplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicReplication = this._topicReplication?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consumerGroupReplication.internalValue = undefined;
            this._sourceKafkaClusterArn = undefined;
            this._sourceKafkaClusterId = undefined;
            this._targetCompressionType = undefined;
            this._targetKafkaClusterArn = undefined;
            this._targetKafkaClusterId = undefined;
            this._topicReplication.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consumerGroupReplication.internalValue = value.consumerGroupReplication;
            this._sourceKafkaClusterArn = value.sourceKafkaClusterArn;
            this._sourceKafkaClusterId = value.sourceKafkaClusterId;
            this._targetCompressionType = value.targetCompressionType;
            this._targetKafkaClusterArn = value.targetKafkaClusterArn;
            this._targetKafkaClusterId = value.targetKafkaClusterId;
            this._topicReplication.internalValue = value.topicReplication;
        }
    }

    // consumer_group_replication - computed: false, optional: false, required: true
    private _consumerGroupReplication = new ConsumerGroupReplicationPropertyOutputReference(this, "consumer_group_replication");
    public get consumerGroupReplication() {
        return this._consumerGroupReplication;
    }
    public putConsumerGroupReplication(value: ConsumerGroupReplicationProperty) {
        this._consumerGroupReplication.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupReplicationInput() {
        return this._consumerGroupReplication.internalValue;
    }

    // source_kafka_cluster_arn - computed: true, optional: true, required: false
    private _sourceKafkaClusterArn?: string; 
    public get sourceKafkaClusterArn() {
        return this.getStringAttribute('source_kafka_cluster_arn');
    }
    public set sourceKafkaClusterArn(value: string) {
        this._sourceKafkaClusterArn = value;
    }
    public resetSourceKafkaClusterArn() {
        this._sourceKafkaClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceKafkaClusterArnInput() {
        return this._sourceKafkaClusterArn;
    }

    // source_kafka_cluster_id - computed: true, optional: true, required: false
    private _sourceKafkaClusterId?: string; 
    public get sourceKafkaClusterId() {
        return this.getStringAttribute('source_kafka_cluster_id');
    }
    public set sourceKafkaClusterId(value: string) {
        this._sourceKafkaClusterId = value;
    }
    public resetSourceKafkaClusterId() {
        this._sourceKafkaClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceKafkaClusterIdInput() {
        return this._sourceKafkaClusterId;
    }

    // target_compression_type - computed: false, optional: false, required: true
    private _targetCompressionType?: string; 
    public get targetCompressionType() {
        return this.getStringAttribute('target_compression_type');
    }
    public set targetCompressionType(value: string) {
        this._targetCompressionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCompressionTypeInput() {
        return this._targetCompressionType;
    }

    // target_kafka_cluster_arn - computed: true, optional: true, required: false
    private _targetKafkaClusterArn?: string; 
    public get targetKafkaClusterArn() {
        return this.getStringAttribute('target_kafka_cluster_arn');
    }
    public set targetKafkaClusterArn(value: string) {
        this._targetKafkaClusterArn = value;
    }
    public resetTargetKafkaClusterArn() {
        this._targetKafkaClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetKafkaClusterArnInput() {
        return this._targetKafkaClusterArn;
    }

    // target_kafka_cluster_id - computed: true, optional: true, required: false
    private _targetKafkaClusterId?: string; 
    public get targetKafkaClusterId() {
        return this.getStringAttribute('target_kafka_cluster_id');
    }
    public set targetKafkaClusterId(value: string) {
        this._targetKafkaClusterId = value;
    }
    public resetTargetKafkaClusterId() {
        this._targetKafkaClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetKafkaClusterIdInput() {
        return this._targetKafkaClusterId;
    }

    // topic_replication - computed: false, optional: false, required: true
    private _topicReplication = new TopicReplicationPropertyOutputReference(this, "topic_replication");
    public get topicReplication() {
        return this._topicReplication;
    }
    public putTopicReplication(value: TopicReplicationProperty) {
        this._topicReplication.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicReplicationInput() {
        return this._topicReplication.internalValue;
    }
}

export class ReplicationInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationInfoPropertyOutputReference {
        return new ReplicationInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#key CcReplicator#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_replicator#value CcReplicator#value}
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
