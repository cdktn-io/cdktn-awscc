// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStackSetProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#administration_role_arn CcStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#auto_deployment CcStackSet#auto_deployment}
    */
    readonly autoDeployment?: CcStackSet.AutoDeploymentProperty;
    /**
    * Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#call_as CcStackSet#call_as}
    */
    readonly callAs?: string;
    /**
    * In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#capabilities CcStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#description CcStackSet#description}
    */
    readonly description?: string;
    /**
    * The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#execution_role_name CcStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#managed_execution CcStackSet#managed_execution}
    */
    readonly managedExecution?: CcStackSet.ManagedExecutionProperty;
    /**
    * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#operation_preferences CcStackSet#operation_preferences}
    */
    readonly operationPreferences?: CcStackSet.OperationPreferencesProperty;
    /**
    * The input parameters for the stack set template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameters CcStackSet#parameters}
    */
    readonly parameters?: CcStackSet.ParameterProperty[] | cdktn.IResolvable;
    /**
    * Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#permission_model CcStackSet#permission_model}
    */
    readonly permissionModel: string;
    /**
    * A group of stack instances with parameters in some specific accounts and regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#stack_instances_group CcStackSet#stack_instances_group}
    */
    readonly stackInstancesGroup?: CcStackSet.StackInstancesProperty[] | cdktn.IResolvable;
    /**
    * The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#stack_set_name CcStackSet#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#tags CcStackSet#tags}
    */
    readonly tags?: CcStackSet.TagProperty[] | cdktn.IResolvable;
    /**
    * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#template_body CcStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#template_url CcStackSet#template_url}
    */
    readonly templateUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set awscc_cloudformation_stack_set}
