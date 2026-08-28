// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProtectConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * An array of CountryRule containing the rules for the NumberCapability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#country_rule_set CcProtectConfiguration#country_rule_set}
    */
    readonly countryRuleSet?: CcProtectConfiguration.CountryRuleSetProperty;
    /**
    * When set to true deletion protection is enabled and protect configuration cannot be deleted. By default this is set to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled CcProtectConfiguration#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#tags CcProtectConfiguration#tags}
    */
    readonly tags?: CcProtectConfiguration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}
*/
export class CcProtectConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_smsvoice_protect_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProtectConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProtectConfiguration to import
    * @param importFromId The id of the existing CcProtectConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProtectConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_protect_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProtectConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcProtectConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_smsvoice_protect_configuration',
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
        this._countryRuleSet.internalValue = config.countryRuleSet;
        this._deletionProtectionEnabled = config.deletionProtectionEnabled;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // country_rule_set - computed: true, optional: true, required: false
    private _countryRuleSet = new CcProtectConfiguration.CountryRuleSetPropertyOutputReference(this, "country_rule_set");
    public get countryRuleSet() {
        return this._countryRuleSet;
    }
    public putCountryRuleSet(value: CcProtectConfiguration.CountryRuleSetProperty) {
        this._countryRuleSet.internalValue = value;
    }
    public resetCountryRuleSet() {
        this._countryRuleSet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryRuleSetInput() {
        return this._countryRuleSet.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // protect_configuration_id - computed: true, optional: false, required: false
    public get protectConfigurationId() {
        return this.getStringAttribute('protect_configuration_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProtectConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProtectConfiguration.TagProperty[] | cdktn.IResolvable) {
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
            country_rule_set: ccProtectConfigurationCountryRuleSetPropertyToTerraform(this._countryRuleSet.internalValue),
            deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
            tags: cdktn.listMapper(ccProtectConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            country_rule_set: {
                value: ccProtectConfigurationCountryRuleSetPropertyToHclTerraform(this._countryRuleSet.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProtectConfiguration.CountryRuleSetProperty",
            },
            deletion_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProtectConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcProtectConfiguration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProtectConfigurationCountryRulePropertyToTerraform(struct?: CcProtectConfiguration.CountryRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        protect_status: cdktn.stringToTerraform(struct!.protectStatus),
    }
}


export function ccProtectConfigurationCountryRulePropertyToHclTerraform(struct?: CcProtectConfiguration.CountryRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protect_status: {
            value: cdktn.stringToHclTerraform(struct!.protectStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectConfigurationSmsPropertyToTerraform(struct?: CcProtectConfiguration.SmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        protect_status: cdktn.stringToTerraform(struct!.protectStatus),
    }
}


export function ccProtectConfigurationSmsPropertyToHclTerraform(struct?: CcProtectConfiguration.SmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protect_status: {
            value: cdktn.stringToHclTerraform(struct!.protectStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectConfigurationVoicePropertyToTerraform(struct?: CcProtectConfiguration.VoiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        protect_status: cdktn.stringToTerraform(struct!.protectStatus),
    }
}


export function ccProtectConfigurationVoicePropertyToHclTerraform(struct?: CcProtectConfiguration.VoiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protect_status: {
            value: cdktn.stringToHclTerraform(struct!.protectStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectConfigurationCountryRuleSetPropertyToTerraform(struct?: CcProtectConfiguration.CountryRuleSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mms: cdktn.listMapper(ccProtectConfigurationCountryRulePropertyToTerraform, false)(struct!.mms),
        sms: cdktn.listMapper(ccProtectConfigurationSmsPropertyToTerraform, false)(struct!.sms),
        voice: cdktn.listMapper(ccProtectConfigurationVoicePropertyToTerraform, false)(struct!.voice),
    }
}


export function ccProtectConfigurationCountryRuleSetPropertyToHclTerraform(struct?: CcProtectConfiguration.CountryRuleSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mms: {
            value: cdktn.listMapperHcl(ccProtectConfigurationCountryRulePropertyToHclTerraform, false)(struct!.mms),
            isBlock: true,
            type: "set",
            storageClassType: "CountryRulePropertyList",
        },
        sms: {
            value: cdktn.listMapperHcl(ccProtectConfigurationSmsPropertyToHclTerraform, false)(struct!.sms),
            isBlock: true,
            type: "set",
            storageClassType: "SmsPropertyList",
        },
        voice: {
            value: cdktn.listMapperHcl(ccProtectConfigurationVoicePropertyToHclTerraform, false)(struct!.voice),
            isBlock: true,
            type: "set",
            storageClassType: "VoicePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProtectConfigurationTagPropertyToTerraform(struct?: CcProtectConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProtectConfigurationTagPropertyToHclTerraform(struct?: CcProtectConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProtectConfiguration {
export interface CountryRuleProperty {
    /**
    * The two-letter ISO country code
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#country_code CcProtectConfiguration#country_code}
    */
    readonly countryCode?: string;
    /**
    * The types of protection that can be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#protect_status CcProtectConfiguration#protect_status}
    */
    readonly protectStatus?: string;
}
export class CountryRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CountryRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._protectStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.protectStatus = this._protectStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CountryRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
            this._protectStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
            this._protectStatus = value.protectStatus;
        }
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // protect_status - computed: true, optional: true, required: false
    private _protectStatus?: string; 
    public get protectStatus() {
        return this.getStringAttribute('protect_status');
    }
    public set protectStatus(value: string) {
        this._protectStatus = value;
    }
    public resetProtectStatus() {
        this._protectStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectStatusInput() {
        return this._protectStatus;
    }
}

export class CountryRulePropertyList extends cdktn.ComplexList {
    public internalValue? : CountryRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): CountryRulePropertyOutputReference {
        return new CountryRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SmsProperty {
    /**
    * The two-letter ISO country code
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#country_code CcProtectConfiguration#country_code}
    */
    readonly countryCode?: string;
    /**
    * The types of protection that can be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#protect_status CcProtectConfiguration#protect_status}
    */
    readonly protectStatus?: string;
}
export class SmsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._protectStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.protectStatus = this._protectStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
            this._protectStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
            this._protectStatus = value.protectStatus;
        }
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // protect_status - computed: true, optional: true, required: false
    private _protectStatus?: string; 
    public get protectStatus() {
        return this.getStringAttribute('protect_status');
    }
    public set protectStatus(value: string) {
        this._protectStatus = value;
    }
    public resetProtectStatus() {
        this._protectStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectStatusInput() {
        return this._protectStatus;
    }
}

export class SmsPropertyList extends cdktn.ComplexList {
    public internalValue? : SmsProperty[] | cdktn.IResolvable

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
    public get(index: number): SmsPropertyOutputReference {
        return new SmsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VoiceProperty {
    /**
    * The two-letter ISO country code
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#country_code CcProtectConfiguration#country_code}
    */
    readonly countryCode?: string;
    /**
    * The types of protection that can be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#protect_status CcProtectConfiguration#protect_status}
    */
    readonly protectStatus?: string;
}
export class VoicePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VoiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._protectStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.protectStatus = this._protectStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VoiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._countryCode = undefined;
            this._protectStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._countryCode = value.countryCode;
            this._protectStatus = value.protectStatus;
        }
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
    }

    // protect_status - computed: true, optional: true, required: false
    private _protectStatus?: string; 
    public get protectStatus() {
        return this.getStringAttribute('protect_status');
    }
    public set protectStatus(value: string) {
        this._protectStatus = value;
    }
    public resetProtectStatus() {
        this._protectStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectStatusInput() {
        return this._protectStatus;
    }
}

export class VoicePropertyList extends cdktn.ComplexList {
    public internalValue? : VoiceProperty[] | cdktn.IResolvable

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
    public get(index: number): VoicePropertyOutputReference {
        return new VoicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CountryRuleSetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#mms CcProtectConfiguration#mms}
    */
    readonly mms?: CountryRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#sms CcProtectConfiguration#sms}
    */
    readonly sms?: SmsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#voice CcProtectConfiguration#voice}
    */
    readonly voice?: VoiceProperty[] | cdktn.IResolvable;
}
export class CountryRuleSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CountryRuleSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mms = this._mms?.internalValue;
        }
        if (this._sms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sms = this._sms?.internalValue;
        }
        if (this._voice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.voice = this._voice?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CountryRuleSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mms.internalValue = undefined;
            this._sms.internalValue = undefined;
            this._voice.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mms.internalValue = value.mms;
            this._sms.internalValue = value.sms;
            this._voice.internalValue = value.voice;
        }
    }

    // mms - computed: true, optional: true, required: false
    private _mms = new CountryRulePropertyList(this, "mms", true);
    public get mms() {
        return this._mms;
    }
    public putMms(value: CountryRuleProperty[] | cdktn.IResolvable) {
        this._mms.internalValue = value;
    }
    public resetMms() {
        this._mms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mmsInput() {
        return this._mms.internalValue;
    }

    // sms - computed: true, optional: true, required: false
    private _sms = new SmsPropertyList(this, "sms", true);
    public get sms() {
        return this._sms;
    }
    public putSms(value: SmsProperty[] | cdktn.IResolvable) {
        this._sms.internalValue = value;
    }
    public resetSms() {
        this._sms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsInput() {
        return this._sms.internalValue;
    }

    // voice - computed: true, optional: true, required: false
    private _voice = new VoicePropertyList(this, "voice", true);
    public get voice() {
        return this._voice;
    }
    public putVoice(value: VoiceProperty[] | cdktn.IResolvable) {
        this._voice.internalValue = value;
    }
    public resetVoice() {
        this._voice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceInput() {
        return this._voice.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#key CcProtectConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_protect_configuration#value CcProtectConfiguration#value}
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
