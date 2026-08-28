// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLinkProps extends cdktn.TerraformMetaArguments {
    /**
    * The Bandwidth for the link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#bandwidth CcLink#bandwidth}
    */
    readonly bandwidth: CcLink.BandwidthProperty;
    /**
    * The description of the link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#description CcLink#description}
    */
    readonly description?: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#global_network_id CcLink#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The provider of the link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#provider_name CcLink#provider_name}
    */
    readonly providerName?: string;
    /**
    * The ID of the site
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#site_id CcLink#site_id}
    */
    readonly siteId: string;
    /**
    * The tags for the link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#tags CcLink#tags}
    */
    readonly tags?: CcLink.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of the link.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#type CcLink#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link awscc_networkmanager_link}
*/
export class CcLink extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_link";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLink resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLink to import
    * @param importFromId The id of the existing CcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLink to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_link", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link awscc_networkmanager_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLinkProps
    */
    public constructor(scope: Construct, id: string, config: CcLinkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_link',
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
        this._bandwidth.internalValue = config.bandwidth;
        this._description = config.description;
        this._globalNetworkId = config.globalNetworkId;
        this._providerName = config.providerName;
        this._siteId = config.siteId;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bandwidth - computed: false, optional: false, required: true
    private _bandwidth = new CcLink.BandwidthPropertyOutputReference(this, "bandwidth");
    public get bandwidth() {
        return this._bandwidth;
    }
    public putBandwidth(value: CcLink.BandwidthProperty) {
        this._bandwidth.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
        return this._bandwidth.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // global_network_id - computed: false, optional: false, required: true
    private _globalNetworkId?: string; 
    public get globalNetworkId() {
        return this.getStringAttribute('global_network_id');
    }
    public set globalNetworkId(value: string) {
        this._globalNetworkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalNetworkIdInput() {
        return this._globalNetworkId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // link_arn - computed: true, optional: false, required: false
    public get linkArn() {
        return this.getStringAttribute('link_arn');
    }

    // link_id - computed: true, optional: false, required: false
    public get linkId() {
        return this.getStringAttribute('link_id');
    }

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    public resetProviderName() {
        this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // site_id - computed: false, optional: false, required: true
    private _siteId?: string; 
    public get siteId() {
        return this.getStringAttribute('site_id');
    }
    public set siteId(value: string) {
        this._siteId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get siteIdInput() {
        return this._siteId;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLink.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLink.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bandwidth: ccLinkBandwidthPropertyToTerraform(this._bandwidth.internalValue),
            description: cdktn.stringToTerraform(this._description),
            global_network_id: cdktn.stringToTerraform(this._globalNetworkId),
            provider_name: cdktn.stringToTerraform(this._providerName),
            site_id: cdktn.stringToTerraform(this._siteId),
            tags: cdktn.listMapper(ccLinkTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bandwidth: {
                value: ccLinkBandwidthPropertyToHclTerraform(this._bandwidth.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLink.BandwidthProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_network_id: {
                value: cdktn.stringToHclTerraform(this._globalNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            provider_name: {
                value: cdktn.stringToHclTerraform(this._providerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktn.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLinkTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLink.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLinkBandwidthPropertyToTerraform(struct?: CcLink.BandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        download_speed: cdktn.numberToTerraform(struct!.downloadSpeed),
        upload_speed: cdktn.numberToTerraform(struct!.uploadSpeed),
    }
}


export function ccLinkBandwidthPropertyToHclTerraform(struct?: CcLink.BandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        download_speed: {
            value: cdktn.numberToHclTerraform(struct!.downloadSpeed),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        upload_speed: {
            value: cdktn.numberToHclTerraform(struct!.uploadSpeed),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLinkTagPropertyToTerraform(struct?: CcLink.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLinkTagPropertyToHclTerraform(struct?: CcLink.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLink {
export interface BandwidthProperty {
    /**
    * Download speed in Mbps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#download_speed CcLink#download_speed}
    */
    readonly downloadSpeed?: number;
    /**
    * Upload speed in Mbps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#upload_speed CcLink#upload_speed}
    */
    readonly uploadSpeed?: number;
}
export class BandwidthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BandwidthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._downloadSpeed !== undefined) {
            hasAnyValues = true;
            internalValueResult.downloadSpeed = this._downloadSpeed;
        }
        if (this._uploadSpeed !== undefined) {
            hasAnyValues = true;
            internalValueResult.uploadSpeed = this._uploadSpeed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BandwidthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._downloadSpeed = undefined;
            this._uploadSpeed = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._downloadSpeed = value.downloadSpeed;
            this._uploadSpeed = value.uploadSpeed;
        }
    }

    // download_speed - computed: true, optional: true, required: false
    private _downloadSpeed?: number; 
    public get downloadSpeed() {
        return this.getNumberAttribute('download_speed');
    }
    public set downloadSpeed(value: number) {
        this._downloadSpeed = value;
    }
    public resetDownloadSpeed() {
        this._downloadSpeed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get downloadSpeedInput() {
        return this._downloadSpeed;
    }

    // upload_speed - computed: true, optional: true, required: false
    private _uploadSpeed?: number; 
    public get uploadSpeed() {
        return this.getNumberAttribute('upload_speed');
    }
    public set uploadSpeed(value: number) {
        this._uploadSpeed = value;
    }
    public resetUploadSpeed() {
        this._uploadSpeed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadSpeedInput() {
        return this._uploadSpeed;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#key CcLink#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_link#value CcLink#value}
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
