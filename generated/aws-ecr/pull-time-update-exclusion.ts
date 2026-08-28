// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_pull_time_update_exclusion

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPullTimeUpdateExclusionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the IAM principal to remove from the pull time update exclusion list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_pull_time_update_exclusion#principal_arn CcPullTimeUpdateExclusion#principal_arn}
    */
    readonly principalArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_pull_time_update_exclusion awscc_ecr_pull_time_update_exclusion}
*/
export class CcPullTimeUpdateExclusion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_pull_time_update_exclusion";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPullTimeUpdateExclusion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPullTimeUpdateExclusion to import
    * @param importFromId The id of the existing CcPullTimeUpdateExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_pull_time_update_exclusion#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPullTimeUpdateExclusion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_pull_time_update_exclusion", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_pull_time_update_exclusion awscc_ecr_pull_time_update_exclusion} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPullTimeUpdateExclusionProps
    */
    public constructor(scope: Construct, id: string, config: CcPullTimeUpdateExclusionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_pull_time_update_exclusion',
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
        this._principalArn = config.principalArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal_arn - computed: false, optional: false, required: true
    private _principalArn?: string; 
    public get principalArn() {
        return this.getStringAttribute('principal_arn');
    }
    public set principalArn(value: string) {
        this._principalArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalArnInput() {
        return this._principalArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            principal_arn: cdktn.stringToTerraform(this._principalArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            principal_arn: {
                value: cdktn.stringToHclTerraform(this._principalArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPullTimeUpdateExclusion {
}
