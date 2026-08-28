// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBranchProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#app_id CcBranch#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#backend CcBranch#backend}
    */
    readonly backend?: CcBranch.BackendProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#basic_auth_config CcBranch#basic_auth_config}
    */
    readonly basicAuthConfig?: CcBranch.BasicAuthConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#branch_name CcBranch#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#build_spec CcBranch#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#compute_role_arn CcBranch#compute_role_arn}
    */
    readonly computeRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#description CcBranch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#enable_auto_build CcBranch#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#enable_performance_mode CcBranch#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#enable_pull_request_preview CcBranch#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#enable_skew_protection CcBranch#enable_skew_protection}
    */
    readonly enableSkewProtection?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#environment_variables CcBranch#environment_variables}
    */
    readonly environmentVariables?: CcBranch.EnvironmentVariableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#framework CcBranch#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#pull_request_environment_name CcBranch#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#stage CcBranch#stage}
    */
    readonly stage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#tags CcBranch#tags}
    */
    readonly tags?: CcBranch.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch awscc_amplify_branch}
*/
export class CcBranch extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_amplify_branch";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBranch resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBranch to import
    * @param importFromId The id of the existing CcBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBranch to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_amplify_branch", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch awscc_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBranchProps
    */
    public constructor(scope: Construct, id: string, config: CcBranchProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_amplify_branch',
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
        this._appId = config.appId;
        this._backend.internalValue = config.backend;
        this._basicAuthConfig.internalValue = config.basicAuthConfig;
        this._branchName = config.branchName;
        this._buildSpec = config.buildSpec;
        this._computeRoleArn = config.computeRoleArn;
        this._description = config.description;
        this._enableAutoBuild = config.enableAutoBuild;
        this._enablePerformanceMode = config.enablePerformanceMode;
        this._enablePullRequestPreview = config.enablePullRequestPreview;
        this._enableSkewProtection = config.enableSkewProtection;
        this._environmentVariables.internalValue = config.environmentVariables;
        this._framework = config.framework;
        this._pullRequestEnvironmentName = config.pullRequestEnvironmentName;
        this._stage = config.stage;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
        return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
        this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
        return this._appId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // backend - computed: true, optional: true, required: false
    private _backend = new CcBranch.BackendPropertyOutputReference(this, "backend");
    public get backend() {
        return this._backend;
    }
    public putBackend(value: CcBranch.BackendProperty) {
        this._backend.internalValue = value;
    }
    public resetBackend() {
        this._backend.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backendInput() {
        return this._backend.internalValue;
    }

    // basic_auth_config - computed: true, optional: true, required: false
    private _basicAuthConfig = new CcBranch.BasicAuthConfigPropertyOutputReference(this, "basic_auth_config");
    public get basicAuthConfig() {
        return this._basicAuthConfig;
    }
    public putBasicAuthConfig(value: CcBranch.BasicAuthConfigProperty) {
        this._basicAuthConfig.internalValue = value;
    }
    public resetBasicAuthConfig() {
        this._basicAuthConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthConfigInput() {
        return this._basicAuthConfig.internalValue;
    }

    // branch_name - computed: false, optional: false, required: true
    private _branchName?: string; 
    public get branchName() {
        return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
        this._branchName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
        return this._branchName;
    }

    // build_spec - computed: true, optional: true, required: false
    private _buildSpec?: string; 
    public get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    public set buildSpec(value: string) {
        this._buildSpec = value;
    }
    public resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildSpecInput() {
        return this._buildSpec;
    }

    // compute_role_arn - computed: true, optional: true, required: false
    private _computeRoleArn?: string; 
    public get computeRoleArn() {
        return this.getStringAttribute('compute_role_arn');
    }
    public set computeRoleArn(value: string) {
        this._computeRoleArn = value;
    }
    public resetComputeRoleArn() {
        this._computeRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeRoleArnInput() {
        return this._computeRoleArn;
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

    // enable_auto_build - computed: true, optional: true, required: false
    private _enableAutoBuild?: boolean | cdktn.IResolvable; 
    public get enableAutoBuild() {
        return this.getBooleanAttribute('enable_auto_build');
    }
    public set enableAutoBuild(value: boolean | cdktn.IResolvable) {
        this._enableAutoBuild = value;
    }
    public resetEnableAutoBuild() {
        this._enableAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAutoBuildInput() {
        return this._enableAutoBuild;
    }

    // enable_performance_mode - computed: true, optional: true, required: false
    private _enablePerformanceMode?: boolean | cdktn.IResolvable; 
    public get enablePerformanceMode() {
        return this.getBooleanAttribute('enable_performance_mode');
    }
    public set enablePerformanceMode(value: boolean | cdktn.IResolvable) {
        this._enablePerformanceMode = value;
    }
    public resetEnablePerformanceMode() {
        this._enablePerformanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePerformanceModeInput() {
        return this._enablePerformanceMode;
    }

    // enable_pull_request_preview - computed: true, optional: true, required: false
    private _enablePullRequestPreview?: boolean | cdktn.IResolvable; 
    public get enablePullRequestPreview() {
        return this.getBooleanAttribute('enable_pull_request_preview');
    }
    public set enablePullRequestPreview(value: boolean | cdktn.IResolvable) {
        this._enablePullRequestPreview = value;
    }
    public resetEnablePullRequestPreview() {
        this._enablePullRequestPreview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePullRequestPreviewInput() {
        return this._enablePullRequestPreview;
    }

    // enable_skew_protection - computed: true, optional: true, required: false
    private _enableSkewProtection?: boolean | cdktn.IResolvable; 
    public get enableSkewProtection() {
        return this.getBooleanAttribute('enable_skew_protection');
    }
    public set enableSkewProtection(value: boolean | cdktn.IResolvable) {
        this._enableSkewProtection = value;
    }
    public resetEnableSkewProtection() {
        this._enableSkewProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSkewProtectionInput() {
        return this._enableSkewProtection;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables = new CcBranch.EnvironmentVariablePropertyList(this, "environment_variables", false);
    public get environmentVariables() {
        return this._environmentVariables;
    }
    public putEnvironmentVariables(value: CcBranch.EnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._environmentVariables.internalValue = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables.internalValue;
    }

    // framework - computed: true, optional: true, required: false
    private _framework?: string; 
    public get framework() {
        return this.getStringAttribute('framework');
    }
    public set framework(value: string) {
        this._framework = value;
    }
    public resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
        return this._framework;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // pull_request_environment_name - computed: true, optional: true, required: false
    private _pullRequestEnvironmentName?: string; 
    public get pullRequestEnvironmentName() {
        return this.getStringAttribute('pull_request_environment_name');
    }
    public set pullRequestEnvironmentName(value: string) {
        this._pullRequestEnvironmentName = value;
    }
    public resetPullRequestEnvironmentName() {
        this._pullRequestEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pullRequestEnvironmentNameInput() {
        return this._pullRequestEnvironmentName;
    }

    // stage - computed: true, optional: true, required: false
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    public resetStage() {
        this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBranch.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBranch.TagProperty[] | cdktn.IResolvable) {
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
            app_id: cdktn.stringToTerraform(this._appId),
            backend: ccBranchBackendPropertyToTerraform(this._backend.internalValue),
            basic_auth_config: ccBranchBasicAuthConfigPropertyToTerraform(this._basicAuthConfig.internalValue),
            branch_name: cdktn.stringToTerraform(this._branchName),
            build_spec: cdktn.stringToTerraform(this._buildSpec),
            compute_role_arn: cdktn.stringToTerraform(this._computeRoleArn),
            description: cdktn.stringToTerraform(this._description),
            enable_auto_build: cdktn.booleanToTerraform(this._enableAutoBuild),
            enable_performance_mode: cdktn.booleanToTerraform(this._enablePerformanceMode),
            enable_pull_request_preview: cdktn.booleanToTerraform(this._enablePullRequestPreview),
            enable_skew_protection: cdktn.booleanToTerraform(this._enableSkewProtection),
            environment_variables: cdktn.listMapper(ccBranchEnvironmentVariablePropertyToTerraform, false)(this._environmentVariables.internalValue),
            framework: cdktn.stringToTerraform(this._framework),
            pull_request_environment_name: cdktn.stringToTerraform(this._pullRequestEnvironmentName),
            stage: cdktn.stringToTerraform(this._stage),
            tags: cdktn.listMapper(ccBranchTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_id: {
                value: cdktn.stringToHclTerraform(this._appId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backend: {
                value: ccBranchBackendPropertyToHclTerraform(this._backend.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBranch.BackendProperty",
            },
            basic_auth_config: {
                value: ccBranchBasicAuthConfigPropertyToHclTerraform(this._basicAuthConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBranch.BasicAuthConfigProperty",
            },
            branch_name: {
                value: cdktn.stringToHclTerraform(this._branchName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            build_spec: {
                value: cdktn.stringToHclTerraform(this._buildSpec),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_role_arn: {
                value: cdktn.stringToHclTerraform(this._computeRoleArn),
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
            enable_auto_build: {
                value: cdktn.booleanToHclTerraform(this._enableAutoBuild),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_performance_mode: {
                value: cdktn.booleanToHclTerraform(this._enablePerformanceMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_pull_request_preview: {
                value: cdktn.booleanToHclTerraform(this._enablePullRequestPreview),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_skew_protection: {
                value: cdktn.booleanToHclTerraform(this._enableSkewProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            environment_variables: {
                value: cdktn.listMapperHcl(ccBranchEnvironmentVariablePropertyToHclTerraform, false)(this._environmentVariables.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBranch.EnvironmentVariablePropertyList",
            },
            framework: {
                value: cdktn.stringToHclTerraform(this._framework),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pull_request_environment_name: {
                value: cdktn.stringToHclTerraform(this._pullRequestEnvironmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage: {
                value: cdktn.stringToHclTerraform(this._stage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBranchTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBranch.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBranchBackendPropertyToTerraform(struct?: CcBranch.BackendProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stack_arn: cdktn.stringToTerraform(struct!.stackArn),
    }
}


export function ccBranchBackendPropertyToHclTerraform(struct?: CcBranch.BackendProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stack_arn: {
            value: cdktn.stringToHclTerraform(struct!.stackArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBranchBasicAuthConfigPropertyToTerraform(struct?: CcBranch.BasicAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_basic_auth: cdktn.booleanToTerraform(struct!.enableBasicAuth),
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccBranchBasicAuthConfigPropertyToHclTerraform(struct?: CcBranch.BasicAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_basic_auth: {
            value: cdktn.booleanToHclTerraform(struct!.enableBasicAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBranchEnvironmentVariablePropertyToTerraform(struct?: CcBranch.EnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBranchEnvironmentVariablePropertyToHclTerraform(struct?: CcBranch.EnvironmentVariableProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBranchTagPropertyToTerraform(struct?: CcBranch.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBranchTagPropertyToHclTerraform(struct?: CcBranch.TagProperty | cdktn.IResolvable): any {
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


export namespace CcBranch {
export interface BackendProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#stack_arn CcBranch#stack_arn}
    */
    readonly stackArn?: string;
}
export class BackendPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BackendProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stackArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackArn = this._stackArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BackendProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stackArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stackArn = value.stackArn;
        }
    }

    // stack_arn - computed: true, optional: true, required: false
    private _stackArn?: string; 
    public get stackArn() {
        return this.getStringAttribute('stack_arn');
    }
    public set stackArn(value: string) {
        this._stackArn = value;
    }
    public resetStackArn() {
        this._stackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackArnInput() {
        return this._stackArn;
    }
}
export interface BasicAuthConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#enable_basic_auth CcBranch#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#password CcBranch#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#username CcBranch#username}
    */
    readonly username?: string;
}
export class BasicAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableBasicAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableBasicAuth = this._enableBasicAuth;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BasicAuthConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableBasicAuth = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableBasicAuth = value.enableBasicAuth;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // enable_basic_auth - computed: true, optional: true, required: false
    private _enableBasicAuth?: boolean | cdktn.IResolvable; 
    public get enableBasicAuth() {
        return this.getBooleanAttribute('enable_basic_auth');
    }
    public set enableBasicAuth(value: boolean | cdktn.IResolvable) {
        this._enableBasicAuth = value;
    }
    public resetEnableBasicAuth() {
        this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBasicAuthInput() {
        return this._enableBasicAuth;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface EnvironmentVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#name CcBranch#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#value CcBranch#value}
    */
    readonly value?: string;
}
export class EnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnvironmentVariableProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EnvironmentVariableProperty | cdktn.IResolvable | undefined) {
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

export class EnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : EnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): EnvironmentVariablePropertyOutputReference {
        return new EnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#key CcBranch#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/amplify_branch#value CcBranch#value}
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
