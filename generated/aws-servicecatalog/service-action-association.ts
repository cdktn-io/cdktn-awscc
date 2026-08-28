// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceActionAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association#product_id CcServiceActionAssociation#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association#provisioning_artifact_id CcServiceActionAssociation#provisioning_artifact_id}
    */
    readonly provisioningArtifactId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association#service_action_id CcServiceActionAssociation#service_action_id}
    */
    readonly serviceActionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association awscc_servicecatalog_service_action_association}
*/
export class CcServiceActionAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_service_action_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceActionAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceActionAssociation to import
    * @param importFromId The id of the existing CcServiceActionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceActionAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_service_action_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_service_action_association awscc_servicecatalog_service_action_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceActionAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceActionAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_service_action_association',
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
        this._productId = config.productId;
        this._provisioningArtifactId = config.provisioningArtifactId;
        this._serviceActionId = config.serviceActionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
    public get productId() {
        return this.getStringAttribute('product_id');
    }
    public set productId(value: string) {
        this._productId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
        return this._productId;
    }

    // provisioning_artifact_id - computed: false, optional: false, required: true
    private _provisioningArtifactId?: string; 
    public get provisioningArtifactId() {
        return this.getStringAttribute('provisioning_artifact_id');
    }
    public set provisioningArtifactId(value: string) {
        this._provisioningArtifactId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactIdInput() {
        return this._provisioningArtifactId;
    }

    // service_action_id - computed: false, optional: false, required: true
    private _serviceActionId?: string; 
    public get serviceActionId() {
        return this.getStringAttribute('service_action_id');
    }
    public set serviceActionId(value: string) {
        this._serviceActionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceActionIdInput() {
        return this._serviceActionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            product_id: cdktn.stringToTerraform(this._productId),
            provisioning_artifact_id: cdktn.stringToTerraform(this._provisioningArtifactId),
            service_action_id: cdktn.stringToTerraform(this._serviceActionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            product_id: {
                value: cdktn.stringToHclTerraform(this._productId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provisioning_artifact_id: {
                value: cdktn.stringToHclTerraform(this._provisioningArtifactId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_action_id: {
                value: cdktn.stringToHclTerraform(this._serviceActionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcServiceActionAssociation {
}
