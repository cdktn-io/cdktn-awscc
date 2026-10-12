// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRcsAgentProps extends cdktn.TerraformMetaArguments {
    /**
    * When set to true the RCS agent can't be deleted. By default this is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled CcRcsAgent#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the opt-out list associated with the RCS agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name CcRcsAgent#opt_out_list_name}
    */
    readonly optOutListName?: string;
    /**
    * When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. By default this is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled CcRcsAgent#self_managed_opt_outs_enabled}
    */
    readonly selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to the RCS agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags CcRcsAgent#tags}
    */
    readonly tags?: CcRcsAgent.TagsProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn CcRcsAgent#two_way_channel_arn}
    */
    readonly twoWayChannelArn?: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role CcRcsAgent#two_way_channel_role}
    */
    readonly twoWayChannelRole?: string;
    /**
    * When set to true two-way messaging is enabled for the RCS agent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled CcRcsAgent#two_way_enabled}
    */
    readonly twoWayEnabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the Amazon S3 bucket where inbound RCS media objects are written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name CcRcsAgent#two_way_media_s3_bucket_name}
    */
    readonly twoWayMediaS3BucketName?: string;
    /**
    * The key prefix used for inbound RCS media objects in the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix CcRcsAgent#two_way_media_s3_key_prefix}
    */
    readonly twoWayMediaS3KeyPrefix?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role CcRcsAgent#two_way_media_s3_role}
    */
    readonly twoWayMediaS3Role?: string;
    /**
    * The list of RCS event types enabled for two-way messaging. An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled CcRcsAgent#two_way_rcs_events_enabled}
    */
    readonly twoWayRcsEventsEnabled?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}
