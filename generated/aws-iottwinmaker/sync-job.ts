// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSyncJobProps extends cdktn.TerraformMetaArguments {
    /**
    * The IAM Role that execute SyncJob.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job#sync_role CcSyncJob#sync_role}
    */
    readonly syncRole: string;
    /**
    * The source of the SyncJob.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job#sync_source CcSyncJob#sync_source}
    */
    readonly syncSource: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job#tags CcSyncJob#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The ID of the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job#workspace_id CcSyncJob#workspace_id}
    */
    readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job awscc_iottwinmaker_sync_job}
*/
export class CcSyncJob extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iottwinmaker_sync_job";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSyncJob resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSyncJob to import
    * @param importFromId The id of the existing CcSyncJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSyncJob to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iottwinmaker_sync_job", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iottwinmaker_sync_job awscc_iottwinmaker_sync_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSyncJobProps
    */
    public constructor(scope: Construct, id: string, config: CcSyncJobProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iottwinmaker_sync_job',
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
        this._syncRole = config.syncRole;
        this._syncSource = config.syncSource;
        this._tags = config.tags;
        this._workspaceId = config.workspaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_date_time - computed: true, optional: false, required: false
    public get creationDateTime() {
        return this.getStringAttribute('creation_date_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // sync_role - computed: false, optional: false, required: true
    private _syncRole?: string; 
    public get syncRole() {
        return this.getStringAttribute('sync_role');
    }
    public set syncRole(value: string) {
        this._syncRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get syncRoleInput() {
        return this._syncRole;
    }

    // sync_source - computed: false, optional: false, required: true
    private _syncSource?: string; 
    public get syncSource() {
        return this.getStringAttribute('sync_source');
    }
    public set syncSource(value: string) {
        this._syncSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get syncSourceInput() {
        return this._syncSource;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // update_date_time - computed: true, optional: false, required: false
    public get updateDateTime() {
        return this.getStringAttribute('update_date_time');
    }

    // workspace_id - computed: false, optional: false, required: true
    private _workspaceId?: string; 
    public get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }
    public set workspaceId(value: string) {
        this._workspaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceIdInput() {
        return this._workspaceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            sync_role: cdktn.stringToTerraform(this._syncRole),
            sync_source: cdktn.stringToTerraform(this._syncSource),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            workspace_id: cdktn.stringToTerraform(this._workspaceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            sync_role: {
                value: cdktn.stringToHclTerraform(this._syncRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_source: {
                value: cdktn.stringToHclTerraform(this._syncSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            workspace_id: {
                value: cdktn.stringToHclTerraform(this._workspaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSyncJob {
}
