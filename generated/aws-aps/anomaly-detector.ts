// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnomalyDetectorProps extends cdktn.TerraformMetaArguments {
    /**
    * The AnomalyDetector alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#alias CcAnomalyDetector#alias}
    */
    readonly alias: string;
    /**
    * Determines the anomaly detector's algorithm and its configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#configuration CcAnomalyDetector#configuration}
    */
    readonly configuration: CcAnomalyDetector.AnomalyDetectorConfigurationProperty;
    /**
    * The AnomalyDetector period of detection and metric generation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds CcAnomalyDetector#evaluation_interval_in_seconds}
    */
    readonly evaluationIntervalInSeconds?: number;
    /**
    * An array of key-value pairs to provide meta-data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#labels CcAnomalyDetector#labels}
    */
    readonly labels?: CcAnomalyDetector.LabelProperty[] | cdktn.IResolvable;
    /**
    * The action to perform when running the expression returns no data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#missing_data_action CcAnomalyDetector#missing_data_action}
    */
    readonly missingDataAction?: CcAnomalyDetector.MissingDataActionProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#tags CcAnomalyDetector#tags}
    */
    readonly tags?: CcAnomalyDetector.TagProperty[] | cdktn.IResolvable;
    /**
    * Required to identify a specific APS Workspace associated with this Anomaly Detector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#workspace CcAnomalyDetector#workspace}
    */
    readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector}
