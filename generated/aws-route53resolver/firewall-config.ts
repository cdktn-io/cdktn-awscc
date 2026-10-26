// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFirewallConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Determines how DNS Firewall operates during failures. By default, fail open is disabled, which means the failure mode is closed. If you enable this option, the failure mode is open. This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config#firewall_fail_open CcFirewallConfig#firewall_fail_open}
    */
    readonly firewallFailOpen: string;
    /**
    * The ID of the VPC that this firewall configuration applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config#resource_id CcFirewallConfig#resource_id}
    */
    readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config awscc_route53resolver_firewall_config}
*/
export class CcFirewallConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_firewall_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFirewallConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFirewallConfig to import
    * @param importFromId The id of the existing CcFirewallConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFirewallConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_firewall_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/route53resolver_firewall_config awscc_route53resolver_firewall_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFirewallConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcFirewallConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_firewall_config',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._firewallFailOpen = config.firewallFailOpen;
        this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // firewall_config_id - computed: true, optional: false, required: false
    public get firewallConfigId() {
        return this.getStringAttribute('firewall_config_id');
    }

    // firewall_fail_open - computed: false, optional: false, required: true
    private _firewallFailOpen?: string; 
    public get firewallFailOpen() {
        return this.getStringAttribute('firewall_fail_open');
    }
    public set firewallFailOpen(value: string) {
        this._firewallFailOpen = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallFailOpenInput() {
        return this._firewallFailOpen;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            firewall_fail_open: cdktn.stringToTerraform(this._firewallFailOpen),
            resource_id: cdktn.stringToTerraform(this._resourceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            firewall_fail_open: {
                value: cdktn.stringToHclTerraform(this._firewallFailOpen),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcFirewallConfig {
}
