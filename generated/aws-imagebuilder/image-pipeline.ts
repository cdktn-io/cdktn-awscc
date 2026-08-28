// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcImagePipelineProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#container_recipe_arn CcImagePipeline#container_recipe_arn}
    */
    readonly containerRecipeArn?: string;
    /**
    * The description of the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#description CcImagePipeline#description}
    */
    readonly description?: string;
    /**
    * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn CcImagePipeline#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Collects additional information about the image being created, including the operating system (OS) version and package list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled CcImagePipeline#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable;
    /**
    * The execution role name/ARN for the image build, if provided
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#execution_role CcImagePipeline#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_recipe_arn CcImagePipeline#image_recipe_arn}
    */
    readonly imageRecipeArn?: string;
    /**
    * Contains settings for vulnerability scans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration CcImagePipeline#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: CcImagePipeline.ImageScanningConfigurationProperty;
    /**
    * The tags to be applied to images created by this pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_tags CcImagePipeline#image_tags}
    */
    readonly imageTags?: { [key: string]: string };
    /**
    * The image tests configuration of the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_tests_configuration CcImagePipeline#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: CcImagePipeline.ImageTestsConfigurationProperty;
    /**
    * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn CcImagePipeline#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn?: string;
    /**
    * The logging configuration settings for the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#logging_configuration CcImagePipeline#logging_configuration}
    */
    readonly loggingConfiguration?: CcImagePipeline.PipelineLoggingConfigurationProperty;
    /**
    * The name of the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#name CcImagePipeline#name}
    */
    readonly name?: string;
    /**
    * The schedule of the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#schedule CcImagePipeline#schedule}
    */
    readonly schedule?: CcImagePipeline.ScheduleProperty;
    /**
    * The status of the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#status CcImagePipeline#status}
    */
    readonly status?: string;
    /**
    * The tags of this image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#tags CcImagePipeline#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Workflows to define the image build process
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#workflows CcImagePipeline#workflows}
    */
    readonly workflows?: CcImagePipeline.WorkflowConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}
