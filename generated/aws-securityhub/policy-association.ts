// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The universally unique identifier (UUID) of the configuration policy or a value of SELF_MANAGED_SECURITY_HUB for a self-managed configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association#configuration_policy_id CcPolicyAssociation#configuration_policy_id}
    */
    readonly configurationPolicyId: string;
    /**
    * The identifier of the target account, organizational unit, or the root
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association#target_id CcPolicyAssociation#target_id}
    */
    readonly targetId: string;
    /**
    * Indicates whether the target is an AWS account, organizational unit, or the organization root
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association#target_type CcPolicyAssociation#target_type}
    */
    readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association awscc_securityhub_policy_association}
*/
export class CcPolicyAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_policy_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyAssociation to import
    * @param importFromId The id of the existing CcPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_policy_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_policy_association awscc_securityhub_policy_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_policy_association',
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
        this._configurationPolicyId = config.configurationPolicyId;
        this._targetId = config.targetId;
        this._targetType = config.targetType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_identifier - computed: true, optional: false, required: false
    public get associationIdentifier() {
        return this.getStringAttribute('association_identifier');
    }

    // association_status - computed: true, optional: false, required: false
    public get associationStatus() {
        return this.getStringAttribute('association_status');
    }

    // association_status_message - computed: true, optional: false, required: false
    public get associationStatusMessage() {
        return this.getStringAttribute('association_status_message');
    }

    // association_type - computed: true, optional: false, required: false
    public get associationType() {
        return this.getStringAttribute('association_type');
    }

    // configuration_policy_id - computed: false, optional: false, required: true
    private _configurationPolicyId?: string; 
    public get configurationPolicyId() {
        return this.getStringAttribute('configuration_policy_id');
    }
    public set configurationPolicyId(value: string) {
        this._configurationPolicyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationPolicyIdInput() {
        return this._configurationPolicyId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration_policy_id: cdktn.stringToTerraform(this._configurationPolicyId),
            target_id: cdktn.stringToTerraform(this._targetId),
            target_type: cdktn.stringToTerraform(this._targetType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_policy_id: {
                value: cdktn.stringToHclTerraform(this._configurationPolicyId),
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

export namespace CcPolicyAssociation {
}
