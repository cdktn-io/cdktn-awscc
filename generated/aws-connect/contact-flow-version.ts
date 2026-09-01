// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactFlowVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the contact flow this version is tied to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version#contact_flow_id CcContactFlowVersion#contact_flow_id}
    */
    readonly contactFlowId: string;
    /**
    * The description of the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version#description CcContactFlowVersion#description}
    */
    readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version awscc_connect_contact_flow_version}
*/
export class CcContactFlowVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_contact_flow_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactFlowVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactFlowVersion to import
    * @param importFromId The id of the existing CcContactFlowVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactFlowVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_contact_flow_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_contact_flow_version awscc_connect_contact_flow_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactFlowVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcContactFlowVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_contact_flow_version',
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
        this._contactFlowId = config.contactFlowId;
        this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // contact_flow_id - computed: false, optional: false, required: true
    private _contactFlowId?: string; 
    public get contactFlowId() {
        return this.getStringAttribute('contact_flow_id');
    }
    public set contactFlowId(value: string) {
        this._contactFlowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowIdInput() {
        return this._contactFlowId;
    }

    // contact_flow_version_arn - computed: true, optional: false, required: false
    public get contactFlowVersionArn() {
        return this.getStringAttribute('contact_flow_version_arn');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // flow_content_sha_256 - computed: true, optional: false, required: false
    public get flowContentSha256() {
        return this.getStringAttribute('flow_content_sha_256');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_flow_id: cdktn.stringToTerraform(this._contactFlowId),
            description: cdktn.stringToTerraform(this._description),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_flow_id: {
                value: cdktn.stringToHclTerraform(this._contactFlowId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcContactFlowVersion {
}
