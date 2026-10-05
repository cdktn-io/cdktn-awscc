// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource to associate with the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association#resource_arn CcResourceAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association#resource_share_arn CcResourceAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association awscc_ram_resource_association}
*/
export class CcResourceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ram_resource_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceAssociation to import
    * @param importFromId The id of the existing CcResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ram_resource_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_resource_association awscc_ram_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ram_resource_association',
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
        this._resourceArn = config.resourceArn;
        this._resourceShareArn = config.resourceShareArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_type - computed: true, optional: false, required: false
    public get associationType() {
        return this.getStringAttribute('association_type');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // external - computed: true, optional: false, required: false
    public get external() {
        return this.getBooleanAttribute('external');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
            resource_share_arn: cdktn.stringToTerraform(this._resourceShareArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_share_arn: {
                value: cdktn.stringToHclTerraform(this._resourceShareArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResourceAssociation {
}
