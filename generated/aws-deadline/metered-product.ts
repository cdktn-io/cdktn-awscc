// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMeteredProductProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product#license_endpoint_id CcMeteredProduct#license_endpoint_id}
    */
    readonly licenseEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product#product_id CcMeteredProduct#product_id}
    */
    readonly productId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product awscc_deadline_metered_product}
*/
export class CcMeteredProduct extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_metered_product";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMeteredProduct resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMeteredProduct to import
    * @param importFromId The id of the existing CcMeteredProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMeteredProduct to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_metered_product", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_metered_product awscc_deadline_metered_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMeteredProductProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcMeteredProductProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_metered_product',
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
        this._licenseEndpointId = config.licenseEndpointId;
        this._productId = config.productId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // family - computed: true, optional: false, required: false
    public get family() {
        return this.getStringAttribute('family');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // license_endpoint_id - computed: true, optional: true, required: false
    private _licenseEndpointId?: string; 
    public get licenseEndpointId() {
        return this.getStringAttribute('license_endpoint_id');
    }
    public set licenseEndpointId(value: string) {
        this._licenseEndpointId = value;
    }
    public resetLicenseEndpointId() {
        this._licenseEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseEndpointIdInput() {
        return this._licenseEndpointId;
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // product_id - computed: true, optional: true, required: false
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    public resetProductId() {
        this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // vendor - computed: true, optional: false, required: false
    public get vendor() {
        return this.getStringAttribute('vendor');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            license_endpoint_id: cdktn.stringToTerraform(this._licenseEndpointId),
            product_id: cdktn.stringToTerraform(this._productId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            license_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._licenseEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            product_id: {
                value: cdktn.stringToHclTerraform(this._productId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMeteredProduct {
}
