// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRoutingProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#agent_availability_timer CcRoutingProfile#agent_availability_timer}
    */
    readonly agentAvailabilityTimer?: string;
    /**
    * The identifier of the default outbound queue for this routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#default_outbound_queue_arn CcRoutingProfile#default_outbound_queue_arn}
    */
    readonly defaultOutboundQueueArn: string;
    /**
    * The description of the routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#description CcRoutingProfile#description}
    */
    readonly description: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#instance_arn CcRoutingProfile#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The manual assignment queues to associate with this routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs CcRoutingProfile#manual_assignment_queue_configs}
    */
    readonly manualAssignmentQueueConfigs?: CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigProperty[] | cdktn.IResolvable;
    /**
    * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#media_concurrencies CcRoutingProfile#media_concurrencies}
    */
    readonly mediaConcurrencies: CcRoutingProfile.MediaConcurrencyProperty[] | cdktn.IResolvable;
    /**
    * The name of the routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#name CcRoutingProfile#name}
    */
    readonly name: string;
    /**
    * The queues to associate with this routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#queue_configs CcRoutingProfile#queue_configs}
    */
    readonly queueConfigs?: CcRoutingProfile.RoutingProfileQueueConfigProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#tags CcRoutingProfile#tags}
    */
    readonly tags?: CcRoutingProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile awscc_connect_routing_profile}
