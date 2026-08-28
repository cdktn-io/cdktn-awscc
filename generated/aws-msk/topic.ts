// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTopicProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the MSK cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#cluster_arn CcTopic#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Base64 encoded configuration properties of the topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#configs CcTopic#configs}
    */
    readonly configs?: string;
    /**
    * The number of partitions for the topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#partition_count CcTopic#partition_count}
    */
    readonly partitionCount: number;
    /**
    * The replication factor for the topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#replication_factor CcTopic#replication_factor}
    */
    readonly replicationFactor: number;
    /**
    * The name of the topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#topic_name CcTopic#topic_name}
    */
    readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic awscc_msk_topic}
*/
export class CcTopic extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_topic";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTopic resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTopic to import
    * @param importFromId The id of the existing CcTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTopic to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_topic", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_topic awscc_msk_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTopicProps
    */
    public constructor(scope: Construct, id: string, config: CcTopicProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_topic',
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
        this._clusterArn = config.clusterArn;
        this._configs = config.configs;
        this._partitionCount = config.partitionCount;
        this._replicationFactor = config.replicationFactor;
        this._topicName = config.topicName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // configs - computed: true, optional: true, required: false
    private _configs?: string; 
    public get configs() {
        return this.getStringAttribute('configs');
    }
    public set configs(value: string) {
        this._configs = value;
    }
    public resetConfigs() {
        this._configs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configsInput() {
        return this._configs;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // partition_count - computed: false, optional: false, required: true
    private _partitionCount?: number; 
    public get partitionCount() {
        return this.getNumberAttribute('partition_count');
    }
    public set partitionCount(value: number) {
        this._partitionCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionCountInput() {
        return this._partitionCount;
    }

    // replication_factor - computed: false, optional: false, required: true
    private _replicationFactor?: number; 
    public get replicationFactor() {
        return this.getNumberAttribute('replication_factor');
    }
    public set replicationFactor(value: number) {
        this._replicationFactor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationFactorInput() {
        return this._replicationFactor;
    }

    // topic_arn - computed: true, optional: false, required: false
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }

    // topic_name - computed: false, optional: false, required: true
    private _topicName?: string; 
    public get topicName() {
        return this.getStringAttribute('topic_name');
    }
    public set topicName(value: string) {
        this._topicName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameInput() {
        return this._topicName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            configs: cdktn.stringToTerraform(this._configs),
            partition_count: cdktn.numberToTerraform(this._partitionCount),
            replication_factor: cdktn.numberToTerraform(this._replicationFactor),
            topic_name: cdktn.stringToTerraform(this._topicName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configs: {
                value: cdktn.stringToHclTerraform(this._configs),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            partition_count: {
                value: cdktn.numberToHclTerraform(this._partitionCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            replication_factor: {
                value: cdktn.numberToHclTerraform(this._replicationFactor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            topic_name: {
                value: cdktn.stringToHclTerraform(this._topicName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTopic {
}
