// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceLinkedRoleProps extends cdktn.TerraformMetaArguments {
    /**
    * The service principal for the AWS service to which this role is attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role#aws_service_name CcServiceLinkedRole#aws_service_name}
    */
    readonly awsServiceName?: string;
    /**
    * A string that you provide, which is combined with the service-provided prefix to form the complete role name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role#custom_suffix CcServiceLinkedRole#custom_suffix}
    */
    readonly customSuffix?: string;
    /**
    * The description of the role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role#description CcServiceLinkedRole#description}
    */
    readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role awscc_iam_service_linked_role}
*/
export class CcServiceLinkedRole extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_service_linked_role";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceLinkedRole resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceLinkedRole to import
    * @param importFromId The id of the existing CcServiceLinkedRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceLinkedRole to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_service_linked_role", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iam_service_linked_role awscc_iam_service_linked_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceLinkedRoleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceLinkedRoleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_service_linked_role',
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
        this._awsServiceName = config.awsServiceName;
        this._customSuffix = config.customSuffix;
        this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_service_name - computed: true, optional: true, required: false
    private _awsServiceName?: string; 
    public get awsServiceName() {
        return this.getStringAttribute('aws_service_name');
    }
    public set awsServiceName(value: string) {
        this._awsServiceName = value;
    }
    public resetAwsServiceName() {
        this._awsServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsServiceNameInput() {
        return this._awsServiceName;
    }

    // custom_suffix - computed: true, optional: true, required: false
    private _customSuffix?: string; 
    public get customSuffix() {
        return this.getStringAttribute('custom_suffix');
    }
    public set customSuffix(value: string) {
        this._customSuffix = value;
    }
    public resetCustomSuffix() {
        this._customSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSuffixInput() {
        return this._customSuffix;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_name - computed: true, optional: false, required: false
    public get roleName() {
        return this.getStringAttribute('role_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_service_name: cdktn.stringToTerraform(this._awsServiceName),
            custom_suffix: cdktn.stringToTerraform(this._customSuffix),
            description: cdktn.stringToTerraform(this._description),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_service_name: {
                value: cdktn.stringToHclTerraform(this._awsServiceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_suffix: {
                value: cdktn.stringToHclTerraform(this._customSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcServiceLinkedRole {
}
