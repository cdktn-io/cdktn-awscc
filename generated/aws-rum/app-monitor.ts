// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppMonitorProps extends cdktn.TerraformMetaArguments {
    /**
    * AppMonitor configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#app_monitor_configuration CcAppMonitor#app_monitor_configuration}
    */
    readonly appMonitorConfiguration?: CcAppMonitor.AppMonitorConfigurationProperty;
    /**
    * AppMonitor custom events configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#custom_events CcAppMonitor#custom_events}
    */
    readonly customEvents?: CcAppMonitor.CustomEventsProperty;
    /**
    * Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#cw_log_enabled CcAppMonitor#cw_log_enabled}
    */
    readonly cwLogEnabled?: boolean | cdktn.IResolvable;
    /**
    * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#deobfuscation_configuration CcAppMonitor#deobfuscation_configuration}
    */
    readonly deobfuscationConfiguration?: CcAppMonitor.DeobfuscationConfigurationProperty;
    /**
    * The top-level internet domain name for which your application has administrative authority. The CreateAppMonitor requires either the domain or the domain list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#domain CcAppMonitor#domain}
    */
    readonly domain?: string;
    /**
    * The top-level internet domain names for which your application has administrative authority. The CreateAppMonitor requires either the domain or the domain list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#domain_list CcAppMonitor#domain_list}
    */
    readonly domainList?: string[];
    /**
    * A name for the app monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#name CcAppMonitor#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#platform CcAppMonitor#platform}
    */
    readonly platform?: string;
    /**
    * A structure that defines resource policy attached to your app monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#resource_policy CcAppMonitor#resource_policy}
    */
    readonly resourcePolicy?: CcAppMonitor.ResourcePolicyProperty;
    /**
    * Assigns one or more tags (key-value pairs) to the app monitor. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#tags CcAppMonitor#tags}
    */
    readonly tags?: CcAppMonitor.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor awscc_rum_app_monitor}
