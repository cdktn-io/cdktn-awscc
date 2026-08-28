// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecretTargetAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment#secret_id CcSecretTargetAttachment#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment#target_id CcSecretTargetAttachment#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment#target_type CcSecretTargetAttachment#target_type}
    */
    readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment awscc_secretsmanager_secret_target_attachment}
*/
export class CcSecretTargetAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_secretsmanager_secret_target_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecretTargetAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecretTargetAttachment to import
    * @param importFromId The id of the existing CcSecretTargetAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecretTargetAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_secretsmanager_secret_target_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_secret_target_attachment awscc_secretsmanager_secret_target_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecretTargetAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcSecretTargetAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_secretsmanager_secret_target_attachment',
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
        this._secretId = config.secretId;
        this._targetId = config.targetId;
        this._targetType = config.targetType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // secret_id - computed: false, optional: false, required: true
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }

    // secret_target_attachment_id - computed: true, optional: false, required: false
    public get secretTargetAttachmentId() {
        return this.getStringAttribute('secret_target_attachment_id');
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
        return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
        this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
        return this._targetId;
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
            secret_id: cdktn.stringToTerraform(this._secretId),
            target_id: cdktn.stringToTerraform(this._targetId),
            target_type: cdktn.stringToTerraform(this._targetType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            secret_id: {
                value: cdktn.stringToHclTerraform(this._secretId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_id: {
                value: cdktn.stringToHclTerraform(this._targetId),
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

export namespace CcSecretTargetAttachment {
}
