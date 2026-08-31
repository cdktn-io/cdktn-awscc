// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRequestValidatorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator#name CcRequestValidator#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator#rest_api_id CcRequestValidator#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator#validate_request_body CcRequestValidator#validate_request_body}
    */
    readonly validateRequestBody?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator#validate_request_parameters CcRequestValidator#validate_request_parameters}
    */
    readonly validateRequestParameters?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator awscc_apigateway_request_validator}
*/
export class CcRequestValidator extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_request_validator";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRequestValidator resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRequestValidator to import
    * @param importFromId The id of the existing CcRequestValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRequestValidator to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_request_validator", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_request_validator awscc_apigateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRequestValidatorProps
    */
    public constructor(scope: Construct, id: string, config: CcRequestValidatorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_request_validator',
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
        this._name = config.name;
        this._restApiId = config.restApiId;
        this._validateRequestBody = config.validateRequestBody;
        this._validateRequestParameters = config.validateRequestParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // request_validator_id - computed: true, optional: false, required: false
    public get requestValidatorId() {
        return this.getStringAttribute('request_validator_id');
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

    // validate_request_body - computed: true, optional: true, required: false
    private _validateRequestBody?: boolean | cdktn.IResolvable; 
    public get validateRequestBody() {
        return this.getBooleanAttribute('validate_request_body');
    }
    public set validateRequestBody(value: boolean | cdktn.IResolvable) {
        this._validateRequestBody = value;
    }
    public resetValidateRequestBody() {
        this._validateRequestBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateRequestBodyInput() {
        return this._validateRequestBody;
    }

    // validate_request_parameters - computed: true, optional: true, required: false
    private _validateRequestParameters?: boolean | cdktn.IResolvable; 
    public get validateRequestParameters() {
        return this.getBooleanAttribute('validate_request_parameters');
    }
    public set validateRequestParameters(value: boolean | cdktn.IResolvable) {
        this._validateRequestParameters = value;
    }
    public resetValidateRequestParameters() {
        this._validateRequestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateRequestParametersInput() {
        return this._validateRequestParameters;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
            validate_request_body: cdktn.booleanToTerraform(this._validateRequestBody),
            validate_request_parameters: cdktn.booleanToTerraform(this._validateRequestParameters),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
            validate_request_body: {
                value: cdktn.booleanToHclTerraform(this._validateRequestBody),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validate_request_parameters: {
                value: cdktn.booleanToHclTerraform(this._validateRequestParameters),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRequestValidator {
}
