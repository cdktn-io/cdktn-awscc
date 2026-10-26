// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotifyConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#default_template_id CcNotifyConfiguration#default_template_id}
    */
    readonly defaultTemplateId?: string;
    /**
    * By default this is set to false. When set to true the notify configuration can't be deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled CcNotifyConfiguration#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * The display name to associate with the notify configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#display_name CcNotifyConfiguration#display_name}
    */
    readonly displayName: string;
    /**
    * An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#enabled_channels CcNotifyConfiguration#enabled_channels}
    */
    readonly enabledChannels: string[];
    /**
    * An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#enabled_countries CcNotifyConfiguration#enabled_countries}
    */
    readonly enabledCountries?: string[];
    /**
    * The identifier of the pool to associate with the notify configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#pool_id CcNotifyConfiguration#pool_id}
    */
    readonly poolId?: string;
    /**
    * An array of tags (key and value pairs) associated with the notify configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#tags CcNotifyConfiguration#tags}
    */
    readonly tags?: CcNotifyConfiguration.TagsProperty[] | cdktn.IResolvable;
    /**
    * The use case for the notify configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#use_case CcNotifyConfiguration#use_case}
    */
    readonly useCase: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}
*/
export class CcNotifyConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_smsvoice_notify_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotifyConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotifyConfiguration to import
    * @param importFromId The id of the existing CcNotifyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotifyConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_notify_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotifyConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcNotifyConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_smsvoice_notify_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._defaultTemplateId = config.defaultTemplateId;
        this._deletionProtectionEnabled = config.deletionProtectionEnabled;
        this._displayName = config.displayName;
        this._enabledChannels = config.enabledChannels;
        this._enabledCountries = config.enabledCountries;
        this._poolId = config.poolId;
        this._tags.internalValue = config.tags;
        this._useCase = config.useCase;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // default_template_id - computed: true, optional: true, required: false
    private _defaultTemplateId?: string; 
    public get defaultTemplateId() {
        return this.getStringAttribute('default_template_id');
    }
    public set defaultTemplateId(value: string) {
        this._defaultTemplateId = value;
    }
    public resetDefaultTemplateId() {
        this._defaultTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTemplateIdInput() {
        return this._defaultTemplateId;
    }

    // deletion_protection_enabled - computed: true, optional: true, required: false
    private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get deletionProtectionEnabled() {
        return this.getBooleanAttribute('deletion_protection_enabled');
    }
    public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._deletionProtectionEnabled = value;
    }
    public resetDeletionProtectionEnabled() {
        this._deletionProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionEnabledInput() {
        return this._deletionProtectionEnabled;
    }

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // enabled_channels - computed: false, optional: false, required: true
    private _enabledChannels?: string[]; 
    public get enabledChannels() {
        return this.getListAttribute('enabled_channels');
    }
    public set enabledChannels(value: string[]) {
        this._enabledChannels = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledChannelsInput() {
        return this._enabledChannels;
    }

    // enabled_countries - computed: true, optional: true, required: false
    private _enabledCountries?: string[]; 
    public get enabledCountries() {
        return this.getListAttribute('enabled_countries');
    }
    public set enabledCountries(value: string[]) {
        this._enabledCountries = value;
    }
    public resetEnabledCountries() {
        this._enabledCountries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledCountriesInput() {
        return this._enabledCountries;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notify_configuration_arn - computed: true, optional: false, required: false
    public get notifyConfigurationArn() {
        return this.getStringAttribute('notify_configuration_arn');
    }

    // notify_configuration_id - computed: true, optional: false, required: false
    public get notifyConfigurationId() {
        return this.getStringAttribute('notify_configuration_id');
    }

    // pool_id - computed: true, optional: true, required: false
    private _poolId?: string; 
    public get poolId() {
        return this.getStringAttribute('pool_id');
    }
    public set poolId(value: string) {
        this._poolId = value;
    }
    public resetPoolId() {
        this._poolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get poolIdInput() {
        return this._poolId;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNotifyConfiguration.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNotifyConfiguration.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tier - computed: true, optional: false, required: false
    public get tier() {
        return this.getStringAttribute('tier');
    }

    // tier_upgrade_status - computed: true, optional: false, required: false
    public get tierUpgradeStatus() {
        return this.getStringAttribute('tier_upgrade_status');
    }

    // use_case - computed: false, optional: false, required: true
    private _useCase?: string; 
    public get useCase() {
        return this.getStringAttribute('use_case');
    }
    public set useCase(value: string) {
        this._useCase = value;
    }
    // Temporarily expose input value. Use with caution.
    public get useCaseInput() {
        return this._useCase;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            default_template_id: cdktn.stringToTerraform(this._defaultTemplateId),
            deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
            display_name: cdktn.stringToTerraform(this._displayName),
            enabled_channels: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledChannels),
            enabled_countries: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledCountries),
            pool_id: cdktn.stringToTerraform(this._poolId),
            tags: cdktn.listMapper(ccNotifyConfigurationTagsPropertyToTerraform, false)(this._tags.internalValue),
            use_case: cdktn.stringToTerraform(this._useCase),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            default_template_id: {
                value: cdktn.stringToHclTerraform(this._defaultTemplateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_channels: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledChannels),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            enabled_countries: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledCountries),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            pool_id: {
                value: cdktn.stringToHclTerraform(this._poolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNotifyConfigurationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotifyConfiguration.TagsPropertyList",
            },
            use_case: {
                value: cdktn.stringToHclTerraform(this._useCase),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotifyConfigurationTagsPropertyToTerraform(struct?: CcNotifyConfiguration.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNotifyConfigurationTagsPropertyToHclTerraform(struct?: CcNotifyConfiguration.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcNotifyConfiguration {
export interface TagsProperty {
    /**
    * The key identifier, or name, of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#key CcNotifyConfiguration#key}
    */
    readonly key?: string;
    /**
    * The string value associated with the key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/smsvoice_notify_configuration#value CcNotifyConfiguration#value}
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
