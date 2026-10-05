// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScopeProps extends cdktn.TerraformMetaArguments {
    /**
    * The tags for the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#tags CcScope#tags}
    */
    readonly tags?: CcScope.TagsProperty[] | cdktn.IResolvable;
    /**
    * The targets for the scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#targets CcScope#targets}
    */
    readonly targets: CcScope.TargetsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope awscc_networkflowmonitor_scope}
*/
export class CcScope extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkflowmonitor_scope";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScope resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScope to import
    * @param importFromId The id of the existing CcScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScope to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkflowmonitor_scope", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope awscc_networkflowmonitor_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScopeProps
    */
    public constructor(scope: Construct, id: string, config: CcScopeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkflowmonitor_scope',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._tags.internalValue = config.tags;
        this._targets.internalValue = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scope_arn - computed: true, optional: false, required: false
    public get scopeArn() {
        return this.getStringAttribute('scope_arn');
    }

    // scope_id - computed: true, optional: false, required: false
    public get scopeId() {
        return this.getStringAttribute('scope_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScope.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScope.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcScope.TargetsPropertyList(this, "targets", false);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcScope.TargetsProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            tags: cdktn.listMapper(ccScopeTagsPropertyToTerraform, false)(this._tags.internalValue),
            targets: cdktn.listMapper(ccScopeTargetsPropertyToTerraform, false)(this._targets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            tags: {
                value: cdktn.listMapperHcl(ccScopeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcScope.TagsPropertyList",
            },
            targets: {
                value: cdktn.listMapperHcl(ccScopeTargetsPropertyToHclTerraform, false)(this._targets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcScope.TargetsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScopeTagsPropertyToTerraform(struct?: CcScope.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScopeTagsPropertyToHclTerraform(struct?: CcScope.TagsProperty | cdktn.IResolvable): any {
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


export function ccScopeTargetIdPropertyToTerraform(struct?: CcScope.TargetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
    }
}


export function ccScopeTargetIdPropertyToHclTerraform(struct?: CcScope.TargetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScopeTargetIdentifierPropertyToTerraform(struct?: CcScope.TargetIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_id: ccScopeTargetIdPropertyToTerraform(struct!.targetId),
        target_type: cdktn.stringToTerraform(struct!.targetType),
    }
}


export function ccScopeTargetIdentifierPropertyToHclTerraform(struct?: CcScope.TargetIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_id: {
            value: ccScopeTargetIdPropertyToHclTerraform(struct!.targetId),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetIdProperty",
        },
        target_type: {
            value: cdktn.stringToHclTerraform(struct!.targetType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScopeTargetsPropertyToTerraform(struct?: CcScope.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
        target_identifier: ccScopeTargetIdentifierPropertyToTerraform(struct!.targetIdentifier),
    }
}


export function ccScopeTargetsPropertyToHclTerraform(struct?: CcScope.TargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_identifier: {
            value: ccScopeTargetIdentifierPropertyToHclTerraform(struct!.targetIdentifier),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetIdentifierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScope {
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#key CcScope#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#value CcScope#value}
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
export interface TargetIdProperty {
    /**
    * The account ID for the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#account_id CcScope#account_id}
    */
    readonly accountId: string;
}
export class TargetIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
        }
    }

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }
}
export interface TargetIdentifierProperty {
    /**
    * A target ID is an internally-generated identifier for a target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_id CcScope#target_id}
    */
    readonly targetId: TargetIdProperty;
    /**
    * The type of the target. Currently always ACCOUNT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_type CcScope#target_type}
    */
    readonly targetType: string;
}
export class TargetIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetId = this._targetId?.internalValue;
        }
        if (this._targetType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetType = this._targetType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetId.internalValue = undefined;
            this._targetType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetId.internalValue = value.targetId;
            this._targetType = value.targetType;
        }
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId = new TargetIdPropertyOutputReference(this, "target_id");
    public get targetId() {
        return this._targetId;
    }
    public putTargetId(value: TargetIdProperty) {
        this._targetId.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
        return this._targetId.internalValue;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }
}
export interface TargetsProperty {
    /**
    * The AWS Region for the target resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#region CcScope#region}
    */
    readonly region: string;
    /**
    * A target identifier is a pair of identifying information for a scope target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/networkflowmonitor_scope#target_identifier CcScope#target_identifier}
    */
    readonly targetIdentifier: TargetIdentifierProperty;
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
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._targetIdentifier?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetIdentifier = this._targetIdentifier?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
            this._targetIdentifier.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
            this._targetIdentifier.internalValue = value.targetIdentifier;
        }
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // target_identifier - computed: false, optional: false, required: true
    private _targetIdentifier = new TargetIdentifierPropertyOutputReference(this, "target_identifier");
    public get targetIdentifier() {
        return this._targetIdentifier;
    }
    public putTargetIdentifier(value: TargetIdentifierProperty) {
        this._targetIdentifier.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdentifierInput() {
        return this._targetIdentifier.internalValue;
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
}
