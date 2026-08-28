// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssetProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier of the parent Agent Space. The asset is created as a child of this agent space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#agent_space_id CcAsset#agent_space_id}
    */
    readonly agentSpaceId: string;
    /**
    * The type of asset. The Asset API treats this as an open string; call ListAssetTypes for the current authoritative set of supported types. As of launch, customer-creatable types include skill, agents_md, and attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#asset_type CcAsset#asset_type}
    */
    readonly assetType: string;
    /**
    * Inline file list. Mutually exclusive with Zip; enforced by the handler at Create/Update time. Write-only: not repopulated by Read.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#files CcAsset#files}
    */
    readonly files?: CcAsset.AssetFileProperty[] | cdktn.IResolvable;
    /**
    * Asset metadata document. Required and optional keys depend on AssetType. Values may be strings, numbers, booleans, or lists of any of those - validated server-side; see the public Asset API docs for the per-type metadata schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#metadata CcAsset#metadata}
    */
    readonly metadata?: string;
    /**
    * Base64-encoded zip bundle containing all files for the asset. Mutually exclusive with Files; enforced by the handler at Create/Update time. Write-only: not repopulated by Read. Server treats a zip as 'replace all files' (max 6 MiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#zip CcAsset#zip}
    */
    readonly zip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset awscc_devopsagent_asset}
*/
export class CcAsset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsagent_asset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAsset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAsset to import
    * @param importFromId The id of the existing CcAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAsset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_asset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset awscc_devopsagent_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssetProps
    */
    public constructor(scope: Construct, id: string, config: CcAssetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsagent_asset',
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
        this._agentSpaceId = config.agentSpaceId;
        this._assetType = config.assetType;
        this._files.internalValue = config.files;
        this._metadata = config.metadata;
        this._zip = config.zip;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_space_id - computed: false, optional: false, required: true
    private _agentSpaceId?: string; 
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }
    public set agentSpaceId(value: string) {
        this._agentSpaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentSpaceIdInput() {
        return this._agentSpaceId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // asset_id - computed: true, optional: false, required: false
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }

    // asset_type - computed: false, optional: false, required: true
    private _assetType?: string; 
    public get assetType() {
        return this.getStringAttribute('asset_type');
    }
    public set assetType(value: string) {
        this._assetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assetTypeInput() {
        return this._assetType;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // files - computed: true, optional: true, required: false
    private _files = new CcAsset.AssetFilePropertyList(this, "files", false);
    public get files() {
        return this._files;
    }
    public putFiles(value: CcAsset.AssetFileProperty[] | cdktn.IResolvable) {
        this._files.internalValue = value;
    }
    public resetFiles() {
        this._files.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesInput() {
        return this._files.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: string; 
    public get metadata() {
        return this.getStringAttribute('metadata');
    }
    public set metadata(value: string) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getNumberAttribute('version');
    }

    // zip - computed: true, optional: true, required: false
    private _zip?: string; 
    public get zip() {
        return this.getStringAttribute('zip');
    }
    public set zip(value: string) {
        this._zip = value;
    }
    public resetZip() {
        this._zip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zipInput() {
        return this._zip;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
            asset_type: cdktn.stringToTerraform(this._assetType),
            files: cdktn.listMapper(ccAssetAssetFilePropertyToTerraform, false)(this._files.internalValue),
            metadata: cdktn.stringToTerraform(this._metadata),
            zip: cdktn.stringToTerraform(this._zip),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_space_id: {
                value: cdktn.stringToHclTerraform(this._agentSpaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asset_type: {
                value: cdktn.stringToHclTerraform(this._assetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            files: {
                value: cdktn.listMapperHcl(ccAssetAssetFilePropertyToHclTerraform, false)(this._files.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.AssetFilePropertyList",
            },
            metadata: {
                value: cdktn.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zip: {
                value: cdktn.stringToHclTerraform(this._zip),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssetAssetFilePropertyToTerraform(struct?: CcAsset.AssetFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_bytes: cdktn.stringToTerraform(struct!.contentBytes),
        content_text: cdktn.stringToTerraform(struct!.contentText),
        metadata: cdktn.stringToTerraform(struct!.metadata),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccAssetAssetFilePropertyToHclTerraform(struct?: CcAsset.AssetFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_bytes: {
            value: cdktn.stringToHclTerraform(struct!.contentBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_text: {
            value: cdktn.stringToHclTerraform(struct!.contentText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata: {
            value: cdktn.stringToHclTerraform(struct!.metadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAsset {
export interface AssetFileProperty {
    /**
    * Base64-encoded binary contents of the file. Mutually exclusive with ContentText (max 6 MiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#content_bytes CcAsset#content_bytes}
    */
    readonly contentBytes?: string;
    /**
    * UTF-8 text contents of the file. Mutually exclusive with ContentBytes (max 1.5 MiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#content_text CcAsset#content_text}
    */
    readonly contentText?: string;
    /**
    * Per-file metadata document. Values may be strings, numbers, booleans, or lists of any of those (validated server-side).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#metadata CcAsset#metadata}
    */
    readonly metadata?: string;
    /**
    * Path of this file within the asset bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_asset#path CcAsset#path}
    */
    readonly path?: string;
}
export class AssetFilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): AssetFileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentBytes = this._contentBytes;
        }
        if (this._contentText !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentText = this._contentText;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetFileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentBytes = undefined;
            this._contentText = undefined;
            this._metadata = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentBytes = value.contentBytes;
            this._contentText = value.contentText;
            this._metadata = value.metadata;
            this._path = value.path;
        }
    }

    // content_bytes - computed: true, optional: true, required: false
    private _contentBytes?: string; 
    public get contentBytes() {
        return this.getStringAttribute('content_bytes');
    }
    public set contentBytes(value: string) {
        this._contentBytes = value;
    }
    public resetContentBytes() {
        this._contentBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentBytesInput() {
        return this._contentBytes;
    }

    // content_text - computed: true, optional: true, required: false
    private _contentText?: string; 
    public get contentText() {
        return this.getStringAttribute('content_text');
    }
    public set contentText(value: string) {
        this._contentText = value;
    }
    public resetContentText() {
        this._contentText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTextInput() {
        return this._contentText;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: string; 
    public get metadata() {
        return this.getStringAttribute('metadata');
    }
    public set metadata(value: string) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class AssetFilePropertyList extends cdktn.ComplexList {
    public internalValue? : AssetFileProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): AssetFilePropertyOutputReference {
        return new AssetFilePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
