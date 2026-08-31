// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLambdaHookProps extends cdktn.TerraformMetaArguments {
    /**
    * The typename alias for the hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#alias CcLambdaHook#alias}
    */
    readonly alias: string;
    /**
    * Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#auto_update CcLambdaHook#auto_update}
    */
    readonly autoUpdate?: boolean | cdktn.IResolvable;
    /**
    * The execution role ARN assumed by Hooks to invoke Lambda.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#execution_role CcLambdaHook#execution_role}
    */
    readonly executionRole: string;
    /**
    * Attribute to specify CloudFormation behavior on hook failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#failure_mode CcLambdaHook#failure_mode}
    */
    readonly failureMode: string;
    /**
    * Attribute to specify which stacks this hook applies to or should get invoked for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#hook_status CcLambdaHook#hook_status}
    */
    readonly hookStatus?: string;
    /**
    * Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#lambda_function CcLambdaHook#lambda_function}
    */
    readonly lambdaFunction: string;
    /**
    * Contains logging configuration information for the hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#logging_config CcLambdaHook#logging_config}
    */
    readonly loggingConfig?: CcLambdaHook.LoggingConfigProperty;
    /**
    * Filters to allow hooks to target specific stack attributes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#stack_filters CcLambdaHook#stack_filters}
    */
    readonly stackFilters?: CcLambdaHook.StackFiltersProperty;
    /**
    * Attribute to specify which targets should invoke the hook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#target_filters CcLambdaHook#target_filters}
    */
    readonly targetFilters?: CcLambdaHook.TargetFiltersProperty;
    /**
    * Which operations should this Hook run against? Resource changes, stacks or change sets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#target_operations CcLambdaHook#target_operations}
    */
    readonly targetOperations: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}
