// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGuardHookProps extends cdktn.TerraformMetaArguments {
    /**
    * The typename alias for the hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#alias CcGuardHook#alias}
    */
    readonly alias: string;
    /**
    * The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#execution_role CcGuardHook#execution_role}
    */
    readonly executionRole: string;
    /**
    * Attribute to specify CloudFormation behavior on hook failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#failure_mode CcGuardHook#failure_mode}
    */
    readonly failureMode?: string;
    /**
    * Attribute to specify which stacks this hook applies to or should get invoked for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#hook_status CcGuardHook#hook_status}
    */
    readonly hookStatus?: string;
    /**
    * S3 Bucket where the guard validate report will be uploaded to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#log_bucket CcGuardHook#log_bucket}
    */
    readonly logBucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CcGuardHook#options}
    */
    readonly options?: CcGuardHook.OptionsProperty;
    /**
    * S3 Source Location for the Guard files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#rule_location CcGuardHook#rule_location}
    */
    readonly ruleLocation: CcGuardHook.S3LocationProperty;
    /**
    * Filters to allow hooks to target specific stack attributes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_filters CcGuardHook#stack_filters}
    */
    readonly stackFilters?: CcGuardHook.StackFiltersProperty;
    /**
    * Attribute to specify which targets should invoke the hook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_filters CcGuardHook#target_filters}
    */
    readonly targetFilters?: CcGuardHook.TargetFiltersProperty;
    /**
    * Which operations should this Hook run against? Resource changes, stacks or change sets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_operations CcGuardHook#target_operations}
    */
    readonly targetOperations: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}
