// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchTemplateConstraintProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#accept_language CcLaunchTemplateConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The description of the constraint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#description CcLaunchTemplateConstraint#description}
    */
    readonly description?: string;
    /**
    * The portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#portfolio_id CcLaunchTemplateConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * The product identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#product_id CcLaunchTemplateConstraint#product_id}
    */
    readonly productId: string;
    /**
    * A json encoded string of the template constraint rules
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#rules CcLaunchTemplateConstraint#rules}
    */
    readonly rules: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint}
*/
export class CcLaunchTemplateConstraint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_launch_template_constraint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchTemplateConstraint to import
    * @param importFromId The id of the existing CcLaunchTemplateConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchTemplateConstraint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_launch_template_constraint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchTemplateConstraintProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchTemplateConstraintProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_launch_template_constraint',
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
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
        this._rules = config.rules;
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

    // launch_template_constraint_id - computed: true, optional: false, required: false
    public get launchTemplateConstraintId() {
        return this.getStringAttribute('launch_template_constraint_id');
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

    // rules - computed: false, optional: false, required: true
    private _rules?: string; 
    public get rules() {
        return this.getStringAttribute('rules');
    }
    public set rules(value: string) {
        this._rules = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            description: cdktn.stringToTerraform(this._description),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            product_id: cdktn.stringToTerraform(this._productId),
            rules: cdktn.stringToTerraform(this._rules),
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
            rules: {
                value: cdktn.stringToHclTerraform(this._rules),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLaunchTemplateConstraint {
}
