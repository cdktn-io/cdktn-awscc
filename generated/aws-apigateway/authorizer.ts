// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAuthorizerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#auth_type CcAuthorizer#auth_type}
    */
    readonly authType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#authorizer_credentials CcAuthorizer#authorizer_credentials}
    */
    readonly authorizerCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds CcAuthorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#authorizer_uri CcAuthorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#identity_source CcAuthorizer#identity_source}
    */
    readonly identitySource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#identity_validation_expression CcAuthorizer#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#name CcAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#provider_ar_ns CcAuthorizer#provider_ar_ns}
    */
    readonly providerArNs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#rest_api_id CcAuthorizer#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#type CcAuthorizer#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer awscc_apigateway_authorizer}
*/
export class CcAuthorizer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_authorizer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAuthorizer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAuthorizer to import
    * @param importFromId The id of the existing CcAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAuthorizer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_authorizer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_authorizer awscc_apigateway_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAuthorizerProps
    */
    public constructor(scope: Construct, id: string, config: CcAuthorizerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_authorizer',
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
        this._authType = config.authType;
        this._authorizerCredentials = config.authorizerCredentials;
        this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
        this._authorizerUri = config.authorizerUri;
        this._identitySource = config.identitySource;
        this._identityValidationExpression = config.identityValidationExpression;
        this._name = config.name;
        this._providerArNs = config.providerArNs;
        this._restApiId = config.restApiId;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // authorizer_credentials - computed: true, optional: true, required: false
    private _authorizerCredentials?: string; 
    public get authorizerCredentials() {
        return this.getStringAttribute('authorizer_credentials');
    }
    public set authorizerCredentials(value: string) {
        this._authorizerCredentials = value;
    }
    public resetAuthorizerCredentials() {
        this._authorizerCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerCredentialsInput() {
        return this._authorizerCredentials;
    }

    // authorizer_id - computed: true, optional: false, required: false
    public get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }

    // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
    private _authorizerResultTtlInSeconds?: number; 
    public get authorizerResultTtlInSeconds() {
        return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    public set authorizerResultTtlInSeconds(value: number) {
        this._authorizerResultTtlInSeconds = value;
    }
    public resetAuthorizerResultTtlInSeconds() {
        this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerResultTtlInSecondsInput() {
        return this._authorizerResultTtlInSeconds;
    }

    // authorizer_uri - computed: true, optional: true, required: false
    private _authorizerUri?: string; 
    public get authorizerUri() {
        return this.getStringAttribute('authorizer_uri');
    }
    public set authorizerUri(value: string) {
        this._authorizerUri = value;
    }
    public resetAuthorizerUri() {
        this._authorizerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerUriInput() {
        return this._authorizerUri;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_source - computed: true, optional: true, required: false
    private _identitySource?: string; 
    public get identitySource() {
        return this.getStringAttribute('identity_source');
    }
    public set identitySource(value: string) {
        this._identitySource = value;
    }
    public resetIdentitySource() {
        this._identitySource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitySourceInput() {
        return this._identitySource;
    }

    // identity_validation_expression - computed: true, optional: true, required: false
    private _identityValidationExpression?: string; 
    public get identityValidationExpression() {
        return this.getStringAttribute('identity_validation_expression');
    }
    public set identityValidationExpression(value: string) {
        this._identityValidationExpression = value;
    }
    public resetIdentityValidationExpression() {
        this._identityValidationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityValidationExpressionInput() {
        return this._identityValidationExpression;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // provider_ar_ns - computed: true, optional: true, required: false
    private _providerArNs?: string[]; 
    public get providerArNs() {
        return cdktn.Fn.tolist(this.getListAttribute('provider_ar_ns'));
    }
    public set providerArNs(value: string[]) {
        this._providerArNs = value;
    }
    public resetProviderArNs() {
        this._providerArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerArNsInput() {
        return this._providerArNs;
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_type: cdktn.stringToTerraform(this._authType),
            authorizer_credentials: cdktn.stringToTerraform(this._authorizerCredentials),
            authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(this._authorizerResultTtlInSeconds),
            authorizer_uri: cdktn.stringToTerraform(this._authorizerUri),
            identity_source: cdktn.stringToTerraform(this._identitySource),
            identity_validation_expression: cdktn.stringToTerraform(this._identityValidationExpression),
            name: cdktn.stringToTerraform(this._name),
            provider_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._providerArNs),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
            type: cdktn.stringToTerraform(this._type),
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
            authorizer_credentials: {
                value: cdktn.stringToHclTerraform(this._authorizerCredentials),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_result_ttl_in_seconds: {
                value: cdktn.numberToHclTerraform(this._authorizerResultTtlInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            authorizer_uri: {
                value: cdktn.stringToHclTerraform(this._authorizerUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_source: {
                value: cdktn.stringToHclTerraform(this._identitySource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_validation_expression: {
                value: cdktn.stringToHclTerraform(this._identityValidationExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._providerArNs),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            rest_api_id: {
                value: cdktn.stringToHclTerraform(this._restApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAuthorizer {
}
