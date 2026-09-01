// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSourceCredentialProps extends cdktn.TerraformMetaArguments {
    /**
    * The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential#auth_type CcSourceCredential#auth_type}
    */
    readonly authType: string;
    /**
    * The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or BITBUCKET.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential#server_type CcSourceCredential#server_type}
    */
    readonly serverType: string;
    /**
    * For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the authType CODECONNECTIONS, this is the connectionArn. For the authType SECRETS_MANAGER, this is the secretArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential#token CcSourceCredential#token}
    */
    readonly token: string;
    /**
    *  The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential#username CcSourceCredential#username}
    */
    readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential awscc_codebuild_source_credential}
*/
export class CcSourceCredential extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codebuild_source_credential";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSourceCredential resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSourceCredential to import
    * @param importFromId The id of the existing CcSourceCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSourceCredential to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codebuild_source_credential", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_source_credential awscc_codebuild_source_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSourceCredentialProps
    */
    public constructor(scope: Construct, id: string, config: CcSourceCredentialProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codebuild_source_credential',
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
        this._authType = config.authType;
        this._serverType = config.serverType;
        this._token = config.token;
        this._username = config.username;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // server_type - computed: false, optional: false, required: true
    private _serverType?: string; 
    public get serverType() {
        return this.getStringAttribute('server_type');
    }
    public set serverType(value: string) {
        this._serverType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTypeInput() {
        return this._serverType;
    }

    // token - computed: false, optional: false, required: true
    private _token?: string; 
    public get token() {
        return this.getStringAttribute('token');
    }
    public set token(value: string) {
        this._token = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenInput() {
        return this._token;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_type: cdktn.stringToTerraform(this._authType),
            server_type: cdktn.stringToTerraform(this._serverType),
            token: cdktn.stringToTerraform(this._token),
            username: cdktn.stringToTerraform(this._username),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth_type: {
                value: cdktn.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            server_type: {
                value: cdktn.stringToHclTerraform(this._serverType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token: {
                value: cdktn.stringToHclTerraform(this._token),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktn.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSourceCredential {
}
