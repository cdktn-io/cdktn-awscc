// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrivacyBudgetTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CcPrivacyBudgetTemplate#auto_refresh}
    */
    readonly autoRefresh: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CcPrivacyBudgetTemplate#membership_identifier}
    */
    readonly membershipIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#parameters CcPrivacyBudgetTemplate#parameters}
    */
    readonly parameters: CcPrivacyBudgetTemplate.ParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CcPrivacyBudgetTemplate#privacy_budget_type}
    */
    readonly privacyBudgetType: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#tags CcPrivacyBudgetTemplate#tags}
    */
    readonly tags?: CcPrivacyBudgetTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}
*/
export class CcPrivacyBudgetTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_privacy_budget_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrivacyBudgetTemplate to import
    * @param importFromId The id of the existing CcPrivacyBudgetTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrivacyBudgetTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_privacy_budget_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrivacyBudgetTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcPrivacyBudgetTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_privacy_budget_template',
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
        this._autoRefresh = config.autoRefresh;
        this._membershipIdentifier = config.membershipIdentifier;
        this._parameters.internalValue = config.parameters;
        this._privacyBudgetType = config.privacyBudgetType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_refresh - computed: false, optional: false, required: true
    private _autoRefresh?: string; 
    public get autoRefresh() {
        return this.getStringAttribute('auto_refresh');
    }
    public set autoRefresh(value: string) {
        this._autoRefresh = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRefreshInput() {
        return this._autoRefresh;
    }

    // collaboration_arn - computed: true, optional: false, required: false
    public get collaborationArn() {
        return this.getStringAttribute('collaboration_arn');
    }

    // collaboration_identifier - computed: true, optional: false, required: false
    public get collaborationIdentifier() {
        return this.getStringAttribute('collaboration_identifier');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // membership_arn - computed: true, optional: false, required: false
    public get membershipArn() {
        return this.getStringAttribute('membership_arn');
    }

    // membership_identifier - computed: false, optional: false, required: true
    private _membershipIdentifier?: string; 
    public get membershipIdentifier() {
        return this.getStringAttribute('membership_identifier');
    }
    public set membershipIdentifier(value: string) {
        this._membershipIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get membershipIdentifierInput() {
        return this._membershipIdentifier;
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters = new CcPrivacyBudgetTemplate.ParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcPrivacyBudgetTemplate.ParametersProperty) {
        this._parameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // privacy_budget_template_identifier - computed: true, optional: false, required: false
    public get privacyBudgetTemplateIdentifier() {
        return this.getStringAttribute('privacy_budget_template_identifier');
    }

    // privacy_budget_type - computed: false, optional: false, required: true
    private _privacyBudgetType?: string; 
    public get privacyBudgetType() {
        return this.getStringAttribute('privacy_budget_type');
    }
    public set privacyBudgetType(value: string) {
        this._privacyBudgetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privacyBudgetTypeInput() {
        return this._privacyBudgetType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPrivacyBudgetTemplate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPrivacyBudgetTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_refresh: cdktn.stringToTerraform(this._autoRefresh),
            membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
            parameters: ccPrivacyBudgetTemplateParametersPropertyToTerraform(this._parameters.internalValue),
            privacy_budget_type: cdktn.stringToTerraform(this._privacyBudgetType),
            tags: cdktn.listMapper(ccPrivacyBudgetTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_refresh: {
                value: cdktn.stringToHclTerraform(this._autoRefresh),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            membership_identifier: {
                value: cdktn.stringToHclTerraform(this._membershipIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: ccPrivacyBudgetTemplateParametersPropertyToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPrivacyBudgetTemplate.ParametersProperty",
            },
            privacy_budget_type: {
                value: cdktn.stringToHclTerraform(this._privacyBudgetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPrivacyBudgetTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPrivacyBudgetTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPrivacyBudgetTemplateBudgetParameterPropertyToTerraform(struct?: CcPrivacyBudgetTemplate.BudgetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_refresh: cdktn.stringToTerraform(struct!.autoRefresh),
        budget: cdktn.numberToTerraform(struct!.budget),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPrivacyBudgetTemplateBudgetParameterPropertyToHclTerraform(struct?: CcPrivacyBudgetTemplate.BudgetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_refresh: {
            value: cdktn.stringToHclTerraform(struct!.autoRefresh),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        budget: {
            value: cdktn.numberToHclTerraform(struct!.budget),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccPrivacyBudgetTemplateParametersPropertyToTerraform(struct?: CcPrivacyBudgetTemplate.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        budget_parameters: cdktn.listMapper(ccPrivacyBudgetTemplateBudgetParameterPropertyToTerraform, false)(struct!.budgetParameters),
        epsilon: cdktn.numberToTerraform(struct!.epsilon),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        users_noise_per_query: cdktn.numberToTerraform(struct!.usersNoisePerQuery),
    }
}


export function ccPrivacyBudgetTemplateParametersPropertyToHclTerraform(struct?: CcPrivacyBudgetTemplate.ParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        budget_parameters: {
            value: cdktn.listMapperHcl(ccPrivacyBudgetTemplateBudgetParameterPropertyToHclTerraform, false)(struct!.budgetParameters),
            isBlock: true,
            type: "list",
            storageClassType: "BudgetParameterPropertyList",
        },
        epsilon: {
            value: cdktn.numberToHclTerraform(struct!.epsilon),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        users_noise_per_query: {
            value: cdktn.numberToHclTerraform(struct!.usersNoisePerQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivacyBudgetTemplateTagPropertyToTerraform(struct?: CcPrivacyBudgetTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPrivacyBudgetTemplateTagPropertyToHclTerraform(struct?: CcPrivacyBudgetTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPrivacyBudgetTemplate {
export interface BudgetParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CcPrivacyBudgetTemplate#auto_refresh}
    */
    readonly autoRefresh?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget CcPrivacyBudgetTemplate#budget}
    */
    readonly budget?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#type CcPrivacyBudgetTemplate#type}
    */
    readonly type?: string;
}
export class BudgetParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BudgetParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRefresh !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRefresh = this._autoRefresh;
        }
        if (this._budget !== undefined) {
            hasAnyValues = true;
            internalValueResult.budget = this._budget;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BudgetParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRefresh = undefined;
            this._budget = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRefresh = value.autoRefresh;
            this._budget = value.budget;
            this._type = value.type;
        }
    }

    // auto_refresh - computed: true, optional: true, required: false
    private _autoRefresh?: string; 
    public get autoRefresh() {
        return this.getStringAttribute('auto_refresh');
    }
    public set autoRefresh(value: string) {
        this._autoRefresh = value;
    }
    public resetAutoRefresh() {
        this._autoRefresh = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRefreshInput() {
        return this._autoRefresh;
    }

    // budget - computed: true, optional: true, required: false
    private _budget?: number; 
    public get budget() {
        return this.getNumberAttribute('budget');
    }
    public set budget(value: number) {
        this._budget = value;
    }
    public resetBudget() {
        this._budget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get budgetInput() {
        return this._budget;
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
}

export class BudgetParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : BudgetParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): BudgetParameterPropertyOutputReference {
        return new BudgetParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CcPrivacyBudgetTemplate#budget_parameters}
    */
    readonly budgetParameters?: BudgetParameterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CcPrivacyBudgetTemplate#epsilon}
    */
    readonly epsilon?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CcPrivacyBudgetTemplate#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CcPrivacyBudgetTemplate#users_noise_per_query}
    */
    readonly usersNoisePerQuery?: number;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._budgetParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.budgetParameters = this._budgetParameters?.internalValue;
        }
        if (this._epsilon !== undefined) {
            hasAnyValues = true;
            internalValueResult.epsilon = this._epsilon;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._usersNoisePerQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.usersNoisePerQuery = this._usersNoisePerQuery;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._budgetParameters.internalValue = undefined;
            this._epsilon = undefined;
            this._resourceArn = undefined;
            this._usersNoisePerQuery = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._budgetParameters.internalValue = value.budgetParameters;
            this._epsilon = value.epsilon;
            this._resourceArn = value.resourceArn;
            this._usersNoisePerQuery = value.usersNoisePerQuery;
        }
    }

    // budget_parameters - computed: true, optional: true, required: false
    private _budgetParameters = new BudgetParameterPropertyList(this, "budget_parameters", false);
    public get budgetParameters() {
        return this._budgetParameters;
    }
    public putBudgetParameters(value: BudgetParameterProperty[] | cdktn.IResolvable) {
        this._budgetParameters.internalValue = value;
    }
    public resetBudgetParameters() {
        this._budgetParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get budgetParametersInput() {
        return this._budgetParameters.internalValue;
    }

    // epsilon - computed: true, optional: true, required: false
    private _epsilon?: number; 
    public get epsilon() {
        return this.getNumberAttribute('epsilon');
    }
    public set epsilon(value: number) {
        this._epsilon = value;
    }
    public resetEpsilon() {
        this._epsilon = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get epsilonInput() {
        return this._epsilon;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // users_noise_per_query - computed: true, optional: true, required: false
    private _usersNoisePerQuery?: number; 
    public get usersNoisePerQuery() {
        return this.getNumberAttribute('users_noise_per_query');
    }
    public set usersNoisePerQuery(value: number) {
        this._usersNoisePerQuery = value;
    }
    public resetUsersNoisePerQuery() {
        this._usersNoisePerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usersNoisePerQueryInput() {
        return this._usersNoisePerQuery;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#key CcPrivacyBudgetTemplate#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_privacy_budget_template#value CcPrivacyBudgetTemplate#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
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

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