*/
export class CcLambdaHook extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_lambda_hook";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLambdaHook resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLambdaHook to import
    * @param importFromId The id of the existing CcLambdaHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLambdaHook to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_lambda_hook", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLambdaHookProps
    */
    public constructor(scope: Construct, id: string, config: CcLambdaHookProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_lambda_hook',
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
        this._alias = config.alias;
        this._autoUpdate = config.autoUpdate;
        this._executionRole = config.executionRole;
        this._failureMode = config.failureMode;
        this._hookStatus = config.hookStatus;
        this._lambdaFunction = config.lambdaFunction;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._stackFilters.internalValue = config.stackFilters;
        this._targetFilters.internalValue = config.targetFilters;
        this._targetOperations = config.targetOperations;
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

    // auto_update - computed: true, optional: true, required: false
    private _autoUpdate?: boolean | cdktn.IResolvable; 
    public get autoUpdate() {
        return this.getBooleanAttribute('auto_update');
    }
    public set autoUpdate(value: boolean | cdktn.IResolvable) {
        this._autoUpdate = value;
    }
    public resetAutoUpdate() {
        this._autoUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoUpdateInput() {
        return this._autoUpdate;
    }

    // execution_role - computed: false, optional: false, required: true
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // failure_mode - computed: false, optional: false, required: true
    private _failureMode?: string; 
    public get failureMode() {
        return this.getStringAttribute('failure_mode');
    }
    public set failureMode(value: string) {
        this._failureMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get failureModeInput() {
        return this._failureMode;
    }

    // hook_arn - computed: true, optional: false, required: false
    public get hookArn() {
        return this.getStringAttribute('hook_arn');
    }

    // hook_status - computed: true, optional: true, required: false
    private _hookStatus?: string; 
    public get hookStatus() {
        return this.getStringAttribute('hook_status');
    }
    public set hookStatus(value: string) {
        this._hookStatus = value;
    }
    public resetHookStatus() {
        this._hookStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hookStatusInput() {
        return this._hookStatus;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lambda_function - computed: false, optional: false, required: true
    private _lambdaFunction?: string; 
    public get lambdaFunction() {
        return this.getStringAttribute('lambda_function');
    }
    public set lambdaFunction(value: string) {
        this._lambdaFunction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionInput() {
        return this._lambdaFunction;
    }

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CcLambdaHook.LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CcLambdaHook.LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }

    // stack_filters - computed: true, optional: true, required: false
    private _stackFilters = new CcLambdaHook.StackFiltersPropertyOutputReference(this, "stack_filters");
    public get stackFilters() {
        return this._stackFilters;
    }
    public putStackFilters(value: CcLambdaHook.StackFiltersProperty) {
        this._stackFilters.internalValue = value;
    }
    public resetStackFilters() {
        this._stackFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackFiltersInput() {
        return this._stackFilters.internalValue;
    }

    // target_filters - computed: true, optional: true, required: false
    private _targetFilters = new CcLambdaHook.TargetFiltersPropertyOutputReference(this, "target_filters");
    public get targetFilters() {
        return this._targetFilters;
    }
    public putTargetFilters(value: CcLambdaHook.TargetFiltersProperty) {
        this._targetFilters.internalValue = value;
    }
    public resetTargetFilters() {
        this._targetFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetFiltersInput() {
        return this._targetFilters.internalValue;
    }

    // target_operations - computed: false, optional: false, required: true
    private _targetOperations?: string[]; 
    public get targetOperations() {
        return this.getListAttribute('target_operations');
    }
    public set targetOperations(value: string[]) {
        this._targetOperations = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetOperationsInput() {
        return this._targetOperations;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias: cdktn.stringToTerraform(this._alias),
            auto_update: cdktn.booleanToTerraform(this._autoUpdate),
            execution_role: cdktn.stringToTerraform(this._executionRole),
            failure_mode: cdktn.stringToTerraform(this._failureMode),
            hook_status: cdktn.stringToTerraform(this._hookStatus),
            lambda_function: cdktn.stringToTerraform(this._lambdaFunction),
            logging_config: ccLambdaHookLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
            stack_filters: ccLambdaHookStackFiltersPropertyToTerraform(this._stackFilters.internalValue),
            target_filters: ccLambdaHookTargetFiltersPropertyToTerraform(this._targetFilters.internalValue),
            target_operations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetOperations),
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
            auto_update: {
                value: cdktn.booleanToHclTerraform(this._autoUpdate),
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
            failure_mode: {
                value: cdktn.stringToHclTerraform(this._failureMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hook_status: {
                value: cdktn.stringToHclTerraform(this._hookStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_function: {
                value: cdktn.stringToHclTerraform(this._lambdaFunction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_config: {
                value: ccLambdaHookLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLambdaHook.LoggingConfigProperty",
            },
            stack_filters: {
                value: ccLambdaHookStackFiltersPropertyToHclTerraform(this._stackFilters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLambdaHook.StackFiltersProperty",
            },
            target_filters: {
                value: ccLambdaHookTargetFiltersPropertyToHclTerraform(this._targetFilters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLambdaHook.TargetFiltersProperty",
            },
            target_operations: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetOperations),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLambdaHookLoggingConfigPropertyToTerraform(struct?: CcLambdaHook.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_role_arn: cdktn.stringToTerraform(struct!.logRoleArn),
    }
}


export function ccLambdaHookLoggingConfigPropertyToHclTerraform(struct?: CcLambdaHook.LoggingConfigProperty | cdktn.IResolvable): any {
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
        log_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.logRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLambdaHookStackNamesPropertyToTerraform(struct?: CcLambdaHook.StackNamesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccLambdaHookStackNamesPropertyToHclTerraform(struct?: CcLambdaHook.StackNamesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        include: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLambdaHookStackRolesPropertyToTerraform(struct?: CcLambdaHook.StackRolesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccLambdaHookStackRolesPropertyToHclTerraform(struct?: CcLambdaHook.StackRolesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        include: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLambdaHookStackFiltersPropertyToTerraform(struct?: CcLambdaHook.StackFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filtering_criteria: cdktn.stringToTerraform(struct!.filteringCriteria),
        stack_names: ccLambdaHookStackNamesPropertyToTerraform(struct!.stackNames),
        stack_roles: ccLambdaHookStackRolesPropertyToTerraform(struct!.stackRoles),
    }
}


export function ccLambdaHookStackFiltersPropertyToHclTerraform(struct?: CcLambdaHook.StackFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filtering_criteria: {
            value: cdktn.stringToHclTerraform(struct!.filteringCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stack_names: {
            value: ccLambdaHookStackNamesPropertyToHclTerraform(struct!.stackNames),
            isBlock: true,
            type: "struct",
            storageClassType: "StackNamesProperty",
        },
        stack_roles: {
            value: ccLambdaHookStackRolesPropertyToHclTerraform(struct!.stackRoles),
            isBlock: true,
            type: "struct",
            storageClassType: "StackRolesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLambdaHookHookTargetPropertyToTerraform(struct?: CcLambdaHook.HookTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        invocation_point: cdktn.stringToTerraform(struct!.invocationPoint),
        target_name: cdktn.stringToTerraform(struct!.targetName),
    }
}


export function ccLambdaHookHookTargetPropertyToHclTerraform(struct?: CcLambdaHook.HookTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invocation_point: {
            value: cdktn.stringToHclTerraform(struct!.invocationPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_name: {
            value: cdktn.stringToHclTerraform(struct!.targetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLambdaHookTargetFiltersPropertyToTerraform(struct?: CcLambdaHook.TargetFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        invocation_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invocationPoints),
        target_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetNames),
        targets: cdktn.listMapper(ccLambdaHookHookTargetPropertyToTerraform, false)(struct!.targets),
    }
}


export function ccLambdaHookTargetFiltersPropertyToHclTerraform(struct?: CcLambdaHook.TargetFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        invocation_points: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.invocationPoints),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        target_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetNames),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        targets: {
            value: cdktn.listMapperHcl(ccLambdaHookHookTargetPropertyToHclTerraform, false)(struct!.targets),
            isBlock: true,
            type: "list",
            storageClassType: "HookTargetPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLambdaHook {
export interface LoggingConfigProperty {
    /**
    * The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#log_group_name CcLambdaHook#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#log_role_arn CcLambdaHook#log_role_arn}
    */
    readonly logRoleArn?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logRoleArn = this._logRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupName = undefined;
            this._logRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupName = value.logGroupName;
            this._logRoleArn = value.logRoleArn;
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

    // log_role_arn - computed: true, optional: true, required: false
    private _logRoleArn?: string; 
    public get logRoleArn() {
        return this.getStringAttribute('log_role_arn');
    }
    public set logRoleArn(value: string) {
        this._logRoleArn = value;
    }
    public resetLogRoleArn() {
        this._logRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logRoleArnInput() {
        return this._logRoleArn;
    }
}
export interface StackNamesProperty {
    /**
    * List of stack names that the hook is going to be excluded from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#exclude CcLambdaHook#exclude}
    */
    readonly exclude?: string[];
    /**
    * List of stack names that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#include CcLambdaHook#include}
    */
    readonly include?: string[];
}
export class StackNamesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StackNamesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StackNamesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclude = undefined;
            this._include = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude = value.exclude;
            this._include = value.include;
        }
    }

    // exclude - computed: true, optional: true, required: false
    private _exclude?: string[]; 
    public get exclude() {
        return cdktn.Fn.tolist(this.getListAttribute('exclude'));
    }
    public set exclude(value: string[]) {
        this._exclude = value;
    }
    public resetExclude() {
        this._exclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeInput() {
        return this._exclude;
    }

    // include - computed: true, optional: true, required: false
    private _include?: string[]; 
    public get include() {
        return cdktn.Fn.tolist(this.getListAttribute('include'));
    }
    public set include(value: string[]) {
        this._include = value;
    }
    public resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include;
    }
}
export interface StackRolesProperty {
    /**
    * List of stack roles that the hook is going to be excluded from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#exclude CcLambdaHook#exclude}
    */
    readonly exclude?: string[];
    /**
    * List of stack roles that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#include CcLambdaHook#include}
    */
    readonly include?: string[];
}
export class StackRolesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StackRolesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclude !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclude = this._exclude;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StackRolesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclude = undefined;
            this._include = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclude = value.exclude;
            this._include = value.include;
        }
    }

    // exclude - computed: true, optional: true, required: false
    private _exclude?: string[]; 
    public get exclude() {
        return cdktn.Fn.tolist(this.getListAttribute('exclude'));
    }
    public set exclude(value: string[]) {
        this._exclude = value;
    }
    public resetExclude() {
        this._exclude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeInput() {
        return this._exclude;
    }

    // include - computed: true, optional: true, required: false
    private _include?: string[]; 
    public get include() {
        return cdktn.Fn.tolist(this.getListAttribute('include'));
    }
    public set include(value: string[]) {
        this._include = value;
    }
    public resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include;
    }
}
export interface StackFiltersProperty {
    /**
    * Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CcLambdaHook#filtering_criteria}
    */
    readonly filteringCriteria?: string;
    /**
    * List of stack names as filters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#stack_names CcLambdaHook#stack_names}
    */
    readonly stackNames?: StackNamesProperty;
    /**
    * List of stack roles that are performing the stack operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#stack_roles CcLambdaHook#stack_roles}
    */
    readonly stackRoles?: StackRolesProperty;
}
export class StackFiltersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StackFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filteringCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.filteringCriteria = this._filteringCriteria;
        }
        if (this._stackNames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackNames = this._stackNames?.internalValue;
        }
        if (this._stackRoles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackRoles = this._stackRoles?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StackFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filteringCriteria = undefined;
            this._stackNames.internalValue = undefined;
            this._stackRoles.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filteringCriteria = value.filteringCriteria;
            this._stackNames.internalValue = value.stackNames;
            this._stackRoles.internalValue = value.stackRoles;
        }
    }

    // filtering_criteria - computed: true, optional: true, required: false
    private _filteringCriteria?: string; 
    public get filteringCriteria() {
        return this.getStringAttribute('filtering_criteria');
    }
    public set filteringCriteria(value: string) {
        this._filteringCriteria = value;
    }
    public resetFilteringCriteria() {
        this._filteringCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filteringCriteriaInput() {
        return this._filteringCriteria;
    }

    // stack_names - computed: true, optional: true, required: false
    private _stackNames = new StackNamesPropertyOutputReference(this, "stack_names");
    public get stackNames() {
        return this._stackNames;
    }
    public putStackNames(value: StackNamesProperty) {
        this._stackNames.internalValue = value;
    }
    public resetStackNames() {
        this._stackNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNamesInput() {
        return this._stackNames.internalValue;
    }

    // stack_roles - computed: true, optional: true, required: false
    private _stackRoles = new StackRolesPropertyOutputReference(this, "stack_roles");
    public get stackRoles() {
        return this._stackRoles;
    }
    public putStackRoles(value: StackRolesProperty) {
        this._stackRoles.internalValue = value;
    }
    public resetStackRoles() {
        this._stackRoles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackRolesInput() {
        return this._stackRoles.internalValue;
    }
}
export interface HookTargetProperty {
    /**
    * Target actions are the type of operation hooks will be executed at.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#action CcLambdaHook#action}
    */
    readonly action?: string;
    /**
    * Invocation points are the point in provisioning workflow where hooks will be executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#invocation_point CcLambdaHook#invocation_point}
    */
    readonly invocationPoint?: string;
    /**
    * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#target_name CcLambdaHook#target_name}
    */
    readonly targetName?: string;
}
export class HookTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HookTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._invocationPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationPoint = this._invocationPoint;
        }
        if (this._targetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetName = this._targetName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HookTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._invocationPoint = undefined;
            this._targetName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._invocationPoint = value.invocationPoint;
            this._targetName = value.targetName;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // invocation_point - computed: true, optional: true, required: false
    private _invocationPoint?: string; 
    public get invocationPoint() {
        return this.getStringAttribute('invocation_point');
    }
    public set invocationPoint(value: string) {
        this._invocationPoint = value;
    }
    public resetInvocationPoint() {
        this._invocationPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationPointInput() {
        return this._invocationPoint;
    }

    // target_name - computed: true, optional: true, required: false
    private _targetName?: string; 
    public get targetName() {
        return this.getStringAttribute('target_name');
    }
    public set targetName(value: string) {
        this._targetName = value;
    }
    public resetTargetName() {
        this._targetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNameInput() {
        return this._targetName;
    }
}

export class HookTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : HookTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): HookTargetPropertyOutputReference {
        return new HookTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetFiltersProperty {
    /**
    * List of actions that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#actions CcLambdaHook#actions}
    */
    readonly actions?: string[];
    /**
    * List of invocation points that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#invocation_points CcLambdaHook#invocation_points}
    */
    readonly invocationPoints?: string[];
    /**
    * List of type names that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#target_names CcLambdaHook#target_names}
    */
    readonly targetNames?: string[];
    /**
    * List of hook targets
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_lambda_hook#targets CcLambdaHook#targets}
    */
    readonly targets?: HookTargetProperty[] | cdktn.IResolvable;
}
export class TargetFiltersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._invocationPoints !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationPoints = this._invocationPoints;
        }
        if (this._targetNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetNames = this._targetNames;
        }
        if (this._targets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._invocationPoints = undefined;
            this._targetNames = undefined;
            this._targets.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._invocationPoints = value.invocationPoints;
            this._targetNames = value.targetNames;
            this._targets.internalValue = value.targets;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return cdktn.Fn.tolist(this.getListAttribute('actions'));
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // invocation_points - computed: true, optional: true, required: false
    private _invocationPoints?: string[]; 
    public get invocationPoints() {
        return cdktn.Fn.tolist(this.getListAttribute('invocation_points'));
    }
    public set invocationPoints(value: string[]) {
        this._invocationPoints = value;
    }
    public resetInvocationPoints() {
        this._invocationPoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationPointsInput() {
        return this._invocationPoints;
    }

    // target_names - computed: true, optional: true, required: false
    private _targetNames?: string[]; 
    public get targetNames() {
        return cdktn.Fn.tolist(this.getListAttribute('target_names'));
    }
    public set targetNames(value: string[]) {
        this._targetNames = value;
    }
    public resetTargetNames() {
        this._targetNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNamesInput() {
        return this._targetNames;
    }

    // targets - computed: true, optional: true, required: false
    private _targets = new HookTargetPropertyList(this, "targets", false);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: HookTargetProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    public resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }
}
}