*/
export class CcRoutingProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_routing_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRoutingProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRoutingProfile to import
    * @param importFromId The id of the existing CcRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRoutingProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_routing_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile awscc_connect_routing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRoutingProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcRoutingProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_routing_profile',
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
        this._agentAvailabilityTimer = config.agentAvailabilityTimer;
        this._defaultOutboundQueueArn = config.defaultOutboundQueueArn;
        this._description = config.description;
        this._instanceArn = config.instanceArn;
        this._manualAssignmentQueueConfigs.internalValue = config.manualAssignmentQueueConfigs;
        this._mediaConcurrencies.internalValue = config.mediaConcurrencies;
        this._name = config.name;
        this._queueConfigs.internalValue = config.queueConfigs;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_availability_timer - computed: true, optional: true, required: false
    private _agentAvailabilityTimer?: string; 
    public get agentAvailabilityTimer() {
        return this.getStringAttribute('agent_availability_timer');
    }
    public set agentAvailabilityTimer(value: string) {
        this._agentAvailabilityTimer = value;
    }
    public resetAgentAvailabilityTimer() {
        this._agentAvailabilityTimer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentAvailabilityTimerInput() {
        return this._agentAvailabilityTimer;
    }

    // default_outbound_queue_arn - computed: false, optional: false, required: true
    private _defaultOutboundQueueArn?: string; 
    public get defaultOutboundQueueArn() {
        return this.getStringAttribute('default_outbound_queue_arn');
    }
    public set defaultOutboundQueueArn(value: string) {
        this._defaultOutboundQueueArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOutboundQueueArnInput() {
        return this._defaultOutboundQueueArn;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // manual_assignment_queue_configs - computed: true, optional: true, required: false
    private _manualAssignmentQueueConfigs = new CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigPropertyList(this, "manual_assignment_queue_configs", false);
    public get manualAssignmentQueueConfigs() {
        return this._manualAssignmentQueueConfigs;
    }
    public putManualAssignmentQueueConfigs(value: CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigProperty[] | cdktn.IResolvable) {
        this._manualAssignmentQueueConfigs.internalValue = value;
    }
    public resetManualAssignmentQueueConfigs() {
        this._manualAssignmentQueueConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manualAssignmentQueueConfigsInput() {
        return this._manualAssignmentQueueConfigs.internalValue;
    }

    // media_concurrencies - computed: false, optional: false, required: true
    private _mediaConcurrencies = new CcRoutingProfile.MediaConcurrencyPropertyList(this, "media_concurrencies", false);
    public get mediaConcurrencies() {
        return this._mediaConcurrencies;
    }
    public putMediaConcurrencies(value: CcRoutingProfile.MediaConcurrencyProperty[] | cdktn.IResolvable) {
        this._mediaConcurrencies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaConcurrenciesInput() {
        return this._mediaConcurrencies.internalValue;
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

    // queue_configs - computed: true, optional: true, required: false
    private _queueConfigs = new CcRoutingProfile.RoutingProfileQueueConfigPropertyList(this, "queue_configs", false);
    public get queueConfigs() {
        return this._queueConfigs;
    }
    public putQueueConfigs(value: CcRoutingProfile.RoutingProfileQueueConfigProperty[] | cdktn.IResolvable) {
        this._queueConfigs.internalValue = value;
    }
    public resetQueueConfigs() {
        this._queueConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueConfigsInput() {
        return this._queueConfigs.internalValue;
    }

    // routing_profile_arn - computed: true, optional: false, required: false
    public get routingProfileArn() {
        return this.getStringAttribute('routing_profile_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRoutingProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRoutingProfile.TagProperty[] | cdktn.IResolvable) {
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
            agent_availability_timer: cdktn.stringToTerraform(this._agentAvailabilityTimer),
            default_outbound_queue_arn: cdktn.stringToTerraform(this._defaultOutboundQueueArn),
            description: cdktn.stringToTerraform(this._description),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            manual_assignment_queue_configs: cdktn.listMapper(ccRoutingProfileRoutingProfileManualAssignmentQueueConfigPropertyToTerraform, false)(this._manualAssignmentQueueConfigs.internalValue),
            media_concurrencies: cdktn.listMapper(ccRoutingProfileMediaConcurrencyPropertyToTerraform, false)(this._mediaConcurrencies.internalValue),
            name: cdktn.stringToTerraform(this._name),
            queue_configs: cdktn.listMapper(ccRoutingProfileRoutingProfileQueueConfigPropertyToTerraform, false)(this._queueConfigs.internalValue),
            tags: cdktn.listMapper(ccRoutingProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_availability_timer: {
                value: cdktn.stringToHclTerraform(this._agentAvailabilityTimer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_outbound_queue_arn: {
                value: cdktn.stringToHclTerraform(this._defaultOutboundQueueArn),
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
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            manual_assignment_queue_configs: {
                value: cdktn.listMapperHcl(ccRoutingProfileRoutingProfileManualAssignmentQueueConfigPropertyToHclTerraform, false)(this._manualAssignmentQueueConfigs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigPropertyList",
            },
            media_concurrencies: {
                value: cdktn.listMapperHcl(ccRoutingProfileMediaConcurrencyPropertyToHclTerraform, false)(this._mediaConcurrencies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRoutingProfile.MediaConcurrencyPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queue_configs: {
                value: cdktn.listMapperHcl(ccRoutingProfileRoutingProfileQueueConfigPropertyToHclTerraform, false)(this._queueConfigs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRoutingProfile.RoutingProfileQueueConfigPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRoutingProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRoutingProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRoutingProfileRoutingProfileQueueReferencePropertyToTerraform(struct?: CcRoutingProfile.RoutingProfileQueueReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel: cdktn.stringToTerraform(struct!.channel),
        queue_arn: cdktn.stringToTerraform(struct!.queueArn),
    }
}


export function ccRoutingProfileRoutingProfileQueueReferencePropertyToHclTerraform(struct?: CcRoutingProfile.RoutingProfileQueueReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel: {
            value: cdktn.stringToHclTerraform(struct!.channel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.queueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileRoutingProfileManualAssignmentQueueConfigPropertyToTerraform(struct?: CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        queue_reference: ccRoutingProfileRoutingProfileQueueReferencePropertyToTerraform(struct!.queueReference),
    }
}


export function ccRoutingProfileRoutingProfileManualAssignmentQueueConfigPropertyToHclTerraform(struct?: CcRoutingProfile.RoutingProfileManualAssignmentQueueConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        queue_reference: {
            value: ccRoutingProfileRoutingProfileQueueReferencePropertyToHclTerraform(struct!.queueReference),
            isBlock: true,
            type: "struct",
            storageClassType: "RoutingProfileQueueReferenceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileCrossChannelBehaviorPropertyToTerraform(struct?: CcRoutingProfile.CrossChannelBehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior_type: cdktn.stringToTerraform(struct!.behaviorType),
    }
}


export function ccRoutingProfileCrossChannelBehaviorPropertyToHclTerraform(struct?: CcRoutingProfile.CrossChannelBehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior_type: {
            value: cdktn.stringToHclTerraform(struct!.behaviorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileMediaConcurrencyPropertyToTerraform(struct?: CcRoutingProfile.MediaConcurrencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel: cdktn.stringToTerraform(struct!.channel),
        concurrency: cdktn.numberToTerraform(struct!.concurrency),
        cross_channel_behavior: ccRoutingProfileCrossChannelBehaviorPropertyToTerraform(struct!.crossChannelBehavior),
    }
}


export function ccRoutingProfileMediaConcurrencyPropertyToHclTerraform(struct?: CcRoutingProfile.MediaConcurrencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel: {
            value: cdktn.stringToHclTerraform(struct!.channel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        concurrency: {
            value: cdktn.numberToHclTerraform(struct!.concurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cross_channel_behavior: {
            value: ccRoutingProfileCrossChannelBehaviorPropertyToHclTerraform(struct!.crossChannelBehavior),
            isBlock: true,
            type: "struct",
            storageClassType: "CrossChannelBehaviorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileQueueReferencePropertyToTerraform(struct?: CcRoutingProfile.QueueReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel: cdktn.stringToTerraform(struct!.channel),
        queue_arn: cdktn.stringToTerraform(struct!.queueArn),
    }
}


export function ccRoutingProfileQueueReferencePropertyToHclTerraform(struct?: CcRoutingProfile.QueueReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel: {
            value: cdktn.stringToHclTerraform(struct!.channel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        queue_arn: {
            value: cdktn.stringToHclTerraform(struct!.queueArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileRoutingProfileQueueConfigPropertyToTerraform(struct?: CcRoutingProfile.RoutingProfileQueueConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delay: cdktn.numberToTerraform(struct!.delay),
        priority: cdktn.numberToTerraform(struct!.priority),
        queue_reference: ccRoutingProfileQueueReferencePropertyToTerraform(struct!.queueReference),
    }
}


export function ccRoutingProfileRoutingProfileQueueConfigPropertyToHclTerraform(struct?: CcRoutingProfile.RoutingProfileQueueConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delay: {
            value: cdktn.numberToHclTerraform(struct!.delay),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        queue_reference: {
            value: ccRoutingProfileQueueReferencePropertyToHclTerraform(struct!.queueReference),
            isBlock: true,
            type: "struct",
            storageClassType: "QueueReferenceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRoutingProfileTagPropertyToTerraform(struct?: CcRoutingProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRoutingProfileTagPropertyToHclTerraform(struct?: CcRoutingProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRoutingProfile {
export interface RoutingProfileQueueReferenceProperty {
    /**
    * The channels that agents can handle in the Contact Control Panel (CCP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#channel CcRoutingProfile#channel}
    */
    readonly channel?: string;
    /**
    * The Amazon Resource Name (ARN) for the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#queue_arn CcRoutingProfile#queue_arn}
    */
    readonly queueArn?: string;
}
export class RoutingProfileQueueReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingProfileQueueReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channel !== undefined) {
            hasAnyValues = true;
            internalValueResult.channel = this._channel;
        }
        if (this._queueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueArn = this._queueArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingProfileQueueReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channel = undefined;
            this._queueArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channel = value.channel;
            this._queueArn = value.queueArn;
        }
    }

    // channel - computed: true, optional: true, required: false
    private _channel?: string; 
    public get channel() {
        return this.getStringAttribute('channel');
    }
    public set channel(value: string) {
        this._channel = value;
    }
    public resetChannel() {
        this._channel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelInput() {
        return this._channel;
    }

    // queue_arn - computed: true, optional: true, required: false
    private _queueArn?: string; 
    public get queueArn() {
        return this.getStringAttribute('queue_arn');
    }
    public set queueArn(value: string) {
        this._queueArn = value;
    }
    public resetQueueArn() {
        this._queueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueArnInput() {
        return this._queueArn;
    }
}
export interface RoutingProfileManualAssignmentQueueConfigProperty {
    /**
    * Contains the channel and queue identifier for a routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#queue_reference CcRoutingProfile#queue_reference}
    */
    readonly queueReference?: RoutingProfileQueueReferenceProperty;
}
export class RoutingProfileManualAssignmentQueueConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoutingProfileManualAssignmentQueueConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queueReference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueReference = this._queueReference?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingProfileManualAssignmentQueueConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queueReference.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queueReference.internalValue = value.queueReference;
        }
    }

    // queue_reference - computed: true, optional: true, required: false
    private _queueReference = new RoutingProfileQueueReferencePropertyOutputReference(this, "queue_reference");
    public get queueReference() {
        return this._queueReference;
    }
    public putQueueReference(value: RoutingProfileQueueReferenceProperty) {
        this._queueReference.internalValue = value;
    }
    public resetQueueReference() {
        this._queueReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueReferenceInput() {
        return this._queueReference.internalValue;
    }
}

export class RoutingProfileManualAssignmentQueueConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : RoutingProfileManualAssignmentQueueConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): RoutingProfileManualAssignmentQueueConfigPropertyOutputReference {
        return new RoutingProfileManualAssignmentQueueConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CrossChannelBehaviorProperty {
    /**
    * Specifies the other channels that can be routed to an agent handling their current channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#behavior_type CcRoutingProfile#behavior_type}
    */
    readonly behaviorType?: string;
}
export class CrossChannelBehaviorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CrossChannelBehaviorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behaviorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.behaviorType = this._behaviorType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CrossChannelBehaviorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behaviorType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behaviorType = value.behaviorType;
        }
    }

    // behavior_type - computed: true, optional: true, required: false
    private _behaviorType?: string; 
    public get behaviorType() {
        return this.getStringAttribute('behavior_type');
    }
    public set behaviorType(value: string) {
        this._behaviorType = value;
    }
    public resetBehaviorType() {
        this._behaviorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorTypeInput() {
        return this._behaviorType;
    }
}
export interface MediaConcurrencyProperty {
    /**
    * The channels that agents can handle in the Contact Control Panel (CCP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#channel CcRoutingProfile#channel}
    */
    readonly channel: string;
    /**
    * The number of contacts an agent can have on a channel simultaneously.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#concurrency CcRoutingProfile#concurrency}
    */
    readonly concurrency: number;
    /**
    * Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#cross_channel_behavior CcRoutingProfile#cross_channel_behavior}
    */
    readonly crossChannelBehavior?: CrossChannelBehaviorProperty;
}
export class MediaConcurrencyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MediaConcurrencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channel !== undefined) {
            hasAnyValues = true;
            internalValueResult.channel = this._channel;
        }
        if (this._concurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrency = this._concurrency;
        }
        if (this._crossChannelBehavior?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.crossChannelBehavior = this._crossChannelBehavior?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaConcurrencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channel = undefined;
            this._concurrency = undefined;
            this._crossChannelBehavior.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channel = value.channel;
            this._concurrency = value.concurrency;
            this._crossChannelBehavior.internalValue = value.crossChannelBehavior;
        }
    }

    // channel - computed: false, optional: false, required: true
    private _channel?: string; 
    public get channel() {
        return this.getStringAttribute('channel');
    }
    public set channel(value: string) {
        this._channel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelInput() {
        return this._channel;
    }

    // concurrency - computed: false, optional: false, required: true
    private _concurrency?: number; 
    public get concurrency() {
        return this.getNumberAttribute('concurrency');
    }
    public set concurrency(value: number) {
        this._concurrency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrencyInput() {
        return this._concurrency;
    }

    // cross_channel_behavior - computed: true, optional: true, required: false
    private _crossChannelBehavior = new CrossChannelBehaviorPropertyOutputReference(this, "cross_channel_behavior");
    public get crossChannelBehavior() {
        return this._crossChannelBehavior;
    }
    public putCrossChannelBehavior(value: CrossChannelBehaviorProperty) {
        this._crossChannelBehavior.internalValue = value;
    }
    public resetCrossChannelBehavior() {
        this._crossChannelBehavior.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crossChannelBehaviorInput() {
        return this._crossChannelBehavior.internalValue;
    }
}

export class MediaConcurrencyPropertyList extends cdktn.ComplexList {
    public internalValue? : MediaConcurrencyProperty[] | cdktn.IResolvable

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
    public get(index: number): MediaConcurrencyPropertyOutputReference {
        return new MediaConcurrencyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueueReferenceProperty {
    /**
    * The channels that agents can handle in the Contact Control Panel (CCP).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#channel CcRoutingProfile#channel}
    */
    readonly channel?: string;
    /**
    * The Amazon Resource Name (ARN) for the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#queue_arn CcRoutingProfile#queue_arn}
    */
    readonly queueArn?: string;
}
export class QueueReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueueReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channel !== undefined) {
            hasAnyValues = true;
            internalValueResult.channel = this._channel;
        }
        if (this._queueArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueArn = this._queueArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueueReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channel = undefined;
            this._queueArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channel = value.channel;
            this._queueArn = value.queueArn;
        }
    }

    // channel - computed: true, optional: true, required: false
    private _channel?: string; 
    public get channel() {
        return this.getStringAttribute('channel');
    }
    public set channel(value: string) {
        this._channel = value;
    }
    public resetChannel() {
        this._channel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelInput() {
        return this._channel;
    }

    // queue_arn - computed: true, optional: true, required: false
    private _queueArn?: string; 
    public get queueArn() {
        return this.getStringAttribute('queue_arn');
    }
    public set queueArn(value: string) {
        this._queueArn = value;
    }
    public resetQueueArn() {
        this._queueArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueArnInput() {
        return this._queueArn;
    }
}
export interface RoutingProfileQueueConfigProperty {
    /**
    * The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#delay CcRoutingProfile#delay}
    */
    readonly delay?: number;
    /**
    * The order in which contacts are to be handled for the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#priority CcRoutingProfile#priority}
    */
    readonly priority?: number;
    /**
    * Contains the channel and queue identifier for a routing profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#queue_reference CcRoutingProfile#queue_reference}
    */
    readonly queueReference?: QueueReferenceProperty;
}
export class RoutingProfileQueueConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoutingProfileQueueConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delay !== undefined) {
            hasAnyValues = true;
            internalValueResult.delay = this._delay;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._queueReference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueReference = this._queueReference?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingProfileQueueConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delay = undefined;
            this._priority = undefined;
            this._queueReference.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delay = value.delay;
            this._priority = value.priority;
            this._queueReference.internalValue = value.queueReference;
        }
    }

    // delay - computed: true, optional: true, required: false
    private _delay?: number; 
    public get delay() {
        return this.getNumberAttribute('delay');
    }
    public set delay(value: number) {
        this._delay = value;
    }
    public resetDelay() {
        this._delay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delayInput() {
        return this._delay;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // queue_reference - computed: true, optional: true, required: false
    private _queueReference = new QueueReferencePropertyOutputReference(this, "queue_reference");
    public get queueReference() {
        return this._queueReference;
    }
    public putQueueReference(value: QueueReferenceProperty) {
        this._queueReference.internalValue = value;
    }
    public resetQueueReference() {
        this._queueReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueReferenceInput() {
        return this._queueReference.internalValue;
    }
}

export class RoutingProfileQueueConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : RoutingProfileQueueConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): RoutingProfileQueueConfigPropertyOutputReference {
        return new RoutingProfileQueueConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#key CcRoutingProfile#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_routing_profile#value CcRoutingProfile#value}
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
