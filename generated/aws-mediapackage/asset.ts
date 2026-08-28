// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssetProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier for the Asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#asset_id CcAsset#asset_id}
    */
    readonly assetId: string;
    /**
    * The list of egress endpoints available for the Asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#egress_endpoints CcAsset#egress_endpoints}
    */
    readonly egressEndpoints?: CcAsset.EgressEndpointProperty[] | cdktn.IResolvable;
    /**
    * The ID of the PackagingGroup for the Asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#packaging_group_id CcAsset#packaging_group_id}
    */
    readonly packagingGroupId: string;
    /**
    * The resource ID to include in SPEKE key requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#resource_id CcAsset#resource_id}
    */
    readonly resourceId?: string;
    /**
    * ARN of the source object in S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#source_arn CcAsset#source_arn}
    */
    readonly sourceArn: string;
    /**
    * The IAM role_arn used to access the source S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#source_role_arn CcAsset#source_role_arn}
    */
    readonly sourceRoleArn: string;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#tags CcAsset#tags}
    */
    readonly tags?: CcAsset.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset awscc_mediapackage_asset}
*/
export class CcAsset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediapackage_asset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAsset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAsset to import
    * @param importFromId The id of the existing CcAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAsset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackage_asset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset awscc_mediapackage_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssetProps
    */
    public constructor(scope: Construct, id: string, config: CcAssetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediapackage_asset',
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
        this._assetId = config.assetId;
        this._egressEndpoints.internalValue = config.egressEndpoints;
        this._packagingGroupId = config.packagingGroupId;
        this._resourceId = config.resourceId;
        this._sourceArn = config.sourceArn;
        this._sourceRoleArn = config.sourceRoleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // asset_id - computed: false, optional: false, required: true
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // egress_endpoints - computed: true, optional: true, required: false
    private _egressEndpoints = new CcAsset.EgressEndpointPropertyList(this, "egress_endpoints", false);
    public get egressEndpoints() {
        return this._egressEndpoints;
    }
    public putEgressEndpoints(value: CcAsset.EgressEndpointProperty[] | cdktn.IResolvable) {
        this._egressEndpoints.internalValue = value;
    }
    public resetEgressEndpoints() {
        this._egressEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressEndpointsInput() {
        return this._egressEndpoints.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // packaging_group_id - computed: false, optional: false, required: true
    private _packagingGroupId?: string; 
    public get packagingGroupId() {
        return this.getStringAttribute('packaging_group_id');
    }
    public set packagingGroupId(value: string) {
        this._packagingGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingGroupIdInput() {
        return this._packagingGroupId;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // source_arn - computed: false, optional: false, required: true
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }

    // source_role_arn - computed: false, optional: false, required: true
    private _sourceRoleArn?: string; 
    public get sourceRoleArn() {
        return this.getStringAttribute('source_role_arn');
    }
    public set sourceRoleArn(value: string) {
        this._sourceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRoleArnInput() {
        return this._sourceRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAsset.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAsset.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            asset_id: cdktn.stringToTerraform(this._assetId),
            egress_endpoints: cdktn.listMapper(ccAssetEgressEndpointPropertyToTerraform, false)(this._egressEndpoints.internalValue),
            packaging_group_id: cdktn.stringToTerraform(this._packagingGroupId),
            resource_id: cdktn.stringToTerraform(this._resourceId),
            source_arn: cdktn.stringToTerraform(this._sourceArn),
            source_role_arn: cdktn.stringToTerraform(this._sourceRoleArn),
            tags: cdktn.listMapper(ccAssetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            asset_id: {
                value: cdktn.stringToHclTerraform(this._assetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            egress_endpoints: {
                value: cdktn.listMapperHcl(ccAssetEgressEndpointPropertyToHclTerraform, false)(this._egressEndpoints.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.EgressEndpointPropertyList",
            },
            packaging_group_id: {
                value: cdktn.stringToHclTerraform(this._packagingGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_arn: {
                value: cdktn.stringToHclTerraform(this._sourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_role_arn: {
                value: cdktn.stringToHclTerraform(this._sourceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAssetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAsset.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAssetEgressEndpointPropertyToTerraform(struct?: CcAsset.EgressEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        packaging_configuration_id: cdktn.stringToTerraform(struct!.packagingConfigurationId),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccAssetEgressEndpointPropertyToHclTerraform(struct?: CcAsset.EgressEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        packaging_configuration_id: {
            value: cdktn.stringToHclTerraform(struct!.packagingConfigurationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAssetTagPropertyToTerraform(struct?: CcAsset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAssetTagPropertyToHclTerraform(struct?: CcAsset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAsset {
export interface EgressEndpointProperty {
    /**
    * The ID of the PackagingConfiguration being applied to the Asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#packaging_configuration_id CcAsset#packaging_configuration_id}
    */
    readonly packagingConfigurationId?: string;
    /**
    * The URL of the parent manifest for the repackaged Asset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#url CcAsset#url}
    */
    readonly url?: string;
}
export class EgressEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EgressEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._packagingConfigurationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.packagingConfigurationId = this._packagingConfigurationId;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EgressEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._packagingConfigurationId = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._packagingConfigurationId = value.packagingConfigurationId;
            this._url = value.url;
        }
    }

    // packaging_configuration_id - computed: true, optional: true, required: false
    private _packagingConfigurationId?: string; 
    public get packagingConfigurationId() {
        return this.getStringAttribute('packaging_configuration_id');
    }
    public set packagingConfigurationId(value: string) {
        this._packagingConfigurationId = value;
    }
    public resetPackagingConfigurationId() {
        this._packagingConfigurationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packagingConfigurationIdInput() {
        return this._packagingConfigurationId;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}

export class EgressEndpointPropertyList extends cdktn.ComplexList {
    public internalValue? : EgressEndpointProperty[] | cdktn.IResolvable

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
    public get(index: number): EgressEndpointPropertyOutputReference {
        return new EgressEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#key CcAsset#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_asset#value CcAsset#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
