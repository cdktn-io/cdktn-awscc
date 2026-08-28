// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStudioSessionMappingProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping#identity_name CcStudioSessionMapping#identity_name}
    */
    readonly identityName: string;
    /**
    * Specifies whether the identity to map to the Studio is a user or a group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping#identity_type CcStudioSessionMapping#identity_type}
    */
    readonly identityType: string;
    /**
    * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping#session_policy_arn CcStudioSessionMapping#session_policy_arn}
    */
    readonly sessionPolicyArn: string;
    /**
    * The ID of the Amazon EMR Studio to which the user or group will be mapped.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping#studio_id CcStudioSessionMapping#studio_id}
    */
    readonly studioId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping awscc_emr_studio_session_mapping}
*/
export class CcStudioSessionMapping extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_emr_studio_session_mapping";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStudioSessionMapping resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStudioSessionMapping to import
    * @param importFromId The id of the existing CcStudioSessionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStudioSessionMapping to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emr_studio_session_mapping", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/emr_studio_session_mapping awscc_emr_studio_session_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStudioSessionMappingProps
    */
    public constructor(scope: Construct, id: string, config: CcStudioSessionMappingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_emr_studio_session_mapping',
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
        this._identityName = config.identityName;
        this._identityType = config.identityType;
        this._sessionPolicyArn = config.sessionPolicyArn;
        this._studioId = config.studioId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_name - computed: false, optional: false, required: true
    private _identityName?: string; 
    public get identityName() {
        return this.getStringAttribute('identity_name');
    }
    public set identityName(value: string) {
        this._identityName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityNameInput() {
        return this._identityName;
    }

    // identity_type - computed: false, optional: false, required: true
    private _identityType?: string; 
    public get identityType() {
        return this.getStringAttribute('identity_type');
    }
    public set identityType(value: string) {
        this._identityType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityTypeInput() {
        return this._identityType;
    }

    // session_policy_arn - computed: false, optional: false, required: true
    private _sessionPolicyArn?: string; 
    public get sessionPolicyArn() {
        return this.getStringAttribute('session_policy_arn');
    }
    public set sessionPolicyArn(value: string) {
        this._sessionPolicyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionPolicyArnInput() {
        return this._sessionPolicyArn;
    }

    // studio_id - computed: false, optional: false, required: true
    private _studioId?: string; 
    public get studioId() {
        return this.getStringAttribute('studio_id');
    }
    public set studioId(value: string) {
        this._studioId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get studioIdInput() {
        return this._studioId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            identity_name: cdktn.stringToTerraform(this._identityName),
            identity_type: cdktn.stringToTerraform(this._identityType),
            session_policy_arn: cdktn.stringToTerraform(this._sessionPolicyArn),
            studio_id: cdktn.stringToTerraform(this._studioId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_name: {
                value: cdktn.stringToHclTerraform(this._identityName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_type: {
                value: cdktn.stringToHclTerraform(this._identityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_policy_arn: {
                value: cdktn.stringToHclTerraform(this._sessionPolicyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            studio_id: {
                value: cdktn.stringToHclTerraform(this._studioId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcStudioSessionMapping {
}
