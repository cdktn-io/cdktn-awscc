// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMatchmakingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required CcMatchmakingConfiguration#acceptance_required}
    */
    readonly acceptanceRequired: boolean | cdktn.IResolvable;
    /**
    * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds CcMatchmakingConfiguration#acceptance_timeout_seconds}
    */
    readonly acceptanceTimeoutSeconds?: number;
    /**
    * The number of player slots in a match to keep open for future players.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count CcMatchmakingConfiguration#additional_player_count}
    */
    readonly additionalPlayerCount?: number;
    /**
    * The method used to backfill game sessions created with this matchmaking configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode CcMatchmakingConfiguration#backfill_mode}
    */
    readonly backfillMode?: string;
    /**
    * A time stamp indicating when this data object was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#creation_time CcMatchmakingConfiguration#creation_time}
    */
    readonly creationTime?: string;
    /**
    * Information to attach to all events related to the matchmaking configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data CcMatchmakingConfiguration#custom_event_data}
    */
    readonly customEventData?: string;
    /**
    * A descriptive label that is associated with matchmaking configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#description CcMatchmakingConfiguration#description}
    */
    readonly description?: string;
    /**
    * Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode CcMatchmakingConfiguration#flex_match_mode}
    */
    readonly flexMatchMode?: string;
    /**
    * A set of custom properties for a game session, formatted as key:value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_properties CcMatchmakingConfiguration#game_properties}
    */
    readonly gameProperties?: CcMatchmakingConfiguration.GamePropertyProperty[] | cdktn.IResolvable;
    /**
    * A set of custom game session properties, formatted as a single string value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_data CcMatchmakingConfiguration#game_session_data}
    */
    readonly gameSessionData?: string;
    /**
    * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns CcMatchmakingConfiguration#game_session_queue_arns}
    */
    readonly gameSessionQueueArns?: string[];
    /**
    * A unique identifier for the matchmaking configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#name CcMatchmakingConfiguration#name}
    */
    readonly name: string;
    /**
    * An SNS topic ARN that is set up to receive matchmaking notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#notification_target CcMatchmakingConfiguration#notification_target}
    */
    readonly notificationTarget?: string;
    /**
    * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds CcMatchmakingConfiguration#request_timeout_seconds}
    */
    readonly requestTimeoutSeconds: number;
    /**
    * The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn CcMatchmakingConfiguration#rule_set_arn}
    */
    readonly ruleSetArn?: string;
    /**
    * A unique identifier for the matchmaking rule set to use with this configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name CcMatchmakingConfiguration#rule_set_name}
    */
    readonly ruleSetName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#tags CcMatchmakingConfiguration#tags}
    */
    readonly tags?: CcMatchmakingConfiguration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}
