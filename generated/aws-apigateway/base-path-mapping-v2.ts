// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBasePathMappingV2Props extends cdktn.TerraformMetaArguments {
    /**
    * The base path name that callers of the API must provide in the URL after the domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2#base_path CcBasePathMappingV2#base_path}
    */
    readonly basePath?: string;
    /**
    * The Arn of an AWS::ApiGateway::DomainNameV2 resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2#domain_name_arn CcBasePathMappingV2#domain_name_arn}
    */
    readonly domainNameArn: string;
    /**
    * The ID of the API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2#rest_api_id CcBasePathMappingV2#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * The name of the API's stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2#stage CcBasePathMappingV2#stage}
    */
    readonly stage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2 awscc_apigateway_base_path_mapping_v2}
*/
export class CcBasePathMappingV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_base_path_mapping_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBasePathMappingV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBasePathMappingV2 to import
    * @param importFromId The id of the existing CcBasePathMappingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBasePathMappingV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_base_path_mapping_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_base_path_mapping_v2 awscc_apigateway_base_path_mapping_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBasePathMappingV2Props
    */
    public constructor(scope: Construct, id: string, config: CcBasePathMappingV2Props) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_base_path_mapping_v2',
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
        this._basePath = config.basePath;
        this._domainNameArn = config.domainNameArn;
        this._restApiId = config.restApiId;
        this._stage = config.stage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // base_path - computed: true, optional: true, required: false
    private _basePath?: string; 
    public get basePath() {
        return this.getStringAttribute('base_path');
    }
    public set basePath(value: string) {
        this._basePath = value;
    }
    public resetBasePath() {
        this._basePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basePathInput() {
        return this._basePath;
    }

    // base_path_mapping_arn - computed: true, optional: false, required: false
    public get basePathMappingArn() {
        return this.getStringAttribute('base_path_mapping_arn');
    }

    // domain_name_arn - computed: false, optional: false, required: true
    private _domainNameArn?: string; 
    public get domainNameArn() {
        return this.getStringAttribute('domain_name_arn');
    }
    public set domainNameArn(value: string) {
        this._domainNameArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameArnInput() {
        return this._domainNameArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // stage - computed: true, optional: true, required: false
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    public resetStage() {
        this._stage = undefined;
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
            base_path: cdktn.stringToTerraform(this._basePath),
            domain_name_arn: cdktn.stringToTerraform(this._domainNameArn),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
            stage: cdktn.stringToTerraform(this._stage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            base_path: {
                value: cdktn.stringToHclTerraform(this._basePath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name_arn: {
                value: cdktn.stringToHclTerraform(this._domainNameArn),
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

export namespace CcBasePathMappingV2 {
}
