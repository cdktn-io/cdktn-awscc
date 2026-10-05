// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrincipalAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the principal to associate with the resource share. The possible values are:
    * 
    * - An AWS account ID
    * 
    * - An Amazon Resource Name (ARN) of an organization in AWS Organizations
    * 
    * - An ARN of an organizational unit (OU) in AWS Organizations
    * 
    * - An ARN of an IAM role
    * 
    * - An ARN of an IAM user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association#principal CcPrincipalAssociation#principal}
    */
    readonly principal: string;
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association#resource_share_arn CcPrincipalAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association awscc_ram_principal_association}
*/
export class CcPrincipalAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ram_principal_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrincipalAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrincipalAssociation to import
    * @param importFromId The id of the existing CcPrincipalAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrincipalAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ram_principal_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_principal_association awscc_ram_principal_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrincipalAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcPrincipalAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ram_principal_association',
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
        this._principal = config.principal;
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
            principal: cdktn.stringToTerraform(this._principal),
            resource_share_arn: cdktn.stringToTerraform(this._resourceShareArn),
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

export namespace CcPrincipalAssociation {
}
