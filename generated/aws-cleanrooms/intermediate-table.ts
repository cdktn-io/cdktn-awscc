// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntermediateTableProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#analysis_rules CcIntermediateTable#analysis_rules}
    */
    readonly analysisRules?: CcIntermediateTable.IntermediateTableAnalysisRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#description CcIntermediateTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#kms_key_arn CcIntermediateTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#membership_identifier CcIntermediateTable#membership_identifier}
    */
    readonly membershipIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#name CcIntermediateTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CcIntermediateTable#population_analysis_configuration}
    */
    readonly populationAnalysisConfiguration: CcIntermediateTable.PopulationAnalysisConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#tags CcIntermediateTable#tags}
    */
    readonly tags?: CcIntermediateTable.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}
*/
export class CcIntermediateTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_intermediate_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntermediateTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntermediateTable to import
    * @param importFromId The id of the existing CcIntermediateTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntermediateTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_intermediate_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntermediateTableProps
    */
    public constructor(scope: Construct, id: string, config: CcIntermediateTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_intermediate_table',
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
        this._analysisRules.internalValue = config.analysisRules;
        this._description = config.description;
        this._kmsKeyArn = config.kmsKeyArn;
        this._membershipIdentifier = config.membershipIdentifier;
        this._name = config.name;
        this._populationAnalysisConfiguration.internalValue = config.populationAnalysisConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // analysis_rules - computed: true, optional: true, required: false
    private _analysisRules = new CcIntermediateTable.IntermediateTableAnalysisRulePropertyList(this, "analysis_rules", false);
    public get analysisRules() {
        return this._analysisRules;
    }
    public putAnalysisRules(value: CcIntermediateTable.IntermediateTableAnalysisRuleProperty[] | cdktn.IResolvable) {
        this._analysisRules.internalValue = value;
    }
    public resetAnalysisRules() {
        this._analysisRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisRulesInput() {
        return this._analysisRules.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // collaboration_arn - computed: true, optional: false, required: false
    public get collaborationArn() {
        return this.getStringAttribute('collaboration_arn');
    }

    // collaboration_identifier - computed: true, optional: false, required: false
    public get collaborationIdentifier() {
        return this.getStringAttribute('collaboration_identifier');
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

    // intermediate_table_identifier - computed: true, optional: false, required: false
    public get intermediateTableIdentifier() {
        return this.getStringAttribute('intermediate_table_identifier');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // membership_arn - computed: true, optional: false, required: false
    public get membershipArn() {
        return this.getStringAttribute('membership_arn');
    }

    // membership_identifier - computed: false, optional: false, required: true
    private _membershipIdentifier?: string; 
    public get membershipIdentifier() {
        return this.getStringAttribute('membership_identifier');
    }
    public set membershipIdentifier(value: string) {
        this._membershipIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get membershipIdentifierInput() {
        return this._membershipIdentifier;
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

    // population_analysis_configuration - computed: false, optional: false, required: true
    private _populationAnalysisConfiguration = new CcIntermediateTable.PopulationAnalysisConfigurationPropertyOutputReference(this, "population_analysis_configuration");
    public get populationAnalysisConfiguration() {
        return this._populationAnalysisConfiguration;
    }
    public putPopulationAnalysisConfiguration(value: CcIntermediateTable.PopulationAnalysisConfigurationProperty) {
        this._populationAnalysisConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get populationAnalysisConfigurationInput() {
        return this._populationAnalysisConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIntermediateTable.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIntermediateTable.TagProperty[] | cdktn.IResolvable) {
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
            analysis_rules: cdktn.listMapper(ccIntermediateTableIntermediateTableAnalysisRulePropertyToTerraform, false)(this._analysisRules.internalValue),
            description: cdktn.stringToTerraform(this._description),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
            name: cdktn.stringToTerraform(this._name),
            population_analysis_configuration: ccIntermediateTablePopulationAnalysisConfigurationPropertyToTerraform(this._populationAnalysisConfiguration.internalValue),
            tags: cdktn.listMapper(ccIntermediateTableTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            analysis_rules: {
                value: cdktn.listMapperHcl(ccIntermediateTableIntermediateTableAnalysisRulePropertyToHclTerraform, false)(this._analysisRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcIntermediateTable.IntermediateTableAnalysisRulePropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            membership_identifier: {
                value: cdktn.stringToHclTerraform(this._membershipIdentifier),
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
            population_analysis_configuration: {
                value: ccIntermediateTablePopulationAnalysisConfigurationPropertyToHclTerraform(this._populationAnalysisConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntermediateTable.PopulationAnalysisConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIntermediateTableTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIntermediateTable.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntermediateTableDifferentialPrivacyColumnPropertyToTerraform(struct?: CcIntermediateTable.DifferentialPrivacyColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccIntermediateTableDifferentialPrivacyColumnPropertyToHclTerraform(struct?: CcIntermediateTable.DifferentialPrivacyColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableDifferentialPrivacyPropertyToTerraform(struct?: CcIntermediateTable.DifferentialPrivacyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(ccIntermediateTableDifferentialPrivacyColumnPropertyToTerraform, false)(struct!.columns),
    }
}


export function ccIntermediateTableDifferentialPrivacyPropertyToHclTerraform(struct?: CcIntermediateTable.DifferentialPrivacyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(ccIntermediateTableDifferentialPrivacyColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "DifferentialPrivacyColumnPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableIntermediateTableAnalysisRuleCustomPropertyToTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_analyses: cdktn.stringToTerraform(struct!.additionalAnalyses),
        allowed_analyses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAnalyses),
        allowed_analysis_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAnalysisProviders),
        allowed_result_receivers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResultReceivers),
        differential_privacy: ccIntermediateTableDifferentialPrivacyPropertyToTerraform(struct!.differentialPrivacy),
        disallowed_output_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.disallowedOutputColumns),
    }
}


export function ccIntermediateTableIntermediateTableAnalysisRuleCustomPropertyToHclTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_analyses: {
            value: cdktn.stringToHclTerraform(struct!.additionalAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allowed_analyses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAnalyses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_analysis_providers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAnalysisProviders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_result_receivers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResultReceivers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        differential_privacy: {
            value: ccIntermediateTableDifferentialPrivacyPropertyToHclTerraform(struct!.differentialPrivacy),
            isBlock: true,
            type: "struct",
            storageClassType: "DifferentialPrivacyProperty",
        },
        disallowed_output_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.disallowedOutputColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableIntermediateTableAnalysisRulePolicyV1PropertyToTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom: ccIntermediateTableIntermediateTableAnalysisRuleCustomPropertyToTerraform(struct!.custom),
    }
}


export function ccIntermediateTableIntermediateTableAnalysisRulePolicyV1PropertyToHclTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom: {
            value: ccIntermediateTableIntermediateTableAnalysisRuleCustomPropertyToHclTerraform(struct!.custom),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateTableAnalysisRuleCustomProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableIntermediateTableAnalysisRulePolicyPropertyToTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        v1: ccIntermediateTableIntermediateTableAnalysisRulePolicyV1PropertyToTerraform(struct!.v1),
    }
}


export function ccIntermediateTableIntermediateTableAnalysisRulePolicyPropertyToHclTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        v1: {
            value: ccIntermediateTableIntermediateTableAnalysisRulePolicyV1PropertyToHclTerraform(struct!.v1),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateTableAnalysisRulePolicyV1Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableIntermediateTableAnalysisRulePropertyToTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: ccIntermediateTableIntermediateTableAnalysisRulePolicyPropertyToTerraform(struct!.policy),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccIntermediateTableIntermediateTableAnalysisRulePropertyToHclTerraform(struct?: CcIntermediateTable.IntermediateTableAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: ccIntermediateTableIntermediateTableAnalysisRulePolicyPropertyToHclTerraform(struct!.policy),
            isBlock: true,
            type: "struct",
            storageClassType: "IntermediateTableAnalysisRulePolicyProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTablePopulationAnalysisSqlParametersPropertyToTerraform(struct?: CcIntermediateTable.PopulationAnalysisSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis_template_arn: cdktn.stringToTerraform(struct!.analysisTemplateArn),
        query_string: cdktn.stringToTerraform(struct!.queryString),
    }
}


export function ccIntermediateTablePopulationAnalysisSqlParametersPropertyToHclTerraform(struct?: CcIntermediateTable.PopulationAnalysisSqlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis_template_arn: {
            value: cdktn.stringToHclTerraform(struct!.analysisTemplateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_string: {
            value: cdktn.stringToHclTerraform(struct!.queryString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTablePopulationAnalysisConfigurationPropertyToTerraform(struct?: CcIntermediateTable.PopulationAnalysisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sql_parameters: ccIntermediateTablePopulationAnalysisSqlParametersPropertyToTerraform(struct!.sqlParameters),
    }
}


export function ccIntermediateTablePopulationAnalysisConfigurationPropertyToHclTerraform(struct?: CcIntermediateTable.PopulationAnalysisConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sql_parameters: {
            value: ccIntermediateTablePopulationAnalysisSqlParametersPropertyToHclTerraform(struct!.sqlParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PopulationAnalysisSqlParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntermediateTableTagPropertyToTerraform(struct?: CcIntermediateTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIntermediateTableTagPropertyToHclTerraform(struct?: CcIntermediateTable.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIntermediateTable {
export interface DifferentialPrivacyColumnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#name CcIntermediateTable#name}
    */
    readonly name?: string;
}
export class DifferentialPrivacyColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DifferentialPrivacyColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DifferentialPrivacyColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}

export class DifferentialPrivacyColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : DifferentialPrivacyColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): DifferentialPrivacyColumnPropertyOutputReference {
        return new DifferentialPrivacyColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DifferentialPrivacyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#columns CcIntermediateTable#columns}
    */
    readonly columns?: DifferentialPrivacyColumnProperty[] | cdktn.IResolvable;
}
export class DifferentialPrivacyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DifferentialPrivacyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DifferentialPrivacyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns.internalValue = value.columns;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new DifferentialPrivacyColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: DifferentialPrivacyColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
    }
}
export interface IntermediateTableAnalysisRuleCustomProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#additional_analyses CcIntermediateTable#additional_analyses}
    */
    readonly additionalAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#allowed_analyses CcIntermediateTable#allowed_analyses}
    */
    readonly allowedAnalyses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CcIntermediateTable#allowed_analysis_providers}
    */
    readonly allowedAnalysisProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CcIntermediateTable#allowed_result_receivers}
    */
    readonly allowedResultReceivers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#differential_privacy CcIntermediateTable#differential_privacy}
    */
    readonly differentialPrivacy?: DifferentialPrivacyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CcIntermediateTable#disallowed_output_columns}
    */
    readonly disallowedOutputColumns?: string[];
}
export class IntermediateTableAnalysisRuleCustomPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateTableAnalysisRuleCustomProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalAnalyses = this._additionalAnalyses;
        }
        if (this._allowedAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAnalyses = this._allowedAnalyses;
        }
        if (this._allowedAnalysisProviders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAnalysisProviders = this._allowedAnalysisProviders;
        }
        if (this._allowedResultReceivers !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedResultReceivers = this._allowedResultReceivers;
        }
        if (this._differentialPrivacy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.differentialPrivacy = this._differentialPrivacy?.internalValue;
        }
        if (this._disallowedOutputColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.disallowedOutputColumns = this._disallowedOutputColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateTableAnalysisRuleCustomProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalAnalyses = undefined;
            this._allowedAnalyses = undefined;
            this._allowedAnalysisProviders = undefined;
            this._allowedResultReceivers = undefined;
            this._differentialPrivacy.internalValue = undefined;
            this._disallowedOutputColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalAnalyses = value.additionalAnalyses;
            this._allowedAnalyses = value.allowedAnalyses;
            this._allowedAnalysisProviders = value.allowedAnalysisProviders;
            this._allowedResultReceivers = value.allowedResultReceivers;
            this._differentialPrivacy.internalValue = value.differentialPrivacy;
            this._disallowedOutputColumns = value.disallowedOutputColumns;
        }
    }

    // additional_analyses - computed: true, optional: true, required: false
    private _additionalAnalyses?: string; 
    public get additionalAnalyses() {
        return this.getStringAttribute('additional_analyses');
    }
    public set additionalAnalyses(value: string) {
        this._additionalAnalyses = value;
    }
    public resetAdditionalAnalyses() {
        this._additionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAnalysesInput() {
        return this._additionalAnalyses;
    }

    // allowed_analyses - computed: true, optional: true, required: false
    private _allowedAnalyses?: string[]; 
    public get allowedAnalyses() {
        return this.getListAttribute('allowed_analyses');
    }
    public set allowedAnalyses(value: string[]) {
        this._allowedAnalyses = value;
    }
    public resetAllowedAnalyses() {
        this._allowedAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAnalysesInput() {
        return this._allowedAnalyses;
    }

    // allowed_analysis_providers - computed: true, optional: true, required: false
    private _allowedAnalysisProviders?: string[]; 
    public get allowedAnalysisProviders() {
        return this.getListAttribute('allowed_analysis_providers');
    }
    public set allowedAnalysisProviders(value: string[]) {
        this._allowedAnalysisProviders = value;
    }
    public resetAllowedAnalysisProviders() {
        this._allowedAnalysisProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAnalysisProvidersInput() {
        return this._allowedAnalysisProviders;
    }

    // allowed_result_receivers - computed: true, optional: true, required: false
    private _allowedResultReceivers?: string[]; 
    public get allowedResultReceivers() {
        return this.getListAttribute('allowed_result_receivers');
    }
    public set allowedResultReceivers(value: string[]) {
        this._allowedResultReceivers = value;
    }
    public resetAllowedResultReceivers() {
        this._allowedResultReceivers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedResultReceiversInput() {
        return this._allowedResultReceivers;
    }

    // differential_privacy - computed: true, optional: true, required: false
    private _differentialPrivacy = new DifferentialPrivacyPropertyOutputReference(this, "differential_privacy");
    public get differentialPrivacy() {
        return this._differentialPrivacy;
    }
    public putDifferentialPrivacy(value: DifferentialPrivacyProperty) {
        this._differentialPrivacy.internalValue = value;
    }
    public resetDifferentialPrivacy() {
        this._differentialPrivacy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get differentialPrivacyInput() {
        return this._differentialPrivacy.internalValue;
    }

    // disallowed_output_columns - computed: true, optional: true, required: false
    private _disallowedOutputColumns?: string[]; 
    public get disallowedOutputColumns() {
        return this.getListAttribute('disallowed_output_columns');
    }
    public set disallowedOutputColumns(value: string[]) {
        this._disallowedOutputColumns = value;
    }
    public resetDisallowedOutputColumns() {
        this._disallowedOutputColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disallowedOutputColumnsInput() {
        return this._disallowedOutputColumns;
    }
}
export interface IntermediateTableAnalysisRulePolicyV1Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#custom CcIntermediateTable#custom}
    */
    readonly custom?: IntermediateTableAnalysisRuleCustomProperty;
}
export class IntermediateTableAnalysisRulePolicyV1PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateTableAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._custom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateTableAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._custom.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._custom.internalValue = value.custom;
        }
    }

    // custom - computed: true, optional: true, required: false
    private _custom = new IntermediateTableAnalysisRuleCustomPropertyOutputReference(this, "custom");
    public get custom() {
        return this._custom;
    }
    public putCustom(value: IntermediateTableAnalysisRuleCustomProperty) {
        this._custom.internalValue = value;
    }
    public resetCustom() {
        this._custom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom.internalValue;
    }
}
export interface IntermediateTableAnalysisRulePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#v1 CcIntermediateTable#v1}
    */
    readonly v1?: IntermediateTableAnalysisRulePolicyV1Property;
}
export class IntermediateTableAnalysisRulePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntermediateTableAnalysisRulePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._v1?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.v1 = this._v1?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateTableAnalysisRulePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._v1.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._v1.internalValue = value.v1;
        }
    }

    // v1 - computed: true, optional: true, required: false
    private _v1 = new IntermediateTableAnalysisRulePolicyV1PropertyOutputReference(this, "v1");
    public get v1() {
        return this._v1;
    }
    public putV1(value: IntermediateTableAnalysisRulePolicyV1Property) {
        this._v1.internalValue = value;
    }
    public resetV1() {
        this._v1.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get v1Input() {
        return this._v1.internalValue;
    }
}
export interface IntermediateTableAnalysisRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#policy CcIntermediateTable#policy}
    */
    readonly policy?: IntermediateTableAnalysisRulePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#type CcIntermediateTable#type}
    */
    readonly type?: string;
}
export class IntermediateTableAnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntermediateTableAnalysisRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntermediateTableAnalysisRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy.internalValue = value.policy;
            this._type = value.type;
        }
    }

    // policy - computed: true, optional: true, required: false
    private _policy = new IntermediateTableAnalysisRulePolicyPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: IntermediateTableAnalysisRulePolicyProperty) {
        this._policy.internalValue = value;
    }
    public resetPolicy() {
        this._policy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class IntermediateTableAnalysisRulePropertyList extends cdktn.ComplexList {
    public internalValue? : IntermediateTableAnalysisRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): IntermediateTableAnalysisRulePropertyOutputReference {
        return new IntermediateTableAnalysisRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PopulationAnalysisSqlParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CcIntermediateTable#analysis_template_arn}
    */
    readonly analysisTemplateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#query_string CcIntermediateTable#query_string}
    */
    readonly queryString?: string;
}
export class PopulationAnalysisSqlParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PopulationAnalysisSqlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analysisTemplateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysisTemplateArn = this._analysisTemplateArn;
        }
        if (this._queryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PopulationAnalysisSqlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysisTemplateArn = undefined;
            this._queryString = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analysisTemplateArn = value.analysisTemplateArn;
            this._queryString = value.queryString;
        }
    }

    // analysis_template_arn - computed: true, optional: true, required: false
    private _analysisTemplateArn?: string; 
    public get analysisTemplateArn() {
        return this.getStringAttribute('analysis_template_arn');
    }
    public set analysisTemplateArn(value: string) {
        this._analysisTemplateArn = value;
    }
    public resetAnalysisTemplateArn() {
        this._analysisTemplateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisTemplateArnInput() {
        return this._analysisTemplateArn;
    }

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }
}
export interface PopulationAnalysisConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#sql_parameters CcIntermediateTable#sql_parameters}
    */
    readonly sqlParameters?: PopulationAnalysisSqlParametersProperty;
}
export class PopulationAnalysisConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PopulationAnalysisConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sqlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlParameters = this._sqlParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PopulationAnalysisConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sqlParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sqlParameters.internalValue = value.sqlParameters;
        }
    }

    // sql_parameters - computed: true, optional: true, required: false
    private _sqlParameters = new PopulationAnalysisSqlParametersPropertyOutputReference(this, "sql_parameters");
    public get sqlParameters() {
        return this._sqlParameters;
    }
    public putSqlParameters(value: PopulationAnalysisSqlParametersProperty) {
        this._sqlParameters.internalValue = value;
    }
    public resetSqlParameters() {
        this._sqlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlParametersInput() {
        return this._sqlParameters.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#key CcIntermediateTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_intermediate_table#value CcIntermediateTable#value}
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
