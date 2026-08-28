// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLogAnomalyDetectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Account ID for owner of detector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#account_id CcLogAnomalyDetector#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time CcLogAnomalyDetector#anomaly_visibility_time}
    */
    readonly anomalyVisibilityTime?: number;
    /**
    * Name of detector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#detector_name CcLogAnomalyDetector#detector_name}
    */
    readonly detectorName?: string;
    /**
    * How often log group is evaluated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#evaluation_frequency CcLogAnomalyDetector#evaluation_frequency}
    */
    readonly evaluationFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#filter_pattern CcLogAnomalyDetector#filter_pattern}
    */
    readonly filterPattern?: string;
    /**
    * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#kms_key_id CcLogAnomalyDetector#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * List of Arns for the given log group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#log_group_arn_list CcLogAnomalyDetector#log_group_arn_list}
    */
    readonly logGroupArnList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}
*/
export class CcLogAnomalyDetector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_log_anomaly_detector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLogAnomalyDetector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLogAnomalyDetector to import
    * @param importFromId The id of the existing CcLogAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLogAnomalyDetector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_log_anomaly_detector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLogAnomalyDetectorProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLogAnomalyDetectorProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_log_anomaly_detector',
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
        this._accountId = config.accountId;
        this._anomalyVisibilityTime = config.anomalyVisibilityTime;
        this._detectorName = config.detectorName;
        this._evaluationFrequency = config.evaluationFrequency;
        this._filterPattern = config.filterPattern;
        this._kmsKeyId = config.kmsKeyId;
        this._logGroupArnList = config.logGroupArnList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // anomaly_detector_arn - computed: true, optional: false, required: false
    public get anomalyDetectorArn() {
        return this.getStringAttribute('anomaly_detector_arn');
    }

    // anomaly_detector_status - computed: true, optional: false, required: false
    public get anomalyDetectorStatus() {
        return this.getStringAttribute('anomaly_detector_status');
    }

    // anomaly_visibility_time - computed: true, optional: true, required: false
    private _anomalyVisibilityTime?: number; 
    public get anomalyVisibilityTime() {
        return this.getNumberAttribute('anomaly_visibility_time');
    }
    public set anomalyVisibilityTime(value: number) {
        this._anomalyVisibilityTime = value;
    }
    public resetAnomalyVisibilityTime() {
        this._anomalyVisibilityTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyVisibilityTimeInput() {
        return this._anomalyVisibilityTime;
    }

    // creation_time_stamp - computed: true, optional: false, required: false
    public get creationTimeStamp() {
        return this.getNumberAttribute('creation_time_stamp');
    }

    // detector_name - computed: true, optional: true, required: false
    private _detectorName?: string; 
    public get detectorName() {
        return this.getStringAttribute('detector_name');
    }
    public set detectorName(value: string) {
        this._detectorName = value;
    }
    public resetDetectorName() {
        this._detectorName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorNameInput() {
        return this._detectorName;
    }

    // evaluation_frequency - computed: true, optional: true, required: false
    private _evaluationFrequency?: string; 
    public get evaluationFrequency() {
        return this.getStringAttribute('evaluation_frequency');
    }
    public set evaluationFrequency(value: string) {
        this._evaluationFrequency = value;
    }
    public resetEvaluationFrequency() {
        this._evaluationFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationFrequencyInput() {
        return this._evaluationFrequency;
    }

    // filter_pattern - computed: true, optional: true, required: false
    private _filterPattern?: string; 
    public get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
        this._filterPattern = value;
    }
    public resetFilterPattern() {
        this._filterPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
        return this._filterPattern;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // last_modified_time_stamp - computed: true, optional: false, required: false
    public get lastModifiedTimeStamp() {
        return this.getNumberAttribute('last_modified_time_stamp');
    }

    // log_group_arn_list - computed: true, optional: true, required: false
    private _logGroupArnList?: string[]; 
    public get logGroupArnList() {
        return cdktn.Fn.tolist(this.getListAttribute('log_group_arn_list'));
    }
    public set logGroupArnList(value: string[]) {
        this._logGroupArnList = value;
    }
    public resetLogGroupArnList() {
        this._logGroupArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnListInput() {
        return this._logGroupArnList;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_id: cdktn.stringToTerraform(this._accountId),
            anomaly_visibility_time: cdktn.numberToTerraform(this._anomalyVisibilityTime),
            detector_name: cdktn.stringToTerraform(this._detectorName),
            evaluation_frequency: cdktn.stringToTerraform(this._evaluationFrequency),
            filter_pattern: cdktn.stringToTerraform(this._filterPattern),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            log_group_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logGroupArnList),
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
            anomaly_visibility_time: {
                value: cdktn.numberToHclTerraform(this._anomalyVisibilityTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            detector_name: {
                value: cdktn.stringToHclTerraform(this._detectorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluation_frequency: {
                value: cdktn.stringToHclTerraform(this._evaluationFrequency),
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
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_group_arn_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logGroupArnList),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLogAnomalyDetector {
}
