// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMasterProps extends cdktn.TerraformMetaArguments {
    /**
    * Unique ID of the detector of the GuardDuty member account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master#detector_id CcMaster#detector_id}
    */
    readonly detectorId: string;
    /**
    * Value used to validate the master account to the member account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master#invitation_id CcMaster#invitation_id}
    */
    readonly invitationId?: string;
    /**
    * ID of the account used as the master account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master#master_id CcMaster#master_id}
    */
    readonly masterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master awscc_guardduty_master}
*/
export class CcMaster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_guardduty_master";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMaster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMaster to import
    * @param importFromId The id of the existing CcMaster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMaster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_master", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_master awscc_guardduty_master} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMasterProps
    */
    public constructor(scope: Construct, id: string, config: CcMasterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_guardduty_master',
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
        this._detectorId = config.detectorId;
        this._invitationId = config.invitationId;
        this._masterId = config.masterId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // detector_id - computed: false, optional: false, required: true
    private _detectorId?: string; 
    public get detectorId() {
        return this.getStringAttribute('detector_id');
    }
    public set detectorId(value: string) {
        this._detectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorIdInput() {
        return this._detectorId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invitation_id - computed: true, optional: true, required: false
    private _invitationId?: string; 
    public get invitationId() {
        return this.getStringAttribute('invitation_id');
    }
    public set invitationId(value: string) {
        this._invitationId = value;
    }
    public resetInvitationId() {
        this._invitationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invitationIdInput() {
        return this._invitationId;
    }

    // master_id - computed: false, optional: false, required: true
    private _masterId?: string; 
    public get masterId() {
        return this.getStringAttribute('master_id');
    }
    public set masterId(value: string) {
        this._masterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get masterIdInput() {
        return this._masterId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            detector_id: cdktn.stringToTerraform(this._detectorId),
            invitation_id: cdktn.stringToTerraform(this._invitationId),
            master_id: cdktn.stringToTerraform(this._masterId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            detector_id: {
                value: cdktn.stringToHclTerraform(this._detectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            invitation_id: {
                value: cdktn.stringToHclTerraform(this._invitationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_id: {
                value: cdktn.stringToHclTerraform(this._masterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMaster {
}
