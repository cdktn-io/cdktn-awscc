// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchRoleConstraintProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code for the constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#accept_language CcLaunchRoleConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The description of the launch role constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#description CcLaunchRoleConstraint#description}
    */
    readonly description?: string;
    /**
    * The local IAM role name to use in the launch constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#local_role_name CcLaunchRoleConstraint#local_role_name}
    */
    readonly localRoleName?: string;
    /**
    * The ID of the portfolio to which this launch role constraint applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#portfolio_id CcLaunchRoleConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * The ID of the product to which this launch role constraint applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#product_id CcLaunchRoleConstraint#product_id}
    */
    readonly productId: string;
    /**
    * The ARN of the IAM role used for the launch constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#role_arn CcLaunchRoleConstraint#role_arn}
    */
    readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint awscc_servicecatalog_launch_role_constraint}
*/
export class CcLaunchRoleConstraint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_launch_role_constraint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchRoleConstraint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchRoleConstraint to import
    * @param importFromId The id of the existing CcLaunchRoleConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchRoleConstraint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_launch_role_constraint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_role_constraint awscc_servicecatalog_launch_role_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchRoleConstraintProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchRoleConstraintProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_launch_role_constraint',
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
        this._description = config.description;
        this._localRoleName = config.localRoleName;
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
        this._roleArn = config.roleArn;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // launch_role_constraint_id - computed: true, optional: false, required: false
    public get launchRoleConstraintId() {
        return this.getStringAttribute('launch_role_constraint_id');
    }

    // local_role_name - computed: true, optional: true, required: false
    private _localRoleName?: string; 
    public get localRoleName() {
        return this.getStringAttribute('local_role_name');
    }
    public set localRoleName(value: string) {
        this._localRoleName = value;
    }
    public resetLocalRoleName() {
        this._localRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localRoleNameInput() {
        return this._localRoleName;
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

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            description: cdktn.stringToTerraform(this._description),
            local_role_name: cdktn.stringToTerraform(this._localRoleName),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            product_id: cdktn.stringToTerraform(this._productId),
            role_arn: cdktn.stringToTerraform(this._roleArn),
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
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_role_name: {
                value: cdktn.stringToHclTerraform(this._localRoleName),
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
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLaunchRoleConstraint {
}
