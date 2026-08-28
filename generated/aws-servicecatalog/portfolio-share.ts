// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPortfolioShareProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share#accept_language CcPortfolioShare#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The AWS account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share#account_id CcPortfolioShare#account_id}
    */
    readonly accountId: string;
    /**
    * The portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share#portfolio_id CcPortfolioShare#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Enables or disables TagOptions sharing when creating the portfolio share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share#share_tag_options CcPortfolioShare#share_tag_options}
    */
    readonly shareTagOptions?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share awscc_servicecatalog_portfolio_share}
*/
export class CcPortfolioShare extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_portfolio_share";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPortfolioShare resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPortfolioShare to import
    * @param importFromId The id of the existing CcPortfolioShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPortfolioShare to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_portfolio_share", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_share awscc_servicecatalog_portfolio_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPortfolioShareProps
    */
    public constructor(scope: Construct, id: string, config: CcPortfolioShareProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_portfolio_share',
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
        this._accountId = config.accountId;
        this._portfolioId = config.portfolioId;
        this._shareTagOptions = config.shareTagOptions;
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

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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

    // share_tag_options - computed: true, optional: true, required: false
    private _shareTagOptions?: boolean | cdktn.IResolvable; 
    public get shareTagOptions() {
        return this.getBooleanAttribute('share_tag_options');
    }
    public set shareTagOptions(value: boolean | cdktn.IResolvable) {
        this._shareTagOptions = value;
    }
    public resetShareTagOptions() {
        this._shareTagOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTagOptionsInput() {
        return this._shareTagOptions;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            account_id: cdktn.stringToTerraform(this._accountId),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            share_tag_options: cdktn.booleanToTerraform(this._shareTagOptions),
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
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
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
            share_tag_options: {
                value: cdktn.booleanToHclTerraform(this._shareTagOptions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPortfolioShare {
}
