// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCampaignProps extends cdktn.TerraformMetaArguments {
    /**
    * Amazon Connect Instance Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#connect_instance_arn CcCampaign#connect_instance_arn}
    */
    readonly connectInstanceArn: string;
    /**
    * The possible types of dialer config parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#dialer_config CcCampaign#dialer_config}
    */
    readonly dialerConfig: CcCampaign.DialerConfigProperty;
    /**
    * Amazon Connect Campaign Name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#name CcCampaign#name}
    */
    readonly name: string;
    /**
    * The configuration used for outbound calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#outbound_call_config CcCampaign#outbound_call_config}
    */
    readonly outboundCallConfig: CcCampaign.OutboundCallConfigProperty;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#tags CcCampaign#tags}
    */
    readonly tags?: CcCampaign.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign awscc_connectcampaigns_campaign}
*/
export class CcCampaign extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connectcampaigns_campaign";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCampaign resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCampaign to import
    * @param importFromId The id of the existing CcCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCampaign to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connectcampaigns_campaign", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign awscc_connectcampaigns_campaign} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCampaignProps
    */
    public constructor(scope: Construct, id: string, config: CcCampaignProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connectcampaigns_campaign',
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
        this._connectInstanceArn = config.connectInstanceArn;
        this._dialerConfig.internalValue = config.dialerConfig;
        this._name = config.name;
        this._outboundCallConfig.internalValue = config.outboundCallConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // connect_instance_arn - computed: false, optional: false, required: true
    private _connectInstanceArn?: string; 
    public get connectInstanceArn() {
        return this.getStringAttribute('connect_instance_arn');
    }
    public set connectInstanceArn(value: string) {
        this._connectInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectInstanceArnInput() {
        return this._connectInstanceArn;
    }

    // dialer_config - computed: false, optional: false, required: true
    private _dialerConfig = new CcCampaign.DialerConfigPropertyOutputReference(this, "dialer_config");
    public get dialerConfig() {
        return this._dialerConfig;
    }
    public putDialerConfig(value: CcCampaign.DialerConfigProperty) {
        this._dialerConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dialerConfigInput() {
        return this._dialerConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // outbound_call_config - computed: false, optional: false, required: true
    private _outboundCallConfig = new CcCampaign.OutboundCallConfigPropertyOutputReference(this, "outbound_call_config");
    public get outboundCallConfig() {
        return this._outboundCallConfig;
    }
    public putOutboundCallConfig(value: CcCampaign.OutboundCallConfigProperty) {
        this._outboundCallConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallConfigInput() {
        return this._outboundCallConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCampaign.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCampaign.TagProperty[] | cdktn.IResolvable) {
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
            connect_instance_arn: cdktn.stringToTerraform(this._connectInstanceArn),
            dialer_config: ccCampaignDialerConfigPropertyToTerraform(this._dialerConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            outbound_call_config: ccCampaignOutboundCallConfigPropertyToTerraform(this._outboundCallConfig.internalValue),
            tags: cdktn.listMapper(ccCampaignTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connect_instance_arn: {
                value: cdktn.stringToHclTerraform(this._connectInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dialer_config: {
                value: ccCampaignDialerConfigPropertyToHclTerraform(this._dialerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.DialerConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outbound_call_config: {
                value: ccCampaignOutboundCallConfigPropertyToHclTerraform(this._outboundCallConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.OutboundCallConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCampaignTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCampaign.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCampaignAgentlessDialerConfigPropertyToTerraform(struct?: CcCampaign.AgentlessDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dialing_capacity: cdktn.numberToTerraform(struct!.dialingCapacity),
    }
}


export function ccCampaignAgentlessDialerConfigPropertyToHclTerraform(struct?: CcCampaign.AgentlessDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dialing_capacity: {
            value: cdktn.numberToHclTerraform(struct!.dialingCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignPredictiveDialerConfigPropertyToTerraform(struct?: CcCampaign.PredictiveDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
        dialing_capacity: cdktn.numberToTerraform(struct!.dialingCapacity),
    }
}


export function ccCampaignPredictiveDialerConfigPropertyToHclTerraform(struct?: CcCampaign.PredictiveDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth_allocation: {
            value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dialing_capacity: {
            value: cdktn.numberToHclTerraform(struct!.dialingCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignProgressiveDialerConfigPropertyToTerraform(struct?: CcCampaign.ProgressiveDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
        dialing_capacity: cdktn.numberToTerraform(struct!.dialingCapacity),
    }
}


export function ccCampaignProgressiveDialerConfigPropertyToHclTerraform(struct?: CcCampaign.ProgressiveDialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth_allocation: {
            value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dialing_capacity: {
            value: cdktn.numberToHclTerraform(struct!.dialingCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignDialerConfigPropertyToTerraform(struct?: CcCampaign.DialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agentless_dialer_config: ccCampaignAgentlessDialerConfigPropertyToTerraform(struct!.agentlessDialerConfig),
        predictive_dialer_config: ccCampaignPredictiveDialerConfigPropertyToTerraform(struct!.predictiveDialerConfig),
        progressive_dialer_config: ccCampaignProgressiveDialerConfigPropertyToTerraform(struct!.progressiveDialerConfig),
    }
}


export function ccCampaignDialerConfigPropertyToHclTerraform(struct?: CcCampaign.DialerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agentless_dialer_config: {
            value: ccCampaignAgentlessDialerConfigPropertyToHclTerraform(struct!.agentlessDialerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentlessDialerConfigProperty",
        },
        predictive_dialer_config: {
            value: ccCampaignPredictiveDialerConfigPropertyToHclTerraform(struct!.predictiveDialerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveDialerConfigProperty",
        },
        progressive_dialer_config: {
            value: ccCampaignProgressiveDialerConfigPropertyToHclTerraform(struct!.progressiveDialerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ProgressiveDialerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignAnswerMachineDetectionConfigPropertyToTerraform(struct?: CcCampaign.AnswerMachineDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        await_answer_machine_prompt: cdktn.booleanToTerraform(struct!.awaitAnswerMachinePrompt),
        enable_answer_machine_detection: cdktn.booleanToTerraform(struct!.enableAnswerMachineDetection),
    }
}


export function ccCampaignAnswerMachineDetectionConfigPropertyToHclTerraform(struct?: CcCampaign.AnswerMachineDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        await_answer_machine_prompt: {
            value: cdktn.booleanToHclTerraform(struct!.awaitAnswerMachinePrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_answer_machine_detection: {
            value: cdktn.booleanToHclTerraform(struct!.enableAnswerMachineDetection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignOutboundCallConfigPropertyToTerraform(struct?: CcCampaign.OutboundCallConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_machine_detection_config: ccCampaignAnswerMachineDetectionConfigPropertyToTerraform(struct!.answerMachineDetectionConfig),
        connect_contact_flow_arn: cdktn.stringToTerraform(struct!.connectContactFlowArn),
        connect_queue_arn: cdktn.stringToTerraform(struct!.connectQueueArn),
        connect_source_phone_number: cdktn.stringToTerraform(struct!.connectSourcePhoneNumber),
    }
}


export function ccCampaignOutboundCallConfigPropertyToHclTerraform(struct?: CcCampaign.OutboundCallConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_machine_detection_config: {
            value: ccCampaignAnswerMachineDetectionConfigPropertyToHclTerraform(struct!.answerMachineDetectionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AnswerMachineDetectionConfigProperty",
        },
        connect_contact_flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectContactFlowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect_queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectQueueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect_source_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTagPropertyToTerraform(struct?: CcCampaign.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCampaignTagPropertyToHclTerraform(struct?: CcCampaign.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCampaign {
export interface AgentlessDialerConfigProperty {
    /**
    * Allocates dialing capacity for this campaign between multiple active campaigns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#dialing_capacity CcCampaign#dialing_capacity}
    */
    readonly dialingCapacity?: number;
}
export class AgentlessDialerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentlessDialerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dialingCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.dialingCapacity = this._dialingCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentlessDialerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dialingCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dialingCapacity = value.dialingCapacity;
        }
    }

    // dialing_capacity - computed: true, optional: true, required: false
    private _dialingCapacity?: number; 
    public get dialingCapacity() {
        return this.getNumberAttribute('dialing_capacity');
    }
    public set dialingCapacity(value: number) {
        this._dialingCapacity = value;
    }
    public resetDialingCapacity() {
        this._dialingCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dialingCapacityInput() {
        return this._dialingCapacity;
    }
}
export interface PredictiveDialerConfigProperty {
    /**
    * The bandwidth allocation of a queue resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#bandwidth_allocation CcCampaign#bandwidth_allocation}
    */
    readonly bandwidthAllocation?: number;
    /**
    * Allocates dialing capacity for this campaign between multiple active campaigns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#dialing_capacity CcCampaign#dialing_capacity}
    */
    readonly dialingCapacity?: number;
}
export class PredictiveDialerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveDialerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidthAllocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
        }
        if (this._dialingCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.dialingCapacity = this._dialingCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveDialerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = undefined;
            this._dialingCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = value.bandwidthAllocation;
            this._dialingCapacity = value.dialingCapacity;
        }
    }

    // bandwidth_allocation - computed: true, optional: true, required: false
    private _bandwidthAllocation?: number; 
    public get bandwidthAllocation() {
        return this.getNumberAttribute('bandwidth_allocation');
    }
    public set bandwidthAllocation(value: number) {
        this._bandwidthAllocation = value;
    }
    public resetBandwidthAllocation() {
        this._bandwidthAllocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthAllocationInput() {
        return this._bandwidthAllocation;
    }

    // dialing_capacity - computed: true, optional: true, required: false
    private _dialingCapacity?: number; 
    public get dialingCapacity() {
        return this.getNumberAttribute('dialing_capacity');
    }
    public set dialingCapacity(value: number) {
        this._dialingCapacity = value;
    }
    public resetDialingCapacity() {
        this._dialingCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dialingCapacityInput() {
        return this._dialingCapacity;
    }
}
export interface ProgressiveDialerConfigProperty {
    /**
    * The bandwidth allocation of a queue resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#bandwidth_allocation CcCampaign#bandwidth_allocation}
    */
    readonly bandwidthAllocation?: number;
    /**
    * Allocates dialing capacity for this campaign between multiple active campaigns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#dialing_capacity CcCampaign#dialing_capacity}
    */
    readonly dialingCapacity?: number;
}
export class ProgressiveDialerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProgressiveDialerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidthAllocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
        }
        if (this._dialingCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.dialingCapacity = this._dialingCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProgressiveDialerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = undefined;
            this._dialingCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = value.bandwidthAllocation;
            this._dialingCapacity = value.dialingCapacity;
        }
    }

    // bandwidth_allocation - computed: true, optional: true, required: false
    private _bandwidthAllocation?: number; 
    public get bandwidthAllocation() {
        return this.getNumberAttribute('bandwidth_allocation');
    }
    public set bandwidthAllocation(value: number) {
        this._bandwidthAllocation = value;
    }
    public resetBandwidthAllocation() {
        this._bandwidthAllocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthAllocationInput() {
        return this._bandwidthAllocation;
    }

    // dialing_capacity - computed: true, optional: true, required: false
    private _dialingCapacity?: number; 
    public get dialingCapacity() {
        return this.getNumberAttribute('dialing_capacity');
    }
    public set dialingCapacity(value: number) {
        this._dialingCapacity = value;
    }
    public resetDialingCapacity() {
        this._dialingCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dialingCapacityInput() {
        return this._dialingCapacity;
    }
}
export interface DialerConfigProperty {
    /**
    * Agentless Dialer config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#agentless_dialer_config CcCampaign#agentless_dialer_config}
    */
    readonly agentlessDialerConfig?: AgentlessDialerConfigProperty;
    /**
    * Predictive Dialer config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#predictive_dialer_config CcCampaign#predictive_dialer_config}
    */
    readonly predictiveDialerConfig?: PredictiveDialerConfigProperty;
    /**
    * Progressive Dialer config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#progressive_dialer_config CcCampaign#progressive_dialer_config}
    */
    readonly progressiveDialerConfig?: ProgressiveDialerConfigProperty;
}
export class DialerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DialerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentlessDialerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentlessDialerConfig = this._agentlessDialerConfig?.internalValue;
        }
        if (this._predictiveDialerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveDialerConfig = this._predictiveDialerConfig?.internalValue;
        }
        if (this._progressiveDialerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.progressiveDialerConfig = this._progressiveDialerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DialerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentlessDialerConfig.internalValue = undefined;
            this._predictiveDialerConfig.internalValue = undefined;
            this._progressiveDialerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentlessDialerConfig.internalValue = value.agentlessDialerConfig;
            this._predictiveDialerConfig.internalValue = value.predictiveDialerConfig;
            this._progressiveDialerConfig.internalValue = value.progressiveDialerConfig;
        }
    }

    // agentless_dialer_config - computed: true, optional: true, required: false
    private _agentlessDialerConfig = new AgentlessDialerConfigPropertyOutputReference(this, "agentless_dialer_config");
    public get agentlessDialerConfig() {
        return this._agentlessDialerConfig;
    }
    public putAgentlessDialerConfig(value: AgentlessDialerConfigProperty) {
        this._agentlessDialerConfig.internalValue = value;
    }
    public resetAgentlessDialerConfig() {
        this._agentlessDialerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentlessDialerConfigInput() {
        return this._agentlessDialerConfig.internalValue;
    }

    // predictive_dialer_config - computed: true, optional: true, required: false
    private _predictiveDialerConfig = new PredictiveDialerConfigPropertyOutputReference(this, "predictive_dialer_config");
    public get predictiveDialerConfig() {
        return this._predictiveDialerConfig;
    }
    public putPredictiveDialerConfig(value: PredictiveDialerConfigProperty) {
        this._predictiveDialerConfig.internalValue = value;
    }
    public resetPredictiveDialerConfig() {
        this._predictiveDialerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveDialerConfigInput() {
        return this._predictiveDialerConfig.internalValue;
    }

    // progressive_dialer_config - computed: true, optional: true, required: false
    private _progressiveDialerConfig = new ProgressiveDialerConfigPropertyOutputReference(this, "progressive_dialer_config");
    public get progressiveDialerConfig() {
        return this._progressiveDialerConfig;
    }
    public putProgressiveDialerConfig(value: ProgressiveDialerConfigProperty) {
        this._progressiveDialerConfig.internalValue = value;
    }
    public resetProgressiveDialerConfig() {
        this._progressiveDialerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get progressiveDialerConfigInput() {
        return this._progressiveDialerConfig.internalValue;
    }
}
export interface AnswerMachineDetectionConfigProperty {
    /**
    * Enables detection of prompts (e.g., beep after after a voicemail greeting)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#await_answer_machine_prompt CcCampaign#await_answer_machine_prompt}
    */
    readonly awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable;
    /**
    * Flag to decided whether outbound calls should have answering machine detection enabled or not
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#enable_answer_machine_detection CcCampaign#enable_answer_machine_detection}
    */
    readonly enableAnswerMachineDetection?: boolean | cdktn.IResolvable;
}
export class AnswerMachineDetectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnswerMachineDetectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awaitAnswerMachinePrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.awaitAnswerMachinePrompt = this._awaitAnswerMachinePrompt;
        }
        if (this._enableAnswerMachineDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAnswerMachineDetection = this._enableAnswerMachineDetection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnswerMachineDetectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awaitAnswerMachinePrompt = undefined;
            this._enableAnswerMachineDetection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awaitAnswerMachinePrompt = value.awaitAnswerMachinePrompt;
            this._enableAnswerMachineDetection = value.enableAnswerMachineDetection;
        }
    }

    // await_answer_machine_prompt - computed: true, optional: true, required: false
    private _awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable; 
    public get awaitAnswerMachinePrompt() {
        return this.getBooleanAttribute('await_answer_machine_prompt');
    }
    public set awaitAnswerMachinePrompt(value: boolean | cdktn.IResolvable) {
        this._awaitAnswerMachinePrompt = value;
    }
    public resetAwaitAnswerMachinePrompt() {
        this._awaitAnswerMachinePrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awaitAnswerMachinePromptInput() {
        return this._awaitAnswerMachinePrompt;
    }

    // enable_answer_machine_detection - computed: true, optional: true, required: false
    private _enableAnswerMachineDetection?: boolean | cdktn.IResolvable; 
    public get enableAnswerMachineDetection() {
        return this.getBooleanAttribute('enable_answer_machine_detection');
    }
    public set enableAnswerMachineDetection(value: boolean | cdktn.IResolvable) {
        this._enableAnswerMachineDetection = value;
    }
    public resetEnableAnswerMachineDetection() {
        this._enableAnswerMachineDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAnswerMachineDetectionInput() {
        return this._enableAnswerMachineDetection;
    }
}
export interface OutboundCallConfigProperty {
    /**
    * The configuration used for answering machine detection during outbound calls
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#answer_machine_detection_config CcCampaign#answer_machine_detection_config}
    */
    readonly answerMachineDetectionConfig?: AnswerMachineDetectionConfigProperty;
    /**
    * The identifier of the contact flow for the outbound call.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#connect_contact_flow_arn CcCampaign#connect_contact_flow_arn}
    */
    readonly connectContactFlowArn: string;
    /**
    * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#connect_queue_arn CcCampaign#connect_queue_arn}
    */
    readonly connectQueueArn?: string;
    /**
    * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#connect_source_phone_number CcCampaign#connect_source_phone_number}
    */
    readonly connectSourcePhoneNumber?: string;
}
export class OutboundCallConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutboundCallConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerMachineDetectionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerMachineDetectionConfig = this._answerMachineDetectionConfig?.internalValue;
        }
        if (this._connectContactFlowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectContactFlowArn = this._connectContactFlowArn;
        }
        if (this._connectQueueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectQueueArn = this._connectQueueArn;
        }
        if (this._connectSourcePhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectSourcePhoneNumber = this._connectSourcePhoneNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutboundCallConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerMachineDetectionConfig.internalValue = undefined;
            this._connectContactFlowArn = undefined;
            this._connectQueueArn = undefined;
            this._connectSourcePhoneNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerMachineDetectionConfig.internalValue = value.answerMachineDetectionConfig;
            this._connectContactFlowArn = value.connectContactFlowArn;
            this._connectQueueArn = value.connectQueueArn;
            this._connectSourcePhoneNumber = value.connectSourcePhoneNumber;
        }
    }

    // answer_machine_detection_config - computed: true, optional: true, required: false
    private _answerMachineDetectionConfig = new AnswerMachineDetectionConfigPropertyOutputReference(this, "answer_machine_detection_config");
    public get answerMachineDetectionConfig() {
        return this._answerMachineDetectionConfig;
    }
    public putAnswerMachineDetectionConfig(value: AnswerMachineDetectionConfigProperty) {
        this._answerMachineDetectionConfig.internalValue = value;
    }
    public resetAnswerMachineDetectionConfig() {
        this._answerMachineDetectionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerMachineDetectionConfigInput() {
        return this._answerMachineDetectionConfig.internalValue;
    }

    // connect_contact_flow_arn - computed: false, optional: false, required: true
    private _connectContactFlowArn?: string; 
    public get connectContactFlowArn() {
        return this.getStringAttribute('connect_contact_flow_arn');
    }
    public set connectContactFlowArn(value: string) {
        this._connectContactFlowArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectContactFlowArnInput() {
        return this._connectContactFlowArn;
    }

    // connect_queue_arn - computed: true, optional: true, required: false
    private _connectQueueArn?: string; 
    public get connectQueueArn() {
        return this.getStringAttribute('connect_queue_arn');
    }
    public set connectQueueArn(value: string) {
        this._connectQueueArn = value;
    }
    public resetConnectQueueArn() {
        this._connectQueueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectQueueArnInput() {
        return this._connectQueueArn;
    }

    // connect_source_phone_number - computed: true, optional: true, required: false
    private _connectSourcePhoneNumber?: string; 
    public get connectSourcePhoneNumber() {
        return this.getStringAttribute('connect_source_phone_number');
    }
    public set connectSourcePhoneNumber(value: string) {
        this._connectSourcePhoneNumber = value;
    }
    public resetConnectSourcePhoneNumber() {
        this._connectSourcePhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSourcePhoneNumberInput() {
        return this._connectSourcePhoneNumber;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connectcampaigns_campaign#value CcCampaign#value}
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
