// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name or the Id of the Application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association#application CcResourceAssociation#application}
    */
    readonly application: string;
    /**
    * The name or the Id of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association#resource CcResourceAssociation#resource}
    */
    readonly resource: string;
    /**
    * The type of the CFN Resource for now it's enum CFN_STACK.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association#resource_type CcResourceAssociation#resource_type}
    */
    readonly resourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association awscc_servicecatalogappregistry_resource_association}
*/
export class CcResourceAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalogappregistry_resource_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceAssociation to import
    * @param importFromId The id of the existing CcResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalogappregistry_resource_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalogappregistry_resource_association awscc_servicecatalogappregistry_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalogappregistry_resource_association',
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
        this._application = config.application;
        this._resource = config.resource;
        this._resourceType = config.resourceType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application - computed: false, optional: false, required: true
    private _application?: string; 
    public get application() {
        return this.getStringAttribute('application');
    }
    public set application(value: string) {
        this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInput() {
        return this._application;
    }

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource - computed: false, optional: false, required: true
    private _resource?: string; 
    public get resource() {
        return this.getStringAttribute('resource');
    }
    public set resource(value: string) {
        this._resource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application: cdktn.stringToTerraform(this._application),
            resource: cdktn.stringToTerraform(this._resource),
            resource_type: cdktn.stringToTerraform(this._resourceType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application: {
                value: cdktn.stringToHclTerraform(this._application),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource: {
                value: cdktn.stringToHclTerraform(this._resource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
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
