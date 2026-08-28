// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAlertProps extends cdktn.TerraformMetaArguments {
    /**
    * The action to be taken by the alert when an anomaly is detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#action CcAlert#action}
    */
    readonly action: CcAlert.ActionProperty;
    /**
    * A description for the alert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#alert_description CcAlert#alert_description}
    */
    readonly alertDescription?: string;
    /**
    * The name of the alert. If not provided, a name is generated automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#alert_name CcAlert#alert_name}
    */
    readonly alertName?: string;
    /**
    * A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold CcAlert#alert_sensitivity_threshold}
    */
    readonly alertSensitivityThreshold: number;
    /**
    * The Amazon resource name (ARN) of the Anomaly Detector to alert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#anomaly_detector_arn CcAlert#anomaly_detector_arn}
    */
    readonly anomalyDetectorArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert}
*/
export class CcAlert extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lookoutmetrics_alert";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlert resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlert to import
    * @param importFromId The id of the existing CcAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlert to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lookoutmetrics_alert", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAlertProps
    */
    public constructor(scope: Construct, id: string, config: CcAlertProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lookoutmetrics_alert',
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
        this._action.internalValue = config.action;
        this._alertDescription = config.alertDescription;
        this._alertName = config.alertName;
        this._alertSensitivityThreshold = config.alertSensitivityThreshold;
        this._anomalyDetectorArn = config.anomalyDetectorArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action = new CcAlert.ActionPropertyOutputReference(this, "action");
    public get action() {
        return this._action;
    }
    public putAction(value: CcAlert.ActionProperty) {
        this._action.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action.internalValue;
    }

    // alert_description - computed: true, optional: true, required: false
    private _alertDescription?: string; 
    public get alertDescription() {
        return this.getStringAttribute('alert_description');
    }
    public set alertDescription(value: string) {
        this._alertDescription = value;
    }
    public resetAlertDescription() {
        this._alertDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertDescriptionInput() {
        return this._alertDescription;
    }

    // alert_name - computed: true, optional: true, required: false
    private _alertName?: string; 
    public get alertName() {
        return this.getStringAttribute('alert_name');
    }
    public set alertName(value: string) {
        this._alertName = value;
    }
    public resetAlertName() {
        this._alertName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertNameInput() {
        return this._alertName;
    }

    // alert_sensitivity_threshold - computed: false, optional: false, required: true
    private _alertSensitivityThreshold?: number; 
    public get alertSensitivityThreshold() {
        return this.getNumberAttribute('alert_sensitivity_threshold');
    }
    public set alertSensitivityThreshold(value: number) {
        this._alertSensitivityThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alertSensitivityThresholdInput() {
        return this._alertSensitivityThreshold;
    }

    // anomaly_detector_arn - computed: false, optional: false, required: true
    private _anomalyDetectorArn?: string; 
    public get anomalyDetectorArn() {
        return this.getStringAttribute('anomaly_detector_arn');
    }
    public set anomalyDetectorArn(value: string) {
        this._anomalyDetectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get anomalyDetectorArnInput() {
        return this._anomalyDetectorArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: ccAlertActionPropertyToTerraform(this._action.internalValue),
            alert_description: cdktn.stringToTerraform(this._alertDescription),
            alert_name: cdktn.stringToTerraform(this._alertName),
            alert_sensitivity_threshold: cdktn.numberToTerraform(this._alertSensitivityThreshold),
            anomaly_detector_arn: cdktn.stringToTerraform(this._anomalyDetectorArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: ccAlertActionPropertyToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlert.ActionProperty",
            },
            alert_description: {
                value: cdktn.stringToHclTerraform(this._alertDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alert_name: {
                value: cdktn.stringToHclTerraform(this._alertName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alert_sensitivity_threshold: {
                value: cdktn.numberToHclTerraform(this._alertSensitivityThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            anomaly_detector_arn: {
                value: cdktn.stringToHclTerraform(this._anomalyDetectorArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAlertLambdaConfigurationPropertyToTerraform(struct?: CcAlert.LambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccAlertLambdaConfigurationPropertyToHclTerraform(struct?: CcAlert.LambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
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


export function ccAlertSNSConfigurationPropertyToTerraform(struct?: CcAlert.SNSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
    }
}


export function ccAlertSNSConfigurationPropertyToHclTerraform(struct?: CcAlert.SNSConfigurationProperty | cdktn.IResolvable): any {
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
        sns_topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlertActionPropertyToTerraform(struct?: CcAlert.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_configuration: ccAlertLambdaConfigurationPropertyToTerraform(struct!.lambdaConfiguration),
        sns_configuration: ccAlertSNSConfigurationPropertyToTerraform(struct!.snsConfiguration),
    }
}


export function ccAlertActionPropertyToHclTerraform(struct?: CcAlert.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_configuration: {
            value: ccAlertLambdaConfigurationPropertyToHclTerraform(struct!.lambdaConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaConfigurationProperty",
        },
        sns_configuration: {
            value: ccAlertSNSConfigurationPropertyToHclTerraform(struct!.snsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SNSConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAlert {
export interface LambdaConfigurationProperty {
    /**
    * ARN of a Lambda to send alert notifications to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#lambda_arn CcAlert#lambda_arn}
    */
    readonly lambdaArn?: string;
    /**
    * ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#role_arn CcAlert#role_arn}
    */
    readonly roleArn?: string;
}
export class LambdaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
            this._roleArn = value.roleArn;
        }
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
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
export interface SNSConfigurationProperty {
    /**
    * ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#role_arn CcAlert#role_arn}
    */
    readonly roleArn?: string;
    /**
    * ARN of an SNS topic to send alert notifications to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#sns_topic_arn CcAlert#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}
export class SNSConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SNSConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._snsTopicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsTopicArn = this._snsTopicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SNSConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._snsTopicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._snsTopicArn = value.snsTopicArn;
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

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }
}
export interface ActionProperty {
    /**
    * Configuration options for a Lambda alert action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#lambda_configuration CcAlert#lambda_configuration}
    */
    readonly lambdaConfiguration?: LambdaConfigurationProperty;
    /**
    * Configuration options for an SNS alert action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutmetrics_alert#sns_configuration CcAlert#sns_configuration}
    */
    readonly snsConfiguration?: SNSConfigurationProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConfiguration = this._lambdaConfiguration?.internalValue;
        }
        if (this._snsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsConfiguration = this._snsConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaConfiguration.internalValue = undefined;
            this._snsConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaConfiguration.internalValue = value.lambdaConfiguration;
            this._snsConfiguration.internalValue = value.snsConfiguration;
        }
    }

    // lambda_configuration - computed: true, optional: true, required: false
    private _lambdaConfiguration = new LambdaConfigurationPropertyOutputReference(this, "lambda_configuration");
    public get lambdaConfiguration() {
        return this._lambdaConfiguration;
    }
    public putLambdaConfiguration(value: LambdaConfigurationProperty) {
        this._lambdaConfiguration.internalValue = value;
    }
    public resetLambdaConfiguration() {
        this._lambdaConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigurationInput() {
        return this._lambdaConfiguration.internalValue;
    }

    // sns_configuration - computed: true, optional: true, required: false
    private _snsConfiguration = new SNSConfigurationPropertyOutputReference(this, "sns_configuration");
    public get snsConfiguration() {
        return this._snsConfiguration;
    }
    public putSnsConfiguration(value: SNSConfigurationProperty) {
        this._snsConfiguration.internalValue = value;
    }
    public resetSnsConfiguration() {
        this._snsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsConfigurationInput() {
        return this._snsConfiguration.internalValue;
    }
}
}
