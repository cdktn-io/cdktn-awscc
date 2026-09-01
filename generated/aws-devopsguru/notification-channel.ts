// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotificationChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about notification channels you have configured with DevOps Guru.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#config CcNotificationChannel#config}
    */
    readonly config: CcNotificationChannel.NotificationChannelConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel}
*/
export class CcNotificationChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsguru_notification_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotificationChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotificationChannel to import
    * @param importFromId The id of the existing CcNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotificationChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsguru_notification_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotificationChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcNotificationChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsguru_notification_channel',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._config.internalValue = config.config;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // config - computed: false, optional: false, required: true
    private _config = new CcNotificationChannel.NotificationChannelConfigPropertyOutputReference(this, "config");
    public get config() {
        return this._config;
    }
    public putConfig(value: CcNotificationChannel.NotificationChannelConfigProperty) {
        this._config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configInput() {
        return this._config.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_channel_id - computed: true, optional: false, required: false
    public get notificationChannelId() {
        return this.getStringAttribute('notification_channel_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            config: ccNotificationChannelNotificationChannelConfigPropertyToTerraform(this._config.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            config: {
                value: ccNotificationChannelNotificationChannelConfigPropertyToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNotificationChannel.NotificationChannelConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotificationChannelNotificationFilterConfigPropertyToTerraform(struct?: CcNotificationChannel.NotificationFilterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.messageTypes),
        severities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.severities),
    }
}


export function ccNotificationChannelNotificationFilterConfigPropertyToHclTerraform(struct?: CcNotificationChannel.NotificationFilterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.messageTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        severities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.severities),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotificationChannelSnsChannelConfigPropertyToTerraform(struct?: CcNotificationChannel.SnsChannelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccNotificationChannelSnsChannelConfigPropertyToHclTerraform(struct?: CcNotificationChannel.SnsChannelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotificationChannelNotificationChannelConfigPropertyToTerraform(struct?: CcNotificationChannel.NotificationChannelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: ccNotificationChannelNotificationFilterConfigPropertyToTerraform(struct!.filters),
        sns: ccNotificationChannelSnsChannelConfigPropertyToTerraform(struct!.sns),
    }
}


export function ccNotificationChannelNotificationChannelConfigPropertyToHclTerraform(struct?: CcNotificationChannel.NotificationChannelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: ccNotificationChannelNotificationFilterConfigPropertyToHclTerraform(struct!.filters),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationFilterConfigProperty",
        },
        sns: {
            value: ccNotificationChannelSnsChannelConfigPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsChannelConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcNotificationChannel {
export interface NotificationFilterConfigProperty {
    /**
    * DevOps Guru message types to filter for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#message_types CcNotificationChannel#message_types}
    */
    readonly messageTypes?: string[];
    /**
    * DevOps Guru insight severities to filter for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#severities CcNotificationChannel#severities}
    */
    readonly severities?: string[];
}
export class NotificationFilterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationFilterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageTypes = this._messageTypes;
        }
        if (this._severities !== undefined) {
            hasAnyValues = true;
            internalValueResult.severities = this._severities;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationFilterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageTypes = undefined;
            this._severities = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageTypes = value.messageTypes;
            this._severities = value.severities;
        }
    }

    // message_types - computed: true, optional: true, required: false
    private _messageTypes?: string[]; 
    public get messageTypes() {
        return this.getListAttribute('message_types');
    }
    public set messageTypes(value: string[]) {
        this._messageTypes = value;
    }
    public resetMessageTypes() {
        this._messageTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTypesInput() {
        return this._messageTypes;
    }

    // severities - computed: true, optional: true, required: false
    private _severities?: string[]; 
    public get severities() {
        return this.getListAttribute('severities');
    }
    public set severities(value: string[]) {
        this._severities = value;
    }
    public resetSeverities() {
        this._severities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severitiesInput() {
        return this._severities;
    }
}
export interface SnsChannelConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#topic_arn CcNotificationChannel#topic_arn}
    */
    readonly topicArn?: string;
}
export class SnsChannelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsChannelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsChannelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._topicArn = value.topicArn;
        }
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface NotificationChannelConfigProperty {
    /**
    * Information about filters of a notification channel configured in DevOpsGuru to filter for insights.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#filters CcNotificationChannel#filters}
    */
    readonly filters?: NotificationFilterConfigProperty;
    /**
    * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#sns CcNotificationChannel#sns}
    */
    readonly sns?: SnsChannelConfigProperty;
}
export class NotificationChannelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationChannelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationChannelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
            this._sns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
            this._sns.internalValue = value.sns;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new NotificationFilterConfigPropertyOutputReference(this, "filters");
    public get filters() {
        return this._filters;
    }
    public putFilters(value: NotificationFilterConfigProperty) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new SnsChannelConfigPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: SnsChannelConfigProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }
}
}
