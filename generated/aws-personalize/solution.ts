// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSolutionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the dataset group that provides the training data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#dataset_group_arn CcSolution#dataset_group_arn}
    */
    readonly datasetGroupArn: string;
    /**
    * When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#event_type CcSolution#event_type}
    */
    readonly eventType?: string;
    /**
    * The name for the solution
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#name CcSolution#name}
    */
    readonly name: string;
    /**
    * Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#perform_auto_ml CcSolution#perform_auto_ml}
    */
    readonly performAutoMl?: boolean | cdktn.IResolvable;
    /**
    * Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#perform_hpo CcSolution#perform_hpo}
    */
    readonly performHpo?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the recipe to use for model training. Only specified when performAutoML is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#recipe_arn CcSolution#recipe_arn}
    */
    readonly recipeArn?: string;
    /**
    * The configuration to use with the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#solution_config CcSolution#solution_config}
    */
    readonly solutionConfig?: CcSolution.SolutionConfigProperty;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#tags CcSolution#tags}
    */
    readonly tags?: CcSolution.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution awscc_personalize_solution}
*/
export class CcSolution extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_personalize_solution";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSolution resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSolution to import
    * @param importFromId The id of the existing CcSolution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSolution to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_solution", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution awscc_personalize_solution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSolutionProps
    */
    public constructor(scope: Construct, id: string, config: CcSolutionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_personalize_solution',
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
        this._datasetGroupArn = config.datasetGroupArn;
        this._eventType = config.eventType;
        this._name = config.name;
        this._performAutoMl = config.performAutoMl;
        this._performHpo = config.performHpo;
        this._recipeArn = config.recipeArn;
        this._solutionConfig.internalValue = config.solutionConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dataset_group_arn - computed: false, optional: false, required: true
    private _datasetGroupArn?: string; 
    public get datasetGroupArn() {
        return this.getStringAttribute('dataset_group_arn');
    }
    public set datasetGroupArn(value: string) {
        this._datasetGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetGroupArnInput() {
        return this._datasetGroupArn;
    }

    // event_type - computed: true, optional: true, required: false
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    public resetEventType() {
        this._eventType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
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

    // perform_auto_ml - computed: true, optional: true, required: false
    private _performAutoMl?: boolean | cdktn.IResolvable; 
    public get performAutoMl() {
        return this.getBooleanAttribute('perform_auto_ml');
    }
    public set performAutoMl(value: boolean | cdktn.IResolvable) {
        this._performAutoMl = value;
    }
    public resetPerformAutoMl() {
        this._performAutoMl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performAutoMlInput() {
        return this._performAutoMl;
    }

    // perform_hpo - computed: true, optional: true, required: false
    private _performHpo?: boolean | cdktn.IResolvable; 
    public get performHpo() {
        return this.getBooleanAttribute('perform_hpo');
    }
    public set performHpo(value: boolean | cdktn.IResolvable) {
        this._performHpo = value;
    }
    public resetPerformHpo() {
        this._performHpo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performHpoInput() {
        return this._performHpo;
    }

    // recipe_arn - computed: true, optional: true, required: false
    private _recipeArn?: string; 
    public get recipeArn() {
        return this.getStringAttribute('recipe_arn');
    }
    public set recipeArn(value: string) {
        this._recipeArn = value;
    }
    public resetRecipeArn() {
        this._recipeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recipeArnInput() {
        return this._recipeArn;
    }

    // solution_arn - computed: true, optional: false, required: false
    public get solutionArn() {
        return this.getStringAttribute('solution_arn');
    }

    // solution_config - computed: true, optional: true, required: false
    private _solutionConfig = new CcSolution.SolutionConfigPropertyOutputReference(this, "solution_config");
    public get solutionConfig() {
        return this._solutionConfig;
    }
    public putSolutionConfig(value: CcSolution.SolutionConfigProperty) {
        this._solutionConfig.internalValue = value;
    }
    public resetSolutionConfig() {
        this._solutionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionConfigInput() {
        return this._solutionConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSolution.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSolution.TagProperty[] | cdktn.IResolvable) {
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
            dataset_group_arn: cdktn.stringToTerraform(this._datasetGroupArn),
            event_type: cdktn.stringToTerraform(this._eventType),
            name: cdktn.stringToTerraform(this._name),
            perform_auto_ml: cdktn.booleanToTerraform(this._performAutoMl),
            perform_hpo: cdktn.booleanToTerraform(this._performHpo),
            recipe_arn: cdktn.stringToTerraform(this._recipeArn),
            solution_config: ccSolutionSolutionConfigPropertyToTerraform(this._solutionConfig.internalValue),
            tags: cdktn.listMapper(ccSolutionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dataset_group_arn: {
                value: cdktn.stringToHclTerraform(this._datasetGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_type: {
                value: cdktn.stringToHclTerraform(this._eventType),
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
            perform_auto_ml: {
                value: cdktn.booleanToHclTerraform(this._performAutoMl),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            perform_hpo: {
                value: cdktn.booleanToHclTerraform(this._performHpo),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            recipe_arn: {
                value: cdktn.stringToHclTerraform(this._recipeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            solution_config: {
                value: ccSolutionSolutionConfigPropertyToHclTerraform(this._solutionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSolution.SolutionConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSolutionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSolution.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSolutionAutoMLConfigPropertyToTerraform(struct?: CcSolution.AutoMLConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        recipe_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recipeList),
    }
}


export function ccSolutionAutoMLConfigPropertyToHclTerraform(struct?: CcSolution.AutoMLConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        recipe_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recipeList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionCategoricalHyperParameterRangePropertyToTerraform(struct?: CcSolution.CategoricalHyperParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSolutionCategoricalHyperParameterRangePropertyToHclTerraform(struct?: CcSolution.CategoricalHyperParameterRangeProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionContinuousHyperParameterRangePropertyToTerraform(struct?: CcSolution.ContinuousHyperParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccSolutionContinuousHyperParameterRangePropertyToHclTerraform(struct?: CcSolution.ContinuousHyperParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccSolutionIntegerHyperParameterRangePropertyToTerraform(struct?: CcSolution.IntegerHyperParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.numberToTerraform(struct!.maxValue),
        min_value: cdktn.numberToTerraform(struct!.minValue),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccSolutionIntegerHyperParameterRangePropertyToHclTerraform(struct?: CcSolution.IntegerHyperParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.numberToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_value: {
            value: cdktn.numberToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccSolutionAlgorithmHyperParameterRangesPropertyToTerraform(struct?: CcSolution.AlgorithmHyperParameterRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        categorical_hyper_parameter_ranges: cdktn.listMapper(ccSolutionCategoricalHyperParameterRangePropertyToTerraform, false)(struct!.categoricalHyperParameterRanges),
        continuous_hyper_parameter_ranges: cdktn.listMapper(ccSolutionContinuousHyperParameterRangePropertyToTerraform, false)(struct!.continuousHyperParameterRanges),
        integer_hyper_parameter_ranges: cdktn.listMapper(ccSolutionIntegerHyperParameterRangePropertyToTerraform, false)(struct!.integerHyperParameterRanges),
    }
}


export function ccSolutionAlgorithmHyperParameterRangesPropertyToHclTerraform(struct?: CcSolution.AlgorithmHyperParameterRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        categorical_hyper_parameter_ranges: {
            value: cdktn.listMapperHcl(ccSolutionCategoricalHyperParameterRangePropertyToHclTerraform, false)(struct!.categoricalHyperParameterRanges),
            isBlock: true,
            type: "list",
            storageClassType: "CategoricalHyperParameterRangePropertyList",
        },
        continuous_hyper_parameter_ranges: {
            value: cdktn.listMapperHcl(ccSolutionContinuousHyperParameterRangePropertyToHclTerraform, false)(struct!.continuousHyperParameterRanges),
            isBlock: true,
            type: "list",
            storageClassType: "ContinuousHyperParameterRangePropertyList",
        },
        integer_hyper_parameter_ranges: {
            value: cdktn.listMapperHcl(ccSolutionIntegerHyperParameterRangePropertyToHclTerraform, false)(struct!.integerHyperParameterRanges),
            isBlock: true,
            type: "list",
            storageClassType: "IntegerHyperParameterRangePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionHpoObjectivePropertyToTerraform(struct?: CcSolution.HpoObjectiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_regex: cdktn.stringToTerraform(struct!.metricRegex),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSolutionHpoObjectivePropertyToHclTerraform(struct?: CcSolution.HpoObjectiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_regex: {
            value: cdktn.stringToHclTerraform(struct!.metricRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSolutionHpoResourceConfigPropertyToTerraform(struct?: CcSolution.HpoResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_number_of_training_jobs: cdktn.stringToTerraform(struct!.maxNumberOfTrainingJobs),
        max_parallel_training_jobs: cdktn.stringToTerraform(struct!.maxParallelTrainingJobs),
    }
}


export function ccSolutionHpoResourceConfigPropertyToHclTerraform(struct?: CcSolution.HpoResourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_number_of_training_jobs: {
            value: cdktn.stringToHclTerraform(struct!.maxNumberOfTrainingJobs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_parallel_training_jobs: {
            value: cdktn.stringToHclTerraform(struct!.maxParallelTrainingJobs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionHpoConfigPropertyToTerraform(struct?: CcSolution.HpoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm_hyper_parameter_ranges: ccSolutionAlgorithmHyperParameterRangesPropertyToTerraform(struct!.algorithmHyperParameterRanges),
        hpo_objective: ccSolutionHpoObjectivePropertyToTerraform(struct!.hpoObjective),
        hpo_resource_config: ccSolutionHpoResourceConfigPropertyToTerraform(struct!.hpoResourceConfig),
    }
}


export function ccSolutionHpoConfigPropertyToHclTerraform(struct?: CcSolution.HpoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm_hyper_parameter_ranges: {
            value: ccSolutionAlgorithmHyperParameterRangesPropertyToHclTerraform(struct!.algorithmHyperParameterRanges),
            isBlock: true,
            type: "struct",
            storageClassType: "AlgorithmHyperParameterRangesProperty",
        },
        hpo_objective: {
            value: ccSolutionHpoObjectivePropertyToHclTerraform(struct!.hpoObjective),
            isBlock: true,
            type: "struct",
            storageClassType: "HpoObjectiveProperty",
        },
        hpo_resource_config: {
            value: ccSolutionHpoResourceConfigPropertyToHclTerraform(struct!.hpoResourceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HpoResourceConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionSolutionConfigPropertyToTerraform(struct?: CcSolution.SolutionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm_hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.algorithmHyperParameters),
        auto_ml_config: ccSolutionAutoMLConfigPropertyToTerraform(struct!.autoMlConfig),
        event_value_threshold: cdktn.stringToTerraform(struct!.eventValueThreshold),
        feature_transformation_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.featureTransformationParameters),
        hpo_config: ccSolutionHpoConfigPropertyToTerraform(struct!.hpoConfig),
    }
}


export function ccSolutionSolutionConfigPropertyToHclTerraform(struct?: CcSolution.SolutionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm_hyper_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.algorithmHyperParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        auto_ml_config: {
            value: ccSolutionAutoMLConfigPropertyToHclTerraform(struct!.autoMlConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoMLConfigProperty",
        },
        event_value_threshold: {
            value: cdktn.stringToHclTerraform(struct!.eventValueThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        feature_transformation_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.featureTransformationParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        hpo_config: {
            value: ccSolutionHpoConfigPropertyToHclTerraform(struct!.hpoConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HpoConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSolutionTagPropertyToTerraform(struct?: CcSolution.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSolutionTagPropertyToHclTerraform(struct?: CcSolution.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSolution {
export interface AutoMLConfigProperty {
    /**
    * The metric to optimize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#metric_name CcSolution#metric_name}
    */
    readonly metricName?: string;
    /**
    * The list of candidate recipes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#recipe_list CcSolution#recipe_list}
    */
    readonly recipeList?: string[];
}
export class AutoMLConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoMLConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._recipeList !== undefined) {
            hasAnyValues = true;
            internalValueResult.recipeList = this._recipeList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoMLConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._recipeList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._recipeList = value.recipeList;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // recipe_list - computed: true, optional: true, required: false
    private _recipeList?: string[]; 
    public get recipeList() {
        return this.getListAttribute('recipe_list');
    }
    public set recipeList(value: string[]) {
        this._recipeList = value;
    }
    public resetRecipeList() {
        this._recipeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recipeListInput() {
        return this._recipeList;
    }
}
export interface CategoricalHyperParameterRangeProperty {
    /**
    * The name of the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#name CcSolution#name}
    */
    readonly name?: string;
    /**
    * A list of the categories for the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#values CcSolution#values}
    */
    readonly values?: string[];
}
export class CategoricalHyperParameterRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CategoricalHyperParameterRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CategoricalHyperParameterRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class CategoricalHyperParameterRangePropertyList extends cdktn.ComplexList {
    public internalValue? : CategoricalHyperParameterRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): CategoricalHyperParameterRangePropertyOutputReference {
        return new CategoricalHyperParameterRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContinuousHyperParameterRangeProperty {
    /**
    * The maximum allowable value for the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#max_value CcSolution#max_value}
    */
    readonly maxValue?: number;
    /**
    * The minimum allowable value for the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#min_value CcSolution#min_value}
    */
    readonly minValue?: number;
    /**
    * The name of the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#name CcSolution#name}
    */
    readonly name?: string;
}
export class ContinuousHyperParameterRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContinuousHyperParameterRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContinuousHyperParameterRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
            this._name = value.name;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
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

export class ContinuousHyperParameterRangePropertyList extends cdktn.ComplexList {
    public internalValue? : ContinuousHyperParameterRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): ContinuousHyperParameterRangePropertyOutputReference {
        return new ContinuousHyperParameterRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntegerHyperParameterRangeProperty {
    /**
    * The maximum allowable value for the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#max_value CcSolution#max_value}
    */
    readonly maxValue?: number;
    /**
    * The minimum allowable value for the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#min_value CcSolution#min_value}
    */
    readonly minValue?: number;
    /**
    * The name of the hyperparameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#name CcSolution#name}
    */
    readonly name?: string;
}
export class IntegerHyperParameterRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegerHyperParameterRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegerHyperParameterRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
            this._name = value.name;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: number; 
    public get maxValue() {
        return this.getNumberAttribute('max_value');
    }
    public set maxValue(value: number) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: number; 
    public get minValue() {
        return this.getNumberAttribute('min_value');
    }
    public set minValue(value: number) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
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

export class IntegerHyperParameterRangePropertyList extends cdktn.ComplexList {
    public internalValue? : IntegerHyperParameterRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegerHyperParameterRangePropertyOutputReference {
        return new IntegerHyperParameterRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlgorithmHyperParameterRangesProperty {
    /**
    * The categorical hyperparameters and their ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#categorical_hyper_parameter_ranges CcSolution#categorical_hyper_parameter_ranges}
    */
    readonly categoricalHyperParameterRanges?: CategoricalHyperParameterRangeProperty[] | cdktn.IResolvable;
    /**
    * The continuous hyperparameters and their ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#continuous_hyper_parameter_ranges CcSolution#continuous_hyper_parameter_ranges}
    */
    readonly continuousHyperParameterRanges?: ContinuousHyperParameterRangeProperty[] | cdktn.IResolvable;
    /**
    * The integer hyperparameters and their ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#integer_hyper_parameter_ranges CcSolution#integer_hyper_parameter_ranges}
    */
    readonly integerHyperParameterRanges?: IntegerHyperParameterRangeProperty[] | cdktn.IResolvable;
}
export class AlgorithmHyperParameterRangesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlgorithmHyperParameterRangesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._categoricalHyperParameterRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.categoricalHyperParameterRanges = this._categoricalHyperParameterRanges?.internalValue;
        }
        if (this._continuousHyperParameterRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.continuousHyperParameterRanges = this._continuousHyperParameterRanges?.internalValue;
        }
        if (this._integerHyperParameterRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerHyperParameterRanges = this._integerHyperParameterRanges?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlgorithmHyperParameterRangesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._categoricalHyperParameterRanges.internalValue = undefined;
            this._continuousHyperParameterRanges.internalValue = undefined;
            this._integerHyperParameterRanges.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._categoricalHyperParameterRanges.internalValue = value.categoricalHyperParameterRanges;
            this._continuousHyperParameterRanges.internalValue = value.continuousHyperParameterRanges;
            this._integerHyperParameterRanges.internalValue = value.integerHyperParameterRanges;
        }
    }

    // categorical_hyper_parameter_ranges - computed: true, optional: true, required: false
    private _categoricalHyperParameterRanges = new CategoricalHyperParameterRangePropertyList(this, "categorical_hyper_parameter_ranges", false);
    public get categoricalHyperParameterRanges() {
        return this._categoricalHyperParameterRanges;
    }
    public putCategoricalHyperParameterRanges(value: CategoricalHyperParameterRangeProperty[] | cdktn.IResolvable) {
        this._categoricalHyperParameterRanges.internalValue = value;
    }
    public resetCategoricalHyperParameterRanges() {
        this._categoricalHyperParameterRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoricalHyperParameterRangesInput() {
        return this._categoricalHyperParameterRanges.internalValue;
    }

    // continuous_hyper_parameter_ranges - computed: true, optional: true, required: false
    private _continuousHyperParameterRanges = new ContinuousHyperParameterRangePropertyList(this, "continuous_hyper_parameter_ranges", false);
    public get continuousHyperParameterRanges() {
        return this._continuousHyperParameterRanges;
    }
    public putContinuousHyperParameterRanges(value: ContinuousHyperParameterRangeProperty[] | cdktn.IResolvable) {
        this._continuousHyperParameterRanges.internalValue = value;
    }
    public resetContinuousHyperParameterRanges() {
        this._continuousHyperParameterRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get continuousHyperParameterRangesInput() {
        return this._continuousHyperParameterRanges.internalValue;
    }

    // integer_hyper_parameter_ranges - computed: true, optional: true, required: false
    private _integerHyperParameterRanges = new IntegerHyperParameterRangePropertyList(this, "integer_hyper_parameter_ranges", false);
    public get integerHyperParameterRanges() {
        return this._integerHyperParameterRanges;
    }
    public putIntegerHyperParameterRanges(value: IntegerHyperParameterRangeProperty[] | cdktn.IResolvable) {
        this._integerHyperParameterRanges.internalValue = value;
    }
    public resetIntegerHyperParameterRanges() {
        this._integerHyperParameterRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerHyperParameterRangesInput() {
        return this._integerHyperParameterRanges.internalValue;
    }
}
export interface HpoObjectiveProperty {
    /**
    * The name of the metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#metric_name CcSolution#metric_name}
    */
    readonly metricName?: string;
    /**
    * A regular expression for finding the metric in the training job logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#metric_regex CcSolution#metric_regex}
    */
    readonly metricRegex?: string;
    /**
    * The type of the metric. Valid values are Maximize and Minimize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#type CcSolution#type}
    */
    readonly type?: string;
}
export class HpoObjectivePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HpoObjectiveProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricRegex = this._metricRegex;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HpoObjectiveProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._metricRegex = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._metricRegex = value.metricRegex;
            this._type = value.type;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // metric_regex - computed: true, optional: true, required: false
    private _metricRegex?: string; 
    public get metricRegex() {
        return this.getStringAttribute('metric_regex');
    }
    public set metricRegex(value: string) {
        this._metricRegex = value;
    }
    public resetMetricRegex() {
        this._metricRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricRegexInput() {
        return this._metricRegex;
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
export interface HpoResourceConfigProperty {
    /**
    * The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#max_number_of_training_jobs CcSolution#max_number_of_training_jobs}
    */
    readonly maxNumberOfTrainingJobs?: string;
    /**
    * The maximum number of parallel training jobs when you create a solution version. The maximum value for maxParallelTrainingJobs is 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#max_parallel_training_jobs CcSolution#max_parallel_training_jobs}
    */
    readonly maxParallelTrainingJobs?: string;
}
export class HpoResourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HpoResourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxNumberOfTrainingJobs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxNumberOfTrainingJobs = this._maxNumberOfTrainingJobs;
        }
        if (this._maxParallelTrainingJobs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxParallelTrainingJobs = this._maxParallelTrainingJobs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HpoResourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxNumberOfTrainingJobs = undefined;
            this._maxParallelTrainingJobs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxNumberOfTrainingJobs = value.maxNumberOfTrainingJobs;
            this._maxParallelTrainingJobs = value.maxParallelTrainingJobs;
        }
    }

    // max_number_of_training_jobs - computed: true, optional: true, required: false
    private _maxNumberOfTrainingJobs?: string; 
    public get maxNumberOfTrainingJobs() {
        return this.getStringAttribute('max_number_of_training_jobs');
    }
    public set maxNumberOfTrainingJobs(value: string) {
        this._maxNumberOfTrainingJobs = value;
    }
    public resetMaxNumberOfTrainingJobs() {
        this._maxNumberOfTrainingJobs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxNumberOfTrainingJobsInput() {
        return this._maxNumberOfTrainingJobs;
    }

    // max_parallel_training_jobs - computed: true, optional: true, required: false
    private _maxParallelTrainingJobs?: string; 
    public get maxParallelTrainingJobs() {
        return this.getStringAttribute('max_parallel_training_jobs');
    }
    public set maxParallelTrainingJobs(value: string) {
        this._maxParallelTrainingJobs = value;
    }
    public resetMaxParallelTrainingJobs() {
        this._maxParallelTrainingJobs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxParallelTrainingJobsInput() {
        return this._maxParallelTrainingJobs;
    }
}
export interface HpoConfigProperty {
    /**
    * The hyperparameters and their allowable ranges
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#algorithm_hyper_parameter_ranges CcSolution#algorithm_hyper_parameter_ranges}
    */
    readonly algorithmHyperParameterRanges?: AlgorithmHyperParameterRangesProperty;
    /**
    * The metric to optimize during HPO.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#hpo_objective CcSolution#hpo_objective}
    */
    readonly hpoObjective?: HpoObjectiveProperty;
    /**
    * Describes the resource configuration for hyperparameter optimization (HPO).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#hpo_resource_config CcSolution#hpo_resource_config}
    */
    readonly hpoResourceConfig?: HpoResourceConfigProperty;
}
export class HpoConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HpoConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithmHyperParameterRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithmHyperParameterRanges = this._algorithmHyperParameterRanges?.internalValue;
        }
        if (this._hpoObjective?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hpoObjective = this._hpoObjective?.internalValue;
        }
        if (this._hpoResourceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hpoResourceConfig = this._hpoResourceConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HpoConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithmHyperParameterRanges.internalValue = undefined;
            this._hpoObjective.internalValue = undefined;
            this._hpoResourceConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithmHyperParameterRanges.internalValue = value.algorithmHyperParameterRanges;
            this._hpoObjective.internalValue = value.hpoObjective;
            this._hpoResourceConfig.internalValue = value.hpoResourceConfig;
        }
    }

    // algorithm_hyper_parameter_ranges - computed: true, optional: true, required: false
    private _algorithmHyperParameterRanges = new AlgorithmHyperParameterRangesPropertyOutputReference(this, "algorithm_hyper_parameter_ranges");
    public get algorithmHyperParameterRanges() {
        return this._algorithmHyperParameterRanges;
    }
    public putAlgorithmHyperParameterRanges(value: AlgorithmHyperParameterRangesProperty) {
        this._algorithmHyperParameterRanges.internalValue = value;
    }
    public resetAlgorithmHyperParameterRanges() {
        this._algorithmHyperParameterRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmHyperParameterRangesInput() {
        return this._algorithmHyperParameterRanges.internalValue;
    }

    // hpo_objective - computed: true, optional: true, required: false
    private _hpoObjective = new HpoObjectivePropertyOutputReference(this, "hpo_objective");
    public get hpoObjective() {
        return this._hpoObjective;
    }
    public putHpoObjective(value: HpoObjectiveProperty) {
        this._hpoObjective.internalValue = value;
    }
    public resetHpoObjective() {
        this._hpoObjective.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hpoObjectiveInput() {
        return this._hpoObjective.internalValue;
    }

    // hpo_resource_config - computed: true, optional: true, required: false
    private _hpoResourceConfig = new HpoResourceConfigPropertyOutputReference(this, "hpo_resource_config");
    public get hpoResourceConfig() {
        return this._hpoResourceConfig;
    }
    public putHpoResourceConfig(value: HpoResourceConfigProperty) {
        this._hpoResourceConfig.internalValue = value;
    }
    public resetHpoResourceConfig() {
        this._hpoResourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hpoResourceConfigInput() {
        return this._hpoResourceConfig.internalValue;
    }
}
export interface SolutionConfigProperty {
    /**
    * Lists the hyperparameter names and ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#algorithm_hyper_parameters CcSolution#algorithm_hyper_parameters}
    */
    readonly algorithmHyperParameters?: { [key: string]: string };
    /**
    * The AutoMLConfig object containing a list of recipes to search when AutoML is performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#auto_ml_config CcSolution#auto_ml_config}
    */
    readonly autoMlConfig?: AutoMLConfigProperty;
    /**
    * Only events with a value greater than or equal to this threshold are used for training a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#event_value_threshold CcSolution#event_value_threshold}
    */
    readonly eventValueThreshold?: string;
    /**
    * Lists the feature transformation parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#feature_transformation_parameters CcSolution#feature_transformation_parameters}
    */
    readonly featureTransformationParameters?: { [key: string]: string };
    /**
    * Describes the properties for hyperparameter optimization (HPO)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#hpo_config CcSolution#hpo_config}
    */
    readonly hpoConfig?: HpoConfigProperty;
}
export class SolutionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SolutionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithmHyperParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithmHyperParameters = this._algorithmHyperParameters;
        }
        if (this._autoMlConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoMlConfig = this._autoMlConfig?.internalValue;
        }
        if (this._eventValueThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventValueThreshold = this._eventValueThreshold;
        }
        if (this._featureTransformationParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureTransformationParameters = this._featureTransformationParameters;
        }
        if (this._hpoConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hpoConfig = this._hpoConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SolutionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithmHyperParameters = undefined;
            this._autoMlConfig.internalValue = undefined;
            this._eventValueThreshold = undefined;
            this._featureTransformationParameters = undefined;
            this._hpoConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithmHyperParameters = value.algorithmHyperParameters;
            this._autoMlConfig.internalValue = value.autoMlConfig;
            this._eventValueThreshold = value.eventValueThreshold;
            this._featureTransformationParameters = value.featureTransformationParameters;
            this._hpoConfig.internalValue = value.hpoConfig;
        }
    }

    // algorithm_hyper_parameters - computed: true, optional: true, required: false
    private _algorithmHyperParameters?: { [key: string]: string }; 
    public get algorithmHyperParameters() {
        return this.getStringMapAttribute('algorithm_hyper_parameters');
    }
    public set algorithmHyperParameters(value: { [key: string]: string }) {
        this._algorithmHyperParameters = value;
    }
    public resetAlgorithmHyperParameters() {
        this._algorithmHyperParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmHyperParametersInput() {
        return this._algorithmHyperParameters;
    }

    // auto_ml_config - computed: true, optional: true, required: false
    private _autoMlConfig = new AutoMLConfigPropertyOutputReference(this, "auto_ml_config");
    public get autoMlConfig() {
        return this._autoMlConfig;
    }
    public putAutoMlConfig(value: AutoMLConfigProperty) {
        this._autoMlConfig.internalValue = value;
    }
    public resetAutoMlConfig() {
        this._autoMlConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMlConfigInput() {
        return this._autoMlConfig.internalValue;
    }

    // event_value_threshold - computed: true, optional: true, required: false
    private _eventValueThreshold?: string; 
    public get eventValueThreshold() {
        return this.getStringAttribute('event_value_threshold');
    }
    public set eventValueThreshold(value: string) {
        this._eventValueThreshold = value;
    }
    public resetEventValueThreshold() {
        this._eventValueThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventValueThresholdInput() {
        return this._eventValueThreshold;
    }

    // feature_transformation_parameters - computed: true, optional: true, required: false
    private _featureTransformationParameters?: { [key: string]: string }; 
    public get featureTransformationParameters() {
        return this.getStringMapAttribute('feature_transformation_parameters');
    }
    public set featureTransformationParameters(value: { [key: string]: string }) {
        this._featureTransformationParameters = value;
    }
    public resetFeatureTransformationParameters() {
        this._featureTransformationParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureTransformationParametersInput() {
        return this._featureTransformationParameters;
    }

    // hpo_config - computed: true, optional: true, required: false
    private _hpoConfig = new HpoConfigPropertyOutputReference(this, "hpo_config");
    public get hpoConfig() {
        return this._hpoConfig;
    }
    public putHpoConfig(value: HpoConfigProperty) {
        this._hpoConfig.internalValue = value;
    }
    public resetHpoConfig() {
        this._hpoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hpoConfigInput() {
        return this._hpoConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#key CcSolution#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/personalize_solution#value CcSolution#value}
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
