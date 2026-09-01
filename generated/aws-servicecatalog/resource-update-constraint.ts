// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceUpdateConstraintProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#accept_language CcResourceUpdateConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The description of the constraint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#description CcResourceUpdateConstraint#description}
    */
    readonly description?: string;
    /**
    * The portfolio identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#portfolio_id CcResourceUpdateConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * The product identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#product_id CcResourceUpdateConstraint#product_id}
    */
    readonly productId: string;
    /**
    * ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#tag_update_on_provisioned_product CcResourceUpdateConstraint#tag_update_on_provisioned_product}
    */
    readonly tagUpdateOnProvisionedProduct: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint awscc_servicecatalog_resource_update_constraint}
*/
export class CcResourceUpdateConstraint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_resource_update_constraint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceUpdateConstraint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceUpdateConstraint to import
    * @param importFromId The id of the existing CcResourceUpdateConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceUpdateConstraint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_resource_update_constraint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint awscc_servicecatalog_resource_update_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceUpdateConstraintProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceUpdateConstraintProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_resource_update_constraint',
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
        this._acceptLanguage = config.acceptLanguage;
        this._description = config.description;
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
        this._tagUpdateOnProvisionedProduct = config.tagUpdateOnProvisionedProduct;
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

    // resource_update_constraint_id - computed: true, optional: false, required: false
    public get resourceUpdateConstraintId() {
        return this.getStringAttribute('resource_update_constraint_id');
    }

    // tag_update_on_provisioned_product - computed: false, optional: false, required: true
    private _tagUpdateOnProvisionedProduct?: string; 
    public get tagUpdateOnProvisionedProduct() {
        return this.getStringAttribute('tag_update_on_provisioned_product');
    }
    public set tagUpdateOnProvisionedProduct(value: string) {
        this._tagUpdateOnProvisionedProduct = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagUpdateOnProvisionedProductInput() {
        return this._tagUpdateOnProvisionedProduct;
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
            tag_update_on_provisioned_product: cdktn.stringToTerraform(this._tagUpdateOnProvisionedProduct),
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
            tag_update_on_provisioned_product: {
                value: cdktn.stringToHclTerraform(this._tagUpdateOnProvisionedProduct),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResourceUpdateConstraint {
}
