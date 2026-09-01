// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEC2FleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#context CcEC2Fleet#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excess_capacity_termination_policy CcEC2Fleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_configs CcEC2Fleet#launch_template_configs}
    */
    readonly launchTemplateConfigs: CcEC2Fleet.FleetLaunchTemplateConfigRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_options CcEC2Fleet#on_demand_options}
    */
    readonly onDemandOptions?: CcEC2Fleet.OnDemandOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replace_unhealthy_instances CcEC2Fleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reserved_capacity_options CcEC2Fleet#reserved_capacity_options}
    */
    readonly reservedCapacityOptions?: CcEC2Fleet.ReservedCapacityOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_options CcEC2Fleet#spot_options}
    */
    readonly spotOptions?: CcEC2Fleet.SpotOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tag_specifications CcEC2Fleet#tag_specifications}
    */
    readonly tagSpecifications?: CcEC2Fleet.TagSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_specification CcEC2Fleet#target_capacity_specification}
    */
    readonly targetCapacitySpecification: CcEC2Fleet.TargetCapacitySpecificationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#terminate_instances_with_expiration CcEC2Fleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#type CcEC2Fleet#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_from CcEC2Fleet#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#valid_until CcEC2Fleet#valid_until}
    */
    readonly validUntil?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet awscc_ec2_ec2_fleet}
