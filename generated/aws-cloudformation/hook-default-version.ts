// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcHookDefaultVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the type being registered.
    * 
    * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version#type_name CcHookDefaultVersion#type_name}
    */
    readonly typeName?: string;
    /**
    * The Amazon Resource Name (ARN) of the type version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version#type_version_arn CcHookDefaultVersion#type_version_arn}
    */
    readonly typeVersionArn?: string;
    /**
    * The ID of an existing version of the hook to set as the default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version#version_id CcHookDefaultVersion#version_id}
    */
    readonly versionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version awscc_cloudformation_hook_default_version}
*/
export class CcHookDefaultVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_hook_default_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcHookDefaultVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcHookDefaultVersion to import
    * @param importFromId The id of the existing CcHookDefaultVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcHookDefaultVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_hook_default_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_default_version awscc_cloudformation_hook_default_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcHookDefaultVersionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcHookDefaultVersionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_hook_default_version',
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
        this._typeName = config.typeName;
        this._typeVersionArn = config.typeVersionArn;
        this._versionId = config.versionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    public resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // type_version_arn - computed: true, optional: true, required: false
    private _typeVersionArn?: string; 
    public get typeVersionArn() {
        return this.getStringAttribute('type_version_arn');
    }
    public set typeVersionArn(value: string) {
        this._typeVersionArn = value;
    }
    public resetTypeVersionArn() {
        this._typeVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeVersionArnInput() {
        return this._typeVersionArn;
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
            type_name: cdktn.stringToTerraform(this._typeName),
            type_version_arn: cdktn.stringToTerraform(this._typeVersionArn),
            version_id: cdktn.stringToTerraform(this._versionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            type_name: {
                value: cdktn.stringToHclTerraform(this._typeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type_version_arn: {
                value: cdktn.stringToHclTerraform(this._typeVersionArn),
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

export namespace CcHookDefaultVersion {
}
