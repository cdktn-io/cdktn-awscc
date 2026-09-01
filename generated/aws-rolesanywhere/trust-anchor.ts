// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrustAnchorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#enabled CcTrustAnchor#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#name CcTrustAnchor#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#notification_settings CcTrustAnchor#notification_settings}
    */
    readonly notificationSettings?: CcTrustAnchor.NotificationSettingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#source CcTrustAnchor#source}
    */
    readonly source: CcTrustAnchor.SourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#tags CcTrustAnchor#tags}
    */
    readonly tags?: CcTrustAnchor.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor awscc_rolesanywhere_trust_anchor}
*/
export class CcTrustAnchor extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rolesanywhere_trust_anchor";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrustAnchor resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrustAnchor to import
    * @param importFromId The id of the existing CcTrustAnchor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrustAnchor to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rolesanywhere_trust_anchor", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor awscc_rolesanywhere_trust_anchor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrustAnchorProps
    */
    public constructor(scope: Construct, id: string, config: CcTrustAnchorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rolesanywhere_trust_anchor',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._enabled = config.enabled;
        this._name = config.name;
        this._notificationSettings.internalValue = config.notificationSettings;
        this._source.internalValue = config.source;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // notification_settings - computed: true, optional: true, required: false
    private _notificationSettings = new CcTrustAnchor.NotificationSettingPropertyList(this, "notification_settings", false);
    public get notificationSettings() {
        return this._notificationSettings;
    }
    public putNotificationSettings(value: CcTrustAnchor.NotificationSettingProperty[] | cdktn.IResolvable) {
        this._notificationSettings.internalValue = value;
    }
    public resetNotificationSettings() {
        this._notificationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationSettingsInput() {
        return this._notificationSettings.internalValue;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CcTrustAnchor.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcTrustAnchor.SourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTrustAnchor.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTrustAnchor.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trust_anchor_arn - computed: true, optional: false, required: false
    public get trustAnchorArn() {
        return this.getStringAttribute('trust_anchor_arn');
    }

    // trust_anchor_id - computed: true, optional: false, required: false
    public get trustAnchorId() {
        return this.getStringAttribute('trust_anchor_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            enabled: cdktn.booleanToTerraform(this._enabled),
            name: cdktn.stringToTerraform(this._name),
            notification_settings: cdktn.listMapper(ccTrustAnchorNotificationSettingPropertyToTerraform, false)(this._notificationSettings.internalValue),
            source: ccTrustAnchorSourcePropertyToTerraform(this._source.internalValue),
            tags: cdktn.listMapper(ccTrustAnchorTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_settings: {
                value: cdktn.listMapperHcl(ccTrustAnchorNotificationSettingPropertyToHclTerraform, false)(this._notificationSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrustAnchor.NotificationSettingPropertyList",
            },
            source: {
                value: ccTrustAnchorSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrustAnchor.SourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrustAnchorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrustAnchor.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrustAnchorNotificationSettingPropertyToTerraform(struct?: CcTrustAnchor.NotificationSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel: cdktn.stringToTerraform(struct!.channel),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        event: cdktn.stringToTerraform(struct!.event),
        threshold: cdktn.numberToTerraform(struct!.threshold),
    }
}


export function ccTrustAnchorNotificationSettingPropertyToHclTerraform(struct?: CcTrustAnchor.NotificationSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel: {
            value: cdktn.stringToHclTerraform(struct!.channel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        event: {
            value: cdktn.stringToHclTerraform(struct!.event),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        threshold: {
            value: cdktn.numberToHclTerraform(struct!.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustAnchorSourceDataPropertyToTerraform(struct?: CcTrustAnchor.SourceDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        acm_pca_arn: cdktn.stringToTerraform(struct!.acmPcaArn),
        x509_certificate_data: cdktn.stringToTerraform(struct!.x509CertificateData),
    }
}


export function ccTrustAnchorSourceDataPropertyToHclTerraform(struct?: CcTrustAnchor.SourceDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        acm_pca_arn: {
            value: cdktn.stringToHclTerraform(struct!.acmPcaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        x509_certificate_data: {
            value: cdktn.stringToHclTerraform(struct!.x509CertificateData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustAnchorSourcePropertyToTerraform(struct?: CcTrustAnchor.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_data: ccTrustAnchorSourceDataPropertyToTerraform(struct!.sourceData),
        source_type: cdktn.stringToTerraform(struct!.sourceType),
    }
}


export function ccTrustAnchorSourcePropertyToHclTerraform(struct?: CcTrustAnchor.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_data: {
            value: ccTrustAnchorSourceDataPropertyToHclTerraform(struct!.sourceData),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceDataProperty",
        },
        source_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrustAnchorTagPropertyToTerraform(struct?: CcTrustAnchor.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrustAnchorTagPropertyToHclTerraform(struct?: CcTrustAnchor.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTrustAnchor {
export interface NotificationSettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#channel CcTrustAnchor#channel}
    */
    readonly channel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#enabled CcTrustAnchor#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#event CcTrustAnchor#event}
    */
    readonly event?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#threshold CcTrustAnchor#threshold}
    */
    readonly threshold?: number;
}
export class NotificationSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotificationSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channel !== undefined) {
            hasAnyValues = true;
            internalValueResult.channel = this._channel;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._event !== undefined) {
            hasAnyValues = true;
            internalValueResult.event = this._event;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channel = undefined;
            this._enabled = undefined;
            this._event = undefined;
            this._threshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channel = value.channel;
            this._enabled = value.enabled;
            this._event = value.event;
            this._threshold = value.threshold;
        }
    }

    // channel - computed: true, optional: true, required: false
    private _channel?: string; 
    public get channel() {
        return this.getStringAttribute('channel');
    }
    public set channel(value: string) {
        this._channel = value;
    }
    public resetChannel() {
        this._channel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelInput() {
        return this._channel;
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

    // event - computed: true, optional: true, required: false
    private _event?: string; 
    public get event() {
        return this.getStringAttribute('event');
    }
    public set event(value: string) {
        this._event = value;
    }
    public resetEvent() {
        this._event = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventInput() {
        return this._event;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }
}

export class NotificationSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : NotificationSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): NotificationSettingPropertyOutputReference {
        return new NotificationSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#acm_pca_arn CcTrustAnchor#acm_pca_arn}
    */
    readonly acmPcaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#x509_certificate_data CcTrustAnchor#x509_certificate_data}
    */
    readonly x509CertificateData?: string;
}
export class SourceDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acmPcaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.acmPcaArn = this._acmPcaArn;
        }
        if (this._x509CertificateData !== undefined) {
            hasAnyValues = true;
            internalValueResult.x509CertificateData = this._x509CertificateData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acmPcaArn = undefined;
            this._x509CertificateData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acmPcaArn = value.acmPcaArn;
            this._x509CertificateData = value.x509CertificateData;
        }
    }

    // acm_pca_arn - computed: true, optional: true, required: false
    private _acmPcaArn?: string; 
    public get acmPcaArn() {
        return this.getStringAttribute('acm_pca_arn');
    }
    public set acmPcaArn(value: string) {
        this._acmPcaArn = value;
    }
    public resetAcmPcaArn() {
        this._acmPcaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmPcaArnInput() {
        return this._acmPcaArn;
    }

    // x509_certificate_data - computed: true, optional: true, required: false
    private _x509CertificateData?: string; 
    public get x509CertificateData() {
        return this.getStringAttribute('x509_certificate_data');
    }
    public set x509CertificateData(value: string) {
        this._x509CertificateData = value;
    }
    public resetX509CertificateData() {
        this._x509CertificateData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get x509CertificateDataInput() {
        return this._x509CertificateData;
    }
}
export interface SourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#source_data CcTrustAnchor#source_data}
    */
    readonly sourceData: SourceDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#source_type CcTrustAnchor#source_type}
    */
    readonly sourceType: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceData = this._sourceData?.internalValue;
        }
        if (this._sourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceType = this._sourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceData.internalValue = undefined;
            this._sourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceData.internalValue = value.sourceData;
            this._sourceType = value.sourceType;
        }
    }

    // source_data - computed: false, optional: false, required: true
    private _sourceData = new SourceDataPropertyOutputReference(this, "source_data");
    public get sourceData() {
        return this._sourceData;
    }
    public putSourceData(value: SourceDataProperty) {
        this._sourceData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDataInput() {
        return this._sourceData.internalValue;
    }

    // source_type - computed: false, optional: false, required: true
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#key CcTrustAnchor#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rolesanywhere_trust_anchor#value CcTrustAnchor#value}
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
