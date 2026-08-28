// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppImageConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The Name of the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#app_image_config_name CcAppImageConfig#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * The CodeEditorAppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#code_editor_app_image_config CcAppImageConfig#code_editor_app_image_config}
    */
    readonly codeEditorAppImageConfig?: CcAppImageConfig.CodeEditorAppImageConfigProperty;
    /**
    * The JupyterLabAppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#jupyter_lab_app_image_config CcAppImageConfig#jupyter_lab_app_image_config}
    */
    readonly jupyterLabAppImageConfig?: CcAppImageConfig.JupyterLabAppImageConfigProperty;
    /**
    * The KernelGatewayImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config CcAppImageConfig#kernel_gateway_image_config}
    */
    readonly kernelGatewayImageConfig?: CcAppImageConfig.KernelGatewayImageConfigProperty;
    /**
    * A list of tags to apply to the AppImageConfig.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#tags CcAppImageConfig#tags}
    */
    readonly tags?: CcAppImageConfig.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config awscc_sagemaker_app_image_config}
*/
export class CcAppImageConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_app_image_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAppImageConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAppImageConfig to import
    * @param importFromId The id of the existing CcAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAppImageConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_app_image_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config awscc_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppImageConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcAppImageConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_app_image_config',
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
        this._appImageConfigName = config.appImageConfigName;
        this._codeEditorAppImageConfig.internalValue = config.codeEditorAppImageConfig;
        this._jupyterLabAppImageConfig.internalValue = config.jupyterLabAppImageConfig;
        this._kernelGatewayImageConfig.internalValue = config.kernelGatewayImageConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_image_config_arn - computed: true, optional: false, required: false
    public get appImageConfigArn() {
        return this.getStringAttribute('app_image_config_arn');
    }

    // app_image_config_name - computed: false, optional: false, required: true
    private _appImageConfigName?: string; 
    public get appImageConfigName() {
        return this.getStringAttribute('app_image_config_name');
    }
    public set appImageConfigName(value: string) {
        this._appImageConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appImageConfigNameInput() {
        return this._appImageConfigName;
    }

    // code_editor_app_image_config - computed: true, optional: true, required: false
    private _codeEditorAppImageConfig = new CcAppImageConfig.CodeEditorAppImageConfigPropertyOutputReference(this, "code_editor_app_image_config");
    public get codeEditorAppImageConfig() {
        return this._codeEditorAppImageConfig;
    }
    public putCodeEditorAppImageConfig(value: CcAppImageConfig.CodeEditorAppImageConfigProperty) {
        this._codeEditorAppImageConfig.internalValue = value;
    }
    public resetCodeEditorAppImageConfig() {
        this._codeEditorAppImageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeEditorAppImageConfigInput() {
        return this._codeEditorAppImageConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // jupyter_lab_app_image_config - computed: true, optional: true, required: false
    private _jupyterLabAppImageConfig = new CcAppImageConfig.JupyterLabAppImageConfigPropertyOutputReference(this, "jupyter_lab_app_image_config");
    public get jupyterLabAppImageConfig() {
        return this._jupyterLabAppImageConfig;
    }
    public putJupyterLabAppImageConfig(value: CcAppImageConfig.JupyterLabAppImageConfigProperty) {
        this._jupyterLabAppImageConfig.internalValue = value;
    }
    public resetJupyterLabAppImageConfig() {
        this._jupyterLabAppImageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jupyterLabAppImageConfigInput() {
        return this._jupyterLabAppImageConfig.internalValue;
    }

    // kernel_gateway_image_config - computed: true, optional: true, required: false
    private _kernelGatewayImageConfig = new CcAppImageConfig.KernelGatewayImageConfigPropertyOutputReference(this, "kernel_gateway_image_config");
    public get kernelGatewayImageConfig() {
        return this._kernelGatewayImageConfig;
    }
    public putKernelGatewayImageConfig(value: CcAppImageConfig.KernelGatewayImageConfigProperty) {
        this._kernelGatewayImageConfig.internalValue = value;
    }
    public resetKernelGatewayImageConfig() {
        this._kernelGatewayImageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelGatewayImageConfigInput() {
        return this._kernelGatewayImageConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAppImageConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAppImageConfig.TagProperty[] | cdktn.IResolvable) {
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
            app_image_config_name: cdktn.stringToTerraform(this._appImageConfigName),
            code_editor_app_image_config: ccAppImageConfigCodeEditorAppImageConfigPropertyToTerraform(this._codeEditorAppImageConfig.internalValue),
            jupyter_lab_app_image_config: ccAppImageConfigJupyterLabAppImageConfigPropertyToTerraform(this._jupyterLabAppImageConfig.internalValue),
            kernel_gateway_image_config: ccAppImageConfigKernelGatewayImageConfigPropertyToTerraform(this._kernelGatewayImageConfig.internalValue),
            tags: cdktn.listMapper(ccAppImageConfigTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_image_config_name: {
                value: cdktn.stringToHclTerraform(this._appImageConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            code_editor_app_image_config: {
                value: ccAppImageConfigCodeEditorAppImageConfigPropertyToHclTerraform(this._codeEditorAppImageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppImageConfig.CodeEditorAppImageConfigProperty",
            },
            jupyter_lab_app_image_config: {
                value: ccAppImageConfigJupyterLabAppImageConfigPropertyToHclTerraform(this._jupyterLabAppImageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppImageConfig.JupyterLabAppImageConfigProperty",
            },
            kernel_gateway_image_config: {
                value: ccAppImageConfigKernelGatewayImageConfigPropertyToHclTerraform(this._kernelGatewayImageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppImageConfig.KernelGatewayImageConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppImageConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAppImageConfig.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppImageConfigCustomImageContainerEnvironmentVariablePropertyToTerraform(struct?: CcAppImageConfig.CustomImageContainerEnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppImageConfigCustomImageContainerEnvironmentVariablePropertyToHclTerraform(struct?: CcAppImageConfig.CustomImageContainerEnvironmentVariableProperty | cdktn.IResolvable): any {
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


export function ccAppImageConfigContainerConfigPropertyToTerraform(struct?: CcAppImageConfig.ContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
        container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
        container_environment_variables: cdktn.listMapper(ccAppImageConfigCustomImageContainerEnvironmentVariablePropertyToTerraform, false)(struct!.containerEnvironmentVariables),
    }
}


export function ccAppImageConfigContainerConfigPropertyToHclTerraform(struct?: CcAppImageConfig.ContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        container_entrypoint: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        container_environment_variables: {
            value: cdktn.listMapperHcl(ccAppImageConfigCustomImageContainerEnvironmentVariablePropertyToHclTerraform, false)(struct!.containerEnvironmentVariables),
            isBlock: true,
            type: "list",
            storageClassType: "CustomImageContainerEnvironmentVariablePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigCodeEditorAppImageConfigPropertyToTerraform(struct?: CcAppImageConfig.CodeEditorAppImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_config: ccAppImageConfigContainerConfigPropertyToTerraform(struct!.containerConfig),
    }
}


export function ccAppImageConfigCodeEditorAppImageConfigPropertyToHclTerraform(struct?: CcAppImageConfig.CodeEditorAppImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_config: {
            value: ccAppImageConfigContainerConfigPropertyToHclTerraform(struct!.containerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigContainerEnvironmentVariablesPropertyToTerraform(struct?: CcAppImageConfig.ContainerEnvironmentVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppImageConfigContainerEnvironmentVariablesPropertyToHclTerraform(struct?: CcAppImageConfig.ContainerEnvironmentVariablesProperty | cdktn.IResolvable): any {
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


export function ccAppImageConfigJupyterLabAppImageConfigContainerConfigPropertyToTerraform(struct?: CcAppImageConfig.JupyterLabAppImageConfigContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
        container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
        container_environment_variables: cdktn.listMapper(ccAppImageConfigContainerEnvironmentVariablesPropertyToTerraform, false)(struct!.containerEnvironmentVariables),
    }
}


export function ccAppImageConfigJupyterLabAppImageConfigContainerConfigPropertyToHclTerraform(struct?: CcAppImageConfig.JupyterLabAppImageConfigContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        container_entrypoint: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        container_environment_variables: {
            value: cdktn.listMapperHcl(ccAppImageConfigContainerEnvironmentVariablesPropertyToHclTerraform, false)(struct!.containerEnvironmentVariables),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerEnvironmentVariablesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigJupyterLabAppImageConfigPropertyToTerraform(struct?: CcAppImageConfig.JupyterLabAppImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_config: ccAppImageConfigJupyterLabAppImageConfigContainerConfigPropertyToTerraform(struct!.containerConfig),
    }
}


export function ccAppImageConfigJupyterLabAppImageConfigPropertyToHclTerraform(struct?: CcAppImageConfig.JupyterLabAppImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_config: {
            value: ccAppImageConfigJupyterLabAppImageConfigContainerConfigPropertyToHclTerraform(struct!.containerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "JupyterLabAppImageConfigContainerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigFileSystemConfigPropertyToTerraform(struct?: CcAppImageConfig.FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_gid: cdktn.numberToTerraform(struct!.defaultGid),
        default_uid: cdktn.numberToTerraform(struct!.defaultUid),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccAppImageConfigFileSystemConfigPropertyToHclTerraform(struct?: CcAppImageConfig.FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_gid: {
            value: cdktn.numberToHclTerraform(struct!.defaultGid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_uid: {
            value: cdktn.numberToHclTerraform(struct!.defaultUid),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigKernelSpecPropertyToTerraform(struct?: CcAppImageConfig.KernelSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        display_name: cdktn.stringToTerraform(struct!.displayName),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccAppImageConfigKernelSpecPropertyToHclTerraform(struct?: CcAppImageConfig.KernelSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        display_name: {
            value: cdktn.stringToHclTerraform(struct!.displayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccAppImageConfigKernelGatewayImageConfigPropertyToTerraform(struct?: CcAppImageConfig.KernelGatewayImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        file_system_config: ccAppImageConfigFileSystemConfigPropertyToTerraform(struct!.fileSystemConfig),
        kernel_specs: cdktn.listMapper(ccAppImageConfigKernelSpecPropertyToTerraform, false)(struct!.kernelSpecs),
    }
}


export function ccAppImageConfigKernelGatewayImageConfigPropertyToHclTerraform(struct?: CcAppImageConfig.KernelGatewayImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        file_system_config: {
            value: ccAppImageConfigFileSystemConfigPropertyToHclTerraform(struct!.fileSystemConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FileSystemConfigProperty",
        },
        kernel_specs: {
            value: cdktn.listMapperHcl(ccAppImageConfigKernelSpecPropertyToHclTerraform, false)(struct!.kernelSpecs),
            isBlock: true,
            type: "list",
            storageClassType: "KernelSpecPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppImageConfigTagPropertyToTerraform(struct?: CcAppImageConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppImageConfigTagPropertyToHclTerraform(struct?: CcAppImageConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAppImageConfig {
export interface CustomImageContainerEnvironmentVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#key CcAppImageConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#value CcAppImageConfig#value}
    */
    readonly value?: string;
}
export class CustomImageContainerEnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomImageContainerEnvironmentVariableProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CustomImageContainerEnvironmentVariableProperty | cdktn.IResolvable | undefined) {
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

export class CustomImageContainerEnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomImageContainerEnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomImageContainerEnvironmentVariablePropertyOutputReference {
        return new CustomImageContainerEnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContainerConfigProperty {
    /**
    * A list of arguments to apply to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_arguments CcAppImageConfig#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * The custom entry point to use on container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_entrypoint CcAppImageConfig#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * A list of variables to apply to the custom container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_environment_variables CcAppImageConfig#container_environment_variables}
    */
    readonly containerEnvironmentVariables?: CustomImageContainerEnvironmentVariableProperty[] | cdktn.IResolvable;
}
export class ContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerArguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerArguments = this._containerArguments;
        }
        if (this._containerEntrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerEntrypoint = this._containerEntrypoint;
        }
        if (this._containerEnvironmentVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerArguments = undefined;
            this._containerEntrypoint = undefined;
            this._containerEnvironmentVariables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerArguments = value.containerArguments;
            this._containerEntrypoint = value.containerEntrypoint;
            this._containerEnvironmentVariables.internalValue = value.containerEnvironmentVariables;
        }
    }

    // container_arguments - computed: true, optional: true, required: false
    private _containerArguments?: string[]; 
    public get containerArguments() {
        return this.getListAttribute('container_arguments');
    }
    public set containerArguments(value: string[]) {
        this._containerArguments = value;
    }
    public resetContainerArguments() {
        this._containerArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerArgumentsInput() {
        return this._containerArguments;
    }

    // container_entrypoint - computed: true, optional: true, required: false
    private _containerEntrypoint?: string[]; 
    public get containerEntrypoint() {
        return this.getListAttribute('container_entrypoint');
    }
    public set containerEntrypoint(value: string[]) {
        this._containerEntrypoint = value;
    }
    public resetContainerEntrypoint() {
        this._containerEntrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerEntrypointInput() {
        return this._containerEntrypoint;
    }

    // container_environment_variables - computed: true, optional: true, required: false
    private _containerEnvironmentVariables = new CustomImageContainerEnvironmentVariablePropertyList(this, "container_environment_variables", false);
    public get containerEnvironmentVariables() {
        return this._containerEnvironmentVariables;
    }
    public putContainerEnvironmentVariables(value: CustomImageContainerEnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._containerEnvironmentVariables.internalValue = value;
    }
    public resetContainerEnvironmentVariables() {
        this._containerEnvironmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerEnvironmentVariablesInput() {
        return this._containerEnvironmentVariables.internalValue;
    }
}
export interface CodeEditorAppImageConfigProperty {
    /**
    * The container configuration for a SageMaker image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_config CcAppImageConfig#container_config}
    */
    readonly containerConfig?: ContainerConfigProperty;
}
export class CodeEditorAppImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeEditorAppImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerConfig = this._containerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeEditorAppImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerConfig.internalValue = value.containerConfig;
        }
    }

    // container_config - computed: true, optional: true, required: false
    private _containerConfig = new ContainerConfigPropertyOutputReference(this, "container_config");
    public get containerConfig() {
        return this._containerConfig;
    }
    public putContainerConfig(value: ContainerConfigProperty) {
        this._containerConfig.internalValue = value;
    }
    public resetContainerConfig() {
        this._containerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerConfigInput() {
        return this._containerConfig.internalValue;
    }
}
export interface ContainerEnvironmentVariablesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#key CcAppImageConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#value CcAppImageConfig#value}
    */
    readonly value?: string;
}
export class ContainerEnvironmentVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerEnvironmentVariablesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ContainerEnvironmentVariablesProperty | cdktn.IResolvable | undefined) {
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

export class ContainerEnvironmentVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerEnvironmentVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerEnvironmentVariablesPropertyOutputReference {
        return new ContainerEnvironmentVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JupyterLabAppImageConfigContainerConfigProperty {
    /**
    * A list of arguments to apply to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_arguments CcAppImageConfig#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * The custom entry point to use on container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_entrypoint CcAppImageConfig#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * A list of variables to apply to the custom container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_environment_variables CcAppImageConfig#container_environment_variables}
    */
    readonly containerEnvironmentVariables?: ContainerEnvironmentVariablesProperty[] | cdktn.IResolvable;
}
export class JupyterLabAppImageConfigContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterLabAppImageConfigContainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerArguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerArguments = this._containerArguments;
        }
        if (this._containerEntrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerEntrypoint = this._containerEntrypoint;
        }
        if (this._containerEnvironmentVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterLabAppImageConfigContainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerArguments = undefined;
            this._containerEntrypoint = undefined;
            this._containerEnvironmentVariables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerArguments = value.containerArguments;
            this._containerEntrypoint = value.containerEntrypoint;
            this._containerEnvironmentVariables.internalValue = value.containerEnvironmentVariables;
        }
    }

    // container_arguments - computed: true, optional: true, required: false
    private _containerArguments?: string[]; 
    public get containerArguments() {
        return this.getListAttribute('container_arguments');
    }
    public set containerArguments(value: string[]) {
        this._containerArguments = value;
    }
    public resetContainerArguments() {
        this._containerArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerArgumentsInput() {
        return this._containerArguments;
    }

    // container_entrypoint - computed: true, optional: true, required: false
    private _containerEntrypoint?: string[]; 
    public get containerEntrypoint() {
        return this.getListAttribute('container_entrypoint');
    }
    public set containerEntrypoint(value: string[]) {
        this._containerEntrypoint = value;
    }
    public resetContainerEntrypoint() {
        this._containerEntrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerEntrypointInput() {
        return this._containerEntrypoint;
    }

    // container_environment_variables - computed: true, optional: true, required: false
    private _containerEnvironmentVariables = new ContainerEnvironmentVariablesPropertyList(this, "container_environment_variables", false);
    public get containerEnvironmentVariables() {
        return this._containerEnvironmentVariables;
    }
    public putContainerEnvironmentVariables(value: ContainerEnvironmentVariablesProperty[] | cdktn.IResolvable) {
        this._containerEnvironmentVariables.internalValue = value;
    }
    public resetContainerEnvironmentVariables() {
        this._containerEnvironmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerEnvironmentVariablesInput() {
        return this._containerEnvironmentVariables.internalValue;
    }
}
export interface JupyterLabAppImageConfigProperty {
    /**
    * The container configuration for a SageMaker image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#container_config CcAppImageConfig#container_config}
    */
    readonly containerConfig?: JupyterLabAppImageConfigContainerConfigProperty;
}
export class JupyterLabAppImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JupyterLabAppImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerConfig = this._containerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JupyterLabAppImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerConfig.internalValue = value.containerConfig;
        }
    }

    // container_config - computed: true, optional: true, required: false
    private _containerConfig = new JupyterLabAppImageConfigContainerConfigPropertyOutputReference(this, "container_config");
    public get containerConfig() {
        return this._containerConfig;
    }
    public putContainerConfig(value: JupyterLabAppImageConfigContainerConfigProperty) {
        this._containerConfig.internalValue = value;
    }
    public resetContainerConfig() {
        this._containerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerConfigInput() {
        return this._containerConfig.internalValue;
    }
}
export interface FileSystemConfigProperty {
    /**
    * The default POSIX group ID (GID). If not specified, defaults to 100.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#default_gid CcAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * The default POSIX user ID (UID). If not specified, defaults to 1000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#default_uid CcAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#mount_path CcAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
}
export class FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultGid !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultGid = this._defaultGid;
        }
        if (this._defaultUid !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultUid = this._defaultUid;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultGid = undefined;
            this._defaultUid = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultGid = value.defaultGid;
            this._defaultUid = value.defaultUid;
            this._mountPath = value.mountPath;
        }
    }

    // default_gid - computed: true, optional: true, required: false
    private _defaultGid?: number; 
    public get defaultGid() {
        return this.getNumberAttribute('default_gid');
    }
    public set defaultGid(value: number) {
        this._defaultGid = value;
    }
    public resetDefaultGid() {
        this._defaultGid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultGidInput() {
        return this._defaultGid;
    }

    // default_uid - computed: true, optional: true, required: false
    private _defaultUid?: number; 
    public get defaultUid() {
        return this.getNumberAttribute('default_uid');
    }
    public set defaultUid(value: number) {
        this._defaultUid = value;
    }
    public resetDefaultUid() {
        this._defaultUid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultUidInput() {
        return this._defaultUid;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface KernelSpecProperty {
    /**
    * The display name of the kernel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#display_name CcAppImageConfig#display_name}
    */
    readonly displayName?: string;
    /**
    * The name of the kernel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#name CcAppImageConfig#name}
    */
    readonly name?: string;
}
export class KernelSpecPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KernelSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._displayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayName = this._displayName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KernelSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._displayName = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._displayName = value.displayName;
            this._name = value.name;
        }
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
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

export class KernelSpecPropertyList extends cdktn.ComplexList {
    public internalValue? : KernelSpecProperty[] | cdktn.IResolvable

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
    public get(index: number): KernelSpecPropertyOutputReference {
        return new KernelSpecPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KernelGatewayImageConfigProperty {
    /**
    * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#file_system_config CcAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: FileSystemConfigProperty;
    /**
    * The specification of the Jupyter kernels in the image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#kernel_specs CcAppImageConfig#kernel_specs}
    */
    readonly kernelSpecs?: KernelSpecProperty[] | cdktn.IResolvable;
}
export class KernelGatewayImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KernelGatewayImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fileSystemConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
        }
        if (this._kernelSpecs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelSpecs = this._kernelSpecs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KernelGatewayImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fileSystemConfig.internalValue = undefined;
            this._kernelSpecs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fileSystemConfig.internalValue = value.fileSystemConfig;
            this._kernelSpecs.internalValue = value.kernelSpecs;
        }
    }

    // file_system_config - computed: true, optional: true, required: false
    private _fileSystemConfig = new FileSystemConfigPropertyOutputReference(this, "file_system_config");
    public get fileSystemConfig() {
        return this._fileSystemConfig;
    }
    public putFileSystemConfig(value: FileSystemConfigProperty) {
        this._fileSystemConfig.internalValue = value;
    }
    public resetFileSystemConfig() {
        this._fileSystemConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemConfigInput() {
        return this._fileSystemConfig.internalValue;
    }

    // kernel_specs - computed: true, optional: true, required: false
    private _kernelSpecs = new KernelSpecPropertyList(this, "kernel_specs", false);
    public get kernelSpecs() {
        return this._kernelSpecs;
    }
    public putKernelSpecs(value: KernelSpecProperty[] | cdktn.IResolvable) {
        this._kernelSpecs.internalValue = value;
    }
    public resetKernelSpecs() {
        this._kernelSpecs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelSpecsInput() {
        return this._kernelSpecs.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#key CcAppImageConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app_image_config#value CcAppImageConfig#value}
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
