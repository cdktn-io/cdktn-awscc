// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityPoolPrincipalTagProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag#identity_pool_id CcIdentityPoolPrincipalTag#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag#identity_provider_name CcIdentityPoolPrincipalTag#identity_provider_name}
    */
    readonly identityProviderName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag#principal_tags CcIdentityPoolPrincipalTag#principal_tags}
    */
    readonly principalTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag#use_defaults CcIdentityPoolPrincipalTag#use_defaults}
    */
    readonly useDefaults?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}
*/
export class CcIdentityPoolPrincipalTag extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_identity_pool_principal_tag";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityPoolPrincipalTag to import
    * @param importFromId The id of the existing CcIdentityPoolPrincipalTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityPoolPrincipalTag to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool_principal_tag", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityPoolPrincipalTagProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityPoolPrincipalTagProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_identity_pool_principal_tag',
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
        this._identityPoolId = config.identityPoolId;
        this._identityProviderName = config.identityProviderName;
        this._principalTags = config.principalTags;
        this._useDefaults = config.useDefaults;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_pool_id - computed: false, optional: false, required: true
    private _identityPoolId?: string; 
    public get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    public set identityPoolId(value: string) {
        this._identityPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolIdInput() {
        return this._identityPoolId;
    }

    // identity_provider_name - computed: false, optional: false, required: true
    private _identityProviderName?: string; 
    public get identityProviderName() {
        return this.getStringAttribute('identity_provider_name');
    }
    public set identityProviderName(value: string) {
        this._identityProviderName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderNameInput() {
        return this._identityProviderName;
    }

    // principal_tags - computed: true, optional: true, required: false
    private _principalTags?: string; 
    public get principalTags() {
        return this.getStringAttribute('principal_tags');
    }
    public set principalTags(value: string) {
        this._principalTags = value;
    }
    public resetPrincipalTags() {
        this._principalTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTagsInput() {
        return this._principalTags;
    }

    // use_defaults - computed: true, optional: true, required: false
    private _useDefaults?: boolean | cdktn.IResolvable; 
    public get useDefaults() {
        return this.getBooleanAttribute('use_defaults');
    }
    public set useDefaults(value: boolean | cdktn.IResolvable) {
        this._useDefaults = value;
    }
    public resetUseDefaults() {
        this._useDefaults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useDefaultsInput() {
        return this._useDefaults;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            identity_pool_id: cdktn.stringToTerraform(this._identityPoolId),
            identity_provider_name: cdktn.stringToTerraform(this._identityProviderName),
            principal_tags: cdktn.stringToTerraform(this._principalTags),
            use_defaults: cdktn.booleanToTerraform(this._useDefaults),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_pool_id: {
                value: cdktn.stringToHclTerraform(this._identityPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_provider_name: {
                value: cdktn.stringToHclTerraform(this._identityProviderName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal_tags: {
                value: cdktn.stringToHclTerraform(this._principalTags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            use_defaults: {
                value: cdktn.booleanToHclTerraform(this._useDefaults),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcIdentityPoolPrincipalTag {
}
