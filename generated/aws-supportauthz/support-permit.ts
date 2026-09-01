// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSupportPermitProps extends cdktn.TerraformMetaArguments {
    /**
    * An optional description of the support permit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#description CcSupportPermit#description}
    */
    readonly description?: string;
    /**
    * The name of the support permit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#name CcSupportPermit#name}
    */
    readonly name: string;
    /**
    * The grant definition: which actions on which resources, optionally constrained by time conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#permit CcSupportPermit#permit}
    */
    readonly permit: CcSupportPermit.PermitProperty;
    /**
    * The signing key used by the permit. Exactly one key type must be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#signing_key_info CcSupportPermit#signing_key_info}
    */
    readonly signingKeyInfo: CcSupportPermit.SigningKeyInfoProperty;
    /**
    * The support case display identifier associated with the permit. When provided, the permit is linked to the specified AWS Support case.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#support_case_display_id CcSupportPermit#support_case_display_id}
    */
    readonly supportCaseDisplayId?: string;
    /**
    * A list of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#tags CcSupportPermit#tags}
    */
    readonly tags?: CcSupportPermit.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}
*/
export class CcSupportPermit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_supportauthz_support_permit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSupportPermit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSupportPermit to import
    * @param importFromId The id of the existing CcSupportPermit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSupportPermit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_supportauthz_support_permit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSupportPermitProps
    */
    public constructor(scope: Construct, id: string, config: CcSupportPermitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_supportauthz_support_permit',
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
        this._description = config.description;
        this._name = config.name;
        this._permit.internalValue = config.permit;
        this._signingKeyInfo.internalValue = config.signingKeyInfo;
        this._supportCaseDisplayId = config.supportCaseDisplayId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // permit - computed: false, optional: false, required: true
    private _permit = new CcSupportPermit.PermitPropertyOutputReference(this, "permit");
    public get permit() {
        return this._permit;
    }
    public putPermit(value: CcSupportPermit.PermitProperty) {
        this._permit.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permitInput() {
        return this._permit.internalValue;
    }

    // permit_id - computed: true, optional: false, required: false
    public get permitId() {
        return this.getStringAttribute('permit_id');
    }

    // signing_key_info - computed: false, optional: false, required: true
    private _signingKeyInfo = new CcSupportPermit.SigningKeyInfoPropertyOutputReference(this, "signing_key_info");
    public get signingKeyInfo() {
        return this._signingKeyInfo;
    }
    public putSigningKeyInfo(value: CcSupportPermit.SigningKeyInfoProperty) {
        this._signingKeyInfo.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get signingKeyInfoInput() {
        return this._signingKeyInfo.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // support_case_display_id - computed: true, optional: true, required: false
    private _supportCaseDisplayId?: string; 
    public get supportCaseDisplayId() {
        return this.getStringAttribute('support_case_display_id');
    }
    public set supportCaseDisplayId(value: string) {
        this._supportCaseDisplayId = value;
    }
    public resetSupportCaseDisplayId() {
        this._supportCaseDisplayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportCaseDisplayIdInput() {
        return this._supportCaseDisplayId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSupportPermit.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSupportPermit.TagsProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            permit: ccSupportPermitPermitPropertyToTerraform(this._permit.internalValue),
            signing_key_info: ccSupportPermitSigningKeyInfoPropertyToTerraform(this._signingKeyInfo.internalValue),
            support_case_display_id: cdktn.stringToTerraform(this._supportCaseDisplayId),
            tags: cdktn.listMapper(ccSupportPermitTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permit: {
                value: ccSupportPermitPermitPropertyToHclTerraform(this._permit.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSupportPermit.PermitProperty",
            },
            signing_key_info: {
                value: ccSupportPermitSigningKeyInfoPropertyToHclTerraform(this._signingKeyInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSupportPermit.SigningKeyInfoProperty",
            },
            support_case_display_id: {
                value: cdktn.stringToHclTerraform(this._supportCaseDisplayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSupportPermitTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSupportPermit.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSupportPermitActionsPropertyToTerraform(struct?: CcSupportPermit.ActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        all_actions: cdktn.stringToTerraform(struct!.allActions),
    }
}


export function ccSupportPermitActionsPropertyToHclTerraform(struct?: CcSupportPermit.ActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        all_actions: {
            value: cdktn.stringToHclTerraform(struct!.allActions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSupportPermitConditionsPropertyToTerraform(struct?: CcSupportPermit.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_after: cdktn.stringToTerraform(struct!.allowAfter),
        allow_before: cdktn.stringToTerraform(struct!.allowBefore),
    }
}


export function ccSupportPermitConditionsPropertyToHclTerraform(struct?: CcSupportPermit.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_after: {
            value: cdktn.stringToHclTerraform(struct!.allowAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allow_before: {
            value: cdktn.stringToHclTerraform(struct!.allowBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSupportPermitResourcesPropertyToTerraform(struct?: CcSupportPermit.ResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_resources_in_region: cdktn.stringToTerraform(struct!.allResourcesInRegion),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccSupportPermitResourcesPropertyToHclTerraform(struct?: CcSupportPermit.ResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_resources_in_region: {
            value: cdktn.stringToHclTerraform(struct!.allResourcesInRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSupportPermitPermitPropertyToTerraform(struct?: CcSupportPermit.PermitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: ccSupportPermitActionsPropertyToTerraform(struct!.actions),
        conditions: cdktn.listMapper(ccSupportPermitConditionsPropertyToTerraform, false)(struct!.conditions),
        resources: ccSupportPermitResourcesPropertyToTerraform(struct!.resources),
    }
}


export function ccSupportPermitPermitPropertyToHclTerraform(struct?: CcSupportPermit.PermitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: ccSupportPermitActionsPropertyToHclTerraform(struct!.actions),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionsProperty",
        },
        conditions: {
            value: cdktn.listMapperHcl(ccSupportPermitConditionsPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConditionsPropertyList",
        },
        resources: {
            value: ccSupportPermitResourcesPropertyToHclTerraform(struct!.resources),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourcesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSupportPermitSigningKeyInfoPropertyToTerraform(struct?: CcSupportPermit.SigningKeyInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccSupportPermitSigningKeyInfoPropertyToHclTerraform(struct?: CcSupportPermit.SigningKeyInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSupportPermitTagsPropertyToTerraform(struct?: CcSupportPermit.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSupportPermitTagsPropertyToHclTerraform(struct?: CcSupportPermit.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSupportPermit {
export interface ActionsProperty {
    /**
    * An explicit list of actions to grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#actions CcSupportPermit#actions}
    */
    readonly actions?: string[];
    /**
    * Grants all actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#all_actions CcSupportPermit#all_actions}
    */
    readonly allActions?: string;
}
export class ActionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._allActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allActions = this._allActions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._allActions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._allActions = value.allActions;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // all_actions - computed: true, optional: true, required: false
    private _allActions?: string; 
    public get allActions() {
        return this.getStringAttribute('all_actions');
    }
    public set allActions(value: string) {
        this._allActions = value;
    }
    public resetAllActions() {
        this._allActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allActionsInput() {
        return this._allActions;
    }
}
export interface ConditionsProperty {
    /**
    * The permit is active only after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#allow_after CcSupportPermit#allow_after}
    */
    readonly allowAfter?: string;
    /**
    * The permit is active only before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#allow_before CcSupportPermit#allow_before}
    */
    readonly allowBefore?: string;
}
export class ConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAfter = this._allowAfter;
        }
        if (this._allowBefore !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowBefore = this._allowBefore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowAfter = undefined;
            this._allowBefore = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowAfter = value.allowAfter;
            this._allowBefore = value.allowBefore;
        }
    }

    // allow_after - computed: true, optional: true, required: false
    private _allowAfter?: string; 
    public get allowAfter() {
        return this.getStringAttribute('allow_after');
    }
    public set allowAfter(value: string) {
        this._allowAfter = value;
    }
    public resetAllowAfter() {
        this._allowAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowAfterInput() {
        return this._allowAfter;
    }

    // allow_before - computed: true, optional: true, required: false
    private _allowBefore?: string; 
    public get allowBefore() {
        return this.getStringAttribute('allow_before');
    }
    public set allowBefore(value: string) {
        this._allowBefore = value;
    }
    public resetAllowBefore() {
        this._allowBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowBeforeInput() {
        return this._allowBefore;
    }
}

export class ConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionsPropertyOutputReference {
        return new ConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourcesProperty {
    /**
    * Applies to all resources in the region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#all_resources_in_region CcSupportPermit#all_resources_in_region}
    */
    readonly allResourcesInRegion?: string;
    /**
    * An explicit list of resource ARNs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#resources CcSupportPermit#resources}
    */
    readonly resources?: string[];
}
export class ResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allResourcesInRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.allResourcesInRegion = this._allResourcesInRegion;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allResourcesInRegion = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allResourcesInRegion = value.allResourcesInRegion;
            this._resources = value.resources;
        }
    }

    // all_resources_in_region - computed: true, optional: true, required: false
    private _allResourcesInRegion?: string; 
    public get allResourcesInRegion() {
        return this.getStringAttribute('all_resources_in_region');
    }
    public set allResourcesInRegion(value: string) {
        this._allResourcesInRegion = value;
    }
    public resetAllResourcesInRegion() {
        this._allResourcesInRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allResourcesInRegionInput() {
        return this._allResourcesInRegion;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}
export interface PermitProperty {
    /**
    * The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#actions CcSupportPermit#actions}
    */
    readonly actions: ActionsProperty;
    /**
    * Optional time-bound conditions (at most two).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#conditions CcSupportPermit#conditions}
    */
    readonly conditions?: ConditionsProperty[] | cdktn.IResolvable;
    /**
    * The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#resources CcSupportPermit#resources}
    */
    readonly resources: ResourcesProperty;
}
export class PermitPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PermitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PermitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._conditions.internalValue = undefined;
            this._resources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._conditions.internalValue = value.conditions;
            this._resources.internalValue = value.resources;
        }
    }

    // actions - computed: false, optional: false, required: true
    private _actions = new ActionsPropertyOutputReference(this, "actions");
    public get actions() {
        return this._actions;
    }
    public putActions(value: ActionsProperty) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionsPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionsProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // resources - computed: false, optional: false, required: true
    private _resources = new ResourcesPropertyOutputReference(this, "resources");
    public get resources() {
        return this._resources;
    }
    public putResources(value: ResourcesProperty) {
        this._resources.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
    }
}
export interface SigningKeyInfoProperty {
    /**
    * The ARN of the KMS key used to sign permit grants.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#kms_key CcSupportPermit#kms_key}
    */
    readonly kmsKey: string;
}
export class SigningKeyInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SigningKeyInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SigningKeyInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: false, optional: false, required: true
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#key CcSupportPermit#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportauthz_support_permit#value CcSupportPermit#value}
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
