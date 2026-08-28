// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The definition structure for policies. Encapsulates different policy formats.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#definition CcPolicy#definition}
    */
    readonly definition: CcPolicy.PolicyDefinitionProperty;
    /**
    * A human-readable description of the policy's purpose and functionality.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#description CcPolicy#description}
    */
    readonly description?: string;
    /**
    * Whether the policy contributes to the enforce decision returned to Gateway. LOG_ONLY policies are still evaluated but their decisions are observed only, allowing customers to validate a policy against real traffic before promoting it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#enforcement_mode CcPolicy#enforcement_mode}
    */
    readonly enforcementMode?: string;
    /**
    * The customer-assigned immutable name for the policy. Must be unique within the policy engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#name CcPolicy#name}
    */
    readonly name: string;
    /**
    * The identifier of the policy engine which contains this policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#policy_engine_id CcPolicy#policy_engine_id}
    */
    readonly policyEngineId: string;
    /**
    * The validation mode for the policy. Determines how Cedar analyzer validation results are handled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#validation_mode CcPolicy#validation_mode}
    */
    readonly validationMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy awscc_bedrockagentcore_policy}
*/
export class CcPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicy to import
    * @param importFromId The id of the existing CcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy awscc_bedrockagentcore_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_policy',
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
        this._definition.internalValue = config.definition;
        this._description = config.description;
        this._enforcementMode = config.enforcementMode;
        this._name = config.name;
        this._policyEngineId = config.policyEngineId;
        this._validationMode = config.validationMode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // definition - computed: false, optional: false, required: true
    private _definition = new CcPolicy.PolicyDefinitionPropertyOutputReference(this, "definition");
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcPolicy.PolicyDefinitionProperty) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
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

    // enforcement_mode - computed: true, optional: true, required: false
    private _enforcementMode?: string; 
    public get enforcementMode() {
        return this.getStringAttribute('enforcement_mode');
    }
    public set enforcementMode(value: string) {
        this._enforcementMode = value;
    }
    public resetEnforcementMode() {
        this._enforcementMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcementModeInput() {
        return this._enforcementMode;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // policy_arn - computed: true, optional: false, required: false
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }

    // policy_engine_id - computed: false, optional: false, required: true
    private _policyEngineId?: string; 
    public get policyEngineId() {
        return this.getStringAttribute('policy_engine_id');
    }
    public set policyEngineId(value: string) {
        this._policyEngineId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyEngineIdInput() {
        return this._policyEngineId;
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reasons - computed: true, optional: false, required: false
    public get statusReasons() {
        return this.getListAttribute('status_reasons');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // validation_mode - computed: true, optional: true, required: false
    private _validationMode?: string; 
    public get validationMode() {
        return this.getStringAttribute('validation_mode');
    }
    public set validationMode(value: string) {
        this._validationMode = value;
    }
    public resetValidationMode() {
        this._validationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationModeInput() {
        return this._validationMode;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            definition: ccPolicyPolicyDefinitionPropertyToTerraform(this._definition.internalValue),
            description: cdktn.stringToTerraform(this._description),
            enforcement_mode: cdktn.stringToTerraform(this._enforcementMode),
            name: cdktn.stringToTerraform(this._name),
            policy_engine_id: cdktn.stringToTerraform(this._policyEngineId),
            validation_mode: cdktn.stringToTerraform(this._validationMode),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            definition: {
                value: ccPolicyPolicyDefinitionPropertyToHclTerraform(this._definition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.PolicyDefinitionProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforcement_mode: {
                value: cdktn.stringToHclTerraform(this._enforcementMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_engine_id: {
                value: cdktn.stringToHclTerraform(this._policyEngineId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_mode: {
                value: cdktn.stringToHclTerraform(this._validationMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyCedarPolicyPropertyToTerraform(struct?: CcPolicy.CedarPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        statement: cdktn.stringToTerraform(struct!.statement),
    }
}


export function ccPolicyCedarPolicyPropertyToHclTerraform(struct?: CcPolicy.CedarPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        statement: {
            value: cdktn.stringToHclTerraform(struct!.statement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyStatementPropertyToTerraform(struct?: CcPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        statement: cdktn.stringToTerraform(struct!.statement),
    }
}


export function ccPolicyPolicyStatementPropertyToHclTerraform(struct?: CcPolicy.PolicyStatementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        statement: {
            value: cdktn.stringToHclTerraform(struct!.statement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyDefinitionPropertyToTerraform(struct?: CcPolicy.PolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cedar: ccPolicyCedarPolicyPropertyToTerraform(struct!.cedar),
        policy: ccPolicyPolicyStatementPropertyToTerraform(struct!.policy),
    }
}


export function ccPolicyPolicyDefinitionPropertyToHclTerraform(struct?: CcPolicy.PolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cedar: {
            value: ccPolicyCedarPolicyPropertyToHclTerraform(struct!.cedar),
            isBlock: true,
            type: "struct",
            storageClassType: "CedarPolicyProperty",
        },
        policy: {
            value: ccPolicyPolicyStatementPropertyToHclTerraform(struct!.policy),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyStatementProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPolicy {
export interface CedarPolicyProperty {
    /**
    * The Cedar policy statement that defines the authorization logic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#statement CcPolicy#statement}
    */
    readonly statement?: string;
}
export class CedarPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CedarPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._statement !== undefined) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CedarPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statement = value.statement;
        }
    }

    // statement - computed: true, optional: true, required: false
    private _statement?: string; 
    public get statement() {
        return this.getStringAttribute('statement');
    }
    public set statement(value: string) {
        this._statement = value;
    }
    public resetStatement() {
        this._statement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementInput() {
        return this._statement;
    }
}
export interface PolicyStatementProperty {
    /**
    * The policy statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#statement CcPolicy#statement}
    */
    readonly statement?: string;
}
export class PolicyStatementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyStatementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._statement !== undefined) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyStatementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statement = value.statement;
        }
    }

    // statement - computed: true, optional: true, required: false
    private _statement?: string; 
    public get statement() {
        return this.getStringAttribute('statement');
    }
    public set statement(value: string) {
        this._statement = value;
    }
    public resetStatement() {
        this._statement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementInput() {
        return this._statement;
    }
}
export interface PolicyDefinitionProperty {
    /**
    * A Cedar policy statement within the AgentCore Policy system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#cedar CcPolicy#cedar}
    */
    readonly cedar?: CedarPolicyProperty;
    /**
    * A policy statement within the AgentCore Policy system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_policy#policy CcPolicy#policy}
    */
    readonly policy?: PolicyStatementProperty;
}
export class PolicyDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cedar?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cedar = this._cedar?.internalValue;
        }
        if (this._policy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cedar.internalValue = undefined;
            this._policy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cedar.internalValue = value.cedar;
            this._policy.internalValue = value.policy;
        }
    }

    // cedar - computed: true, optional: true, required: false
    private _cedar = new CedarPolicyPropertyOutputReference(this, "cedar");
    public get cedar() {
        return this._cedar;
    }
    public putCedar(value: CedarPolicyProperty) {
        this._cedar.internalValue = value;
    }
    public resetCedar() {
        this._cedar.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cedarInput() {
        return this._cedar.internalValue;
    }

    // policy - computed: true, optional: true, required: false
    private _policy = new PolicyStatementPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: PolicyStatementProperty) {
        this._policy.internalValue = value;
    }
    public resetPolicy() {
        this._policy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
    }
}
}
