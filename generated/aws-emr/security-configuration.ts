// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the security configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration#name CcSecurityConfiguration#name}
    */
    readonly name?: string;
    /**
    * The security configuration details in JSON format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration#security_configuration CcSecurityConfiguration#security_configuration}
    */
    readonly securityConfiguration: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration awscc_emr_security_configuration}
*/
export class CcSecurityConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_emr_security_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityConfiguration to import
    * @param importFromId The id of the existing CcSecurityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emr_security_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_security_configuration awscc_emr_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSecurityConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_emr_security_configuration',
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
        this._name = config.name;
        this._securityConfiguration = config.securityConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // security_configuration - computed: false, optional: false, required: true
    private _securityConfiguration?: string; 
    public get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string) {
        this._securityConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
        return this._securityConfiguration;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            security_configuration: cdktn.stringToTerraform(this._securityConfiguration),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_configuration: {
                value: cdktn.stringToHclTerraform(this._securityConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSecurityConfiguration {
}
