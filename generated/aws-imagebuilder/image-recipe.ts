// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcImageRecipeProps extends cdktn.TerraformMetaArguments {
    /**
    * Specify additional settings and launch scripts for your build instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration CcImageRecipe#additional_instance_configuration}
    */
    readonly additionalInstanceConfiguration?: CcImageRecipe.AdditionalInstanceConfigurationProperty;
    /**
    * The tags to apply to the AMI created by this image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_tags CcImageRecipe#ami_tags}
    */
    readonly amiTags?: { [key: string]: string };
    /**
    * The AMI watermark names to attach to the output AMI from this recipe. AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_watermarks CcImageRecipe#ami_watermarks}
    */
    readonly amiWatermarks?: string[];
    /**
    * The block device mappings to apply when creating images from this recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#block_device_mappings CcImageRecipe#block_device_mappings}
    */
    readonly blockDeviceMappings?: CcImageRecipe.InstanceBlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The components of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#components CcImageRecipe#components}
    */
    readonly components?: CcImageRecipe.ComponentConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The description of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#description CcImageRecipe#description}
    */
    readonly description?: string;
    /**
    * The name of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name CcImageRecipe#name}
    */
    readonly name: string;
    /**
    * The parent image of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parent_image CcImageRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * The tags of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#tags CcImageRecipe#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The version of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#version CcImageRecipe#version}
    */
    readonly version: string;
    /**
    * The working directory to be used during build and test workflows.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#working_directory CcImageRecipe#working_directory}
    */
    readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}
