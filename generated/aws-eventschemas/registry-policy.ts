// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRegistryPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy#policy CcRegistryPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy#registry_name CcRegistryPolicy#registry_name}
    */
    readonly registryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy#revision_id CcRegistryPolicy#revision_id}
    */
    readonly revisionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy awscc_eventschemas_registry_policy}
*/
export class CcRegistryPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eventschemas_registry_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRegistryPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRegistryPolicy to import
    * @param importFromId The id of the existing CcRegistryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRegistryPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventschemas_registry_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eventschemas_registry_policy awscc_eventschemas_registry_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRegistryPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcRegistryPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eventschemas_registry_policy',
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
        this._policy = config.policy;
        this._registryName = config.registryName;
        this._revisionId = config.revisionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // registry_name - computed: false, optional: false, required: true
    private _registryName?: string; 
    public get registryName() {
        return this.getStringAttribute('registry_name');
    }
    public set registryName(value: string) {
        this._registryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get registryNameInput() {
        return this._registryName;
    }

    // registry_policy_id - computed: true, optional: false, required: false
    public get registryPolicyId() {
        return this.getStringAttribute('registry_policy_id');
    }

    // revision_id - computed: true, optional: true, required: false
    private _revisionId?: string; 
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }
    public set revisionId(value: string) {
        this._revisionId = value;
    }
    public resetRevisionId() {
        this._revisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionIdInput() {
        return this._revisionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy: cdktn.stringToTerraform(this._policy),
            registry_name: cdktn.stringToTerraform(this._registryName),
            revision_id: cdktn.stringToTerraform(this._revisionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            registry_name: {
                value: cdktn.stringToHclTerraform(this._registryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            revision_id: {
                value: cdktn.stringToHclTerraform(this._revisionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRegistryPolicy {
}
