// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventBusPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The action that you are enabling the other account to perform.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#action CcEventBusPolicy#action}
    */
    readonly action?: string;
    /**
    * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#condition CcEventBusPolicy#condition}
    */
    readonly condition?: CcEventBusPolicy.ConditionProperty;
    /**
    * The name of the event bus associated with the rule. If you omit this, the default event bus is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#event_bus_name CcEventBusPolicy#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#principal CcEventBusPolicy#principal}
    */
    readonly principal?: string;
    /**
    * A JSON string that describes the permission policy statement. You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#statement CcEventBusPolicy#statement}
    */
    readonly statement?: string;
    /**
    * An identifier string for the external account that you are granting permissions to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#statement_id CcEventBusPolicy#statement_id}
    */
    readonly statementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy awscc_events_event_bus_policy}
*/
export class CcEventBusPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_event_bus_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventBusPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventBusPolicy to import
    * @param importFromId The id of the existing CcEventBusPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventBusPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_event_bus_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy awscc_events_event_bus_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventBusPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcEventBusPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_event_bus_policy',
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
        this._action = config.action;
        this._condition.internalValue = config.condition;
        this._eventBusName = config.eventBusName;
        this._principal = config.principal;
        this._statement = config.statement;
        this._statementId = config.statementId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // condition - computed: true, optional: true, required: false
    private _condition = new CcEventBusPolicy.ConditionPropertyOutputReference(this, "condition");
    public get condition() {
        return this._condition;
    }
    public putCondition(value: CcEventBusPolicy.ConditionProperty) {
        this._condition.internalValue = value;
    }
    public resetCondition() {
        this._condition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition.internalValue;
    }

    // event_bus_name - computed: true, optional: true, required: false
    private _eventBusName?: string; 
    public get eventBusName() {
        return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string) {
        this._eventBusName = value;
    }
    public resetEventBusName() {
        this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
        return this._eventBusName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
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

    // statement_id - computed: false, optional: false, required: true
    private _statementId?: string; 
    public get statementId() {
        return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
        this._statementId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
        return this._statementId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.stringToTerraform(this._action),
            condition: ccEventBusPolicyConditionPropertyToTerraform(this._condition.internalValue),
            event_bus_name: cdktn.stringToTerraform(this._eventBusName),
            principal: cdktn.stringToTerraform(this._principal),
            statement: cdktn.stringToTerraform(this._statement),
            statement_id: cdktn.stringToTerraform(this._statementId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            condition: {
                value: ccEventBusPolicyConditionPropertyToHclTerraform(this._condition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventBusPolicy.ConditionProperty",
            },
            event_bus_name: {
                value: cdktn.stringToHclTerraform(this._eventBusName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statement: {
                value: cdktn.stringToHclTerraform(this._statement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statement_id: {
                value: cdktn.stringToHclTerraform(this._statementId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventBusPolicyConditionPropertyToTerraform(struct?: CcEventBusPolicy.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventBusPolicyConditionPropertyToHclTerraform(struct?: CcEventBusPolicy.ConditionProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export namespace CcEventBusPolicy {
export interface ConditionProperty {
    /**
    * Specifies the value for the key. Currently, this must be the ID of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#key CcEventBusPolicy#key}
    */
    readonly key?: string;
    /**
    * Specifies the type of condition. Currently the only supported value is StringEquals.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#type CcEventBusPolicy#type}
    */
    readonly type?: string;
    /**
    * Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_event_bus_policy#value CcEventBusPolicy#value}
    */
    readonly value?: string;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
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

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
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
            this._key = value.key;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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
}
