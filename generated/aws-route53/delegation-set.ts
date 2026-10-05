// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_delegation_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDelegationSetProps extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_delegation_set awscc_route53_delegation_set}
*/
export class CcDelegationSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53_delegation_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDelegationSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDelegationSet to import
    * @param importFromId The id of the existing CcDelegationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_delegation_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDelegationSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53_delegation_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/route53_delegation_set awscc_route53_delegation_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDelegationSetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDelegationSetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53_delegation_set',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
        return this.getStringAttribute('caller_reference');
    }

    // delegation_set_id - computed: true, optional: false, required: false
    public get delegationSetId() {
        return this.getStringAttribute('delegation_set_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name_servers - computed: true, optional: false, required: false
    public get nameServers() {
        return this.getListAttribute('name_servers');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
        };
        return attrs;
    }
}

export namespace CcDelegationSet {
}
