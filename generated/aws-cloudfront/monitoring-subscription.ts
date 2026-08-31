// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMonitoringSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the distribution that you are enabling metrics for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription#distribution_id CcMonitoringSubscription#distribution_id}
    */
    readonly distributionId: string;
    /**
    * A subscription configuration for additional CloudWatch metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription#monitoring_subscription CcMonitoringSubscription#monitoring_subscription}
    */
    readonly monitoringSubscription: CcMonitoringSubscription.MonitoringSubscriptionProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription}
*/
export class CcMonitoringSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_monitoring_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMonitoringSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMonitoringSubscription to import
    * @param importFromId The id of the existing CcMonitoringSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMonitoringSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_monitoring_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMonitoringSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcMonitoringSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_monitoring_subscription',
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
        this._distributionId = config.distributionId;
        this._monitoringSubscription.internalValue = config.monitoringSubscription;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // distribution_id - computed: false, optional: false, required: true
    private _distributionId?: string; 
    public get distributionId() {
        return this.getStringAttribute('distribution_id');
    }
    public set distributionId(value: string) {
        this._distributionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionIdInput() {
        return this._distributionId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // monitoring_subscription - computed: false, optional: false, required: true
    private _monitoringSubscription = new CcMonitoringSubscription.MonitoringSubscriptionPropertyOutputReference(this, "monitoring_subscription");
    public get monitoringSubscription() {
        return this._monitoringSubscription;
    }
    public putMonitoringSubscription(value: CcMonitoringSubscription.MonitoringSubscriptionProperty) {
        this._monitoringSubscription.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringSubscriptionInput() {
        return this._monitoringSubscription.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            distribution_id: cdktn.stringToTerraform(this._distributionId),
            monitoring_subscription: ccMonitoringSubscriptionMonitoringSubscriptionPropertyToTerraform(this._monitoringSubscription.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            distribution_id: {
                value: cdktn.stringToHclTerraform(this._distributionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitoring_subscription: {
                value: ccMonitoringSubscriptionMonitoringSubscriptionPropertyToHclTerraform(this._monitoringSubscription.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMonitoringSubscription.MonitoringSubscriptionProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMonitoringSubscriptionRealtimeMetricsSubscriptionConfigPropertyToTerraform(struct?: CcMonitoringSubscription.RealtimeMetricsSubscriptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        realtime_metrics_subscription_status: cdktn.stringToTerraform(struct!.realtimeMetricsSubscriptionStatus),
    }
}


export function ccMonitoringSubscriptionRealtimeMetricsSubscriptionConfigPropertyToHclTerraform(struct?: CcMonitoringSubscription.RealtimeMetricsSubscriptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        realtime_metrics_subscription_status: {
            value: cdktn.stringToHclTerraform(struct!.realtimeMetricsSubscriptionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringSubscriptionMonitoringSubscriptionPropertyToTerraform(struct?: CcMonitoringSubscription.MonitoringSubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        realtime_metrics_subscription_config: ccMonitoringSubscriptionRealtimeMetricsSubscriptionConfigPropertyToTerraform(struct!.realtimeMetricsSubscriptionConfig),
    }
}


export function ccMonitoringSubscriptionMonitoringSubscriptionPropertyToHclTerraform(struct?: CcMonitoringSubscription.MonitoringSubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        realtime_metrics_subscription_config: {
            value: ccMonitoringSubscriptionRealtimeMetricsSubscriptionConfigPropertyToHclTerraform(struct!.realtimeMetricsSubscriptionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RealtimeMetricsSubscriptionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMonitoringSubscription {
export interface RealtimeMetricsSubscriptionConfigProperty {
    /**
    * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CcMonitoringSubscription#realtime_metrics_subscription_status}
    */
    readonly realtimeMetricsSubscriptionStatus?: string;
}
export class RealtimeMetricsSubscriptionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RealtimeMetricsSubscriptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._realtimeMetricsSubscriptionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.realtimeMetricsSubscriptionStatus = this._realtimeMetricsSubscriptionStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RealtimeMetricsSubscriptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._realtimeMetricsSubscriptionStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._realtimeMetricsSubscriptionStatus = value.realtimeMetricsSubscriptionStatus;
        }
    }

    // realtime_metrics_subscription_status - computed: true, optional: true, required: false
    private _realtimeMetricsSubscriptionStatus?: string; 
    public get realtimeMetricsSubscriptionStatus() {
        return this.getStringAttribute('realtime_metrics_subscription_status');
    }
    public set realtimeMetricsSubscriptionStatus(value: string) {
        this._realtimeMetricsSubscriptionStatus = value;
    }
    public resetRealtimeMetricsSubscriptionStatus() {
        this._realtimeMetricsSubscriptionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get realtimeMetricsSubscriptionStatusInput() {
        return this._realtimeMetricsSubscriptionStatus;
    }
}
export interface MonitoringSubscriptionProperty {
    /**
    * A subscription configuration for additional CloudWatch metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CcMonitoringSubscription#realtime_metrics_subscription_config}
    */
    readonly realtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfigProperty;
}
export class MonitoringSubscriptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringSubscriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._realtimeMetricsSubscriptionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.realtimeMetricsSubscriptionConfig = this._realtimeMetricsSubscriptionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringSubscriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._realtimeMetricsSubscriptionConfig.internalValue = value.realtimeMetricsSubscriptionConfig;
        }
    }

    // realtime_metrics_subscription_config - computed: true, optional: true, required: false
    private _realtimeMetricsSubscriptionConfig = new RealtimeMetricsSubscriptionConfigPropertyOutputReference(this, "realtime_metrics_subscription_config");
    public get realtimeMetricsSubscriptionConfig() {
        return this._realtimeMetricsSubscriptionConfig;
    }
    public putRealtimeMetricsSubscriptionConfig(value: RealtimeMetricsSubscriptionConfigProperty) {
        this._realtimeMetricsSubscriptionConfig.internalValue = value;
    }
    public resetRealtimeMetricsSubscriptionConfig() {
        this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get realtimeMetricsSubscriptionConfigInput() {
        return this._realtimeMetricsSubscriptionConfig.internalValue;
    }
}
}
