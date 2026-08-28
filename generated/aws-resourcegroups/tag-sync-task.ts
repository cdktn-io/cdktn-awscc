// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTagSyncTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#group CcTagSyncTask#group}
    */
    readonly group: string;
    /**
    * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#role_arn CcTagSyncTask#role_arn}
    */
    readonly roleArn: string;
    /**
    * The tag key. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_key CcTagSyncTask#tag_key}
    */
    readonly tagKey: string;
    /**
    * The tag value. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_value CcTagSyncTask#tag_value}
    */
    readonly tagValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task awscc_resourcegroups_tag_sync_task}
*/
export class CcTagSyncTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_resourcegroups_tag_sync_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTagSyncTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTagSyncTask to import
    * @param importFromId The id of the existing CcTagSyncTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTagSyncTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resourcegroups_tag_sync_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task awscc_resourcegroups_tag_sync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTagSyncTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcTagSyncTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_resourcegroups_tag_sync_task',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._group = config.group;
        this._roleArn = config.roleArn;
        this._tagKey = config.tagKey;
        this._tagValue = config.tagValue;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group - computed: false, optional: false, required: true
    private _group?: string; 
    public get group() {
        return this.getStringAttribute('group');
    }
    public set group(value: string) {
        this._group = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group;
    }

    // group_arn - computed: true, optional: false, required: false
    public get groupArn() {
        return this.getStringAttribute('group_arn');
    }

    // group_name - computed: true, optional: false, required: false
    public get groupName() {
        return this.getStringAttribute('group_name');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tag_key - computed: false, optional: false, required: true
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_value - computed: false, optional: false, required: true
    private _tagValue?: string; 
    public get tagValue() {
        return this.getStringAttribute('tag_value');
    }
    public set tagValue(value: string) {
        this._tagValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueInput() {
        return this._tagValue;
    }

    // task_arn - computed: true, optional: false, required: false
    public get taskArn() {
        return this.getStringAttribute('task_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group: cdktn.stringToTerraform(this._group),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tag_key: cdktn.stringToTerraform(this._tagKey),
            tag_value: cdktn.stringToTerraform(this._tagValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group: {
                value: cdktn.stringToHclTerraform(this._group),
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
            tag_key: {
                value: cdktn.stringToHclTerraform(this._tagKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_value: {
                value: cdktn.stringToHclTerraform(this._tagValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTagSyncTask {
}
