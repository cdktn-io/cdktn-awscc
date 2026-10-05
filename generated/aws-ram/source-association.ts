// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSourceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association#resource_share_arn CcSourceAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
    /**
    * Specifies the ID of the source account to associate with the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association#source_id CcSourceAssociation#source_id}
    */
    readonly sourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association awscc_ram_source_association}
*/
export class CcSourceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ram_source_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSourceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSourceAssociation to import
    * @param importFromId The id of the existing CcSourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSourceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ram_source_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_source_association awscc_ram_source_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSourceAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcSourceAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ram_source_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._resourceShareArn = config.resourceShareArn;
        this._sourceId = config.sourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // resource_share_arn - computed: false, optional: false, required: true
    private _resourceShareArn?: string; 
    public get resourceShareArn() {
        return this.getStringAttribute('resource_share_arn');
    }
    public set resourceShareArn(value: string) {
        this._resourceShareArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceShareArnInput() {
        return this._resourceShareArn;
    }

    // source_id - computed: false, optional: false, required: true
    private _sourceId?: string; 
    public get sourceId() {
        return this.getStringAttribute('source_id');
    }
    public set sourceId(value: string) {
        this._sourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdInput() {
        return this._sourceId;
    }

    // source_type - computed: true, optional: false, required: false
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_share_arn: cdktn.stringToTerraform(this._resourceShareArn),
            source_id: cdktn.stringToTerraform(this._sourceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_share_arn: {
                value: cdktn.stringToHclTerraform(this._resourceShareArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_id: {
                value: cdktn.stringToHclTerraform(this._sourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSourceAssociation {
}
