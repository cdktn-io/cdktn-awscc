// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The filter expression defining criteria by which to group traces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#filter_expression CcGroup#filter_expression}
    */
    readonly filterExpression?: string;
    /**
    * The case-sensitive name of the new group. Names must be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#group_name CcGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#insights_configuration CcGroup#insights_configuration}
    */
    readonly insightsConfiguration?: CcGroup.InsightsConfigurationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#tags CcGroup#tags}
    */
    readonly tags?: CcGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group awscc_xray_group}
*/
export class CcGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_xray_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroup to import
    * @param importFromId The id of the existing CcGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group awscc_xray_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_xray_group',
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
        this._filterExpression = config.filterExpression;
        this._groupName = config.groupName;
        this._insightsConfiguration.internalValue = config.insightsConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // filter_expression - computed: true, optional: true, required: false
    private _filterExpression?: string; 
    public get filterExpression() {
        return this.getStringAttribute('filter_expression');
    }
    public set filterExpression(value: string) {
        this._filterExpression = value;
    }
    public resetFilterExpression() {
        this._filterExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterExpressionInput() {
        return this._filterExpression;
    }

    // group_arn - computed: true, optional: false, required: false
    public get groupArn() {
        return this.getStringAttribute('group_arn');
    }

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // insights_configuration - computed: true, optional: true, required: false
    private _insightsConfiguration = new CcGroup.InsightsConfigurationPropertyOutputReference(this, "insights_configuration");
    public get insightsConfiguration() {
        return this._insightsConfiguration;
    }
    public putInsightsConfiguration(value: CcGroup.InsightsConfigurationProperty) {
        this._insightsConfiguration.internalValue = value;
    }
    public resetInsightsConfiguration() {
        this._insightsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightsConfigurationInput() {
        return this._insightsConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGroup.TagProperty[] | cdktn.IResolvable) {
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
            filter_expression: cdktn.stringToTerraform(this._filterExpression),
            group_name: cdktn.stringToTerraform(this._groupName),
            insights_configuration: ccGroupInsightsConfigurationPropertyToTerraform(this._insightsConfiguration.internalValue),
            tags: cdktn.listMapper(ccGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            filter_expression: {
                value: cdktn.stringToHclTerraform(this._filterExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insights_configuration: {
                value: ccGroupInsightsConfigurationPropertyToHclTerraform(this._insightsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGroup.InsightsConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGroupInsightsConfigurationPropertyToTerraform(struct?: CcGroup.InsightsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        insights_enabled: cdktn.booleanToTerraform(struct!.insightsEnabled),
        notifications_enabled: cdktn.booleanToTerraform(struct!.notificationsEnabled),
    }
}


export function ccGroupInsightsConfigurationPropertyToHclTerraform(struct?: CcGroup.InsightsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        insights_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.insightsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        notifications_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.notificationsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGroupTagPropertyToTerraform(struct?: CcGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGroupTagPropertyToHclTerraform(struct?: CcGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcGroup {
export interface InsightsConfigurationProperty {
    /**
    * Set the InsightsEnabled value to true to enable insights or false to disable insights.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#insights_enabled CcGroup#insights_enabled}
    */
    readonly insightsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#notifications_enabled CcGroup#notifications_enabled}
    */
    readonly notificationsEnabled?: boolean | cdktn.IResolvable;
}
export class InsightsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InsightsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._insightsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.insightsEnabled = this._insightsEnabled;
        }
        if (this._notificationsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationsEnabled = this._notificationsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InsightsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._insightsEnabled = undefined;
            this._notificationsEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._insightsEnabled = value.insightsEnabled;
            this._notificationsEnabled = value.notificationsEnabled;
        }
    }

    // insights_enabled - computed: true, optional: true, required: false
    private _insightsEnabled?: boolean | cdktn.IResolvable; 
    public get insightsEnabled() {
        return this.getBooleanAttribute('insights_enabled');
    }
    public set insightsEnabled(value: boolean | cdktn.IResolvable) {
        this._insightsEnabled = value;
    }
    public resetInsightsEnabled() {
        this._insightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightsEnabledInput() {
        return this._insightsEnabled;
    }

    // notifications_enabled - computed: true, optional: true, required: false
    private _notificationsEnabled?: boolean | cdktn.IResolvable; 
    public get notificationsEnabled() {
        return this.getBooleanAttribute('notifications_enabled');
    }
    public set notificationsEnabled(value: boolean | cdktn.IResolvable) {
        this._notificationsEnabled = value;
    }
    public resetNotificationsEnabled() {
        this._notificationsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationsEnabledInput() {
        return this._notificationsEnabled;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#key CcGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_group#value CcGroup#value}
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
