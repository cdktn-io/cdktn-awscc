// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationalUnitAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * ARN identifier of the NotificationConfiguration.
    * Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn CcOrganizationalUnitAssociation#notification_configuration_arn}
    */
    readonly notificationConfigurationArn: string;
    /**
    * The ID of the organizational unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id CcOrganizationalUnitAssociation#organizational_unit_id}
    */
    readonly organizationalUnitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association awscc_notifications_organizational_unit_association}
*/
export class CcOrganizationalUnitAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_notifications_organizational_unit_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationalUnitAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationalUnitAssociation to import
    * @param importFromId The id of the existing CcOrganizationalUnitAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationalUnitAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_organizational_unit_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_organizational_unit_association awscc_notifications_organizational_unit_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationalUnitAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationalUnitAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_notifications_organizational_unit_association',
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
        this._notificationConfigurationArn = config.notificationConfigurationArn;
        this._organizationalUnitId = config.organizationalUnitId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_configuration_arn - computed: false, optional: false, required: true
    private _notificationConfigurationArn?: string; 
    public get notificationConfigurationArn() {
        return this.getStringAttribute('notification_configuration_arn');
    }
    public set notificationConfigurationArn(value: string) {
        this._notificationConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationArnInput() {
        return this._notificationConfigurationArn;
    }

    // organizational_unit_id - computed: false, optional: false, required: true
    private _organizationalUnitId?: string; 
    public get organizationalUnitId() {
        return this.getStringAttribute('organizational_unit_id');
    }
    public set organizationalUnitId(value: string) {
        this._organizationalUnitId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitIdInput() {
        return this._organizationalUnitId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            notification_configuration_arn: cdktn.stringToTerraform(this._notificationConfigurationArn),
            organizational_unit_id: cdktn.stringToTerraform(this._organizationalUnitId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            notification_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._notificationConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organizational_unit_id: {
                value: cdktn.stringToHclTerraform(this._organizationalUnitId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcOrganizationalUnitAssociation {
}
