// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactFlowModuleVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the contact flow module (ARN) this version is tied to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version#contact_flow_module_id CcContactFlowModuleVersion#contact_flow_module_id}
    */
    readonly contactFlowModuleId: string;
    /**
    * The description of the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version#description CcContactFlowModuleVersion#description}
    */
    readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version awscc_connect_contact_flow_module_version}
*/
export class CcContactFlowModuleVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_contact_flow_module_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactFlowModuleVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactFlowModuleVersion to import
    * @param importFromId The id of the existing CcContactFlowModuleVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactFlowModuleVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_contact_flow_module_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_contact_flow_module_version awscc_connect_contact_flow_module_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactFlowModuleVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcContactFlowModuleVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_contact_flow_module_version',
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
        this._contactFlowModuleId = config.contactFlowModuleId;
        this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // contact_flow_module_id - computed: false, optional: false, required: true
    private _contactFlowModuleId?: string; 
    public get contactFlowModuleId() {
        return this.getStringAttribute('contact_flow_module_id');
    }
    public set contactFlowModuleId(value: string) {
        this._contactFlowModuleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowModuleIdInput() {
        return this._contactFlowModuleId;
    }

    // contact_flow_module_version_arn - computed: true, optional: false, required: false
    public get contactFlowModuleVersionArn() {
        return this.getStringAttribute('contact_flow_module_version_arn');
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

    // flow_module_content_sha_256 - computed: true, optional: false, required: false
    public get flowModuleContentSha256() {
        return this.getStringAttribute('flow_module_content_sha_256');
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
            contact_flow_module_id: cdktn.stringToTerraform(this._contactFlowModuleId),
            description: cdktn.stringToTerraform(this._description),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_flow_module_id: {
                value: cdktn.stringToHclTerraform(this._contactFlowModuleId),
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

export namespace CcContactFlowModuleVersion {
}