*/
export class CcEC2Fleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ec2_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEC2Fleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEC2Fleet to import
    * @param importFromId The id of the existing CcEC2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEC2Fleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ec2_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet awscc_ec2_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEC2FleetProps
    */
    public constructor(scope: Construct, id: string, config: CcEC2FleetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ec2_fleet',
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
        this._context = config.context;
        this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        this._launchTemplateConfigs.internalValue = config.launchTemplateConfigs;
        this._onDemandOptions.internalValue = config.onDemandOptions;
        this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        this._reservedCapacityOptions.internalValue = config.reservedCapacityOptions;
        this._spotOptions.internalValue = config.spotOptions;
        this._tagSpecifications.internalValue = config.tagSpecifications;
        this._targetCapacitySpecification.internalValue = config.targetCapacitySpecification;
        this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        this._type = config.type;
        this._validFrom = config.validFrom;
        this._validUntil = config.validUntil;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // fleet_id - computed: true, optional: false, required: false
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // launch_template_configs - computed: false, optional: false, required: true
    private _launchTemplateConfigs = new CcEC2Fleet.FleetLaunchTemplateConfigRequestPropertyList(this, "launch_template_configs", false);
    public get launchTemplateConfigs() {
        return this._launchTemplateConfigs;
    }
    public putLaunchTemplateConfigs(value: CcEC2Fleet.FleetLaunchTemplateConfigRequestProperty[] | cdktn.IResolvable) {
        this._launchTemplateConfigs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateConfigsInput() {
        return this._launchTemplateConfigs.internalValue;
    }

    // on_demand_options - computed: true, optional: true, required: false
    private _onDemandOptions = new CcEC2Fleet.OnDemandOptionsRequestPropertyOutputReference(this, "on_demand_options");
    public get onDemandOptions() {
        return this._onDemandOptions;
    }
    public putOnDemandOptions(value: CcEC2Fleet.OnDemandOptionsRequestProperty) {
        this._onDemandOptions.internalValue = value;
    }
    public resetOnDemandOptions() {
        this._onDemandOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandOptionsInput() {
        return this._onDemandOptions.internalValue;
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

    // reserved_capacity_options - computed: true, optional: true, required: false
    private _reservedCapacityOptions = new CcEC2Fleet.ReservedCapacityOptionsRequestPropertyOutputReference(this, "reserved_capacity_options");
    public get reservedCapacityOptions() {
        return this._reservedCapacityOptions;
    }
    public putReservedCapacityOptions(value: CcEC2Fleet.ReservedCapacityOptionsRequestProperty) {
        this._reservedCapacityOptions.internalValue = value;
    }
    public resetReservedCapacityOptions() {
        this._reservedCapacityOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservedCapacityOptionsInput() {
        return this._reservedCapacityOptions.internalValue;
    }

    // spot_options - computed: true, optional: true, required: false
    private _spotOptions = new CcEC2Fleet.SpotOptionsRequestPropertyOutputReference(this, "spot_options");
    public get spotOptions() {
        return this._spotOptions;
    }
    public putSpotOptions(value: CcEC2Fleet.SpotOptionsRequestProperty) {
        this._spotOptions.internalValue = value;
    }
    public resetSpotOptions() {
        this._spotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotOptionsInput() {
        return this._spotOptions.internalValue;
    }

    // tag_specifications - computed: true, optional: true, required: false
    private _tagSpecifications = new CcEC2Fleet.TagSpecificationPropertyList(this, "tag_specifications", false);
    public get tagSpecifications() {
        return this._tagSpecifications;
    }
    public putTagSpecifications(value: CcEC2Fleet.TagSpecificationProperty[] | cdktn.IResolvable) {
        this._tagSpecifications.internalValue = value;
    }
    public resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }

    // target_capacity_specification - computed: false, optional: false, required: true
    private _targetCapacitySpecification = new CcEC2Fleet.TargetCapacitySpecificationRequestPropertyOutputReference(this, "target_capacity_specification");
    public get targetCapacitySpecification() {
        return this._targetCapacitySpecification;
    }
    public putTargetCapacitySpecification(value: CcEC2Fleet.TargetCapacitySpecificationRequestProperty) {
        this._targetCapacitySpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacitySpecificationInput() {
        return this._targetCapacitySpecification.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            context: cdktn.stringToTerraform(this._context),
            excess_capacity_termination_policy: cdktn.stringToTerraform(this._excessCapacityTerminationPolicy),
            launch_template_configs: cdktn.listMapper(ccEC2FleetFleetLaunchTemplateConfigRequestPropertyToTerraform, false)(this._launchTemplateConfigs.internalValue),
            on_demand_options: ccEC2FleetOnDemandOptionsRequestPropertyToTerraform(this._onDemandOptions.internalValue),
            replace_unhealthy_instances: cdktn.booleanToTerraform(this._replaceUnhealthyInstances),
            reserved_capacity_options: ccEC2FleetReservedCapacityOptionsRequestPropertyToTerraform(this._reservedCapacityOptions.internalValue),
            spot_options: ccEC2FleetSpotOptionsRequestPropertyToTerraform(this._spotOptions.internalValue),
            tag_specifications: cdktn.listMapper(ccEC2FleetTagSpecificationPropertyToTerraform, false)(this._tagSpecifications.internalValue),
            target_capacity_specification: ccEC2FleetTargetCapacitySpecificationRequestPropertyToTerraform(this._targetCapacitySpecification.internalValue),
            terminate_instances_with_expiration: cdktn.booleanToTerraform(this._terminateInstancesWithExpiration),
            type: cdktn.stringToTerraform(this._type),
            valid_from: cdktn.stringToTerraform(this._validFrom),
            valid_until: cdktn.stringToTerraform(this._validUntil),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            context: {
                value: cdktn.stringToHclTerraform(this._context),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            excess_capacity_termination_policy: {
                value: cdktn.stringToHclTerraform(this._excessCapacityTerminationPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_template_configs: {
                value: cdktn.listMapperHcl(ccEC2FleetFleetLaunchTemplateConfigRequestPropertyToHclTerraform, false)(this._launchTemplateConfigs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEC2Fleet.FleetLaunchTemplateConfigRequestPropertyList",
            },
            on_demand_options: {
                value: ccEC2FleetOnDemandOptionsRequestPropertyToHclTerraform(this._onDemandOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEC2Fleet.OnDemandOptionsRequestProperty",
            },
            replace_unhealthy_instances: {
                value: cdktn.booleanToHclTerraform(this._replaceUnhealthyInstances),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            reserved_capacity_options: {
                value: ccEC2FleetReservedCapacityOptionsRequestPropertyToHclTerraform(this._reservedCapacityOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEC2Fleet.ReservedCapacityOptionsRequestProperty",
            },
            spot_options: {
                value: ccEC2FleetSpotOptionsRequestPropertyToHclTerraform(this._spotOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEC2Fleet.SpotOptionsRequestProperty",
            },
            tag_specifications: {
                value: cdktn.listMapperHcl(ccEC2FleetTagSpecificationPropertyToHclTerraform, false)(this._tagSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEC2Fleet.TagSpecificationPropertyList",
            },
            target_capacity_specification: {
                value: ccEC2FleetTargetCapacitySpecificationRequestPropertyToHclTerraform(this._targetCapacitySpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEC2Fleet.TargetCapacitySpecificationRequestProperty",
            },
            terminate_instances_with_expiration: {
                value: cdktn.booleanToHclTerraform(this._terminateInstancesWithExpiration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            valid_from: {
                value: cdktn.stringToHclTerraform(this._validFrom),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            valid_until: {
                value: cdktn.stringToHclTerraform(this._validUntil),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEC2FleetFleetLaunchTemplateSpecificationRequestPropertyToTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateSpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
        launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
        launch_template_specification_user_data: cdktn.stringToTerraform(struct!.launchTemplateSpecificationUserData),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccEC2FleetFleetLaunchTemplateSpecificationRequestPropertyToHclTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateSpecificationRequestProperty | cdktn.IResolvable): any {
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
        launch_template_specification_user_data: {
            value: cdktn.stringToHclTerraform(struct!.launchTemplateSpecificationUserData),
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


export function ccEC2FleetEbsBlockDevicePropertyToTerraform(struct?: CcEC2Fleet.EbsBlockDeviceProperty | cdktn.IResolvable): any {
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
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccEC2FleetEbsBlockDevicePropertyToHclTerraform(struct?: CcEC2Fleet.EbsBlockDeviceProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetBlockDeviceMappingPropertyToTerraform(struct?: CcEC2Fleet.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccEC2FleetEbsBlockDevicePropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccEC2FleetBlockDeviceMappingPropertyToHclTerraform(struct?: CcEC2Fleet.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccEC2FleetEbsBlockDevicePropertyToHclTerraform(struct!.ebs),
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


export function ccEC2FleetIamInstanceProfileSpecificationPropertyToTerraform(struct?: CcEC2Fleet.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccEC2FleetIamInstanceProfileSpecificationPropertyToHclTerraform(struct?: CcEC2Fleet.IamInstanceProfileSpecificationProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetAcceleratorCountRequestPropertyToTerraform(struct?: CcEC2Fleet.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetAcceleratorCountRequestPropertyToHclTerraform(struct?: CcEC2Fleet.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct?: CcEC2Fleet.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct?: CcEC2Fleet.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct?: CcEC2Fleet.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetPerformanceFactorReferenceRequestPropertyToTerraform(struct?: CcEC2Fleet.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_family: cdktn.stringToTerraform(struct!.instanceFamily),
    }
}


export function ccEC2FleetPerformanceFactorReferenceRequestPropertyToHclTerraform(struct?: CcEC2Fleet.PerformanceFactorReferenceRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetCpuPerformanceFactorRequestPropertyToTerraform(struct?: CcEC2Fleet.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        references: cdktn.listMapper(ccEC2FleetPerformanceFactorReferenceRequestPropertyToTerraform, false)(struct!.references),
    }
}


export function ccEC2FleetCpuPerformanceFactorRequestPropertyToHclTerraform(struct?: CcEC2Fleet.CpuPerformanceFactorRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        references: {
            value: cdktn.listMapperHcl(ccEC2FleetPerformanceFactorReferenceRequestPropertyToHclTerraform, false)(struct!.references),
            isBlock: true,
            type: "list",
            storageClassType: "PerformanceFactorReferenceRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetBaselinePerformanceFactorsRequestPropertyToTerraform(struct?: CcEC2Fleet.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: ccEC2FleetCpuPerformanceFactorRequestPropertyToTerraform(struct!.cpu),
    }
}


export function ccEC2FleetBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.BaselinePerformanceFactorsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: ccEC2FleetCpuPerformanceFactorRequestPropertyToHclTerraform(struct!.cpu),
            isBlock: true,
            type: "struct",
            storageClassType: "CpuPerformanceFactorRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetMemoryGiBPerVCpuRequestPropertyToTerraform(struct?: CcEC2Fleet.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct?: CcEC2Fleet.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetMemoryMiBRequestPropertyToTerraform(struct?: CcEC2Fleet.MemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetMemoryMiBRequestPropertyToHclTerraform(struct?: CcEC2Fleet.MemoryMiBRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetNetworkBandwidthGbpsRequestPropertyToTerraform(struct?: CcEC2Fleet.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetNetworkInterfaceCountRequestPropertyToTerraform(struct?: CcEC2Fleet.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetNetworkInterfaceCountRequestPropertyToHclTerraform(struct?: CcEC2Fleet.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetTotalLocalStorageGBRequestPropertyToTerraform(struct?: CcEC2Fleet.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetTotalLocalStorageGBRequestPropertyToHclTerraform(struct?: CcEC2Fleet.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetVCpuCountRangeRequestPropertyToTerraform(struct?: CcEC2Fleet.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccEC2FleetVCpuCountRangeRequestPropertyToHclTerraform(struct?: CcEC2Fleet.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetInstanceRequirementsRequestPropertyToTerraform(struct?: CcEC2Fleet.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccEC2FleetAcceleratorCountRequestPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccEC2FleetAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccEC2FleetBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        baseline_performance_factors: ccEC2FleetBaselinePerformanceFactorsRequestPropertyToTerraform(struct!.baselinePerformanceFactors),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccEC2FleetMemoryGiBPerVCpuRequestPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccEC2FleetMemoryMiBRequestPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccEC2FleetNetworkBandwidthGbpsRequestPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccEC2FleetNetworkInterfaceCountRequestPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_encryption_in_transit: cdktn.booleanToTerraform(struct!.requireEncryptionInTransit),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccEC2FleetTotalLocalStorageGBRequestPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccEC2FleetVCpuCountRangeRequestPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccEC2FleetInstanceRequirementsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccEC2FleetAcceleratorCountRequestPropertyToHclTerraform(struct!.acceleratorCount),
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
            value: ccEC2FleetAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
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
            value: ccEC2FleetBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsRequestProperty",
        },
        baseline_performance_factors: {
            value: ccEC2FleetBaselinePerformanceFactorsRequestPropertyToHclTerraform(struct!.baselinePerformanceFactors),
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
            value: ccEC2FleetMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuRequestProperty",
        },
        memory_mi_b: {
            value: ccEC2FleetMemoryMiBRequestPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBRequestProperty",
        },
        network_bandwidth_gbps: {
            value: ccEC2FleetNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsRequestProperty",
        },
        network_interface_count: {
            value: ccEC2FleetNetworkInterfaceCountRequestPropertyToHclTerraform(struct!.networkInterfaceCount),
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
            value: ccEC2FleetTotalLocalStorageGBRequestPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGBRequestProperty",
        },
        v_cpu_count: {
            value: ccEC2FleetVCpuCountRangeRequestPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountRangeRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetInstanceMetadataOptionsRequestPropertyToTerraform(struct?: CcEC2Fleet.InstanceMetadataOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_endpoint: cdktn.stringToTerraform(struct!.httpEndpoint),
        http_put_response_hop_limit: cdktn.numberToTerraform(struct!.httpPutResponseHopLimit),
        http_tokens: cdktn.stringToTerraform(struct!.httpTokens),
    }
}


export function ccEC2FleetInstanceMetadataOptionsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.InstanceMetadataOptionsRequestProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetIpv6AddressRequestPropertyToTerraform(struct?: CcEC2Fleet.Ipv6AddressRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccEC2FleetIpv6AddressRequestPropertyToHclTerraform(struct?: CcEC2Fleet.Ipv6AddressRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetPrivateIpAddressSpecificationRequestPropertyToTerraform(struct?: CcEC2Fleet.PrivateIpAddressSpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    }
}


export function ccEC2FleetPrivateIpAddressSpecificationRequestPropertyToHclTerraform(struct?: CcEC2Fleet.PrivateIpAddressSpecificationRequestProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetNetworkInterfaceSpecificationRequestPropertyToTerraform(struct?: CcEC2Fleet.NetworkInterfaceSpecificationRequestProperty | cdktn.IResolvable): any {
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
        interface_type: cdktn.stringToTerraform(struct!.interfaceType),
        ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
        ipv_6_addresses: cdktn.listMapper(ccEC2FleetIpv6AddressRequestPropertyToTerraform, false)(struct!.ipv6Addresses),
        network_card_index: cdktn.numberToTerraform(struct!.networkCardIndex),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
        private_ip_addresses: cdktn.listMapper(ccEC2FleetPrivateIpAddressSpecificationRequestPropertyToTerraform, false)(struct!.privateIpAddresses),
        secondary_private_ip_address_count: cdktn.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccEC2FleetNetworkInterfaceSpecificationRequestPropertyToHclTerraform(struct?: CcEC2Fleet.NetworkInterfaceSpecificationRequestProperty | cdktn.IResolvable): any {
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
        interface_type: {
            value: cdktn.stringToHclTerraform(struct!.interfaceType),
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
        ipv_6_addresses: {
            value: cdktn.listMapperHcl(ccEC2FleetIpv6AddressRequestPropertyToHclTerraform, false)(struct!.ipv6Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "Ipv6AddressRequestPropertyList",
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
        private_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_ip_addresses: {
            value: cdktn.listMapperHcl(ccEC2FleetPrivateIpAddressSpecificationRequestPropertyToHclTerraform, false)(struct!.privateIpAddresses),
            isBlock: true,
            type: "list",
            storageClassType: "PrivateIpAddressSpecificationRequestPropertyList",
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


export function ccEC2FleetPlacementPropertyToTerraform(struct?: CcEC2Fleet.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        affinity: cdktn.stringToTerraform(struct!.affinity),
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        host_id: cdktn.stringToTerraform(struct!.hostId),
        host_resource_group_arn: cdktn.stringToTerraform(struct!.hostResourceGroupArn),
        partition_number: cdktn.numberToTerraform(struct!.partitionNumber),
        spread_domain: cdktn.stringToTerraform(struct!.spreadDomain),
        tenancy: cdktn.stringToTerraform(struct!.tenancy),
    }
}


export function ccEC2FleetPlacementPropertyToHclTerraform(struct?: CcEC2Fleet.PlacementProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetFleetLaunchTemplateOverridesRequestPropertyToTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateOverridesRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
        block_device_mappings: cdktn.listMapper(ccEC2FleetBlockDeviceMappingPropertyToTerraform, false)(struct!.blockDeviceMappings),
        iam_instance_profile: ccEC2FleetIamInstanceProfileSpecificationPropertyToTerraform(struct!.iamInstanceProfile),
        instance_requirements: ccEC2FleetInstanceRequirementsRequestPropertyToTerraform(struct!.instanceRequirements),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        key_name: cdktn.stringToTerraform(struct!.keyName),
        max_price: cdktn.stringToTerraform(struct!.maxPrice),
        metadata_options: ccEC2FleetInstanceMetadataOptionsRequestPropertyToTerraform(struct!.metadataOptions),
        network_interfaces: cdktn.listMapper(ccEC2FleetNetworkInterfaceSpecificationRequestPropertyToTerraform, false)(struct!.networkInterfaces),
        placement: ccEC2FleetPlacementPropertyToTerraform(struct!.placement),
        priority: cdktn.numberToTerraform(struct!.priority),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
        weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    }
}


export function ccEC2FleetFleetLaunchTemplateOverridesRequestPropertyToHclTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateOverridesRequestProperty | cdktn.IResolvable): any {
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
        block_device_mappings: {
            value: cdktn.listMapperHcl(ccEC2FleetBlockDeviceMappingPropertyToHclTerraform, false)(struct!.blockDeviceMappings),
            isBlock: true,
            type: "list",
            storageClassType: "BlockDeviceMappingPropertyList",
        },
        iam_instance_profile: {
            value: ccEC2FleetIamInstanceProfileSpecificationPropertyToHclTerraform(struct!.iamInstanceProfile),
            isBlock: true,
            type: "struct",
            storageClassType: "IamInstanceProfileSpecificationProperty",
        },
        instance_requirements: {
            value: ccEC2FleetInstanceRequirementsRequestPropertyToHclTerraform(struct!.instanceRequirements),
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
        key_name: {
            value: cdktn.stringToHclTerraform(struct!.keyName),
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
        metadata_options: {
            value: ccEC2FleetInstanceMetadataOptionsRequestPropertyToHclTerraform(struct!.metadataOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceMetadataOptionsRequestProperty",
        },
        network_interfaces: {
            value: cdktn.listMapperHcl(ccEC2FleetNetworkInterfaceSpecificationRequestPropertyToHclTerraform, false)(struct!.networkInterfaces),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkInterfaceSpecificationRequestPropertyList",
        },
        placement: {
            value: ccEC2FleetPlacementPropertyToHclTerraform(struct!.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PlacementProperty",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
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


export function ccEC2FleetFleetLaunchTemplateConfigRequestPropertyToTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateConfigRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        launch_template_specification: ccEC2FleetFleetLaunchTemplateSpecificationRequestPropertyToTerraform(struct!.launchTemplateSpecification),
        overrides: cdktn.listMapper(ccEC2FleetFleetLaunchTemplateOverridesRequestPropertyToTerraform, false)(struct!.overrides),
    }
}


export function ccEC2FleetFleetLaunchTemplateConfigRequestPropertyToHclTerraform(struct?: CcEC2Fleet.FleetLaunchTemplateConfigRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        launch_template_specification: {
            value: ccEC2FleetFleetLaunchTemplateSpecificationRequestPropertyToHclTerraform(struct!.launchTemplateSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "FleetLaunchTemplateSpecificationRequestProperty",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccEC2FleetFleetLaunchTemplateOverridesRequestPropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "FleetLaunchTemplateOverridesRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetCapacityReservationOptionsRequestPropertyToTerraform(struct?: CcEC2Fleet.CapacityReservationOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        usage_strategy: cdktn.stringToTerraform(struct!.usageStrategy),
    }
}


export function ccEC2FleetCapacityReservationOptionsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.CapacityReservationOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        usage_strategy: {
            value: cdktn.stringToHclTerraform(struct!.usageStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetOnDemandOptionsRequestPropertyToTerraform(struct?: CcEC2Fleet.OnDemandOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
        capacity_reservation_options: ccEC2FleetCapacityReservationOptionsRequestPropertyToTerraform(struct!.capacityReservationOptions),
        max_total_price: cdktn.stringToTerraform(struct!.maxTotalPrice),
        min_target_capacity: cdktn.numberToTerraform(struct!.minTargetCapacity),
        single_availability_zone: cdktn.booleanToTerraform(struct!.singleAvailabilityZone),
        single_instance_type: cdktn.booleanToTerraform(struct!.singleInstanceType),
    }
}


export function ccEC2FleetOnDemandOptionsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.OnDemandOptionsRequestProperty | cdktn.IResolvable): any {
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
        capacity_reservation_options: {
            value: ccEC2FleetCapacityReservationOptionsRequestPropertyToHclTerraform(struct!.capacityReservationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationOptionsRequestProperty",
        },
        max_total_price: {
            value: cdktn.stringToHclTerraform(struct!.maxTotalPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        single_availability_zone: {
            value: cdktn.booleanToHclTerraform(struct!.singleAvailabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        single_instance_type: {
            value: cdktn.booleanToHclTerraform(struct!.singleInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetReservedCapacityOptionsRequestPropertyToTerraform(struct?: CcEC2Fleet.ReservedCapacityOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reservation_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.reservationTypes),
    }
}


export function ccEC2FleetReservedCapacityOptionsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.ReservedCapacityOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reservation_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.reservationTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetCapacityRebalancePropertyToTerraform(struct?: CcEC2Fleet.CapacityRebalanceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replacement_strategy: cdktn.stringToTerraform(struct!.replacementStrategy),
        termination_delay: cdktn.numberToTerraform(struct!.terminationDelay),
    }
}


export function ccEC2FleetCapacityRebalancePropertyToHclTerraform(struct?: CcEC2Fleet.CapacityRebalanceProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetMaintenanceStrategiesPropertyToTerraform(struct?: CcEC2Fleet.MaintenanceStrategiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_rebalance: ccEC2FleetCapacityRebalancePropertyToTerraform(struct!.capacityRebalance),
    }
}


export function ccEC2FleetMaintenanceStrategiesPropertyToHclTerraform(struct?: CcEC2Fleet.MaintenanceStrategiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_rebalance: {
            value: ccEC2FleetCapacityRebalancePropertyToHclTerraform(struct!.capacityRebalance),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityRebalanceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetSpotOptionsRequestPropertyToTerraform(struct?: CcEC2Fleet.SpotOptionsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
        instance_interruption_behavior: cdktn.stringToTerraform(struct!.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktn.numberToTerraform(struct!.instancePoolsToUseCount),
        maintenance_strategies: ccEC2FleetMaintenanceStrategiesPropertyToTerraform(struct!.maintenanceStrategies),
        max_total_price: cdktn.stringToTerraform(struct!.maxTotalPrice),
        min_target_capacity: cdktn.numberToTerraform(struct!.minTargetCapacity),
        single_availability_zone: cdktn.booleanToTerraform(struct!.singleAvailabilityZone),
        single_instance_type: cdktn.booleanToTerraform(struct!.singleInstanceType),
    }
}


export function ccEC2FleetSpotOptionsRequestPropertyToHclTerraform(struct?: CcEC2Fleet.SpotOptionsRequestProperty | cdktn.IResolvable): any {
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
        maintenance_strategies: {
            value: ccEC2FleetMaintenanceStrategiesPropertyToHclTerraform(struct!.maintenanceStrategies),
            isBlock: true,
            type: "struct",
            storageClassType: "MaintenanceStrategiesProperty",
        },
        max_total_price: {
            value: cdktn.stringToHclTerraform(struct!.maxTotalPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        single_availability_zone: {
            value: cdktn.booleanToHclTerraform(struct!.singleAvailabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        single_instance_type: {
            value: cdktn.booleanToHclTerraform(struct!.singleInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetTagPropertyToTerraform(struct?: CcEC2Fleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEC2FleetTagPropertyToHclTerraform(struct?: CcEC2Fleet.TagProperty | cdktn.IResolvable): any {
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


export function ccEC2FleetTagSpecificationPropertyToTerraform(struct?: CcEC2Fleet.TagSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        tags: cdktn.listMapper(ccEC2FleetTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccEC2FleetTagSpecificationPropertyToHclTerraform(struct?: CcEC2Fleet.TagSpecificationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccEC2FleetTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEC2FleetTargetCapacitySpecificationRequestPropertyToTerraform(struct?: CcEC2Fleet.TargetCapacitySpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_target_capacity_type: cdktn.stringToTerraform(struct!.defaultTargetCapacityType),
        on_demand_target_capacity: cdktn.numberToTerraform(struct!.onDemandTargetCapacity),
        spot_target_capacity: cdktn.numberToTerraform(struct!.spotTargetCapacity),
        target_capacity_unit_type: cdktn.stringToTerraform(struct!.targetCapacityUnitType),
        total_target_capacity: cdktn.numberToTerraform(struct!.totalTargetCapacity),
    }
}


export function ccEC2FleetTargetCapacitySpecificationRequestPropertyToHclTerraform(struct?: CcEC2Fleet.TargetCapacitySpecificationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_target_capacity_type: {
            value: cdktn.stringToHclTerraform(struct!.defaultTargetCapacityType),
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
        spot_target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.spotTargetCapacity),
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
        total_target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.totalTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEC2Fleet {
export interface FleetLaunchTemplateSpecificationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_id CcEC2Fleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_name CcEC2Fleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification_user_data CcEC2Fleet#launch_template_specification_user_data}
    */
    readonly launchTemplateSpecificationUserData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#version CcEC2Fleet#version}
    */
    readonly version?: string;
}
export class FleetLaunchTemplateSpecificationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FleetLaunchTemplateSpecificationRequestProperty | cdktn.IResolvable | undefined {
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
        if (this._launchTemplateSpecificationUserData !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecificationUserData = this._launchTemplateSpecificationUserData;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetLaunchTemplateSpecificationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._launchTemplateSpecificationUserData = undefined;
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
            this._launchTemplateSpecificationUserData = value.launchTemplateSpecificationUserData;
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

    // launch_template_specification_user_data - computed: true, optional: true, required: false
    private _launchTemplateSpecificationUserData?: string; 
    public get launchTemplateSpecificationUserData() {
        return this.getStringAttribute('launch_template_specification_user_data');
    }
    public set launchTemplateSpecificationUserData(value: string) {
        this._launchTemplateSpecificationUserData = value;
    }
    public resetLaunchTemplateSpecificationUserData() {
        this._launchTemplateSpecificationUserData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateSpecificationUserDataInput() {
        return this._launchTemplateSpecificationUserData;
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
export interface EbsBlockDeviceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination CcEC2Fleet#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#encrypted CcEC2Fleet#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iops CcEC2Fleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#kms_key_id CcEC2Fleet#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#snapshot_id CcEC2Fleet#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_size CcEC2Fleet#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#volume_type CcEC2Fleet#volume_type}
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
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
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
            this._kmsKeyId = undefined;
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
            this._kmsKeyId = value.kmsKeyId;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_name CcEC2Fleet#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ebs CcEC2Fleet#ebs}
    */
    readonly ebs?: EbsBlockDeviceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#no_device CcEC2Fleet#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#virtual_name CcEC2Fleet#virtual_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#arn CcEC2Fleet#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#name CcEC2Fleet#name}
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
export interface AcceleratorCountRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_family CcEC2Fleet#instance_family}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#references CcEC2Fleet#references}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu CcEC2Fleet#cpu}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max CcEC2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min CcEC2Fleet#min}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_count CcEC2Fleet#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_manufacturers CcEC2Fleet#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_names CcEC2Fleet#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_total_memory_mi_b CcEC2Fleet#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#accelerator_types CcEC2Fleet#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allowed_instance_types CcEC2Fleet#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#bare_metal CcEC2Fleet#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_ebs_bandwidth_mbps CcEC2Fleet#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#baseline_performance_factors CcEC2Fleet#baseline_performance_factors}
    */
    readonly baselinePerformanceFactors?: BaselinePerformanceFactorsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#burstable_performance CcEC2Fleet#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#cpu_manufacturers CcEC2Fleet#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#excluded_instance_types CcEC2Fleet#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_generations CcEC2Fleet#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage CcEC2Fleet#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#local_storage_types CcEC2Fleet#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price CcEC2Fleet#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_gi_b_per_v_cpu CcEC2Fleet#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#memory_mi_b CcEC2Fleet#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_bandwidth_gbps CcEC2Fleet#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_count CcEC2Fleet#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_max_price_percentage_over_lowest_price CcEC2Fleet#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_encryption_in_transit CcEC2Fleet#require_encryption_in_transit}
    */
    readonly requireEncryptionInTransit?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#require_hibernate_support CcEC2Fleet#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_max_price_percentage_over_lowest_price CcEC2Fleet#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_local_storage_gb CcEC2Fleet#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#v_cpu_count CcEC2Fleet#v_cpu_count}
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
export interface InstanceMetadataOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_endpoint CcEC2Fleet#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_put_response_hop_limit CcEC2Fleet#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#http_tokens CcEC2Fleet#http_tokens}
    */
    readonly httpTokens?: string;
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
        if (this._httpPutResponseHopLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
        }
        if (this._httpTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpTokens = this._httpTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMetadataOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpEndpoint = undefined;
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpEndpoint = value.httpEndpoint;
            this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
            this._httpTokens = value.httpTokens;
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
}
export interface Ipv6AddressRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address CcEC2Fleet#ipv_6_address}
    */
    readonly ipv6Address?: string;
}
export class Ipv6AddressRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv6AddressRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: Ipv6AddressRequestProperty | cdktn.IResolvable | undefined) {
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

export class Ipv6AddressRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv6AddressRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv6AddressRequestPropertyOutputReference {
        return new Ipv6AddressRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrivateIpAddressSpecificationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#primary CcEC2Fleet#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address CcEC2Fleet#private_ip_address}
    */
    readonly privateIpAddress?: string;
}
export class PrivateIpAddressSpecificationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateIpAddressSpecificationRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PrivateIpAddressSpecificationRequestProperty | cdktn.IResolvable | undefined) {
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

export class PrivateIpAddressSpecificationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateIpAddressSpecificationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateIpAddressSpecificationRequestPropertyOutputReference {
        return new PrivateIpAddressSpecificationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkInterfaceSpecificationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#associate_public_ip_address CcEC2Fleet#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#delete_on_termination CcEC2Fleet#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#description CcEC2Fleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#device_index CcEC2Fleet#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#groups CcEC2Fleet#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#interface_type CcEC2Fleet#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_address_count CcEC2Fleet#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#ipv_6_addresses CcEC2Fleet#ipv_6_addresses}
    */
    readonly ipv6Addresses?: Ipv6AddressRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_card_index CcEC2Fleet#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interface_id CcEC2Fleet#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_address CcEC2Fleet#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#private_ip_addresses CcEC2Fleet#private_ip_addresses}
    */
    readonly privateIpAddresses?: PrivateIpAddressSpecificationRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#secondary_private_ip_address_count CcEC2Fleet#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id CcEC2Fleet#subnet_id}
    */
    readonly subnetId?: string;
}
export class NetworkInterfaceSpecificationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkInterfaceSpecificationRequestProperty | cdktn.IResolvable | undefined {
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
        if (this._interfaceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceType = this._interfaceType;
        }
        if (this._ipv6AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
        }
        if (this._ipv6Addresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
        }
        if (this._networkCardIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkCardIndex = this._networkCardIndex;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
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

    public set internalValue(value: NetworkInterfaceSpecificationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associatePublicIpAddress = undefined;
            this._deleteOnTermination = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._groups = undefined;
            this._interfaceType = undefined;
            this._ipv6AddressCount = undefined;
            this._ipv6Addresses.internalValue = undefined;
            this._networkCardIndex = undefined;
            this._networkInterfaceId = undefined;
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
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._deleteOnTermination = value.deleteOnTermination;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._groups = value.groups;
            this._interfaceType = value.interfaceType;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._ipv6Addresses.internalValue = value.ipv6Addresses;
            this._networkCardIndex = value.networkCardIndex;
            this._networkInterfaceId = value.networkInterfaceId;
            this._privateIpAddress = value.privateIpAddress;
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
    private _ipv6Addresses = new Ipv6AddressRequestPropertyList(this, "ipv_6_addresses", false);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: Ipv6AddressRequestProperty[] | cdktn.IResolvable) {
        this._ipv6Addresses.internalValue = value;
    }
    public resetIpv6Addresses() {
        this._ipv6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
        return this._ipv6Addresses.internalValue;
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
    private _privateIpAddresses = new PrivateIpAddressSpecificationRequestPropertyList(this, "private_ip_addresses", false);
    public get privateIpAddresses() {
        return this._privateIpAddresses;
    }
    public putPrivateIpAddresses(value: PrivateIpAddressSpecificationRequestProperty[] | cdktn.IResolvable) {
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

export class NetworkInterfaceSpecificationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkInterfaceSpecificationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkInterfaceSpecificationRequestPropertyOutputReference {
        return new NetworkInterfaceSpecificationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlacementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#affinity CcEC2Fleet#affinity}
    */
    readonly affinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone CcEC2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#group_name CcEC2Fleet#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_id CcEC2Fleet#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#host_resource_group_arn CcEC2Fleet#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#partition_number CcEC2Fleet#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spread_domain CcEC2Fleet#spread_domain}
    */
    readonly spreadDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tenancy CcEC2Fleet#tenancy}
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
export interface FleetLaunchTemplateOverridesRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone CcEC2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#availability_zone_id CcEC2Fleet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#block_device_mappings CcEC2Fleet#block_device_mappings}
    */
    readonly blockDeviceMappings?: BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#iam_instance_profile CcEC2Fleet#iam_instance_profile}
    */
    readonly iamInstanceProfile?: IamInstanceProfileSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_requirements CcEC2Fleet#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_type CcEC2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key_name CcEC2Fleet#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_price CcEC2Fleet#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#metadata_options CcEC2Fleet#metadata_options}
    */
    readonly metadataOptions?: InstanceMetadataOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#network_interfaces CcEC2Fleet#network_interfaces}
    */
    readonly networkInterfaces?: NetworkInterfaceSpecificationRequestProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#placement CcEC2Fleet#placement}
    */
    readonly placement?: PlacementProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#priority CcEC2Fleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#subnet_id CcEC2Fleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#weighted_capacity CcEC2Fleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
}
export class FleetLaunchTemplateOverridesRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FleetLaunchTemplateOverridesRequestProperty | cdktn.IResolvable | undefined {
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
        if (this._blockDeviceMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDeviceMappings = this._blockDeviceMappings?.internalValue;
        }
        if (this._iamInstanceProfile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamInstanceProfile = this._iamInstanceProfile?.internalValue;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._keyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyName = this._keyName;
        }
        if (this._maxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPrice = this._maxPrice;
        }
        if (this._metadataOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
        }
        if (this._networkInterfaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
        }
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
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

    public set internalValue(value: FleetLaunchTemplateOverridesRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._availabilityZoneId = undefined;
            this._blockDeviceMappings.internalValue = undefined;
            this._iamInstanceProfile.internalValue = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceType = undefined;
            this._keyName = undefined;
            this._maxPrice = undefined;
            this._metadataOptions.internalValue = undefined;
            this._networkInterfaces.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._priority = undefined;
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
            this._blockDeviceMappings.internalValue = value.blockDeviceMappings;
            this._iamInstanceProfile.internalValue = value.iamInstanceProfile;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceType = value.instanceType;
            this._keyName = value.keyName;
            this._maxPrice = value.maxPrice;
            this._metadataOptions.internalValue = value.metadataOptions;
            this._networkInterfaces.internalValue = value.networkInterfaces;
            this._placement.internalValue = value.placement;
            this._priority = value.priority;
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

    // network_interfaces - computed: true, optional: true, required: false
    private _networkInterfaces = new NetworkInterfaceSpecificationRequestPropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }
    public putNetworkInterfaces(value: NetworkInterfaceSpecificationRequestProperty[] | cdktn.IResolvable) {
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

export class FleetLaunchTemplateOverridesRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : FleetLaunchTemplateOverridesRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): FleetLaunchTemplateOverridesRequestPropertyOutputReference {
        return new FleetLaunchTemplateOverridesRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FleetLaunchTemplateConfigRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#launch_template_specification CcEC2Fleet#launch_template_specification}
    */
    readonly launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#overrides CcEC2Fleet#overrides}
    */
    readonly overrides?: FleetLaunchTemplateOverridesRequestProperty[] | cdktn.IResolvable;
}
export class FleetLaunchTemplateConfigRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FleetLaunchTemplateConfigRequestProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FleetLaunchTemplateConfigRequestProperty | cdktn.IResolvable | undefined) {
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
    private _launchTemplateSpecification = new FleetLaunchTemplateSpecificationRequestPropertyOutputReference(this, "launch_template_specification");
    public get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    public putLaunchTemplateSpecification(value: FleetLaunchTemplateSpecificationRequestProperty) {
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
    private _overrides = new FleetLaunchTemplateOverridesRequestPropertyList(this, "overrides", false);
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: FleetLaunchTemplateOverridesRequestProperty[] | cdktn.IResolvable) {
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

export class FleetLaunchTemplateConfigRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : FleetLaunchTemplateConfigRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): FleetLaunchTemplateConfigRequestPropertyOutputReference {
        return new FleetLaunchTemplateConfigRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacityReservationOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#usage_strategy CcEC2Fleet#usage_strategy}
    */
    readonly usageStrategy?: string;
}
export class CapacityReservationOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._usageStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageStrategy = this._usageStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._usageStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._usageStrategy = value.usageStrategy;
        }
    }

    // usage_strategy - computed: true, optional: true, required: false
    private _usageStrategy?: string; 
    public get usageStrategy() {
        return this.getStringAttribute('usage_strategy');
    }
    public set usageStrategy(value: string) {
        this._usageStrategy = value;
    }
    public resetUsageStrategy() {
        this._usageStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageStrategyInput() {
        return this._usageStrategy;
    }
}
export interface OnDemandOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy CcEC2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_reservation_options CcEC2Fleet#capacity_reservation_options}
    */
    readonly capacityReservationOptions?: CapacityReservationOptionsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price CcEC2Fleet#max_total_price}
    */
    readonly maxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity CcEC2Fleet#min_target_capacity}
    */
    readonly minTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone CcEC2Fleet#single_availability_zone}
    */
    readonly singleAvailabilityZone?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type CcEC2Fleet#single_instance_type}
    */
    readonly singleInstanceType?: boolean | cdktn.IResolvable;
}
export class OnDemandOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnDemandOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._capacityReservationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationOptions = this._capacityReservationOptions?.internalValue;
        }
        if (this._maxTotalPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTotalPrice = this._maxTotalPrice;
        }
        if (this._minTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTargetCapacity = this._minTargetCapacity;
        }
        if (this._singleAvailabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleAvailabilityZone = this._singleAvailabilityZone;
        }
        if (this._singleInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleInstanceType = this._singleInstanceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnDemandOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationStrategy = undefined;
            this._capacityReservationOptions.internalValue = undefined;
            this._maxTotalPrice = undefined;
            this._minTargetCapacity = undefined;
            this._singleAvailabilityZone = undefined;
            this._singleInstanceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationStrategy = value.allocationStrategy;
            this._capacityReservationOptions.internalValue = value.capacityReservationOptions;
            this._maxTotalPrice = value.maxTotalPrice;
            this._minTargetCapacity = value.minTargetCapacity;
            this._singleAvailabilityZone = value.singleAvailabilityZone;
            this._singleInstanceType = value.singleInstanceType;
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

    // capacity_reservation_options - computed: true, optional: true, required: false
    private _capacityReservationOptions = new CapacityReservationOptionsRequestPropertyOutputReference(this, "capacity_reservation_options");
    public get capacityReservationOptions() {
        return this._capacityReservationOptions;
    }
    public putCapacityReservationOptions(value: CapacityReservationOptionsRequestProperty) {
        this._capacityReservationOptions.internalValue = value;
    }
    public resetCapacityReservationOptions() {
        this._capacityReservationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationOptionsInput() {
        return this._capacityReservationOptions.internalValue;
    }

    // max_total_price - computed: true, optional: true, required: false
    private _maxTotalPrice?: string; 
    public get maxTotalPrice() {
        return this.getStringAttribute('max_total_price');
    }
    public set maxTotalPrice(value: string) {
        this._maxTotalPrice = value;
    }
    public resetMaxTotalPrice() {
        this._maxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTotalPriceInput() {
        return this._maxTotalPrice;
    }

    // min_target_capacity - computed: true, optional: true, required: false
    private _minTargetCapacity?: number; 
    public get minTargetCapacity() {
        return this.getNumberAttribute('min_target_capacity');
    }
    public set minTargetCapacity(value: number) {
        this._minTargetCapacity = value;
    }
    public resetMinTargetCapacity() {
        this._minTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTargetCapacityInput() {
        return this._minTargetCapacity;
    }

    // single_availability_zone - computed: true, optional: true, required: false
    private _singleAvailabilityZone?: boolean | cdktn.IResolvable; 
    public get singleAvailabilityZone() {
        return this.getBooleanAttribute('single_availability_zone');
    }
    public set singleAvailabilityZone(value: boolean | cdktn.IResolvable) {
        this._singleAvailabilityZone = value;
    }
    public resetSingleAvailabilityZone() {
        this._singleAvailabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleAvailabilityZoneInput() {
        return this._singleAvailabilityZone;
    }

    // single_instance_type - computed: true, optional: true, required: false
    private _singleInstanceType?: boolean | cdktn.IResolvable; 
    public get singleInstanceType() {
        return this.getBooleanAttribute('single_instance_type');
    }
    public set singleInstanceType(value: boolean | cdktn.IResolvable) {
        this._singleInstanceType = value;
    }
    public resetSingleInstanceType() {
        this._singleInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleInstanceTypeInput() {
        return this._singleInstanceType;
    }
}
export interface ReservedCapacityOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#reservation_types CcEC2Fleet#reservation_types}
    */
    readonly reservationTypes?: string[];
}
export class ReservedCapacityOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReservedCapacityOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reservationTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservationTypes = this._reservationTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReservedCapacityOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reservationTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reservationTypes = value.reservationTypes;
        }
    }

    // reservation_types - computed: true, optional: true, required: false
    private _reservationTypes?: string[]; 
    public get reservationTypes() {
        return this.getListAttribute('reservation_types');
    }
    public set reservationTypes(value: string[]) {
        this._reservationTypes = value;
    }
    public resetReservationTypes() {
        this._reservationTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservationTypesInput() {
        return this._reservationTypes;
    }
}
export interface CapacityRebalanceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#replacement_strategy CcEC2Fleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#termination_delay CcEC2Fleet#termination_delay}
    */
    readonly terminationDelay?: number;
}
export class CapacityRebalancePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityRebalanceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CapacityRebalanceProperty | cdktn.IResolvable | undefined) {
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
export interface MaintenanceStrategiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#capacity_rebalance CcEC2Fleet#capacity_rebalance}
    */
    readonly capacityRebalance?: CapacityRebalanceProperty;
}
export class MaintenanceStrategiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceStrategiesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MaintenanceStrategiesProperty | cdktn.IResolvable | undefined) {
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
    private _capacityRebalance = new CapacityRebalancePropertyOutputReference(this, "capacity_rebalance");
    public get capacityRebalance() {
        return this._capacityRebalance;
    }
    public putCapacityRebalance(value: CapacityRebalanceProperty) {
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
export interface SpotOptionsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#allocation_strategy CcEC2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_interruption_behavior CcEC2Fleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#instance_pools_to_use_count CcEC2Fleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#maintenance_strategies CcEC2Fleet#maintenance_strategies}
    */
    readonly maintenanceStrategies?: MaintenanceStrategiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#max_total_price CcEC2Fleet#max_total_price}
    */
    readonly maxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#min_target_capacity CcEC2Fleet#min_target_capacity}
    */
    readonly minTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_availability_zone CcEC2Fleet#single_availability_zone}
    */
    readonly singleAvailabilityZone?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#single_instance_type CcEC2Fleet#single_instance_type}
    */
    readonly singleInstanceType?: boolean | cdktn.IResolvable;
}
export class SpotOptionsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpotOptionsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._instanceInterruptionBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._instancePoolsToUseCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
        }
        if (this._maintenanceStrategies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maintenanceStrategies = this._maintenanceStrategies?.internalValue;
        }
        if (this._maxTotalPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTotalPrice = this._maxTotalPrice;
        }
        if (this._minTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTargetCapacity = this._minTargetCapacity;
        }
        if (this._singleAvailabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleAvailabilityZone = this._singleAvailabilityZone;
        }
        if (this._singleInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleInstanceType = this._singleInstanceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpotOptionsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationStrategy = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._instancePoolsToUseCount = undefined;
            this._maintenanceStrategies.internalValue = undefined;
            this._maxTotalPrice = undefined;
            this._minTargetCapacity = undefined;
            this._singleAvailabilityZone = undefined;
            this._singleInstanceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationStrategy = value.allocationStrategy;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._instancePoolsToUseCount = value.instancePoolsToUseCount;
            this._maintenanceStrategies.internalValue = value.maintenanceStrategies;
            this._maxTotalPrice = value.maxTotalPrice;
            this._minTargetCapacity = value.minTargetCapacity;
            this._singleAvailabilityZone = value.singleAvailabilityZone;
            this._singleInstanceType = value.singleInstanceType;
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

    // maintenance_strategies - computed: true, optional: true, required: false
    private _maintenanceStrategies = new MaintenanceStrategiesPropertyOutputReference(this, "maintenance_strategies");
    public get maintenanceStrategies() {
        return this._maintenanceStrategies;
    }
    public putMaintenanceStrategies(value: MaintenanceStrategiesProperty) {
        this._maintenanceStrategies.internalValue = value;
    }
    public resetMaintenanceStrategies() {
        this._maintenanceStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceStrategiesInput() {
        return this._maintenanceStrategies.internalValue;
    }

    // max_total_price - computed: true, optional: true, required: false
    private _maxTotalPrice?: string; 
    public get maxTotalPrice() {
        return this.getStringAttribute('max_total_price');
    }
    public set maxTotalPrice(value: string) {
        this._maxTotalPrice = value;
    }
    public resetMaxTotalPrice() {
        this._maxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTotalPriceInput() {
        return this._maxTotalPrice;
    }

    // min_target_capacity - computed: true, optional: true, required: false
    private _minTargetCapacity?: number; 
    public get minTargetCapacity() {
        return this.getNumberAttribute('min_target_capacity');
    }
    public set minTargetCapacity(value: number) {
        this._minTargetCapacity = value;
    }
    public resetMinTargetCapacity() {
        this._minTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTargetCapacityInput() {
        return this._minTargetCapacity;
    }

    // single_availability_zone - computed: true, optional: true, required: false
    private _singleAvailabilityZone?: boolean | cdktn.IResolvable; 
    public get singleAvailabilityZone() {
        return this.getBooleanAttribute('single_availability_zone');
    }
    public set singleAvailabilityZone(value: boolean | cdktn.IResolvable) {
        this._singleAvailabilityZone = value;
    }
    public resetSingleAvailabilityZone() {
        this._singleAvailabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleAvailabilityZoneInput() {
        return this._singleAvailabilityZone;
    }

    // single_instance_type - computed: true, optional: true, required: false
    private _singleInstanceType?: boolean | cdktn.IResolvable; 
    public get singleInstanceType() {
        return this.getBooleanAttribute('single_instance_type');
    }
    public set singleInstanceType(value: boolean | cdktn.IResolvable) {
        this._singleInstanceType = value;
    }
    public resetSingleInstanceType() {
        this._singleInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleInstanceTypeInput() {
        return this._singleInstanceType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#key CcEC2Fleet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#value CcEC2Fleet#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#resource_type CcEC2Fleet#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#tags CcEC2Fleet#tags}
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
export interface TargetCapacitySpecificationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#default_target_capacity_type CcEC2Fleet#default_target_capacity_type}
    */
    readonly defaultTargetCapacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#on_demand_target_capacity CcEC2Fleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#spot_target_capacity CcEC2Fleet#spot_target_capacity}
    */
    readonly spotTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#target_capacity_unit_type CcEC2Fleet#target_capacity_unit_type}
    */
    readonly targetCapacityUnitType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ec2_fleet#total_target_capacity CcEC2Fleet#total_target_capacity}
    */
    readonly totalTargetCapacity: number;
}
export class TargetCapacitySpecificationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetCapacitySpecificationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultTargetCapacityType !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultTargetCapacityType = this._defaultTargetCapacityType;
        }
        if (this._onDemandTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandTargetCapacity = this._onDemandTargetCapacity;
        }
        if (this._spotTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotTargetCapacity = this._spotTargetCapacity;
        }
        if (this._targetCapacityUnitType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacityUnitType = this._targetCapacityUnitType;
        }
        if (this._totalTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalTargetCapacity = this._totalTargetCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetCapacitySpecificationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultTargetCapacityType = undefined;
            this._onDemandTargetCapacity = undefined;
            this._spotTargetCapacity = undefined;
            this._targetCapacityUnitType = undefined;
            this._totalTargetCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultTargetCapacityType = value.defaultTargetCapacityType;
            this._onDemandTargetCapacity = value.onDemandTargetCapacity;
            this._spotTargetCapacity = value.spotTargetCapacity;
            this._targetCapacityUnitType = value.targetCapacityUnitType;
            this._totalTargetCapacity = value.totalTargetCapacity;
        }
    }

    // default_target_capacity_type - computed: true, optional: true, required: false
    private _defaultTargetCapacityType?: string; 
    public get defaultTargetCapacityType() {
        return this.getStringAttribute('default_target_capacity_type');
    }
    public set defaultTargetCapacityType(value: string) {
        this._defaultTargetCapacityType = value;
    }
    public resetDefaultTargetCapacityType() {
        this._defaultTargetCapacityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTargetCapacityTypeInput() {
        return this._defaultTargetCapacityType;
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

    // spot_target_capacity - computed: true, optional: true, required: false
    private _spotTargetCapacity?: number; 
    public get spotTargetCapacity() {
        return this.getNumberAttribute('spot_target_capacity');
    }
    public set spotTargetCapacity(value: number) {
        this._spotTargetCapacity = value;
    }
    public resetSpotTargetCapacity() {
        this._spotTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotTargetCapacityInput() {
        return this._spotTargetCapacity;
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

    // total_target_capacity - computed: false, optional: false, required: true
    private _totalTargetCapacity?: number; 
    public get totalTargetCapacity() {
        return this.getNumberAttribute('total_target_capacity');
    }
    public set totalTargetCapacity(value: number) {
        this._totalTargetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get totalTargetCapacityInput() {
        return this._totalTargetCapacity;
    }
}
}
