// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPermissionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#actions CcPermission#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#application_id CcPermission#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#conditions CcPermission#conditions}
    */
    readonly conditions?: CcPermission.ConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#principal CcPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#statement_id CcPermission#statement_id}
    */
    readonly statementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission awscc_qbusiness_permission}
*/
export class CcPermission extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_qbusiness_permission";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPermission resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPermission to import
    * @param importFromId The id of the existing CcPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPermission to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_permission", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission awscc_qbusiness_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPermissionProps
    */
    public constructor(scope: Construct, id: string, config: CcPermissionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_qbusiness_permission',
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
        this._actions = config.actions;
        this._applicationId = config.applicationId;
        this._conditions.internalValue = config.conditions;
        this._principal = config.principal;
        this._statementId = config.statementId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new CcPermission.ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcPermission.ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
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
            actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._actions),
            application_id: cdktn.stringToTerraform(this._applicationId),
            conditions: cdktn.listMapper(ccPermissionConditionPropertyToTerraform, false)(this._conditions.internalValue),
            principal: cdktn.stringToTerraform(this._principal),
            statement_id: cdktn.stringToTerraform(this._statementId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._actions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            conditions: {
                value: cdktn.listMapperHcl(ccPermissionConditionPropertyToHclTerraform, false)(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPermission.ConditionPropertyList",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
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

export function ccPermissionConditionPropertyToTerraform(struct?: CcPermission.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition_key: cdktn.stringToTerraform(struct!.conditionKey),
        condition_operator: cdktn.stringToTerraform(struct!.conditionOperator),
        condition_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.conditionValues),
    }
}


export function ccPermissionConditionPropertyToHclTerraform(struct?: CcPermission.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition_key: {
            value: cdktn.stringToHclTerraform(struct!.conditionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        condition_operator: {
            value: cdktn.stringToHclTerraform(struct!.conditionOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        condition_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.conditionValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPermission {
export interface ConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#condition_key CcPermission#condition_key}
    */
    readonly conditionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#condition_operator CcPermission#condition_operator}
    */
    readonly conditionOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_permission#condition_values CcPermission#condition_values}
    */
    readonly conditionValues?: string[];
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionKey = this._conditionKey;
        }
        if (this._conditionOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionOperator = this._conditionOperator;
        }
        if (this._conditionValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionValues = this._conditionValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditionKey = undefined;
            this._conditionOperator = undefined;
            this._conditionValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditionKey = value.conditionKey;
            this._conditionOperator = value.conditionOperator;
            this._conditionValues = value.conditionValues;
        }
    }

    // condition_key - computed: true, optional: true, required: false
    private _conditionKey?: string; 
    public get conditionKey() {
        return this.getStringAttribute('condition_key');
    }
    public set conditionKey(value: string) {
        this._conditionKey = value;
    }
    public resetConditionKey() {
        this._conditionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionKeyInput() {
        return this._conditionKey;
    }

    // condition_operator - computed: true, optional: true, required: false
    private _conditionOperator?: string; 
    public get conditionOperator() {
        return this.getStringAttribute('condition_operator');
    }
    public set conditionOperator(value: string) {
        this._conditionOperator = value;
    }
    public resetConditionOperator() {
        this._conditionOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionOperatorInput() {
        return this._conditionOperator;
    }

    // condition_values - computed: true, optional: true, required: false
    private _conditionValues?: string[]; 
    public get conditionValues() {
        return this.getListAttribute('condition_values');
    }
    public set conditionValues(value: string[]) {
        this._conditionValues = value;
    }
    public resetConditionValues() {
        this._conditionValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionValuesInput() {
        return this._conditionValues;
    }
}

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
