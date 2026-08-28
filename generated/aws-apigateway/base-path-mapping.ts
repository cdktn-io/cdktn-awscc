// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBasePathMappingProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping#base_path CcBasePathMapping#base_path}
    */
    readonly basePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping#domain_name CcBasePathMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping#rest_api_id CcBasePathMapping#rest_api_id}
    */
    readonly restApiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping#stage CcBasePathMapping#stage}
    */
    readonly stage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping awscc_apigateway_base_path_mapping}
*/
export class CcBasePathMapping extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_base_path_mapping";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBasePathMapping resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBasePathMapping to import
    * @param importFromId The id of the existing CcBasePathMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBasePathMapping to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_base_path_mapping", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_base_path_mapping awscc_apigateway_base_path_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBasePathMappingProps
    */
    public constructor(scope: Construct, id: string, config: CcBasePathMappingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_base_path_mapping',
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
        this._basePath = config.basePath;
        this._domainName = config.domainName;
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

    // rest_api_id - computed: true, optional: true, required: false
    private _restApiId?: string; 
    public get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
        this._restApiId = value;
    }
    public resetRestApiId() {
        this._restApiId = undefined;
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
            domain_name: cdktn.stringToTerraform(this._domainName),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
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

export namespace CcBasePathMapping {
}