*/
export class CcImageRecipe extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_image_recipe";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcImageRecipe resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcImageRecipe to import
    * @param importFromId The id of the existing CcImageRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcImageRecipe to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image_recipe", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcImageRecipeProps
    */
    public constructor(scope: Construct, id: string, config: CcImageRecipeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_image_recipe',
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
        this._additionalInstanceConfiguration.internalValue = config.additionalInstanceConfiguration;
        this._amiTags = config.amiTags;
        this._amiWatermarks = config.amiWatermarks;
        this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
        this._components.internalValue = config.components;
        this._description = config.description;
        this._name = config.name;
        this._parentImage = config.parentImage;
        this._tags = config.tags;
        this._version = config.version;
        this._workingDirectory = config.workingDirectory;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_instance_configuration - computed: true, optional: true, required: false
    private _additionalInstanceConfiguration = new CcImageRecipe.AdditionalInstanceConfigurationPropertyOutputReference(this, "additional_instance_configuration");
    public get additionalInstanceConfiguration() {
        return this._additionalInstanceConfiguration;
    }
    public putAdditionalInstanceConfiguration(value: CcImageRecipe.AdditionalInstanceConfigurationProperty) {
        this._additionalInstanceConfiguration.internalValue = value;
    }
    public resetAdditionalInstanceConfiguration() {
        this._additionalInstanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInstanceConfigurationInput() {
        return this._additionalInstanceConfiguration.internalValue;
    }

    // ami_tags - computed: true, optional: true, required: false
    private _amiTags?: { [key: string]: string }; 
    public get amiTags() {
        return this.getStringMapAttribute('ami_tags');
    }
    public set amiTags(value: { [key: string]: string }) {
        this._amiTags = value;
    }
    public resetAmiTags() {
        this._amiTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiTagsInput() {
        return this._amiTags;
    }

    // ami_watermarks - computed: true, optional: true, required: false
    private _amiWatermarks?: string[]; 
    public get amiWatermarks() {
        return this.getListAttribute('ami_watermarks');
    }
    public set amiWatermarks(value: string[]) {
        this._amiWatermarks = value;
    }
    public resetAmiWatermarks() {
        this._amiWatermarks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiWatermarksInput() {
        return this._amiWatermarks;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // block_device_mappings - computed: true, optional: true, required: false
    private _blockDeviceMappings = new CcImageRecipe.InstanceBlockDeviceMappingPropertyList(this, "block_device_mappings", false);
    public get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    public putBlockDeviceMappings(value: CcImageRecipe.InstanceBlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._blockDeviceMappings.internalValue = value;
    }
    public resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
    }

    // components - computed: true, optional: true, required: false
    private _components = new CcImageRecipe.ComponentConfigurationPropertyList(this, "components", false);
    public get components() {
        return this._components;
    }
    public putComponents(value: CcImageRecipe.ComponentConfigurationProperty[] | cdktn.IResolvable) {
        this._components.internalValue = value;
    }
    public resetComponents() {
        this._components.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentsInput() {
        return this._components.internalValue;
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

    // latest_version - computed: true, optional: false, required: false
    private _latestVersion = new CcImageRecipe.LatestVersionPropertyOutputReference(this, "latest_version");
    public get latestVersion() {
        return this._latestVersion;
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

    // parent_image - computed: false, optional: false, required: true
    private _parentImage?: string; 
    public get parentImage() {
        return this.getStringAttribute('parent_image');
    }
    public set parentImage(value: string) {
        this._parentImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentImageInput() {
        return this._parentImage;
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

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
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
            additional_instance_configuration: ccImageRecipeAdditionalInstanceConfigurationPropertyToTerraform(this._additionalInstanceConfiguration.internalValue),
            ami_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._amiTags),
            ami_watermarks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._amiWatermarks),
            block_device_mappings: cdktn.listMapper(ccImageRecipeInstanceBlockDeviceMappingPropertyToTerraform, false)(this._blockDeviceMappings.internalValue),
            components: cdktn.listMapper(ccImageRecipeComponentConfigurationPropertyToTerraform, false)(this._components.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            parent_image: cdktn.stringToTerraform(this._parentImage),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            version: cdktn.stringToTerraform(this._version),
            working_directory: cdktn.stringToTerraform(this._workingDirectory),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_instance_configuration: {
                value: ccImageRecipeAdditionalInstanceConfigurationPropertyToHclTerraform(this._additionalInstanceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcImageRecipe.AdditionalInstanceConfigurationProperty",
            },
            ami_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._amiTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            ami_watermarks: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._amiWatermarks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            block_device_mappings: {
                value: cdktn.listMapperHcl(ccImageRecipeInstanceBlockDeviceMappingPropertyToHclTerraform, false)(this._blockDeviceMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImageRecipe.InstanceBlockDeviceMappingPropertyList",
            },
            components: {
                value: cdktn.listMapperHcl(ccImageRecipeComponentConfigurationPropertyToHclTerraform, false)(this._components.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcImageRecipe.ComponentConfigurationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
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

export function ccImageRecipeSystemsManagerAgentPropertyToTerraform(struct?: CcImageRecipe.SystemsManagerAgentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uninstall_after_build: cdktn.booleanToTerraform(struct!.uninstallAfterBuild),
    }
}


export function ccImageRecipeSystemsManagerAgentPropertyToHclTerraform(struct?: CcImageRecipe.SystemsManagerAgentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        uninstall_after_build: {
            value: cdktn.booleanToHclTerraform(struct!.uninstallAfterBuild),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageRecipeAdditionalInstanceConfigurationPropertyToTerraform(struct?: CcImageRecipe.AdditionalInstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        systems_manager_agent: ccImageRecipeSystemsManagerAgentPropertyToTerraform(struct!.systemsManagerAgent),
        user_data_override: cdktn.stringToTerraform(struct!.userDataOverride),
    }
}


export function ccImageRecipeAdditionalInstanceConfigurationPropertyToHclTerraform(struct?: CcImageRecipe.AdditionalInstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        systems_manager_agent: {
            value: ccImageRecipeSystemsManagerAgentPropertyToHclTerraform(struct!.systemsManagerAgent),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemsManagerAgentProperty",
        },
        user_data_override: {
            value: cdktn.stringToHclTerraform(struct!.userDataOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageRecipeEbsInstanceBlockDeviceSpecificationPropertyToTerraform(struct?: CcImageRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable): any {
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


export function ccImageRecipeEbsInstanceBlockDeviceSpecificationPropertyToHclTerraform(struct?: CcImageRecipe.EbsInstanceBlockDeviceSpecificationProperty | cdktn.IResolvable): any {
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


export function ccImageRecipeInstanceBlockDeviceMappingPropertyToTerraform(struct?: CcImageRecipe.InstanceBlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccImageRecipeEbsInstanceBlockDeviceSpecificationPropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccImageRecipeInstanceBlockDeviceMappingPropertyToHclTerraform(struct?: CcImageRecipe.InstanceBlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccImageRecipeEbsInstanceBlockDeviceSpecificationPropertyToHclTerraform(struct!.ebs),
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


export function ccImageRecipeComponentParameterPropertyToTerraform(struct?: CcImageRecipe.ComponentParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
    }
}


export function ccImageRecipeComponentParameterPropertyToHclTerraform(struct?: CcImageRecipe.ComponentParameterProperty | cdktn.IResolvable): any {
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


export function ccImageRecipeComponentConfigurationPropertyToTerraform(struct?: CcImageRecipe.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_arn: cdktn.stringToTerraform(struct!.componentArn),
        parameters: cdktn.listMapper(ccImageRecipeComponentParameterPropertyToTerraform, false)(struct!.parameters),
    }
}


export function ccImageRecipeComponentConfigurationPropertyToHclTerraform(struct?: CcImageRecipe.ComponentConfigurationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccImageRecipeComponentParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccImageRecipeLatestVersionPropertyToTerraform(struct?: CcImageRecipe.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccImageRecipeLatestVersionPropertyToHclTerraform(struct?: CcImageRecipe.LatestVersionProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcImageRecipe {
export interface SystemsManagerAgentProperty {
    /**
    * Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build CcImageRecipe#uninstall_after_build}
    */
    readonly uninstallAfterBuild?: boolean | cdktn.IResolvable;
}
export class SystemsManagerAgentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemsManagerAgentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uninstallAfterBuild !== undefined) {
            hasAnyValues = true;
            internalValueResult.uninstallAfterBuild = this._uninstallAfterBuild;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemsManagerAgentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uninstallAfterBuild = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uninstallAfterBuild = value.uninstallAfterBuild;
        }
    }

    // uninstall_after_build - computed: true, optional: true, required: false
    private _uninstallAfterBuild?: boolean | cdktn.IResolvable; 
    public get uninstallAfterBuild() {
        return this.getBooleanAttribute('uninstall_after_build');
    }
    public set uninstallAfterBuild(value: boolean | cdktn.IResolvable) {
        this._uninstallAfterBuild = value;
    }
    public resetUninstallAfterBuild() {
        this._uninstallAfterBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uninstallAfterBuildInput() {
        return this._uninstallAfterBuild;
    }
}
export interface AdditionalInstanceConfigurationProperty {
    /**
    * Contains settings for the SSM agent on your build instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent CcImageRecipe#systems_manager_agent}
    */
    readonly systemsManagerAgent?: SystemsManagerAgentProperty;
    /**
    * Use this property to provide commands or a command script to run when you launch your build instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#user_data_override CcImageRecipe#user_data_override}
    */
    readonly userDataOverride?: string;
}
export class AdditionalInstanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalInstanceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._systemsManagerAgent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemsManagerAgent = this._systemsManagerAgent?.internalValue;
        }
        if (this._userDataOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.userDataOverride = this._userDataOverride;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInstanceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._systemsManagerAgent.internalValue = undefined;
            this._userDataOverride = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._systemsManagerAgent.internalValue = value.systemsManagerAgent;
            this._userDataOverride = value.userDataOverride;
        }
    }

    // systems_manager_agent - computed: true, optional: true, required: false
    private _systemsManagerAgent = new SystemsManagerAgentPropertyOutputReference(this, "systems_manager_agent");
    public get systemsManagerAgent() {
        return this._systemsManagerAgent;
    }
    public putSystemsManagerAgent(value: SystemsManagerAgentProperty) {
        this._systemsManagerAgent.internalValue = value;
    }
    public resetSystemsManagerAgent() {
        this._systemsManagerAgent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemsManagerAgentInput() {
        return this._systemsManagerAgent.internalValue;
    }

    // user_data_override - computed: true, optional: true, required: false
    private _userDataOverride?: string; 
    public get userDataOverride() {
        return this.getStringAttribute('user_data_override');
    }
    public set userDataOverride(value: string) {
        this._userDataOverride = value;
    }
    public resetUserDataOverride() {
        this._userDataOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataOverrideInput() {
        return this._userDataOverride;
    }
}
export interface EbsInstanceBlockDeviceSpecificationProperty {
    /**
    * Use to configure delete on termination of the associated device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#delete_on_termination CcImageRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Use to configure device encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#encrypted CcImageRecipe#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Use to configure device IOPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#iops CcImageRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Use to configure the KMS key to use when encrypting the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#kms_key_id CcImageRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The snapshot that defines the device contents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#snapshot_id CcImageRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * For GP3 volumes only - The throughput in MiB/s that the volume supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#throughput CcImageRecipe#throughput}
    */
    readonly throughput?: number;
    /**
    * Use to override the device's volume size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_size CcImageRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Use to override the device's volume type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_type CcImageRecipe#volume_type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#device_name CcImageRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Use to manage Amazon EBS-specific configuration for this mapping.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ebs CcImageRecipe#ebs}
    */
    readonly ebs?: EbsInstanceBlockDeviceSpecificationProperty;
    /**
    * Use to remove a mapping from the parent image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#no_device CcImageRecipe#no_device}
    */
    readonly noDevice?: string;
    /**
    * Use to manage instance ephemeral devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#virtual_name CcImageRecipe#virtual_name}
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
export interface ComponentParameterProperty {
    /**
    * The name of the component parameter to set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name CcImageRecipe#name}
    */
    readonly name?: string;
    /**
    * Sets the value for the named component parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#value CcImageRecipe#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#component_arn CcImageRecipe#component_arn}
    */
    readonly componentArn?: string;
    /**
    * A group of parameter settings that are used to configure the component for a specific recipe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parameters CcImageRecipe#parameters}
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
}
