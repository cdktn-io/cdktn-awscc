// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSamplingRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_name CcSamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rule CcSamplingRule#sampling_rule}
    */
    readonly samplingRule?: CcSamplingRule.SamplingRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rule_record CcSamplingRule#sampling_rule_record}
    */
    readonly samplingRuleRecord?: CcSamplingRule.SamplingRuleRecordProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rule_update CcSamplingRule#sampling_rule_update}
    */
    readonly samplingRuleUpdate?: CcSamplingRule.SamplingRuleUpdateProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#tags CcSamplingRule#tags}
    */
    readonly tags?: CcSamplingRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule}
*/
export class CcSamplingRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_xray_sampling_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSamplingRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSamplingRule to import
    * @param importFromId The id of the existing CcSamplingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSamplingRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_sampling_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule awscc_xray_sampling_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSamplingRuleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSamplingRuleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_xray_sampling_rule',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._ruleName = config.ruleName;
        this._samplingRule.internalValue = config.samplingRule;
        this._samplingRuleRecord.internalValue = config.samplingRuleRecord;
        this._samplingRuleUpdate.internalValue = config.samplingRuleUpdate;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // sampling_rule - computed: true, optional: true, required: false
    private _samplingRule = new CcSamplingRule.SamplingRulePropertyOutputReference(this, "sampling_rule");
    public get samplingRule() {
        return this._samplingRule;
    }
    public putSamplingRule(value: CcSamplingRule.SamplingRuleProperty) {
        this._samplingRule.internalValue = value;
    }
    public resetSamplingRule() {
        this._samplingRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRuleInput() {
        return this._samplingRule.internalValue;
    }

    // sampling_rule_record - computed: true, optional: true, required: false
    private _samplingRuleRecord = new CcSamplingRule.SamplingRuleRecordPropertyOutputReference(this, "sampling_rule_record");
    public get samplingRuleRecord() {
        return this._samplingRuleRecord;
    }
    public putSamplingRuleRecord(value: CcSamplingRule.SamplingRuleRecordProperty) {
        this._samplingRuleRecord.internalValue = value;
    }
    public resetSamplingRuleRecord() {
        this._samplingRuleRecord.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRuleRecordInput() {
        return this._samplingRuleRecord.internalValue;
    }

    // sampling_rule_update - computed: true, optional: true, required: false
    private _samplingRuleUpdate = new CcSamplingRule.SamplingRuleUpdatePropertyOutputReference(this, "sampling_rule_update");
    public get samplingRuleUpdate() {
        return this._samplingRuleUpdate;
    }
    public putSamplingRuleUpdate(value: CcSamplingRule.SamplingRuleUpdateProperty) {
        this._samplingRuleUpdate.internalValue = value;
    }
    public resetSamplingRuleUpdate() {
        this._samplingRuleUpdate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRuleUpdateInput() {
        return this._samplingRuleUpdate.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSamplingRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSamplingRule.TagProperty[] | cdktn.IResolvable) {
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
            rule_name: cdktn.stringToTerraform(this._ruleName),
            sampling_rule: ccSamplingRuleSamplingRulePropertyToTerraform(this._samplingRule.internalValue),
            sampling_rule_record: ccSamplingRuleSamplingRuleRecordPropertyToTerraform(this._samplingRuleRecord.internalValue),
            sampling_rule_update: ccSamplingRuleSamplingRuleUpdatePropertyToTerraform(this._samplingRuleUpdate.internalValue),
            tags: cdktn.listMapper(ccSamplingRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sampling_rule: {
                value: ccSamplingRuleSamplingRulePropertyToHclTerraform(this._samplingRule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSamplingRule.SamplingRuleProperty",
            },
            sampling_rule_record: {
                value: ccSamplingRuleSamplingRuleRecordPropertyToHclTerraform(this._samplingRuleRecord.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSamplingRule.SamplingRuleRecordProperty",
            },
            sampling_rule_update: {
                value: ccSamplingRuleSamplingRuleUpdatePropertyToHclTerraform(this._samplingRuleUpdate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSamplingRule.SamplingRuleUpdateProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSamplingRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSamplingRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSamplingRuleSamplingRateBoostPropertyToTerraform(struct?: CcSamplingRule.SamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooldown_window_minutes: cdktn.numberToTerraform(struct!.cooldownWindowMinutes),
        max_rate: cdktn.numberToTerraform(struct!.maxRate),
    }
}


export function ccSamplingRuleSamplingRateBoostPropertyToHclTerraform(struct?: CcSamplingRule.SamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooldown_window_minutes: {
            value: cdktn.numberToHclTerraform(struct!.cooldownWindowMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_rate: {
            value: cdktn.numberToHclTerraform(struct!.maxRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRulePropertyToTerraform(struct?: CcSamplingRule.SamplingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
        fixed_rate: cdktn.numberToTerraform(struct!.fixedRate),
        host: cdktn.stringToTerraform(struct!.host),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        priority: cdktn.numberToTerraform(struct!.priority),
        reservoir_size: cdktn.numberToTerraform(struct!.reservoirSize),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        rule_arn: cdktn.stringToTerraform(struct!.ruleArn),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
        sampling_rate_boost: ccSamplingRuleSamplingRateBoostPropertyToTerraform(struct!.samplingRateBoost),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
        service_type: cdktn.stringToTerraform(struct!.serviceType),
        url_path: cdktn.stringToTerraform(struct!.urlPath),
        version: cdktn.numberToTerraform(struct!.version),
    }
}


export function ccSamplingRuleSamplingRulePropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        fixed_rate: {
            value: cdktn.numberToHclTerraform(struct!.fixedRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reservoir_size: {
            value: cdktn.numberToHclTerraform(struct!.reservoirSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_arn: {
            value: cdktn.stringToHclTerraform(struct!.ruleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sampling_rate_boost: {
            value: ccSamplingRuleSamplingRateBoostPropertyToHclTerraform(struct!.samplingRateBoost),
            isBlock: true,
            type: "struct",
            storageClassType: "SamplingRateBoostProperty",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_type: {
            value: cdktn.stringToHclTerraform(struct!.serviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_path: {
            value: cdktn.stringToHclTerraform(struct!.urlPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.numberToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostPropertyToTerraform(struct?: CcSamplingRule.SamplingRuleRecordSamplingRuleSamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooldown_window_minutes: cdktn.numberToTerraform(struct!.cooldownWindowMinutes),
        max_rate: cdktn.numberToTerraform(struct!.maxRate),
    }
}


export function ccSamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostPropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleRecordSamplingRuleSamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooldown_window_minutes: {
            value: cdktn.numberToHclTerraform(struct!.cooldownWindowMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_rate: {
            value: cdktn.numberToHclTerraform(struct!.maxRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRuleRecordSamplingRulePropertyToTerraform(struct?: CcSamplingRule.SamplingRuleRecordSamplingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
        fixed_rate: cdktn.numberToTerraform(struct!.fixedRate),
        host: cdktn.stringToTerraform(struct!.host),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        priority: cdktn.numberToTerraform(struct!.priority),
        reservoir_size: cdktn.numberToTerraform(struct!.reservoirSize),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        rule_arn: cdktn.stringToTerraform(struct!.ruleArn),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
        sampling_rate_boost: ccSamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostPropertyToTerraform(struct!.samplingRateBoost),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
        service_type: cdktn.stringToTerraform(struct!.serviceType),
        url_path: cdktn.stringToTerraform(struct!.urlPath),
        version: cdktn.numberToTerraform(struct!.version),
    }
}


export function ccSamplingRuleSamplingRuleRecordSamplingRulePropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleRecordSamplingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        fixed_rate: {
            value: cdktn.numberToHclTerraform(struct!.fixedRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reservoir_size: {
            value: cdktn.numberToHclTerraform(struct!.reservoirSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_arn: {
            value: cdktn.stringToHclTerraform(struct!.ruleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sampling_rate_boost: {
            value: ccSamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostPropertyToHclTerraform(struct!.samplingRateBoost),
            isBlock: true,
            type: "struct",
            storageClassType: "SamplingRuleRecordSamplingRuleSamplingRateBoostProperty",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_type: {
            value: cdktn.stringToHclTerraform(struct!.serviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_path: {
            value: cdktn.stringToHclTerraform(struct!.urlPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.numberToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRuleRecordPropertyToTerraform(struct?: CcSamplingRule.SamplingRuleRecordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        created_at: cdktn.stringToTerraform(struct!.createdAt),
        modified_at: cdktn.stringToTerraform(struct!.modifiedAt),
        sampling_rule: ccSamplingRuleSamplingRuleRecordSamplingRulePropertyToTerraform(struct!.samplingRule),
    }
}


export function ccSamplingRuleSamplingRuleRecordPropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleRecordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        created_at: {
            value: cdktn.stringToHclTerraform(struct!.createdAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_at: {
            value: cdktn.stringToHclTerraform(struct!.modifiedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sampling_rule: {
            value: ccSamplingRuleSamplingRuleRecordSamplingRulePropertyToHclTerraform(struct!.samplingRule),
            isBlock: true,
            type: "struct",
            storageClassType: "SamplingRuleRecordSamplingRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRuleUpdateSamplingRateBoostPropertyToTerraform(struct?: CcSamplingRule.SamplingRuleUpdateSamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooldown_window_minutes: cdktn.numberToTerraform(struct!.cooldownWindowMinutes),
        max_rate: cdktn.numberToTerraform(struct!.maxRate),
    }
}


export function ccSamplingRuleSamplingRuleUpdateSamplingRateBoostPropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleUpdateSamplingRateBoostProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooldown_window_minutes: {
            value: cdktn.numberToHclTerraform(struct!.cooldownWindowMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_rate: {
            value: cdktn.numberToHclTerraform(struct!.maxRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleSamplingRuleUpdatePropertyToTerraform(struct?: CcSamplingRule.SamplingRuleUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
        fixed_rate: cdktn.numberToTerraform(struct!.fixedRate),
        host: cdktn.stringToTerraform(struct!.host),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        priority: cdktn.numberToTerraform(struct!.priority),
        reservoir_size: cdktn.numberToTerraform(struct!.reservoirSize),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        rule_arn: cdktn.stringToTerraform(struct!.ruleArn),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
        sampling_rate_boost: ccSamplingRuleSamplingRuleUpdateSamplingRateBoostPropertyToTerraform(struct!.samplingRateBoost),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
        service_type: cdktn.stringToTerraform(struct!.serviceType),
        url_path: cdktn.stringToTerraform(struct!.urlPath),
    }
}


export function ccSamplingRuleSamplingRuleUpdatePropertyToHclTerraform(struct?: CcSamplingRule.SamplingRuleUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        fixed_rate: {
            value: cdktn.numberToHclTerraform(struct!.fixedRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        host: {
            value: cdktn.stringToHclTerraform(struct!.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reservoir_size: {
            value: cdktn.numberToHclTerraform(struct!.reservoirSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_arn: {
            value: cdktn.stringToHclTerraform(struct!.ruleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sampling_rate_boost: {
            value: ccSamplingRuleSamplingRuleUpdateSamplingRateBoostPropertyToHclTerraform(struct!.samplingRateBoost),
            isBlock: true,
            type: "struct",
            storageClassType: "SamplingRuleUpdateSamplingRateBoostProperty",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_type: {
            value: cdktn.stringToHclTerraform(struct!.serviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_path: {
            value: cdktn.stringToHclTerraform(struct!.urlPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSamplingRuleTagPropertyToTerraform(struct?: CcSamplingRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSamplingRuleTagPropertyToHclTerraform(struct?: CcSamplingRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSamplingRule {
export interface SamplingRateBoostProperty {
    /**
    * Time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs, no further boosts are allowed until the next window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#cooldown_window_minutes CcSamplingRule#cooldown_window_minutes}
    */
    readonly cooldownWindowMinutes?: number;
    /**
    * The maximum sampling rate X-Ray will apply when it detects anomalies. X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#max_rate CcSamplingRule#max_rate}
    */
    readonly maxRate?: number;
}
export class SamplingRateBoostPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRateBoostProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cooldownWindowMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldownWindowMinutes = this._cooldownWindowMinutes;
        }
        if (this._maxRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRate = this._maxRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRateBoostProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = undefined;
            this._maxRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = value.cooldownWindowMinutes;
            this._maxRate = value.maxRate;
        }
    }

    // cooldown_window_minutes - computed: true, optional: true, required: false
    private _cooldownWindowMinutes?: number; 
    public get cooldownWindowMinutes() {
        return this.getNumberAttribute('cooldown_window_minutes');
    }
    public set cooldownWindowMinutes(value: number) {
        this._cooldownWindowMinutes = value;
    }
    public resetCooldownWindowMinutes() {
        this._cooldownWindowMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownWindowMinutesInput() {
        return this._cooldownWindowMinutes;
    }

    // max_rate - computed: true, optional: true, required: false
    private _maxRate?: number; 
    public get maxRate() {
        return this.getNumberAttribute('max_rate');
    }
    public set maxRate(value: number) {
        this._maxRate = value;
    }
    public resetMaxRate() {
        this._maxRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRateInput() {
        return this._maxRate;
    }
}
export interface SamplingRuleProperty {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#attributes CcSamplingRule#attributes}
    */
    readonly attributes?: { [key: string]: string };
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#fixed_rate CcSamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#host CcSamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#http_method CcSamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#priority CcSamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#reservoir_size CcSamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#resource_arn CcSamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_arn CcSamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_name CcSamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rate_boost CcSamplingRule#sampling_rate_boost}
    */
    readonly samplingRateBoost?: SamplingRateBoostProperty;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_name CcSamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_type CcSamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#url_path CcSamplingRule#url_path}
    */
    readonly urlPath?: string;
    /**
    * The version of the sampling rule format (1)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#version CcSamplingRule#version}
    */
    readonly version?: number;
}
export class SamplingRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._fixedRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedRate = this._fixedRate;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._reservoirSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservoirSize = this._reservoirSize;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._ruleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleArn = this._ruleArn;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        if (this._samplingRateBoost?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingRateBoost = this._samplingRateBoost?.internalValue;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._serviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceType = this._serviceType;
        }
        if (this._urlPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlPath = this._urlPath;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes = undefined;
            this._fixedRate = undefined;
            this._host = undefined;
            this._httpMethod = undefined;
            this._priority = undefined;
            this._reservoirSize = undefined;
            this._resourceArn = undefined;
            this._ruleArn = undefined;
            this._ruleName = undefined;
            this._samplingRateBoost.internalValue = undefined;
            this._serviceName = undefined;
            this._serviceType = undefined;
            this._urlPath = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes = value.attributes;
            this._fixedRate = value.fixedRate;
            this._host = value.host;
            this._httpMethod = value.httpMethod;
            this._priority = value.priority;
            this._reservoirSize = value.reservoirSize;
            this._resourceArn = value.resourceArn;
            this._ruleArn = value.ruleArn;
            this._ruleName = value.ruleName;
            this._samplingRateBoost.internalValue = value.samplingRateBoost;
            this._serviceName = value.serviceName;
            this._serviceType = value.serviceType;
            this._urlPath = value.urlPath;
            this._version = value.version;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
    }

    // fixed_rate - computed: true, optional: true, required: false
    private _fixedRate?: number; 
    public get fixedRate() {
        return this.getNumberAttribute('fixed_rate');
    }
    public set fixedRate(value: number) {
        this._fixedRate = value;
    }
    public resetFixedRate() {
        this._fixedRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedRateInput() {
        return this._fixedRate;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // reservoir_size - computed: true, optional: true, required: false
    private _reservoirSize?: number; 
    public get reservoirSize() {
        return this.getNumberAttribute('reservoir_size');
    }
    public set reservoirSize(value: number) {
        this._reservoirSize = value;
    }
    public resetReservoirSize() {
        this._reservoirSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservoirSizeInput() {
        return this._reservoirSize;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // rule_arn - computed: true, optional: true, required: false
    private _ruleArn?: string; 
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }
    public set ruleArn(value: string) {
        this._ruleArn = value;
    }
    public resetRuleArn() {
        this._ruleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleArnInput() {
        return this._ruleArn;
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // sampling_rate_boost - computed: true, optional: true, required: false
    private _samplingRateBoost = new SamplingRateBoostPropertyOutputReference(this, "sampling_rate_boost");
    public get samplingRateBoost() {
        return this._samplingRateBoost;
    }
    public putSamplingRateBoost(value: SamplingRateBoostProperty) {
        this._samplingRateBoost.internalValue = value;
    }
    public resetSamplingRateBoost() {
        this._samplingRateBoost.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateBoostInput() {
        return this._samplingRateBoost.internalValue;
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // service_type - computed: true, optional: true, required: false
    private _serviceType?: string; 
    public get serviceType() {
        return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string) {
        this._serviceType = value;
    }
    public resetServiceType() {
        this._serviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
        return this._serviceType;
    }

    // url_path - computed: true, optional: true, required: false
    private _urlPath?: string; 
    public get urlPath() {
        return this.getStringAttribute('url_path');
    }
    public set urlPath(value: string) {
        this._urlPath = value;
    }
    public resetUrlPath() {
        this._urlPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlPathInput() {
        return this._urlPath;
    }

    // version - computed: true, optional: true, required: false
    private _version?: number; 
    public get version() {
        return this.getNumberAttribute('version');
    }
    public set version(value: number) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface SamplingRuleRecordSamplingRuleSamplingRateBoostProperty {
    /**
    * Time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs, no further boosts are allowed until the next window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#cooldown_window_minutes CcSamplingRule#cooldown_window_minutes}
    */
    readonly cooldownWindowMinutes?: number;
    /**
    * The maximum sampling rate X-Ray will apply when it detects anomalies. X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#max_rate CcSamplingRule#max_rate}
    */
    readonly maxRate?: number;
}
export class SamplingRuleRecordSamplingRuleSamplingRateBoostPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleRecordSamplingRuleSamplingRateBoostProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cooldownWindowMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldownWindowMinutes = this._cooldownWindowMinutes;
        }
        if (this._maxRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRate = this._maxRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleRecordSamplingRuleSamplingRateBoostProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = undefined;
            this._maxRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = value.cooldownWindowMinutes;
            this._maxRate = value.maxRate;
        }
    }

    // cooldown_window_minutes - computed: true, optional: true, required: false
    private _cooldownWindowMinutes?: number; 
    public get cooldownWindowMinutes() {
        return this.getNumberAttribute('cooldown_window_minutes');
    }
    public set cooldownWindowMinutes(value: number) {
        this._cooldownWindowMinutes = value;
    }
    public resetCooldownWindowMinutes() {
        this._cooldownWindowMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownWindowMinutesInput() {
        return this._cooldownWindowMinutes;
    }

    // max_rate - computed: true, optional: true, required: false
    private _maxRate?: number; 
    public get maxRate() {
        return this.getNumberAttribute('max_rate');
    }
    public set maxRate(value: number) {
        this._maxRate = value;
    }
    public resetMaxRate() {
        this._maxRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRateInput() {
        return this._maxRate;
    }
}
export interface SamplingRuleRecordSamplingRuleProperty {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#attributes CcSamplingRule#attributes}
    */
    readonly attributes?: { [key: string]: string };
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#fixed_rate CcSamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#host CcSamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#http_method CcSamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#priority CcSamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#reservoir_size CcSamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#resource_arn CcSamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_arn CcSamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_name CcSamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rate_boost CcSamplingRule#sampling_rate_boost}
    */
    readonly samplingRateBoost?: SamplingRuleRecordSamplingRuleSamplingRateBoostProperty;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_name CcSamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_type CcSamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#url_path CcSamplingRule#url_path}
    */
    readonly urlPath?: string;
    /**
    * The version of the sampling rule format (1)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#version CcSamplingRule#version}
    */
    readonly version?: number;
}
export class SamplingRuleRecordSamplingRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleRecordSamplingRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._fixedRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedRate = this._fixedRate;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._reservoirSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservoirSize = this._reservoirSize;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._ruleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleArn = this._ruleArn;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        if (this._samplingRateBoost?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingRateBoost = this._samplingRateBoost?.internalValue;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._serviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceType = this._serviceType;
        }
        if (this._urlPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlPath = this._urlPath;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleRecordSamplingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes = undefined;
            this._fixedRate = undefined;
            this._host = undefined;
            this._httpMethod = undefined;
            this._priority = undefined;
            this._reservoirSize = undefined;
            this._resourceArn = undefined;
            this._ruleArn = undefined;
            this._ruleName = undefined;
            this._samplingRateBoost.internalValue = undefined;
            this._serviceName = undefined;
            this._serviceType = undefined;
            this._urlPath = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes = value.attributes;
            this._fixedRate = value.fixedRate;
            this._host = value.host;
            this._httpMethod = value.httpMethod;
            this._priority = value.priority;
            this._reservoirSize = value.reservoirSize;
            this._resourceArn = value.resourceArn;
            this._ruleArn = value.ruleArn;
            this._ruleName = value.ruleName;
            this._samplingRateBoost.internalValue = value.samplingRateBoost;
            this._serviceName = value.serviceName;
            this._serviceType = value.serviceType;
            this._urlPath = value.urlPath;
            this._version = value.version;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
    }

    // fixed_rate - computed: true, optional: true, required: false
    private _fixedRate?: number; 
    public get fixedRate() {
        return this.getNumberAttribute('fixed_rate');
    }
    public set fixedRate(value: number) {
        this._fixedRate = value;
    }
    public resetFixedRate() {
        this._fixedRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedRateInput() {
        return this._fixedRate;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // reservoir_size - computed: true, optional: true, required: false
    private _reservoirSize?: number; 
    public get reservoirSize() {
        return this.getNumberAttribute('reservoir_size');
    }
    public set reservoirSize(value: number) {
        this._reservoirSize = value;
    }
    public resetReservoirSize() {
        this._reservoirSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservoirSizeInput() {
        return this._reservoirSize;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // rule_arn - computed: true, optional: true, required: false
    private _ruleArn?: string; 
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }
    public set ruleArn(value: string) {
        this._ruleArn = value;
    }
    public resetRuleArn() {
        this._ruleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleArnInput() {
        return this._ruleArn;
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // sampling_rate_boost - computed: true, optional: true, required: false
    private _samplingRateBoost = new SamplingRuleRecordSamplingRuleSamplingRateBoostPropertyOutputReference(this, "sampling_rate_boost");
    public get samplingRateBoost() {
        return this._samplingRateBoost;
    }
    public putSamplingRateBoost(value: SamplingRuleRecordSamplingRuleSamplingRateBoostProperty) {
        this._samplingRateBoost.internalValue = value;
    }
    public resetSamplingRateBoost() {
        this._samplingRateBoost.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateBoostInput() {
        return this._samplingRateBoost.internalValue;
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // service_type - computed: true, optional: true, required: false
    private _serviceType?: string; 
    public get serviceType() {
        return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string) {
        this._serviceType = value;
    }
    public resetServiceType() {
        this._serviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
        return this._serviceType;
    }

    // url_path - computed: true, optional: true, required: false
    private _urlPath?: string; 
    public get urlPath() {
        return this.getStringAttribute('url_path');
    }
    public set urlPath(value: string) {
        this._urlPath = value;
    }
    public resetUrlPath() {
        this._urlPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlPathInput() {
        return this._urlPath;
    }

    // version - computed: true, optional: true, required: false
    private _version?: number; 
    public get version() {
        return this.getNumberAttribute('version');
    }
    public set version(value: number) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface SamplingRuleRecordProperty {
    /**
    * When the rule was created, in Unix time seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#created_at CcSamplingRule#created_at}
    */
    readonly createdAt?: string;
    /**
    * When the rule was modified, in Unix time seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#modified_at CcSamplingRule#modified_at}
    */
    readonly modifiedAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rule CcSamplingRule#sampling_rule}
    */
    readonly samplingRule?: SamplingRuleRecordSamplingRuleProperty;
}
export class SamplingRuleRecordPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleRecordProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createdAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._modifiedAt !== undefined) {
            hasAnyValues = true;
            internalValueResult.modifiedAt = this._modifiedAt;
        }
        if (this._samplingRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingRule = this._samplingRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleRecordProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createdAt = undefined;
            this._modifiedAt = undefined;
            this._samplingRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createdAt = value.createdAt;
            this._modifiedAt = value.modifiedAt;
            this._samplingRule.internalValue = value.samplingRule;
        }
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt?: string; 
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt;
    }

    // modified_at - computed: true, optional: true, required: false
    private _modifiedAt?: string; 
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    public set modifiedAt(value: string) {
        this._modifiedAt = value;
    }
    public resetModifiedAt() {
        this._modifiedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modifiedAtInput() {
        return this._modifiedAt;
    }

    // sampling_rule - computed: true, optional: true, required: false
    private _samplingRule = new SamplingRuleRecordSamplingRulePropertyOutputReference(this, "sampling_rule");
    public get samplingRule() {
        return this._samplingRule;
    }
    public putSamplingRule(value: SamplingRuleRecordSamplingRuleProperty) {
        this._samplingRule.internalValue = value;
    }
    public resetSamplingRule() {
        this._samplingRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRuleInput() {
        return this._samplingRule.internalValue;
    }
}
export interface SamplingRuleUpdateSamplingRateBoostProperty {
    /**
    * Time window (in minutes) in which only one sampling rate boost can be triggered. After a boost occurs, no further boosts are allowed until the next window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#cooldown_window_minutes CcSamplingRule#cooldown_window_minutes}
    */
    readonly cooldownWindowMinutes?: number;
    /**
    * The maximum sampling rate X-Ray will apply when it detects anomalies. X-Ray determines the appropriate rate between your baseline and the maximum, depending on anomaly activity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#max_rate CcSamplingRule#max_rate}
    */
    readonly maxRate?: number;
}
export class SamplingRuleUpdateSamplingRateBoostPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleUpdateSamplingRateBoostProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cooldownWindowMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldownWindowMinutes = this._cooldownWindowMinutes;
        }
        if (this._maxRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRate = this._maxRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleUpdateSamplingRateBoostProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = undefined;
            this._maxRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cooldownWindowMinutes = value.cooldownWindowMinutes;
            this._maxRate = value.maxRate;
        }
    }

    // cooldown_window_minutes - computed: true, optional: true, required: false
    private _cooldownWindowMinutes?: number; 
    public get cooldownWindowMinutes() {
        return this.getNumberAttribute('cooldown_window_minutes');
    }
    public set cooldownWindowMinutes(value: number) {
        this._cooldownWindowMinutes = value;
    }
    public resetCooldownWindowMinutes() {
        this._cooldownWindowMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownWindowMinutesInput() {
        return this._cooldownWindowMinutes;
    }

    // max_rate - computed: true, optional: true, required: false
    private _maxRate?: number; 
    public get maxRate() {
        return this.getNumberAttribute('max_rate');
    }
    public set maxRate(value: number) {
        this._maxRate = value;
    }
    public resetMaxRate() {
        this._maxRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRateInput() {
        return this._maxRate;
    }
}
export interface SamplingRuleUpdateProperty {
    /**
    * Matches attributes derived from the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#attributes CcSamplingRule#attributes}
    */
    readonly attributes?: { [key: string]: string };
    /**
    * The percentage of matching requests to instrument, after the reservoir is exhausted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#fixed_rate CcSamplingRule#fixed_rate}
    */
    readonly fixedRate?: number;
    /**
    * Matches the hostname from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#host CcSamplingRule#host}
    */
    readonly host?: string;
    /**
    * Matches the HTTP method from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#http_method CcSamplingRule#http_method}
    */
    readonly httpMethod?: string;
    /**
    * The priority of the sampling rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#priority CcSamplingRule#priority}
    */
    readonly priority?: number;
    /**
    * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#reservoir_size CcSamplingRule#reservoir_size}
    */
    readonly reservoirSize?: number;
    /**
    * Matches the ARN of the AWS resource on which the service runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#resource_arn CcSamplingRule#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_arn CcSamplingRule#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#rule_name CcSamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#sampling_rate_boost CcSamplingRule#sampling_rate_boost}
    */
    readonly samplingRateBoost?: SamplingRuleUpdateSamplingRateBoostProperty;
    /**
    * Matches the name that the service uses to identify itself in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_name CcSamplingRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Matches the origin that the service uses to identify its type in segments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#service_type CcSamplingRule#service_type}
    */
    readonly serviceType?: string;
    /**
    * Matches the path from a request URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#url_path CcSamplingRule#url_path}
    */
    readonly urlPath?: string;
}
export class SamplingRuleUpdatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingRuleUpdateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._fixedRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedRate = this._fixedRate;
        }
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._reservoirSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservoirSize = this._reservoirSize;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._ruleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleArn = this._ruleArn;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        if (this._samplingRateBoost?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingRateBoost = this._samplingRateBoost?.internalValue;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._serviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceType = this._serviceType;
        }
        if (this._urlPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlPath = this._urlPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingRuleUpdateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes = undefined;
            this._fixedRate = undefined;
            this._host = undefined;
            this._httpMethod = undefined;
            this._priority = undefined;
            this._reservoirSize = undefined;
            this._resourceArn = undefined;
            this._ruleArn = undefined;
            this._ruleName = undefined;
            this._samplingRateBoost.internalValue = undefined;
            this._serviceName = undefined;
            this._serviceType = undefined;
            this._urlPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes = value.attributes;
            this._fixedRate = value.fixedRate;
            this._host = value.host;
            this._httpMethod = value.httpMethod;
            this._priority = value.priority;
            this._reservoirSize = value.reservoirSize;
            this._resourceArn = value.resourceArn;
            this._ruleArn = value.ruleArn;
            this._ruleName = value.ruleName;
            this._samplingRateBoost.internalValue = value.samplingRateBoost;
            this._serviceName = value.serviceName;
            this._serviceType = value.serviceType;
            this._urlPath = value.urlPath;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
    }

    // fixed_rate - computed: true, optional: true, required: false
    private _fixedRate?: number; 
    public get fixedRate() {
        return this.getNumberAttribute('fixed_rate');
    }
    public set fixedRate(value: number) {
        this._fixedRate = value;
    }
    public resetFixedRate() {
        this._fixedRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedRateInput() {
        return this._fixedRate;
    }

    // host - computed: true, optional: true, required: false
    private _host?: string; 
    public get host() {
        return this.getStringAttribute('host');
    }
    public set host(value: string) {
        this._host = value;
    }
    public resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostInput() {
        return this._host;
    }

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // reservoir_size - computed: true, optional: true, required: false
    private _reservoirSize?: number; 
    public get reservoirSize() {
        return this.getNumberAttribute('reservoir_size');
    }
    public set reservoirSize(value: number) {
        this._reservoirSize = value;
    }
    public resetReservoirSize() {
        this._reservoirSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservoirSizeInput() {
        return this._reservoirSize;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // rule_arn - computed: true, optional: true, required: false
    private _ruleArn?: string; 
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }
    public set ruleArn(value: string) {
        this._ruleArn = value;
    }
    public resetRuleArn() {
        this._ruleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleArnInput() {
        return this._ruleArn;
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // sampling_rate_boost - computed: true, optional: true, required: false
    private _samplingRateBoost = new SamplingRuleUpdateSamplingRateBoostPropertyOutputReference(this, "sampling_rate_boost");
    public get samplingRateBoost() {
        return this._samplingRateBoost;
    }
    public putSamplingRateBoost(value: SamplingRuleUpdateSamplingRateBoostProperty) {
        this._samplingRateBoost.internalValue = value;
    }
    public resetSamplingRateBoost() {
        this._samplingRateBoost.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateBoostInput() {
        return this._samplingRateBoost.internalValue;
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // service_type - computed: true, optional: true, required: false
    private _serviceType?: string; 
    public get serviceType() {
        return this.getStringAttribute('service_type');
    }
    public set serviceType(value: string) {
        this._serviceType = value;
    }
    public resetServiceType() {
        this._serviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceTypeInput() {
        return this._serviceType;
    }

    // url_path - computed: true, optional: true, required: false
    private _urlPath?: string; 
    public get urlPath() {
        return this.getStringAttribute('url_path');
    }
    public set urlPath(value: string) {
        this._urlPath = value;
    }
    public resetUrlPath() {
        this._urlPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlPathInput() {
        return this._urlPath;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#key CcSamplingRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/xray_sampling_rule#value CcSamplingRule#value}
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
