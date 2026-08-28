// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoggingProps extends cdktn.TerraformMetaArguments {
    /**
    * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#account_id CcLogging#account_id}
    */
    readonly accountId: string;
    /**
    * The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#default_log_level CcLogging#default_log_level}
    */
    readonly defaultLogLevel: string;
    /**
    * Configurations for event-based logging that specifies which event types to log and their logging settings. Overrides account-level logging for the specified event
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#event_configurations CcLogging#event_configurations}
    */
    readonly eventConfigurations?: CcLogging.EventConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the role that allows IoT to write to Cloudwatch logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#role_arn CcLogging#role_arn}
    */
    readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging awscc_iot_logging}
*/
export class CcLogging extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_logging";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLogging resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLogging to import
    * @param importFromId The id of the existing CcLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLogging to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_logging", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging awscc_iot_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoggingProps
    */
    public constructor(scope: Construct, id: string, config: CcLoggingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_logging',
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
        this._accountId = config.accountId;
        this._defaultLogLevel = config.defaultLogLevel;
        this._eventConfigurations.internalValue = config.eventConfigurations;
        this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // default_log_level - computed: false, optional: false, required: true
    private _defaultLogLevel?: string; 
    public get defaultLogLevel() {
        return this.getStringAttribute('default_log_level');
    }
    public set defaultLogLevel(value: string) {
        this._defaultLogLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultLogLevelInput() {
        return this._defaultLogLevel;
    }

    // event_configurations - computed: true, optional: true, required: false
    private _eventConfigurations = new CcLogging.EventConfigurationPropertyList(this, "event_configurations", false);
    public get eventConfigurations() {
        return this._eventConfigurations;
    }
    public putEventConfigurations(value: CcLogging.EventConfigurationProperty[] | cdktn.IResolvable) {
        this._eventConfigurations.internalValue = value;
    }
    public resetEventConfigurations() {
        this._eventConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventConfigurationsInput() {
        return this._eventConfigurations.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_id: cdktn.stringToTerraform(this._accountId),
            default_log_level: cdktn.stringToTerraform(this._defaultLogLevel),
            event_configurations: cdktn.listMapper(ccLoggingEventConfigurationPropertyToTerraform, false)(this._eventConfigurations.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_log_level: {
                value: cdktn.stringToHclTerraform(this._defaultLogLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_configurations: {
                value: cdktn.listMapperHcl(ccLoggingEventConfigurationPropertyToHclTerraform, false)(this._eventConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLogging.EventConfigurationPropertyList",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoggingEventConfigurationPropertyToTerraform(struct?: CcLogging.EventConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_type: cdktn.stringToTerraform(struct!.eventType),
        log_destination: cdktn.stringToTerraform(struct!.logDestination),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
    }
}


export function ccLoggingEventConfigurationPropertyToHclTerraform(struct?: CcLogging.EventConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_type: {
            value: cdktn.stringToHclTerraform(struct!.eventType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_destination: {
            value: cdktn.stringToHclTerraform(struct!.logDestination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLogging {
export interface EventConfigurationProperty {
    /**
    * The type of event to log. These include event types like Connect, Publish, and Disconnect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#event_type CcLogging#event_type}
    */
    readonly eventType?: string;
    /**
    * CloudWatch Log Group for event-based logging. Specifies where log events should be sent. The log destination for event-based logging overrides default Log Group for the specified event type and applies to all resources associated with that event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#log_destination CcLogging#log_destination}
    */
    readonly logDestination?: string;
    /**
    * The logging level for the specified event type. Determines the verbosity of log messages generated for this event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_logging#log_level CcLogging#log_level}
    */
    readonly logLevel?: string;
}
export class EventConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventType !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventType = this._eventType;
        }
        if (this._logDestination !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestination = this._logDestination;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventType = undefined;
            this._logDestination = undefined;
            this._logLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventType = value.eventType;
            this._logDestination = value.logDestination;
            this._logLevel = value.logLevel;
        }
    }

    // event_type - computed: true, optional: true, required: false
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    public resetEventType() {
        this._eventType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
    }

    // log_destination - computed: true, optional: true, required: false
    private _logDestination?: string; 
    public get logDestination() {
        return this.getStringAttribute('log_destination');
    }
    public set logDestination(value: string) {
        this._logDestination = value;
    }
    public resetLogDestination() {
        this._logDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationInput() {
        return this._logDestination;
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }
}

export class EventConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : EventConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): EventConfigurationPropertyOutputReference {
        return new EventConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
