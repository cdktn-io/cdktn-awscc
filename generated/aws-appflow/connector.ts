// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    *  The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#connector_label CcConnector#connector_label}
    */
    readonly connectorLabel?: string;
    /**
    * Contains information about the configuration of the connector being registered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#connector_provisioning_config CcConnector#connector_provisioning_config}
    */
    readonly connectorProvisioningConfig: CcConnector.ConnectorProvisioningConfigProperty;
    /**
    * The provisioning type of the connector. Currently the only supported value is LAMBDA. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#connector_provisioning_type CcConnector#connector_provisioning_type}
    */
    readonly connectorProvisioningType: string;
    /**
    * A description about the connector that's being registered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#description CcConnector#description}
    */
    readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector awscc_appflow_connector}
*/
export class CcConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appflow_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnector to import
    * @param importFromId The id of the existing CcConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector awscc_appflow_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appflow_connector',
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
        this._connectorLabel = config.connectorLabel;
        this._connectorProvisioningConfig.internalValue = config.connectorProvisioningConfig;
        this._connectorProvisioningType = config.connectorProvisioningType;
        this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connector_arn - computed: true, optional: false, required: false
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }

    // connector_label - computed: true, optional: true, required: false
    private _connectorLabel?: string; 
    public get connectorLabel() {
        return this.getStringAttribute('connector_label');
    }
    public set connectorLabel(value: string) {
        this._connectorLabel = value;
    }
    public resetConnectorLabel() {
        this._connectorLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorLabelInput() {
        return this._connectorLabel;
    }

    // connector_provisioning_config - computed: false, optional: false, required: true
    private _connectorProvisioningConfig = new CcConnector.ConnectorProvisioningConfigPropertyOutputReference(this, "connector_provisioning_config");
    public get connectorProvisioningConfig() {
        return this._connectorProvisioningConfig;
    }
    public putConnectorProvisioningConfig(value: CcConnector.ConnectorProvisioningConfigProperty) {
        this._connectorProvisioningConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProvisioningConfigInput() {
        return this._connectorProvisioningConfig.internalValue;
    }

    // connector_provisioning_type - computed: false, optional: false, required: true
    private _connectorProvisioningType?: string; 
    public get connectorProvisioningType() {
        return this.getStringAttribute('connector_provisioning_type');
    }
    public set connectorProvisioningType(value: string) {
        this._connectorProvisioningType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProvisioningTypeInput() {
        return this._connectorProvisioningType;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
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
            connector_label: cdktn.stringToTerraform(this._connectorLabel),
            connector_provisioning_config: ccConnectorConnectorProvisioningConfigPropertyToTerraform(this._connectorProvisioningConfig.internalValue),
            connector_provisioning_type: cdktn.stringToTerraform(this._connectorProvisioningType),
            description: cdktn.stringToTerraform(this._description),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connector_label: {
                value: cdktn.stringToHclTerraform(this._connectorLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_provisioning_config: {
                value: ccConnectorConnectorProvisioningConfigPropertyToHclTerraform(this._connectorProvisioningConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnector.ConnectorProvisioningConfigProperty",
            },
            connector_provisioning_type: {
                value: cdktn.stringToHclTerraform(this._connectorProvisioningType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorLambdaConnectorProvisioningConfigPropertyToTerraform(struct?: CcConnector.LambdaConnectorProvisioningConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    }
}


export function ccConnectorLambdaConnectorProvisioningConfigPropertyToHclTerraform(struct?: CcConnector.LambdaConnectorProvisioningConfigProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorConnectorProvisioningConfigPropertyToTerraform(struct?: CcConnector.ConnectorProvisioningConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda: ccConnectorLambdaConnectorProvisioningConfigPropertyToTerraform(struct!.lambda),
    }
}


export function ccConnectorConnectorProvisioningConfigPropertyToHclTerraform(struct?: CcConnector.ConnectorProvisioningConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda: {
            value: ccConnectorLambdaConnectorProvisioningConfigPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaConnectorProvisioningConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnector {
export interface LambdaConnectorProvisioningConfigProperty {
    /**
    * Lambda ARN of the connector being registered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#lambda_arn CcConnector#lambda_arn}
    */
    readonly lambdaArn?: string;
}
export class LambdaConnectorProvisioningConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaConnectorProvisioningConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConnectorProvisioningConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaArn = value.lambdaArn;
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
}
export interface ConnectorProvisioningConfigProperty {
    /**
    * Contains information about the configuration of the lambda which is being registered as the connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector#lambda CcConnector#lambda}
    */
    readonly lambda?: LambdaConnectorProvisioningConfigProperty;
}
export class ConnectorProvisioningConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProvisioningConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProvisioningConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambda.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambda.internalValue = value.lambda;
        }
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new LambdaConnectorProvisioningConfigPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: LambdaConnectorProvisioningConfigProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }
}
}
