// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactProps extends cdktn.TerraformMetaArguments {
    /**
    * Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#alias CcContact#alias}
    */
    readonly alias: string;
    /**
    * Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#display_name CcContact#display_name}
    */
    readonly displayName: string;
    /**
    * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#plan CcContact#plan}
    */
    readonly plan?: CcContact.StageProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#tags CcContact#tags}
    */
    readonly tags?: CcContact.TagProperty[] | cdktn.IResolvable;
    /**
    * Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#type CcContact#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact awscc_ssmcontacts_contact}
*/
export class CcContact extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmcontacts_contact";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContact resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContact to import
    * @param importFromId The id of the existing CcContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContact to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmcontacts_contact", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact awscc_ssmcontacts_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactProps
    */
    public constructor(scope: Construct, id: string, config: CcContactProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmcontacts_contact',
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
        this._alias = config.alias;
        this._displayName = config.displayName;
        this._plan.internalValue = config.plan;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: false, optional: false, required: true
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // plan - computed: true, optional: true, required: false
    private _plan = new CcContact.StagePropertyList(this, "plan", false);
    public get plan() {
        return this._plan;
    }
    public putPlan(value: CcContact.StageProperty[] | cdktn.IResolvable) {
        this._plan.internalValue = value;
    }
    public resetPlan() {
        this._plan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get planInput() {
        return this._plan.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContact.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContact.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
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
            alias: cdktn.stringToTerraform(this._alias),
            display_name: cdktn.stringToTerraform(this._displayName),
            plan: cdktn.listMapper(ccContactStagePropertyToTerraform, false)(this._plan.internalValue),
            tags: cdktn.listMapper(ccContactTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias: {
                value: cdktn.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plan: {
                value: cdktn.listMapperHcl(ccContactStagePropertyToHclTerraform, false)(this._plan.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContact.StagePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContactTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContact.TagPropertyList",
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

export function ccContactChannelTargetInfoPropertyToTerraform(struct?: CcContact.ChannelTargetInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_id: cdktn.stringToTerraform(struct!.channelId),
        retry_interval_in_minutes: cdktn.numberToTerraform(struct!.retryIntervalInMinutes),
    }
}


export function ccContactChannelTargetInfoPropertyToHclTerraform(struct?: CcContact.ChannelTargetInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_id: {
            value: cdktn.stringToHclTerraform(struct!.channelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retry_interval_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.retryIntervalInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContactContactTargetInfoPropertyToTerraform(struct?: CcContact.ContactTargetInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_id: cdktn.stringToTerraform(struct!.contactId),
        is_essential: cdktn.booleanToTerraform(struct!.isEssential),
    }
}


export function ccContactContactTargetInfoPropertyToHclTerraform(struct?: CcContact.ContactTargetInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_id: {
            value: cdktn.stringToHclTerraform(struct!.contactId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_essential: {
            value: cdktn.booleanToHclTerraform(struct!.isEssential),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContactTargetsPropertyToTerraform(struct?: CcContact.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_target_info: ccContactChannelTargetInfoPropertyToTerraform(struct!.channelTargetInfo),
        contact_target_info: ccContactContactTargetInfoPropertyToTerraform(struct!.contactTargetInfo),
    }
}


export function ccContactTargetsPropertyToHclTerraform(struct?: CcContact.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_target_info: {
            value: ccContactChannelTargetInfoPropertyToHclTerraform(struct!.channelTargetInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "ChannelTargetInfoProperty",
        },
        contact_target_info: {
            value: ccContactContactTargetInfoPropertyToHclTerraform(struct!.contactTargetInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "ContactTargetInfoProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContactStagePropertyToTerraform(struct?: CcContact.StageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_in_minutes: cdktn.numberToTerraform(struct!.durationInMinutes),
        rotation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rotationIds),
        targets: cdktn.listMapper(ccContactTargetsPropertyToTerraform, false)(struct!.targets),
    }
}


export function ccContactStagePropertyToHclTerraform(struct?: CcContact.StageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.durationInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rotation_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rotationIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        targets: {
            value: cdktn.listMapperHcl(ccContactTargetsPropertyToHclTerraform, false)(struct!.targets),
            isBlock: true,
            type: "list",
            storageClassType: "TargetsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContactTagPropertyToTerraform(struct?: CcContact.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContactTagPropertyToHclTerraform(struct?: CcContact.TagProperty | cdktn.IResolvable): any {
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


export namespace CcContact {
export interface ChannelTargetInfoProperty {
    /**
    * The Amazon Resource Name (ARN) of the contact channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#channel_id CcContact#channel_id}
    */
    readonly channelId?: string;
    /**
    * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#retry_interval_in_minutes CcContact#retry_interval_in_minutes}
    */
    readonly retryIntervalInMinutes?: number;
}
export class ChannelTargetInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChannelTargetInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelId = this._channelId;
        }
        if (this._retryIntervalInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryIntervalInMinutes = this._retryIntervalInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelTargetInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelId = undefined;
            this._retryIntervalInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelId = value.channelId;
            this._retryIntervalInMinutes = value.retryIntervalInMinutes;
        }
    }

    // channel_id - computed: true, optional: true, required: false
    private _channelId?: string; 
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }
    public set channelId(value: string) {
        this._channelId = value;
    }
    public resetChannelId() {
        this._channelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelIdInput() {
        return this._channelId;
    }

    // retry_interval_in_minutes - computed: true, optional: true, required: false
    private _retryIntervalInMinutes?: number; 
    public get retryIntervalInMinutes() {
        return this.getNumberAttribute('retry_interval_in_minutes');
    }
    public set retryIntervalInMinutes(value: number) {
        this._retryIntervalInMinutes = value;
    }
    public resetRetryIntervalInMinutes() {
        this._retryIntervalInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryIntervalInMinutesInput() {
        return this._retryIntervalInMinutes;
    }
}
export interface ContactTargetInfoProperty {
    /**
    * The Amazon Resource Name (ARN) of the contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#contact_id CcContact#contact_id}
    */
    readonly contactId?: string;
    /**
    * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#is_essential CcContact#is_essential}
    */
    readonly isEssential?: boolean | cdktn.IResolvable;
}
export class ContactTargetInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContactTargetInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactId !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactId = this._contactId;
        }
        if (this._isEssential !== undefined) {
            hasAnyValues = true;
            internalValueResult.isEssential = this._isEssential;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContactTargetInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactId = undefined;
            this._isEssential = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactId = value.contactId;
            this._isEssential = value.isEssential;
        }
    }

    // contact_id - computed: true, optional: true, required: false
    private _contactId?: string; 
    public get contactId() {
        return this.getStringAttribute('contact_id');
    }
    public set contactId(value: string) {
        this._contactId = value;
    }
    public resetContactId() {
        this._contactId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactIdInput() {
        return this._contactId;
    }

    // is_essential - computed: true, optional: true, required: false
    private _isEssential?: boolean | cdktn.IResolvable; 
    public get isEssential() {
        return this.getBooleanAttribute('is_essential');
    }
    public set isEssential(value: boolean | cdktn.IResolvable) {
        this._isEssential = value;
    }
    public resetIsEssential() {
        this._isEssential = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEssentialInput() {
        return this._isEssential;
    }
}
export interface TargetsProperty {
    /**
    * Information about the contact channel that SSM Incident Manager uses to engage the contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#channel_target_info CcContact#channel_target_info}
    */
    readonly channelTargetInfo?: ChannelTargetInfoProperty;
    /**
    * The contact that SSM Incident Manager is engaging during an incident.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#contact_target_info CcContact#contact_target_info}
    */
    readonly contactTargetInfo?: ContactTargetInfoProperty;
}
export class TargetsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelTargetInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelTargetInfo = this._channelTargetInfo?.internalValue;
        }
        if (this._contactTargetInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactTargetInfo = this._contactTargetInfo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelTargetInfo.internalValue = undefined;
            this._contactTargetInfo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelTargetInfo.internalValue = value.channelTargetInfo;
            this._contactTargetInfo.internalValue = value.contactTargetInfo;
        }
    }

    // channel_target_info - computed: true, optional: true, required: false
    private _channelTargetInfo = new ChannelTargetInfoPropertyOutputReference(this, "channel_target_info");
    public get channelTargetInfo() {
        return this._channelTargetInfo;
    }
    public putChannelTargetInfo(value: ChannelTargetInfoProperty) {
        this._channelTargetInfo.internalValue = value;
    }
    public resetChannelTargetInfo() {
        this._channelTargetInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelTargetInfoInput() {
        return this._channelTargetInfo.internalValue;
    }

    // contact_target_info - computed: true, optional: true, required: false
    private _contactTargetInfo = new ContactTargetInfoPropertyOutputReference(this, "contact_target_info");
    public get contactTargetInfo() {
        return this._contactTargetInfo;
    }
    public putContactTargetInfo(value: ContactTargetInfoProperty) {
        this._contactTargetInfo.internalValue = value;
    }
    public resetContactTargetInfo() {
        this._contactTargetInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactTargetInfoInput() {
        return this._contactTargetInfo.internalValue;
    }
}

export class TargetsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetsPropertyOutputReference {
        return new TargetsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StageProperty {
    /**
    * The time to wait until beginning the next stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#duration_in_minutes CcContact#duration_in_minutes}
    */
    readonly durationInMinutes?: number;
    /**
    * List of Rotation Ids to associate with Contact
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#rotation_ids CcContact#rotation_ids}
    */
    readonly rotationIds?: string[];
    /**
    * The contacts or contact methods that the escalation plan or engagement plan is engaging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#targets CcContact#targets}
    */
    readonly targets?: TargetsProperty[] | cdktn.IResolvable;
}
export class StagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationInMinutes = this._durationInMinutes;
        }
        if (this._rotationIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.rotationIds = this._rotationIds;
        }
        if (this._targets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationInMinutes = undefined;
            this._rotationIds = undefined;
            this._targets.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationInMinutes = value.durationInMinutes;
            this._rotationIds = value.rotationIds;
            this._targets.internalValue = value.targets;
        }
    }

    // duration_in_minutes - computed: true, optional: true, required: false
    private _durationInMinutes?: number; 
    public get durationInMinutes() {
        return this.getNumberAttribute('duration_in_minutes');
    }
    public set durationInMinutes(value: number) {
        this._durationInMinutes = value;
    }
    public resetDurationInMinutes() {
        this._durationInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInMinutesInput() {
        return this._durationInMinutes;
    }

    // rotation_ids - computed: true, optional: true, required: false
    private _rotationIds?: string[]; 
    public get rotationIds() {
        return this.getListAttribute('rotation_ids');
    }
    public set rotationIds(value: string[]) {
        this._rotationIds = value;
    }
    public resetRotationIds() {
        this._rotationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationIdsInput() {
        return this._rotationIds;
    }

    // targets - computed: true, optional: true, required: false
    private _targets = new TargetsPropertyList(this, "targets", false);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: TargetsProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    public resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }
}

export class StagePropertyList extends cdktn.ComplexList {
    public internalValue? : StageProperty[] | cdktn.IResolvable

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
    public get(index: number): StagePropertyOutputReference {
        return new StagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#key CcContact#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#value CcContact#value}
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
