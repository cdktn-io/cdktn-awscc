// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationEntitlementAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association#application_identifier CcApplicationEntitlementAssociation#application_identifier}
    */
    readonly applicationIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association#entitlement_name CcApplicationEntitlementAssociation#entitlement_name}
    */
    readonly entitlementName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association#stack_name CcApplicationEntitlementAssociation#stack_name}
    */
    readonly stackName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association awscc_appstream_application_entitlement_association}
*/
export class CcApplicationEntitlementAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_application_entitlement_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationEntitlementAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationEntitlementAssociation to import
    * @param importFromId The id of the existing CcApplicationEntitlementAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationEntitlementAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_application_entitlement_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_application_entitlement_association awscc_appstream_application_entitlement_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationEntitlementAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationEntitlementAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_application_entitlement_association',
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
        this._applicationIdentifier = config.applicationIdentifier;
        this._entitlementName = config.entitlementName;
        this._stackName = config.stackName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_identifier - computed: false, optional: false, required: true
    private _applicationIdentifier?: string; 
    public get applicationIdentifier() {
        return this.getStringAttribute('application_identifier');
    }
    public set applicationIdentifier(value: string) {
        this._applicationIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdentifierInput() {
        return this._applicationIdentifier;
    }

    // entitlement_name - computed: false, optional: false, required: true
    private _entitlementName?: string; 
    public get entitlementName() {
        return this.getStringAttribute('entitlement_name');
    }
    public set entitlementName(value: string) {
        this._entitlementName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entitlementNameInput() {
        return this._entitlementName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // stack_name - computed: false, optional: false, required: true
    private _stackName?: string; 
    public get stackName() {
        return this.getStringAttribute('stack_name');
    }
    public set stackName(value: string) {
        this._stackName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNameInput() {
        return this._stackName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_identifier: cdktn.stringToTerraform(this._applicationIdentifier),
            entitlement_name: cdktn.stringToTerraform(this._entitlementName),
            stack_name: cdktn.stringToTerraform(this._stackName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_identifier: {
                value: cdktn.stringToHclTerraform(this._applicationIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entitlement_name: {
                value: cdktn.stringToHclTerraform(this._entitlementName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_name: {
                value: cdktn.stringToHclTerraform(this._stackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApplicationEntitlementAssociation {
}
