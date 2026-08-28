// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#compliance CcConfigRule#compliance}
    */
    readonly compliance?: CcConfigRule.ComplianceProperty;
    /**
    * A name for the CC rule. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#config_rule_name CcConfigRule#config_rule_name}
    */
    readonly configRuleName?: string;
    /**
    * The description that you provide for the CC rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#description CcConfigRule#description}
    */
    readonly description?: string;
    /**
    * The modes the CC rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#evaluation_modes CcConfigRule#evaluation_modes}
    */
    readonly evaluationModes?: CcConfigRule.EvaluationModeConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A string, in JSON format, that is passed to the CC rule Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#input_parameters CcConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * The maximum frequency with which CC runs evaluations for a rule. You can specify a value for ``MaximumExecutionFrequency`` when:
    *   +  You are using an AWS managed rule that is triggered at a periodic frequency.
    *   +  Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).
    *   
    *   By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the ``MaximumExecutionFrequency`` parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#maximum_execution_frequency CcConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
    *   The scope can be empty.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#scope CcConfigRule#scope}
    */
    readonly scope?: CcConfigRule.ScopeProperty;
    /**
    * Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#source CcConfigRule#source}
    */
    readonly source: CcConfigRule.SourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule awscc_config_config_rule}
*/
export class CcConfigRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_config_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigRule to import
    * @param importFromId The id of the existing CcConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_config_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule awscc_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_config_rule',
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
        this._compliance.internalValue = config.compliance;
        this._configRuleName = config.configRuleName;
        this._description = config.description;
        this._evaluationModes.internalValue = config.evaluationModes;
        this._inputParameters = config.inputParameters;
        this._maximumExecutionFrequency = config.maximumExecutionFrequency;
        this._scope.internalValue = config.scope;
        this._source.internalValue = config.source;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // compliance - computed: true, optional: true, required: false
    private _compliance = new CcConfigRule.CompliancePropertyOutputReference(this, "compliance");
    public get compliance() {
        return this._compliance;
    }
    public putCompliance(value: CcConfigRule.ComplianceProperty) {
        this._compliance.internalValue = value;
    }
    public resetCompliance() {
        this._compliance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceInput() {
        return this._compliance.internalValue;
    }

    // config_rule_id - computed: true, optional: false, required: false
    public get configRuleId() {
        return this.getStringAttribute('config_rule_id');
    }

    // config_rule_name - computed: true, optional: true, required: false
    private _configRuleName?: string; 
    public get configRuleName() {
        return this.getStringAttribute('config_rule_name');
    }
    public set configRuleName(value: string) {
        this._configRuleName = value;
    }
    public resetConfigRuleName() {
        this._configRuleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configRuleNameInput() {
        return this._configRuleName;
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

    // evaluation_modes - computed: true, optional: true, required: false
    private _evaluationModes = new CcConfigRule.EvaluationModeConfigurationPropertyList(this, "evaluation_modes", false);
    public get evaluationModes() {
        return this._evaluationModes;
    }
    public putEvaluationModes(value: CcConfigRule.EvaluationModeConfigurationProperty[] | cdktn.IResolvable) {
        this._evaluationModes.internalValue = value;
    }
    public resetEvaluationModes() {
        this._evaluationModes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationModesInput() {
        return this._evaluationModes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_parameters - computed: true, optional: true, required: false
    private _inputParameters?: string; 
    public get inputParameters() {
        return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string) {
        this._inputParameters = value;
    }
    public resetInputParameters() {
        this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
        return this._inputParameters;
    }

    // maximum_execution_frequency - computed: true, optional: true, required: false
    private _maximumExecutionFrequency?: string; 
    public get maximumExecutionFrequency() {
        return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string) {
        this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
        this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
        return this._maximumExecutionFrequency;
    }

    // scope - computed: true, optional: true, required: false
    private _scope = new CcConfigRule.ScopePropertyOutputReference(this, "scope");
    public get scope() {
        return this._scope;
    }
    public putScope(value: CcConfigRule.ScopeProperty) {
        this._scope.internalValue = value;
    }
    public resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope.internalValue;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CcConfigRule.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcConfigRule.SourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compliance: ccConfigRuleCompliancePropertyToTerraform(this._compliance.internalValue),
            config_rule_name: cdktn.stringToTerraform(this._configRuleName),
            description: cdktn.stringToTerraform(this._description),
            evaluation_modes: cdktn.listMapper(ccConfigRuleEvaluationModeConfigurationPropertyToTerraform, false)(this._evaluationModes.internalValue),
            input_parameters: cdktn.stringToTerraform(this._inputParameters),
            maximum_execution_frequency: cdktn.stringToTerraform(this._maximumExecutionFrequency),
            scope: ccConfigRuleScopePropertyToTerraform(this._scope.internalValue),
            source: ccConfigRuleSourcePropertyToTerraform(this._source.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compliance: {
                value: ccConfigRuleCompliancePropertyToHclTerraform(this._compliance.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigRule.ComplianceProperty",
            },
            config_rule_name: {
                value: cdktn.stringToHclTerraform(this._configRuleName),
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
            evaluation_modes: {
                value: cdktn.listMapperHcl(ccConfigRuleEvaluationModeConfigurationPropertyToHclTerraform, false)(this._evaluationModes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigRule.EvaluationModeConfigurationPropertyList",
            },
            input_parameters: {
                value: cdktn.stringToHclTerraform(this._inputParameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_execution_frequency: {
                value: cdktn.stringToHclTerraform(this._maximumExecutionFrequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope: {
                value: ccConfigRuleScopePropertyToHclTerraform(this._scope.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigRule.ScopeProperty",
            },
            source: {
                value: ccConfigRuleSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigRule.SourceProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigRuleCompliancePropertyToTerraform(struct?: CcConfigRule.ComplianceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConfigRuleCompliancePropertyToHclTerraform(struct?: CcConfigRule.ComplianceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConfigRuleEvaluationModeConfigurationPropertyToTerraform(struct?: CcConfigRule.EvaluationModeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccConfigRuleEvaluationModeConfigurationPropertyToHclTerraform(struct?: CcConfigRule.EvaluationModeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigRuleScopePropertyToTerraform(struct?: CcConfigRule.ScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compliance_resource_id: cdktn.stringToTerraform(struct!.complianceResourceId),
        compliance_resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.complianceResourceTypes),
        tag_key: cdktn.stringToTerraform(struct!.tagKey),
        tag_value: cdktn.stringToTerraform(struct!.tagValue),
    }
}


export function ccConfigRuleScopePropertyToHclTerraform(struct?: CcConfigRule.ScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compliance_resource_id: {
            value: cdktn.stringToHclTerraform(struct!.complianceResourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compliance_resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.complianceResourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tag_key: {
            value: cdktn.stringToHclTerraform(struct!.tagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value: {
            value: cdktn.stringToHclTerraform(struct!.tagValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigRuleCustomPolicyDetailsPropertyToTerraform(struct?: CcConfigRule.CustomPolicyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_debug_log_delivery: cdktn.booleanToTerraform(struct!.enableDebugLogDelivery),
        policy_runtime: cdktn.stringToTerraform(struct!.policyRuntime),
        policy_text: cdktn.stringToTerraform(struct!.policyText),
    }
}


export function ccConfigRuleCustomPolicyDetailsPropertyToHclTerraform(struct?: CcConfigRule.CustomPolicyDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_debug_log_delivery: {
            value: cdktn.booleanToHclTerraform(struct!.enableDebugLogDelivery),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        policy_runtime: {
            value: cdktn.stringToHclTerraform(struct!.policyRuntime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_text: {
            value: cdktn.stringToHclTerraform(struct!.policyText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigRuleSourceDetailPropertyToTerraform(struct?: CcConfigRule.SourceDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_source: cdktn.stringToTerraform(struct!.eventSource),
        maximum_execution_frequency: cdktn.stringToTerraform(struct!.maximumExecutionFrequency),
        message_type: cdktn.stringToTerraform(struct!.messageType),
    }
}


export function ccConfigRuleSourceDetailPropertyToHclTerraform(struct?: CcConfigRule.SourceDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_source: {
            value: cdktn.stringToHclTerraform(struct!.eventSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_execution_frequency: {
            value: cdktn.stringToHclTerraform(struct!.maximumExecutionFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_type: {
            value: cdktn.stringToHclTerraform(struct!.messageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigRuleSourcePropertyToTerraform(struct?: CcConfigRule.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_policy_details: ccConfigRuleCustomPolicyDetailsPropertyToTerraform(struct!.customPolicyDetails),
        owner: cdktn.stringToTerraform(struct!.owner),
        source_details: cdktn.listMapper(ccConfigRuleSourceDetailPropertyToTerraform, false)(struct!.sourceDetails),
        source_identifier: cdktn.stringToTerraform(struct!.sourceIdentifier),
    }
}


export function ccConfigRuleSourcePropertyToHclTerraform(struct?: CcConfigRule.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_policy_details: {
            value: ccConfigRuleCustomPolicyDetailsPropertyToHclTerraform(struct!.customPolicyDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomPolicyDetailsProperty",
        },
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_details: {
            value: cdktn.listMapperHcl(ccConfigRuleSourceDetailPropertyToHclTerraform, false)(struct!.sourceDetails),
            isBlock: true,
            type: "list",
            storageClassType: "SourceDetailPropertyList",
        },
        source_identifier: {
            value: cdktn.stringToHclTerraform(struct!.sourceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfigRule {
export interface ComplianceProperty {
}
export class CompliancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComplianceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}
export interface EvaluationModeConfigurationProperty {
    /**
    * The mode of an evaluation. The valid values are Detective or Proactive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#mode CcConfigRule#mode}
    */
    readonly mode?: string;
}
export class EvaluationModeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EvaluationModeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EvaluationModeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}

export class EvaluationModeConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : EvaluationModeConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): EvaluationModeConfigurationPropertyOutputReference {
        return new EvaluationModeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScopeProperty {
    /**
    * The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for ``ComplianceResourceTypes``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#compliance_resource_id CcConfigRule#compliance_resource_id}
    */
    readonly complianceResourceId?: string;
    /**
    * The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for ``ComplianceResourceId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#compliance_resource_types CcConfigRule#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#tag_key CcConfigRule#tag_key}
    */
    readonly tagKey?: string;
    /**
    * The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for ``TagValue``, you must also specify a value for ``TagKey``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#tag_value CcConfigRule#tag_value}
    */
    readonly tagValue?: string;
}
export class ScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._complianceResourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceResourceId = this._complianceResourceId;
        }
        if (this._complianceResourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceResourceTypes = this._complianceResourceTypes;
        }
        if (this._tagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKey = this._tagKey;
        }
        if (this._tagValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValue = this._tagValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._complianceResourceId = undefined;
            this._complianceResourceTypes = undefined;
            this._tagKey = undefined;
            this._tagValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._complianceResourceId = value.complianceResourceId;
            this._complianceResourceTypes = value.complianceResourceTypes;
            this._tagKey = value.tagKey;
            this._tagValue = value.tagValue;
        }
    }

    // compliance_resource_id - computed: true, optional: true, required: false
    private _complianceResourceId?: string; 
    public get complianceResourceId() {
        return this.getStringAttribute('compliance_resource_id');
    }
    public set complianceResourceId(value: string) {
        this._complianceResourceId = value;
    }
    public resetComplianceResourceId() {
        this._complianceResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceIdInput() {
        return this._complianceResourceId;
    }

    // compliance_resource_types - computed: true, optional: true, required: false
    private _complianceResourceTypes?: string[]; 
    public get complianceResourceTypes() {
        return this.getListAttribute('compliance_resource_types');
    }
    public set complianceResourceTypes(value: string[]) {
        this._complianceResourceTypes = value;
    }
    public resetComplianceResourceTypes() {
        this._complianceResourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceResourceTypesInput() {
        return this._complianceResourceTypes;
    }

    // tag_key - computed: true, optional: true, required: false
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    public resetTagKey() {
        this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_value - computed: true, optional: true, required: false
    private _tagValue?: string; 
    public get tagValue() {
        return this.getStringAttribute('tag_value');
    }
    public set tagValue(value: string) {
        this._tagValue = value;
    }
    public resetTagValue() {
        this._tagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueInput() {
        return this._tagValue;
    }
}
export interface CustomPolicyDetailsProperty {
    /**
    * The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#enable_debug_log_delivery CcConfigRule#enable_debug_log_delivery}
    */
    readonly enableDebugLogDelivery?: boolean | cdktn.IResolvable;
    /**
    * The runtime system for your CC Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#policy_runtime CcConfigRule#policy_runtime}
    */
    readonly policyRuntime?: string;
    /**
    * The policy definition containing the logic for your CC Custom Policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#policy_text CcConfigRule#policy_text}
    */
    readonly policyText?: string;
}
export class CustomPolicyDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomPolicyDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableDebugLogDelivery !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableDebugLogDelivery = this._enableDebugLogDelivery;
        }
        if (this._policyRuntime !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyRuntime = this._policyRuntime;
        }
        if (this._policyText !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyText = this._policyText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomPolicyDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableDebugLogDelivery = undefined;
            this._policyRuntime = undefined;
            this._policyText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableDebugLogDelivery = value.enableDebugLogDelivery;
            this._policyRuntime = value.policyRuntime;
            this._policyText = value.policyText;
        }
    }

    // enable_debug_log_delivery - computed: true, optional: true, required: false
    private _enableDebugLogDelivery?: boolean | cdktn.IResolvable; 
    public get enableDebugLogDelivery() {
        return this.getBooleanAttribute('enable_debug_log_delivery');
    }
    public set enableDebugLogDelivery(value: boolean | cdktn.IResolvable) {
        this._enableDebugLogDelivery = value;
    }
    public resetEnableDebugLogDelivery() {
        this._enableDebugLogDelivery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDebugLogDeliveryInput() {
        return this._enableDebugLogDelivery;
    }

    // policy_runtime - computed: true, optional: true, required: false
    private _policyRuntime?: string; 
    public get policyRuntime() {
        return this.getStringAttribute('policy_runtime');
    }
    public set policyRuntime(value: string) {
        this._policyRuntime = value;
    }
    public resetPolicyRuntime() {
        this._policyRuntime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyRuntimeInput() {
        return this._policyRuntime;
    }

    // policy_text - computed: true, optional: true, required: false
    private _policyText?: string; 
    public get policyText() {
        return this.getStringAttribute('policy_text');
    }
    public set policyText(value: string) {
        this._policyText = value;
    }
    public resetPolicyText() {
        this._policyText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTextInput() {
        return this._policyText;
    }
}
export interface SourceDetailProperty {
    /**
    * The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#event_source CcConfigRule#event_source}
    */
    readonly eventSource?: string;
    /**
    * The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger. If you specify a value for ``MaximumExecutionFrequency``, then ``MessageType`` must use the ``ScheduledNotification`` value.
    *   By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the ``MaximumExecutionFrequency`` parameter.
    *  Based on the valid value you choose, CC runs evaluations once for each valid value. For example, if you choose ``Three_Hours``, CC runs evaluations once every three hours. In this case, ``Three_Hours`` is the frequency of this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#maximum_execution_frequency CcConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * The type of notification that triggers CC to run an evaluation for a rule. You can specify the following notification types:
    *   +   ``ConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers a configuration item as a result of a resource change.
    *   +   ``OversizedConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers an oversized configuration item. CC may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
    *   +   ``ScheduledNotification`` - Triggers a periodic evaluation at the frequency specified for ``MaximumExecutionFrequency``.
    *   +   ``ConfigurationSnapshotDeliveryCompleted`` - Triggers a periodic evaluation when CC delivers a configuration snapshot.
    *   
    *  If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for ``ConfigurationItemChangeNotification`` and one for ``OversizedConfigurationItemChangeNotification``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#message_type CcConfigRule#message_type}
    */
    readonly messageType?: string;
}
export class SourceDetailPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventSource = this._eventSource;
        }
        if (this._maximumExecutionFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionFrequency = this._maximumExecutionFrequency;
        }
        if (this._messageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageType = this._messageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventSource = undefined;
            this._maximumExecutionFrequency = undefined;
            this._messageType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventSource = value.eventSource;
            this._maximumExecutionFrequency = value.maximumExecutionFrequency;
            this._messageType = value.messageType;
        }
    }

    // event_source - computed: true, optional: true, required: false
    private _eventSource?: string; 
    public get eventSource() {
        return this.getStringAttribute('event_source');
    }
    public set eventSource(value: string) {
        this._eventSource = value;
    }
    public resetEventSource() {
        this._eventSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceInput() {
        return this._eventSource;
    }

    // maximum_execution_frequency - computed: true, optional: true, required: false
    private _maximumExecutionFrequency?: string; 
    public get maximumExecutionFrequency() {
        return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string) {
        this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
        this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
        return this._maximumExecutionFrequency;
    }

    // message_type - computed: true, optional: true, required: false
    private _messageType?: string; 
    public get messageType() {
        return this.getStringAttribute('message_type');
    }
    public set messageType(value: string) {
        this._messageType = value;
    }
    public resetMessageType() {
        this._messageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTypeInput() {
        return this._messageType;
    }
}

export class SourceDetailPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceDetailProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceDetailPropertyOutputReference {
        return new SourceDetailPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceProperty {
    /**
    * Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#custom_policy_details CcConfigRule#custom_policy_details}
    */
    readonly customPolicyDetails?: CustomPolicyDetailsProperty;
    /**
    * Indicates whether AWS or the customer owns and manages the CC rule.
    *   CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
    *   CC Custom Rules are rules that you can develop either with Guard (``CUSTOM_POLICY``) or LAMlong (``CUSTOM_LAMBDA``). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#owner CcConfigRule#owner}
    */
    readonly owner: string;
    /**
    * Provides the source and the message types that cause CC to evaluate your AWS resources against a rule. It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
    *  If the owner is set to ``CUSTOM_POLICY``, the only acceptable values for the CC rule trigger message type are ``ConfigurationItemChangeNotification`` and ``OversizedConfigurationItemChangeNotification``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#source_details CcConfigRule#source_details}
    */
    readonly sourceDetails?: SourceDetailProperty[] | cdktn.IResolvable;
    /**
    * For CC Managed rules, a predefined identifier from a list. For example, ``IAM_PASSWORD_POLICY`` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
    *  For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as ``arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name``.
    *  For CC Custom Policy rules, this field will be ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_config_rule#source_identifier CcConfigRule#source_identifier}
    */
    readonly sourceIdentifier?: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customPolicyDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customPolicyDetails = this._customPolicyDetails?.internalValue;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._sourceDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
        }
        if (this._sourceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceIdentifier = this._sourceIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customPolicyDetails.internalValue = undefined;
            this._owner = undefined;
            this._sourceDetails.internalValue = undefined;
            this._sourceIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customPolicyDetails.internalValue = value.customPolicyDetails;
            this._owner = value.owner;
            this._sourceDetails.internalValue = value.sourceDetails;
            this._sourceIdentifier = value.sourceIdentifier;
        }
    }

    // custom_policy_details - computed: true, optional: true, required: false
    private _customPolicyDetails = new CustomPolicyDetailsPropertyOutputReference(this, "custom_policy_details");
    public get customPolicyDetails() {
        return this._customPolicyDetails;
    }
    public putCustomPolicyDetails(value: CustomPolicyDetailsProperty) {
        this._customPolicyDetails.internalValue = value;
    }
    public resetCustomPolicyDetails() {
        this._customPolicyDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customPolicyDetailsInput() {
        return this._customPolicyDetails.internalValue;
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }

    // source_details - computed: true, optional: true, required: false
    private _sourceDetails = new SourceDetailPropertyList(this, "source_details", false);
    public get sourceDetails() {
        return this._sourceDetails;
    }
    public putSourceDetails(value: SourceDetailProperty[] | cdktn.IResolvable) {
        this._sourceDetails.internalValue = value;
    }
    public resetSourceDetails() {
        this._sourceDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDetailsInput() {
        return this._sourceDetails.internalValue;
    }

    // source_identifier - computed: true, optional: true, required: false
    private _sourceIdentifier?: string; 
    public get sourceIdentifier() {
        return this.getStringAttribute('source_identifier');
    }
    public set sourceIdentifier(value: string) {
        this._sourceIdentifier = value;
    }
    public resetSourceIdentifier() {
        this._sourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdentifierInput() {
        return this._sourceIdentifier;
    }
}
}
