// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventInvokeConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * A destination for events after they have been sent to a function for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination_config CcEventInvokeConfig#destination_config}
    */
    readonly destinationConfig?: CcEventInvokeConfig.DestinationConfigProperty;
    /**
    * The name of the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#function_name CcEventInvokeConfig#function_name}
    */
    readonly functionName: string;
    /**
    * The maximum age of a request that Lambda sends to a function for processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds CcEventInvokeConfig#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * The maximum number of times to retry when the function returns an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts CcEventInvokeConfig#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * The identifier of a version or alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#qualifier CcEventInvokeConfig#qualifier}
    */
    readonly qualifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config}
*/
export class CcEventInvokeConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_event_invoke_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventInvokeConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventInvokeConfig to import
    * @param importFromId The id of the existing CcEventInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventInvokeConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_event_invoke_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventInvokeConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcEventInvokeConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_event_invoke_config',
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
        this._destinationConfig.internalValue = config.destinationConfig;
        this._functionName = config.functionName;
        this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._qualifier = config.qualifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_config - computed: true, optional: true, required: false
    private _destinationConfig = new CcEventInvokeConfig.DestinationConfigPropertyOutputReference(this, "destination_config");
    public get destinationConfig() {
        return this._destinationConfig;
    }
    public putDestinationConfig(value: CcEventInvokeConfig.DestinationConfigProperty) {
        this._destinationConfig.internalValue = value;
    }
    public resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // maximum_event_age_in_seconds - computed: true, optional: true, required: false
    private _maximumEventAgeInSeconds?: number; 
    public get maximumEventAgeInSeconds() {
        return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    public set maximumEventAgeInSeconds(value: number) {
        this._maximumEventAgeInSeconds = value;
    }
    public resetMaximumEventAgeInSeconds() {
        this._maximumEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEventAgeInSecondsInput() {
        return this._maximumEventAgeInSeconds;
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number; 
    public get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
        this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }

    // qualifier - computed: false, optional: false, required: true
    private _qualifier?: string; 
    public get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string) {
        this._qualifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
        return this._qualifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_config: ccEventInvokeConfigDestinationConfigPropertyToTerraform(this._destinationConfig.internalValue),
            function_name: cdktn.stringToTerraform(this._functionName),
            maximum_event_age_in_seconds: cdktn.numberToTerraform(this._maximumEventAgeInSeconds),
            maximum_retry_attempts: cdktn.numberToTerraform(this._maximumRetryAttempts),
            qualifier: cdktn.stringToTerraform(this._qualifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination_config: {
                value: ccEventInvokeConfigDestinationConfigPropertyToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventInvokeConfig.DestinationConfigProperty",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_event_age_in_seconds: {
                value: cdktn.numberToHclTerraform(this._maximumEventAgeInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            maximum_retry_attempts: {
                value: cdktn.numberToHclTerraform(this._maximumRetryAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            qualifier: {
                value: cdktn.stringToHclTerraform(this._qualifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventInvokeConfigOnFailurePropertyToTerraform(struct?: CcEventInvokeConfig.OnFailureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
    }
}


export function ccEventInvokeConfigOnFailurePropertyToHclTerraform(struct?: CcEventInvokeConfig.OnFailureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventInvokeConfigOnSuccessPropertyToTerraform(struct?: CcEventInvokeConfig.OnSuccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
    }
}


export function ccEventInvokeConfigOnSuccessPropertyToHclTerraform(struct?: CcEventInvokeConfig.OnSuccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventInvokeConfigDestinationConfigPropertyToTerraform(struct?: CcEventInvokeConfig.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_failure: ccEventInvokeConfigOnFailurePropertyToTerraform(struct!.onFailure),
        on_success: ccEventInvokeConfigOnSuccessPropertyToTerraform(struct!.onSuccess),
    }
}


export function ccEventInvokeConfigDestinationConfigPropertyToHclTerraform(struct?: CcEventInvokeConfig.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_failure: {
            value: ccEventInvokeConfigOnFailurePropertyToHclTerraform(struct!.onFailure),
            isBlock: true,
            type: "struct",
            storageClassType: "OnFailureProperty",
        },
        on_success: {
            value: ccEventInvokeConfigOnSuccessPropertyToHclTerraform(struct!.onSuccess),
            isBlock: true,
            type: "struct",
            storageClassType: "OnSuccessProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEventInvokeConfig {
export interface OnFailureProperty {
    /**
    * The Amazon Resource Name (ARN) of the destination resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination CcEventInvokeConfig#destination}
    */
    readonly destination?: string;
}
export class OnFailurePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnFailureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnFailureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }
}
export interface OnSuccessProperty {
    /**
    * The Amazon Resource Name (ARN) of the destination resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination CcEventInvokeConfig#destination}
    */
    readonly destination?: string;
}
export class OnSuccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnSuccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnSuccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }
}
export interface DestinationConfigProperty {
    /**
    * The destination configuration for failed invocations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#on_failure CcEventInvokeConfig#on_failure}
    */
    readonly onFailure?: OnFailureProperty;
    /**
    * The destination configuration for successful invocations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#on_success CcEventInvokeConfig#on_success}
    */
    readonly onSuccess?: OnSuccessProperty;
}
export class DestinationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onFailure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure?.internalValue;
        }
        if (this._onSuccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onSuccess = this._onSuccess?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onFailure.internalValue = undefined;
            this._onSuccess.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onFailure.internalValue = value.onFailure;
            this._onSuccess.internalValue = value.onSuccess;
        }
    }

    // on_failure - computed: true, optional: true, required: false
    private _onFailure = new OnFailurePropertyOutputReference(this, "on_failure");
    public get onFailure() {
        return this._onFailure;
    }
    public putOnFailure(value: OnFailureProperty) {
        this._onFailure.internalValue = value;
    }
    public resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
        return this._onFailure.internalValue;
    }

    // on_success - computed: true, optional: true, required: false
    private _onSuccess = new OnSuccessPropertyOutputReference(this, "on_success");
    public get onSuccess() {
        return this._onSuccess;
    }
    public putOnSuccess(value: OnSuccessProperty) {
        this._onSuccess.internalValue = value;
    }
    public resetOnSuccess() {
        this._onSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onSuccessInput() {
        return this._onSuccess.internalValue;
    }
}
}
