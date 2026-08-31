// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContainerRecipeProps extends cdktn.TerraformMetaArguments {
    /**
    * Components for build and test that are included in the container recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#components CcContainerRecipe#components}
    */
    readonly components?: CcContainerRecipe.ComponentConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Specifies the type of container, such as Docker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#container_type CcContainerRecipe#container_type}
    */
    readonly containerType?: string;
    /**
    * The description of the container recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#description CcContainerRecipe#description}
    */
    readonly description?: string;
    /**
    * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_data CcContainerRecipe#dockerfile_template_data}
    */
    readonly dockerfileTemplateData?: string;
    /**
    * The S3 URI for the Dockerfile that will be used to build your container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_uri CcContainerRecipe#dockerfile_template_uri}
    */
    readonly dockerfileTemplateUri?: string;
    /**
    * Specifies the operating system version for the source image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#image_os_version_override CcContainerRecipe#image_os_version_override}
    */
    readonly imageOsVersionOverride?: string;
    /**
    * A group of options that can be used to configure an instance for building and testing container images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#instance_configuration CcContainerRecipe#instance_configuration}
    */
    readonly instanceConfiguration?: CcContainerRecipe.InstanceConfigurationProperty;
    /**
    * Identifies which KMS key is used to encrypt the container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#kms_key_id CcContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the container recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#name CcContainerRecipe#name}
    */
    readonly name?: string;
    /**
    * The source image for the container recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#parent_image CcContainerRecipe#parent_image}
    */
    readonly parentImage?: string;
    /**
    * Specifies the operating system platform when you use a custom source image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#platform_override CcContainerRecipe#platform_override}
    */
    readonly platformOverride?: string;
    /**
    * Tags that are attached to the container recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#tags CcContainerRecipe#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The destination repository for the container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#target_repository CcContainerRecipe#target_repository}
    */
    readonly targetRepository?: CcContainerRecipe.TargetContainerRepositoryProperty;
    /**
    * The semantic version of the container recipe (<major>.<minor>.<patch>).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#version CcContainerRecipe#version}
    */
    readonly version?: string;
    /**
    * The working directory to be used during build and test workflows.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#working_directory CcContainerRecipe#working_directory}
    */
    readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe awscc_imagebuilder_container_recipe}
