// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayResponseProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#response_parameters CcGatewayResponse#response_parameters}
    */
    readonly responseParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#response_templates CcGatewayResponse#response_templates}
    */
    readonly responseTemplates?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#response_type CcGatewayResponse#response_type}
    */
    readonly responseType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#rest_api_id CcGatewayResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#status_code CcGatewayResponse#status_code}
    */
    readonly statusCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response awscc_apigateway_gateway_response}
*/
export class CcGatewayResponse extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_gateway_response";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGatewayResponse resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGatewayResponse to import
    * @param importFromId The id of the existing CcGatewayResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGatewayResponse to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_gateway_response", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_gateway_response awscc_apigateway_gateway_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayResponseProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayResponseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_gateway_response',
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
        this._responseParameters = config.responseParameters;
        this._responseTemplates = config.responseTemplates;
        this._responseType = config.responseType;
        this._restApiId = config.restApiId;
        this._statusCode = config.statusCode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // gateway_response_id - computed: true, optional: false, required: false
    public get gatewayResponseId() {
        return this.getStringAttribute('gateway_response_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters?: { [key: string]: string }; 
    public get responseParameters() {
        return this.getStringMapAttribute('response_parameters');
    }
    public set responseParameters(value: { [key: string]: string }) {
        this._responseParameters = value;
    }
    public resetResponseParameters() {
        this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters;
    }

    // response_templates - computed: true, optional: true, required: false
    private _responseTemplates?: { [key: string]: string }; 
    public get responseTemplates() {
        return this.getStringMapAttribute('response_templates');
    }
    public set responseTemplates(value: { [key: string]: string }) {
        this._responseTemplates = value;
    }
    public resetResponseTemplates() {
        this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
        return this._responseTemplates;
    }

    // response_type - computed: false, optional: false, required: true
    private _responseType?: string; 
    public get responseType() {
        return this.getStringAttribute('response_type');
    }
    public set responseType(value: string) {
        this._responseType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTypeInput() {
        return this._responseType;
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
        return this._restApiId;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            response_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._responseParameters),
            response_templates: cdktn.hashMapper(cdktn.stringToTerraform)(this._responseTemplates),
            response_type: cdktn.stringToTerraform(this._responseType),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
            status_code: cdktn.stringToTerraform(this._statusCode),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            response_parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._responseParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            response_templates: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._responseTemplates),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            response_type: {
                value: cdktn.stringToHclTerraform(this._responseType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rest_api_id: {
                value: cdktn.stringToHclTerraform(this._restApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status_code: {
                value: cdktn.stringToHclTerraform(this._statusCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcGatewayResponse {
}