*/
export class CcStackSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_stack_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStackSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStackSet to import
    * @param importFromId The id of the existing CcStackSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStackSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_stack_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set awscc_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStackSetProps
    */
    public constructor(scope: Construct, id: string, config: CcStackSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_stack_set',
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
        this._administrationRoleArn = config.administrationRoleArn;
        this._autoDeployment.internalValue = config.autoDeployment;
        this._callAs = config.callAs;
        this._capabilities = config.capabilities;
        this._description = config.description;
        this._executionRoleName = config.executionRoleName;
        this._managedExecution.internalValue = config.managedExecution;
        this._operationPreferences.internalValue = config.operationPreferences;
        this._parameters.internalValue = config.parameters;
        this._permissionModel = config.permissionModel;
        this._stackInstancesGroup.internalValue = config.stackInstancesGroup;
        this._stackSetName = config.stackSetName;
        this._tags.internalValue = config.tags;
        this._templateBody = config.templateBody;
        this._templateUrl = config.templateUrl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // administration_role_arn - computed: true, optional: true, required: false
    private _administrationRoleArn?: string; 
    public get administrationRoleArn() {
        return this.getStringAttribute('administration_role_arn');
    }
    public set administrationRoleArn(value: string) {
        this._administrationRoleArn = value;
    }
    public resetAdministrationRoleArn() {
        this._administrationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get administrationRoleArnInput() {
        return this._administrationRoleArn;
    }

    // auto_deployment - computed: true, optional: true, required: false
    private _autoDeployment = new CcStackSet.AutoDeploymentPropertyOutputReference(this, "auto_deployment");
    public get autoDeployment() {
        return this._autoDeployment;
    }
    public putAutoDeployment(value: CcStackSet.AutoDeploymentProperty) {
        this._autoDeployment.internalValue = value;
    }
    public resetAutoDeployment() {
        this._autoDeployment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeploymentInput() {
        return this._autoDeployment.internalValue;
    }

    // call_as - computed: true, optional: true, required: false
    private _callAs?: string; 
    public get callAs() {
        return this.getStringAttribute('call_as');
    }
    public set callAs(value: string) {
        this._callAs = value;
    }
    public resetCallAs() {
        this._callAs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callAsInput() {
        return this._callAs;
    }

    // capabilities - computed: true, optional: true, required: false
    private _capabilities?: string[]; 
    public get capabilities() {
        return cdktn.Fn.tolist(this.getListAttribute('capabilities'));
    }
    public set capabilities(value: string[]) {
        this._capabilities = value;
    }
    public resetCapabilities() {
        this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities;
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

    // execution_role_name - computed: true, optional: true, required: false
    private _executionRoleName?: string; 
    public get executionRoleName() {
        return this.getStringAttribute('execution_role_name');
    }
    public set executionRoleName(value: string) {
        this._executionRoleName = value;
    }
    public resetExecutionRoleName() {
        this._executionRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleNameInput() {
        return this._executionRoleName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_execution - computed: true, optional: true, required: false
    private _managedExecution = new CcStackSet.ManagedExecutionPropertyOutputReference(this, "managed_execution");
    public get managedExecution() {
        return this._managedExecution;
    }
    public putManagedExecution(value: CcStackSet.ManagedExecutionProperty) {
        this._managedExecution.internalValue = value;
    }
    public resetManagedExecution() {
        this._managedExecution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedExecutionInput() {
        return this._managedExecution.internalValue;
    }

    // operation_preferences - computed: true, optional: true, required: false
    private _operationPreferences = new CcStackSet.OperationPreferencesPropertyOutputReference(this, "operation_preferences");
    public get operationPreferences() {
        return this._operationPreferences;
    }
    public putOperationPreferences(value: CcStackSet.OperationPreferencesProperty) {
        this._operationPreferences.internalValue = value;
    }
    public resetOperationPreferences() {
        this._operationPreferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationPreferencesInput() {
        return this._operationPreferences.internalValue;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcStackSet.ParameterPropertyList(this, "parameters", true);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcStackSet.ParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // permission_model - computed: false, optional: false, required: true
    private _permissionModel?: string; 
    public get permissionModel() {
        return this.getStringAttribute('permission_model');
    }
    public set permissionModel(value: string) {
        this._permissionModel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionModelInput() {
        return this._permissionModel;
    }

    // stack_instances_group - computed: true, optional: true, required: false
    private _stackInstancesGroup = new CcStackSet.StackInstancesPropertyList(this, "stack_instances_group", true);
    public get stackInstancesGroup() {
        return this._stackInstancesGroup;
    }
    public putStackInstancesGroup(value: CcStackSet.StackInstancesProperty[] | cdktn.IResolvable) {
        this._stackInstancesGroup.internalValue = value;
    }
    public resetStackInstancesGroup() {
        this._stackInstancesGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackInstancesGroupInput() {
        return this._stackInstancesGroup.internalValue;
    }

    // stack_set_id - computed: true, optional: false, required: false
    public get stackSetId() {
        return this.getStringAttribute('stack_set_id');
    }

    // stack_set_name - computed: false, optional: false, required: true
    private _stackSetName?: string; 
    public get stackSetName() {
        return this.getStringAttribute('stack_set_name');
    }
    public set stackSetName(value: string) {
        this._stackSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetNameInput() {
        return this._stackSetName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStackSet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStackSet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_url - computed: true, optional: true, required: false
    private _templateUrl?: string; 
    public get templateUrl() {
        return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string) {
        this._templateUrl = value;
    }
    public resetTemplateUrl() {
        this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
        return this._templateUrl;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            administration_role_arn: cdktn.stringToTerraform(this._administrationRoleArn),
            auto_deployment: ccStackSetAutoDeploymentPropertyToTerraform(this._autoDeployment.internalValue),
            call_as: cdktn.stringToTerraform(this._callAs),
            capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capabilities),
            description: cdktn.stringToTerraform(this._description),
            execution_role_name: cdktn.stringToTerraform(this._executionRoleName),
            managed_execution: ccStackSetManagedExecutionPropertyToTerraform(this._managedExecution.internalValue),
            operation_preferences: ccStackSetOperationPreferencesPropertyToTerraform(this._operationPreferences.internalValue),
            parameters: cdktn.listMapper(ccStackSetParameterPropertyToTerraform, false)(this._parameters.internalValue),
            permission_model: cdktn.stringToTerraform(this._permissionModel),
            stack_instances_group: cdktn.listMapper(ccStackSetStackInstancesPropertyToTerraform, false)(this._stackInstancesGroup.internalValue),
            stack_set_name: cdktn.stringToTerraform(this._stackSetName),
            tags: cdktn.listMapper(ccStackSetTagPropertyToTerraform, false)(this._tags.internalValue),
            template_body: cdktn.stringToTerraform(this._templateBody),
            template_url: cdktn.stringToTerraform(this._templateUrl),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            administration_role_arn: {
                value: cdktn.stringToHclTerraform(this._administrationRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_deployment: {
                value: ccStackSetAutoDeploymentPropertyToHclTerraform(this._autoDeployment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStackSet.AutoDeploymentProperty",
            },
            call_as: {
                value: cdktn.stringToHclTerraform(this._callAs),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capabilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capabilities),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_name: {
                value: cdktn.stringToHclTerraform(this._executionRoleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            managed_execution: {
                value: ccStackSetManagedExecutionPropertyToHclTerraform(this._managedExecution.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStackSet.ManagedExecutionProperty",
            },
            operation_preferences: {
                value: ccStackSetOperationPreferencesPropertyToHclTerraform(this._operationPreferences.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStackSet.OperationPreferencesProperty",
            },
            parameters: {
                value: cdktn.listMapperHcl(ccStackSetParameterPropertyToHclTerraform, false)(this._parameters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStackSet.ParameterPropertyList",
            },
            permission_model: {
                value: cdktn.stringToHclTerraform(this._permissionModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_instances_group: {
                value: cdktn.listMapperHcl(ccStackSetStackInstancesPropertyToHclTerraform, false)(this._stackInstancesGroup.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStackSet.StackInstancesPropertyList",
            },
            stack_set_name: {
                value: cdktn.stringToHclTerraform(this._stackSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStackSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStackSet.TagPropertyList",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_url: {
                value: cdktn.stringToHclTerraform(this._templateUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStackSetAutoDeploymentPropertyToTerraform(struct?: CcStackSet.AutoDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        depends_on: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependsOn),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        retain_stacks_on_account_removal: cdktn.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
    }
}


export function ccStackSetAutoDeploymentPropertyToHclTerraform(struct?: CcStackSet.AutoDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        depends_on: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dependsOn),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        retain_stacks_on_account_removal: {
            value: cdktn.booleanToHclTerraform(struct!.retainStacksOnAccountRemoval),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetManagedExecutionPropertyToTerraform(struct?: CcStackSet.ManagedExecutionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active: cdktn.booleanToTerraform(struct!.active),
    }
}


export function ccStackSetManagedExecutionPropertyToHclTerraform(struct?: CcStackSet.ManagedExecutionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active: {
            value: cdktn.booleanToHclTerraform(struct!.active),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetOperationPreferencesPropertyToTerraform(struct?: CcStackSet.OperationPreferencesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        concurrency_mode: cdktn.stringToTerraform(struct!.concurrencyMode),
        failure_tolerance_count: cdktn.numberToTerraform(struct!.failureToleranceCount),
        failure_tolerance_percentage: cdktn.numberToTerraform(struct!.failureTolerancePercentage),
        max_concurrent_count: cdktn.numberToTerraform(struct!.maxConcurrentCount),
        max_concurrent_percentage: cdktn.numberToTerraform(struct!.maxConcurrentPercentage),
        region_concurrency_type: cdktn.stringToTerraform(struct!.regionConcurrencyType),
        region_order: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regionOrder),
    }
}


export function ccStackSetOperationPreferencesPropertyToHclTerraform(struct?: CcStackSet.OperationPreferencesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        concurrency_mode: {
            value: cdktn.stringToHclTerraform(struct!.concurrencyMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_tolerance_count: {
            value: cdktn.numberToHclTerraform(struct!.failureToleranceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        failure_tolerance_percentage: {
            value: cdktn.numberToHclTerraform(struct!.failureTolerancePercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrent_count: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrent_percentage: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        region_concurrency_type: {
            value: cdktn.stringToHclTerraform(struct!.regionConcurrencyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region_order: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regionOrder),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetParameterPropertyToTerraform(struct?: CcStackSet.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_key: cdktn.stringToTerraform(struct!.parameterKey),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccStackSetParameterPropertyToHclTerraform(struct?: CcStackSet.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_key: {
            value: cdktn.stringToHclTerraform(struct!.parameterKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetDeploymentTargetsPropertyToTerraform(struct?: CcStackSet.DeploymentTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_filter_type: cdktn.stringToTerraform(struct!.accountFilterType),
        accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accounts),
        accounts_url: cdktn.stringToTerraform(struct!.accountsUrl),
        organizational_unit_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationalUnitIds),
    }
}


export function ccStackSetDeploymentTargetsPropertyToHclTerraform(struct?: CcStackSet.DeploymentTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_filter_type: {
            value: cdktn.stringToHclTerraform(struct!.accountFilterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accounts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        accounts_url: {
            value: cdktn.stringToHclTerraform(struct!.accountsUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationalUnitIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetParameterOverridesPropertyToTerraform(struct?: CcStackSet.ParameterOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_key: cdktn.stringToTerraform(struct!.parameterKey),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccStackSetParameterOverridesPropertyToHclTerraform(struct?: CcStackSet.ParameterOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_key: {
            value: cdktn.stringToHclTerraform(struct!.parameterKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetStackInstancesPropertyToTerraform(struct?: CcStackSet.StackInstancesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_targets: ccStackSetDeploymentTargetsPropertyToTerraform(struct!.deploymentTargets),
        parameter_overrides: cdktn.listMapper(ccStackSetParameterOverridesPropertyToTerraform, false)(struct!.parameterOverrides),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    }
}


export function ccStackSetStackInstancesPropertyToHclTerraform(struct?: CcStackSet.StackInstancesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_targets: {
            value: ccStackSetDeploymentTargetsPropertyToHclTerraform(struct!.deploymentTargets),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentTargetsProperty",
        },
        parameter_overrides: {
            value: cdktn.listMapperHcl(ccStackSetParameterOverridesPropertyToHclTerraform, false)(struct!.parameterOverrides),
            isBlock: true,
            type: "set",
            storageClassType: "ParameterOverridesPropertyList",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStackSetTagPropertyToTerraform(struct?: CcStackSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStackSetTagPropertyToHclTerraform(struct?: CcStackSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStackSet {
export interface AutoDeploymentProperty {
    /**
    * A list of StackSet ARNs that this StackSet depends on for auto-deployment operations. When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#depends_on CcStackSet#depends_on}
    */
    readonly dependsOn?: string[];
    /**
    * If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#enabled CcStackSet#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CcStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktn.IResolvable;
}
export class AutoDeploymentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoDeploymentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dependsOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependsOn = this._dependsOn;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._retainStacksOnAccountRemoval !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainStacksOnAccountRemoval = this._retainStacksOnAccountRemoval;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoDeploymentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dependsOn = undefined;
            this._enabled = undefined;
            this._retainStacksOnAccountRemoval = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dependsOn = value.dependsOn;
            this._enabled = value.enabled;
            this._retainStacksOnAccountRemoval = value.retainStacksOnAccountRemoval;
        }
    }

    // depends_on - computed: true, optional: true, required: false
    private _dependsOn?: string[]; 
    public get dependsOn() {
        return cdktn.Fn.tolist(this.getListAttribute('depends_on'));
    }
    public set dependsOn(value: string[]) {
        this._dependsOn = value;
    }
    public resetDependsOn() {
        this._dependsOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependsOnInput() {
        return this._dependsOn;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // retain_stacks_on_account_removal - computed: true, optional: true, required: false
    private _retainStacksOnAccountRemoval?: boolean | cdktn.IResolvable; 
    public get retainStacksOnAccountRemoval() {
        return this.getBooleanAttribute('retain_stacks_on_account_removal');
    }
    public set retainStacksOnAccountRemoval(value: boolean | cdktn.IResolvable) {
        this._retainStacksOnAccountRemoval = value;
    }
    public resetRetainStacksOnAccountRemoval() {
        this._retainStacksOnAccountRemoval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainStacksOnAccountRemovalInput() {
        return this._retainStacksOnAccountRemoval;
    }
}
export interface ManagedExecutionProperty {
    /**
    * When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#active CcStackSet#active}
    */
    readonly active?: boolean | cdktn.IResolvable;
}
export class ManagedExecutionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedExecutionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._active !== undefined) {
            hasAnyValues = true;
            internalValueResult.active = this._active;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedExecutionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._active = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._active = value.active;
        }
    }

    // active - computed: true, optional: true, required: false
    private _active?: boolean | cdktn.IResolvable; 
    public get active() {
        return this.getBooleanAttribute('active');
    }
    public set active(value: boolean | cdktn.IResolvable) {
        this._active = value;
    }
    public resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
        return this._active;
    }
}
export interface OperationPreferencesProperty {
    /**
    * Specifies how the concurrency level behaves during the operation execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#concurrency_mode CcStackSet#concurrency_mode}
    */
    readonly concurrencyMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#failure_tolerance_count CcStackSet#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CcStackSet#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#max_concurrent_count CcStackSet#max_concurrent_count}
    */
    readonly maxConcurrentCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#max_concurrent_percentage CcStackSet#max_concurrent_percentage}
    */
    readonly maxConcurrentPercentage?: number;
    /**
    * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#region_concurrency_type CcStackSet#region_concurrency_type}
    */
    readonly regionConcurrencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#region_order CcStackSet#region_order}
    */
    readonly regionOrder?: string[];
}
export class OperationPreferencesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OperationPreferencesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._concurrencyMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrencyMode = this._concurrencyMode;
        }
        if (this._failureToleranceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureToleranceCount = this._failureToleranceCount;
        }
        if (this._failureTolerancePercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
        }
        if (this._maxConcurrentCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentCount = this._maxConcurrentCount;
        }
        if (this._maxConcurrentPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentPercentage = this._maxConcurrentPercentage;
        }
        if (this._regionConcurrencyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionConcurrencyType = this._regionConcurrencyType;
        }
        if (this._regionOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionOrder = this._regionOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OperationPreferencesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._concurrencyMode = undefined;
            this._failureToleranceCount = undefined;
            this._failureTolerancePercentage = undefined;
            this._maxConcurrentCount = undefined;
            this._maxConcurrentPercentage = undefined;
            this._regionConcurrencyType = undefined;
            this._regionOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._concurrencyMode = value.concurrencyMode;
            this._failureToleranceCount = value.failureToleranceCount;
            this._failureTolerancePercentage = value.failureTolerancePercentage;
            this._maxConcurrentCount = value.maxConcurrentCount;
            this._maxConcurrentPercentage = value.maxConcurrentPercentage;
            this._regionConcurrencyType = value.regionConcurrencyType;
            this._regionOrder = value.regionOrder;
        }
    }

    // concurrency_mode - computed: true, optional: true, required: false
    private _concurrencyMode?: string; 
    public get concurrencyMode() {
        return this.getStringAttribute('concurrency_mode');
    }
    public set concurrencyMode(value: string) {
        this._concurrencyMode = value;
    }
    public resetConcurrencyMode() {
        this._concurrencyMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrencyModeInput() {
        return this._concurrencyMode;
    }

    // failure_tolerance_count - computed: true, optional: true, required: false
    private _failureToleranceCount?: number; 
    public get failureToleranceCount() {
        return this.getNumberAttribute('failure_tolerance_count');
    }
    public set failureToleranceCount(value: number) {
        this._failureToleranceCount = value;
    }
    public resetFailureToleranceCount() {
        this._failureToleranceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureToleranceCountInput() {
        return this._failureToleranceCount;
    }

    // failure_tolerance_percentage - computed: true, optional: true, required: false
    private _failureTolerancePercentage?: number; 
    public get failureTolerancePercentage() {
        return this.getNumberAttribute('failure_tolerance_percentage');
    }
    public set failureTolerancePercentage(value: number) {
        this._failureTolerancePercentage = value;
    }
    public resetFailureTolerancePercentage() {
        this._failureTolerancePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureTolerancePercentageInput() {
        return this._failureTolerancePercentage;
    }

    // max_concurrent_count - computed: true, optional: true, required: false
    private _maxConcurrentCount?: number; 
    public get maxConcurrentCount() {
        return this.getNumberAttribute('max_concurrent_count');
    }
    public set maxConcurrentCount(value: number) {
        this._maxConcurrentCount = value;
    }
    public resetMaxConcurrentCount() {
        this._maxConcurrentCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentCountInput() {
        return this._maxConcurrentCount;
    }

    // max_concurrent_percentage - computed: true, optional: true, required: false
    private _maxConcurrentPercentage?: number; 
    public get maxConcurrentPercentage() {
        return this.getNumberAttribute('max_concurrent_percentage');
    }
    public set maxConcurrentPercentage(value: number) {
        this._maxConcurrentPercentage = value;
    }
    public resetMaxConcurrentPercentage() {
        this._maxConcurrentPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentPercentageInput() {
        return this._maxConcurrentPercentage;
    }

    // region_concurrency_type - computed: true, optional: true, required: false
    private _regionConcurrencyType?: string; 
    public get regionConcurrencyType() {
        return this.getStringAttribute('region_concurrency_type');
    }
    public set regionConcurrencyType(value: string) {
        this._regionConcurrencyType = value;
    }
    public resetRegionConcurrencyType() {
        this._regionConcurrencyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionConcurrencyTypeInput() {
        return this._regionConcurrencyType;
    }

    // region_order - computed: true, optional: true, required: false
    private _regionOrder?: string[]; 
    public get regionOrder() {
        return this.getListAttribute('region_order');
    }
    public set regionOrder(value: string[]) {
        this._regionOrder = value;
    }
    public resetRegionOrder() {
        this._regionOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionOrderInput() {
        return this._regionOrder;
    }
}
export interface ParameterProperty {
    /**
    * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameter_key CcStackSet#parameter_key}
    */
    readonly parameterKey?: string;
    /**
    * The input value associated with the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameter_value CcStackSet#parameter_value}
    */
    readonly parameterValue?: string;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterKey = this._parameterKey;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterKey = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterKey = value.parameterKey;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_key - computed: true, optional: true, required: false
    private _parameterKey?: string; 
    public get parameterKey() {
        return this.getStringAttribute('parameter_key');
    }
    public set parameterKey(value: string) {
        this._parameterKey = value;
    }
    public resetParameterKey() {
        this._parameterKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterKeyInput() {
        return this._parameterKey;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class ParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterPropertyOutputReference {
        return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DeploymentTargetsProperty {
    /**
    * The filter type you want to apply on organizational units and accounts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#account_filter_type CcStackSet#account_filter_type}
    */
    readonly accountFilterType?: string;
    /**
    * AWS accounts that you want to create stack instances in the specified Region(s) for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#accounts CcStackSet#accounts}
    */
    readonly accounts?: string[];
    /**
    * Returns the value of the AccountsUrl property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#accounts_url CcStackSet#accounts_url}
    */
    readonly accountsUrl?: string;
    /**
    * The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#organizational_unit_ids CcStackSet#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export class DeploymentTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountFilterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountFilterType = this._accountFilterType;
        }
        if (this._accounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.accounts = this._accounts;
        }
        if (this._accountsUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountsUrl = this._accountsUrl;
        }
        if (this._organizationalUnitIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitIds = this._organizationalUnitIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountFilterType = undefined;
            this._accounts = undefined;
            this._accountsUrl = undefined;
            this._organizationalUnitIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountFilterType = value.accountFilterType;
            this._accounts = value.accounts;
            this._accountsUrl = value.accountsUrl;
            this._organizationalUnitIds = value.organizationalUnitIds;
        }
    }

    // account_filter_type - computed: true, optional: true, required: false
    private _accountFilterType?: string; 
    public get accountFilterType() {
        return this.getStringAttribute('account_filter_type');
    }
    public set accountFilterType(value: string) {
        this._accountFilterType = value;
    }
    public resetAccountFilterType() {
        this._accountFilterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountFilterTypeInput() {
        return this._accountFilterType;
    }

    // accounts - computed: true, optional: true, required: false
    private _accounts?: string[]; 
    public get accounts() {
        return cdktn.Fn.tolist(this.getListAttribute('accounts'));
    }
    public set accounts(value: string[]) {
        this._accounts = value;
    }
    public resetAccounts() {
        this._accounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountsInput() {
        return this._accounts;
    }

    // accounts_url - computed: true, optional: true, required: false
    private _accountsUrl?: string; 
    public get accountsUrl() {
        return this.getStringAttribute('accounts_url');
    }
    public set accountsUrl(value: string) {
        this._accountsUrl = value;
    }
    public resetAccountsUrl() {
        this._accountsUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountsUrlInput() {
        return this._accountsUrl;
    }

    // organizational_unit_ids - computed: true, optional: true, required: false
    private _organizationalUnitIds?: string[]; 
    public get organizationalUnitIds() {
        return cdktn.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
    }
    public set organizationalUnitIds(value: string[]) {
        this._organizationalUnitIds = value;
    }
    public resetOrganizationalUnitIds() {
        this._organizationalUnitIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitIdsInput() {
        return this._organizationalUnitIds;
    }
}
export interface ParameterOverridesProperty {
    /**
    * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameter_key CcStackSet#parameter_key}
    */
    readonly parameterKey?: string;
    /**
    * The input value associated with the parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameter_value CcStackSet#parameter_value}
    */
    readonly parameterValue?: string;
}
export class ParameterOverridesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterKey = this._parameterKey;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterKey = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterKey = value.parameterKey;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_key - computed: true, optional: true, required: false
    private _parameterKey?: string; 
    public get parameterKey() {
        return this.getStringAttribute('parameter_key');
    }
    public set parameterKey(value: string) {
        this._parameterKey = value;
    }
    public resetParameterKey() {
        this._parameterKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterKeyInput() {
        return this._parameterKey;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class ParameterOverridesPropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterOverridesProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterOverridesPropertyOutputReference {
        return new ParameterOverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StackInstancesProperty {
    /**
    *  The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#deployment_targets CcStackSet#deployment_targets}
    */
    readonly deploymentTargets?: DeploymentTargetsProperty;
    /**
    * A list of stack set parameters whose values you want to override in the selected stack instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#parameter_overrides CcStackSet#parameter_overrides}
    */
    readonly parameterOverrides?: ParameterOverridesProperty[] | cdktn.IResolvable;
    /**
    * The names of one or more Regions where you want to create stack instances using the specified AWS account(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#regions CcStackSet#regions}
    */
    readonly regions?: string[];
}
export class StackInstancesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StackInstancesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentTargets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentTargets = this._deploymentTargets?.internalValue;
        }
        if (this._parameterOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StackInstancesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentTargets.internalValue = undefined;
            this._parameterOverrides.internalValue = undefined;
            this._regions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentTargets.internalValue = value.deploymentTargets;
            this._parameterOverrides.internalValue = value.parameterOverrides;
            this._regions = value.regions;
        }
    }

    // deployment_targets - computed: true, optional: true, required: false
    private _deploymentTargets = new DeploymentTargetsPropertyOutputReference(this, "deployment_targets");
    public get deploymentTargets() {
        return this._deploymentTargets;
    }
    public putDeploymentTargets(value: DeploymentTargetsProperty) {
        this._deploymentTargets.internalValue = value;
    }
    public resetDeploymentTargets() {
        this._deploymentTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTargetsInput() {
        return this._deploymentTargets.internalValue;
    }

    // parameter_overrides - computed: true, optional: true, required: false
    private _parameterOverrides = new ParameterOverridesPropertyList(this, "parameter_overrides", true);
    public get parameterOverrides() {
        return this._parameterOverrides;
    }
    public putParameterOverrides(value: ParameterOverridesProperty[] | cdktn.IResolvable) {
        this._parameterOverrides.internalValue = value;
    }
    public resetParameterOverrides() {
        this._parameterOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterOverridesInput() {
        return this._parameterOverrides.internalValue;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }
}

export class StackInstancesPropertyList extends cdktn.ComplexList {
    public internalValue? : StackInstancesProperty[] | cdktn.IResolvable

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
    public get(index: number): StackInstancesPropertyOutputReference {
        return new StackInstancesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#key CcStackSet#key}
    */
    readonly key?: string;
    /**
    * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudformation_stack_set#value CcStackSet#value}
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
