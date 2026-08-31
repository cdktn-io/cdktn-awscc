// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#additional_info CcInstance#additional_info}
    */
    readonly additionalInfo?: string;
    /**
    * Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#affinity CcInstance#affinity}
    */
    readonly affinity?: string;
    /**
    * The Availability Zone of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#availability_zone CcInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The block device mapping entries that defines the block devices to attach to the instance at launch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#block_device_mappings CcInstance#block_device_mappings}
    */
    readonly blockDeviceMappings?: CcInstance.BlockDeviceMappingProperty[] | cdktn.IResolvable;
    /**
    * The CPU options for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#cpu_options CcInstance#cpu_options}
    */
    readonly cpuOptions?: CcInstance.CpuOptionsProperty;
    /**
    * The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#credit_specification CcInstance#credit_specification}
    */
    readonly creditSpecification?: CcInstance.CreditSpecificationProperty;
    /**
    * If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#disable_api_termination CcInstance#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the instance is optimized for Amazon EBS I/O.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ebs_optimized CcInstance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktn.IResolvable;
    /**
    * An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#elastic_gpu_specifications CcInstance#elastic_gpu_specifications}
    */
    readonly elasticGpuSpecifications?: CcInstance.ElasticGpuSpecificationProperty[] | cdktn.IResolvable;
    /**
    * An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#elastic_inference_accelerators CcInstance#elastic_inference_accelerators}
    */
    readonly elasticInferenceAccelerators?: CcInstance.ElasticInferenceAcceleratorProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the instance is enabled for AWS Nitro Enclaves.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enclave_options CcInstance#enclave_options}
    */
    readonly enclaveOptions?: CcInstance.EnclaveOptionsProperty;
    /**
    * Indicates whether an instance is enabled for hibernation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#hibernation_options CcInstance#hibernation_options}
    */
    readonly hibernationOptions?: CcInstance.HibernationOptionsProperty;
    /**
    * If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#host_id CcInstance#host_id}
    */
    readonly hostId?: string;
    /**
    * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#host_resource_group_arn CcInstance#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * The IAM instance profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#iam_instance_profile CcInstance#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#image_id CcInstance#image_id}
    */
    readonly imageId?: string;
    /**
    * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior CcInstance#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * The instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_type CcInstance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address_count CcInstance#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_addresses CcInstance#ipv_6_addresses}
    */
    readonly ipv6Addresses?: CcInstance.InstanceIpv6AddressProperty[] | cdktn.IResolvable;
    /**
    * The ID of the kernel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#kernel_id CcInstance#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * The name of the key pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key_name CcInstance#key_name}
    */
    readonly keyName?: string;
    /**
    * The launch template to use to launch the instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template CcInstance#launch_template}
    */
    readonly launchTemplate?: CcInstance.LaunchTemplateSpecificationProperty;
    /**
    * The license configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#license_specifications CcInstance#license_specifications}
    */
    readonly licenseSpecifications?: CcInstance.LicenseSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The metadata options for the instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#metadata_options CcInstance#metadata_options}
    */
    readonly metadataOptions?: CcInstance.MetadataOptionsProperty;
    /**
    * Specifies whether detailed monitoring is enabled for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#monitoring CcInstance#monitoring}
    */
    readonly monitoring?: boolean | cdktn.IResolvable;
    /**
    * The network interfaces to associate with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#network_interfaces CcInstance#network_interfaces}
    */
    readonly networkInterfaces?: CcInstance.NetworkInterfaceProperty[] | cdktn.IResolvable;
    /**
    * The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#placement_group_name CcInstance#placement_group_name}
    */
    readonly placementGroupName?: string;
    /**
    * The options for the instance hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_dns_name_options CcInstance#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: CcInstance.PrivateDnsNameOptionsProperty;
    /**
    * [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address CcInstance#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation CcInstance#propagate_tags_to_volume_on_creation}
    */
    readonly propagateTagsToVolumeOnCreation?: boolean | cdktn.IResolvable;
    /**
    * The ID of the RAM disk to select.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ramdisk_id CcInstance#ramdisk_id}
    */
    readonly ramdiskId?: string;
    /**
    * The IDs of the security groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#security_group_ids CcInstance#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * the names of the security groups. For a nondefault VPC, you must use security group IDs instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#security_groups CcInstance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Specifies whether to enable an instance launched in a VPC to perform NAT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#source_dest_check CcInstance#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktn.IResolvable;
    /**
    * The SSM document and parameter values in AWS Systems Manager to associate with this instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ssm_associations CcInstance#ssm_associations}
    */
    readonly ssmAssociations?: CcInstance.SsmAssociationProperty[] | cdktn.IResolvable;
    /**
    * [EC2-VPC] The ID of the subnet to launch the instance into.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#subnet_id CcInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * The tags to add to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#tags CcInstance#tags}
    */
    readonly tags?: CcInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#tenancy CcInstance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * The user data to make available to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#user_data CcInstance#user_data}
    */
    readonly userData?: string;
    /**
    * The volumes to attach to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volumes CcInstance#volumes}
    */
    readonly volumes?: CcInstance.VolumeProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance awscc_ec2_instance}
