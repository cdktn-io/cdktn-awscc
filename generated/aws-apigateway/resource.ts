// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource#parent_id CcResource#parent_id}
    */
    readonly parentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource#path_part CcResource#path_part}
    */
    readonly pathPart: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource#rest_api_id CcResource#rest_api_id}
    */
    readonly restApiId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource awscc_apigateway_resource}
*/
export class CcResource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_resource";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResource to import
    * @param importFromId The id of the existing CcResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_resource", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_resource awscc_apigateway_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_resource',
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
        this._parentId = config.parentId;
        this._pathPart = config.pathPart;
        this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // parent_id - computed: false, optional: false, required: true
    private _parentId?: string; 
    public get parentId() {
        return this.getStringAttribute('parent_id');
    }
    public set parentId(value: string) {
        this._parentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdInput() {
        return this._parentId;
    }

    // path_part - computed: false, optional: false, required: true
    private _pathPart?: string; 
    public get pathPart() {
        return this.getStringAttribute('path_part');
    }
    public set pathPart(value: string) {
        this._pathPart = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPartInput() {
        return this._pathPart;
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
        return this.getStringAttribute('resource_id');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            parent_id: cdktn.stringToTerraform(this._parentId),
            path_part: cdktn.stringToTerraform(this._pathPart),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            parent_id: {
                value: cdktn.stringToHclTerraform(this._parentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path_part: {
                value: cdktn.stringToHclTerraform(this._pathPart),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResource {
}
