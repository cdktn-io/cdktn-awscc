// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProfilingGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The agent permissions attached to this profiling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#agent_permissions CcProfilingGroup#agent_permissions}
    */
    readonly agentPermissions?: CcProfilingGroup.AgentPermissionsProperty;
    /**
    * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CcProfilingGroup#anomaly_detection_notification_configuration}
    */
    readonly anomalyDetectionNotificationConfiguration?: CcProfilingGroup.ChannelProperty[] | cdktn.IResolvable;
    /**
    * The compute platform of the profiling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#compute_platform CcProfilingGroup#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * The name of the profiling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CcProfilingGroup#profiling_group_name}
    */
    readonly profilingGroupName: string;
    /**
    * The tags associated with a profiling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#tags CcProfilingGroup#tags}
    */
    readonly tags?: CcProfilingGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}
*/
export class CcProfilingGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codeguruprofiler_profiling_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProfilingGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProfilingGroup to import
    * @param importFromId The id of the existing CcProfilingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProfilingGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codeguruprofiler_profiling_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProfilingGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcProfilingGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codeguruprofiler_profiling_group',
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
        this._agentPermissions.internalValue = config.agentPermissions;
        this._anomalyDetectionNotificationConfiguration.internalValue = config.anomalyDetectionNotificationConfiguration;
        this._computePlatform = config.computePlatform;
        this._profilingGroupName = config.profilingGroupName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_permissions - computed: true, optional: true, required: false
    private _agentPermissions = new CcProfilingGroup.AgentPermissionsPropertyOutputReference(this, "agent_permissions");
    public get agentPermissions() {
        return this._agentPermissions;
    }
    public putAgentPermissions(value: CcProfilingGroup.AgentPermissionsProperty) {
        this._agentPermissions.internalValue = value;
    }
    public resetAgentPermissions() {
        this._agentPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentPermissionsInput() {
        return this._agentPermissions.internalValue;
    }

    // anomaly_detection_notification_configuration - computed: true, optional: true, required: false
    private _anomalyDetectionNotificationConfiguration = new CcProfilingGroup.ChannelPropertyList(this, "anomaly_detection_notification_configuration", false);
    public get anomalyDetectionNotificationConfiguration() {
        return this._anomalyDetectionNotificationConfiguration;
    }
    public putAnomalyDetectionNotificationConfiguration(value: CcProfilingGroup.ChannelProperty[] | cdktn.IResolvable) {
        this._anomalyDetectionNotificationConfiguration.internalValue = value;
    }
    public resetAnomalyDetectionNotificationConfiguration() {
        this._anomalyDetectionNotificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectionNotificationConfigurationInput() {
        return this._anomalyDetectionNotificationConfiguration.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // compute_platform - computed: true, optional: true, required: false
    private _computePlatform?: string; 
    public get computePlatform() {
        return this.getStringAttribute('compute_platform');
    }
    public set computePlatform(value: string) {
        this._computePlatform = value;
    }
    public resetComputePlatform() {
        this._computePlatform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computePlatformInput() {
        return this._computePlatform;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // profiling_group_name - computed: false, optional: false, required: true
    private _profilingGroupName?: string; 
    public get profilingGroupName() {
        return this.getStringAttribute('profiling_group_name');
    }
    public set profilingGroupName(value: string) {
        this._profilingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profilingGroupNameInput() {
        return this._profilingGroupName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProfilingGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProfilingGroup.TagProperty[] | cdktn.IResolvable) {
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
            agent_permissions: ccProfilingGroupAgentPermissionsPropertyToTerraform(this._agentPermissions.internalValue),
            anomaly_detection_notification_configuration: cdktn.listMapper(ccProfilingGroupChannelPropertyToTerraform, false)(this._anomalyDetectionNotificationConfiguration.internalValue),
            compute_platform: cdktn.stringToTerraform(this._computePlatform),
            profiling_group_name: cdktn.stringToTerraform(this._profilingGroupName),
            tags: cdktn.listMapper(ccProfilingGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_permissions: {
                value: ccProfilingGroupAgentPermissionsPropertyToHclTerraform(this._agentPermissions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProfilingGroup.AgentPermissionsProperty",
            },
            anomaly_detection_notification_configuration: {
                value: cdktn.listMapperHcl(ccProfilingGroupChannelPropertyToHclTerraform, false)(this._anomalyDetectionNotificationConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfilingGroup.ChannelPropertyList",
            },
            compute_platform: {
                value: cdktn.stringToHclTerraform(this._computePlatform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profiling_group_name: {
                value: cdktn.stringToHclTerraform(this._profilingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProfilingGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfilingGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProfilingGroupAgentPermissionsPropertyToTerraform(struct?: CcProfilingGroup.AgentPermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.principals),
    }
}


export function ccProfilingGroupAgentPermissionsPropertyToHclTerraform(struct?: CcProfilingGroup.AgentPermissionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        principals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.principals),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProfilingGroupChannelPropertyToTerraform(struct?: CcProfilingGroup.ChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_id: cdktn.stringToTerraform(struct!.channelId),
        channel_uri: cdktn.stringToTerraform(struct!.channelUri),
    }
}


export function ccProfilingGroupChannelPropertyToHclTerraform(struct?: CcProfilingGroup.ChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_id: {
            value: cdktn.stringToHclTerraform(struct!.channelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        channel_uri: {
            value: cdktn.stringToHclTerraform(struct!.channelUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProfilingGroupTagPropertyToTerraform(struct?: CcProfilingGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProfilingGroupTagPropertyToHclTerraform(struct?: CcProfilingGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProfilingGroup {
export interface AgentPermissionsProperty {
    /**
    * The principals for the agent permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#principals CcProfilingGroup#principals}
    */
    readonly principals?: string[];
}
export class AgentPermissionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentPermissionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._principals !== undefined) {
            hasAnyValues = true;
            internalValueResult.principals = this._principals;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentPermissionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._principals = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._principals = value.principals;
        }
    }

    // principals - computed: true, optional: true, required: false
    private _principals?: string[]; 
    public get principals() {
        return this.getListAttribute('principals');
    }
    public set principals(value: string[]) {
        this._principals = value;
    }
    public resetPrincipals() {
        this._principals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalsInput() {
        return this._principals;
    }
}
export interface ChannelProperty {
    /**
    * Unique identifier for each Channel in the notification configuration of a Profiling Group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#channel_id CcProfilingGroup#channel_id}
    */
    readonly channelId?: string;
    /**
    * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#channel_uri CcProfilingGroup#channel_uri}
    */
    readonly channelUri?: string;
}
export class ChannelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ChannelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelId = this._channelId;
        }
        if (this._channelUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelUri = this._channelUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelId = undefined;
            this._channelUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelId = value.channelId;
            this._channelUri = value.channelUri;
        }
    }

    // channel_id - computed: true, optional: true, required: false
    private _channelId?: string; 
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }
    public set channelId(value: string) {
        this._channelId = value;
    }
    public resetChannelId() {
        this._channelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelIdInput() {
        return this._channelId;
    }

    // channel_uri - computed: true, optional: true, required: false
    private _channelUri?: string; 
    public get channelUri() {
        return this.getStringAttribute('channel_uri');
    }
    public set channelUri(value: string) {
        this._channelUri = value;
    }
    public resetChannelUri() {
        this._channelUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelUriInput() {
        return this._channelUri;
    }
}

export class ChannelPropertyList extends cdktn.ComplexList {
    public internalValue? : ChannelProperty[] | cdktn.IResolvable

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
    public get(index: number): ChannelPropertyOutputReference {
        return new ChannelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#key CcProfilingGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeguruprofiler_profiling_group#value CcProfilingGroup#value}
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
