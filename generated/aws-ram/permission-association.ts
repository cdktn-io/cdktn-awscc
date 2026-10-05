// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPermissionAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association#permission_arn CcPermissionAssociation#permission_arn}
    */
    readonly permissionArn: string;
    /**
    * Specifies whether to replace the existing permission on the resource share. Use `true` to replace the current permission. Use `false` to add the permission when no permission is currently associated. The default value is `false`. Updating an existing association also requires `true`, because AWS RAM applies the change by re-associating the permission.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association#replace CcPermissionAssociation#replace}
    */
    readonly replace?: boolean | cdktn.IResolvable;
    /**
    * Specifies the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association#resource_share_arn CcPermissionAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association awscc_ram_permission_association}
*/
export class CcPermissionAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ram_permission_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPermissionAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPermissionAssociation to import
    * @param importFromId The id of the existing CcPermissionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPermissionAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ram_permission_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ram_permission_association awscc_ram_permission_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPermissionAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcPermissionAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ram_permission_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._permissionArn = config.permissionArn;
        this._replace = config.replace;
        this._resourceShareArn = config.resourceShareArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_status - computed: true, optional: false, required: false
    public get associationStatus() {
        return this.getStringAttribute('association_status');
    }

    // feature_set - computed: true, optional: false, required: false
    public get featureSet() {
        return this.getStringAttribute('feature_set');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_default - computed: true, optional: false, required: false
    public get isDefault() {
        return this.getBooleanAttribute('is_default');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // permission_arn - computed: false, optional: false, required: true
    private _permissionArn?: string; 
    public get permissionArn() {
        return this.getStringAttribute('permission_arn');
    }
    public set permissionArn(value: string) {
        this._permissionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionArnInput() {
        return this._permissionArn;
    }

    // permission_version - computed: true, optional: false, required: false
    public get permissionVersion() {
        return this.getStringAttribute('permission_version');
    }

    // replace - computed: true, optional: true, required: false
    private _replace?: boolean | cdktn.IResolvable; 
    public get replace() {
        return this.getBooleanAttribute('replace');
    }
    public set replace(value: boolean | cdktn.IResolvable) {
        this._replace = value;
    }
    public resetReplace() {
        this._replace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceInput() {
        return this._replace;
    }

    // resource_share_arn - computed: false, optional: false, required: true
    private _resourceShareArn?: string; 
    public get resourceShareArn() {
        return this.getStringAttribute('resource_share_arn');
    }
    public set resourceShareArn(value: string) {
        this._resourceShareArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceShareArnInput() {
        return this._resourceShareArn;
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            permission_arn: cdktn.stringToTerraform(this._permissionArn),
            replace: cdktn.booleanToTerraform(this._replace),
            resource_share_arn: cdktn.stringToTerraform(this._resourceShareArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            permission_arn: {
                value: cdktn.stringToHclTerraform(this._permissionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replace: {
                value: cdktn.booleanToHclTerraform(this._replace),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resource_share_arn: {
                value: cdktn.stringToHclTerraform(this._resourceShareArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPermissionAssociation {
}
