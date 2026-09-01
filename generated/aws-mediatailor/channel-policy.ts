// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy#channel_name CcChannelPolicy#channel_name}
    */
    readonly channelName: string;
    /**
    * <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy#policy CcChannelPolicy#policy}
    */
    readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy awscc_mediatailor_channel_policy}
*/
export class CcChannelPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediatailor_channel_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannelPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannelPolicy to import
    * @param importFromId The id of the existing CcChannelPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannelPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_channel_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel_policy awscc_mediatailor_channel_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_channel_policy',
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
        this._channelName = config.channelName;
        this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_name: cdktn.stringToTerraform(this._channelName),
            policy: cdktn.stringToTerraform(this._policy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcChannelPolicy {
}
