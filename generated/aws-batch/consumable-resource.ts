// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConsumableResourceProps extends cdktn.TerraformMetaArguments {
    /**
    * Name of ConsumableResource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource#consumable_resource_name CcConsumableResource#consumable_resource_name}
    */
    readonly consumableResourceName?: string;
    /**
    * Type of Consumable Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource#resource_type CcConsumableResource#resource_type}
    */
    readonly resourceType: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource#tags CcConsumableResource#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Total Quantity of ConsumableResource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource#total_quantity CcConsumableResource#total_quantity}
    */
    readonly totalQuantity: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource awscc_batch_consumable_resource}
*/
export class CcConsumableResource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_batch_consumable_resource";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConsumableResource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConsumableResource to import
    * @param importFromId The id of the existing CcConsumableResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConsumableResource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_consumable_resource", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_consumable_resource awscc_batch_consumable_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConsumableResourceProps
    */
    public constructor(scope: Construct, id: string, config: CcConsumableResourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_batch_consumable_resource',
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
        this._consumableResourceName = config.consumableResourceName;
        this._resourceType = config.resourceType;
        this._tags = config.tags;
        this._totalQuantity = config.totalQuantity;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // available_quantity - computed: true, optional: false, required: false
    public get availableQuantity() {
        return this.getNumberAttribute('available_quantity');
    }

    // consumable_resource_arn - computed: true, optional: false, required: false
    public get consumableResourceArn() {
        return this.getStringAttribute('consumable_resource_arn');
    }

    // consumable_resource_name - computed: true, optional: true, required: false
    private _consumableResourceName?: string; 
    public get consumableResourceName() {
        return this.getStringAttribute('consumable_resource_name');
    }
    public set consumableResourceName(value: string) {
        this._consumableResourceName = value;
    }
    public resetConsumableResourceName() {
        this._consumableResourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumableResourceNameInput() {
        return this._consumableResourceName;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getNumberAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // in_use_quantity - computed: true, optional: false, required: false
    public get inUseQuantity() {
        return this.getNumberAttribute('in_use_quantity');
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

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // total_quantity - computed: false, optional: false, required: true
    private _totalQuantity?: number; 
    public get totalQuantity() {
        return this.getNumberAttribute('total_quantity');
    }
    public set totalQuantity(value: number) {
        this._totalQuantity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get totalQuantityInput() {
        return this._totalQuantity;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            consumable_resource_name: cdktn.stringToTerraform(this._consumableResourceName),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            total_quantity: cdktn.numberToTerraform(this._totalQuantity),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            consumable_resource_name: {
                value: cdktn.stringToHclTerraform(this._consumableResourceName),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            total_quantity: {
                value: cdktn.numberToHclTerraform(this._totalQuantity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcConsumableResource {
}
