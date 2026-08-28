// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcImageProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#container_recipe_arn CcImage#container_recipe_arn}
    */
    readonly containerRecipeArn?: string;
    /**
    * The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#deletion_settings CcImage#deletion_settings}
    */
    readonly deletionSettings?: CcImage.DeletionSettingsProperty;
    /**
    * The Amazon Resource Name (ARN) of the distribution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#distribution_configuration_arn CcImage#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Collects additional information about the image being created, including the operating system (OS) version and package list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled CcImage#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable;
    /**
    * The execution role name/ARN for the image build, if provided
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#execution_role CcImage#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The image pipeline execution settings of the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_pipeline_execution_settings CcImage#image_pipeline_execution_settings}
    */
    readonly imagePipelineExecutionSettings?: CcImage.ImagePipelineExecutionSettingsProperty;
    /**
    * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_recipe_arn CcImage#image_recipe_arn}
    */
    readonly imageRecipeArn?: string;
    /**
    * Contains settings for vulnerability scans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_scanning_configuration CcImage#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: CcImage.ImageScanningConfigurationProperty;
    /**
    * The image tests configuration used when creating this image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_tests_configuration CcImage#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: CcImage.ImageTestsConfigurationProperty;
    /**
    * The Amazon Resource Name (ARN) of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#infrastructure_configuration_arn CcImage#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn?: string;
    /**
    * The logging configuration settings for the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#logging_configuration CcImage#logging_configuration}
    */
    readonly loggingConfiguration?: CcImage.ImageLoggingConfigurationProperty;
    /**
    * The tags associated with the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#tags CcImage#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Workflows to define the image build process
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#workflows CcImage#workflows}
    */
    readonly workflows?: CcImage.WorkflowConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image awscc_imagebuilder_image}
