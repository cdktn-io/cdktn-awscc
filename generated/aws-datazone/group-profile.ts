// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the Amazon DataZone domain in which the group profile would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#domain_identifier CcGroupProfile#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The ID of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#group_identifier CcGroupProfile#group_identifier}
    */
    readonly groupIdentifier?: string;
    /**
    * The type of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#group_type CcGroupProfile#group_type}
    */
    readonly groupType?: string;
    /**
    * The ARN of the role principal for the group profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#role_principal_arn CcGroupProfile#role_principal_arn}
    */
    readonly rolePrincipalArn?: string;
    /**
    * The status of the group profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#status CcGroupProfile#status}
    */
    readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile awscc_datazone_group_profile}
*/
export class CcGroupProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_group_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroupProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroupProfile to import
    * @param importFromId The id of the existing CcGroupProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroupProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_group_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_group_profile awscc_datazone_group_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcGroupProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_group_profile',
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
        this._domainIdentifier = config.domainIdentifier;
        this._groupIdentifier = config.groupIdentifier;
        this._groupType = config.groupType;
        this._rolePrincipalArn = config.rolePrincipalArn;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // group_identifier - computed: true, optional: true, required: false
    private _groupIdentifier?: string; 
    public get groupIdentifier() {
        return this.getStringAttribute('group_identifier');
    }
    public set groupIdentifier(value: string) {
        this._groupIdentifier = value;
    }
    public resetGroupIdentifier() {
        this._groupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdentifierInput() {
        return this._groupIdentifier;
    }

    // group_name - computed: true, optional: false, required: false
    public get groupName() {
        return this.getStringAttribute('group_name');
    }

    // group_profile_id - computed: true, optional: false, required: false
    public get groupProfileId() {
        return this.getStringAttribute('group_profile_id');
    }

    // group_type - computed: true, optional: true, required: false
    private _groupType?: string; 
    public get groupType() {
        return this.getStringAttribute('group_type');
    }
    public set groupType(value: string) {
        this._groupType = value;
    }
    public resetGroupType() {
        this._groupType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupTypeInput() {
        return this._groupType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // role_principal_arn - computed: true, optional: true, required: false
    private _rolePrincipalArn?: string; 
    public get rolePrincipalArn() {
        return this.getStringAttribute('role_principal_arn');
    }
    public set rolePrincipalArn(value: string) {
        this._rolePrincipalArn = value;
    }
    public resetRolePrincipalArn() {
        this._rolePrincipalArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolePrincipalArnInput() {
        return this._rolePrincipalArn;
    }

    // role_principal_id - computed: true, optional: false, required: false
    public get rolePrincipalId() {
        return this.getStringAttribute('role_principal_id');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            group_identifier: cdktn.stringToTerraform(this._groupIdentifier),
            group_type: cdktn.stringToTerraform(this._groupType),
            role_principal_arn: cdktn.stringToTerraform(this._rolePrincipalArn),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_identifier: {
                value: cdktn.stringToHclTerraform(this._groupIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_type: {
                value: cdktn.stringToHclTerraform(this._groupType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_principal_arn: {
                value: cdktn.stringToHclTerraform(this._rolePrincipalArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcGroupProfile {
}
