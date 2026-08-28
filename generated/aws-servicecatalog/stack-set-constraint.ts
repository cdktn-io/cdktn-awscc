// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStackSetConstraintProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#accept_language CcStackSetConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * One or more AWS accounts that will have access to the provisioned product.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#account_list CcStackSetConstraint#account_list}
    */
    readonly accountList: string[];
    /**
    * AdminRole ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#admin_role CcStackSetConstraint#admin_role}
    */
    readonly adminRole: string;
    /**
    * The description of the constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#description CcStackSetConstraint#description}
    */
    readonly description: string;
    /**
    * ExecutionRole name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#execution_role CcStackSetConstraint#execution_role}
    */
    readonly executionRole: string;
    /**
    * The portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#portfolio_id CcStackSetConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * The product identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#product_id CcStackSetConstraint#product_id}
    */
    readonly productId: string;
    /**
    * One or more AWS Regions where the provisioned product will be available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#region_list CcStackSetConstraint#region_list}
    */
    readonly regionList: string[];
    /**
    * Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#stack_instance_control CcStackSetConstraint#stack_instance_control}
    */
    readonly stackInstanceControl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}
*/
export class CcStackSetConstraint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_stack_set_constraint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStackSetConstraint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStackSetConstraint to import
    * @param importFromId The id of the existing CcStackSetConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStackSetConstraint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_stack_set_constraint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStackSetConstraintProps
    */
    public constructor(scope: Construct, id: string, config: CcStackSetConstraintProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_stack_set_constraint',
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
        this._acceptLanguage = config.acceptLanguage;
        this._accountList = config.accountList;
        this._adminRole = config.adminRole;
        this._description = config.description;
        this._executionRole = config.executionRole;
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
        this._regionList = config.regionList;
        this._stackInstanceControl = config.stackInstanceControl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: true, optional: true, required: false
    private _acceptLanguage?: string; 
    public get acceptLanguage() {
        return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string) {
        this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
        this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
        return this._acceptLanguage;
    }

    // account_list - computed: false, optional: false, required: true
    private _accountList?: string[]; 
    public get accountList() {
        return this.getListAttribute('account_list');
    }
    public set accountList(value: string[]) {
        this._accountList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountListInput() {
        return this._accountList;
    }

    // admin_role - computed: false, optional: false, required: true
    private _adminRole?: string; 
    public get adminRole() {
        return this.getStringAttribute('admin_role');
    }
    public set adminRole(value: string) {
        this._adminRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminRoleInput() {
        return this._adminRole;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // execution_role - computed: false, optional: false, required: true
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // portfolio_id - computed: false, optional: false, required: true
    private _portfolioId?: string; 
    public get portfolioId() {
        return this.getStringAttribute('portfolio_id');
    }
    public set portfolioId(value: string) {
        this._portfolioId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portfolioIdInput() {
        return this._portfolioId;
    }

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // region_list - computed: false, optional: false, required: true
    private _regionList?: string[]; 
    public get regionList() {
        return this.getListAttribute('region_list');
    }
    public set regionList(value: string[]) {
        this._regionList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionListInput() {
        return this._regionList;
    }

    // stack_instance_control - computed: false, optional: false, required: true
    private _stackInstanceControl?: string; 
    public get stackInstanceControl() {
        return this.getStringAttribute('stack_instance_control');
    }
    public set stackInstanceControl(value: string) {
        this._stackInstanceControl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackInstanceControlInput() {
        return this._stackInstanceControl;
    }

    // stack_set_constraint_id - computed: true, optional: false, required: false
    public get stackSetConstraintId() {
        return this.getStringAttribute('stack_set_constraint_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            account_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._accountList),
            admin_role: cdktn.stringToTerraform(this._adminRole),
            description: cdktn.stringToTerraform(this._description),
            execution_role: cdktn.stringToTerraform(this._executionRole),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            product_id: cdktn.stringToTerraform(this._productId),
            region_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regionList),
            stack_instance_control: cdktn.stringToTerraform(this._stackInstanceControl),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_language: {
                value: cdktn.stringToHclTerraform(this._acceptLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            account_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._accountList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            admin_role: {
                value: cdktn.stringToHclTerraform(this._adminRole),
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
            execution_role: {
                value: cdktn.stringToHclTerraform(this._executionRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portfolio_id: {
                value: cdktn.stringToHclTerraform(this._portfolioId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_id: {
                value: cdktn.stringToHclTerraform(this._productId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regionList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            stack_instance_control: {
                value: cdktn.stringToHclTerraform(this._stackInstanceControl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcStackSetConstraint {
}
