// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#code_sha_256 CcVersion#code_sha_256}
    */
    readonly codeSha256?: string;
    /**
    * A description for the version to override the description in the function configuration. Updates are not supported for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#description CcVersion#description}
    */
    readonly description?: string;
    /**
    * The name of the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#function_name CcVersion#function_name}
    */
    readonly functionName: string;
    /**
    * The scaling configuration to apply to the function, including minimum and maximum execution environment limits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#function_scaling_config CcVersion#function_scaling_config}
    */
    readonly functionScalingConfig?: CcVersion.FunctionScalingConfigProperty;
    /**
    * Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#provisioned_concurrency_config CcVersion#provisioned_concurrency_config}
    */
    readonly provisionedConcurrencyConfig?: CcVersion.ProvisionedConcurrencyConfigurationProperty;
    /**
    * Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#runtime_policy CcVersion#runtime_policy}
    */
    readonly runtimePolicy?: CcVersion.RuntimePolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version awscc_lambda_version}
*/
export class CcVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVersion to import
    * @param importFromId The id of the existing CcVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version awscc_lambda_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_version',
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
        this._codeSha256 = config.codeSha256;
        this._description = config.description;
        this._functionName = config.functionName;
        this._functionScalingConfig.internalValue = config.functionScalingConfig;
        this._provisionedConcurrencyConfig.internalValue = config.provisionedConcurrencyConfig;
        this._runtimePolicy.internalValue = config.runtimePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // code_sha_256 - computed: true, optional: true, required: false
    private _codeSha256?: string; 
    public get codeSha256() {
        return this.getStringAttribute('code_sha_256');
    }
    public set codeSha256(value: string) {
        this._codeSha256 = value;
    }
    public resetCodeSha256() {
        this._codeSha256 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeSha256Input() {
        return this._codeSha256;
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

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
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

    // function_scaling_config - computed: true, optional: true, required: false
    private _functionScalingConfig = new CcVersion.FunctionScalingConfigPropertyOutputReference(this, "function_scaling_config");
    public get functionScalingConfig() {
        return this._functionScalingConfig;
    }
    public putFunctionScalingConfig(value: CcVersion.FunctionScalingConfigProperty) {
        this._functionScalingConfig.internalValue = value;
    }
    public resetFunctionScalingConfig() {
        this._functionScalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionScalingConfigInput() {
        return this._functionScalingConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // provisioned_concurrency_config - computed: true, optional: true, required: false
    private _provisionedConcurrencyConfig = new CcVersion.ProvisionedConcurrencyConfigurationPropertyOutputReference(this, "provisioned_concurrency_config");
    public get provisionedConcurrencyConfig() {
        return this._provisionedConcurrencyConfig;
    }
    public putProvisionedConcurrencyConfig(value: CcVersion.ProvisionedConcurrencyConfigurationProperty) {
        this._provisionedConcurrencyConfig.internalValue = value;
    }
    public resetProvisionedConcurrencyConfig() {
        this._provisionedConcurrencyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrencyConfigInput() {
        return this._provisionedConcurrencyConfig.internalValue;
    }

    // runtime_policy - computed: true, optional: true, required: false
    private _runtimePolicy = new CcVersion.RuntimePolicyPropertyOutputReference(this, "runtime_policy");
    public get runtimePolicy() {
        return this._runtimePolicy;
    }
    public putRuntimePolicy(value: CcVersion.RuntimePolicyProperty) {
        this._runtimePolicy.internalValue = value;
    }
    public resetRuntimePolicy() {
        this._runtimePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimePolicyInput() {
        return this._runtimePolicy.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            code_sha_256: cdktn.stringToTerraform(this._codeSha256),
            description: cdktn.stringToTerraform(this._description),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_scaling_config: ccVersionFunctionScalingConfigPropertyToTerraform(this._functionScalingConfig.internalValue),
            provisioned_concurrency_config: ccVersionProvisionedConcurrencyConfigurationPropertyToTerraform(this._provisionedConcurrencyConfig.internalValue),
            runtime_policy: ccVersionRuntimePolicyPropertyToTerraform(this._runtimePolicy.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            code_sha_256: {
                value: cdktn.stringToHclTerraform(this._codeSha256),
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
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_scaling_config: {
                value: ccVersionFunctionScalingConfigPropertyToHclTerraform(this._functionScalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVersion.FunctionScalingConfigProperty",
            },
            provisioned_concurrency_config: {
                value: ccVersionProvisionedConcurrencyConfigurationPropertyToHclTerraform(this._provisionedConcurrencyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVersion.ProvisionedConcurrencyConfigurationProperty",
            },
            runtime_policy: {
                value: ccVersionRuntimePolicyPropertyToHclTerraform(this._runtimePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVersion.RuntimePolicyProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVersionFunctionScalingConfigPropertyToTerraform(struct?: CcVersion.FunctionScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_execution_environments: cdktn.numberToTerraform(struct!.maxExecutionEnvironments),
        min_execution_environments: cdktn.numberToTerraform(struct!.minExecutionEnvironments),
    }
}


export function ccVersionFunctionScalingConfigPropertyToHclTerraform(struct?: CcVersion.FunctionScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_execution_environments: {
            value: cdktn.numberToHclTerraform(struct!.maxExecutionEnvironments),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_execution_environments: {
            value: cdktn.numberToHclTerraform(struct!.minExecutionEnvironments),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVersionProvisionedConcurrencyConfigurationPropertyToTerraform(struct?: CcVersion.ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_concurrent_executions: cdktn.numberToTerraform(struct!.provisionedConcurrentExecutions),
    }
}


export function ccVersionProvisionedConcurrencyConfigurationPropertyToHclTerraform(struct?: CcVersion.ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_concurrent_executions: {
            value: cdktn.numberToHclTerraform(struct!.provisionedConcurrentExecutions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVersionRuntimePolicyPropertyToTerraform(struct?: CcVersion.RuntimePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        runtime_version_arn: cdktn.stringToTerraform(struct!.runtimeVersionArn),
        update_runtime_on: cdktn.stringToTerraform(struct!.updateRuntimeOn),
    }
}


export function ccVersionRuntimePolicyPropertyToHclTerraform(struct?: CcVersion.RuntimePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        runtime_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.runtimeVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_runtime_on: {
            value: cdktn.stringToHclTerraform(struct!.updateRuntimeOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcVersion {
export interface FunctionScalingConfigProperty {
    /**
    * The maximum number of execution environments that can be provisioned for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#max_execution_environments CcVersion#max_execution_environments}
    */
    readonly maxExecutionEnvironments?: number;
    /**
    * The minimum number of execution environments to maintain for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#min_execution_environments CcVersion#min_execution_environments}
    */
    readonly minExecutionEnvironments?: number;
}
export class FunctionScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FunctionScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxExecutionEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxExecutionEnvironments = this._maxExecutionEnvironments;
        }
        if (this._minExecutionEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.minExecutionEnvironments = this._minExecutionEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxExecutionEnvironments = undefined;
            this._minExecutionEnvironments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxExecutionEnvironments = value.maxExecutionEnvironments;
            this._minExecutionEnvironments = value.minExecutionEnvironments;
        }
    }

    // max_execution_environments - computed: true, optional: true, required: false
    private _maxExecutionEnvironments?: number; 
    public get maxExecutionEnvironments() {
        return this.getNumberAttribute('max_execution_environments');
    }
    public set maxExecutionEnvironments(value: number) {
        this._maxExecutionEnvironments = value;
    }
    public resetMaxExecutionEnvironments() {
        this._maxExecutionEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxExecutionEnvironmentsInput() {
        return this._maxExecutionEnvironments;
    }

    // min_execution_environments - computed: true, optional: true, required: false
    private _minExecutionEnvironments?: number; 
    public get minExecutionEnvironments() {
        return this.getNumberAttribute('min_execution_environments');
    }
    public set minExecutionEnvironments(value: number) {
        this._minExecutionEnvironments = value;
    }
    public resetMinExecutionEnvironments() {
        this._minExecutionEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minExecutionEnvironmentsInput() {
        return this._minExecutionEnvironments;
    }
}
export interface ProvisionedConcurrencyConfigurationProperty {
    /**
    * The amount of provisioned concurrency to allocate for the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#provisioned_concurrent_executions CcVersion#provisioned_concurrent_executions}
    */
    readonly provisionedConcurrentExecutions?: number;
}
export class ProvisionedConcurrencyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedConcurrentExecutions !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedConcurrentExecutions = this._provisionedConcurrentExecutions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedConcurrentExecutions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedConcurrentExecutions = value.provisionedConcurrentExecutions;
        }
    }

    // provisioned_concurrent_executions - computed: true, optional: true, required: false
    private _provisionedConcurrentExecutions?: number; 
    public get provisionedConcurrentExecutions() {
        return this.getNumberAttribute('provisioned_concurrent_executions');
    }
    public set provisionedConcurrentExecutions(value: number) {
        this._provisionedConcurrentExecutions = value;
    }
    public resetProvisionedConcurrentExecutions() {
        this._provisionedConcurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrentExecutionsInput() {
        return this._provisionedConcurrentExecutions;
    }
}
export interface RuntimePolicyProperty {
    /**
    * The ARN of the runtime the function is configured to use. If the runtime update mode is manual, the ARN is returned, otherwise null is returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#runtime_version_arn CcVersion#runtime_version_arn}
    */
    readonly runtimeVersionArn?: string;
    /**
    * The runtime update mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_version#update_runtime_on CcVersion#update_runtime_on}
    */
    readonly updateRuntimeOn?: string;
}
export class RuntimePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuntimePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._runtimeVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeVersionArn = this._runtimeVersionArn;
        }
        if (this._updateRuntimeOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRuntimeOn = this._updateRuntimeOn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._runtimeVersionArn = undefined;
            this._updateRuntimeOn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._runtimeVersionArn = value.runtimeVersionArn;
            this._updateRuntimeOn = value.updateRuntimeOn;
        }
    }

    // runtime_version_arn - computed: true, optional: true, required: false
    private _runtimeVersionArn?: string; 
    public get runtimeVersionArn() {
        return this.getStringAttribute('runtime_version_arn');
    }
    public set runtimeVersionArn(value: string) {
        this._runtimeVersionArn = value;
    }
    public resetRuntimeVersionArn() {
        this._runtimeVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeVersionArnInput() {
        return this._runtimeVersionArn;
    }

    // update_runtime_on - computed: true, optional: true, required: false
    private _updateRuntimeOn?: string; 
    public get updateRuntimeOn() {
        return this.getStringAttribute('update_runtime_on');
    }
    public set updateRuntimeOn(value: string) {
        this._updateRuntimeOn = value;
    }
    public resetUpdateRuntimeOn() {
        this._updateRuntimeOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRuntimeOnInput() {
        return this._updateRuntimeOn;
    }
}
}
