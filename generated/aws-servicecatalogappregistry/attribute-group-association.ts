// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAttributeGroupAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name or the Id of the Application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association#application CcAttributeGroupAssociation#application}
    */
    readonly application: string;
    /**
    * The name or the Id of the AttributeGroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association#attribute_group CcAttributeGroupAssociation#attribute_group}
    */
    readonly attributeGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association awscc_servicecatalogappregistry_attribute_group_association}
*/
export class CcAttributeGroupAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalogappregistry_attribute_group_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAttributeGroupAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAttributeGroupAssociation to import
    * @param importFromId The id of the existing CcAttributeGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAttributeGroupAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalogappregistry_attribute_group_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalogappregistry_attribute_group_association awscc_servicecatalogappregistry_attribute_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAttributeGroupAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcAttributeGroupAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalogappregistry_attribute_group_association',
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
        this._application = config.application;
        this._attributeGroup = config.attributeGroup;
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

    // attribute_group - computed: false, optional: false, required: true
    private _attributeGroup?: string; 
    public get attributeGroup() {
        return this.getStringAttribute('attribute_group');
    }
    public set attributeGroup(value: string) {
        this._attributeGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeGroupInput() {
        return this._attributeGroup;
    }

    // attribute_group_arn - computed: true, optional: false, required: false
    public get attributeGroupArn() {
        return this.getStringAttribute('attribute_group_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application: cdktn.stringToTerraform(this._application),
            attribute_group: cdktn.stringToTerraform(this._attributeGroup),
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
            attribute_group: {
                value: cdktn.stringToHclTerraform(this._attributeGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAttributeGroupAssociation {
}
