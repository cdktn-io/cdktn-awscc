// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapacityProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The capacity configuration for the capacity provider. Defines the compute resources for this capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#compute_configuration CcCapacityProvider#compute_configuration}
    */
    readonly computeConfiguration: CcCapacityProvider.ComputeConfigurationProperty;
    /**
    * An optional description of the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#description CcCapacityProvider#description}
    */
    readonly description?: string;
    /**
    * The name of the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name CcCapacityProvider#name}
    */
    readonly name: string;
    /**
    * Configuration for permissions associated with a capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#permissions_configuration CcCapacityProvider#permissions_configuration}
    */
    readonly permissionsConfiguration: CcCapacityProvider.PermissionsConfigurationProperty;
    /**
    * An array of key-value pairs to apply to the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#tags CcCapacityProvider#tags}
    */
    readonly tags?: CcCapacityProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider}
*/
export class CcCapacityProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_capacity_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapacityProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapacityProvider to import
    * @param importFromId The id of the existing CcCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapacityProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_capacity_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider awscc_bedrockagentcore_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapacityProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcCapacityProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_capacity_provider',
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
        this._computeConfiguration.internalValue = config.computeConfiguration;
        this._description = config.description;
        this._name = config.name;
        this._permissionsConfiguration.internalValue = config.permissionsConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_provider_id - computed: true, optional: false, required: false
    public get capacityProviderId() {
        return this.getStringAttribute('capacity_provider_id');
    }

    // compute_configuration - computed: false, optional: false, required: true
    private _computeConfiguration = new CcCapacityProvider.ComputeConfigurationPropertyOutputReference(this, "compute_configuration");
    public get computeConfiguration() {
        return this._computeConfiguration;
    }
    public putComputeConfiguration(value: CcCapacityProvider.ComputeConfigurationProperty) {
        this._computeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeConfigurationInput() {
        return this._computeConfiguration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // permissions_configuration - computed: false, optional: false, required: true
    private _permissionsConfiguration = new CcCapacityProvider.PermissionsConfigurationPropertyOutputReference(this, "permissions_configuration");
    public get permissionsConfiguration() {
        return this._permissionsConfiguration;
    }
    public putPermissionsConfiguration(value: CcCapacityProvider.PermissionsConfigurationProperty) {
        this._permissionsConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsConfigurationInput() {
        return this._permissionsConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCapacityProvider.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCapacityProvider.TagProperty[] | cdktn.IResolvable) {
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
            compute_configuration: ccCapacityProviderComputeConfigurationPropertyToTerraform(this._computeConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            permissions_configuration: ccCapacityProviderPermissionsConfigurationPropertyToTerraform(this._permissionsConfiguration.internalValue),
            tags: cdktn.listMapper(ccCapacityProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_configuration: {
                value: ccCapacityProviderComputeConfigurationPropertyToHclTerraform(this._computeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.ComputeConfigurationProperty",
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
            permissions_configuration: {
                value: ccCapacityProviderPermissionsConfigurationPropertyToHclTerraform(this._permissionsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.PermissionsConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCapacityProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCapacityProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapacityProviderCapacityReservationTargetPropertyToTerraform(struct?: CcCapacityProvider.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_id: cdktn.stringToTerraform(struct!.capacityReservationId),
        capacity_reservation_resource_group_arn: cdktn.stringToTerraform(struct!.capacityReservationResourceGroupArn),
    }
}


export function ccCapacityProviderCapacityReservationTargetPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_id: {
            value: cdktn.stringToHclTerraform(struct!.capacityReservationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capacity_reservation_resource_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.capacityReservationResourceGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityReservationSpecificationPropertyToTerraform(struct?: CcCapacityProvider.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        capacity_reservation_target: ccCapacityProviderCapacityReservationTargetPropertyToTerraform(struct!.capacityReservationTarget),
    }
}


export function ccCapacityProviderCapacityReservationSpecificationPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_preference: {
            value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capacity_reservation_target: {
            value: ccCapacityProviderCapacityReservationTargetPropertyToHclTerraform(struct!.capacityReservationTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderEphemeralEBSVolumeConfigurationPropertyToTerraform(struct?: CcCapacityProvider.EphemeralEBSVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_card_index: cdktn.numberToTerraform(struct!.ebsCardIndex),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_initialization_rate: cdktn.numberToTerraform(struct!.volumeInitializationRate),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccCapacityProviderEphemeralEBSVolumeConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.EphemeralEBSVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_card_index: {
            value: cdktn.numberToHclTerraform(struct!.ebsCardIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
        volume_initialization_rate: {
            value: cdktn.numberToHclTerraform(struct!.volumeInitializationRate),
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


export function ccCapacityProviderEphemeralBlockDeviceMappingPropertyToTerraform(struct?: CcCapacityProvider.EphemeralBlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccCapacityProviderEphemeralEBSVolumeConfigurationPropertyToTerraform(struct!.ebs),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccCapacityProviderEphemeralBlockDeviceMappingPropertyToHclTerraform(struct?: CcCapacityProvider.EphemeralBlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccCapacityProviderEphemeralEBSVolumeConfigurationPropertyToHclTerraform(struct!.ebs),
            isBlock: true,
            type: "struct",
            storageClassType: "EphemeralEBSVolumeConfigurationProperty",
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


export function ccCapacityProviderInstanceRequirementsPropertyToTerraform(struct?: CcCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
    }
}


export function ccCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct?: CcCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
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


export function ccCapacityProviderLicenseSpecificationPropertyToTerraform(struct?: CcCapacityProvider.LicenseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
    }
}


export function ccCapacityProviderLicenseSpecificationPropertyToHclTerraform(struct?: CcCapacityProvider.LicenseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        license_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.licenseConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderLaunchParametersPropertyToTerraform(struct?: CcCapacityProvider.LaunchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_specification: ccCapacityProviderCapacityReservationSpecificationPropertyToTerraform(struct!.capacityReservationSpecification),
        ephemeral_volumes: cdktn.listMapper(ccCapacityProviderEphemeralBlockDeviceMappingPropertyToTerraform, false)(struct!.ephemeralVolumes),
        instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
        instance_requirements: ccCapacityProviderInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        license_specifications: cdktn.listMapper(ccCapacityProviderLicenseSpecificationPropertyToTerraform, false)(struct!.licenseSpecifications),
        monitoring: cdktn.stringToTerraform(struct!.monitoring),
        operating_system: cdktn.stringToTerraform(struct!.operatingSystem),
        propagated_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.propagatedTags),
        ssh_key_name: cdktn.stringToTerraform(struct!.sshKeyName),
    }
}


export function ccCapacityProviderLaunchParametersPropertyToHclTerraform(struct?: CcCapacityProvider.LaunchParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_specification: {
            value: ccCapacityProviderCapacityReservationSpecificationPropertyToHclTerraform(struct!.capacityReservationSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationSpecificationProperty",
        },
        ephemeral_volumes: {
            value: cdktn.listMapperHcl(ccCapacityProviderEphemeralBlockDeviceMappingPropertyToHclTerraform, false)(struct!.ephemeralVolumes),
            isBlock: true,
            type: "list",
            storageClassType: "EphemeralBlockDeviceMappingPropertyList",
        },
        instance_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_requirements: {
            value: ccCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsProperty",
        },
        license_specifications: {
            value: cdktn.listMapperHcl(ccCapacityProviderLicenseSpecificationPropertyToHclTerraform, false)(struct!.licenseSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "LicenseSpecificationPropertyList",
        },
        monitoring: {
            value: cdktn.stringToHclTerraform(struct!.monitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operating_system: {
            value: cdktn.stringToHclTerraform(struct!.operatingSystem),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        propagated_tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.propagatedTags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        ssh_key_name: {
            value: cdktn.stringToHclTerraform(struct!.sshKeyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderLaunchTemplateSourcePropertyToTerraform(struct?: CcCapacityProvider.LaunchTemplateSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_parameters: ccCapacityProviderLaunchParametersPropertyToTerraform(struct!.launchParameters),
    }
}


export function ccCapacityProviderLaunchTemplateSourcePropertyToHclTerraform(struct?: CcCapacityProvider.LaunchTemplateSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_parameters: {
            value: ccCapacityProviderLaunchParametersPropertyToHclTerraform(struct!.launchParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "LaunchParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderInstanceLifecycleConfigurationPropertyToTerraform(struct?: CcCapacityProvider.InstanceLifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idle_instance_timeout: cdktn.numberToTerraform(struct!.idleInstanceTimeout),
        max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
    }
}


export function ccCapacityProviderInstanceLifecycleConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.InstanceLifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idle_instance_timeout: {
            value: cdktn.numberToHclTerraform(struct!.idleInstanceTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_lifetime: {
            value: cdktn.numberToHclTerraform(struct!.maxLifetime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderRootVolumeConfigurationPropertyToTerraform(struct?: CcCapacityProvider.RootVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        free_space_gi_b: cdktn.numberToTerraform(struct!.freeSpaceGiB),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccCapacityProviderRootVolumeConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.RootVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        free_space_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.freeSpaceGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
        throughput: {
            value: cdktn.numberToHclTerraform(struct!.throughput),
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


export function ccCapacityProviderEbsVolumeConfigurationPropertyToTerraform(struct?: CcCapacityProvider.EbsVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        name: cdktn.stringToTerraform(struct!.name),
        size_gi_b: cdktn.numberToTerraform(struct!.sizeGiB),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccCapacityProviderEbsVolumeConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.EbsVolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccCapacityProviderVolumeConfigurationPropertyToTerraform(struct?: CcCapacityProvider.VolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_configuration: ccCapacityProviderEbsVolumeConfigurationPropertyToTerraform(struct!.ebsConfiguration),
    }
}


export function ccCapacityProviderVolumeConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.VolumeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_configuration: {
            value: ccCapacityProviderEbsVolumeConfigurationPropertyToHclTerraform(struct!.ebsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsVolumeConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderVpcConfigurationPropertyToTerraform(struct?: CcCapacityProvider.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccCapacityProviderVpcConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.VpcConfigurationProperty | cdktn.IResolvable): any {
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


export function ccCapacityProviderEc2ConfigurationPropertyToTerraform(struct?: CcCapacityProvider.Ec2ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_source: ccCapacityProviderLaunchTemplateSourcePropertyToTerraform(struct!.launchTemplateSource),
        lifecycle_configuration: ccCapacityProviderInstanceLifecycleConfigurationPropertyToTerraform(struct!.lifecycleConfiguration),
        root_volume: ccCapacityProviderRootVolumeConfigurationPropertyToTerraform(struct!.rootVolume),
        volumes: cdktn.listMapper(ccCapacityProviderVolumeConfigurationPropertyToTerraform, false)(struct!.volumes),
        vpc_configuration: ccCapacityProviderVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccCapacityProviderEc2ConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.Ec2ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_source: {
            value: ccCapacityProviderLaunchTemplateSourcePropertyToHclTerraform(struct!.launchTemplateSource),
            isBlock: true,
            type: "struct",
            storageClassType: "LaunchTemplateSourceProperty",
        },
        lifecycle_configuration: {
            value: ccCapacityProviderInstanceLifecycleConfigurationPropertyToHclTerraform(struct!.lifecycleConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceLifecycleConfigurationProperty",
        },
        root_volume: {
            value: ccCapacityProviderRootVolumeConfigurationPropertyToHclTerraform(struct!.rootVolume),
            isBlock: true,
            type: "struct",
            storageClassType: "RootVolumeConfigurationProperty",
        },
        volumes: {
            value: cdktn.listMapperHcl(ccCapacityProviderVolumeConfigurationPropertyToHclTerraform, false)(struct!.volumes),
            isBlock: true,
            type: "list",
            storageClassType: "VolumeConfigurationPropertyList",
        },
        vpc_configuration: {
            value: ccCapacityProviderVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderComputeConfigurationPropertyToTerraform(struct?: CcCapacityProvider.ComputeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ec_2_configuration: ccCapacityProviderEc2ConfigurationPropertyToTerraform(struct!.ec2Configuration),
    }
}


export function ccCapacityProviderComputeConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.ComputeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ec_2_configuration: {
            value: ccCapacityProviderEc2ConfigurationPropertyToHclTerraform(struct!.ec2Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "Ec2ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderPermissionsConfigurationPropertyToTerraform(struct?: CcCapacityProvider.PermissionsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_operator_role_arn: cdktn.stringToTerraform(struct!.capacityProviderOperatorRoleArn),
    }
}


export function ccCapacityProviderPermissionsConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.PermissionsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_operator_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.capacityProviderOperatorRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderTagPropertyToTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapacityProviderTagPropertyToHclTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCapacityProvider {
export interface CapacityReservationTargetProperty {
    /**
    * The ID of the Capacity Reservation in which to run the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_id CcCapacityProvider#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * The ARN of the Capacity Reservation resource group in which to run the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_resource_group_arn CcCapacityProvider#capacity_reservation_resource_group_arn}
    */
    readonly capacityReservationResourceGroupArn?: string;
}
export class CapacityReservationTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationId = this._capacityReservationId;
        }
        if (this._capacityReservationResourceGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationResourceGroupArn = this._capacityReservationResourceGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationId = undefined;
            this._capacityReservationResourceGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationId = value.capacityReservationId;
            this._capacityReservationResourceGroupArn = value.capacityReservationResourceGroupArn;
        }
    }

    // capacity_reservation_id - computed: true, optional: true, required: false
    private _capacityReservationId?: string; 
    public get capacityReservationId() {
        return this.getStringAttribute('capacity_reservation_id');
    }
    public set capacityReservationId(value: string) {
        this._capacityReservationId = value;
    }
    public resetCapacityReservationId() {
        this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationIdInput() {
        return this._capacityReservationId;
    }

    // capacity_reservation_resource_group_arn - computed: true, optional: true, required: false
    private _capacityReservationResourceGroupArn?: string; 
    public get capacityReservationResourceGroupArn() {
        return this.getStringAttribute('capacity_reservation_resource_group_arn');
    }
    public set capacityReservationResourceGroupArn(value: string) {
        this._capacityReservationResourceGroupArn = value;
    }
    public resetCapacityReservationResourceGroupArn() {
        this._capacityReservationResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationResourceGroupArnInput() {
        return this._capacityReservationResourceGroupArn;
    }
}
export interface CapacityReservationSpecificationProperty {
    /**
    * Indicates the instance's Capacity Reservation preferences.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_preference CcCapacityProvider#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * Information about the target Capacity Reservation or Capacity Reservation group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_target CcCapacityProvider#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: CapacityReservationTargetProperty;
}
export class CapacityReservationSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if (this._capacityReservationTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = undefined;
            this._capacityReservationTarget.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = value.capacityReservationPreference;
            this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
        }
    }

    // capacity_reservation_preference - computed: true, optional: true, required: false
    private _capacityReservationPreference?: string; 
    public get capacityReservationPreference() {
        return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string) {
        this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
        this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
        return this._capacityReservationPreference;
    }

    // capacity_reservation_target - computed: true, optional: true, required: false
    private _capacityReservationTarget = new CapacityReservationTargetPropertyOutputReference(this, "capacity_reservation_target");
    public get capacityReservationTarget() {
        return this._capacityReservationTarget;
    }
    public putCapacityReservationTarget(value: CapacityReservationTargetProperty) {
        this._capacityReservationTarget.internalValue = value;
    }
    public resetCapacityReservationTarget() {
        this._capacityReservationTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationTargetInput() {
        return this._capacityReservationTarget.internalValue;
    }
}
export interface EphemeralEBSVolumeConfigurationProperty {
    /**
    * The index of the EBS card. Applies to instances with multiple EBS cards.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_card_index CcCapacityProvider#ebs_card_index}
    */
    readonly ebsCardIndex?: number;
    /**
    * Indicates whether the EBS volume is encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted CcCapacityProvider#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of I/O operations per second (IOPS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops CcCapacityProvider#iops}
    */
    readonly iops?: number;
    /**
    * Identifier of the customer managed KMS key to use for EBS encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id CcCapacityProvider#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The ID of the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id CcCapacityProvider#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The throughput to provision for a gp3 volume, in MiB/s.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput CcCapacityProvider#throughput}
    */
    readonly throughput?: number;
    /**
    * The rate at which the volume is initialized after creation, in MiB/s. Supported only for volumes created from snapshots. If the snapshot is enabled for fast snapshot restore and a volume initialization rate is also specified, the volume is initialized at the specified rate instead of by fast snapshot restore. Valid range: 100-300 MiB/s.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_initialization_rate CcCapacityProvider#volume_initialization_rate}
    */
    readonly volumeInitializationRate?: number;
    /**
    * The size of the volume, in GiBs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_size CcCapacityProvider#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * The volume type. Defaults to gp3 if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type CcCapacityProvider#volume_type}
    */
    readonly volumeType?: string;
}
export class EphemeralEBSVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EphemeralEBSVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsCardIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsCardIndex = this._ebsCardIndex;
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
        if (this._volumeInitializationRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeInitializationRate = this._volumeInitializationRate;
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

    public set internalValue(value: EphemeralEBSVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsCardIndex = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeInitializationRate = undefined;
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
            this._ebsCardIndex = value.ebsCardIndex;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeInitializationRate = value.volumeInitializationRate;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }

    // ebs_card_index - computed: true, optional: true, required: false
    private _ebsCardIndex?: number; 
    public get ebsCardIndex() {
        return this.getNumberAttribute('ebs_card_index');
    }
    public set ebsCardIndex(value: number) {
        this._ebsCardIndex = value;
    }
    public resetEbsCardIndex() {
        this._ebsCardIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsCardIndexInput() {
        return this._ebsCardIndex;
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

    // volume_initialization_rate - computed: true, optional: true, required: false
    private _volumeInitializationRate?: number; 
    public get volumeInitializationRate() {
        return this.getNumberAttribute('volume_initialization_rate');
    }
    public set volumeInitializationRate(value: number) {
        this._volumeInitializationRate = value;
    }
    public resetVolumeInitializationRate() {
        this._volumeInitializationRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeInitializationRateInput() {
        return this._volumeInitializationRate;
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
export interface EphemeralBlockDeviceMappingProperty {
    /**
    * The device name (for example, /dev/sdh or xvdh).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#device_name CcCapacityProvider#device_name}
    */
    readonly deviceName?: string;
    /**
    * Parameters used to automatically set up EBS volumes when the instance is launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs CcCapacityProvider#ebs}
    */
    readonly ebs?: EphemeralEBSVolumeConfigurationProperty;
    /**
    * The virtual device name (ephemeralN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#virtual_name CcCapacityProvider#virtual_name}
    */
    readonly virtualName?: string;
}
export class EphemeralBlockDeviceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EphemeralBlockDeviceMappingProperty | cdktn.IResolvable | undefined {
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
        if (this._virtualName !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualName = this._virtualName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EphemeralBlockDeviceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._ebs.internalValue = undefined;
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
    private _ebs = new EphemeralEBSVolumeConfigurationPropertyOutputReference(this, "ebs");
    public get ebs() {
        return this._ebs;
    }
    public putEbs(value: EphemeralEBSVolumeConfigurationProperty) {
        this._ebs.internalValue = value;
    }
    public resetEbs() {
        this._ebs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsInput() {
        return this._ebs.internalValue;
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

export class EphemeralBlockDeviceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : EphemeralBlockDeviceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): EphemeralBlockDeviceMappingPropertyOutputReference {
        return new EphemeralBlockDeviceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceRequirementsProperty {
    /**
    * List of allowed instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#allowed_instance_types CcCapacityProvider#allowed_instance_types}
    */
    readonly allowedInstanceTypes: string[];
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

    // allowed_instance_types - computed: false, optional: false, required: true
    private _allowedInstanceTypes?: string[]; 
    public get allowedInstanceTypes() {
        return this.getListAttribute('allowed_instance_types');
    }
    public set allowedInstanceTypes(value: string[]) {
        this._allowedInstanceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInstanceTypesInput() {
        return this._allowedInstanceTypes;
    }
}
export interface LicenseSpecificationProperty {
    /**
    * The ARN of the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_configuration_arn CcCapacityProvider#license_configuration_arn}
    */
    readonly licenseConfigurationArn?: string;
}
export class LicenseSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LicenseSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._licenseConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LicenseSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._licenseConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._licenseConfigurationArn = value.licenseConfigurationArn;
        }
    }

    // license_configuration_arn - computed: true, optional: true, required: false
    private _licenseConfigurationArn?: string; 
    public get licenseConfigurationArn() {
        return this.getStringAttribute('license_configuration_arn');
    }
    public set licenseConfigurationArn(value: string) {
        this._licenseConfigurationArn = value;
    }
    public resetLicenseConfigurationArn() {
        this._licenseConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseConfigurationArnInput() {
        return this._licenseConfigurationArn;
    }
}

export class LicenseSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : LicenseSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): LicenseSpecificationPropertyOutputReference {
        return new LicenseSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchParametersProperty {
    /**
    * The Capacity Reservation targeting option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_reservation_specification CcCapacityProvider#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: CapacityReservationSpecificationProperty;
    /**
    * The block device mapping for ephemeral (instance store) volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ephemeral_volumes CcCapacityProvider#ephemeral_volumes}
    */
    readonly ephemeralVolumes?: EphemeralBlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the IAM instance profile to associate with launched instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_profile_arn CcCapacityProvider#instance_profile_arn}
    */
    readonly instanceProfileArn?: string;
    /**
    * Requirements for EC2 instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#instance_requirements CcCapacityProvider#instance_requirements}
    */
    readonly instanceRequirements: InstanceRequirementsProperty;
    /**
    * The license configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#license_specifications CcCapacityProvider#license_specifications}
    */
    readonly licenseSpecifications?: LicenseSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The monitoring level for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#monitoring CcCapacityProvider#monitoring}
    */
    readonly monitoring?: string;
    /**
    * The operating system and CPU architecture for the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#operating_system CcCapacityProvider#operating_system}
    */
    readonly operatingSystem: string;
    /**
    * Tags to apply to all EC2 resources (instances, volumes, and network interfaces) created by this capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#propagated_tags CcCapacityProvider#propagated_tags}
    */
    readonly propagatedTags?: { [key: string]: string };
    /**
    * The name of the SSH key pair to configure on instances for SSH connectivity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ssh_key_name CcCapacityProvider#ssh_key_name}
    */
    readonly sshKeyName?: string;
}
export class LaunchParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationSpecification = this._capacityReservationSpecification?.internalValue;
        }
        if (this._ephemeralVolumes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ephemeralVolumes = this._ephemeralVolumes?.internalValue;
        }
        if (this._instanceProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceProfileArn = this._instanceProfileArn;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._licenseSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseSpecifications = this._licenseSpecifications?.internalValue;
        }
        if (this._monitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoring = this._monitoring;
        }
        if (this._operatingSystem !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatingSystem = this._operatingSystem;
        }
        if (this._propagatedTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagatedTags = this._propagatedTags;
        }
        if (this._sshKeyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sshKeyName = this._sshKeyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationSpecification.internalValue = undefined;
            this._ephemeralVolumes.internalValue = undefined;
            this._instanceProfileArn = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._licenseSpecifications.internalValue = undefined;
            this._monitoring = undefined;
            this._operatingSystem = undefined;
            this._propagatedTags = undefined;
            this._sshKeyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationSpecification.internalValue = value.capacityReservationSpecification;
            this._ephemeralVolumes.internalValue = value.ephemeralVolumes;
            this._instanceProfileArn = value.instanceProfileArn;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._licenseSpecifications.internalValue = value.licenseSpecifications;
            this._monitoring = value.monitoring;
            this._operatingSystem = value.operatingSystem;
            this._propagatedTags = value.propagatedTags;
            this._sshKeyName = value.sshKeyName;
        }
    }

    // capacity_reservation_specification - computed: true, optional: true, required: false
    private _capacityReservationSpecification = new CapacityReservationSpecificationPropertyOutputReference(this, "capacity_reservation_specification");
    public get capacityReservationSpecification() {
        return this._capacityReservationSpecification;
    }
    public putCapacityReservationSpecification(value: CapacityReservationSpecificationProperty) {
        this._capacityReservationSpecification.internalValue = value;
    }
    public resetCapacityReservationSpecification() {
        this._capacityReservationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationSpecificationInput() {
        return this._capacityReservationSpecification.internalValue;
    }

    // ephemeral_volumes - computed: true, optional: true, required: false
    private _ephemeralVolumes = new EphemeralBlockDeviceMappingPropertyList(this, "ephemeral_volumes", false);
    public get ephemeralVolumes() {
        return this._ephemeralVolumes;
    }
    public putEphemeralVolumes(value: EphemeralBlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._ephemeralVolumes.internalValue = value;
    }
    public resetEphemeralVolumes() {
        this._ephemeralVolumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralVolumesInput() {
        return this._ephemeralVolumes.internalValue;
    }

    // instance_profile_arn - computed: true, optional: true, required: false
    private _instanceProfileArn?: string; 
    public get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }
    public set instanceProfileArn(value: string) {
        this._instanceProfileArn = value;
    }
    public resetInstanceProfileArn() {
        this._instanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileArnInput() {
        return this._instanceProfileArn;
    }

    // instance_requirements - computed: false, optional: false, required: true
    private _instanceRequirements = new InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: InstanceRequirementsProperty) {
        this._instanceRequirements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRequirementsInput() {
        return this._instanceRequirements.internalValue;
    }

    // license_specifications - computed: true, optional: true, required: false
    private _licenseSpecifications = new LicenseSpecificationPropertyList(this, "license_specifications", false);
    public get licenseSpecifications() {
        return this._licenseSpecifications;
    }
    public putLicenseSpecifications(value: LicenseSpecificationProperty[] | cdktn.IResolvable) {
        this._licenseSpecifications.internalValue = value;
    }
    public resetLicenseSpecifications() {
        this._licenseSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseSpecificationsInput() {
        return this._licenseSpecifications.internalValue;
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

    // operating_system - computed: false, optional: false, required: true
    private _operatingSystem?: string; 
    public get operatingSystem() {
        return this.getStringAttribute('operating_system');
    }
    public set operatingSystem(value: string) {
        this._operatingSystem = value;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemInput() {
        return this._operatingSystem;
    }

    // propagated_tags - computed: true, optional: true, required: false
    private _propagatedTags?: { [key: string]: string }; 
    public get propagatedTags() {
        return this.getStringMapAttribute('propagated_tags');
    }
    public set propagatedTags(value: { [key: string]: string }) {
        this._propagatedTags = value;
    }
    public resetPropagatedTags() {
        this._propagatedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagatedTagsInput() {
        return this._propagatedTags;
    }

    // ssh_key_name - computed: true, optional: true, required: false
    private _sshKeyName?: string; 
    public get sshKeyName() {
        return this.getStringAttribute('ssh_key_name');
    }
    public set sshKeyName(value: string) {
        this._sshKeyName = value;
    }
    public resetSshKeyName() {
        this._sshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshKeyNameInput() {
        return this._sshKeyName;
    }
}
export interface LaunchTemplateSourceProperty {
    /**
    * Parameters for launching EC2 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_parameters CcCapacityProvider#launch_parameters}
    */
    readonly launchParameters: LaunchParametersProperty;
}
export class LaunchTemplateSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchTemplateSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchParameters = this._launchParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchParameters.internalValue = value.launchParameters;
        }
    }

    // launch_parameters - computed: false, optional: false, required: true
    private _launchParameters = new LaunchParametersPropertyOutputReference(this, "launch_parameters");
    public get launchParameters() {
        return this._launchParameters;
    }
    public putLaunchParameters(value: LaunchParametersProperty) {
        this._launchParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchParametersInput() {
        return this._launchParameters.internalValue;
    }
}
export interface InstanceLifecycleConfigurationProperty {
    /**
    * The number of seconds an instance can remain idle before it is stopped.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#idle_instance_timeout CcCapacityProvider#idle_instance_timeout}
    */
    readonly idleInstanceTimeout?: number;
    /**
    * Maximum lifetime for the instance in seconds. Once reached, instances will be automatically terminated regardless of activity. Default: 28800 seconds (8 hours). Maximum: 1209600 seconds (14 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#max_lifetime CcCapacityProvider#max_lifetime}
    */
    readonly maxLifetime?: number;
}
export class InstanceLifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceLifecycleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idleInstanceTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.idleInstanceTimeout = this._idleInstanceTimeout;
        }
        if (this._maxLifetime !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLifetime = this._maxLifetime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceLifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idleInstanceTimeout = undefined;
            this._maxLifetime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idleInstanceTimeout = value.idleInstanceTimeout;
            this._maxLifetime = value.maxLifetime;
        }
    }

    // idle_instance_timeout - computed: true, optional: true, required: false
    private _idleInstanceTimeout?: number; 
    public get idleInstanceTimeout() {
        return this.getNumberAttribute('idle_instance_timeout');
    }
    public set idleInstanceTimeout(value: number) {
        this._idleInstanceTimeout = value;
    }
    public resetIdleInstanceTimeout() {
        this._idleInstanceTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInstanceTimeoutInput() {
        return this._idleInstanceTimeout;
    }

    // max_lifetime - computed: true, optional: true, required: false
    private _maxLifetime?: number; 
    public get maxLifetime() {
        return this.getNumberAttribute('max_lifetime');
    }
    public set maxLifetime(value: number) {
        this._maxLifetime = value;
    }
    public resetMaxLifetime() {
        this._maxLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLifetimeInput() {
        return this._maxLifetime;
    }
}
export interface RootVolumeConfigurationProperty {
    /**
    * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted CcCapacityProvider#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The free space guaranteed on the root volume, in GiB. The service adds the operating system overhead on top of this value. Defaults to 8 GiB. The maximum is below the 65,536 GiB gp3 ceiling because the service adds the AMI size bucket on top of this value, and the resulting total must still be a provisionable gp3 volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#free_space_gi_b CcCapacityProvider#free_space_gi_b}
    */
    readonly freeSpaceGiB?: number;
    /**
    * The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops CcCapacityProvider#iops}
    */
    readonly iops?: number;
    /**
    * Identifier of the customer managed KMS key to use for EBS encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id CcCapacityProvider#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The throughput to provision for a gp3 volume, in MiB/s. Valid range: 125-2000 MiB/s.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput CcCapacityProvider#throughput}
    */
    readonly throughput?: number;
    /**
    * The EBS volume type. Defaults to gp3 if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type CcCapacityProvider#volume_type}
    */
    readonly volumeType?: string;
}
export class RootVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RootVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._freeSpaceGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.freeSpaceGiB = this._freeSpaceGiB;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RootVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encrypted = undefined;
            this._freeSpaceGiB = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._throughput = undefined;
            this._volumeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encrypted = value.encrypted;
            this._freeSpaceGiB = value.freeSpaceGiB;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._throughput = value.throughput;
            this._volumeType = value.volumeType;
        }
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

    // free_space_gi_b - computed: true, optional: true, required: false
    private _freeSpaceGiB?: number; 
    public get freeSpaceGiB() {
        return this.getNumberAttribute('free_space_gi_b');
    }
    public set freeSpaceGiB(value: number) {
        this._freeSpaceGiB = value;
    }
    public resetFreeSpaceGiB() {
        this._freeSpaceGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get freeSpaceGiBInput() {
        return this._freeSpaceGiB;
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
export interface EbsVolumeConfigurationProperty {
    /**
    * Whether to encrypt the volume. Defaults to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#encrypted CcCapacityProvider#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of IOPS to provision. Only valid for gp3, io1, and io2 volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#iops CcCapacityProvider#iops}
    */
    readonly iops?: number;
    /**
    * Identifier of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#kms_key_id CcCapacityProvider#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The logical name of the volume, used to reference it when mounting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#name CcCapacityProvider#name}
    */
    readonly name?: string;
    /**
    * The size of the volume in GiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#size_gi_b CcCapacityProvider#size_gi_b}
    */
    readonly sizeGiB?: number;
    /**
    * Optional EBS snapshot ID to initialize the volume from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#snapshot_id CcCapacityProvider#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The throughput in MiB/s. Only valid for gp3 volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#throughput CcCapacityProvider#throughput}
    */
    readonly throughput?: number;
    /**
    * The EBS volume type. Defaults to gp3 if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volume_type CcCapacityProvider#volume_type}
    */
    readonly volumeType?: string;
}
export class EbsVolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsVolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sizeGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeGiB = this._sizeGiB;
        }
        if (this._snapshotId !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EbsVolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._name = undefined;
            this._sizeGiB = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._name = value.name;
            this._sizeGiB = value.sizeGiB;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeType = value.volumeType;
        }
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

    // size_gi_b - computed: true, optional: true, required: false
    private _sizeGiB?: number; 
    public get sizeGiB() {
        return this.getNumberAttribute('size_gi_b');
    }
    public set sizeGiB(value: number) {
        this._sizeGiB = value;
    }
    public resetSizeGiB() {
        this._sizeGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeGiBInput() {
        return this._sizeGiB;
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
export interface VolumeConfigurationProperty {
    /**
    * Configuration for an EBS-backed persistent volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ebs_configuration CcCapacityProvider#ebs_configuration}
    */
    readonly ebsConfiguration?: EbsVolumeConfigurationProperty;
}
export class VolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VolumeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsConfiguration = this._ebsConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VolumeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsConfiguration.internalValue = value.ebsConfiguration;
        }
    }

    // ebs_configuration - computed: true, optional: true, required: false
    private _ebsConfiguration = new EbsVolumeConfigurationPropertyOutputReference(this, "ebs_configuration");
    public get ebsConfiguration() {
        return this._ebsConfiguration;
    }
    public putEbsConfiguration(value: EbsVolumeConfigurationProperty) {
        this._ebsConfiguration.internalValue = value;
    }
    public resetEbsConfiguration() {
        this._ebsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsConfigurationInput() {
        return this._ebsConfiguration.internalValue;
    }
}

export class VolumeConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : VolumeConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): VolumeConfigurationPropertyOutputReference {
        return new VolumeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcConfigurationProperty {
    /**
    * The IDs of the security groups to associate with the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#security_groups CcCapacityProvider#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * The IDs of the subnets in which to launch instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#subnets CcCapacityProvider#subnets}
    */
    readonly subnets: string[];
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
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

    // security_groups - computed: false, optional: false, required: true
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface Ec2ConfigurationProperty {
    /**
    * How the launch template is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#launch_template_source CcCapacityProvider#launch_template_source}
    */
    readonly launchTemplateSource: LaunchTemplateSourceProperty;
    /**
    * Configuration for managing the lifecycle of instances in a capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#lifecycle_configuration CcCapacityProvider#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: InstanceLifecycleConfigurationProperty;
    /**
    * Customer-facing configuration for the (service-managed) root volume. The service provisions the root volume at its own AMI size estimate plus FreeSpaceGiB, and pins the visible free space to FreeSpaceGiB with a filler file, so the space you are guaranteed does not change as the underlying AMI grows. The device name and the delete-on-termination behavior are service-owned and are not configurable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#root_volume CcCapacityProvider#root_volume}
    */
    readonly rootVolume?: RootVolumeConfigurationProperty;
    /**
    * Named persistent EBS volumes for this capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#volumes CcCapacityProvider#volumes}
    */
    readonly volumes?: VolumeConfigurationProperty[] | cdktn.IResolvable;
    /**
    * VPC configuration for launching EC2 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#vpc_configuration CcCapacityProvider#vpc_configuration}
    */
    readonly vpcConfiguration: VpcConfigurationProperty;
}
export class Ec2ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Ec2ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchTemplateSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSource = this._launchTemplateSource?.internalValue;
        }
        if (this._lifecycleConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfiguration = this._lifecycleConfiguration?.internalValue;
        }
        if (this._rootVolume?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootVolume = this._rootVolume?.internalValue;
        }
        if (this._volumes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumes = this._volumes?.internalValue;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateSource.internalValue = undefined;
            this._lifecycleConfiguration.internalValue = undefined;
            this._rootVolume.internalValue = undefined;
            this._volumes.internalValue = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateSource.internalValue = value.launchTemplateSource;
            this._lifecycleConfiguration.internalValue = value.lifecycleConfiguration;
            this._rootVolume.internalValue = value.rootVolume;
            this._volumes.internalValue = value.volumes;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // launch_template_source - computed: false, optional: false, required: true
    private _launchTemplateSource = new LaunchTemplateSourcePropertyOutputReference(this, "launch_template_source");
    public get launchTemplateSource() {
        return this._launchTemplateSource;
    }
    public putLaunchTemplateSource(value: LaunchTemplateSourceProperty) {
        this._launchTemplateSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateSourceInput() {
        return this._launchTemplateSource.internalValue;
    }

    // lifecycle_configuration - computed: true, optional: true, required: false
    private _lifecycleConfiguration = new InstanceLifecycleConfigurationPropertyOutputReference(this, "lifecycle_configuration");
    public get lifecycleConfiguration() {
        return this._lifecycleConfiguration;
    }
    public putLifecycleConfiguration(value: InstanceLifecycleConfigurationProperty) {
        this._lifecycleConfiguration.internalValue = value;
    }
    public resetLifecycleConfiguration() {
        this._lifecycleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigurationInput() {
        return this._lifecycleConfiguration.internalValue;
    }

    // root_volume - computed: true, optional: true, required: false
    private _rootVolume = new RootVolumeConfigurationPropertyOutputReference(this, "root_volume");
    public get rootVolume() {
        return this._rootVolume;
    }
    public putRootVolume(value: RootVolumeConfigurationProperty) {
        this._rootVolume.internalValue = value;
    }
    public resetRootVolume() {
        this._rootVolume.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeInput() {
        return this._rootVolume.internalValue;
    }

    // volumes - computed: true, optional: true, required: false
    private _volumes = new VolumeConfigurationPropertyList(this, "volumes", false);
    public get volumes() {
        return this._volumes;
    }
    public putVolumes(value: VolumeConfigurationProperty[] | cdktn.IResolvable) {
        this._volumes.internalValue = value;
    }
    public resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumesInput() {
        return this._volumes.internalValue;
    }

    // vpc_configuration - computed: false, optional: false, required: true
    private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
export interface ComputeConfigurationProperty {
    /**
    * Configuration for EC2-based capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#ec_2_configuration CcCapacityProvider#ec_2_configuration}
    */
    readonly ec2Configuration: Ec2ConfigurationProperty;
}
export class ComputeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ec2Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ec2Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ec2Configuration.internalValue = value.ec2Configuration;
        }
    }

    // ec_2_configuration - computed: false, optional: false, required: true
    private _ec2Configuration = new Ec2ConfigurationPropertyOutputReference(this, "ec_2_configuration");
    public get ec2Configuration() {
        return this._ec2Configuration;
    }
    public putEc2Configuration(value: Ec2ConfigurationProperty) {
        this._ec2Configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2ConfigurationInput() {
        return this._ec2Configuration.internalValue;
    }
}
export interface PermissionsConfigurationProperty {
    /**
    * The ARN of the IAM role that operators use to manage the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#capacity_provider_operator_role_arn CcCapacityProvider#capacity_provider_operator_role_arn}
    */
    readonly capacityProviderOperatorRoleArn: string;
}
export class PermissionsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PermissionsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityProviderOperatorRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProviderOperatorRoleArn = this._capacityProviderOperatorRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PermissionsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityProviderOperatorRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityProviderOperatorRoleArn = value.capacityProviderOperatorRoleArn;
        }
    }

    // capacity_provider_operator_role_arn - computed: false, optional: false, required: true
    private _capacityProviderOperatorRoleArn?: string; 
    public get capacityProviderOperatorRoleArn() {
        return this.getStringAttribute('capacity_provider_operator_role_arn');
    }
    public set capacityProviderOperatorRoleArn(value: string) {
        this._capacityProviderOperatorRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderOperatorRoleArnInput() {
        return this._capacityProviderOperatorRoleArn;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#key CcCapacityProvider#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_capacity_provider#value CcCapacityProvider#value}
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
