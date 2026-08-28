// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApprovedOriginProps extends cdktn.TerraformMetaArguments {
    /**
    * Amazon Connect instance identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin#instance_id CcApprovedOrigin#instance_id}
    */
    readonly instanceId: string;
    /**
    * Domain name to be added to the allowlist of instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin#origin CcApprovedOrigin#origin}
    */
    readonly origin: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin awscc_connect_approved_origin}
*/
export class CcApprovedOrigin extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_approved_origin";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApprovedOrigin resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApprovedOrigin to import
    * @param importFromId The id of the existing CcApprovedOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApprovedOrigin to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_approved_origin", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_approved_origin awscc_connect_approved_origin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApprovedOriginProps
    */
    public constructor(scope: Construct, id: string, config: CcApprovedOriginProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_approved_origin',
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
        this._instanceId = config.instanceId;
        this._origin = config.origin;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // origin - computed: false, optional: false, required: true
    private _origin?: string; 
    public get origin() {
        return this.getStringAttribute('origin');
    }
    public set origin(value: string) {
        this._origin = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originInput() {
        return this._origin;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_id: cdktn.stringToTerraform(this._instanceId),
            origin: cdktn.stringToTerraform(this._origin),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin: {
                value: cdktn.stringToHclTerraform(this._origin),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApprovedOrigin {
}
