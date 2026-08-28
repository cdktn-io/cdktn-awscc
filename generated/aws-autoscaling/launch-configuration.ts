// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address CcLaunchConfiguration#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#block_device_mappings CcLaunchConfiguration#block_device_mappings}
    */
    readonly blockDeviceMappings?: CcLaunchConfiguration.BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id CcLaunchConfiguration#classic_link_vpc_id}
    */
    readonly classicLinkVpcId?: string;
    /**
    * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups CcLaunchConfiguration#classic_link_vpc_security_groups}
    */
    readonly classicLinkVpcSecurityGroups?: string[];
    /**
    * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#ebs_optimized CcLaunchConfiguration#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile CcLaunchConfiguration#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#image_id CcLaunchConfiguration#image_id}
    */
    readonly imageId: string;
    /**
    * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#instance_id CcLaunchConfiguration#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#instance_monitoring CcLaunchConfiguration#instance_monitoring}
    */
    readonly instanceMonitoring?: boolean | cdktn.IResolvable;
    /**
    * Specifies the instance type of the EC2 instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#instance_type CcLaunchConfiguration#instance_type}
    */
    readonly instanceType: string;
    /**
    * Provides the ID of the kernel associated with the EC2 AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#kernel_id CcLaunchConfiguration#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Provides the name of the EC2 key pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#key_name CcLaunchConfiguration#key_name}
    */
    readonly keyName?: string;
    /**
    * The name of the launch configuration. This name must be unique per Region per account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name CcLaunchConfiguration#launch_configuration_name}
    */
    readonly launchConfigurationName?: string;
    /**
    * The metadata options for the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#metadata_options CcLaunchConfiguration#metadata_options}
    */
    readonly metadataOptions?: CcLaunchConfiguration.MetadataOptionsProperty;
    /**
    * The tenancy of the instance, either default or dedicated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#placement_tenancy CcLaunchConfiguration#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * The ID of the RAM disk to select.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#ram_disk_id CcLaunchConfiguration#ram_disk_id}
    */
    readonly ramDiskId?: string;
    /**
    * A list that contains the security groups to assign to the instances in the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#security_groups CcLaunchConfiguration#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#spot_price CcLaunchConfiguration#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * The Base64-encoded user data to make available to the launched EC2 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#user_data CcLaunchConfiguration#user_data}
    */
    readonly userData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}
