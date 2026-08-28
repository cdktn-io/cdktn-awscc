// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_registry_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRegistryPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The JSON policy text for your registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_registry_policy#policy_text CcRegistryPolicy#policy_text}
    */
    readonly policyText: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_registry_policy awscc_ecr_registry_policy}
*/
export class CcRegistryPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_registry_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRegistryPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRegistryPolicy to import
    * @param importFromId The id of the existing CcRegistryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_registry_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRegistryPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_registry_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_registry_policy awscc_ecr_registry_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRegistryPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcRegistryPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_registry_policy',
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
        this._policyText = config.policyText;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_text - computed: false, optional: false, required: true
    private _policyText?: string; 
    public get policyText() {
        return this.getStringAttribute('policy_text');
    }
    public set policyText(value: string) {
        this._policyText = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTextInput() {
        return this._policyText;
    }

    // registry_id - computed: true, optional: false, required: false
    public get registryId() {
        return this.getStringAttribute('registry_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy_text: cdktn.stringToTerraform(this._policyText),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy_text: {
                value: cdktn.stringToHclTerraform(this._policyText),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRegistryPolicy {
}
