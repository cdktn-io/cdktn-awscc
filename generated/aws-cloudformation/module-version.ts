// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcModuleVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the module being registered.
    * 
    * Recommended module naming pattern: company_or_organization::service::type::MODULE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version#module_name CcModuleVersion#module_name}
    */
    readonly moduleName: string;
    /**
    * The url to the S3 bucket containing the schema and template fragment for the module you want to register.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version#module_package CcModuleVersion#module_package}
    */
    readonly modulePackage: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version awscc_cloudformation_module_version}
*/
export class CcModuleVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_module_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcModuleVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcModuleVersion to import
    * @param importFromId The id of the existing CcModuleVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcModuleVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_module_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_module_version awscc_cloudformation_module_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcModuleVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcModuleVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_module_version',
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
        this._moduleName = config.moduleName;
        this._modulePackage = config.modulePackage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // documentation_url - computed: true, optional: false, required: false
    public get documentationUrl() {
        return this.getStringAttribute('documentation_url');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
        return this.getBooleanAttribute('is_default_version');
    }

    // module_name - computed: false, optional: false, required: true
    private _moduleName?: string; 
    public get moduleName() {
        return this.getStringAttribute('module_name');
    }
    public set moduleName(value: string) {
        this._moduleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get moduleNameInput() {
        return this._moduleName;
    }

    // module_package - computed: false, optional: false, required: true
    private _modulePackage?: string; 
    public get modulePackage() {
        return this.getStringAttribute('module_package');
    }
    public set modulePackage(value: string) {
        this._modulePackage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modulePackageInput() {
        return this._modulePackage;
    }

    // schema - computed: true, optional: false, required: false
    public get schema() {
        return this.getStringAttribute('schema');
    }

    // time_created - computed: true, optional: false, required: false
    public get timeCreated() {
        return this.getStringAttribute('time_created');
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
        return this.getStringAttribute('version_id');
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
        return this.getStringAttribute('visibility');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            module_name: cdktn.stringToTerraform(this._moduleName),
            module_package: cdktn.stringToTerraform(this._modulePackage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            module_name: {
                value: cdktn.stringToHclTerraform(this._moduleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            module_package: {
                value: cdktn.stringToHclTerraform(this._modulePackage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcModuleVersion {
}
