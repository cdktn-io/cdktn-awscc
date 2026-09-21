// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrafficPolicyInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the hosted zone that Amazon Route 53 creates the resource record sets in. The bare ID as Route 53 returns it, without a /hostedzone/ prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#hosted_zone_id CcTrafficPolicyInstance#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * The domain name, or subdomain name, for which Amazon Route 53 answers DNS queries by using the resource record sets it creates for this traffic policy instance. Must be lower-case and end with a trailing dot, which is the form Route 53 returns: Route 53 normalizes DNS names, so admitting another form would neither round-trip through Read nor guarantee that a change to this property changes the resource's identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#name CcTrafficPolicyInstance#name}
    */
    readonly name: string;
    /**
    * The ID of the traffic policy that Amazon Route 53 uses to create resource record sets in the specified hosted zone. Lower-case, as Route 53 returns it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#traffic_policy_id CcTrafficPolicyInstance#traffic_policy_id}
    */
    readonly trafficPolicyId: string;
    /**
    * The version of the traffic policy that Amazon Route 53 uses to create resource record sets in the specified hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#traffic_policy_version CcTrafficPolicyInstance#traffic_policy_version}
    */
    readonly trafficPolicyVersion: number;
    /**
    * The TTL that Amazon Route 53 assigns to all of the resource record sets that it creates in the specified hosted zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#ttl CcTrafficPolicyInstance#ttl}
    */
    readonly ttl: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance awscc_route53_traffic_policy_instance}
*/
export class CcTrafficPolicyInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_traffic_policy_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrafficPolicyInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrafficPolicyInstance to import
    * @param importFromId The id of the existing CcTrafficPolicyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrafficPolicyInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_traffic_policy_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/route53_traffic_policy_instance awscc_route53_traffic_policy_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrafficPolicyInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcTrafficPolicyInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_traffic_policy_instance',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._hostedZoneId = config.hostedZoneId;
        this._name = config.name;
        this._trafficPolicyId = config.trafficPolicyId;
        this._trafficPolicyVersion = config.trafficPolicyVersion;
        this._ttl = config.ttl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // traffic_policy_id - computed: false, optional: false, required: true
    private _trafficPolicyId?: string; 
    public get trafficPolicyId() {
        return this.getStringAttribute('traffic_policy_id');
    }
    public set trafficPolicyId(value: string) {
        this._trafficPolicyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficPolicyIdInput() {
        return this._trafficPolicyId;
    }

    // traffic_policy_instance_id - computed: true, optional: false, required: false
    public get trafficPolicyInstanceId() {
        return this.getStringAttribute('traffic_policy_instance_id');
    }

    // traffic_policy_type - computed: true, optional: false, required: false
    public get trafficPolicyType() {
        return this.getStringAttribute('traffic_policy_type');
    }

    // traffic_policy_version - computed: false, optional: false, required: true
    private _trafficPolicyVersion?: number; 
    public get trafficPolicyVersion() {
        return this.getNumberAttribute('traffic_policy_version');
    }
    public set trafficPolicyVersion(value: number) {
        this._trafficPolicyVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficPolicyVersionInput() {
        return this._trafficPolicyVersion;
    }

    // ttl - computed: false, optional: false, required: true
    private _ttl?: number; 
    public get ttl() {
        return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number) {
        this._ttl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
        return this._ttl;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
            name: cdktn.stringToTerraform(this._name),
            traffic_policy_id: cdktn.stringToTerraform(this._trafficPolicyId),
            traffic_policy_version: cdktn.numberToTerraform(this._trafficPolicyVersion),
            ttl: cdktn.numberToTerraform(this._ttl),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            hosted_zone_id: {
                value: cdktn.stringToHclTerraform(this._hostedZoneId),
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
            traffic_policy_id: {
                value: cdktn.stringToHclTerraform(this._trafficPolicyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            traffic_policy_version: {
                value: cdktn.numberToHclTerraform(this._trafficPolicyVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ttl: {
                value: cdktn.numberToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTrafficPolicyInstance {
}