*/
export class CcGuardHook extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_guard_hook";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGuardHook resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGuardHook to import
    * @param importFromId The id of the existing CcGuardHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGuardHook to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_guard_hook", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGuardHookProps
    */
    public constructor(scope: Construct, id: string, config: CcGuardHookProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_guard_hook',
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
        this._executionRole = config.executionRole;
        this._failureMode = config.failureMode;
        this._hookStatus = config.hookStatus;
        this._logBucket = config.logBucket;
        this._options.internalValue = config.options;
        this._ruleLocation.internalValue = config.ruleLocation;
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

    // failure_mode - computed: true, optional: true, required: false
    private _failureMode?: string; 
    public get failureMode() {
        return this.getStringAttribute('failure_mode');
    }
    public set failureMode(value: string) {
        this._failureMode = value;
    }
    public resetFailureMode() {
        this._failureMode = undefined;
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

    // log_bucket - computed: true, optional: true, required: false
    private _logBucket?: string; 
    public get logBucket() {
        return this.getStringAttribute('log_bucket');
    }
    public set logBucket(value: string) {
        this._logBucket = value;
    }
    public resetLogBucket() {
        this._logBucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logBucketInput() {
        return this._logBucket;
    }

    // options - computed: true, optional: true, required: false
    private _options = new CcGuardHook.OptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcGuardHook.OptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // rule_location - computed: false, optional: false, required: true
    private _ruleLocation = new CcGuardHook.S3LocationPropertyOutputReference(this, "rule_location");
    public get ruleLocation() {
        return this._ruleLocation;
    }
    public putRuleLocation(value: CcGuardHook.S3LocationProperty) {
        this._ruleLocation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleLocationInput() {
        return this._ruleLocation.internalValue;
    }

    // stack_filters - computed: true, optional: true, required: false
    private _stackFilters = new CcGuardHook.StackFiltersPropertyOutputReference(this, "stack_filters");
    public get stackFilters() {
        return this._stackFilters;
    }
    public putStackFilters(value: CcGuardHook.StackFiltersProperty) {
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
    private _targetFilters = new CcGuardHook.TargetFiltersPropertyOutputReference(this, "target_filters");
    public get targetFilters() {
        return this._targetFilters;
    }
    public putTargetFilters(value: CcGuardHook.TargetFiltersProperty) {
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
            execution_role: cdktn.stringToTerraform(this._executionRole),
            failure_mode: cdktn.stringToTerraform(this._failureMode),
            hook_status: cdktn.stringToTerraform(this._hookStatus),
            log_bucket: cdktn.stringToTerraform(this._logBucket),
            options: ccGuardHookOptionsPropertyToTerraform(this._options.internalValue),
            rule_location: ccGuardHookS3LocationPropertyToTerraform(this._ruleLocation.internalValue),
            stack_filters: ccGuardHookStackFiltersPropertyToTerraform(this._stackFilters.internalValue),
            target_filters: ccGuardHookTargetFiltersPropertyToTerraform(this._targetFilters.internalValue),
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
            log_bucket: {
                value: cdktn.stringToHclTerraform(this._logBucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: ccGuardHookOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardHook.OptionsProperty",
            },
            rule_location: {
                value: ccGuardHookS3LocationPropertyToHclTerraform(this._ruleLocation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardHook.S3LocationProperty",
            },
            stack_filters: {
                value: ccGuardHookStackFiltersPropertyToHclTerraform(this._stackFilters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardHook.StackFiltersProperty",
            },
            target_filters: {
                value: ccGuardHookTargetFiltersPropertyToHclTerraform(this._targetFilters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGuardHook.TargetFiltersProperty",
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

export function ccGuardHookOptionsPropertyToTerraform(struct?: CcGuardHook.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_params: cdktn.stringToTerraform(struct!.inputParams),
    }
}


export function ccGuardHookOptionsPropertyToHclTerraform(struct?: CcGuardHook.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_params: {
            value: cdktn.stringToHclTerraform(struct!.inputParams),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardHookS3LocationPropertyToTerraform(struct?: CcGuardHook.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uri: cdktn.stringToTerraform(struct!.uri),
        version_id: cdktn.stringToTerraform(struct!.versionId),
    }
}


export function ccGuardHookS3LocationPropertyToHclTerraform(struct?: CcGuardHook.S3LocationProperty | cdktn.IResolvable): any {
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
        version_id: {
            value: cdktn.stringToHclTerraform(struct!.versionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardHookStackNamesPropertyToTerraform(struct?: CcGuardHook.StackNamesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccGuardHookStackNamesPropertyToHclTerraform(struct?: CcGuardHook.StackNamesProperty | cdktn.IResolvable): any {
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


export function ccGuardHookStackRolesPropertyToTerraform(struct?: CcGuardHook.StackRolesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
        include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
    }
}


export function ccGuardHookStackRolesPropertyToHclTerraform(struct?: CcGuardHook.StackRolesProperty | cdktn.IResolvable): any {
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


export function ccGuardHookStackFiltersPropertyToTerraform(struct?: CcGuardHook.StackFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filtering_criteria: cdktn.stringToTerraform(struct!.filteringCriteria),
        stack_names: ccGuardHookStackNamesPropertyToTerraform(struct!.stackNames),
        stack_roles: ccGuardHookStackRolesPropertyToTerraform(struct!.stackRoles),
    }
}


export function ccGuardHookStackFiltersPropertyToHclTerraform(struct?: CcGuardHook.StackFiltersProperty | cdktn.IResolvable): any {
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
            value: ccGuardHookStackNamesPropertyToHclTerraform(struct!.stackNames),
            isBlock: true,
            type: "struct",
            storageClassType: "StackNamesProperty",
        },
        stack_roles: {
            value: ccGuardHookStackRolesPropertyToHclTerraform(struct!.stackRoles),
            isBlock: true,
            type: "struct",
            storageClassType: "StackRolesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGuardHookHookTargetPropertyToTerraform(struct?: CcGuardHook.HookTargetProperty | cdktn.IResolvable): any {
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


export function ccGuardHookHookTargetPropertyToHclTerraform(struct?: CcGuardHook.HookTargetProperty | cdktn.IResolvable): any {
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


export function ccGuardHookTargetFiltersPropertyToTerraform(struct?: CcGuardHook.TargetFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        invocation_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invocationPoints),
        target_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetNames),
        targets: cdktn.listMapper(ccGuardHookHookTargetPropertyToTerraform, false)(struct!.targets),
    }
}


export function ccGuardHookTargetFiltersPropertyToHclTerraform(struct?: CcGuardHook.TargetFiltersProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccGuardHookHookTargetPropertyToHclTerraform, false)(struct!.targets),
            isBlock: true,
            type: "list",
            storageClassType: "HookTargetPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGuardHook {
export interface OptionsProperty {
    /**
    * Specifies the S3 location of input parameter files for your Guard rules. You can specify either a single S3 location or an array of up to 10 S3 locations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#input_params CcGuardHook#input_params}
    */
    readonly inputParams?: string;
}
export class OptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputParams = this._inputParams;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputParams = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputParams = value.inputParams;
        }
    }

    // input_params - computed: true, optional: true, required: false
    private _inputParams?: string; 
    public get inputParams() {
        return this.getStringAttribute('input_params');
    }
    public set inputParams(value: string) {
        this._inputParams = value;
    }
    public resetInputParams() {
        this._inputParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParamsInput() {
        return this._inputParams;
    }
}
export interface S3LocationProperty {
    /**
    * S3 uri of Guard files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#uri CcGuardHook#uri}
    */
    readonly uri: string;
    /**
    * S3 object version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#version_id CcGuardHook#version_id}
    */
    readonly versionId?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        if (this._versionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uri = undefined;
            this._versionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uri = value.uri;
            this._versionId = value.versionId;
        }
    }

    // uri - computed: false, optional: false, required: true
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string; 
    public get versionId() {
        return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
        this._versionId = value;
    }
    public resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
        return this._versionId;
    }
}
export interface StackNamesProperty {
    /**
    * List of stack names that the hook is going to be excluded from
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CcGuardHook#exclude}
    */
    readonly exclude?: string[];
    /**
    * List of stack names that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CcGuardHook#include}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CcGuardHook#exclude}
    */
    readonly exclude?: string[];
    /**
    * List of stack roles that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CcGuardHook#include}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#filtering_criteria CcGuardHook#filtering_criteria}
    */
    readonly filteringCriteria?: string;
    /**
    * List of stack names as filters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_names CcGuardHook#stack_names}
    */
    readonly stackNames?: StackNamesProperty;
    /**
    * List of stack roles that are performing the stack operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_roles CcGuardHook#stack_roles}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#action CcGuardHook#action}
    */
    readonly action?: string;
    /**
    * Invocation points are the point in provisioning workflow where hooks will be executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_point CcGuardHook#invocation_point}
    */
    readonly invocationPoint?: string;
    /**
    * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_name CcGuardHook#target_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#actions CcGuardHook#actions}
    */
    readonly actions?: string[];
    /**
    * List of invocation points that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_points CcGuardHook#invocation_points}
    */
    readonly invocationPoints?: string[];
    /**
    * List of type names that the hook is going to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_names CcGuardHook#target_names}
    */
    readonly targetNames?: string[];
    /**
    * List of hook targets
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#targets CcGuardHook#targets}
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
