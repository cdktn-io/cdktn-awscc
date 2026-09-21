// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCallAnalyticsCategoryProps extends cdktn.TerraformMetaArguments {
    /**
    * A unique name, chosen by you, for your Call Analytics category.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#category_name CcCallAnalyticsCategory#category_name}
    */
    readonly categoryName: string;
    /**
    * The input type associated with the specified category.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#input_type CcCallAnalyticsCategory#input_type}
    */
    readonly inputType?: string;
    /**
    * Rules define a Call Analytics category.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#rules CcCallAnalyticsCategory#rules}
    */
    readonly rules: CcCallAnalyticsCategory.RulesProperty[] | cdktn.IResolvable;
    /**
    * Tags associated with the Call Analytics category.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#tags CcCallAnalyticsCategory#tags}
    */
    readonly tags?: CcCallAnalyticsCategory.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}
*/
export class CcCallAnalyticsCategory extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_transcribe_call_analytics_category";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCallAnalyticsCategory resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCallAnalyticsCategory to import
    * @param importFromId The id of the existing CcCallAnalyticsCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCallAnalyticsCategory to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transcribe_call_analytics_category", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCallAnalyticsCategoryProps
    */
    public constructor(scope: Construct, id: string, config: CcCallAnalyticsCategoryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_transcribe_call_analytics_category',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._categoryName = config.categoryName;
        this._inputType = config.inputType;
        this._rules.internalValue = config.rules;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // category_name - computed: false, optional: false, required: true
    private _categoryName?: string; 
    public get categoryName() {
        return this.getStringAttribute('category_name');
    }
    public set categoryName(value: string) {
        this._categoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryNameInput() {
        return this._categoryName;
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_type - computed: true, optional: true, required: false
    private _inputType?: string; 
    public get inputType() {
        return this.getStringAttribute('input_type');
    }
    public set inputType(value: string) {
        this._inputType = value;
    }
    public resetInputType() {
        this._inputType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTypeInput() {
        return this._inputType;
    }

    // last_update_time - computed: true, optional: false, required: false
    public get lastUpdateTime() {
        return this.getStringAttribute('last_update_time');
    }

    // rules - computed: false, optional: false, required: true
    private _rules = new CcCallAnalyticsCategory.RulesPropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: CcCallAnalyticsCategory.RulesProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCallAnalyticsCategory.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCallAnalyticsCategory.TagsProperty[] | cdktn.IResolvable) {
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
            category_name: cdktn.stringToTerraform(this._categoryName),
            input_type: cdktn.stringToTerraform(this._inputType),
            rules: cdktn.listMapper(ccCallAnalyticsCategoryRulesPropertyToTerraform, false)(this._rules.internalValue),
            tags: cdktn.listMapper(ccCallAnalyticsCategoryTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            category_name: {
                value: cdktn.stringToHclTerraform(this._categoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_type: {
                value: cdktn.stringToHclTerraform(this._inputType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktn.listMapperHcl(ccCallAnalyticsCategoryRulesPropertyToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCallAnalyticsCategory.RulesPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCallAnalyticsCategoryTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCallAnalyticsCategory.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesInterruptionFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.numberToTerraform(struct!.endTime),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_time: cdktn.numberToTerraform(struct!.startTime),
    }
}


export function ccCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesInterruptionFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.numberToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time: {
            value: cdktn.numberToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesInterruptionFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
    }
}


export function ccCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesInterruptionFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_percentage: {
            value: cdktn.numberToHclTerraform(struct!.endPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_percentage: {
            value: cdktn.numberToHclTerraform(struct!.startPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryInterruptionFilterPropertyToTerraform(struct?: CcCallAnalyticsCategory.InterruptionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        absolute_time_range: ccCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangePropertyToTerraform(struct!.absoluteTimeRange),
        negate: cdktn.booleanToTerraform(struct!.negate),
        participant_role: cdktn.stringToTerraform(struct!.participantRole),
        relative_time_range: ccCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangePropertyToTerraform(struct!.relativeTimeRange),
        threshold: cdktn.numberToTerraform(struct!.threshold),
    }
}


export function ccCallAnalyticsCategoryInterruptionFilterPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.InterruptionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        absolute_time_range: {
            value: ccCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangePropertyToHclTerraform(struct!.absoluteTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesInterruptionFilterAbsoluteTimeRangeProperty",
        },
        negate: {
            value: cdktn.booleanToHclTerraform(struct!.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        participant_role: {
            value: cdktn.stringToHclTerraform(struct!.participantRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relative_time_range: {
            value: ccCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangePropertyToHclTerraform(struct!.relativeTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesInterruptionFilterRelativeTimeRangeProperty",
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


export function ccCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesNonTalkTimeFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.numberToTerraform(struct!.endTime),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_time: cdktn.numberToTerraform(struct!.startTime),
    }
}


export function ccCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesNonTalkTimeFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.numberToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time: {
            value: cdktn.numberToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesNonTalkTimeFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
    }
}


export function ccCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesNonTalkTimeFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_percentage: {
            value: cdktn.numberToHclTerraform(struct!.endPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_percentage: {
            value: cdktn.numberToHclTerraform(struct!.startPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryNonTalkTimeFilterPropertyToTerraform(struct?: CcCallAnalyticsCategory.NonTalkTimeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        absolute_time_range: ccCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangePropertyToTerraform(struct!.absoluteTimeRange),
        negate: cdktn.booleanToTerraform(struct!.negate),
        relative_time_range: ccCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangePropertyToTerraform(struct!.relativeTimeRange),
        threshold: cdktn.numberToTerraform(struct!.threshold),
    }
}


export function ccCallAnalyticsCategoryNonTalkTimeFilterPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.NonTalkTimeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        absolute_time_range: {
            value: ccCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangePropertyToHclTerraform(struct!.absoluteTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesNonTalkTimeFilterAbsoluteTimeRangeProperty",
        },
        negate: {
            value: cdktn.booleanToHclTerraform(struct!.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        relative_time_range: {
            value: ccCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangePropertyToHclTerraform(struct!.relativeTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesNonTalkTimeFilterRelativeTimeRangeProperty",
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


export function ccCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesSentimentFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.numberToTerraform(struct!.endTime),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_time: cdktn.numberToTerraform(struct!.startTime),
    }
}


export function ccCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesSentimentFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.numberToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time: {
            value: cdktn.numberToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesSentimentFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
    }
}


export function ccCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesSentimentFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_percentage: {
            value: cdktn.numberToHclTerraform(struct!.endPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_percentage: {
            value: cdktn.numberToHclTerraform(struct!.startPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategorySentimentFilterPropertyToTerraform(struct?: CcCallAnalyticsCategory.SentimentFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        absolute_time_range: ccCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangePropertyToTerraform(struct!.absoluteTimeRange),
        negate: cdktn.booleanToTerraform(struct!.negate),
        participant_role: cdktn.stringToTerraform(struct!.participantRole),
        relative_time_range: ccCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangePropertyToTerraform(struct!.relativeTimeRange),
        sentiments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sentiments),
    }
}


export function ccCallAnalyticsCategorySentimentFilterPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.SentimentFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        absolute_time_range: {
            value: ccCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangePropertyToHclTerraform(struct!.absoluteTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesSentimentFilterAbsoluteTimeRangeProperty",
        },
        negate: {
            value: cdktn.booleanToHclTerraform(struct!.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        participant_role: {
            value: cdktn.stringToHclTerraform(struct!.participantRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relative_time_range: {
            value: ccCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangePropertyToHclTerraform(struct!.relativeTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesSentimentFilterRelativeTimeRangeProperty",
        },
        sentiments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sentiments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesTranscriptFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.numberToTerraform(struct!.endTime),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_time: cdktn.numberToTerraform(struct!.startTime),
    }
}


export function ccCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesTranscriptFilterAbsoluteTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.numberToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time: {
            value: cdktn.numberToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangePropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesTranscriptFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_percentage: cdktn.numberToTerraform(struct!.endPercentage),
        first: cdktn.numberToTerraform(struct!.first),
        last: cdktn.numberToTerraform(struct!.last),
        start_percentage: cdktn.numberToTerraform(struct!.startPercentage),
    }
}


export function ccCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangePropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesTranscriptFilterRelativeTimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_percentage: {
            value: cdktn.numberToHclTerraform(struct!.endPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        first: {
            value: cdktn.numberToHclTerraform(struct!.first),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        last: {
            value: cdktn.numberToHclTerraform(struct!.last),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_percentage: {
            value: cdktn.numberToHclTerraform(struct!.startPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryTranscriptFilterPropertyToTerraform(struct?: CcCallAnalyticsCategory.TranscriptFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        absolute_time_range: ccCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangePropertyToTerraform(struct!.absoluteTimeRange),
        negate: cdktn.booleanToTerraform(struct!.negate),
        participant_role: cdktn.stringToTerraform(struct!.participantRole),
        relative_time_range: ccCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangePropertyToTerraform(struct!.relativeTimeRange),
        targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
        transcript_filter_type: cdktn.stringToTerraform(struct!.transcriptFilterType),
    }
}


export function ccCallAnalyticsCategoryTranscriptFilterPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.TranscriptFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        absolute_time_range: {
            value: ccCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangePropertyToHclTerraform(struct!.absoluteTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesTranscriptFilterAbsoluteTimeRangeProperty",
        },
        negate: {
            value: cdktn.booleanToHclTerraform(struct!.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        participant_role: {
            value: cdktn.stringToHclTerraform(struct!.participantRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relative_time_range: {
            value: ccCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangePropertyToHclTerraform(struct!.relativeTimeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesTranscriptFilterRelativeTimeRangeProperty",
        },
        targets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        transcript_filter_type: {
            value: cdktn.stringToHclTerraform(struct!.transcriptFilterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryRulesPropertyToTerraform(struct?: CcCallAnalyticsCategory.RulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interruption_filter: ccCallAnalyticsCategoryInterruptionFilterPropertyToTerraform(struct!.interruptionFilter),
        non_talk_time_filter: ccCallAnalyticsCategoryNonTalkTimeFilterPropertyToTerraform(struct!.nonTalkTimeFilter),
        sentiment_filter: ccCallAnalyticsCategorySentimentFilterPropertyToTerraform(struct!.sentimentFilter),
        transcript_filter: ccCallAnalyticsCategoryTranscriptFilterPropertyToTerraform(struct!.transcriptFilter),
    }
}


export function ccCallAnalyticsCategoryRulesPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.RulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interruption_filter: {
            value: ccCallAnalyticsCategoryInterruptionFilterPropertyToHclTerraform(struct!.interruptionFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "InterruptionFilterProperty",
        },
        non_talk_time_filter: {
            value: ccCallAnalyticsCategoryNonTalkTimeFilterPropertyToHclTerraform(struct!.nonTalkTimeFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "NonTalkTimeFilterProperty",
        },
        sentiment_filter: {
            value: ccCallAnalyticsCategorySentimentFilterPropertyToHclTerraform(struct!.sentimentFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "SentimentFilterProperty",
        },
        transcript_filter: {
            value: ccCallAnalyticsCategoryTranscriptFilterPropertyToHclTerraform(struct!.transcriptFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "TranscriptFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCallAnalyticsCategoryTagsPropertyToTerraform(struct?: CcCallAnalyticsCategory.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCallAnalyticsCategoryTagsPropertyToHclTerraform(struct?: CcCallAnalyticsCategory.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcCallAnalyticsCategory {
export interface RulesInterruptionFilterAbsoluteTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time CcCallAnalyticsCategory#end_time}
    */
    readonly endTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time CcCallAnalyticsCategory#start_time}
    */
    readonly startTime?: number;
}
export class RulesInterruptionFilterAbsoluteTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesInterruptionFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesInterruptionFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._first = value.first;
            this._last = value.last;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: number; 
    public get endTime() {
        return this.getNumberAttribute('end_time');
    }
    public set endTime(value: number) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: number; 
    public get startTime() {
        return this.getNumberAttribute('start_time');
    }
    public set startTime(value: number) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface RulesInterruptionFilterRelativeTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage CcCallAnalyticsCategory#end_percentage}
    */
    readonly endPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage CcCallAnalyticsCategory#start_percentage}
    */
    readonly startPercentage?: number;
}
export class RulesInterruptionFilterRelativeTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesInterruptionFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.endPercentage = this._endPercentage;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPercentage = this._startPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesInterruptionFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endPercentage = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endPercentage = value.endPercentage;
            this._first = value.first;
            this._last = value.last;
            this._startPercentage = value.startPercentage;
        }
    }

    // end_percentage - computed: true, optional: true, required: false
    private _endPercentage?: number; 
    public get endPercentage() {
        return this.getNumberAttribute('end_percentage');
    }
    public set endPercentage(value: number) {
        this._endPercentage = value;
    }
    public resetEndPercentage() {
        this._endPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endPercentageInput() {
        return this._endPercentage;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_percentage - computed: true, optional: true, required: false
    private _startPercentage?: number; 
    public get startPercentage() {
        return this.getNumberAttribute('start_percentage');
    }
    public set startPercentage(value: number) {
        this._startPercentage = value;
    }
    public resetStartPercentage() {
        this._startPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startPercentageInput() {
        return this._startPercentage;
    }
}
export interface InterruptionFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range CcCallAnalyticsCategory#absolute_time_range}
    */
    readonly absoluteTimeRange?: RulesInterruptionFilterAbsoluteTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate CcCallAnalyticsCategory#negate}
    */
    readonly negate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role CcCallAnalyticsCategory#participant_role}
    */
    readonly participantRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range CcCallAnalyticsCategory#relative_time_range}
    */
    readonly relativeTimeRange?: RulesInterruptionFilterRelativeTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold CcCallAnalyticsCategory#threshold}
    */
    readonly threshold?: number;
}
export class InterruptionFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InterruptionFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._absoluteTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._participantRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.participantRole = this._participantRole;
        }
        if (this._relativeTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterruptionFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = undefined;
            this._negate = undefined;
            this._participantRole = undefined;
            this._relativeTimeRange.internalValue = undefined;
            this._threshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
            this._negate = value.negate;
            this._participantRole = value.participantRole;
            this._relativeTimeRange.internalValue = value.relativeTimeRange;
            this._threshold = value.threshold;
        }
    }

    // absolute_time_range - computed: true, optional: true, required: false
    private _absoluteTimeRange = new RulesInterruptionFilterAbsoluteTimeRangePropertyOutputReference(this, "absolute_time_range");
    public get absoluteTimeRange() {
        return this._absoluteTimeRange;
    }
    public putAbsoluteTimeRange(value: RulesInterruptionFilterAbsoluteTimeRangeProperty) {
        this._absoluteTimeRange.internalValue = value;
    }
    public resetAbsoluteTimeRange() {
        this._absoluteTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get absoluteTimeRangeInput() {
        return this._absoluteTimeRange.internalValue;
    }

    // negate - computed: true, optional: true, required: false
    private _negate?: boolean | cdktn.IResolvable; 
    public get negate() {
        return this.getBooleanAttribute('negate');
    }
    public set negate(value: boolean | cdktn.IResolvable) {
        this._negate = value;
    }
    public resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get negateInput() {
        return this._negate;
    }

    // participant_role - computed: true, optional: true, required: false
    private _participantRole?: string; 
    public get participantRole() {
        return this.getStringAttribute('participant_role');
    }
    public set participantRole(value: string) {
        this._participantRole = value;
    }
    public resetParticipantRole() {
        this._participantRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get participantRoleInput() {
        return this._participantRole;
    }

    // relative_time_range - computed: true, optional: true, required: false
    private _relativeTimeRange = new RulesInterruptionFilterRelativeTimeRangePropertyOutputReference(this, "relative_time_range");
    public get relativeTimeRange() {
        return this._relativeTimeRange;
    }
    public putRelativeTimeRange(value: RulesInterruptionFilterRelativeTimeRangeProperty) {
        this._relativeTimeRange.internalValue = value;
    }
    public resetRelativeTimeRange() {
        this._relativeTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativeTimeRangeInput() {
        return this._relativeTimeRange.internalValue;
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
export interface RulesNonTalkTimeFilterAbsoluteTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time CcCallAnalyticsCategory#end_time}
    */
    readonly endTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time CcCallAnalyticsCategory#start_time}
    */
    readonly startTime?: number;
}
export class RulesNonTalkTimeFilterAbsoluteTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesNonTalkTimeFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesNonTalkTimeFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._first = value.first;
            this._last = value.last;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: number; 
    public get endTime() {
        return this.getNumberAttribute('end_time');
    }
    public set endTime(value: number) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: number; 
    public get startTime() {
        return this.getNumberAttribute('start_time');
    }
    public set startTime(value: number) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface RulesNonTalkTimeFilterRelativeTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage CcCallAnalyticsCategory#end_percentage}
    */
    readonly endPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage CcCallAnalyticsCategory#start_percentage}
    */
    readonly startPercentage?: number;
}
export class RulesNonTalkTimeFilterRelativeTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesNonTalkTimeFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.endPercentage = this._endPercentage;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPercentage = this._startPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesNonTalkTimeFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endPercentage = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endPercentage = value.endPercentage;
            this._first = value.first;
            this._last = value.last;
            this._startPercentage = value.startPercentage;
        }
    }

    // end_percentage - computed: true, optional: true, required: false
    private _endPercentage?: number; 
    public get endPercentage() {
        return this.getNumberAttribute('end_percentage');
    }
    public set endPercentage(value: number) {
        this._endPercentage = value;
    }
    public resetEndPercentage() {
        this._endPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endPercentageInput() {
        return this._endPercentage;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_percentage - computed: true, optional: true, required: false
    private _startPercentage?: number; 
    public get startPercentage() {
        return this.getNumberAttribute('start_percentage');
    }
    public set startPercentage(value: number) {
        this._startPercentage = value;
    }
    public resetStartPercentage() {
        this._startPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startPercentageInput() {
        return this._startPercentage;
    }
}
export interface NonTalkTimeFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range CcCallAnalyticsCategory#absolute_time_range}
    */
    readonly absoluteTimeRange?: RulesNonTalkTimeFilterAbsoluteTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate CcCallAnalyticsCategory#negate}
    */
    readonly negate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range CcCallAnalyticsCategory#relative_time_range}
    */
    readonly relativeTimeRange?: RulesNonTalkTimeFilterRelativeTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#threshold CcCallAnalyticsCategory#threshold}
    */
    readonly threshold?: number;
}
export class NonTalkTimeFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NonTalkTimeFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._absoluteTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._relativeTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NonTalkTimeFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = undefined;
            this._negate = undefined;
            this._relativeTimeRange.internalValue = undefined;
            this._threshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
            this._negate = value.negate;
            this._relativeTimeRange.internalValue = value.relativeTimeRange;
            this._threshold = value.threshold;
        }
    }

    // absolute_time_range - computed: true, optional: true, required: false
    private _absoluteTimeRange = new RulesNonTalkTimeFilterAbsoluteTimeRangePropertyOutputReference(this, "absolute_time_range");
    public get absoluteTimeRange() {
        return this._absoluteTimeRange;
    }
    public putAbsoluteTimeRange(value: RulesNonTalkTimeFilterAbsoluteTimeRangeProperty) {
        this._absoluteTimeRange.internalValue = value;
    }
    public resetAbsoluteTimeRange() {
        this._absoluteTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get absoluteTimeRangeInput() {
        return this._absoluteTimeRange.internalValue;
    }

    // negate - computed: true, optional: true, required: false
    private _negate?: boolean | cdktn.IResolvable; 
    public get negate() {
        return this.getBooleanAttribute('negate');
    }
    public set negate(value: boolean | cdktn.IResolvable) {
        this._negate = value;
    }
    public resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get negateInput() {
        return this._negate;
    }

    // relative_time_range - computed: true, optional: true, required: false
    private _relativeTimeRange = new RulesNonTalkTimeFilterRelativeTimeRangePropertyOutputReference(this, "relative_time_range");
    public get relativeTimeRange() {
        return this._relativeTimeRange;
    }
    public putRelativeTimeRange(value: RulesNonTalkTimeFilterRelativeTimeRangeProperty) {
        this._relativeTimeRange.internalValue = value;
    }
    public resetRelativeTimeRange() {
        this._relativeTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativeTimeRangeInput() {
        return this._relativeTimeRange.internalValue;
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
export interface RulesSentimentFilterAbsoluteTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time CcCallAnalyticsCategory#end_time}
    */
    readonly endTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time CcCallAnalyticsCategory#start_time}
    */
    readonly startTime?: number;
}
export class RulesSentimentFilterAbsoluteTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesSentimentFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesSentimentFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._first = value.first;
            this._last = value.last;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: number; 
    public get endTime() {
        return this.getNumberAttribute('end_time');
    }
    public set endTime(value: number) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: number; 
    public get startTime() {
        return this.getNumberAttribute('start_time');
    }
    public set startTime(value: number) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface RulesSentimentFilterRelativeTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage CcCallAnalyticsCategory#end_percentage}
    */
    readonly endPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage CcCallAnalyticsCategory#start_percentage}
    */
    readonly startPercentage?: number;
}
export class RulesSentimentFilterRelativeTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesSentimentFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.endPercentage = this._endPercentage;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPercentage = this._startPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesSentimentFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endPercentage = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endPercentage = value.endPercentage;
            this._first = value.first;
            this._last = value.last;
            this._startPercentage = value.startPercentage;
        }
    }

    // end_percentage - computed: true, optional: true, required: false
    private _endPercentage?: number; 
    public get endPercentage() {
        return this.getNumberAttribute('end_percentage');
    }
    public set endPercentage(value: number) {
        this._endPercentage = value;
    }
    public resetEndPercentage() {
        this._endPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endPercentageInput() {
        return this._endPercentage;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_percentage - computed: true, optional: true, required: false
    private _startPercentage?: number; 
    public get startPercentage() {
        return this.getNumberAttribute('start_percentage');
    }
    public set startPercentage(value: number) {
        this._startPercentage = value;
    }
    public resetStartPercentage() {
        this._startPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startPercentageInput() {
        return this._startPercentage;
    }
}
export interface SentimentFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range CcCallAnalyticsCategory#absolute_time_range}
    */
    readonly absoluteTimeRange?: RulesSentimentFilterAbsoluteTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate CcCallAnalyticsCategory#negate}
    */
    readonly negate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role CcCallAnalyticsCategory#participant_role}
    */
    readonly participantRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range CcCallAnalyticsCategory#relative_time_range}
    */
    readonly relativeTimeRange?: RulesSentimentFilterRelativeTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiments CcCallAnalyticsCategory#sentiments}
    */
    readonly sentiments?: string[];
}
export class SentimentFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SentimentFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._absoluteTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._participantRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.participantRole = this._participantRole;
        }
        if (this._relativeTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
        }
        if (this._sentiments !== undefined) {
            hasAnyValues = true;
            internalValueResult.sentiments = this._sentiments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SentimentFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = undefined;
            this._negate = undefined;
            this._participantRole = undefined;
            this._relativeTimeRange.internalValue = undefined;
            this._sentiments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
            this._negate = value.negate;
            this._participantRole = value.participantRole;
            this._relativeTimeRange.internalValue = value.relativeTimeRange;
            this._sentiments = value.sentiments;
        }
    }

    // absolute_time_range - computed: true, optional: true, required: false
    private _absoluteTimeRange = new RulesSentimentFilterAbsoluteTimeRangePropertyOutputReference(this, "absolute_time_range");
    public get absoluteTimeRange() {
        return this._absoluteTimeRange;
    }
    public putAbsoluteTimeRange(value: RulesSentimentFilterAbsoluteTimeRangeProperty) {
        this._absoluteTimeRange.internalValue = value;
    }
    public resetAbsoluteTimeRange() {
        this._absoluteTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get absoluteTimeRangeInput() {
        return this._absoluteTimeRange.internalValue;
    }

    // negate - computed: true, optional: true, required: false
    private _negate?: boolean | cdktn.IResolvable; 
    public get negate() {
        return this.getBooleanAttribute('negate');
    }
    public set negate(value: boolean | cdktn.IResolvable) {
        this._negate = value;
    }
    public resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get negateInput() {
        return this._negate;
    }

    // participant_role - computed: true, optional: true, required: false
    private _participantRole?: string; 
    public get participantRole() {
        return this.getStringAttribute('participant_role');
    }
    public set participantRole(value: string) {
        this._participantRole = value;
    }
    public resetParticipantRole() {
        this._participantRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get participantRoleInput() {
        return this._participantRole;
    }

    // relative_time_range - computed: true, optional: true, required: false
    private _relativeTimeRange = new RulesSentimentFilterRelativeTimeRangePropertyOutputReference(this, "relative_time_range");
    public get relativeTimeRange() {
        return this._relativeTimeRange;
    }
    public putRelativeTimeRange(value: RulesSentimentFilterRelativeTimeRangeProperty) {
        this._relativeTimeRange.internalValue = value;
    }
    public resetRelativeTimeRange() {
        this._relativeTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativeTimeRangeInput() {
        return this._relativeTimeRange.internalValue;
    }

    // sentiments - computed: true, optional: true, required: false
    private _sentiments?: string[]; 
    public get sentiments() {
        return this.getListAttribute('sentiments');
    }
    public set sentiments(value: string[]) {
        this._sentiments = value;
    }
    public resetSentiments() {
        this._sentiments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sentimentsInput() {
        return this._sentiments;
    }
}
export interface RulesTranscriptFilterAbsoluteTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_time CcCallAnalyticsCategory#end_time}
    */
    readonly endTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_time CcCallAnalyticsCategory#start_time}
    */
    readonly startTime?: number;
}
export class RulesTranscriptFilterAbsoluteTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesTranscriptFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesTranscriptFilterAbsoluteTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._first = value.first;
            this._last = value.last;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: number; 
    public get endTime() {
        return this.getNumberAttribute('end_time');
    }
    public set endTime(value: number) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: number; 
    public get startTime() {
        return this.getNumberAttribute('start_time');
    }
    public set startTime(value: number) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface RulesTranscriptFilterRelativeTimeRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#end_percentage CcCallAnalyticsCategory#end_percentage}
    */
    readonly endPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#first CcCallAnalyticsCategory#first}
    */
    readonly first?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#last CcCallAnalyticsCategory#last}
    */
    readonly last?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#start_percentage CcCallAnalyticsCategory#start_percentage}
    */
    readonly startPercentage?: number;
}
export class RulesTranscriptFilterRelativeTimeRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesTranscriptFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.endPercentage = this._endPercentage;
        }
        if (this._first !== undefined) {
            hasAnyValues = true;
            internalValueResult.first = this._first;
        }
        if (this._last !== undefined) {
            hasAnyValues = true;
            internalValueResult.last = this._last;
        }
        if (this._startPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.startPercentage = this._startPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesTranscriptFilterRelativeTimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endPercentage = undefined;
            this._first = undefined;
            this._last = undefined;
            this._startPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endPercentage = value.endPercentage;
            this._first = value.first;
            this._last = value.last;
            this._startPercentage = value.startPercentage;
        }
    }

    // end_percentage - computed: true, optional: true, required: false
    private _endPercentage?: number; 
    public get endPercentage() {
        return this.getNumberAttribute('end_percentage');
    }
    public set endPercentage(value: number) {
        this._endPercentage = value;
    }
    public resetEndPercentage() {
        this._endPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endPercentageInput() {
        return this._endPercentage;
    }

    // first - computed: true, optional: true, required: false
    private _first?: number; 
    public get first() {
        return this.getNumberAttribute('first');
    }
    public set first(value: number) {
        this._first = value;
    }
    public resetFirst() {
        this._first = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstInput() {
        return this._first;
    }

    // last - computed: true, optional: true, required: false
    private _last?: number; 
    public get last() {
        return this.getNumberAttribute('last');
    }
    public set last(value: number) {
        this._last = value;
    }
    public resetLast() {
        this._last = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastInput() {
        return this._last;
    }

    // start_percentage - computed: true, optional: true, required: false
    private _startPercentage?: number; 
    public get startPercentage() {
        return this.getNumberAttribute('start_percentage');
    }
    public set startPercentage(value: number) {
        this._startPercentage = value;
    }
    public resetStartPercentage() {
        this._startPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startPercentageInput() {
        return this._startPercentage;
    }
}
export interface TranscriptFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#absolute_time_range CcCallAnalyticsCategory#absolute_time_range}
    */
    readonly absoluteTimeRange?: RulesTranscriptFilterAbsoluteTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#negate CcCallAnalyticsCategory#negate}
    */
    readonly negate?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#participant_role CcCallAnalyticsCategory#participant_role}
    */
    readonly participantRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#relative_time_range CcCallAnalyticsCategory#relative_time_range}
    */
    readonly relativeTimeRange?: RulesTranscriptFilterRelativeTimeRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#targets CcCallAnalyticsCategory#targets}
    */
    readonly targets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type CcCallAnalyticsCategory#transcript_filter_type}
    */
    readonly transcriptFilterType?: string;
}
export class TranscriptFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TranscriptFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._absoluteTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.absoluteTimeRange = this._absoluteTimeRange?.internalValue;
        }
        if (this._negate !== undefined) {
            hasAnyValues = true;
            internalValueResult.negate = this._negate;
        }
        if (this._participantRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.participantRole = this._participantRole;
        }
        if (this._relativeTimeRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
        }
        if (this._targets !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets;
        }
        if (this._transcriptFilterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.transcriptFilterType = this._transcriptFilterType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TranscriptFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = undefined;
            this._negate = undefined;
            this._participantRole = undefined;
            this._relativeTimeRange.internalValue = undefined;
            this._targets = undefined;
            this._transcriptFilterType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._absoluteTimeRange.internalValue = value.absoluteTimeRange;
            this._negate = value.negate;
            this._participantRole = value.participantRole;
            this._relativeTimeRange.internalValue = value.relativeTimeRange;
            this._targets = value.targets;
            this._transcriptFilterType = value.transcriptFilterType;
        }
    }

    // absolute_time_range - computed: true, optional: true, required: false
    private _absoluteTimeRange = new RulesTranscriptFilterAbsoluteTimeRangePropertyOutputReference(this, "absolute_time_range");
    public get absoluteTimeRange() {
        return this._absoluteTimeRange;
    }
    public putAbsoluteTimeRange(value: RulesTranscriptFilterAbsoluteTimeRangeProperty) {
        this._absoluteTimeRange.internalValue = value;
    }
    public resetAbsoluteTimeRange() {
        this._absoluteTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get absoluteTimeRangeInput() {
        return this._absoluteTimeRange.internalValue;
    }

    // negate - computed: true, optional: true, required: false
    private _negate?: boolean | cdktn.IResolvable; 
    public get negate() {
        return this.getBooleanAttribute('negate');
    }
    public set negate(value: boolean | cdktn.IResolvable) {
        this._negate = value;
    }
    public resetNegate() {
        this._negate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get negateInput() {
        return this._negate;
    }

    // participant_role - computed: true, optional: true, required: false
    private _participantRole?: string; 
    public get participantRole() {
        return this.getStringAttribute('participant_role');
    }
    public set participantRole(value: string) {
        this._participantRole = value;
    }
    public resetParticipantRole() {
        this._participantRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get participantRoleInput() {
        return this._participantRole;
    }

    // relative_time_range - computed: true, optional: true, required: false
    private _relativeTimeRange = new RulesTranscriptFilterRelativeTimeRangePropertyOutputReference(this, "relative_time_range");
    public get relativeTimeRange() {
        return this._relativeTimeRange;
    }
    public putRelativeTimeRange(value: RulesTranscriptFilterRelativeTimeRangeProperty) {
        this._relativeTimeRange.internalValue = value;
    }
    public resetRelativeTimeRange() {
        this._relativeTimeRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativeTimeRangeInput() {
        return this._relativeTimeRange.internalValue;
    }

    // targets - computed: true, optional: true, required: false
    private _targets?: string[]; 
    public get targets() {
        return this.getListAttribute('targets');
    }
    public set targets(value: string[]) {
        this._targets = value;
    }
    public resetTargets() {
        this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets;
    }

    // transcript_filter_type - computed: true, optional: true, required: false
    private _transcriptFilterType?: string; 
    public get transcriptFilterType() {
        return this.getStringAttribute('transcript_filter_type');
    }
    public set transcriptFilterType(value: string) {
        this._transcriptFilterType = value;
    }
    public resetTranscriptFilterType() {
        this._transcriptFilterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transcriptFilterTypeInput() {
        return this._transcriptFilterType;
    }
}
export interface RulesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#interruption_filter CcCallAnalyticsCategory#interruption_filter}
    */
    readonly interruptionFilter?: InterruptionFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter CcCallAnalyticsCategory#non_talk_time_filter}
    */
    readonly nonTalkTimeFilter?: NonTalkTimeFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#sentiment_filter CcCallAnalyticsCategory#sentiment_filter}
    */
    readonly sentimentFilter?: SentimentFilterProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#transcript_filter CcCallAnalyticsCategory#transcript_filter}
    */
    readonly transcriptFilter?: TranscriptFilterProperty;
}
export class RulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interruptionFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.interruptionFilter = this._interruptionFilter?.internalValue;
        }
        if (this._nonTalkTimeFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonTalkTimeFilter = this._nonTalkTimeFilter?.internalValue;
        }
        if (this._sentimentFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sentimentFilter = this._sentimentFilter?.internalValue;
        }
        if (this._transcriptFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transcriptFilter = this._transcriptFilter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interruptionFilter.internalValue = undefined;
            this._nonTalkTimeFilter.internalValue = undefined;
            this._sentimentFilter.internalValue = undefined;
            this._transcriptFilter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interruptionFilter.internalValue = value.interruptionFilter;
            this._nonTalkTimeFilter.internalValue = value.nonTalkTimeFilter;
            this._sentimentFilter.internalValue = value.sentimentFilter;
            this._transcriptFilter.internalValue = value.transcriptFilter;
        }
    }

    // interruption_filter - computed: true, optional: true, required: false
    private _interruptionFilter = new InterruptionFilterPropertyOutputReference(this, "interruption_filter");
    public get interruptionFilter() {
        return this._interruptionFilter;
    }
    public putInterruptionFilter(value: InterruptionFilterProperty) {
        this._interruptionFilter.internalValue = value;
    }
    public resetInterruptionFilter() {
        this._interruptionFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interruptionFilterInput() {
        return this._interruptionFilter.internalValue;
    }

    // non_talk_time_filter - computed: true, optional: true, required: false
    private _nonTalkTimeFilter = new NonTalkTimeFilterPropertyOutputReference(this, "non_talk_time_filter");
    public get nonTalkTimeFilter() {
        return this._nonTalkTimeFilter;
    }
    public putNonTalkTimeFilter(value: NonTalkTimeFilterProperty) {
        this._nonTalkTimeFilter.internalValue = value;
    }
    public resetNonTalkTimeFilter() {
        this._nonTalkTimeFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonTalkTimeFilterInput() {
        return this._nonTalkTimeFilter.internalValue;
    }

    // sentiment_filter - computed: true, optional: true, required: false
    private _sentimentFilter = new SentimentFilterPropertyOutputReference(this, "sentiment_filter");
    public get sentimentFilter() {
        return this._sentimentFilter;
    }
    public putSentimentFilter(value: SentimentFilterProperty) {
        this._sentimentFilter.internalValue = value;
    }
    public resetSentimentFilter() {
        this._sentimentFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sentimentFilterInput() {
        return this._sentimentFilter.internalValue;
    }

    // transcript_filter - computed: true, optional: true, required: false
    private _transcriptFilter = new TranscriptFilterPropertyOutputReference(this, "transcript_filter");
    public get transcriptFilter() {
        return this._transcriptFilter;
    }
    public putTranscriptFilter(value: TranscriptFilterProperty) {
        this._transcriptFilter.internalValue = value;
    }
    public resetTranscriptFilter() {
        this._transcriptFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transcriptFilterInput() {
        return this._transcriptFilter.internalValue;
    }
}

export class RulesPropertyList extends cdktn.ComplexList {
    public internalValue? : RulesProperty[] | cdktn.IResolvable

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
    public get(index: number): RulesPropertyOutputReference {
        return new RulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#key CcCallAnalyticsCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/transcribe_call_analytics_category#value CcCallAnalyticsCategory#value}
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
