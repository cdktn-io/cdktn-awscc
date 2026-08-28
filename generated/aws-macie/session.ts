// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSessionProps extends cdktn.TerraformMetaArguments {
    /**
    * A enumeration value that specifies how frequently finding updates are published.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session#finding_publishing_frequency CcSession#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * A enumeration value that specifies the status of the Macie Session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session#status CcSession#status}
    */
    readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session awscc_macie_session}
*/
export class CcSession extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_macie_session";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSession resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSession to import
    * @param importFromId The id of the existing CcSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSession to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_macie_session", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/macie_session awscc_macie_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSessionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSessionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_macie_session',
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
        this._findingPublishingFrequency = config.findingPublishingFrequency;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // automated_discovery_status - computed: true, optional: false, required: false
    public get automatedDiscoveryStatus() {
        return this.getStringAttribute('automated_discovery_status');
    }

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // finding_publishing_frequency - computed: true, optional: true, required: false
    private _findingPublishingFrequency?: string; 
    public get findingPublishingFrequency() {
        return this.getStringAttribute('finding_publishing_frequency');
    }
    public set findingPublishingFrequency(value: string) {
        this._findingPublishingFrequency = value;
    }
    public resetFindingPublishingFrequency() {
        this._findingPublishingFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingPublishingFrequencyInput() {
        return this._findingPublishingFrequency;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            finding_publishing_frequency: cdktn.stringToTerraform(this._findingPublishingFrequency),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            finding_publishing_frequency: {
                value: cdktn.stringToHclTerraform(this._findingPublishingFrequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSession {
}