*/
export class CcAnomalyDetector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_aps_anomaly_detector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnomalyDetector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnomalyDetector to import
    * @param importFromId The id of the existing CcAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnomalyDetector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_anomaly_detector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnomalyDetectorProps
    */
    public constructor(scope: Construct, id: string, config: CcAnomalyDetectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_aps_anomaly_detector',
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
        this._alias = config.alias;
        this._configuration.internalValue = config.configuration;
        this._evaluationIntervalInSeconds = config.evaluationIntervalInSeconds;
        this._labels.internalValue = config.labels;
        this._missingDataAction.internalValue = config.missingDataAction;
        this._tags.internalValue = config.tags;
        this._workspace = config.workspace;
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

    // configuration - computed: false, optional: false, required: true
    private _configuration = new CcAnomalyDetector.AnomalyDetectorConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcAnomalyDetector.AnomalyDetectorConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // evaluation_interval_in_seconds - computed: true, optional: true, required: false
    private _evaluationIntervalInSeconds?: number; 
    public get evaluationIntervalInSeconds() {
        return this.getNumberAttribute('evaluation_interval_in_seconds');
    }
    public set evaluationIntervalInSeconds(value: number) {
        this._evaluationIntervalInSeconds = value;
    }
    public resetEvaluationIntervalInSeconds() {
        this._evaluationIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationIntervalInSecondsInput() {
        return this._evaluationIntervalInSeconds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // labels - computed: true, optional: true, required: false
    private _labels = new CcAnomalyDetector.LabelPropertyList(this, "labels", true);
    public get labels() {
        return this._labels;
    }
    public putLabels(value: CcAnomalyDetector.LabelProperty[] | cdktn.IResolvable) {
        this._labels.internalValue = value;
    }
    public resetLabels() {
        this._labels.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
        return this._labels.internalValue;
    }

    // missing_data_action - computed: true, optional: true, required: false
    private _missingDataAction = new CcAnomalyDetector.MissingDataActionPropertyOutputReference(this, "missing_data_action");
    public get missingDataAction() {
        return this._missingDataAction;
    }
    public putMissingDataAction(value: CcAnomalyDetector.MissingDataActionProperty) {
        this._missingDataAction.internalValue = value;
    }
    public resetMissingDataAction() {
        this._missingDataAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get missingDataActionInput() {
        return this._missingDataAction.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAnomalyDetector.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAnomalyDetector.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workspace - computed: false, optional: false, required: true
    private _workspace?: string; 
    public get workspace() {
        return this.getStringAttribute('workspace');
    }
    public set workspace(value: string) {
        this._workspace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceInput() {
        return this._workspace;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias: cdktn.stringToTerraform(this._alias),
            configuration: ccAnomalyDetectorAnomalyDetectorConfigurationPropertyToTerraform(this._configuration.internalValue),
            evaluation_interval_in_seconds: cdktn.numberToTerraform(this._evaluationIntervalInSeconds),
            labels: cdktn.listMapper(ccAnomalyDetectorLabelPropertyToTerraform, false)(this._labels.internalValue),
            missing_data_action: ccAnomalyDetectorMissingDataActionPropertyToTerraform(this._missingDataAction.internalValue),
            tags: cdktn.listMapper(ccAnomalyDetectorTagPropertyToTerraform, false)(this._tags.internalValue),
            workspace: cdktn.stringToTerraform(this._workspace),
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
            configuration: {
                value: ccAnomalyDetectorAnomalyDetectorConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.AnomalyDetectorConfigurationProperty",
            },
            evaluation_interval_in_seconds: {
                value: cdktn.numberToHclTerraform(this._evaluationIntervalInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            labels: {
                value: cdktn.listMapperHcl(ccAnomalyDetectorLabelPropertyToHclTerraform, false)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAnomalyDetector.LabelPropertyList",
            },
            missing_data_action: {
                value: ccAnomalyDetectorMissingDataActionPropertyToHclTerraform(this._missingDataAction.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.MissingDataActionProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAnomalyDetectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAnomalyDetector.TagPropertyList",
            },
            workspace: {
                value: cdktn.stringToHclTerraform(this._workspace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnomalyDetectorIgnoreNearExpectedPropertyToTerraform(struct?: CcAnomalyDetector.IgnoreNearExpectedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amount: cdktn.numberToTerraform(struct!.amount),
        ratio: cdktn.numberToTerraform(struct!.ratio),
    }
}


export function ccAnomalyDetectorIgnoreNearExpectedPropertyToHclTerraform(struct?: CcAnomalyDetector.IgnoreNearExpectedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amount: {
            value: cdktn.numberToHclTerraform(struct!.amount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ratio: {
            value: cdktn.numberToHclTerraform(struct!.ratio),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorIgnoreNearExpectedFromBelowPropertyToTerraform(struct?: CcAnomalyDetector.IgnoreNearExpectedFromBelowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amount: cdktn.numberToTerraform(struct!.amount),
        ratio: cdktn.numberToTerraform(struct!.ratio),
    }
}


export function ccAnomalyDetectorIgnoreNearExpectedFromBelowPropertyToHclTerraform(struct?: CcAnomalyDetector.IgnoreNearExpectedFromBelowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amount: {
            value: cdktn.numberToHclTerraform(struct!.amount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ratio: {
            value: cdktn.numberToHclTerraform(struct!.ratio),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorRandomCutForestConfigurationPropertyToTerraform(struct?: CcAnomalyDetector.RandomCutForestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ignore_near_expected_from_above: ccAnomalyDetectorIgnoreNearExpectedPropertyToTerraform(struct!.ignoreNearExpectedFromAbove),
        ignore_near_expected_from_below: ccAnomalyDetectorIgnoreNearExpectedFromBelowPropertyToTerraform(struct!.ignoreNearExpectedFromBelow),
        query: cdktn.stringToTerraform(struct!.query),
        sample_size: cdktn.numberToTerraform(struct!.sampleSize),
        shingle_size: cdktn.numberToTerraform(struct!.shingleSize),
    }
}


export function ccAnomalyDetectorRandomCutForestConfigurationPropertyToHclTerraform(struct?: CcAnomalyDetector.RandomCutForestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ignore_near_expected_from_above: {
            value: ccAnomalyDetectorIgnoreNearExpectedPropertyToHclTerraform(struct!.ignoreNearExpectedFromAbove),
            isBlock: true,
            type: "struct",
            storageClassType: "IgnoreNearExpectedProperty",
        },
        ignore_near_expected_from_below: {
            value: ccAnomalyDetectorIgnoreNearExpectedFromBelowPropertyToHclTerraform(struct!.ignoreNearExpectedFromBelow),
            isBlock: true,
            type: "struct",
            storageClassType: "IgnoreNearExpectedFromBelowProperty",
        },
        query: {
            value: cdktn.stringToHclTerraform(struct!.query),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sample_size: {
            value: cdktn.numberToHclTerraform(struct!.sampleSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        shingle_size: {
            value: cdktn.numberToHclTerraform(struct!.shingleSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorAnomalyDetectorConfigurationPropertyToTerraform(struct?: CcAnomalyDetector.AnomalyDetectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        random_cut_forest: ccAnomalyDetectorRandomCutForestConfigurationPropertyToTerraform(struct!.randomCutForest),
    }
}


export function ccAnomalyDetectorAnomalyDetectorConfigurationPropertyToHclTerraform(struct?: CcAnomalyDetector.AnomalyDetectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        random_cut_forest: {
            value: ccAnomalyDetectorRandomCutForestConfigurationPropertyToHclTerraform(struct!.randomCutForest),
            isBlock: true,
            type: "struct",
            storageClassType: "RandomCutForestConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorLabelPropertyToTerraform(struct?: CcAnomalyDetector.LabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyDetectorLabelPropertyToHclTerraform(struct?: CcAnomalyDetector.LabelProperty | cdktn.IResolvable): any {
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


export function ccAnomalyDetectorMissingDataActionPropertyToTerraform(struct?: CcAnomalyDetector.MissingDataActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mark_as_anomaly: cdktn.booleanToTerraform(struct!.markAsAnomaly),
        skip: cdktn.booleanToTerraform(struct!.skip),
    }
}


export function ccAnomalyDetectorMissingDataActionPropertyToHclTerraform(struct?: CcAnomalyDetector.MissingDataActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mark_as_anomaly: {
            value: cdktn.booleanToHclTerraform(struct!.markAsAnomaly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        skip: {
            value: cdktn.booleanToHclTerraform(struct!.skip),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorTagPropertyToTerraform(struct?: CcAnomalyDetector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyDetectorTagPropertyToHclTerraform(struct?: CcAnomalyDetector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAnomalyDetector {
export interface IgnoreNearExpectedProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#amount CcAnomalyDetector#amount}
    */
    readonly amount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#ratio CcAnomalyDetector#ratio}
    */
    readonly ratio?: number;
}
export class IgnoreNearExpectedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IgnoreNearExpectedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amount !== undefined) {
            hasAnyValues = true;
            internalValueResult.amount = this._amount;
        }
        if (this._ratio !== undefined) {
            hasAnyValues = true;
            internalValueResult.ratio = this._ratio;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IgnoreNearExpectedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amount = undefined;
            this._ratio = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amount = value.amount;
            this._ratio = value.ratio;
        }
    }

    // amount - computed: true, optional: true, required: false
    private _amount?: number; 
    public get amount() {
        return this.getNumberAttribute('amount');
    }
    public set amount(value: number) {
        this._amount = value;
    }
    public resetAmount() {
        this._amount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amountInput() {
        return this._amount;
    }

    // ratio - computed: true, optional: true, required: false
    private _ratio?: number; 
    public get ratio() {
        return this.getNumberAttribute('ratio');
    }
    public set ratio(value: number) {
        this._ratio = value;
    }
    public resetRatio() {
        this._ratio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ratioInput() {
        return this._ratio;
    }
}
export interface IgnoreNearExpectedFromBelowProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#amount CcAnomalyDetector#amount}
    */
    readonly amount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#ratio CcAnomalyDetector#ratio}
    */
    readonly ratio?: number;
}
export class IgnoreNearExpectedFromBelowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IgnoreNearExpectedFromBelowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amount !== undefined) {
            hasAnyValues = true;
            internalValueResult.amount = this._amount;
        }
        if (this._ratio !== undefined) {
            hasAnyValues = true;
            internalValueResult.ratio = this._ratio;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IgnoreNearExpectedFromBelowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amount = undefined;
            this._ratio = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amount = value.amount;
            this._ratio = value.ratio;
        }
    }

    // amount - computed: true, optional: true, required: false
    private _amount?: number; 
    public get amount() {
        return this.getNumberAttribute('amount');
    }
    public set amount(value: number) {
        this._amount = value;
    }
    public resetAmount() {
        this._amount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amountInput() {
        return this._amount;
    }

    // ratio - computed: true, optional: true, required: false
    private _ratio?: number; 
    public get ratio() {
        return this.getNumberAttribute('ratio');
    }
    public set ratio(value: number) {
        this._ratio = value;
    }
    public resetRatio() {
        this._ratio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ratioInput() {
        return this._ratio;
    }
}
export interface RandomCutForestConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above CcAnomalyDetector#ignore_near_expected_from_above}
    */
    readonly ignoreNearExpectedFromAbove?: IgnoreNearExpectedProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below CcAnomalyDetector#ignore_near_expected_from_below}
    */
    readonly ignoreNearExpectedFromBelow?: IgnoreNearExpectedFromBelowProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#query CcAnomalyDetector#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#sample_size CcAnomalyDetector#sample_size}
    */
    readonly sampleSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#shingle_size CcAnomalyDetector#shingle_size}
    */
    readonly shingleSize?: number;
}
export class RandomCutForestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RandomCutForestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ignoreNearExpectedFromAbove?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreNearExpectedFromAbove = this._ignoreNearExpectedFromAbove?.internalValue;
        }
        if (this._ignoreNearExpectedFromBelow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreNearExpectedFromBelow = this._ignoreNearExpectedFromBelow?.internalValue;
        }
        if (this._query !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        if (this._sampleSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.sampleSize = this._sampleSize;
        }
        if (this._shingleSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.shingleSize = this._shingleSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RandomCutForestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ignoreNearExpectedFromAbove.internalValue = undefined;
            this._ignoreNearExpectedFromBelow.internalValue = undefined;
            this._query = undefined;
            this._sampleSize = undefined;
            this._shingleSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ignoreNearExpectedFromAbove.internalValue = value.ignoreNearExpectedFromAbove;
            this._ignoreNearExpectedFromBelow.internalValue = value.ignoreNearExpectedFromBelow;
            this._query = value.query;
            this._sampleSize = value.sampleSize;
            this._shingleSize = value.shingleSize;
        }
    }

    // ignore_near_expected_from_above - computed: true, optional: true, required: false
    private _ignoreNearExpectedFromAbove = new IgnoreNearExpectedPropertyOutputReference(this, "ignore_near_expected_from_above");
    public get ignoreNearExpectedFromAbove() {
        return this._ignoreNearExpectedFromAbove;
    }
    public putIgnoreNearExpectedFromAbove(value: IgnoreNearExpectedProperty) {
        this._ignoreNearExpectedFromAbove.internalValue = value;
    }
    public resetIgnoreNearExpectedFromAbove() {
        this._ignoreNearExpectedFromAbove.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreNearExpectedFromAboveInput() {
        return this._ignoreNearExpectedFromAbove.internalValue;
    }

    // ignore_near_expected_from_below - computed: true, optional: true, required: false
    private _ignoreNearExpectedFromBelow = new IgnoreNearExpectedFromBelowPropertyOutputReference(this, "ignore_near_expected_from_below");
    public get ignoreNearExpectedFromBelow() {
        return this._ignoreNearExpectedFromBelow;
    }
    public putIgnoreNearExpectedFromBelow(value: IgnoreNearExpectedFromBelowProperty) {
        this._ignoreNearExpectedFromBelow.internalValue = value;
    }
    public resetIgnoreNearExpectedFromBelow() {
        this._ignoreNearExpectedFromBelow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreNearExpectedFromBelowInput() {
        return this._ignoreNearExpectedFromBelow.internalValue;
    }

    // query - computed: false, optional: false, required: true
    private _query?: string; 
    public get query() {
        return this.getStringAttribute('query');
    }
    public set query(value: string) {
        this._query = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryInput() {
        return this._query;
    }

    // sample_size - computed: true, optional: true, required: false
    private _sampleSize?: number; 
    public get sampleSize() {
        return this.getNumberAttribute('sample_size');
    }
    public set sampleSize(value: number) {
        this._sampleSize = value;
    }
    public resetSampleSize() {
        this._sampleSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleSizeInput() {
        return this._sampleSize;
    }

    // shingle_size - computed: true, optional: true, required: false
    private _shingleSize?: number; 
    public get shingleSize() {
        return this.getNumberAttribute('shingle_size');
    }
    public set shingleSize(value: number) {
        this._shingleSize = value;
    }
    public resetShingleSize() {
        this._shingleSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shingleSizeInput() {
        return this._shingleSize;
    }
}
export interface AnomalyDetectorConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#random_cut_forest CcAnomalyDetector#random_cut_forest}
    */
    readonly randomCutForest: RandomCutForestConfigurationProperty;
}
export class AnomalyDetectorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnomalyDetectorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._randomCutForest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.randomCutForest = this._randomCutForest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnomalyDetectorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._randomCutForest.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._randomCutForest.internalValue = value.randomCutForest;
        }
    }

    // random_cut_forest - computed: false, optional: false, required: true
    private _randomCutForest = new RandomCutForestConfigurationPropertyOutputReference(this, "random_cut_forest");
    public get randomCutForest() {
        return this._randomCutForest;
    }
    public putRandomCutForest(value: RandomCutForestConfigurationProperty) {
        this._randomCutForest.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get randomCutForestInput() {
        return this._randomCutForest.internalValue;
    }
}
export interface LabelProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#key CcAnomalyDetector#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#value CcAnomalyDetector#value}
    */
    readonly value?: string;
}
export class LabelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LabelProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LabelProperty | cdktn.IResolvable | undefined) {
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

export class LabelPropertyList extends cdktn.ComplexList {
    public internalValue? : LabelProperty[] | cdktn.IResolvable

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
    public get(index: number): LabelPropertyOutputReference {
        return new LabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MissingDataActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#mark_as_anomaly CcAnomalyDetector#mark_as_anomaly}
    */
    readonly markAsAnomaly?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#skip CcAnomalyDetector#skip}
    */
    readonly skip?: boolean | cdktn.IResolvable;
}
export class MissingDataActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MissingDataActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._markAsAnomaly !== undefined) {
            hasAnyValues = true;
            internalValueResult.markAsAnomaly = this._markAsAnomaly;
        }
        if (this._skip !== undefined) {
            hasAnyValues = true;
            internalValueResult.skip = this._skip;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MissingDataActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._markAsAnomaly = undefined;
            this._skip = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._markAsAnomaly = value.markAsAnomaly;
            this._skip = value.skip;
        }
    }

    // mark_as_anomaly - computed: true, optional: true, required: false
    private _markAsAnomaly?: boolean | cdktn.IResolvable; 
    public get markAsAnomaly() {
        return this.getBooleanAttribute('mark_as_anomaly');
    }
    public set markAsAnomaly(value: boolean | cdktn.IResolvable) {
        this._markAsAnomaly = value;
    }
    public resetMarkAsAnomaly() {
        this._markAsAnomaly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get markAsAnomalyInput() {
        return this._markAsAnomaly;
    }

    // skip - computed: true, optional: true, required: false
    private _skip?: boolean | cdktn.IResolvable; 
    public get skip() {
        return this.getBooleanAttribute('skip');
    }
    public set skip(value: boolean | cdktn.IResolvable) {
        this._skip = value;
    }
    public resetSkip() {
        this._skip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipInput() {
        return this._skip;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#key CcAnomalyDetector#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_anomaly_detector#value CcAnomalyDetector#value}
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
