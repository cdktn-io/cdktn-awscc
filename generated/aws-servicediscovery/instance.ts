// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * A string map that contains information for the service that is specified in ServiceId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance#instance_attributes CcInstance#instance_attributes}
    */
    readonly instanceAttributes: string;
    /**
    * An identifier that you want to associate with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance#instance_id CcInstance#instance_id}
    */
    readonly instanceId?: string;
    /**
    * The ID or Amazon Resource Name (ARN) of the service that you want to use for settings for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance#service_id CcInstance#service_id}
    */
    readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance awscc_servicediscovery_instance}
*/
export class CcInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicediscovery_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstance to import
    * @param importFromId The id of the existing CcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicediscovery_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/servicediscovery_instance awscc_servicediscovery_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicediscovery_instance',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._instanceAttributes = config.instanceAttributes;
        this._instanceId = config.instanceId;
        this._serviceId = config.serviceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_attributes - computed: false, optional: false, required: true
    private _instanceAttributes?: string; 
    public get instanceAttributes() {
        return this.getStringAttribute('instance_attributes');
    }
    public set instanceAttributes(value: string) {
        this._instanceAttributes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceAttributesInput() {
        return this._instanceAttributes;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // service_id - computed: false, optional: false, required: true
    private _serviceId?: string; 
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }
    public set serviceId(value: string) {
        this._serviceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdInput() {
        return this._serviceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_attributes: cdktn.stringToTerraform(this._instanceAttributes),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            service_id: cdktn.stringToTerraform(this._serviceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_attributes: {
                value: cdktn.stringToHclTerraform(this._instanceAttributes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_id: {
                value: cdktn.stringToHclTerraform(this._serviceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcInstance {
}
