// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityCenterConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The IAM identity center instance arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration#instance_arn CcIdentityCenterConfiguration#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The downstream scopes that Glue identity center configuration can access
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration#scopes CcIdentityCenterConfiguration#scopes}
    */
    readonly scopes?: string[];
    /**
    * Enable or disable user background sessions for Glue Identity Center
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration#user_background_sessions_enabled CcIdentityCenterConfiguration#user_background_sessions_enabled}
    */
    readonly userBackgroundSessionsEnabled?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration awscc_glue_identity_center_configuration}
*/
export class CcIdentityCenterConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_identity_center_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityCenterConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityCenterConfiguration to import
    * @param importFromId The id of the existing CcIdentityCenterConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityCenterConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_identity_center_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_identity_center_configuration awscc_glue_identity_center_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityCenterConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityCenterConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_identity_center_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._instanceArn = config.instanceArn;
        this._scopes = config.scopes;
        this._userBackgroundSessionsEnabled = config.userBackgroundSessionsEnabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // scopes - computed: true, optional: true, required: false
    private _scopes?: string[]; 
    public get scopes() {
        return this.getListAttribute('scopes');
    }
    public set scopes(value: string[]) {
        this._scopes = value;
    }
    public resetScopes() {
        this._scopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes;
    }

    // user_background_sessions_enabled - computed: true, optional: true, required: false
    private _userBackgroundSessionsEnabled?: boolean | cdktn.IResolvable; 
    public get userBackgroundSessionsEnabled() {
        return this.getBooleanAttribute('user_background_sessions_enabled');
    }
    public set userBackgroundSessionsEnabled(value: boolean | cdktn.IResolvable) {
        this._userBackgroundSessionsEnabled = value;
    }
    public resetUserBackgroundSessionsEnabled() {
        this._userBackgroundSessionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userBackgroundSessionsEnabledInput() {
        return this._userBackgroundSessionsEnabled;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scopes),
            user_background_sessions_enabled: cdktn.booleanToTerraform(this._userBackgroundSessionsEnabled),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scopes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scopes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            user_background_sessions_enabled: {
                value: cdktn.booleanToHclTerraform(this._userBackgroundSessionsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcIdentityCenterConfiguration {
}
