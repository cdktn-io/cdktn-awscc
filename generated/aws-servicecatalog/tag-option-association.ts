// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTagOptionAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The CloudformationProduct or Portfolio identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association#resource_id CcTagOptionAssociation#resource_id}
    */
    readonly resourceId?: string;
    /**
    * The TagOption identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association#tag_option_id CcTagOptionAssociation#tag_option_id}
    */
    readonly tagOptionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association awscc_servicecatalog_tag_option_association}
*/
export class CcTagOptionAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_tag_option_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTagOptionAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTagOptionAssociation to import
    * @param importFromId The id of the existing CcTagOptionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTagOptionAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_tag_option_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_tag_option_association awscc_servicecatalog_tag_option_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTagOptionAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTagOptionAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_tag_option_association',
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
        this._resourceId = config.resourceId;
        this._tagOptionId = config.tagOptionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // tag_option_id - computed: true, optional: true, required: false
    private _tagOptionId?: string; 
    public get tagOptionId() {
        return this.getStringAttribute('tag_option_id');
    }
    public set tagOptionId(value: string) {
        this._tagOptionId = value;
    }
    public resetTagOptionId() {
        this._tagOptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagOptionIdInput() {
        return this._tagOptionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_id: cdktn.stringToTerraform(this._resourceId),
            tag_option_id: cdktn.stringToTerraform(this._tagOptionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_option_id: {
                value: cdktn.stringToHclTerraform(this._tagOptionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTagOptionAssociation {
}
