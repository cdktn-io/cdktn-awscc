// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPortfolioPrincipalAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The language code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association#accept_language CcPortfolioPrincipalAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * The portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association#portfolio_id CcPortfolioPrincipalAssociation#portfolio_id}
    */
    readonly portfolioId?: string;
    /**
    * The ARN of the principal (user, role, or group).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association#principal_arn CcPortfolioPrincipalAssociation#principal_arn}
    */
    readonly principalArn?: string;
    /**
    * The principal type. The supported value is IAM if you use a fully defined Amazon Resource Name (ARN), or IAM_PATTERN if you use an ARN with no accountID, with or without wildcard characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association#principal_type CcPortfolioPrincipalAssociation#principal_type}
    */
    readonly principalType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association awscc_servicecatalog_portfolio_principal_association}
*/
export class CcPortfolioPrincipalAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_portfolio_principal_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPortfolioPrincipalAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPortfolioPrincipalAssociation to import
    * @param importFromId The id of the existing CcPortfolioPrincipalAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPortfolioPrincipalAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_portfolio_principal_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_portfolio_principal_association awscc_servicecatalog_portfolio_principal_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPortfolioPrincipalAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcPortfolioPrincipalAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_portfolio_principal_association',
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
        this._principalArn = config.principalArn;
        this._principalType = config.principalType;
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

    // principal_arn - computed: true, optional: true, required: false
    private _principalArn?: string; 
    public get principalArn() {
        return this.getStringAttribute('principal_arn');
    }
    public set principalArn(value: string) {
        this._principalArn = value;
    }
    public resetPrincipalArn() {
        this._principalArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalArnInput() {
        return this._principalArn;
    }

    // principal_type - computed: false, optional: false, required: true
    private _principalType?: string; 
    public get principalType() {
        return this.getStringAttribute('principal_type');
    }
    public set principalType(value: string) {
        this._principalType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTypeInput() {
        return this._principalType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_language: cdktn.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktn.stringToTerraform(this._portfolioId),
            principal_arn: cdktn.stringToTerraform(this._principalArn),
            principal_type: cdktn.stringToTerraform(this._principalType),
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
            principal_arn: {
                value: cdktn.stringToHclTerraform(this._principalArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal_type: {
                value: cdktn.stringToHclTerraform(this._principalType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPortfolioPrincipalAssociation {
}
