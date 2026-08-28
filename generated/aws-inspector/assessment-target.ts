// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssessmentTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target#assessment_target_name CcAssessmentTarget#assessment_target_name}
    */
    readonly assessmentTargetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target#resource_group_arn CcAssessmentTarget#resource_group_arn}
    */
    readonly resourceGroupArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target awscc_inspector_assessment_target}
*/
export class CcAssessmentTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspector_assessment_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssessmentTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssessmentTarget to import
    * @param importFromId The id of the existing CcAssessmentTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssessmentTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspector_assessment_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspector_assessment_target awscc_inspector_assessment_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssessmentTargetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAssessmentTargetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspector_assessment_target',
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
        this._assessmentTargetName = config.assessmentTargetName;
        this._resourceGroupArn = config.resourceGroupArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // assessment_target_name - computed: true, optional: true, required: false
    private _assessmentTargetName?: string; 
    public get assessmentTargetName() {
        return this.getStringAttribute('assessment_target_name');
    }
    public set assessmentTargetName(value: string) {
        this._assessmentTargetName = value;
    }
    public resetAssessmentTargetName() {
        this._assessmentTargetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assessmentTargetNameInput() {
        return this._assessmentTargetName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_group_arn - computed: true, optional: true, required: false
    private _resourceGroupArn?: string; 
    public get resourceGroupArn() {
        return this.getStringAttribute('resource_group_arn');
    }
    public set resourceGroupArn(value: string) {
        this._resourceGroupArn = value;
    }
    public resetResourceGroupArn() {
        this._resourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceGroupArnInput() {
        return this._resourceGroupArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assessment_target_name: cdktn.stringToTerraform(this._assessmentTargetName),
            resource_group_arn: cdktn.stringToTerraform(this._resourceGroupArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assessment_target_name: {
                value: cdktn.stringToHclTerraform(this._assessmentTargetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_group_arn: {
                value: cdktn.stringToHclTerraform(this._resourceGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAssessmentTarget {
}
