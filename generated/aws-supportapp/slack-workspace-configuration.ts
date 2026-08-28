// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSlackWorkspaceConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The team ID in Slack, which uniquely identifies a workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration#team_id CcSlackWorkspaceConfiguration#team_id}
    */
    readonly teamId: string;
    /**
    * An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration#version_id CcSlackWorkspaceConfiguration#version_id}
    */
    readonly versionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration awscc_supportapp_slack_workspace_configuration}
*/
export class CcSlackWorkspaceConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_supportapp_slack_workspace_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSlackWorkspaceConfiguration to import
    * @param importFromId The id of the existing CcSlackWorkspaceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSlackWorkspaceConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_supportapp_slack_workspace_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_slack_workspace_configuration awscc_supportapp_slack_workspace_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSlackWorkspaceConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSlackWorkspaceConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_supportapp_slack_workspace_configuration',
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
        this._teamId = config.teamId;
        this._versionId = config.versionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // team_id - computed: false, optional: false, required: true
    private _teamId?: string; 
    public get teamId() {
        return this.getStringAttribute('team_id');
    }
    public set teamId(value: string) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamIdInput() {
        return this._teamId;
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string; 
    public get versionId() {
        return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
        this._versionId = value;
    }
    public resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
        return this._versionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            team_id: cdktn.stringToTerraform(this._teamId),
            version_id: cdktn.stringToTerraform(this._versionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            team_id: {
                value: cdktn.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_id: {
                value: cdktn.stringToHclTerraform(this._versionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSlackWorkspaceConfiguration {
}
