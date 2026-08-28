// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStaticIpProps extends cdktn.TerraformMetaArguments {
    /**
    * The instance where the static IP is attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip#attached_to CcStaticIp#attached_to}
    */
    readonly attachedTo?: string;
    /**
    * The name of the static IP address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip#static_ip_name CcStaticIp#static_ip_name}
    */
    readonly staticIpName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip awscc_lightsail_static_ip}
*/
export class CcStaticIp extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_static_ip";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStaticIp resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStaticIp to import
    * @param importFromId The id of the existing CcStaticIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStaticIp to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_static_ip", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_static_ip awscc_lightsail_static_ip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStaticIpProps
    */
    public constructor(scope: Construct, id: string, config: CcStaticIpProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_static_ip',
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
        this._attachedTo = config.attachedTo;
        this._staticIpName = config.staticIpName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attached_to - computed: true, optional: true, required: false
    private _attachedTo?: string; 
    public get attachedTo() {
        return this.getStringAttribute('attached_to');
    }
    public set attachedTo(value: string) {
        this._attachedTo = value;
    }
    public resetAttachedTo() {
        this._attachedTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachedToInput() {
        return this._attachedTo;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }

    // is_attached - computed: true, optional: false, required: false
    public get isAttached() {
        return this.getBooleanAttribute('is_attached');
    }

    // static_ip_arn - computed: true, optional: false, required: false
    public get staticIpArn() {
        return this.getStringAttribute('static_ip_arn');
    }

    // static_ip_name - computed: false, optional: false, required: true
    private _staticIpName?: string; 
    public get staticIpName() {
        return this.getStringAttribute('static_ip_name');
    }
    public set staticIpName(value: string) {
        this._staticIpName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get staticIpNameInput() {
        return this._staticIpName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attached_to: cdktn.stringToTerraform(this._attachedTo),
            static_ip_name: cdktn.stringToTerraform(this._staticIpName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attached_to: {
                value: cdktn.stringToHclTerraform(this._attachedTo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_ip_name: {
                value: cdktn.stringToHclTerraform(this._staticIpName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcStaticIp {
}
