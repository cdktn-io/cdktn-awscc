// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactMethodProps extends cdktn.TerraformMetaArguments {
    /**
    * The destination of the contact method, such as an email address or a mobile phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method#contact_endpoint CcContactMethod#contact_endpoint}
    */
    readonly contactEndpoint: string;
    /**
    * The protocol of the contact method, such as Email or SMS (text messaging).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method#protocol CcContactMethod#protocol}
    */
    readonly protocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method awscc_lightsail_contact_method}
*/
export class CcContactMethod extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_contact_method";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactMethod resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactMethod to import
    * @param importFromId The id of the existing CcContactMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactMethod to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_contact_method", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_contact_method awscc_lightsail_contact_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactMethodProps
    */
    public constructor(scope: Construct, id: string, config: CcContactMethodProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_contact_method',
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
        this._contactEndpoint = config.contactEndpoint;
        this._protocol = config.protocol;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // contact_endpoint - computed: false, optional: false, required: true
    private _contactEndpoint?: string; 
    public get contactEndpoint() {
        return this.getStringAttribute('contact_endpoint');
    }
    public set contactEndpoint(value: string) {
        this._contactEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactEndpointInput() {
        return this._contactEndpoint;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // support_code - computed: true, optional: false, required: false
    public get supportCode() {
        return this.getStringAttribute('support_code');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_endpoint: cdktn.stringToTerraform(this._contactEndpoint),
            protocol: cdktn.stringToTerraform(this._protocol),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_endpoint: {
                value: cdktn.stringToHclTerraform(this._contactEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcContactMethod {
}
