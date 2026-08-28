// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLayerVersionPermissionProps extends cdktn.TerraformMetaArguments {
    /**
    * The API action that grants access to the layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission#action CcLayerVersionPermission#action}
    */
    readonly action: string;
    /**
    * The name or Amazon Resource Name (ARN) of the layer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission#layer_version_arn CcLayerVersionPermission#layer_version_arn}
    */
    readonly layerVersionArn: string;
    /**
    * With the principal set to *, grant permission to all accounts in the specified organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission#organization_id CcLayerVersionPermission#organization_id}
    */
    readonly organizationId?: string;
    /**
    * An account ID, or * to grant layer usage permission to all accounts in an organization, or all AWS accounts (if organizationId is not specified).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission#principal CcLayerVersionPermission#principal}
    */
    readonly principal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission awscc_lambda_layer_version_permission}
*/
export class CcLayerVersionPermission extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_layer_version_permission";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLayerVersionPermission resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLayerVersionPermission to import
    * @param importFromId The id of the existing CcLayerVersionPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLayerVersionPermission to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_layer_version_permission", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_layer_version_permission awscc_lambda_layer_version_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLayerVersionPermissionProps
    */
    public constructor(scope: Construct, id: string, config: CcLayerVersionPermissionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_layer_version_permission',
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
        this._action = config.action;
        this._layerVersionArn = config.layerVersionArn;
        this._organizationId = config.organizationId;
        this._principal = config.principal;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // layer_version_arn - computed: false, optional: false, required: true
    private _layerVersionArn?: string; 
    public get layerVersionArn() {
        return this.getStringAttribute('layer_version_arn');
    }
    public set layerVersionArn(value: string) {
        this._layerVersionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get layerVersionArnInput() {
        return this._layerVersionArn;
    }

    // layer_version_permission_id - computed: true, optional: false, required: false
    public get layerVersionPermissionId() {
        return this.getStringAttribute('layer_version_permission_id');
    }

    // organization_id - computed: true, optional: true, required: false
    private _organizationId?: string; 
    public get organizationId() {
        return this.getStringAttribute('organization_id');
    }
    public set organizationId(value: string) {
        this._organizationId = value;
    }
    public resetOrganizationId() {
        this._organizationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationIdInput() {
        return this._organizationId;
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.stringToTerraform(this._action),
            layer_version_arn: cdktn.stringToTerraform(this._layerVersionArn),
            organization_id: cdktn.stringToTerraform(this._organizationId),
            principal: cdktn.stringToTerraform(this._principal),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            layer_version_arn: {
                value: cdktn.stringToHclTerraform(this._layerVersionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_id: {
                value: cdktn.stringToHclTerraform(this._organizationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLayerVersionPermission {
}