*/
export class CcAppMonitor extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rum_app_monitor";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAppMonitor resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAppMonitor to import
    * @param importFromId The id of the existing CcAppMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAppMonitor to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rum_app_monitor", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor awscc_rum_app_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppMonitorProps
    */
    public constructor(scope: Construct, id: string, config: CcAppMonitorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rum_app_monitor',
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
        this._appMonitorConfiguration.internalValue = config.appMonitorConfiguration;
        this._customEvents.internalValue = config.customEvents;
        this._cwLogEnabled = config.cwLogEnabled;
        this._deobfuscationConfiguration.internalValue = config.deobfuscationConfiguration;
        this._domain = config.domain;
        this._domainList = config.domainList;
        this._name = config.name;
        this._platform = config.platform;
        this._resourcePolicy.internalValue = config.resourcePolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_monitor_configuration - computed: true, optional: true, required: false
    private _appMonitorConfiguration = new CcAppMonitor.AppMonitorConfigurationPropertyOutputReference(this, "app_monitor_configuration");
    public get appMonitorConfiguration() {
        return this._appMonitorConfiguration;
    }
    public putAppMonitorConfiguration(value: CcAppMonitor.AppMonitorConfigurationProperty) {
        this._appMonitorConfiguration.internalValue = value;
    }
    public resetAppMonitorConfiguration() {
        this._appMonitorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appMonitorConfigurationInput() {
        return this._appMonitorConfiguration.internalValue;
    }

    // app_monitor_id - computed: true, optional: false, required: false
    public get appMonitorId() {
        return this.getStringAttribute('app_monitor_id');
    }

    // custom_events - computed: true, optional: true, required: false
    private _customEvents = new CcAppMonitor.CustomEventsPropertyOutputReference(this, "custom_events");
    public get customEvents() {
        return this._customEvents;
    }
    public putCustomEvents(value: CcAppMonitor.CustomEventsProperty) {
        this._customEvents.internalValue = value;
    }
    public resetCustomEvents() {
        this._customEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEventsInput() {
        return this._customEvents.internalValue;
    }

    // cw_log_enabled - computed: true, optional: true, required: false
    private _cwLogEnabled?: boolean | cdktn.IResolvable; 
    public get cwLogEnabled() {
        return this.getBooleanAttribute('cw_log_enabled');
    }
    public set cwLogEnabled(value: boolean | cdktn.IResolvable) {
        this._cwLogEnabled = value;
    }
    public resetCwLogEnabled() {
        this._cwLogEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cwLogEnabledInput() {
        return this._cwLogEnabled;
    }

    // deobfuscation_configuration - computed: true, optional: true, required: false
    private _deobfuscationConfiguration = new CcAppMonitor.DeobfuscationConfigurationPropertyOutputReference(this, "deobfuscation_configuration");
    public get deobfuscationConfiguration() {
        return this._deobfuscationConfiguration;
    }
    public putDeobfuscationConfiguration(value: CcAppMonitor.DeobfuscationConfigurationProperty) {
        this._deobfuscationConfiguration.internalValue = value;
    }
    public resetDeobfuscationConfiguration() {
        this._deobfuscationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deobfuscationConfigurationInput() {
        return this._deobfuscationConfiguration.internalValue;
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // domain_list - computed: true, optional: true, required: false
    private _domainList?: string[]; 
    public get domainList() {
        return this.getListAttribute('domain_list');
    }
    public set domainList(value: string[]) {
        this._domainList = value;
    }
    public resetDomainList() {
        this._domainList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainListInput() {
        return this._domainList;
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

    // platform - computed: true, optional: true, required: false
    private _platform?: string; 
    public get platform() {
        return this.getStringAttribute('platform');
    }
    public set platform(value: string) {
        this._platform = value;
    }
    public resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
        return this._platform;
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new CcAppMonitor.ResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: CcAppMonitor.ResourcePolicyProperty) {
        this._resourcePolicy.internalValue = value;
    }
    public resetResourcePolicy() {
        this._resourcePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAppMonitor.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAppMonitor.TagProperty[] | cdktn.IResolvable) {
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
            app_monitor_configuration: ccAppMonitorAppMonitorConfigurationPropertyToTerraform(this._appMonitorConfiguration.internalValue),
            custom_events: ccAppMonitorCustomEventsPropertyToTerraform(this._customEvents.internalValue),
            cw_log_enabled: cdktn.booleanToTerraform(this._cwLogEnabled),
            deobfuscation_configuration: ccAppMonitorDeobfuscationConfigurationPropertyToTerraform(this._deobfuscationConfiguration.internalValue),
            domain: cdktn.stringToTerraform(this._domain),
            domain_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domainList),
            name: cdktn.stringToTerraform(this._name),
            platform: cdktn.stringToTerraform(this._platform),
            resource_policy: ccAppMonitorResourcePolicyPropertyToTerraform(this._resourcePolicy.internalValue),
            tags: cdktn.listMapper(ccAppMonitorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_monitor_configuration: {
                value: ccAppMonitorAppMonitorConfigurationPropertyToHclTerraform(this._appMonitorConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppMonitor.AppMonitorConfigurationProperty",
            },
            custom_events: {
                value: ccAppMonitorCustomEventsPropertyToHclTerraform(this._customEvents.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppMonitor.CustomEventsProperty",
            },
            cw_log_enabled: {
                value: cdktn.booleanToHclTerraform(this._cwLogEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            deobfuscation_configuration: {
                value: ccAppMonitorDeobfuscationConfigurationPropertyToHclTerraform(this._deobfuscationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppMonitor.DeobfuscationConfigurationProperty",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domainList),
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
            platform: {
                value: cdktn.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_policy: {
                value: ccAppMonitorResourcePolicyPropertyToHclTerraform(this._resourcePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppMonitor.ResourcePolicyProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppMonitorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAppMonitor.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppMonitorMetricDefinitionPropertyToTerraform(struct?: CcAppMonitor.MetricDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_keys: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dimensionKeys),
        event_pattern: cdktn.stringToTerraform(struct!.eventPattern),
        name: cdktn.stringToTerraform(struct!.name),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        unit_label: cdktn.stringToTerraform(struct!.unitLabel),
        value_key: cdktn.stringToTerraform(struct!.valueKey),
    }
}


export function ccAppMonitorMetricDefinitionPropertyToHclTerraform(struct?: CcAppMonitor.MetricDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_keys: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dimensionKeys),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        event_pattern: {
            value: cdktn.stringToHclTerraform(struct!.eventPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit_label: {
            value: cdktn.stringToHclTerraform(struct!.unitLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_key: {
            value: cdktn.stringToHclTerraform(struct!.valueKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorMetricDestinationPropertyToTerraform(struct?: CcAppMonitor.MetricDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
        metric_definitions: cdktn.listMapper(ccAppMonitorMetricDefinitionPropertyToTerraform, false)(struct!.metricDefinitions),
    }
}


export function ccAppMonitorMetricDestinationPropertyToHclTerraform(struct?: CcAppMonitor.MetricDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_definitions: {
            value: cdktn.listMapperHcl(ccAppMonitorMetricDefinitionPropertyToHclTerraform, false)(struct!.metricDefinitions),
            isBlock: true,
            type: "set",
            storageClassType: "MetricDefinitionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorAppMonitorConfigurationPropertyToTerraform(struct?: CcAppMonitor.AppMonitorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_cookies: cdktn.booleanToTerraform(struct!.allowCookies),
        enable_x_ray: cdktn.booleanToTerraform(struct!.enableXRay),
        excluded_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedPages),
        favorite_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.favoritePages),
        guest_role_arn: cdktn.stringToTerraform(struct!.guestRoleArn),
        identity_pool_id: cdktn.stringToTerraform(struct!.identityPoolId),
        included_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPages),
        metric_destinations: cdktn.listMapper(ccAppMonitorMetricDestinationPropertyToTerraform, false)(struct!.metricDestinations),
        session_sample_rate: cdktn.numberToTerraform(struct!.sessionSampleRate),
        telemetries: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.telemetries),
    }
}


export function ccAppMonitorAppMonitorConfigurationPropertyToHclTerraform(struct?: CcAppMonitor.AppMonitorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_cookies: {
            value: cdktn.booleanToHclTerraform(struct!.allowCookies),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_x_ray: {
            value: cdktn.booleanToHclTerraform(struct!.enableXRay),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        excluded_pages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedPages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        favorite_pages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.favoritePages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        guest_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.guestRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.identityPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        included_pages: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPages),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        metric_destinations: {
            value: cdktn.listMapperHcl(ccAppMonitorMetricDestinationPropertyToHclTerraform, false)(struct!.metricDestinations),
            isBlock: true,
            type: "set",
            storageClassType: "MetricDestinationPropertyList",
        },
        session_sample_rate: {
            value: cdktn.numberToHclTerraform(struct!.sessionSampleRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        telemetries: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.telemetries),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorCustomEventsPropertyToTerraform(struct?: CcAppMonitor.CustomEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccAppMonitorCustomEventsPropertyToHclTerraform(struct?: CcAppMonitor.CustomEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorJavaScriptSourceMapsPropertyToTerraform(struct?: CcAppMonitor.JavaScriptSourceMapsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccAppMonitorJavaScriptSourceMapsPropertyToHclTerraform(struct?: CcAppMonitor.JavaScriptSourceMapsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorDeobfuscationConfigurationPropertyToTerraform(struct?: CcAppMonitor.DeobfuscationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        java_script_source_maps: ccAppMonitorJavaScriptSourceMapsPropertyToTerraform(struct!.javaScriptSourceMaps),
    }
}


export function ccAppMonitorDeobfuscationConfigurationPropertyToHclTerraform(struct?: CcAppMonitor.DeobfuscationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        java_script_source_maps: {
            value: ccAppMonitorJavaScriptSourceMapsPropertyToHclTerraform(struct!.javaScriptSourceMaps),
            isBlock: true,
            type: "struct",
            storageClassType: "JavaScriptSourceMapsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorResourcePolicyPropertyToTerraform(struct?: CcAppMonitor.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_document: cdktn.stringToTerraform(struct!.policyDocument),
        policy_revision_id: cdktn.stringToTerraform(struct!.policyRevisionId),
    }
}


export function ccAppMonitorResourcePolicyPropertyToHclTerraform(struct?: CcAppMonitor.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_document: {
            value: cdktn.stringToHclTerraform(struct!.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_revision_id: {
            value: cdktn.stringToHclTerraform(struct!.policyRevisionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppMonitorTagPropertyToTerraform(struct?: CcAppMonitor.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppMonitorTagPropertyToHclTerraform(struct?: CcAppMonitor.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAppMonitor {
export interface MetricDefinitionProperty {
    /**
    * Use this field only if you are sending the metric to CloudWatch.
    * 
    * This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:
    * 
    * "metadata.pageId": "PageId"
    * 
    * "metadata.browserName": "BrowserName"
    * 
    * "metadata.deviceType": "DeviceType"
    * 
    * "metadata.osName": "OSName"
    * 
    * "metadata.countryCode": "CountryCode"
    * 
    * "event_details.fileType": "FileType"
    * 
    * All dimensions listed in this field must also be included in EventPattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#dimension_keys CcAppMonitor#dimension_keys}
    */
    readonly dimensionKeys?: { [key: string]: string };
    /**
    * The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
    * 
    * When you define extended metrics, the metric definition is not valid if EventPattern is omitted.
    * 
    * Example event patterns:
    * 
    * '{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'
    * 
    * '{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'
    * 
    * '{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'
    * 
    * If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#event_pattern CcAppMonitor#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * The name for the metric that is defined in this structure. For extended metrics, valid values are the following:
    * 
    * PerformanceNavigationDuration
    * 
    * PerformanceResourceDuration
    * 
    * NavigationSatisfiedTransaction
    * 
    * NavigationToleratedTransaction
    * 
    * NavigationFrustratedTransaction
    * 
    * WebVitalsCumulativeLayoutShift
    * 
    * WebVitalsFirstInputDelay
    * 
    * WebVitalsLargestContentfulPaint
    * 
    * WebVitalsInteractionToNextPaint
    * 
    * JsErrorCount
    * 
    * HttpErrorCount
    * 
    * SessionCount
    * 
    * PageViewCount
    * 
    * Http4xxCount
    * 
    * Http5xxCount
    * 
    * SessionDuration
    * 
    * PageViewCountPerSession
    * 
    * JsErrorCountPerSession
    * 
    * Http4xxCountPerSession
    * 
    * Http5xxCountPerSession
    * 
    * JsErrorCountPerPageView
    * 
    * Http4xxCountPerPageView
    * 
    * Http5xxCountPerPageView
    * 
    * TimeOnPage
    * 
    * ColdLaunchTime
    * 
    * WarmLaunchTime
    * 
    * CrashCount
    * 
    * ANRCount
    * 
    * AppHangCount
    * 
    * ScreenLoadCount
    * 
    * ScreenLoadTime
    * 
    * NetworkLatency
    * 
    * SpanPayloadSize
    * 
    * LogEventPayloadSize
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#name CcAppMonitor#name}
    */
    readonly name?: string;
    /**
    * The namespace used by CloudWatch Metrics for the metric that is defined in this structure
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#namespace CcAppMonitor#namespace}
    */
    readonly namespace?: string;
    /**
    * The CloudWatch metric unit to use for this metric. If you omit this field, the metric is recorded with no unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#unit_label CcAppMonitor#unit_label}
    */
    readonly unitLabel?: string;
    /**
    * The field within the event object that the metric value is sourced from.
    * 
    * If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.
    * 
    * If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event. Note: Evidently has been discontinued.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#value_key CcAppMonitor#value_key}
    */
    readonly valueKey?: string;
}
export class MetricDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionKeys = this._dimensionKeys;
        }
        if (this._eventPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventPattern = this._eventPattern;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._unitLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.unitLabel = this._unitLabel;
        }
        if (this._valueKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueKey = this._valueKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionKeys = undefined;
            this._eventPattern = undefined;
            this._name = undefined;
            this._namespace = undefined;
            this._unitLabel = undefined;
            this._valueKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionKeys = value.dimensionKeys;
            this._eventPattern = value.eventPattern;
            this._name = value.name;
            this._namespace = value.namespace;
            this._unitLabel = value.unitLabel;
            this._valueKey = value.valueKey;
        }
    }

    // dimension_keys - computed: true, optional: true, required: false
    private _dimensionKeys?: { [key: string]: string }; 
    public get dimensionKeys() {
        return this.getStringMapAttribute('dimension_keys');
    }
    public set dimensionKeys(value: { [key: string]: string }) {
        this._dimensionKeys = value;
    }
    public resetDimensionKeys() {
        this._dimensionKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionKeysInput() {
        return this._dimensionKeys;
    }

    // event_pattern - computed: true, optional: true, required: false
    private _eventPattern?: string; 
    public get eventPattern() {
        return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string) {
        this._eventPattern = value;
    }
    public resetEventPattern() {
        this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
        return this._eventPattern;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // unit_label - computed: true, optional: true, required: false
    private _unitLabel?: string; 
    public get unitLabel() {
        return this.getStringAttribute('unit_label');
    }
    public set unitLabel(value: string) {
        this._unitLabel = value;
    }
    public resetUnitLabel() {
        this._unitLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitLabelInput() {
        return this._unitLabel;
    }

    // value_key - computed: true, optional: true, required: false
    private _valueKey?: string; 
    public get valueKey() {
        return this.getStringAttribute('value_key');
    }
    public set valueKey(value: string) {
        this._valueKey = value;
    }
    public resetValueKey() {
        this._valueKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueKeyInput() {
        return this._valueKey;
    }
}

export class MetricDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDefinitionPropertyOutputReference {
        return new MetricDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricDestinationProperty {
    /**
    * Defines the destination to send the metrics to. Valid values are CloudWatch and Evidently. Note: Evidently has been discontinued and is no longer supported - requests with Evidently will be rejected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#destination CcAppMonitor#destination}
    */
    readonly destination?: string;
    /**
    * Evidently has been discontinued and therefore this is no longer an acceptable field. If Destination is CloudWatch, do not use this parameter. 
    * 
    * This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#destination_arn CcAppMonitor#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Evidently has been discontinued and therefore this is no longer an acceptable field. If Destination is CloudWatch, do not use this parameter. 
    * 
    * This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#iam_role_arn CcAppMonitor#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * An array of structures which define the metrics that you want to send.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#metric_definitions CcAppMonitor#metric_definitions}
    */
    readonly metricDefinitions?: MetricDefinitionProperty[] | cdktn.IResolvable;
}
export class MetricDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._iamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        if (this._metricDefinitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
            this._destinationArn = undefined;
            this._iamRoleArn = undefined;
            this._metricDefinitions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
            this._destinationArn = value.destinationArn;
            this._iamRoleArn = value.iamRoleArn;
            this._metricDefinitions.internalValue = value.metricDefinitions;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
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

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // metric_definitions - computed: true, optional: true, required: false
    private _metricDefinitions = new MetricDefinitionPropertyList(this, "metric_definitions", true);
    public get metricDefinitions() {
        return this._metricDefinitions;
    }
    public putMetricDefinitions(value: MetricDefinitionProperty[] | cdktn.IResolvable) {
        this._metricDefinitions.internalValue = value;
    }
    public resetMetricDefinitions() {
        this._metricDefinitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDefinitionsInput() {
        return this._metricDefinitions.internalValue;
    }
}

export class MetricDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDestinationPropertyOutputReference {
        return new MetricDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AppMonitorConfigurationProperty {
    /**
    * If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#allow_cookies CcAppMonitor#allow_cookies}
    */
    readonly allowCookies?: boolean | cdktn.IResolvable;
    /**
    * If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#enable_x_ray CcAppMonitor#enable_x_ray}
    */
    readonly enableXRay?: boolean | cdktn.IResolvable;
    /**
    * A list of URLs in your website or application to exclude from RUM data collection. You can't include both ExcludedPages and IncludedPages in the same operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#excluded_pages CcAppMonitor#excluded_pages}
    */
    readonly excludedPages?: string[];
    /**
    * A list of pages in the RUM console that are to be displayed with a favorite icon.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#favorite_pages CcAppMonitor#favorite_pages}
    */
    readonly favoritePages?: string[];
    /**
    * The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#guest_role_arn CcAppMonitor#guest_role_arn}
    */
    readonly guestRoleArn?: string;
    /**
    * The ID of the identity pool that is used to authorize the sending of data to RUM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#identity_pool_id CcAppMonitor#identity_pool_id}
    */
    readonly identityPoolId?: string;
    /**
    * If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. You can't include both ExcludedPages and IncludedPages in the same operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#included_pages CcAppMonitor#included_pages}
    */
    readonly includedPages?: string[];
    /**
    * An array of structures which define the destinations and the metrics that you want to send.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#metric_destinations CcAppMonitor#metric_destinations}
    */
    readonly metricDestinations?: MetricDestinationProperty[] | cdktn.IResolvable;
    /**
    * Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#session_sample_rate CcAppMonitor#session_sample_rate}
    */
    readonly sessionSampleRate?: number;
    /**
    * An array that lists the types of telemetry data that this app monitor is to collect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#telemetries CcAppMonitor#telemetries}
    */
    readonly telemetries?: string[];
}
export class AppMonitorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppMonitorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowCookies !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCookies = this._allowCookies;
        }
        if (this._enableXRay !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableXRay = this._enableXRay;
        }
        if (this._excludedPages !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedPages = this._excludedPages;
        }
        if (this._favoritePages !== undefined) {
            hasAnyValues = true;
            internalValueResult.favoritePages = this._favoritePages;
        }
        if (this._guestRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.guestRoleArn = this._guestRoleArn;
        }
        if (this._identityPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityPoolId = this._identityPoolId;
        }
        if (this._includedPages !== undefined) {
            hasAnyValues = true;
            internalValueResult.includedPages = this._includedPages;
        }
        if (this._metricDestinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDestinations = this._metricDestinations?.internalValue;
        }
        if (this._sessionSampleRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionSampleRate = this._sessionSampleRate;
        }
        if (this._telemetries !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetries = this._telemetries;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppMonitorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowCookies = undefined;
            this._enableXRay = undefined;
            this._excludedPages = undefined;
            this._favoritePages = undefined;
            this._guestRoleArn = undefined;
            this._identityPoolId = undefined;
            this._includedPages = undefined;
            this._metricDestinations.internalValue = undefined;
            this._sessionSampleRate = undefined;
            this._telemetries = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowCookies = value.allowCookies;
            this._enableXRay = value.enableXRay;
            this._excludedPages = value.excludedPages;
            this._favoritePages = value.favoritePages;
            this._guestRoleArn = value.guestRoleArn;
            this._identityPoolId = value.identityPoolId;
            this._includedPages = value.includedPages;
            this._metricDestinations.internalValue = value.metricDestinations;
            this._sessionSampleRate = value.sessionSampleRate;
            this._telemetries = value.telemetries;
        }
    }

    // allow_cookies - computed: true, optional: true, required: false
    private _allowCookies?: boolean | cdktn.IResolvable; 
    public get allowCookies() {
        return this.getBooleanAttribute('allow_cookies');
    }
    public set allowCookies(value: boolean | cdktn.IResolvable) {
        this._allowCookies = value;
    }
    public resetAllowCookies() {
        this._allowCookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCookiesInput() {
        return this._allowCookies;
    }

    // enable_x_ray - computed: true, optional: true, required: false
    private _enableXRay?: boolean | cdktn.IResolvable; 
    public get enableXRay() {
        return this.getBooleanAttribute('enable_x_ray');
    }
    public set enableXRay(value: boolean | cdktn.IResolvable) {
        this._enableXRay = value;
    }
    public resetEnableXRay() {
        this._enableXRay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableXRayInput() {
        return this._enableXRay;
    }

    // excluded_pages - computed: true, optional: true, required: false
    private _excludedPages?: string[]; 
    public get excludedPages() {
        return this.getListAttribute('excluded_pages');
    }
    public set excludedPages(value: string[]) {
        this._excludedPages = value;
    }
    public resetExcludedPages() {
        this._excludedPages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedPagesInput() {
        return this._excludedPages;
    }

    // favorite_pages - computed: true, optional: true, required: false
    private _favoritePages?: string[]; 
    public get favoritePages() {
        return this.getListAttribute('favorite_pages');
    }
    public set favoritePages(value: string[]) {
        this._favoritePages = value;
    }
    public resetFavoritePages() {
        this._favoritePages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get favoritePagesInput() {
        return this._favoritePages;
    }

    // guest_role_arn - computed: true, optional: true, required: false
    private _guestRoleArn?: string; 
    public get guestRoleArn() {
        return this.getStringAttribute('guest_role_arn');
    }
    public set guestRoleArn(value: string) {
        this._guestRoleArn = value;
    }
    public resetGuestRoleArn() {
        this._guestRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guestRoleArnInput() {
        return this._guestRoleArn;
    }

    // identity_pool_id - computed: true, optional: true, required: false
    private _identityPoolId?: string; 
    public get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    public set identityPoolId(value: string) {
        this._identityPoolId = value;
    }
    public resetIdentityPoolId() {
        this._identityPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolIdInput() {
        return this._identityPoolId;
    }

    // included_pages - computed: true, optional: true, required: false
    private _includedPages?: string[]; 
    public get includedPages() {
        return this.getListAttribute('included_pages');
    }
    public set includedPages(value: string[]) {
        this._includedPages = value;
    }
    public resetIncludedPages() {
        this._includedPages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includedPagesInput() {
        return this._includedPages;
    }

    // metric_destinations - computed: true, optional: true, required: false
    private _metricDestinations = new MetricDestinationPropertyList(this, "metric_destinations", true);
    public get metricDestinations() {
        return this._metricDestinations;
    }
    public putMetricDestinations(value: MetricDestinationProperty[] | cdktn.IResolvable) {
        this._metricDestinations.internalValue = value;
    }
    public resetMetricDestinations() {
        this._metricDestinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDestinationsInput() {
        return this._metricDestinations.internalValue;
    }

    // session_sample_rate - computed: true, optional: true, required: false
    private _sessionSampleRate?: number; 
    public get sessionSampleRate() {
        return this.getNumberAttribute('session_sample_rate');
    }
    public set sessionSampleRate(value: number) {
        this._sessionSampleRate = value;
    }
    public resetSessionSampleRate() {
        this._sessionSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionSampleRateInput() {
        return this._sessionSampleRate;
    }

    // telemetries - computed: true, optional: true, required: false
    private _telemetries?: string[]; 
    public get telemetries() {
        return this.getListAttribute('telemetries');
    }
    public set telemetries(value: string[]) {
        this._telemetries = value;
    }
    public resetTelemetries() {
        this._telemetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetriesInput() {
        return this._telemetries;
    }
}
export interface CustomEventsProperty {
    /**
    * Indicates whether AppMonitor accepts custom events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#status CcAppMonitor#status}
    */
    readonly status?: string;
}
export class CustomEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
        }
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface JavaScriptSourceMapsProperty {
    /**
    * The S3Uri of the bucket or folder that stores the source map files. It is required if status is ENABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#s3_uri CcAppMonitor#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Specifies whether JavaScript error stack traces should be unminified for this app monitor. The default is for JavaScript error stack trace unminification to be DISABLED
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#status CcAppMonitor#status}
    */
    readonly status?: string;
}
export class JavaScriptSourceMapsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JavaScriptSourceMapsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JavaScriptSourceMapsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
            this._status = value.status;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface DeobfuscationConfigurationProperty {
    /**
    * A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#java_script_source_maps CcAppMonitor#java_script_source_maps}
    */
    readonly javaScriptSourceMaps?: JavaScriptSourceMapsProperty;
}
export class DeobfuscationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeobfuscationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._javaScriptSourceMaps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.javaScriptSourceMaps = this._javaScriptSourceMaps?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeobfuscationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._javaScriptSourceMaps.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._javaScriptSourceMaps.internalValue = value.javaScriptSourceMaps;
        }
    }

    // java_script_source_maps - computed: true, optional: true, required: false
    private _javaScriptSourceMaps = new JavaScriptSourceMapsPropertyOutputReference(this, "java_script_source_maps");
    public get javaScriptSourceMaps() {
        return this._javaScriptSourceMaps;
    }
    public putJavaScriptSourceMaps(value: JavaScriptSourceMapsProperty) {
        this._javaScriptSourceMaps.internalValue = value;
    }
    public resetJavaScriptSourceMaps() {
        this._javaScriptSourceMaps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get javaScriptSourceMapsInput() {
        return this._javaScriptSourceMaps.internalValue;
    }
}
export interface ResourcePolicyProperty {
    /**
    * The JSON to use as the resource policy. The document can be up to 4 KB in size. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#policy_document CcAppMonitor#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy. 
    * 
    *  When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#policy_revision_id CcAppMonitor#policy_revision_id}
    */
    readonly policyRevisionId?: string;
}
export class ResourcePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourcePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        if (this._policyRevisionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyRevisionId = this._policyRevisionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyDocument = undefined;
            this._policyRevisionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyDocument = value.policyDocument;
            this._policyRevisionId = value.policyRevisionId;
        }
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_revision_id - computed: true, optional: true, required: false
    private _policyRevisionId?: string; 
    public get policyRevisionId() {
        return this.getStringAttribute('policy_revision_id');
    }
    public set policyRevisionId(value: string) {
        this._policyRevisionId = value;
    }
    public resetPolicyRevisionId() {
        this._policyRevisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRevisionIdInput() {
        return this._policyRevisionId;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#key CcAppMonitor#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rum_app_monitor#value CcAppMonitor#value}
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
