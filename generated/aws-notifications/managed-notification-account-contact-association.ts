// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcManagedNotificationAccountContactAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * This unique identifier for Contact
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier CcManagedNotificationAccountContactAssociation#contact_identifier}
    */
    readonly contactIdentifier: string;
    /**
    * The managed notification configuration ARN, against which the account contact association will be created
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn CcManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}
    */
    readonly managedNotificationConfigurationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association awscc_notifications_managed_notification_account_contact_association}
*/
export class CcManagedNotificationAccountContactAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_notifications_managed_notification_account_contact_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcManagedNotificationAccountContactAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcManagedNotificationAccountContactAssociation to import
    * @param importFromId The id of the existing CcManagedNotificationAccountContactAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcManagedNotificationAccountContactAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_managed_notification_account_contact_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_account_contact_association awscc_notifications_managed_notification_account_contact_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcManagedNotificationAccountContactAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcManagedNotificationAccountContactAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_notifications_managed_notification_account_contact_association',
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
        this._contactIdentifier = config.contactIdentifier;
        this._managedNotificationConfigurationArn = config.managedNotificationConfigurationArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // contact_identifier - computed: false, optional: false, required: true
    private _contactIdentifier?: string; 
    public get contactIdentifier() {
        return this.getStringAttribute('contact_identifier');
    }
    public set contactIdentifier(value: string) {
        this._contactIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactIdentifierInput() {
        return this._contactIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_notification_configuration_arn - computed: false, optional: false, required: true
    private _managedNotificationConfigurationArn?: string; 
    public get managedNotificationConfigurationArn() {
        return this.getStringAttribute('managed_notification_configuration_arn');
    }
    public set managedNotificationConfigurationArn(value: string) {
        this._managedNotificationConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get managedNotificationConfigurationArnInput() {
        return this._managedNotificationConfigurationArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_identifier: cdktn.stringToTerraform(this._contactIdentifier),
            managed_notification_configuration_arn: cdktn.stringToTerraform(this._managedNotificationConfigurationArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_identifier: {
                value: cdktn.stringToHclTerraform(this._contactIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            managed_notification_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._managedNotificationConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcManagedNotificationAccountContactAssociation {
}
