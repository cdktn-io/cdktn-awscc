// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGameSessionQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * Information that is added to all events that are related to this game session queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#custom_event_data CcGameSessionQueue#custom_event_data}
    */
    readonly customEventData?: string;
    /**
    * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#destinations CcGameSessionQueue#destinations}
    */
    readonly destinations?: CcGameSessionQueue.GameSessionQueueDestinationProperty[] | cdktn.IResolvable;
    /**
    * A list of locations where a queue is allowed to place new game sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#filter_configuration CcGameSessionQueue#filter_configuration}
    */
    readonly filterConfiguration?: CcGameSessionQueue.FilterConfigurationProperty;
    /**
    * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#name CcGameSessionQueue#name}
    */
    readonly name: string;
    /**
    * An SNS topic ARN that is set up to receive game session placement notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#notification_target CcGameSessionQueue#notification_target}
    */
    readonly notificationTarget?: string;
    /**
    * A set of policies that act as a sliding cap on player latency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#player_latency_policies CcGameSessionQueue#player_latency_policies}
    */
    readonly playerLatencyPolicies?: CcGameSessionQueue.PlayerLatencyPolicyProperty[] | cdktn.IResolvable;
    /**
    * Custom settings to use when prioritizing destinations and locations for game session placements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#priority_configuration CcGameSessionQueue#priority_configuration}
    */
    readonly priorityConfiguration?: CcGameSessionQueue.PriorityConfigurationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#tags CcGameSessionQueue#tags}
    */
    readonly tags?: CcGameSessionQueue.TagProperty[] | cdktn.IResolvable;
    /**
    * The maximum time, in seconds, that a new game session placement request remains in the queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#timeout_in_seconds CcGameSessionQueue#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}
*/
export class CcGameSessionQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_gamelift_game_session_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGameSessionQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGameSessionQueue to import
    * @param importFromId The id of the existing CcGameSessionQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGameSessionQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_game_session_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGameSessionQueueProps
    */
    public constructor(scope: Construct, id: string, config: CcGameSessionQueueProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_gamelift_game_session_queue',
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
        this._customEventData = config.customEventData;
        this._destinations.internalValue = config.destinations;
        this._filterConfiguration.internalValue = config.filterConfiguration;
        this._name = config.name;
        this._notificationTarget = config.notificationTarget;
        this._playerLatencyPolicies.internalValue = config.playerLatencyPolicies;
        this._priorityConfiguration.internalValue = config.priorityConfiguration;
        this._tags.internalValue = config.tags;
        this._timeoutInSeconds = config.timeoutInSeconds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // custom_event_data - computed: true, optional: true, required: false
    private _customEventData?: string; 
    public get customEventData() {
        return this.getStringAttribute('custom_event_data');
    }
    public set customEventData(value: string) {
        this._customEventData = value;
    }
    public resetCustomEventData() {
        this._customEventData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEventDataInput() {
        return this._customEventData;
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new CcGameSessionQueue.GameSessionQueueDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: CcGameSessionQueue.GameSessionQueueDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new CcGameSessionQueue.FilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: CcGameSessionQueue.FilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
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

    // notification_target - computed: true, optional: true, required: false
    private _notificationTarget?: string; 
    public get notificationTarget() {
        return this.getStringAttribute('notification_target');
    }
    public set notificationTarget(value: string) {
        this._notificationTarget = value;
    }
    public resetNotificationTarget() {
        this._notificationTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTargetInput() {
        return this._notificationTarget;
    }

    // player_latency_policies - computed: true, optional: true, required: false
    private _playerLatencyPolicies = new CcGameSessionQueue.PlayerLatencyPolicyPropertyList(this, "player_latency_policies", false);
    public get playerLatencyPolicies() {
        return this._playerLatencyPolicies;
    }
    public putPlayerLatencyPolicies(value: CcGameSessionQueue.PlayerLatencyPolicyProperty[] | cdktn.IResolvable) {
        this._playerLatencyPolicies.internalValue = value;
    }
    public resetPlayerLatencyPolicies() {
        this._playerLatencyPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playerLatencyPoliciesInput() {
        return this._playerLatencyPolicies.internalValue;
    }

    // priority_configuration - computed: true, optional: true, required: false
    private _priorityConfiguration = new CcGameSessionQueue.PriorityConfigurationPropertyOutputReference(this, "priority_configuration");
    public get priorityConfiguration() {
        return this._priorityConfiguration;
    }
    public putPriorityConfiguration(value: CcGameSessionQueue.PriorityConfigurationProperty) {
        this._priorityConfiguration.internalValue = value;
    }
    public resetPriorityConfiguration() {
        this._priorityConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityConfigurationInput() {
        return this._priorityConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGameSessionQueue.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGameSessionQueue.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timeout_in_seconds - computed: true, optional: true, required: false
    private _timeoutInSeconds?: number; 
    public get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number) {
        this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            custom_event_data: cdktn.stringToTerraform(this._customEventData),
            destinations: cdktn.listMapper(ccGameSessionQueueGameSessionQueueDestinationPropertyToTerraform, false)(this._destinations.internalValue),
            filter_configuration: ccGameSessionQueueFilterConfigurationPropertyToTerraform(this._filterConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            notification_target: cdktn.stringToTerraform(this._notificationTarget),
            player_latency_policies: cdktn.listMapper(ccGameSessionQueuePlayerLatencyPolicyPropertyToTerraform, false)(this._playerLatencyPolicies.internalValue),
            priority_configuration: ccGameSessionQueuePriorityConfigurationPropertyToTerraform(this._priorityConfiguration.internalValue),
            tags: cdktn.listMapper(ccGameSessionQueueTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout_in_seconds: cdktn.numberToTerraform(this._timeoutInSeconds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            custom_event_data: {
                value: cdktn.stringToHclTerraform(this._customEventData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destinations: {
                value: cdktn.listMapperHcl(ccGameSessionQueueGameSessionQueueDestinationPropertyToHclTerraform, false)(this._destinations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGameSessionQueue.GameSessionQueueDestinationPropertyList",
            },
            filter_configuration: {
                value: ccGameSessionQueueFilterConfigurationPropertyToHclTerraform(this._filterConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGameSessionQueue.FilterConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_target: {
                value: cdktn.stringToHclTerraform(this._notificationTarget),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            player_latency_policies: {
                value: cdktn.listMapperHcl(ccGameSessionQueuePlayerLatencyPolicyPropertyToHclTerraform, false)(this._playerLatencyPolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGameSessionQueue.PlayerLatencyPolicyPropertyList",
            },
            priority_configuration: {
                value: ccGameSessionQueuePriorityConfigurationPropertyToHclTerraform(this._priorityConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGameSessionQueue.PriorityConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGameSessionQueueTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGameSessionQueue.TagPropertyList",
            },
            timeout_in_seconds: {
                value: cdktn.numberToHclTerraform(this._timeoutInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGameSessionQueueGameSessionQueueDestinationPropertyToTerraform(struct?: CcGameSessionQueue.GameSessionQueueDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    }
}


export function ccGameSessionQueueGameSessionQueueDestinationPropertyToHclTerraform(struct?: CcGameSessionQueue.GameSessionQueueDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGameSessionQueueFilterConfigurationPropertyToTerraform(struct?: CcGameSessionQueue.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedLocations),
    }
}


export function ccGameSessionQueueFilterConfigurationPropertyToHclTerraform(struct?: CcGameSessionQueue.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_locations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedLocations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGameSessionQueuePlayerLatencyPolicyPropertyToTerraform(struct?: CcGameSessionQueue.PlayerLatencyPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_individual_player_latency_milliseconds: cdktn.numberToTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
        policy_duration_seconds: cdktn.numberToTerraform(struct!.policyDurationSeconds),
    }
}


export function ccGameSessionQueuePlayerLatencyPolicyPropertyToHclTerraform(struct?: CcGameSessionQueue.PlayerLatencyPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_individual_player_latency_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        policy_duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.policyDurationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGameSessionQueuePriorityConfigurationPropertyToTerraform(struct?: CcGameSessionQueue.PriorityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location_order: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locationOrder),
        priority_order: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.priorityOrder),
    }
}


export function ccGameSessionQueuePriorityConfigurationPropertyToHclTerraform(struct?: CcGameSessionQueue.PriorityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        location_order: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locationOrder),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        priority_order: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.priorityOrder),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGameSessionQueueTagPropertyToTerraform(struct?: CcGameSessionQueue.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGameSessionQueueTagPropertyToHclTerraform(struct?: CcGameSessionQueue.TagProperty | cdktn.IResolvable): any {
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


export namespace CcGameSessionQueue {
export interface GameSessionQueueDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#destination_arn CcGameSessionQueue#destination_arn}
    */
    readonly destinationArn?: string;
}
export class GameSessionQueueDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GameSessionQueueDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GameSessionQueueDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationArn = value.destinationArn;
        }
    }

    // destination_arn - computed: true, optional: true, required: false
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    public resetDestinationArn() {
        this._destinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }
}

export class GameSessionQueueDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : GameSessionQueueDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): GameSessionQueueDestinationPropertyOutputReference {
        return new GameSessionQueueDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterConfigurationProperty {
    /**
    * A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#allowed_locations CcGameSessionQueue#allowed_locations}
    */
    readonly allowedLocations?: string[];
}
export class FilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedLocations !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedLocations = this._allowedLocations;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedLocations = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedLocations = value.allowedLocations;
        }
    }

    // allowed_locations - computed: true, optional: true, required: false
    private _allowedLocations?: string[]; 
    public get allowedLocations() {
        return this.getListAttribute('allowed_locations');
    }
    public set allowedLocations(value: string[]) {
        this._allowedLocations = value;
    }
    public resetAllowedLocations() {
        this._allowedLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedLocationsInput() {
        return this._allowedLocations;
    }
}
export interface PlayerLatencyPolicyProperty {
    /**
    * The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds CcGameSessionQueue#maximum_individual_player_latency_milliseconds}
    */
    readonly maximumIndividualPlayerLatencyMilliseconds?: number;
    /**
    * The length of time, in seconds, that the policy is enforced while placing a new game session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#policy_duration_seconds CcGameSessionQueue#policy_duration_seconds}
    */
    readonly policyDurationSeconds?: number;
}
export class PlayerLatencyPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlayerLatencyPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumIndividualPlayerLatencyMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumIndividualPlayerLatencyMilliseconds = this._maximumIndividualPlayerLatencyMilliseconds;
        }
        if (this._policyDurationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDurationSeconds = this._policyDurationSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlayerLatencyPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumIndividualPlayerLatencyMilliseconds = undefined;
            this._policyDurationSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumIndividualPlayerLatencyMilliseconds = value.maximumIndividualPlayerLatencyMilliseconds;
            this._policyDurationSeconds = value.policyDurationSeconds;
        }
    }

    // maximum_individual_player_latency_milliseconds - computed: true, optional: true, required: false
    private _maximumIndividualPlayerLatencyMilliseconds?: number; 
    public get maximumIndividualPlayerLatencyMilliseconds() {
        return this.getNumberAttribute('maximum_individual_player_latency_milliseconds');
    }
    public set maximumIndividualPlayerLatencyMilliseconds(value: number) {
        this._maximumIndividualPlayerLatencyMilliseconds = value;
    }
    public resetMaximumIndividualPlayerLatencyMilliseconds() {
        this._maximumIndividualPlayerLatencyMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumIndividualPlayerLatencyMillisecondsInput() {
        return this._maximumIndividualPlayerLatencyMilliseconds;
    }

    // policy_duration_seconds - computed: true, optional: true, required: false
    private _policyDurationSeconds?: number; 
    public get policyDurationSeconds() {
        return this.getNumberAttribute('policy_duration_seconds');
    }
    public set policyDurationSeconds(value: number) {
        this._policyDurationSeconds = value;
    }
    public resetPolicyDurationSeconds() {
        this._policyDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDurationSecondsInput() {
        return this._policyDurationSeconds;
    }
}

export class PlayerLatencyPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : PlayerLatencyPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): PlayerLatencyPolicyPropertyOutputReference {
        return new PlayerLatencyPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PriorityConfigurationProperty {
    /**
    * The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#location_order CcGameSessionQueue#location_order}
    */
    readonly locationOrder?: string[];
    /**
    * The recommended sequence to use when prioritizing where to place new game sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#priority_order CcGameSessionQueue#priority_order}
    */
    readonly priorityOrder?: string[];
}
export class PriorityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PriorityConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._locationOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationOrder = this._locationOrder;
        }
        if (this._priorityOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.priorityOrder = this._priorityOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PriorityConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._locationOrder = undefined;
            this._priorityOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._locationOrder = value.locationOrder;
            this._priorityOrder = value.priorityOrder;
        }
    }

    // location_order - computed: true, optional: true, required: false
    private _locationOrder?: string[]; 
    public get locationOrder() {
        return this.getListAttribute('location_order');
    }
    public set locationOrder(value: string[]) {
        this._locationOrder = value;
    }
    public resetLocationOrder() {
        this._locationOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationOrderInput() {
        return this._locationOrder;
    }

    // priority_order - computed: true, optional: true, required: false
    private _priorityOrder?: string[]; 
    public get priorityOrder() {
        return this.getListAttribute('priority_order');
    }
    public set priorityOrder(value: string[]) {
        this._priorityOrder = value;
    }
    public resetPriorityOrder() {
        this._priorityOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityOrderInput() {
        return this._priorityOrder;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#key CcGameSessionQueue#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/gamelift_game_session_queue#value CcGameSessionQueue#value}
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
