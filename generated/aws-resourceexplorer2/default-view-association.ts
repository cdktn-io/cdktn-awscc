// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resourceexplorer2_default_view_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDefaultViewAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resourceexplorer2_default_view_association#view_arn CcDefaultViewAssociation#view_arn}
    */
    readonly viewArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resourceexplorer2_default_view_association awscc_resourceexplorer2_default_view_association}
*/
export class CcDefaultViewAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resourceexplorer2_default_view_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDefaultViewAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDefaultViewAssociation to import
    * @param importFromId The id of the existing CcDefaultViewAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resourceexplorer2_default_view_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDefaultViewAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resourceexplorer2_default_view_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resourceexplorer2_default_view_association awscc_resourceexplorer2_default_view_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDefaultViewAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcDefaultViewAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resourceexplorer2_default_view_association',
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
        this._viewArn = config.viewArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // associated_aws_principal - computed: true, optional: false, required: false
    public get associatedAwsPrincipal() {
        return this.getStringAttribute('associated_aws_principal');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // view_arn - computed: false, optional: false, required: true
    private _viewArn?: string; 
    public get viewArn() {
        return this.getStringAttribute('view_arn');
    }
    public set viewArn(value: string) {
        this._viewArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get viewArnInput() {
        return this._viewArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            view_arn: cdktn.stringToTerraform(this._viewArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            view_arn: {
                value: cdktn.stringToHclTerraform(this._viewArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDefaultViewAssociation {
}
