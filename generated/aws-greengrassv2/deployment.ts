// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#components CcDeployment#components}
    */
    readonly components?: { [key: string]: CcDeployment.ComponentDeploymentSpecificationProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#deployment_name CcDeployment#deployment_name}
    */
    readonly deploymentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#deployment_policies CcDeployment#deployment_policies}
    */
    readonly deploymentPolicies?: CcDeployment.DeploymentPoliciesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#iot_job_configuration CcDeployment#iot_job_configuration}
    */
    readonly iotJobConfiguration?: CcDeployment.DeploymentIoTJobConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#parent_target_arn CcDeployment#parent_target_arn}
    */
    readonly parentTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#tags CcDeployment#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#target_arn CcDeployment#target_arn}
    */
    readonly targetArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment awscc_greengrassv2_deployment}
*/
export class CcDeployment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_greengrassv2_deployment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeployment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeployment to import
    * @param importFromId The id of the existing CcDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeployment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_greengrassv2_deployment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment awscc_greengrassv2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_greengrassv2_deployment',
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
        this._components.internalValue = config.components;
        this._deploymentName = config.deploymentName;
        this._deploymentPolicies.internalValue = config.deploymentPolicies;
        this._iotJobConfiguration.internalValue = config.iotJobConfiguration;
        this._parentTargetArn = config.parentTargetArn;
        this._tags = config.tags;
        this._targetArn = config.targetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // components - computed: true, optional: true, required: false
    private _components = new CcDeployment.ComponentDeploymentSpecificationPropertyMap(this, "components");
    public get components() {
        return this._components;
    }
    public putComponents(value: { [key: string]: CcDeployment.ComponentDeploymentSpecificationProperty } | cdktn.IResolvable) {
        this._components.internalValue = value;
    }
    public resetComponents() {
        this._components.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentsInput() {
        return this._components.internalValue;
    }

    // deployment_id - computed: true, optional: false, required: false
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }

    // deployment_name - computed: true, optional: true, required: false
    private _deploymentName?: string; 
    public get deploymentName() {
        return this.getStringAttribute('deployment_name');
    }
    public set deploymentName(value: string) {
        this._deploymentName = value;
    }
    public resetDeploymentName() {
        this._deploymentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentNameInput() {
        return this._deploymentName;
    }

    // deployment_policies - computed: true, optional: true, required: false
    private _deploymentPolicies = new CcDeployment.DeploymentPoliciesPropertyOutputReference(this, "deployment_policies");
    public get deploymentPolicies() {
        return this._deploymentPolicies;
    }
    public putDeploymentPolicies(value: CcDeployment.DeploymentPoliciesProperty) {
        this._deploymentPolicies.internalValue = value;
    }
    public resetDeploymentPolicies() {
        this._deploymentPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentPoliciesInput() {
        return this._deploymentPolicies.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // iot_job_configuration - computed: true, optional: true, required: false
    private _iotJobConfiguration = new CcDeployment.DeploymentIoTJobConfigurationPropertyOutputReference(this, "iot_job_configuration");
    public get iotJobConfiguration() {
        return this._iotJobConfiguration;
    }
    public putIotJobConfiguration(value: CcDeployment.DeploymentIoTJobConfigurationProperty) {
        this._iotJobConfiguration.internalValue = value;
    }
    public resetIotJobConfiguration() {
        this._iotJobConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotJobConfigurationInput() {
        return this._iotJobConfiguration.internalValue;
    }

    // parent_target_arn - computed: true, optional: true, required: false
    private _parentTargetArn?: string; 
    public get parentTargetArn() {
        return this.getStringAttribute('parent_target_arn');
    }
    public set parentTargetArn(value: string) {
        this._parentTargetArn = value;
    }
    public resetParentTargetArn() {
        this._parentTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentTargetArnInput() {
        return this._parentTargetArn;
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

    // target_arn - computed: false, optional: false, required: true
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            components: cdktn.hashMapper(ccDeploymentComponentDeploymentSpecificationPropertyToTerraform)(this._components.internalValue),
            deployment_name: cdktn.stringToTerraform(this._deploymentName),
            deployment_policies: ccDeploymentDeploymentPoliciesPropertyToTerraform(this._deploymentPolicies.internalValue),
            iot_job_configuration: ccDeploymentDeploymentIoTJobConfigurationPropertyToTerraform(this._iotJobConfiguration.internalValue),
            parent_target_arn: cdktn.stringToTerraform(this._parentTargetArn),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_arn: cdktn.stringToTerraform(this._targetArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            components: {
                value: cdktn.hashMapperHcl(ccDeploymentComponentDeploymentSpecificationPropertyToHclTerraform)(this._components.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDeployment.ComponentDeploymentSpecificationPropertyMap",
            },
            deployment_name: {
                value: cdktn.stringToHclTerraform(this._deploymentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_policies: {
                value: ccDeploymentDeploymentPoliciesPropertyToHclTerraform(this._deploymentPolicies.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeployment.DeploymentPoliciesProperty",
            },
            iot_job_configuration: {
                value: ccDeploymentDeploymentIoTJobConfigurationPropertyToHclTerraform(this._iotJobConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeployment.DeploymentIoTJobConfigurationProperty",
            },
            parent_target_arn: {
                value: cdktn.stringToHclTerraform(this._parentTargetArn),
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
            target_arn: {
                value: cdktn.stringToHclTerraform(this._targetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentComponentConfigurationUpdatePropertyToTerraform(struct?: CcDeployment.ComponentConfigurationUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        merge: cdktn.stringToTerraform(struct!.merge),
        reset: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reset),
    }
}


export function ccDeploymentComponentConfigurationUpdatePropertyToHclTerraform(struct?: CcDeployment.ComponentConfigurationUpdateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        merge: {
            value: cdktn.stringToHclTerraform(struct!.merge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reset: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reset),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentSystemResourceLimitsPropertyToTerraform(struct?: CcDeployment.SystemResourceLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpus: cdktn.numberToTerraform(struct!.cpus),
        memory: cdktn.numberToTerraform(struct!.memory),
    }
}


export function ccDeploymentSystemResourceLimitsPropertyToHclTerraform(struct?: CcDeployment.SystemResourceLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpus: {
            value: cdktn.numberToHclTerraform(struct!.cpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory: {
            value: cdktn.numberToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentComponentRunWithPropertyToTerraform(struct?: CcDeployment.ComponentRunWithProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        posix_user: cdktn.stringToTerraform(struct!.posixUser),
        system_resource_limits: ccDeploymentSystemResourceLimitsPropertyToTerraform(struct!.systemResourceLimits),
        windows_user: cdktn.stringToTerraform(struct!.windowsUser),
    }
}


export function ccDeploymentComponentRunWithPropertyToHclTerraform(struct?: CcDeployment.ComponentRunWithProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        posix_user: {
            value: cdktn.stringToHclTerraform(struct!.posixUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        system_resource_limits: {
            value: ccDeploymentSystemResourceLimitsPropertyToHclTerraform(struct!.systemResourceLimits),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemResourceLimitsProperty",
        },
        windows_user: {
            value: cdktn.stringToHclTerraform(struct!.windowsUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentComponentDeploymentSpecificationPropertyToTerraform(struct?: CcDeployment.ComponentDeploymentSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_version: cdktn.stringToTerraform(struct!.componentVersion),
        configuration_update: ccDeploymentComponentConfigurationUpdatePropertyToTerraform(struct!.configurationUpdate),
        run_with: ccDeploymentComponentRunWithPropertyToTerraform(struct!.runWith),
    }
}


export function ccDeploymentComponentDeploymentSpecificationPropertyToHclTerraform(struct?: CcDeployment.ComponentDeploymentSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_version: {
            value: cdktn.stringToHclTerraform(struct!.componentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        configuration_update: {
            value: ccDeploymentComponentConfigurationUpdatePropertyToHclTerraform(struct!.configurationUpdate),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentConfigurationUpdateProperty",
        },
        run_with: {
            value: ccDeploymentComponentRunWithPropertyToHclTerraform(struct!.runWith),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentRunWithProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentDeploymentComponentUpdatePolicyPropertyToTerraform(struct?: CcDeployment.DeploymentComponentUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
    }
}


export function ccDeploymentDeploymentComponentUpdatePolicyPropertyToHclTerraform(struct?: CcDeployment.DeploymentComponentUpdatePolicyProperty | cdktn.IResolvable): any {
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


export function ccDeploymentDeploymentConfigurationValidationPolicyPropertyToTerraform(struct?: CcDeployment.DeploymentConfigurationValidationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
    }
}


export function ccDeploymentDeploymentConfigurationValidationPolicyPropertyToHclTerraform(struct?: CcDeployment.DeploymentConfigurationValidationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccDeploymentDeploymentPoliciesPropertyToTerraform(struct?: CcDeployment.DeploymentPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_update_policy: ccDeploymentDeploymentComponentUpdatePolicyPropertyToTerraform(struct!.componentUpdatePolicy),
        configuration_validation_policy: ccDeploymentDeploymentConfigurationValidationPolicyPropertyToTerraform(struct!.configurationValidationPolicy),
        failure_handling_policy: cdktn.stringToTerraform(struct!.failureHandlingPolicy),
    }
}


export function ccDeploymentDeploymentPoliciesPropertyToHclTerraform(struct?: CcDeployment.DeploymentPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_update_policy: {
            value: ccDeploymentDeploymentComponentUpdatePolicyPropertyToHclTerraform(struct!.componentUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentComponentUpdatePolicyProperty",
        },
        configuration_validation_policy: {
            value: ccDeploymentDeploymentConfigurationValidationPolicyPropertyToHclTerraform(struct!.configurationValidationPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentConfigurationValidationPolicyProperty",
        },
        failure_handling_policy: {
            value: cdktn.stringToHclTerraform(struct!.failureHandlingPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobAbortCriteriaPropertyToTerraform(struct?: CcDeployment.IoTJobAbortCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        failure_type: cdktn.stringToTerraform(struct!.failureType),
        min_number_of_executed_things: cdktn.numberToTerraform(struct!.minNumberOfExecutedThings),
        threshold_percentage: cdktn.numberToTerraform(struct!.thresholdPercentage),
    }
}


export function ccDeploymentIoTJobAbortCriteriaPropertyToHclTerraform(struct?: CcDeployment.IoTJobAbortCriteriaProperty | cdktn.IResolvable): any {
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
        failure_type: {
            value: cdktn.stringToHclTerraform(struct!.failureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_number_of_executed_things: {
            value: cdktn.numberToHclTerraform(struct!.minNumberOfExecutedThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        threshold_percentage: {
            value: cdktn.numberToHclTerraform(struct!.thresholdPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobAbortConfigPropertyToTerraform(struct?: CcDeployment.IoTJobAbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria_list: cdktn.listMapper(ccDeploymentIoTJobAbortCriteriaPropertyToTerraform, false)(struct!.criteriaList),
    }
}


export function ccDeploymentIoTJobAbortConfigPropertyToHclTerraform(struct?: CcDeployment.IoTJobAbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria_list: {
            value: cdktn.listMapperHcl(ccDeploymentIoTJobAbortCriteriaPropertyToHclTerraform, false)(struct!.criteriaList),
            isBlock: true,
            type: "list",
            storageClassType: "IoTJobAbortCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobRateIncreaseCriteriaPropertyToTerraform(struct?: CcDeployment.IoTJobRateIncreaseCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_of_notified_things: cdktn.numberToTerraform(struct!.numberOfNotifiedThings),
        number_of_succeeded_things: cdktn.numberToTerraform(struct!.numberOfSucceededThings),
    }
}


export function ccDeploymentIoTJobRateIncreaseCriteriaPropertyToHclTerraform(struct?: CcDeployment.IoTJobRateIncreaseCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_of_notified_things: {
            value: cdktn.numberToHclTerraform(struct!.numberOfNotifiedThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_succeeded_things: {
            value: cdktn.numberToHclTerraform(struct!.numberOfSucceededThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobExponentialRolloutRatePropertyToTerraform(struct?: CcDeployment.IoTJobExponentialRolloutRateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_rate_per_minute: cdktn.numberToTerraform(struct!.baseRatePerMinute),
        increment_factor: cdktn.numberToTerraform(struct!.incrementFactor),
        rate_increase_criteria: ccDeploymentIoTJobRateIncreaseCriteriaPropertyToTerraform(struct!.rateIncreaseCriteria),
    }
}


export function ccDeploymentIoTJobExponentialRolloutRatePropertyToHclTerraform(struct?: CcDeployment.IoTJobExponentialRolloutRateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_rate_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.baseRatePerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        increment_factor: {
            value: cdktn.numberToHclTerraform(struct!.incrementFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rate_increase_criteria: {
            value: ccDeploymentIoTJobRateIncreaseCriteriaPropertyToHclTerraform(struct!.rateIncreaseCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTJobRateIncreaseCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobExecutionsRolloutConfigPropertyToTerraform(struct?: CcDeployment.IoTJobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exponential_rate: ccDeploymentIoTJobExponentialRolloutRatePropertyToTerraform(struct!.exponentialRate),
        maximum_per_minute: cdktn.numberToTerraform(struct!.maximumPerMinute),
    }
}


export function ccDeploymentIoTJobExecutionsRolloutConfigPropertyToHclTerraform(struct?: CcDeployment.IoTJobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exponential_rate: {
            value: ccDeploymentIoTJobExponentialRolloutRatePropertyToHclTerraform(struct!.exponentialRate),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTJobExponentialRolloutRateProperty",
        },
        maximum_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.maximumPerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentIoTJobTimeoutConfigPropertyToTerraform(struct?: CcDeployment.IoTJobTimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        in_progress_timeout_in_minutes: cdktn.numberToTerraform(struct!.inProgressTimeoutInMinutes),
    }
}


export function ccDeploymentIoTJobTimeoutConfigPropertyToHclTerraform(struct?: CcDeployment.IoTJobTimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        in_progress_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.inProgressTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentDeploymentIoTJobConfigurationPropertyToTerraform(struct?: CcDeployment.DeploymentIoTJobConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        abort_config: ccDeploymentIoTJobAbortConfigPropertyToTerraform(struct!.abortConfig),
        job_executions_rollout_config: ccDeploymentIoTJobExecutionsRolloutConfigPropertyToTerraform(struct!.jobExecutionsRolloutConfig),
        timeout_config: ccDeploymentIoTJobTimeoutConfigPropertyToTerraform(struct!.timeoutConfig),
    }
}


export function ccDeploymentDeploymentIoTJobConfigurationPropertyToHclTerraform(struct?: CcDeployment.DeploymentIoTJobConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        abort_config: {
            value: ccDeploymentIoTJobAbortConfigPropertyToHclTerraform(struct!.abortConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTJobAbortConfigProperty",
        },
        job_executions_rollout_config: {
            value: ccDeploymentIoTJobExecutionsRolloutConfigPropertyToHclTerraform(struct!.jobExecutionsRolloutConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTJobExecutionsRolloutConfigProperty",
        },
        timeout_config: {
            value: ccDeploymentIoTJobTimeoutConfigPropertyToHclTerraform(struct!.timeoutConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "IoTJobTimeoutConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDeployment {
export interface ComponentConfigurationUpdateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#merge CcDeployment#merge}
    */
    readonly merge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#reset CcDeployment#reset}
    */
    readonly reset?: string[];
}
export class ComponentConfigurationUpdatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentConfigurationUpdateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._merge !== undefined) {
            hasAnyValues = true;
            internalValueResult.merge = this._merge;
        }
        if (this._reset !== undefined) {
            hasAnyValues = true;
            internalValueResult.reset = this._reset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentConfigurationUpdateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._merge = undefined;
            this._reset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._merge = value.merge;
            this._reset = value.reset;
        }
    }

    // merge - computed: true, optional: true, required: false
    private _merge?: string; 
    public get merge() {
        return this.getStringAttribute('merge');
    }
    public set merge(value: string) {
        this._merge = value;
    }
    public resetMerge() {
        this._merge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergeInput() {
        return this._merge;
    }

    // reset - computed: true, optional: true, required: false
    private _reset?: string[]; 
    public get reset() {
        return this.getListAttribute('reset');
    }
    public set reset(value: string[]) {
        this._reset = value;
    }
    public resetReset() {
        this._reset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resetInput() {
        return this._reset;
    }
}
export interface SystemResourceLimitsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#cpus CcDeployment#cpus}
    */
    readonly cpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#memory CcDeployment#memory}
    */
    readonly memory?: number;
}
export class SystemResourceLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemResourceLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpus = this._cpus;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemResourceLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpus = undefined;
            this._memory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpus = value.cpus;
            this._memory = value.memory;
        }
    }

    // cpus - computed: true, optional: true, required: false
    private _cpus?: number; 
    public get cpus() {
        return this.getNumberAttribute('cpus');
    }
    public set cpus(value: number) {
        this._cpus = value;
    }
    public resetCpus() {
        this._cpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpusInput() {
        return this._cpus;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: number; 
    public get memory() {
        return this.getNumberAttribute('memory');
    }
    public set memory(value: number) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }
}
export interface ComponentRunWithProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#posix_user CcDeployment#posix_user}
    */
    readonly posixUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#system_resource_limits CcDeployment#system_resource_limits}
    */
    readonly systemResourceLimits?: SystemResourceLimitsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#windows_user CcDeployment#windows_user}
    */
    readonly windowsUser?: string;
}
export class ComponentRunWithPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentRunWithProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._posixUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.posixUser = this._posixUser;
        }
        if (this._systemResourceLimits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemResourceLimits = this._systemResourceLimits?.internalValue;
        }
        if (this._windowsUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsUser = this._windowsUser;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentRunWithProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._posixUser = undefined;
            this._systemResourceLimits.internalValue = undefined;
            this._windowsUser = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._posixUser = value.posixUser;
            this._systemResourceLimits.internalValue = value.systemResourceLimits;
            this._windowsUser = value.windowsUser;
        }
    }

    // posix_user - computed: true, optional: true, required: false
    private _posixUser?: string; 
    public get posixUser() {
        return this.getStringAttribute('posix_user');
    }
    public set posixUser(value: string) {
        this._posixUser = value;
    }
    public resetPosixUser() {
        this._posixUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixUserInput() {
        return this._posixUser;
    }

    // system_resource_limits - computed: true, optional: true, required: false
    private _systemResourceLimits = new SystemResourceLimitsPropertyOutputReference(this, "system_resource_limits");
    public get systemResourceLimits() {
        return this._systemResourceLimits;
    }
    public putSystemResourceLimits(value: SystemResourceLimitsProperty) {
        this._systemResourceLimits.internalValue = value;
    }
    public resetSystemResourceLimits() {
        this._systemResourceLimits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemResourceLimitsInput() {
        return this._systemResourceLimits.internalValue;
    }

    // windows_user - computed: true, optional: true, required: false
    private _windowsUser?: string; 
    public get windowsUser() {
        return this.getStringAttribute('windows_user');
    }
    public set windowsUser(value: string) {
        this._windowsUser = value;
    }
    public resetWindowsUser() {
        this._windowsUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsUserInput() {
        return this._windowsUser;
    }
}
export interface ComponentDeploymentSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#component_version CcDeployment#component_version}
    */
    readonly componentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#configuration_update CcDeployment#configuration_update}
    */
    readonly configurationUpdate?: ComponentConfigurationUpdateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#run_with CcDeployment#run_with}
    */
    readonly runWith?: ComponentRunWithProperty;
}
export class ComponentDeploymentSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentDeploymentSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentVersion = this._componentVersion;
        }
        if (this._configurationUpdate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationUpdate = this._configurationUpdate?.internalValue;
        }
        if (this._runWith?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runWith = this._runWith?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentDeploymentSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentVersion = undefined;
            this._configurationUpdate.internalValue = undefined;
            this._runWith.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentVersion = value.componentVersion;
            this._configurationUpdate.internalValue = value.configurationUpdate;
            this._runWith.internalValue = value.runWith;
        }
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

    // configuration_update - computed: true, optional: true, required: false
    private _configurationUpdate = new ComponentConfigurationUpdatePropertyOutputReference(this, "configuration_update");
    public get configurationUpdate() {
        return this._configurationUpdate;
    }
    public putConfigurationUpdate(value: ComponentConfigurationUpdateProperty) {
        this._configurationUpdate.internalValue = value;
    }
    public resetConfigurationUpdate() {
        this._configurationUpdate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationUpdateInput() {
        return this._configurationUpdate.internalValue;
    }

    // run_with - computed: true, optional: true, required: false
    private _runWith = new ComponentRunWithPropertyOutputReference(this, "run_with");
    public get runWith() {
        return this._runWith;
    }
    public putRunWith(value: ComponentRunWithProperty) {
        this._runWith.internalValue = value;
    }
    public resetRunWith() {
        this._runWith.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runWithInput() {
        return this._runWith.internalValue;
    }
}

export class ComponentDeploymentSpecificationPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ComponentDeploymentSpecificationProperty } | cdktn.IResolvable

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
    public get(key: string): ComponentDeploymentSpecificationPropertyOutputReference {
        return new ComponentDeploymentSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface DeploymentComponentUpdatePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#action CcDeployment#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#timeout_in_seconds CcDeployment#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export class DeploymentComponentUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentComponentUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentComponentUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._timeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._timeoutInSeconds = value.timeoutInSeconds;
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
export interface DeploymentConfigurationValidationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#timeout_in_seconds CcDeployment#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export class DeploymentConfigurationValidationPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentConfigurationValidationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentConfigurationValidationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeoutInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeoutInSeconds = value.timeoutInSeconds;
        }
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
export interface DeploymentPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#component_update_policy CcDeployment#component_update_policy}
    */
    readonly componentUpdatePolicy?: DeploymentComponentUpdatePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#configuration_validation_policy CcDeployment#configuration_validation_policy}
    */
    readonly configurationValidationPolicy?: DeploymentConfigurationValidationPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#failure_handling_policy CcDeployment#failure_handling_policy}
    */
    readonly failureHandlingPolicy?: string;
}
export class DeploymentPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentUpdatePolicy = this._componentUpdatePolicy?.internalValue;
        }
        if (this._configurationValidationPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationValidationPolicy = this._configurationValidationPolicy?.internalValue;
        }
        if (this._failureHandlingPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureHandlingPolicy = this._failureHandlingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentUpdatePolicy.internalValue = undefined;
            this._configurationValidationPolicy.internalValue = undefined;
            this._failureHandlingPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentUpdatePolicy.internalValue = value.componentUpdatePolicy;
            this._configurationValidationPolicy.internalValue = value.configurationValidationPolicy;
            this._failureHandlingPolicy = value.failureHandlingPolicy;
        }
    }

    // component_update_policy - computed: true, optional: true, required: false
    private _componentUpdatePolicy = new DeploymentComponentUpdatePolicyPropertyOutputReference(this, "component_update_policy");
    public get componentUpdatePolicy() {
        return this._componentUpdatePolicy;
    }
    public putComponentUpdatePolicy(value: DeploymentComponentUpdatePolicyProperty) {
        this._componentUpdatePolicy.internalValue = value;
    }
    public resetComponentUpdatePolicy() {
        this._componentUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentUpdatePolicyInput() {
        return this._componentUpdatePolicy.internalValue;
    }

    // configuration_validation_policy - computed: true, optional: true, required: false
    private _configurationValidationPolicy = new DeploymentConfigurationValidationPolicyPropertyOutputReference(this, "configuration_validation_policy");
    public get configurationValidationPolicy() {
        return this._configurationValidationPolicy;
    }
    public putConfigurationValidationPolicy(value: DeploymentConfigurationValidationPolicyProperty) {
        this._configurationValidationPolicy.internalValue = value;
    }
    public resetConfigurationValidationPolicy() {
        this._configurationValidationPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationValidationPolicyInput() {
        return this._configurationValidationPolicy.internalValue;
    }

    // failure_handling_policy - computed: true, optional: true, required: false
    private _failureHandlingPolicy?: string; 
    public get failureHandlingPolicy() {
        return this.getStringAttribute('failure_handling_policy');
    }
    public set failureHandlingPolicy(value: string) {
        this._failureHandlingPolicy = value;
    }
    public resetFailureHandlingPolicy() {
        this._failureHandlingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureHandlingPolicyInput() {
        return this._failureHandlingPolicy;
    }
}
export interface IoTJobAbortCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#action CcDeployment#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#failure_type CcDeployment#failure_type}
    */
    readonly failureType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#min_number_of_executed_things CcDeployment#min_number_of_executed_things}
    */
    readonly minNumberOfExecutedThings?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#threshold_percentage CcDeployment#threshold_percentage}
    */
    readonly thresholdPercentage?: number;
}
export class IoTJobAbortCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IoTJobAbortCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._failureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureType = this._failureType;
        }
        if (this._minNumberOfExecutedThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.minNumberOfExecutedThings = this._minNumberOfExecutedThings;
        }
        if (this._thresholdPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdPercentage = this._thresholdPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobAbortCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._failureType = undefined;
            this._minNumberOfExecutedThings = undefined;
            this._thresholdPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._failureType = value.failureType;
            this._minNumberOfExecutedThings = value.minNumberOfExecutedThings;
            this._thresholdPercentage = value.thresholdPercentage;
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

    // failure_type - computed: true, optional: true, required: false
    private _failureType?: string; 
    public get failureType() {
        return this.getStringAttribute('failure_type');
    }
    public set failureType(value: string) {
        this._failureType = value;
    }
    public resetFailureType() {
        this._failureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureTypeInput() {
        return this._failureType;
    }

    // min_number_of_executed_things - computed: true, optional: true, required: false
    private _minNumberOfExecutedThings?: number; 
    public get minNumberOfExecutedThings() {
        return this.getNumberAttribute('min_number_of_executed_things');
    }
    public set minNumberOfExecutedThings(value: number) {
        this._minNumberOfExecutedThings = value;
    }
    public resetMinNumberOfExecutedThings() {
        this._minNumberOfExecutedThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minNumberOfExecutedThingsInput() {
        return this._minNumberOfExecutedThings;
    }

    // threshold_percentage - computed: true, optional: true, required: false
    private _thresholdPercentage?: number; 
    public get thresholdPercentage() {
        return this.getNumberAttribute('threshold_percentage');
    }
    public set thresholdPercentage(value: number) {
        this._thresholdPercentage = value;
    }
    public resetThresholdPercentage() {
        this._thresholdPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdPercentageInput() {
        return this._thresholdPercentage;
    }
}

export class IoTJobAbortCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : IoTJobAbortCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): IoTJobAbortCriteriaPropertyOutputReference {
        return new IoTJobAbortCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IoTJobAbortConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#criteria_list CcDeployment#criteria_list}
    */
    readonly criteriaList?: IoTJobAbortCriteriaProperty[] | cdktn.IResolvable;
}
export class IoTJobAbortConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTJobAbortConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criteriaList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteriaList = this._criteriaList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobAbortConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criteriaList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criteriaList.internalValue = value.criteriaList;
        }
    }

    // criteria_list - computed: true, optional: true, required: false
    private _criteriaList = new IoTJobAbortCriteriaPropertyList(this, "criteria_list", false);
    public get criteriaList() {
        return this._criteriaList;
    }
    public putCriteriaList(value: IoTJobAbortCriteriaProperty[] | cdktn.IResolvable) {
        this._criteriaList.internalValue = value;
    }
    public resetCriteriaList() {
        this._criteriaList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaListInput() {
        return this._criteriaList.internalValue;
    }
}
export interface IoTJobRateIncreaseCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#number_of_notified_things CcDeployment#number_of_notified_things}
    */
    readonly numberOfNotifiedThings?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#number_of_succeeded_things CcDeployment#number_of_succeeded_things}
    */
    readonly numberOfSucceededThings?: number;
}
export class IoTJobRateIncreaseCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTJobRateIncreaseCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberOfNotifiedThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfNotifiedThings = this._numberOfNotifiedThings;
        }
        if (this._numberOfSucceededThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfSucceededThings = this._numberOfSucceededThings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobRateIncreaseCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberOfNotifiedThings = undefined;
            this._numberOfSucceededThings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberOfNotifiedThings = value.numberOfNotifiedThings;
            this._numberOfSucceededThings = value.numberOfSucceededThings;
        }
    }

    // number_of_notified_things - computed: true, optional: true, required: false
    private _numberOfNotifiedThings?: number; 
    public get numberOfNotifiedThings() {
        return this.getNumberAttribute('number_of_notified_things');
    }
    public set numberOfNotifiedThings(value: number) {
        this._numberOfNotifiedThings = value;
    }
    public resetNumberOfNotifiedThings() {
        this._numberOfNotifiedThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNotifiedThingsInput() {
        return this._numberOfNotifiedThings;
    }

    // number_of_succeeded_things - computed: true, optional: true, required: false
    private _numberOfSucceededThings?: number; 
    public get numberOfSucceededThings() {
        return this.getNumberAttribute('number_of_succeeded_things');
    }
    public set numberOfSucceededThings(value: number) {
        this._numberOfSucceededThings = value;
    }
    public resetNumberOfSucceededThings() {
        this._numberOfSucceededThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfSucceededThingsInput() {
        return this._numberOfSucceededThings;
    }
}
export interface IoTJobExponentialRolloutRateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#base_rate_per_minute CcDeployment#base_rate_per_minute}
    */
    readonly baseRatePerMinute?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#increment_factor CcDeployment#increment_factor}
    */
    readonly incrementFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#rate_increase_criteria CcDeployment#rate_increase_criteria}
    */
    readonly rateIncreaseCriteria?: IoTJobRateIncreaseCriteriaProperty;
}
export class IoTJobExponentialRolloutRatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTJobExponentialRolloutRateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseRatePerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseRatePerMinute = this._baseRatePerMinute;
        }
        if (this._incrementFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.incrementFactor = this._incrementFactor;
        }
        if (this._rateIncreaseCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateIncreaseCriteria = this._rateIncreaseCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobExponentialRolloutRateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseRatePerMinute = undefined;
            this._incrementFactor = undefined;
            this._rateIncreaseCriteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseRatePerMinute = value.baseRatePerMinute;
            this._incrementFactor = value.incrementFactor;
            this._rateIncreaseCriteria.internalValue = value.rateIncreaseCriteria;
        }
    }

    // base_rate_per_minute - computed: true, optional: true, required: false
    private _baseRatePerMinute?: number; 
    public get baseRatePerMinute() {
        return this.getNumberAttribute('base_rate_per_minute');
    }
    public set baseRatePerMinute(value: number) {
        this._baseRatePerMinute = value;
    }
    public resetBaseRatePerMinute() {
        this._baseRatePerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseRatePerMinuteInput() {
        return this._baseRatePerMinute;
    }

    // increment_factor - computed: true, optional: true, required: false
    private _incrementFactor?: number; 
    public get incrementFactor() {
        return this.getNumberAttribute('increment_factor');
    }
    public set incrementFactor(value: number) {
        this._incrementFactor = value;
    }
    public resetIncrementFactor() {
        this._incrementFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incrementFactorInput() {
        return this._incrementFactor;
    }

    // rate_increase_criteria - computed: true, optional: true, required: false
    private _rateIncreaseCriteria = new IoTJobRateIncreaseCriteriaPropertyOutputReference(this, "rate_increase_criteria");
    public get rateIncreaseCriteria() {
        return this._rateIncreaseCriteria;
    }
    public putRateIncreaseCriteria(value: IoTJobRateIncreaseCriteriaProperty) {
        this._rateIncreaseCriteria.internalValue = value;
    }
    public resetRateIncreaseCriteria() {
        this._rateIncreaseCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateIncreaseCriteriaInput() {
        return this._rateIncreaseCriteria.internalValue;
    }
}
export interface IoTJobExecutionsRolloutConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#exponential_rate CcDeployment#exponential_rate}
    */
    readonly exponentialRate?: IoTJobExponentialRolloutRateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#maximum_per_minute CcDeployment#maximum_per_minute}
    */
    readonly maximumPerMinute?: number;
}
export class IoTJobExecutionsRolloutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTJobExecutionsRolloutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exponentialRate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exponentialRate = this._exponentialRate?.internalValue;
        }
        if (this._maximumPerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumPerMinute = this._maximumPerMinute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobExecutionsRolloutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exponentialRate.internalValue = undefined;
            this._maximumPerMinute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exponentialRate.internalValue = value.exponentialRate;
            this._maximumPerMinute = value.maximumPerMinute;
        }
    }

    // exponential_rate - computed: true, optional: true, required: false
    private _exponentialRate = new IoTJobExponentialRolloutRatePropertyOutputReference(this, "exponential_rate");
    public get exponentialRate() {
        return this._exponentialRate;
    }
    public putExponentialRate(value: IoTJobExponentialRolloutRateProperty) {
        this._exponentialRate.internalValue = value;
    }
    public resetExponentialRate() {
        this._exponentialRate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exponentialRateInput() {
        return this._exponentialRate.internalValue;
    }

    // maximum_per_minute - computed: true, optional: true, required: false
    private _maximumPerMinute?: number; 
    public get maximumPerMinute() {
        return this.getNumberAttribute('maximum_per_minute');
    }
    public set maximumPerMinute(value: number) {
        this._maximumPerMinute = value;
    }
    public resetMaximumPerMinute() {
        this._maximumPerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumPerMinuteInput() {
        return this._maximumPerMinute;
    }
}
export interface IoTJobTimeoutConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes CcDeployment#in_progress_timeout_in_minutes}
    */
    readonly inProgressTimeoutInMinutes?: number;
}
export class IoTJobTimeoutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IoTJobTimeoutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inProgressTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.inProgressTimeoutInMinutes = this._inProgressTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IoTJobTimeoutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inProgressTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inProgressTimeoutInMinutes = value.inProgressTimeoutInMinutes;
        }
    }

    // in_progress_timeout_in_minutes - computed: true, optional: true, required: false
    private _inProgressTimeoutInMinutes?: number; 
    public get inProgressTimeoutInMinutes() {
        return this.getNumberAttribute('in_progress_timeout_in_minutes');
    }
    public set inProgressTimeoutInMinutes(value: number) {
        this._inProgressTimeoutInMinutes = value;
    }
    public resetInProgressTimeoutInMinutes() {
        this._inProgressTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inProgressTimeoutInMinutesInput() {
        return this._inProgressTimeoutInMinutes;
    }
}
export interface DeploymentIoTJobConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#abort_config CcDeployment#abort_config}
    */
    readonly abortConfig?: IoTJobAbortConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#job_executions_rollout_config CcDeployment#job_executions_rollout_config}
    */
    readonly jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/greengrassv2_deployment#timeout_config CcDeployment#timeout_config}
    */
    readonly timeoutConfig?: IoTJobTimeoutConfigProperty;
}
export class DeploymentIoTJobConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentIoTJobConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._abortConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abortConfig = this._abortConfig?.internalValue;
        }
        if (this._jobExecutionsRolloutConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobExecutionsRolloutConfig = this._jobExecutionsRolloutConfig?.internalValue;
        }
        if (this._timeoutConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutConfig = this._timeoutConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentIoTJobConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abortConfig.internalValue = undefined;
            this._jobExecutionsRolloutConfig.internalValue = undefined;
            this._timeoutConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abortConfig.internalValue = value.abortConfig;
            this._jobExecutionsRolloutConfig.internalValue = value.jobExecutionsRolloutConfig;
            this._timeoutConfig.internalValue = value.timeoutConfig;
        }
    }

    // abort_config - computed: true, optional: true, required: false
    private _abortConfig = new IoTJobAbortConfigPropertyOutputReference(this, "abort_config");
    public get abortConfig() {
        return this._abortConfig;
    }
    public putAbortConfig(value: IoTJobAbortConfigProperty) {
        this._abortConfig.internalValue = value;
    }
    public resetAbortConfig() {
        this._abortConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get abortConfigInput() {
        return this._abortConfig.internalValue;
    }

    // job_executions_rollout_config - computed: true, optional: true, required: false
    private _jobExecutionsRolloutConfig = new IoTJobExecutionsRolloutConfigPropertyOutputReference(this, "job_executions_rollout_config");
    public get jobExecutionsRolloutConfig() {
        return this._jobExecutionsRolloutConfig;
    }
    public putJobExecutionsRolloutConfig(value: IoTJobExecutionsRolloutConfigProperty) {
        this._jobExecutionsRolloutConfig.internalValue = value;
    }
    public resetJobExecutionsRolloutConfig() {
        this._jobExecutionsRolloutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobExecutionsRolloutConfigInput() {
        return this._jobExecutionsRolloutConfig.internalValue;
    }

    // timeout_config - computed: true, optional: true, required: false
    private _timeoutConfig = new IoTJobTimeoutConfigPropertyOutputReference(this, "timeout_config");
    public get timeoutConfig() {
        return this._timeoutConfig;
    }
    public putTimeoutConfig(value: IoTJobTimeoutConfigProperty) {
        this._timeoutConfig.internalValue = value;
    }
    public resetTimeoutConfig() {
        this._timeoutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutConfigInput() {
        return this._timeoutConfig.internalValue;
    }
}
}
