// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnomalyDetectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration options for the AnomalyDetector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_config CcAnomalyDetector#anomaly_detector_config}
    */
    readonly anomalyDetectorConfig: CcAnomalyDetector.AnomalyDetectorConfigProperty;
    /**
    * A description for the AnomalyDetector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_description CcAnomalyDetector#anomaly_detector_description}
    */
    readonly anomalyDetectorDescription?: string;
    /**
    * Name for the Amazon Lookout for Metrics Anomaly Detector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_name CcAnomalyDetector#anomaly_detector_name}
    */
    readonly anomalyDetectorName?: string;
    /**
    * KMS key used to encrypt the AnomalyDetector data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#kms_key_arn CcAnomalyDetector#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * List of metric sets for anomaly detection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_set_list CcAnomalyDetector#metric_set_list}
    */
    readonly metricSetList: CcAnomalyDetector.MetricSetProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}
*/
export class CcAnomalyDetector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lookoutmetrics_anomaly_detector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnomalyDetector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnomalyDetector to import
    * @param importFromId The id of the existing CcAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnomalyDetector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lookoutmetrics_anomaly_detector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnomalyDetectorProps
    */
    public constructor(scope: Construct, id: string, config: CcAnomalyDetectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lookoutmetrics_anomaly_detector',
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
        this._anomalyDetectorConfig.internalValue = config.anomalyDetectorConfig;
        this._anomalyDetectorDescription = config.anomalyDetectorDescription;
        this._anomalyDetectorName = config.anomalyDetectorName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._metricSetList.internalValue = config.metricSetList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // anomaly_detector_config - computed: false, optional: false, required: true
    private _anomalyDetectorConfig = new CcAnomalyDetector.AnomalyDetectorConfigPropertyOutputReference(this, "anomaly_detector_config");
    public get anomalyDetectorConfig() {
        return this._anomalyDetectorConfig;
    }
    public putAnomalyDetectorConfig(value: CcAnomalyDetector.AnomalyDetectorConfigProperty) {
        this._anomalyDetectorConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectorConfigInput() {
        return this._anomalyDetectorConfig.internalValue;
    }

    // anomaly_detector_description - computed: true, optional: true, required: false
    private _anomalyDetectorDescription?: string; 
    public get anomalyDetectorDescription() {
        return this.getStringAttribute('anomaly_detector_description');
    }
    public set anomalyDetectorDescription(value: string) {
        this._anomalyDetectorDescription = value;
    }
    public resetAnomalyDetectorDescription() {
        this._anomalyDetectorDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectorDescriptionInput() {
        return this._anomalyDetectorDescription;
    }

    // anomaly_detector_name - computed: true, optional: true, required: false
    private _anomalyDetectorName?: string; 
    public get anomalyDetectorName() {
        return this.getStringAttribute('anomaly_detector_name');
    }
    public set anomalyDetectorName(value: string) {
        this._anomalyDetectorName = value;
    }
    public resetAnomalyDetectorName() {
        this._anomalyDetectorName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectorNameInput() {
        return this._anomalyDetectorName;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // metric_set_list - computed: false, optional: false, required: true
    private _metricSetList = new CcAnomalyDetector.MetricSetPropertyList(this, "metric_set_list", false);
    public get metricSetList() {
        return this._metricSetList;
    }
    public putMetricSetList(value: CcAnomalyDetector.MetricSetProperty[] | cdktn.IResolvable) {
        this._metricSetList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSetListInput() {
        return this._metricSetList.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            anomaly_detector_config: ccAnomalyDetectorAnomalyDetectorConfigPropertyToTerraform(this._anomalyDetectorConfig.internalValue),
            anomaly_detector_description: cdktn.stringToTerraform(this._anomalyDetectorDescription),
            anomaly_detector_name: cdktn.stringToTerraform(this._anomalyDetectorName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            metric_set_list: cdktn.listMapper(ccAnomalyDetectorMetricSetPropertyToTerraform, false)(this._metricSetList.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            anomaly_detector_config: {
                value: ccAnomalyDetectorAnomalyDetectorConfigPropertyToHclTerraform(this._anomalyDetectorConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.AnomalyDetectorConfigProperty",
            },
            anomaly_detector_description: {
                value: cdktn.stringToHclTerraform(this._anomalyDetectorDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            anomaly_detector_name: {
                value: cdktn.stringToHclTerraform(this._anomalyDetectorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_set_list: {
                value: cdktn.listMapperHcl(ccAnomalyDetectorMetricSetPropertyToHclTerraform, false)(this._metricSetList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnomalyDetector.MetricSetPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnomalyDetectorAnomalyDetectorConfigPropertyToTerraform(struct?: CcAnomalyDetector.AnomalyDetectorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        anomaly_detector_frequency: cdktn.stringToTerraform(struct!.anomalyDetectorFrequency),
    }
}


export function ccAnomalyDetectorAnomalyDetectorConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.AnomalyDetectorConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        anomaly_detector_frequency: {
            value: cdktn.stringToHclTerraform(struct!.anomalyDetectorFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricPropertyToTerraform(struct?: CcAnomalyDetector.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_function: cdktn.stringToTerraform(struct!.aggregationFunction),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccAnomalyDetectorMetricPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_function: {
            value: cdktn.stringToHclTerraform(struct!.aggregationFunction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorAppFlowConfigPropertyToTerraform(struct?: CcAnomalyDetector.AppFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_name: cdktn.stringToTerraform(struct!.flowName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccAnomalyDetectorAppFlowConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.AppFlowConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_name: {
            value: cdktn.stringToHclTerraform(struct!.flowName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorCloudwatchConfigPropertyToTerraform(struct?: CcAnomalyDetector.CloudwatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccAnomalyDetectorCloudwatchConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.CloudwatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorVpcConfigurationPropertyToTerraform(struct?: CcAnomalyDetector.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
        subnet_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIdList),
    }
}


export function ccAnomalyDetectorVpcConfigurationPropertyToHclTerraform(struct?: CcAnomalyDetector.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorRDSSourceConfigPropertyToTerraform(struct?: CcAnomalyDetector.RDSSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_host: cdktn.stringToTerraform(struct!.databaseHost),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        database_port: cdktn.numberToTerraform(struct!.databasePort),
        db_instance_identifier: cdktn.stringToTerraform(struct!.dbInstanceIdentifier),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        vpc_configuration: ccAnomalyDetectorVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccAnomalyDetectorRDSSourceConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.RDSSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_host: {
            value: cdktn.stringToHclTerraform(struct!.databaseHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_port: {
            value: cdktn.numberToHclTerraform(struct!.databasePort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        db_instance_identifier: {
            value: cdktn.stringToHclTerraform(struct!.dbInstanceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_configuration: {
            value: ccAnomalyDetectorVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyToTerraform(struct?: CcAnomalyDetector.MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
        subnet_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIdList),
    }
}


export function ccAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorRedshiftSourceConfigPropertyToTerraform(struct?: CcAnomalyDetector.RedshiftSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
        database_host: cdktn.stringToTerraform(struct!.databaseHost),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        database_port: cdktn.numberToTerraform(struct!.databasePort),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        vpc_configuration: ccAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccAnomalyDetectorRedshiftSourceConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.RedshiftSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_host: {
            value: cdktn.stringToHclTerraform(struct!.databaseHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_port: {
            value: cdktn.numberToHclTerraform(struct!.databasePort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_configuration: {
            value: ccAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorCsvFormatDescriptorPropertyToTerraform(struct?: CcAnomalyDetector.CsvFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        charset: cdktn.stringToTerraform(struct!.charset),
        contains_header: cdktn.booleanToTerraform(struct!.containsHeader),
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        file_compression: cdktn.stringToTerraform(struct!.fileCompression),
        header_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headerList),
        quote_symbol: cdktn.stringToTerraform(struct!.quoteSymbol),
    }
}


export function ccAnomalyDetectorCsvFormatDescriptorPropertyToHclTerraform(struct?: CcAnomalyDetector.CsvFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        charset: {
            value: cdktn.stringToHclTerraform(struct!.charset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains_header: {
            value: cdktn.booleanToHclTerraform(struct!.containsHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_compression: {
            value: cdktn.stringToHclTerraform(struct!.fileCompression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headerList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        quote_symbol: {
            value: cdktn.stringToHclTerraform(struct!.quoteSymbol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorJsonFormatDescriptorPropertyToTerraform(struct?: CcAnomalyDetector.JsonFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        charset: cdktn.stringToTerraform(struct!.charset),
        file_compression: cdktn.stringToTerraform(struct!.fileCompression),
    }
}


export function ccAnomalyDetectorJsonFormatDescriptorPropertyToHclTerraform(struct?: CcAnomalyDetector.JsonFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        charset: {
            value: cdktn.stringToHclTerraform(struct!.charset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_compression: {
            value: cdktn.stringToHclTerraform(struct!.fileCompression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorFileFormatDescriptorPropertyToTerraform(struct?: CcAnomalyDetector.FileFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv_format_descriptor: ccAnomalyDetectorCsvFormatDescriptorPropertyToTerraform(struct!.csvFormatDescriptor),
        json_format_descriptor: ccAnomalyDetectorJsonFormatDescriptorPropertyToTerraform(struct!.jsonFormatDescriptor),
    }
}


export function ccAnomalyDetectorFileFormatDescriptorPropertyToHclTerraform(struct?: CcAnomalyDetector.FileFormatDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv_format_descriptor: {
            value: ccAnomalyDetectorCsvFormatDescriptorPropertyToHclTerraform(struct!.csvFormatDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvFormatDescriptorProperty",
        },
        json_format_descriptor: {
            value: ccAnomalyDetectorJsonFormatDescriptorPropertyToHclTerraform(struct!.jsonFormatDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonFormatDescriptorProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorS3SourceConfigPropertyToTerraform(struct?: CcAnomalyDetector.S3SourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_format_descriptor: ccAnomalyDetectorFileFormatDescriptorPropertyToTerraform(struct!.fileFormatDescriptor),
        historical_data_path_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.historicalDataPathList),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        templated_path_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.templatedPathList),
    }
}


export function ccAnomalyDetectorS3SourceConfigPropertyToHclTerraform(struct?: CcAnomalyDetector.S3SourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_format_descriptor: {
            value: ccAnomalyDetectorFileFormatDescriptorPropertyToHclTerraform(struct!.fileFormatDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "FileFormatDescriptorProperty",
        },
        historical_data_path_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.historicalDataPathList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        templated_path_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.templatedPathList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricSourcePropertyToTerraform(struct?: CcAnomalyDetector.MetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_flow_config: ccAnomalyDetectorAppFlowConfigPropertyToTerraform(struct!.appFlowConfig),
        cloudwatch_config: ccAnomalyDetectorCloudwatchConfigPropertyToTerraform(struct!.cloudwatchConfig),
        rds_source_config: ccAnomalyDetectorRDSSourceConfigPropertyToTerraform(struct!.rdsSourceConfig),
        redshift_source_config: ccAnomalyDetectorRedshiftSourceConfigPropertyToTerraform(struct!.redshiftSourceConfig),
        s3_source_config: ccAnomalyDetectorS3SourceConfigPropertyToTerraform(struct!.s3SourceConfig),
    }
}


export function ccAnomalyDetectorMetricSourcePropertyToHclTerraform(struct?: CcAnomalyDetector.MetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_flow_config: {
            value: ccAnomalyDetectorAppFlowConfigPropertyToHclTerraform(struct!.appFlowConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AppFlowConfigProperty",
        },
        cloudwatch_config: {
            value: ccAnomalyDetectorCloudwatchConfigPropertyToHclTerraform(struct!.cloudwatchConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchConfigProperty",
        },
        rds_source_config: {
            value: ccAnomalyDetectorRDSSourceConfigPropertyToHclTerraform(struct!.rdsSourceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RDSSourceConfigProperty",
        },
        redshift_source_config: {
            value: ccAnomalyDetectorRedshiftSourceConfigPropertyToHclTerraform(struct!.redshiftSourceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftSourceConfigProperty",
        },
        s3_source_config: {
            value: ccAnomalyDetectorS3SourceConfigPropertyToHclTerraform(struct!.s3SourceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3SourceConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorTimestampColumnPropertyToTerraform(struct?: CcAnomalyDetector.TimestampColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_format: cdktn.stringToTerraform(struct!.columnFormat),
        column_name: cdktn.stringToTerraform(struct!.columnName),
    }
}


export function ccAnomalyDetectorTimestampColumnPropertyToHclTerraform(struct?: CcAnomalyDetector.TimestampColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_format: {
            value: cdktn.stringToHclTerraform(struct!.columnFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricSetPropertyToTerraform(struct?: CcAnomalyDetector.MetricSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dimensionList),
        metric_list: cdktn.listMapper(ccAnomalyDetectorMetricPropertyToTerraform, false)(struct!.metricList),
        metric_set_description: cdktn.stringToTerraform(struct!.metricSetDescription),
        metric_set_frequency: cdktn.stringToTerraform(struct!.metricSetFrequency),
        metric_set_name: cdktn.stringToTerraform(struct!.metricSetName),
        metric_source: ccAnomalyDetectorMetricSourcePropertyToTerraform(struct!.metricSource),
        offset: cdktn.numberToTerraform(struct!.offset),
        timestamp_column: ccAnomalyDetectorTimestampColumnPropertyToTerraform(struct!.timestampColumn),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccAnomalyDetectorMetricSetPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dimensionList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        metric_list: {
            value: cdktn.listMapperHcl(ccAnomalyDetectorMetricPropertyToHclTerraform, false)(struct!.metricList),
            isBlock: true,
            type: "list",
            storageClassType: "MetricPropertyList",
        },
        metric_set_description: {
            value: cdktn.stringToHclTerraform(struct!.metricSetDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_set_frequency: {
            value: cdktn.stringToHclTerraform(struct!.metricSetFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_set_name: {
            value: cdktn.stringToHclTerraform(struct!.metricSetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_source: {
            value: ccAnomalyDetectorMetricSourcePropertyToHclTerraform(struct!.metricSource),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricSourceProperty",
        },
        offset: {
            value: cdktn.numberToHclTerraform(struct!.offset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_column: {
            value: ccAnomalyDetectorTimestampColumnPropertyToHclTerraform(struct!.timestampColumn),
            isBlock: true,
            type: "struct",
            storageClassType: "TimestampColumnProperty",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAnomalyDetector {
export interface AnomalyDetectorConfigProperty {
    /**
    * Frequency of anomaly detection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#anomaly_detector_frequency CcAnomalyDetector#anomaly_detector_frequency}
    */
    readonly anomalyDetectorFrequency: string;
}
export class AnomalyDetectorConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnomalyDetectorConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._anomalyDetectorFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.anomalyDetectorFrequency = this._anomalyDetectorFrequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnomalyDetectorConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anomalyDetectorFrequency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anomalyDetectorFrequency = value.anomalyDetectorFrequency;
        }
    }

    // anomaly_detector_frequency - computed: false, optional: false, required: true
    private _anomalyDetectorFrequency?: string; 
    public get anomalyDetectorFrequency() {
        return this.getStringAttribute('anomaly_detector_frequency');
    }
    public set anomalyDetectorFrequency(value: string) {
        this._anomalyDetectorFrequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectorFrequencyInput() {
        return this._anomalyDetectorFrequency;
    }
}
export interface MetricProperty {
    /**
    * Operator used to aggregate metric values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#aggregation_function CcAnomalyDetector#aggregation_function}
    */
    readonly aggregationFunction: string;
    /**
    * Name of a column in the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_name CcAnomalyDetector#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#namespace CcAnomalyDetector#namespace}
    */
    readonly namespace?: string;
}
export class MetricPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationFunction !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationFunction = this._aggregationFunction;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationFunction = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationFunction = value.aggregationFunction;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // aggregation_function - computed: false, optional: false, required: true
    private _aggregationFunction?: string; 
    public get aggregationFunction() {
        return this.getStringAttribute('aggregation_function');
    }
    public set aggregationFunction(value: string) {
        this._aggregationFunction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationFunctionInput() {
        return this._aggregationFunction;
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
}

export class MetricPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricPropertyOutputReference {
        return new MetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AppFlowConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#flow_name CcAnomalyDetector#flow_name}
    */
    readonly flowName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#role_arn CcAnomalyDetector#role_arn}
    */
    readonly roleArn?: string;
}
export class AppFlowConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppFlowConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowName !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowName = this._flowName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppFlowConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowName = value.flowName;
            this._roleArn = value.roleArn;
        }
    }

    // flow_name - computed: true, optional: true, required: false
    private _flowName?: string; 
    public get flowName() {
        return this.getStringAttribute('flow_name');
    }
    public set flowName(value: string) {
        this._flowName = value;
    }
    public resetFlowName() {
        this._flowName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowNameInput() {
        return this._flowName;
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
}
export interface CloudwatchConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#role_arn CcAnomalyDetector#role_arn}
    */
    readonly roleArn?: string;
}
export class CloudwatchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
        }
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
}
export interface VpcConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list CcAnomalyDetector#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list CcAnomalyDetector#subnet_id_list}
    */
    readonly subnetIdList?: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIdList = this._securityGroupIdList;
        }
        if (this._subnetIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIdList = this._subnetIdList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIdList = undefined;
            this._subnetIdList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIdList = value.securityGroupIdList;
            this._subnetIdList = value.subnetIdList;
        }
    }

    // security_group_id_list - computed: true, optional: true, required: false
    private _securityGroupIdList?: string[]; 
    public get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    public set securityGroupIdList(value: string[]) {
        this._securityGroupIdList = value;
    }
    public resetSecurityGroupIdList() {
        this._securityGroupIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdListInput() {
        return this._securityGroupIdList;
    }

    // subnet_id_list - computed: true, optional: true, required: false
    private _subnetIdList?: string[]; 
    public get subnetIdList() {
        return this.getListAttribute('subnet_id_list');
    }
    public set subnetIdList(value: string[]) {
        this._subnetIdList = value;
    }
    public resetSubnetIdList() {
        this._subnetIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdListInput() {
        return this._subnetIdList;
    }
}
export interface RDSSourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_host CcAnomalyDetector#database_host}
    */
    readonly databaseHost?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_name CcAnomalyDetector#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_port CcAnomalyDetector#database_port}
    */
    readonly databasePort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#db_instance_identifier CcAnomalyDetector#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#role_arn CcAnomalyDetector#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn CcAnomalyDetector#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#table_name CcAnomalyDetector#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration CcAnomalyDetector#vpc_configuration}
    */
    readonly vpcConfiguration?: VpcConfigurationProperty;
}
export class RDSSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RDSSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseHost !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseHost = this._databaseHost;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._databasePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.databasePort = this._databasePort;
        }
        if (this._dbInstanceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbInstanceIdentifier = this._dbInstanceIdentifier;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RDSSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseHost = undefined;
            this._databaseName = undefined;
            this._databasePort = undefined;
            this._dbInstanceIdentifier = undefined;
            this._roleArn = undefined;
            this._secretManagerArn = undefined;
            this._tableName = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseHost = value.databaseHost;
            this._databaseName = value.databaseName;
            this._databasePort = value.databasePort;
            this._dbInstanceIdentifier = value.dbInstanceIdentifier;
            this._roleArn = value.roleArn;
            this._secretManagerArn = value.secretManagerArn;
            this._tableName = value.tableName;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // database_host - computed: true, optional: true, required: false
    private _databaseHost?: string; 
    public get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    public set databaseHost(value: string) {
        this._databaseHost = value;
    }
    public resetDatabaseHost() {
        this._databaseHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseHostInput() {
        return this._databaseHost;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // database_port - computed: true, optional: true, required: false
    private _databasePort?: number; 
    public get databasePort() {
        return this.getNumberAttribute('database_port');
    }
    public set databasePort(value: number) {
        this._databasePort = value;
    }
    public resetDatabasePort() {
        this._databasePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databasePortInput() {
        return this._databasePort;
    }

    // db_instance_identifier - computed: true, optional: true, required: false
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
        return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
        this._dbInstanceIdentifier = value;
    }
    public resetDbInstanceIdentifier() {
        this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
        return this._dbInstanceIdentifier;
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

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
export interface MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#security_group_id_list CcAnomalyDetector#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#subnet_id_list CcAnomalyDetector#subnet_id_list}
    */
    readonly subnetIdList?: string[];
}
export class MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIdList = this._securityGroupIdList;
        }
        if (this._subnetIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIdList = this._subnetIdList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIdList = undefined;
            this._subnetIdList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIdList = value.securityGroupIdList;
            this._subnetIdList = value.subnetIdList;
        }
    }

    // security_group_id_list - computed: true, optional: true, required: false
    private _securityGroupIdList?: string[]; 
    public get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    public set securityGroupIdList(value: string[]) {
        this._securityGroupIdList = value;
    }
    public resetSecurityGroupIdList() {
        this._securityGroupIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdListInput() {
        return this._securityGroupIdList;
    }

    // subnet_id_list - computed: true, optional: true, required: false
    private _subnetIdList?: string[]; 
    public get subnetIdList() {
        return this.getListAttribute('subnet_id_list');
    }
    public set subnetIdList(value: string[]) {
        this._subnetIdList = value;
    }
    public resetSubnetIdList() {
        this._subnetIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdListInput() {
        return this._subnetIdList;
    }
}
export interface RedshiftSourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#cluster_identifier CcAnomalyDetector#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_host CcAnomalyDetector#database_host}
    */
    readonly databaseHost?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_name CcAnomalyDetector#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#database_port CcAnomalyDetector#database_port}
    */
    readonly databasePort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#role_arn CcAnomalyDetector#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#secret_manager_arn CcAnomalyDetector#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#table_name CcAnomalyDetector#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#vpc_configuration CcAnomalyDetector#vpc_configuration}
    */
    readonly vpcConfiguration?: MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty;
}
export class RedshiftSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        if (this._databaseHost !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseHost = this._databaseHost;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._databasePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.databasePort = this._databasePort;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterIdentifier = undefined;
            this._databaseHost = undefined;
            this._databaseName = undefined;
            this._databasePort = undefined;
            this._roleArn = undefined;
            this._secretManagerArn = undefined;
            this._tableName = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterIdentifier = value.clusterIdentifier;
            this._databaseHost = value.databaseHost;
            this._databaseName = value.databaseName;
            this._databasePort = value.databasePort;
            this._roleArn = value.roleArn;
            this._secretManagerArn = value.secretManagerArn;
            this._tableName = value.tableName;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // database_host - computed: true, optional: true, required: false
    private _databaseHost?: string; 
    public get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    public set databaseHost(value: string) {
        this._databaseHost = value;
    }
    public resetDatabaseHost() {
        this._databaseHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseHostInput() {
        return this._databaseHost;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // database_port - computed: true, optional: true, required: false
    private _databasePort?: number; 
    public get databasePort() {
        return this.getNumberAttribute('database_port');
    }
    public set databasePort(value: number) {
        this._databasePort = value;
    }
    public resetDatabasePort() {
        this._databasePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databasePortInput() {
        return this._databasePort;
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

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: MetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
export interface CsvFormatDescriptorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#charset CcAnomalyDetector#charset}
    */
    readonly charset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#contains_header CcAnomalyDetector#contains_header}
    */
    readonly containsHeader?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#delimiter CcAnomalyDetector#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#file_compression CcAnomalyDetector#file_compression}
    */
    readonly fileCompression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#header_list CcAnomalyDetector#header_list}
    */
    readonly headerList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#quote_symbol CcAnomalyDetector#quote_symbol}
    */
    readonly quoteSymbol?: string;
}
export class CsvFormatDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvFormatDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._charset !== undefined) {
            hasAnyValues = true;
            internalValueResult.charset = this._charset;
        }
        if (this._containsHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.containsHeader = this._containsHeader;
        }
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._fileCompression !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileCompression = this._fileCompression;
        }
        if (this._headerList !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerList = this._headerList;
        }
        if (this._quoteSymbol !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteSymbol = this._quoteSymbol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvFormatDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._charset = undefined;
            this._containsHeader = undefined;
            this._delimiter = undefined;
            this._fileCompression = undefined;
            this._headerList = undefined;
            this._quoteSymbol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._charset = value.charset;
            this._containsHeader = value.containsHeader;
            this._delimiter = value.delimiter;
            this._fileCompression = value.fileCompression;
            this._headerList = value.headerList;
            this._quoteSymbol = value.quoteSymbol;
        }
    }

    // charset - computed: true, optional: true, required: false
    private _charset?: string; 
    public get charset() {
        return this.getStringAttribute('charset');
    }
    public set charset(value: string) {
        this._charset = value;
    }
    public resetCharset() {
        this._charset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get charsetInput() {
        return this._charset;
    }

    // contains_header - computed: true, optional: true, required: false
    private _containsHeader?: boolean | cdktn.IResolvable; 
    public get containsHeader() {
        return this.getBooleanAttribute('contains_header');
    }
    public set containsHeader(value: boolean | cdktn.IResolvable) {
        this._containsHeader = value;
    }
    public resetContainsHeader() {
        this._containsHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsHeaderInput() {
        return this._containsHeader;
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // file_compression - computed: true, optional: true, required: false
    private _fileCompression?: string; 
    public get fileCompression() {
        return this.getStringAttribute('file_compression');
    }
    public set fileCompression(value: string) {
        this._fileCompression = value;
    }
    public resetFileCompression() {
        this._fileCompression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileCompressionInput() {
        return this._fileCompression;
    }

    // header_list - computed: true, optional: true, required: false
    private _headerList?: string[]; 
    public get headerList() {
        return this.getListAttribute('header_list');
    }
    public set headerList(value: string[]) {
        this._headerList = value;
    }
    public resetHeaderList() {
        this._headerList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerListInput() {
        return this._headerList;
    }

    // quote_symbol - computed: true, optional: true, required: false
    private _quoteSymbol?: string; 
    public get quoteSymbol() {
        return this.getStringAttribute('quote_symbol');
    }
    public set quoteSymbol(value: string) {
        this._quoteSymbol = value;
    }
    public resetQuoteSymbol() {
        this._quoteSymbol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteSymbolInput() {
        return this._quoteSymbol;
    }
}
export interface JsonFormatDescriptorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#charset CcAnomalyDetector#charset}
    */
    readonly charset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#file_compression CcAnomalyDetector#file_compression}
    */
    readonly fileCompression?: string;
}
export class JsonFormatDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonFormatDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._charset !== undefined) {
            hasAnyValues = true;
            internalValueResult.charset = this._charset;
        }
        if (this._fileCompression !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileCompression = this._fileCompression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonFormatDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._charset = undefined;
            this._fileCompression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._charset = value.charset;
            this._fileCompression = value.fileCompression;
        }
    }

    // charset - computed: true, optional: true, required: false
    private _charset?: string; 
    public get charset() {
        return this.getStringAttribute('charset');
    }
    public set charset(value: string) {
        this._charset = value;
    }
    public resetCharset() {
        this._charset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get charsetInput() {
        return this._charset;
    }

    // file_compression - computed: true, optional: true, required: false
    private _fileCompression?: string; 
    public get fileCompression() {
        return this.getStringAttribute('file_compression');
    }
    public set fileCompression(value: string) {
        this._fileCompression = value;
    }
    public resetFileCompression() {
        this._fileCompression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileCompressionInput() {
        return this._fileCompression;
    }
}
export interface FileFormatDescriptorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#csv_format_descriptor CcAnomalyDetector#csv_format_descriptor}
    */
    readonly csvFormatDescriptor?: CsvFormatDescriptorProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#json_format_descriptor CcAnomalyDetector#json_format_descriptor}
    */
    readonly jsonFormatDescriptor?: JsonFormatDescriptorProperty;
}
export class FileFormatDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FileFormatDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csvFormatDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvFormatDescriptor = this._csvFormatDescriptor?.internalValue;
        }
        if (this._jsonFormatDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonFormatDescriptor = this._jsonFormatDescriptor?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileFormatDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csvFormatDescriptor.internalValue = undefined;
            this._jsonFormatDescriptor.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csvFormatDescriptor.internalValue = value.csvFormatDescriptor;
            this._jsonFormatDescriptor.internalValue = value.jsonFormatDescriptor;
        }
    }

    // csv_format_descriptor - computed: true, optional: true, required: false
    private _csvFormatDescriptor = new CsvFormatDescriptorPropertyOutputReference(this, "csv_format_descriptor");
    public get csvFormatDescriptor() {
        return this._csvFormatDescriptor;
    }
    public putCsvFormatDescriptor(value: CsvFormatDescriptorProperty) {
        this._csvFormatDescriptor.internalValue = value;
    }
    public resetCsvFormatDescriptor() {
        this._csvFormatDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvFormatDescriptorInput() {
        return this._csvFormatDescriptor.internalValue;
    }

    // json_format_descriptor - computed: true, optional: true, required: false
    private _jsonFormatDescriptor = new JsonFormatDescriptorPropertyOutputReference(this, "json_format_descriptor");
    public get jsonFormatDescriptor() {
        return this._jsonFormatDescriptor;
    }
    public putJsonFormatDescriptor(value: JsonFormatDescriptorProperty) {
        this._jsonFormatDescriptor.internalValue = value;
    }
    public resetJsonFormatDescriptor() {
        this._jsonFormatDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonFormatDescriptorInput() {
        return this._jsonFormatDescriptor.internalValue;
    }
}
export interface S3SourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#file_format_descriptor CcAnomalyDetector#file_format_descriptor}
    */
    readonly fileFormatDescriptor?: FileFormatDescriptorProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#historical_data_path_list CcAnomalyDetector#historical_data_path_list}
    */
    readonly historicalDataPathList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#role_arn CcAnomalyDetector#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#templated_path_list CcAnomalyDetector#templated_path_list}
    */
    readonly templatedPathList?: string[];
}
export class S3SourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3SourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileFormatDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileFormatDescriptor = this._fileFormatDescriptor?.internalValue;
        }
        if (this._historicalDataPathList !== undefined) {
            hasAnyValues = true;
            internalValueResult.historicalDataPathList = this._historicalDataPathList;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._templatedPathList !== undefined) {
            hasAnyValues = true;
            internalValueResult.templatedPathList = this._templatedPathList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3SourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileFormatDescriptor.internalValue = undefined;
            this._historicalDataPathList = undefined;
            this._roleArn = undefined;
            this._templatedPathList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileFormatDescriptor.internalValue = value.fileFormatDescriptor;
            this._historicalDataPathList = value.historicalDataPathList;
            this._roleArn = value.roleArn;
            this._templatedPathList = value.templatedPathList;
        }
    }

    // file_format_descriptor - computed: true, optional: true, required: false
    private _fileFormatDescriptor = new FileFormatDescriptorPropertyOutputReference(this, "file_format_descriptor");
    public get fileFormatDescriptor() {
        return this._fileFormatDescriptor;
    }
    public putFileFormatDescriptor(value: FileFormatDescriptorProperty) {
        this._fileFormatDescriptor.internalValue = value;
    }
    public resetFileFormatDescriptor() {
        this._fileFormatDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileFormatDescriptorInput() {
        return this._fileFormatDescriptor.internalValue;
    }

    // historical_data_path_list - computed: true, optional: true, required: false
    private _historicalDataPathList?: string[]; 
    public get historicalDataPathList() {
        return this.getListAttribute('historical_data_path_list');
    }
    public set historicalDataPathList(value: string[]) {
        this._historicalDataPathList = value;
    }
    public resetHistoricalDataPathList() {
        this._historicalDataPathList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get historicalDataPathListInput() {
        return this._historicalDataPathList;
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

    // templated_path_list - computed: true, optional: true, required: false
    private _templatedPathList?: string[]; 
    public get templatedPathList() {
        return this.getListAttribute('templated_path_list');
    }
    public set templatedPathList(value: string[]) {
        this._templatedPathList = value;
    }
    public resetTemplatedPathList() {
        this._templatedPathList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templatedPathListInput() {
        return this._templatedPathList;
    }
}
export interface MetricSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#app_flow_config CcAnomalyDetector#app_flow_config}
    */
    readonly appFlowConfig?: AppFlowConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#cloudwatch_config CcAnomalyDetector#cloudwatch_config}
    */
    readonly cloudwatchConfig?: CloudwatchConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#rds_source_config CcAnomalyDetector#rds_source_config}
    */
    readonly rdsSourceConfig?: RDSSourceConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#redshift_source_config CcAnomalyDetector#redshift_source_config}
    */
    readonly redshiftSourceConfig?: RedshiftSourceConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#s3_source_config CcAnomalyDetector#s3_source_config}
    */
    readonly s3SourceConfig?: S3SourceConfigProperty;
}
export class MetricSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appFlowConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appFlowConfig = this._appFlowConfig?.internalValue;
        }
        if (this._cloudwatchConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchConfig = this._cloudwatchConfig?.internalValue;
        }
        if (this._rdsSourceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsSourceConfig = this._rdsSourceConfig?.internalValue;
        }
        if (this._redshiftSourceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftSourceConfig = this._redshiftSourceConfig?.internalValue;
        }
        if (this._s3SourceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3SourceConfig = this._s3SourceConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appFlowConfig.internalValue = undefined;
            this._cloudwatchConfig.internalValue = undefined;
            this._rdsSourceConfig.internalValue = undefined;
            this._redshiftSourceConfig.internalValue = undefined;
            this._s3SourceConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appFlowConfig.internalValue = value.appFlowConfig;
            this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
            this._rdsSourceConfig.internalValue = value.rdsSourceConfig;
            this._redshiftSourceConfig.internalValue = value.redshiftSourceConfig;
            this._s3SourceConfig.internalValue = value.s3SourceConfig;
        }
    }

    // app_flow_config - computed: true, optional: true, required: false
    private _appFlowConfig = new AppFlowConfigPropertyOutputReference(this, "app_flow_config");
    public get appFlowConfig() {
        return this._appFlowConfig;
    }
    public putAppFlowConfig(value: AppFlowConfigProperty) {
        this._appFlowConfig.internalValue = value;
    }
    public resetAppFlowConfig() {
        this._appFlowConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appFlowConfigInput() {
        return this._appFlowConfig.internalValue;
    }

    // cloudwatch_config - computed: true, optional: true, required: false
    private _cloudwatchConfig = new CloudwatchConfigPropertyOutputReference(this, "cloudwatch_config");
    public get cloudwatchConfig() {
        return this._cloudwatchConfig;
    }
    public putCloudwatchConfig(value: CloudwatchConfigProperty) {
        this._cloudwatchConfig.internalValue = value;
    }
    public resetCloudwatchConfig() {
        this._cloudwatchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchConfigInput() {
        return this._cloudwatchConfig.internalValue;
    }

    // rds_source_config - computed: true, optional: true, required: false
    private _rdsSourceConfig = new RDSSourceConfigPropertyOutputReference(this, "rds_source_config");
    public get rdsSourceConfig() {
        return this._rdsSourceConfig;
    }
    public putRdsSourceConfig(value: RDSSourceConfigProperty) {
        this._rdsSourceConfig.internalValue = value;
    }
    public resetRdsSourceConfig() {
        this._rdsSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsSourceConfigInput() {
        return this._rdsSourceConfig.internalValue;
    }

    // redshift_source_config - computed: true, optional: true, required: false
    private _redshiftSourceConfig = new RedshiftSourceConfigPropertyOutputReference(this, "redshift_source_config");
    public get redshiftSourceConfig() {
        return this._redshiftSourceConfig;
    }
    public putRedshiftSourceConfig(value: RedshiftSourceConfigProperty) {
        this._redshiftSourceConfig.internalValue = value;
    }
    public resetRedshiftSourceConfig() {
        this._redshiftSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftSourceConfigInput() {
        return this._redshiftSourceConfig.internalValue;
    }

    // s3_source_config - computed: true, optional: true, required: false
    private _s3SourceConfig = new S3SourceConfigPropertyOutputReference(this, "s3_source_config");
    public get s3SourceConfig() {
        return this._s3SourceConfig;
    }
    public putS3SourceConfig(value: S3SourceConfigProperty) {
        this._s3SourceConfig.internalValue = value;
    }
    public resetS3SourceConfig() {
        this._s3SourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SourceConfigInput() {
        return this._s3SourceConfig.internalValue;
    }
}
export interface TimestampColumnProperty {
    /**
    * A timestamp format for the timestamps in the dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#column_format CcAnomalyDetector#column_format}
    */
    readonly columnFormat?: string;
    /**
    * Name of a column in the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#column_name CcAnomalyDetector#column_name}
    */
    readonly columnName?: string;
}
export class TimestampColumnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimestampColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnFormat = this._columnFormat;
        }
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestampColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnFormat = undefined;
            this._columnName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnFormat = value.columnFormat;
            this._columnName = value.columnName;
        }
    }

    // column_format - computed: true, optional: true, required: false
    private _columnFormat?: string; 
    public get columnFormat() {
        return this.getStringAttribute('column_format');
    }
    public set columnFormat(value: string) {
        this._columnFormat = value;
    }
    public resetColumnFormat() {
        this._columnFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnFormatInput() {
        return this._columnFormat;
    }

    // column_name - computed: true, optional: true, required: false
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    public resetColumnName() {
        this._columnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }
}
export interface MetricSetProperty {
    /**
    * Dimensions for this MetricSet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#dimension_list CcAnomalyDetector#dimension_list}
    */
    readonly dimensionList?: string[];
    /**
    * Metrics captured by this MetricSet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_list CcAnomalyDetector#metric_list}
    */
    readonly metricList: MetricProperty[] | cdktn.IResolvable;
    /**
    * A description for the MetricSet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_set_description CcAnomalyDetector#metric_set_description}
    */
    readonly metricSetDescription?: string;
    /**
    * A frequency period to aggregate the data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_set_frequency CcAnomalyDetector#metric_set_frequency}
    */
    readonly metricSetFrequency?: string;
    /**
    * The name of the MetricSet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_set_name CcAnomalyDetector#metric_set_name}
    */
    readonly metricSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#metric_source CcAnomalyDetector#metric_source}
    */
    readonly metricSource: MetricSourceProperty;
    /**
    * Offset, in seconds, between the frequency interval and the time at which the metrics are available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#offset CcAnomalyDetector#offset}
    */
    readonly offset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#timestamp_column CcAnomalyDetector#timestamp_column}
    */
    readonly timestampColumn?: TimestampColumnProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_anomaly_detector#timezone CcAnomalyDetector#timezone}
    */
    readonly timezone?: string;
}
export class MetricSetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionList !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionList = this._dimensionList;
        }
        if (this._metricList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricList = this._metricList?.internalValue;
        }
        if (this._metricSetDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSetDescription = this._metricSetDescription;
        }
        if (this._metricSetFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSetFrequency = this._metricSetFrequency;
        }
        if (this._metricSetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSetName = this._metricSetName;
        }
        if (this._metricSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSource = this._metricSource?.internalValue;
        }
        if (this._offset !== undefined) {
            hasAnyValues = true;
            internalValueResult.offset = this._offset;
        }
        if (this._timestampColumn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampColumn = this._timestampColumn?.internalValue;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionList = undefined;
            this._metricList.internalValue = undefined;
            this._metricSetDescription = undefined;
            this._metricSetFrequency = undefined;
            this._metricSetName = undefined;
            this._metricSource.internalValue = undefined;
            this._offset = undefined;
            this._timestampColumn.internalValue = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionList = value.dimensionList;
            this._metricList.internalValue = value.metricList;
            this._metricSetDescription = value.metricSetDescription;
            this._metricSetFrequency = value.metricSetFrequency;
            this._metricSetName = value.metricSetName;
            this._metricSource.internalValue = value.metricSource;
            this._offset = value.offset;
            this._timestampColumn.internalValue = value.timestampColumn;
            this._timezone = value.timezone;
        }
    }

    // dimension_list - computed: true, optional: true, required: false
    private _dimensionList?: string[]; 
    public get dimensionList() {
        return this.getListAttribute('dimension_list');
    }
    public set dimensionList(value: string[]) {
        this._dimensionList = value;
    }
    public resetDimensionList() {
        this._dimensionList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionListInput() {
        return this._dimensionList;
    }

    // metric_list - computed: false, optional: false, required: true
    private _metricList = new MetricPropertyList(this, "metric_list", false);
    public get metricList() {
        return this._metricList;
    }
    public putMetricList(value: MetricProperty[] | cdktn.IResolvable) {
        this._metricList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricListInput() {
        return this._metricList.internalValue;
    }

    // metric_set_description - computed: true, optional: true, required: false
    private _metricSetDescription?: string; 
    public get metricSetDescription() {
        return this.getStringAttribute('metric_set_description');
    }
    public set metricSetDescription(value: string) {
        this._metricSetDescription = value;
    }
    public resetMetricSetDescription() {
        this._metricSetDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSetDescriptionInput() {
        return this._metricSetDescription;
    }

    // metric_set_frequency - computed: true, optional: true, required: false
    private _metricSetFrequency?: string; 
    public get metricSetFrequency() {
        return this.getStringAttribute('metric_set_frequency');
    }
    public set metricSetFrequency(value: string) {
        this._metricSetFrequency = value;
    }
    public resetMetricSetFrequency() {
        this._metricSetFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSetFrequencyInput() {
        return this._metricSetFrequency;
    }

    // metric_set_name - computed: false, optional: false, required: true
    private _metricSetName?: string; 
    public get metricSetName() {
        return this.getStringAttribute('metric_set_name');
    }
    public set metricSetName(value: string) {
        this._metricSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSetNameInput() {
        return this._metricSetName;
    }

    // metric_source - computed: false, optional: false, required: true
    private _metricSource = new MetricSourcePropertyOutputReference(this, "metric_source");
    public get metricSource() {
        return this._metricSource;
    }
    public putMetricSource(value: MetricSourceProperty) {
        this._metricSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceInput() {
        return this._metricSource.internalValue;
    }

    // offset - computed: true, optional: true, required: false
    private _offset?: number; 
    public get offset() {
        return this.getNumberAttribute('offset');
    }
    public set offset(value: number) {
        this._offset = value;
    }
    public resetOffset() {
        this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInput() {
        return this._offset;
    }

    // timestamp_column - computed: true, optional: true, required: false
    private _timestampColumn = new TimestampColumnPropertyOutputReference(this, "timestamp_column");
    public get timestampColumn() {
        return this._timestampColumn;
    }
    public putTimestampColumn(value: TimestampColumnProperty) {
        this._timestampColumn.internalValue = value;
    }
    public resetTimestampColumn() {
        this._timestampColumn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampColumnInput() {
        return this._timestampColumn.internalValue;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }
}

export class MetricSetPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricSetProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricSetPropertyOutputReference {
        return new MetricSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
