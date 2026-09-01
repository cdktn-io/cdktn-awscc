// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcModuleDefaultVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the module version to set as the default version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version#arn CcModuleDefaultVersion#arn}
    */
    readonly arn?: string;
    /**
    * The name of a module existing in the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version#module_name CcModuleDefaultVersion#module_name}
    */
    readonly moduleName?: string;
    /**
    * The ID of an existing version of the named module to set as the default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version#version_id CcModuleDefaultVersion#version_id}
    */
    readonly versionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version awscc_cloudformation_module_default_version}
*/
export class CcModuleDefaultVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_module_default_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcModuleDefaultVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcModuleDefaultVersion to import
    * @param importFromId The id of the existing CcModuleDefaultVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcModuleDefaultVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_module_default_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_default_version awscc_cloudformation_module_default_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcModuleDefaultVersionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcModuleDefaultVersionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_module_default_version',
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
        this._arn = config.arn;
        this._moduleName = config.moduleName;
        this._versionId = config.versionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // module_name - computed: true, optional: true, required: false
    private _moduleName?: string; 
    public get moduleName() {
        return this.getStringAttribute('module_name');
    }
    public set moduleName(value: string) {
        this._moduleName = value;
    }
    public resetModuleName() {
        this._moduleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get moduleNameInput() {
        return this._moduleName;
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string; 
    public get versionId() {
        return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
        this._versionId = value;
    }
    public resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
        return this._versionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            arn: cdktn.stringToTerraform(this._arn),
            module_name: cdktn.stringToTerraform(this._moduleName),
            version_id: cdktn.stringToTerraform(this._versionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            arn: {
                value: cdktn.stringToHclTerraform(this._arn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            module_name: {
                value: cdktn.stringToHclTerraform(this._moduleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_id: {
                value: cdktn.stringToHclTerraform(this._versionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcModuleDefaultVersion {
}
