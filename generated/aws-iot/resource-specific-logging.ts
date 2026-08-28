// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceSpecificLoggingProps extends cdktn.TerraformMetaArguments {
    /**
    * The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging#log_level CcResourceSpecificLogging#log_level}
    */
    readonly logLevel: string;
    /**
    * The target name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging#target_name CcResourceSpecificLogging#target_name}
    */
    readonly targetName: string;
    /**
    * The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID, or EVENT_TYPE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging#target_type CcResourceSpecificLogging#target_type}
    */
    readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging awscc_iot_resource_specific_logging}
*/
export class CcResourceSpecificLogging extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_resource_specific_logging";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceSpecificLogging resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceSpecificLogging to import
    * @param importFromId The id of the existing CcResourceSpecificLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceSpecificLogging to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_resource_specific_logging", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_resource_specific_logging awscc_iot_resource_specific_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceSpecificLoggingProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceSpecificLoggingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_resource_specific_logging',
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
        this._logLevel = config.logLevel;
        this._targetName = config.targetName;
        this._targetType = config.targetType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_level - computed: false, optional: false, required: true
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }

    // target_id - computed: true, optional: false, required: false
    public get targetId() {
        return this.getStringAttribute('target_id');
    }

    // target_name - computed: false, optional: false, required: true
    private _targetName?: string; 
    public get targetName() {
        return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
        this._targetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
        return this._targetName;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            log_level: cdktn.stringToTerraform(this._logLevel),
            target_name: cdktn.stringToTerraform(this._targetName),
            target_type: cdktn.stringToTerraform(this._targetType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            log_level: {
                value: cdktn.stringToHclTerraform(this._logLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_name: {
                value: cdktn.stringToHclTerraform(this._targetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_type: {
                value: cdktn.stringToHclTerraform(this._targetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResourceSpecificLogging {
}
