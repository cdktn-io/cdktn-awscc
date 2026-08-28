// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiMappingProps extends cdktn.TerraformMetaArguments {
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping#api_id CcApiMapping#api_id}
    */
    readonly apiId: string;
    /**
    * The API mapping key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping#api_mapping_key CcApiMapping#api_mapping_key}
    */
    readonly apiMappingKey?: string;
    /**
    * The domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping#domain_name CcApiMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * The API stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping#stage CcApiMapping#stage}
    */
    readonly stage: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping awscc_apigatewayv2_api_mapping}
*/
export class CcApiMapping extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_api_mapping";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApiMapping resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApiMapping to import
    * @param importFromId The id of the existing CcApiMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApiMapping to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_api_mapping", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_mapping awscc_apigatewayv2_api_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiMappingProps
    */
    public constructor(scope: Construct, id: string, config: CcApiMappingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_api_mapping',
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
        this._apiId = config.apiId;
        this._apiMappingKey = config.apiMappingKey;
        this._domainName = config.domainName;
        this._stage = config.stage;
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

    // api_mapping_id - computed: true, optional: false, required: false
    public get apiMappingId() {
        return this.getStringAttribute('api_mapping_id');
    }

    // api_mapping_key - computed: true, optional: true, required: false
    private _apiMappingKey?: string; 
    public get apiMappingKey() {
        return this.getStringAttribute('api_mapping_key');
    }
    public set apiMappingKey(value: string) {
        this._apiMappingKey = value;
    }
    public resetApiMappingKey() {
        this._apiMappingKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiMappingKeyInput() {
        return this._apiMappingKey;
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // stage - computed: false, optional: false, required: true
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            api_mapping_key: cdktn.stringToTerraform(this._apiMappingKey),
            domain_name: cdktn.stringToTerraform(this._domainName),
            stage: cdktn.stringToTerraform(this._stage),
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
            api_mapping_key: {
                value: cdktn.stringToHclTerraform(this._apiMappingKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage: {
                value: cdktn.stringToHclTerraform(this._stage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApiMapping {
}
