// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * The details that SSM Incident Manager uses when trying to engage the contact channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#channel_address CcContactChannel#channel_address}
    */
    readonly channelAddress?: string;
    /**
    * The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#channel_name CcContactChannel#channel_name}
    */
    readonly channelName?: string;
    /**
    * Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#channel_type CcContactChannel#channel_type}
    */
    readonly channelType?: string;
    /**
    * ARN of the contact resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#contact_id CcContactChannel#contact_id}
    */
    readonly contactId?: string;
    /**
    * If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#defer_activation CcContactChannel#defer_activation}
    */
    readonly deferActivation?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel awscc_ssmcontacts_contact_channel}
*/
export class CcContactChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmcontacts_contact_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactChannel to import
    * @param importFromId The id of the existing CcContactChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmcontacts_contact_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssmcontacts_contact_channel awscc_ssmcontacts_contact_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactChannelProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcContactChannelProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmcontacts_contact_channel',
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
        this._channelAddress = config.channelAddress;
        this._channelName = config.channelName;
        this._channelType = config.channelType;
        this._contactId = config.contactId;
        this._deferActivation = config.deferActivation;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_address - computed: true, optional: true, required: false
    private _channelAddress?: string; 
    public get channelAddress() {
        return this.getStringAttribute('channel_address');
    }
    public set channelAddress(value: string) {
        this._channelAddress = value;
    }
    public resetChannelAddress() {
        this._channelAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelAddressInput() {
        return this._channelAddress;
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // channel_type - computed: true, optional: true, required: false
    private _channelType?: string; 
    public get channelType() {
        return this.getStringAttribute('channel_type');
    }
    public set channelType(value: string) {
        this._channelType = value;
    }
    public resetChannelType() {
        this._channelType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelTypeInput() {
        return this._channelType;
    }

    // contact_id - computed: true, optional: true, required: false
    private _contactId?: string; 
    public get contactId() {
        return this.getStringAttribute('contact_id');
    }
    public set contactId(value: string) {
        this._contactId = value;
    }
    public resetContactId() {
        this._contactId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactIdInput() {
        return this._contactId;
    }

    // defer_activation - computed: true, optional: true, required: false
    private _deferActivation?: boolean | cdktn.IResolvable; 
    public get deferActivation() {
        return this.getBooleanAttribute('defer_activation');
    }
    public set deferActivation(value: boolean | cdktn.IResolvable) {
        this._deferActivation = value;
    }
    public resetDeferActivation() {
        this._deferActivation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deferActivationInput() {
        return this._deferActivation;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_address: cdktn.stringToTerraform(this._channelAddress),
            channel_name: cdktn.stringToTerraform(this._channelName),
            channel_type: cdktn.stringToTerraform(this._channelType),
            contact_id: cdktn.stringToTerraform(this._contactId),
            defer_activation: cdktn.booleanToTerraform(this._deferActivation),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_address: {
                value: cdktn.stringToHclTerraform(this._channelAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_type: {
                value: cdktn.stringToHclTerraform(this._channelType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            contact_id: {
                value: cdktn.stringToHclTerraform(this._contactId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            defer_activation: {
                value: cdktn.booleanToHclTerraform(this._deferActivation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcContactChannel {
}
