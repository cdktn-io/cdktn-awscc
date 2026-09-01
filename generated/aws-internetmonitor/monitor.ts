// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMonitorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_events_config CcMonitor#health_events_config}
    */
    readonly healthEventsConfig?: CcMonitor.HealthEventsConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#include_linked_accounts CcMonitor#include_linked_accounts}
    */
    readonly includeLinkedAccounts?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery CcMonitor#internet_measurements_log_delivery}
    */
    readonly internetMeasurementsLogDelivery?: CcMonitor.InternetMeasurementsLogDeliveryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#linked_account_id CcMonitor#linked_account_id}
    */
    readonly linkedAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor CcMonitor#max_city_networks_to_monitor}
    */
    readonly maxCityNetworksToMonitor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#monitor_name CcMonitor#monitor_name}
    */
    readonly monitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources CcMonitor#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_add CcMonitor#resources_to_add}
    */
    readonly resourcesToAdd?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#resources_to_remove CcMonitor#resources_to_remove}
    */
    readonly resourcesToRemove?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status CcMonitor#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#tags CcMonitor#tags}
    */
    readonly tags?: CcMonitor.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor CcMonitor#traffic_percentage_to_monitor}
    */
    readonly trafficPercentageToMonitor?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor}
*/
export class CcMonitor extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_internetmonitor_monitor";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMonitor resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMonitor to import
    * @param importFromId The id of the existing CcMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMonitor to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_internetmonitor_monitor", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMonitorProps
    */
    public constructor(scope: Construct, id: string, config: CcMonitorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_internetmonitor_monitor',
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
        this._healthEventsConfig.internalValue = config.healthEventsConfig;
        this._includeLinkedAccounts = config.includeLinkedAccounts;
        this._internetMeasurementsLogDelivery.internalValue = config.internetMeasurementsLogDelivery;
        this._linkedAccountId = config.linkedAccountId;
        this._maxCityNetworksToMonitor = config.maxCityNetworksToMonitor;
        this._monitorName = config.monitorName;
        this._resources = config.resources;
        this._resourcesToAdd = config.resourcesToAdd;
        this._resourcesToRemove = config.resourcesToRemove;
        this._status = config.status;
        this._tags.internalValue = config.tags;
        this._trafficPercentageToMonitor = config.trafficPercentageToMonitor;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // health_events_config - computed: true, optional: true, required: false
    private _healthEventsConfig = new CcMonitor.HealthEventsConfigPropertyOutputReference(this, "health_events_config");
    public get healthEventsConfig() {
        return this._healthEventsConfig;
    }
    public putHealthEventsConfig(value: CcMonitor.HealthEventsConfigProperty) {
        this._healthEventsConfig.internalValue = value;
    }
    public resetHealthEventsConfig() {
        this._healthEventsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthEventsConfigInput() {
        return this._healthEventsConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // include_linked_accounts - computed: true, optional: true, required: false
    private _includeLinkedAccounts?: boolean | cdktn.IResolvable; 
    public get includeLinkedAccounts() {
        return this.getBooleanAttribute('include_linked_accounts');
    }
    public set includeLinkedAccounts(value: boolean | cdktn.IResolvable) {
        this._includeLinkedAccounts = value;
    }
    public resetIncludeLinkedAccounts() {
        this._includeLinkedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeLinkedAccountsInput() {
        return this._includeLinkedAccounts;
    }

    // internet_measurements_log_delivery - computed: true, optional: true, required: false
    private _internetMeasurementsLogDelivery = new CcMonitor.InternetMeasurementsLogDeliveryPropertyOutputReference(this, "internet_measurements_log_delivery");
    public get internetMeasurementsLogDelivery() {
        return this._internetMeasurementsLogDelivery;
    }
    public putInternetMeasurementsLogDelivery(value: CcMonitor.InternetMeasurementsLogDeliveryProperty) {
        this._internetMeasurementsLogDelivery.internalValue = value;
    }
    public resetInternetMeasurementsLogDelivery() {
        this._internetMeasurementsLogDelivery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetMeasurementsLogDeliveryInput() {
        return this._internetMeasurementsLogDelivery.internalValue;
    }

    // linked_account_id - computed: true, optional: true, required: false
    private _linkedAccountId?: string; 
    public get linkedAccountId() {
        return this.getStringAttribute('linked_account_id');
    }
    public set linkedAccountId(value: string) {
        this._linkedAccountId = value;
    }
    public resetLinkedAccountId() {
        this._linkedAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedAccountIdInput() {
        return this._linkedAccountId;
    }

    // max_city_networks_to_monitor - computed: true, optional: true, required: false
    private _maxCityNetworksToMonitor?: number; 
    public get maxCityNetworksToMonitor() {
        return this.getNumberAttribute('max_city_networks_to_monitor');
    }
    public set maxCityNetworksToMonitor(value: number) {
        this._maxCityNetworksToMonitor = value;
    }
    public resetMaxCityNetworksToMonitor() {
        this._maxCityNetworksToMonitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCityNetworksToMonitorInput() {
        return this._maxCityNetworksToMonitor;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }

    // monitor_arn - computed: true, optional: false, required: false
    public get monitorArn() {
        return this.getStringAttribute('monitor_arn');
    }

    // monitor_name - computed: false, optional: false, required: true
    private _monitorName?: string; 
    public get monitorName() {
        return this.getStringAttribute('monitor_name');
    }
    public set monitorName(value: string) {
        this._monitorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorNameInput() {
        return this._monitorName;
    }

    // processing_status - computed: true, optional: false, required: false
    public get processingStatus() {
        return this.getStringAttribute('processing_status');
    }

    // processing_status_info - computed: true, optional: false, required: false
    public get processingStatusInfo() {
        return this.getStringAttribute('processing_status_info');
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }

    // resources_to_add - computed: true, optional: true, required: false
    private _resourcesToAdd?: string[]; 
    public get resourcesToAdd() {
        return this.getListAttribute('resources_to_add');
    }
    public set resourcesToAdd(value: string[]) {
        this._resourcesToAdd = value;
    }
    public resetResourcesToAdd() {
        this._resourcesToAdd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesToAddInput() {
        return this._resourcesToAdd;
    }

    // resources_to_remove - computed: true, optional: true, required: false
    private _resourcesToRemove?: string[]; 
    public get resourcesToRemove() {
        return this.getListAttribute('resources_to_remove');
    }
    public set resourcesToRemove(value: string[]) {
        this._resourcesToRemove = value;
    }
    public resetResourcesToRemove() {
        this._resourcesToRemove = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesToRemoveInput() {
        return this._resourcesToRemove;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMonitor.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMonitor.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // traffic_percentage_to_monitor - computed: true, optional: true, required: false
    private _trafficPercentageToMonitor?: number; 
    public get trafficPercentageToMonitor() {
        return this.getNumberAttribute('traffic_percentage_to_monitor');
    }
    public set trafficPercentageToMonitor(value: number) {
        this._trafficPercentageToMonitor = value;
    }
    public resetTrafficPercentageToMonitor() {
        this._trafficPercentageToMonitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficPercentageToMonitorInput() {
        return this._trafficPercentageToMonitor;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            health_events_config: ccMonitorHealthEventsConfigPropertyToTerraform(this._healthEventsConfig.internalValue),
            include_linked_accounts: cdktn.booleanToTerraform(this._includeLinkedAccounts),
            internet_measurements_log_delivery: ccMonitorInternetMeasurementsLogDeliveryPropertyToTerraform(this._internetMeasurementsLogDelivery.internalValue),
            linked_account_id: cdktn.stringToTerraform(this._linkedAccountId),
            max_city_networks_to_monitor: cdktn.numberToTerraform(this._maxCityNetworksToMonitor),
            monitor_name: cdktn.stringToTerraform(this._monitorName),
            resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resources),
            resources_to_add: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesToAdd),
            resources_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesToRemove),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccMonitorTagPropertyToTerraform, false)(this._tags.internalValue),
            traffic_percentage_to_monitor: cdktn.numberToTerraform(this._trafficPercentageToMonitor),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            health_events_config: {
                value: ccMonitorHealthEventsConfigPropertyToHclTerraform(this._healthEventsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMonitor.HealthEventsConfigProperty",
            },
            include_linked_accounts: {
                value: cdktn.booleanToHclTerraform(this._includeLinkedAccounts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            internet_measurements_log_delivery: {
                value: ccMonitorInternetMeasurementsLogDeliveryPropertyToHclTerraform(this._internetMeasurementsLogDelivery.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMonitor.InternetMeasurementsLogDeliveryProperty",
            },
            linked_account_id: {
                value: cdktn.stringToHclTerraform(this._linkedAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_city_networks_to_monitor: {
                value: cdktn.numberToHclTerraform(this._maxCityNetworksToMonitor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            monitor_name: {
                value: cdktn.stringToHclTerraform(this._monitorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resources: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resources),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resources_to_add: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesToAdd),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resources_to_remove: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesToRemove),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMonitorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMonitor.TagPropertyList",
            },
            traffic_percentage_to_monitor: {
                value: cdktn.numberToHclTerraform(this._trafficPercentageToMonitor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMonitorLocalHealthEventsConfigPropertyToTerraform(struct?: CcMonitor.LocalHealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        health_score_threshold: cdktn.numberToTerraform(struct!.healthScoreThreshold),
        min_traffic_impact: cdktn.numberToTerraform(struct!.minTrafficImpact),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccMonitorLocalHealthEventsConfigPropertyToHclTerraform(struct?: CcMonitor.LocalHealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        health_score_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthScoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_traffic_impact: {
            value: cdktn.numberToHclTerraform(struct!.minTrafficImpact),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccMonitorPerformanceLocalHealthEventsConfigPropertyToTerraform(struct?: CcMonitor.PerformanceLocalHealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        health_score_threshold: cdktn.numberToTerraform(struct!.healthScoreThreshold),
        min_traffic_impact: cdktn.numberToTerraform(struct!.minTrafficImpact),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccMonitorPerformanceLocalHealthEventsConfigPropertyToHclTerraform(struct?: CcMonitor.PerformanceLocalHealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        health_score_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthScoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_traffic_impact: {
            value: cdktn.numberToHclTerraform(struct!.minTrafficImpact),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccMonitorHealthEventsConfigPropertyToTerraform(struct?: CcMonitor.HealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_local_health_events_config: ccMonitorLocalHealthEventsConfigPropertyToTerraform(struct!.availabilityLocalHealthEventsConfig),
        availability_score_threshold: cdktn.numberToTerraform(struct!.availabilityScoreThreshold),
        performance_local_health_events_config: ccMonitorPerformanceLocalHealthEventsConfigPropertyToTerraform(struct!.performanceLocalHealthEventsConfig),
        performance_score_threshold: cdktn.numberToTerraform(struct!.performanceScoreThreshold),
    }
}


export function ccMonitorHealthEventsConfigPropertyToHclTerraform(struct?: CcMonitor.HealthEventsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_local_health_events_config: {
            value: ccMonitorLocalHealthEventsConfigPropertyToHclTerraform(struct!.availabilityLocalHealthEventsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LocalHealthEventsConfigProperty",
        },
        availability_score_threshold: {
            value: cdktn.numberToHclTerraform(struct!.availabilityScoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        performance_local_health_events_config: {
            value: ccMonitorPerformanceLocalHealthEventsConfigPropertyToHclTerraform(struct!.performanceLocalHealthEventsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PerformanceLocalHealthEventsConfigProperty",
        },
        performance_score_threshold: {
            value: cdktn.numberToHclTerraform(struct!.performanceScoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitorS3ConfigPropertyToTerraform(struct?: CcMonitor.S3ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        log_delivery_status: cdktn.stringToTerraform(struct!.logDeliveryStatus),
    }
}


export function ccMonitorS3ConfigPropertyToHclTerraform(struct?: CcMonitor.S3ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_delivery_status: {
            value: cdktn.stringToHclTerraform(struct!.logDeliveryStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitorInternetMeasurementsLogDeliveryPropertyToTerraform(struct?: CcMonitor.InternetMeasurementsLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_config: ccMonitorS3ConfigPropertyToTerraform(struct!.s3Config),
    }
}


export function ccMonitorInternetMeasurementsLogDeliveryPropertyToHclTerraform(struct?: CcMonitor.InternetMeasurementsLogDeliveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_config: {
            value: ccMonitorS3ConfigPropertyToHclTerraform(struct!.s3Config),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitorTagPropertyToTerraform(struct?: CcMonitor.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMonitorTagPropertyToHclTerraform(struct?: CcMonitor.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMonitor {
export interface LocalHealthEventsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold CcMonitor#health_score_threshold}
    */
    readonly healthScoreThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact CcMonitor#min_traffic_impact}
    */
    readonly minTrafficImpact?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status CcMonitor#status}
    */
    readonly status?: string;
}
export class LocalHealthEventsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocalHealthEventsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthScoreThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthScoreThreshold = this._healthScoreThreshold;
        }
        if (this._minTrafficImpact !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTrafficImpact = this._minTrafficImpact;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalHealthEventsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthScoreThreshold = undefined;
            this._minTrafficImpact = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthScoreThreshold = value.healthScoreThreshold;
            this._minTrafficImpact = value.minTrafficImpact;
            this._status = value.status;
        }
    }

    // health_score_threshold - computed: true, optional: true, required: false
    private _healthScoreThreshold?: number; 
    public get healthScoreThreshold() {
        return this.getNumberAttribute('health_score_threshold');
    }
    public set healthScoreThreshold(value: number) {
        this._healthScoreThreshold = value;
    }
    public resetHealthScoreThreshold() {
        this._healthScoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthScoreThresholdInput() {
        return this._healthScoreThreshold;
    }

    // min_traffic_impact - computed: true, optional: true, required: false
    private _minTrafficImpact?: number; 
    public get minTrafficImpact() {
        return this.getNumberAttribute('min_traffic_impact');
    }
    public set minTrafficImpact(value: number) {
        this._minTrafficImpact = value;
    }
    public resetMinTrafficImpact() {
        this._minTrafficImpact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTrafficImpactInput() {
        return this._minTrafficImpact;
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
export interface PerformanceLocalHealthEventsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#health_score_threshold CcMonitor#health_score_threshold}
    */
    readonly healthScoreThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#min_traffic_impact CcMonitor#min_traffic_impact}
    */
    readonly minTrafficImpact?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#status CcMonitor#status}
    */
    readonly status?: string;
}
export class PerformanceLocalHealthEventsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PerformanceLocalHealthEventsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthScoreThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthScoreThreshold = this._healthScoreThreshold;
        }
        if (this._minTrafficImpact !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTrafficImpact = this._minTrafficImpact;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PerformanceLocalHealthEventsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthScoreThreshold = undefined;
            this._minTrafficImpact = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthScoreThreshold = value.healthScoreThreshold;
            this._minTrafficImpact = value.minTrafficImpact;
            this._status = value.status;
        }
    }

    // health_score_threshold - computed: true, optional: true, required: false
    private _healthScoreThreshold?: number; 
    public get healthScoreThreshold() {
        return this.getNumberAttribute('health_score_threshold');
    }
    public set healthScoreThreshold(value: number) {
        this._healthScoreThreshold = value;
    }
    public resetHealthScoreThreshold() {
        this._healthScoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthScoreThresholdInput() {
        return this._healthScoreThreshold;
    }

    // min_traffic_impact - computed: true, optional: true, required: false
    private _minTrafficImpact?: number; 
    public get minTrafficImpact() {
        return this.getNumberAttribute('min_traffic_impact');
    }
    public set minTrafficImpact(value: number) {
        this._minTrafficImpact = value;
    }
    public resetMinTrafficImpact() {
        this._minTrafficImpact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTrafficImpactInput() {
        return this._minTrafficImpact;
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
export interface HealthEventsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config CcMonitor#availability_local_health_events_config}
    */
    readonly availabilityLocalHealthEventsConfig?: LocalHealthEventsConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#availability_score_threshold CcMonitor#availability_score_threshold}
    */
    readonly availabilityScoreThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config CcMonitor#performance_local_health_events_config}
    */
    readonly performanceLocalHealthEventsConfig?: PerformanceLocalHealthEventsConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#performance_score_threshold CcMonitor#performance_score_threshold}
    */
    readonly performanceScoreThreshold?: number;
}
export class HealthEventsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthEventsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityLocalHealthEventsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityLocalHealthEventsConfig = this._availabilityLocalHealthEventsConfig?.internalValue;
        }
        if (this._availabilityScoreThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityScoreThreshold = this._availabilityScoreThreshold;
        }
        if (this._performanceLocalHealthEventsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.performanceLocalHealthEventsConfig = this._performanceLocalHealthEventsConfig?.internalValue;
        }
        if (this._performanceScoreThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.performanceScoreThreshold = this._performanceScoreThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthEventsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityLocalHealthEventsConfig.internalValue = undefined;
            this._availabilityScoreThreshold = undefined;
            this._performanceLocalHealthEventsConfig.internalValue = undefined;
            this._performanceScoreThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityLocalHealthEventsConfig.internalValue = value.availabilityLocalHealthEventsConfig;
            this._availabilityScoreThreshold = value.availabilityScoreThreshold;
            this._performanceLocalHealthEventsConfig.internalValue = value.performanceLocalHealthEventsConfig;
            this._performanceScoreThreshold = value.performanceScoreThreshold;
        }
    }

    // availability_local_health_events_config - computed: true, optional: true, required: false
    private _availabilityLocalHealthEventsConfig = new LocalHealthEventsConfigPropertyOutputReference(this, "availability_local_health_events_config");
    public get availabilityLocalHealthEventsConfig() {
        return this._availabilityLocalHealthEventsConfig;
    }
    public putAvailabilityLocalHealthEventsConfig(value: LocalHealthEventsConfigProperty) {
        this._availabilityLocalHealthEventsConfig.internalValue = value;
    }
    public resetAvailabilityLocalHealthEventsConfig() {
        this._availabilityLocalHealthEventsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityLocalHealthEventsConfigInput() {
        return this._availabilityLocalHealthEventsConfig.internalValue;
    }

    // availability_score_threshold - computed: true, optional: true, required: false
    private _availabilityScoreThreshold?: number; 
    public get availabilityScoreThreshold() {
        return this.getNumberAttribute('availability_score_threshold');
    }
    public set availabilityScoreThreshold(value: number) {
        this._availabilityScoreThreshold = value;
    }
    public resetAvailabilityScoreThreshold() {
        this._availabilityScoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityScoreThresholdInput() {
        return this._availabilityScoreThreshold;
    }

    // performance_local_health_events_config - computed: true, optional: true, required: false
    private _performanceLocalHealthEventsConfig = new PerformanceLocalHealthEventsConfigPropertyOutputReference(this, "performance_local_health_events_config");
    public get performanceLocalHealthEventsConfig() {
        return this._performanceLocalHealthEventsConfig;
    }
    public putPerformanceLocalHealthEventsConfig(value: PerformanceLocalHealthEventsConfigProperty) {
        this._performanceLocalHealthEventsConfig.internalValue = value;
    }
    public resetPerformanceLocalHealthEventsConfig() {
        this._performanceLocalHealthEventsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceLocalHealthEventsConfigInput() {
        return this._performanceLocalHealthEventsConfig.internalValue;
    }

    // performance_score_threshold - computed: true, optional: true, required: false
    private _performanceScoreThreshold?: number; 
    public get performanceScoreThreshold() {
        return this.getNumberAttribute('performance_score_threshold');
    }
    public set performanceScoreThreshold(value: number) {
        this._performanceScoreThreshold = value;
    }
    public resetPerformanceScoreThreshold() {
        this._performanceScoreThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceScoreThresholdInput() {
        return this._performanceScoreThreshold;
    }
}
export interface S3ConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_name CcMonitor#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#bucket_prefix CcMonitor#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#log_delivery_status CcMonitor#log_delivery_status}
    */
    readonly logDeliveryStatus?: string;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._logDeliveryStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDeliveryStatus = this._logDeliveryStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._logDeliveryStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._logDeliveryStatus = value.logDeliveryStatus;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // log_delivery_status - computed: true, optional: true, required: false
    private _logDeliveryStatus?: string; 
    public get logDeliveryStatus() {
        return this.getStringAttribute('log_delivery_status');
    }
    public set logDeliveryStatus(value: string) {
        this._logDeliveryStatus = value;
    }
    public resetLogDeliveryStatus() {
        this._logDeliveryStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryStatusInput() {
        return this._logDeliveryStatus;
    }
}
export interface InternetMeasurementsLogDeliveryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#s3_config CcMonitor#s3_config}
    */
    readonly s3Config?: S3ConfigProperty;
}
export class InternetMeasurementsLogDeliveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InternetMeasurementsLogDeliveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Config = this._s3Config?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternetMeasurementsLogDeliveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Config.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Config.internalValue = value.s3Config;
        }
    }

    // s3_config - computed: true, optional: true, required: false
    private _s3Config = new S3ConfigPropertyOutputReference(this, "s3_config");
    public get s3Config() {
        return this._s3Config;
    }
    public putS3Config(value: S3ConfigProperty) {
        this._s3Config.internalValue = value;
    }
    public resetS3Config() {
        this._s3Config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigInput() {
        return this._s3Config.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#key CcMonitor#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/internetmonitor_monitor#value CcMonitor#value}
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
