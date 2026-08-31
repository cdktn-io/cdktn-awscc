// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The delivery policy JSON assigned to the subscription. Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#delivery_policy CcSubscription#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * The subscription's endpoint. The endpoint value depends on the protocol that you specify. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#endpoint CcSubscription#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#filter_policy CcSubscription#filter_policy}
    */
    readonly filterPolicy?: string;
    /**
    * This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#filter_policy_scope CcSubscription#filter_policy_scope}
    */
    readonly filterPolicyScope?: string;
    /**
    * The subscription's protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#protocol CcSubscription#protocol}
    */
    readonly protocol: string;
    /**
    * When set to true, enables raw message delivery. Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#raw_message_delivery CcSubscription#raw_message_delivery}
    */
    readonly rawMessageDelivery?: boolean | cdktn.IResolvable;
    /**
    * When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#redrive_policy CcSubscription#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#region CcSubscription#region}
    */
    readonly region?: string;
    /**
    * Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#replay_policy CcSubscription#replay_policy}
    */
    readonly replayPolicy?: string;
    /**
    * This property applies only to Amazon Data Firehose delivery stream subscriptions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#subscription_role_arn CcSubscription#subscription_role_arn}
    */
    readonly subscriptionRoleArn?: string;
    /**
    * The ARN of the topic to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#topic_arn CcSubscription#topic_arn}
    */
    readonly topicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription awscc_sns_subscription}
*/
export class CcSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sns_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscription to import
    * @param importFromId The id of the existing CcSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sns_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sns_subscription awscc_sns_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sns_subscription',
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
        this._deliveryPolicy = config.deliveryPolicy;
        this._endpoint = config.endpoint;
        this._filterPolicy = config.filterPolicy;
        this._filterPolicyScope = config.filterPolicyScope;
        this._protocol = config.protocol;
        this._rawMessageDelivery = config.rawMessageDelivery;
        this._redrivePolicy = config.redrivePolicy;
        this._region = config.region;
        this._replayPolicy = config.replayPolicy;
        this._subscriptionRoleArn = config.subscriptionRoleArn;
        this._topicArn = config.topicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // delivery_policy - computed: true, optional: true, required: false
    private _deliveryPolicy?: string; 
    public get deliveryPolicy() {
        return this.getStringAttribute('delivery_policy');
    }
    public set deliveryPolicy(value: string) {
        this._deliveryPolicy = value;
    }
    public resetDeliveryPolicy() {
        this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryPolicyInput() {
        return this._deliveryPolicy;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }

    // filter_policy - computed: true, optional: true, required: false
    private _filterPolicy?: string; 
    public get filterPolicy() {
        return this.getStringAttribute('filter_policy');
    }
    public set filterPolicy(value: string) {
        this._filterPolicy = value;
    }
    public resetFilterPolicy() {
        this._filterPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPolicyInput() {
        return this._filterPolicy;
    }

    // filter_policy_scope - computed: true, optional: true, required: false
    private _filterPolicyScope?: string; 
    public get filterPolicyScope() {
        return this.getStringAttribute('filter_policy_scope');
    }
    public set filterPolicyScope(value: string) {
        this._filterPolicyScope = value;
    }
    public resetFilterPolicyScope() {
        this._filterPolicyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPolicyScopeInput() {
        return this._filterPolicyScope;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // raw_message_delivery - computed: true, optional: true, required: false
    private _rawMessageDelivery?: boolean | cdktn.IResolvable; 
    public get rawMessageDelivery() {
        return this.getBooleanAttribute('raw_message_delivery');
    }
    public set rawMessageDelivery(value: boolean | cdktn.IResolvable) {
        this._rawMessageDelivery = value;
    }
    public resetRawMessageDelivery() {
        this._rawMessageDelivery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rawMessageDeliveryInput() {
        return this._rawMessageDelivery;
    }

    // redrive_policy - computed: true, optional: true, required: false
    private _redrivePolicy?: string; 
    public get redrivePolicy() {
        return this.getStringAttribute('redrive_policy');
    }
    public set redrivePolicy(value: string) {
        this._redrivePolicy = value;
    }
    public resetRedrivePolicy() {
        this._redrivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redrivePolicyInput() {
        return this._redrivePolicy;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // replay_policy - computed: true, optional: true, required: false
    private _replayPolicy?: string; 
    public get replayPolicy() {
        return this.getStringAttribute('replay_policy');
    }
    public set replayPolicy(value: string) {
        this._replayPolicy = value;
    }
    public resetReplayPolicy() {
        this._replayPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replayPolicyInput() {
        return this._replayPolicy;
    }

    // subscription_role_arn - computed: true, optional: true, required: false
    private _subscriptionRoleArn?: string; 
    public get subscriptionRoleArn() {
        return this.getStringAttribute('subscription_role_arn');
    }
    public set subscriptionRoleArn(value: string) {
        this._subscriptionRoleArn = value;
    }
    public resetSubscriptionRoleArn() {
        this._subscriptionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionRoleArnInput() {
        return this._subscriptionRoleArn;
    }

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            delivery_policy: cdktn.stringToTerraform(this._deliveryPolicy),
            endpoint: cdktn.stringToTerraform(this._endpoint),
            filter_policy: cdktn.stringToTerraform(this._filterPolicy),
            filter_policy_scope: cdktn.stringToTerraform(this._filterPolicyScope),
            protocol: cdktn.stringToTerraform(this._protocol),
            raw_message_delivery: cdktn.booleanToTerraform(this._rawMessageDelivery),
            redrive_policy: cdktn.stringToTerraform(this._redrivePolicy),
            region: cdktn.stringToTerraform(this._region),
            replay_policy: cdktn.stringToTerraform(this._replayPolicy),
            subscription_role_arn: cdktn.stringToTerraform(this._subscriptionRoleArn),
            topic_arn: cdktn.stringToTerraform(this._topicArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            delivery_policy: {
                value: cdktn.stringToHclTerraform(this._deliveryPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint: {
                value: cdktn.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_policy: {
                value: cdktn.stringToHclTerraform(this._filterPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_policy_scope: {
                value: cdktn.stringToHclTerraform(this._filterPolicyScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            raw_message_delivery: {
                value: cdktn.booleanToHclTerraform(this._rawMessageDelivery),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            redrive_policy: {
                value: cdktn.stringToHclTerraform(this._redrivePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region: {
                value: cdktn.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replay_policy: {
                value: cdktn.stringToHclTerraform(this._replayPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subscription_role_arn: {
                value: cdktn.stringToHclTerraform(this._subscriptionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            topic_arn: {
                value: cdktn.stringToHclTerraform(this._topicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSubscription {
}