*/
export class CcInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstance to import
    * @param importFromId The id of the existing CcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance awscc_ec2_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_instance',
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
        this._additionalInfo = config.additionalInfo;
        this._affinity = config.affinity;
        this._availabilityZone = config.availabilityZone;
        this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
        this._cpuOptions.internalValue = config.cpuOptions;
        this._creditSpecification.internalValue = config.creditSpecification;
        this._disableApiTermination = config.disableApiTermination;
        this._ebsOptimized = config.ebsOptimized;
        this._elasticGpuSpecifications.internalValue = config.elasticGpuSpecifications;
        this._elasticInferenceAccelerators.internalValue = config.elasticInferenceAccelerators;
        this._enclaveOptions.internalValue = config.enclaveOptions;
        this._hibernationOptions.internalValue = config.hibernationOptions;
        this._hostId = config.hostId;
        this._hostResourceGroupArn = config.hostResourceGroupArn;
        this._iamInstanceProfile = config.iamInstanceProfile;
        this._imageId = config.imageId;
        this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        this._instanceType = config.instanceType;
        this._ipv6AddressCount = config.ipv6AddressCount;
        this._ipv6Addresses.internalValue = config.ipv6Addresses;
        this._kernelId = config.kernelId;
        this._keyName = config.keyName;
        this._launchTemplate.internalValue = config.launchTemplate;
        this._licenseSpecifications.internalValue = config.licenseSpecifications;
        this._metadataOptions.internalValue = config.metadataOptions;
        this._monitoring = config.monitoring;
        this._networkInterfaces.internalValue = config.networkInterfaces;
        this._placementGroupName = config.placementGroupName;
        this._privateDnsNameOptions.internalValue = config.privateDnsNameOptions;
        this._privateIpAddress = config.privateIpAddress;
        this._propagateTagsToVolumeOnCreation = config.propagateTagsToVolumeOnCreation;
        this._ramdiskId = config.ramdiskId;
        this._securityGroupIds = config.securityGroupIds;
        this._securityGroups = config.securityGroups;
        this._sourceDestCheck = config.sourceDestCheck;
        this._ssmAssociations.internalValue = config.ssmAssociations;
        this._subnetId = config.subnetId;
        this._tags.internalValue = config.tags;
        this._tenancy = config.tenancy;
        this._userData = config.userData;
        this._volumes.internalValue = config.volumes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_info - computed: true, optional: true, required: false
    private _additionalInfo?: string; 
    public get additionalInfo() {
        return this.getStringAttribute('additional_info');
    }
    public set additionalInfo(value: string) {
        this._additionalInfo = value;
    }
    public resetAdditionalInfo() {
        this._additionalInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInfoInput() {
        return this._additionalInfo;
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

    // block_device_mappings - computed: true, optional: true, required: false
    private _blockDeviceMappings = new CcInstance.BlockDeviceMappingPropertyList(this, "block_device_mappings", false);
    public get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    public putBlockDeviceMappings(value: CcInstance.BlockDeviceMappingProperty[] | cdktn.IResolvable) {
        this._blockDeviceMappings.internalValue = value;
    }
    public resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
    }

    // cpu_options - computed: true, optional: true, required: false
    private _cpuOptions = new CcInstance.CpuOptionsPropertyOutputReference(this, "cpu_options");
    public get cpuOptions() {
        return this._cpuOptions;
    }
    public putCpuOptions(value: CcInstance.CpuOptionsProperty) {
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
    private _creditSpecification = new CcInstance.CreditSpecificationPropertyOutputReference(this, "credit_specification");
    public get creditSpecification() {
        return this._creditSpecification;
    }
    public putCreditSpecification(value: CcInstance.CreditSpecificationProperty) {
        this._creditSpecification.internalValue = value;
    }
    public resetCreditSpecification() {
        this._creditSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creditSpecificationInput() {
        return this._creditSpecification.internalValue;
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
    private _elasticGpuSpecifications = new CcInstance.ElasticGpuSpecificationPropertyList(this, "elastic_gpu_specifications", false);
    public get elasticGpuSpecifications() {
        return this._elasticGpuSpecifications;
    }
    public putElasticGpuSpecifications(value: CcInstance.ElasticGpuSpecificationProperty[] | cdktn.IResolvable) {
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
    private _elasticInferenceAccelerators = new CcInstance.ElasticInferenceAcceleratorPropertyList(this, "elastic_inference_accelerators", false);
    public get elasticInferenceAccelerators() {
        return this._elasticInferenceAccelerators;
    }
    public putElasticInferenceAccelerators(value: CcInstance.ElasticInferenceAcceleratorProperty[] | cdktn.IResolvable) {
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
    private _enclaveOptions = new CcInstance.EnclaveOptionsPropertyOutputReference(this, "enclave_options");
    public get enclaveOptions() {
        return this._enclaveOptions;
    }
    public putEnclaveOptions(value: CcInstance.EnclaveOptionsProperty) {
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
    private _hibernationOptions = new CcInstance.HibernationOptionsPropertyOutputReference(this, "hibernation_options");
    public get hibernationOptions() {
        return this._hibernationOptions;
    }
    public putHibernationOptions(value: CcInstance.HibernationOptionsProperty) {
        this._hibernationOptions.internalValue = value;
    }
    public resetHibernationOptions() {
        this._hibernationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hibernationOptionsInput() {
        return this._hibernationOptions.internalValue;
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

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
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

    // ipv_6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses = new CcInstance.InstanceIpv6AddressPropertyList(this, "ipv_6_addresses", false);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: CcInstance.InstanceIpv6AddressProperty[] | cdktn.IResolvable) {
        this._ipv6Addresses.internalValue = value;
    }
    public resetIpv6Addresses() {
        this._ipv6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
        return this._ipv6Addresses.internalValue;
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

    // launch_template - computed: true, optional: true, required: false
    private _launchTemplate = new CcInstance.LaunchTemplateSpecificationPropertyOutputReference(this, "launch_template");
    public get launchTemplate() {
        return this._launchTemplate;
    }
    public putLaunchTemplate(value: CcInstance.LaunchTemplateSpecificationProperty) {
        this._launchTemplate.internalValue = value;
    }
    public resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }

    // license_specifications - computed: true, optional: true, required: false
    private _licenseSpecifications = new CcInstance.LicenseSpecificationPropertyList(this, "license_specifications", false);
    public get licenseSpecifications() {
        return this._licenseSpecifications;
    }
    public putLicenseSpecifications(value: CcInstance.LicenseSpecificationProperty[] | cdktn.IResolvable) {
        this._licenseSpecifications.internalValue = value;
    }
    public resetLicenseSpecifications() {
        this._licenseSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseSpecificationsInput() {
        return this._licenseSpecifications.internalValue;
    }

    // metadata_options - computed: true, optional: true, required: false
    private _metadataOptions = new CcInstance.MetadataOptionsPropertyOutputReference(this, "metadata_options");
    public get metadataOptions() {
        return this._metadataOptions;
    }
    public putMetadataOptions(value: CcInstance.MetadataOptionsProperty) {
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
    private _monitoring?: boolean | cdktn.IResolvable; 
    public get monitoring() {
        return this.getBooleanAttribute('monitoring');
    }
    public set monitoring(value: boolean | cdktn.IResolvable) {
        this._monitoring = value;
    }
    public resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
        return this._monitoring;
    }

    // network_interfaces - computed: true, optional: true, required: false
    private _networkInterfaces = new CcInstance.NetworkInterfacePropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }
    public putNetworkInterfaces(value: CcInstance.NetworkInterfaceProperty[] | cdktn.IResolvable) {
        this._networkInterfaces.internalValue = value;
    }
    public resetNetworkInterfaces() {
        this._networkInterfaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfacesInput() {
        return this._networkInterfaces.internalValue;
    }

    // placement_group_name - computed: true, optional: true, required: false
    private _placementGroupName?: string; 
    public get placementGroupName() {
        return this.getStringAttribute('placement_group_name');
    }
    public set placementGroupName(value: string) {
        this._placementGroupName = value;
    }
    public resetPlacementGroupName() {
        this._placementGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupNameInput() {
        return this._placementGroupName;
    }

    // private_dns_name - computed: true, optional: false, required: false
    public get privateDnsName() {
        return this.getStringAttribute('private_dns_name');
    }

    // private_dns_name_options - computed: true, optional: true, required: false
    private _privateDnsNameOptions = new CcInstance.PrivateDnsNameOptionsPropertyOutputReference(this, "private_dns_name_options");
    public get privateDnsNameOptions() {
        return this._privateDnsNameOptions;
    }
    public putPrivateDnsNameOptions(value: CcInstance.PrivateDnsNameOptionsProperty) {
        this._privateDnsNameOptions.internalValue = value;
    }
    public resetPrivateDnsNameOptions() {
        this._privateDnsNameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsNameOptionsInput() {
        return this._privateDnsNameOptions.internalValue;
    }

    // private_ip - computed: true, optional: false, required: false
    public get privateIp() {
        return this.getStringAttribute('private_ip');
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

    // propagate_tags_to_volume_on_creation - computed: true, optional: true, required: false
    private _propagateTagsToVolumeOnCreation?: boolean | cdktn.IResolvable; 
    public get propagateTagsToVolumeOnCreation() {
        return this.getBooleanAttribute('propagate_tags_to_volume_on_creation');
    }
    public set propagateTagsToVolumeOnCreation(value: boolean | cdktn.IResolvable) {
        this._propagateTagsToVolumeOnCreation = value;
    }
    public resetPropagateTagsToVolumeOnCreation() {
        this._propagateTagsToVolumeOnCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsToVolumeOnCreationInput() {
        return this._propagateTagsToVolumeOnCreation;
    }

    // public_dns_name - computed: true, optional: false, required: false
    public get publicDnsName() {
        return this.getStringAttribute('public_dns_name');
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
        return this.getStringAttribute('public_ip');
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

    // source_dest_check - computed: true, optional: true, required: false
    private _sourceDestCheck?: boolean | cdktn.IResolvable; 
    public get sourceDestCheck() {
        return this.getBooleanAttribute('source_dest_check');
    }
    public set sourceDestCheck(value: boolean | cdktn.IResolvable) {
        this._sourceDestCheck = value;
    }
    public resetSourceDestCheck() {
        this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDestCheckInput() {
        return this._sourceDestCheck;
    }

    // ssm_associations - computed: true, optional: true, required: false
    private _ssmAssociations = new CcInstance.SsmAssociationPropertyList(this, "ssm_associations", false);
    public get ssmAssociations() {
        return this._ssmAssociations;
    }
    public putSsmAssociations(value: CcInstance.SsmAssociationProperty[] | cdktn.IResolvable) {
        this._ssmAssociations.internalValue = value;
    }
    public resetSsmAssociations() {
        this._ssmAssociations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ssmAssociationsInput() {
        return this._ssmAssociations.internalValue;
    }

    // state - computed: true, optional: false, required: false
    private _state = new CcInstance.StatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstance.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // volumes - computed: true, optional: true, required: false
    private _volumes = new CcInstance.VolumePropertyList(this, "volumes", false);
    public get volumes() {
        return this._volumes;
    }
    public putVolumes(value: CcInstance.VolumeProperty[] | cdktn.IResolvable) {
        this._volumes.internalValue = value;
    }
    public resetVolumes() {
        this._volumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumesInput() {
        return this._volumes.internalValue;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_info: cdktn.stringToTerraform(this._additionalInfo),
            affinity: cdktn.stringToTerraform(this._affinity),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            block_device_mappings: cdktn.listMapper(ccInstanceBlockDeviceMappingPropertyToTerraform, false)(this._blockDeviceMappings.internalValue),
            cpu_options: ccInstanceCpuOptionsPropertyToTerraform(this._cpuOptions.internalValue),
            credit_specification: ccInstanceCreditSpecificationPropertyToTerraform(this._creditSpecification.internalValue),
            disable_api_termination: cdktn.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktn.booleanToTerraform(this._ebsOptimized),
            elastic_gpu_specifications: cdktn.listMapper(ccInstanceElasticGpuSpecificationPropertyToTerraform, false)(this._elasticGpuSpecifications.internalValue),
            elastic_inference_accelerators: cdktn.listMapper(ccInstanceElasticInferenceAcceleratorPropertyToTerraform, false)(this._elasticInferenceAccelerators.internalValue),
            enclave_options: ccInstanceEnclaveOptionsPropertyToTerraform(this._enclaveOptions.internalValue),
            hibernation_options: ccInstanceHibernationOptionsPropertyToTerraform(this._hibernationOptions.internalValue),
            host_id: cdktn.stringToTerraform(this._hostId),
            host_resource_group_arn: cdktn.stringToTerraform(this._hostResourceGroupArn),
            iam_instance_profile: cdktn.stringToTerraform(this._iamInstanceProfile),
            image_id: cdktn.stringToTerraform(this._imageId),
            instance_initiated_shutdown_behavior: cdktn.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            ipv_6_address_count: cdktn.numberToTerraform(this._ipv6AddressCount),
            ipv_6_addresses: cdktn.listMapper(ccInstanceInstanceIpv6AddressPropertyToTerraform, false)(this._ipv6Addresses.internalValue),
            kernel_id: cdktn.stringToTerraform(this._kernelId),
            key_name: cdktn.stringToTerraform(this._keyName),
            launch_template: ccInstanceLaunchTemplateSpecificationPropertyToTerraform(this._launchTemplate.internalValue),
            license_specifications: cdktn.listMapper(ccInstanceLicenseSpecificationPropertyToTerraform, false)(this._licenseSpecifications.internalValue),
            metadata_options: ccInstanceMetadataOptionsPropertyToTerraform(this._metadataOptions.internalValue),
            monitoring: cdktn.booleanToTerraform(this._monitoring),
            network_interfaces: cdktn.listMapper(ccInstanceNetworkInterfacePropertyToTerraform, false)(this._networkInterfaces.internalValue),
            placement_group_name: cdktn.stringToTerraform(this._placementGroupName),
            private_dns_name_options: ccInstancePrivateDnsNameOptionsPropertyToTerraform(this._privateDnsNameOptions.internalValue),
            private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
            propagate_tags_to_volume_on_creation: cdktn.booleanToTerraform(this._propagateTagsToVolumeOnCreation),
            ramdisk_id: cdktn.stringToTerraform(this._ramdiskId),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            source_dest_check: cdktn.booleanToTerraform(this._sourceDestCheck),
            ssm_associations: cdktn.listMapper(ccInstanceSsmAssociationPropertyToTerraform, false)(this._ssmAssociations.internalValue),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.listMapper(ccInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            tenancy: cdktn.stringToTerraform(this._tenancy),
            user_data: cdktn.stringToTerraform(this._userData),
            volumes: cdktn.listMapper(ccInstanceVolumePropertyToTerraform, false)(this._volumes.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_info: {
                value: cdktn.stringToHclTerraform(this._additionalInfo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            affinity: {
                value: cdktn.stringToHclTerraform(this._affinity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            block_device_mappings: {
                value: cdktn.listMapperHcl(ccInstanceBlockDeviceMappingPropertyToHclTerraform, false)(this._blockDeviceMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.BlockDeviceMappingPropertyList",
            },
            cpu_options: {
                value: ccInstanceCpuOptionsPropertyToHclTerraform(this._cpuOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.CpuOptionsProperty",
            },
            credit_specification: {
                value: ccInstanceCreditSpecificationPropertyToHclTerraform(this._creditSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.CreditSpecificationProperty",
            },
            disable_api_termination: {
                value: cdktn.booleanToHclTerraform(this._disableApiTermination),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ebs_optimized: {
                value: cdktn.booleanToHclTerraform(this._ebsOptimized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            elastic_gpu_specifications: {
                value: cdktn.listMapperHcl(ccInstanceElasticGpuSpecificationPropertyToHclTerraform, false)(this._elasticGpuSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.ElasticGpuSpecificationPropertyList",
            },
            elastic_inference_accelerators: {
                value: cdktn.listMapperHcl(ccInstanceElasticInferenceAcceleratorPropertyToHclTerraform, false)(this._elasticInferenceAccelerators.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.ElasticInferenceAcceleratorPropertyList",
            },
            enclave_options: {
                value: ccInstanceEnclaveOptionsPropertyToHclTerraform(this._enclaveOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.EnclaveOptionsProperty",
            },
            hibernation_options: {
                value: ccInstanceHibernationOptionsPropertyToHclTerraform(this._hibernationOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.HibernationOptionsProperty",
            },
            host_id: {
                value: cdktn.stringToHclTerraform(this._hostId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_resource_group_arn: {
                value: cdktn.stringToHclTerraform(this._hostResourceGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            instance_initiated_shutdown_behavior: {
                value: cdktn.stringToHclTerraform(this._instanceInitiatedShutdownBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_6_address_count: {
                value: cdktn.numberToHclTerraform(this._ipv6AddressCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipv_6_addresses: {
                value: cdktn.listMapperHcl(ccInstanceInstanceIpv6AddressPropertyToHclTerraform, false)(this._ipv6Addresses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.InstanceIpv6AddressPropertyList",
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
            launch_template: {
                value: ccInstanceLaunchTemplateSpecificationPropertyToHclTerraform(this._launchTemplate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.LaunchTemplateSpecificationProperty",
            },
            license_specifications: {
                value: cdktn.listMapperHcl(ccInstanceLicenseSpecificationPropertyToHclTerraform, false)(this._licenseSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.LicenseSpecificationPropertyList",
            },
            metadata_options: {
                value: ccInstanceMetadataOptionsPropertyToHclTerraform(this._metadataOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.MetadataOptionsProperty",
            },
            monitoring: {
                value: cdktn.booleanToHclTerraform(this._monitoring),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            network_interfaces: {
                value: cdktn.listMapperHcl(ccInstanceNetworkInterfacePropertyToHclTerraform, false)(this._networkInterfaces.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.NetworkInterfacePropertyList",
            },
            placement_group_name: {
                value: cdktn.stringToHclTerraform(this._placementGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_dns_name_options: {
                value: ccInstancePrivateDnsNameOptionsPropertyToHclTerraform(this._privateDnsNameOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.PrivateDnsNameOptionsProperty",
            },
            private_ip_address: {
                value: cdktn.stringToHclTerraform(this._privateIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            propagate_tags_to_volume_on_creation: {
                value: cdktn.booleanToHclTerraform(this._propagateTagsToVolumeOnCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ramdisk_id: {
                value: cdktn.stringToHclTerraform(this._ramdiskId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            source_dest_check: {
                value: cdktn.booleanToHclTerraform(this._sourceDestCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ssm_associations: {
                value: cdktn.listMapperHcl(ccInstanceSsmAssociationPropertyToHclTerraform, false)(this._ssmAssociations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.SsmAssociationPropertyList",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.TagPropertyList",
            },
            tenancy: {
                value: cdktn.stringToHclTerraform(this._tenancy),
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
            volumes: {
                value: cdktn.listMapperHcl(ccInstanceVolumePropertyToHclTerraform, false)(this._volumes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.VolumePropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceEbsPropertyToTerraform(struct?: CcInstance.EbsProperty | cdktn.IResolvable): any {
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


export function ccInstanceEbsPropertyToHclTerraform(struct?: CcInstance.EbsProperty | cdktn.IResolvable): any {
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


export function ccInstanceBlockDeviceMappingPropertyToTerraform(struct?: CcInstance.BlockDeviceMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        ebs: ccInstanceEbsPropertyToTerraform(struct!.ebs),
        no_device: cdktn.stringToTerraform(struct!.noDevice),
        virtual_name: cdktn.stringToTerraform(struct!.virtualName),
    }
}


export function ccInstanceBlockDeviceMappingPropertyToHclTerraform(struct?: CcInstance.BlockDeviceMappingProperty | cdktn.IResolvable): any {
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
            value: ccInstanceEbsPropertyToHclTerraform(struct!.ebs),
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


export function ccInstanceCpuOptionsPropertyToTerraform(struct?: CcInstance.CpuOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        core_count: cdktn.numberToTerraform(struct!.coreCount),
        threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
    }
}


export function ccInstanceCpuOptionsPropertyToHclTerraform(struct?: CcInstance.CpuOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceCreditSpecificationPropertyToTerraform(struct?: CcInstance.CreditSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu_credits: cdktn.stringToTerraform(struct!.cpuCredits),
    }
}


export function ccInstanceCreditSpecificationPropertyToHclTerraform(struct?: CcInstance.CreditSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceElasticGpuSpecificationPropertyToTerraform(struct?: CcInstance.ElasticGpuSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccInstanceElasticGpuSpecificationPropertyToHclTerraform(struct?: CcInstance.ElasticGpuSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceElasticInferenceAcceleratorPropertyToTerraform(struct?: CcInstance.ElasticInferenceAcceleratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccInstanceElasticInferenceAcceleratorPropertyToHclTerraform(struct?: CcInstance.ElasticInferenceAcceleratorProperty | cdktn.IResolvable): any {
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


export function ccInstanceEnclaveOptionsPropertyToTerraform(struct?: CcInstance.EnclaveOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccInstanceEnclaveOptionsPropertyToHclTerraform(struct?: CcInstance.EnclaveOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceHibernationOptionsPropertyToTerraform(struct?: CcInstance.HibernationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configured: cdktn.booleanToTerraform(struct!.configured),
    }
}


export function ccInstanceHibernationOptionsPropertyToHclTerraform(struct?: CcInstance.HibernationOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceInstanceIpv6AddressPropertyToTerraform(struct?: CcInstance.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccInstanceInstanceIpv6AddressPropertyToHclTerraform(struct?: CcInstance.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
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


export function ccInstanceLaunchTemplateSpecificationPropertyToTerraform(struct?: CcInstance.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceLaunchTemplateSpecificationPropertyToHclTerraform(struct?: CcInstance.LaunchTemplateSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceLicenseSpecificationPropertyToTerraform(struct?: CcInstance.LicenseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        license_configuration_arn: cdktn.stringToTerraform(struct!.licenseConfigurationArn),
    }
}


export function ccInstanceLicenseSpecificationPropertyToHclTerraform(struct?: CcInstance.LicenseSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceMetadataOptionsPropertyToTerraform(struct?: CcInstance.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceMetadataOptionsPropertyToHclTerraform(struct?: CcInstance.MetadataOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceEnaSrdUdpSpecificationPropertyToTerraform(struct?: CcInstance.EnaSrdUdpSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ena_srd_udp_enabled: cdktn.booleanToTerraform(struct!.enaSrdUdpEnabled),
    }
}


export function ccInstanceEnaSrdUdpSpecificationPropertyToHclTerraform(struct?: CcInstance.EnaSrdUdpSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceEnaSrdSpecificationPropertyToTerraform(struct?: CcInstance.EnaSrdSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ena_srd_enabled: cdktn.booleanToTerraform(struct!.enaSrdEnabled),
        ena_srd_udp_specification: ccInstanceEnaSrdUdpSpecificationPropertyToTerraform(struct!.enaSrdUdpSpecification),
    }
}


export function ccInstanceEnaSrdSpecificationPropertyToHclTerraform(struct?: CcInstance.EnaSrdSpecificationProperty | cdktn.IResolvable): any {
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
            value: ccInstanceEnaSrdUdpSpecificationPropertyToHclTerraform(struct!.enaSrdUdpSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "EnaSrdUdpSpecificationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceIpv6AddressesPropertyToTerraform(struct?: CcInstance.Ipv6AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccInstanceIpv6AddressesPropertyToHclTerraform(struct?: CcInstance.Ipv6AddressesProperty | cdktn.IResolvable): any {
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


export function ccInstancePrivateIpAddressSpecificationPropertyToTerraform(struct?: CcInstance.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    }
}


export function ccInstancePrivateIpAddressSpecificationPropertyToHclTerraform(struct?: CcInstance.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
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


export function ccInstanceNetworkInterfacePropertyToTerraform(struct?: CcInstance.NetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        associate_carrier_ip_address: cdktn.booleanToTerraform(struct!.associateCarrierIpAddress),
        associate_public_ip_address: cdktn.booleanToTerraform(struct!.associatePublicIpAddress),
        delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
        description: cdktn.stringToTerraform(struct!.description),
        device_index: cdktn.stringToTerraform(struct!.deviceIndex),
        ena_srd_specification: ccInstanceEnaSrdSpecificationPropertyToTerraform(struct!.enaSrdSpecification),
        group_set: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupSet),
        ipv_6_address_count: cdktn.numberToTerraform(struct!.ipv6AddressCount),
        ipv_6_addresses: cdktn.listMapper(ccInstanceIpv6AddressesPropertyToTerraform, false)(struct!.ipv6Addresses),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
        private_ip_addresses: cdktn.listMapper(ccInstancePrivateIpAddressSpecificationPropertyToTerraform, false)(struct!.privateIpAddresses),
        secondary_private_ip_address_count: cdktn.numberToTerraform(struct!.secondaryPrivateIpAddressCount),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccInstanceNetworkInterfacePropertyToHclTerraform(struct?: CcInstance.NetworkInterfaceProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.deviceIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ena_srd_specification: {
            value: ccInstanceEnaSrdSpecificationPropertyToHclTerraform(struct!.enaSrdSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "EnaSrdSpecificationProperty",
        },
        group_set: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupSet),
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
            value: cdktn.listMapperHcl(ccInstanceIpv6AddressesPropertyToHclTerraform, false)(struct!.ipv6Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "Ipv6AddressesPropertyList",
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
            value: cdktn.listMapperHcl(ccInstancePrivateIpAddressSpecificationPropertyToHclTerraform, false)(struct!.privateIpAddresses),
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


export function ccInstancePrivateDnsNameOptionsPropertyToTerraform(struct?: CcInstance.PrivateDnsNameOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstancePrivateDnsNameOptionsPropertyToHclTerraform(struct?: CcInstance.PrivateDnsNameOptionsProperty | cdktn.IResolvable): any {
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


export function ccInstanceAssociationParameterPropertyToTerraform(struct?: CcInstance.AssociationParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
    }
}


export function ccInstanceAssociationParameterPropertyToHclTerraform(struct?: CcInstance.AssociationParameterProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceSsmAssociationPropertyToTerraform(struct?: CcInstance.SsmAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        association_parameters: cdktn.listMapper(ccInstanceAssociationParameterPropertyToTerraform, false)(struct!.associationParameters),
        document_name: cdktn.stringToTerraform(struct!.documentName),
    }
}


export function ccInstanceSsmAssociationPropertyToHclTerraform(struct?: CcInstance.SsmAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        association_parameters: {
            value: cdktn.listMapperHcl(ccInstanceAssociationParameterPropertyToHclTerraform, false)(struct!.associationParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AssociationParameterPropertyList",
        },
        document_name: {
            value: cdktn.stringToHclTerraform(struct!.documentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStatePropertyToTerraform(struct?: CcInstance.StateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInstanceStatePropertyToHclTerraform(struct?: CcInstance.StateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInstanceTagPropertyToTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceTagPropertyToHclTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
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


export function ccInstanceVolumePropertyToTerraform(struct?: CcInstance.VolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device: cdktn.stringToTerraform(struct!.device),
        volume_id: cdktn.stringToTerraform(struct!.volumeId),
    }
}


export function ccInstanceVolumePropertyToHclTerraform(struct?: CcInstance.VolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device: {
            value: cdktn.stringToHclTerraform(struct!.device),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInstance {
export interface EbsProperty {
    /**
    * Indicates whether the EBS volume is deleted on instance termination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#delete_on_termination CcInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the volume should be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#encrypted CcInstance#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#iops CcInstance#iops}
    */
    readonly iops?: number;
    /**
    * The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#kms_key_id CcInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The ID of the snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#snapshot_id CcInstance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_size CcInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * The volume type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_type CcInstance#volume_type}
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
    * The device name (for example, /dev/sdh or xvdh).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device_name CcInstance#device_name}
    */
    readonly deviceName?: string;
    /**
    * Parameters used to automatically set up EBS volumes when the instance is launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ebs CcInstance#ebs}
    */
    readonly ebs?: EbsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#no_device CcInstance#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#virtual_name CcInstance#virtual_name}
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
export interface CpuOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#core_count CcInstance#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#threads_per_core CcInstance#threads_per_core}
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
export interface CreditSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#cpu_credits CcInstance#cpu_credits}
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
    * The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#type CcInstance#type}
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
export interface ElasticInferenceAcceleratorProperty {
    /**
    * The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#count CcInstance#count}
    */
    readonly count?: number;
    /**
    * The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#type CcInstance#type}
    */
    readonly type?: string;
}
export class ElasticInferenceAcceleratorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ElasticInferenceAcceleratorProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ElasticInferenceAcceleratorProperty | cdktn.IResolvable | undefined) {
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

export class ElasticInferenceAcceleratorPropertyList extends cdktn.ComplexList {
    public internalValue? : ElasticInferenceAcceleratorProperty[] | cdktn.IResolvable

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
    public get(index: number): ElasticInferenceAcceleratorPropertyOutputReference {
        return new ElasticInferenceAcceleratorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnclaveOptionsProperty {
    /**
    * If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enabled CcInstance#enabled}
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
    * If you set this parameter to true, your instance is enabled for hibernation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#configured CcInstance#configured}
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
export interface InstanceIpv6AddressProperty {
    /**
    * The IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address CcInstance#ipv_6_address}
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
export interface LaunchTemplateSpecificationProperty {
    /**
    * The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template_id CcInstance#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template_name CcInstance#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * The version number of the launch template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#version CcInstance#version}
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
export interface LicenseSpecificationProperty {
    /**
    * The Amazon Resource Name (ARN) of the license configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#license_configuration_arn CcInstance#license_configuration_arn}
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
export interface MetadataOptionsProperty {
    /**
    * Enables or disables the HTTP metadata endpoint on your instances. If you specify a value of disabled, you cannot access your instance metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_endpoint CcInstance#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Enables or disables the IPv6 endpoint for the instance metadata service. To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_protocol_ipv_6 CcInstance#http_protocol_ipv_6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * The number of network hops that the metadata token can travel. Maximum is 64.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_put_response_hop_limit CcInstance#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Indicates whether IMDSv2 is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_tokens CcInstance#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Indicates whether tags from the instance are propagated to the EBS volumes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_metadata_tags CcInstance#instance_metadata_tags}
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
export interface EnaSrdUdpSpecificationProperty {
    /**
    * Indicates whether UDP traffic uses ENA Express for your instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_udp_enabled CcInstance#ena_srd_udp_enabled}
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
    * Specifies whether ENA Express is enabled for the network interface when you launch an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_enabled CcInstance#ena_srd_enabled}
    */
    readonly enaSrdEnabled?: boolean | cdktn.IResolvable;
    /**
    * Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_udp_specification CcInstance#ena_srd_udp_specification}
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
export interface Ipv6AddressesProperty {
    /**
    * The IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address CcInstance#ipv_6_address}
    */
    readonly ipv6Address?: string;
}
export class Ipv6AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv6AddressesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: Ipv6AddressesProperty | cdktn.IResolvable | undefined) {
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

export class Ipv6AddressesPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv6AddressesProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv6AddressesPropertyOutputReference {
        return new Ipv6AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrivateIpAddressSpecificationProperty {
    /**
    * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#primary CcInstance#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * The private IPv4 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address CcInstance#private_ip_address}
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
export interface NetworkInterfaceProperty {
    /**
    * Not currently supported by AWS CloudFormation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#associate_carrier_ip_address CcInstance#associate_carrier_ip_address}
    */
    readonly associateCarrierIpAddress?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#associate_public_ip_address CcInstance#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
    /**
    * If set to true, the interface is deleted when the instance is terminated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#delete_on_termination CcInstance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktn.IResolvable;
    /**
    * The description of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#description CcInstance#description}
    */
    readonly description?: string;
    /**
    * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device_index CcInstance#device_index}
    */
    readonly deviceIndex?: string;
    /**
    * Specifies the ENA Express settings for the network interface that's attached to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_specification CcInstance#ena_srd_specification}
    */
    readonly enaSrdSpecification?: EnaSrdSpecificationProperty;
    /**
    * The IDs of the security groups for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#group_set CcInstance#group_set}
    */
    readonly groupSet?: string[];
    /**
    * A number of IPv6 addresses to assign to the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address_count CcInstance#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * The IPv6 addresses associated with the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_addresses CcInstance#ipv_6_addresses}
    */
    readonly ipv6Addresses?: Ipv6AddressesProperty[] | cdktn.IResolvable;
    /**
    * The ID of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#network_interface_id CcInstance#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * The private IPv4 address of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address CcInstance#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * One or more private IPv4 addresses to assign to the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_addresses CcInstance#private_ip_addresses}
    */
    readonly privateIpAddresses?: PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The number of secondary private IPv4 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#secondary_private_ip_address_count CcInstance#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * The ID of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#subnet_id CcInstance#subnet_id}
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
        if (this._groupSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupSet = this._groupSet;
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
            this._deleteOnTermination = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._enaSrdSpecification.internalValue = undefined;
            this._groupSet = undefined;
            this._ipv6AddressCount = undefined;
            this._ipv6Addresses.internalValue = undefined;
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
            this._associateCarrierIpAddress = value.associateCarrierIpAddress;
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._deleteOnTermination = value.deleteOnTermination;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._enaSrdSpecification.internalValue = value.enaSrdSpecification;
            this._groupSet = value.groupSet;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._ipv6Addresses.internalValue = value.ipv6Addresses;
            this._networkInterfaceId = value.networkInterfaceId;
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
    private _deviceIndex?: string; 
    public get deviceIndex() {
        return this.getStringAttribute('device_index');
    }
    public set deviceIndex(value: string) {
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

    // group_set - computed: true, optional: true, required: false
    private _groupSet?: string[]; 
    public get groupSet() {
        return this.getListAttribute('group_set');
    }
    public set groupSet(value: string[]) {
        this._groupSet = value;
    }
    public resetGroupSet() {
        this._groupSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupSetInput() {
        return this._groupSet;
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
    private _ipv6Addresses = new Ipv6AddressesPropertyList(this, "ipv_6_addresses", false);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: Ipv6AddressesProperty[] | cdktn.IResolvable) {
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
export interface PrivateDnsNameOptionsProperty {
    /**
    * Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record CcInstance#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record CcInstance#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
    /**
    * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#hostname_type CcInstance#hostname_type}
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
export interface AssociationParameterProperty {
    /**
    * The name of an input parameter that is in the associated SSM document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key CcInstance#key}
    */
    readonly key?: string;
    /**
    * The value of an input parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#value CcInstance#value}
    */
    readonly value?: string[];
}
export class AssociationParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssociationParameterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AssociationParameterProperty | cdktn.IResolvable | undefined) {
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
    private _value?: string[]; 
    public get value() {
        return this.getListAttribute('value');
    }
    public set value(value: string[]) {
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

export class AssociationParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : AssociationParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): AssociationParameterPropertyOutputReference {
        return new AssociationParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SsmAssociationProperty {
    /**
    * The input parameter values to use with the associated SSM document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#association_parameters CcInstance#association_parameters}
    */
    readonly associationParameters?: AssociationParameterProperty[] | cdktn.IResolvable;
    /**
    * The name of an SSM document to associate with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#document_name CcInstance#document_name}
    */
    readonly documentName?: string;
}
export class SsmAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SsmAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._associationParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.associationParameters = this._associationParameters?.internalValue;
        }
        if (this._documentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentName = this._documentName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsmAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associationParameters.internalValue = undefined;
            this._documentName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associationParameters.internalValue = value.associationParameters;
            this._documentName = value.documentName;
        }
    }

    // association_parameters - computed: true, optional: true, required: false
    private _associationParameters = new AssociationParameterPropertyList(this, "association_parameters", false);
    public get associationParameters() {
        return this._associationParameters;
    }
    public putAssociationParameters(value: AssociationParameterProperty[] | cdktn.IResolvable) {
        this._associationParameters.internalValue = value;
    }
    public resetAssociationParameters() {
        this._associationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associationParametersInput() {
        return this._associationParameters.internalValue;
    }

    // document_name - computed: true, optional: true, required: false
    private _documentName?: string; 
    public get documentName() {
        return this.getStringAttribute('document_name');
    }
    public set documentName(value: string) {
        this._documentName = value;
    }
    public resetDocumentName() {
        this._documentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentNameInput() {
        return this._documentName;
    }
}

export class SsmAssociationPropertyList extends cdktn.ComplexList {
    public internalValue? : SsmAssociationProperty[] | cdktn.IResolvable

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
    public get(index: number): SsmAssociationPropertyOutputReference {
        return new SsmAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StateProperty {
}
export class StatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StateProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key CcInstance#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#value CcInstance#value}
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
export interface VolumeProperty {
    /**
    * The device name (for example, /dev/sdh or xvdh).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device CcInstance#device}
    */
    readonly device?: string;
    /**
    * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_id CcInstance#volume_id}
    */
    readonly volumeId?: string;
}
export class VolumePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VolumeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._device !== undefined) {
            hasAnyValues = true;
            internalValueResult.device = this._device;
        }
        if (this._volumeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeId = this._volumeId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VolumeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._device = undefined;
            this._volumeId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._device = value.device;
            this._volumeId = value.volumeId;
        }
    }

    // device - computed: true, optional: true, required: false
    private _device?: string; 
    public get device() {
        return this.getStringAttribute('device');
    }
    public set device(value: string) {
        this._device = value;
    }
    public resetDevice() {
        this._device = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceInput() {
        return this._device;
    }

    // volume_id - computed: true, optional: true, required: false
    private _volumeId?: string; 
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }
    public set volumeId(value: string) {
        this._volumeId = value;
    }
    public resetVolumeId() {
        this._volumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeIdInput() {
        return this._volumeId;
    }
}

export class VolumePropertyList extends cdktn.ComplexList {
    public internalValue? : VolumeProperty[] | cdktn.IResolvable

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
    public get(index: number): VolumePropertyOutputReference {
        return new VolumePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
