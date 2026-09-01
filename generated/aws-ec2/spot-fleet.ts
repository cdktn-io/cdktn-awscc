// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSpotFleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_fleet_request_config_data CcSpotFleet#spot_fleet_request_config_data}
    */
    readonly spotFleetRequestConfigData: CcSpotFleet.SpotFleetRequestConfigDataProperty;
    /**
    * The tags to specify in SpotFleetRequestConfigData
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tags CcSpotFleet#tags}
    */
    readonly tags?: CcSpotFleet.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet awscc_ec2_spot_fleet}
*/
export class CcSpotFleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_spot_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSpotFleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSpotFleet to import
    * @param importFromId The id of the existing CcSpotFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSpotFleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_spot_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet awscc_ec2_spot_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSpotFleetProps
    */
    public constructor(scope: Construct, id: string, config: CcSpotFleetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_spot_fleet',
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
        this._spotFleetRequestConfigData.internalValue = config.spotFleetRequestConfigData;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // spot_fleet_id - computed: true, optional: false, required: false
    public get spotFleetId() {
        return this.getStringAttribute('spot_fleet_id');
    }

    // spot_fleet_request_config_data - computed: false, optional: false, required: true
    private _spotFleetRequestConfigData = new CcSpotFleet.SpotFleetRequestConfigDataPropertyOutputReference(this, "spot_fleet_request_config_data");
    public get spotFleetRequestConfigData() {
        return this._spotFleetRequestConfigData;
    }
    public putSpotFleetRequestConfigData(value: CcSpotFleet.SpotFleetRequestConfigDataProperty) {
        this._spotFleetRequestConfigData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get spotFleetRequestConfigDataInput() {
        return this._spotFleetRequestConfigData.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSpotFleet.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSpotFleet.TagsProperty[] | cdktn.IResolvable) {
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
            spot_fleet_request_config_data: ccSpotFleetSpotFleetRequestConfigDataPropertyToTerraform(this._spotFleetRequestConfigData.internalValue),
            tags: cdktn.listMapper(ccSpotFleetTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            spot_fleet_request_config_data: {
                value: ccSpotFleetSpotFleetRequestConfigDataPropertyToHclTerraform(this._spotFleetRequestConfigData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpotFleet.SpotFleetRequestConfigDataProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSpotFleetTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSpotFleet.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSpotFleetEbsBlockDevicePropertyToTerraform(struct?: CcSpotFleet.EbsBlockDeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccSpotFleetEbsBlockDevicePropertyToHclTerraform(struct?: CcSpotFleet.EbsBlockDeviceProperty | cdktn.IResolvable): any {
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
        snapshot_id: {
            value: cdktn.stringToHclTerraform(struct!.snapshotId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSpotFleetBlockDeviceMappingPropertyToTerraform(struct?: CcSpotFleet.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccSpotFleetEbsBlockDevicePropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccSpotFleetBlockDeviceMappingPropertyToHclTerraform(struct?: CcSpotFleet.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccSpotFleetEbsBlockDevicePropertyToHclTerraform(struct!.ebs),
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


export function ccSpotFleetIamInstanceProfileSpecificationPropertyToTerraform(struct?: CcSpotFleet.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccSpotFleetIamInstanceProfileSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetAcceleratorCountRequestPropertyToTerraform(struct?: CcSpotFleet.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetAcceleratorCountRequestPropertyToHclTerraform(struct?: CcSpotFleet.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct?: CcSpotFleet.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct?: CcSpotFleet.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct?: CcSpotFleet.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct?: CcSpotFleet.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetPerformanceFactorReferenceRequestPropertyToTerraform(struct?: CcSpotFleet.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_family: cdktn.stringToTerraform(struct!.instanceFamily),
    }
}


export function ccSpotFleetPerformanceFactorReferenceRequestPropertyToHclTerraform(struct?: CcSpotFleet.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetCpuPerformanceFactorRequestPropertyToTerraform(struct?: CcSpotFleet.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        references: cdktn.listMapper(ccSpotFleetPerformanceFactorReferenceRequestPropertyToTerraform, false)(struct!.references),
    }
}


export function ccSpotFleetCpuPerformanceFactorRequestPropertyToHclTerraform(struct?: CcSpotFleet.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        references: {
            value: cdktn.listMapperHcl(ccSpotFleetPerformanceFactorReferenceRequestPropertyToHclTerraform, false)(struct!.references),
            isBlock: true,
            type: "list",
            storageClassType: "PerformanceFactorReferenceRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetBaselinePerformanceFactorsRequestPropertyToTerraform(struct?: CcSpotFleet.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: ccSpotFleetCpuPerformanceFactorRequestPropertyToTerraform(struct!.cpu),
    }
}


export function ccSpotFleetBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct?: CcSpotFleet.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: ccSpotFleetCpuPerformanceFactorRequestPropertyToHclTerraform(struct!.cpu),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuPerformanceFactorRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetMemoryGiBPerVCpuRequestPropertyToTerraform(struct?: CcSpotFleet.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct?: CcSpotFleet.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetMemoryMiBRequestPropertyToTerraform(struct?: CcSpotFleet.MemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetMemoryMiBRequestPropertyToHclTerraform(struct?: CcSpotFleet.MemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetNetworkBandwidthGbpsRequestPropertyToTerraform(struct?: CcSpotFleet.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct?: CcSpotFleet.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetNetworkInterfaceCountRequestPropertyToTerraform(struct?: CcSpotFleet.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetNetworkInterfaceCountRequestPropertyToHclTerraform(struct?: CcSpotFleet.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetTotalLocalStorageGBRequestPropertyToTerraform(struct?: CcSpotFleet.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetTotalLocalStorageGBRequestPropertyToHclTerraform(struct?: CcSpotFleet.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetVCpuCountRangeRequestPropertyToTerraform(struct?: CcSpotFleet.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetVCpuCountRangeRequestPropertyToHclTerraform(struct?: CcSpotFleet.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetInstanceRequirementsRequestPropertyToTerraform(struct?: CcSpotFleet.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccSpotFleetAcceleratorCountRequestPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccSpotFleetAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccSpotFleetBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        baseline_performance_factors: ccSpotFleetBaselinePerformanceFactorsRequestPropertyToTerraform(struct!.baselinePerformanceFactors),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccSpotFleetMemoryGiBPerVCpuRequestPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccSpotFleetMemoryMiBRequestPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccSpotFleetNetworkBandwidthGbpsRequestPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccSpotFleetNetworkInterfaceCountRequestPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_encryption_in_transit: cdktn.booleanToTerraform(struct!.requireEncryptionInTransit),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccSpotFleetTotalLocalStorageGBRequestPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccSpotFleetVCpuCountRangeRequestPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccSpotFleetInstanceRequirementsRequestPropertyToHclTerraform(struct?: CcSpotFleet.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccSpotFleetAcceleratorCountRequestPropertyToHclTerraform(struct!.acceleratorCount),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCountRequestProperty",
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
            value: ccSpotFleetAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorTotalMemoryMiBRequestProperty",
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
            value: ccSpotFleetBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsRequestProperty",
        },
        baseline_performance_factors: {
            value: ccSpotFleetBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct!.baselinePerformanceFactors),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselinePerformanceFactorsRequestProperty",
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
            value: ccSpotFleetMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuRequestProperty",
        },
        memory_mi_b: {
            value: ccSpotFleetMemoryMiBRequestPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBRequestProperty",
        },
        network_bandwidth_gbps: {
            value: ccSpotFleetNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsRequestProperty",
        },
        network_interface_count: {
            value: ccSpotFleetNetworkInterfaceCountRequestPropertyToHclTerraform(struct!.networkInterfaceCount),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkInterfaceCountRequestProperty",
        },
        on_demand_max_price_percentage_over_lowest_price: {
            value: cdktn.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require_encryption_in_transit: {
            value: cdktn.booleanToHclTerraform(struct!.requireEncryptionInTransit),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
            value: ccSpotFleetTotalLocalStorageGBRequestPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGBRequestProperty",
        },
        v_cpu_count: {
            value: ccSpotFleetVCpuCountRangeRequestPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountRangeRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotFleetMonitoringPropertyToTerraform(struct?: CcSpotFleet.SpotFleetMonitoringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccSpotFleetSpotFleetMonitoringPropertyToHclTerraform(struct?: CcSpotFleet.SpotFleetMonitoringProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetInstanceIpv6AddressPropertyToTerraform(struct?: CcSpotFleet.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccSpotFleetInstanceIpv6AddressPropertyToHclTerraform(struct?: CcSpotFleet.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetPrivateIpAddressSpecificationPropertyToTerraform(struct?: CcSpotFleet.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    }
}


export function ccSpotFleetPrivateIpAddressSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetInstanceNetworkInterfaceSpecificationPropertyToTerraform(struct?: CcSpotFleet.InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        associate_public_ip_address: cdktn.booleanToTerraform(struct!.associatePublicIpAddress),
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        description: cdktn.stringToTerraform(struct!.description),
        device_index: cdktn.numberToTerraform(struct!.deviceIndex),
        groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
        ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
        ipv_6_addresses: cdktn.listMapper(ccSpotFleetInstanceIpv6AddressPropertyToTerraform, false)(struct!.ipv6Addresses),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        private_ip_addresses: cdktn.listMapper(ccSpotFleetPrivateIpAddressSpecificationPropertyToTerraform, false)(struct!.privateIpAddresses),
        secondary_private_ip_address_count: cdktn.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccSpotFleetInstanceNetworkInterfaceSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        associate_public_ip_address: {
            value: cdktn.booleanToHclTerraform(struct!.associatePublicIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
        groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ipv_6_address_count: {
            value: cdktn.numberToHclTerraform(struct!.ipv6AddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv_6_addresses: {
            value: cdktn.listMapperHcl(ccSpotFleetInstanceIpv6AddressPropertyToHclTerraform, false)(struct!.ipv6Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "InstanceIpv6AddressPropertyList",
        },
        network_interface_id: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_ip_addresses: {
            value: cdktn.listMapperHcl(ccSpotFleetPrivateIpAddressSpecificationPropertyToHclTerraform, false)(struct!.privateIpAddresses),
            isBlock: true,
            type: "list",
            storageClassType: "PrivateIpAddressSpecificationPropertyList",
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


export function ccSpotFleetSpotPlacementPropertyToTerraform(struct?: CcSpotFleet.SpotPlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        tenancy: cdktn.stringToTerraform(struct!.tenancy),
    }
}


export function ccSpotFleetSpotPlacementPropertyToHclTerraform(struct?: CcSpotFleet.SpotPlacementProperty | cdktn.IResolvable): any {
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
        availability_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
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


export function ccSpotFleetGroupIdentifierPropertyToTerraform(struct?: CcSpotFleet.GroupIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_id: cdktn.stringToTerraform(struct!.groupId),
    }
}


export function ccSpotFleetGroupIdentifierPropertyToHclTerraform(struct?: CcSpotFleet.GroupIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_id: {
            value: cdktn.stringToHclTerraform(struct!.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetTagPropertyToTerraform(struct?: CcSpotFleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpotFleetTagPropertyToHclTerraform(struct?: CcSpotFleet.TagProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetSpotFleetTagSpecificationPropertyToTerraform(struct?: CcSpotFleet.SpotFleetTagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccSpotFleetTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccSpotFleetSpotFleetTagSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.SpotFleetTagSpecificationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccSpotFleetTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotFleetLaunchSpecificationPropertyToTerraform(struct?: CcSpotFleet.SpotFleetLaunchSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_device_mappings: cdktn.listMapper(ccSpotFleetBlockDeviceMappingPropertyToTerraform, false)(struct!.blockDeviceMappings),
        ebs_optimized: cdktn.booleanToTerraform(struct!.ebsOptimized),
        iam_instance_profile: ccSpotFleetIamInstanceProfileSpecificationPropertyToTerraform(struct!.iamInstanceProfile),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_requirements: ccSpotFleetInstanceRequirementsRequestPropertyToTerraform(struct!.instanceRequirements),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        kernel_id: cdktn.stringToTerraform(struct!.kernelId),
        key_name: cdktn.stringToTerraform(struct!.keyName),
        monitoring: ccSpotFleetSpotFleetMonitoringPropertyToTerraform(struct!.monitoring),
        network_interfaces: cdktn.listMapper(ccSpotFleetInstanceNetworkInterfaceSpecificationPropertyToTerraform, false)(struct!.networkInterfaces),
        placement: ccSpotFleetSpotPlacementPropertyToTerraform(struct!.placement),
        ramdisk_id: cdktn.stringToTerraform(struct!.ramdiskId),
        security_groups: cdktn.listMapper(ccSpotFleetGroupIdentifierPropertyToTerraform, false)(struct!.securityGroups),
        spot_price: cdktn.stringToTerraform(struct!.spotPrice),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
        tag_specifications: cdktn.listMapper(ccSpotFleetSpotFleetTagSpecificationPropertyToTerraform, false)(struct!.tagSpecifications),
        user_data: cdktn.stringToTerraform(struct!.userData),
        weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    }
}


export function ccSpotFleetSpotFleetLaunchSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.SpotFleetLaunchSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_device_mappings: {
            value: cdktn.listMapperHcl(ccSpotFleetBlockDeviceMappingPropertyToHclTerraform, false)(struct!.blockDeviceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "BlockDeviceMappingPropertyList",
        },
        ebs_optimized: {
            value: cdktn.booleanToHclTerraform(struct!.ebsOptimized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iam_instance_profile: {
            value: ccSpotFleetIamInstanceProfileSpecificationPropertyToHclTerraform(struct!.iamInstanceProfile),
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
        instance_requirements: {
            value: ccSpotFleetInstanceRequirementsRequestPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsRequestProperty",
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
        monitoring: {
            value: ccSpotFleetSpotFleetMonitoringPropertyToHclTerraform(struct!.monitoring),
            isBlock: true,
            type: "struct",
            storageClassType: "SpotFleetMonitoringProperty",
        },
        network_interfaces: {
            value: cdktn.listMapperHcl(ccSpotFleetInstanceNetworkInterfaceSpecificationPropertyToHclTerraform, false)(struct!.networkInterfaces),
            isBlock: true,
            type: "list",
            storageClassType: "InstanceNetworkInterfaceSpecificationPropertyList",
        },
        placement: {
            value: ccSpotFleetSpotPlacementPropertyToHclTerraform(struct!.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "SpotPlacementProperty",
        },
        ramdisk_id: {
            value: cdktn.stringToHclTerraform(struct!.ramdiskId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktn.listMapperHcl(ccSpotFleetGroupIdentifierPropertyToHclTerraform, false)(struct!.securityGroups),
            isBlock: true,
            type: "list",
            storageClassType: "GroupIdentifierPropertyList",
        },
        spot_price: {
            value: cdktn.stringToHclTerraform(struct!.spotPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_specifications: {
            value: cdktn.listMapperHcl(ccSpotFleetSpotFleetTagSpecificationPropertyToHclTerraform, false)(struct!.tagSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "SpotFleetTagSpecificationPropertyList",
        },
        user_data: {
            value: cdktn.stringToHclTerraform(struct!.userData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weighted_capacity: {
            value: cdktn.numberToHclTerraform(struct!.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetFleetLaunchTemplateSpecificationPropertyToTerraform(struct?: CcSpotFleet.FleetLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccSpotFleetFleetLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcSpotFleet.FleetLaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetAcceleratorCountPropertyToTerraform(struct?: CcSpotFleet.AcceleratorCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetAcceleratorCountPropertyToHclTerraform(struct?: CcSpotFleet.AcceleratorCountProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetAcceleratorTotalMemoryMiBPropertyToTerraform(struct?: CcSpotFleet.AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetAcceleratorTotalMemoryMiBPropertyToHclTerraform(struct?: CcSpotFleet.AcceleratorTotalMemoryMiBProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: CcSpotFleet.BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: CcSpotFleet.BaselineEbsBandwidthMbpsProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetReferencesPropertyToTerraform(struct?: CcSpotFleet.ReferencesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_family: cdktn.stringToTerraform(struct!.instanceFamily),
    }
}


export function ccSpotFleetReferencesPropertyToHclTerraform(struct?: CcSpotFleet.ReferencesProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetCpuPropertyToTerraform(struct?: CcSpotFleet.CpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        references: cdktn.listMapper(ccSpotFleetReferencesPropertyToTerraform, false)(struct!.references),
    }
}


export function ccSpotFleetCpuPropertyToHclTerraform(struct?: CcSpotFleet.CpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        references: {
            value: cdktn.listMapperHcl(ccSpotFleetReferencesPropertyToHclTerraform, false)(struct!.references),
            isBlock: true,
            type: "list",
            storageClassType: "ReferencesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetBaselinePerformanceFactorsPropertyToTerraform(struct?: CcSpotFleet.BaselinePerformanceFactorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: ccSpotFleetCpuPropertyToTerraform(struct!.cpu),
    }
}


export function ccSpotFleetBaselinePerformanceFactorsPropertyToHclTerraform(struct?: CcSpotFleet.BaselinePerformanceFactorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: ccSpotFleetCpuPropertyToHclTerraform(struct!.cpu),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetMemoryGiBPerVCpuPropertyToTerraform(struct?: CcSpotFleet.MemoryGiBPerVCpuProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetMemoryGiBPerVCpuPropertyToHclTerraform(struct?: CcSpotFleet.MemoryGiBPerVCpuProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetMemoryMiBPropertyToTerraform(struct?: CcSpotFleet.MemoryMiBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetMemoryMiBPropertyToHclTerraform(struct?: CcSpotFleet.MemoryMiBProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetNetworkBandwidthGbpsPropertyToTerraform(struct?: CcSpotFleet.NetworkBandwidthGbpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetNetworkBandwidthGbpsPropertyToHclTerraform(struct?: CcSpotFleet.NetworkBandwidthGbpsProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetNetworkInterfaceCountPropertyToTerraform(struct?: CcSpotFleet.NetworkInterfaceCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetNetworkInterfaceCountPropertyToHclTerraform(struct?: CcSpotFleet.NetworkInterfaceCountProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetTotalLocalStorageGbPropertyToTerraform(struct?: CcSpotFleet.TotalLocalStorageGbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetTotalLocalStorageGbPropertyToHclTerraform(struct?: CcSpotFleet.TotalLocalStorageGbProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetVCpuCountPropertyToTerraform(struct?: CcSpotFleet.VCpuCountProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccSpotFleetVCpuCountPropertyToHclTerraform(struct?: CcSpotFleet.VCpuCountProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetInstanceRequirementsPropertyToTerraform(struct?: CcSpotFleet.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccSpotFleetAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccSpotFleetAcceleratorTotalMemoryMiBPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccSpotFleetBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        baseline_performance_factors: ccSpotFleetBaselinePerformanceFactorsPropertyToTerraform(struct!.baselinePerformanceFactors),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccSpotFleetMemoryGiBPerVCpuPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccSpotFleetMemoryMiBPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccSpotFleetNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccSpotFleetNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_encryption_in_transit: cdktn.booleanToTerraform(struct!.requireEncryptionInTransit),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccSpotFleetTotalLocalStorageGbPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccSpotFleetVCpuCountPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccSpotFleetInstanceRequirementsPropertyToHclTerraform(struct?: CcSpotFleet.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccSpotFleetAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
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
            value: ccSpotFleetAcceleratorTotalMemoryMiBPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
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
            value: ccSpotFleetBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsProperty",
        },
        baseline_performance_factors: {
            value: ccSpotFleetBaselinePerformanceFactorsPropertyToHclTerraform(struct!.baselinePerformanceFactors),
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
            value: ccSpotFleetMemoryGiBPerVCpuPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuProperty",
        },
        memory_mi_b: {
            value: ccSpotFleetMemoryMiBPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBProperty",
        },
        network_bandwidth_gbps: {
            value: ccSpotFleetNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsProperty",
        },
        network_interface_count: {
            value: ccSpotFleetNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
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
        require_encryption_in_transit: {
            value: cdktn.booleanToHclTerraform(struct!.requireEncryptionInTransit),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
            value: ccSpotFleetTotalLocalStorageGbPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGbProperty",
        },
        v_cpu_count: {
            value: ccSpotFleetVCpuCountPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetLaunchTemplateOverridesPropertyToTerraform(struct?: CcSpotFleet.LaunchTemplateOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
        instance_requirements: ccSpotFleetInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        priority: cdktn.numberToTerraform(struct!.priority),
        spot_price: cdktn.stringToTerraform(struct!.spotPrice),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
        weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    }
}


export function ccSpotFleetLaunchTemplateOverridesPropertyToHclTerraform(struct?: CcSpotFleet.LaunchTemplateOverridesProperty | cdktn.IResolvable): any {
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
        availability_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_requirements: {
            value: ccSpotFleetInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
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
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_price: {
            value: cdktn.stringToHclTerraform(struct!.spotPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weighted_capacity: {
            value: cdktn.numberToHclTerraform(struct!.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetLaunchTemplateConfigPropertyToTerraform(struct?: CcSpotFleet.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_specification: ccSpotFleetFleetLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
        overrides: cdktn.listMapper(ccSpotFleetLaunchTemplateOverridesPropertyToTerraform, false)(struct!.overrides),
    }
}


export function ccSpotFleetLaunchTemplateConfigPropertyToHclTerraform(struct?: CcSpotFleet.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_specification: {
            value: ccSpotFleetFleetLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "FleetLaunchTemplateSpecificationProperty",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccSpotFleetLaunchTemplateOverridesPropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateOverridesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetClassicLoadBalancerPropertyToTerraform(struct?: CcSpotFleet.ClassicLoadBalancerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccSpotFleetClassicLoadBalancerPropertyToHclTerraform(struct?: CcSpotFleet.ClassicLoadBalancerProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetClassicLoadBalancersConfigPropertyToTerraform(struct?: CcSpotFleet.ClassicLoadBalancersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classic_load_balancers: cdktn.listMapper(ccSpotFleetClassicLoadBalancerPropertyToTerraform, false)(struct!.classicLoadBalancers),
    }
}


export function ccSpotFleetClassicLoadBalancersConfigPropertyToHclTerraform(struct?: CcSpotFleet.ClassicLoadBalancersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classic_load_balancers: {
            value: cdktn.listMapperHcl(ccSpotFleetClassicLoadBalancerPropertyToHclTerraform, false)(struct!.classicLoadBalancers),
            isBlock: true,
            type: "list",
            storageClassType: "ClassicLoadBalancerPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetTargetGroupPropertyToTerraform(struct?: CcSpotFleet.TargetGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccSpotFleetTargetGroupPropertyToHclTerraform(struct?: CcSpotFleet.TargetGroupProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetTargetGroupsConfigPropertyToTerraform(struct?: CcSpotFleet.TargetGroupsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_groups: cdktn.listMapper(ccSpotFleetTargetGroupPropertyToTerraform, false)(struct!.targetGroups),
    }
}


export function ccSpotFleetTargetGroupsConfigPropertyToHclTerraform(struct?: CcSpotFleet.TargetGroupsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_groups: {
            value: cdktn.listMapperHcl(ccSpotFleetTargetGroupPropertyToHclTerraform, false)(struct!.targetGroups),
            isBlock: true,
            type: "list",
            storageClassType: "TargetGroupPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetLoadBalancersConfigPropertyToTerraform(struct?: CcSpotFleet.LoadBalancersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classic_load_balancers_config: ccSpotFleetClassicLoadBalancersConfigPropertyToTerraform(struct!.classicLoadBalancersConfig),
        target_groups_config: ccSpotFleetTargetGroupsConfigPropertyToTerraform(struct!.targetGroupsConfig),
    }
}


export function ccSpotFleetLoadBalancersConfigPropertyToHclTerraform(struct?: CcSpotFleet.LoadBalancersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classic_load_balancers_config: {
            value: ccSpotFleetClassicLoadBalancersConfigPropertyToHclTerraform(struct!.classicLoadBalancersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClassicLoadBalancersConfigProperty",
        },
        target_groups_config: {
            value: ccSpotFleetTargetGroupsConfigPropertyToHclTerraform(struct!.targetGroupsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetGroupsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotCapacityRebalancePropertyToTerraform(struct?: CcSpotFleet.SpotCapacityRebalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replacement_strategy: cdktn.stringToTerraform(struct!.replacementStrategy),
        termination_delay: cdktn.numberToTerraform(struct!.terminationDelay),
    }
}


export function ccSpotFleetSpotCapacityRebalancePropertyToHclTerraform(struct?: CcSpotFleet.SpotCapacityRebalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replacement_strategy: {
            value: cdktn.stringToHclTerraform(struct!.replacementStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        termination_delay: {
            value: cdktn.numberToHclTerraform(struct!.terminationDelay),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotMaintenanceStrategiesPropertyToTerraform(struct?: CcSpotFleet.SpotMaintenanceStrategiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_rebalance: ccSpotFleetSpotCapacityRebalancePropertyToTerraform(struct!.capacityRebalance),
    }
}


export function ccSpotFleetSpotMaintenanceStrategiesPropertyToHclTerraform(struct?: CcSpotFleet.SpotMaintenanceStrategiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_rebalance: {
            value: ccSpotFleetSpotCapacityRebalancePropertyToHclTerraform(struct!.capacityRebalance),
            isBlock: true,
            type: "struct",
            storageClassType: "SpotCapacityRebalanceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsPropertyToTerraform(struct?: CcSpotFleet.SpotFleetRequestConfigDataTagSpecificationsTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsPropertyToHclTerraform(struct?: CcSpotFleet.SpotFleetRequestConfigDataTagSpecificationsTagsProperty | cdktn.IResolvable): any {
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


export function ccSpotFleetTagSpecificationsPropertyToTerraform(struct?: CcSpotFleet.TagSpecificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccSpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccSpotFleetTagSpecificationsPropertyToHclTerraform(struct?: CcSpotFleet.TagSpecificationsProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccSpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "SpotFleetRequestConfigDataTagSpecificationsTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSpotFleetSpotFleetRequestConfigDataPropertyToTerraform(struct?: CcSpotFleet.SpotFleetRequestConfigDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
        context: cdktn.stringToTerraform(struct!.context),
        excess_capacity_termination_policy: cdktn.stringToTerraform(struct!.excessCapacityTerminationPolicy),
        iam_fleet_role: cdktn.stringToTerraform(struct!.iamFleetRole),
        instance_interruption_behavior: cdktn.stringToTerraform(struct!.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktn.numberToTerraform(struct!.instancePoolsToUseCount),
        launch_specifications: cdktn.listMapper(ccSpotFleetSpotFleetLaunchSpecificationPropertyToTerraform, false)(struct!.launchSpecifications),
        launch_template_configs: cdktn.listMapper(ccSpotFleetLaunchTemplateConfigPropertyToTerraform, false)(struct!.launchTemplateConfigs),
        load_balancers_config: ccSpotFleetLoadBalancersConfigPropertyToTerraform(struct!.loadBalancersConfig),
        on_demand_allocation_strategy: cdktn.stringToTerraform(struct!.onDemandAllocationStrategy),
        on_demand_max_total_price: cdktn.stringToTerraform(struct!.onDemandMaxTotalPrice),
        on_demand_target_capacity: cdktn.numberToTerraform(struct!.onDemandTargetCapacity),
        replace_unhealthy_instances: cdktn.booleanToTerraform(struct!.replaceUnhealthyInstances),
        spot_maintenance_strategies: ccSpotFleetSpotMaintenanceStrategiesPropertyToTerraform(struct!.spotMaintenanceStrategies),
        spot_max_total_price: cdktn.stringToTerraform(struct!.spotMaxTotalPrice),
        spot_price: cdktn.stringToTerraform(struct!.spotPrice),
        tag_specifications: cdktn.listMapper(ccSpotFleetTagSpecificationsPropertyToTerraform, false)(struct!.tagSpecifications),
        target_capacity: cdktn.numberToTerraform(struct!.targetCapacity),
        target_capacity_unit_type: cdktn.stringToTerraform(struct!.targetCapacityUnitType),
        terminate_instances_with_expiration: cdktn.booleanToTerraform(struct!.terminateInstancesWithExpiration),
        type: cdktn.stringToTerraform(struct!.type),
        valid_from: cdktn.stringToTerraform(struct!.validFrom),
        valid_until: cdktn.stringToTerraform(struct!.validUntil),
    }
}


export function ccSpotFleetSpotFleetRequestConfigDataPropertyToHclTerraform(struct?: CcSpotFleet.SpotFleetRequestConfigDataProperty | cdktn.IResolvable): any {
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
        context: {
            value: cdktn.stringToHclTerraform(struct!.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        excess_capacity_termination_policy: {
            value: cdktn.stringToHclTerraform(struct!.excessCapacityTerminationPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_fleet_role: {
            value: cdktn.stringToHclTerraform(struct!.iamFleetRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_interruption_behavior: {
            value: cdktn.stringToHclTerraform(struct!.instanceInterruptionBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_pools_to_use_count: {
            value: cdktn.numberToHclTerraform(struct!.instancePoolsToUseCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        launch_specifications: {
            value: cdktn.listMapperHcl(ccSpotFleetSpotFleetLaunchSpecificationPropertyToHclTerraform, false)(struct!.launchSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "SpotFleetLaunchSpecificationPropertyList",
        },
        launch_template_configs: {
            value: cdktn.listMapperHcl(ccSpotFleetLaunchTemplateConfigPropertyToHclTerraform, false)(struct!.launchTemplateConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateConfigPropertyList",
        },
        load_balancers_config: {
            value: ccSpotFleetLoadBalancersConfigPropertyToHclTerraform(struct!.loadBalancersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancersConfigProperty",
        },
        on_demand_allocation_strategy: {
            value: cdktn.stringToHclTerraform(struct!.onDemandAllocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_demand_max_total_price: {
            value: cdktn.stringToHclTerraform(struct!.onDemandMaxTotalPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_demand_target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.onDemandTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        replace_unhealthy_instances: {
            value: cdktn.booleanToHclTerraform(struct!.replaceUnhealthyInstances),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        spot_maintenance_strategies: {
            value: ccSpotFleetSpotMaintenanceStrategiesPropertyToHclTerraform(struct!.spotMaintenanceStrategies),
            isBlock: true,
            type: "struct",
            storageClassType: "SpotMaintenanceStrategiesProperty",
        },
        spot_max_total_price: {
            value: cdktn.stringToHclTerraform(struct!.spotMaxTotalPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_price: {
            value: cdktn.stringToHclTerraform(struct!.spotPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_specifications: {
            value: cdktn.listMapperHcl(ccSpotFleetTagSpecificationsPropertyToHclTerraform, false)(struct!.tagSpecifications),
            isBlock: true,
            type: "list",
            storageClassType: "TagSpecificationsPropertyList",
        },
        target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.targetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_capacity_unit_type: {
            value: cdktn.stringToHclTerraform(struct!.targetCapacityUnitType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        terminate_instances_with_expiration: {
            value: cdktn.booleanToHclTerraform(struct!.terminateInstancesWithExpiration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        valid_from: {
            value: cdktn.stringToHclTerraform(struct!.validFrom),
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


export function ccSpotFleetTagsPropertyToTerraform(struct?: CcSpotFleet.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpotFleetTagsPropertyToHclTerraform(struct?: CcSpotFleet.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSpotFleet {
export interface EbsBlockDeviceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#delete_on_termination CcSpotFleet#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#encrypted CcSpotFleet#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#iops CcSpotFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#snapshot_id CcSpotFleet#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#volume_size CcSpotFleet#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#volume_type CcSpotFleet#volume_type}
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
        if (this._snapshotId !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
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
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._snapshotId = undefined;
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
            this._snapshotId = value.snapshotId;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#device_name CcSpotFleet#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ebs CcSpotFleet#ebs}
    */
    readonly ebs?: EbsBlockDeviceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#no_device CcSpotFleet#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#virtual_name CcSpotFleet#virtual_name}
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
export interface IamInstanceProfileSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#arn CcSpotFleet#arn}
    */
    readonly arn?: string;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamInstanceProfileSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
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
}
export interface AcceleratorCountRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class AcceleratorCountRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorCountRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AcceleratorCountRequestProperty | cdktn.IResolvable | undefined) {
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
export interface AcceleratorTotalMemoryMiBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class AcceleratorTotalMemoryMiBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable | undefined) {
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
export interface BaselineEbsBandwidthMbpsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class BaselineEbsBandwidthMbpsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable | undefined) {
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
export interface PerformanceFactorReferenceRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_family CcSpotFleet#instance_family}
    */
    readonly instanceFamily?: string;
}
export class PerformanceFactorReferenceRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PerformanceFactorReferenceRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PerformanceFactorReferenceRequestProperty | cdktn.IResolvable | undefined) {
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

export class PerformanceFactorReferenceRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : PerformanceFactorReferenceRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): PerformanceFactorReferenceRequestPropertyOutputReference {
        return new PerformanceFactorReferenceRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CpuPerformanceFactorRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#references CcSpotFleet#references}
    */
    readonly references?: PerformanceFactorReferenceRequestProperty[] | cdktn.IResolvable;
}
export class CpuPerformanceFactorRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CpuPerformanceFactorRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CpuPerformanceFactorRequestProperty | cdktn.IResolvable | undefined) {
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
    private _references = new PerformanceFactorReferenceRequestPropertyList(this, "references", false);
    public get references() {
        return this._references;
    }
    public putReferences(value: PerformanceFactorReferenceRequestProperty[] | cdktn.IResolvable) {
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
export interface BaselinePerformanceFactorsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#cpu CcSpotFleet#cpu}
    */
    readonly cpu?: CpuPerformanceFactorRequestProperty;
}
export class BaselinePerformanceFactorsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable | undefined) {
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
    private _cpu = new CpuPerformanceFactorRequestPropertyOutputReference(this, "cpu");
    public get cpu() {
        return this._cpu;
    }
    public putCpu(value: CpuPerformanceFactorRequestProperty) {
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
export interface MemoryGiBPerVCpuRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class MemoryGiBPerVCpuRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable | undefined) {
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
export interface MemoryMiBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class MemoryMiBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryMiBRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MemoryMiBRequestProperty | cdktn.IResolvable | undefined) {
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
export interface NetworkBandwidthGbpsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class NetworkBandwidthGbpsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable | undefined) {
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
export interface NetworkInterfaceCountRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class NetworkInterfaceCountRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkInterfaceCountRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NetworkInterfaceCountRequestProperty | cdktn.IResolvable | undefined) {
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
export interface TotalLocalStorageGBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class TotalLocalStorageGBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TotalLocalStorageGBRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TotalLocalStorageGBRequestProperty | cdktn.IResolvable | undefined) {
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
export interface VCpuCountRangeRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class VCpuCountRangeRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountRangeRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VCpuCountRangeRequestProperty | cdktn.IResolvable | undefined) {
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
export interface InstanceRequirementsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_count CcSpotFleet#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_manufacturers CcSpotFleet#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_names CcSpotFleet#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_total_memory_mi_b CcSpotFleet#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_types CcSpotFleet#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#allowed_instance_types CcSpotFleet#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#bare_metal CcSpotFleet#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#baseline_ebs_bandwidth_mbps CcSpotFleet#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#baseline_performance_factors CcSpotFleet#baseline_performance_factors}
    */
    readonly baselinePerformanceFactors?: BaselinePerformanceFactorsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#burstable_performance CcSpotFleet#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#cpu_manufacturers CcSpotFleet#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#excluded_instance_types CcSpotFleet#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_generations CcSpotFleet#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#local_storage CcSpotFleet#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#local_storage_types CcSpotFleet#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price CcSpotFleet#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#memory_gi_b_per_v_cpu CcSpotFleet#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#memory_mi_b CcSpotFleet#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_bandwidth_gbps CcSpotFleet#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_interface_count CcSpotFleet#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#on_demand_max_price_percentage_over_lowest_price CcSpotFleet#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#require_encryption_in_transit CcSpotFleet#require_encryption_in_transit}
    */
    readonly requireEncryptionInTransit?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#require_hibernate_support CcSpotFleet#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_max_price_percentage_over_lowest_price CcSpotFleet#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#total_local_storage_gb CcSpotFleet#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#v_cpu_count CcSpotFleet#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountRangeRequestProperty;
}
export class InstanceRequirementsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRequirementsRequestProperty | cdktn.IResolvable | undefined {
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
        if (this._requireEncryptionInTransit !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEncryptionInTransit = this._requireEncryptionInTransit;
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

    public set internalValue(value: InstanceRequirementsRequestProperty | cdktn.IResolvable | undefined) {
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
            this._requireEncryptionInTransit = undefined;
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
            this._requireEncryptionInTransit = value.requireEncryptionInTransit;
            this._requireHibernateSupport = value.requireHibernateSupport;
            this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
            this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
            this._vCpuCount.internalValue = value.vCpuCount;
        }
    }

    // accelerator_count - computed: true, optional: true, required: false
    private _acceleratorCount = new AcceleratorCountRequestPropertyOutputReference(this, "accelerator_count");
    public get acceleratorCount() {
        return this._acceleratorCount;
    }
    public putAcceleratorCount(value: AcceleratorCountRequestProperty) {
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
    private _acceleratorTotalMemoryMiB = new AcceleratorTotalMemoryMiBRequestPropertyOutputReference(this, "accelerator_total_memory_mi_b");
    public get acceleratorTotalMemoryMiB() {
        return this._acceleratorTotalMemoryMiB;
    }
    public putAcceleratorTotalMemoryMiB(value: AcceleratorTotalMemoryMiBRequestProperty) {
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
    private _baselineEbsBandwidthMbps = new BaselineEbsBandwidthMbpsRequestPropertyOutputReference(this, "baseline_ebs_bandwidth_mbps");
    public get baselineEbsBandwidthMbps() {
        return this._baselineEbsBandwidthMbps;
    }
    public putBaselineEbsBandwidthMbps(value: BaselineEbsBandwidthMbpsRequestProperty) {
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
    private _baselinePerformanceFactors = new BaselinePerformanceFactorsRequestPropertyOutputReference(this, "baseline_performance_factors");
    public get baselinePerformanceFactors() {
        return this._baselinePerformanceFactors;
    }
    public putBaselinePerformanceFactors(value: BaselinePerformanceFactorsRequestProperty) {
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
    private _memoryGiBPerVCpu = new MemoryGiBPerVCpuRequestPropertyOutputReference(this, "memory_gi_b_per_v_cpu");
    public get memoryGiBPerVCpu() {
        return this._memoryGiBPerVCpu;
    }
    public putMemoryGiBPerVCpu(value: MemoryGiBPerVCpuRequestProperty) {
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
    private _memoryMiB = new MemoryMiBRequestPropertyOutputReference(this, "memory_mi_b");
    public get memoryMiB() {
        return this._memoryMiB;
    }
    public putMemoryMiB(value: MemoryMiBRequestProperty) {
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
    private _networkBandwidthGbps = new NetworkBandwidthGbpsRequestPropertyOutputReference(this, "network_bandwidth_gbps");
    public get networkBandwidthGbps() {
        return this._networkBandwidthGbps;
    }
    public putNetworkBandwidthGbps(value: NetworkBandwidthGbpsRequestProperty) {
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
    private _networkInterfaceCount = new NetworkInterfaceCountRequestPropertyOutputReference(this, "network_interface_count");
    public get networkInterfaceCount() {
        return this._networkInterfaceCount;
    }
    public putNetworkInterfaceCount(value: NetworkInterfaceCountRequestProperty) {
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

    // require_encryption_in_transit - computed: true, optional: true, required: false
    private _requireEncryptionInTransit?: boolean | cdktn.IResolvable; 
    public get requireEncryptionInTransit() {
        return this.getBooleanAttribute('require_encryption_in_transit');
    }
    public set requireEncryptionInTransit(value: boolean | cdktn.IResolvable) {
        this._requireEncryptionInTransit = value;
    }
    public resetRequireEncryptionInTransit() {
        this._requireEncryptionInTransit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEncryptionInTransitInput() {
        return this._requireEncryptionInTransit;
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
    private _totalLocalStorageGb = new TotalLocalStorageGBRequestPropertyOutputReference(this, "total_local_storage_gb");
    public get totalLocalStorageGb() {
        return this._totalLocalStorageGb;
    }
    public putTotalLocalStorageGb(value: TotalLocalStorageGBRequestProperty) {
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
    private _vCpuCount = new VCpuCountRangeRequestPropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountRangeRequestProperty) {
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
export interface SpotFleetMonitoringProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#enabled CcSpotFleet#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class SpotFleetMonitoringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotFleetMonitoringProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SpotFleetMonitoringProperty | cdktn.IResolvable | undefined) {
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
export interface InstanceIpv6AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ipv_6_address CcSpotFleet#ipv_6_address}
    */
    readonly ipv6Address?: string;
}
export class InstanceIpv6AddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceIpv6AddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: InstanceIpv6AddressProperty | cdktn.IResolvable | undefined) {
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

export class InstanceIpv6AddressPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceIpv6AddressProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceIpv6AddressPropertyOutputReference {
        return new InstanceIpv6AddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrivateIpAddressSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#primary CcSpotFleet#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#private_ip_address CcSpotFleet#private_ip_address}
    */
    readonly privateIpAddress?: string;
}
export class PrivateIpAddressSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateIpAddressSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PrivateIpAddressSpecificationProperty | cdktn.IResolvable | undefined) {
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

export class PrivateIpAddressSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateIpAddressSpecificationPropertyOutputReference {
        return new PrivateIpAddressSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceNetworkInterfaceSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#associate_public_ip_address CcSpotFleet#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#delete_on_termination CcSpotFleet#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#description CcSpotFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#device_index CcSpotFleet#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#groups CcSpotFleet#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ipv_6_address_count CcSpotFleet#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ipv_6_addresses CcSpotFleet#ipv_6_addresses}
    */
    readonly ipv6Addresses?: InstanceIpv6AddressProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_interface_id CcSpotFleet#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#private_ip_addresses CcSpotFleet#private_ip_addresses}
    */
    readonly privateIpAddresses?: PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#secondary_private_ip_address_count CcSpotFleet#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#subnet_id CcSpotFleet#subnet_id}
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
        if (this._associatePublicIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
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
        if (this._groups !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._ipv6AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
        }
        if (this._ipv6Addresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
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

    public set internalValue(value: InstanceNetworkInterfaceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associatePublicIpAddress = undefined;
            this._deleteOnTermination = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._groups = undefined;
            this._ipv6AddressCount = undefined;
            this._ipv6Addresses.internalValue = undefined;
            this._networkInterfaceId = undefined;
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
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._deleteOnTermination = value.deleteOnTermination;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._groups = value.groups;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._ipv6Addresses.internalValue = value.ipv6Addresses;
            this._networkInterfaceId = value.networkInterfaceId;
            this._privateIpAddresses.internalValue = value.privateIpAddresses;
            this._secondaryPrivateIpAddressCount = value.secondaryPrivateIpAddressCount;
            this._subnetId = value.subnetId;
        }
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
    private _ipv6Addresses = new InstanceIpv6AddressPropertyList(this, "ipv_6_addresses", false);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: InstanceIpv6AddressProperty[] | cdktn.IResolvable) {
        this._ipv6Addresses.internalValue = value;
    }
    public resetIpv6Addresses() {
        this._ipv6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
        return this._ipv6Addresses.internalValue;
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

    // private_ip_addresses - computed: true, optional: true, required: false
    private _privateIpAddresses = new PrivateIpAddressSpecificationPropertyList(this, "private_ip_addresses", false);
    public get privateIpAddresses() {
        return this._privateIpAddresses;
    }
    public putPrivateIpAddresses(value: PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable) {
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
export interface SpotPlacementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#availability_zone CcSpotFleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#availability_zone_id CcSpotFleet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#group_name CcSpotFleet#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tenancy CcSpotFleet#tenancy}
    */
    readonly tenancy?: string;
}
export class SpotPlacementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotPlacementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._availabilityZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneId = this._availabilityZoneId;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._tenancy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenancy = this._tenancy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotPlacementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._availabilityZoneId = undefined;
            this._groupName = undefined;
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
            this._availabilityZoneId = value.availabilityZoneId;
            this._groupName = value.groupName;
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

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
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
export interface GroupIdentifierProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#group_id CcSpotFleet#group_id}
    */
    readonly groupId?: string;
}
export class GroupIdentifierPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GroupIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupId = value.groupId;
        }
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
}

export class GroupIdentifierPropertyList extends cdktn.ComplexList {
    public internalValue? : GroupIdentifierProperty[] | cdktn.IResolvable

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
    public get(index: number): GroupIdentifierPropertyOutputReference {
        return new GroupIdentifierPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#key CcSpotFleet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#value CcSpotFleet#value}
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
export interface SpotFleetTagSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#resource_type CcSpotFleet#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tags CcSpotFleet#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class SpotFleetTagSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpotFleetTagSpecificationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SpotFleetTagSpecificationProperty | cdktn.IResolvable | undefined) {
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

export class SpotFleetTagSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : SpotFleetTagSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): SpotFleetTagSpecificationPropertyOutputReference {
        return new SpotFleetTagSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpotFleetLaunchSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#block_device_mappings CcSpotFleet#block_device_mappings}
    */
    readonly blockDeviceMappings?: BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ebs_optimized CcSpotFleet#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#iam_instance_profile CcSpotFleet#iam_instance_profile}
    */
    readonly iamInstanceProfile?: IamInstanceProfileSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#image_id CcSpotFleet#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_requirements CcSpotFleet#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_type CcSpotFleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#kernel_id CcSpotFleet#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#key_name CcSpotFleet#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#monitoring CcSpotFleet#monitoring}
    */
    readonly monitoring?: SpotFleetMonitoringProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_interfaces CcSpotFleet#network_interfaces}
    */
    readonly networkInterfaces?: InstanceNetworkInterfaceSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#placement CcSpotFleet#placement}
    */
    readonly placement?: SpotPlacementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#ramdisk_id CcSpotFleet#ramdisk_id}
    */
    readonly ramdiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#security_groups CcSpotFleet#security_groups}
    */
    readonly securityGroups?: GroupIdentifierProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_price CcSpotFleet#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#subnet_id CcSpotFleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tag_specifications CcSpotFleet#tag_specifications}
    */
    readonly tagSpecifications?: SpotFleetTagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#user_data CcSpotFleet#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#weighted_capacity CcSpotFleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export class SpotFleetLaunchSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpotFleetLaunchSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockDeviceMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
        }
        if (this._ebsOptimized !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsOptimized = this._ebsOptimized;
        }
        if (this._iamInstanceProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamInstanceProfile = this._iamInstanceProfile?.internalValue;
        }
        if (this._imageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageId = this._imageId;
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
        if (this._ramdiskId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ramdiskId = this._ramdiskId;
        }
        if (this._securityGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups?.internalValue;
        }
        if (this._spotPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotPrice = this._spotPrice;
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
        if (this._weightedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedCapacity = this._weightedCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotFleetLaunchSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = undefined;
            this._ebsOptimized = undefined;
            this._iamInstanceProfile.internalValue = undefined;
            this._imageId = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceType = undefined;
            this._kernelId = undefined;
            this._keyName = undefined;
            this._monitoring.internalValue = undefined;
            this._networkInterfaces.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._ramdiskId = undefined;
            this._securityGroups.internalValue = undefined;
            this._spotPrice = undefined;
            this._subnetId = undefined;
            this._tagSpecifications.internalValue = undefined;
            this._userData = undefined;
            this._weightedCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
            this._ebsOptimized = value.ebsOptimized;
            this._iamInstanceProfile.internalValue = value.iamInstanceProfile;
            this._imageId = value.imageId;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceType = value.instanceType;
            this._kernelId = value.kernelId;
            this._keyName = value.keyName;
            this._monitoring.internalValue = value.monitoring;
            this._networkInterfaces.internalValue = value.networkInterfaces;
            this._placement.internalValue = value.placement;
            this._ramdiskId = value.ramdiskId;
            this._securityGroups.internalValue = value.securityGroups;
            this._spotPrice = value.spotPrice;
            this._subnetId = value.subnetId;
            this._tagSpecifications.internalValue = value.tagSpecifications;
            this._userData = value.userData;
            this._weightedCapacity = value.weightedCapacity;
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

    // instance_requirements - computed: true, optional: true, required: false
    private _instanceRequirements = new InstanceRequirementsRequestPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: InstanceRequirementsRequestProperty) {
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

    // monitoring - computed: true, optional: true, required: false
    private _monitoring = new SpotFleetMonitoringPropertyOutputReference(this, "monitoring");
    public get monitoring() {
        return this._monitoring;
    }
    public putMonitoring(value: SpotFleetMonitoringProperty) {
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

    // placement - computed: true, optional: true, required: false
    private _placement = new SpotPlacementPropertyOutputReference(this, "placement");
    public get placement() {
        return this._placement;
    }
    public putPlacement(value: SpotPlacementProperty) {
        this._placement.internalValue = value;
    }
    public resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementInput() {
        return this._placement.internalValue;
    }

    // ramdisk_id - computed: true, optional: true, required: false
    private _ramdiskId?: string; 
    public get ramdiskId() {
        return this.getStringAttribute('ramdisk_id');
    }
    public set ramdiskId(value: string) {
        this._ramdiskId = value;
    }
    public resetRamdiskId() {
        this._ramdiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ramdiskIdInput() {
        return this._ramdiskId;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups = new GroupIdentifierPropertyList(this, "security_groups", false);
    public get securityGroups() {
        return this._securityGroups;
    }
    public putSecurityGroups(value: GroupIdentifierProperty[] | cdktn.IResolvable) {
        this._securityGroups.internalValue = value;
    }
    public resetSecurityGroups() {
        this._securityGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups.internalValue;
    }

    // spot_price - computed: true, optional: true, required: false
    private _spotPrice?: string; 
    public get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string) {
        this._spotPrice = value;
    }
    public resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
        return this._spotPrice;
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
    private _tagSpecifications = new SpotFleetTagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: SpotFleetTagSpecificationProperty[] | cdktn.IResolvable) {
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

    // weighted_capacity - computed: true, optional: true, required: false
    private _weightedCapacity?: number; 
    public get weightedCapacity() {
        return this.getNumberAttribute('weighted_capacity');
    }
    public set weightedCapacity(value: number) {
        this._weightedCapacity = value;
    }
    public resetWeightedCapacity() {
        this._weightedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedCapacityInput() {
        return this._weightedCapacity;
    }
}

export class SpotFleetLaunchSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : SpotFleetLaunchSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): SpotFleetLaunchSpecificationPropertyOutputReference {
        return new SpotFleetLaunchSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FleetLaunchTemplateSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#launch_template_id CcSpotFleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#launch_template_name CcSpotFleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#version CcSpotFleet#version}
    */
    readonly version?: string;
}
export class FleetLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FleetLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined {
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
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetLaunchTemplateSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
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
export interface AcceleratorCountProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
export interface ReferencesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_family CcSpotFleet#instance_family}
    */
    readonly instanceFamily?: string;
}
export class ReferencesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReferencesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReferencesProperty | cdktn.IResolvable | undefined) {
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

export class ReferencesPropertyList extends cdktn.ComplexList {
    public internalValue? : ReferencesProperty[] | cdktn.IResolvable

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
    public get(index: number): ReferencesPropertyOutputReference {
        return new ReferencesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CpuProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#references CcSpotFleet#references}
    */
    readonly references?: ReferencesProperty[] | cdktn.IResolvable;
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
    private _references = new ReferencesPropertyList(this, "references", false);
    public get references() {
        return this._references;
    }
    public putReferences(value: ReferencesProperty[] | cdktn.IResolvable) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#cpu CcSpotFleet#cpu}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
export interface TotalLocalStorageGbProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
    */
    readonly min?: number;
}
export class TotalLocalStorageGbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TotalLocalStorageGbProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TotalLocalStorageGbProperty | cdktn.IResolvable | undefined) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max CcSpotFleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#min CcSpotFleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_count CcSpotFleet#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_manufacturers CcSpotFleet#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_names CcSpotFleet#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_total_memory_mi_b CcSpotFleet#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#accelerator_types CcSpotFleet#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#allowed_instance_types CcSpotFleet#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#bare_metal CcSpotFleet#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#baseline_ebs_bandwidth_mbps CcSpotFleet#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#baseline_performance_factors CcSpotFleet#baseline_performance_factors}
    */
    readonly baselinePerformanceFactors?: BaselinePerformanceFactorsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#burstable_performance CcSpotFleet#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#cpu_manufacturers CcSpotFleet#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#excluded_instance_types CcSpotFleet#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_generations CcSpotFleet#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#local_storage CcSpotFleet#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#local_storage_types CcSpotFleet#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price CcSpotFleet#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#memory_gi_b_per_v_cpu CcSpotFleet#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#memory_mi_b CcSpotFleet#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_bandwidth_gbps CcSpotFleet#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#network_interface_count CcSpotFleet#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#on_demand_max_price_percentage_over_lowest_price CcSpotFleet#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#require_encryption_in_transit CcSpotFleet#require_encryption_in_transit}
    */
    readonly requireEncryptionInTransit?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#require_hibernate_support CcSpotFleet#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_max_price_percentage_over_lowest_price CcSpotFleet#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#total_local_storage_gb CcSpotFleet#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGbProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#v_cpu_count CcSpotFleet#v_cpu_count}
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
        if (this._requireEncryptionInTransit !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEncryptionInTransit = this._requireEncryptionInTransit;
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
            this._requireEncryptionInTransit = undefined;
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
            this._requireEncryptionInTransit = value.requireEncryptionInTransit;
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

    // require_encryption_in_transit - computed: true, optional: true, required: false
    private _requireEncryptionInTransit?: boolean | cdktn.IResolvable; 
    public get requireEncryptionInTransit() {
        return this.getBooleanAttribute('require_encryption_in_transit');
    }
    public set requireEncryptionInTransit(value: boolean | cdktn.IResolvable) {
        this._requireEncryptionInTransit = value;
    }
    public resetRequireEncryptionInTransit() {
        this._requireEncryptionInTransit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEncryptionInTransitInput() {
        return this._requireEncryptionInTransit;
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
    private _totalLocalStorageGb = new TotalLocalStorageGbPropertyOutputReference(this, "total_local_storage_gb");
    public get totalLocalStorageGb() {
        return this._totalLocalStorageGb;
    }
    public putTotalLocalStorageGb(value: TotalLocalStorageGbProperty) {
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
export interface LaunchTemplateOverridesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#availability_zone CcSpotFleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#availability_zone_id CcSpotFleet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_requirements CcSpotFleet#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_type CcSpotFleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#priority CcSpotFleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_price CcSpotFleet#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#subnet_id CcSpotFleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#weighted_capacity CcSpotFleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export class LaunchTemplateOverridesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._availabilityZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneId = this._availabilityZoneId;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._spotPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotPrice = this._spotPrice;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._weightedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedCapacity = this._weightedCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._availabilityZoneId = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceType = undefined;
            this._priority = undefined;
            this._spotPrice = undefined;
            this._subnetId = undefined;
            this._weightedCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._availabilityZoneId = value.availabilityZoneId;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceType = value.instanceType;
            this._priority = value.priority;
            this._spotPrice = value.spotPrice;
            this._subnetId = value.subnetId;
            this._weightedCapacity = value.weightedCapacity;
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

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
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

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // spot_price - computed: true, optional: true, required: false
    private _spotPrice?: string; 
    public get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string) {
        this._spotPrice = value;
    }
    public resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
        return this._spotPrice;
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

    // weighted_capacity - computed: true, optional: true, required: false
    private _weightedCapacity?: number; 
    public get weightedCapacity() {
        return this.getNumberAttribute('weighted_capacity');
    }
    public set weightedCapacity(value: number) {
        this._weightedCapacity = value;
    }
    public resetWeightedCapacity() {
        this._weightedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedCapacityInput() {
        return this._weightedCapacity;
    }
}

export class LaunchTemplateOverridesPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateOverridesProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateOverridesPropertyOutputReference {
        return new LaunchTemplateOverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LaunchTemplateConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#launch_template_specification CcSpotFleet#launch_template_specification}
    */
    readonly launchTemplateSpecification?: FleetLaunchTemplateSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#overrides CcSpotFleet#overrides}
    */
    readonly overrides?: LaunchTemplateOverridesProperty[] | cdktn.IResolvable;
}
export class LaunchTemplateConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchTemplateConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchTemplateConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateSpecification.internalValue = undefined;
            this._overrides.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._overrides.internalValue = value.overrides;
        }
    }

    // launch_template_specification - computed: true, optional: true, required: false
    private _launchTemplateSpecification = new FleetLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
    public get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    public putLaunchTemplateSpecification(value: FleetLaunchTemplateSpecificationProperty) {
        this._launchTemplateSpecification.internalValue = value;
    }
    public resetLaunchTemplateSpecification() {
        this._launchTemplateSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new LaunchTemplateOverridesPropertyList(this, "overrides", false);
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: LaunchTemplateOverridesProperty[] | cdktn.IResolvable) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }
}

export class LaunchTemplateConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchTemplateConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchTemplateConfigPropertyOutputReference {
        return new LaunchTemplateConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClassicLoadBalancerProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#name CcSpotFleet#name}
    */
    readonly name?: string;
}
export class ClassicLoadBalancerPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClassicLoadBalancerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClassicLoadBalancerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class ClassicLoadBalancerPropertyList extends cdktn.ComplexList {
    public internalValue? : ClassicLoadBalancerProperty[] | cdktn.IResolvable

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
    public get(index: number): ClassicLoadBalancerPropertyOutputReference {
        return new ClassicLoadBalancerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClassicLoadBalancersConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#classic_load_balancers CcSpotFleet#classic_load_balancers}
    */
    readonly classicLoadBalancers?: ClassicLoadBalancerProperty[] | cdktn.IResolvable;
}
export class ClassicLoadBalancersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClassicLoadBalancersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classicLoadBalancers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.classicLoadBalancers = this._classicLoadBalancers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClassicLoadBalancersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classicLoadBalancers.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classicLoadBalancers.internalValue = value.classicLoadBalancers;
        }
    }

    // classic_load_balancers - computed: true, optional: true, required: false
    private _classicLoadBalancers = new ClassicLoadBalancerPropertyList(this, "classic_load_balancers", false);
    public get classicLoadBalancers() {
        return this._classicLoadBalancers;
    }
    public putClassicLoadBalancers(value: ClassicLoadBalancerProperty[] | cdktn.IResolvable) {
        this._classicLoadBalancers.internalValue = value;
    }
    public resetClassicLoadBalancers() {
        this._classicLoadBalancers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicLoadBalancersInput() {
        return this._classicLoadBalancers.internalValue;
    }
}
export interface TargetGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#arn CcSpotFleet#arn}
    */
    readonly arn?: string;
}
export class TargetGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
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
}

export class TargetGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetGroupPropertyOutputReference {
        return new TargetGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetGroupsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#target_groups CcSpotFleet#target_groups}
    */
    readonly targetGroups?: TargetGroupProperty[] | cdktn.IResolvable;
}
export class TargetGroupsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetGroupsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroups = this._targetGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetGroupsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetGroups.internalValue = value.targetGroups;
        }
    }

    // target_groups - computed: true, optional: true, required: false
    private _targetGroups = new TargetGroupPropertyList(this, "target_groups", false);
    public get targetGroups() {
        return this._targetGroups;
    }
    public putTargetGroups(value: TargetGroupProperty[] | cdktn.IResolvable) {
        this._targetGroups.internalValue = value;
    }
    public resetTargetGroups() {
        this._targetGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupsInput() {
        return this._targetGroups.internalValue;
    }
}
export interface LoadBalancersConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#classic_load_balancers_config CcSpotFleet#classic_load_balancers_config}
    */
    readonly classicLoadBalancersConfig?: ClassicLoadBalancersConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#target_groups_config CcSpotFleet#target_groups_config}
    */
    readonly targetGroupsConfig?: TargetGroupsConfigProperty;
}
export class LoadBalancersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoadBalancersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classicLoadBalancersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.classicLoadBalancersConfig = this._classicLoadBalancersConfig?.internalValue;
        }
        if (this._targetGroupsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupsConfig = this._targetGroupsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoadBalancersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classicLoadBalancersConfig.internalValue = undefined;
            this._targetGroupsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classicLoadBalancersConfig.internalValue = value.classicLoadBalancersConfig;
            this._targetGroupsConfig.internalValue = value.targetGroupsConfig;
        }
    }

    // classic_load_balancers_config - computed: true, optional: true, required: false
    private _classicLoadBalancersConfig = new ClassicLoadBalancersConfigPropertyOutputReference(this, "classic_load_balancers_config");
    public get classicLoadBalancersConfig() {
        return this._classicLoadBalancersConfig;
    }
    public putClassicLoadBalancersConfig(value: ClassicLoadBalancersConfigProperty) {
        this._classicLoadBalancersConfig.internalValue = value;
    }
    public resetClassicLoadBalancersConfig() {
        this._classicLoadBalancersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicLoadBalancersConfigInput() {
        return this._classicLoadBalancersConfig.internalValue;
    }

    // target_groups_config - computed: true, optional: true, required: false
    private _targetGroupsConfig = new TargetGroupsConfigPropertyOutputReference(this, "target_groups_config");
    public get targetGroupsConfig() {
        return this._targetGroupsConfig;
    }
    public putTargetGroupsConfig(value: TargetGroupsConfigProperty) {
        this._targetGroupsConfig.internalValue = value;
    }
    public resetTargetGroupsConfig() {
        this._targetGroupsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupsConfigInput() {
        return this._targetGroupsConfig.internalValue;
    }
}
export interface SpotCapacityRebalanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#replacement_strategy CcSpotFleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#termination_delay CcSpotFleet#termination_delay}
    */
    readonly terminationDelay?: number;
}
export class SpotCapacityRebalancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotCapacityRebalanceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._replacementStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.replacementStrategy = this._replacementStrategy;
        }
        if (this._terminationDelay !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminationDelay = this._terminationDelay;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotCapacityRebalanceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replacementStrategy = undefined;
            this._terminationDelay = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replacementStrategy = value.replacementStrategy;
            this._terminationDelay = value.terminationDelay;
        }
    }

    // replacement_strategy - computed: true, optional: true, required: false
    private _replacementStrategy?: string; 
    public get replacementStrategy() {
        return this.getStringAttribute('replacement_strategy');
    }
    public set replacementStrategy(value: string) {
        this._replacementStrategy = value;
    }
    public resetReplacementStrategy() {
        this._replacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replacementStrategyInput() {
        return this._replacementStrategy;
    }

    // termination_delay - computed: true, optional: true, required: false
    private _terminationDelay?: number; 
    public get terminationDelay() {
        return this.getNumberAttribute('termination_delay');
    }
    public set terminationDelay(value: number) {
        this._terminationDelay = value;
    }
    public resetTerminationDelay() {
        this._terminationDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationDelayInput() {
        return this._terminationDelay;
    }
}
export interface SpotMaintenanceStrategiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#capacity_rebalance CcSpotFleet#capacity_rebalance}
    */
    readonly capacityRebalance?: SpotCapacityRebalanceProperty;
}
export class SpotMaintenanceStrategiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotMaintenanceStrategiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityRebalance?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityRebalance = this._capacityRebalance?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotMaintenanceStrategiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityRebalance.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityRebalance.internalValue = value.capacityRebalance;
        }
    }

    // capacity_rebalance - computed: true, optional: true, required: false
    private _capacityRebalance = new SpotCapacityRebalancePropertyOutputReference(this, "capacity_rebalance");
    public get capacityRebalance() {
        return this._capacityRebalance;
    }
    public putCapacityRebalance(value: SpotCapacityRebalanceProperty) {
        this._capacityRebalance.internalValue = value;
    }
    public resetCapacityRebalance() {
        this._capacityRebalance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRebalanceInput() {
        return this._capacityRebalance.internalValue;
    }
}
export interface SpotFleetRequestConfigDataTagSpecificationsTagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#key CcSpotFleet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#value CcSpotFleet#value}
    */
    readonly value?: string;
}
export class SpotFleetRequestConfigDataTagSpecificationsTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SpotFleetRequestConfigDataTagSpecificationsTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SpotFleetRequestConfigDataTagSpecificationsTagsProperty | cdktn.IResolvable | undefined) {
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

export class SpotFleetRequestConfigDataTagSpecificationsTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : SpotFleetRequestConfigDataTagSpecificationsTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): SpotFleetRequestConfigDataTagSpecificationsTagsPropertyOutputReference {
        return new SpotFleetRequestConfigDataTagSpecificationsTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagSpecificationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#resource_type CcSpotFleet#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tags CcSpotFleet#tags}
    */
    readonly tags?: SpotFleetRequestConfigDataTagSpecificationsTagsProperty[] | cdktn.IResolvable;
}
export class TagSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagSpecificationsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagSpecificationsProperty | cdktn.IResolvable | undefined) {
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
    private _tags = new SpotFleetRequestConfigDataTagSpecificationsTagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: SpotFleetRequestConfigDataTagSpecificationsTagsProperty[] | cdktn.IResolvable) {
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

export class TagSpecificationsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagSpecificationsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagSpecificationsPropertyOutputReference {
        return new TagSpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpotFleetRequestConfigDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#allocation_strategy CcSpotFleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#context CcSpotFleet#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#excess_capacity_termination_policy CcSpotFleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#iam_fleet_role CcSpotFleet#iam_fleet_role}
    */
    readonly iamFleetRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_interruption_behavior CcSpotFleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#instance_pools_to_use_count CcSpotFleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#launch_specifications CcSpotFleet#launch_specifications}
    */
    readonly launchSpecifications?: SpotFleetLaunchSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#launch_template_configs CcSpotFleet#launch_template_configs}
    */
    readonly launchTemplateConfigs?: LaunchTemplateConfigProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#load_balancers_config CcSpotFleet#load_balancers_config}
    */
    readonly loadBalancersConfig?: LoadBalancersConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#on_demand_allocation_strategy CcSpotFleet#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#on_demand_max_total_price CcSpotFleet#on_demand_max_total_price}
    */
    readonly onDemandMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#on_demand_target_capacity CcSpotFleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#replace_unhealthy_instances CcSpotFleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_maintenance_strategies CcSpotFleet#spot_maintenance_strategies}
    */
    readonly spotMaintenanceStrategies?: SpotMaintenanceStrategiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_max_total_price CcSpotFleet#spot_max_total_price}
    */
    readonly spotMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#spot_price CcSpotFleet#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#tag_specifications CcSpotFleet#tag_specifications}
    */
    readonly tagSpecifications?: TagSpecificationsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#target_capacity CcSpotFleet#target_capacity}
    */
    readonly targetCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#target_capacity_unit_type CcSpotFleet#target_capacity_unit_type}
    */
    readonly targetCapacityUnitType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#terminate_instances_with_expiration CcSpotFleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#type CcSpotFleet#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#valid_from CcSpotFleet#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#valid_until CcSpotFleet#valid_until}
    */
    readonly validUntil?: string;
}
export class SpotFleetRequestConfigDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotFleetRequestConfigDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._context !== undefined) {
            hasAnyValues = true;
            internalValueResult.context = this._context;
        }
        if (this._excessCapacityTerminationPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.excessCapacityTerminationPolicy = this._excessCapacityTerminationPolicy;
        }
        if (this._iamFleetRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamFleetRole = this._iamFleetRole;
        }
        if (this._instanceInterruptionBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._instancePoolsToUseCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
        }
        if (this._launchSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchSpecifications = this._launchSpecifications?.internalValue;
        }
        if (this._launchTemplateConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateConfigs = this._launchTemplateConfigs?.internalValue;
        }
        if (this._loadBalancersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadBalancersConfig = this._loadBalancersConfig?.internalValue;
        }
        if (this._onDemandAllocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
        }
        if (this._onDemandMaxTotalPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandMaxTotalPrice = this._onDemandMaxTotalPrice;
        }
        if (this._onDemandTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandTargetCapacity = this._onDemandTargetCapacity;
        }
        if (this._replaceUnhealthyInstances !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceUnhealthyInstances = this._replaceUnhealthyInstances;
        }
        if (this._spotMaintenanceStrategies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaintenanceStrategies = this._spotMaintenanceStrategies?.internalValue;
        }
        if (this._spotMaxTotalPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaxTotalPrice = this._spotMaxTotalPrice;
        }
        if (this._spotPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotPrice = this._spotPrice;
        }
        if (this._tagSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagSpecifications = this._tagSpecifications?.internalValue;
        }
        if (this._targetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacity = this._targetCapacity;
        }
        if (this._targetCapacityUnitType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacityUnitType = this._targetCapacityUnitType;
        }
        if (this._terminateInstancesWithExpiration !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminateInstancesWithExpiration = this._terminateInstancesWithExpiration;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._validFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.validFrom = this._validFrom;
        }
        if (this._validUntil !== undefined) {
            hasAnyValues = true;
            internalValueResult.validUntil = this._validUntil;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotFleetRequestConfigDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationStrategy = undefined;
            this._context = undefined;
            this._excessCapacityTerminationPolicy = undefined;
            this._iamFleetRole = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._instancePoolsToUseCount = undefined;
            this._launchSpecifications.internalValue = undefined;
            this._launchTemplateConfigs.internalValue = undefined;
            this._loadBalancersConfig.internalValue = undefined;
            this._onDemandAllocationStrategy = undefined;
            this._onDemandMaxTotalPrice = undefined;
            this._onDemandTargetCapacity = undefined;
            this._replaceUnhealthyInstances = undefined;
            this._spotMaintenanceStrategies.internalValue = undefined;
            this._spotMaxTotalPrice = undefined;
            this._spotPrice = undefined;
            this._tagSpecifications.internalValue = undefined;
            this._targetCapacity = undefined;
            this._targetCapacityUnitType = undefined;
            this._terminateInstancesWithExpiration = undefined;
            this._type = undefined;
            this._validFrom = undefined;
            this._validUntil = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationStrategy = value.allocationStrategy;
            this._context = value.context;
            this._excessCapacityTerminationPolicy = value.excessCapacityTerminationPolicy;
            this._iamFleetRole = value.iamFleetRole;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._instancePoolsToUseCount = value.instancePoolsToUseCount;
            this._launchSpecifications.internalValue = value.launchSpecifications;
            this._launchTemplateConfigs.internalValue = value.launchTemplateConfigs;
            this._loadBalancersConfig.internalValue = value.loadBalancersConfig;
            this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
            this._onDemandMaxTotalPrice = value.onDemandMaxTotalPrice;
            this._onDemandTargetCapacity = value.onDemandTargetCapacity;
            this._replaceUnhealthyInstances = value.replaceUnhealthyInstances;
            this._spotMaintenanceStrategies.internalValue = value.spotMaintenanceStrategies;
            this._spotMaxTotalPrice = value.spotMaxTotalPrice;
            this._spotPrice = value.spotPrice;
            this._tagSpecifications.internalValue = value.tagSpecifications;
            this._targetCapacity = value.targetCapacity;
            this._targetCapacityUnitType = value.targetCapacityUnitType;
            this._terminateInstancesWithExpiration = value.terminateInstancesWithExpiration;
            this._type = value.type;
            this._validFrom = value.validFrom;
            this._validUntil = value.validUntil;
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

    // excess_capacity_termination_policy - computed: true, optional: true, required: false
    private _excessCapacityTerminationPolicy?: string; 
    public get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    public set excessCapacityTerminationPolicy(value: string) {
        this._excessCapacityTerminationPolicy = value;
    }
    public resetExcessCapacityTerminationPolicy() {
        this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excessCapacityTerminationPolicyInput() {
        return this._excessCapacityTerminationPolicy;
    }

    // iam_fleet_role - computed: false, optional: false, required: true
    private _iamFleetRole?: string; 
    public get iamFleetRole() {
        return this.getStringAttribute('iam_fleet_role');
    }
    public set iamFleetRole(value: string) {
        this._iamFleetRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get iamFleetRoleInput() {
        return this._iamFleetRole;
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

    // instance_pools_to_use_count - computed: true, optional: true, required: false
    private _instancePoolsToUseCount?: number; 
    public get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    public set instancePoolsToUseCount(value: number) {
        this._instancePoolsToUseCount = value;
    }
    public resetInstancePoolsToUseCount() {
        this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePoolsToUseCountInput() {
        return this._instancePoolsToUseCount;
    }

    // launch_specifications - computed: true, optional: true, required: false
    private _launchSpecifications = new SpotFleetLaunchSpecificationPropertyList(this, "launch_specifications", false);
    public get launchSpecifications() {
        return this._launchSpecifications;
    }
    public putLaunchSpecifications(value: SpotFleetLaunchSpecificationProperty[] | cdktn.IResolvable) {
        this._launchSpecifications.internalValue = value;
    }
    public resetLaunchSpecifications() {
        this._launchSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchSpecificationsInput() {
        return this._launchSpecifications.internalValue;
    }

    // launch_template_configs - computed: true, optional: true, required: false
    private _launchTemplateConfigs = new LaunchTemplateConfigPropertyList(this, "launch_template_configs", false);
    public get launchTemplateConfigs() {
        return this._launchTemplateConfigs;
    }
    public putLaunchTemplateConfigs(value: LaunchTemplateConfigProperty[] | cdktn.IResolvable) {
        this._launchTemplateConfigs.internalValue = value;
    }
    public resetLaunchTemplateConfigs() {
        this._launchTemplateConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateConfigsInput() {
        return this._launchTemplateConfigs.internalValue;
    }

    // load_balancers_config - computed: true, optional: true, required: false
    private _loadBalancersConfig = new LoadBalancersConfigPropertyOutputReference(this, "load_balancers_config");
    public get loadBalancersConfig() {
        return this._loadBalancersConfig;
    }
    public putLoadBalancersConfig(value: LoadBalancersConfigProperty) {
        this._loadBalancersConfig.internalValue = value;
    }
    public resetLoadBalancersConfig() {
        this._loadBalancersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancersConfigInput() {
        return this._loadBalancersConfig.internalValue;
    }

    // on_demand_allocation_strategy - computed: true, optional: true, required: false
    private _onDemandAllocationStrategy?: string; 
    public get onDemandAllocationStrategy() {
        return this.getStringAttribute('on_demand_allocation_strategy');
    }
    public set onDemandAllocationStrategy(value: string) {
        this._onDemandAllocationStrategy = value;
    }
    public resetOnDemandAllocationStrategy() {
        this._onDemandAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandAllocationStrategyInput() {
        return this._onDemandAllocationStrategy;
    }

    // on_demand_max_total_price - computed: true, optional: true, required: false
    private _onDemandMaxTotalPrice?: string; 
    public get onDemandMaxTotalPrice() {
        return this.getStringAttribute('on_demand_max_total_price');
    }
    public set onDemandMaxTotalPrice(value: string) {
        this._onDemandMaxTotalPrice = value;
    }
    public resetOnDemandMaxTotalPrice() {
        this._onDemandMaxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandMaxTotalPriceInput() {
        return this._onDemandMaxTotalPrice;
    }

    // on_demand_target_capacity - computed: true, optional: true, required: false
    private _onDemandTargetCapacity?: number; 
    public get onDemandTargetCapacity() {
        return this.getNumberAttribute('on_demand_target_capacity');
    }
    public set onDemandTargetCapacity(value: number) {
        this._onDemandTargetCapacity = value;
    }
    public resetOnDemandTargetCapacity() {
        this._onDemandTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandTargetCapacityInput() {
        return this._onDemandTargetCapacity;
    }

    // replace_unhealthy_instances - computed: true, optional: true, required: false
    private _replaceUnhealthyInstances?: boolean | cdktn.IResolvable; 
    public get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    public set replaceUnhealthyInstances(value: boolean | cdktn.IResolvable) {
        this._replaceUnhealthyInstances = value;
    }
    public resetReplaceUnhealthyInstances() {
        this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceUnhealthyInstancesInput() {
        return this._replaceUnhealthyInstances;
    }

    // spot_maintenance_strategies - computed: true, optional: true, required: false
    private _spotMaintenanceStrategies = new SpotMaintenanceStrategiesPropertyOutputReference(this, "spot_maintenance_strategies");
    public get spotMaintenanceStrategies() {
        return this._spotMaintenanceStrategies;
    }
    public putSpotMaintenanceStrategies(value: SpotMaintenanceStrategiesProperty) {
        this._spotMaintenanceStrategies.internalValue = value;
    }
    public resetSpotMaintenanceStrategies() {
        this._spotMaintenanceStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaintenanceStrategiesInput() {
        return this._spotMaintenanceStrategies.internalValue;
    }

    // spot_max_total_price - computed: true, optional: true, required: false
    private _spotMaxTotalPrice?: string; 
    public get spotMaxTotalPrice() {
        return this.getStringAttribute('spot_max_total_price');
    }
    public set spotMaxTotalPrice(value: string) {
        this._spotMaxTotalPrice = value;
    }
    public resetSpotMaxTotalPrice() {
        this._spotMaxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaxTotalPriceInput() {
        return this._spotMaxTotalPrice;
    }

    // spot_price - computed: true, optional: true, required: false
    private _spotPrice?: string; 
    public get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    public set spotPrice(value: string) {
        this._spotPrice = value;
    }
    public resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotPriceInput() {
        return this._spotPrice;
    }

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new TagSpecificationsPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: TagSpecificationsProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // target_capacity - computed: false, optional: false, required: true
    private _targetCapacity?: number; 
    public get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    public set targetCapacity(value: number) {
        this._targetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityInput() {
        return this._targetCapacity;
    }

    // target_capacity_unit_type - computed: true, optional: true, required: false
    private _targetCapacityUnitType?: string; 
    public get targetCapacityUnitType() {
        return this.getStringAttribute('target_capacity_unit_type');
    }
    public set targetCapacityUnitType(value: string) {
        this._targetCapacityUnitType = value;
    }
    public resetTargetCapacityUnitType() {
        this._targetCapacityUnitType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityUnitTypeInput() {
        return this._targetCapacityUnitType;
    }

    // terminate_instances_with_expiration - computed: true, optional: true, required: false
    private _terminateInstancesWithExpiration?: boolean | cdktn.IResolvable; 
    public get terminateInstancesWithExpiration() {
        return this.getBooleanAttribute('terminate_instances_with_expiration');
    }
    public set terminateInstancesWithExpiration(value: boolean | cdktn.IResolvable) {
        this._terminateInstancesWithExpiration = value;
    }
    public resetTerminateInstancesWithExpiration() {
        this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstancesWithExpirationInput() {
        return this._terminateInstancesWithExpiration;
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

    // valid_from - computed: true, optional: true, required: false
    private _validFrom?: string; 
    public get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    public set validFrom(value: string) {
        this._validFrom = value;
    }
    public resetValidFrom() {
        this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validFromInput() {
        return this._validFrom;
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
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#key CcSpotFleet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_spot_fleet#value CcSpotFleet#value}
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
