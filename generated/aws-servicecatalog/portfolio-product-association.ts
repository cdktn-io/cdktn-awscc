// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPortfolioProductAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association#accept_language CcPortfolioProductAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association#portfolio_id CcPortfolioProductAssociation#portfolio_id}
    */
    readonly portfolioId?: string;
    /**
    * The product identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association#product_id CcPortfolioProductAssociation#product_id}
    */
    readonly productId?: string;
    /**
    * The identifier of the source portfolio. The source portfolio must be a portfolio imported from a different account than the one creating the association. This account must have previously shared this portfolio with the account creating the association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association#source_portfolio_id CcPortfolioProductAssociation#source_portfolio_id}
    */
    readonly sourcePortfolioId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association awscc_servicecatalog_portfolio_product_association}
*/
export class CcPortfolioProductAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_portfolio_product_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPortfolioProductAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPortfolioProductAssociation to import
    * @param importFromId The id of the existing CcPortfolioProductAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPortfolioProductAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_portfolio_product_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_product_association awscc_servicecatalog_portfolio_product_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPortfolioProductAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPortfolioProductAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_portfolio_product_association',
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
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
        this._sourcePortfolioId = config.sourcePortfolioId;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // portfolio_id - computed: true, optional: true, required: false
    private _portfolioId?: string; 
    public get portfolioId() {
        return this.getStringAttribute('portfolio_id');
    }
    public set portfolioId(value: string) {
        this._portfolioId = value;
    }
    public resetPortfolioId() {
        this._portfolioId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portfolioIdInput() {
        return this._portfolioId;
    }

    // product_id - computed: true, optional: true, required: false
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    public resetProductId() {
        this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // source_portfolio_id - computed: true, optional: true, required: false
    private _sourcePortfolioId?: string; 
    public get sourcePortfolioId() {
        return this.getStringAttribute('source_portfolio_id');
    }
    public set sourcePortfolioId(value: string) {
        this._sourcePortfolioId = value;
    }
    public resetSourcePortfolioId() {
        this._sourcePortfolioId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortfolioIdInput() {
        return this._sourcePortfolioId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            product_id: cdktn.stringToTerraform(this._productId),
            source_portfolio_id: cdktn.stringToTerraform(this._sourcePortfolioId),
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
            source_portfolio_id: {
                value: cdktn.stringToHclTerraform(this._sourcePortfolioId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPortfolioProductAssociation {
}