*/
export class CcMatchmakingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_gamelift_matchmaking_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMatchmakingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMatchmakingConfiguration to import
    * @param importFromId The id of the existing CcMatchmakingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMatchmakingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_matchmaking_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMatchmakingConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcMatchmakingConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_gamelift_matchmaking_configuration',
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
        this._acceptanceRequired = config.acceptanceRequired;
        this._acceptanceTimeoutSeconds = config.acceptanceTimeoutSeconds;
        this._additionalPlayerCount = config.additionalPlayerCount;
        this._backfillMode = config.backfillMode;
        this._creationTime = config.creationTime;
        this._customEventData = config.customEventData;
        this._description = config.description;
        this._flexMatchMode = config.flexMatchMode;
        this._gameProperties.internalValue = config.gameProperties;
        this._gameSessionData = config.gameSessionData;
        this._gameSessionQueueArns = config.gameSessionQueueArns;
        this._name = config.name;
        this._notificationTarget = config.notificationTarget;
        this._requestTimeoutSeconds = config.requestTimeoutSeconds;
        this._ruleSetArn = config.ruleSetArn;
        this._ruleSetName = config.ruleSetName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acceptance_required - computed: false, optional: false, required: true
    private _acceptanceRequired?: boolean | cdktn.IResolvable; 
    public get acceptanceRequired() {
        return this.getBooleanAttribute('acceptance_required');
    }
    public set acceptanceRequired(value: boolean | cdktn.IResolvable) {
        this._acceptanceRequired = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptanceRequiredInput() {
        return this._acceptanceRequired;
    }

    // acceptance_timeout_seconds - computed: true, optional: true, required: false
    private _acceptanceTimeoutSeconds?: number; 
    public get acceptanceTimeoutSeconds() {
        return this.getNumberAttribute('acceptance_timeout_seconds');
    }
    public set acceptanceTimeoutSeconds(value: number) {
        this._acceptanceTimeoutSeconds = value;
    }
    public resetAcceptanceTimeoutSeconds() {
        this._acceptanceTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptanceTimeoutSecondsInput() {
        return this._acceptanceTimeoutSeconds;
    }

    // additional_player_count - computed: true, optional: true, required: false
    private _additionalPlayerCount?: number; 
    public get additionalPlayerCount() {
        return this.getNumberAttribute('additional_player_count');
    }
    public set additionalPlayerCount(value: number) {
        this._additionalPlayerCount = value;
    }
    public resetAdditionalPlayerCount() {
        this._additionalPlayerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalPlayerCountInput() {
        return this._additionalPlayerCount;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // backfill_mode - computed: true, optional: true, required: false
    private _backfillMode?: string; 
    public get backfillMode() {
        return this.getStringAttribute('backfill_mode');
    }
    public set backfillMode(value: string) {
        this._backfillMode = value;
    }
    public resetBackfillMode() {
        this._backfillMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backfillModeInput() {
        return this._backfillMode;
    }

    // creation_time - computed: true, optional: true, required: false
    private _creationTime?: string; 
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    public set creationTime(value: string) {
        this._creationTime = value;
    }
    public resetCreationTime() {
        this._creationTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationTimeInput() {
        return this._creationTime;
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

    // flex_match_mode - computed: true, optional: true, required: false
    private _flexMatchMode?: string; 
    public get flexMatchMode() {
        return this.getStringAttribute('flex_match_mode');
    }
    public set flexMatchMode(value: string) {
        this._flexMatchMode = value;
    }
    public resetFlexMatchMode() {
        this._flexMatchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flexMatchModeInput() {
        return this._flexMatchMode;
    }

    // game_properties - computed: true, optional: true, required: false
    private _gameProperties = new CcMatchmakingConfiguration.GamePropertyPropertyList(this, "game_properties", true);
    public get gameProperties() {
        return this._gameProperties;
    }
    public putGameProperties(value: CcMatchmakingConfiguration.GamePropertyProperty[] | cdktn.IResolvable) {
        this._gameProperties.internalValue = value;
    }
    public resetGameProperties() {
        this._gameProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gamePropertiesInput() {
        return this._gameProperties.internalValue;
    }

    // game_session_data - computed: true, optional: true, required: false
    private _gameSessionData?: string; 
    public get gameSessionData() {
        return this.getStringAttribute('game_session_data');
    }
    public set gameSessionData(value: string) {
        this._gameSessionData = value;
    }
    public resetGameSessionData() {
        this._gameSessionData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameSessionDataInput() {
        return this._gameSessionData;
    }

    // game_session_queue_arns - computed: true, optional: true, required: false
    private _gameSessionQueueArns?: string[]; 
    public get gameSessionQueueArns() {
        return this.getListAttribute('game_session_queue_arns');
    }
    public set gameSessionQueueArns(value: string[]) {
        this._gameSessionQueueArns = value;
    }
    public resetGameSessionQueueArns() {
        this._gameSessionQueueArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameSessionQueueArnsInput() {
        return this._gameSessionQueueArns;
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

    // request_timeout_seconds - computed: false, optional: false, required: true
    private _requestTimeoutSeconds?: number; 
    public get requestTimeoutSeconds() {
        return this.getNumberAttribute('request_timeout_seconds');
    }
    public set requestTimeoutSeconds(value: number) {
        this._requestTimeoutSeconds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTimeoutSecondsInput() {
        return this._requestTimeoutSeconds;
    }

    // rule_set_arn - computed: true, optional: true, required: false
    private _ruleSetArn?: string; 
    public get ruleSetArn() {
        return this.getStringAttribute('rule_set_arn');
    }
    public set ruleSetArn(value: string) {
        this._ruleSetArn = value;
    }
    public resetRuleSetArn() {
        this._ruleSetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetArnInput() {
        return this._ruleSetArn;
    }

    // rule_set_name - computed: false, optional: false, required: true
    private _ruleSetName?: string; 
    public get ruleSetName() {
        return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
        this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
        return this._ruleSetName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMatchmakingConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMatchmakingConfiguration.TagProperty[] | cdktn.IResolvable) {
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
            acceptance_required: cdktn.booleanToTerraform(this._acceptanceRequired),
            acceptance_timeout_seconds: cdktn.numberToTerraform(this._acceptanceTimeoutSeconds),
            additional_player_count: cdktn.numberToTerraform(this._additionalPlayerCount),
            backfill_mode: cdktn.stringToTerraform(this._backfillMode),
            creation_time: cdktn.stringToTerraform(this._creationTime),
            custom_event_data: cdktn.stringToTerraform(this._customEventData),
            description: cdktn.stringToTerraform(this._description),
            flex_match_mode: cdktn.stringToTerraform(this._flexMatchMode),
            game_properties: cdktn.listMapper(ccMatchmakingConfigurationGamePropertyPropertyToTerraform, false)(this._gameProperties.internalValue),
            game_session_data: cdktn.stringToTerraform(this._gameSessionData),
            game_session_queue_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._gameSessionQueueArns),
            name: cdktn.stringToTerraform(this._name),
            notification_target: cdktn.stringToTerraform(this._notificationTarget),
            request_timeout_seconds: cdktn.numberToTerraform(this._requestTimeoutSeconds),
            rule_set_arn: cdktn.stringToTerraform(this._ruleSetArn),
            rule_set_name: cdktn.stringToTerraform(this._ruleSetName),
            tags: cdktn.listMapper(ccMatchmakingConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            acceptance_required: {
                value: cdktn.booleanToHclTerraform(this._acceptanceRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            acceptance_timeout_seconds: {
                value: cdktn.numberToHclTerraform(this._acceptanceTimeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            additional_player_count: {
                value: cdktn.numberToHclTerraform(this._additionalPlayerCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            backfill_mode: {
                value: cdktn.stringToHclTerraform(this._backfillMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            creation_time: {
                value: cdktn.stringToHclTerraform(this._creationTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_event_data: {
                value: cdktn.stringToHclTerraform(this._customEventData),
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
            flex_match_mode: {
                value: cdktn.stringToHclTerraform(this._flexMatchMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            game_properties: {
                value: cdktn.listMapperHcl(ccMatchmakingConfigurationGamePropertyPropertyToHclTerraform, false)(this._gameProperties.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcMatchmakingConfiguration.GamePropertyPropertyList",
            },
            game_session_data: {
                value: cdktn.stringToHclTerraform(this._gameSessionData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            game_session_queue_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._gameSessionQueueArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
            request_timeout_seconds: {
                value: cdktn.numberToHclTerraform(this._requestTimeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rule_set_arn: {
                value: cdktn.stringToHclTerraform(this._ruleSetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_set_name: {
                value: cdktn.stringToHclTerraform(this._ruleSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMatchmakingConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcMatchmakingConfiguration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMatchmakingConfigurationGamePropertyPropertyToTerraform(struct?: CcMatchmakingConfiguration.GamePropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMatchmakingConfigurationGamePropertyPropertyToHclTerraform(struct?: CcMatchmakingConfiguration.GamePropertyProperty | cdktn.IResolvable): any {
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


export function ccMatchmakingConfigurationTagPropertyToTerraform(struct?: CcMatchmakingConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMatchmakingConfigurationTagPropertyToHclTerraform(struct?: CcMatchmakingConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMatchmakingConfiguration {
export interface GamePropertyProperty {
    /**
    * The game property identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#key CcMatchmakingConfiguration#key}
    */
    readonly key?: string;
    /**
    * The game property value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#value CcMatchmakingConfiguration#value}
    */
    readonly value?: string;
}
export class GamePropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GamePropertyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: GamePropertyProperty | cdktn.IResolvable | undefined) {
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

export class GamePropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : GamePropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): GamePropertyPropertyOutputReference {
        return new GamePropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#key CcMatchmakingConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_matchmaking_configuration#value CcMatchmakingConfiguration#value}
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
