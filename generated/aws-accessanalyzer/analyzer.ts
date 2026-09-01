// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnalyzerProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration for the analyzer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#analyzer_configuration CcAnalyzer#analyzer_configuration}
    */
    readonly analyzerConfiguration?: CcAnalyzer.AnalyzerConfigurationProperty;
    /**
    * Analyzer name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#analyzer_name CcAnalyzer#analyzer_name}
    */
    readonly analyzerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#archive_rules CcAnalyzer#archive_rules}
    */
    readonly archiveRules?: CcAnalyzer.ArchiveRuleProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#tags CcAnalyzer#tags}
    */
    readonly tags?: CcAnalyzer.TagsProperty[] | cdktn.IResolvable;
    /**
    * The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#type CcAnalyzer#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer awscc_accessanalyzer_analyzer}
*/
export class CcAnalyzer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_accessanalyzer_analyzer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnalyzer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnalyzer to import
    * @param importFromId The id of the existing CcAnalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnalyzer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_accessanalyzer_analyzer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer awscc_accessanalyzer_analyzer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnalyzerProps
    */
    public constructor(scope: Construct, id: string, config: CcAnalyzerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_accessanalyzer_analyzer',
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
        this._analyzerConfiguration.internalValue = config.analyzerConfiguration;
        this._analyzerName = config.analyzerName;
        this._archiveRules.internalValue = config.archiveRules;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // analyzer_configuration - computed: true, optional: true, required: false
    private _analyzerConfiguration = new CcAnalyzer.AnalyzerConfigurationPropertyOutputReference(this, "analyzer_configuration");
    public get analyzerConfiguration() {
        return this._analyzerConfiguration;
    }
    public putAnalyzerConfiguration(value: CcAnalyzer.AnalyzerConfigurationProperty) {
        this._analyzerConfiguration.internalValue = value;
    }
    public resetAnalyzerConfiguration() {
        this._analyzerConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyzerConfigurationInput() {
        return this._analyzerConfiguration.internalValue;
    }

    // analyzer_name - computed: true, optional: true, required: false
    private _analyzerName?: string; 
    public get analyzerName() {
        return this.getStringAttribute('analyzer_name');
    }
    public set analyzerName(value: string) {
        this._analyzerName = value;
    }
    public resetAnalyzerName() {
        this._analyzerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyzerNameInput() {
        return this._analyzerName;
    }

    // archive_rules - computed: true, optional: true, required: false
    private _archiveRules = new CcAnalyzer.ArchiveRulePropertyList(this, "archive_rules", false);
    public get archiveRules() {
        return this._archiveRules;
    }
    public putArchiveRules(value: CcAnalyzer.ArchiveRuleProperty[] | cdktn.IResolvable) {
        this._archiveRules.internalValue = value;
    }
    public resetArchiveRules() {
        this._archiveRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archiveRulesInput() {
        return this._archiveRules.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAnalyzer.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAnalyzer.TagsProperty[] | cdktn.IResolvable) {
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
            analyzer_configuration: ccAnalyzerAnalyzerConfigurationPropertyToTerraform(this._analyzerConfiguration.internalValue),
            analyzer_name: cdktn.stringToTerraform(this._analyzerName),
            archive_rules: cdktn.listMapper(ccAnalyzerArchiveRulePropertyToTerraform, false)(this._archiveRules.internalValue),
            tags: cdktn.listMapper(ccAnalyzerTagsPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            analyzer_configuration: {
                value: ccAnalyzerAnalyzerConfigurationPropertyToHclTerraform(this._analyzerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnalyzer.AnalyzerConfigurationProperty",
            },
            analyzer_name: {
                value: cdktn.stringToHclTerraform(this._analyzerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            archive_rules: {
                value: cdktn.listMapperHcl(ccAnalyzerArchiveRulePropertyToHclTerraform, false)(this._archiveRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnalyzer.ArchiveRulePropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAnalyzerTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAnalyzer.TagsPropertyList",
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

export function ccAnalyzerInternalAccessAnalysisRuleCriteriaPropertyToTerraform(struct?: CcAnalyzer.InternalAccessAnalysisRuleCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
        resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceArns),
        resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    }
}


export function ccAnalyzerInternalAccessAnalysisRuleCriteriaPropertyToHclTerraform(struct?: CcAnalyzer.InternalAccessAnalysisRuleCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerInternalAccessAnalysisRulePropertyToTerraform(struct?: CcAnalyzer.InternalAccessAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inclusions: cdktn.listMapper(ccAnalyzerInternalAccessAnalysisRuleCriteriaPropertyToTerraform, false)(struct!.inclusions),
    }
}


export function ccAnalyzerInternalAccessAnalysisRulePropertyToHclTerraform(struct?: CcAnalyzer.InternalAccessAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inclusions: {
            value: cdktn.listMapperHcl(ccAnalyzerInternalAccessAnalysisRuleCriteriaPropertyToHclTerraform, false)(struct!.inclusions),
            isBlock: true,
            type: "list",
            storageClassType: "InternalAccessAnalysisRuleCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerInternalAccessConfigurationPropertyToTerraform(struct?: CcAnalyzer.InternalAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        internal_access_analysis_rule: ccAnalyzerInternalAccessAnalysisRulePropertyToTerraform(struct!.internalAccessAnalysisRule),
    }
}


export function ccAnalyzerInternalAccessConfigurationPropertyToHclTerraform(struct?: CcAnalyzer.InternalAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        internal_access_analysis_rule: {
            value: ccAnalyzerInternalAccessAnalysisRulePropertyToHclTerraform(struct!.internalAccessAnalysisRule),
            isBlock: true,
            type: "struct",
            storageClassType: "InternalAccessAnalysisRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerTagPropertyToTerraform(struct?: CcAnalyzer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccAnalyzerTagPropertyToHclTerraform(struct?: CcAnalyzer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccAnalyzerAnalysisRuleCriteriaPropertyToTerraform(struct?: CcAnalyzer.AnalysisRuleCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
        resource_tags: cdktn.listMapper(ccAnalyzerTagPropertyToTerraform, false)(struct!.resourceTags),
    }
}


export function ccAnalyzerAnalysisRuleCriteriaPropertyToHclTerraform(struct?: CcAnalyzer.AnalysisRuleCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_tags: {
            value: cdktn.listMapperHcl(ccAnalyzerTagPropertyToHclTerraform, false)(struct!.resourceTags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerAnalysisRulePropertyToTerraform(struct?: CcAnalyzer.AnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusions: cdktn.listMapper(ccAnalyzerAnalysisRuleCriteriaPropertyToTerraform, false)(struct!.exclusions),
    }
}


export function ccAnalyzerAnalysisRulePropertyToHclTerraform(struct?: CcAnalyzer.AnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusions: {
            value: cdktn.listMapperHcl(ccAnalyzerAnalysisRuleCriteriaPropertyToHclTerraform, false)(struct!.exclusions),
            isBlock: true,
            type: "list",
            storageClassType: "AnalysisRuleCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerUnusedAccessConfigurationPropertyToTerraform(struct?: CcAnalyzer.UnusedAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis_rule: ccAnalyzerAnalysisRulePropertyToTerraform(struct!.analysisRule),
        unused_access_age: cdktn.numberToTerraform(struct!.unusedAccessAge),
    }
}


export function ccAnalyzerUnusedAccessConfigurationPropertyToHclTerraform(struct?: CcAnalyzer.UnusedAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis_rule: {
            value: ccAnalyzerAnalysisRulePropertyToHclTerraform(struct!.analysisRule),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisRuleProperty",
        },
        unused_access_age: {
            value: cdktn.numberToHclTerraform(struct!.unusedAccessAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerAnalyzerConfigurationPropertyToTerraform(struct?: CcAnalyzer.AnalyzerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        internal_access_configuration: ccAnalyzerInternalAccessConfigurationPropertyToTerraform(struct!.internalAccessConfiguration),
        unused_access_configuration: ccAnalyzerUnusedAccessConfigurationPropertyToTerraform(struct!.unusedAccessConfiguration),
    }
}


export function ccAnalyzerAnalyzerConfigurationPropertyToHclTerraform(struct?: CcAnalyzer.AnalyzerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        internal_access_configuration: {
            value: ccAnalyzerInternalAccessConfigurationPropertyToHclTerraform(struct!.internalAccessConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InternalAccessConfigurationProperty",
        },
        unused_access_configuration: {
            value: ccAnalyzerUnusedAccessConfigurationPropertyToHclTerraform(struct!.unusedAccessConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "UnusedAccessConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerFilterPropertyToTerraform(struct?: CcAnalyzer.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contains),
        eq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eq),
        exists: cdktn.booleanToTerraform(struct!.exists),
        neq: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.neq),
        property: cdktn.stringToTerraform(struct!.property),
    }
}


export function ccAnalyzerFilterPropertyToHclTerraform(struct?: CcAnalyzer.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contains: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contains),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        eq: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eq),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        exists: {
            value: cdktn.booleanToHclTerraform(struct!.exists),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        neq: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.neq),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        property: {
            value: cdktn.stringToHclTerraform(struct!.property),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerArchiveRulePropertyToTerraform(struct?: CcAnalyzer.ArchiveRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter: cdktn.listMapper(ccAnalyzerFilterPropertyToTerraform, false)(struct!.filter),
        rule_name: cdktn.stringToTerraform(struct!.ruleName),
    }
}


export function ccAnalyzerArchiveRulePropertyToHclTerraform(struct?: CcAnalyzer.ArchiveRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter: {
            value: cdktn.listMapperHcl(ccAnalyzerFilterPropertyToHclTerraform, false)(struct!.filter),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
        rule_name: {
            value: cdktn.stringToHclTerraform(struct!.ruleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnalyzerTagsPropertyToTerraform(struct?: CcAnalyzer.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnalyzerTagsPropertyToHclTerraform(struct?: CcAnalyzer.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcAnalyzer {
export interface InternalAccessAnalysisRuleCriteriaProperty {
    /**
    * A list of AWS account IDs to apply to the internal access analysis rule criteria. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers and cannot include the organization owner account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#account_ids CcAnalyzer#account_ids}
    */
    readonly accountIds?: string[];
    /**
    * A list of resource ARNs to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources that match these ARNs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#resource_arns CcAnalyzer#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * A list of resource types to apply to the internal access analysis rule criteria. The analyzer will only generate findings for resources of these types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#resource_types CcAnalyzer#resource_types}
    */
    readonly resourceTypes?: string[];
}
export class InternalAccessAnalysisRuleCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InternalAccessAnalysisRuleCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._resourceArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArns = this._resourceArns;
        }
        if (this._resourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternalAccessAnalysisRuleCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIds = undefined;
            this._resourceArns = undefined;
            this._resourceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIds = value.accountIds;
            this._resourceArns = value.resourceArns;
            this._resourceTypes = value.resourceTypes;
        }
    }

    // account_ids - computed: true, optional: true, required: false
    private _accountIds?: string[]; 
    public get accountIds() {
        return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
        this._accountIds = value;
    }
    public resetAccountIds() {
        this._accountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
        return this._accountIds;
    }

    // resource_arns - computed: true, optional: true, required: false
    private _resourceArns?: string[]; 
    public get resourceArns() {
        return this.getListAttribute('resource_arns');
    }
    public set resourceArns(value: string[]) {
        this._resourceArns = value;
    }
    public resetResourceArns() {
        this._resourceArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnsInput() {
        return this._resourceArns;
    }

    // resource_types - computed: true, optional: true, required: false
    private _resourceTypes?: string[]; 
    public get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    public set resourceTypes(value: string[]) {
        this._resourceTypes = value;
    }
    public resetResourceTypes() {
        this._resourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesInput() {
        return this._resourceTypes;
    }
}

export class InternalAccessAnalysisRuleCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : InternalAccessAnalysisRuleCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): InternalAccessAnalysisRuleCriteriaPropertyOutputReference {
        return new InternalAccessAnalysisRuleCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InternalAccessAnalysisRuleProperty {
    /**
    * A list of rules for the internal access analyzer containing criteria to include in analysis. Only resources that meet the rule criteria will generate findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#inclusions CcAnalyzer#inclusions}
    */
    readonly inclusions?: InternalAccessAnalysisRuleCriteriaProperty[] | cdktn.IResolvable;
}
export class InternalAccessAnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InternalAccessAnalysisRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inclusions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusions = this._inclusions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternalAccessAnalysisRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inclusions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inclusions.internalValue = value.inclusions;
        }
    }

    // inclusions - computed: true, optional: true, required: false
    private _inclusions = new InternalAccessAnalysisRuleCriteriaPropertyList(this, "inclusions", false);
    public get inclusions() {
        return this._inclusions;
    }
    public putInclusions(value: InternalAccessAnalysisRuleCriteriaProperty[] | cdktn.IResolvable) {
        this._inclusions.internalValue = value;
    }
    public resetInclusions() {
        this._inclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionsInput() {
        return this._inclusions.internalValue;
    }
}
export interface InternalAccessConfigurationProperty {
    /**
    * Contains information about analysis rules for the internal access analyzer. Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#internal_access_analysis_rule CcAnalyzer#internal_access_analysis_rule}
    */
    readonly internalAccessAnalysisRule?: InternalAccessAnalysisRuleProperty;
}
export class InternalAccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InternalAccessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._internalAccessAnalysisRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.internalAccessAnalysisRule = this._internalAccessAnalysisRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternalAccessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._internalAccessAnalysisRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._internalAccessAnalysisRule.internalValue = value.internalAccessAnalysisRule;
        }
    }

    // internal_access_analysis_rule - computed: true, optional: true, required: false
    private _internalAccessAnalysisRule = new InternalAccessAnalysisRulePropertyOutputReference(this, "internal_access_analysis_rule");
    public get internalAccessAnalysisRule() {
        return this._internalAccessAnalysisRule;
    }
    public putInternalAccessAnalysisRule(value: InternalAccessAnalysisRuleProperty) {
        this._internalAccessAnalysisRule.internalValue = value;
    }
    public resetInternalAccessAnalysisRule() {
        this._internalAccessAnalysisRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internalAccessAnalysisRuleInput() {
        return this._internalAccessAnalysisRule.internalValue;
    }
}
export interface TagProperty {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
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
export interface AnalysisRuleCriteriaProperty {
    /**
    * A list of AWS account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#account_ids CcAnalyzer#account_ids}
    */
    readonly accountIds?: string[];
    /**
    * An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    * 
    * For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.
    * 
    * For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#resource_tags CcAnalyzer#resource_tags}
    */
    readonly resourceTags?: TagProperty[] | cdktn.IResolvable;
}
export class AnalysisRuleCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AnalysisRuleCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._resourceTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIds = undefined;
            this._resourceTags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIds = value.accountIds;
            this._resourceTags.internalValue = value.resourceTags;
        }
    }

    // account_ids - computed: true, optional: true, required: false
    private _accountIds?: string[]; 
    public get accountIds() {
        return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
        this._accountIds = value;
    }
    public resetAccountIds() {
        this._accountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
        return this._accountIds;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new TagPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: TagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }
}

export class AnalysisRuleCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : AnalysisRuleCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): AnalysisRuleCriteriaPropertyOutputReference {
        return new AnalysisRuleCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnalysisRuleProperty {
    /**
    * A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#exclusions CcAnalyzer#exclusions}
    */
    readonly exclusions?: AnalysisRuleCriteriaProperty[] | cdktn.IResolvable;
}
export class AnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusions = this._exclusions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusions.internalValue = value.exclusions;
        }
    }

    // exclusions - computed: true, optional: true, required: false
    private _exclusions = new AnalysisRuleCriteriaPropertyList(this, "exclusions", false);
    public get exclusions() {
        return this._exclusions;
    }
    public putExclusions(value: AnalysisRuleCriteriaProperty[] | cdktn.IResolvable) {
        this._exclusions.internalValue = value;
    }
    public resetExclusions() {
        this._exclusions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionsInput() {
        return this._exclusions.internalValue;
    }
}
export interface UnusedAccessConfigurationProperty {
    /**
    * Contains information about rules for the analyzer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#analysis_rule CcAnalyzer#analysis_rule}
    */
    readonly analysisRule?: AnalysisRuleProperty;
    /**
    * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#unused_access_age CcAnalyzer#unused_access_age}
    */
    readonly unusedAccessAge?: number;
}
export class UnusedAccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnusedAccessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analysisRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysisRule = this._analysisRule?.internalValue;
        }
        if (this._unusedAccessAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.unusedAccessAge = this._unusedAccessAge;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnusedAccessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysisRule.internalValue = undefined;
            this._unusedAccessAge = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analysisRule.internalValue = value.analysisRule;
            this._unusedAccessAge = value.unusedAccessAge;
        }
    }

    // analysis_rule - computed: true, optional: true, required: false
    private _analysisRule = new AnalysisRulePropertyOutputReference(this, "analysis_rule");
    public get analysisRule() {
        return this._analysisRule;
    }
    public putAnalysisRule(value: AnalysisRuleProperty) {
        this._analysisRule.internalValue = value;
    }
    public resetAnalysisRule() {
        this._analysisRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisRuleInput() {
        return this._analysisRule.internalValue;
    }

    // unused_access_age - computed: true, optional: true, required: false
    private _unusedAccessAge?: number; 
    public get unusedAccessAge() {
        return this.getNumberAttribute('unused_access_age');
    }
    public set unusedAccessAge(value: number) {
        this._unusedAccessAge = value;
    }
    public resetUnusedAccessAge() {
        this._unusedAccessAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unusedAccessAgeInput() {
        return this._unusedAccessAge;
    }
}
export interface AnalyzerConfigurationProperty {
    /**
    * Specifies the configuration of an internal access analyzer for an AWS organization or account. This configuration determines how the analyzer evaluates internal access within your AWS environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#internal_access_configuration CcAnalyzer#internal_access_configuration}
    */
    readonly internalAccessConfiguration?: InternalAccessConfigurationProperty;
    /**
    * The Configuration for Unused Access Analyzer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#unused_access_configuration CcAnalyzer#unused_access_configuration}
    */
    readonly unusedAccessConfiguration?: UnusedAccessConfigurationProperty;
}
export class AnalyzerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalyzerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._internalAccessConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.internalAccessConfiguration = this._internalAccessConfiguration?.internalValue;
        }
        if (this._unusedAccessConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.unusedAccessConfiguration = this._unusedAccessConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalyzerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._internalAccessConfiguration.internalValue = undefined;
            this._unusedAccessConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._internalAccessConfiguration.internalValue = value.internalAccessConfiguration;
            this._unusedAccessConfiguration.internalValue = value.unusedAccessConfiguration;
        }
    }

    // internal_access_configuration - computed: true, optional: true, required: false
    private _internalAccessConfiguration = new InternalAccessConfigurationPropertyOutputReference(this, "internal_access_configuration");
    public get internalAccessConfiguration() {
        return this._internalAccessConfiguration;
    }
    public putInternalAccessConfiguration(value: InternalAccessConfigurationProperty) {
        this._internalAccessConfiguration.internalValue = value;
    }
    public resetInternalAccessConfiguration() {
        this._internalAccessConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internalAccessConfigurationInput() {
        return this._internalAccessConfiguration.internalValue;
    }

    // unused_access_configuration - computed: true, optional: true, required: false
    private _unusedAccessConfiguration = new UnusedAccessConfigurationPropertyOutputReference(this, "unused_access_configuration");
    public get unusedAccessConfiguration() {
        return this._unusedAccessConfiguration;
    }
    public putUnusedAccessConfiguration(value: UnusedAccessConfigurationProperty) {
        this._unusedAccessConfiguration.internalValue = value;
    }
    public resetUnusedAccessConfiguration() {
        this._unusedAccessConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unusedAccessConfigurationInput() {
        return this._unusedAccessConfiguration.internalValue;
    }
}
export interface FilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#contains CcAnalyzer#contains}
    */
    readonly contains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#eq CcAnalyzer#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#exists CcAnalyzer#exists}
    */
    readonly exists?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#neq CcAnalyzer#neq}
    */
    readonly neq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#property CcAnalyzer#property}
    */
    readonly property?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contains !== undefined) {
            hasAnyValues = true;
            internalValueResult.contains = this._contains;
        }
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._exists !== undefined) {
            hasAnyValues = true;
            internalValueResult.exists = this._exists;
        }
        if (this._neq !== undefined) {
            hasAnyValues = true;
            internalValueResult.neq = this._neq;
        }
        if (this._property !== undefined) {
            hasAnyValues = true;
            internalValueResult.property = this._property;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contains = undefined;
            this._eq = undefined;
            this._exists = undefined;
            this._neq = undefined;
            this._property = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contains = value.contains;
            this._eq = value.eq;
            this._exists = value.exists;
            this._neq = value.neq;
            this._property = value.property;
        }
    }

    // contains - computed: true, optional: true, required: false
    private _contains?: string[]; 
    public get contains() {
        return this.getListAttribute('contains');
    }
    public set contains(value: string[]) {
        this._contains = value;
    }
    public resetContains() {
        this._contains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsInput() {
        return this._contains;
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: string[]; 
    public get eq() {
        return this.getListAttribute('eq');
    }
    public set eq(value: string[]) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // exists - computed: true, optional: true, required: false
    private _exists?: boolean | cdktn.IResolvable; 
    public get exists() {
        return this.getBooleanAttribute('exists');
    }
    public set exists(value: boolean | cdktn.IResolvable) {
        this._exists = value;
    }
    public resetExists() {
        this._exists = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get existsInput() {
        return this._exists;
    }

    // neq - computed: true, optional: true, required: false
    private _neq?: string[]; 
    public get neq() {
        return this.getListAttribute('neq');
    }
    public set neq(value: string[]) {
        this._neq = value;
    }
    public resetNeq() {
        this._neq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neqInput() {
        return this._neq;
    }

    // property - computed: true, optional: true, required: false
    private _property?: string; 
    public get property() {
        return this.getStringAttribute('property');
    }
    public set property(value: string) {
        this._property = value;
    }
    public resetProperty() {
        this._property = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyInput() {
        return this._property;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ArchiveRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#filter CcAnalyzer#filter}
    */
    readonly filter?: FilterProperty[] | cdktn.IResolvable;
    /**
    * The archive rule name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#rule_name CcAnalyzer#rule_name}
    */
    readonly ruleName?: string;
}
export class ArchiveRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ArchiveRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._ruleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleName = this._ruleName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ArchiveRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filter.internalValue = undefined;
            this._ruleName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filter.internalValue = value.filter;
            this._ruleName = value.ruleName;
        }
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new FilterPropertyList(this, "filter", false);
    public get filter() {
        return this._filter;
    }
    public putFilter(value: FilterProperty[] | cdktn.IResolvable) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
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
}

export class ArchiveRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ArchiveRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ArchiveRulePropertyOutputReference {
        return new ArchiveRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#key CcAnalyzer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accessanalyzer_analyzer#value CcAnalyzer#value}
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
