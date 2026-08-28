// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPaymentConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the payment connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#connector_name CcPaymentConnector#connector_name}
    */
    readonly connectorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#connector_type CcPaymentConnector#connector_type}
    */
    readonly connectorType: string;
    /**
    * The credential provider configurations for the connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#credential_provider_configurations CcPaymentConnector#credential_provider_configurations}
    */
    readonly credentialProviderConfigurations: CcPaymentConnector.CredentialsProviderConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A description of the payment connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#description CcPaymentConnector#description}
    */
    readonly description?: string;
    /**
    * The identifier of the parent payment manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#payment_manager_id CcPaymentConnector#payment_manager_id}
    */
    readonly paymentManagerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}
*/
export class CcPaymentConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_payment_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPaymentConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPaymentConnector to import
    * @param importFromId The id of the existing CcPaymentConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPaymentConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_payment_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPaymentConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcPaymentConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_payment_connector',
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
        this._connectorName = config.connectorName;
        this._connectorType = config.connectorType;
        this._credentialProviderConfigurations.internalValue = config.credentialProviderConfigurations;
        this._description = config.description;
        this._paymentManagerId = config.paymentManagerId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connector_created_at - computed: true, optional: false, required: false
    public get connectorCreatedAt() {
        return this.getStringAttribute('connector_created_at');
    }

    // connector_last_updated_at - computed: true, optional: false, required: false
    public get connectorLastUpdatedAt() {
        return this.getStringAttribute('connector_last_updated_at');
    }

    // connector_name - computed: false, optional: false, required: true
    private _connectorName?: string; 
    public get connectorName() {
        return this.getStringAttribute('connector_name');
    }
    public set connectorName(value: string) {
        this._connectorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorNameInput() {
        return this._connectorName;
    }

    // connector_status - computed: true, optional: false, required: false
    public get connectorStatus() {
        return this.getStringAttribute('connector_status');
    }

    // connector_type - computed: false, optional: false, required: true
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // credential_provider_configurations - computed: false, optional: false, required: true
    private _credentialProviderConfigurations = new CcPaymentConnector.CredentialsProviderConfigurationPropertyList(this, "credential_provider_configurations", false);
    public get credentialProviderConfigurations() {
        return this._credentialProviderConfigurations;
    }
    public putCredentialProviderConfigurations(value: CcPaymentConnector.CredentialsProviderConfigurationProperty[] | cdktn.IResolvable) {
        this._credentialProviderConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderConfigurationsInput() {
        return this._credentialProviderConfigurations.internalValue;
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

    // payment_connector_arn - computed: true, optional: false, required: false
    public get paymentConnectorArn() {
        return this.getStringAttribute('payment_connector_arn');
    }

    // payment_connector_id - computed: true, optional: false, required: false
    public get paymentConnectorId() {
        return this.getStringAttribute('payment_connector_id');
    }

    // payment_manager_id - computed: false, optional: false, required: true
    private _paymentManagerId?: string; 
    public get paymentManagerId() {
        return this.getStringAttribute('payment_manager_id');
    }
    public set paymentManagerId(value: string) {
        this._paymentManagerId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get paymentManagerIdInput() {
        return this._paymentManagerId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connector_name: cdktn.stringToTerraform(this._connectorName),
            connector_type: cdktn.stringToTerraform(this._connectorType),
            credential_provider_configurations: cdktn.listMapper(ccPaymentConnectorCredentialsProviderConfigurationPropertyToTerraform, false)(this._credentialProviderConfigurations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            payment_manager_id: cdktn.stringToTerraform(this._paymentManagerId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connector_name: {
                value: cdktn.stringToHclTerraform(this._connectorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_type: {
                value: cdktn.stringToHclTerraform(this._connectorType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            credential_provider_configurations: {
                value: cdktn.listMapperHcl(ccPaymentConnectorCredentialsProviderConfigurationPropertyToHclTerraform, false)(this._credentialProviderConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPaymentConnector.CredentialsProviderConfigurationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            payment_manager_id: {
                value: cdktn.stringToHclTerraform(this._paymentManagerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPaymentConnectorPaymentCredentialProviderConfigurationPropertyToTerraform(struct?: CcPaymentConnector.PaymentCredentialProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider_arn: cdktn.stringToTerraform(struct!.credentialProviderArn),
    }
}


export function ccPaymentConnectorPaymentCredentialProviderConfigurationPropertyToHclTerraform(struct?: CcPaymentConnector.PaymentCredentialProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentConnectorStripePrivyPropertyToTerraform(struct?: CcPaymentConnector.StripePrivyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_provider_arn: cdktn.stringToTerraform(struct!.credentialProviderArn),
    }
}


export function ccPaymentConnectorStripePrivyPropertyToHclTerraform(struct?: CcPaymentConnector.StripePrivyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentConnectorCredentialsProviderConfigurationPropertyToTerraform(struct?: CcPaymentConnector.CredentialsProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        coinbase_cdp: ccPaymentConnectorPaymentCredentialProviderConfigurationPropertyToTerraform(struct!.coinbaseCdp),
        stripe_privy: ccPaymentConnectorStripePrivyPropertyToTerraform(struct!.stripePrivy),
    }
}


export function ccPaymentConnectorCredentialsProviderConfigurationPropertyToHclTerraform(struct?: CcPaymentConnector.CredentialsProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        coinbase_cdp: {
            value: ccPaymentConnectorPaymentCredentialProviderConfigurationPropertyToHclTerraform(struct!.coinbaseCdp),
            isBlock: true,
            type: "struct",
            storageClassType: "PaymentCredentialProviderConfigurationProperty",
        },
        stripe_privy: {
            value: ccPaymentConnectorStripePrivyPropertyToHclTerraform(struct!.stripePrivy),
            isBlock: true,
            type: "struct",
            storageClassType: "StripePrivyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPaymentConnector {
export interface PaymentCredentialProviderConfigurationProperty {
    /**
    * The ARN of the payment credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn CcPaymentConnector#credential_provider_arn}
    */
    readonly credentialProviderArn?: string;
}
export class PaymentCredentialProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaymentCredentialProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderArn = this._credentialProviderArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaymentCredentialProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProviderArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProviderArn = value.credentialProviderArn;
        }
    }

    // credential_provider_arn - computed: true, optional: true, required: false
    private _credentialProviderArn?: string; 
    public get credentialProviderArn() {
        return this.getStringAttribute('credential_provider_arn');
    }
    public set credentialProviderArn(value: string) {
        this._credentialProviderArn = value;
    }
    public resetCredentialProviderArn() {
        this._credentialProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderArnInput() {
        return this._credentialProviderArn;
    }
}
export interface StripePrivyProperty {
    /**
    * The ARN of the payment credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn CcPaymentConnector#credential_provider_arn}
    */
    readonly credentialProviderArn?: string;
}
export class StripePrivyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StripePrivyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialProviderArn = this._credentialProviderArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StripePrivyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialProviderArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialProviderArn = value.credentialProviderArn;
        }
    }

    // credential_provider_arn - computed: true, optional: true, required: false
    private _credentialProviderArn?: string; 
    public get credentialProviderArn() {
        return this.getStringAttribute('credential_provider_arn');
    }
    public set credentialProviderArn(value: string) {
        this._credentialProviderArn = value;
    }
    public resetCredentialProviderArn() {
        this._credentialProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderArnInput() {
        return this._credentialProviderArn;
    }
}
export interface CredentialsProviderConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp CcPaymentConnector#coinbase_cdp}
    */
    readonly coinbaseCdp?: PaymentCredentialProviderConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_connector#stripe_privy CcPaymentConnector#stripe_privy}
    */
    readonly stripePrivy?: StripePrivyProperty;
}
export class CredentialsProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CredentialsProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coinbaseCdp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coinbaseCdp = this._coinbaseCdp?.internalValue;
        }
        if (this._stripePrivy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripePrivy = this._stripePrivy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coinbaseCdp.internalValue = undefined;
            this._stripePrivy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coinbaseCdp.internalValue = value.coinbaseCdp;
            this._stripePrivy.internalValue = value.stripePrivy;
        }
    }

    // coinbase_cdp - computed: true, optional: true, required: false
    private _coinbaseCdp = new PaymentCredentialProviderConfigurationPropertyOutputReference(this, "coinbase_cdp");
    public get coinbaseCdp() {
        return this._coinbaseCdp;
    }
    public putCoinbaseCdp(value: PaymentCredentialProviderConfigurationProperty) {
        this._coinbaseCdp.internalValue = value;
    }
    public resetCoinbaseCdp() {
        this._coinbaseCdp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coinbaseCdpInput() {
        return this._coinbaseCdp.internalValue;
    }

    // stripe_privy - computed: true, optional: true, required: false
    private _stripePrivy = new StripePrivyPropertyOutputReference(this, "stripe_privy");
    public get stripePrivy() {
        return this._stripePrivy;
    }
    public putStripePrivy(value: StripePrivyProperty) {
        this._stripePrivy.internalValue = value;
    }
    public resetStripePrivy() {
        this._stripePrivy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripePrivyInput() {
        return this._stripePrivy.internalValue;
    }
}

export class CredentialsProviderConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : CredentialsProviderConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): CredentialsProviderConfigurationPropertyOutputReference {
        return new CredentialsProviderConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
