// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainUnitProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the domain unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit#description CcDomainUnit#description}
    */
    readonly description?: string;
    /**
    * The ID of the domain where you want to create a domain unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit#domain_identifier CcDomainUnit#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The name of the domain unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit#name CcDomainUnit#name}
    */
    readonly name: string;
    /**
    * The ID of the parent domain unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit#parent_domain_unit_identifier CcDomainUnit#parent_domain_unit_identifier}
    */
    readonly parentDomainUnitIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit awscc_datazone_domain_unit}
*/
export class CcDomainUnit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_domain_unit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomainUnit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomainUnit to import
    * @param importFromId The id of the existing CcDomainUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomainUnit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_domain_unit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_domain_unit awscc_datazone_domain_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainUnitProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainUnitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_domain_unit',
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
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._name = config.name;
        this._parentDomainUnitIdentifier = config.parentDomainUnitIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // domain_unit_id - computed: true, optional: false, required: false
    public get domainUnitId() {
        return this.getStringAttribute('domain_unit_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: false, required: false
    public get identifier() {
        return this.getStringAttribute('identifier');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // parent_domain_unit_id - computed: true, optional: false, required: false
    public get parentDomainUnitId() {
        return this.getStringAttribute('parent_domain_unit_id');
    }

    // parent_domain_unit_identifier - computed: false, optional: false, required: true
    private _parentDomainUnitIdentifier?: string; 
    public get parentDomainUnitIdentifier() {
        return this.getStringAttribute('parent_domain_unit_identifier');
    }
    public set parentDomainUnitIdentifier(value: string) {
        this._parentDomainUnitIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentDomainUnitIdentifierInput() {
        return this._parentDomainUnitIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            name: cdktn.stringToTerraform(this._name),
            parent_domain_unit_identifier: cdktn.stringToTerraform(this._parentDomainUnitIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
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
            parent_domain_unit_identifier: {
                value: cdktn.stringToHclTerraform(this._parentDomainUnitIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDomainUnit {
}