*/
export class CcRcsAgent extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_smsvoice_rcs_agent";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRcsAgent resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRcsAgent to import
    * @param importFromId The id of the existing CcRcsAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRcsAgent to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_rcs_agent", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRcsAgentProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRcsAgentProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_smsvoice_rcs_agent',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._deletionProtectionEnabled = config.deletionProtectionEnabled;
        this._optOutListName = config.optOutListName;
        this._selfManagedOptOutsEnabled = config.selfManagedOptOutsEnabled;
        this._tags.internalValue = config.tags;
        this._twoWayChannelArn = config.twoWayChannelArn;
        this._twoWayChannelRole = config.twoWayChannelRole;
        this._twoWayEnabled = config.twoWayEnabled;
        this._twoWayMediaS3BucketName = config.twoWayMediaS3BucketName;
        this._twoWayMediaS3KeyPrefix = config.twoWayMediaS3KeyPrefix;
        this._twoWayMediaS3Role = config.twoWayMediaS3Role;
        this._twoWayRcsEventsEnabled = config.twoWayRcsEventsEnabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // deletion_protection_enabled - computed: true, optional: true, required: false
    private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get deletionProtectionEnabled() {
        return this.getBooleanAttribute('deletion_protection_enabled');
    }
    public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._deletionProtectionEnabled = value;
    }
    public resetDeletionProtectionEnabled() {
        this._deletionProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionEnabledInput() {
        return this._deletionProtectionEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // opt_out_list_name - computed: true, optional: true, required: false
    private _optOutListName?: string; 
    public get optOutListName() {
        return this.getStringAttribute('opt_out_list_name');
    }
    public set optOutListName(value: string) {
        this._optOutListName = value;
    }
    public resetOptOutListName() {
        this._optOutListName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optOutListNameInput() {
        return this._optOutListName;
    }

    // pool_id - computed: true, optional: false, required: false
    public get poolId() {
        return this.getStringAttribute('pool_id');
    }

    // rcs_agent_arn - computed: true, optional: false, required: false
    public get rcsAgentArn() {
        return this.getStringAttribute('rcs_agent_arn');
    }

    // rcs_agent_id - computed: true, optional: false, required: false
    public get rcsAgentId() {
        return this.getStringAttribute('rcs_agent_id');
    }

    // self_managed_opt_outs_enabled - computed: true, optional: true, required: false
    private _selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable; 
    public get selfManagedOptOutsEnabled() {
        return this.getBooleanAttribute('self_managed_opt_outs_enabled');
    }
    public set selfManagedOptOutsEnabled(value: boolean | cdktn.IResolvable) {
        this._selfManagedOptOutsEnabled = value;
    }
    public resetSelfManagedOptOutsEnabled() {
        this._selfManagedOptOutsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedOptOutsEnabledInput() {
        return this._selfManagedOptOutsEnabled;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRcsAgent.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRcsAgent.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // testing_agent - computed: true, optional: false, required: false
    private _testingAgent = new CcRcsAgent.TestingAgentPropertyOutputReference(this, "testing_agent");
    public get testingAgent() {
        return this._testingAgent;
    }

    // two_way_channel_arn - computed: true, optional: true, required: false
    private _twoWayChannelArn?: string; 
    public get twoWayChannelArn() {
        return this.getStringAttribute('two_way_channel_arn');
    }
    public set twoWayChannelArn(value: string) {
        this._twoWayChannelArn = value;
    }
    public resetTwoWayChannelArn() {
        this._twoWayChannelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayChannelArnInput() {
        return this._twoWayChannelArn;
    }

    // two_way_channel_role - computed: true, optional: true, required: false
    private _twoWayChannelRole?: string; 
    public get twoWayChannelRole() {
        return this.getStringAttribute('two_way_channel_role');
    }
    public set twoWayChannelRole(value: string) {
        this._twoWayChannelRole = value;
    }
    public resetTwoWayChannelRole() {
        this._twoWayChannelRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayChannelRoleInput() {
        return this._twoWayChannelRole;
    }

    // two_way_enabled - computed: true, optional: true, required: false
    private _twoWayEnabled?: boolean | cdktn.IResolvable; 
    public get twoWayEnabled() {
        return this.getBooleanAttribute('two_way_enabled');
    }
    public set twoWayEnabled(value: boolean | cdktn.IResolvable) {
        this._twoWayEnabled = value;
    }
    public resetTwoWayEnabled() {
        this._twoWayEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayEnabledInput() {
        return this._twoWayEnabled;
    }

    // two_way_media_s3_bucket_name - computed: true, optional: true, required: false
    private _twoWayMediaS3BucketName?: string; 
    public get twoWayMediaS3BucketName() {
        return this.getStringAttribute('two_way_media_s3_bucket_name');
    }
    public set twoWayMediaS3BucketName(value: string) {
        this._twoWayMediaS3BucketName = value;
    }
    public resetTwoWayMediaS3BucketName() {
        this._twoWayMediaS3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayMediaS3BucketNameInput() {
        return this._twoWayMediaS3BucketName;
    }

    // two_way_media_s3_key_prefix - computed: true, optional: true, required: false
    private _twoWayMediaS3KeyPrefix?: string; 
    public get twoWayMediaS3KeyPrefix() {
        return this.getStringAttribute('two_way_media_s3_key_prefix');
    }
    public set twoWayMediaS3KeyPrefix(value: string) {
        this._twoWayMediaS3KeyPrefix = value;
    }
    public resetTwoWayMediaS3KeyPrefix() {
        this._twoWayMediaS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayMediaS3KeyPrefixInput() {
        return this._twoWayMediaS3KeyPrefix;
    }

    // two_way_media_s3_role - computed: true, optional: true, required: false
    private _twoWayMediaS3Role?: string; 
    public get twoWayMediaS3Role() {
        return this.getStringAttribute('two_way_media_s3_role');
    }
    public set twoWayMediaS3Role(value: string) {
        this._twoWayMediaS3Role = value;
    }
    public resetTwoWayMediaS3Role() {
        this._twoWayMediaS3Role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayMediaS3RoleInput() {
        return this._twoWayMediaS3Role;
    }

    // two_way_rcs_events_enabled - computed: true, optional: true, required: false
    private _twoWayRcsEventsEnabled?: string[]; 
    public get twoWayRcsEventsEnabled() {
        return this.getListAttribute('two_way_rcs_events_enabled');
    }
    public set twoWayRcsEventsEnabled(value: string[]) {
        this._twoWayRcsEventsEnabled = value;
    }
    public resetTwoWayRcsEventsEnabled() {
        this._twoWayRcsEventsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twoWayRcsEventsEnabledInput() {
        return this._twoWayRcsEventsEnabled;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
            opt_out_list_name: cdktn.stringToTerraform(this._optOutListName),
            self_managed_opt_outs_enabled: cdktn.booleanToTerraform(this._selfManagedOptOutsEnabled),
            tags: cdktn.listMapper(ccRcsAgentTagsPropertyToTerraform, false)(this._tags.internalValue),
            two_way_channel_arn: cdktn.stringToTerraform(this._twoWayChannelArn),
            two_way_channel_role: cdktn.stringToTerraform(this._twoWayChannelRole),
            two_way_enabled: cdktn.booleanToTerraform(this._twoWayEnabled),
            two_way_media_s3_bucket_name: cdktn.stringToTerraform(this._twoWayMediaS3BucketName),
            two_way_media_s3_key_prefix: cdktn.stringToTerraform(this._twoWayMediaS3KeyPrefix),
            two_way_media_s3_role: cdktn.stringToTerraform(this._twoWayMediaS3Role),
            two_way_rcs_events_enabled: cdktn.listMapper(cdktn.stringToTerraform, false)(this._twoWayRcsEventsEnabled),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deletion_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            opt_out_list_name: {
                value: cdktn.stringToHclTerraform(this._optOutListName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            self_managed_opt_outs_enabled: {
                value: cdktn.booleanToHclTerraform(this._selfManagedOptOutsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRcsAgentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRcsAgent.TagsPropertyList",
            },
            two_way_channel_arn: {
                value: cdktn.stringToHclTerraform(this._twoWayChannelArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            two_way_channel_role: {
                value: cdktn.stringToHclTerraform(this._twoWayChannelRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            two_way_enabled: {
                value: cdktn.booleanToHclTerraform(this._twoWayEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            two_way_media_s3_bucket_name: {
                value: cdktn.stringToHclTerraform(this._twoWayMediaS3BucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            two_way_media_s3_key_prefix: {
                value: cdktn.stringToHclTerraform(this._twoWayMediaS3KeyPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            two_way_media_s3_role: {
                value: cdktn.stringToHclTerraform(this._twoWayMediaS3Role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            two_way_rcs_events_enabled: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._twoWayRcsEventsEnabled),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRcsAgentTagsPropertyToTerraform(struct?: CcRcsAgent.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRcsAgentTagsPropertyToHclTerraform(struct?: CcRcsAgent.TagsProperty | cdktn.IResolvable): any {
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


export function ccRcsAgentTestingAgentPropertyToTerraform(struct?: CcRcsAgent.TestingAgentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccRcsAgentTestingAgentPropertyToHclTerraform(struct?: CcRcsAgent.TestingAgentProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcRcsAgent {
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key CcRcsAgent#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value CcRcsAgent#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TestingAgentProperty {
}
export class TestingAgentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TestingAgentProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TestingAgentProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // registration_id - computed: true, optional: false, required: false
    public get registrationId() {
        return this.getStringAttribute('registration_id');
    }

    // testing_agent_id - computed: true, optional: false, required: false
    public get testingAgentId() {
        return this.getStringAttribute('testing_agent_id');
    }

    // testing_agent_status - computed: true, optional: false, required: false
    public get testingAgentStatus() {
        return this.getStringAttribute('testing_agent_status');
    }
}
}
