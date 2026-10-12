// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAdConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#media_tailor_playback_configurations CcAdConfiguration#media_tailor_playback_configurations}
    */
    readonly mediaTailorPlaybackConfigurations: CcAdConfiguration.MediaTailorPlaybackConfigurationsProperty[] | cdktn.IResolvable;
    /**
    * Ad configuration name. The value does not need to be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#name CcAdConfiguration#name}
    */
    readonly name?: string;
    /**
    * Configuration for the post-roll ad break to use for this ad configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#post_roll_configuration CcAdConfiguration#post_roll_configuration}
    */
    readonly postRollConfiguration?: CcAdConfiguration.PostRollConfigurationProperty;
    /**
    * Tags attached to the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#tags CcAdConfiguration#tags}
    */
    readonly tags?: CcAdConfiguration.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration awscc_ivs_ad_configuration}
*/
export class CcAdConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_ad_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAdConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAdConfiguration to import
    * @param importFromId The id of the existing CcAdConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAdConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_ad_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration awscc_ivs_ad_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAdConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcAdConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_ad_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._mediaTailorPlaybackConfigurations.internalValue = config.mediaTailorPlaybackConfigurations;
        this._name = config.name;
        this._postRollConfiguration.internalValue = config.postRollConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // media_tailor_playback_configurations - computed: false, optional: false, required: true
    private _mediaTailorPlaybackConfigurations = new CcAdConfiguration.MediaTailorPlaybackConfigurationsPropertyList(this, "media_tailor_playback_configurations", false);
    public get mediaTailorPlaybackConfigurations() {
        return this._mediaTailorPlaybackConfigurations;
    }
    public putMediaTailorPlaybackConfigurations(value: CcAdConfiguration.MediaTailorPlaybackConfigurationsProperty[] | cdktn.IResolvable) {
        this._mediaTailorPlaybackConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaTailorPlaybackConfigurationsInput() {
        return this._mediaTailorPlaybackConfigurations.internalValue;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // post_roll_configuration - computed: true, optional: true, required: false
    private _postRollConfiguration = new CcAdConfiguration.PostRollConfigurationPropertyOutputReference(this, "post_roll_configuration");
    public get postRollConfiguration() {
        return this._postRollConfiguration;
    }
    public putPostRollConfiguration(value: CcAdConfiguration.PostRollConfigurationProperty) {
        this._postRollConfiguration.internalValue = value;
    }
    public resetPostRollConfiguration() {
        this._postRollConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postRollConfigurationInput() {
        return this._postRollConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAdConfiguration.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAdConfiguration.TagsProperty[] | cdktn.IResolvable) {
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
            media_tailor_playback_configurations: cdktn.listMapper(ccAdConfigurationMediaTailorPlaybackConfigurationsPropertyToTerraform, false)(this._mediaTailorPlaybackConfigurations.internalValue),
            name: cdktn.stringToTerraform(this._name),
            post_roll_configuration: ccAdConfigurationPostRollConfigurationPropertyToTerraform(this._postRollConfiguration.internalValue),
            tags: cdktn.listMapper(ccAdConfigurationTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            media_tailor_playback_configurations: {
                value: cdktn.listMapperHcl(ccAdConfigurationMediaTailorPlaybackConfigurationsPropertyToHclTerraform, false)(this._mediaTailorPlaybackConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAdConfiguration.MediaTailorPlaybackConfigurationsPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            post_roll_configuration: {
                value: ccAdConfigurationPostRollConfigurationPropertyToHclTerraform(this._postRollConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAdConfiguration.PostRollConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAdConfigurationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAdConfiguration.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAdConfigurationMediaTailorPlaybackConfigurationsPropertyToTerraform(struct?: CcAdConfiguration.MediaTailorPlaybackConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        playback_configuration_arn: cdktn.stringToTerraform(struct!.playbackConfigurationArn),
    }
}


export function ccAdConfigurationMediaTailorPlaybackConfigurationsPropertyToHclTerraform(struct?: CcAdConfiguration.MediaTailorPlaybackConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        playback_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.playbackConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAdConfigurationPostRollConfigurationPropertyToTerraform(struct?: CcAdConfiguration.PostRollConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAdConfigurationPostRollConfigurationPropertyToHclTerraform(struct?: CcAdConfiguration.PostRollConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.durationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAdConfigurationTagsPropertyToTerraform(struct?: CcAdConfiguration.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAdConfigurationTagsPropertyToHclTerraform(struct?: CcAdConfiguration.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcAdConfiguration {
export interface MediaTailorPlaybackConfigurationsProperty {
    /**
    * ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#playback_configuration_arn CcAdConfiguration#playback_configuration_arn}
    */
    readonly playbackConfigurationArn?: string;
}
export class MediaTailorPlaybackConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MediaTailorPlaybackConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._playbackConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.playbackConfigurationArn = this._playbackConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaTailorPlaybackConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._playbackConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._playbackConfigurationArn = value.playbackConfigurationArn;
        }
    }

    // playback_configuration_arn - computed: true, optional: true, required: false
    private _playbackConfigurationArn?: string; 
    public get playbackConfigurationArn() {
        return this.getStringAttribute('playback_configuration_arn');
    }
    public set playbackConfigurationArn(value: string) {
        this._playbackConfigurationArn = value;
    }
    public resetPlaybackConfigurationArn() {
        this._playbackConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playbackConfigurationArnInput() {
        return this._playbackConfigurationArn;
    }
}

export class MediaTailorPlaybackConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : MediaTailorPlaybackConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): MediaTailorPlaybackConfigurationsPropertyOutputReference {
        return new MediaTailorPlaybackConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PostRollConfigurationProperty {
    /**
    * Duration of the post-roll ad break, in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#duration_seconds CcAdConfiguration#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Whether the post-roll ad configuration is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#enabled CcAdConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class PostRollConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostRollConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationSeconds = this._durationSeconds;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostRollConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationSeconds = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationSeconds = value.durationSeconds;
            this._enabled = value.enabled;
        }
    }

    // duration_seconds - computed: true, optional: true, required: false
    private _durationSeconds?: number; 
    public get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number) {
        this._durationSeconds = value;
    }
    public resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
        return this._durationSeconds;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#key CcAdConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ivs_ad_configuration#value CcAdConfiguration#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
