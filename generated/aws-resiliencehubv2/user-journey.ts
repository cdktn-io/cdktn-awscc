// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserJourneyProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the user journey.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey#description CcUserJourney#description}
    */
    readonly description?: string;
    /**
    * The name of the user journey.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey#name CcUserJourney#name}
    */
    readonly name: string;
    /**
    * The ARN of the resilience policy to associate with this user journey.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey#policy_arn CcUserJourney#policy_arn}
    */
    readonly policyArn?: string;
    /**
    * The system ARN or system ID that owns this user journey.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey#system_identifier CcUserJourney#system_identifier}
    */
    readonly systemIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey awscc_resiliencehubv2_user_journey}
*/
export class CcUserJourney extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resiliencehubv2_user_journey";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserJourney resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserJourney to import
    * @param importFromId The id of the existing CcUserJourney that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserJourney to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_user_journey", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/resiliencehubv2_user_journey awscc_resiliencehubv2_user_journey} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserJourneyProps
    */
    public constructor(scope: Construct, id: string, config: CcUserJourneyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resiliencehubv2_user_journey',
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
        this._description = config.description;
        this._name = config.name;
        this._policyArn = config.policyArn;
        this._systemIdentifier = config.systemIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // policy_arn - computed: true, optional: true, required: false
    private _policyArn?: string; 
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
        this._policyArn = value;
    }
    public resetPolicyArn() {
        this._policyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
        return this._policyArn;
    }

    // system_identifier - computed: false, optional: false, required: true
    private _systemIdentifier?: string; 
    public get systemIdentifier() {
        return this.getStringAttribute('system_identifier');
    }
    public set systemIdentifier(value: string) {
        this._systemIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get systemIdentifierInput() {
        return this._systemIdentifier;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // user_journey_id - computed: true, optional: false, required: false
    public get userJourneyId() {
        return this.getStringAttribute('user_journey_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            policy_arn: cdktn.stringToTerraform(this._policyArn),
            system_identifier: cdktn.stringToTerraform(this._systemIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_arn: {
                value: cdktn.stringToHclTerraform(this._policyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_identifier: {
                value: cdktn.stringToHclTerraform(this._systemIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcUserJourney {
}
