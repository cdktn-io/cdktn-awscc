// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The information for the launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#launch_template_data CcLaunchTemplate#launch_template_data}
    */
    readonly launchTemplateData: CcLaunchTemplate.LaunchTemplateDataProperty;
    /**
    * A name for the launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#launch_template_name CcLaunchTemplate#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The tags to apply to the launch template on creation. To tag the launch template, the resource type must be ``launch-template``.
    *  To specify the tags for the resources that are created when an instance is launched, you must use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tag_specifications CcLaunchTemplate#tag_specifications}
    */
    readonly tagSpecifications?: CcLaunchTemplate.LaunchTemplateTagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * A description for the first version of the launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#version_description CcLaunchTemplate#version_description}
    */
    readonly versionDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template awscc_ec2_launch_template}
*/
export class CcLaunchTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_launch_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchTemplate to import
    * @param importFromId The id of the existing CcLaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_launch_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template awscc_ec2_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_launch_template',
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
        this._launchTemplateData.internalValue = config.launchTemplateData;
        this._launchTemplateName = config.launchTemplateName;
        this._tagSpecifications.internalValue = config.tagSpecifications;
        this._versionDescription = config.versionDescription;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_version_number - computed: true, optional: false, required: false
    public get defaultVersionNumber() {
        return this.getStringAttribute('default_version_number');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // latest_version_number - computed: true, optional: false, required: false
    public get latestVersionNumber() {
        return this.getStringAttribute('latest_version_number');
    }

    // launch_template_data - computed: false, optional: false, required: true
    private _launchTemplateData = new CcLaunchTemplate.LaunchTemplateDataPropertyOutputReference(this, "launch_template_data");
    public get launchTemplateData() {
        return this._launchTemplateData;
    }
    public putLaunchTemplateData(value: CcLaunchTemplate.LaunchTemplateDataProperty) {
        this._launchTemplateData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateDataInput() {
        return this._launchTemplateData.internalValue;
    }

    // launch_template_id - computed: true, optional: false, required: false
    public get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
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

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new CcLaunchTemplate.LaunchTemplateTagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: CcLaunchTemplate.LaunchTemplateTagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // version_description - computed: true, optional: true, required: false
    private _versionDescription?: string; 
    public get versionDescription() {
        return this.getStringAttribute('version_description');
    }
    public set versionDescription(value: string) {
        this._versionDescription = value;
    }
    public resetVersionDescription() {
        this._versionDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionDescriptionInput() {
        return this._versionDescription;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            launch_template_data: ccLaunchTemplateLaunchTemplateDataPropertyToTerraform(this._launchTemplateData.internalValue),
            launch_template_name: cdktn.stringToTerraform(this._launchTemplateName),
            tag_specifications: cdktn.listMapper(ccLaunchTemplateLaunchTemplateTagSpecificationPropertyToTerraform, false)(this._tagSpecifications.internalValue),
            version_description: cdktn.stringToTerraform(this._versionDescription),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            launch_template_data: {
                value: ccLaunchTemplateLaunchTemplateDataPropertyToHclTerraform(this._launchTemplateData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLaunchTemplate.LaunchTemplateDataProperty",
            },
            launch_template_name: {
                value: cdktn.stringToHclTerraform(this._launchTemplateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_specifications: {
                value: cdktn.listMapperHcl(ccLaunchTemplateLaunchTemplateTagSpecificationPropertyToHclTerraform, false)(this._tagSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLaunchTemplate.LaunchTemplateTagSpecificationPropertyList",
            },
            version_description: {
                value: cdktn.stringToHclTerraform(this._versionDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLaunchTemplateEbsPropertyToTerraform(struct?: CcLaunchTemplate.EbsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccLaunchTemplateEbsPropertyToHclTerraform(struct?: CcLaunchTemplate.EbsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_on_termination: {
            value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccLaunchTemplateBlockDeviceMappingPropertyToTerraform(struct?: CcLaunchTemplate.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccLaunchTemplateEbsPropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccLaunchTemplateBlockDeviceMappingPropertyToHclTerraform(struct?: CcLaunchTemplate.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccLaunchTemplateEbsPropertyToHclTerraform(struct!.ebs),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsProperty",
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


export function ccLaunchTemplateCapacityReservationTargetPropertyToTerraform(struct?: CcLaunchTemplate.CapacityReservationTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_id: cdktn.stringToTerraform(struct!.capacityReservationId),
        capacity_reservation_resource_group_arn: cdktn.stringToTerraform(struct!.capacityReservationResourceGroupArn),
    }
}


export function ccLaunchTemplateCapacityReservationTargetPropertyToHclTerraform(struct?: CcLaunchTemplate.CapacityReservationTargetProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateCapacityReservationSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        capacity_reservation_target: ccLaunchTemplateCapacityReservationTargetPropertyToTerraform(struct!.capacityReservationTarget),
    }
}


export function ccLaunchTemplateCapacityReservationSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.CapacityReservationSpecificationProperty | cdktn.IResolvable): any {
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
            value: ccLaunchTemplateCapacityReservationTargetPropertyToHclTerraform(struct!.capacityReservationTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateCpuOptionsPropertyToTerraform(struct?: CcLaunchTemplate.CpuOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amd_sev_snp: cdktn.stringToTerraform(struct!.amdSevSnp),
        core_count: cdktn.numberToTerraform(struct!.coreCount),
        threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
    }
}


export function ccLaunchTemplateCpuOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.CpuOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amd_sev_snp: {
            value: cdktn.stringToHclTerraform(struct!.amdSevSnp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccLaunchTemplateCreditSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.CreditSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_credits: cdktn.stringToTerraform(struct!.cpuCredits),
    }
}


export function ccLaunchTemplateCreditSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.CreditSpecificationProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateElasticGpuSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.ElasticGpuSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccLaunchTemplateElasticGpuSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.ElasticGpuSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccLaunchTemplateLaunchTemplateElasticInferenceAcceleratorPropertyToTerraform(struct?: CcLaunchTemplate.LaunchTemplateElasticInferenceAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccLaunchTemplateLaunchTemplateElasticInferenceAcceleratorPropertyToHclTerraform(struct?: CcLaunchTemplate.LaunchTemplateElasticInferenceAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccLaunchTemplateEnclaveOptionsPropertyToTerraform(struct?: CcLaunchTemplate.EnclaveOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccLaunchTemplateEnclaveOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.EnclaveOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateHibernationOptionsPropertyToTerraform(struct?: CcLaunchTemplate.HibernationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configured: cdktn.booleanToTerraform(struct!.configured),
    }
}


export function ccLaunchTemplateHibernationOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.HibernationOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateIamInstanceProfilePropertyToTerraform(struct?: CcLaunchTemplate.IamInstanceProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccLaunchTemplateIamInstanceProfilePropertyToHclTerraform(struct?: CcLaunchTemplate.IamInstanceProfileProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateSpotOptionsPropertyToTerraform(struct?: CcLaunchTemplate.SpotOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_duration_minutes: cdktn.numberToTerraform(struct!.blockDurationMinutes),
        instance_interruption_behavior: cdktn.stringToTerraform(struct!.instanceInterruptionBehavior),
        max_price: cdktn.stringToTerraform(struct!.maxPrice),
        spot_instance_type: cdktn.stringToTerraform(struct!.spotInstanceType),
        valid_until: cdktn.stringToTerraform(struct!.validUntil),
    }
}


export function ccLaunchTemplateSpotOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.SpotOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_duration_minutes: {
            value: cdktn.numberToHclTerraform(struct!.blockDurationMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_interruption_behavior: {
            value: cdktn.stringToHclTerraform(struct!.instanceInterruptionBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_price: {
            value: cdktn.stringToHclTerraform(struct!.maxPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_instance_type: {
            value: cdktn.stringToHclTerraform(struct!.spotInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        valid_until: {
            value: cdktn.stringToHclTerraform(struct!.validUntil),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateInstanceMarketOptionsPropertyToTerraform(struct?: CcLaunchTemplate.InstanceMarketOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        market_type: cdktn.stringToTerraform(struct!.marketType),
        spot_options: ccLaunchTemplateSpotOptionsPropertyToTerraform(struct!.spotOptions),
    }
}


export function ccLaunchTemplateInstanceMarketOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.InstanceMarketOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        market_type: {
            value: cdktn.stringToHclTerraform(struct!.marketType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_options: {
            value: ccLaunchTemplateSpotOptionsPropertyToHclTerraform(struct!.spotOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "SpotOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateAcceleratorCountPropertyToTerraform(struct?: CcLaunchTemplate.AcceleratorCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateAcceleratorCountPropertyToHclTerraform(struct?: CcLaunchTemplate.AcceleratorCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateAcceleratorTotalMemoryMiBPropertyToTerraform(struct?: CcLaunchTemplate.AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateAcceleratorTotalMemoryMiBPropertyToHclTerraform(struct?: CcLaunchTemplate.AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: CcLaunchTemplate.BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: CcLaunchTemplate.BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateReferencePropertyToTerraform(struct?: CcLaunchTemplate.ReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_family: cdktn.stringToTerraform(struct!.instanceFamily),
    }
}


export function ccLaunchTemplateReferencePropertyToHclTerraform(struct?: CcLaunchTemplate.ReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_family: {
            value: cdktn.stringToHclTerraform(struct!.instanceFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateCpuPropertyToTerraform(struct?: CcLaunchTemplate.CpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        references: cdktn.listMapper(ccLaunchTemplateReferencePropertyToTerraform, false)(struct!.references),
    }
}


export function ccLaunchTemplateCpuPropertyToHclTerraform(struct?: CcLaunchTemplate.CpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        references: {
            value: cdktn.listMapperHcl(ccLaunchTemplateReferencePropertyToHclTerraform, false)(struct!.references),
            isBlock: true,
            type: "list",
            storageClassType: "ReferencePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateBaselinePerformanceFactorsPropertyToTerraform(struct?: CcLaunchTemplate.BaselinePerformanceFactorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: ccLaunchTemplateCpuPropertyToTerraform(struct!.cpu),
    }
}


export function ccLaunchTemplateBaselinePerformanceFactorsPropertyToHclTerraform(struct?: CcLaunchTemplate.BaselinePerformanceFactorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: ccLaunchTemplateCpuPropertyToHclTerraform(struct!.cpu),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateMemoryGiBPerVCpuPropertyToTerraform(struct?: CcLaunchTemplate.MemoryGiBPerVCpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateMemoryGiBPerVCpuPropertyToHclTerraform(struct?: CcLaunchTemplate.MemoryGiBPerVCpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateMemoryMiBPropertyToTerraform(struct?: CcLaunchTemplate.MemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateMemoryMiBPropertyToHclTerraform(struct?: CcLaunchTemplate.MemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateNetworkBandwidthGbpsPropertyToTerraform(struct?: CcLaunchTemplate.NetworkBandwidthGbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateNetworkBandwidthGbpsPropertyToHclTerraform(struct?: CcLaunchTemplate.NetworkBandwidthGbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateNetworkInterfaceCountPropertyToTerraform(struct?: CcLaunchTemplate.NetworkInterfaceCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateNetworkInterfaceCountPropertyToHclTerraform(struct?: CcLaunchTemplate.NetworkInterfaceCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateTotalLocalStorageGBPropertyToTerraform(struct?: CcLaunchTemplate.TotalLocalStorageGBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateTotalLocalStorageGBPropertyToHclTerraform(struct?: CcLaunchTemplate.TotalLocalStorageGBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateVCpuCountPropertyToTerraform(struct?: CcLaunchTemplate.VCpuCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccLaunchTemplateVCpuCountPropertyToHclTerraform(struct?: CcLaunchTemplate.VCpuCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateInstanceRequirementsPropertyToTerraform(struct?: CcLaunchTemplate.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccLaunchTemplateAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccLaunchTemplateAcceleratorTotalMemoryMiBPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccLaunchTemplateBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        baseline_performance_factors: ccLaunchTemplateBaselinePerformanceFactorsPropertyToTerraform(struct!.baselinePerformanceFactors),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccLaunchTemplateMemoryGiBPerVCpuPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccLaunchTemplateMemoryMiBPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccLaunchTemplateNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccLaunchTemplateNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccLaunchTemplateTotalLocalStorageGBPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccLaunchTemplateVCpuCountPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccLaunchTemplateInstanceRequirementsPropertyToHclTerraform(struct?: CcLaunchTemplate.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccLaunchTemplateAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCountProperty",
        },
        accelerator_manufacturers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        accelerator_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        accelerator_total_memory_mi_b: {
            value: ccLaunchTemplateAcceleratorTotalMemoryMiBPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorTotalMemoryMiBProperty",
        },
        accelerator_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        bare_metal: {
            value: cdktn.stringToHclTerraform(struct!.bareMetal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        baseline_ebs_bandwidth_mbps: {
            value: ccLaunchTemplateBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsProperty",
        },
        baseline_performance_factors: {
            value: ccLaunchTemplateBaselinePerformanceFactorsPropertyToHclTerraform(struct!.baselinePerformanceFactors),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselinePerformanceFactorsProperty",
        },
        burstable_performance: {
            value: cdktn.stringToHclTerraform(struct!.burstablePerformance),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_manufacturers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cpuManufacturers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        excluded_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        instance_generations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGenerations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        local_storage: {
            value: cdktn.stringToHclTerraform(struct!.localStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_storage_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localStorageTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_spot_price_as_percentage_of_optimal_on_demand_price: {
            value: cdktn.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_gi_b_per_v_cpu: {
            value: ccLaunchTemplateMemoryGiBPerVCpuPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuProperty",
        },
        memory_mi_b: {
            value: ccLaunchTemplateMemoryMiBPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBProperty",
        },
        network_bandwidth_gbps: {
            value: ccLaunchTemplateNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsProperty",
        },
        network_interface_count: {
            value: ccLaunchTemplateNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkInterfaceCountProperty",
        },
        on_demand_max_price_percentage_over_lowest_price: {
            value: cdktn.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require_hibernate_support: {
            value: cdktn.booleanToHclTerraform(struct!.requireHibernateSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        spot_max_price_percentage_over_lowest_price: {
            value: cdktn.numberToHclTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        total_local_storage_gb: {
            value: ccLaunchTemplateTotalLocalStorageGBPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGBProperty",
        },
        v_cpu_count: {
            value: ccLaunchTemplateVCpuCountPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateLicenseSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.LicenseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
    }
}


export function ccLaunchTemplateLicenseSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.LicenseSpecificationProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateMaintenanceOptionsPropertyToTerraform(struct?: CcLaunchTemplate.MaintenanceOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_recovery: cdktn.stringToTerraform(struct!.autoRecovery),
    }
}


export function ccLaunchTemplateMaintenanceOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.MaintenanceOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateMetadataOptionsPropertyToTerraform(struct?: CcLaunchTemplate.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateMetadataOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateMonitoringPropertyToTerraform(struct?: CcLaunchTemplate.MonitoringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccLaunchTemplateMonitoringPropertyToHclTerraform(struct?: CcLaunchTemplate.MonitoringProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateConnectionTrackingSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.ConnectionTrackingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tcp_established_timeout: cdktn.numberToTerraform(struct!.tcpEstablishedTimeout),
        udp_stream_timeout: cdktn.numberToTerraform(struct!.udpStreamTimeout),
        udp_timeout: cdktn.numberToTerraform(struct!.udpTimeout),
    }
}


export function ccLaunchTemplateConnectionTrackingSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.ConnectionTrackingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tcp_established_timeout: {
            value: cdktn.numberToHclTerraform(struct!.tcpEstablishedTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        udp_stream_timeout: {
            value: cdktn.numberToHclTerraform(struct!.udpStreamTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        udp_timeout: {
            value: cdktn.numberToHclTerraform(struct!.udpTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateEnaSrdUdpSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.EnaSrdUdpSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ena_srd_udp_enabled: cdktn.booleanToTerraform(struct!.enaSrdUdpEnabled),
    }
}


export function ccLaunchTemplateEnaSrdUdpSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.EnaSrdUdpSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ena_srd_udp_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enaSrdUdpEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateEnaSrdSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.EnaSrdSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ena_srd_enabled: cdktn.booleanToTerraform(struct!.enaSrdEnabled),
        ena_srd_udp_specification: ccLaunchTemplateEnaSrdUdpSpecificationPropertyToTerraform(struct!.enaSrdUdpSpecification),
    }
}


export function ccLaunchTemplateEnaSrdSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.EnaSrdSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ena_srd_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enaSrdEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ena_srd_udp_specification: {
            value: ccLaunchTemplateEnaSrdUdpSpecificationPropertyToHclTerraform(struct!.enaSrdUdpSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "EnaSrdUdpSpecificationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateIpv4PrefixSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.Ipv4PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_4_prefix: cdktn.stringToTerraform(struct!.ipv4Prefix),
    }
}


export function ccLaunchTemplateIpv4PrefixSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.Ipv4PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_4_prefix: {
            value: cdktn.stringToHclTerraform(struct!.ipv4Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateIpv6AddPropertyToTerraform(struct?: CcLaunchTemplate.Ipv6AddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccLaunchTemplateIpv6AddPropertyToHclTerraform(struct?: CcLaunchTemplate.Ipv6AddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_6_address: {
            value: cdktn.stringToHclTerraform(struct!.ipv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateIpv6PrefixSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.Ipv6PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_prefix: cdktn.stringToTerraform(struct!.ipv6Prefix),
    }
}


export function ccLaunchTemplateIpv6PrefixSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.Ipv6PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_6_prefix: {
            value: cdktn.stringToHclTerraform(struct!.ipv6Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplatePrivateIpAddPropertyToTerraform(struct?: CcLaunchTemplate.PrivateIpAddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    }
}


export function ccLaunchTemplatePrivateIpAddPropertyToHclTerraform(struct?: CcLaunchTemplate.PrivateIpAddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        private_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateNetworkInterfacePropertyToTerraform(struct?: CcLaunchTemplate.NetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        associate_carrier_ip_address: cdktn.booleanToTerraform(struct!.associateCarrierIpAddress),
        associate_public_ip_address: cdktn.booleanToTerraform(struct!.associatePublicIpAddress),
        connection_tracking_specification: ccLaunchTemplateConnectionTrackingSpecificationPropertyToTerraform(struct!.connectionTrackingSpecification),
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        description: cdktn.stringToTerraform(struct!.description),
        device_index: cdktn.numberToTerraform(struct!.deviceIndex),
        ena_srd_specification: ccLaunchTemplateEnaSrdSpecificationPropertyToTerraform(struct!.enaSrdSpecification),
        groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
        interface_type: cdktn.stringToTerraform(struct!.interfaceType),
        ipv_4_prefix_count: cdktn.numberToTerraform(struct!.ipv4PrefixCount),
        ipv_4_prefixes: cdktn.listMapper(ccLaunchTemplateIpv4PrefixSpecificationPropertyToTerraform, false)(struct!.ipv4Prefixes),
        ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
        ipv_6_addresses: cdktn.listMapper(ccLaunchTemplateIpv6AddPropertyToTerraform, false)(struct!.ipv6Addresses),
        ipv_6_prefix_count: cdktn.numberToTerraform(struct!.ipv6PrefixCount),
        ipv_6_prefixes: cdktn.listMapper(ccLaunchTemplateIpv6PrefixSpecificationPropertyToTerraform, false)(struct!.ipv6Prefixes),
        network_card_index: cdktn.numberToTerraform(struct!.networkCardIndex),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        primary_ipv_6: cdktn.booleanToTerraform(struct!.primaryIpv6),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
        private_ip_addresses: cdktn.listMapper(ccLaunchTemplatePrivateIpAddPropertyToTerraform, false)(struct!.privateIpAddresses),
        secondary_private_ip_address_count: cdktn.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccLaunchTemplateNetworkInterfacePropertyToHclTerraform(struct?: CcLaunchTemplate.NetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        associate_carrier_ip_address: {
            value: cdktn.booleanToHclTerraform(struct!.associateCarrierIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        associate_public_ip_address: {
            value: cdktn.booleanToHclTerraform(struct!.associatePublicIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        connection_tracking_specification: {
            value: ccLaunchTemplateConnectionTrackingSpecificationPropertyToHclTerraform(struct!.connectionTrackingSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionTrackingSpecificationProperty",
        },
        delete_on_termination: {
            value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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
        ena_srd_specification: {
            value: ccLaunchTemplateEnaSrdSpecificationPropertyToHclTerraform(struct!.enaSrdSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "EnaSrdSpecificationProperty",
        },
        groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        interface_type: {
            value: cdktn.stringToHclTerraform(struct!.interfaceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv_4_prefix_count: {
            value: cdktn.numberToHclTerraform(struct!.ipv4PrefixCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv_4_prefixes: {
            value: cdktn.listMapperHcl(ccLaunchTemplateIpv4PrefixSpecificationPropertyToHclTerraform, false)(struct!.ipv4Prefixes),
            isBlock: true,
            type: "list",
            storageClassType: "Ipv4PrefixSpecificationPropertyList",
        },
        ipv_6_address_count: {
            value: cdktn.numberToHclTerraform(struct!.ipv6AddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv_6_addresses: {
            value: cdktn.listMapperHcl(ccLaunchTemplateIpv6AddPropertyToHclTerraform, false)(struct!.ipv6Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "Ipv6AddPropertyList",
        },
        ipv_6_prefix_count: {
            value: cdktn.numberToHclTerraform(struct!.ipv6PrefixCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv_6_prefixes: {
            value: cdktn.listMapperHcl(ccLaunchTemplateIpv6PrefixSpecificationPropertyToHclTerraform, false)(struct!.ipv6Prefixes),
            isBlock: true,
            type: "list",
            storageClassType: "Ipv6PrefixSpecificationPropertyList",
        },
        network_card_index: {
            value: cdktn.numberToHclTerraform(struct!.networkCardIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_interface_id: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_ipv_6: {
            value: cdktn.booleanToHclTerraform(struct!.primaryIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        private_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_ip_addresses: {
            value: cdktn.listMapperHcl(ccLaunchTemplatePrivateIpAddPropertyToHclTerraform, false)(struct!.privateIpAddresses),
            isBlock: true,
            type: "list",
            storageClassType: "PrivateIpAddPropertyList",
        },
        secondary_private_ip_address_count: {
            value: cdktn.numberToHclTerraform(struct!.secondaryPrivateIpAddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccLaunchTemplatePlacementPropertyToTerraform(struct?: CcLaunchTemplate.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        affinity: cdktn.stringToTerraform(struct!.affinity),
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        group_id: cdktn.stringToTerraform(struct!.groupId),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        host_id: cdktn.stringToTerraform(struct!.hostId),
        host_resource_group_arn: cdktn.stringToTerraform(struct!.hostResourceGroupArn),
        partition_number: cdktn.numberToTerraform(struct!.partitionNumber),
        spread_domain: cdktn.stringToTerraform(struct!.spreadDomain),
        tenancy: cdktn.stringToTerraform(struct!.tenancy),
    }
}


export function ccLaunchTemplatePlacementPropertyToHclTerraform(struct?: CcLaunchTemplate.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        affinity: {
            value: cdktn.stringToHclTerraform(struct!.affinity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        host_id: {
            value: cdktn.stringToHclTerraform(struct!.hostId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_resource_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.hostResourceGroupArn),
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
        spread_domain: {
            value: cdktn.stringToHclTerraform(struct!.spreadDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccLaunchTemplatePrivateDnsNameOptionsPropertyToTerraform(struct?: CcLaunchTemplate.PrivateDnsNameOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplatePrivateDnsNameOptionsPropertyToHclTerraform(struct?: CcLaunchTemplate.PrivateDnsNameOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateTagPropertyToTerraform(struct?: CcLaunchTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLaunchTemplateTagPropertyToHclTerraform(struct?: CcLaunchTemplate.TagProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateTagSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccLaunchTemplateTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccLaunchTemplateTagSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.TagSpecificationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccLaunchTemplateTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTemplateLaunchTemplateDataPropertyToTerraform(struct?: CcLaunchTemplate.LaunchTemplateDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_device_mappings: cdktn.listMapper(ccLaunchTemplateBlockDeviceMappingPropertyToTerraform, false)(struct!.blockDeviceMappings),
        capacity_reservation_specification: ccLaunchTemplateCapacityReservationSpecificationPropertyToTerraform(struct!.capacityReservationSpecification),
        cpu_options: ccLaunchTemplateCpuOptionsPropertyToTerraform(struct!.cpuOptions),
        credit_specification: ccLaunchTemplateCreditSpecificationPropertyToTerraform(struct!.creditSpecification),
        disable_api_stop: cdktn.booleanToTerraform(struct!.disableApiStop),
        disable_api_termination: cdktn.booleanToTerraform(struct!.disableApiTermination),
        ebs_optimized: cdktn.booleanToTerraform(struct!.ebsOptimized),
        elastic_gpu_specifications: cdktn.listMapper(ccLaunchTemplateElasticGpuSpecificationPropertyToTerraform, false)(struct!.elasticGpuSpecifications),
        elastic_inference_accelerators: cdktn.listMapper(ccLaunchTemplateLaunchTemplateElasticInferenceAcceleratorPropertyToTerraform, false)(struct!.elasticInferenceAccelerators),
        enclave_options: ccLaunchTemplateEnclaveOptionsPropertyToTerraform(struct!.enclaveOptions),
        hibernation_options: ccLaunchTemplateHibernationOptionsPropertyToTerraform(struct!.hibernationOptions),
        iam_instance_profile: ccLaunchTemplateIamInstanceProfilePropertyToTerraform(struct!.iamInstanceProfile),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_initiated_shutdown_behavior: cdktn.stringToTerraform(struct!.instanceInitiatedShutdownBehavior),
        instance_market_options: ccLaunchTemplateInstanceMarketOptionsPropertyToTerraform(struct!.instanceMarketOptions),
        instance_requirements: ccLaunchTemplateInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        kernel_id: cdktn.stringToTerraform(struct!.kernelId),
        key_name: cdktn.stringToTerraform(struct!.keyName),
        license_specifications: cdktn.listMapper(ccLaunchTemplateLicenseSpecificationPropertyToTerraform, false)(struct!.licenseSpecifications),
        maintenance_options: ccLaunchTemplateMaintenanceOptionsPropertyToTerraform(struct!.maintenanceOptions),
        metadata_options: ccLaunchTemplateMetadataOptionsPropertyToTerraform(struct!.metadataOptions),
        monitoring: ccLaunchTemplateMonitoringPropertyToTerraform(struct!.monitoring),
        network_interfaces: cdktn.listMapper(ccLaunchTemplateNetworkInterfacePropertyToTerraform, false)(struct!.networkInterfaces),
        placement: ccLaunchTemplatePlacementPropertyToTerraform(struct!.placement),
        private_dns_name_options: ccLaunchTemplatePrivateDnsNameOptionsPropertyToTerraform(struct!.privateDnsNameOptions),
        ram_disk_id: cdktn.stringToTerraform(struct!.ramDiskId),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        tag_specifications: cdktn.listMapper(ccLaunchTemplateTagSpecificationPropertyToTerraform, false)(struct!.tagSpecifications),
        user_data: cdktn.stringToTerraform(struct!.userData),
    }
}


export function ccLaunchTemplateLaunchTemplateDataPropertyToHclTerraform(struct?: CcLaunchTemplate.LaunchTemplateDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_device_mappings: {
            value: cdktn.listMapperHcl(ccLaunchTemplateBlockDeviceMappingPropertyToHclTerraform, false)(struct!.blockDeviceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "BlockDeviceMappingPropertyList",
        },
        capacity_reservation_specification: {
            value: ccLaunchTemplateCapacityReservationSpecificationPropertyToHclTerraform(struct!.capacityReservationSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationSpecificationProperty",
        },
        cpu_options: {
            value: ccLaunchTemplateCpuOptionsPropertyToHclTerraform(struct!.cpuOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuOptionsProperty",
        },
        credit_specification: {
            value: ccLaunchTemplateCreditSpecificationPropertyToHclTerraform(struct!.creditSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CreditSpecificationProperty",
        },
        disable_api_stop: {
            value: cdktn.booleanToHclTerraform(struct!.disableApiStop),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_api_termination: {
            value: cdktn.booleanToHclTerraform(struct!.disableApiTermination),
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
        elastic_gpu_specifications: {
            value: cdktn.listMapperHcl(ccLaunchTemplateElasticGpuSpecificationPropertyToHclTerraform, false)(struct!.elasticGpuSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "ElasticGpuSpecificationPropertyList",
        },
        elastic_inference_accelerators: {
            value: cdktn.listMapperHcl(ccLaunchTemplateLaunchTemplateElasticInferenceAcceleratorPropertyToHclTerraform, false)(struct!.elasticInferenceAccelerators),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateElasticInferenceAcceleratorPropertyList",
        },
        enclave_options: {
            value: ccLaunchTemplateEnclaveOptionsPropertyToHclTerraform(struct!.enclaveOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "EnclaveOptionsProperty",
        },
        hibernation_options: {
            value: ccLaunchTemplateHibernationOptionsPropertyToHclTerraform(struct!.hibernationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "HibernationOptionsProperty",
        },
        iam_instance_profile: {
            value: ccLaunchTemplateIamInstanceProfilePropertyToHclTerraform(struct!.iamInstanceProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "IamInstanceProfileProperty",
        },
        image_id: {
            value: cdktn.stringToHclTerraform(struct!.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_initiated_shutdown_behavior: {
            value: cdktn.stringToHclTerraform(struct!.instanceInitiatedShutdownBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_market_options: {
            value: ccLaunchTemplateInstanceMarketOptionsPropertyToHclTerraform(struct!.instanceMarketOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceMarketOptionsProperty",
        },
        instance_requirements: {
            value: ccLaunchTemplateInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsProperty",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kernel_id: {
            value: cdktn.stringToHclTerraform(struct!.kernelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_name: {
            value: cdktn.stringToHclTerraform(struct!.keyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        license_specifications: {
            value: cdktn.listMapperHcl(ccLaunchTemplateLicenseSpecificationPropertyToHclTerraform, false)(struct!.licenseSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "LicenseSpecificationPropertyList",
        },
        maintenance_options: {
            value: ccLaunchTemplateMaintenanceOptionsPropertyToHclTerraform(struct!.maintenanceOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "MaintenanceOptionsProperty",
        },
        metadata_options: {
            value: ccLaunchTemplateMetadataOptionsPropertyToHclTerraform(struct!.metadataOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "MetadataOptionsProperty",
        },
        monitoring: {
            value: ccLaunchTemplateMonitoringPropertyToHclTerraform(struct!.monitoring),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringProperty",
        },
        network_interfaces: {
            value: cdktn.listMapperHcl(ccLaunchTemplateNetworkInterfacePropertyToHclTerraform, false)(struct!.networkInterfaces),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkInterfacePropertyList",
        },
        placement: {
            value: ccLaunchTemplatePlacementPropertyToHclTerraform(struct!.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PlacementProperty",
        },
        private_dns_name_options: {
            value: ccLaunchTemplatePrivateDnsNameOptionsPropertyToHclTerraform(struct!.privateDnsNameOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateDnsNameOptionsProperty",
        },
        ram_disk_id: {
            value: cdktn.stringToHclTerraform(struct!.ramDiskId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tag_specifications: {
            value: cdktn.listMapperHcl(ccLaunchTemplateTagSpecificationPropertyToHclTerraform, false)(struct!.tagSpecifications),
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


export function ccLaunchTemplateTagsPropertyToTerraform(struct?: CcLaunchTemplate.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLaunchTemplateTagsPropertyToHclTerraform(struct?: CcLaunchTemplate.TagsProperty | cdktn.IResolvable): any {
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


export function ccLaunchTemplateLaunchTemplateTagSpecificationPropertyToTerraform(struct?: CcLaunchTemplate.LaunchTemplateTagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccLaunchTemplateTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccLaunchTemplateLaunchTemplateTagSpecificationPropertyToHclTerraform(struct?: CcLaunchTemplate.LaunchTemplateTagSpecificationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccLaunchTemplateTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLaunchTemplate {
export interface EbsProperty {
    /**
    * Indicates whether the EBS volume is deleted on instance termination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#delete_on_termination CcLaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#encrypted CcLaunchTemplate#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
    *  The following are the supported values for each volume type:
    *   +   ``gp3``: 3,000 - 16,000 IOPS
    *   +   ``io1``: 100 - 64,000 IOPS
    *   +   ``io2``: 100 - 256,000 IOPS
    *   
    *  For ``io2`` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). On other instances, you can achieve performance up to 32,000 IOPS.
    *  This parameter is supported for ``io1``, ``io2``, and ``gp3`` volumes only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#iops CcLaunchTemplate#iops}
    */
    readonly iops?: number;
    /**
    * The ARN of the symmetric KMSlong (KMS) CMK used for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#kms_key_id CcLaunchTemplate#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The ID of the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#snapshot_id CcLaunchTemplate#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The throughput to provision for a ``gp3`` volume, with a maximum of 1,000 MiB/s.
    *  Valid Range: Minimum value of 125. Maximum value of 1000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#throughput CcLaunchTemplate#throughput}
    */
    readonly throughput?: number;
    /**
    * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following are the supported volumes sizes for each volume type:
    *   +   ``gp2`` and ``gp3``: 1 - 16,384 GiB
    *   +   ``io1``: 4 - 16,384 GiB
    *   +   ``io2``: 4 - 65,536 GiB
    *   +   ``st1`` and ``sc1``: 125 - 16,384 GiB
    *   +   ``standard``: 1 - 1024 GiB
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#volume_size CcLaunchTemplate#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#volume_type CcLaunchTemplate#volume_type}
    */
    readonly volumeType?: string;
}
export class EbsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
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

    public set internalValue(value: EbsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
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
            this._deleteOnTermination = value.deleteOnTermination;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }

    // delete_on_termination - computed: true, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktn.IResolvable; 
    public get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
        this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
        return this._deleteOnTermination;
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
    * The device name (for example, /dev/sdh or xvdh).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#device_name CcLaunchTemplate#device_name}
    */
    readonly deviceName?: string;
    /**
    * Parameters used to automatically set up EBS volumes when the instance is launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ebs CcLaunchTemplate#ebs}
    */
    readonly ebs?: EbsProperty;
    /**
    * To omit the device from the block device mapping, specify an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#no_device CcLaunchTemplate#no_device}
    */
    readonly noDevice?: string;
    /**
    * The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#virtual_name CcLaunchTemplate#virtual_name}
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
    private _ebs = new EbsPropertyOutputReference(this, "ebs");
    public get ebs() {
        return this._ebs;
    }
    public putEbs(value: EbsProperty) {
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
    * The ID of the Capacity Reservation in which to run the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#capacity_reservation_id CcLaunchTemplate#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * The ARN of the Capacity Reservation resource group in which to run the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#capacity_reservation_resource_group_arn CcLaunchTemplate#capacity_reservation_resource_group_arn}
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
    * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
    *   +   ``open`` - The instance can run in any ``open`` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
    *   +   ``none`` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#capacity_reservation_preference CcLaunchTemplate#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * Information about the target Capacity Reservation or Capacity Reservation group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#capacity_reservation_target CcLaunchTemplate#capacity_reservation_target}
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
export interface CpuOptionsProperty {
    /**
    * Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see [AMD SEV-SNP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#amd_sev_snp CcLaunchTemplate#amd_sev_snp}
    */
    readonly amdSevSnp?: string;
    /**
    * The number of CPU cores for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#core_count CcLaunchTemplate#core_count}
    */
    readonly coreCount?: number;
    /**
    * The number of threads per CPU core. To disable multithreading for the instance, specify a value of ``1``. Otherwise, specify the default value of ``2``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#threads_per_core CcLaunchTemplate#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export class CpuOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CpuOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amdSevSnp !== undefined) {
            hasAnyValues = true;
            internalValueResult.amdSevSnp = this._amdSevSnp;
        }
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

    public set internalValue(value: CpuOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amdSevSnp = undefined;
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
            this._amdSevSnp = value.amdSevSnp;
            this._coreCount = value.coreCount;
            this._threadsPerCore = value.threadsPerCore;
        }
    }

    // amd_sev_snp - computed: true, optional: true, required: false
    private _amdSevSnp?: string; 
    public get amdSevSnp() {
        return this.getStringAttribute('amd_sev_snp');
    }
    public set amdSevSnp(value: string) {
        this._amdSevSnp = value;
    }
    public resetAmdSevSnp() {
        this._amdSevSnp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amdSevSnpInput() {
        return this._amdSevSnp;
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
export interface CreditSpecificationProperty {
    /**
    * The credit option for CPU usage of a T instance.
    *  Valid values: ``standard`` | ``unlimited``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#cpu_credits CcLaunchTemplate#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export class CreditSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreditSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CreditSpecificationProperty | cdktn.IResolvable | undefined) {
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
export interface ElasticGpuSpecificationProperty {
    /**
    * The type of Elastic Graphics accelerator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#type CcLaunchTemplate#type}
    */
    readonly type?: string;
}
export class ElasticGpuSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ElasticGpuSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticGpuSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
        }
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

export class ElasticGpuSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ElasticGpuSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ElasticGpuSpecificationPropertyOutputReference {
        return new ElasticGpuSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchTemplateElasticInferenceAcceleratorProperty {
    /**
    * The number of elastic inference accelerators to attach to the instance. 
    *  Default: 1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#count CcLaunchTemplate#count}
    */
    readonly count?: number;
    /**
    * The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#type CcLaunchTemplate#type}
    */
    readonly type?: string;
}
export class LaunchTemplateElasticInferenceAcceleratorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateElasticInferenceAcceleratorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateElasticInferenceAcceleratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._type = value.type;
        }
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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

export class LaunchTemplateElasticInferenceAcceleratorPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateElasticInferenceAcceleratorProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateElasticInferenceAcceleratorPropertyOutputReference {
        return new LaunchTemplateElasticInferenceAcceleratorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnclaveOptionsProperty {
    /**
    * If this parameter is set to ``true``, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#enabled CcLaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class EnclaveOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnclaveOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EnclaveOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface HibernationOptionsProperty {
    /**
    * If you set this parameter to ``true``, the instance is enabled for hibernation.
    *  Default: ``false``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#configured CcLaunchTemplate#configured}
    */
    readonly configured?: boolean | cdktn.IResolvable;
}
export class HibernationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HibernationOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: HibernationOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface IamInstanceProfileProperty {
    /**
    * The Amazon Resource Name (ARN) of the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#arn CcLaunchTemplate#arn}
    */
    readonly arn?: string;
    /**
    * The name of the instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#name CcLaunchTemplate#name}
    */
    readonly name?: string;
}
export class IamInstanceProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamInstanceProfileProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: IamInstanceProfileProperty | cdktn.IResolvable | undefined) {
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
export interface SpotOptionsProperty {
    /**
    * Deprecated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#block_duration_minutes CcLaunchTemplate#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * The behavior when a Spot Instance is interrupted. The default is ``terminate``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_interruption_behavior CcLaunchTemplate#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * The maximum hourly price you're willing to pay for the Spot Instances. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
    *   If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max_price CcLaunchTemplate#max_price}
    */
    readonly maxPrice?: string;
    /**
    * The Spot Instance request type.
    *  If you are using Spot Instances with an Auto Scaling group, use ``one-time`` requests, as the ASlong service handles requesting new Spot Instances whenever the group is below its desired capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#spot_instance_type CcLaunchTemplate#spot_instance_type}
    */
    readonly spotInstanceType?: string;
    /**
    * The end date of the request, in UTC format (*YYYY-MM-DD*T*HH:MM:SS*Z). Supported only for persistent requests.
    *   +  For a persistent request, the request remains active until the ``ValidUntil`` date and time is reached. Otherwise, the request remains active until you cancel it.
    *   +  For a one-time request, ``ValidUntil`` is not supported. The request remains active until all instances launch or you cancel the request.
    *   
    *  Default: 7 days from the current date
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#valid_until CcLaunchTemplate#valid_until}
    */
    readonly validUntil?: string;
}
export class SpotOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockDurationMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
        }
        if (this._instanceInterruptionBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._maxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPrice = this._maxPrice;
        }
        if (this._spotInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotInstanceType = this._spotInstanceType;
        }
        if (this._validUntil !== undefined) {
            hasAnyValues = true;
            internalValueResult.validUntil = this._validUntil;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockDurationMinutes = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._maxPrice = undefined;
            this._spotInstanceType = undefined;
            this._validUntil = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockDurationMinutes = value.blockDurationMinutes;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._maxPrice = value.maxPrice;
            this._spotInstanceType = value.spotInstanceType;
            this._validUntil = value.validUntil;
        }
    }

    // block_duration_minutes - computed: true, optional: true, required: false
    private _blockDurationMinutes?: number; 
    public get blockDurationMinutes() {
        return this.getNumberAttribute('block_duration_minutes');
    }
    public set blockDurationMinutes(value: number) {
        this._blockDurationMinutes = value;
    }
    public resetBlockDurationMinutes() {
        this._blockDurationMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDurationMinutesInput() {
        return this._blockDurationMinutes;
    }

    // instance_interruption_behavior - computed: true, optional: true, required: false
    private _instanceInterruptionBehavior?: string; 
    public get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    public set instanceInterruptionBehavior(value: string) {
        this._instanceInterruptionBehavior = value;
    }
    public resetInstanceInterruptionBehavior() {
        this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInterruptionBehaviorInput() {
        return this._instanceInterruptionBehavior;
    }

    // max_price - computed: true, optional: true, required: false
    private _maxPrice?: string; 
    public get maxPrice() {
        return this.getStringAttribute('max_price');
    }
    public set maxPrice(value: string) {
        this._maxPrice = value;
    }
    public resetMaxPrice() {
        this._maxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPriceInput() {
        return this._maxPrice;
    }

    // spot_instance_type - computed: true, optional: true, required: false
    private _spotInstanceType?: string; 
    public get spotInstanceType() {
        return this.getStringAttribute('spot_instance_type');
    }
    public set spotInstanceType(value: string) {
        this._spotInstanceType = value;
    }
    public resetSpotInstanceType() {
        this._spotInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotInstanceTypeInput() {
        return this._spotInstanceType;
    }

    // valid_until - computed: true, optional: true, required: false
    private _validUntil?: string; 
    public get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    public set validUntil(value: string) {
        this._validUntil = value;
    }
    public resetValidUntil() {
        this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validUntilInput() {
        return this._validUntil;
    }
}
export interface InstanceMarketOptionsProperty {
    /**
    * The market type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#market_type CcLaunchTemplate#market_type}
    */
    readonly marketType?: string;
    /**
    * The options for Spot Instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#spot_options CcLaunchTemplate#spot_options}
    */
    readonly spotOptions?: SpotOptionsProperty;
}
export class InstanceMarketOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMarketOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._marketType !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketType = this._marketType;
        }
        if (this._spotOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotOptions = this._spotOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMarketOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._marketType = undefined;
            this._spotOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._marketType = value.marketType;
            this._spotOptions.internalValue = value.spotOptions;
        }
    }

    // market_type - computed: true, optional: true, required: false
    private _marketType?: string; 
    public get marketType() {
        return this.getStringAttribute('market_type');
    }
    public set marketType(value: string) {
        this._marketType = value;
    }
    public resetMarketType() {
        this._marketType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketTypeInput() {
        return this._marketType;
    }

    // spot_options - computed: true, optional: true, required: false
    private _spotOptions = new SpotOptionsPropertyOutputReference(this, "spot_options");
    public get spotOptions() {
        return this._spotOptions;
    }
    public putSpotOptions(value: SpotOptionsProperty) {
        this._spotOptions.internalValue = value;
    }
    public resetSpotOptions() {
        this._spotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotOptionsInput() {
        return this._spotOptions.internalValue;
    }
}
export interface AcceleratorCountProperty {
    /**
    * The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set ``Max`` to ``0``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum number of accelerators. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class AcceleratorCountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorCountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorCountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface AcceleratorTotalMemoryMiBProperty {
    /**
    * The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class AcceleratorTotalMemoryMiBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface BaselineEbsBandwidthMbpsProperty {
    /**
    * The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class BaselineEbsBandwidthMbpsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface ReferenceProperty {
    /**
    * The instance family to refer. Ensure that you specify the correct family name. For example, C6i and C6g are valid values, but C6 is not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_family CcLaunchTemplate#instance_family}
    */
    readonly instanceFamily?: string;
}
export class ReferencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceFamily = this._instanceFamily;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceFamily = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceFamily = value.instanceFamily;
        }
    }

    // instance_family - computed: true, optional: true, required: false
    private _instanceFamily?: string; 
    public get instanceFamily() {
        return this.getStringAttribute('instance_family');
    }
    public set instanceFamily(value: string) {
        this._instanceFamily = value;
    }
    public resetInstanceFamily() {
        this._instanceFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceFamilyInput() {
        return this._instanceFamily;
    }
}

export class ReferencePropertyList extends cdktn.ComplexList {
    public internalValue? : ReferenceProperty[] | cdktn.IResolvable

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
    public get(index: number): ReferencePropertyOutputReference {
        return new ReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CpuProperty {
    /**
    * A list of references to be used as baseline for the CPU performance. Currently, you can only specify a single reference across different instance type variations such as CPU manufacturers, architectures etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#references CcLaunchTemplate#references}
    */
    readonly references?: ReferenceProperty[] | cdktn.IResolvable;
}
export class CpuPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CpuProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._references?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.references = this._references?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CpuProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._references.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._references.internalValue = value.references;
        }
    }

    // references - computed: true, optional: true, required: false
    private _references = new ReferencePropertyList(this, "references", false);
    public get references() {
        return this._references;
    }
    public putReferences(value: ReferenceProperty[] | cdktn.IResolvable) {
        this._references.internalValue = value;
    }
    public resetReferences() {
        this._references.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referencesInput() {
        return this._references.internalValue;
    }
}
export interface BaselinePerformanceFactorsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#cpu CcLaunchTemplate#cpu}
    */
    readonly cpu?: CpuProperty;
}
export class BaselinePerformanceFactorsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselinePerformanceFactorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpu?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BaselinePerformanceFactorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpu.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpu.internalValue = value.cpu;
        }
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu = new CpuPropertyOutputReference(this, "cpu");
    public get cpu() {
        return this._cpu;
    }
    public putCpu(value: CpuProperty) {
        this._cpu.internalValue = value;
    }
    public resetCpu() {
        this._cpu.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu.internalValue;
    }
}
export interface MemoryGiBPerVCpuProperty {
    /**
    * The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class MemoryGiBPerVCpuPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryGiBPerVCpuProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryGiBPerVCpuProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface MemoryMiBProperty {
    /**
    * The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of memory, in MiB. To specify no minimum limit, specify ``0``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class MemoryMiBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryMiBProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryMiBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface NetworkBandwidthGbpsProperty {
    /**
    * The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class NetworkBandwidthGbpsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkBandwidthGbpsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkBandwidthGbpsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface NetworkInterfaceCountProperty {
    /**
    * The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class NetworkInterfaceCountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkInterfaceCountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceCountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface TotalLocalStorageGBProperty {
    /**
    * The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class TotalLocalStorageGBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TotalLocalStorageGBProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TotalLocalStorageGBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface VCpuCountProperty {
    /**
    * The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max CcLaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * The minimum number of vCPUs. To specify no minimum limit, specify ``0``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#min CcLaunchTemplate#min}
    */
    readonly min?: number;
}
export class VCpuCountPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VCpuCountProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface InstanceRequirementsProperty {
    /**
    * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
    *  To exclude accelerator-enabled instance types, set ``Max`` to ``0``.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#accelerator_count CcLaunchTemplate#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountProperty;
    /**
    * Indicates whether instance types must have accelerators by specific manufacturers.
    *   +  For instance types with AWS devices, specify ``amazon-web-services``.
    *   +  For instance types with AMD devices, specify ``amd``.
    *   +  For instance types with Habana devices, specify ``habana``.
    *   +  For instance types with NVIDIA devices, specify ``nvidia``.
    *   +  For instance types with Xilinx devices, specify ``xilinx``.
    *   
    *  Default: Any manufacturer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#accelerator_manufacturers CcLaunchTemplate#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * The accelerators that must be on the instance type.
    *   +  For instance types with NVIDIA A10G GPUs, specify ``a10g``.
    *   +  For instance types with NVIDIA A100 GPUs, specify ``a100``.
    *   +  For instance types with NVIDIA H100 GPUs, specify ``h100``.
    *   +  For instance types with AWS Inferentia chips, specify ``inferentia``.
    *   +  For instance types with NVIDIA GRID K520 GPUs, specify ``k520``.
    *   +  For instance types with NVIDIA K80 GPUs, specify ``k80``.
    *   +  For instance types with NVIDIA M60 GPUs, specify ``m60``.
    *   +  For instance types with AMD Radeon Pro V520 GPUs, specify ``radeon-pro-v520``.
    *   +  For instance types with NVIDIA T4 GPUs, specify ``t4``.
    *   +  For instance types with NVIDIA T4G GPUs, specify ``t4g``.
    *   +  For instance types with Xilinx VU9P FPGAs, specify ``vu9p``.
    *   +  For instance types with NVIDIA V100 GPUs, specify ``v100``.
    *   
    *  Default: Any accelerator
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#accelerator_names CcLaunchTemplate#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * The minimum and maximum amount of total accelerator memory, in MiB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#accelerator_total_memory_mi_b CcLaunchTemplate#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBProperty;
    /**
    * The accelerator types that must be on the instance type.
    *   +  For instance types with GPU accelerators, specify ``gpu``.
    *   +  For instance types with FPGA accelerators, specify ``fpga``.
    *   +  For instance types with inference accelerators, specify ``inference``.
    *   
    *  Default: Any accelerator type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#accelerator_types CcLaunchTemplate#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
    *  You can use strings with one or more wild cards, represented by an asterisk (``*``), to allow an instance type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``.
    *  For example, if you specify ``c5*``,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
    *   If you specify ``AllowedInstanceTypes``, you can't specify ``ExcludedInstanceTypes``.
    *   Default: All instance types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#allowed_instance_types CcLaunchTemplate#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Indicates whether bare metal instance types must be included, excluded, or required.
    *   +  To include bare metal instance types, specify ``included``.
    *   +  To require only bare metal instance types, specify ``required``.
    *   +  To exclude bare metal instance types, specify ``excluded``.
    *   
    *  Default: ``excluded``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#bare_metal CcLaunchTemplate#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#baseline_ebs_bandwidth_mbps CcLaunchTemplate#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#baseline_performance_factors CcLaunchTemplate#baseline_performance_factors}
    */
    readonly baselinePerformanceFactors?: BaselinePerformanceFactorsProperty;
    /**
    * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
    *   +  To include burstable performance instance types, specify ``included``.
    *   +  To require only burstable performance instance types, specify ``required``.
    *   +  To exclude burstable performance instance types, specify ``excluded``.
    *   
    *  Default: ``excluded``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#burstable_performance CcLaunchTemplate#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * The CPU manufacturers to include.
    *   +  For instance types with Intel CPUs, specify ``intel``.
    *   +  For instance types with AMD CPUs, specify ``amd``.
    *   +  For instance types with AWS CPUs, specify ``amazon-web-services``.
    *   
    *   Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
    *   Default: Any manufacturer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#cpu_manufacturers CcLaunchTemplate#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * The instance types to exclude.
    *  You can use strings with one or more wild cards, represented by an asterisk (``*``), to exclude an instance type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``.
    *  For example, if you specify ``c5*``,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
    *   If you specify ``ExcludedInstanceTypes``, you can't specify ``AllowedInstanceTypes``.
    *   Default: No excluded instance types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#excluded_instance_types CcLaunchTemplate#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
    *  For current generation instance types, specify ``current``.
    *  For previous generation instance types, specify ``previous``.
    *  Default: Current and previous generation instance types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_generations CcLaunchTemplate#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
    *   +  To include instance types with instance store volumes, specify ``included``.
    *   +  To require only instance types with instance store volumes, specify ``required``.
    *   +  To exclude instance types with instance store volumes, specify ``excluded``.
    *   
    *  Default: ``included``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#local_storage CcLaunchTemplate#local_storage}
    */
    readonly localStorage?: string;
    /**
    * The type of local storage that is required.
    *   +  For instance types with hard disk drive (HDD) storage, specify ``hdd``.
    *   +  For instance types with solid state drive (SSD) storage, specify ``ssd``.
    *   
    *  Default: ``hdd`` and ``ssd``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#local_storage_types CcLaunchTemplate#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
    *  The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
    *  If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.
    *   Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#max_spot_price_as_percentage_of_optimal_on_demand_price CcLaunchTemplate#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * The minimum and maximum amount of memory per vCPU, in GiB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#memory_gi_b_per_v_cpu CcLaunchTemplate#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuProperty;
    /**
    * The minimum and maximum amount of memory, in MiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#memory_mi_b CcLaunchTemplate#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBProperty;
    /**
    * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#network_bandwidth_gbps CcLaunchTemplate#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
    /**
    * The minimum and maximum number of network interfaces.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#network_interface_count CcLaunchTemplate#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
    /**
    * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
    *  The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
    *  To turn off price protection, specify a high value, such as ``999999``.
    *  This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
    *   If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
    *   Default: ``20``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#on_demand_max_price_percentage_over_lowest_price CcLaunchTemplate#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Indicates whether instance types must support hibernation for On-Demand Instances.
    *  This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
    *  Default: ``false``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#require_hibernate_support CcLaunchTemplate#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.
    *  The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
    *  If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
    *  This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
    *   Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
    *   Default: ``100``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#spot_max_price_percentage_over_lowest_price CcLaunchTemplate#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * The minimum and maximum amount of total local storage, in GB.
    *  Default: No minimum or maximum limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#total_local_storage_gb CcLaunchTemplate#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGBProperty;
    /**
    * The minimum and maximum number of vCPUs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#v_cpu_count CcLaunchTemplate#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountProperty;
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
        if (this._acceleratorCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
        }
        if (this._acceleratorManufacturers !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorManufacturers = this._acceleratorManufacturers;
        }
        if (this._acceleratorNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorNames = this._acceleratorNames;
        }
        if (this._acceleratorTotalMemoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTotalMemoryMiB = this._acceleratorTotalMemoryMiB?.internalValue;
        }
        if (this._acceleratorTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTypes = this._acceleratorTypes;
        }
        if (this._allowedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
        }
        if (this._bareMetal !== undefined) {
            hasAnyValues = true;
            internalValueResult.bareMetal = this._bareMetal;
        }
        if (this._baselineEbsBandwidthMbps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.baselineEbsBandwidthMbps = this._baselineEbsBandwidthMbps?.internalValue;
        }
        if (this._baselinePerformanceFactors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.baselinePerformanceFactors = this._baselinePerformanceFactors?.internalValue;
        }
        if (this._burstablePerformance !== undefined) {
            hasAnyValues = true;
            internalValueResult.burstablePerformance = this._burstablePerformance;
        }
        if (this._cpuManufacturers !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuManufacturers = this._cpuManufacturers;
        }
        if (this._excludedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
        }
        if (this._instanceGenerations !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceGenerations = this._instanceGenerations;
        }
        if (this._localStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorage = this._localStorage;
        }
        if (this._localStorageTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorageTypes = this._localStorageTypes;
        }
        if (this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
        }
        if (this._memoryGiBPerVCpu?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryGiBPerVCpu = this._memoryGiBPerVCpu?.internalValue;
        }
        if (this._memoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryMiB = this._memoryMiB?.internalValue;
        }
        if (this._networkBandwidthGbps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkBandwidthGbps = this._networkBandwidthGbps?.internalValue;
        }
        if (this._networkInterfaceCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceCount = this._networkInterfaceCount?.internalValue;
        }
        if (this._onDemandMaxPricePercentageOverLowestPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandMaxPricePercentageOverLowestPrice = this._onDemandMaxPricePercentageOverLowestPrice;
        }
        if (this._requireHibernateSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireHibernateSupport = this._requireHibernateSupport;
        }
        if (this._spotMaxPricePercentageOverLowestPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaxPricePercentageOverLowestPrice = this._spotMaxPricePercentageOverLowestPrice;
        }
        if (this._totalLocalStorageGb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalLocalStorageGb = this._totalLocalStorageGb?.internalValue;
        }
        if (this._vCpuCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpuCount = this._vCpuCount?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = undefined;
            this._acceleratorManufacturers = undefined;
            this._acceleratorNames = undefined;
            this._acceleratorTotalMemoryMiB.internalValue = undefined;
            this._acceleratorTypes = undefined;
            this._allowedInstanceTypes = undefined;
            this._bareMetal = undefined;
            this._baselineEbsBandwidthMbps.internalValue = undefined;
            this._baselinePerformanceFactors.internalValue = undefined;
            this._burstablePerformance = undefined;
            this._cpuManufacturers = undefined;
            this._excludedInstanceTypes = undefined;
            this._instanceGenerations = undefined;
            this._localStorage = undefined;
            this._localStorageTypes = undefined;
            this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
            this._memoryGiBPerVCpu.internalValue = undefined;
            this._memoryMiB.internalValue = undefined;
            this._networkBandwidthGbps.internalValue = undefined;
            this._networkInterfaceCount.internalValue = undefined;
            this._onDemandMaxPricePercentageOverLowestPrice = undefined;
            this._requireHibernateSupport = undefined;
            this._spotMaxPricePercentageOverLowestPrice = undefined;
            this._totalLocalStorageGb.internalValue = undefined;
            this._vCpuCount.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = value.acceleratorCount;
            this._acceleratorManufacturers = value.acceleratorManufacturers;
            this._acceleratorNames = value.acceleratorNames;
            this._acceleratorTotalMemoryMiB.internalValue = value.acceleratorTotalMemoryMiB;
            this._acceleratorTypes = value.acceleratorTypes;
            this._allowedInstanceTypes = value.allowedInstanceTypes;
            this._bareMetal = value.bareMetal;
            this._baselineEbsBandwidthMbps.internalValue = value.baselineEbsBandwidthMbps;
            this._baselinePerformanceFactors.internalValue = value.baselinePerformanceFactors;
            this._burstablePerformance = value.burstablePerformance;
            this._cpuManufacturers = value.cpuManufacturers;
            this._excludedInstanceTypes = value.excludedInstanceTypes;
            this._instanceGenerations = value.instanceGenerations;
            this._localStorage = value.localStorage;
            this._localStorageTypes = value.localStorageTypes;
            this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value.maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
            this._memoryGiBPerVCpu.internalValue = value.memoryGiBPerVCpu;
            this._memoryMiB.internalValue = value.memoryMiB;
            this._networkBandwidthGbps.internalValue = value.networkBandwidthGbps;
            this._networkInterfaceCount.internalValue = value.networkInterfaceCount;
            this._onDemandMaxPricePercentageOverLowestPrice = value.onDemandMaxPricePercentageOverLowestPrice;
            this._requireHibernateSupport = value.requireHibernateSupport;
            this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
            this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
            this._vCpuCount.internalValue = value.vCpuCount;
        }
    }

    // accelerator_count - computed: true, optional: true, required: false
    private _acceleratorCount = new AcceleratorCountPropertyOutputReference(this, "accelerator_count");
    public get acceleratorCount() {
        return this._acceleratorCount;
    }
    public putAcceleratorCount(value: AcceleratorCountProperty) {
        this._acceleratorCount.internalValue = value;
    }
    public resetAcceleratorCount() {
        this._acceleratorCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorCountInput() {
        return this._acceleratorCount.internalValue;
    }

    // accelerator_manufacturers - computed: true, optional: true, required: false
    private _acceleratorManufacturers?: string[]; 
    public get acceleratorManufacturers() {
        return this.getListAttribute('accelerator_manufacturers');
    }
    public set acceleratorManufacturers(value: string[]) {
        this._acceleratorManufacturers = value;
    }
    public resetAcceleratorManufacturers() {
        this._acceleratorManufacturers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorManufacturersInput() {
        return this._acceleratorManufacturers;
    }

    // accelerator_names - computed: true, optional: true, required: false
    private _acceleratorNames?: string[]; 
    public get acceleratorNames() {
        return this.getListAttribute('accelerator_names');
    }
    public set acceleratorNames(value: string[]) {
        this._acceleratorNames = value;
    }
    public resetAcceleratorNames() {
        this._acceleratorNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorNamesInput() {
        return this._acceleratorNames;
    }

    // accelerator_total_memory_mi_b - computed: true, optional: true, required: false
    private _acceleratorTotalMemoryMiB = new AcceleratorTotalMemoryMiBPropertyOutputReference(this, "accelerator_total_memory_mi_b");
    public get acceleratorTotalMemoryMiB() {
        return this._acceleratorTotalMemoryMiB;
    }
    public putAcceleratorTotalMemoryMiB(value: AcceleratorTotalMemoryMiBProperty) {
        this._acceleratorTotalMemoryMiB.internalValue = value;
    }
    public resetAcceleratorTotalMemoryMiB() {
        this._acceleratorTotalMemoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTotalMemoryMiBInput() {
        return this._acceleratorTotalMemoryMiB.internalValue;
    }

    // accelerator_types - computed: true, optional: true, required: false
    private _acceleratorTypes?: string[]; 
    public get acceleratorTypes() {
        return this.getListAttribute('accelerator_types');
    }
    public set acceleratorTypes(value: string[]) {
        this._acceleratorTypes = value;
    }
    public resetAcceleratorTypes() {
        this._acceleratorTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTypesInput() {
        return this._acceleratorTypes;
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

    // bare_metal - computed: true, optional: true, required: false
    private _bareMetal?: string; 
    public get bareMetal() {
        return this.getStringAttribute('bare_metal');
    }
    public set bareMetal(value: string) {
        this._bareMetal = value;
    }
    public resetBareMetal() {
        this._bareMetal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bareMetalInput() {
        return this._bareMetal;
    }

    // baseline_ebs_bandwidth_mbps - computed: true, optional: true, required: false
    private _baselineEbsBandwidthMbps = new BaselineEbsBandwidthMbpsPropertyOutputReference(this, "baseline_ebs_bandwidth_mbps");
    public get baselineEbsBandwidthMbps() {
        return this._baselineEbsBandwidthMbps;
    }
    public putBaselineEbsBandwidthMbps(value: BaselineEbsBandwidthMbpsProperty) {
        this._baselineEbsBandwidthMbps.internalValue = value;
    }
    public resetBaselineEbsBandwidthMbps() {
        this._baselineEbsBandwidthMbps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baselineEbsBandwidthMbpsInput() {
        return this._baselineEbsBandwidthMbps.internalValue;
    }

    // baseline_performance_factors - computed: true, optional: true, required: false
    private _baselinePerformanceFactors = new BaselinePerformanceFactorsPropertyOutputReference(this, "baseline_performance_factors");
    public get baselinePerformanceFactors() {
        return this._baselinePerformanceFactors;
    }
    public putBaselinePerformanceFactors(value: BaselinePerformanceFactorsProperty) {
        this._baselinePerformanceFactors.internalValue = value;
    }
    public resetBaselinePerformanceFactors() {
        this._baselinePerformanceFactors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baselinePerformanceFactorsInput() {
        return this._baselinePerformanceFactors.internalValue;
    }

    // burstable_performance - computed: true, optional: true, required: false
    private _burstablePerformance?: string; 
    public get burstablePerformance() {
        return this.getStringAttribute('burstable_performance');
    }
    public set burstablePerformance(value: string) {
        this._burstablePerformance = value;
    }
    public resetBurstablePerformance() {
        this._burstablePerformance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burstablePerformanceInput() {
        return this._burstablePerformance;
    }

    // cpu_manufacturers - computed: true, optional: true, required: false
    private _cpuManufacturers?: string[]; 
    public get cpuManufacturers() {
        return this.getListAttribute('cpu_manufacturers');
    }
    public set cpuManufacturers(value: string[]) {
        this._cpuManufacturers = value;
    }
    public resetCpuManufacturers() {
        this._cpuManufacturers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuManufacturersInput() {
        return this._cpuManufacturers;
    }

    // excluded_instance_types - computed: true, optional: true, required: false
    private _excludedInstanceTypes?: string[]; 
    public get excludedInstanceTypes() {
        return this.getListAttribute('excluded_instance_types');
    }
    public set excludedInstanceTypes(value: string[]) {
        this._excludedInstanceTypes = value;
    }
    public resetExcludedInstanceTypes() {
        this._excludedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedInstanceTypesInput() {
        return this._excludedInstanceTypes;
    }

    // instance_generations - computed: true, optional: true, required: false
    private _instanceGenerations?: string[]; 
    public get instanceGenerations() {
        return this.getListAttribute('instance_generations');
    }
    public set instanceGenerations(value: string[]) {
        this._instanceGenerations = value;
    }
    public resetInstanceGenerations() {
        this._instanceGenerations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceGenerationsInput() {
        return this._instanceGenerations;
    }

    // local_storage - computed: true, optional: true, required: false
    private _localStorage?: string; 
    public get localStorage() {
        return this.getStringAttribute('local_storage');
    }
    public set localStorage(value: string) {
        this._localStorage = value;
    }
    public resetLocalStorage() {
        this._localStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageInput() {
        return this._localStorage;
    }

    // local_storage_types - computed: true, optional: true, required: false
    private _localStorageTypes?: string[]; 
    public get localStorageTypes() {
        return this.getListAttribute('local_storage_types');
    }
    public set localStorageTypes(value: string[]) {
        this._localStorageTypes = value;
    }
    public resetLocalStorageTypes() {
        this._localStorageTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageTypesInput() {
        return this._localStorageTypes;
    }

    // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: true, optional: true, required: false
    private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number; 
    public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
        return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
    }
    public set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number) {
        this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value;
    }
    public resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
        this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput() {
        return this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
    }

    // memory_gi_b_per_v_cpu - computed: true, optional: true, required: false
    private _memoryGiBPerVCpu = new MemoryGiBPerVCpuPropertyOutputReference(this, "memory_gi_b_per_v_cpu");
    public get memoryGiBPerVCpu() {
        return this._memoryGiBPerVCpu;
    }
    public putMemoryGiBPerVCpu(value: MemoryGiBPerVCpuProperty) {
        this._memoryGiBPerVCpu.internalValue = value;
    }
    public resetMemoryGiBPerVCpu() {
        this._memoryGiBPerVCpu.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryGiBPerVCpuInput() {
        return this._memoryGiBPerVCpu.internalValue;
    }

    // memory_mi_b - computed: true, optional: true, required: false
    private _memoryMiB = new MemoryMiBPropertyOutputReference(this, "memory_mi_b");
    public get memoryMiB() {
        return this._memoryMiB;
    }
    public putMemoryMiB(value: MemoryMiBProperty) {
        this._memoryMiB.internalValue = value;
    }
    public resetMemoryMiB() {
        this._memoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryMiBInput() {
        return this._memoryMiB.internalValue;
    }

    // network_bandwidth_gbps - computed: true, optional: true, required: false
    private _networkBandwidthGbps = new NetworkBandwidthGbpsPropertyOutputReference(this, "network_bandwidth_gbps");
    public get networkBandwidthGbps() {
        return this._networkBandwidthGbps;
    }
    public putNetworkBandwidthGbps(value: NetworkBandwidthGbpsProperty) {
        this._networkBandwidthGbps.internalValue = value;
    }
    public resetNetworkBandwidthGbps() {
        this._networkBandwidthGbps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkBandwidthGbpsInput() {
        return this._networkBandwidthGbps.internalValue;
    }

    // network_interface_count - computed: true, optional: true, required: false
    private _networkInterfaceCount = new NetworkInterfaceCountPropertyOutputReference(this, "network_interface_count");
    public get networkInterfaceCount() {
        return this._networkInterfaceCount;
    }
    public putNetworkInterfaceCount(value: NetworkInterfaceCountProperty) {
        this._networkInterfaceCount.internalValue = value;
    }
    public resetNetworkInterfaceCount() {
        this._networkInterfaceCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceCountInput() {
        return this._networkInterfaceCount.internalValue;
    }

    // on_demand_max_price_percentage_over_lowest_price - computed: true, optional: true, required: false
    private _onDemandMaxPricePercentageOverLowestPrice?: number; 
    public get onDemandMaxPricePercentageOverLowestPrice() {
        return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
    }
    public set onDemandMaxPricePercentageOverLowestPrice(value: number) {
        this._onDemandMaxPricePercentageOverLowestPrice = value;
    }
    public resetOnDemandMaxPricePercentageOverLowestPrice() {
        this._onDemandMaxPricePercentageOverLowestPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandMaxPricePercentageOverLowestPriceInput() {
        return this._onDemandMaxPricePercentageOverLowestPrice;
    }

    // require_hibernate_support - computed: true, optional: true, required: false
    private _requireHibernateSupport?: boolean | cdktn.IResolvable; 
    public get requireHibernateSupport() {
        return this.getBooleanAttribute('require_hibernate_support');
    }
    public set requireHibernateSupport(value: boolean | cdktn.IResolvable) {
        this._requireHibernateSupport = value;
    }
    public resetRequireHibernateSupport() {
        this._requireHibernateSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireHibernateSupportInput() {
        return this._requireHibernateSupport;
    }

    // spot_max_price_percentage_over_lowest_price - computed: true, optional: true, required: false
    private _spotMaxPricePercentageOverLowestPrice?: number; 
    public get spotMaxPricePercentageOverLowestPrice() {
        return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
    }
    public set spotMaxPricePercentageOverLowestPrice(value: number) {
        this._spotMaxPricePercentageOverLowestPrice = value;
    }
    public resetSpotMaxPricePercentageOverLowestPrice() {
        this._spotMaxPricePercentageOverLowestPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaxPricePercentageOverLowestPriceInput() {
        return this._spotMaxPricePercentageOverLowestPrice;
    }

    // total_local_storage_gb - computed: true, optional: true, required: false
    private _totalLocalStorageGb = new TotalLocalStorageGBPropertyOutputReference(this, "total_local_storage_gb");
    public get totalLocalStorageGb() {
        return this._totalLocalStorageGb;
    }
    public putTotalLocalStorageGb(value: TotalLocalStorageGBProperty) {
        this._totalLocalStorageGb.internalValue = value;
    }
    public resetTotalLocalStorageGb() {
        this._totalLocalStorageGb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalLocalStorageGbInput() {
        return this._totalLocalStorageGb.internalValue;
    }

    // v_cpu_count - computed: true, optional: true, required: false
    private _vCpuCount = new VCpuCountPropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountProperty) {
        this._vCpuCount.internalValue = value;
    }
    public resetVCpuCount() {
        this._vCpuCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuCountInput() {
        return this._vCpuCount.internalValue;
    }
}
export interface LicenseSpecificationProperty {
    /**
    * The Amazon Resource Name (ARN) of the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#license_configuration_arn CcLaunchTemplate#license_configuration_arn}
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
export interface MaintenanceOptionsProperty {
    /**
    * Disables the automatic recovery behavior of your instance or sets it to default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#auto_recovery CcLaunchTemplate#auto_recovery}
    */
    readonly autoRecovery?: string;
}
export class MaintenanceOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MaintenanceOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface MetadataOptionsProperty {
    /**
    * Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is ``enabled``.
    *   If you specify a value of ``disabled``, you will not be able to access your instance metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#http_endpoint CcLaunchTemplate#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Enables or disables the IPv6 endpoint for the instance metadata service.
    *  Default: ``disabled``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#http_protocol_ipv_6 CcLaunchTemplate#http_protocol_ipv_6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
    *  Default: ``1`` 
    *  Possible values: Integers from 1 to 64
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#http_put_response_hop_limit CcLaunchTemplate#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Indicates whether IMDSv2 is required.
    *   +   ``optional`` - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.
    *   +   ``required`` - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.
    *   
    *  Default: If the value of ``ImdsSupport`` for the Amazon Machine Image (AMI) for your instance is ``v2.0``, the default is ``required``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#http_tokens CcLaunchTemplate#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Set to ``enabled`` to allow access to instance tags from the instance metadata. Set to ``disabled`` to turn off access to instance tags from the instance metadata. For more information, see [Work with instance tags using the instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS).
    *  Default: ``disabled``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_metadata_tags CcLaunchTemplate#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
export class MetadataOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MetadataOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface MonitoringProperty {
    /**
    * Specify ``true`` to enable detailed monitoring. Otherwise, basic monitoring is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#enabled CcLaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class MonitoringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MonitoringProperty | cdktn.IResolvable | undefined) {
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
export interface ConnectionTrackingSpecificationProperty {
    /**
    * Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 432000 seconds. Recommended: Less than 432000 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tcp_established_timeout CcLaunchTemplate#tcp_established_timeout}
    */
    readonly tcpEstablishedTimeout?: number;
    /**
    * Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#udp_stream_timeout CcLaunchTemplate#udp_stream_timeout}
    */
    readonly udpStreamTimeout?: number;
    /**
    * Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#udp_timeout CcLaunchTemplate#udp_timeout}
    */
    readonly udpTimeout?: number;
}
export class ConnectionTrackingSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionTrackingSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tcpEstablishedTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcpEstablishedTimeout = this._tcpEstablishedTimeout;
        }
        if (this._udpStreamTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.udpStreamTimeout = this._udpStreamTimeout;
        }
        if (this._udpTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.udpTimeout = this._udpTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionTrackingSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tcpEstablishedTimeout = undefined;
            this._udpStreamTimeout = undefined;
            this._udpTimeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tcpEstablishedTimeout = value.tcpEstablishedTimeout;
            this._udpStreamTimeout = value.udpStreamTimeout;
            this._udpTimeout = value.udpTimeout;
        }
    }

    // tcp_established_timeout - computed: true, optional: true, required: false
    private _tcpEstablishedTimeout?: number; 
    public get tcpEstablishedTimeout() {
        return this.getNumberAttribute('tcp_established_timeout');
    }
    public set tcpEstablishedTimeout(value: number) {
        this._tcpEstablishedTimeout = value;
    }
    public resetTcpEstablishedTimeout() {
        this._tcpEstablishedTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpEstablishedTimeoutInput() {
        return this._tcpEstablishedTimeout;
    }

    // udp_stream_timeout - computed: true, optional: true, required: false
    private _udpStreamTimeout?: number; 
    public get udpStreamTimeout() {
        return this.getNumberAttribute('udp_stream_timeout');
    }
    public set udpStreamTimeout(value: number) {
        this._udpStreamTimeout = value;
    }
    public resetUdpStreamTimeout() {
        this._udpStreamTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get udpStreamTimeoutInput() {
        return this._udpStreamTimeout;
    }

    // udp_timeout - computed: true, optional: true, required: false
    private _udpTimeout?: number; 
    public get udpTimeout() {
        return this.getNumberAttribute('udp_timeout');
    }
    public set udpTimeout(value: number) {
        this._udpTimeout = value;
    }
    public resetUdpTimeout() {
        this._udpTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get udpTimeoutInput() {
        return this._udpTimeout;
    }
}
export interface EnaSrdUdpSpecificationProperty {
    /**
    * Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ena_srd_udp_enabled CcLaunchTemplate#ena_srd_udp_enabled}
    */
    readonly enaSrdUdpEnabled?: boolean | cdktn.IResolvable;
}
export class EnaSrdUdpSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnaSrdUdpSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enaSrdUdpEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enaSrdUdpEnabled = this._enaSrdUdpEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnaSrdUdpSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enaSrdUdpEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enaSrdUdpEnabled = value.enaSrdUdpEnabled;
        }
    }

    // ena_srd_udp_enabled - computed: true, optional: true, required: false
    private _enaSrdUdpEnabled?: boolean | cdktn.IResolvable; 
    public get enaSrdUdpEnabled() {
        return this.getBooleanAttribute('ena_srd_udp_enabled');
    }
    public set enaSrdUdpEnabled(value: boolean | cdktn.IResolvable) {
        this._enaSrdUdpEnabled = value;
    }
    public resetEnaSrdUdpEnabled() {
        this._enaSrdUdpEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enaSrdUdpEnabledInput() {
        return this._enaSrdUdpEnabled;
    }
}
export interface EnaSrdSpecificationProperty {
    /**
    * Indicates whether ENA Express is enabled for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ena_srd_enabled CcLaunchTemplate#ena_srd_enabled}
    */
    readonly enaSrdEnabled?: boolean | cdktn.IResolvable;
    /**
    * Configures ENA Express for UDP network traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ena_srd_udp_specification CcLaunchTemplate#ena_srd_udp_specification}
    */
    readonly enaSrdUdpSpecification?: EnaSrdUdpSpecificationProperty;
}
export class EnaSrdSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnaSrdSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enaSrdEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enaSrdEnabled = this._enaSrdEnabled;
        }
        if (this._enaSrdUdpSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enaSrdUdpSpecification = this._enaSrdUdpSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnaSrdSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enaSrdEnabled = undefined;
            this._enaSrdUdpSpecification.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enaSrdEnabled = value.enaSrdEnabled;
            this._enaSrdUdpSpecification.internalValue = value.enaSrdUdpSpecification;
        }
    }

    // ena_srd_enabled - computed: true, optional: true, required: false
    private _enaSrdEnabled?: boolean | cdktn.IResolvable; 
    public get enaSrdEnabled() {
        return this.getBooleanAttribute('ena_srd_enabled');
    }
    public set enaSrdEnabled(value: boolean | cdktn.IResolvable) {
        this._enaSrdEnabled = value;
    }
    public resetEnaSrdEnabled() {
        this._enaSrdEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enaSrdEnabledInput() {
        return this._enaSrdEnabled;
    }

    // ena_srd_udp_specification - computed: true, optional: true, required: false
    private _enaSrdUdpSpecification = new EnaSrdUdpSpecificationPropertyOutputReference(this, "ena_srd_udp_specification");
    public get enaSrdUdpSpecification() {
        return this._enaSrdUdpSpecification;
    }
    public putEnaSrdUdpSpecification(value: EnaSrdUdpSpecificationProperty) {
        this._enaSrdUdpSpecification.internalValue = value;
    }
    public resetEnaSrdUdpSpecification() {
        this._enaSrdUdpSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enaSrdUdpSpecificationInput() {
        return this._enaSrdUdpSpecification.internalValue;
    }
}
export interface Ipv4PrefixSpecificationProperty {
    /**
    * The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_4_prefix CcLaunchTemplate#ipv_4_prefix}
    */
    readonly ipv4Prefix?: string;
}
export class Ipv4PrefixSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv4PrefixSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv4Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Prefix = this._ipv4Prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv4PrefixSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv4Prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv4Prefix = value.ipv4Prefix;
        }
    }

    // ipv_4_prefix - computed: true, optional: true, required: false
    private _ipv4Prefix?: string; 
    public get ipv4Prefix() {
        return this.getStringAttribute('ipv_4_prefix');
    }
    public set ipv4Prefix(value: string) {
        this._ipv4Prefix = value;
    }
    public resetIpv4Prefix() {
        this._ipv4Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixInput() {
        return this._ipv4Prefix;
    }
}

export class Ipv4PrefixSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv4PrefixSpecificationPropertyOutputReference {
        return new Ipv4PrefixSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ipv6AddProperty {
    /**
    * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_address CcLaunchTemplate#ipv_6_address}
    */
    readonly ipv6Address?: string;
}
export class Ipv6AddPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv6AddProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv6Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Address = this._ipv6Address;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv6AddProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv6Address = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv6Address = value.ipv6Address;
        }
    }

    // ipv_6_address - computed: true, optional: true, required: false
    private _ipv6Address?: string; 
    public get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }
    public set ipv6Address(value: string) {
        this._ipv6Address = value;
    }
    public resetIpv6Address() {
        this._ipv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressInput() {
        return this._ipv6Address;
    }
}

export class Ipv6AddPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv6AddProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv6AddPropertyOutputReference {
        return new Ipv6AddPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ipv6PrefixSpecificationProperty {
    /**
    * The IPv6 prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_prefix CcLaunchTemplate#ipv_6_prefix}
    */
    readonly ipv6Prefix?: string;
}
export class Ipv6PrefixSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv6PrefixSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv6Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Prefix = this._ipv6Prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv6PrefixSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv6Prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv6Prefix = value.ipv6Prefix;
        }
    }

    // ipv_6_prefix - computed: true, optional: true, required: false
    private _ipv6Prefix?: string; 
    public get ipv6Prefix() {
        return this.getStringAttribute('ipv_6_prefix');
    }
    public set ipv6Prefix(value: string) {
        this._ipv6Prefix = value;
    }
    public resetIpv6Prefix() {
        this._ipv6Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixInput() {
        return this._ipv6Prefix;
    }
}

export class Ipv6PrefixSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv6PrefixSpecificationPropertyOutputReference {
        return new Ipv6PrefixSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrivateIpAddProperty {
    /**
    * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#primary CcLaunchTemplate#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The private IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#private_ip_address CcLaunchTemplate#private_ip_address}
    */
    readonly privateIpAddress?: string;
}
export class PrivateIpAddPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateIpAddProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._privateIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddress = this._privateIpAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateIpAddProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary = undefined;
            this._privateIpAddress = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary = value.primary;
            this._privateIpAddress = value.privateIpAddress;
        }
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
    }

    // private_ip_address - computed: true, optional: true, required: false
    private _privateIpAddress?: string; 
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    public set privateIpAddress(value: string) {
        this._privateIpAddress = value;
    }
    public resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressInput() {
        return this._privateIpAddress;
    }
}

export class PrivateIpAddPropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateIpAddProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateIpAddPropertyOutputReference {
        return new PrivateIpAddPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkInterfaceProperty {
    /**
    * Associates a Carrier IP address with eth0 for a new network interface.
    *  Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#associate_carrier_ip_address CcLaunchTemplate#associate_carrier_ip_address}
    */
    readonly associateCarrierIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Associates a public IPv4 address with eth0 for a new network interface.
    *   AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#associate_public_ip_address CcLaunchTemplate#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * A connection tracking specification for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#connection_tracking_specification CcLaunchTemplate#connection_tracking_specification}
    */
    readonly connectionTrackingSpecification?: ConnectionTrackingSpecificationProperty;
    /**
    * Indicates whether the network interface is deleted when the instance is terminated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#delete_on_termination CcLaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * A description for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#description CcLaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * The device index for the network interface attachment. Each network interface requires a device index. If you create a launch template that includes secondary network interfaces but not a primary network interface, then you must add a primary network interface as a launch parameter when you launch an instance from the template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#device_index CcLaunchTemplate#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * The ENA Express configuration for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ena_srd_specification CcLaunchTemplate#ena_srd_specification}
    */
    readonly enaSrdSpecification?: EnaSrdSpecificationProperty;
    /**
    * The IDs of one or more security groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#groups CcLaunchTemplate#groups}
    */
    readonly groups?: string[];
    /**
    * The type of network interface. To create an Elastic Fabric Adapter (EFA), specify ``efa``. For more information, see [Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the *Amazon EC2 User Guide*.
    *  If you are not creating an EFA, specify ``interface`` or omit this parameter.
    *  Valid values: ``interface`` | ``efa``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#interface_type CcLaunchTemplate#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the ``Ipv4Prefix`` option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_4_prefix_count CcLaunchTemplate#ipv_4_prefix_count}
    */
    readonly ipv4PrefixCount?: number;
    /**
    * One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the ``Ipv4PrefixCount`` option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_4_prefixes CcLaunchTemplate#ipv_4_prefixes}
    */
    readonly ipv4Prefixes?: Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_address_count CcLaunchTemplate#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_addresses CcLaunchTemplate#ipv_6_addresses}
    */
    readonly ipv6Addresses?: Ipv6AddProperty[] | cdktn.IResolvable;
    /**
    * The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the ``Ipv6Prefix`` option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_prefix_count CcLaunchTemplate#ipv_6_prefix_count}
    */
    readonly ipv6PrefixCount?: number;
    /**
    * One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the ``Ipv6PrefixCount`` option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ipv_6_prefixes CcLaunchTemplate#ipv_6_prefixes}
    */
    readonly ipv6Prefixes?: Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#network_card_index CcLaunchTemplate#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * The ID of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#network_interface_id CcLaunchTemplate#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#primary_ipv_6 CcLaunchTemplate#primary_ipv_6}
    */
    readonly primaryIpv6?: boolean | cdktn.IResolvable;
    /**
    * The primary private IPv4 address of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#private_ip_address CcLaunchTemplate#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * One or more private IPv4 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#private_ip_addresses CcLaunchTemplate#private_ip_addresses}
    */
    readonly privateIpAddresses?: PrivateIpAddProperty[] | cdktn.IResolvable;
    /**
    * The number of secondary private IPv4 addresses to assign to a network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#secondary_private_ip_address_count CcLaunchTemplate#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * The ID of the subnet for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#subnet_id CcLaunchTemplate#subnet_id}
    */
    readonly subnetId?: string;
}
export class NetworkInterfacePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkInterfaceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associateCarrierIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associateCarrierIpAddress = this._associateCarrierIpAddress;
        }
        if (this._associatePublicIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
        }
        if (this._connectionTrackingSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionTrackingSpecification = this._connectionTrackingSpecification?.internalValue;
        }
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._deviceIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceIndex = this._deviceIndex;
        }
        if (this._enaSrdSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enaSrdSpecification = this._enaSrdSpecification?.internalValue;
        }
        if (this._groups !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._interfaceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceType = this._interfaceType;
        }
        if (this._ipv4PrefixCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4PrefixCount = this._ipv4PrefixCount;
        }
        if (this._ipv4Prefixes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Prefixes = this._ipv4Prefixes?.internalValue;
        }
        if (this._ipv6AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
        }
        if (this._ipv6Addresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
        }
        if (this._ipv6PrefixCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6PrefixCount = this._ipv6PrefixCount;
        }
        if (this._ipv6Prefixes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Prefixes = this._ipv6Prefixes?.internalValue;
        }
        if (this._networkCardIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkCardIndex = this._networkCardIndex;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        if (this._primaryIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryIpv6 = this._primaryIpv6;
        }
        if (this._privateIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddress = this._privateIpAddress;
        }
        if (this._privateIpAddresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddresses = this._privateIpAddresses?.internalValue;
        }
        if (this._secondaryPrivateIpAddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryPrivateIpAddressCount = this._secondaryPrivateIpAddressCount;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associateCarrierIpAddress = undefined;
            this._associatePublicIpAddress = undefined;
            this._connectionTrackingSpecification.internalValue = undefined;
            this._deleteOnTermination = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._enaSrdSpecification.internalValue = undefined;
            this._groups = undefined;
            this._interfaceType = undefined;
            this._ipv4PrefixCount = undefined;
            this._ipv4Prefixes.internalValue = undefined;
            this._ipv6AddressCount = undefined;
            this._ipv6Addresses.internalValue = undefined;
            this._ipv6PrefixCount = undefined;
            this._ipv6Prefixes.internalValue = undefined;
            this._networkCardIndex = undefined;
            this._networkInterfaceId = undefined;
            this._primaryIpv6 = undefined;
            this._privateIpAddress = undefined;
            this._privateIpAddresses.internalValue = undefined;
            this._secondaryPrivateIpAddressCount = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associateCarrierIpAddress = value.associateCarrierIpAddress;
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._connectionTrackingSpecification.internalValue = value.connectionTrackingSpecification;
            this._deleteOnTermination = value.deleteOnTermination;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._enaSrdSpecification.internalValue = value.enaSrdSpecification;
            this._groups = value.groups;
            this._interfaceType = value.interfaceType;
            this._ipv4PrefixCount = value.ipv4PrefixCount;
            this._ipv4Prefixes.internalValue = value.ipv4Prefixes;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._ipv6Addresses.internalValue = value.ipv6Addresses;
            this._ipv6PrefixCount = value.ipv6PrefixCount;
            this._ipv6Prefixes.internalValue = value.ipv6Prefixes;
            this._networkCardIndex = value.networkCardIndex;
            this._networkInterfaceId = value.networkInterfaceId;
            this._primaryIpv6 = value.primaryIpv6;
            this._privateIpAddress = value.privateIpAddress;
            this._privateIpAddresses.internalValue = value.privateIpAddresses;
            this._secondaryPrivateIpAddressCount = value.secondaryPrivateIpAddressCount;
            this._subnetId = value.subnetId;
        }
    }

    // associate_carrier_ip_address - computed: true, optional: true, required: false
    private _associateCarrierIpAddress?: boolean | cdktn.IResolvable; 
    public get associateCarrierIpAddress() {
        return this.getBooleanAttribute('associate_carrier_ip_address');
    }
    public set associateCarrierIpAddress(value: boolean | cdktn.IResolvable) {
        this._associateCarrierIpAddress = value;
    }
    public resetAssociateCarrierIpAddress() {
        this._associateCarrierIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associateCarrierIpAddressInput() {
        return this._associateCarrierIpAddress;
    }

    // associate_public_ip_address - computed: true, optional: true, required: false
    private _associatePublicIpAddress?: boolean | cdktn.IResolvable; 
    public get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    public set associatePublicIpAddress(value: boolean | cdktn.IResolvable) {
        this._associatePublicIpAddress = value;
    }
    public resetAssociatePublicIpAddress() {
        this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatePublicIpAddressInput() {
        return this._associatePublicIpAddress;
    }

    // connection_tracking_specification - computed: true, optional: true, required: false
    private _connectionTrackingSpecification = new ConnectionTrackingSpecificationPropertyOutputReference(this, "connection_tracking_specification");
    public get connectionTrackingSpecification() {
        return this._connectionTrackingSpecification;
    }
    public putConnectionTrackingSpecification(value: ConnectionTrackingSpecificationProperty) {
        this._connectionTrackingSpecification.internalValue = value;
    }
    public resetConnectionTrackingSpecification() {
        this._connectionTrackingSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTrackingSpecificationInput() {
        return this._connectionTrackingSpecification.internalValue;
    }

    // delete_on_termination - computed: true, optional: true, required: false
    private _deleteOnTermination?: boolean | cdktn.IResolvable; 
    public get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
        this._deleteOnTermination = value;
    }
    public resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteOnTerminationInput() {
        return this._deleteOnTermination;
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

    // ena_srd_specification - computed: true, optional: true, required: false
    private _enaSrdSpecification = new EnaSrdSpecificationPropertyOutputReference(this, "ena_srd_specification");
    public get enaSrdSpecification() {
        return this._enaSrdSpecification;
    }
    public putEnaSrdSpecification(value: EnaSrdSpecificationProperty) {
        this._enaSrdSpecification.internalValue = value;
    }
    public resetEnaSrdSpecification() {
        this._enaSrdSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enaSrdSpecificationInput() {
        return this._enaSrdSpecification.internalValue;
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

    // interface_type - computed: true, optional: true, required: false
    private _interfaceType?: string; 
    public get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    public set interfaceType(value: string) {
        this._interfaceType = value;
    }
    public resetInterfaceType() {
        this._interfaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceTypeInput() {
        return this._interfaceType;
    }

    // ipv_4_prefix_count - computed: true, optional: true, required: false
    private _ipv4PrefixCount?: number; 
    public get ipv4PrefixCount() {
        return this.getNumberAttribute('ipv_4_prefix_count');
    }
    public set ipv4PrefixCount(value: number) {
        this._ipv4PrefixCount = value;
    }
    public resetIpv4PrefixCount() {
        this._ipv4PrefixCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixCountInput() {
        return this._ipv4PrefixCount;
    }

    // ipv_4_prefixes - computed: true, optional: true, required: false
    private _ipv4Prefixes = new Ipv4PrefixSpecificationPropertyList(this, "ipv_4_prefixes", false);
    public get ipv4Prefixes() {
        return this._ipv4Prefixes;
    }
    public putIpv4Prefixes(value: Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable) {
        this._ipv4Prefixes.internalValue = value;
    }
    public resetIpv4Prefixes() {
        this._ipv4Prefixes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixesInput() {
        return this._ipv4Prefixes.internalValue;
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

    // ipv_6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses = new Ipv6AddPropertyList(this, "ipv_6_addresses", false);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: Ipv6AddProperty[] | cdktn.IResolvable) {
        this._ipv6Addresses.internalValue = value;
    }
    public resetIpv6Addresses() {
        this._ipv6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
        return this._ipv6Addresses.internalValue;
    }

    // ipv_6_prefix_count - computed: true, optional: true, required: false
    private _ipv6PrefixCount?: number; 
    public get ipv6PrefixCount() {
        return this.getNumberAttribute('ipv_6_prefix_count');
    }
    public set ipv6PrefixCount(value: number) {
        this._ipv6PrefixCount = value;
    }
    public resetIpv6PrefixCount() {
        this._ipv6PrefixCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixCountInput() {
        return this._ipv6PrefixCount;
    }

    // ipv_6_prefixes - computed: true, optional: true, required: false
    private _ipv6Prefixes = new Ipv6PrefixSpecificationPropertyList(this, "ipv_6_prefixes", false);
    public get ipv6Prefixes() {
        return this._ipv6Prefixes;
    }
    public putIpv6Prefixes(value: Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable) {
        this._ipv6Prefixes.internalValue = value;
    }
    public resetIpv6Prefixes() {
        this._ipv6Prefixes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixesInput() {
        return this._ipv6Prefixes.internalValue;
    }

    // network_card_index - computed: true, optional: true, required: false
    private _networkCardIndex?: number; 
    public get networkCardIndex() {
        return this.getNumberAttribute('network_card_index');
    }
    public set networkCardIndex(value: number) {
        this._networkCardIndex = value;
    }
    public resetNetworkCardIndex() {
        this._networkCardIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkCardIndexInput() {
        return this._networkCardIndex;
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // primary_ipv_6 - computed: true, optional: true, required: false
    private _primaryIpv6?: boolean | cdktn.IResolvable; 
    public get primaryIpv6() {
        return this.getBooleanAttribute('primary_ipv_6');
    }
    public set primaryIpv6(value: boolean | cdktn.IResolvable) {
        this._primaryIpv6 = value;
    }
    public resetPrimaryIpv6() {
        this._primaryIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryIpv6Input() {
        return this._primaryIpv6;
    }

    // private_ip_address - computed: true, optional: true, required: false
    private _privateIpAddress?: string; 
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    public set privateIpAddress(value: string) {
        this._privateIpAddress = value;
    }
    public resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressInput() {
        return this._privateIpAddress;
    }

    // private_ip_addresses - computed: true, optional: true, required: false
    private _privateIpAddresses = new PrivateIpAddPropertyList(this, "private_ip_addresses", false);
    public get privateIpAddresses() {
        return this._privateIpAddresses;
    }
    public putPrivateIpAddresses(value: PrivateIpAddProperty[] | cdktn.IResolvable) {
        this._privateIpAddresses.internalValue = value;
    }
    public resetPrivateIpAddresses() {
        this._privateIpAddresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressesInput() {
        return this._privateIpAddresses.internalValue;
    }

    // secondary_private_ip_address_count - computed: true, optional: true, required: false
    private _secondaryPrivateIpAddressCount?: number; 
    public get secondaryPrivateIpAddressCount() {
        return this.getNumberAttribute('secondary_private_ip_address_count');
    }
    public set secondaryPrivateIpAddressCount(value: number) {
        this._secondaryPrivateIpAddressCount = value;
    }
    public resetSecondaryPrivateIpAddressCount() {
        this._secondaryPrivateIpAddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryPrivateIpAddressCountInput() {
        return this._secondaryPrivateIpAddressCount;
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

export class NetworkInterfacePropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkInterfaceProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkInterfacePropertyOutputReference {
        return new NetworkInterfacePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlacementProperty {
    /**
    * The affinity setting for an instance on a Dedicated Host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#affinity CcLaunchTemplate#affinity}
    */
    readonly affinity?: string;
    /**
    * The Availability Zone for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#availability_zone CcLaunchTemplate#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The Group Id of a placement group. You must specify the Placement Group *Group Id* to launch an instance in a shared placement group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#group_id CcLaunchTemplate#group_id}
    */
    readonly groupId?: string;
    /**
    * The name of the placement group for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#group_name CcLaunchTemplate#group_name}
    */
    readonly groupName?: string;
    /**
    * The ID of the Dedicated Host for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#host_id CcLaunchTemplate#host_id}
    */
    readonly hostId?: string;
    /**
    * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the *Tenancy* parameter or set it to ``host``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#host_resource_group_arn CcLaunchTemplate#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * The number of the partition the instance should launch in. Valid only if the placement group strategy is set to ``partition``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#partition_number CcLaunchTemplate#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Reserved for future use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#spread_domain CcLaunchTemplate#spread_domain}
    */
    readonly spreadDomain?: string;
    /**
    * The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tenancy CcLaunchTemplate#tenancy}
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
        if (this._affinity !== undefined) {
            hasAnyValues = true;
            internalValueResult.affinity = this._affinity;
        }
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
        if (this._hostId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostId = this._hostId;
        }
        if (this._hostResourceGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostResourceGroupArn = this._hostResourceGroupArn;
        }
        if (this._partitionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionNumber = this._partitionNumber;
        }
        if (this._spreadDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.spreadDomain = this._spreadDomain;
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
            this._affinity = undefined;
            this._availabilityZone = undefined;
            this._groupId = undefined;
            this._groupName = undefined;
            this._hostId = undefined;
            this._hostResourceGroupArn = undefined;
            this._partitionNumber = undefined;
            this._spreadDomain = undefined;
            this._tenancy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._affinity = value.affinity;
            this._availabilityZone = value.availabilityZone;
            this._groupId = value.groupId;
            this._groupName = value.groupName;
            this._hostId = value.hostId;
            this._hostResourceGroupArn = value.hostResourceGroupArn;
            this._partitionNumber = value.partitionNumber;
            this._spreadDomain = value.spreadDomain;
            this._tenancy = value.tenancy;
        }
    }

    // affinity - computed: true, optional: true, required: false
    private _affinity?: string; 
    public get affinity() {
        return this.getStringAttribute('affinity');
    }
    public set affinity(value: string) {
        this._affinity = value;
    }
    public resetAffinity() {
        this._affinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get affinityInput() {
        return this._affinity;
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

    // host_id - computed: true, optional: true, required: false
    private _hostId?: string; 
    public get hostId() {
        return this.getStringAttribute('host_id');
    }
    public set hostId(value: string) {
        this._hostId = value;
    }
    public resetHostId() {
        this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
        return this._hostId;
    }

    // host_resource_group_arn - computed: true, optional: true, required: false
    private _hostResourceGroupArn?: string; 
    public get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    public set hostResourceGroupArn(value: string) {
        this._hostResourceGroupArn = value;
    }
    public resetHostResourceGroupArn() {
        this._hostResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostResourceGroupArnInput() {
        return this._hostResourceGroupArn;
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

    // spread_domain - computed: true, optional: true, required: false
    private _spreadDomain?: string; 
    public get spreadDomain() {
        return this.getStringAttribute('spread_domain');
    }
    public set spreadDomain(value: string) {
        this._spreadDomain = value;
    }
    public resetSpreadDomain() {
        this._spreadDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spreadDomainInput() {
        return this._spreadDomain;
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
export interface PrivateDnsNameOptionsProperty {
    /**
    * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#enable_resource_name_dns_a_record CcLaunchTemplate#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#enable_resource_name_dns_aaaa_record CcLaunchTemplate#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
    /**
    * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#hostname_type CcLaunchTemplate#hostname_type}
    */
    readonly hostnameType?: string;
}
export class PrivateDnsNameOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateDnsNameOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PrivateDnsNameOptionsProperty | cdktn.IResolvable | undefined) {
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
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#key CcLaunchTemplate#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#value CcLaunchTemplate#value}
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
    * The type of resource to tag. You can specify tags for the following resource types only: ``instance`` | ``volume`` | ``network-interface`` | ``spot-instances-request``. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.
    *  To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#resource_type CcLaunchTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * The tags to apply to the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tags CcLaunchTemplate#tags}
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
export interface LaunchTemplateDataProperty {
    /**
    * The block device mapping.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#block_device_mappings CcLaunchTemplate#block_device_mappings}
    */
    readonly blockDeviceMappings?: BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to ``open``, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#capacity_reservation_specification CcLaunchTemplate#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: CapacityReservationSpecificationProperty;
    /**
    * The CPU options for the instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#cpu_options CcLaunchTemplate#cpu_options}
    */
    readonly cpuOptions?: CpuOptionsProperty;
    /**
    * The credit option for CPU usage of the instance. Valid only for T instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#credit_specification CcLaunchTemplate#credit_specification}
    */
    readonly creditSpecification?: CreditSpecificationProperty;
    /**
    * Indicates whether to enable the instance for stop protection. For more information, see [Enable stop protection for your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#disable_api_stop CcLaunchTemplate#disable_api_stop}
    */
    readonly disableApiStop?: boolean | cdktn.IResolvable;
    /**
    * If you set this parameter to ``true``, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use [ModifyInstanceAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html). Alternatively, if you set ``InstanceInitiatedShutdownBehavior`` to ``terminate``, you can terminate the instance by running the shutdown command from the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#disable_api_termination CcLaunchTemplate#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ebs_optimized CcLaunchTemplate#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * Deprecated.
    *   Amazon Elastic Graphics reached end of life on January 8, 2024. For workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad, G4dn, or G5 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#elastic_gpu_specifications CcLaunchTemplate#elastic_gpu_specifications}
    */
    readonly elasticGpuSpecifications?: ElasticGpuSpecificationProperty[] | cdktn.IResolvable;
    /**
    * An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.
    *  You cannot specify accelerators from different generations in the same request.
    *   Starting April 15, 2023, AWS will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#elastic_inference_accelerators CcLaunchTemplate#elastic_inference_accelerators}
    */
    readonly elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see [What is Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the *Nitro Enclaves User Guide*.
    *  You can't enable AWS Nitro Enclaves and hibernation on the same instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#enclave_options CcLaunchTemplate#enclave_options}
    */
    readonly enclaveOptions?: EnclaveOptionsProperty;
    /**
    * Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#hibernation_options CcLaunchTemplate#hibernation_options}
    */
    readonly hibernationOptions?: HibernationOptionsProperty;
    /**
    * The name or Amazon Resource Name (ARN) of an IAM instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#iam_instance_profile CcLaunchTemplate#iam_instance_profile}
    */
    readonly iamInstanceProfile?: IamInstanceProfileProperty;
    /**
    * The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.
    *  Valid formats:
    *   +   ``ami-0ac394d6a3example`` 
    *   +   ``resolve:ssm:parameter-name`` 
    *   +   ``resolve:ssm:parameter-name:version-number`` 
    *   +   ``resolve:ssm:parameter-name:label`` 
    *   
    *  For more information, see [Use a Systems Manager parameter to find an AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#using-systems-manager-parameter-to-find-AMI) in the *Amazon Elastic Compute Cloud User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#image_id CcLaunchTemplate#image_id}
    */
    readonly imageId?: string;
    /**
    * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
    *  Default: ``stop``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_initiated_shutdown_behavior CcLaunchTemplate#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * The market (purchasing) option for the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_market_options CcLaunchTemplate#instance_market_options}
    */
    readonly instanceMarketOptions?: InstanceMarketOptionsProperty;
    /**
    * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
    *  You must specify ``VCpuCount`` and ``MemoryMiB``. All other attributes are optional. Any unspecified optional attribute is set to its default.
    *  When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
    *  To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
    *   +   ``AllowedInstanceTypes`` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
    *   +   ``ExcludedInstanceTypes`` - The instance types to exclude from the list, even if they match your specified attributes.
    *   
    *   If you specify ``InstanceRequirements``, you can't specify ``InstanceType``.
    *  Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) AWS CloudFormation resource, you can't specify ``InstanceRequirements``.
    *   For more information, see [Attribute-based instance type selection for EC2 Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html), [Attribute-based instance type selection for Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html), and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_requirements CcLaunchTemplate#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsProperty;
    /**
    * The instance type. For more information, see [Amazon EC2 instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
    *  If you specify ``InstanceType``, you can't specify ``InstanceRequirements``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#instance_type CcLaunchTemplate#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The ID of the kernel.
    *  We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User Provided Kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#kernel_id CcLaunchTemplate#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
    *   If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#key_name CcLaunchTemplate#key_name}
    */
    readonly keyName?: string;
    /**
    * The license configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#license_specifications CcLaunchTemplate#license_specifications}
    */
    readonly licenseSpecifications?: LicenseSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The maintenance options of your instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#maintenance_options CcLaunchTemplate#maintenance_options}
    */
    readonly maintenanceOptions?: MaintenanceOptionsProperty;
    /**
    * The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#metadata_options CcLaunchTemplate#metadata_options}
    */
    readonly metadataOptions?: MetadataOptionsProperty;
    /**
    * The monitoring for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#monitoring CcLaunchTemplate#monitoring}
    */
    readonly monitoring?: MonitoringProperty;
    /**
    * The network interfaces for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#network_interfaces CcLaunchTemplate#network_interfaces}
    */
    readonly networkInterfaces?: NetworkInterfaceProperty[] | cdktn.IResolvable;
    /**
    * The placement for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#placement CcLaunchTemplate#placement}
    */
    readonly placement?: PlacementProperty;
    /**
    * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#private_dns_name_options CcLaunchTemplate#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: PrivateDnsNameOptionsProperty;
    /**
    * The ID of the RAM disk.
    *   We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#ram_disk_id CcLaunchTemplate#ram_disk_id}
    */
    readonly ramDiskId?: string;
    /**
    * The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.
    *  If you specify a network interface, you must specify any security groups as part of the network interface instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#security_group_ids CcLaunchTemplate#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The names of the security groups. For a nondefault VPC, you must use security group IDs instead.
    *  If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#security_groups CcLaunchTemplate#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The tags to apply to the resources that are created during instance launch.
    *  To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
    *  To tag the launch template itself, use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tag_specifications CcLaunchTemplate#tag_specifications}
    */
    readonly tagSpecifications?: TagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see [Run commands on your Amazon EC2 instance at launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) in the *Amazon EC2 User Guide*.
    *  If you are creating the launch template for use with BATCH, the user data must be provided in the [MIME multi-part archive format](https://docs.aws.amazon.com/https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see [Amazon EC2 user data in launch templates](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#user_data CcLaunchTemplate#user_data}
    */
    readonly userData?: string;
}
export class LaunchTemplateDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LaunchTemplateDataProperty | cdktn.IResolvable | undefined {
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
        if (this._disableApiTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableApiTermination = this._disableApiTermination;
        }
        if (this._ebsOptimized !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsOptimized = this._ebsOptimized;
        }
        if (this._elasticGpuSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticGpuSpecifications = this._elasticGpuSpecifications?.internalValue;
        }
        if (this._elasticInferenceAccelerators?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticInferenceAccelerators = this._elasticInferenceAccelerators?.internalValue;
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
        if (this._instanceInitiatedShutdownBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInitiatedShutdownBehavior = this._instanceInitiatedShutdownBehavior;
        }
        if (this._instanceMarketOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMarketOptions = this._instanceMarketOptions?.internalValue;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._kernelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kernelId = this._kernelId;
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
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._privateDnsNameOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateDnsNameOptions = this._privateDnsNameOptions?.internalValue;
        }
        if (this._ramDiskId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ramDiskId = this._ramDiskId;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
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

    public set internalValue(value: LaunchTemplateDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = undefined;
            this._capacityReservationSpecification.internalValue = undefined;
            this._cpuOptions.internalValue = undefined;
            this._creditSpecification.internalValue = undefined;
            this._disableApiStop = undefined;
            this._disableApiTermination = undefined;
            this._ebsOptimized = undefined;
            this._elasticGpuSpecifications.internalValue = undefined;
            this._elasticInferenceAccelerators.internalValue = undefined;
            this._enclaveOptions.internalValue = undefined;
            this._hibernationOptions.internalValue = undefined;
            this._iamInstanceProfile.internalValue = undefined;
            this._imageId = undefined;
            this._instanceInitiatedShutdownBehavior = undefined;
            this._instanceMarketOptions.internalValue = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceType = undefined;
            this._kernelId = undefined;
            this._keyName = undefined;
            this._licenseSpecifications.internalValue = undefined;
            this._maintenanceOptions.internalValue = undefined;
            this._metadataOptions.internalValue = undefined;
            this._monitoring.internalValue = undefined;
            this._networkInterfaces.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._privateDnsNameOptions.internalValue = undefined;
            this._ramDiskId = undefined;
            this._securityGroupIds = undefined;
            this._securityGroups = undefined;
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
            this._disableApiTermination = value.disableApiTermination;
            this._ebsOptimized = value.ebsOptimized;
            this._elasticGpuSpecifications.internalValue = value.elasticGpuSpecifications;
            this._elasticInferenceAccelerators.internalValue = value.elasticInferenceAccelerators;
            this._enclaveOptions.internalValue = value.enclaveOptions;
            this._hibernationOptions.internalValue = value.hibernationOptions;
            this._iamInstanceProfile.internalValue = value.iamInstanceProfile;
            this._imageId = value.imageId;
            this._instanceInitiatedShutdownBehavior = value.instanceInitiatedShutdownBehavior;
            this._instanceMarketOptions.internalValue = value.instanceMarketOptions;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceType = value.instanceType;
            this._kernelId = value.kernelId;
            this._keyName = value.keyName;
            this._licenseSpecifications.internalValue = value.licenseSpecifications;
            this._maintenanceOptions.internalValue = value.maintenanceOptions;
            this._metadataOptions.internalValue = value.metadataOptions;
            this._monitoring.internalValue = value.monitoring;
            this._networkInterfaces.internalValue = value.networkInterfaces;
            this._placement.internalValue = value.placement;
            this._privateDnsNameOptions.internalValue = value.privateDnsNameOptions;
            this._ramDiskId = value.ramDiskId;
            this._securityGroupIds = value.securityGroupIds;
            this._securityGroups = value.securityGroups;
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
    private _cpuOptions = new CpuOptionsPropertyOutputReference(this, "cpu_options");
    public get cpuOptions() {
        return this._cpuOptions;
    }
    public putCpuOptions(value: CpuOptionsProperty) {
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
    private _creditSpecification = new CreditSpecificationPropertyOutputReference(this, "credit_specification");
    public get creditSpecification() {
        return this._creditSpecification;
    }
    public putCreditSpecification(value: CreditSpecificationProperty) {
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

    // disable_api_termination - computed: true, optional: true, required: false
    private _disableApiTermination?: boolean | cdktn.IResolvable; 
    public get disableApiTermination() {
        return this.getBooleanAttribute('disable_api_termination');
    }
    public set disableApiTermination(value: boolean | cdktn.IResolvable) {
        this._disableApiTermination = value;
    }
    public resetDisableApiTermination() {
        this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableApiTerminationInput() {
        return this._disableApiTermination;
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

    // elastic_gpu_specifications - computed: true, optional: true, required: false
    private _elasticGpuSpecifications = new ElasticGpuSpecificationPropertyList(this, "elastic_gpu_specifications", false);
    public get elasticGpuSpecifications() {
        return this._elasticGpuSpecifications;
    }
    public putElasticGpuSpecifications(value: ElasticGpuSpecificationProperty[] | cdktn.IResolvable) {
        this._elasticGpuSpecifications.internalValue = value;
    }
    public resetElasticGpuSpecifications() {
        this._elasticGpuSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticGpuSpecificationsInput() {
        return this._elasticGpuSpecifications.internalValue;
    }

    // elastic_inference_accelerators - computed: true, optional: true, required: false
    private _elasticInferenceAccelerators = new LaunchTemplateElasticInferenceAcceleratorPropertyList(this, "elastic_inference_accelerators", false);
    public get elasticInferenceAccelerators() {
        return this._elasticInferenceAccelerators;
    }
    public putElasticInferenceAccelerators(value: LaunchTemplateElasticInferenceAcceleratorProperty[] | cdktn.IResolvable) {
        this._elasticInferenceAccelerators.internalValue = value;
    }
    public resetElasticInferenceAccelerators() {
        this._elasticInferenceAccelerators.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticInferenceAcceleratorsInput() {
        return this._elasticInferenceAccelerators.internalValue;
    }

    // enclave_options - computed: true, optional: true, required: false
    private _enclaveOptions = new EnclaveOptionsPropertyOutputReference(this, "enclave_options");
    public get enclaveOptions() {
        return this._enclaveOptions;
    }
    public putEnclaveOptions(value: EnclaveOptionsProperty) {
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
    private _hibernationOptions = new HibernationOptionsPropertyOutputReference(this, "hibernation_options");
    public get hibernationOptions() {
        return this._hibernationOptions;
    }
    public putHibernationOptions(value: HibernationOptionsProperty) {
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
    private _iamInstanceProfile = new IamInstanceProfilePropertyOutputReference(this, "iam_instance_profile");
    public get iamInstanceProfile() {
        return this._iamInstanceProfile;
    }
    public putIamInstanceProfile(value: IamInstanceProfileProperty) {
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

    // instance_initiated_shutdown_behavior - computed: true, optional: true, required: false
    private _instanceInitiatedShutdownBehavior?: string; 
    public get instanceInitiatedShutdownBehavior() {
        return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    public set instanceInitiatedShutdownBehavior(value: string) {
        this._instanceInitiatedShutdownBehavior = value;
    }
    public resetInstanceInitiatedShutdownBehavior() {
        this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceInitiatedShutdownBehaviorInput() {
        return this._instanceInitiatedShutdownBehavior;
    }

    // instance_market_options - computed: true, optional: true, required: false
    private _instanceMarketOptions = new InstanceMarketOptionsPropertyOutputReference(this, "instance_market_options");
    public get instanceMarketOptions() {
        return this._instanceMarketOptions;
    }
    public putInstanceMarketOptions(value: InstanceMarketOptionsProperty) {
        this._instanceMarketOptions.internalValue = value;
    }
    public resetInstanceMarketOptions() {
        this._instanceMarketOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMarketOptionsInput() {
        return this._instanceMarketOptions.internalValue;
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

    // kernel_id - computed: true, optional: true, required: false
    private _kernelId?: string; 
    public get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    public set kernelId(value: string) {
        this._kernelId = value;
    }
    public resetKernelId() {
        this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kernelIdInput() {
        return this._kernelId;
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

    // maintenance_options - computed: true, optional: true, required: false
    private _maintenanceOptions = new MaintenanceOptionsPropertyOutputReference(this, "maintenance_options");
    public get maintenanceOptions() {
        return this._maintenanceOptions;
    }
    public putMaintenanceOptions(value: MaintenanceOptionsProperty) {
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
    private _metadataOptions = new MetadataOptionsPropertyOutputReference(this, "metadata_options");
    public get metadataOptions() {
        return this._metadataOptions;
    }
    public putMetadataOptions(value: MetadataOptionsProperty) {
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
    private _monitoring = new MonitoringPropertyOutputReference(this, "monitoring");
    public get monitoring() {
        return this._monitoring;
    }
    public putMonitoring(value: MonitoringProperty) {
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
    private _networkInterfaces = new NetworkInterfacePropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }
    public putNetworkInterfaces(value: NetworkInterfaceProperty[] | cdktn.IResolvable) {
        this._networkInterfaces.internalValue = value;
    }
    public resetNetworkInterfaces() {
        this._networkInterfaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfacesInput() {
        return this._networkInterfaces.internalValue;
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
    private _privateDnsNameOptions = new PrivateDnsNameOptionsPropertyOutputReference(this, "private_dns_name_options");
    public get privateDnsNameOptions() {
        return this._privateDnsNameOptions;
    }
    public putPrivateDnsNameOptions(value: PrivateDnsNameOptionsProperty) {
        this._privateDnsNameOptions.internalValue = value;
    }
    public resetPrivateDnsNameOptions() {
        this._privateDnsNameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsNameOptionsInput() {
        return this._privateDnsNameOptions.internalValue;
    }

    // ram_disk_id - computed: true, optional: true, required: false
    private _ramDiskId?: string; 
    public get ramDiskId() {
        return this.getStringAttribute('ram_disk_id');
    }
    public set ramDiskId(value: string) {
        this._ramDiskId = value;
    }
    public resetRamDiskId() {
        this._ramDiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ramDiskIdInput() {
        return this._ramDiskId;
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
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#key CcLaunchTemplate#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#value CcLaunchTemplate#value}
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
export interface LaunchTemplateTagSpecificationProperty {
    /**
    * The type of resource. To tag a launch template, ``ResourceType`` must be ``launch-template``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#resource_type CcLaunchTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * The tags for the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_launch_template#tags CcLaunchTemplate#tags}
    */
    readonly tags?: TagsProperty[] | cdktn.IResolvable;
}
export class LaunchTemplateTagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateTagSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LaunchTemplateTagSpecificationProperty | cdktn.IResolvable | undefined) {
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
    private _tags = new TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagsProperty[] | cdktn.IResolvable) {
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

export class LaunchTemplateTagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateTagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateTagSpecificationPropertyOutputReference {
        return new LaunchTemplateTagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
