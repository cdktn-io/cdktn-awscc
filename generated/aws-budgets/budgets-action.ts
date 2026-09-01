// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBudgetsActionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_threshold CcBudgetsAction#action_threshold}
    */
    readonly actionThreshold: CcBudgetsAction.ActionThresholdProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#action_type CcBudgetsAction#action_type}
    */
    readonly actionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#approval_model CcBudgetsAction#approval_model}
    */
    readonly approvalModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#budget_name CcBudgetsAction#budget_name}
    */
    readonly budgetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#definition CcBudgetsAction#definition}
    */
    readonly definition: CcBudgetsAction.DefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#execution_role_arn CcBudgetsAction#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#notification_type CcBudgetsAction#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#resource_tags CcBudgetsAction#resource_tags}
    */
    readonly resourceTags?: CcBudgetsAction.ResourceTagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subscribers CcBudgetsAction#subscribers}
    */
    readonly subscribers: CcBudgetsAction.SubscriberProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action}
*/
export class CcBudgetsAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_budgets_budgets_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBudgetsAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBudgetsAction to import
    * @param importFromId The id of the existing CcBudgetsAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBudgetsAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_budgets_budgets_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBudgetsActionProps
    */
    public constructor(scope: Construct, id: string, config: CcBudgetsActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_budgets_budgets_action',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._actionThreshold.internalValue = config.actionThreshold;
        this._actionType = config.actionType;
        this._approvalModel = config.approvalModel;
        this._budgetName = config.budgetName;
        this._definition.internalValue = config.definition;
        this._executionRoleArn = config.executionRoleArn;
        this._notificationType = config.notificationType;
        this._resourceTags.internalValue = config.resourceTags;
        this._subscribers.internalValue = config.subscribers;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_id - computed: true, optional: false, required: false
    public get actionId() {
        return this.getStringAttribute('action_id');
    }

    // action_threshold - computed: false, optional: false, required: true
    private _actionThreshold = new CcBudgetsAction.ActionThresholdPropertyOutputReference(this, "action_threshold");
    public get actionThreshold() {
        return this._actionThreshold;
    }
    public putActionThreshold(value: CcBudgetsAction.ActionThresholdProperty) {
        this._actionThreshold.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionThresholdInput() {
        return this._actionThreshold.internalValue;
    }

    // action_type - computed: false, optional: false, required: true
    private _actionType?: string; 
    public get actionType() {
        return this.getStringAttribute('action_type');
    }
    public set actionType(value: string) {
        this._actionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionTypeInput() {
        return this._actionType;
    }

    // approval_model - computed: true, optional: true, required: false
    private _approvalModel?: string; 
    public get approvalModel() {
        return this.getStringAttribute('approval_model');
    }
    public set approvalModel(value: string) {
        this._approvalModel = value;
    }
    public resetApprovalModel() {
        this._approvalModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvalModelInput() {
        return this._approvalModel;
    }

    // budget_name - computed: false, optional: false, required: true
    private _budgetName?: string; 
    public get budgetName() {
        return this.getStringAttribute('budget_name');
    }
    public set budgetName(value: string) {
        this._budgetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get budgetNameInput() {
        return this._budgetName;
    }

    // definition - computed: false, optional: false, required: true
    private _definition = new CcBudgetsAction.DefinitionPropertyOutputReference(this, "definition");
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcBudgetsAction.DefinitionProperty) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_type - computed: false, optional: false, required: true
    private _notificationType?: string; 
    public get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    public set notificationType(value: string) {
        this._notificationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypeInput() {
        return this._notificationType;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcBudgetsAction.ResourceTagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcBudgetsAction.ResourceTagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // subscribers - computed: false, optional: false, required: true
    private _subscribers = new CcBudgetsAction.SubscriberPropertyList(this, "subscribers", false);
    public get subscribers() {
        return this._subscribers;
    }
    public putSubscribers(value: CcBudgetsAction.SubscriberProperty[] | cdktn.IResolvable) {
        this._subscribers.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscribersInput() {
        return this._subscribers.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_threshold: ccBudgetsActionActionThresholdPropertyToTerraform(this._actionThreshold.internalValue),
            action_type: cdktn.stringToTerraform(this._actionType),
            approval_model: cdktn.stringToTerraform(this._approvalModel),
            budget_name: cdktn.stringToTerraform(this._budgetName),
            definition: ccBudgetsActionDefinitionPropertyToTerraform(this._definition.internalValue),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            notification_type: cdktn.stringToTerraform(this._notificationType),
            resource_tags: cdktn.listMapper(ccBudgetsActionResourceTagPropertyToTerraform, false)(this._resourceTags.internalValue),
            subscribers: cdktn.listMapper(ccBudgetsActionSubscriberPropertyToTerraform, false)(this._subscribers.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_threshold: {
                value: ccBudgetsActionActionThresholdPropertyToHclTerraform(this._actionThreshold.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBudgetsAction.ActionThresholdProperty",
            },
            action_type: {
                value: cdktn.stringToHclTerraform(this._actionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            approval_model: {
                value: cdktn.stringToHclTerraform(this._approvalModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            budget_name: {
                value: cdktn.stringToHclTerraform(this._budgetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            definition: {
                value: ccBudgetsActionDefinitionPropertyToHclTerraform(this._definition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBudgetsAction.DefinitionProperty",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_type: {
                value: cdktn.stringToHclTerraform(this._notificationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccBudgetsActionResourceTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBudgetsAction.ResourceTagPropertyList",
            },
            subscribers: {
                value: cdktn.listMapperHcl(ccBudgetsActionSubscriberPropertyToHclTerraform, false)(this._subscribers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBudgetsAction.SubscriberPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBudgetsActionActionThresholdPropertyToTerraform(struct?: CcBudgetsAction.ActionThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccBudgetsActionActionThresholdPropertyToHclTerraform(struct?: CcBudgetsAction.ActionThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionIamActionDefinitionPropertyToTerraform(struct?: CcBudgetsAction.IamActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
        policy_arn: cdktn.stringToTerraform(struct!.policyArn),
        roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.roles),
        users: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.users),
    }
}


export function ccBudgetsActionIamActionDefinitionPropertyToHclTerraform(struct?: CcBudgetsAction.IamActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        policy_arn: {
            value: cdktn.stringToHclTerraform(struct!.policyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        roles: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.roles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        users: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.users),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionScpActionDefinitionPropertyToTerraform(struct?: CcBudgetsAction.ScpActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_id: cdktn.stringToTerraform(struct!.policyId),
        target_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetIds),
    }
}


export function ccBudgetsActionScpActionDefinitionPropertyToHclTerraform(struct?: CcBudgetsAction.ScpActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_id: {
            value: cdktn.stringToHclTerraform(struct!.policyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionSsmActionDefinitionPropertyToTerraform(struct?: CcBudgetsAction.SsmActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceIds),
        region: cdktn.stringToTerraform(struct!.region),
        subtype: cdktn.stringToTerraform(struct!.subtype),
    }
}


export function ccBudgetsActionSsmActionDefinitionPropertyToHclTerraform(struct?: CcBudgetsAction.SsmActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subtype: {
            value: cdktn.stringToHclTerraform(struct!.subtype),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionDefinitionPropertyToTerraform(struct?: CcBudgetsAction.DefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_action_definition: ccBudgetsActionIamActionDefinitionPropertyToTerraform(struct!.iamActionDefinition),
        scp_action_definition: ccBudgetsActionScpActionDefinitionPropertyToTerraform(struct!.scpActionDefinition),
        ssm_action_definition: ccBudgetsActionSsmActionDefinitionPropertyToTerraform(struct!.ssmActionDefinition),
    }
}


export function ccBudgetsActionDefinitionPropertyToHclTerraform(struct?: CcBudgetsAction.DefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_action_definition: {
            value: ccBudgetsActionIamActionDefinitionPropertyToHclTerraform(struct!.iamActionDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "IamActionDefinitionProperty",
        },
        scp_action_definition: {
            value: ccBudgetsActionScpActionDefinitionPropertyToHclTerraform(struct!.scpActionDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "ScpActionDefinitionProperty",
        },
        ssm_action_definition: {
            value: ccBudgetsActionSsmActionDefinitionPropertyToHclTerraform(struct!.ssmActionDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "SsmActionDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionResourceTagPropertyToTerraform(struct?: CcBudgetsAction.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBudgetsActionResourceTagPropertyToHclTerraform(struct?: CcBudgetsAction.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBudgetsActionSubscriberPropertyToTerraform(struct?: CcBudgetsAction.SubscriberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: cdktn.stringToTerraform(struct!.address),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccBudgetsActionSubscriberPropertyToHclTerraform(struct?: CcBudgetsAction.SubscriberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: cdktn.stringToHclTerraform(struct!.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBudgetsAction {
export interface ActionThresholdProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type CcBudgetsAction#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value CcBudgetsAction#value}
    */
    readonly value: number;
}
export class ActionThresholdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionThresholdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionThresholdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}
export interface IamActionDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#groups CcBudgetsAction#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_arn CcBudgetsAction#policy_arn}
    */
    readonly policyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#roles CcBudgetsAction#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#users CcBudgetsAction#users}
    */
    readonly users?: string[];
}
export class IamActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamActionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groups !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._policyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyArn = this._policyArn;
        }
        if (this._roles !== undefined) {
            hasAnyValues = true;
            internalValueResult.roles = this._roles;
        }
        if (this._users !== undefined) {
            hasAnyValues = true;
            internalValueResult.users = this._users;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamActionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groups = undefined;
            this._policyArn = undefined;
            this._roles = undefined;
            this._users = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groups = value.groups;
            this._policyArn = value.policyArn;
            this._roles = value.roles;
            this._users = value.users;
        }
    }

    // groups - computed: true, optional: true, required: false
    private _groups?: string[]; 
    public get groups() {
        return this.getListAttribute('groups');
    }
    public set groups(value: string[]) {
        this._groups = value;
    }
    public resetGroups() {
        this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
        return this._groups;
    }

    // policy_arn - computed: true, optional: true, required: false
    private _policyArn?: string; 
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
        this._policyArn = value;
    }
    public resetPolicyArn() {
        this._policyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
        return this._policyArn;
    }

    // roles - computed: true, optional: true, required: false
    private _roles?: string[]; 
    public get roles() {
        return this.getListAttribute('roles');
    }
    public set roles(value: string[]) {
        this._roles = value;
    }
    public resetRoles() {
        this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles;
    }

    // users - computed: true, optional: true, required: false
    private _users?: string[]; 
    public get users() {
        return this.getListAttribute('users');
    }
    public set users(value: string[]) {
        this._users = value;
    }
    public resetUsers() {
        this._users = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usersInput() {
        return this._users;
    }
}
export interface ScpActionDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#policy_id CcBudgetsAction#policy_id}
    */
    readonly policyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#target_ids CcBudgetsAction#target_ids}
    */
    readonly targetIds?: string[];
}
export class ScpActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScpActionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyId = this._policyId;
        }
        if (this._targetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetIds = this._targetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScpActionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyId = undefined;
            this._targetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyId = value.policyId;
            this._targetIds = value.targetIds;
        }
    }

    // policy_id - computed: true, optional: true, required: false
    private _policyId?: string; 
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }
    public set policyId(value: string) {
        this._policyId = value;
    }
    public resetPolicyId() {
        this._policyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyIdInput() {
        return this._policyId;
    }

    // target_ids - computed: true, optional: true, required: false
    private _targetIds?: string[]; 
    public get targetIds() {
        return this.getListAttribute('target_ids');
    }
    public set targetIds(value: string[]) {
        this._targetIds = value;
    }
    public resetTargetIds() {
        this._targetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdsInput() {
        return this._targetIds;
    }
}
export interface SsmActionDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#instance_ids CcBudgetsAction#instance_ids}
    */
    readonly instanceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#region CcBudgetsAction#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#subtype CcBudgetsAction#subtype}
    */
    readonly subtype?: string;
}
export class SsmActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SsmActionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceIds = this._instanceIds;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._subtype !== undefined) {
            hasAnyValues = true;
            internalValueResult.subtype = this._subtype;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmActionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceIds = undefined;
            this._region = undefined;
            this._subtype = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceIds = value.instanceIds;
            this._region = value.region;
            this._subtype = value.subtype;
        }
    }

    // instance_ids - computed: true, optional: true, required: false
    private _instanceIds?: string[]; 
    public get instanceIds() {
        return this.getListAttribute('instance_ids');
    }
    public set instanceIds(value: string[]) {
        this._instanceIds = value;
    }
    public resetInstanceIds() {
        this._instanceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdsInput() {
        return this._instanceIds;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // subtype - computed: true, optional: true, required: false
    private _subtype?: string; 
    public get subtype() {
        return this.getStringAttribute('subtype');
    }
    public set subtype(value: string) {
        this._subtype = value;
    }
    public resetSubtype() {
        this._subtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subtypeInput() {
        return this._subtype;
    }
}
export interface DefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#iam_action_definition CcBudgetsAction#iam_action_definition}
    */
    readonly iamActionDefinition?: IamActionDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#scp_action_definition CcBudgetsAction#scp_action_definition}
    */
    readonly scpActionDefinition?: ScpActionDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#ssm_action_definition CcBudgetsAction#ssm_action_definition}
    */
    readonly ssmActionDefinition?: SsmActionDefinitionProperty;
}
export class DefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamActionDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamActionDefinition = this._iamActionDefinition?.internalValue;
        }
        if (this._scpActionDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scpActionDefinition = this._scpActionDefinition?.internalValue;
        }
        if (this._ssmActionDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ssmActionDefinition = this._ssmActionDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamActionDefinition.internalValue = undefined;
            this._scpActionDefinition.internalValue = undefined;
            this._ssmActionDefinition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamActionDefinition.internalValue = value.iamActionDefinition;
            this._scpActionDefinition.internalValue = value.scpActionDefinition;
            this._ssmActionDefinition.internalValue = value.ssmActionDefinition;
        }
    }

    // iam_action_definition - computed: true, optional: true, required: false
    private _iamActionDefinition = new IamActionDefinitionPropertyOutputReference(this, "iam_action_definition");
    public get iamActionDefinition() {
        return this._iamActionDefinition;
    }
    public putIamActionDefinition(value: IamActionDefinitionProperty) {
        this._iamActionDefinition.internalValue = value;
    }
    public resetIamActionDefinition() {
        this._iamActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamActionDefinitionInput() {
        return this._iamActionDefinition.internalValue;
    }

    // scp_action_definition - computed: true, optional: true, required: false
    private _scpActionDefinition = new ScpActionDefinitionPropertyOutputReference(this, "scp_action_definition");
    public get scpActionDefinition() {
        return this._scpActionDefinition;
    }
    public putScpActionDefinition(value: ScpActionDefinitionProperty) {
        this._scpActionDefinition.internalValue = value;
    }
    public resetScpActionDefinition() {
        this._scpActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scpActionDefinitionInput() {
        return this._scpActionDefinition.internalValue;
    }

    // ssm_action_definition - computed: true, optional: true, required: false
    private _ssmActionDefinition = new SsmActionDefinitionPropertyOutputReference(this, "ssm_action_definition");
    public get ssmActionDefinition() {
        return this._ssmActionDefinition;
    }
    public putSsmActionDefinition(value: SsmActionDefinitionProperty) {
        this._ssmActionDefinition.internalValue = value;
    }
    public resetSsmActionDefinition() {
        this._ssmActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssmActionDefinitionInput() {
        return this._ssmActionDefinition.internalValue;
    }
}
export interface ResourceTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#key CcBudgetsAction#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#value CcBudgetsAction#value}
    */
    readonly value?: string;
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubscriberProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#address CcBudgetsAction#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/budgets_budgets_action#type CcBudgetsAction#type}
    */
    readonly type: string;
}
export class SubscriberPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubscriberProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubscriberProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._type = value.type;
        }
    }

    // address - computed: false, optional: false, required: true
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class SubscriberPropertyList extends cdktn.ComplexList {
    public internalValue? : SubscriberProperty[] | cdktn.IResolvable

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
    public get(index: number): SubscriberPropertyOutputReference {
        return new SubscriberPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
