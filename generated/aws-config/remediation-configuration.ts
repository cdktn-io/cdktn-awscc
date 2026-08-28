// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRemediationConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#automatic CcRemediationConfiguration#automatic}
    */
    readonly automatic?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#config_rule_name CcRemediationConfiguration#config_rule_name}
    */
    readonly configRuleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#execution_controls CcRemediationConfiguration#execution_controls}
    */
    readonly executionControls?: CcRemediationConfiguration.ExecutionControlsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#maximum_automatic_attempts CcRemediationConfiguration#maximum_automatic_attempts}
    */
    readonly maximumAutomaticAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#parameters CcRemediationConfiguration#parameters}
    */
    readonly parameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#resource_type CcRemediationConfiguration#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#retry_attempt_seconds CcRemediationConfiguration#retry_attempt_seconds}
    */
    readonly retryAttemptSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#target_id CcRemediationConfiguration#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#target_type CcRemediationConfiguration#target_type}
    */
    readonly targetType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#target_version CcRemediationConfiguration#target_version}
    */
    readonly targetVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration awscc_config_remediation_configuration}
*/
export class CcRemediationConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_remediation_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRemediationConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRemediationConfiguration to import
    * @param importFromId The id of the existing CcRemediationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRemediationConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_remediation_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration awscc_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRemediationConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcRemediationConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_remediation_configuration',
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
        this._automatic = config.automatic;
        this._configRuleName = config.configRuleName;
        this._executionControls.internalValue = config.executionControls;
        this._maximumAutomaticAttempts = config.maximumAutomaticAttempts;
        this._parameters = config.parameters;
        this._resourceType = config.resourceType;
        this._retryAttemptSeconds = config.retryAttemptSeconds;
        this._targetId = config.targetId;
        this._targetType = config.targetType;
        this._targetVersion = config.targetVersion;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // automatic - computed: true, optional: true, required: false
    private _automatic?: boolean | cdktn.IResolvable; 
    public get automatic() {
        return this.getBooleanAttribute('automatic');
    }
    public set automatic(value: boolean | cdktn.IResolvable) {
        this._automatic = value;
    }
    public resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticInput() {
        return this._automatic;
    }

    // config_rule_name - computed: false, optional: false, required: true
    private _configRuleName?: string; 
    public get configRuleName() {
        return this.getStringAttribute('config_rule_name');
    }
    public set configRuleName(value: string) {
        this._configRuleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configRuleNameInput() {
        return this._configRuleName;
    }

    // execution_controls - computed: true, optional: true, required: false
    private _executionControls = new CcRemediationConfiguration.ExecutionControlsPropertyOutputReference(this, "execution_controls");
    public get executionControls() {
        return this._executionControls;
    }
    public putExecutionControls(value: CcRemediationConfiguration.ExecutionControlsProperty) {
        this._executionControls.internalValue = value;
    }
    public resetExecutionControls() {
        this._executionControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionControlsInput() {
        return this._executionControls.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // maximum_automatic_attempts - computed: true, optional: true, required: false
    private _maximumAutomaticAttempts?: number; 
    public get maximumAutomaticAttempts() {
        return this.getNumberAttribute('maximum_automatic_attempts');
    }
    public set maximumAutomaticAttempts(value: number) {
        this._maximumAutomaticAttempts = value;
    }
    public resetMaximumAutomaticAttempts() {
        this._maximumAutomaticAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumAutomaticAttemptsInput() {
        return this._maximumAutomaticAttempts;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // retry_attempt_seconds - computed: true, optional: true, required: false
    private _retryAttemptSeconds?: number; 
    public get retryAttemptSeconds() {
        return this.getNumberAttribute('retry_attempt_seconds');
    }
    public set retryAttemptSeconds(value: number) {
        this._retryAttemptSeconds = value;
    }
    public resetRetryAttemptSeconds() {
        this._retryAttemptSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryAttemptSecondsInput() {
        return this._retryAttemptSeconds;
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
        return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
        this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
        return this._targetId;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // target_version - computed: true, optional: true, required: false
    private _targetVersion?: string; 
    public get targetVersion() {
        return this.getStringAttribute('target_version');
    }
    public set targetVersion(value: string) {
        this._targetVersion = value;
    }
    public resetTargetVersion() {
        this._targetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetVersionInput() {
        return this._targetVersion;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            automatic: cdktn.booleanToTerraform(this._automatic),
            config_rule_name: cdktn.stringToTerraform(this._configRuleName),
            execution_controls: ccRemediationConfigurationExecutionControlsPropertyToTerraform(this._executionControls.internalValue),
            maximum_automatic_attempts: cdktn.numberToTerraform(this._maximumAutomaticAttempts),
            parameters: cdktn.stringToTerraform(this._parameters),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            retry_attempt_seconds: cdktn.numberToTerraform(this._retryAttemptSeconds),
            target_id: cdktn.stringToTerraform(this._targetId),
            target_type: cdktn.stringToTerraform(this._targetType),
            target_version: cdktn.stringToTerraform(this._targetVersion),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            automatic: {
                value: cdktn.booleanToHclTerraform(this._automatic),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            config_rule_name: {
                value: cdktn.stringToHclTerraform(this._configRuleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_controls: {
                value: ccRemediationConfigurationExecutionControlsPropertyToHclTerraform(this._executionControls.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRemediationConfiguration.ExecutionControlsProperty",
            },
            maximum_automatic_attempts: {
                value: cdktn.numberToHclTerraform(this._maximumAutomaticAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            parameters: {
                value: cdktn.stringToHclTerraform(this._parameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_attempt_seconds: {
                value: cdktn.numberToHclTerraform(this._retryAttemptSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_id: {
                value: cdktn.stringToHclTerraform(this._targetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_type: {
                value: cdktn.stringToHclTerraform(this._targetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_version: {
                value: cdktn.stringToHclTerraform(this._targetVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRemediationConfigurationSsmControlsPropertyToTerraform(struct?: CcRemediationConfiguration.SsmControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        concurrent_execution_rate_percentage: cdktn.numberToTerraform(struct!.concurrentExecutionRatePercentage),
        error_percentage: cdktn.numberToTerraform(struct!.errorPercentage),
    }
}


export function ccRemediationConfigurationSsmControlsPropertyToHclTerraform(struct?: CcRemediationConfiguration.SsmControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        concurrent_execution_rate_percentage: {
            value: cdktn.numberToHclTerraform(struct!.concurrentExecutionRatePercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        error_percentage: {
            value: cdktn.numberToHclTerraform(struct!.errorPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRemediationConfigurationExecutionControlsPropertyToTerraform(struct?: CcRemediationConfiguration.ExecutionControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ssm_controls: ccRemediationConfigurationSsmControlsPropertyToTerraform(struct!.ssmControls),
    }
}


export function ccRemediationConfigurationExecutionControlsPropertyToHclTerraform(struct?: CcRemediationConfiguration.ExecutionControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ssm_controls: {
            value: ccRemediationConfigurationSsmControlsPropertyToHclTerraform(struct!.ssmControls),
            isBlock: true,
            type: "struct",
            storageClassType: "SsmControlsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRemediationConfiguration {
export interface SsmControlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage CcRemediationConfiguration#concurrent_execution_rate_percentage}
    */
    readonly concurrentExecutionRatePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#error_percentage CcRemediationConfiguration#error_percentage}
    */
    readonly errorPercentage?: number;
}
export class SsmControlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SsmControlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._concurrentExecutionRatePercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrentExecutionRatePercentage = this._concurrentExecutionRatePercentage;
        }
        if (this._errorPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorPercentage = this._errorPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmControlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._concurrentExecutionRatePercentage = undefined;
            this._errorPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._concurrentExecutionRatePercentage = value.concurrentExecutionRatePercentage;
            this._errorPercentage = value.errorPercentage;
        }
    }

    // concurrent_execution_rate_percentage - computed: true, optional: true, required: false
    private _concurrentExecutionRatePercentage?: number; 
    public get concurrentExecutionRatePercentage() {
        return this.getNumberAttribute('concurrent_execution_rate_percentage');
    }
    public set concurrentExecutionRatePercentage(value: number) {
        this._concurrentExecutionRatePercentage = value;
    }
    public resetConcurrentExecutionRatePercentage() {
        this._concurrentExecutionRatePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentExecutionRatePercentageInput() {
        return this._concurrentExecutionRatePercentage;
    }

    // error_percentage - computed: true, optional: true, required: false
    private _errorPercentage?: number; 
    public get errorPercentage() {
        return this.getNumberAttribute('error_percentage');
    }
    public set errorPercentage(value: number) {
        this._errorPercentage = value;
    }
    public resetErrorPercentage() {
        this._errorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorPercentageInput() {
        return this._errorPercentage;
    }
}
export interface ExecutionControlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_remediation_configuration#ssm_controls CcRemediationConfiguration#ssm_controls}
    */
    readonly ssmControls?: SsmControlsProperty;
}
export class ExecutionControlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExecutionControlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ssmControls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssmControls = this._ssmControls?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExecutionControlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ssmControls.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ssmControls.internalValue = value.ssmControls;
        }
    }

    // ssm_controls - computed: true, optional: true, required: false
    private _ssmControls = new SsmControlsPropertyOutputReference(this, "ssm_controls");
    public get ssmControls() {
        return this._ssmControls;
    }
    public putSsmControls(value: SsmControlsProperty) {
        this._ssmControls.internalValue = value;
    }
    public resetSsmControls() {
        this._ssmControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssmControlsInput() {
        return this._ssmControls.internalValue;
    }
}
}
