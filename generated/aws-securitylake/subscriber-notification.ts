// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriberNotificationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#notification_configuration CcSubscriberNotification#notification_configuration}
    */
    readonly notificationConfiguration: CcSubscriberNotification.NotificationConfigurationProperty;
    /**
    * The ARN for the subscriber
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#subscriber_arn CcSubscriberNotification#subscriber_arn}
    */
    readonly subscriberArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}
*/
export class CcSubscriberNotification extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securitylake_subscriber_notification";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscriberNotification resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscriberNotification to import
    * @param importFromId The id of the existing CcSubscriberNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscriberNotification to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securitylake_subscriber_notification", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriberNotificationProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriberNotificationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securitylake_subscriber_notification',
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
        this._notificationConfiguration.internalValue = config.notificationConfiguration;
        this._subscriberArn = config.subscriberArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_configuration - computed: false, optional: false, required: true
    private _notificationConfiguration = new CcSubscriberNotification.NotificationConfigurationPropertyOutputReference(this, "notification_configuration");
    public get notificationConfiguration() {
        return this._notificationConfiguration;
    }
    public putNotificationConfiguration(value: CcSubscriberNotification.NotificationConfigurationProperty) {
        this._notificationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationInput() {
        return this._notificationConfiguration.internalValue;
    }

    // subscriber_arn - computed: false, optional: false, required: true
    private _subscriberArn?: string; 
    public get subscriberArn() {
        return this.getStringAttribute('subscriber_arn');
    }
    public set subscriberArn(value: string) {
        this._subscriberArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriberArnInput() {
        return this._subscriberArn;
    }

    // subscriber_endpoint - computed: true, optional: false, required: false
    public get subscriberEndpoint() {
        return this.getStringAttribute('subscriber_endpoint');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            notification_configuration: ccSubscriberNotificationNotificationConfigurationPropertyToTerraform(this._notificationConfiguration.internalValue),
            subscriber_arn: cdktn.stringToTerraform(this._subscriberArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            notification_configuration: {
                value: ccSubscriberNotificationNotificationConfigurationPropertyToHclTerraform(this._notificationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubscriberNotification.NotificationConfigurationProperty",
            },
            subscriber_arn: {
                value: cdktn.stringToHclTerraform(this._subscriberArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSubscriberNotificationHttpsNotificationConfigurationPropertyToTerraform(struct?: CcSubscriberNotification.HttpsNotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_api_key_name: cdktn.stringToTerraform(struct!.authorizationApiKeyName),
        authorization_api_key_value: cdktn.stringToTerraform(struct!.authorizationApiKeyValue),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        target_role_arn: cdktn.stringToTerraform(struct!.targetRoleArn),
    }
}


export function ccSubscriberNotificationHttpsNotificationConfigurationPropertyToHclTerraform(struct?: CcSubscriberNotification.HttpsNotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_api_key_name: {
            value: cdktn.stringToHclTerraform(struct!.authorizationApiKeyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_api_key_value: {
            value: cdktn.stringToHclTerraform(struct!.authorizationApiKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubscriberNotificationNotificationConfigurationPropertyToTerraform(struct?: CcSubscriberNotification.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        https_notification_configuration: ccSubscriberNotificationHttpsNotificationConfigurationPropertyToTerraform(struct!.httpsNotificationConfiguration),
        sqs_notification_configuration: cdktn.stringToTerraform(struct!.sqsNotificationConfiguration),
    }
}


export function ccSubscriberNotificationNotificationConfigurationPropertyToHclTerraform(struct?: CcSubscriberNotification.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        https_notification_configuration: {
            value: ccSubscriberNotificationHttpsNotificationConfigurationPropertyToHclTerraform(struct!.httpsNotificationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpsNotificationConfigurationProperty",
        },
        sqs_notification_configuration: {
            value: cdktn.stringToHclTerraform(struct!.sqsNotificationConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSubscriberNotification {
export interface HttpsNotificationConfigurationProperty {
    /**
    * The key name for the notification subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name CcSubscriberNotification#authorization_api_key_name}
    */
    readonly authorizationApiKeyName?: string;
    /**
    * The key value for the notification subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value CcSubscriberNotification#authorization_api_key_value}
    */
    readonly authorizationApiKeyValue?: string;
    /**
    * The subscription endpoint in Security Lake.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#endpoint CcSubscriberNotification#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The HTTPS method used for the notification subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#http_method CcSubscriberNotification#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#target_role_arn CcSubscriberNotification#target_role_arn}
    */
    readonly targetRoleArn?: string;
}
export class HttpsNotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpsNotificationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationApiKeyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationApiKeyName = this._authorizationApiKeyName;
        }
        if (this._authorizationApiKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationApiKeyValue = this._authorizationApiKeyValue;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._targetRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRoleArn = this._targetRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpsNotificationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationApiKeyName = undefined;
            this._authorizationApiKeyValue = undefined;
            this._endpoint = undefined;
            this._httpMethod = undefined;
            this._targetRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationApiKeyName = value.authorizationApiKeyName;
            this._authorizationApiKeyValue = value.authorizationApiKeyValue;
            this._endpoint = value.endpoint;
            this._httpMethod = value.httpMethod;
            this._targetRoleArn = value.targetRoleArn;
        }
    }

    // authorization_api_key_name - computed: true, optional: true, required: false
    private _authorizationApiKeyName?: string; 
    public get authorizationApiKeyName() {
        return this.getStringAttribute('authorization_api_key_name');
    }
    public set authorizationApiKeyName(value: string) {
        this._authorizationApiKeyName = value;
    }
    public resetAuthorizationApiKeyName() {
        this._authorizationApiKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationApiKeyNameInput() {
        return this._authorizationApiKeyName;
    }

    // authorization_api_key_value - computed: true, optional: true, required: false
    private _authorizationApiKeyValue?: string; 
    public get authorizationApiKeyValue() {
        return this.getStringAttribute('authorization_api_key_value');
    }
    public set authorizationApiKeyValue(value: string) {
        this._authorizationApiKeyValue = value;
    }
    public resetAuthorizationApiKeyValue() {
        this._authorizationApiKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationApiKeyValueInput() {
        return this._authorizationApiKeyValue;
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

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // target_role_arn - computed: true, optional: true, required: false
    private _targetRoleArn?: string; 
    public get targetRoleArn() {
        return this.getStringAttribute('target_role_arn');
    }
    public set targetRoleArn(value: string) {
        this._targetRoleArn = value;
    }
    public resetTargetRoleArn() {
        this._targetRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRoleArnInput() {
        return this._targetRoleArn;
    }
}
export interface NotificationConfigurationProperty {
    /**
    * The configuration for HTTPS subscriber notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration CcSubscriberNotification#https_notification_configuration}
    */
    readonly httpsNotificationConfiguration?: HttpsNotificationConfigurationProperty;
    /**
    * The configurations for SQS subscriber notification. The members of this structure are context-dependent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration CcSubscriberNotification#sqs_notification_configuration}
    */
    readonly sqsNotificationConfiguration?: string;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpsNotificationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpsNotificationConfiguration = this._httpsNotificationConfiguration?.internalValue;
        }
        if (this._sqsNotificationConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqsNotificationConfiguration = this._sqsNotificationConfiguration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpsNotificationConfiguration.internalValue = undefined;
            this._sqsNotificationConfiguration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpsNotificationConfiguration.internalValue = value.httpsNotificationConfiguration;
            this._sqsNotificationConfiguration = value.sqsNotificationConfiguration;
        }
    }

    // https_notification_configuration - computed: true, optional: true, required: false
    private _httpsNotificationConfiguration = new HttpsNotificationConfigurationPropertyOutputReference(this, "https_notification_configuration");
    public get httpsNotificationConfiguration() {
        return this._httpsNotificationConfiguration;
    }
    public putHttpsNotificationConfiguration(value: HttpsNotificationConfigurationProperty) {
        this._httpsNotificationConfiguration.internalValue = value;
    }
    public resetHttpsNotificationConfiguration() {
        this._httpsNotificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpsNotificationConfigurationInput() {
        return this._httpsNotificationConfiguration.internalValue;
    }

    // sqs_notification_configuration - computed: true, optional: true, required: false
    private _sqsNotificationConfiguration?: string; 
    public get sqsNotificationConfiguration() {
        return this.getStringAttribute('sqs_notification_configuration');
    }
    public set sqsNotificationConfiguration(value: string) {
        this._sqsNotificationConfiguration = value;
    }
    public resetSqsNotificationConfiguration() {
        this._sqsNotificationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsNotificationConfigurationInput() {
        return this._sqsNotificationConfiguration;
    }
}
}
