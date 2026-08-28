// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHostedZoneAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association#hosted_zone_id CcHostedZoneAssociation#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association#name CcHostedZoneAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association#resource_arn CcHostedZoneAssociation#resource_arn}
    */
    readonly resourceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association awscc_route53globalresolver_hosted_zone_association}
*/
export class CcHostedZoneAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53globalresolver_hosted_zone_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHostedZoneAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHostedZoneAssociation to import
    * @param importFromId The id of the existing CcHostedZoneAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHostedZoneAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53globalresolver_hosted_zone_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53globalresolver_hosted_zone_association awscc_route53globalresolver_hosted_zone_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHostedZoneAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcHostedZoneAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53globalresolver_hosted_zone_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._hostedZoneId = config.hostedZoneId;
        this._name = config.name;
        this._resourceArn = config.resourceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // hosted_zone_association_id - computed: true, optional: false, required: false
    public get hostedZoneAssociationId() {
        return this.getStringAttribute('hosted_zone_association_id');
    }

    // hosted_zone_id - computed: false, optional: false, required: true
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // hosted_zone_name - computed: true, optional: false, required: false
    public get hostedZoneName() {
        return this.getStringAttribute('hosted_zone_name');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
            name: cdktn.stringToTerraform(this._name),
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            hosted_zone_id: {
                value: cdktn.stringToHclTerraform(this._hostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcHostedZoneAssociation {
}
