// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkspaceInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#managed_instance CcWorkspaceInstance#managed_instance}
    */
    readonly managedInstance?: CcWorkspaceInstance.ManagedInstanceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags CcWorkspaceInstance#tags}
    */
    readonly tags?: CcWorkspaceInstance.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}
*/
export class CcWorkspaceInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesinstances_workspace_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkspaceInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkspaceInstance to import
    * @param importFromId The id of the existing CcWorkspaceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkspaceInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesinstances_workspace_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkspaceInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcWorkspaceInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesinstances_workspace_instance',
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
        this._managedInstance.internalValue = config.managedInstance;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ec2_managed_instance - computed: true, optional: false, required: false
    private _ec2ManagedInstance = new CcWorkspaceInstance.Ec2ManagedInstancePropertyOutputReference(this, "ec2_managed_instance");
    public get ec2ManagedInstance() {
        return this._ec2ManagedInstance;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_instance - computed: true, optional: true, required: false
    private _managedInstance = new CcWorkspaceInstance.ManagedInstancePropertyOutputReference(this, "managed_instance");
    public get managedInstance() {
        return this._managedInstance;
    }
    public putManagedInstance(value: CcWorkspaceInstance.ManagedInstanceProperty) {
        this._managedInstance.internalValue = value;
    }
    public resetManagedInstance() {
        this._managedInstance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedInstanceInput() {
        return this._managedInstance.internalValue;
    }

    // provision_state - computed: true, optional: false, required: false
    public get provisionState() {
        return this.getStringAttribute('provision_state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkspaceInstance.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkspaceInstance.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workspace_instance_id - computed: true, optional: false, required: false
    public get workspaceInstanceId() {
        return this.getStringAttribute('workspace_instance_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            managed_instance: ccWorkspaceInstanceManagedInstancePropertyToTerraform(this._managedInstance.internalValue),
            tags: cdktn.listMapper(ccWorkspaceInstanceTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            managed_instance: {
                value: ccWorkspaceInstanceManagedInstancePropertyToHclTerraform(this._managedInstance.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspaceInstance.ManagedInstanceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkspaceInstanceTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkspaceInstance.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkspaceInstanceEc2ManagedInstancePropertyToTerraform(struct?: CcWorkspaceInstance.Ec2ManagedInstanceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWorkspaceInstanceEc2ManagedInstancePropertyToHclTerraform(struct?: CcWorkspaceInstance.Ec2ManagedInstanceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWorkspaceInstanceEbsBlockDevicePropertyToTerraform(struct?: CcWorkspaceInstance.EbsBlockDeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccWorkspaceInstanceEbsBlockDevicePropertyToHclTerraform(struct?: CcWorkspaceInstance.EbsBlockDeviceProperty | cdktn.IResolvable): any {
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
        throughput: {
            value: cdktn.numberToHclTerraform(struct!.throughput),
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


export function ccWorkspaceInstanceBlockDeviceMappingPropertyToTerraform(struct?: CcWorkspaceInstance.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccWorkspaceInstanceEbsBlockDevicePropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccWorkspaceInstanceBlockDeviceMappingPropertyToHclTerraform(struct?: CcWorkspaceInstance.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccWorkspaceInstanceEbsBlockDevicePropertyToHclTerraform(struct!.ebs),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsBlockDeviceProperty",
        },
        no_device: {
            value: cdktn.stringToHclTerraform(struct!.noDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccWorkspaceInstanceCapacityReservationTargetPropertyToTerraform(struct?: CcWorkspaceInstance.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_id: cdktn.stringToTerraform(struct!.capacityReservationId),
        capacity_reservation_resource_group_arn: cdktn.stringToTerraform(struct!.capacityReservationResourceGroupArn),
    }
}


export function ccWorkspaceInstanceCapacityReservationTargetPropertyToHclTerraform(struct?: CcWorkspaceInstance.CapacityReservationTargetProperty | cdktn.IResolvable): any {
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


export function ccWorkspaceInstanceCapacityReservationSpecificationPropertyToTerraform(struct?: CcWorkspaceInstance.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        capacity_reservation_target: ccWorkspaceInstanceCapacityReservationTargetPropertyToTerraform(struct!.capacityReservationTarget),
    }
}


export function ccWorkspaceInstanceCapacityReservationSpecificationPropertyToHclTerraform(struct?: CcWorkspaceInstance.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
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
            value: ccWorkspaceInstanceCapacityReservationTargetPropertyToHclTerraform(struct!.capacityReservationTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceCpuOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.CpuOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        core_count: cdktn.numberToTerraform(struct!.coreCount),
        threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
    }
}


export function ccWorkspaceInstanceCpuOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.CpuOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        core_count: {
            value: cdktn.numberToHclTerraform(struct!.coreCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        threads_per_core: {
            value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceCreditSpecificationRequestPropertyToTerraform(struct?: CcWorkspaceInstance.CreditSpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_credits: cdktn.stringToTerraform(struct!.cpuCredits),
    }
}


export function ccWorkspaceInstanceCreditSpecificationRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.CreditSpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu_credits: {
            value: cdktn.stringToHclTerraform(struct!.cpuCredits),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceEnclaveOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.EnclaveOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccWorkspaceInstanceEnclaveOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.EnclaveOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceHibernationOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.HibernationOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configured: cdktn.booleanToTerraform(struct!.configured),
    }
}


export function ccWorkspaceInstanceHibernationOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.HibernationOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configured: {
            value: cdktn.booleanToHclTerraform(struct!.configured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceIamInstanceProfileSpecificationPropertyToTerraform(struct?: CcWorkspaceInstance.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccWorkspaceInstanceIamInstanceProfileSpecificationPropertyToHclTerraform(struct?: CcWorkspaceInstance.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
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


export function ccWorkspaceInstanceLicenseConfigurationRequestPropertyToTerraform(struct?: CcWorkspaceInstance.LicenseConfigurationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
    }
}


export function ccWorkspaceInstanceLicenseConfigurationRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.LicenseConfigurationRequestProperty | cdktn.IResolvable): any {
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


export function ccWorkspaceInstanceInstanceMaintenanceOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.InstanceMaintenanceOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_recovery: cdktn.stringToTerraform(struct!.autoRecovery),
    }
}


export function ccWorkspaceInstanceInstanceMaintenanceOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.InstanceMaintenanceOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_recovery: {
            value: cdktn.stringToHclTerraform(struct!.autoRecovery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceInstanceMetadataOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.InstanceMetadataOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_endpoint: cdktn.stringToTerraform(struct!.httpEndpoint),
        http_protocol_ipv_6: cdktn.stringToTerraform(struct!.httpProtocolIpv6),
        http_put_response_hop_limit: cdktn.numberToTerraform(struct!.httpPutResponseHopLimit),
        http_tokens: cdktn.stringToTerraform(struct!.httpTokens),
        instance_metadata_tags: cdktn.stringToTerraform(struct!.instanceMetadataTags),
    }
}


export function ccWorkspaceInstanceInstanceMetadataOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.InstanceMetadataOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.httpEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_protocol_ipv_6: {
            value: cdktn.stringToHclTerraform(struct!.httpProtocolIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_put_response_hop_limit: {
            value: cdktn.numberToHclTerraform(struct!.httpPutResponseHopLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        http_tokens: {
            value: cdktn.stringToHclTerraform(struct!.httpTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_metadata_tags: {
            value: cdktn.stringToHclTerraform(struct!.instanceMetadataTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceRunInstancesMonitoringEnabledPropertyToTerraform(struct?: CcWorkspaceInstance.RunInstancesMonitoringEnabledProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccWorkspaceInstanceRunInstancesMonitoringEnabledPropertyToHclTerraform(struct?: CcWorkspaceInstance.RunInstancesMonitoringEnabledProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceInstanceNetworkInterfaceSpecificationPropertyToTerraform(struct?: CcWorkspaceInstance.InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        device_index: cdktn.numberToTerraform(struct!.deviceIndex),
        groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccWorkspaceInstanceInstanceNetworkInterfaceSpecificationPropertyToHclTerraform(struct?: CcWorkspaceInstance.InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_index: {
            value: cdktn.numberToHclTerraform(struct!.deviceIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceInstanceNetworkPerformanceOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.InstanceNetworkPerformanceOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth_weighting: cdktn.stringToTerraform(struct!.bandwidthWeighting),
    }
}


export function ccWorkspaceInstanceInstanceNetworkPerformanceOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.InstanceNetworkPerformanceOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth_weighting: {
            value: cdktn.stringToHclTerraform(struct!.bandwidthWeighting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstancePlacementPropertyToTerraform(struct?: CcWorkspaceInstance.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        group_id: cdktn.stringToTerraform(struct!.groupId),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        partition_number: cdktn.numberToTerraform(struct!.partitionNumber),
        tenancy: cdktn.stringToTerraform(struct!.tenancy),
    }
}


export function ccWorkspaceInstancePlacementPropertyToHclTerraform(struct?: CcWorkspaceInstance.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_id: {
            value: cdktn.stringToHclTerraform(struct!.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_number: {
            value: cdktn.numberToHclTerraform(struct!.partitionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tenancy: {
            value: cdktn.stringToHclTerraform(struct!.tenancy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstancePrivateDnsNameOptionsRequestPropertyToTerraform(struct?: CcWorkspaceInstance.PrivateDnsNameOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_resource_name_dns_a_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsARecord),
        enable_resource_name_dns_aaaa_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsAaaaRecord),
        hostname_type: cdktn.stringToTerraform(struct!.hostnameType),
    }
}


export function ccWorkspaceInstancePrivateDnsNameOptionsRequestPropertyToHclTerraform(struct?: CcWorkspaceInstance.PrivateDnsNameOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_resource_name_dns_a_record: {
            value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsARecord),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_resource_name_dns_aaaa_record: {
            value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsAaaaRecord),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hostname_type: {
            value: cdktn.stringToHclTerraform(struct!.hostnameType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceTagPropertyToTerraform(struct?: CcWorkspaceInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceInstanceTagPropertyToHclTerraform(struct?: CcWorkspaceInstance.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkspaceInstanceTagSpecificationPropertyToTerraform(struct?: CcWorkspaceInstance.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccWorkspaceInstanceTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccWorkspaceInstanceTagSpecificationPropertyToHclTerraform(struct?: CcWorkspaceInstance.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccWorkspaceInstanceTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceManagedInstancePropertyToTerraform(struct?: CcWorkspaceInstance.ManagedInstanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_device_mappings: cdktn.listMapper(ccWorkspaceInstanceBlockDeviceMappingPropertyToTerraform, false)(struct!.blockDeviceMappings),
        capacity_reservation_specification: ccWorkspaceInstanceCapacityReservationSpecificationPropertyToTerraform(struct!.capacityReservationSpecification),
        cpu_options: ccWorkspaceInstanceCpuOptionsRequestPropertyToTerraform(struct!.cpuOptions),
        credit_specification: ccWorkspaceInstanceCreditSpecificationRequestPropertyToTerraform(struct!.creditSpecification),
        disable_api_stop: cdktn.booleanToTerraform(struct!.disableApiStop),
        ebs_optimized: cdktn.booleanToTerraform(struct!.ebsOptimized),
        enable_primary_ipv_6: cdktn.booleanToTerraform(struct!.enablePrimaryIpv6),
        enclave_options: ccWorkspaceInstanceEnclaveOptionsRequestPropertyToTerraform(struct!.enclaveOptions),
        hibernation_options: ccWorkspaceInstanceHibernationOptionsRequestPropertyToTerraform(struct!.hibernationOptions),
        iam_instance_profile: ccWorkspaceInstanceIamInstanceProfileSpecificationPropertyToTerraform(struct!.iamInstanceProfile),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
        key_name: cdktn.stringToTerraform(struct!.keyName),
        license_specifications: cdktn.listMapper(ccWorkspaceInstanceLicenseConfigurationRequestPropertyToTerraform, false)(struct!.licenseSpecifications),
        maintenance_options: ccWorkspaceInstanceInstanceMaintenanceOptionsRequestPropertyToTerraform(struct!.maintenanceOptions),
        metadata_options: ccWorkspaceInstanceInstanceMetadataOptionsRequestPropertyToTerraform(struct!.metadataOptions),
        monitoring: ccWorkspaceInstanceRunInstancesMonitoringEnabledPropertyToTerraform(struct!.monitoring),
        network_interfaces: cdktn.listMapper(ccWorkspaceInstanceInstanceNetworkInterfaceSpecificationPropertyToTerraform, false)(struct!.networkInterfaces),
        network_performance_options: ccWorkspaceInstanceInstanceNetworkPerformanceOptionsRequestPropertyToTerraform(struct!.networkPerformanceOptions),
        placement: ccWorkspaceInstancePlacementPropertyToTerraform(struct!.placement),
        private_dns_name_options: ccWorkspaceInstancePrivateDnsNameOptionsRequestPropertyToTerraform(struct!.privateDnsNameOptions),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
        tag_specifications: cdktn.listMapper(ccWorkspaceInstanceTagSpecificationPropertyToTerraform, false)(struct!.tagSpecifications),
        user_data: cdktn.stringToTerraform(struct!.userData),
    }
}


export function ccWorkspaceInstanceManagedInstancePropertyToHclTerraform(struct?: CcWorkspaceInstance.ManagedInstanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_device_mappings: {
            value: cdktn.listMapperHcl(ccWorkspaceInstanceBlockDeviceMappingPropertyToHclTerraform, false)(struct!.blockDeviceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "BlockDeviceMappingPropertyList",
        },
        capacity_reservation_specification: {
            value: ccWorkspaceInstanceCapacityReservationSpecificationPropertyToHclTerraform(struct!.capacityReservationSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationSpecificationProperty",
        },
        cpu_options: {
            value: ccWorkspaceInstanceCpuOptionsRequestPropertyToHclTerraform(struct!.cpuOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuOptionsRequestProperty",
        },
        credit_specification: {
            value: ccWorkspaceInstanceCreditSpecificationRequestPropertyToHclTerraform(struct!.creditSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CreditSpecificationRequestProperty",
        },
        disable_api_stop: {
            value: cdktn.booleanToHclTerraform(struct!.disableApiStop),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ebs_optimized: {
            value: cdktn.booleanToHclTerraform(struct!.ebsOptimized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_primary_ipv_6: {
            value: cdktn.booleanToHclTerraform(struct!.enablePrimaryIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enclave_options: {
            value: ccWorkspaceInstanceEnclaveOptionsRequestPropertyToHclTerraform(struct!.enclaveOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "EnclaveOptionsRequestProperty",
        },
        hibernation_options: {
            value: ccWorkspaceInstanceHibernationOptionsRequestPropertyToHclTerraform(struct!.hibernationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "HibernationOptionsRequestProperty",
        },
        iam_instance_profile: {
            value: ccWorkspaceInstanceIamInstanceProfileSpecificationPropertyToHclTerraform(struct!.iamInstanceProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "IamInstanceProfileSpecificationProperty",
        },
        image_id: {
            value: cdktn.stringToHclTerraform(struct!.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv_6_address_count: {
            value: cdktn.numberToHclTerraform(struct!.ipv6AddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        key_name: {
            value: cdktn.stringToHclTerraform(struct!.keyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        license_specifications: {
            value: cdktn.listMapperHcl(ccWorkspaceInstanceLicenseConfigurationRequestPropertyToHclTerraform, false)(struct!.licenseSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "LicenseConfigurationRequestPropertyList",
        },
        maintenance_options: {
            value: ccWorkspaceInstanceInstanceMaintenanceOptionsRequestPropertyToHclTerraform(struct!.maintenanceOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceMaintenanceOptionsRequestProperty",
        },
        metadata_options: {
            value: ccWorkspaceInstanceInstanceMetadataOptionsRequestPropertyToHclTerraform(struct!.metadataOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceMetadataOptionsRequestProperty",
        },
        monitoring: {
            value: ccWorkspaceInstanceRunInstancesMonitoringEnabledPropertyToHclTerraform(struct!.monitoring),
            isBlock: true,
            type: "struct",
            storageClassType: "RunInstancesMonitoringEnabledProperty",
        },
        network_interfaces: {
            value: cdktn.listMapperHcl(ccWorkspaceInstanceInstanceNetworkInterfaceSpecificationPropertyToHclTerraform, false)(struct!.networkInterfaces),
            isBlock: true,
            type: "list",
            storageClassType: "InstanceNetworkInterfaceSpecificationPropertyList",
        },
        network_performance_options: {
            value: ccWorkspaceInstanceInstanceNetworkPerformanceOptionsRequestPropertyToHclTerraform(struct!.networkPerformanceOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceNetworkPerformanceOptionsRequestProperty",
        },
        placement: {
            value: ccWorkspaceInstancePlacementPropertyToHclTerraform(struct!.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PlacementProperty",
        },
        private_dns_name_options: {
            value: ccWorkspaceInstancePrivateDnsNameOptionsRequestPropertyToHclTerraform(struct!.privateDnsNameOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateDnsNameOptionsRequestProperty",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_specifications: {
            value: cdktn.listMapperHcl(ccWorkspaceInstanceTagSpecificationPropertyToHclTerraform, false)(struct!.tagSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "TagSpecificationPropertyList",
        },
        user_data: {
            value: cdktn.stringToHclTerraform(struct!.userData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceInstanceTagsPropertyToTerraform(struct?: CcWorkspaceInstance.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceInstanceTagsPropertyToHclTerraform(struct?: CcWorkspaceInstance.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcWorkspaceInstance {
export interface Ec2ManagedInstanceProperty {
}
export class Ec2ManagedInstancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Ec2ManagedInstanceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ec2ManagedInstanceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
}
export interface EbsBlockDeviceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#encrypted CcWorkspaceInstance#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iops CcWorkspaceInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id CcWorkspaceInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#throughput CcWorkspaceInstance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_size CcWorkspaceInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_type CcWorkspaceInstance#volume_type}
    */
    readonly volumeType?: string;
}
export class EbsBlockDevicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsBlockDeviceProperty | cdktn.IResolvable | undefined {
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
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
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

    public set internalValue(value: EbsBlockDeviceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._throughput = undefined;
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
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
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
export interface BlockDeviceMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_name CcWorkspaceInstance#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs CcWorkspaceInstance#ebs}
    */
    readonly ebs?: EbsBlockDeviceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#no_device CcWorkspaceInstance#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#virtual_name CcWorkspaceInstance#virtual_name}
    */
    readonly virtualName?: string;
}
export class BlockDeviceMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BlockDeviceMappingProperty | cdktn.IResolvable | undefined {
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
        if (this._noDevice !== undefined) {
            hasAnyValues = true;
            internalValueResult.noDevice = this._noDevice;
        }
        if (this._virtualName !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualName = this._virtualName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlockDeviceMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._ebs.internalValue = undefined;
            this._noDevice = undefined;
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
            this._noDevice = value.noDevice;
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
    private _ebs = new EbsBlockDevicePropertyOutputReference(this, "ebs");
    public get ebs() {
        return this._ebs;
    }
    public putEbs(value: EbsBlockDeviceProperty) {
        this._ebs.internalValue = value;
    }
    public resetEbs() {
        this._ebs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsInput() {
        return this._ebs.internalValue;
    }

    // no_device - computed: true, optional: true, required: false
    private _noDevice?: string; 
    public get noDevice() {
        return this.getStringAttribute('no_device');
    }
    public set noDevice(value: string) {
        this._noDevice = value;
    }
    public resetNoDevice() {
        this._noDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noDeviceInput() {
        return this._noDevice;
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

export class BlockDeviceMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : BlockDeviceMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): BlockDeviceMappingPropertyOutputReference {
        return new BlockDeviceMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacityReservationTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id CcWorkspaceInstance#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn CcWorkspaceInstance#capacity_reservation_resource_group_arn}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference CcWorkspaceInstance#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target CcWorkspaceInstance#capacity_reservation_target}
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
export interface CpuOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#core_count CcWorkspaceInstance#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core CcWorkspaceInstance#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export class CpuOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CpuOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coreCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.coreCount = this._coreCount;
        }
        if (this._threadsPerCore !== undefined) {
            hasAnyValues = true;
            internalValueResult.threadsPerCore = this._threadsPerCore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CpuOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coreCount = undefined;
            this._threadsPerCore = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coreCount = value.coreCount;
            this._threadsPerCore = value.threadsPerCore;
        }
    }

    // core_count - computed: true, optional: true, required: false
    private _coreCount?: number; 
    public get coreCount() {
        return this.getNumberAttribute('core_count');
    }
    public set coreCount(value: number) {
        this._coreCount = value;
    }
    public resetCoreCount() {
        this._coreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreCountInput() {
        return this._coreCount;
    }

    // threads_per_core - computed: true, optional: true, required: false
    private _threadsPerCore?: number; 
    public get threadsPerCore() {
        return this.getNumberAttribute('threads_per_core');
    }
    public set threadsPerCore(value: number) {
        this._threadsPerCore = value;
    }
    public resetThreadsPerCore() {
        this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threadsPerCoreInput() {
        return this._threadsPerCore;
    }
}
export interface CreditSpecificationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits CcWorkspaceInstance#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export class CreditSpecificationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreditSpecificationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpuCredits !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuCredits = this._cpuCredits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreditSpecificationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuCredits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuCredits = value.cpuCredits;
        }
    }

    // cpu_credits - computed: true, optional: true, required: false
    private _cpuCredits?: string; 
    public get cpuCredits() {
        return this.getStringAttribute('cpu_credits');
    }
    public set cpuCredits(value: string) {
        this._cpuCredits = value;
    }
    public resetCpuCredits() {
        this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCreditsInput() {
        return this._cpuCredits;
    }
}
export interface EnclaveOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled CcWorkspaceInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class EnclaveOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnclaveOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnclaveOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
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
}
export interface HibernationOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#configured CcWorkspaceInstance#configured}
    */
    readonly configured?: boolean | cdktn.IResolvable;
}
export class HibernationOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HibernationOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configured !== undefined) {
            hasAnyValues = true;
            internalValueResult.configured = this._configured;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HibernationOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configured = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configured = value.configured;
        }
    }

    // configured - computed: true, optional: true, required: false
    private _configured?: boolean | cdktn.IResolvable; 
    public get configured() {
        return this.getBooleanAttribute('configured');
    }
    public set configured(value: boolean | cdktn.IResolvable) {
        this._configured = value;
    }
    public resetConfigured() {
        this._configured = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredInput() {
        return this._configured;
    }
}
export interface IamInstanceProfileSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#arn CcWorkspaceInstance#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#name CcWorkspaceInstance#name}
    */
    readonly name?: string;
}
export class IamInstanceProfileSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamInstanceProfileSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamInstanceProfileSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._name = value.name;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
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
export interface LicenseConfigurationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn CcWorkspaceInstance#license_configuration_arn}
    */
    readonly licenseConfigurationArn?: string;
}
export class LicenseConfigurationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LicenseConfigurationRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LicenseConfigurationRequestProperty | cdktn.IResolvable | undefined) {
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

export class LicenseConfigurationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : LicenseConfigurationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): LicenseConfigurationRequestPropertyOutputReference {
        return new LicenseConfigurationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceMaintenanceOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery CcWorkspaceInstance#auto_recovery}
    */
    readonly autoRecovery?: string;
}
export class InstanceMaintenanceOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMaintenanceOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRecovery !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRecovery = this._autoRecovery;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMaintenanceOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRecovery = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRecovery = value.autoRecovery;
        }
    }

    // auto_recovery - computed: true, optional: true, required: false
    private _autoRecovery?: string; 
    public get autoRecovery() {
        return this.getStringAttribute('auto_recovery');
    }
    public set autoRecovery(value: string) {
        this._autoRecovery = value;
    }
    public resetAutoRecovery() {
        this._autoRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRecoveryInput() {
        return this._autoRecovery;
    }
}
export interface InstanceMetadataOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint CcWorkspaceInstance#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 CcWorkspaceInstance#http_protocol_ipv_6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit CcWorkspaceInstance#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_tokens CcWorkspaceInstance#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags CcWorkspaceInstance#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
export class InstanceMetadataOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMetadataOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpEndpoint = this._httpEndpoint;
        }
        if (this._httpProtocolIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpProtocolIpv6 = this._httpProtocolIpv6;
        }
        if (this._httpPutResponseHopLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
        }
        if (this._httpTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpTokens = this._httpTokens;
        }
        if (this._instanceMetadataTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMetadataTags = this._instanceMetadataTags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMetadataOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpEndpoint = undefined;
            this._httpProtocolIpv6 = undefined;
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
            this._instanceMetadataTags = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpEndpoint = value.httpEndpoint;
            this._httpProtocolIpv6 = value.httpProtocolIpv6;
            this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
            this._httpTokens = value.httpTokens;
            this._instanceMetadataTags = value.instanceMetadataTags;
        }
    }

    // http_endpoint - computed: true, optional: true, required: false
    private _httpEndpoint?: string; 
    public get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    public set httpEndpoint(value: string) {
        this._httpEndpoint = value;
    }
    public resetHttpEndpoint() {
        this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpEndpointInput() {
        return this._httpEndpoint;
    }

    // http_protocol_ipv_6 - computed: true, optional: true, required: false
    private _httpProtocolIpv6?: string; 
    public get httpProtocolIpv6() {
        return this.getStringAttribute('http_protocol_ipv_6');
    }
    public set httpProtocolIpv6(value: string) {
        this._httpProtocolIpv6 = value;
    }
    public resetHttpProtocolIpv6() {
        this._httpProtocolIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpProtocolIpv6Input() {
        return this._httpProtocolIpv6;
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number; 
    public get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number) {
        this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
        this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
        return this._httpPutResponseHopLimit;
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string; 
    public get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string) {
        this._httpTokens = value;
    }
    public resetHttpTokens() {
        this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
        return this._httpTokens;
    }

    // instance_metadata_tags - computed: true, optional: true, required: false
    private _instanceMetadataTags?: string; 
    public get instanceMetadataTags() {
        return this.getStringAttribute('instance_metadata_tags');
    }
    public set instanceMetadataTags(value: string) {
        this._instanceMetadataTags = value;
    }
    public resetInstanceMetadataTags() {
        this._instanceMetadataTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMetadataTagsInput() {
        return this._instanceMetadataTags;
    }
}
export interface RunInstancesMonitoringEnabledProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled CcWorkspaceInstance#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class RunInstancesMonitoringEnabledPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RunInstancesMonitoringEnabledProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RunInstancesMonitoringEnabledProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
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
}
export interface InstanceNetworkInterfaceSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#description CcWorkspaceInstance#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_index CcWorkspaceInstance#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#groups CcWorkspaceInstance#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id CcWorkspaceInstance#subnet_id}
    */
    readonly subnetId?: string;
}
export class InstanceNetworkInterfaceSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._deviceIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceIndex = this._deviceIndex;
        }
        if (this._groups !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._groups = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._groups = value.groups;
            this._subnetId = value.subnetId;
        }
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

    // device_index - computed: true, optional: true, required: false
    private _deviceIndex?: number; 
    public get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    public set deviceIndex(value: number) {
        this._deviceIndex = value;
    }
    public resetDeviceIndex() {
        this._deviceIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIndexInput() {
        return this._deviceIndex;
    }

    // groups - computed: true, optional: true, required: false
    private _groups?: string[]; 
    public get groups() {
        return this.getListAttribute('groups');
    }
    public set groups(value: string[]) {
        this._groups = value;
    }
    public resetGroups() {
        this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
        return this._groups;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}

export class InstanceNetworkInterfaceSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceNetworkInterfaceSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceNetworkInterfaceSpecificationPropertyOutputReference {
        return new InstanceNetworkInterfaceSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceNetworkPerformanceOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting CcWorkspaceInstance#bandwidth_weighting}
    */
    readonly bandwidthWeighting?: string;
}
export class InstanceNetworkPerformanceOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceNetworkPerformanceOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidthWeighting !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthWeighting = this._bandwidthWeighting;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceNetworkPerformanceOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidthWeighting = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidthWeighting = value.bandwidthWeighting;
        }
    }

    // bandwidth_weighting - computed: true, optional: true, required: false
    private _bandwidthWeighting?: string; 
    public get bandwidthWeighting() {
        return this.getStringAttribute('bandwidth_weighting');
    }
    public set bandwidthWeighting(value: string) {
        this._bandwidthWeighting = value;
    }
    public resetBandwidthWeighting() {
        this._bandwidthWeighting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthWeightingInput() {
        return this._bandwidthWeighting;
    }
}
export interface PlacementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#availability_zone CcWorkspaceInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_id CcWorkspaceInstance#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_name CcWorkspaceInstance#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#partition_number CcWorkspaceInstance#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tenancy CcWorkspaceInstance#tenancy}
    */
    readonly tenancy?: string;
}
export class PlacementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PlacementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._partitionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionNumber = this._partitionNumber;
        }
        if (this._tenancy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenancy = this._tenancy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._groupId = undefined;
            this._groupName = undefined;
            this._partitionNumber = undefined;
            this._tenancy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._groupId = value.groupId;
            this._groupName = value.groupName;
            this._partitionNumber = value.partitionNumber;
            this._tenancy = value.tenancy;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // group_id - computed: true, optional: true, required: false
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    public resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // partition_number - computed: true, optional: true, required: false
    private _partitionNumber?: number; 
    public get partitionNumber() {
        return this.getNumberAttribute('partition_number');
    }
    public set partitionNumber(value: number) {
        this._partitionNumber = value;
    }
    public resetPartitionNumber() {
        this._partitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionNumberInput() {
        return this._partitionNumber;
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string; 
    public get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string) {
        this._tenancy = value;
    }
    public resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
        return this._tenancy;
    }
}
export interface PrivateDnsNameOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record CcWorkspaceInstance#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record CcWorkspaceInstance#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hostname_type CcWorkspaceInstance#hostname_type}
    */
    readonly hostnameType?: string;
}
export class PrivateDnsNameOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateDnsNameOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableResourceNameDnsARecord !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableResourceNameDnsARecord = this._enableResourceNameDnsARecord;
        }
        if (this._enableResourceNameDnsAaaaRecord !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableResourceNameDnsAaaaRecord = this._enableResourceNameDnsAaaaRecord;
        }
        if (this._hostnameType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostnameType = this._hostnameType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateDnsNameOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableResourceNameDnsARecord = undefined;
            this._enableResourceNameDnsAaaaRecord = undefined;
            this._hostnameType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableResourceNameDnsARecord = value.enableResourceNameDnsARecord;
            this._enableResourceNameDnsAaaaRecord = value.enableResourceNameDnsAaaaRecord;
            this._hostnameType = value.hostnameType;
        }
    }

    // enable_resource_name_dns_a_record - computed: true, optional: true, required: false
    private _enableResourceNameDnsARecord?: boolean | cdktn.IResolvable; 
    public get enableResourceNameDnsARecord() {
        return this.getBooleanAttribute('enable_resource_name_dns_a_record');
    }
    public set enableResourceNameDnsARecord(value: boolean | cdktn.IResolvable) {
        this._enableResourceNameDnsARecord = value;
    }
    public resetEnableResourceNameDnsARecord() {
        this._enableResourceNameDnsARecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableResourceNameDnsARecordInput() {
        return this._enableResourceNameDnsARecord;
    }

    // enable_resource_name_dns_aaaa_record - computed: true, optional: true, required: false
    private _enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable; 
    public get enableResourceNameDnsAaaaRecord() {
        return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record');
    }
    public set enableResourceNameDnsAaaaRecord(value: boolean | cdktn.IResolvable) {
        this._enableResourceNameDnsAaaaRecord = value;
    }
    public resetEnableResourceNameDnsAaaaRecord() {
        this._enableResourceNameDnsAaaaRecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableResourceNameDnsAaaaRecordInput() {
        return this._enableResourceNameDnsAaaaRecord;
    }

    // hostname_type - computed: true, optional: true, required: false
    private _hostnameType?: string; 
    public get hostnameType() {
        return this.getStringAttribute('hostname_type');
    }
    public set hostnameType(value: string) {
        this._hostnameType = value;
    }
    public resetHostnameType() {
        this._hostnameType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameTypeInput() {
        return this._hostnameType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key CcWorkspaceInstance#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value CcWorkspaceInstance#value}
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
export interface TagSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#resource_type CcWorkspaceInstance#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags CcWorkspaceInstance#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class TagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._tags.internalValue = value.tags;
        }
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}

export class TagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : TagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): TagSpecificationPropertyOutputReference {
        return new TagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManagedInstanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings CcWorkspaceInstance#block_device_mappings}
    */
    readonly blockDeviceMappings?: BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification CcWorkspaceInstance#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: CapacityReservationSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_options CcWorkspaceInstance#cpu_options}
    */
    readonly cpuOptions?: CpuOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#credit_specification CcWorkspaceInstance#credit_specification}
    */
    readonly creditSpecification?: CreditSpecificationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop CcWorkspaceInstance#disable_api_stop}
    */
    readonly disableApiStop?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized CcWorkspaceInstance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 CcWorkspaceInstance#enable_primary_ipv_6}
    */
    readonly enablePrimaryIpv6?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enclave_options CcWorkspaceInstance#enclave_options}
    */
    readonly enclaveOptions?: EnclaveOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options CcWorkspaceInstance#hibernation_options}
    */
    readonly hibernationOptions?: HibernationOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile CcWorkspaceInstance#iam_instance_profile}
    */
    readonly iamInstanceProfile?: IamInstanceProfileSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#image_id CcWorkspaceInstance#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_type CcWorkspaceInstance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count CcWorkspaceInstance#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key_name CcWorkspaceInstance#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_specifications CcWorkspaceInstance#license_specifications}
    */
    readonly licenseSpecifications?: LicenseConfigurationRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options CcWorkspaceInstance#maintenance_options}
    */
    readonly maintenanceOptions?: InstanceMaintenanceOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#metadata_options CcWorkspaceInstance#metadata_options}
    */
    readonly metadataOptions?: InstanceMetadataOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#monitoring CcWorkspaceInstance#monitoring}
    */
    readonly monitoring?: RunInstancesMonitoringEnabledProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces CcWorkspaceInstance#network_interfaces}
    */
    readonly networkInterfaces?: InstanceNetworkInterfaceSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options CcWorkspaceInstance#network_performance_options}
    */
    readonly networkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#placement CcWorkspaceInstance#placement}
    */
    readonly placement?: PlacementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options CcWorkspaceInstance#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: PrivateDnsNameOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id CcWorkspaceInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications CcWorkspaceInstance#tag_specifications}
    */
    readonly tagSpecifications?: TagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#user_data CcWorkspaceInstance#user_data}
    */
    readonly userData?: string;
}
export class ManagedInstancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstanceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockDeviceMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
        }
        if (this._capacityReservationSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationSpecification = this._capacityReservationSpecification?.internalValue;
        }
        if (this._cpuOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuOptions = this._cpuOptions?.internalValue;
        }
        if (this._creditSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.creditSpecification = this._creditSpecification?.internalValue;
        }
        if (this._disableApiStop !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableApiStop = this._disableApiStop;
        }
        if (this._ebsOptimized !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsOptimized = this._ebsOptimized;
        }
        if (this._enablePrimaryIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.enablePrimaryIpv6 = this._enablePrimaryIpv6;
        }
        if (this._enclaveOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enclaveOptions = this._enclaveOptions?.internalValue;
        }
        if (this._hibernationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hibernationOptions = this._hibernationOptions?.internalValue;
        }
        if (this._iamInstanceProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamInstanceProfile = this._iamInstanceProfile?.internalValue;
        }
        if (this._imageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageId = this._imageId;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._ipv6AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
        }
        if (this._keyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyName = this._keyName;
        }
        if (this._licenseSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseSpecifications = this._licenseSpecifications?.internalValue;
        }
        if (this._maintenanceOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maintenanceOptions = this._maintenanceOptions?.internalValue;
        }
        if (this._metadataOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
        }
        if (this._monitoring?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoring = this._monitoring?.internalValue;
        }
        if (this._networkInterfaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
        }
        if (this._networkPerformanceOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkPerformanceOptions = this._networkPerformanceOptions?.internalValue;
        }
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._privateDnsNameOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateDnsNameOptions = this._privateDnsNameOptions?.internalValue;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._tagSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagSpecifications = this._tagSpecifications?.internalValue;
        }
        if (this._userData !== undefined) {
            hasAnyValues = true;
            internalValueResult.userData = this._userData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstanceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = undefined;
            this._capacityReservationSpecification.internalValue = undefined;
            this._cpuOptions.internalValue = undefined;
            this._creditSpecification.internalValue = undefined;
            this._disableApiStop = undefined;
            this._ebsOptimized = undefined;
            this._enablePrimaryIpv6 = undefined;
            this._enclaveOptions.internalValue = undefined;
            this._hibernationOptions.internalValue = undefined;
            this._iamInstanceProfile.internalValue = undefined;
            this._imageId = undefined;
            this._instanceType = undefined;
            this._ipv6AddressCount = undefined;
            this._keyName = undefined;
            this._licenseSpecifications.internalValue = undefined;
            this._maintenanceOptions.internalValue = undefined;
            this._metadataOptions.internalValue = undefined;
            this._monitoring.internalValue = undefined;
            this._networkInterfaces.internalValue = undefined;
            this._networkPerformanceOptions.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._privateDnsNameOptions.internalValue = undefined;
            this._subnetId = undefined;
            this._tagSpecifications.internalValue = undefined;
            this._userData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
            this._capacityReservationSpecification.internalValue = value.capacityReservationSpecification;
            this._cpuOptions.internalValue = value.cpuOptions;
            this._creditSpecification.internalValue = value.creditSpecification;
            this._disableApiStop = value.disableApiStop;
            this._ebsOptimized = value.ebsOptimized;
            this._enablePrimaryIpv6 = value.enablePrimaryIpv6;
            this._enclaveOptions.internalValue = value.enclaveOptions;
            this._hibernationOptions.internalValue = value.hibernationOptions;
            this._iamInstanceProfile.internalValue = value.iamInstanceProfile;
            this._imageId = value.imageId;
            this._instanceType = value.instanceType;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._keyName = value.keyName;
            this._licenseSpecifications.internalValue = value.licenseSpecifications;
            this._maintenanceOptions.internalValue = value.maintenanceOptions;
            this._metadataOptions.internalValue = value.metadataOptions;
            this._monitoring.internalValue = value.monitoring;
            this._networkInterfaces.internalValue = value.networkInterfaces;
            this._networkPerformanceOptions.internalValue = value.networkPerformanceOptions;
            this._placement.internalValue = value.placement;
            this._privateDnsNameOptions.internalValue = value.privateDnsNameOptions;
            this._subnetId = value.subnetId;
            this._tagSpecifications.internalValue = value.tagSpecifications;
            this._userData = value.userData;
        }
    }

    // block_device_mappings - computed: true, optional: true, required: false
    private _blockDeviceMappings = new BlockDeviceMappingPropertyList(this, "block_device_mappings", false);
    public get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    public putBlockDeviceMappings(value: BlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._blockDeviceMappings.internalValue = value;
    }
    public resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
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

    // cpu_options - computed: true, optional: true, required: false
    private _cpuOptions = new CpuOptionsRequestPropertyOutputReference(this, "cpu_options");
    public get cpuOptions() {
        return this._cpuOptions;
    }
    public putCpuOptions(value: CpuOptionsRequestProperty) {
        this._cpuOptions.internalValue = value;
    }
    public resetCpuOptions() {
        this._cpuOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuOptionsInput() {
        return this._cpuOptions.internalValue;
    }

    // credit_specification - computed: true, optional: true, required: false
    private _creditSpecification = new CreditSpecificationRequestPropertyOutputReference(this, "credit_specification");
    public get creditSpecification() {
        return this._creditSpecification;
    }
    public putCreditSpecification(value: CreditSpecificationRequestProperty) {
        this._creditSpecification.internalValue = value;
    }
    public resetCreditSpecification() {
        this._creditSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creditSpecificationInput() {
        return this._creditSpecification.internalValue;
    }

    // disable_api_stop - computed: true, optional: true, required: false
    private _disableApiStop?: boolean | cdktn.IResolvable; 
    public get disableApiStop() {
        return this.getBooleanAttribute('disable_api_stop');
    }
    public set disableApiStop(value: boolean | cdktn.IResolvable) {
        this._disableApiStop = value;
    }
    public resetDisableApiStop() {
        this._disableApiStop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableApiStopInput() {
        return this._disableApiStop;
    }

    // ebs_optimized - computed: true, optional: true, required: false
    private _ebsOptimized?: boolean | cdktn.IResolvable; 
    public get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    public set ebsOptimized(value: boolean | cdktn.IResolvable) {
        this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
        return this._ebsOptimized;
    }

    // enable_primary_ipv_6 - computed: true, optional: true, required: false
    private _enablePrimaryIpv6?: boolean | cdktn.IResolvable; 
    public get enablePrimaryIpv6() {
        return this.getBooleanAttribute('enable_primary_ipv_6');
    }
    public set enablePrimaryIpv6(value: boolean | cdktn.IResolvable) {
        this._enablePrimaryIpv6 = value;
    }
    public resetEnablePrimaryIpv6() {
        this._enablePrimaryIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePrimaryIpv6Input() {
        return this._enablePrimaryIpv6;
    }

    // enclave_options - computed: true, optional: true, required: false
    private _enclaveOptions = new EnclaveOptionsRequestPropertyOutputReference(this, "enclave_options");
    public get enclaveOptions() {
        return this._enclaveOptions;
    }
    public putEnclaveOptions(value: EnclaveOptionsRequestProperty) {
        this._enclaveOptions.internalValue = value;
    }
    public resetEnclaveOptions() {
        this._enclaveOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enclaveOptionsInput() {
        return this._enclaveOptions.internalValue;
    }

    // hibernation_options - computed: true, optional: true, required: false
    private _hibernationOptions = new HibernationOptionsRequestPropertyOutputReference(this, "hibernation_options");
    public get hibernationOptions() {
        return this._hibernationOptions;
    }
    public putHibernationOptions(value: HibernationOptionsRequestProperty) {
        this._hibernationOptions.internalValue = value;
    }
    public resetHibernationOptions() {
        this._hibernationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hibernationOptionsInput() {
        return this._hibernationOptions.internalValue;
    }

    // iam_instance_profile - computed: true, optional: true, required: false
    private _iamInstanceProfile = new IamInstanceProfileSpecificationPropertyOutputReference(this, "iam_instance_profile");
    public get iamInstanceProfile() {
        return this._iamInstanceProfile;
    }
    public putIamInstanceProfile(value: IamInstanceProfileSpecificationProperty) {
        this._iamInstanceProfile.internalValue = value;
    }
    public resetIamInstanceProfile() {
        this._iamInstanceProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
        return this._iamInstanceProfile.internalValue;
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

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // ipv_6_address_count - computed: true, optional: true, required: false
    private _ipv6AddressCount?: number; 
    public get ipv6AddressCount() {
        return this.getNumberAttribute('ipv_6_address_count');
    }
    public set ipv6AddressCount(value: number) {
        this._ipv6AddressCount = value;
    }
    public resetIpv6AddressCount() {
        this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressCountInput() {
        return this._ipv6AddressCount;
    }

    // key_name - computed: true, optional: true, required: false
    private _keyName?: string; 
    public get keyName() {
        return this.getStringAttribute('key_name');
    }
    public set keyName(value: string) {
        this._keyName = value;
    }
    public resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyNameInput() {
        return this._keyName;
    }

    // license_specifications - computed: true, optional: true, required: false
    private _licenseSpecifications = new LicenseConfigurationRequestPropertyList(this, "license_specifications", false);
    public get licenseSpecifications() {
        return this._licenseSpecifications;
    }
    public putLicenseSpecifications(value: LicenseConfigurationRequestProperty[] | cdktn.IResolvable) {
        this._licenseSpecifications.internalValue = value;
    }
    public resetLicenseSpecifications() {
        this._licenseSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseSpecificationsInput() {
        return this._licenseSpecifications.internalValue;
    }

    // maintenance_options - computed: true, optional: true, required: false
    private _maintenanceOptions = new InstanceMaintenanceOptionsRequestPropertyOutputReference(this, "maintenance_options");
    public get maintenanceOptions() {
        return this._maintenanceOptions;
    }
    public putMaintenanceOptions(value: InstanceMaintenanceOptionsRequestProperty) {
        this._maintenanceOptions.internalValue = value;
    }
    public resetMaintenanceOptions() {
        this._maintenanceOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceOptionsInput() {
        return this._maintenanceOptions.internalValue;
    }

    // metadata_options - computed: true, optional: true, required: false
    private _metadataOptions = new InstanceMetadataOptionsRequestPropertyOutputReference(this, "metadata_options");
    public get metadataOptions() {
        return this._metadataOptions;
    }
    public putMetadataOptions(value: InstanceMetadataOptionsRequestProperty) {
        this._metadataOptions.internalValue = value;
    }
    public resetMetadataOptions() {
        this._metadataOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
        return this._metadataOptions.internalValue;
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring = new RunInstancesMonitoringEnabledPropertyOutputReference(this, "monitoring");
    public get monitoring() {
        return this._monitoring;
    }
    public putMonitoring(value: RunInstancesMonitoringEnabledProperty) {
        this._monitoring.internalValue = value;
    }
    public resetMonitoring() {
        this._monitoring.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
        return this._monitoring.internalValue;
    }

    // network_interfaces - computed: true, optional: true, required: false
    private _networkInterfaces = new InstanceNetworkInterfaceSpecificationPropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }
    public putNetworkInterfaces(value: InstanceNetworkInterfaceSpecificationProperty[] | cdktn.IResolvable) {
        this._networkInterfaces.internalValue = value;
    }
    public resetNetworkInterfaces() {
        this._networkInterfaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfacesInput() {
        return this._networkInterfaces.internalValue;
    }

    // network_performance_options - computed: true, optional: true, required: false
    private _networkPerformanceOptions = new InstanceNetworkPerformanceOptionsRequestPropertyOutputReference(this, "network_performance_options");
    public get networkPerformanceOptions() {
        return this._networkPerformanceOptions;
    }
    public putNetworkPerformanceOptions(value: InstanceNetworkPerformanceOptionsRequestProperty) {
        this._networkPerformanceOptions.internalValue = value;
    }
    public resetNetworkPerformanceOptions() {
        this._networkPerformanceOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkPerformanceOptionsInput() {
        return this._networkPerformanceOptions.internalValue;
    }

    // placement - computed: true, optional: true, required: false
    private _placement = new PlacementPropertyOutputReference(this, "placement");
    public get placement() {
        return this._placement;
    }
    public putPlacement(value: PlacementProperty) {
        this._placement.internalValue = value;
    }
    public resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementInput() {
        return this._placement.internalValue;
    }

    // private_dns_name_options - computed: true, optional: true, required: false
    private _privateDnsNameOptions = new PrivateDnsNameOptionsRequestPropertyOutputReference(this, "private_dns_name_options");
    public get privateDnsNameOptions() {
        return this._privateDnsNameOptions;
    }
    public putPrivateDnsNameOptions(value: PrivateDnsNameOptionsRequestProperty) {
        this._privateDnsNameOptions.internalValue = value;
    }
    public resetPrivateDnsNameOptions() {
        this._privateDnsNameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsNameOptionsInput() {
        return this._privateDnsNameOptions.internalValue;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new TagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: TagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // user_data - computed: true, optional: true, required: false
    private _userData?: string; 
    public get userData() {
        return this.getStringAttribute('user_data');
    }
    public set userData(value: string) {
        this._userData = value;
    }
    public resetUserData() {
        this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
        return this._userData;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key CcWorkspaceInstance#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value CcWorkspaceInstance#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
