// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolUICustomizationAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment#client_id CcUserPoolUICustomizationAttachment#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment#css CcUserPoolUICustomizationAttachment#css}
    */
    readonly css?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment#user_pool_id CcUserPoolUICustomizationAttachment#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment awscc_cognito_user_pool_ui_customization_attachment}
*/
export class CcUserPoolUICustomizationAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_ui_customization_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolUICustomizationAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolUICustomizationAttachment to import
    * @param importFromId The id of the existing CcUserPoolUICustomizationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolUICustomizationAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_ui_customization_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_ui_customization_attachment awscc_cognito_user_pool_ui_customization_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolUICustomizationAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolUICustomizationAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_ui_customization_attachment',
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
        this._clientId = config.clientId;
        this._css = config.css;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // css - computed: true, optional: true, required: false
    private _css?: string; 
    public get css() {
        return this.getStringAttribute('css');
    }
    public set css(value: string) {
        this._css = value;
    }
    public resetCss() {
        this._css = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cssInput() {
        return this._css;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_id: cdktn.stringToTerraform(this._clientId),
            css: cdktn.stringToTerraform(this._css),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_id: {
                value: cdktn.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            css: {
                value: cdktn.stringToHclTerraform(this._css),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcUserPoolUICustomizationAttachment {
}
