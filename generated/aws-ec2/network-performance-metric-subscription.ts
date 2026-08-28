// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkPerformanceMetricSubscriptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The target Region or Availability Zone for the metric to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription#destination CcNetworkPerformanceMetricSubscription#destination}
    */
    readonly destination: string;
    /**
    * The metric type to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription#metric CcNetworkPerformanceMetricSubscription#metric}
    */
    readonly metric: string;
    /**
    * The starting Region or Availability Zone for metric to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription#source CcNetworkPerformanceMetricSubscription#source}
    */
    readonly source: string;
    /**
    * The statistic to subscribe to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription#statistic CcNetworkPerformanceMetricSubscription#statistic}
    */
    readonly statistic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription awscc_ec2_network_performance_metric_subscription}
*/
export class CcNetworkPerformanceMetricSubscription extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_network_performance_metric_subscription";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkPerformanceMetricSubscription resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkPerformanceMetricSubscription to import
    * @param importFromId The id of the existing CcNetworkPerformanceMetricSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkPerformanceMetricSubscription to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_performance_metric_subscription", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_performance_metric_subscription awscc_ec2_network_performance_metric_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkPerformanceMetricSubscriptionProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkPerformanceMetricSubscriptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_performance_metric_subscription',
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
        this._destination = config.destination;
        this._metric = config.metric;
        this._source = config.source;
        this._statistic = config.statistic;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination - computed: false, optional: false, required: true
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metric - computed: false, optional: false, required: true
    private _metric?: string; 
    public get metric() {
        return this.getStringAttribute('metric');
    }
    public set metric(value: string) {
        this._metric = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric;
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // statistic - computed: false, optional: false, required: true
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination: cdktn.stringToTerraform(this._destination),
            metric: cdktn.stringToTerraform(this._metric),
            source: cdktn.stringToTerraform(this._source),
            statistic: cdktn.stringToTerraform(this._statistic),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination: {
                value: cdktn.stringToHclTerraform(this._destination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric: {
                value: cdktn.stringToHclTerraform(this._metric),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statistic: {
                value: cdktn.stringToHclTerraform(this._statistic),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcNetworkPerformanceMetricSubscription {
}
