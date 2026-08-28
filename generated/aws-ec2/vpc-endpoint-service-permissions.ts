// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCEndpointServicePermissionsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions#allowed_principals CcVPCEndpointServicePermissions#allowed_principals}
    */
    readonly allowedPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions#service_id CcVPCEndpointServicePermissions#service_id}
    */
    readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions awscc_ec2_vpc_endpoint_service_permissions}
*/
export class CcVPCEndpointServicePermissions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_endpoint_service_permissions";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCEndpointServicePermissions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCEndpointServicePermissions to import
    * @param importFromId The id of the existing CcVPCEndpointServicePermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCEndpointServicePermissions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_endpoint_service_permissions", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_endpoint_service_permissions awscc_ec2_vpc_endpoint_service_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCEndpointServicePermissionsProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCEndpointServicePermissionsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_endpoint_service_permissions',
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
        this._allowedPrincipals = config.allowedPrincipals;
        this._serviceId = config.serviceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_principals - computed: true, optional: true, required: false
    private _allowedPrincipals?: string[]; 
    public get allowedPrincipals() {
        return this.getListAttribute('allowed_principals');
    }
    public set allowedPrincipals(value: string[]) {
        this._allowedPrincipals = value;
    }
    public resetAllowedPrincipals() {
        this._allowedPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPrincipalsInput() {
        return this._allowedPrincipals;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            allowed_principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedPrincipals),
            service_id: cdktn.stringToTerraform(this._serviceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_principals: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedPrincipals),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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

export namespace CcVPCEndpointServicePermissions {
}