*/
export class CcImage extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_image";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcImage resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcImage to import
    * @param importFromId The id of the existing CcImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcImage to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image awscc_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcImageProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcImageProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_image',
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
        this._deletionSettings.internalValue = config.deletionSettings;
        this._distributionConfigurationArn = config.distributionConfigurationArn;
        this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        this._executionRole = config.executionRole;
        this._imagePipelineExecutionSettings.internalValue = config.imagePipelineExecutionSettings;
        this._imageRecipeArn = config.imageRecipeArn;
        this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
        this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
        this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
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

    // deletion_settings - computed: true, optional: true, required: false
    private _deletionSettings = new CcImage.DeletionSettingsPropertyOutputReference(this, "deletion_settings");
    public get deletionSettings() {
        return this._deletionSettings;
    }
    public putDeletionSettings(value: CcImage.DeletionSettingsProperty) {
        this._deletionSettings.internalValue = value;
    }
    public resetDeletionSettings() {
        this._deletionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionSettingsInput() {
        return this._deletionSettings.internalValue;
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

    // image_id - computed: true, optional: false, required: false
    public get imageId() {
        return this.getStringAttribute('image_id');
    }

    // image_pipeline_execution_settings - computed: true, optional: true, required: false
    private _imagePipelineExecutionSettings = new CcImage.ImagePipelineExecutionSettingsPropertyOutputReference(this, "image_pipeline_execution_settings");
    public get imagePipelineExecutionSettings() {
        return this._imagePipelineExecutionSettings;
    }
    public putImagePipelineExecutionSettings(value: CcImage.ImagePipelineExecutionSettingsProperty) {
        this._imagePipelineExecutionSettings.internalValue = value;
    }
    public resetImagePipelineExecutionSettings() {
        this._imagePipelineExecutionSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imagePipelineExecutionSettingsInput() {
        return this._imagePipelineExecutionSettings.internalValue;
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
    private _imageScanningConfiguration = new CcImage.ImageScanningConfigurationPropertyOutputReference(this, "image_scanning_configuration");
    public get imageScanningConfiguration() {
        return this._imageScanningConfiguration;
    }
    public putImageScanningConfiguration(value: CcImage.ImageScanningConfigurationProperty) {
        this._imageScanningConfiguration.internalValue = value;
    }
    public resetImageScanningConfiguration() {
        this._imageScanningConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageScanningConfigurationInput() {
        return this._imageScanningConfiguration.internalValue;
    }

    // image_tests_configuration - computed: true, optional: true, required: false
    private _imageTestsConfiguration = new CcImage.ImageTestsConfigurationPropertyOutputReference(this, "image_tests_configuration");
    public get imageTestsConfiguration() {
        return this._imageTestsConfiguration;
    }
    public putImageTestsConfiguration(value: CcImage.ImageTestsConfigurationProperty) {
        this._imageTestsConfiguration.internalValue = value;
    }
    public resetImageTestsConfiguration() {
        this._imageTestsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTestsConfigurationInput() {
        return this._imageTestsConfiguration.internalValue;
    }

    // image_uri - computed: true, optional: false, required: false
    public get imageUri() {
        return this.getStringAttribute('image_uri');
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

    // latest_version - computed: true, optional: false, required: false
    private _latestVersion = new CcImage.LatestVersionPropertyOutputReference(this, "latest_version");
    public get latestVersion() {
        return this._latestVersion;
    }

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcImage.ImageLoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcImage.ImageLoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
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
    private _workflows = new CcImage.WorkflowConfigurationPropertyList(this, "workflows", false);
    public get workflows() {
        return this._workflows;
    }
    public putWorkflows(value: CcImage.WorkflowConfigurationProperty[] | cdktn.IResolvable) {
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
            deletion_settings: ccImageDeletionSettingsPropertyToTerraform(this._deletionSettings.internalValue),
            distribution_configuration_arn: cdktn.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktn.booleanToTerraform(this._enhancedImageMetadataEnabled),
            execution_role: cdktn.stringToTerraform(this._executionRole),
            image_pipeline_execution_settings: ccImageImagePipelineExecutionSettingsPropertyToTerraform(this._imagePipelineExecutionSettings.internalValue),
            image_recipe_arn: cdktn.stringToTerraform(this._imageRecipeArn),
            image_scanning_configuration: ccImageImageScanningConfigurationPropertyToTerraform(this._imageScanningConfiguration.internalValue),
            image_tests_configuration: ccImageImageTestsConfigurationPropertyToTerraform(this._imageTestsConfiguration.internalValue),
            infrastructure_configuration_arn: cdktn.stringToTerraform(this._infrastructureConfigurationArn),
            logging_configuration: ccImageImageLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            workflows: cdktn.listMapper(ccImageWorkflowConfigurationPropertyToTerraform, false)(this._workflows.internalValue),
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
            deletion_settings: {
                value: ccImageDeletionSettingsPropertyToHclTerraform(this._deletionSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImage.DeletionSettingsProperty",
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
            image_pipeline_execution_settings: {
                value: ccImageImagePipelineExecutionSettingsPropertyToHclTerraform(this._imagePipelineExecutionSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImage.ImagePipelineExecutionSettingsProperty",
            },
            image_recipe_arn: {
                value: cdktn.stringToHclTerraform(this._imageRecipeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_scanning_configuration: {
                value: ccImageImageScanningConfigurationPropertyToHclTerraform(this._imageScanningConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImage.ImageScanningConfigurationProperty",
            },
            image_tests_configuration: {
                value: ccImageImageTestsConfigurationPropertyToHclTerraform(this._imageTestsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImage.ImageTestsConfigurationProperty",
            },
            infrastructure_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._infrastructureConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: ccImageImageLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImage.ImageLoggingConfigurationProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            workflows: {
                value: cdktn.listMapperHcl(ccImageWorkflowConfigurationPropertyToHclTerraform, false)(this._workflows.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImage.WorkflowConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccImageDeletionSettingsPropertyToTerraform(struct?: CcImage.DeletionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
    }
}


export function ccImageDeletionSettingsPropertyToHclTerraform(struct?: CcImage.DeletionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageImagePipelineExecutionSettingsPropertyToTerraform(struct?: CcImage.ImagePipelineExecutionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_id: cdktn.stringToTerraform(struct!.deploymentId),
        on_update: cdktn.booleanToTerraform(struct!.onUpdate),
    }
}


export function ccImageImagePipelineExecutionSettingsPropertyToHclTerraform(struct?: CcImage.ImagePipelineExecutionSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_id: {
            value: cdktn.stringToHclTerraform(struct!.deploymentId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_update: {
            value: cdktn.booleanToHclTerraform(struct!.onUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageEcrConfigurationPropertyToTerraform(struct?: CcImage.EcrConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
        repository_name: cdktn.stringToTerraform(struct!.repositoryName),
    }
}


export function ccImageEcrConfigurationPropertyToHclTerraform(struct?: CcImage.EcrConfigurationProperty | cdktn.IResolvable): any {
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


export function ccImageImageScanningConfigurationPropertyToTerraform(struct?: CcImage.ImageScanningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ecr_configuration: ccImageEcrConfigurationPropertyToTerraform(struct!.ecrConfiguration),
        image_scanning_enabled: cdktn.booleanToTerraform(struct!.imageScanningEnabled),
    }
}


export function ccImageImageScanningConfigurationPropertyToHclTerraform(struct?: CcImage.ImageScanningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ecr_configuration: {
            value: ccImageEcrConfigurationPropertyToHclTerraform(struct!.ecrConfiguration),
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


export function ccImageImageTestsConfigurationPropertyToTerraform(struct?: CcImage.ImageTestsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_tests_enabled: cdktn.booleanToTerraform(struct!.imageTestsEnabled),
        timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    }
}


export function ccImageImageTestsConfigurationPropertyToHclTerraform(struct?: CcImage.ImageTestsConfigurationProperty | cdktn.IResolvable): any {
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


export function ccImageLatestVersionPropertyToTerraform(struct?: CcImage.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccImageLatestVersionPropertyToHclTerraform(struct?: CcImage.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccImageImageLoggingConfigurationPropertyToTerraform(struct?: CcImage.ImageLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    }
}


export function ccImageImageLoggingConfigurationPropertyToHclTerraform(struct?: CcImage.ImageLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageWorkflowParameterPropertyToTerraform(struct?: CcImage.WorkflowParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
    }
}


export function ccImageWorkflowParameterPropertyToHclTerraform(struct?: CcImage.WorkflowParameterProperty | cdktn.IResolvable): any {
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


export function ccImageWorkflowConfigurationPropertyToTerraform(struct?: CcImage.WorkflowConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_failure: cdktn.stringToTerraform(struct!.onFailure),
        parallel_group: cdktn.stringToTerraform(struct!.parallelGroup),
        parameters: cdktn.listMapper(ccImageWorkflowParameterPropertyToTerraform, false)(struct!.parameters),
        workflow_arn: cdktn.stringToTerraform(struct!.workflowArn),
    }
}


export function ccImageWorkflowConfigurationPropertyToHclTerraform(struct?: CcImage.WorkflowConfigurationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccImageWorkflowParameterPropertyToHclTerraform, false)(struct!.parameters),
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


export namespace CcImage {
export interface DeletionSettingsProperty {
    /**
    * The execution role to use for deleting the image, as well as underlying resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#execution_role CcImage#execution_role}
    */
    readonly executionRole?: string;
}
export class DeletionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeletionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeletionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionRole = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionRole = value.executionRole;
        }
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
}
export interface ImagePipelineExecutionSettingsProperty {
    /**
    * The deployment ID of the pipeline, used to trigger new image pipeline executions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#deployment_id CcImage#deployment_id}
    */
    readonly deploymentId?: string;
    /**
    * Whether to trigger the image pipeline when the pipeline is updated. False by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#on_update CcImage#on_update}
    */
    readonly onUpdate?: boolean | cdktn.IResolvable;
}
export class ImagePipelineExecutionSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImagePipelineExecutionSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentId = this._deploymentId;
        }
        if (this._onUpdate !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUpdate = this._onUpdate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImagePipelineExecutionSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentId = undefined;
            this._onUpdate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentId = value.deploymentId;
            this._onUpdate = value.onUpdate;
        }
    }

    // deployment_id - computed: true, optional: true, required: false
    private _deploymentId?: string; 
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }
    public set deploymentId(value: string) {
        this._deploymentId = value;
    }
    public resetDeploymentId() {
        this._deploymentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentIdInput() {
        return this._deploymentId;
    }

    // on_update - computed: true, optional: true, required: false
    private _onUpdate?: boolean | cdktn.IResolvable; 
    public get onUpdate() {
        return this.getBooleanAttribute('on_update');
    }
    public set onUpdate(value: boolean | cdktn.IResolvable) {
        this._onUpdate = value;
    }
    public resetOnUpdate() {
        this._onUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onUpdateInput() {
        return this._onUpdate;
    }
}
export interface EcrConfigurationProperty {
    /**
    * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#container_tags CcImage#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#repository_name CcImage#repository_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#ecr_configuration CcImage#ecr_configuration}
    */
    readonly ecrConfiguration?: EcrConfigurationProperty;
    /**
    * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_scanning_enabled CcImage#image_scanning_enabled}
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
    * ImageTestsEnabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#image_tests_enabled CcImage#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktn.IResolvable;
    /**
    * TimeoutMinutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#timeout_minutes CcImage#timeout_minutes}
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
export interface LatestVersionProperty {
}
export class LatestVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LatestVersionProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LatestVersionProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // major - computed: true, optional: false, required: false
    public get major() {
        return this.getStringAttribute('major');
    }

    // minor - computed: true, optional: false, required: false
    public get minor() {
        return this.getStringAttribute('minor');
    }

    // patch - computed: true, optional: false, required: false
    public get patch() {
        return this.getStringAttribute('patch');
    }
}
export interface ImageLoggingConfigurationProperty {
    /**
    * The name of the log group for image build logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#log_group_name CcImage#log_group_name}
    */
    readonly logGroupName?: string;
}
export class ImageLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupName = value.logGroupName;
        }
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }
}
export interface WorkflowParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#name CcImage#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#value CcImage#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#on_failure CcImage#on_failure}
    */
    readonly onFailure?: string;
    /**
    * The parallel group name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#parallel_group CcImage#parallel_group}
    */
    readonly parallelGroup?: string;
    /**
    * The parameters associated with the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#parameters CcImage#parameters}
    */
    readonly parameters?: WorkflowParameterProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the workflow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_image#workflow_arn CcImage#workflow_arn}
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
