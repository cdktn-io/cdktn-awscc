// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProfileResourceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of an association between the  Profile and resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#name CcProfileResourceAssociation#name}
    */
    readonly name: string;
    /**
    * The ID of the  profile that you associated the resource to that is specified by ResourceArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#profile_id CcProfileResourceAssociation#profile_id}
    */
    readonly profileId: string;
    /**
    * The arn of the resource that you associated to the  Profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_arn CcProfileResourceAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * A JSON-formatted string with key-value pairs specifying the properties of the associated resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#resource_properties CcProfileResourceAssociation#resource_properties}
    */
    readonly resourceProperties?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association}
*/
export class CcProfileResourceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53profiles_profile_resource_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProfileResourceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProfileResourceAssociation to import
    * @param importFromId The id of the existing CcProfileResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProfileResourceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53profiles_profile_resource_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProfileResourceAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcProfileResourceAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53profiles_profile_resource_association',
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
        this._name = config.name;
        this._profileId = config.profileId;
        this._resourceArn = config.resourceArn;
        this._resourceProperties = config.resourceProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // profile_id - computed: false, optional: false, required: true
    private _profileId?: string; 
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }
    public set profileId(value: string) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileIdInput() {
        return this._profileId;
    }

    // profile_resource_association_id - computed: true, optional: false, required: false
    public get profileResourceAssociationId() {
        return this.getStringAttribute('profile_resource_association_id');
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

    // resource_properties - computed: true, optional: true, required: false
    private _resourceProperties?: string; 
    public get resourceProperties() {
        return this.getStringAttribute('resource_properties');
    }
    public set resourceProperties(value: string) {
        this._resourceProperties = value;
    }
    public resetResourceProperties() {
        this._resourceProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePropertiesInput() {
        return this._resourceProperties;
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            profile_id: cdktn.stringToTerraform(this._profileId),
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
            resource_properties: cdktn.stringToTerraform(this._resourceProperties),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_id: {
                value: cdktn.stringToHclTerraform(this._profileId),
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
            resource_properties: {
                value: cdktn.stringToHclTerraform(this._resourceProperties),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcProfileResourceAssociation {
}