*/
export class CcContainerRecipe extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_container_recipe";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContainerRecipe resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContainerRecipe to import
    * @param importFromId The id of the existing CcContainerRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContainerRecipe to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_container_recipe", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe awscc_imagebuilder_container_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContainerRecipeProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcContainerRecipeProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_container_recipe',
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
        this._components.internalValue = config.components;
        this._containerType = config.containerType;
        this._description = config.description;
        this._dockerfileTemplateData = config.dockerfileTemplateData;
        this._dockerfileTemplateUri = config.dockerfileTemplateUri;
        this._imageOsVersionOverride = config.imageOsVersionOverride;
        this._instanceConfiguration.internalValue = config.instanceConfiguration;
        this._kmsKeyId = config.kmsKeyId;
        this._name = config.name;
        this._parentImage = config.parentImage;
        this._platformOverride = config.platformOverride;
        this._tags = config.tags;
        this._targetRepository.internalValue = config.targetRepository;
        this._version = config.version;
        this._workingDirectory = config.workingDirectory;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // components - computed: true, optional: true, required: false
    private _components = new CcContainerRecipe.ComponentConfigurationPropertyList(this, "components", false);
    public get components() {
        return this._components;
    }
    public putComponents(value: CcContainerRecipe.ComponentConfigurationProperty[] | cdktn.IResolvable) {
        this._components.internalValue = value;
    }
    public resetComponents() {
        this._components.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentsInput() {
        return this._components.internalValue;
    }

    // container_type - computed: true, optional: true, required: false
    private _containerType?: string; 
    public get containerType() {
        return this.getStringAttribute('container_type');
    }
    public set containerType(value: string) {
        this._containerType = value;
    }
    public resetContainerType() {
        this._containerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerTypeInput() {
        return this._containerType;
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

    // dockerfile_template_data - computed: true, optional: true, required: false
    private _dockerfileTemplateData?: string; 
    public get dockerfileTemplateData() {
        return this.getStringAttribute('dockerfile_template_data');
    }
    public set dockerfileTemplateData(value: string) {
        this._dockerfileTemplateData = value;
    }
    public resetDockerfileTemplateData() {
        this._dockerfileTemplateData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerfileTemplateDataInput() {
        return this._dockerfileTemplateData;
    }

    // dockerfile_template_uri - computed: true, optional: true, required: false
    private _dockerfileTemplateUri?: string; 
    public get dockerfileTemplateUri() {
        return this.getStringAttribute('dockerfile_template_uri');
    }
    public set dockerfileTemplateUri(value: string) {
        this._dockerfileTemplateUri = value;
    }
    public resetDockerfileTemplateUri() {
        this._dockerfileTemplateUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerfileTemplateUriInput() {
        return this._dockerfileTemplateUri;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_os_version_override - computed: true, optional: true, required: false
    private _imageOsVersionOverride?: string; 
    public get imageOsVersionOverride() {
        return this.getStringAttribute('image_os_version_override');
    }
    public set imageOsVersionOverride(value: string) {
        this._imageOsVersionOverride = value;
    }
    public resetImageOsVersionOverride() {
        this._imageOsVersionOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageOsVersionOverrideInput() {
        return this._imageOsVersionOverride;
    }

    // instance_configuration - computed: true, optional: true, required: false
    private _instanceConfiguration = new CcContainerRecipe.InstanceConfigurationPropertyOutputReference(this, "instance_configuration");
    public get instanceConfiguration() {
        return this._instanceConfiguration;
    }
    public putInstanceConfiguration(value: CcContainerRecipe.InstanceConfigurationProperty) {
        this._instanceConfiguration.internalValue = value;
    }
    public resetInstanceConfiguration() {
        this._instanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceConfigurationInput() {
        return this._instanceConfiguration.internalValue;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // latest_version - computed: true, optional: false, required: false
    private _latestVersion = new CcContainerRecipe.LatestVersionPropertyOutputReference(this, "latest_version");
    public get latestVersion() {
        return this._latestVersion;
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

    // parent_image - computed: true, optional: true, required: false
    private _parentImage?: string; 
    public get parentImage() {
        return this.getStringAttribute('parent_image');
    }
    public set parentImage(value: string) {
        this._parentImage = value;
    }
    public resetParentImage() {
        this._parentImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentImageInput() {
        return this._parentImage;
    }

    // platform_override - computed: true, optional: true, required: false
    private _platformOverride?: string; 
    public get platformOverride() {
        return this.getStringAttribute('platform_override');
    }
    public set platformOverride(value: string) {
        this._platformOverride = value;
    }
    public resetPlatformOverride() {
        this._platformOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformOverrideInput() {
        return this._platformOverride;
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

    // target_repository - computed: true, optional: true, required: false
    private _targetRepository = new CcContainerRecipe.TargetContainerRepositoryPropertyOutputReference(this, "target_repository");
    public get targetRepository() {
        return this._targetRepository;
    }
    public putTargetRepository(value: CcContainerRecipe.TargetContainerRepositoryProperty) {
        this._targetRepository.internalValue = value;
    }
    public resetTargetRepository() {
        this._targetRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRepositoryInput() {
        return this._targetRepository.internalValue;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }

    // working_directory - computed: true, optional: true, required: false
    private _workingDirectory?: string; 
    public get workingDirectory() {
        return this.getStringAttribute('working_directory');
    }
    public set workingDirectory(value: string) {
        this._workingDirectory = value;
    }
    public resetWorkingDirectory() {
        this._workingDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workingDirectoryInput() {
        return this._workingDirectory;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            components: cdktn.listMapper(ccContainerRecipeComponentConfigurationPropertyToTerraform, false)(this._components.internalValue),
            container_type: cdktn.stringToTerraform(this._containerType),
            description: cdktn.stringToTerraform(this._description),
            dockerfile_template_data: cdktn.stringToTerraform(this._dockerfileTemplateData),
            dockerfile_template_uri: cdktn.stringToTerraform(this._dockerfileTemplateUri),
            image_os_version_override: cdktn.stringToTerraform(this._imageOsVersionOverride),
            instance_configuration: ccContainerRecipeInstanceConfigurationPropertyToTerraform(this._instanceConfiguration.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            name: cdktn.stringToTerraform(this._name),
            parent_image: cdktn.stringToTerraform(this._parentImage),
            platform_override: cdktn.stringToTerraform(this._platformOverride),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_repository: ccContainerRecipeTargetContainerRepositoryPropertyToTerraform(this._targetRepository.internalValue),
            version: cdktn.stringToTerraform(this._version),
            working_directory: cdktn.stringToTerraform(this._workingDirectory),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            components: {
                value: cdktn.listMapperHcl(ccContainerRecipeComponentConfigurationPropertyToHclTerraform, false)(this._components.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContainerRecipe.ComponentConfigurationPropertyList",
            },
            container_type: {
                value: cdktn.stringToHclTerraform(this._containerType),
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
            dockerfile_template_data: {
                value: cdktn.stringToHclTerraform(this._dockerfileTemplateData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dockerfile_template_uri: {
                value: cdktn.stringToHclTerraform(this._dockerfileTemplateUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_os_version_override: {
                value: cdktn.stringToHclTerraform(this._imageOsVersionOverride),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_configuration: {
                value: ccContainerRecipeInstanceConfigurationPropertyToHclTerraform(this._instanceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerRecipe.InstanceConfigurationProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
            parent_image: {
                value: cdktn.stringToHclTerraform(this._parentImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform_override: {
                value: cdktn.stringToHclTerraform(this._platformOverride),
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
            target_repository: {
                value: ccContainerRecipeTargetContainerRepositoryPropertyToHclTerraform(this._targetRepository.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainerRecipe.TargetContainerRepositoryProperty",
            },
            version: {
                value: cdktn.stringToHclTerraform(this._version),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            working_directory: {
                value: cdktn.stringToHclTerraform(this._workingDirectory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContainerRecipeComponentParameterPropertyToTerraform(struct?: CcContainerRecipe.ComponentParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
    }
}


export function ccContainerRecipeComponentParameterPropertyToHclTerraform(struct?: CcContainerRecipe.ComponentParameterProperty | cdktn.IResolvable): any {
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


export function ccContainerRecipeComponentConfigurationPropertyToTerraform(struct?: CcContainerRecipe.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_arn: cdktn.stringToTerraform(struct!.componentArn),
        parameters: cdktn.listMapper(ccContainerRecipeComponentParameterPropertyToTerraform, false)(struct!.parameters),
    }
}


export function ccContainerRecipeComponentConfigurationPropertyToHclTerraform(struct?: CcContainerRecipe.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_arn: {
            value: cdktn.stringToHclTerraform(struct!.componentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.listMapperHcl(ccContainerRecipeComponentParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerRecipeEbsInstanceBlockDeviceSpecificationPropertyToTerraform(struct?: CcContainerRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccContainerRecipeEbsInstanceBlockDeviceSpecificationPropertyToHclTerraform(struct?: CcContainerRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_on_termination: {
            value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_id: {
            value: cdktn.stringToHclTerraform(struct!.snapshotId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        throughput: {
            value: cdktn.numberToHclTerraform(struct!.throughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_size: {
            value: cdktn.numberToHclTerraform(struct!.volumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_type: {
            value: cdktn.stringToHclTerraform(struct!.volumeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerRecipeInstanceBlockDeviceMappingPropertyToTerraform(struct?: CcContainerRecipe.InstanceBlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccContainerRecipeEbsInstanceBlockDeviceSpecificationPropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccContainerRecipeInstanceBlockDeviceMappingPropertyToHclTerraform(struct?: CcContainerRecipe.InstanceBlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device_name: {
            value: cdktn.stringToHclTerraform(struct!.deviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ebs: {
            value: ccContainerRecipeEbsInstanceBlockDeviceSpecificationPropertyToHclTerraform(struct!.ebs),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsInstanceBlockDeviceSpecificationProperty",
        },
        no_device: {
            value: cdktn.stringToHclTerraform(struct!.noDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_name: {
            value: cdktn.stringToHclTerraform(struct!.virtualName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerRecipeInstanceConfigurationPropertyToTerraform(struct?: CcContainerRecipe.InstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_device_mappings: cdktn.listMapper(ccContainerRecipeInstanceBlockDeviceMappingPropertyToTerraform, false)(struct!.blockDeviceMappings),
        image: cdktn.stringToTerraform(struct!.image),
    }
}


export function ccContainerRecipeInstanceConfigurationPropertyToHclTerraform(struct?: CcContainerRecipe.InstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_device_mappings: {
            value: cdktn.listMapperHcl(ccContainerRecipeInstanceBlockDeviceMappingPropertyToHclTerraform, false)(struct!.blockDeviceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "InstanceBlockDeviceMappingPropertyList",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerRecipeLatestVersionPropertyToTerraform(struct?: CcContainerRecipe.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccContainerRecipeLatestVersionPropertyToHclTerraform(struct?: CcContainerRecipe.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccContainerRecipeTargetContainerRepositoryPropertyToTerraform(struct?: CcContainerRecipe.TargetContainerRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_name: cdktn.stringToTerraform(struct!.repositoryName),
        service: cdktn.stringToTerraform(struct!.service),
    }
}


export function ccContainerRecipeTargetContainerRepositoryPropertyToHclTerraform(struct?: CcContainerRecipe.TargetContainerRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_name: {
            value: cdktn.stringToHclTerraform(struct!.repositoryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktn.stringToHclTerraform(struct!.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcContainerRecipe {
export interface ComponentParameterProperty {
    /**
    * The name of the component parameter to set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#name CcContainerRecipe#name}
    */
    readonly name?: string;
    /**
    * Sets the value for the named component parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#value CcContainerRecipe#value}
    */
    readonly value?: string[];
}
export class ComponentParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentParameterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ComponentParameterProperty | cdktn.IResolvable | undefined) {
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

export class ComponentParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentParameterPropertyOutputReference {
        return new ComponentParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#component_arn CcContainerRecipe#component_arn}
    */
    readonly componentArn?: string;
    /**
    * A group of parameter settings that are used to configure the component for a specific recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#parameters CcContainerRecipe#parameters}
    */
    readonly parameters?: ComponentParameterProperty[] | cdktn.IResolvable;
}
export class ComponentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentArn = this._componentArn;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentArn = undefined;
            this._parameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentArn = value.componentArn;
            this._parameters.internalValue = value.parameters;
        }
    }

    // component_arn - computed: true, optional: true, required: false
    private _componentArn?: string; 
    public get componentArn() {
        return this.getStringAttribute('component_arn');
    }
    public set componentArn(value: string) {
        this._componentArn = value;
    }
    public resetComponentArn() {
        this._componentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentArnInput() {
        return this._componentArn;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new ComponentParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: ComponentParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }
}

export class ComponentConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentConfigurationPropertyOutputReference {
        return new ComponentConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EbsInstanceBlockDeviceSpecificationProperty {
    /**
    * Use to configure delete on termination of the associated device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#delete_on_termination CcContainerRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Use to configure device encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#encrypted CcContainerRecipe#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Use to configure device IOPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#iops CcContainerRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Use to configure the KMS key to use when encrypting the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#kms_key_id CcContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The snapshot that defines the device contents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#snapshot_id CcContainerRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * For GP3 volumes only - The throughput in MiB/s that the volume supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#throughput CcContainerRecipe#throughput}
    */
    readonly throughput?: number;
    /**
    * Use to override the device's volume size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#volume_size CcContainerRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Use to override the device's volume type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#volume_type CcContainerRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export class EbsInstanceBlockDeviceSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._snapshotId !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteOnTermination = value.deleteOnTermination;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }

    // delete_on_termination - computed: true, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktn.IResolvable; 
    public get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
        this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
        return this._deleteOnTermination;
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktn.IResolvable; 
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    public set encrypted(value: boolean | cdktn.IResolvable) {
        this._encrypted = value;
    }
    public resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
        return this._encrypted;
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // snapshot_id - computed: true, optional: true, required: false
    private _snapshotId?: string; 
    public get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    public set snapshotId(value: string) {
        this._snapshotId = value;
    }
    public resetSnapshotId() {
        this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdInput() {
        return this._snapshotId;
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number; 
    public get throughput() {
        return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number) {
        this._throughput = value;
    }
    public resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
        return this._throughput;
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number; 
    public get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number) {
        this._volumeSize = value;
    }
    public resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
        return this._volumeSize;
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string; 
    public get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string) {
        this._volumeType = value;
    }
    public resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
        return this._volumeType;
    }
}
export interface InstanceBlockDeviceMappingProperty {
    /**
    * The device to which these mappings apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#device_name CcContainerRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Use to manage Amazon EBS-specific configuration for this mapping.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#ebs CcContainerRecipe#ebs}
    */
    readonly ebs?: EbsInstanceBlockDeviceSpecificationProperty;
    /**
    * Use to remove a mapping from the parent image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#no_device CcContainerRecipe#no_device}
    */
    readonly noDevice?: string;
    /**
    * Use to manage instance ephemeral devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#virtual_name CcContainerRecipe#virtual_name}
    */
    readonly virtualName?: string;
}
export class InstanceBlockDeviceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceBlockDeviceMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceName = this._deviceName;
        }
        if (this._ebs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebs = this._ebs?.internalValue;
        }
        if (this._noDevice !== undefined) {
            hasAnyValues = true;
            internalValueResult.noDevice = this._noDevice;
        }
        if (this._virtualName !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualName = this._virtualName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceBlockDeviceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._ebs.internalValue = undefined;
            this._noDevice = undefined;
            this._virtualName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._ebs.internalValue = value.ebs;
            this._noDevice = value.noDevice;
            this._virtualName = value.virtualName;
        }
    }

    // device_name - computed: true, optional: true, required: false
    private _deviceName?: string; 
    public get deviceName() {
        return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string) {
        this._deviceName = value;
    }
    public resetDeviceName() {
        this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
        return this._deviceName;
    }

    // ebs - computed: true, optional: true, required: false
    private _ebs = new EbsInstanceBlockDeviceSpecificationPropertyOutputReference(this, "ebs");
    public get ebs() {
        return this._ebs;
    }
    public putEbs(value: EbsInstanceBlockDeviceSpecificationProperty) {
        this._ebs.internalValue = value;
    }
    public resetEbs() {
        this._ebs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsInput() {
        return this._ebs.internalValue;
    }

    // no_device - computed: true, optional: true, required: false
    private _noDevice?: string; 
    public get noDevice() {
        return this.getStringAttribute('no_device');
    }
    public set noDevice(value: string) {
        this._noDevice = value;
    }
    public resetNoDevice() {
        this._noDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noDeviceInput() {
        return this._noDevice;
    }

    // virtual_name - computed: true, optional: true, required: false
    private _virtualName?: string; 
    public get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
    public set virtualName(value: string) {
        this._virtualName = value;
    }
    public resetVirtualName() {
        this._virtualName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualNameInput() {
        return this._virtualName;
    }
}

export class InstanceBlockDeviceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceBlockDeviceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceBlockDeviceMappingPropertyOutputReference {
        return new InstanceBlockDeviceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceConfigurationProperty {
    /**
    * Defines the block devices to attach for building an instance from this Image Builder AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#block_device_mappings CcContainerRecipe#block_device_mappings}
    */
    readonly blockDeviceMappings?: InstanceBlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#image CcContainerRecipe#image}
    */
    readonly image?: string;
}
export class InstanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockDeviceMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = undefined;
            this._image = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
            this._image = value.image;
        }
    }

    // block_device_mappings - computed: true, optional: true, required: false
    private _blockDeviceMappings = new InstanceBlockDeviceMappingPropertyList(this, "block_device_mappings", false);
    public get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    public putBlockDeviceMappings(value: InstanceBlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._blockDeviceMappings.internalValue = value;
    }
    public resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
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
export interface TargetContainerRepositoryProperty {
    /**
    * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#repository_name CcContainerRecipe#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * Specifies the service in which this image was registered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/imagebuilder_container_recipe#service CcContainerRecipe#service}
    */
    readonly service?: string;
}
export class TargetContainerRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetContainerRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryName = this._repositoryName;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetContainerRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryName = undefined;
            this._service = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryName = value.repositoryName;
            this._service = value.service;
        }
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

    // service - computed: true, optional: true, required: false
    private _service?: string; 
    public get service() {
        return this.getStringAttribute('service');
    }
    public set service(value: string) {
        this._service = value;
    }
    public resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceInput() {
        return this._service;
    }
}
}