*/
export class CcLaunchConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscaling_launch_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunchConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunchConfiguration to import
    * @param importFromId The id of the existing CcLaunchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunchConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_launch_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscaling_launch_configuration',
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
        this._associatePublicIpAddress = config.associatePublicIpAddress;
        this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
        this._classicLinkVpcId = config.classicLinkVpcId;
        this._classicLinkVpcSecurityGroups = config.classicLinkVpcSecurityGroups;
        this._ebsOptimized = config.ebsOptimized;
        this._iamInstanceProfile = config.iamInstanceProfile;
        this._imageId = config.imageId;
        this._instanceId = config.instanceId;
        this._instanceMonitoring = config.instanceMonitoring;
        this._instanceType = config.instanceType;
        this._kernelId = config.kernelId;
        this._keyName = config.keyName;
        this._launchConfigurationName = config.launchConfigurationName;
        this._metadataOptions.internalValue = config.metadataOptions;
        this._placementTenancy = config.placementTenancy;
        this._ramDiskId = config.ramDiskId;
        this._securityGroups = config.securityGroups;
        this._spotPrice = config.spotPrice;
        this._userData = config.userData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // block_device_mappings - computed: true, optional: true, required: false
    private _blockDeviceMappings = new CcLaunchConfiguration.BlockDeviceMappingPropertyList(this, "block_device_mappings", true);
    public get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    public putBlockDeviceMappings(value: CcLaunchConfiguration.BlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._blockDeviceMappings.internalValue = value;
    }
    public resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
    }

    // classic_link_vpc_id - computed: true, optional: true, required: false
    private _classicLinkVpcId?: string; 
    public get classicLinkVpcId() {
        return this.getStringAttribute('classic_link_vpc_id');
    }
    public set classicLinkVpcId(value: string) {
        this._classicLinkVpcId = value;
    }
    public resetClassicLinkVpcId() {
        this._classicLinkVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicLinkVpcIdInput() {
        return this._classicLinkVpcId;
    }

    // classic_link_vpc_security_groups - computed: true, optional: true, required: false
    private _classicLinkVpcSecurityGroups?: string[]; 
    public get classicLinkVpcSecurityGroups() {
        return this.getListAttribute('classic_link_vpc_security_groups');
    }
    public set classicLinkVpcSecurityGroups(value: string[]) {
        this._classicLinkVpcSecurityGroups = value;
    }
    public resetClassicLinkVpcSecurityGroups() {
        this._classicLinkVpcSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicLinkVpcSecurityGroupsInput() {
        return this._classicLinkVpcSecurityGroups;
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
    private _iamInstanceProfile?: string; 
    public get iamInstanceProfile() {
        return this.getStringAttribute('iam_instance_profile');
    }
    public set iamInstanceProfile(value: string) {
        this._iamInstanceProfile = value;
    }
    public resetIamInstanceProfile() {
        this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInstanceProfileInput() {
        return this._iamInstanceProfile;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_id - computed: false, optional: false, required: true
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // instance_monitoring - computed: true, optional: true, required: false
    private _instanceMonitoring?: boolean | cdktn.IResolvable; 
    public get instanceMonitoring() {
        return this.getBooleanAttribute('instance_monitoring');
    }
    public set instanceMonitoring(value: boolean | cdktn.IResolvable) {
        this._instanceMonitoring = value;
    }
    public resetInstanceMonitoring() {
        this._instanceMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMonitoringInput() {
        return this._instanceMonitoring;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
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

    // launch_configuration_name - computed: true, optional: true, required: false
    private _launchConfigurationName?: string; 
    public get launchConfigurationName() {
        return this.getStringAttribute('launch_configuration_name');
    }
    public set launchConfigurationName(value: string) {
        this._launchConfigurationName = value;
    }
    public resetLaunchConfigurationName() {
        this._launchConfigurationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchConfigurationNameInput() {
        return this._launchConfigurationName;
    }

    // metadata_options - computed: true, optional: true, required: false
    private _metadataOptions = new CcLaunchConfiguration.MetadataOptionsPropertyOutputReference(this, "metadata_options");
    public get metadataOptions() {
        return this._metadataOptions;
    }
    public putMetadataOptions(value: CcLaunchConfiguration.MetadataOptionsProperty) {
        this._metadataOptions.internalValue = value;
    }
    public resetMetadataOptions() {
        this._metadataOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOptionsInput() {
        return this._metadataOptions.internalValue;
    }

    // placement_tenancy - computed: true, optional: true, required: false
    private _placementTenancy?: string; 
    public get placementTenancy() {
        return this.getStringAttribute('placement_tenancy');
    }
    public set placementTenancy(value: string) {
        this._placementTenancy = value;
    }
    public resetPlacementTenancy() {
        this._placementTenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementTenancyInput() {
        return this._placementTenancy;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associate_public_ip_address: cdktn.booleanToTerraform(this._associatePublicIpAddress),
            block_device_mappings: cdktn.listMapper(ccLaunchConfigurationBlockDeviceMappingPropertyToTerraform, false)(this._blockDeviceMappings.internalValue),
            classic_link_vpc_id: cdktn.stringToTerraform(this._classicLinkVpcId),
            classic_link_vpc_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._classicLinkVpcSecurityGroups),
            ebs_optimized: cdktn.booleanToTerraform(this._ebsOptimized),
            iam_instance_profile: cdktn.stringToTerraform(this._iamInstanceProfile),
            image_id: cdktn.stringToTerraform(this._imageId),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            instance_monitoring: cdktn.booleanToTerraform(this._instanceMonitoring),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            kernel_id: cdktn.stringToTerraform(this._kernelId),
            key_name: cdktn.stringToTerraform(this._keyName),
            launch_configuration_name: cdktn.stringToTerraform(this._launchConfigurationName),
            metadata_options: ccLaunchConfigurationMetadataOptionsPropertyToTerraform(this._metadataOptions.internalValue),
            placement_tenancy: cdktn.stringToTerraform(this._placementTenancy),
            ram_disk_id: cdktn.stringToTerraform(this._ramDiskId),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            spot_price: cdktn.stringToTerraform(this._spotPrice),
            user_data: cdktn.stringToTerraform(this._userData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associate_public_ip_address: {
                value: cdktn.booleanToHclTerraform(this._associatePublicIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            block_device_mappings: {
                value: cdktn.listMapperHcl(ccLaunchConfigurationBlockDeviceMappingPropertyToHclTerraform, false)(this._blockDeviceMappings.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLaunchConfiguration.BlockDeviceMappingPropertyList",
            },
            classic_link_vpc_id: {
                value: cdktn.stringToHclTerraform(this._classicLinkVpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            classic_link_vpc_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._classicLinkVpcSecurityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ebs_optimized: {
                value: cdktn.booleanToHclTerraform(this._ebsOptimized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            iam_instance_profile: {
                value: cdktn.stringToHclTerraform(this._iamInstanceProfile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_id: {
                value: cdktn.stringToHclTerraform(this._imageId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_monitoring: {
                value: cdktn.booleanToHclTerraform(this._instanceMonitoring),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kernel_id: {
                value: cdktn.stringToHclTerraform(this._kernelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_name: {
                value: cdktn.stringToHclTerraform(this._keyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_configuration_name: {
                value: cdktn.stringToHclTerraform(this._launchConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata_options: {
                value: ccLaunchConfigurationMetadataOptionsPropertyToHclTerraform(this._metadataOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLaunchConfiguration.MetadataOptionsProperty",
            },
            placement_tenancy: {
                value: cdktn.stringToHclTerraform(this._placementTenancy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ram_disk_id: {
                value: cdktn.stringToHclTerraform(this._ramDiskId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            spot_price: {
                value: cdktn.stringToHclTerraform(this._spotPrice),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_data: {
                value: cdktn.stringToHclTerraform(this._userData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLaunchConfigurationBlockDevicePropertyToTerraform(struct?: CcLaunchConfiguration.BlockDeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        encrypted: cdktn.booleanToTerraform(struct!.encrypted),
        iops: cdktn.numberToTerraform(struct!.iops),
        snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccLaunchConfigurationBlockDevicePropertyToHclTerraform(struct?: CcLaunchConfiguration.BlockDeviceProperty | cdktn.IResolvable): any {
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


export function ccLaunchConfigurationBlockDeviceMappingPropertyToTerraform(struct?: CcLaunchConfiguration.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccLaunchConfigurationBlockDevicePropertyToTerraform(struct!.ebs),
        no_device: cdktn.booleanToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccLaunchConfigurationBlockDeviceMappingPropertyToHclTerraform(struct?: CcLaunchConfiguration.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccLaunchConfigurationBlockDevicePropertyToHclTerraform(struct!.ebs),
            isBlock: true,
            type: "struct",
            storageClassType: "BlockDeviceProperty",
        },
        no_device: {
            value: cdktn.booleanToHclTerraform(struct!.noDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccLaunchConfigurationMetadataOptionsPropertyToTerraform(struct?: CcLaunchConfiguration.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export function ccLaunchConfigurationMetadataOptionsPropertyToHclTerraform(struct?: CcLaunchConfiguration.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export namespace CcLaunchConfiguration {
export interface BlockDeviceProperty {
    /**
    * Indicates whether the volume is deleted on instance termination. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#delete_on_termination CcLaunchConfiguration#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the volume should be encrypted. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#encrypted CcLaunchConfiguration#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of input/output (I/O) operations per second (IOPS) to provision for the volume. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#iops CcLaunchConfiguration#iops}
    */
    readonly iops?: number;
    /**
    * The snapshot ID of the volume to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#snapshot_id CcLaunchConfiguration#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The throughput (MiBps) to provision for a gp3 volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#throughput CcLaunchConfiguration#throughput}
    */
    readonly throughput?: number;
    /**
    * The volume size, in GiBs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#volume_size CcLaunchConfiguration#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * The volume type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#volume_type CcLaunchConfiguration#volume_type}
    */
    readonly volumeType?: string;
}
export class BlockDevicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlockDeviceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BlockDeviceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
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
    * The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#device_name CcLaunchConfiguration#device_name}
    */
    readonly deviceName?: string;
    /**
    * Parameters used to automatically set up EBS volumes when an instance is launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#ebs CcLaunchConfiguration#ebs}
    */
    readonly ebs?: BlockDeviceProperty;
    /**
    * Setting this value to true suppresses the specified device included in the block device mapping of the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#no_device CcLaunchConfiguration#no_device}
    */
    readonly noDevice?: boolean | cdktn.IResolvable;
    /**
    * The name of the virtual device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#virtual_name CcLaunchConfiguration#virtual_name}
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
    private _ebs = new BlockDevicePropertyOutputReference(this, "ebs");
    public get ebs() {
        return this._ebs;
    }
    public putEbs(value: BlockDeviceProperty) {
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
    private _noDevice?: boolean | cdktn.IResolvable; 
    public get noDevice() {
        return this.getBooleanAttribute('no_device');
    }
    public set noDevice(value: boolean | cdktn.IResolvable) {
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
export interface MetadataOptionsProperty {
    /**
    * This parameter enables or disables the HTTP metadata endpoint on your instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#http_endpoint CcLaunchConfiguration#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * The desired HTTP PUT response hop limit for instance metadata requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit CcLaunchConfiguration#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * The state of token usage for your instance metadata requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_launch_configuration#http_tokens CcLaunchConfiguration#http_tokens}
    */
    readonly httpTokens?: string;
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

    public set internalValue(value: MetadataOptionsProperty | cdktn.IResolvable | undefined) {
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
}
