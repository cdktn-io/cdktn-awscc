// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcComputeEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#compute_environment_name CcComputeEnvironment#compute_environment_name}
    */
    readonly computeEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#compute_resources CcComputeEnvironment#compute_resources}
    */
    readonly computeResources?: CcComputeEnvironment.ComputeResourcesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#context CcComputeEnvironment#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#ecs_settings CcComputeEnvironment#ecs_settings}
    */
    readonly ecsSettings?: CcComputeEnvironment.EcsSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#eks_configuration CcComputeEnvironment#eks_configuration}
    */
    readonly eksConfiguration?: CcComputeEnvironment.EksConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#replace_compute_environment CcComputeEnvironment#replace_compute_environment}
    */
    readonly replaceComputeEnvironment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#service_role CcComputeEnvironment#service_role}
    */
    readonly serviceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#state CcComputeEnvironment#state}
    */
    readonly state?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#tags CcComputeEnvironment#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#type CcComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#unmanagedv_cpus CcComputeEnvironment#unmanagedv_cpus}
    */
    readonly unmanagedvCpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#update_policy CcComputeEnvironment#update_policy}
    */
    readonly updatePolicy?: CcComputeEnvironment.UpdatePolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment awscc_batch_compute_environment}
*/
export class CcComputeEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_batch_compute_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcComputeEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcComputeEnvironment to import
    * @param importFromId The id of the existing CcComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcComputeEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_compute_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment awscc_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcComputeEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcComputeEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_batch_compute_environment',
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
        this._computeEnvironmentName = config.computeEnvironmentName;
        this._computeResources.internalValue = config.computeResources;
        this._context = config.context;
        this._ecsSettings.internalValue = config.ecsSettings;
        this._eksConfiguration.internalValue = config.eksConfiguration;
        this._replaceComputeEnvironment = config.replaceComputeEnvironment;
        this._serviceRole = config.serviceRole;
        this._state = config.state;
        this._tags = config.tags;
        this._type = config.type;
        this._unmanagedvCpus = config.unmanagedvCpus;
        this._updatePolicy.internalValue = config.updatePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_environment_arn - computed: true, optional: false, required: false
    public get computeEnvironmentArn() {
        return this.getStringAttribute('compute_environment_arn');
    }

    // compute_environment_name - computed: true, optional: true, required: false
    private _computeEnvironmentName?: string; 
    public get computeEnvironmentName() {
        return this.getStringAttribute('compute_environment_name');
    }
    public set computeEnvironmentName(value: string) {
        this._computeEnvironmentName = value;
    }
    public resetComputeEnvironmentName() {
        this._computeEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentNameInput() {
        return this._computeEnvironmentName;
    }

    // compute_resources - computed: true, optional: true, required: false
    private _computeResources = new CcComputeEnvironment.ComputeResourcesPropertyOutputReference(this, "compute_resources");
    public get computeResources() {
        return this._computeResources;
    }
    public putComputeResources(value: CcComputeEnvironment.ComputeResourcesProperty) {
        this._computeResources.internalValue = value;
    }
    public resetComputeResources() {
        this._computeResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeResourcesInput() {
        return this._computeResources.internalValue;
    }

    // context - computed: true, optional: true, required: false
    private _context?: string; 
    public get context() {
        return this.getStringAttribute('context');
    }
    public set context(value: string) {
        this._context = value;
    }
    public resetContext() {
        this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextInput() {
        return this._context;
    }

    // ecs_settings - computed: true, optional: true, required: false
    private _ecsSettings = new CcComputeEnvironment.EcsSettingsPropertyOutputReference(this, "ecs_settings");
    public get ecsSettings() {
        return this._ecsSettings;
    }
    public putEcsSettings(value: CcComputeEnvironment.EcsSettingsProperty) {
        this._ecsSettings.internalValue = value;
    }
    public resetEcsSettings() {
        this._ecsSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsSettingsInput() {
        return this._ecsSettings.internalValue;
    }

    // eks_configuration - computed: true, optional: true, required: false
    private _eksConfiguration = new CcComputeEnvironment.EksConfigurationPropertyOutputReference(this, "eks_configuration");
    public get eksConfiguration() {
        return this._eksConfiguration;
    }
    public putEksConfiguration(value: CcComputeEnvironment.EksConfigurationProperty) {
        this._eksConfiguration.internalValue = value;
    }
    public resetEksConfiguration() {
        this._eksConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksConfigurationInput() {
        return this._eksConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // replace_compute_environment - computed: true, optional: true, required: false
    private _replaceComputeEnvironment?: boolean | cdktn.IResolvable; 
    public get replaceComputeEnvironment() {
        return this.getBooleanAttribute('replace_compute_environment');
    }
    public set replaceComputeEnvironment(value: boolean | cdktn.IResolvable) {
        this._replaceComputeEnvironment = value;
    }
    public resetReplaceComputeEnvironment() {
        this._replaceComputeEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceComputeEnvironmentInput() {
        return this._replaceComputeEnvironment;
    }

    // service_role - computed: true, optional: true, required: false
    private _serviceRole?: string; 
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
        this._serviceRole = value;
    }
    public resetServiceRole() {
        this._serviceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
        return this._serviceRole;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // unmanagedv_cpus - computed: true, optional: true, required: false
    private _unmanagedvCpus?: number; 
    public get unmanagedvCpus() {
        return this.getNumberAttribute('unmanagedv_cpus');
    }
    public set unmanagedvCpus(value: number) {
        this._unmanagedvCpus = value;
    }
    public resetUnmanagedvCpus() {
        this._unmanagedvCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unmanagedvCpusInput() {
        return this._unmanagedvCpus;
    }

    // update_policy - computed: true, optional: true, required: false
    private _updatePolicy = new CcComputeEnvironment.UpdatePolicyPropertyOutputReference(this, "update_policy");
    public get updatePolicy() {
        return this._updatePolicy;
    }
    public putUpdatePolicy(value: CcComputeEnvironment.UpdatePolicyProperty) {
        this._updatePolicy.internalValue = value;
    }
    public resetUpdatePolicy() {
        this._updatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatePolicyInput() {
        return this._updatePolicy.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compute_environment_name: cdktn.stringToTerraform(this._computeEnvironmentName),
            compute_resources: ccComputeEnvironmentComputeResourcesPropertyToTerraform(this._computeResources.internalValue),
            context: cdktn.stringToTerraform(this._context),
            ecs_settings: ccComputeEnvironmentEcsSettingsPropertyToTerraform(this._ecsSettings.internalValue),
            eks_configuration: ccComputeEnvironmentEksConfigurationPropertyToTerraform(this._eksConfiguration.internalValue),
            replace_compute_environment: cdktn.booleanToTerraform(this._replaceComputeEnvironment),
            service_role: cdktn.stringToTerraform(this._serviceRole),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
            unmanagedv_cpus: cdktn.numberToTerraform(this._unmanagedvCpus),
            update_policy: ccComputeEnvironmentUpdatePolicyPropertyToTerraform(this._updatePolicy.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_environment_name: {
                value: cdktn.stringToHclTerraform(this._computeEnvironmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_resources: {
                value: ccComputeEnvironmentComputeResourcesPropertyToHclTerraform(this._computeResources.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeEnvironment.ComputeResourcesProperty",
            },
            context: {
                value: cdktn.stringToHclTerraform(this._context),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ecs_settings: {
                value: ccComputeEnvironmentEcsSettingsPropertyToHclTerraform(this._ecsSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeEnvironment.EcsSettingsProperty",
            },
            eks_configuration: {
                value: ccComputeEnvironmentEksConfigurationPropertyToHclTerraform(this._eksConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeEnvironment.EksConfigurationProperty",
            },
            replace_compute_environment: {
                value: cdktn.booleanToHclTerraform(this._replaceComputeEnvironment),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            service_role: {
                value: cdktn.stringToHclTerraform(this._serviceRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
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
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unmanagedv_cpus: {
                value: cdktn.numberToHclTerraform(this._unmanagedvCpus),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            update_policy: {
                value: ccComputeEnvironmentUpdatePolicyPropertyToHclTerraform(this._updatePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcComputeEnvironment.UpdatePolicyProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccComputeEnvironmentEc2ConfigurationObjectPropertyToTerraform(struct?: CcComputeEnvironment.Ec2ConfigurationObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_image_status: cdktn.stringToTerraform(struct!.batchImageStatus),
        image_id_override: cdktn.stringToTerraform(struct!.imageIdOverride),
        image_kubernetes_version: cdktn.stringToTerraform(struct!.imageKubernetesVersion),
        image_type: cdktn.stringToTerraform(struct!.imageType),
    }
}


export function ccComputeEnvironmentEc2ConfigurationObjectPropertyToHclTerraform(struct?: CcComputeEnvironment.Ec2ConfigurationObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_image_status: {
            value: cdktn.stringToHclTerraform(struct!.batchImageStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_id_override: {
            value: cdktn.stringToHclTerraform(struct!.imageIdOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_kubernetes_version: {
            value: cdktn.stringToHclTerraform(struct!.imageKubernetesVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_type: {
            value: cdktn.stringToHclTerraform(struct!.imageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentLaunchTemplateSpecificationOverridePropertyToTerraform(struct?: CcComputeEnvironment.LaunchTemplateSpecificationOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
        target_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetInstanceTypes),
        userdata_type: cdktn.stringToTerraform(struct!.userdataType),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccComputeEnvironmentLaunchTemplateSpecificationOverridePropertyToHclTerraform(struct?: CcComputeEnvironment.LaunchTemplateSpecificationOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_id: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        userdata_type: {
            value: cdktn.stringToHclTerraform(struct!.userdataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentLaunchTemplateSpecificationPropertyToTerraform(struct?: CcComputeEnvironment.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
        overrides: cdktn.listMapper(ccComputeEnvironmentLaunchTemplateSpecificationOverridePropertyToTerraform, false)(struct!.overrides),
        userdata_type: cdktn.stringToTerraform(struct!.userdataType),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccComputeEnvironmentLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcComputeEnvironment.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_id: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccComputeEnvironmentLaunchTemplateSpecificationOverridePropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateSpecificationOverridePropertyList",
        },
        userdata_type: {
            value: cdktn.stringToHclTerraform(struct!.userdataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentInfrastructureOptimizationPropertyToTerraform(struct?: CcComputeEnvironment.InfrastructureOptimizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_in_after: cdktn.numberToTerraform(struct!.scaleInAfter),
    }
}


export function ccComputeEnvironmentInfrastructureOptimizationPropertyToHclTerraform(struct?: CcComputeEnvironment.InfrastructureOptimizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_in_after: {
            value: cdktn.numberToHclTerraform(struct!.scaleInAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentCapacityReservationsPropertyToTerraform(struct?: CcComputeEnvironment.CapacityReservationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reservation_group_arn: cdktn.stringToTerraform(struct!.reservationGroupArn),
        reservation_preference: cdktn.stringToTerraform(struct!.reservationPreference),
    }
}


export function ccComputeEnvironmentCapacityReservationsPropertyToHclTerraform(struct?: CcComputeEnvironment.CapacityReservationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reservation_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.reservationGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reservation_preference: {
            value: cdktn.stringToHclTerraform(struct!.reservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentInstanceRequirementsPropertyToTerraform(struct?: CcComputeEnvironment.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
    }
}


export function ccComputeEnvironmentInstanceRequirementsPropertyToHclTerraform(struct?: CcComputeEnvironment.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentManagedInstancesLocalStorageConfigurationPropertyToTerraform(struct?: CcComputeEnvironment.ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        use_local_storage: cdktn.booleanToTerraform(struct!.useLocalStorage),
    }
}


export function ccComputeEnvironmentManagedInstancesLocalStorageConfigurationPropertyToHclTerraform(struct?: CcComputeEnvironment.ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        use_local_storage: {
            value: cdktn.booleanToHclTerraform(struct!.useLocalStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentManagedInstancesNetworkConfigurationPropertyToTerraform(struct?: CcComputeEnvironment.ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccComputeEnvironmentManagedInstancesNetworkConfigurationPropertyToHclTerraform(struct?: CcComputeEnvironment.ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentManagedInstancesStorageConfigurationPropertyToTerraform(struct?: CcComputeEnvironment.ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_size_gi_b: cdktn.numberToTerraform(struct!.storageSizeGiB),
    }
}


export function ccComputeEnvironmentManagedInstancesStorageConfigurationPropertyToHclTerraform(struct?: CcComputeEnvironment.ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_size_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageSizeGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentInstanceLaunchTemplatePropertyToTerraform(struct?: CcComputeEnvironment.InstanceLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_option_type: cdktn.stringToTerraform(struct!.capacityOptionType),
        capacity_reservations: ccComputeEnvironmentCapacityReservationsPropertyToTerraform(struct!.capacityReservations),
        ec_2_instance_profile_arn: cdktn.stringToTerraform(struct!.ec2InstanceProfileArn),
        fips_enabled: cdktn.booleanToTerraform(struct!.fipsEnabled),
        instance_metadata_tags_propagation: cdktn.booleanToTerraform(struct!.instanceMetadataTagsPropagation),
        instance_requirements: ccComputeEnvironmentInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        local_storage_configuration: ccComputeEnvironmentManagedInstancesLocalStorageConfigurationPropertyToTerraform(struct!.localStorageConfiguration),
        monitoring: cdktn.stringToTerraform(struct!.monitoring),
        network_configuration: ccComputeEnvironmentManagedInstancesNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        storage_configuration: ccComputeEnvironmentManagedInstancesStorageConfigurationPropertyToTerraform(struct!.storageConfiguration),
    }
}


export function ccComputeEnvironmentInstanceLaunchTemplatePropertyToHclTerraform(struct?: CcComputeEnvironment.InstanceLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_option_type: {
            value: cdktn.stringToHclTerraform(struct!.capacityOptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capacity_reservations: {
            value: ccComputeEnvironmentCapacityReservationsPropertyToHclTerraform(struct!.capacityReservations),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationsProperty",
        },
        ec_2_instance_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.ec2InstanceProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fips_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.fipsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_metadata_tags_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.instanceMetadataTagsPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_requirements: {
            value: ccComputeEnvironmentInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsProperty",
        },
        local_storage_configuration: {
            value: ccComputeEnvironmentManagedInstancesLocalStorageConfigurationPropertyToHclTerraform(struct!.localStorageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesLocalStorageConfigurationProperty",
        },
        monitoring: {
            value: cdktn.stringToHclTerraform(struct!.monitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_configuration: {
            value: ccComputeEnvironmentManagedInstancesNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesNetworkConfigurationProperty",
        },
        storage_configuration: {
            value: ccComputeEnvironmentManagedInstancesStorageConfigurationPropertyToHclTerraform(struct!.storageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentManagedInstancesProviderPropertyToTerraform(struct?: CcComputeEnvironment.ManagedInstancesProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        infrastructure_optimization: ccComputeEnvironmentInfrastructureOptimizationPropertyToTerraform(struct!.infrastructureOptimization),
        infrastructure_role_arn: cdktn.stringToTerraform(struct!.infrastructureRoleArn),
        instance_launch_template: ccComputeEnvironmentInstanceLaunchTemplatePropertyToTerraform(struct!.instanceLaunchTemplate),
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    }
}


export function ccComputeEnvironmentManagedInstancesProviderPropertyToHclTerraform(struct?: CcComputeEnvironment.ManagedInstancesProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        infrastructure_optimization: {
            value: ccComputeEnvironmentInfrastructureOptimizationPropertyToHclTerraform(struct!.infrastructureOptimization),
            isBlock: true,
            type: "struct",
            storageClassType: "InfrastructureOptimizationProperty",
        },
        infrastructure_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.infrastructureRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_launch_template: {
            value: ccComputeEnvironmentInstanceLaunchTemplatePropertyToHclTerraform(struct!.instanceLaunchTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceLaunchTemplateProperty",
        },
        propagate_tags: {
            value: cdktn.stringToHclTerraform(struct!.propagateTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentComputeScalingPolicyPropertyToTerraform(struct?: CcComputeEnvironment.ComputeScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        min_scale_down_delay_minutes: cdktn.numberToTerraform(struct!.minScaleDownDelayMinutes),
    }
}


export function ccComputeEnvironmentComputeScalingPolicyPropertyToHclTerraform(struct?: CcComputeEnvironment.ComputeScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        min_scale_down_delay_minutes: {
            value: cdktn.numberToHclTerraform(struct!.minScaleDownDelayMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentComputeResourcesPropertyToTerraform(struct?: CcComputeEnvironment.ComputeResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
        bid_percentage: cdktn.numberToTerraform(struct!.bidPercentage),
        capacity_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.capacityTags),
        desiredv_cpus: cdktn.numberToTerraform(struct!.desiredvCpus),
        ec_2_configuration: cdktn.listMapper(ccComputeEnvironmentEc2ConfigurationObjectPropertyToTerraform, false)(struct!.ec2Configuration),
        ec_2_key_pair: cdktn.stringToTerraform(struct!.ec2KeyPair),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_role: cdktn.stringToTerraform(struct!.instanceRole),
        instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceTypes),
        launch_template: ccComputeEnvironmentLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplate),
        managed_instances_provider: ccComputeEnvironmentManagedInstancesProviderPropertyToTerraform(struct!.managedInstancesProvider),
        maxv_cpus: cdktn.numberToTerraform(struct!.maxvCpus),
        minv_cpus: cdktn.numberToTerraform(struct!.minvCpus),
        placement_group: cdktn.stringToTerraform(struct!.placementGroup),
        scaling_policy: ccComputeEnvironmentComputeScalingPolicyPropertyToTerraform(struct!.scalingPolicy),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        spot_iam_fleet_role: cdktn.stringToTerraform(struct!.spotIamFleetRole),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
        tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
        type: cdktn.stringToTerraform(struct!.type),
        update_to_latest_image_version: cdktn.booleanToTerraform(struct!.updateToLatestImageVersion),
    }
}


export function ccComputeEnvironmentComputeResourcesPropertyToHclTerraform(struct?: CcComputeEnvironment.ComputeResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allocation_strategy: {
            value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bid_percentage: {
            value: cdktn.numberToHclTerraform(struct!.bidPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.capacityTags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        desiredv_cpus: {
            value: cdktn.numberToHclTerraform(struct!.desiredvCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ec_2_configuration: {
            value: cdktn.listMapperHcl(ccComputeEnvironmentEc2ConfigurationObjectPropertyToHclTerraform, false)(struct!.ec2Configuration),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2ConfigurationObjectPropertyList",
        },
        ec_2_key_pair: {
            value: cdktn.stringToHclTerraform(struct!.ec2KeyPair),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_id: {
            value: cdktn.stringToHclTerraform(struct!.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_role: {
            value: cdktn.stringToHclTerraform(struct!.instanceRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        launch_template: {
            value: ccComputeEnvironmentLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "LaunchTemplateSpecificationProperty",
        },
        managed_instances_provider: {
            value: ccComputeEnvironmentManagedInstancesProviderPropertyToHclTerraform(struct!.managedInstancesProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesProviderProperty",
        },
        maxv_cpus: {
            value: cdktn.numberToHclTerraform(struct!.maxvCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minv_cpus: {
            value: cdktn.numberToHclTerraform(struct!.minvCpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        placement_group: {
            value: cdktn.stringToHclTerraform(struct!.placementGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_policy: {
            value: ccComputeEnvironmentComputeScalingPolicyPropertyToHclTerraform(struct!.scalingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ComputeScalingPolicyProperty",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        spot_iam_fleet_role: {
            value: cdktn.stringToHclTerraform(struct!.spotIamFleetRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_to_latest_image_version: {
            value: cdktn.booleanToHclTerraform(struct!.updateToLatestImageVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentEcsSettingsPropertyToTerraform(struct?: CcComputeEnvironment.EcsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_insights: cdktn.stringToTerraform(struct!.containerInsights),
    }
}


export function ccComputeEnvironmentEcsSettingsPropertyToHclTerraform(struct?: CcComputeEnvironment.EcsSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_insights: {
            value: cdktn.stringToHclTerraform(struct!.containerInsights),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentEksConfigurationPropertyToTerraform(struct?: CcComputeEnvironment.EksConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eks_cluster_arn: cdktn.stringToTerraform(struct!.eksClusterArn),
        kubernetes_namespace: cdktn.stringToTerraform(struct!.kubernetesNamespace),
    }
}


export function ccComputeEnvironmentEksConfigurationPropertyToHclTerraform(struct?: CcComputeEnvironment.EksConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eks_cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.eksClusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kubernetes_namespace: {
            value: cdktn.stringToHclTerraform(struct!.kubernetesNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccComputeEnvironmentUpdatePolicyPropertyToTerraform(struct?: CcComputeEnvironment.UpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        job_execution_timeout_minutes: cdktn.numberToTerraform(struct!.jobExecutionTimeoutMinutes),
        terminate_jobs_on_update: cdktn.booleanToTerraform(struct!.terminateJobsOnUpdate),
    }
}


export function ccComputeEnvironmentUpdatePolicyPropertyToHclTerraform(struct?: CcComputeEnvironment.UpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        job_execution_timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.jobExecutionTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        terminate_jobs_on_update: {
            value: cdktn.booleanToHclTerraform(struct!.terminateJobsOnUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcComputeEnvironment {
export interface Ec2ConfigurationObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#batch_image_status CcComputeEnvironment#batch_image_status}
    */
    readonly batchImageStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#image_id_override CcComputeEnvironment#image_id_override}
    */
    readonly imageIdOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#image_kubernetes_version CcComputeEnvironment#image_kubernetes_version}
    */
    readonly imageKubernetesVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#image_type CcComputeEnvironment#image_type}
    */
    readonly imageType?: string;
}
export class Ec2ConfigurationObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ec2ConfigurationObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchImageStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchImageStatus = this._batchImageStatus;
        }
        if (this._imageIdOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageIdOverride = this._imageIdOverride;
        }
        if (this._imageKubernetesVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageKubernetesVersion = this._imageKubernetesVersion;
        }
        if (this._imageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageType = this._imageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2ConfigurationObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchImageStatus = undefined;
            this._imageIdOverride = undefined;
            this._imageKubernetesVersion = undefined;
            this._imageType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchImageStatus = value.batchImageStatus;
            this._imageIdOverride = value.imageIdOverride;
            this._imageKubernetesVersion = value.imageKubernetesVersion;
            this._imageType = value.imageType;
        }
    }

    // batch_image_status - computed: true, optional: true, required: false
    private _batchImageStatus?: string; 
    public get batchImageStatus() {
        return this.getStringAttribute('batch_image_status');
    }
    public set batchImageStatus(value: string) {
        this._batchImageStatus = value;
    }
    public resetBatchImageStatus() {
        this._batchImageStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchImageStatusInput() {
        return this._batchImageStatus;
    }

    // image_id_override - computed: true, optional: true, required: false
    private _imageIdOverride?: string; 
    public get imageIdOverride() {
        return this.getStringAttribute('image_id_override');
    }
    public set imageIdOverride(value: string) {
        this._imageIdOverride = value;
    }
    public resetImageIdOverride() {
        this._imageIdOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdOverrideInput() {
        return this._imageIdOverride;
    }

    // image_kubernetes_version - computed: true, optional: true, required: false
    private _imageKubernetesVersion?: string; 
    public get imageKubernetesVersion() {
        return this.getStringAttribute('image_kubernetes_version');
    }
    public set imageKubernetesVersion(value: string) {
        this._imageKubernetesVersion = value;
    }
    public resetImageKubernetesVersion() {
        this._imageKubernetesVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageKubernetesVersionInput() {
        return this._imageKubernetesVersion;
    }

    // image_type - computed: true, optional: true, required: false
    private _imageType?: string; 
    public get imageType() {
        return this.getStringAttribute('image_type');
    }
    public set imageType(value: string) {
        this._imageType = value;
    }
    public resetImageType() {
        this._imageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTypeInput() {
        return this._imageType;
    }
}

export class Ec2ConfigurationObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : Ec2ConfigurationObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): Ec2ConfigurationObjectPropertyOutputReference {
        return new Ec2ConfigurationObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchTemplateSpecificationOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#launch_template_id CcComputeEnvironment#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#launch_template_name CcComputeEnvironment#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#target_instance_types CcComputeEnvironment#target_instance_types}
    */
    readonly targetInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#userdata_type CcComputeEnvironment#userdata_type}
    */
    readonly userdataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#version CcComputeEnvironment#version}
    */
    readonly version?: string;
}
export class LaunchTemplateSpecificationOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateSpecificationOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._targetInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetInstanceTypes = this._targetInstanceTypes;
        }
        if (this._userdataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.userdataType = this._userdataType;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateSpecificationOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._targetInstanceTypes = undefined;
            this._userdataType = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._targetInstanceTypes = value.targetInstanceTypes;
            this._userdataType = value.userdataType;
            this._version = value.version;
        }
    }

    // launch_template_id - computed: true, optional: true, required: false
    private _launchTemplateId?: string; 
    public get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string) {
        this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
        return this._launchTemplateId;
    }

    // launch_template_name - computed: true, optional: true, required: false
    private _launchTemplateName?: string; 
    public get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    public set launchTemplateName(value: string) {
        this._launchTemplateName = value;
    }
    public resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateNameInput() {
        return this._launchTemplateName;
    }

    // target_instance_types - computed: true, optional: true, required: false
    private _targetInstanceTypes?: string[]; 
    public get targetInstanceTypes() {
        return this.getListAttribute('target_instance_types');
    }
    public set targetInstanceTypes(value: string[]) {
        this._targetInstanceTypes = value;
    }
    public resetTargetInstanceTypes() {
        this._targetInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInstanceTypesInput() {
        return this._targetInstanceTypes;
    }

    // userdata_type - computed: true, optional: true, required: false
    private _userdataType?: string; 
    public get userdataType() {
        return this.getStringAttribute('userdata_type');
    }
    public set userdataType(value: string) {
        this._userdataType = value;
    }
    public resetUserdataType() {
        this._userdataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userdataTypeInput() {
        return this._userdataType;
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
}

export class LaunchTemplateSpecificationOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateSpecificationOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateSpecificationOverridePropertyOutputReference {
        return new LaunchTemplateSpecificationOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchTemplateSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#launch_template_id CcComputeEnvironment#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#launch_template_name CcComputeEnvironment#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#overrides CcComputeEnvironment#overrides}
    */
    readonly overrides?: LaunchTemplateSpecificationOverrideProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#userdata_type CcComputeEnvironment#userdata_type}
    */
    readonly userdataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#version CcComputeEnvironment#version}
    */
    readonly version?: string;
}
export class LaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        if (this._userdataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.userdataType = this._userdataType;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._overrides.internalValue = undefined;
            this._userdataType = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._overrides.internalValue = value.overrides;
            this._userdataType = value.userdataType;
            this._version = value.version;
        }
    }

    // launch_template_id - computed: true, optional: true, required: false
    private _launchTemplateId?: string; 
    public get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string) {
        this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
        return this._launchTemplateId;
    }

    // launch_template_name - computed: true, optional: true, required: false
    private _launchTemplateName?: string; 
    public get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    public set launchTemplateName(value: string) {
        this._launchTemplateName = value;
    }
    public resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateNameInput() {
        return this._launchTemplateName;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new LaunchTemplateSpecificationOverridePropertyList(this, "overrides", false);
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: LaunchTemplateSpecificationOverrideProperty[] | cdktn.IResolvable) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }

    // userdata_type - computed: true, optional: true, required: false
    private _userdataType?: string; 
    public get userdataType() {
        return this.getStringAttribute('userdata_type');
    }
    public set userdataType(value: string) {
        this._userdataType = value;
    }
    public resetUserdataType() {
        this._userdataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userdataTypeInput() {
        return this._userdataType;
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
}
export interface InfrastructureOptimizationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#scale_in_after CcComputeEnvironment#scale_in_after}
    */
    readonly scaleInAfter?: number;
}
export class InfrastructureOptimizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InfrastructureOptimizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleInAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInAfter = this._scaleInAfter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InfrastructureOptimizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleInAfter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleInAfter = value.scaleInAfter;
        }
    }

    // scale_in_after - computed: true, optional: true, required: false
    private _scaleInAfter?: number; 
    public get scaleInAfter() {
        return this.getNumberAttribute('scale_in_after');
    }
    public set scaleInAfter(value: number) {
        this._scaleInAfter = value;
    }
    public resetScaleInAfter() {
        this._scaleInAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInAfterInput() {
        return this._scaleInAfter;
    }
}
export interface CapacityReservationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#reservation_group_arn CcComputeEnvironment#reservation_group_arn}
    */
    readonly reservationGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#reservation_preference CcComputeEnvironment#reservation_preference}
    */
    readonly reservationPreference?: string;
}
export class CapacityReservationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reservationGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservationGroupArn = this._reservationGroupArn;
        }
        if (this._reservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservationPreference = this._reservationPreference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reservationGroupArn = undefined;
            this._reservationPreference = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reservationGroupArn = value.reservationGroupArn;
            this._reservationPreference = value.reservationPreference;
        }
    }

    // reservation_group_arn - computed: true, optional: true, required: false
    private _reservationGroupArn?: string; 
    public get reservationGroupArn() {
        return this.getStringAttribute('reservation_group_arn');
    }
    public set reservationGroupArn(value: string) {
        this._reservationGroupArn = value;
    }
    public resetReservationGroupArn() {
        this._reservationGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservationGroupArnInput() {
        return this._reservationGroupArn;
    }

    // reservation_preference - computed: true, optional: true, required: false
    private _reservationPreference?: string; 
    public get reservationPreference() {
        return this.getStringAttribute('reservation_preference');
    }
    public set reservationPreference(value: string) {
        this._reservationPreference = value;
    }
    public resetReservationPreference() {
        this._reservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservationPreferenceInput() {
        return this._reservationPreference;
    }
}
export interface InstanceRequirementsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#allowed_instance_types CcComputeEnvironment#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedInstanceTypes = value.allowedInstanceTypes;
        }
    }

    // allowed_instance_types - computed: true, optional: true, required: false
    private _allowedInstanceTypes?: string[]; 
    public get allowedInstanceTypes() {
        return this.getListAttribute('allowed_instance_types');
    }
    public set allowedInstanceTypes(value: string[]) {
        this._allowedInstanceTypes = value;
    }
    public resetAllowedInstanceTypes() {
        this._allowedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInstanceTypesInput() {
        return this._allowedInstanceTypes;
    }
}
export interface ManagedInstancesLocalStorageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#use_local_storage CcComputeEnvironment#use_local_storage}
    */
    readonly useLocalStorage?: boolean | cdktn.IResolvable;
}
export class ManagedInstancesLocalStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._useLocalStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLocalStorage = this._useLocalStorage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._useLocalStorage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._useLocalStorage = value.useLocalStorage;
        }
    }

    // use_local_storage - computed: true, optional: true, required: false
    private _useLocalStorage?: boolean | cdktn.IResolvable; 
    public get useLocalStorage() {
        return this.getBooleanAttribute('use_local_storage');
    }
    public set useLocalStorage(value: boolean | cdktn.IResolvable) {
        this._useLocalStorage = value;
    }
    public resetUseLocalStorage() {
        this._useLocalStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLocalStorageInput() {
        return this._useLocalStorage;
    }
}
export interface ManagedInstancesNetworkConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#security_groups CcComputeEnvironment#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#subnets CcComputeEnvironment#subnets}
    */
    readonly subnets?: string[];
}
export class ManagedInstancesNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface ManagedInstancesStorageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#storage_size_gi_b CcComputeEnvironment#storage_size_gi_b}
    */
    readonly storageSizeGiB?: number;
}
export class ManagedInstancesStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageSizeGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageSizeGiB = this._storageSizeGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageSizeGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageSizeGiB = value.storageSizeGiB;
        }
    }

    // storage_size_gi_b - computed: true, optional: true, required: false
    private _storageSizeGiB?: number; 
    public get storageSizeGiB() {
        return this.getNumberAttribute('storage_size_gi_b');
    }
    public set storageSizeGiB(value: number) {
        this._storageSizeGiB = value;
    }
    public resetStorageSizeGiB() {
        this._storageSizeGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageSizeGiBInput() {
        return this._storageSizeGiB;
    }
}
export interface InstanceLaunchTemplateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#capacity_option_type CcComputeEnvironment#capacity_option_type}
    */
    readonly capacityOptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#capacity_reservations CcComputeEnvironment#capacity_reservations}
    */
    readonly capacityReservations?: CapacityReservationsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#ec_2_instance_profile_arn CcComputeEnvironment#ec_2_instance_profile_arn}
    */
    readonly ec2InstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#fips_enabled CcComputeEnvironment#fips_enabled}
    */
    readonly fipsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#instance_metadata_tags_propagation CcComputeEnvironment#instance_metadata_tags_propagation}
    */
    readonly instanceMetadataTagsPropagation?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#instance_requirements CcComputeEnvironment#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#local_storage_configuration CcComputeEnvironment#local_storage_configuration}
    */
    readonly localStorageConfiguration?: ManagedInstancesLocalStorageConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#monitoring CcComputeEnvironment#monitoring}
    */
    readonly monitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#network_configuration CcComputeEnvironment#network_configuration}
    */
    readonly networkConfiguration?: ManagedInstancesNetworkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#storage_configuration CcComputeEnvironment#storage_configuration}
    */
    readonly storageConfiguration?: ManagedInstancesStorageConfigurationProperty;
}
export class InstanceLaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceLaunchTemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityOptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityOptionType = this._capacityOptionType;
        }
        if (this._capacityReservations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservations = this._capacityReservations?.internalValue;
        }
        if (this._ec2InstanceProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceProfileArn = this._ec2InstanceProfileArn;
        }
        if (this._fipsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.fipsEnabled = this._fipsEnabled;
        }
        if (this._instanceMetadataTagsPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMetadataTagsPropagation = this._instanceMetadataTagsPropagation;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._localStorageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorageConfiguration = this._localStorageConfiguration?.internalValue;
        }
        if (this._monitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoring = this._monitoring;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        if (this._storageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceLaunchTemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityOptionType = undefined;
            this._capacityReservations.internalValue = undefined;
            this._ec2InstanceProfileArn = undefined;
            this._fipsEnabled = undefined;
            this._instanceMetadataTagsPropagation = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._localStorageConfiguration.internalValue = undefined;
            this._monitoring = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._storageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityOptionType = value.capacityOptionType;
            this._capacityReservations.internalValue = value.capacityReservations;
            this._ec2InstanceProfileArn = value.ec2InstanceProfileArn;
            this._fipsEnabled = value.fipsEnabled;
            this._instanceMetadataTagsPropagation = value.instanceMetadataTagsPropagation;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._localStorageConfiguration.internalValue = value.localStorageConfiguration;
            this._monitoring = value.monitoring;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._storageConfiguration.internalValue = value.storageConfiguration;
        }
    }

    // capacity_option_type - computed: true, optional: true, required: false
    private _capacityOptionType?: string; 
    public get capacityOptionType() {
        return this.getStringAttribute('capacity_option_type');
    }
    public set capacityOptionType(value: string) {
        this._capacityOptionType = value;
    }
    public resetCapacityOptionType() {
        this._capacityOptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityOptionTypeInput() {
        return this._capacityOptionType;
    }

    // capacity_reservations - computed: true, optional: true, required: false
    private _capacityReservations = new CapacityReservationsPropertyOutputReference(this, "capacity_reservations");
    public get capacityReservations() {
        return this._capacityReservations;
    }
    public putCapacityReservations(value: CapacityReservationsProperty) {
        this._capacityReservations.internalValue = value;
    }
    public resetCapacityReservations() {
        this._capacityReservations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationsInput() {
        return this._capacityReservations.internalValue;
    }

    // ec_2_instance_profile_arn - computed: true, optional: true, required: false
    private _ec2InstanceProfileArn?: string; 
    public get ec2InstanceProfileArn() {
        return this.getStringAttribute('ec_2_instance_profile_arn');
    }
    public set ec2InstanceProfileArn(value: string) {
        this._ec2InstanceProfileArn = value;
    }
    public resetEc2InstanceProfileArn() {
        this._ec2InstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceProfileArnInput() {
        return this._ec2InstanceProfileArn;
    }

    // fips_enabled - computed: true, optional: true, required: false
    private _fipsEnabled?: boolean | cdktn.IResolvable; 
    public get fipsEnabled() {
        return this.getBooleanAttribute('fips_enabled');
    }
    public set fipsEnabled(value: boolean | cdktn.IResolvable) {
        this._fipsEnabled = value;
    }
    public resetFipsEnabled() {
        this._fipsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fipsEnabledInput() {
        return this._fipsEnabled;
    }

    // instance_metadata_tags_propagation - computed: true, optional: true, required: false
    private _instanceMetadataTagsPropagation?: boolean | cdktn.IResolvable; 
    public get instanceMetadataTagsPropagation() {
        return this.getBooleanAttribute('instance_metadata_tags_propagation');
    }
    public set instanceMetadataTagsPropagation(value: boolean | cdktn.IResolvable) {
        this._instanceMetadataTagsPropagation = value;
    }
    public resetInstanceMetadataTagsPropagation() {
        this._instanceMetadataTagsPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMetadataTagsPropagationInput() {
        return this._instanceMetadataTagsPropagation;
    }

    // instance_requirements - computed: true, optional: true, required: false
    private _instanceRequirements = new InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: InstanceRequirementsProperty) {
        this._instanceRequirements.internalValue = value;
    }
    public resetInstanceRequirements() {
        this._instanceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRequirementsInput() {
        return this._instanceRequirements.internalValue;
    }

    // local_storage_configuration - computed: true, optional: true, required: false
    private _localStorageConfiguration = new ManagedInstancesLocalStorageConfigurationPropertyOutputReference(this, "local_storage_configuration");
    public get localStorageConfiguration() {
        return this._localStorageConfiguration;
    }
    public putLocalStorageConfiguration(value: ManagedInstancesLocalStorageConfigurationProperty) {
        this._localStorageConfiguration.internalValue = value;
    }
    public resetLocalStorageConfiguration() {
        this._localStorageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageConfigurationInput() {
        return this._localStorageConfiguration.internalValue;
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring?: string; 
    public get monitoring() {
        return this.getStringAttribute('monitoring');
    }
    public set monitoring(value: string) {
        this._monitoring = value;
    }
    public resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
        return this._monitoring;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new ManagedInstancesNetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: ManagedInstancesNetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // storage_configuration - computed: true, optional: true, required: false
    private _storageConfiguration = new ManagedInstancesStorageConfigurationPropertyOutputReference(this, "storage_configuration");
    public get storageConfiguration() {
        return this._storageConfiguration;
    }
    public putStorageConfiguration(value: ManagedInstancesStorageConfigurationProperty) {
        this._storageConfiguration.internalValue = value;
    }
    public resetStorageConfiguration() {
        this._storageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationInput() {
        return this._storageConfiguration.internalValue;
    }
}
export interface ManagedInstancesProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#infrastructure_optimization CcComputeEnvironment#infrastructure_optimization}
    */
    readonly infrastructureOptimization?: InfrastructureOptimizationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#infrastructure_role_arn CcComputeEnvironment#infrastructure_role_arn}
    */
    readonly infrastructureRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#instance_launch_template CcComputeEnvironment#instance_launch_template}
    */
    readonly instanceLaunchTemplate?: InstanceLaunchTemplateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#propagate_tags CcComputeEnvironment#propagate_tags}
    */
    readonly propagateTags?: string;
}
export class ManagedInstancesProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._infrastructureOptimization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureOptimization = this._infrastructureOptimization?.internalValue;
        }
        if (this._infrastructureRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureRoleArn = this._infrastructureRoleArn;
        }
        if (this._instanceLaunchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceLaunchTemplate = this._instanceLaunchTemplate?.internalValue;
        }
        if (this._propagateTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._infrastructureOptimization.internalValue = undefined;
            this._infrastructureRoleArn = undefined;
            this._instanceLaunchTemplate.internalValue = undefined;
            this._propagateTags = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._infrastructureOptimization.internalValue = value.infrastructureOptimization;
            this._infrastructureRoleArn = value.infrastructureRoleArn;
            this._instanceLaunchTemplate.internalValue = value.instanceLaunchTemplate;
            this._propagateTags = value.propagateTags;
        }
    }

    // infrastructure_optimization - computed: true, optional: true, required: false
    private _infrastructureOptimization = new InfrastructureOptimizationPropertyOutputReference(this, "infrastructure_optimization");
    public get infrastructureOptimization() {
        return this._infrastructureOptimization;
    }
    public putInfrastructureOptimization(value: InfrastructureOptimizationProperty) {
        this._infrastructureOptimization.internalValue = value;
    }
    public resetInfrastructureOptimization() {
        this._infrastructureOptimization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureOptimizationInput() {
        return this._infrastructureOptimization.internalValue;
    }

    // infrastructure_role_arn - computed: true, optional: true, required: false
    private _infrastructureRoleArn?: string; 
    public get infrastructureRoleArn() {
        return this.getStringAttribute('infrastructure_role_arn');
    }
    public set infrastructureRoleArn(value: string) {
        this._infrastructureRoleArn = value;
    }
    public resetInfrastructureRoleArn() {
        this._infrastructureRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureRoleArnInput() {
        return this._infrastructureRoleArn;
    }

    // instance_launch_template - computed: true, optional: true, required: false
    private _instanceLaunchTemplate = new InstanceLaunchTemplatePropertyOutputReference(this, "instance_launch_template");
    public get instanceLaunchTemplate() {
        return this._instanceLaunchTemplate;
    }
    public putInstanceLaunchTemplate(value: InstanceLaunchTemplateProperty) {
        this._instanceLaunchTemplate.internalValue = value;
    }
    public resetInstanceLaunchTemplate() {
        this._instanceLaunchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceLaunchTemplateInput() {
        return this._instanceLaunchTemplate.internalValue;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }
}
export interface ComputeScalingPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes CcComputeEnvironment#min_scale_down_delay_minutes}
    */
    readonly minScaleDownDelayMinutes?: number;
}
export class ComputeScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minScaleDownDelayMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minScaleDownDelayMinutes = this._minScaleDownDelayMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._minScaleDownDelayMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._minScaleDownDelayMinutes = value.minScaleDownDelayMinutes;
        }
    }

    // min_scale_down_delay_minutes - computed: true, optional: true, required: false
    private _minScaleDownDelayMinutes?: number; 
    public get minScaleDownDelayMinutes() {
        return this.getNumberAttribute('min_scale_down_delay_minutes');
    }
    public set minScaleDownDelayMinutes(value: number) {
        this._minScaleDownDelayMinutes = value;
    }
    public resetMinScaleDownDelayMinutes() {
        this._minScaleDownDelayMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minScaleDownDelayMinutesInput() {
        return this._minScaleDownDelayMinutes;
    }
}
export interface ComputeResourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#allocation_strategy CcComputeEnvironment#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#bid_percentage CcComputeEnvironment#bid_percentage}
    */
    readonly bidPercentage?: number;
    /**
    * Capacity-level tags for compute environments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#capacity_tags CcComputeEnvironment#capacity_tags}
    */
    readonly capacityTags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#desiredv_cpus CcComputeEnvironment#desiredv_cpus}
    */
    readonly desiredvCpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#ec_2_configuration CcComputeEnvironment#ec_2_configuration}
    */
    readonly ec2Configuration?: Ec2ConfigurationObjectProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#ec_2_key_pair CcComputeEnvironment#ec_2_key_pair}
    */
    readonly ec2KeyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#image_id CcComputeEnvironment#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#instance_role CcComputeEnvironment#instance_role}
    */
    readonly instanceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#instance_types CcComputeEnvironment#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#launch_template CcComputeEnvironment#launch_template}
    */
    readonly launchTemplate?: LaunchTemplateSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#managed_instances_provider CcComputeEnvironment#managed_instances_provider}
    */
    readonly managedInstancesProvider?: ManagedInstancesProviderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#maxv_cpus CcComputeEnvironment#maxv_cpus}
    */
    readonly maxvCpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#minv_cpus CcComputeEnvironment#minv_cpus}
    */
    readonly minvCpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#placement_group CcComputeEnvironment#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#scaling_policy CcComputeEnvironment#scaling_policy}
    */
    readonly scalingPolicy?: ComputeScalingPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#security_group_ids CcComputeEnvironment#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#spot_iam_fleet_role CcComputeEnvironment#spot_iam_fleet_role}
    */
    readonly spotIamFleetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#subnets CcComputeEnvironment#subnets}
    */
    readonly subnets?: string[];
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#tags CcComputeEnvironment#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#type CcComputeEnvironment#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#update_to_latest_image_version CcComputeEnvironment#update_to_latest_image_version}
    */
    readonly updateToLatestImageVersion?: boolean | cdktn.IResolvable;
}
export class ComputeResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._bidPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.bidPercentage = this._bidPercentage;
        }
        if (this._capacityTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityTags = this._capacityTags;
        }
        if (this._desiredvCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredvCpus = this._desiredvCpus;
        }
        if (this._ec2Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
        }
        if (this._ec2KeyPair !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2KeyPair = this._ec2KeyPair;
        }
        if (this._imageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageId = this._imageId;
        }
        if (this._instanceRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRole = this._instanceRole;
        }
        if (this._instanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceTypes = this._instanceTypes;
        }
        if (this._launchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
        }
        if (this._managedInstancesProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedInstancesProvider = this._managedInstancesProvider?.internalValue;
        }
        if (this._maxvCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxvCpus = this._maxvCpus;
        }
        if (this._minvCpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.minvCpus = this._minvCpus;
        }
        if (this._placementGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementGroup = this._placementGroup;
        }
        if (this._scalingPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._spotIamFleetRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotIamFleetRole = this._spotIamFleetRole;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updateToLatestImageVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateToLatestImageVersion = this._updateToLatestImageVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationStrategy = undefined;
            this._bidPercentage = undefined;
            this._capacityTags = undefined;
            this._desiredvCpus = undefined;
            this._ec2Configuration.internalValue = undefined;
            this._ec2KeyPair = undefined;
            this._imageId = undefined;
            this._instanceRole = undefined;
            this._instanceTypes = undefined;
            this._launchTemplate.internalValue = undefined;
            this._managedInstancesProvider.internalValue = undefined;
            this._maxvCpus = undefined;
            this._minvCpus = undefined;
            this._placementGroup = undefined;
            this._scalingPolicy.internalValue = undefined;
            this._securityGroupIds = undefined;
            this._spotIamFleetRole = undefined;
            this._subnets = undefined;
            this._tags = undefined;
            this._type = undefined;
            this._updateToLatestImageVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationStrategy = value.allocationStrategy;
            this._bidPercentage = value.bidPercentage;
            this._capacityTags = value.capacityTags;
            this._desiredvCpus = value.desiredvCpus;
            this._ec2Configuration.internalValue = value.ec2Configuration;
            this._ec2KeyPair = value.ec2KeyPair;
            this._imageId = value.imageId;
            this._instanceRole = value.instanceRole;
            this._instanceTypes = value.instanceTypes;
            this._launchTemplate.internalValue = value.launchTemplate;
            this._managedInstancesProvider.internalValue = value.managedInstancesProvider;
            this._maxvCpus = value.maxvCpus;
            this._minvCpus = value.minvCpus;
            this._placementGroup = value.placementGroup;
            this._scalingPolicy.internalValue = value.scalingPolicy;
            this._securityGroupIds = value.securityGroupIds;
            this._spotIamFleetRole = value.spotIamFleetRole;
            this._subnets = value.subnets;
            this._tags = value.tags;
            this._type = value.type;
            this._updateToLatestImageVersion = value.updateToLatestImageVersion;
        }
    }

    // allocation_strategy - computed: true, optional: true, required: false
    private _allocationStrategy?: string; 
    public get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    public set allocationStrategy(value: string) {
        this._allocationStrategy = value;
    }
    public resetAllocationStrategy() {
        this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationStrategyInput() {
        return this._allocationStrategy;
    }

    // bid_percentage - computed: true, optional: true, required: false
    private _bidPercentage?: number; 
    public get bidPercentage() {
        return this.getNumberAttribute('bid_percentage');
    }
    public set bidPercentage(value: number) {
        this._bidPercentage = value;
    }
    public resetBidPercentage() {
        this._bidPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bidPercentageInput() {
        return this._bidPercentage;
    }

    // capacity_tags - computed: true, optional: true, required: false
    private _capacityTags?: { [key: string]: string }; 
    public get capacityTags() {
        return this.getStringMapAttribute('capacity_tags');
    }
    public set capacityTags(value: { [key: string]: string }) {
        this._capacityTags = value;
    }
    public resetCapacityTags() {
        this._capacityTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityTagsInput() {
        return this._capacityTags;
    }

    // desiredv_cpus - computed: true, optional: true, required: false
    private _desiredvCpus?: number; 
    public get desiredvCpus() {
        return this.getNumberAttribute('desiredv_cpus');
    }
    public set desiredvCpus(value: number) {
        this._desiredvCpus = value;
    }
    public resetDesiredvCpus() {
        this._desiredvCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredvCpusInput() {
        return this._desiredvCpus;
    }

    // ec_2_configuration - computed: true, optional: true, required: false
    private _ec2Configuration = new Ec2ConfigurationObjectPropertyList(this, "ec_2_configuration", false);
    public get ec2Configuration() {
        return this._ec2Configuration;
    }
    public putEc2Configuration(value: Ec2ConfigurationObjectProperty[] | cdktn.IResolvable) {
        this._ec2Configuration.internalValue = value;
    }
    public resetEc2Configuration() {
        this._ec2Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2ConfigurationInput() {
        return this._ec2Configuration.internalValue;
    }

    // ec_2_key_pair - computed: true, optional: true, required: false
    private _ec2KeyPair?: string; 
    public get ec2KeyPair() {
        return this.getStringAttribute('ec_2_key_pair');
    }
    public set ec2KeyPair(value: string) {
        this._ec2KeyPair = value;
    }
    public resetEc2KeyPair() {
        this._ec2KeyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2KeyPairInput() {
        return this._ec2KeyPair;
    }

    // image_id - computed: true, optional: true, required: false
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    public resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
    }

    // instance_role - computed: true, optional: true, required: false
    private _instanceRole?: string; 
    public get instanceRole() {
        return this.getStringAttribute('instance_role');
    }
    public set instanceRole(value: string) {
        this._instanceRole = value;
    }
    public resetInstanceRole() {
        this._instanceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleInput() {
        return this._instanceRole;
    }

    // instance_types - computed: true, optional: true, required: false
    private _instanceTypes?: string[]; 
    public get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[]) {
        this._instanceTypes = value;
    }
    public resetInstanceTypes() {
        this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
        return this._instanceTypes;
    }

    // launch_template - computed: true, optional: true, required: false
    private _launchTemplate = new LaunchTemplateSpecificationPropertyOutputReference(this, "launch_template");
    public get launchTemplate() {
        return this._launchTemplate;
    }
    public putLaunchTemplate(value: LaunchTemplateSpecificationProperty) {
        this._launchTemplate.internalValue = value;
    }
    public resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }

    // managed_instances_provider - computed: true, optional: true, required: false
    private _managedInstancesProvider = new ManagedInstancesProviderPropertyOutputReference(this, "managed_instances_provider");
    public get managedInstancesProvider() {
        return this._managedInstancesProvider;
    }
    public putManagedInstancesProvider(value: ManagedInstancesProviderProperty) {
        this._managedInstancesProvider.internalValue = value;
    }
    public resetManagedInstancesProvider() {
        this._managedInstancesProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedInstancesProviderInput() {
        return this._managedInstancesProvider.internalValue;
    }

    // maxv_cpus - computed: true, optional: true, required: false
    private _maxvCpus?: number; 
    public get maxvCpus() {
        return this.getNumberAttribute('maxv_cpus');
    }
    public set maxvCpus(value: number) {
        this._maxvCpus = value;
    }
    public resetMaxvCpus() {
        this._maxvCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxvCpusInput() {
        return this._maxvCpus;
    }

    // minv_cpus - computed: true, optional: true, required: false
    private _minvCpus?: number; 
    public get minvCpus() {
        return this.getNumberAttribute('minv_cpus');
    }
    public set minvCpus(value: number) {
        this._minvCpus = value;
    }
    public resetMinvCpus() {
        this._minvCpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minvCpusInput() {
        return this._minvCpus;
    }

    // placement_group - computed: true, optional: true, required: false
    private _placementGroup?: string; 
    public get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    public set placementGroup(value: string) {
        this._placementGroup = value;
    }
    public resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupInput() {
        return this._placementGroup;
    }

    // scaling_policy - computed: true, optional: true, required: false
    private _scalingPolicy = new ComputeScalingPolicyPropertyOutputReference(this, "scaling_policy");
    public get scalingPolicy() {
        return this._scalingPolicy;
    }
    public putScalingPolicy(value: ComputeScalingPolicyProperty) {
        this._scalingPolicy.internalValue = value;
    }
    public resetScalingPolicy() {
        this._scalingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPolicyInput() {
        return this._scalingPolicy.internalValue;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // spot_iam_fleet_role - computed: true, optional: true, required: false
    private _spotIamFleetRole?: string; 
    public get spotIamFleetRole() {
        return this.getStringAttribute('spot_iam_fleet_role');
    }
    public set spotIamFleetRole(value: string) {
        this._spotIamFleetRole = value;
    }
    public resetSpotIamFleetRole() {
        this._spotIamFleetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotIamFleetRoleInput() {
        return this._spotIamFleetRole;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
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

    // update_to_latest_image_version - computed: true, optional: true, required: false
    private _updateToLatestImageVersion?: boolean | cdktn.IResolvable; 
    public get updateToLatestImageVersion() {
        return this.getBooleanAttribute('update_to_latest_image_version');
    }
    public set updateToLatestImageVersion(value: boolean | cdktn.IResolvable) {
        this._updateToLatestImageVersion = value;
    }
    public resetUpdateToLatestImageVersion() {
        this._updateToLatestImageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateToLatestImageVersionInput() {
        return this._updateToLatestImageVersion;
    }
}
export interface EcsSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#container_insights CcComputeEnvironment#container_insights}
    */
    readonly containerInsights?: string;
}
export class EcsSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcsSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerInsights !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerInsights = this._containerInsights;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerInsights = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerInsights = value.containerInsights;
        }
    }

    // container_insights - computed: true, optional: true, required: false
    private _containerInsights?: string; 
    public get containerInsights() {
        return this.getStringAttribute('container_insights');
    }
    public set containerInsights(value: string) {
        this._containerInsights = value;
    }
    public resetContainerInsights() {
        this._containerInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerInsightsInput() {
        return this._containerInsights;
    }
}
export interface EksConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#eks_cluster_arn CcComputeEnvironment#eks_cluster_arn}
    */
    readonly eksClusterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#kubernetes_namespace CcComputeEnvironment#kubernetes_namespace}
    */
    readonly kubernetesNamespace?: string;
}
export class EksConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EksConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eksClusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eksClusterArn = this._eksClusterArn;
        }
        if (this._kubernetesNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EksConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eksClusterArn = undefined;
            this._kubernetesNamespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eksClusterArn = value.eksClusterArn;
            this._kubernetesNamespace = value.kubernetesNamespace;
        }
    }

    // eks_cluster_arn - computed: true, optional: true, required: false
    private _eksClusterArn?: string; 
    public get eksClusterArn() {
        return this.getStringAttribute('eks_cluster_arn');
    }
    public set eksClusterArn(value: string) {
        this._eksClusterArn = value;
    }
    public resetEksClusterArn() {
        this._eksClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksClusterArnInput() {
        return this._eksClusterArn;
    }

    // kubernetes_namespace - computed: true, optional: true, required: false
    private _kubernetesNamespace?: string; 
    public get kubernetesNamespace() {
        return this.getStringAttribute('kubernetes_namespace');
    }
    public set kubernetesNamespace(value: string) {
        this._kubernetesNamespace = value;
    }
    public resetKubernetesNamespace() {
        this._kubernetesNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesNamespaceInput() {
        return this._kubernetesNamespace;
    }
}
export interface UpdatePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes CcComputeEnvironment#job_execution_timeout_minutes}
    */
    readonly jobExecutionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_compute_environment#terminate_jobs_on_update CcComputeEnvironment#terminate_jobs_on_update}
    */
    readonly terminateJobsOnUpdate?: boolean | cdktn.IResolvable;
}
export class UpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jobExecutionTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobExecutionTimeoutMinutes = this._jobExecutionTimeoutMinutes;
        }
        if (this._terminateJobsOnUpdate !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminateJobsOnUpdate = this._terminateJobsOnUpdate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jobExecutionTimeoutMinutes = undefined;
            this._terminateJobsOnUpdate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jobExecutionTimeoutMinutes = value.jobExecutionTimeoutMinutes;
            this._terminateJobsOnUpdate = value.terminateJobsOnUpdate;
        }
    }

    // job_execution_timeout_minutes - computed: true, optional: true, required: false
    private _jobExecutionTimeoutMinutes?: number; 
    public get jobExecutionTimeoutMinutes() {
        return this.getNumberAttribute('job_execution_timeout_minutes');
    }
    public set jobExecutionTimeoutMinutes(value: number) {
        this._jobExecutionTimeoutMinutes = value;
    }
    public resetJobExecutionTimeoutMinutes() {
        this._jobExecutionTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobExecutionTimeoutMinutesInput() {
        return this._jobExecutionTimeoutMinutes;
    }

    // terminate_jobs_on_update - computed: true, optional: true, required: false
    private _terminateJobsOnUpdate?: boolean | cdktn.IResolvable; 
    public get terminateJobsOnUpdate() {
        return this.getBooleanAttribute('terminate_jobs_on_update');
    }
    public set terminateJobsOnUpdate(value: boolean | cdktn.IResolvable) {
        this._terminateJobsOnUpdate = value;
    }
    public resetTerminateJobsOnUpdate() {
        this._terminateJobsOnUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateJobsOnUpdateInput() {
        return this._terminateJobsOnUpdate;
    }
}
}
