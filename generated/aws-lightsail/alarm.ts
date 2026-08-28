// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAlarmProps extends cdktn.TerraformMetaArguments {
    /**
    * The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#alarm_name CcAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#comparison_operator CcAlarm#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#contact_protocols CcAlarm#contact_protocols}
    */
    readonly contactProtocols?: string[];
    /**
    * The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#datapoints_to_alarm CcAlarm#datapoints_to_alarm}
    */
    readonly datapointsToAlarm?: number;
    /**
    * The number of most recent periods over which data is compared to the specified threshold. If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#evaluation_periods CcAlarm#evaluation_periods}
    */
    readonly evaluationPeriods: number;
    /**
    * The name of the metric to associate with the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#metric_name CcAlarm#metric_name}
    */
    readonly metricName: string;
    /**
    * The name of the Lightsail resource that the alarm monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#monitored_resource_name CcAlarm#monitored_resource_name}
    */
    readonly monitoredResourceName: string;
    /**
    * Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#notification_enabled CcAlarm#notification_enabled}
    */
    readonly notificationEnabled?: boolean | cdktn.IResolvable;
    /**
    * The alarm states that trigger a notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#notification_triggers CcAlarm#notification_triggers}
    */
    readonly notificationTriggers?: string[];
    /**
    * The value against which the specified statistic is compared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#threshold CcAlarm#threshold}
    */
    readonly threshold: number;
    /**
    * Sets how this alarm will handle missing data points.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#treat_missing_data CcAlarm#treat_missing_data}
    */
    readonly treatMissingData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm awscc_lightsail_alarm}
*/
export class CcAlarm extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_alarm";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlarm resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlarm to import
    * @param importFromId The id of the existing CcAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlarm to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_alarm", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_alarm awscc_lightsail_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAlarmProps
    */
    public constructor(scope: Construct, id: string, config: CcAlarmProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_alarm',
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
        this._alarmName = config.alarmName;
        this._comparisonOperator = config.comparisonOperator;
        this._contactProtocols = config.contactProtocols;
        this._datapointsToAlarm = config.datapointsToAlarm;
        this._evaluationPeriods = config.evaluationPeriods;
        this._metricName = config.metricName;
        this._monitoredResourceName = config.monitoredResourceName;
        this._notificationEnabled = config.notificationEnabled;
        this._notificationTriggers = config.notificationTriggers;
        this._threshold = config.threshold;
        this._treatMissingData = config.treatMissingData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alarm_arn - computed: true, optional: false, required: false
    public get alarmArn() {
        return this.getStringAttribute('alarm_arn');
    }

    // alarm_name - computed: false, optional: false, required: true
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }

    // comparison_operator - computed: false, optional: false, required: true
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // contact_protocols - computed: true, optional: true, required: false
    private _contactProtocols?: string[]; 
    public get contactProtocols() {
        return cdktn.Fn.tolist(this.getListAttribute('contact_protocols'));
    }
    public set contactProtocols(value: string[]) {
        this._contactProtocols = value;
    }
    public resetContactProtocols() {
        this._contactProtocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactProtocolsInput() {
        return this._contactProtocols;
    }

    // datapoints_to_alarm - computed: true, optional: true, required: false
    private _datapointsToAlarm?: number; 
    public get datapointsToAlarm() {
        return this.getNumberAttribute('datapoints_to_alarm');
    }
    public set datapointsToAlarm(value: number) {
        this._datapointsToAlarm = value;
    }
    public resetDatapointsToAlarm() {
        this._datapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datapointsToAlarmInput() {
        return this._datapointsToAlarm;
    }

    // evaluation_periods - computed: false, optional: false, required: true
    private _evaluationPeriods?: number; 
    public get evaluationPeriods() {
        return this.getNumberAttribute('evaluation_periods');
    }
    public set evaluationPeriods(value: number) {
        this._evaluationPeriods = value;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationPeriodsInput() {
        return this._evaluationPeriods;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // monitored_resource_name - computed: false, optional: false, required: true
    private _monitoredResourceName?: string; 
    public get monitoredResourceName() {
        return this.getStringAttribute('monitored_resource_name');
    }
    public set monitoredResourceName(value: string) {
        this._monitoredResourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoredResourceNameInput() {
        return this._monitoredResourceName;
    }

    // notification_enabled - computed: true, optional: true, required: false
    private _notificationEnabled?: boolean | cdktn.IResolvable; 
    public get notificationEnabled() {
        return this.getBooleanAttribute('notification_enabled');
    }
    public set notificationEnabled(value: boolean | cdktn.IResolvable) {
        this._notificationEnabled = value;
    }
    public resetNotificationEnabled() {
        this._notificationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationEnabledInput() {
        return this._notificationEnabled;
    }

    // notification_triggers - computed: true, optional: true, required: false
    private _notificationTriggers?: string[]; 
    public get notificationTriggers() {
        return cdktn.Fn.tolist(this.getListAttribute('notification_triggers'));
    }
    public set notificationTriggers(value: string[]) {
        this._notificationTriggers = value;
    }
    public resetNotificationTriggers() {
        this._notificationTriggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTriggersInput() {
        return this._notificationTriggers;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // threshold - computed: false, optional: false, required: true
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }

    // treat_missing_data - computed: true, optional: true, required: false
    private _treatMissingData?: string; 
    public get treatMissingData() {
        return this.getStringAttribute('treat_missing_data');
    }
    public set treatMissingData(value: string) {
        this._treatMissingData = value;
    }
    public resetTreatMissingData() {
        this._treatMissingData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatMissingDataInput() {
        return this._treatMissingData;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alarm_name: cdktn.stringToTerraform(this._alarmName),
            comparison_operator: cdktn.stringToTerraform(this._comparisonOperator),
            contact_protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(this._contactProtocols),
            datapoints_to_alarm: cdktn.numberToTerraform(this._datapointsToAlarm),
            evaluation_periods: cdktn.numberToTerraform(this._evaluationPeriods),
            metric_name: cdktn.stringToTerraform(this._metricName),
            monitored_resource_name: cdktn.stringToTerraform(this._monitoredResourceName),
            notification_enabled: cdktn.booleanToTerraform(this._notificationEnabled),
            notification_triggers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationTriggers),
            threshold: cdktn.numberToTerraform(this._threshold),
            treat_missing_data: cdktn.stringToTerraform(this._treatMissingData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alarm_name: {
                value: cdktn.stringToHclTerraform(this._alarmName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comparison_operator: {
                value: cdktn.stringToHclTerraform(this._comparisonOperator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            contact_protocols: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._contactProtocols),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            datapoints_to_alarm: {
                value: cdktn.numberToHclTerraform(this._datapointsToAlarm),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            evaluation_periods: {
                value: cdktn.numberToHclTerraform(this._evaluationPeriods),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metric_name: {
                value: cdktn.stringToHclTerraform(this._metricName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitored_resource_name: {
                value: cdktn.stringToHclTerraform(this._monitoredResourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_enabled: {
                value: cdktn.booleanToHclTerraform(this._notificationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notification_triggers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationTriggers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            threshold: {
                value: cdktn.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            treat_missing_data: {
                value: cdktn.stringToHclTerraform(this._treatMissingData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAlarm {
}
