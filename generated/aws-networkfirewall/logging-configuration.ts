// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoggingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#enable_monitoring_dashboard CcLoggingConfiguration#enable_monitoring_dashboard}
    */
    readonly enableMonitoringDashboard?: boolean | cdktn.IResolvable;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#firewall_arn CcLoggingConfiguration#firewall_arn}
    */
    readonly firewallArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#firewall_name CcLoggingConfiguration#firewall_name}
    */
    readonly firewallName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#logging_configuration CcLoggingConfiguration#logging_configuration}
    */
    readonly loggingConfiguration: CcLoggingConfiguration.LoggingConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}
*/
export class CcLoggingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkfirewall_logging_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoggingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoggingConfiguration to import
    * @param importFromId The id of the existing CcLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoggingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_logging_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoggingConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcLoggingConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkfirewall_logging_configuration',
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
        this._enableMonitoringDashboard = config.enableMonitoringDashboard;
        this._firewallArn = config.firewallArn;
        this._firewallName = config.firewallName;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enable_monitoring_dashboard - computed: true, optional: true, required: false
    private _enableMonitoringDashboard?: boolean | cdktn.IResolvable; 
    public get enableMonitoringDashboard() {
        return this.getBooleanAttribute('enable_monitoring_dashboard');
    }
    public set enableMonitoringDashboard(value: boolean | cdktn.IResolvable) {
        this._enableMonitoringDashboard = value;
    }
    public resetEnableMonitoringDashboard() {
        this._enableMonitoringDashboard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableMonitoringDashboardInput() {
        return this._enableMonitoringDashboard;
    }

    // firewall_arn - computed: false, optional: false, required: true
    private _firewallArn?: string; 
    public get firewallArn() {
        return this.getStringAttribute('firewall_arn');
    }
    public set firewallArn(value: string) {
        this._firewallArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallArnInput() {
        return this._firewallArn;
    }

    // firewall_name - computed: true, optional: true, required: false
    private _firewallName?: string; 
    public get firewallName() {
        return this.getStringAttribute('firewall_name');
    }
    public set firewallName(value: string) {
        this._firewallName = value;
    }
    public resetFirewallName() {
        this._firewallName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallNameInput() {
        return this._firewallName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_configuration - computed: false, optional: false, required: true
    private _loggingConfiguration = new CcLoggingConfiguration.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcLoggingConfiguration.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            enable_monitoring_dashboard: cdktn.booleanToTerraform(this._enableMonitoringDashboard),
            firewall_arn: cdktn.stringToTerraform(this._firewallArn),
            firewall_name: cdktn.stringToTerraform(this._firewallName),
            logging_configuration: ccLoggingConfigurationLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enable_monitoring_dashboard: {
                value: cdktn.booleanToHclTerraform(this._enableMonitoringDashboard),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            firewall_arn: {
                value: cdktn.stringToHclTerraform(this._firewallArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firewall_name: {
                value: cdktn.stringToHclTerraform(this._firewallName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: ccLoggingConfigurationLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLoggingConfiguration.LoggingConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoggingConfigurationLogDestinationConfigPropertyToTerraform(struct?: CcLoggingConfiguration.LogDestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_destination: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.logDestination),
        log_destination_type: cdktn.stringToTerraform(struct!.logDestinationType),
        log_type: cdktn.stringToTerraform(struct!.logType),
    }
}


export function ccLoggingConfigurationLogDestinationConfigPropertyToHclTerraform(struct?: CcLoggingConfiguration.LogDestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_destination: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.logDestination),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        log_destination_type: {
            value: cdktn.stringToHclTerraform(struct!.logDestinationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLoggingConfigurationLoggingConfigurationPropertyToTerraform(struct?: CcLoggingConfiguration.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_destination_configs: cdktn.listMapper(ccLoggingConfigurationLogDestinationConfigPropertyToTerraform, false)(struct!.logDestinationConfigs),
    }
}


export function ccLoggingConfigurationLoggingConfigurationPropertyToHclTerraform(struct?: CcLoggingConfiguration.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_destination_configs: {
            value: cdktn.listMapperHcl(ccLoggingConfigurationLogDestinationConfigPropertyToHclTerraform, false)(struct!.logDestinationConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "LogDestinationConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLoggingConfiguration {
export interface LogDestinationConfigProperty {
    /**
    * A key-value pair to configure the logDestinations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#log_destination CcLoggingConfiguration#log_destination}
    */
    readonly logDestination: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#log_destination_type CcLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#log_type CcLoggingConfiguration#log_type}
    */
    readonly logType: string;
}
export class LogDestinationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogDestinationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logDestination !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestination = this._logDestination;
        }
        if (this._logDestinationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestinationType = this._logDestinationType;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDestinationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logDestination = undefined;
            this._logDestinationType = undefined;
            this._logType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logDestination = value.logDestination;
            this._logDestinationType = value.logDestinationType;
            this._logType = value.logType;
        }
    }

    // log_destination - computed: false, optional: false, required: true
    private _logDestination?: { [key: string]: string }; 
    public get logDestination() {
        return this.getStringMapAttribute('log_destination');
    }
    public set logDestination(value: { [key: string]: string }) {
        this._logDestination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationInput() {
        return this._logDestination;
    }

    // log_destination_type - computed: false, optional: false, required: true
    private _logDestinationType?: string; 
    public get logDestinationType() {
        return this.getStringAttribute('log_destination_type');
    }
    public set logDestinationType(value: string) {
        this._logDestinationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationTypeInput() {
        return this._logDestinationType;
    }

    // log_type - computed: false, optional: false, required: true
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }
}

export class LogDestinationConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : LogDestinationConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): LogDestinationConfigPropertyOutputReference {
        return new LogDestinationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoggingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_logging_configuration#log_destination_configs CcLoggingConfiguration#log_destination_configs}
    */
    readonly logDestinationConfigs: LogDestinationConfigProperty[] | cdktn.IResolvable;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logDestinationConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestinationConfigs = this._logDestinationConfigs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logDestinationConfigs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logDestinationConfigs.internalValue = value.logDestinationConfigs;
        }
    }

    // log_destination_configs - computed: false, optional: false, required: true
    private _logDestinationConfigs = new LogDestinationConfigPropertyList(this, "log_destination_configs", false);
    public get logDestinationConfigs() {
        return this._logDestinationConfigs;
    }
    public putLogDestinationConfigs(value: LogDestinationConfigProperty[] | cdktn.IResolvable) {
        this._logDestinationConfigs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationConfigsInput() {
        return this._logDestinationConfigs.internalValue;
    }
}
}
