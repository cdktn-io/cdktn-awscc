// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAiWorkloadConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the AI workload configuration. The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name CcAiWorkloadConfig#ai_workload_config_name}
    */
    readonly aiWorkloadConfigName: string;
    /**
    * The benchmark tool configuration and workload specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs CcAiWorkloadConfig#ai_workload_configs}
    */
    readonly aiWorkloadConfigs?: CcAiWorkloadConfig.AiWorkloadConfigsProperty;
    /**
    * The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#dataset_config CcAiWorkloadConfig#dataset_config}
    */
    readonly datasetConfig?: CcAiWorkloadConfig.DatasetConfigProperty;
    /**
    * The metadata that you apply to the AI workload configuration to help you categorize and organize it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#tags CcAiWorkloadConfig#tags}
    */
    readonly tags?: CcAiWorkloadConfig.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}
*/
export class CcAiWorkloadConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_ai_workload_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAiWorkloadConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAiWorkloadConfig to import
    * @param importFromId The id of the existing CcAiWorkloadConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAiWorkloadConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_ai_workload_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAiWorkloadConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcAiWorkloadConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_ai_workload_config',
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
        this._aiWorkloadConfigName = config.aiWorkloadConfigName;
        this._aiWorkloadConfigs.internalValue = config.aiWorkloadConfigs;
        this._datasetConfig.internalValue = config.datasetConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ai_workload_config_arn - computed: true, optional: false, required: false
    public get aiWorkloadConfigArn() {
        return this.getStringAttribute('ai_workload_config_arn');
    }

    // ai_workload_config_name - computed: false, optional: false, required: true
    private _aiWorkloadConfigName?: string; 
    public get aiWorkloadConfigName() {
        return this.getStringAttribute('ai_workload_config_name');
    }
    public set aiWorkloadConfigName(value: string) {
        this._aiWorkloadConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aiWorkloadConfigNameInput() {
        return this._aiWorkloadConfigName;
    }

    // ai_workload_configs - computed: true, optional: true, required: false
    private _aiWorkloadConfigs = new CcAiWorkloadConfig.AiWorkloadConfigsPropertyOutputReference(this, "ai_workload_configs");
    public get aiWorkloadConfigs() {
        return this._aiWorkloadConfigs;
    }
    public putAiWorkloadConfigs(value: CcAiWorkloadConfig.AiWorkloadConfigsProperty) {
        this._aiWorkloadConfigs.internalValue = value;
    }
    public resetAiWorkloadConfigs() {
        this._aiWorkloadConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aiWorkloadConfigsInput() {
        return this._aiWorkloadConfigs.internalValue;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // dataset_config - computed: true, optional: true, required: false
    private _datasetConfig = new CcAiWorkloadConfig.DatasetConfigPropertyOutputReference(this, "dataset_config");
    public get datasetConfig() {
        return this._datasetConfig;
    }
    public putDatasetConfig(value: CcAiWorkloadConfig.DatasetConfigProperty) {
        this._datasetConfig.internalValue = value;
    }
    public resetDatasetConfig() {
        this._datasetConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetConfigInput() {
        return this._datasetConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAiWorkloadConfig.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAiWorkloadConfig.TagsProperty[] | cdktn.IResolvable) {
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
            ai_workload_config_name: cdktn.stringToTerraform(this._aiWorkloadConfigName),
            ai_workload_configs: ccAiWorkloadConfigAiWorkloadConfigsPropertyToTerraform(this._aiWorkloadConfigs.internalValue),
            dataset_config: ccAiWorkloadConfigDatasetConfigPropertyToTerraform(this._datasetConfig.internalValue),
            tags: cdktn.listMapper(ccAiWorkloadConfigTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ai_workload_config_name: {
                value: cdktn.stringToHclTerraform(this._aiWorkloadConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ai_workload_configs: {
                value: ccAiWorkloadConfigAiWorkloadConfigsPropertyToHclTerraform(this._aiWorkloadConfigs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAiWorkloadConfig.AiWorkloadConfigsProperty",
            },
            dataset_config: {
                value: ccAiWorkloadConfigDatasetConfigPropertyToHclTerraform(this._datasetConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAiWorkloadConfig.DatasetConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAiWorkloadConfigTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAiWorkloadConfig.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAiWorkloadConfigWorkloadSpecPropertyToTerraform(struct?: CcAiWorkloadConfig.WorkloadSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inline: cdktn.stringToTerraform(struct!.inline),
    }
}


export function ccAiWorkloadConfigWorkloadSpecPropertyToHclTerraform(struct?: CcAiWorkloadConfig.WorkloadSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inline: {
            value: cdktn.stringToHclTerraform(struct!.inline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigAiWorkloadConfigsPropertyToTerraform(struct?: CcAiWorkloadConfig.AiWorkloadConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        workload_spec: ccAiWorkloadConfigWorkloadSpecPropertyToTerraform(struct!.workloadSpec),
    }
}


export function ccAiWorkloadConfigAiWorkloadConfigsPropertyToHclTerraform(struct?: CcAiWorkloadConfig.AiWorkloadConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        workload_spec: {
            value: ccAiWorkloadConfigWorkloadSpecPropertyToHclTerraform(struct!.workloadSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkloadSpecProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigS3DataSourcePropertyToTerraform(struct?: CcAiWorkloadConfig.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccAiWorkloadConfigS3DataSourcePropertyToHclTerraform(struct?: CcAiWorkloadConfig.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigDataSourcePropertyToTerraform(struct?: CcAiWorkloadConfig.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccAiWorkloadConfigS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccAiWorkloadConfigDataSourcePropertyToHclTerraform(struct?: CcAiWorkloadConfig.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccAiWorkloadConfigS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigInputDataConfigPropertyToTerraform(struct?: CcAiWorkloadConfig.InputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_name: cdktn.stringToTerraform(struct!.channelName),
        data_source: ccAiWorkloadConfigDataSourcePropertyToTerraform(struct!.dataSource),
    }
}


export function ccAiWorkloadConfigInputDataConfigPropertyToHclTerraform(struct?: CcAiWorkloadConfig.InputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_name: {
            value: cdktn.stringToHclTerraform(struct!.channelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_source: {
            value: ccAiWorkloadConfigDataSourcePropertyToHclTerraform(struct!.dataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigDatasetConfigPropertyToTerraform(struct?: CcAiWorkloadConfig.DatasetConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_data_config: cdktn.listMapper(ccAiWorkloadConfigInputDataConfigPropertyToTerraform, false)(struct!.inputDataConfig),
    }
}


export function ccAiWorkloadConfigDatasetConfigPropertyToHclTerraform(struct?: CcAiWorkloadConfig.DatasetConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_data_config: {
            value: cdktn.listMapperHcl(ccAiWorkloadConfigInputDataConfigPropertyToHclTerraform, false)(struct!.inputDataConfig),
            isBlock: true,
            type: "list",
            storageClassType: "InputDataConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAiWorkloadConfigTagsPropertyToTerraform(struct?: CcAiWorkloadConfig.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAiWorkloadConfigTagsPropertyToHclTerraform(struct?: CcAiWorkloadConfig.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcAiWorkloadConfig {
export interface WorkloadSpecProperty {
    /**
    * An inline YAML or JSON string that defines benchmark parameters. The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#inline CcAiWorkloadConfig#inline}
    */
    readonly inline?: string;
}
export class WorkloadSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkloadSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inline !== undefined) {
            hasAnyValues = true;
            internalValueResult.inline = this._inline;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkloadSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inline = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inline = value.inline;
        }
    }

    // inline - computed: true, optional: true, required: false
    private _inline?: string; 
    public get inline() {
        return this.getStringAttribute('inline');
    }
    public set inline(value: string) {
        this._inline = value;
    }
    public resetInline() {
        this._inline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineInput() {
        return this._inline;
    }
}
export interface AiWorkloadConfigsProperty {
    /**
    * The workload specification that defines benchmark parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#workload_spec CcAiWorkloadConfig#workload_spec}
    */
    readonly workloadSpec?: WorkloadSpecProperty;
}
export class AiWorkloadConfigsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AiWorkloadConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workloadSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workloadSpec = this._workloadSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AiWorkloadConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workloadSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workloadSpec.internalValue = value.workloadSpec;
        }
    }

    // workload_spec - computed: true, optional: true, required: false
    private _workloadSpec = new WorkloadSpecPropertyOutputReference(this, "workload_spec");
    public get workloadSpec() {
        return this._workloadSpec;
    }
    public putWorkloadSpec(value: WorkloadSpecProperty) {
        this._workloadSpec.internalValue = value;
    }
    public resetWorkloadSpec() {
        this._workloadSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workloadSpecInput() {
        return this._workloadSpec.internalValue;
    }
}
export interface S3DataSourceProperty {
    /**
    * The Amazon S3 URI of the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_uri CcAiWorkloadConfig#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DataSourceProperty {
    /**
    * The Amazon S3 data source configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_data_source CcAiWorkloadConfig#s3_data_source}
    */
    readonly s3DataSource?: S3DataSourceProperty;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new S3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: S3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface InputDataConfigProperty {
    /**
    * The logical name for the data channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#channel_name CcAiWorkloadConfig#channel_name}
    */
    readonly channelName?: string;
    /**
    * The data source for this channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#data_source CcAiWorkloadConfig#data_source}
    */
    readonly dataSource?: DataSourceProperty;
}
export class InputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputDataConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelName = this._channelName;
        }
        if (this._dataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSource = this._dataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputDataConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelName = undefined;
            this._dataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelName = value.channelName;
            this._dataSource.internalValue = value.dataSource;
        }
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // data_source - computed: true, optional: true, required: false
    private _dataSource = new DataSourcePropertyOutputReference(this, "data_source");
    public get dataSource() {
        return this._dataSource;
    }
    public putDataSource(value: DataSourceProperty) {
        this._dataSource.internalValue = value;
    }
    public resetDataSource() {
        this._dataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
        return this._dataSource.internalValue;
    }
}

export class InputDataConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : InputDataConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): InputDataConfigPropertyOutputReference {
        return new InputDataConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DatasetConfigProperty {
    /**
    * An array of input data channel configurations for the workload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#input_data_config CcAiWorkloadConfig#input_data_config}
    */
    readonly inputDataConfig?: InputDataConfigProperty[] | cdktn.IResolvable;
}
export class DatasetConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputDataConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputDataConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputDataConfig.internalValue = value.inputDataConfig;
        }
    }

    // input_data_config - computed: true, optional: true, required: false
    private _inputDataConfig = new InputDataConfigPropertyList(this, "input_data_config", false);
    public get inputDataConfig() {
        return this._inputDataConfig;
    }
    public putInputDataConfig(value: InputDataConfigProperty[] | cdktn.IResolvable) {
        this._inputDataConfig.internalValue = value;
    }
    public resetInputDataConfig() {
        this._inputDataConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputDataConfigInput() {
        return this._inputDataConfig.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The tag key. Tag keys must be unique per resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#key CcAiWorkloadConfig#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#value CcAiWorkloadConfig#value}
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