*/
export class CcImagePipeline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_image_pipeline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcImagePipeline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcImagePipeline to import
    * @param importFromId The id of the existing CcImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcImagePipeline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image_pipeline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcImagePipelineProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcImagePipelineProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_image_pipeline',
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
        this._containerRecipeArn = config.containerRecipeArn;
        this._description = config.description;
        this._distributionConfigurationArn = config.distributionConfigurationArn;
        this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        this._executionRole = config.executionRole;
        this._imageRecipeArn = config.imageRecipeArn;
        this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
        this._imageTags = config.imageTags;
        this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
        this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._name = config.name;
        this._schedule.internalValue = config.schedule;
        this._status = config.status;
        this._tags = config.tags;
        this._workflows.internalValue = config.workflows;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // container_recipe_arn - computed: true, optional: true, required: false
    private _containerRecipeArn?: string; 
    public get containerRecipeArn() {
        return this.getStringAttribute('container_recipe_arn');
    }
    public set containerRecipeArn(value: string) {
        this._containerRecipeArn = value;
    }
    public resetContainerRecipeArn() {
        this._containerRecipeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerRecipeArnInput() {
        return this._containerRecipeArn;
    }

    // deployment_id - computed: true, optional: false, required: false
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
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

    // distribution_configuration_arn - computed: true, optional: true, required: false
    private _distributionConfigurationArn?: string; 
    public get distributionConfigurationArn() {
        return this.getStringAttribute('distribution_configuration_arn');
    }
    public set distributionConfigurationArn(value: string) {
        this._distributionConfigurationArn = value;
    }
    public resetDistributionConfigurationArn() {
        this._distributionConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionConfigurationArnInput() {
        return this._distributionConfigurationArn;
    }

    // enhanced_image_metadata_enabled - computed: true, optional: true, required: false
    private _enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable; 
    public get enhancedImageMetadataEnabled() {
        return this.getBooleanAttribute('enhanced_image_metadata_enabled');
    }
    public set enhancedImageMetadataEnabled(value: boolean | cdktn.IResolvable) {
        this._enhancedImageMetadataEnabled = value;
    }
    public resetEnhancedImageMetadataEnabled() {
        this._enhancedImageMetadataEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedImageMetadataEnabledInput() {
        return this._enhancedImageMetadataEnabled;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_recipe_arn - computed: true, optional: true, required: false
    private _imageRecipeArn?: string; 
    public get imageRecipeArn() {
        return this.getStringAttribute('image_recipe_arn');
    }
    public set imageRecipeArn(value: string) {
        this._imageRecipeArn = value;
    }
    public resetImageRecipeArn() {
        this._imageRecipeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRecipeArnInput() {
        return this._imageRecipeArn;
    }

    // image_scanning_configuration - computed: true, optional: true, required: false
    private _imageScanningConfiguration = new CcImagePipeline.ImageScanningConfigurationPropertyOutputReference(this, "image_scanning_configuration");
    public get imageScanningConfiguration() {
        return this._imageScanningConfiguration;
    }
    public putImageScanningConfiguration(value: CcImagePipeline.ImageScanningConfigurationProperty) {
        this._imageScanningConfiguration.internalValue = value;
    }
    public resetImageScanningConfiguration() {
        this._imageScanningConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageScanningConfigurationInput() {
        return this._imageScanningConfiguration.internalValue;
    }

    // image_tags - computed: true, optional: true, required: false
    private _imageTags?: { [key: string]: string }; 
    public get imageTags() {
        return this.getStringMapAttribute('image_tags');
    }
    public set imageTags(value: { [key: string]: string }) {
        this._imageTags = value;
    }
    public resetImageTags() {
        this._imageTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagsInput() {
        return this._imageTags;
    }

    // image_tests_configuration - computed: true, optional: true, required: false
    private _imageTestsConfiguration = new CcImagePipeline.ImageTestsConfigurationPropertyOutputReference(this, "image_tests_configuration");
    public get imageTestsConfiguration() {
        return this._imageTestsConfiguration;
    }
    public putImageTestsConfiguration(value: CcImagePipeline.ImageTestsConfigurationProperty) {
        this._imageTestsConfiguration.internalValue = value;
    }
    public resetImageTestsConfiguration() {
        this._imageTestsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsConfigurationInput() {
        return this._imageTestsConfiguration.internalValue;
    }

    // infrastructure_configuration_arn - computed: true, optional: true, required: false
    private _infrastructureConfigurationArn?: string; 
    public get infrastructureConfigurationArn() {
        return this.getStringAttribute('infrastructure_configuration_arn');
    }
    public set infrastructureConfigurationArn(value: string) {
        this._infrastructureConfigurationArn = value;
    }
    public resetInfrastructureConfigurationArn() {
        this._infrastructureConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureConfigurationArnInput() {
        return this._infrastructureConfigurationArn;
    }

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcImagePipeline.PipelineLoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcImagePipeline.PipelineLoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
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

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcImagePipeline.SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcImagePipeline.ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // workflows - computed: true, optional: true, required: false
    private _workflows = new CcImagePipeline.WorkflowConfigurationPropertyList(this, "workflows", false);
    public get workflows() {
        return this._workflows;
    }
    public putWorkflows(value: CcImagePipeline.WorkflowConfigurationProperty[] | cdktn.IResolvable) {
        this._workflows.internalValue = value;
    }
    public resetWorkflows() {
        this._workflows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowsInput() {
        return this._workflows.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            container_recipe_arn: cdktn.stringToTerraform(this._containerRecipeArn),
            description: cdktn.stringToTerraform(this._description),
            distribution_configuration_arn: cdktn.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktn.booleanToTerraform(this._enhancedImageMetadataEnabled),
            execution_role: cdktn.stringToTerraform(this._executionRole),
            image_recipe_arn: cdktn.stringToTerraform(this._imageRecipeArn),
            image_scanning_configuration: ccImagePipelineImageScanningConfigurationPropertyToTerraform(this._imageScanningConfiguration.internalValue),
            image_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._imageTags),
            image_tests_configuration: ccImagePipelineImageTestsConfigurationPropertyToTerraform(this._imageTestsConfiguration.internalValue),
            infrastructure_configuration_arn: cdktn.stringToTerraform(this._infrastructureConfigurationArn),
            logging_configuration: ccImagePipelinePipelineLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            schedule: ccImagePipelineSchedulePropertyToTerraform(this._schedule.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            workflows: cdktn.listMapper(ccImagePipelineWorkflowConfigurationPropertyToTerraform, false)(this._workflows.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            container_recipe_arn: {
                value: cdktn.stringToHclTerraform(this._containerRecipeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            distribution_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._distributionConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enhanced_image_metadata_enabled: {
                value: cdktn.booleanToHclTerraform(this._enhancedImageMetadataEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            execution_role: {
                value: cdktn.stringToHclTerraform(this._executionRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_recipe_arn: {
                value: cdktn.stringToHclTerraform(this._imageRecipeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_scanning_configuration: {
                value: ccImagePipelineImageScanningConfigurationPropertyToHclTerraform(this._imageScanningConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImagePipeline.ImageScanningConfigurationProperty",
            },
            image_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._imageTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            image_tests_configuration: {
                value: ccImagePipelineImageTestsConfigurationPropertyToHclTerraform(this._imageTestsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImagePipeline.ImageTestsConfigurationProperty",
            },
            infrastructure_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._infrastructureConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: ccImagePipelinePipelineLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImagePipeline.PipelineLoggingConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccImagePipelineSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImagePipeline.ScheduleProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            workflows: {
                value: cdktn.listMapperHcl(ccImagePipelineWorkflowConfigurationPropertyToHclTerraform, false)(this._workflows.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImagePipeline.WorkflowConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccImagePipelineEcrConfigurationPropertyToTerraform(struct?: CcImagePipeline.EcrConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
        repository_name: cdktn.stringToTerraform(struct!.repositoryName),
    }
}


export function ccImagePipelineEcrConfigurationPropertyToHclTerraform(struct?: CcImagePipeline.EcrConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_tags: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerTags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        repository_name: {
            value: cdktn.stringToHclTerraform(struct!.repositoryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineImageScanningConfigurationPropertyToTerraform(struct?: CcImagePipeline.ImageScanningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ecr_configuration: ccImagePipelineEcrConfigurationPropertyToTerraform(struct!.ecrConfiguration),
        image_scanning_enabled: cdktn.booleanToTerraform(struct!.imageScanningEnabled),
    }
}


export function ccImagePipelineImageScanningConfigurationPropertyToHclTerraform(struct?: CcImagePipeline.ImageScanningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ecr_configuration: {
            value: ccImagePipelineEcrConfigurationPropertyToHclTerraform(struct!.ecrConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EcrConfigurationProperty",
        },
        image_scanning_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.imageScanningEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineImageTestsConfigurationPropertyToTerraform(struct?: CcImagePipeline.ImageTestsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_tests_enabled: cdktn.booleanToTerraform(struct!.imageTestsEnabled),
        timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    }
}


export function ccImagePipelineImageTestsConfigurationPropertyToHclTerraform(struct?: CcImagePipeline.ImageTestsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_tests_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.imageTestsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelinePipelineLoggingConfigurationPropertyToTerraform(struct?: CcImagePipeline.PipelineLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_log_group_name: cdktn.stringToTerraform(struct!.imageLogGroupName),
        pipeline_log_group_name: cdktn.stringToTerraform(struct!.pipelineLogGroupName),
    }
}


export function ccImagePipelinePipelineLoggingConfigurationPropertyToHclTerraform(struct?: CcImagePipeline.PipelineLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.imageLogGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pipeline_log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.pipelineLogGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineAutoDisablePolicyPropertyToTerraform(struct?: CcImagePipeline.AutoDisablePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_count: cdktn.numberToTerraform(struct!.failureCount),
    }
}


export function ccImagePipelineAutoDisablePolicyPropertyToHclTerraform(struct?: CcImagePipeline.AutoDisablePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_count: {
            value: cdktn.numberToHclTerraform(struct!.failureCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineSchedulePropertyToTerraform(struct?: CcImagePipeline.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_disable_policy: ccImagePipelineAutoDisablePolicyPropertyToTerraform(struct!.autoDisablePolicy),
        pipeline_execution_start_condition: cdktn.stringToTerraform(struct!.pipelineExecutionStartCondition),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccImagePipelineSchedulePropertyToHclTerraform(struct?: CcImagePipeline.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_disable_policy: {
            value: ccImagePipelineAutoDisablePolicyPropertyToHclTerraform(struct!.autoDisablePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoDisablePolicyProperty",
        },
        pipeline_execution_start_condition: {
            value: cdktn.stringToHclTerraform(struct!.pipelineExecutionStartCondition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineWorkflowParameterPropertyToTerraform(struct?: CcImagePipeline.WorkflowParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
    }
}


export function ccImagePipelineWorkflowParameterPropertyToHclTerraform(struct?: CcImagePipeline.WorkflowParameterProperty | cdktn.IResolvable): any {
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
        value: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImagePipelineWorkflowConfigurationPropertyToTerraform(struct?: CcImagePipeline.WorkflowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_failure: cdktn.stringToTerraform(struct!.onFailure),
        parallel_group: cdktn.stringToTerraform(struct!.parallelGroup),
        parameters: cdktn.listMapper(ccImagePipelineWorkflowParameterPropertyToTerraform, false)(struct!.parameters),
        workflow_arn: cdktn.stringToTerraform(struct!.workflowArn),
    }
}


export function ccImagePipelineWorkflowConfigurationPropertyToHclTerraform(struct?: CcImagePipeline.WorkflowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_failure: {
            value: cdktn.stringToHclTerraform(struct!.onFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallel_group: {
            value: cdktn.stringToHclTerraform(struct!.parallelGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.listMapperHcl(ccImagePipelineWorkflowParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "list",
            storageClassType: "WorkflowParameterPropertyList",
        },
        workflow_arn: {
            value: cdktn.stringToHclTerraform(struct!.workflowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcImagePipeline {
export interface EcrConfigurationProperty {
    /**
    * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#container_tags CcImagePipeline#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#repository_name CcImagePipeline#repository_name}
    */
    readonly repositoryName?: string;
}
export class EcrConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcrConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerTags = this._containerTags;
        }
        if (this._repositoryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryName = this._repositoryName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerTags = undefined;
            this._repositoryName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerTags = value.containerTags;
            this._repositoryName = value.repositoryName;
        }
    }

    // container_tags - computed: true, optional: true, required: false
    private _containerTags?: string[]; 
    public get containerTags() {
        return this.getListAttribute('container_tags');
    }
    public set containerTags(value: string[]) {
        this._containerTags = value;
    }
    public resetContainerTags() {
        this._containerTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerTagsInput() {
        return this._containerTags;
    }

    // repository_name - computed: true, optional: true, required: false
    private _repositoryName?: string; 
    public get repositoryName() {
        return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
        this._repositoryName = value;
    }
    public resetRepositoryName() {
        this._repositoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
        return this._repositoryName;
    }
}
export interface ImageScanningConfigurationProperty {
    /**
    * Contains ECR settings for vulnerability scans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#ecr_configuration CcImagePipeline#ecr_configuration}
    */
    readonly ecrConfiguration?: EcrConfigurationProperty;
    /**
    * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled CcImagePipeline#image_scanning_enabled}
    */
    readonly imageScanningEnabled?: boolean | cdktn.IResolvable;
}
export class ImageScanningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageScanningConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ecrConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrConfiguration = this._ecrConfiguration?.internalValue;
        }
        if (this._imageScanningEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageScanningEnabled = this._imageScanningEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageScanningConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ecrConfiguration.internalValue = undefined;
            this._imageScanningEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ecrConfiguration.internalValue = value.ecrConfiguration;
            this._imageScanningEnabled = value.imageScanningEnabled;
        }
    }

    // ecr_configuration - computed: true, optional: true, required: false
    private _ecrConfiguration = new EcrConfigurationPropertyOutputReference(this, "ecr_configuration");
    public get ecrConfiguration() {
        return this._ecrConfiguration;
    }
    public putEcrConfiguration(value: EcrConfigurationProperty) {
        this._ecrConfiguration.internalValue = value;
    }
    public resetEcrConfiguration() {
        this._ecrConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrConfigurationInput() {
        return this._ecrConfiguration.internalValue;
    }

    // image_scanning_enabled - computed: true, optional: true, required: false
    private _imageScanningEnabled?: boolean | cdktn.IResolvable; 
    public get imageScanningEnabled() {
        return this.getBooleanAttribute('image_scanning_enabled');
    }
    public set imageScanningEnabled(value: boolean | cdktn.IResolvable) {
        this._imageScanningEnabled = value;
    }
    public resetImageScanningEnabled() {
        this._imageScanningEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageScanningEnabledInput() {
        return this._imageScanningEnabled;
    }
}
export interface ImageTestsConfigurationProperty {
    /**
    * Defines if tests should be executed when building this image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_tests_enabled CcImagePipeline#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The maximum time in minutes that tests are permitted to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#timeout_minutes CcImagePipeline#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export class ImageTestsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageTestsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageTestsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageTestsEnabled = this._imageTestsEnabled;
        }
        if (this._timeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutMinutes = this._timeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageTestsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageTestsEnabled = undefined;
            this._timeoutMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageTestsEnabled = value.imageTestsEnabled;
            this._timeoutMinutes = value.timeoutMinutes;
        }
    }

    // image_tests_enabled - computed: true, optional: true, required: false
    private _imageTestsEnabled?: boolean | cdktn.IResolvable; 
    public get imageTestsEnabled() {
        return this.getBooleanAttribute('image_tests_enabled');
    }
    public set imageTestsEnabled(value: boolean | cdktn.IResolvable) {
        this._imageTestsEnabled = value;
    }
    public resetImageTestsEnabled() {
        this._imageTestsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsEnabledInput() {
        return this._imageTestsEnabled;
    }

    // timeout_minutes - computed: true, optional: true, required: false
    private _timeoutMinutes?: number; 
    public get timeoutMinutes() {
        return this.getNumberAttribute('timeout_minutes');
    }
    public set timeoutMinutes(value: number) {
        this._timeoutMinutes = value;
    }
    public resetTimeoutMinutes() {
        this._timeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMinutesInput() {
        return this._timeoutMinutes;
    }
}
export interface PipelineLoggingConfigurationProperty {
    /**
    * The name of the log group for image build logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#image_log_group_name CcImagePipeline#image_log_group_name}
    */
    readonly imageLogGroupName?: string;
    /**
    * The name of the log group for pipeline execution logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#pipeline_log_group_name CcImagePipeline#pipeline_log_group_name}
    */
    readonly pipelineLogGroupName?: string;
}
export class PipelineLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipelineLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageLogGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageLogGroupName = this._imageLogGroupName;
        }
        if (this._pipelineLogGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.pipelineLogGroupName = this._pipelineLogGroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipelineLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageLogGroupName = undefined;
            this._pipelineLogGroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageLogGroupName = value.imageLogGroupName;
            this._pipelineLogGroupName = value.pipelineLogGroupName;
        }
    }

    // image_log_group_name - computed: true, optional: true, required: false
    private _imageLogGroupName?: string; 
    public get imageLogGroupName() {
        return this.getStringAttribute('image_log_group_name');
    }
    public set imageLogGroupName(value: string) {
        this._imageLogGroupName = value;
    }
    public resetImageLogGroupName() {
        this._imageLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageLogGroupNameInput() {
        return this._imageLogGroupName;
    }

    // pipeline_log_group_name - computed: true, optional: true, required: false
    private _pipelineLogGroupName?: string; 
    public get pipelineLogGroupName() {
        return this.getStringAttribute('pipeline_log_group_name');
    }
    public set pipelineLogGroupName(value: string) {
        this._pipelineLogGroupName = value;
    }
    public resetPipelineLogGroupName() {
        this._pipelineLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineLogGroupNameInput() {
        return this._pipelineLogGroupName;
    }
}
export interface AutoDisablePolicyProperty {
    /**
    * The number of consecutive failures after which the pipeline should be automatically disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#failure_count CcImagePipeline#failure_count}
    */
    readonly failureCount?: number;
}
export class AutoDisablePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoDisablePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureCount = this._failureCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoDisablePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureCount = value.failureCount;
        }
    }

    // failure_count - computed: true, optional: true, required: false
    private _failureCount?: number; 
    public get failureCount() {
        return this.getNumberAttribute('failure_count');
    }
    public set failureCount(value: number) {
        this._failureCount = value;
    }
    public resetFailureCount() {
        this._failureCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureCountInput() {
        return this._failureCount;
    }
}
export interface ScheduleProperty {
    /**
    * The auto-disable policy for the image pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#auto_disable_policy CcImagePipeline#auto_disable_policy}
    */
    readonly autoDisablePolicy?: AutoDisablePolicyProperty;
    /**
    * The condition configures when the pipeline should trigger a new image build.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition CcImagePipeline#pipeline_execution_start_condition}
    */
    readonly pipelineExecutionStartCondition?: string;
    /**
    * The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#schedule_expression CcImagePipeline#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * The timezone that applies to the scheduling expression, for example "Etc/UTC" or "America/Los_Angeles" in IANA timezone format. If not specified, this defaults to UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#timezone CcImagePipeline#timezone}
    */
    readonly timezone?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoDisablePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoDisablePolicy = this._autoDisablePolicy?.internalValue;
        }
        if (this._pipelineExecutionStartCondition !== undefined) {
            hasAnyValues = true;
            internalValueResult.pipelineExecutionStartCondition = this._pipelineExecutionStartCondition;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoDisablePolicy.internalValue = undefined;
            this._pipelineExecutionStartCondition = undefined;
            this._scheduleExpression = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoDisablePolicy.internalValue = value.autoDisablePolicy;
            this._pipelineExecutionStartCondition = value.pipelineExecutionStartCondition;
            this._scheduleExpression = value.scheduleExpression;
            this._timezone = value.timezone;
        }
    }

    // auto_disable_policy - computed: true, optional: true, required: false
    private _autoDisablePolicy = new AutoDisablePolicyPropertyOutputReference(this, "auto_disable_policy");
    public get autoDisablePolicy() {
        return this._autoDisablePolicy;
    }
    public putAutoDisablePolicy(value: AutoDisablePolicyProperty) {
        this._autoDisablePolicy.internalValue = value;
    }
    public resetAutoDisablePolicy() {
        this._autoDisablePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDisablePolicyInput() {
        return this._autoDisablePolicy.internalValue;
    }

    // pipeline_execution_start_condition - computed: true, optional: true, required: false
    private _pipelineExecutionStartCondition?: string; 
    public get pipelineExecutionStartCondition() {
        return this.getStringAttribute('pipeline_execution_start_condition');
    }
    public set pipelineExecutionStartCondition(value: string) {
        this._pipelineExecutionStartCondition = value;
    }
    public resetPipelineExecutionStartCondition() {
        this._pipelineExecutionStartCondition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineExecutionStartConditionInput() {
        return this._pipelineExecutionStartCondition;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }
}
export interface WorkflowParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#name CcImagePipeline#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#value CcImagePipeline#value}
    */
    readonly value?: string[];
}
export class WorkflowParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

    // value - computed: true, optional: true, required: false
    private _value?: string[]; 
    public get value() {
        return this.getListAttribute('value');
    }
    public set value(value: string[]) {
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

export class WorkflowParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowParameterPropertyOutputReference {
        return new WorkflowParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkflowConfigurationProperty {
    /**
    * Define execution decision in case of workflow failure
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#on_failure CcImagePipeline#on_failure}
    */
    readonly onFailure?: string;
    /**
    * The parallel group name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#parallel_group CcImagePipeline#parallel_group}
    */
    readonly parallelGroup?: string;
    /**
    * The parameters associated with the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#parameters CcImagePipeline#parameters}
    */
    readonly parameters?: WorkflowParameterProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image_pipeline#workflow_arn CcImagePipeline#workflow_arn}
    */
    readonly workflowArn?: string;
}
export class WorkflowConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure;
        }
        if (this._parallelGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelGroup = this._parallelGroup;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        if (this._workflowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowArn = this._workflowArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onFailure = undefined;
            this._parallelGroup = undefined;
            this._parameters.internalValue = undefined;
            this._workflowArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onFailure = value.onFailure;
            this._parallelGroup = value.parallelGroup;
            this._parameters.internalValue = value.parameters;
            this._workflowArn = value.workflowArn;
        }
    }

    // on_failure - computed: true, optional: true, required: false
    private _onFailure?: string; 
    public get onFailure() {
        return this.getStringAttribute('on_failure');
    }
    public set onFailure(value: string) {
        this._onFailure = value;
    }
    public resetOnFailure() {
        this._onFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
        return this._onFailure;
    }

    // parallel_group - computed: true, optional: true, required: false
    private _parallelGroup?: string; 
    public get parallelGroup() {
        return this.getStringAttribute('parallel_group');
    }
    public set parallelGroup(value: string) {
        this._parallelGroup = value;
    }
    public resetParallelGroup() {
        this._parallelGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelGroupInput() {
        return this._parallelGroup;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new WorkflowParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: WorkflowParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // workflow_arn - computed: true, optional: true, required: false
    private _workflowArn?: string; 
    public get workflowArn() {
        return this.getStringAttribute('workflow_arn');
    }
    public set workflowArn(value: string) {
        this._workflowArn = value;
    }
    public resetWorkflowArn() {
        this._workflowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowArnInput() {
        return this._workflowArn;
    }
}

export class WorkflowConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowConfigurationPropertyOutputReference {
        return new WorkflowConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
