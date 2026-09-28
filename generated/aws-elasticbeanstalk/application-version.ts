// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Elastic Beanstalk application that is associated with this application version. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name CcApplicationVersion#application_name}
    */
    readonly applicationName: string;
    /**
    * Settings for an AWS CodeBuild build that packages and builds an application version from source code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration CcApplicationVersion#build_configuration}
    */
    readonly buildConfiguration?: CcApplicationVersion.BuildConfigurationProperty;
    /**
    * A description of this application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description CcApplicationVersion#description}
    */
    readonly description?: string;
    /**
    * Configuration for image-based application versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration CcApplicationVersion#image_configuration}
    */
    readonly imageConfiguration?: CcApplicationVersion.ImageConfigurationProperty;
    /**
    * Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process CcApplicationVersion#process}
    */
    readonly process?: boolean | cdktn.IResolvable;
    /**
    * The Amazon S3 bucket and key that identify the location of the source bundle for this version. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle CcApplicationVersion#source_bundle}
    */
    readonly sourceBundle?: CcApplicationVersion.SourceBundleProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}
*/
export class CcApplicationVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticbeanstalk_application_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationVersion to import
    * @param importFromId The id of the existing CcApplicationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_application_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticbeanstalk_application_version',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._applicationName = config.applicationName;
        this._buildConfiguration.internalValue = config.buildConfiguration;
        this._description = config.description;
        this._imageConfiguration.internalValue = config.imageConfiguration;
        this._process = config.process;
        this._sourceBundle.internalValue = config.sourceBundle;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_name - computed: false, optional: false, required: true
    private _applicationName?: string; 
    public get applicationName() {
        return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
        this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
        return this._applicationName;
    }

    // application_version_id - computed: true, optional: false, required: false
    public get applicationVersionId() {
        return this.getStringAttribute('application_version_id');
    }

    // build_configuration - computed: true, optional: true, required: false
    private _buildConfiguration = new CcApplicationVersion.BuildConfigurationPropertyOutputReference(this, "build_configuration");
    public get buildConfiguration() {
        return this._buildConfiguration;
    }
    public putBuildConfiguration(value: CcApplicationVersion.BuildConfigurationProperty) {
        this._buildConfiguration.internalValue = value;
    }
    public resetBuildConfiguration() {
        this._buildConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildConfigurationInput() {
        return this._buildConfiguration.internalValue;
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

    // image_configuration - computed: true, optional: true, required: false
    private _imageConfiguration = new CcApplicationVersion.ImageConfigurationPropertyOutputReference(this, "image_configuration");
    public get imageConfiguration() {
        return this._imageConfiguration;
    }
    public putImageConfiguration(value: CcApplicationVersion.ImageConfigurationProperty) {
        this._imageConfiguration.internalValue = value;
    }
    public resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }

    // process - computed: true, optional: true, required: false
    private _process?: boolean | cdktn.IResolvable; 
    public get process() {
        return this.getBooleanAttribute('process');
    }
    public set process(value: boolean | cdktn.IResolvable) {
        this._process = value;
    }
    public resetProcess() {
        this._process = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processInput() {
        return this._process;
    }

    // source_bundle - computed: true, optional: true, required: false
    private _sourceBundle = new CcApplicationVersion.SourceBundlePropertyOutputReference(this, "source_bundle");
    public get sourceBundle() {
        return this._sourceBundle;
    }
    public putSourceBundle(value: CcApplicationVersion.SourceBundleProperty) {
        this._sourceBundle.internalValue = value;
    }
    public resetSourceBundle() {
        this._sourceBundle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceBundleInput() {
        return this._sourceBundle.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_name: cdktn.stringToTerraform(this._applicationName),
            build_configuration: ccApplicationVersionBuildConfigurationPropertyToTerraform(this._buildConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            image_configuration: ccApplicationVersionImageConfigurationPropertyToTerraform(this._imageConfiguration.internalValue),
            process: cdktn.booleanToTerraform(this._process),
            source_bundle: ccApplicationVersionSourceBundlePropertyToTerraform(this._sourceBundle.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_name: {
                value: cdktn.stringToHclTerraform(this._applicationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            build_configuration: {
                value: ccApplicationVersionBuildConfigurationPropertyToHclTerraform(this._buildConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationVersion.BuildConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_configuration: {
                value: ccApplicationVersionImageConfigurationPropertyToHclTerraform(this._imageConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationVersion.ImageConfigurationProperty",
            },
            process: {
                value: cdktn.booleanToHclTerraform(this._process),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            source_bundle: {
                value: ccApplicationVersionSourceBundlePropertyToHclTerraform(this._sourceBundle.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationVersion.SourceBundleProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationVersionBuildConfigurationPropertyToTerraform(struct?: CcApplicationVersion.BuildConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        artifact_name: cdktn.stringToTerraform(struct!.artifactName),
        code_build_service_role: cdktn.stringToTerraform(struct!.codeBuildServiceRole),
        compute_type: cdktn.stringToTerraform(struct!.computeType),
        image: cdktn.stringToTerraform(struct!.image),
        timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
    }
}


export function ccApplicationVersionBuildConfigurationPropertyToHclTerraform(struct?: CcApplicationVersion.BuildConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        artifact_name: {
            value: cdktn.stringToHclTerraform(struct!.artifactName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_build_service_role: {
            value: cdktn.stringToHclTerraform(struct!.codeBuildServiceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compute_type: {
            value: cdktn.stringToHclTerraform(struct!.computeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationVersionBuildPropertyToTerraform(struct?: CcApplicationVersion.BuildProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        architecture: cdktn.stringToTerraform(struct!.architecture),
        buildpack: cdktn.stringToTerraform(struct!.buildpack),
        code_build_service_role: cdktn.stringToTerraform(struct!.codeBuildServiceRole),
        compute_type: cdktn.stringToTerraform(struct!.computeType),
        dockerfile_location: cdktn.stringToTerraform(struct!.dockerfileLocation),
        timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccApplicationVersionBuildPropertyToHclTerraform(struct?: CcApplicationVersion.BuildProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        architecture: {
            value: cdktn.stringToHclTerraform(struct!.architecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        buildpack: {
            value: cdktn.stringToHclTerraform(struct!.buildpack),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        code_build_service_role: {
            value: cdktn.stringToHclTerraform(struct!.codeBuildServiceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compute_type: {
            value: cdktn.stringToHclTerraform(struct!.computeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dockerfile_location: {
            value: cdktn.stringToHclTerraform(struct!.dockerfileLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccApplicationVersionSourcePropertyToTerraform(struct?: CcApplicationVersion.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccApplicationVersionSourcePropertyToHclTerraform(struct?: CcApplicationVersion.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationVersionImageConfigurationPropertyToTerraform(struct?: CcApplicationVersion.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        build: ccApplicationVersionBuildPropertyToTerraform(struct!.buildAttribute),
        source: ccApplicationVersionSourcePropertyToTerraform(struct!.source),
    }
}


export function ccApplicationVersionImageConfigurationPropertyToHclTerraform(struct?: CcApplicationVersion.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        build: {
            value: ccApplicationVersionBuildPropertyToHclTerraform(struct!.buildAttribute),
            isBlock: true,
            type: "struct",
            storageClassType: "BuildProperty",
        },
        source: {
            value: ccApplicationVersionSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationVersionSourceBundlePropertyToTerraform(struct?: CcApplicationVersion.SourceBundleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccApplicationVersionSourceBundlePropertyToHclTerraform(struct?: CcApplicationVersion.SourceBundleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApplicationVersion {
export interface BuildConfigurationProperty {
    /**
    * The name of the build artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name CcApplicationVersion#artifact_name}
    */
    readonly artifactName?: string;
    /**
    * The ARN of the IAM role that AWS CodeBuild assumes to build the application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role CcApplicationVersion#code_build_service_role}
    */
    readonly codeBuildServiceRole?: string;
    /**
    * The compute type for the CodeBuild build environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type CcApplicationVersion#compute_type}
    */
    readonly computeType?: string;
    /**
    * The CodeBuild image used for the build environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image CcApplicationVersion#image}
    */
    readonly image?: string;
    /**
    * The timeout for the CodeBuild build, in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes CcApplicationVersion#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
}
export class BuildConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BuildConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._artifactName !== undefined) {
            hasAnyValues = true;
            internalValueResult.artifactName = this._artifactName;
        }
        if (this._codeBuildServiceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeBuildServiceRole = this._codeBuildServiceRole;
        }
        if (this._computeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeType = this._computeType;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._timeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BuildConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._artifactName = undefined;
            this._codeBuildServiceRole = undefined;
            this._computeType = undefined;
            this._image = undefined;
            this._timeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._artifactName = value.artifactName;
            this._codeBuildServiceRole = value.codeBuildServiceRole;
            this._computeType = value.computeType;
            this._image = value.image;
            this._timeoutInMinutes = value.timeoutInMinutes;
        }
    }

    // artifact_name - computed: true, optional: true, required: false
    private _artifactName?: string; 
    public get artifactName() {
        return this.getStringAttribute('artifact_name');
    }
    public set artifactName(value: string) {
        this._artifactName = value;
    }
    public resetArtifactName() {
        this._artifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactNameInput() {
        return this._artifactName;
    }

    // code_build_service_role - computed: true, optional: true, required: false
    private _codeBuildServiceRole?: string; 
    public get codeBuildServiceRole() {
        return this.getStringAttribute('code_build_service_role');
    }
    public set codeBuildServiceRole(value: string) {
        this._codeBuildServiceRole = value;
    }
    public resetCodeBuildServiceRole() {
        this._codeBuildServiceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeBuildServiceRoleInput() {
        return this._codeBuildServiceRole;
    }

    // compute_type - computed: true, optional: true, required: false
    private _computeType?: string; 
    public get computeType() {
        return this.getStringAttribute('compute_type');
    }
    public set computeType(value: string) {
        this._computeType = value;
    }
    public resetComputeType() {
        this._computeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypeInput() {
        return this._computeType;
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

    // timeout_in_minutes - computed: true, optional: true, required: false
    private _timeoutInMinutes?: number; 
    public get timeoutInMinutes() {
        return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number) {
        this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
        this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
        return this._timeoutInMinutes;
    }
}
export interface BuildProperty {
    /**
    * The target architecture for the built container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture CcApplicationVersion#architecture}
    */
    readonly architecture?: string;
    /**
    * The buildpack to use for building the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack CcApplicationVersion#buildpack}
    */
    readonly buildpack?: string;
    /**
    * The ARN of the IAM role that AWS CodeBuild assumes to build the application version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role CcApplicationVersion#code_build_service_role}
    */
    readonly codeBuildServiceRole?: string;
    /**
    * The compute type for the CodeBuild build environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type CcApplicationVersion#compute_type}
    */
    readonly computeType?: string;
    /**
    * The path to the Dockerfile, relative to the source root.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location CcApplicationVersion#dockerfile_location}
    */
    readonly dockerfileLocation?: string;
    /**
    * The timeout for the CodeBuild build, in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes CcApplicationVersion#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * The type of image build: docker or buildpack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type CcApplicationVersion#type}
    */
    readonly type?: string;
}
export class BuildPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BuildProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._architecture !== undefined) {
            hasAnyValues = true;
            internalValueResult.architecture = this._architecture;
        }
        if (this._buildpack !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildpack = this._buildpack;
        }
        if (this._codeBuildServiceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeBuildServiceRole = this._codeBuildServiceRole;
        }
        if (this._computeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeType = this._computeType;
        }
        if (this._dockerfileLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerfileLocation = this._dockerfileLocation;
        }
        if (this._timeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BuildProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._architecture = undefined;
            this._buildpack = undefined;
            this._codeBuildServiceRole = undefined;
            this._computeType = undefined;
            this._dockerfileLocation = undefined;
            this._timeoutInMinutes = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._architecture = value.architecture;
            this._buildpack = value.buildpack;
            this._codeBuildServiceRole = value.codeBuildServiceRole;
            this._computeType = value.computeType;
            this._dockerfileLocation = value.dockerfileLocation;
            this._timeoutInMinutes = value.timeoutInMinutes;
            this._type = value.type;
        }
    }

    // architecture - computed: true, optional: true, required: false
    private _architecture?: string; 
    public get architecture() {
        return this.getStringAttribute('architecture');
    }
    public set architecture(value: string) {
        this._architecture = value;
    }
    public resetArchitecture() {
        this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architectureInput() {
        return this._architecture;
    }

    // buildpack - computed: true, optional: true, required: false
    private _buildpack?: string; 
    public get buildpack() {
        return this.getStringAttribute('buildpack');
    }
    public set buildpack(value: string) {
        this._buildpack = value;
    }
    public resetBuildpack() {
        this._buildpack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildpackInput() {
        return this._buildpack;
    }

    // code_build_service_role - computed: true, optional: true, required: false
    private _codeBuildServiceRole?: string; 
    public get codeBuildServiceRole() {
        return this.getStringAttribute('code_build_service_role');
    }
    public set codeBuildServiceRole(value: string) {
        this._codeBuildServiceRole = value;
    }
    public resetCodeBuildServiceRole() {
        this._codeBuildServiceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeBuildServiceRoleInput() {
        return this._codeBuildServiceRole;
    }

    // compute_type - computed: true, optional: true, required: false
    private _computeType?: string; 
    public get computeType() {
        return this.getStringAttribute('compute_type');
    }
    public set computeType(value: string) {
        this._computeType = value;
    }
    public resetComputeType() {
        this._computeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypeInput() {
        return this._computeType;
    }

    // dockerfile_location - computed: true, optional: true, required: false
    private _dockerfileLocation?: string; 
    public get dockerfileLocation() {
        return this.getStringAttribute('dockerfile_location');
    }
    public set dockerfileLocation(value: string) {
        this._dockerfileLocation = value;
    }
    public resetDockerfileLocation() {
        this._dockerfileLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dockerfileLocationInput() {
        return this._dockerfileLocation;
    }

    // timeout_in_minutes - computed: true, optional: true, required: false
    private _timeoutInMinutes?: number; 
    public get timeoutInMinutes() {
        return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number) {
        this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
        this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
        return this._timeoutInMinutes;
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
export interface SourceProperty {
    /**
    * The URI of the container image, e.g. an ECR image URI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri CcApplicationVersion#uri}
    */
    readonly uri?: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uri = value.uri;
        }
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}
export interface ImageConfigurationProperty {
    /**
    * Configuration for building a container image from source code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build CcApplicationVersion#build}
    */
    readonly buildAttribute?: BuildProperty;
    /**
    * The container image source for this version, as an ECR image URI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source CcApplicationVersion#source}
    */
    readonly source?: SourceProperty;
}
export class ImageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._build?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildAttribute = this._build?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._build.internalValue = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._build.internalValue = value.buildAttribute;
            this._source.internalValue = value.source;
        }
    }

    // build - computed: true, optional: true, required: false
    private _build = new BuildPropertyOutputReference(this, "build");
    public get buildAttribute() {
        return this._build;
    }
    public putBuildAttribute(value: BuildProperty) {
        this._build.internalValue = value;
    }
    public resetBuildAttribute() {
        this._build.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildAttributeInput() {
        return this._build.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}
export interface SourceBundleProperty {
    /**
    * The Amazon S3 bucket where the data is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket CcApplicationVersion#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * The Amazon S3 key where the data is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key CcApplicationVersion#s3_key}
    */
    readonly s3Key?: string;
}
export class SourceBundlePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceBundleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceBundleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
}
