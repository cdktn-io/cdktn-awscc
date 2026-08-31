// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriptionFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
    *  If this value is ``true``, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#apply_on_transformed_logs CcSubscriptionFilter#apply_on_transformed_logs}
    */
    readonly applyOnTransformedLogs?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#destination_arn CcSubscriptionFilter#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#distribution CcSubscriptionFilter#distribution}
    */
    readonly distribution?: string;
    /**
    * The list of system fields that are included in the log events sent to the subscription destination. Returns the ``emitSystemFields`` value if it was specified when the subscription filter was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#emit_system_fields CcSubscriptionFilter#emit_system_fields}
    */
    readonly emitSystemFields?: string[];
    /**
    * The filter expression that specifies which log events are processed by this subscription filter based on system fields. Returns the ``fieldSelectionCriteria`` value if it was specified when the subscription filter was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#field_selection_criteria CcSubscriptionFilter#field_selection_criteria}
    */
    readonly fieldSelectionCriteria?: string;
    /**
    * The name of the subscription filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#filter_name CcSubscriptionFilter#filter_name}
    */
    readonly filterName?: string;
    /**
    * The filtering expressions that restrict what gets delivered to the destination AWS resource. For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#filter_pattern CcSubscriptionFilter#filter_pattern}
    */
    readonly filterPattern: string;
    /**
    * The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#log_group_name CcSubscriptionFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#role_arn CcSubscriptionFilter#role_arn}
    */
    readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter awscc_logs_subscription_filter}
*/
export class CcSubscriptionFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_subscription_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscriptionFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscriptionFilter to import
    * @param importFromId The id of the existing CcSubscriptionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscriptionFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_subscription_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_subscription_filter awscc_logs_subscription_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriptionFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriptionFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_subscription_filter',
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
        this._applyOnTransformedLogs = config.applyOnTransformedLogs;
        this._destinationArn = config.destinationArn;
        this._distribution = config.distribution;
        this._emitSystemFields = config.emitSystemFields;
        this._fieldSelectionCriteria = config.fieldSelectionCriteria;
        this._filterName = config.filterName;
        this._filterPattern = config.filterPattern;
        this._logGroupName = config.logGroupName;
        this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // apply_on_transformed_logs - computed: true, optional: true, required: false
    private _applyOnTransformedLogs?: boolean | cdktn.IResolvable; 
    public get applyOnTransformedLogs() {
        return this.getBooleanAttribute('apply_on_transformed_logs');
    }
    public set applyOnTransformedLogs(value: boolean | cdktn.IResolvable) {
        this._applyOnTransformedLogs = value;
    }
    public resetApplyOnTransformedLogs() {
        this._applyOnTransformedLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyOnTransformedLogsInput() {
        return this._applyOnTransformedLogs;
    }

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }

    // distribution - computed: true, optional: true, required: false
    private _distribution?: string; 
    public get distribution() {
        return this.getStringAttribute('distribution');
    }
    public set distribution(value: string) {
        this._distribution = value;
    }
    public resetDistribution() {
        this._distribution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionInput() {
        return this._distribution;
    }

    // emit_system_fields - computed: true, optional: true, required: false
    private _emitSystemFields?: string[]; 
    public get emitSystemFields() {
        return this.getListAttribute('emit_system_fields');
    }
    public set emitSystemFields(value: string[]) {
        this._emitSystemFields = value;
    }
    public resetEmitSystemFields() {
        this._emitSystemFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emitSystemFieldsInput() {
        return this._emitSystemFields;
    }

    // field_selection_criteria - computed: true, optional: true, required: false
    private _fieldSelectionCriteria?: string; 
    public get fieldSelectionCriteria() {
        return this.getStringAttribute('field_selection_criteria');
    }
    public set fieldSelectionCriteria(value: string) {
        this._fieldSelectionCriteria = value;
    }
    public resetFieldSelectionCriteria() {
        this._fieldSelectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldSelectionCriteriaInput() {
        return this._fieldSelectionCriteria;
    }

    // filter_name - computed: true, optional: true, required: false
    private _filterName?: string; 
    public get filterName() {
        return this.getStringAttribute('filter_name');
    }
    public set filterName(value: string) {
        this._filterName = value;
    }
    public resetFilterName() {
        this._filterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterNameInput() {
        return this._filterName;
    }

    // filter_pattern - computed: false, optional: false, required: true
    private _filterPattern?: string; 
    public get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
        this._filterPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
        return this._filterPattern;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
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
            apply_on_transformed_logs: cdktn.booleanToTerraform(this._applyOnTransformedLogs),
            destination_arn: cdktn.stringToTerraform(this._destinationArn),
            distribution: cdktn.stringToTerraform(this._distribution),
            emit_system_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._emitSystemFields),
            field_selection_criteria: cdktn.stringToTerraform(this._fieldSelectionCriteria),
            filter_name: cdktn.stringToTerraform(this._filterName),
            filter_pattern: cdktn.stringToTerraform(this._filterPattern),
            log_group_name: cdktn.stringToTerraform(this._logGroupName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            apply_on_transformed_logs: {
                value: cdktn.booleanToHclTerraform(this._applyOnTransformedLogs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            destination_arn: {
                value: cdktn.stringToHclTerraform(this._destinationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            distribution: {
                value: cdktn.stringToHclTerraform(this._distribution),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            emit_system_fields: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._emitSystemFields),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            field_selection_criteria: {
                value: cdktn.stringToHclTerraform(this._fieldSelectionCriteria),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_name: {
                value: cdktn.stringToHclTerraform(this._filterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_pattern: {
                value: cdktn.stringToHclTerraform(this._filterPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_group_name: {
                value: cdktn.stringToHclTerraform(this._logGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export namespace CcSubscriptionFilter {
}
