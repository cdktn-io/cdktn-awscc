// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueryLoggingConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the CloudWatch Logs log group in us-east-1 that Amazon Route 53 publishes query logs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config#cloudwatch_logs_log_group_arn CcQueryLoggingConfig#cloudwatch_logs_log_group_arn}
    */
    readonly cloudwatchLogsLogGroupArn: string;
    /**
    * The ID of the public hosted zone that Amazon Route 53 logs queries for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config#hosted_zone_id CcQueryLoggingConfig#hosted_zone_id}
    */
    readonly hostedZoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config awscc_route53_query_logging_config}
*/
export class CcQueryLoggingConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_query_logging_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueryLoggingConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueryLoggingConfig to import
    * @param importFromId The id of the existing CcQueryLoggingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueryLoggingConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_query_logging_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_query_logging_config awscc_route53_query_logging_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueryLoggingConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcQueryLoggingConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_query_logging_config',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._cloudwatchLogsLogGroupArn = config.cloudwatchLogsLogGroupArn;
        this._hostedZoneId = config.hostedZoneId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cloudwatch_logs_log_group_arn - computed: false, optional: false, required: true
    private _cloudwatchLogsLogGroupArn?: string; 
    public get cloudwatchLogsLogGroupArn() {
        return this.getStringAttribute('cloudwatch_logs_log_group_arn');
    }
    public set cloudwatchLogsLogGroupArn(value: string) {
        this._cloudwatchLogsLogGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsLogGroupArnInput() {
        return this._cloudwatchLogsLogGroupArn;
    }

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // query_logging_config_id - computed: true, optional: false, required: false
    public get queryLoggingConfigId() {
        return this.getStringAttribute('query_logging_config_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cloudwatch_logs_log_group_arn: cdktn.stringToTerraform(this._cloudwatchLogsLogGroupArn),
            hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cloudwatch_logs_log_group_arn: {
                value: cdktn.stringToHclTerraform(this._cloudwatchLogsLogGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosted_zone_id: {
                value: cdktn.stringToHclTerraform(this._hostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcQueryLoggingConfig {
}
