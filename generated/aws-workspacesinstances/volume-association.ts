// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVolumeAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The device name for the volume attachment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#device CcVolumeAssociation#device}
    */
    readonly device: string;
    /**
    * Mode to use when disassociating the volume
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#disassociate_mode CcVolumeAssociation#disassociate_mode}
    */
    readonly disassociateMode?: string;
    /**
    * ID of the volume to attach to the workspace instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#volume_id CcVolumeAssociation#volume_id}
    */
    readonly volumeId: string;
    /**
    * ID of the workspace instance to associate with the volume
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#workspace_instance_id CcVolumeAssociation#workspace_instance_id}
    */
    readonly workspaceInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association}
*/
export class CcVolumeAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesinstances_volume_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVolumeAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVolumeAssociation to import
    * @param importFromId The id of the existing CcVolumeAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVolumeAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesinstances_volume_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVolumeAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcVolumeAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesinstances_volume_association',
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
        this._device = config.device;
        this._disassociateMode = config.disassociateMode;
        this._volumeId = config.volumeId;
        this._workspaceInstanceId = config.workspaceInstanceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // device - computed: false, optional: false, required: true
    private _device?: string; 
    public get device() {
        return this.getStringAttribute('device');
    }
    public set device(value: string) {
        this._device = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceInput() {
        return this._device;
    }

    // disassociate_mode - computed: true, optional: true, required: false
    private _disassociateMode?: string; 
    public get disassociateMode() {
        return this.getStringAttribute('disassociate_mode');
    }
    public set disassociateMode(value: string) {
        this._disassociateMode = value;
    }
    public resetDisassociateMode() {
        this._disassociateMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disassociateModeInput() {
        return this._disassociateMode;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // volume_id - computed: false, optional: false, required: true
    private _volumeId?: string; 
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }
    public set volumeId(value: string) {
        this._volumeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeIdInput() {
        return this._volumeId;
    }

    // workspace_instance_id - computed: false, optional: false, required: true
    private _workspaceInstanceId?: string; 
    public get workspaceInstanceId() {
        return this.getStringAttribute('workspace_instance_id');
    }
    public set workspaceInstanceId(value: string) {
        this._workspaceInstanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceInstanceIdInput() {
        return this._workspaceInstanceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            device: cdktn.stringToTerraform(this._device),
            disassociate_mode: cdktn.stringToTerraform(this._disassociateMode),
            volume_id: cdktn.stringToTerraform(this._volumeId),
            workspace_instance_id: cdktn.stringToTerraform(this._workspaceInstanceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            device: {
                value: cdktn.stringToHclTerraform(this._device),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disassociate_mode: {
                value: cdktn.stringToHclTerraform(this._disassociateMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            volume_id: {
                value: cdktn.stringToHclTerraform(this._volumeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_instance_id: {
                value: cdktn.stringToHclTerraform(this._workspaceInstanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVolumeAssociation {
}
