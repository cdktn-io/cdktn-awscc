// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolReplicaProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica#region_name CcUserPoolReplica#region_name}
    */
    readonly regionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica#user_pool_id CcUserPoolReplica#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica#user_pool_tags_at_create CcUserPoolReplica#user_pool_tags_at_create}
    */
    readonly userPoolTagsAtCreate?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica awscc_cognito_user_pool_replica}
*/
export class CcUserPoolReplica extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_replica";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolReplica resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolReplica to import
    * @param importFromId The id of the existing CcUserPoolReplica that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolReplica to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_replica", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_user_pool_replica awscc_cognito_user_pool_replica} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolReplicaProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolReplicaProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_replica',
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
        this._regionName = config.regionName;
        this._userPoolId = config.userPoolId;
        this._userPoolTagsAtCreate = config.userPoolTagsAtCreate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // region_name - computed: false, optional: false, required: true
    private _regionName?: string; 
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
    public set regionName(value: string) {
        this._regionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionNameInput() {
        return this._regionName;
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

    // user_pool_tags_at_create - computed: true, optional: true, required: false
    private _userPoolTagsAtCreate?: { [key: string]: string }; 
    public get userPoolTagsAtCreate() {
        return this.getStringMapAttribute('user_pool_tags_at_create');
    }
    public set userPoolTagsAtCreate(value: { [key: string]: string }) {
        this._userPoolTagsAtCreate = value;
    }
    public resetUserPoolTagsAtCreate() {
        this._userPoolTagsAtCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolTagsAtCreateInput() {
        return this._userPoolTagsAtCreate;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            region_name: cdktn.stringToTerraform(this._regionName),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
            user_pool_tags_at_create: cdktn.hashMapper(cdktn.stringToTerraform)(this._userPoolTagsAtCreate),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            region_name: {
                value: cdktn.stringToHclTerraform(this._regionName),
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
            user_pool_tags_at_create: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._userPoolTagsAtCreate),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcUserPoolReplica {
}
