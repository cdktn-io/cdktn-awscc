// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSyncConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the branch of the repository from which resources are to be synchronized,
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#branch CcSyncConfiguration#branch}
    */
    readonly branch: string;
    /**
    * The source provider repository path of the sync configuration file of the respective SyncType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#config_file CcSyncConfiguration#config_file}
    */
    readonly configFile: string;
    /**
    * Whether to enable or disable publishing of deployment status to source providers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CcSyncConfiguration#publish_deployment_status}
    */
    readonly publishDeploymentStatus?: string;
    /**
    * A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#repository_link_id CcSyncConfiguration#repository_link_id}
    */
    readonly repositoryLinkId: string;
    /**
    * The name of the resource that is being synchronized to the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#resource_name CcSyncConfiguration#resource_name}
    */
    readonly resourceName: string;
    /**
    * The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#role_arn CcSyncConfiguration#role_arn}
    */
    readonly roleArn: string;
    /**
    * The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#sync_type CcSyncConfiguration#sync_type}
    */
    readonly syncType: string;
    /**
    * When to trigger Git sync to begin the stack update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CcSyncConfiguration#trigger_resource_update_on}
    */
    readonly triggerResourceUpdateOn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}
*/
export class CcSyncConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codestarconnections_sync_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSyncConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSyncConfiguration to import
    * @param importFromId The id of the existing CcSyncConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSyncConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codestarconnections_sync_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSyncConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSyncConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codestarconnections_sync_configuration',
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
        this._branch = config.branch;
        this._configFile = config.configFile;
        this._publishDeploymentStatus = config.publishDeploymentStatus;
        this._repositoryLinkId = config.repositoryLinkId;
        this._resourceName = config.resourceName;
        this._roleArn = config.roleArn;
        this._syncType = config.syncType;
        this._triggerResourceUpdateOn = config.triggerResourceUpdateOn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // branch - computed: false, optional: false, required: true
    private _branch?: string; 
    public get branch() {
        return this.getStringAttribute('branch');
    }
    public set branch(value: string) {
        this._branch = value;
    }
    // Temporarily expose input value. Use with caution.
    public get branchInput() {
        return this._branch;
    }

    // config_file - computed: false, optional: false, required: true
    private _configFile?: string; 
    public get configFile() {
        return this.getStringAttribute('config_file');
    }
    public set configFile(value: string) {
        this._configFile = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configFileInput() {
        return this._configFile;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // provider_type - computed: true, optional: false, required: false
    public get providerType() {
        return this.getStringAttribute('provider_type');
    }

    // publish_deployment_status - computed: true, optional: true, required: false
    private _publishDeploymentStatus?: string; 
    public get publishDeploymentStatus() {
        return this.getStringAttribute('publish_deployment_status');
    }
    public set publishDeploymentStatus(value: string) {
        this._publishDeploymentStatus = value;
    }
    public resetPublishDeploymentStatus() {
        this._publishDeploymentStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishDeploymentStatusInput() {
        return this._publishDeploymentStatus;
    }

    // repository_link_id - computed: false, optional: false, required: true
    private _repositoryLinkId?: string; 
    public get repositoryLinkId() {
        return this.getStringAttribute('repository_link_id');
    }
    public set repositoryLinkId(value: string) {
        this._repositoryLinkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryLinkIdInput() {
        return this._repositoryLinkId;
    }

    // repository_name - computed: true, optional: false, required: false
    public get repositoryName() {
        return this.getStringAttribute('repository_name');
    }

    // resource_name - computed: false, optional: false, required: true
    private _resourceName?: string; 
    public get resourceName() {
        return this.getStringAttribute('resource_name');
    }
    public set resourceName(value: string) {
        this._resourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceNameInput() {
        return this._resourceName;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // sync_type - computed: false, optional: false, required: true
    private _syncType?: string; 
    public get syncType() {
        return this.getStringAttribute('sync_type');
    }
    public set syncType(value: string) {
        this._syncType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get syncTypeInput() {
        return this._syncType;
    }

    // trigger_resource_update_on - computed: true, optional: true, required: false
    private _triggerResourceUpdateOn?: string; 
    public get triggerResourceUpdateOn() {
        return this.getStringAttribute('trigger_resource_update_on');
    }
    public set triggerResourceUpdateOn(value: string) {
        this._triggerResourceUpdateOn = value;
    }
    public resetTriggerResourceUpdateOn() {
        this._triggerResourceUpdateOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerResourceUpdateOnInput() {
        return this._triggerResourceUpdateOn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            branch: cdktn.stringToTerraform(this._branch),
            config_file: cdktn.stringToTerraform(this._configFile),
            publish_deployment_status: cdktn.stringToTerraform(this._publishDeploymentStatus),
            repository_link_id: cdktn.stringToTerraform(this._repositoryLinkId),
            resource_name: cdktn.stringToTerraform(this._resourceName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            sync_type: cdktn.stringToTerraform(this._syncType),
            trigger_resource_update_on: cdktn.stringToTerraform(this._triggerResourceUpdateOn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            branch: {
                value: cdktn.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config_file: {
                value: cdktn.stringToHclTerraform(this._configFile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publish_deployment_status: {
                value: cdktn.stringToHclTerraform(this._publishDeploymentStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_link_id: {
                value: cdktn.stringToHclTerraform(this._repositoryLinkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_name: {
                value: cdktn.stringToHclTerraform(this._resourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_type: {
                value: cdktn.stringToHclTerraform(this._syncType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            trigger_resource_update_on: {
                value: cdktn.stringToHclTerraform(this._triggerResourceUpdateOn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSyncConfiguration {
}
