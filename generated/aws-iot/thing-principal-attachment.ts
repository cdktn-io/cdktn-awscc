// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcThingPrincipalAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#principal CcThingPrincipalAttachment#principal}
    */
    readonly principal: string;
    /**
    * The name of the AWS IoT thing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_name CcThingPrincipalAttachment#thing_name}
    */
    readonly thingName: string;
    /**
    * The type of the relation you want to specify when you attach a principal to a thing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#thing_principal_type CcThingPrincipalAttachment#thing_principal_type}
    */
    readonly thingPrincipalType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment awscc_iot_thing_principal_attachment}
*/
export class CcThingPrincipalAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_thing_principal_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcThingPrincipalAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcThingPrincipalAttachment to import
    * @param importFromId The id of the existing CcThingPrincipalAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcThingPrincipalAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_thing_principal_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/iot_thing_principal_attachment awscc_iot_thing_principal_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcThingPrincipalAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcThingPrincipalAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_thing_principal_attachment',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._principal = config.principal;
        this._thingName = config.thingName;
        this._thingPrincipalType = config.thingPrincipalType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // thing_name - computed: false, optional: false, required: true
    private _thingName?: string; 
    public get thingName() {
        return this.getStringAttribute('thing_name');
    }
    public set thingName(value: string) {
        this._thingName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thingNameInput() {
        return this._thingName;
    }

    // thing_principal_type - computed: true, optional: true, required: false
    private _thingPrincipalType?: string; 
    public get thingPrincipalType() {
        return this.getStringAttribute('thing_principal_type');
    }
    public set thingPrincipalType(value: string) {
        this._thingPrincipalType = value;
    }
    public resetThingPrincipalType() {
        this._thingPrincipalType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingPrincipalTypeInput() {
        return this._thingPrincipalType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            principal: cdktn.stringToTerraform(this._principal),
            thing_name: cdktn.stringToTerraform(this._thingName),
            thing_principal_type: cdktn.stringToTerraform(this._thingPrincipalType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thing_name: {
                value: cdktn.stringToHclTerraform(this._thingName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thing_principal_type: {
                value: cdktn.stringToHclTerraform(this._thingPrincipalType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcThingPrincipalAttachment {
}
