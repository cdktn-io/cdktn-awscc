// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSceneProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of capabilities that the scene uses to render.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#capabilities CcScene#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * The relative path that specifies the location of the content definition file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#content_location CcScene#content_location}
    */
    readonly contentLocation: string;
    /**
    * The description of the scene.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#description CcScene#description}
    */
    readonly description?: string;
    /**
    * The ID of the scene.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#scene_id CcScene#scene_id}
    */
    readonly sceneId: string;
    /**
    * A key-value pair of scene metadata for the scene.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#scene_metadata CcScene#scene_metadata}
    */
    readonly sceneMetadata?: { [key: string]: string };
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#tags CcScene#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The ID of the scene.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#workspace_id CcScene#workspace_id}
    */
    readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene awscc_iottwinmaker_scene}
*/
export class CcScene extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iottwinmaker_scene";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScene resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScene to import
    * @param importFromId The id of the existing CcScene that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScene to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iottwinmaker_scene", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene awscc_iottwinmaker_scene} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSceneProps
    */
    public constructor(scope: Construct, id: string, config: CcSceneProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iottwinmaker_scene',
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
        this._capabilities = config.capabilities;
        this._contentLocation = config.contentLocation;
        this._description = config.description;
        this._sceneId = config.sceneId;
        this._sceneMetadata = config.sceneMetadata;
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

    // capabilities - computed: true, optional: true, required: false
    private _capabilities?: string[]; 
    public get capabilities() {
        return cdktn.Fn.tolist(this.getListAttribute('capabilities'));
    }
    public set capabilities(value: string[]) {
        this._capabilities = value;
    }
    public resetCapabilities() {
        this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities;
    }

    // content_location - computed: false, optional: false, required: true
    private _contentLocation?: string; 
    public get contentLocation() {
        return this.getStringAttribute('content_location');
    }
    public set contentLocation(value: string) {
        this._contentLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentLocationInput() {
        return this._contentLocation;
    }

    // creation_date_time - computed: true, optional: false, required: false
    public get creationDateTime() {
        return this.getStringAttribute('creation_date_time');
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

    // generated_scene_metadata - computed: true, optional: false, required: false
    private _generatedSceneMetadata = new cdktn.StringMap(this, "generated_scene_metadata");
    public get generatedSceneMetadata() {
        return this._generatedSceneMetadata;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scene_id - computed: false, optional: false, required: true
    private _sceneId?: string; 
    public get sceneId() {
        return this.getStringAttribute('scene_id');
    }
    public set sceneId(value: string) {
        this._sceneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sceneIdInput() {
        return this._sceneId;
    }

    // scene_metadata - computed: true, optional: true, required: false
    private _sceneMetadata?: { [key: string]: string }; 
    public get sceneMetadata() {
        return this.getStringMapAttribute('scene_metadata');
    }
    public set sceneMetadata(value: { [key: string]: string }) {
        this._sceneMetadata = value;
    }
    public resetSceneMetadata() {
        this._sceneMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sceneMetadataInput() {
        return this._sceneMetadata;
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
            capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capabilities),
            content_location: cdktn.stringToTerraform(this._contentLocation),
            description: cdktn.stringToTerraform(this._description),
            scene_id: cdktn.stringToTerraform(this._sceneId),
            scene_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._sceneMetadata),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            workspace_id: cdktn.stringToTerraform(this._workspaceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capabilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capabilities),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            content_location: {
                value: cdktn.stringToHclTerraform(this._contentLocation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scene_id: {
                value: cdktn.stringToHclTerraform(this._sceneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scene_metadata: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._sceneMetadata),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
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

export namespace CcScene {
}
