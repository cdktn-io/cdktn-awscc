// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * Unique AWS AppSync GraphQL API ID for this API key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key#api_id CcApiKey#api_id}
    */
    readonly apiId: string;
    /**
    * Unique description of your API key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key#description CcApiKey#description}
    */
    readonly description?: string;
    /**
    * The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key#expires CcApiKey#expires}
    */
    readonly expires?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key awscc_appsync_api_key}
*/
export class CcApiKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_api_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApiKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApiKey to import
    * @param importFromId The id of the existing CcApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApiKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_api_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/appsync_api_key awscc_appsync_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiKeyProps
    */
    public constructor(scope: Construct, id: string, config: CcApiKeyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_api_key',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._apiId = config.apiId;
        this._description = config.description;
        this._expires = config.expires;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // api_key - computed: true, optional: false, required: false
    public get apiKey() {
        return this.getStringAttribute('api_key');
    }

    // api_key_id - computed: true, optional: false, required: false
    public get apiKeyId() {
        return this.getStringAttribute('api_key_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // expires - computed: true, optional: true, required: false
    private _expires?: number; 
    public get expires() {
        return this.getNumberAttribute('expires');
    }
    public set expires(value: number) {
        this._expires = value;
    }
    public resetExpires() {
        this._expires = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiresInput() {
        return this._expires;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            description: cdktn.stringToTerraform(this._description),
            expires: cdktn.numberToTerraform(this._expires),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
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
            expires: {
                value: cdktn.numberToHclTerraform(this._expires),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApiKey {
}
