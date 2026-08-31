// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcComponentVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#inline_recipe CcComponentVersion#inline_recipe}
    */
    readonly inlineRecipe?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#lambda_function CcComponentVersion#lambda_function}
    */
    readonly lambdaFunction?: CcComponentVersion.LambdaFunctionRecipeSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#tags CcComponentVersion#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version awscc_greengrassv2_component_version}
*/
export class CcComponentVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_greengrassv2_component_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcComponentVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcComponentVersion to import
    * @param importFromId The id of the existing CcComponentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcComponentVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_greengrassv2_component_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version awscc_greengrassv2_component_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcComponentVersionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcComponentVersionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_greengrassv2_component_version',
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
        this._inlineRecipe = config.inlineRecipe;
        this._lambdaFunction.internalValue = config.lambdaFunction;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // component_name - computed: true, optional: false, required: false
    public get componentName() {
        return this.getStringAttribute('component_name');
    }

    // component_version - computed: true, optional: false, required: false
    public get componentVersion() {
        return this.getStringAttribute('component_version');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inline_recipe - computed: true, optional: true, required: false
    private _inlineRecipe?: string; 
    public get inlineRecipe() {
        return this.getStringAttribute('inline_recipe');
    }
    public set inlineRecipe(value: string) {
        this._inlineRecipe = value;
    }
    public resetInlineRecipe() {
        this._inlineRecipe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inlineRecipeInput() {
        return this._inlineRecipe;
    }

    // lambda_function - computed: true, optional: true, required: false
    private _lambdaFunction = new CcComponentVersion.LambdaFunctionRecipeSourcePropertyOutputReference(this, "lambda_function");
    public get lambdaFunction() {
        return this._lambdaFunction;
    }
    public putLambdaFunction(value: CcComponentVersion.LambdaFunctionRecipeSourceProperty) {
        this._lambdaFunction.internalValue = value;
    }
    public resetLambdaFunction() {
        this._lambdaFunction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionInput() {
        return this._lambdaFunction.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            inline_recipe: cdktn.stringToTerraform(this._inlineRecipe),
            lambda_function: ccComponentVersionLambdaFunctionRecipeSourcePropertyToTerraform(this._lambdaFunction.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            inline_recipe: {
                value: cdktn.stringToHclTerraform(this._inlineRecipe),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_function: {
                value: ccComponentVersionLambdaFunctionRecipeSourcePropertyToHclTerraform(this._lambdaFunction.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComponentVersion.LambdaFunctionRecipeSourceProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccComponentVersionComponentDependencyRequirementPropertyToTerraform(struct?: CcComponentVersion.ComponentDependencyRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dependency_type: cdktn.stringToTerraform(struct!.dependencyType),
        version_requirement: cdktn.stringToTerraform(struct!.versionRequirement),
    }
}


export function ccComponentVersionComponentDependencyRequirementPropertyToHclTerraform(struct?: CcComponentVersion.ComponentDependencyRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dependency_type: {
            value: cdktn.stringToHclTerraform(struct!.dependencyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_requirement: {
            value: cdktn.stringToHclTerraform(struct!.versionRequirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionLambdaEventSourcePropertyToTerraform(struct?: CcComponentVersion.LambdaEventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        topic: cdktn.stringToTerraform(struct!.topic),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccComponentVersionLambdaEventSourcePropertyToHclTerraform(struct?: CcComponentVersion.LambdaEventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
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


export function ccComponentVersionLambdaDeviceMountPropertyToTerraform(struct?: CcComponentVersion.LambdaDeviceMountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_group_owner: cdktn.booleanToTerraform(struct!.addGroupOwner),
        path: cdktn.stringToTerraform(struct!.path),
        permission: cdktn.stringToTerraform(struct!.permission),
    }
}


export function ccComponentVersionLambdaDeviceMountPropertyToHclTerraform(struct?: CcComponentVersion.LambdaDeviceMountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_group_owner: {
            value: cdktn.booleanToHclTerraform(struct!.addGroupOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission: {
            value: cdktn.stringToHclTerraform(struct!.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionLambdaVolumeMountPropertyToTerraform(struct?: CcComponentVersion.LambdaVolumeMountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_group_owner: cdktn.booleanToTerraform(struct!.addGroupOwner),
        destination_path: cdktn.stringToTerraform(struct!.destinationPath),
        permission: cdktn.stringToTerraform(struct!.permission),
        source_path: cdktn.stringToTerraform(struct!.sourcePath),
    }
}


export function ccComponentVersionLambdaVolumeMountPropertyToHclTerraform(struct?: CcComponentVersion.LambdaVolumeMountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_group_owner: {
            value: cdktn.booleanToHclTerraform(struct!.addGroupOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        destination_path: {
            value: cdktn.stringToHclTerraform(struct!.destinationPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission: {
            value: cdktn.stringToHclTerraform(struct!.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_path: {
            value: cdktn.stringToHclTerraform(struct!.sourcePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionLambdaContainerParamsPropertyToTerraform(struct?: CcComponentVersion.LambdaContainerParamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        devices: cdktn.listMapper(ccComponentVersionLambdaDeviceMountPropertyToTerraform, false)(struct!.devices),
        memory_size_in_kb: cdktn.numberToTerraform(struct!.memorySizeInKb),
        mount_ro_sysfs: cdktn.booleanToTerraform(struct!.mountRoSysfs),
        volumes: cdktn.listMapper(ccComponentVersionLambdaVolumeMountPropertyToTerraform, false)(struct!.volumes),
    }
}


export function ccComponentVersionLambdaContainerParamsPropertyToHclTerraform(struct?: CcComponentVersion.LambdaContainerParamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        devices: {
            value: cdktn.listMapperHcl(ccComponentVersionLambdaDeviceMountPropertyToHclTerraform, false)(struct!.devices),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaDeviceMountPropertyList",
        },
        memory_size_in_kb: {
            value: cdktn.numberToHclTerraform(struct!.memorySizeInKb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mount_ro_sysfs: {
            value: cdktn.booleanToHclTerraform(struct!.mountRoSysfs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        volumes: {
            value: cdktn.listMapperHcl(ccComponentVersionLambdaVolumeMountPropertyToHclTerraform, false)(struct!.volumes),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaVolumeMountPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionLambdaLinuxProcessParamsPropertyToTerraform(struct?: CcComponentVersion.LambdaLinuxProcessParamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_params: ccComponentVersionLambdaContainerParamsPropertyToTerraform(struct!.containerParams),
        isolation_mode: cdktn.stringToTerraform(struct!.isolationMode),
    }
}


export function ccComponentVersionLambdaLinuxProcessParamsPropertyToHclTerraform(struct?: CcComponentVersion.LambdaLinuxProcessParamsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_params: {
            value: ccComponentVersionLambdaContainerParamsPropertyToHclTerraform(struct!.containerParams),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaContainerParamsProperty",
        },
        isolation_mode: {
            value: cdktn.stringToHclTerraform(struct!.isolationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionLambdaExecutionParametersPropertyToTerraform(struct?: CcComponentVersion.LambdaExecutionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
        event_sources: cdktn.listMapper(ccComponentVersionLambdaEventSourcePropertyToTerraform, false)(struct!.eventSources),
        exec_args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.execArgs),
        input_payload_encoding_type: cdktn.stringToTerraform(struct!.inputPayloadEncodingType),
        linux_process_params: ccComponentVersionLambdaLinuxProcessParamsPropertyToTerraform(struct!.linuxProcessParams),
        max_idle_time_in_seconds: cdktn.numberToTerraform(struct!.maxIdleTimeInSeconds),
        max_instances_count: cdktn.numberToTerraform(struct!.maxInstancesCount),
        max_queue_size: cdktn.numberToTerraform(struct!.maxQueueSize),
        pinned: cdktn.booleanToTerraform(struct!.pinned),
        status_timeout_in_seconds: cdktn.numberToTerraform(struct!.statusTimeoutInSeconds),
        timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
    }
}


export function ccComponentVersionLambdaExecutionParametersPropertyToHclTerraform(struct?: CcComponentVersion.LambdaExecutionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        environment_variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        event_sources: {
            value: cdktn.listMapperHcl(ccComponentVersionLambdaEventSourcePropertyToHclTerraform, false)(struct!.eventSources),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaEventSourcePropertyList",
        },
        exec_args: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.execArgs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        input_payload_encoding_type: {
            value: cdktn.stringToHclTerraform(struct!.inputPayloadEncodingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        linux_process_params: {
            value: ccComponentVersionLambdaLinuxProcessParamsPropertyToHclTerraform(struct!.linuxProcessParams),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaLinuxProcessParamsProperty",
        },
        max_idle_time_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxIdleTimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_instances_count: {
            value: cdktn.numberToHclTerraform(struct!.maxInstancesCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_queue_size: {
            value: cdktn.numberToHclTerraform(struct!.maxQueueSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pinned: {
            value: cdktn.booleanToHclTerraform(struct!.pinned),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        status_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.statusTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComponentVersionComponentPlatformPropertyToTerraform(struct?: CcComponentVersion.ComponentPlatformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccComponentVersionComponentPlatformPropertyToHclTerraform(struct?: CcComponentVersion.ComponentPlatformProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
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


export function ccComponentVersionLambdaFunctionRecipeSourcePropertyToTerraform(struct?: CcComponentVersion.LambdaFunctionRecipeSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_dependencies: cdktn.hashMapper(ccComponentVersionComponentDependencyRequirementPropertyToTerraform)(struct!.componentDependencies),
        component_lambda_parameters: ccComponentVersionLambdaExecutionParametersPropertyToTerraform(struct!.componentLambdaParameters),
        component_name: cdktn.stringToTerraform(struct!.componentName),
        component_platforms: cdktn.listMapper(ccComponentVersionComponentPlatformPropertyToTerraform, false)(struct!.componentPlatforms),
        component_version: cdktn.stringToTerraform(struct!.componentVersion),
        lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    }
}


export function ccComponentVersionLambdaFunctionRecipeSourcePropertyToHclTerraform(struct?: CcComponentVersion.LambdaFunctionRecipeSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_dependencies: {
            value: cdktn.hashMapperHcl(ccComponentVersionComponentDependencyRequirementPropertyToHclTerraform)(struct!.componentDependencies),
            isBlock: true,
            type: "map",
            storageClassType: "ComponentDependencyRequirementPropertyMap",
        },
        component_lambda_parameters: {
            value: ccComponentVersionLambdaExecutionParametersPropertyToHclTerraform(struct!.componentLambdaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaExecutionParametersProperty",
        },
        component_name: {
            value: cdktn.stringToHclTerraform(struct!.componentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        component_platforms: {
            value: cdktn.listMapperHcl(ccComponentVersionComponentPlatformPropertyToHclTerraform, false)(struct!.componentPlatforms),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentPlatformPropertyList",
        },
        component_version: {
            value: cdktn.stringToHclTerraform(struct!.componentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcComponentVersion {
export interface ComponentDependencyRequirementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#dependency_type CcComponentVersion#dependency_type}
    */
    readonly dependencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#version_requirement CcComponentVersion#version_requirement}
    */
    readonly versionRequirement?: string;
}
export class ComponentDependencyRequirementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ComponentDependencyRequirementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dependencyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyType = this._dependencyType;
        }
        if (this._versionRequirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionRequirement = this._versionRequirement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentDependencyRequirementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dependencyType = undefined;
            this._versionRequirement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dependencyType = value.dependencyType;
            this._versionRequirement = value.versionRequirement;
        }
    }

    // dependency_type - computed: true, optional: true, required: false
    private _dependencyType?: string; 
    public get dependencyType() {
        return this.getStringAttribute('dependency_type');
    }
    public set dependencyType(value: string) {
        this._dependencyType = value;
    }
    public resetDependencyType() {
        this._dependencyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyTypeInput() {
        return this._dependencyType;
    }

    // version_requirement - computed: true, optional: true, required: false
    private _versionRequirement?: string; 
    public get versionRequirement() {
        return this.getStringAttribute('version_requirement');
    }
    public set versionRequirement(value: string) {
        this._versionRequirement = value;
    }
    public resetVersionRequirement() {
        this._versionRequirement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionRequirementInput() {
        return this._versionRequirement;
    }
}

export class ComponentDependencyRequirementPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ComponentDependencyRequirementProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ComponentDependencyRequirementPropertyOutputReference {
        return new ComponentDependencyRequirementPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface LambdaEventSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#topic CcComponentVersion#topic}
    */
    readonly topic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#type CcComponentVersion#type}
    */
    readonly type?: string;
}
export class LambdaEventSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaEventSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaEventSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._topic = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._topic = value.topic;
            this._type = value.type;
        }
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
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

export class LambdaEventSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaEventSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaEventSourcePropertyOutputReference {
        return new LambdaEventSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaDeviceMountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#add_group_owner CcComponentVersion#add_group_owner}
    */
    readonly addGroupOwner?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#path CcComponentVersion#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#permission CcComponentVersion#permission}
    */
    readonly permission?: string;
}
export class LambdaDeviceMountPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaDeviceMountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addGroupOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.addGroupOwner = this._addGroupOwner;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaDeviceMountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addGroupOwner = undefined;
            this._path = undefined;
            this._permission = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addGroupOwner = value.addGroupOwner;
            this._path = value.path;
            this._permission = value.permission;
        }
    }

    // add_group_owner - computed: true, optional: true, required: false
    private _addGroupOwner?: boolean | cdktn.IResolvable; 
    public get addGroupOwner() {
        return this.getBooleanAttribute('add_group_owner');
    }
    public set addGroupOwner(value: boolean | cdktn.IResolvable) {
        this._addGroupOwner = value;
    }
    public resetAddGroupOwner() {
        this._addGroupOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addGroupOwnerInput() {
        return this._addGroupOwner;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // permission - computed: true, optional: true, required: false
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    public resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }
}

export class LambdaDeviceMountPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaDeviceMountProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaDeviceMountPropertyOutputReference {
        return new LambdaDeviceMountPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaVolumeMountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#add_group_owner CcComponentVersion#add_group_owner}
    */
    readonly addGroupOwner?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#destination_path CcComponentVersion#destination_path}
    */
    readonly destinationPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#permission CcComponentVersion#permission}
    */
    readonly permission?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#source_path CcComponentVersion#source_path}
    */
    readonly sourcePath?: string;
}
export class LambdaVolumeMountPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaVolumeMountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addGroupOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.addGroupOwner = this._addGroupOwner;
        }
        if (this._destinationPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPath = this._destinationPath;
        }
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        if (this._sourcePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePath = this._sourcePath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaVolumeMountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addGroupOwner = undefined;
            this._destinationPath = undefined;
            this._permission = undefined;
            this._sourcePath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addGroupOwner = value.addGroupOwner;
            this._destinationPath = value.destinationPath;
            this._permission = value.permission;
            this._sourcePath = value.sourcePath;
        }
    }

    // add_group_owner - computed: true, optional: true, required: false
    private _addGroupOwner?: boolean | cdktn.IResolvable; 
    public get addGroupOwner() {
        return this.getBooleanAttribute('add_group_owner');
    }
    public set addGroupOwner(value: boolean | cdktn.IResolvable) {
        this._addGroupOwner = value;
    }
    public resetAddGroupOwner() {
        this._addGroupOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addGroupOwnerInput() {
        return this._addGroupOwner;
    }

    // destination_path - computed: true, optional: true, required: false
    private _destinationPath?: string; 
    public get destinationPath() {
        return this.getStringAttribute('destination_path');
    }
    public set destinationPath(value: string) {
        this._destinationPath = value;
    }
    public resetDestinationPath() {
        this._destinationPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPathInput() {
        return this._destinationPath;
    }

    // permission - computed: true, optional: true, required: false
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    public resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }

    // source_path - computed: true, optional: true, required: false
    private _sourcePath?: string; 
    public get sourcePath() {
        return this.getStringAttribute('source_path');
    }
    public set sourcePath(value: string) {
        this._sourcePath = value;
    }
    public resetSourcePath() {
        this._sourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePathInput() {
        return this._sourcePath;
    }
}

export class LambdaVolumeMountPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaVolumeMountProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaVolumeMountPropertyOutputReference {
        return new LambdaVolumeMountPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaContainerParamsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#devices CcComponentVersion#devices}
    */
    readonly devices?: LambdaDeviceMountProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#memory_size_in_kb CcComponentVersion#memory_size_in_kb}
    */
    readonly memorySizeInKb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs CcComponentVersion#mount_ro_sysfs}
    */
    readonly mountRoSysfs?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#volumes CcComponentVersion#volumes}
    */
    readonly volumes?: LambdaVolumeMountProperty[] | cdktn.IResolvable;
}
export class LambdaContainerParamsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaContainerParamsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._devices?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.devices = this._devices?.internalValue;
        }
        if (this._memorySizeInKb !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySizeInKb = this._memorySizeInKb;
        }
        if (this._mountRoSysfs !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountRoSysfs = this._mountRoSysfs;
        }
        if (this._volumes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumes = this._volumes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaContainerParamsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._devices.internalValue = undefined;
            this._memorySizeInKb = undefined;
            this._mountRoSysfs = undefined;
            this._volumes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._devices.internalValue = value.devices;
            this._memorySizeInKb = value.memorySizeInKb;
            this._mountRoSysfs = value.mountRoSysfs;
            this._volumes.internalValue = value.volumes;
        }
    }

    // devices - computed: true, optional: true, required: false
    private _devices = new LambdaDeviceMountPropertyList(this, "devices", false);
    public get devices() {
        return this._devices;
    }
    public putDevices(value: LambdaDeviceMountProperty[] | cdktn.IResolvable) {
        this._devices.internalValue = value;
    }
    public resetDevices() {
        this._devices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devicesInput() {
        return this._devices.internalValue;
    }

    // memory_size_in_kb - computed: true, optional: true, required: false
    private _memorySizeInKb?: number; 
    public get memorySizeInKb() {
        return this.getNumberAttribute('memory_size_in_kb');
    }
    public set memorySizeInKb(value: number) {
        this._memorySizeInKb = value;
    }
    public resetMemorySizeInKb() {
        this._memorySizeInKb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInKbInput() {
        return this._memorySizeInKb;
    }

    // mount_ro_sysfs - computed: true, optional: true, required: false
    private _mountRoSysfs?: boolean | cdktn.IResolvable; 
    public get mountRoSysfs() {
        return this.getBooleanAttribute('mount_ro_sysfs');
    }
    public set mountRoSysfs(value: boolean | cdktn.IResolvable) {
        this._mountRoSysfs = value;
    }
    public resetMountRoSysfs() {
        this._mountRoSysfs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountRoSysfsInput() {
        return this._mountRoSysfs;
    }

    // volumes - computed: true, optional: true, required: false
    private _volumes = new LambdaVolumeMountPropertyList(this, "volumes", false);
    public get volumes() {
        return this._volumes;
    }
    public putVolumes(value: LambdaVolumeMountProperty[] | cdktn.IResolvable) {
        this._volumes.internalValue = value;
    }
    public resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumesInput() {
        return this._volumes.internalValue;
    }
}
export interface LambdaLinuxProcessParamsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#container_params CcComponentVersion#container_params}
    */
    readonly containerParams?: LambdaContainerParamsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#isolation_mode CcComponentVersion#isolation_mode}
    */
    readonly isolationMode?: string;
}
export class LambdaLinuxProcessParamsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaLinuxProcessParamsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerParams?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerParams = this._containerParams?.internalValue;
        }
        if (this._isolationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.isolationMode = this._isolationMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaLinuxProcessParamsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerParams.internalValue = undefined;
            this._isolationMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerParams.internalValue = value.containerParams;
            this._isolationMode = value.isolationMode;
        }
    }

    // container_params - computed: true, optional: true, required: false
    private _containerParams = new LambdaContainerParamsPropertyOutputReference(this, "container_params");
    public get containerParams() {
        return this._containerParams;
    }
    public putContainerParams(value: LambdaContainerParamsProperty) {
        this._containerParams.internalValue = value;
    }
    public resetContainerParams() {
        this._containerParams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerParamsInput() {
        return this._containerParams.internalValue;
    }

    // isolation_mode - computed: true, optional: true, required: false
    private _isolationMode?: string; 
    public get isolationMode() {
        return this.getStringAttribute('isolation_mode');
    }
    public set isolationMode(value: string) {
        this._isolationMode = value;
    }
    public resetIsolationMode() {
        this._isolationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isolationModeInput() {
        return this._isolationMode;
    }
}
export interface LambdaExecutionParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#environment_variables CcComponentVersion#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#event_sources CcComponentVersion#event_sources}
    */
    readonly eventSources?: LambdaEventSourceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#exec_args CcComponentVersion#exec_args}
    */
    readonly execArgs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type CcComponentVersion#input_payload_encoding_type}
    */
    readonly inputPayloadEncodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#linux_process_params CcComponentVersion#linux_process_params}
    */
    readonly linuxProcessParams?: LambdaLinuxProcessParamsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds CcComponentVersion#max_idle_time_in_seconds}
    */
    readonly maxIdleTimeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#max_instances_count CcComponentVersion#max_instances_count}
    */
    readonly maxInstancesCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#max_queue_size CcComponentVersion#max_queue_size}
    */
    readonly maxQueueSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#pinned CcComponentVersion#pinned}
    */
    readonly pinned?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds CcComponentVersion#status_timeout_in_seconds}
    */
    readonly statusTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#timeout_in_seconds CcComponentVersion#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export class LambdaExecutionParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaExecutionParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._environmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._eventSources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventSources = this._eventSources?.internalValue;
        }
        if (this._execArgs !== undefined) {
            hasAnyValues = true;
            internalValueResult.execArgs = this._execArgs;
        }
        if (this._inputPayloadEncodingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputPayloadEncodingType = this._inputPayloadEncodingType;
        }
        if (this._linuxProcessParams?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linuxProcessParams = this._linuxProcessParams?.internalValue;
        }
        if (this._maxIdleTimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxIdleTimeInSeconds = this._maxIdleTimeInSeconds;
        }
        if (this._maxInstancesCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxInstancesCount = this._maxInstancesCount;
        }
        if (this._maxQueueSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxQueueSize = this._maxQueueSize;
        }
        if (this._pinned !== undefined) {
            hasAnyValues = true;
            internalValueResult.pinned = this._pinned;
        }
        if (this._statusTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusTimeoutInSeconds = this._statusTimeoutInSeconds;
        }
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaExecutionParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environmentVariables = undefined;
            this._eventSources.internalValue = undefined;
            this._execArgs = undefined;
            this._inputPayloadEncodingType = undefined;
            this._linuxProcessParams.internalValue = undefined;
            this._maxIdleTimeInSeconds = undefined;
            this._maxInstancesCount = undefined;
            this._maxQueueSize = undefined;
            this._pinned = undefined;
            this._statusTimeoutInSeconds = undefined;
            this._timeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environmentVariables = value.environmentVariables;
            this._eventSources.internalValue = value.eventSources;
            this._execArgs = value.execArgs;
            this._inputPayloadEncodingType = value.inputPayloadEncodingType;
            this._linuxProcessParams.internalValue = value.linuxProcessParams;
            this._maxIdleTimeInSeconds = value.maxIdleTimeInSeconds;
            this._maxInstancesCount = value.maxInstancesCount;
            this._maxQueueSize = value.maxQueueSize;
            this._pinned = value.pinned;
            this._statusTimeoutInSeconds = value.statusTimeoutInSeconds;
            this._timeoutInSeconds = value.timeoutInSeconds;
        }
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // event_sources - computed: true, optional: true, required: false
    private _eventSources = new LambdaEventSourcePropertyList(this, "event_sources", false);
    public get eventSources() {
        return this._eventSources;
    }
    public putEventSources(value: LambdaEventSourceProperty[] | cdktn.IResolvable) {
        this._eventSources.internalValue = value;
    }
    public resetEventSources() {
        this._eventSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourcesInput() {
        return this._eventSources.internalValue;
    }

    // exec_args - computed: true, optional: true, required: false
    private _execArgs?: string[]; 
    public get execArgs() {
        return this.getListAttribute('exec_args');
    }
    public set execArgs(value: string[]) {
        this._execArgs = value;
    }
    public resetExecArgs() {
        this._execArgs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get execArgsInput() {
        return this._execArgs;
    }

    // input_payload_encoding_type - computed: true, optional: true, required: false
    private _inputPayloadEncodingType?: string; 
    public get inputPayloadEncodingType() {
        return this.getStringAttribute('input_payload_encoding_type');
    }
    public set inputPayloadEncodingType(value: string) {
        this._inputPayloadEncodingType = value;
    }
    public resetInputPayloadEncodingType() {
        this._inputPayloadEncodingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPayloadEncodingTypeInput() {
        return this._inputPayloadEncodingType;
    }

    // linux_process_params - computed: true, optional: true, required: false
    private _linuxProcessParams = new LambdaLinuxProcessParamsPropertyOutputReference(this, "linux_process_params");
    public get linuxProcessParams() {
        return this._linuxProcessParams;
    }
    public putLinuxProcessParams(value: LambdaLinuxProcessParamsProperty) {
        this._linuxProcessParams.internalValue = value;
    }
    public resetLinuxProcessParams() {
        this._linuxProcessParams.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linuxProcessParamsInput() {
        return this._linuxProcessParams.internalValue;
    }

    // max_idle_time_in_seconds - computed: true, optional: true, required: false
    private _maxIdleTimeInSeconds?: number; 
    public get maxIdleTimeInSeconds() {
        return this.getNumberAttribute('max_idle_time_in_seconds');
    }
    public set maxIdleTimeInSeconds(value: number) {
        this._maxIdleTimeInSeconds = value;
    }
    public resetMaxIdleTimeInSeconds() {
        this._maxIdleTimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxIdleTimeInSecondsInput() {
        return this._maxIdleTimeInSeconds;
    }

    // max_instances_count - computed: true, optional: true, required: false
    private _maxInstancesCount?: number; 
    public get maxInstancesCount() {
        return this.getNumberAttribute('max_instances_count');
    }
    public set maxInstancesCount(value: number) {
        this._maxInstancesCount = value;
    }
    public resetMaxInstancesCount() {
        this._maxInstancesCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstancesCountInput() {
        return this._maxInstancesCount;
    }

    // max_queue_size - computed: true, optional: true, required: false
    private _maxQueueSize?: number; 
    public get maxQueueSize() {
        return this.getNumberAttribute('max_queue_size');
    }
    public set maxQueueSize(value: number) {
        this._maxQueueSize = value;
    }
    public resetMaxQueueSize() {
        this._maxQueueSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxQueueSizeInput() {
        return this._maxQueueSize;
    }

    // pinned - computed: true, optional: true, required: false
    private _pinned?: boolean | cdktn.IResolvable; 
    public get pinned() {
        return this.getBooleanAttribute('pinned');
    }
    public set pinned(value: boolean | cdktn.IResolvable) {
        this._pinned = value;
    }
    public resetPinned() {
        this._pinned = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pinnedInput() {
        return this._pinned;
    }

    // status_timeout_in_seconds - computed: true, optional: true, required: false
    private _statusTimeoutInSeconds?: number; 
    public get statusTimeoutInSeconds() {
        return this.getNumberAttribute('status_timeout_in_seconds');
    }
    public set statusTimeoutInSeconds(value: number) {
        this._statusTimeoutInSeconds = value;
    }
    public resetStatusTimeoutInSeconds() {
        this._statusTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusTimeoutInSecondsInput() {
        return this._statusTimeoutInSeconds;
    }

    // timeout_in_seconds - computed: true, optional: true, required: false
    private _timeoutInSeconds?: number; 
    public get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number) {
        this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }
}
export interface ComponentPlatformProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#attributes CcComponentVersion#attributes}
    */
    readonly attributes?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#name CcComponentVersion#name}
    */
    readonly name?: string;
}
export class ComponentPlatformPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentPlatformProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentPlatformProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes = value.attributes;
            this._name = value.name;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes?: { [key: string]: string }; 
    public get attributes() {
        return this.getStringMapAttribute('attributes');
    }
    public set attributes(value: { [key: string]: string }) {
        this._attributes = value;
    }
    public resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes;
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

export class ComponentPlatformPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentPlatformProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentPlatformPropertyOutputReference {
        return new ComponentPlatformPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LambdaFunctionRecipeSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#component_dependencies CcComponentVersion#component_dependencies}
    */
    readonly componentDependencies?: { [key: string]: ComponentDependencyRequirementProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#component_lambda_parameters CcComponentVersion#component_lambda_parameters}
    */
    readonly componentLambdaParameters?: LambdaExecutionParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#component_name CcComponentVersion#component_name}
    */
    readonly componentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#component_platforms CcComponentVersion#component_platforms}
    */
    readonly componentPlatforms?: ComponentPlatformProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#component_version CcComponentVersion#component_version}
    */
    readonly componentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_component_version#lambda_arn CcComponentVersion#lambda_arn}
    */
    readonly lambdaArn?: string;
}
export class LambdaFunctionRecipeSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaFunctionRecipeSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentDependencies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentDependencies = this._componentDependencies?.internalValue;
        }
        if (this._componentLambdaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentLambdaParameters = this._componentLambdaParameters?.internalValue;
        }
        if (this._componentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentName = this._componentName;
        }
        if (this._componentPlatforms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentPlatforms = this._componentPlatforms?.internalValue;
        }
        if (this._componentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentVersion = this._componentVersion;
        }
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaFunctionRecipeSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentDependencies.internalValue = undefined;
            this._componentLambdaParameters.internalValue = undefined;
            this._componentName = undefined;
            this._componentPlatforms.internalValue = undefined;
            this._componentVersion = undefined;
            this._lambdaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentDependencies.internalValue = value.componentDependencies;
            this._componentLambdaParameters.internalValue = value.componentLambdaParameters;
            this._componentName = value.componentName;
            this._componentPlatforms.internalValue = value.componentPlatforms;
            this._componentVersion = value.componentVersion;
            this._lambdaArn = value.lambdaArn;
        }
    }

    // component_dependencies - computed: true, optional: true, required: false
    private _componentDependencies = new ComponentDependencyRequirementPropertyMap(this, "component_dependencies");
    public get componentDependencies() {
        return this._componentDependencies;
    }
    public putComponentDependencies(value: { [key: string]: ComponentDependencyRequirementProperty } | cdktn.IResolvable) {
        this._componentDependencies.internalValue = value;
    }
    public resetComponentDependencies() {
        this._componentDependencies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentDependenciesInput() {
        return this._componentDependencies.internalValue;
    }

    // component_lambda_parameters - computed: true, optional: true, required: false
    private _componentLambdaParameters = new LambdaExecutionParametersPropertyOutputReference(this, "component_lambda_parameters");
    public get componentLambdaParameters() {
        return this._componentLambdaParameters;
    }
    public putComponentLambdaParameters(value: LambdaExecutionParametersProperty) {
        this._componentLambdaParameters.internalValue = value;
    }
    public resetComponentLambdaParameters() {
        this._componentLambdaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentLambdaParametersInput() {
        return this._componentLambdaParameters.internalValue;
    }

    // component_name - computed: true, optional: true, required: false
    private _componentName?: string; 
    public get componentName() {
        return this.getStringAttribute('component_name');
    }
    public set componentName(value: string) {
        this._componentName = value;
    }
    public resetComponentName() {
        this._componentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentNameInput() {
        return this._componentName;
    }

    // component_platforms - computed: true, optional: true, required: false
    private _componentPlatforms = new ComponentPlatformPropertyList(this, "component_platforms", false);
    public get componentPlatforms() {
        return this._componentPlatforms;
    }
    public putComponentPlatforms(value: ComponentPlatformProperty[] | cdktn.IResolvable) {
        this._componentPlatforms.internalValue = value;
    }
    public resetComponentPlatforms() {
        this._componentPlatforms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentPlatformsInput() {
        return this._componentPlatforms.internalValue;
    }

    // component_version - computed: true, optional: true, required: false
    private _componentVersion?: string; 
    public get componentVersion() {
        return this.getStringAttribute('component_version');
    }
    public set componentVersion(value: string) {
        this._componentVersion = value;
    }
    public resetComponentVersion() {
        this._componentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentVersionInput() {
        return this._componentVersion;
    }

    // lambda_arn - computed: true, optional: true, required: false
    private _lambdaArn?: string; 
    public get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    public set lambdaArn(value: string) {
        this._lambdaArn = value;
    }
    public resetLambdaArn() {
        this._lambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaArnInput() {
        return this._lambdaArn;
    }
}
}
