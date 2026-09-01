// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPermissionProps extends cdktn.TerraformMetaArguments {
    /**
    * The actions that the specified AWS service principal can use. Actions IssueCertificate, GetCertificate and ListPermissions must be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission#actions CcPermission#actions}
    */
    readonly actions: string[];
    /**
    * The Amazon Resource Name (ARN) of the Private Certificate Authority that grants the permission.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission#certificate_authority_arn CcPermission#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission#principal CcPermission#principal}
    */
    readonly principal: string;
    /**
    * The ID of the calling account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission#source_account CcPermission#source_account}
    */
    readonly sourceAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission awscc_acmpca_permission}
*/
export class CcPermission extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_acmpca_permission";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPermission resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPermission to import
    * @param importFromId The id of the existing CcPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPermission to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_permission", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/acmpca_permission awscc_acmpca_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPermissionProps
    */
    public constructor(scope: Construct, id: string, config: CcPermissionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_acmpca_permission',
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
        this._actions = config.actions;
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._principal = config.principal;
        this._sourceAccount = config.sourceAccount;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // certificate_authority_arn - computed: false, optional: false, required: true
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // source_account - computed: true, optional: true, required: false
    private _sourceAccount?: string; 
    public get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    public set sourceAccount(value: string) {
        this._sourceAccount = value;
    }
    public resetSourceAccount() {
        this._sourceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAccountInput() {
        return this._sourceAccount;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._actions),
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            principal: cdktn.stringToTerraform(this._principal),
            source_account: cdktn.stringToTerraform(this._sourceAccount),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._actions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
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
            source_account: {
                value: cdktn.stringToHclTerraform(this._sourceAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPermission {
}
